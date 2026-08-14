import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const outletId = searchParams.get("outletId")

    if (!outletId) {
      return NextResponse.json(
        {
          success: false,
          message: "outletId is required",
        },
        { status: 400 }
      )
    }

    const apiUrl =
  `http://srv1617582.hstgr.cloud:8084/api/fm/outlets/getOutletDetails` +
  `?outletId=${encodeURIComponent(outletId)}` +
  `&userType=customer`

    console.log("Restaurant details API:", apiUrl)

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        accept: "*/*",
        Authorization: process.env.OUTLETS_API_TOKEN!,
      },
      cache: "no-store",
    })

    const data = await response.json()

    console.log("Restaurant details status:", response.status)
    console.log("Restaurant details response:", data)

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to fetch restaurant details",
          data,
        },
        { status: response.status }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Restaurant details route error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch restaurant details",
      },
      { status: 500 }
    )
  }
}