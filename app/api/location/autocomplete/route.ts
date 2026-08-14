import { NextResponse } from "next/server"
import { autocompletePlaces } from "@/lib/google-maps"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const input = searchParams.get("input")?.trim()

    if (!input) {
      return NextResponse.json(
        {
          success: false,
          message: "Search input is required",
        },
        { status: 400 }
      )
    }

    if (input.length < 2) {
      return NextResponse.json({
        success: true,
        predictions: [],
      })
    }

    const predictions = await autocompletePlaces(input)

    return NextResponse.json({
      success: true,
      predictions,
    })
  } catch (error) {
    console.error("Location autocomplete error:", error)

    const message =
      error instanceof Error ? error.message : "Unable to search locations"

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
