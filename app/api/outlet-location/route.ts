import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const stateId = searchParams.get("stateId")
    const areaId = searchParams.get("areaId")

    if (!stateId || !areaId) {
      return NextResponse.json(
        {
          success: false,
          message: "stateId and areaId are required",
        },
        { status: 400 }
      )
    }

  const baseUrl =
  process.env.OUTLETS_API_BASE_URL ||
  "http://srv1617582.hstgr.cloud:8084"

const token = process.env.OUTLETS_API_TOKEN

    if (!baseUrl || !token) {
      return NextResponse.json(
        {
          success: false,
          message: "API configuration is missing",
        },
        { status: 500 }
      )
    }

    const headers = {
      accept: "*/*",
      Authorization: token,
    }

    // -----------------------------------------
    // 1. Get cities belonging to the state
    // -----------------------------------------

    const cityResponse = await fetch(
      `${baseUrl}/api/fm/location/fetchCityInState?stateId=${stateId}`,
      {
        headers,
        cache: "no-store",
      }
    )

    if (!cityResponse.ok) {
      throw new Error(
        `City API error: ${cityResponse.status}`
      )
    }

    const cities = await cityResponse.json()

    // -----------------------------------------
    // 2. Find which city contains this area
    // -----------------------------------------

    for (const city of cities) {
      const areaResponse = await fetch(
        `${baseUrl}/api/fm/location/fetchAreaInCity?cityId=${city.cityId}`,
        {
          headers,
          cache: "no-store",
        }
      )

      if (!areaResponse.ok) {
        continue
      }

      const areas = await areaResponse.json()

      const matchingArea = areas.find(
        (area: {
          areaId: number
          areaName: string
        }) => String(area.areaId) === String(areaId)
      )

      if (matchingArea) {
        return NextResponse.json({
          success: true,
          stateId: Number(stateId),
          cityId: city.cityId,
          areaId: matchingArea.areaId,
          cityName: city.cityName,
          areaName: matchingArea.areaName,
        })
      }
    }

    // -----------------------------------------
    // Area not found
    // -----------------------------------------

    return NextResponse.json(
      {
        success: false,
        message: "Area not found for the given state",
      },
      { status: 404 }
    )
  } catch (error) {
    console.error("Outlet location error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch outlet location",
      },
      { status: 500 }
    )
  }
}