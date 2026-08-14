export type ParsedAddress = {
  suburb?: string
  neighbourhood?: string
  city?: string
  state?: string
  country?: string
  postal_code?: string
}

export type LocationResult = {
  displayName: string
  formattedAddress: string
  lat: number
  lng: number
  address: ParsedAddress
}

type GoogleAddressComponent = {
  long_name: string
  short_name: string
  types: string[]
}

type GoogleGeocodeResult = {
  formatted_address: string
  address_components: GoogleAddressComponent[]
  geometry: {
    location: {
      lat: number
      lng: number
    }
  }
}

type GoogleGeocodeResponse = {
  status: string
  results: GoogleGeocodeResult[]
  error_message?: string
}

type GoogleAutocompletePrediction = {
  place_id: string
  description: string
  structured_formatting?: {
    main_text: string
    secondary_text: string
  }
}

type GoogleAutocompleteResponse = {
  status: string
  predictions: GoogleAutocompletePrediction[]
  error_message?: string
}

type GooglePlaceDetailsResponse = {
  status: string
  result?: GoogleGeocodeResult & { name?: string }
  error_message?: string
}

const HYDERABAD_LAT = 17.385
const HYDERABAD_LNG = 78.4867
const SEARCH_RADIUS_METERS = 50000

export function getGoogleMapsApiKey() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY

  if (!apiKey) {
    throw new Error("GOOGLE_MAPS_API_KEY is not configured")
  }

  return apiKey
}

function getComponent(
  components: GoogleAddressComponent[],
  ...types: string[]
) {
  for (const type of types) {
    const match = components.find((component) => component.types.includes(type))

    if (match) {
      return match.long_name
    }
  }

  return undefined
}

export function parseAddressComponents(
  components: GoogleAddressComponent[]
): ParsedAddress {
  return {
    suburb: getComponent(
      components,
      "sublocality_level_1",
      "sublocality",
      "neighborhood"
    ),
    neighbourhood: getComponent(
      components,
      "neighborhood",
      "sublocality_level_2",
      "sublocality_level_3"
    ),
    city: getComponent(components, "locality", "administrative_area_level_2"),
    state: getComponent(components, "administrative_area_level_1"),
    country: getComponent(components, "country"),
    postal_code: getComponent(components, "postal_code"),
  }
}

export function getLocationDisplayName(address: ParsedAddress) {
  return (
    address.suburb ||
    address.neighbourhood ||
    address.city ||
    address.state ||
    "Location detected"
  )
}

function toLocationResult(result: GoogleGeocodeResult): LocationResult {
  const address = parseAddressComponents(result.address_components)

  return {
    displayName: getLocationDisplayName(address),
    formattedAddress: result.formatted_address,
    lat: result.geometry.location.lat,
    lng: result.geometry.location.lng,
    address,
  }
}

export async function reverseGeocode(
  lat: string,
  lng: string
): Promise<LocationResult> {
  const apiKey = getGoogleMapsApiKey()

  const url = new URL("https://maps.googleapis.com/maps/api/geocode/json")
  url.searchParams.set("latlng", `${lat},${lng}`)
  url.searchParams.set("key", apiKey)
  url.searchParams.set("language", "en")
  url.searchParams.set("region", "in")

  const response = await fetch(url.toString(), { cache: "no-store" })
  const data = (await response.json()) as GoogleGeocodeResponse

  if (!response.ok || data.status !== "OK" || !data.results[0]) {
    throw new Error(data.error_message || "Reverse geocoding failed")
  }

  return toLocationResult(data.results[0])
}

export async function autocompletePlaces(input: string) {
  const apiKey = getGoogleMapsApiKey()

  const url = new URL(
    "https://maps.googleapis.com/maps/api/place/autocomplete/json"
  )
  url.searchParams.set("input", input)
  url.searchParams.set("key", apiKey)
  url.searchParams.set("components", "country:in")
  url.searchParams.set("location", `${HYDERABAD_LAT},${HYDERABAD_LNG}`)
  url.searchParams.set("radius", String(SEARCH_RADIUS_METERS))
  url.searchParams.set("language", "en")

  const response = await fetch(url.toString(), { cache: "no-store" })
  const data = (await response.json()) as GoogleAutocompleteResponse

  if (!response.ok) {
    throw new Error(data.error_message || "Location search failed")
  }

  if (data.status !== "OK" && data.status !== "ZERO_RESULTS") {
    throw new Error(data.error_message || "Location search failed")
  }

  return (data.predictions ?? []).map((prediction) => ({
    placeId: prediction.place_id,
    description: prediction.description,
    mainText: prediction.structured_formatting?.main_text ?? prediction.description,
    secondaryText: prediction.structured_formatting?.secondary_text ?? "",
  }))
}

export async function getPlaceDetails(placeId: string): Promise<LocationResult> {
  const apiKey = getGoogleMapsApiKey()

  const url = new URL(
    "https://maps.googleapis.com/maps/api/place/details/json"
  )
  url.searchParams.set("place_id", placeId)
  url.searchParams.set(
    "fields",
    "geometry,formatted_address,address_components,name"
  )
  url.searchParams.set("key", apiKey)
  url.searchParams.set("language", "en")

  const response = await fetch(url.toString(), { cache: "no-store" })
  const data = (await response.json()) as GooglePlaceDetailsResponse

  if (!response.ok || data.status !== "OK" || !data.result) {
    throw new Error(data.error_message || "Failed to fetch place details")
  }

  return toLocationResult(data.result)
}
