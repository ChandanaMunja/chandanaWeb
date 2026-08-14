import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const lat = searchParams.get("lat")
    const lng = searchParams.get("lng")

    if (!lat || !lng) {
      return NextResponse.json(
        {
          success: false,
          message: "Latitude and longitude are required",
        },
        { status: 400 }
      )
    }

   const apiUrl =
  `http://srv1617582.hstgr.cloud:8084/api/fm/outlets/customer/nearby` +
  `?lat=${encodeURIComponent(lat)}` +
  `&lng=${encodeURIComponent(lng)}`

  console.log("Nearby API URL:", apiUrl)
console.log(
  "Token exists:",
  !!process.env.OUTLETS_API_TOKEN
)
    console.log("Calling:", apiUrl)

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        accept: "*/*",
        Authorization: process.env.OUTLETS_API_TOKEN!,
      },
      cache: "no-store",
    })

    const data = await response.json()

    console.log("Backend status:", response.status)
    console.log("Backend response:", data)

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Nearby outlets API failed",
          data,
        },
        { status: response.status }
      )
    }

    return NextResponse.json(data)
    
  } catch (error) {
    console.error("Nearby route error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch nearby outlets",
      },
      { status: 500 }
    )
  }
}