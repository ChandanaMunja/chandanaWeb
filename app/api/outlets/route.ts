import { NextResponse } from "next/server"

export async function GET() {
  try {
    const apiUrl =
      "http://srv1617582.hstgr.cloud:8084/api/fm/outlets"

 
const response = await fetch(apiUrl, {
  method: "GET",
  headers: {
    accept: "*/*",
  },
  cache: "no-store",
})

    const data = await response.json()

    console.log("ALL OUTLETS STATUS:", response.status)
    console.log("ALL OUTLETS RESPONSE:", data)

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to fetch outlets",
          backendStatus: response.status,
          backendResponse: data,
        },
        { status: response.status }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("OUTLETS API ERROR:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch outlets",
        error: String(error),
      },
      { status: 500 }
    )
  }
}