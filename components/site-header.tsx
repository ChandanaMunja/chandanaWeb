"use client"

import { useEffect, useRef, useState } from "react"
import {
  ArrowUpRight,
  ChevronDown,
  Loader2,
  MapPin,
  Search,
} from "lucide-react"

const NAV = [
  { label: "Restaurants", href: "/restaurants" },
  { label: "About", href: "/#manifesto" },
  { label: "Contact", href: "/#footer" },
]

type LocationPrediction = {
  placeId: string
  description: string
  mainText: string
  secondaryText: string
}

type LocationResponse = {
  success: boolean
  displayName?: string
  formattedAddress?: string
  lat?: number
  lng?: number
  message?: string
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [locationOpen, setLocationOpen] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState("Location")
  const [searchQuery, setSearchQuery] = useState("")
  const [predictions, setPredictions] = useState<LocationPrediction[]>([])
  const [isLocating, setIsLocating] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [isSelectingPlace, setIsSelectingPlace] = useState(false)
  const locationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    if (!locationOpen) {
      return
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        locationRef.current &&
        !locationRef.current.contains(event.target as Node)
      ) {
        setLocationOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [locationOpen])

  useEffect(() => {
    if (!locationOpen) {
      setSearchQuery("")
      setPredictions([])
      return
    }
  }, [locationOpen])

  useEffect(() => {
    const query = searchQuery.trim()

    if (query.length < 2) {
      setPredictions([])
      setIsSearching(false)
      return
    }

    const controller = new AbortController()
    const timeoutId = window.setTimeout(async () => {
      setIsSearching(true)

      try {
        const response = await fetch(
          `/api/location/autocomplete?input=${encodeURIComponent(query)}`,
          { cache: "no-store", signal: controller.signal }
        )
        const result = await response.json()

        if (!response.ok || !result.success) {
          throw new Error(result.message || "Failed to search locations")
        }

        setPredictions(result.predictions ?? [])
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return
        }

        console.error("Location search error:", error)
        setPredictions([])
      } finally {
        setIsSearching(false)
      }
    }, 300)

    return () => {
      controller.abort()
      window.clearTimeout(timeoutId)
    }
  }, [searchQuery])

  const applyLocation = (location: LocationResponse) => {
    if (!location.displayName) {
      throw new Error("Location name unavailable")
    }

    setSelectedLocation(location.displayName)
    setLocationOpen(false)
    setSearchQuery("")
    setPredictions([])
  }

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Location is not supported by your browser.")
      return
    }

    setIsLocating(true)

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords

        try {
          const response = await fetch(
            `/api/location/reverse?lat=${latitude}&lon=${longitude}`,
            { cache: "no-store" }
          )
          const result = (await response.json()) as LocationResponse

          if (!response.ok || !result.success) {
            throw new Error(result.message || "Failed to get location")
          }

          applyLocation(result)
        } catch (error) {
          console.error("Location name error:", error)
          alert("Could not determine your current location.")
        } finally {
          setIsLocating(false)
        }
      },
      (error) => {
        console.error("GPS error:", error)
        alert("Please allow location access.")
        setIsLocating(false)
      },
      {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 0,
      }
    )
  }

  const selectPrediction = async (prediction: LocationPrediction) => {
    setIsSelectingPlace(true)

    try {
      const response = await fetch(
        `/api/location/place?placeId=${encodeURIComponent(prediction.placeId)}`,
        { cache: "no-store" }
      )
      const result = (await response.json()) as LocationResponse

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to fetch place details")
      }

      applyLocation(result)
    } catch (error) {
      console.error("Place selection error:", error)
      alert("Could not select that location. Please try again.")
    } finally {
      setIsSelectingPlace(false)
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a
          href="#top"
          className="font-display text-xl font-extrabold tracking-tight"
        >
          <span className="text-primary">•</span> JIPPY
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-display text-sm font-semibold uppercase tracking-widest text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative" ref={locationRef}>
            <button
              type="button"
              onClick={() => setLocationOpen(!locationOpen)}
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground/90 transition-colors hover:border-foreground/40"
            >
              <MapPin className="h-4 w-4 text-primary" />
              <span className="max-w-[140px] truncate">{selectedLocation}</span>
              <ChevronDown
                className={`h-4 w-4 text-muted-foreground transition-transform ${
                  locationOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {locationOpen && (
              <div className="absolute right-0 top-14 z-50 w-80 rounded-2xl border border-border bg-background p-5 shadow-2xl">
                <h3 className="font-display text-lg font-bold">
                  Choose your location
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Select your delivery location
                </p>

                <button
                  type="button"
                  onClick={getCurrentLocation}
                  disabled={isLocating || isSelectingPlace}
                  className="mt-5 flex w-full items-center gap-3 rounded-xl border border-border p-3 text-left transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLocating ? (
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                  ) : (
                    <MapPin className="h-5 w-5 text-primary" />
                  )}

                  <div>
                    <div className="font-semibold">
                      {isLocating ? "Detecting location..." : "Use current location"}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Detect your location automatically
                    </div>
                  </div>
                </button>

                <div className="relative mt-3">
                  <div className="flex items-center gap-3 rounded-xl border border-border px-3 py-2.5">
                    {isSearching ? (
                      <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                    ) : (
                      <Search className="h-4 w-4 text-muted-foreground" />
                    )}

                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Search area or street"
                      disabled={isSelectingPlace}
                      className="w-full bg-transparent text-sm outline-none disabled:cursor-not-allowed"
                    />
                  </div>

                  {predictions.length > 0 && (
                    <div className="absolute inset-x-0 top-[calc(100%+8px)] z-10 max-h-56 overflow-y-auto rounded-xl border border-border bg-background shadow-xl">
                      {predictions.map((prediction) => (
                        <button
                          key={prediction.placeId}
                          type="button"
                          onClick={() => selectPrediction(prediction)}
                          disabled={isSelectingPlace}
                          className="flex w-full items-start gap-3 border-b border-border px-3 py-3 text-left transition-colors last:border-b-0 hover:bg-muted disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <div className="min-w-0">
                            <div className="truncate text-sm font-medium">
                              {prediction.mainText}
                            </div>
                            {prediction.secondaryText && (
                              <div className="truncate text-xs text-muted-foreground">
                                {prediction.secondaryText}
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {searchQuery.trim().length >= 2 &&
                    !isSearching &&
                    predictions.length === 0 && (
                      <p className="mt-2 text-xs text-muted-foreground">
                        No locations found. Try a nearby area or street.
                      </p>
                    )}
                </div>
              </div>
            )}
          </div>

          <a
            href="#footer"
            className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            Get the App
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </header>
  )
}
