import { NextResponse } from "next/server"
import { reverseGeocode } from "@/lib/google-maps"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    const lat = searchParams.get("lat")
    const lon = searchParams.get("lon")

    if (!lat || !lon) {
      return NextResponse.json(
        {
          success: false,
          message: "Latitude and longitude are required",
        },
        { status: 400 }
      )
    }

    const location = await reverseGeocode(lat, lon)

    return NextResponse.json({  
      success: true,
      displayName: location.displayName,
      formattedAddress: location.formattedAddress,
      lat: location.lat,
      lng: location.lng,
      address: location.address,
    })
  } catch (error) {
    console.error("Reverse geocoding error:", error)

    const message =
      error instanceof Error ? error.message : "Unable to determine location"

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
