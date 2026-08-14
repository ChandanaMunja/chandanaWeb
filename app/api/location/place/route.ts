import { NextResponse } from "next/server"
import { getPlaceDetails } from "@/lib/google-maps"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const placeId = searchParams.get("placeId")?.trim()

    if (!placeId) {
      return NextResponse.json(
        {
          success: false,
          message: "Place ID is required",
        },
        { status: 400 }
      )
    }

    const location = await getPlaceDetails(placeId)

    return NextResponse.json({
      success: true,
      displayName: location.displayName,
      formattedAddress: location.formattedAddress,
      lat: location.lat,
      lng: location.lng,
      address: location.address,
    })
  } catch (error) {
    console.error("Place details error:", error)

    const message =
      error instanceof Error ? error.message : "Unable to fetch place details"

    const status = message.includes("GOOGLE_MAPS_API_KEY") ? 503 : 500

    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status }
    )
  }
}
