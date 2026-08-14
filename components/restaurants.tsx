"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

type Outlet = {
  outletId: number
  outletName: string
  stateId: number | null
  areaId: number | null
  cuisineType: string
  outletPhone: string
  radius: number
  review: number | null
  subscriptionStatus: string | null
  promotionStatus: string | null
  distanceKm: number
  roadDistance: string | null
  deliveryTime: string | null
  openingTime: string | null
  closingTime: string | null
  openNow: boolean
}

const RESTAURANT_IMAGES = [
  "/dishes/andhra-spice.png",
  "/dishes/biryani-palace.png",
  "/dishes/sri-krishna-tiffins.png",
  "/dishes/north-fire.png",
  "/dishes/crust-crumb.png",
  "/dishes/tirumala-sweets.png",
]

export function Restaurants() {
  const [outlets, setOutlets] = useState<Outlet[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    function fetchNearbyOutlets(
      latitude: number,
      longitude: number
    ) {
      fetch(
        `/api/outlets/customer/nearby?lat=${latitude}&lng=${longitude}`,
        {
          cache: "no-store",
        }
      )
        .then(async (response) => {
          if (!response.ok) {
            throw new Error(
              `API error: ${response.status}`
            )
          }

          return response.json()
        })
        .then((result) => {
          console.log("Nearby outlets:", result)

          console.log(
            "Outlet IDs:",
            (result.outlets || []).map(
              (outlet: Outlet) => outlet.outletId
            )
          )

          setOutlets(result.outlets || [])
        })
        .catch((error) => {
          console.error(
            "Nearby outlets error:",
            error
          )
        })
        .finally(() => {
          setLoading(false)
        })
    }

    if (!navigator.geolocation) {
      console.error(
        "Geolocation is not supported"
      )

      setLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } =
          position.coords

        console.log(
          "Customer latitude:",
          latitude
        )

        console.log(
          "Customer longitude:",
          longitude
        )

        fetchNearbyOutlets(
          latitude,
          longitude
        )
      },
      (error) => {
        console.error(
          "Location error:",
          error
        )

        setLoading(false)
      },
      {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 0,
      }
    )
  }, [])

  if (loading) {
    return (
      <section
        id="restaurants"
        className="mx-auto max-w-[1400px] px-5 py-20 md:px-10"
      >
        <p className="text-muted-foreground">
          Finding restaurants near you...
        </p>
      </section>
    )
  }

  const uniqueOutlets = Array.from(
    new Map(
      outlets.map((outlet) => [
        outlet.outletId,
        outlet,
      ])
    ).values()
  )

  const nearbyOutlets =
    uniqueOutlets.slice(0, 6)

  return (
    <section
      id="restaurants"
      className="mx-auto max-w-[1400px] px-5 py-20 md:px-10"
    >
      {/* Heading + View All */}

      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Nearby Restaurants
          </div>

          <h2 className="font-display text-5xl font-extrabold tracking-tight md:text-7xl">
            Where the locals eat.
          </h2>

          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Restaurants near your current location.
          </p>
        </div>

        <a
          href="/restaurants"
          className="shrink-0 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
        >
          View All
        </a>
      </div>

      {/* Restaurants */}

      {nearbyOutlets.length === 0 ? (
        <p className="text-muted-foreground">
          No restaurants found near your location.
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {nearbyOutlets.map(
            (outlet, index) => (
              <RestaurantCard
                key={outlet.outletId}
                outlet={outlet}
                image={
                  RESTAURANT_IMAGES[
                    index %
                      RESTAURANT_IMAGES.length
                  ]
                }
              />
            )
          )}
        </div>
      )}
    </section>
  )
}

function RestaurantCard({
  outlet,
  image,
}: {
  outlet: Outlet
  image: string
}) {
  const [cityName, setCityName] =
    useState("")

  useEffect(() => {
    async function fetchLocation() {
      if (
        !outlet.stateId ||
        !outlet.areaId
      ) {
        console.log(
          "Missing stateId or areaId for outlet:",
          outlet.outletId
        )
        return
      }

      try {
        const response = await fetch(
          `/api/outlet-location?stateId=${outlet.stateId}&areaId=${outlet.areaId}`,
          {
            cache: "no-store",
          }
        )

        if (!response.ok) {
          throw new Error(
            `Location API error: ${response.status}`
          )
        }

        const result =
          await response.json()

        console.log(
          "Outlet location:",
          outlet.outletId,
          result
        )

        setCityName(
          result.cityName || ""
        )
      } catch (error) {
        console.error(
          "Location fetch error:",
          error
        )
      }
    }

    fetchLocation()
  }, [
    outlet.stateId,
    outlet.areaId,
    outlet.outletId,
  ])

  const slug = outlet.outletName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

  const locationSlug = cityName
  ? cityName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  : "hyderabad"

  const restaurantUrl = `/restaurant/${locationSlug}/${slug}?outletId=${outlet.outletId}`

  return (
    <a
      href={restaurantUrl}
      className="group relative block overflow-hidden rounded-2xl bg-muted"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={outlet.outletName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-white/70">
            {outlet.cuisineType}
          </div>

          <h3 className="font-display text-2xl font-bold text-white">
            {outlet.outletName}
          </h3>

          <div className="mt-3 flex items-center gap-3 text-sm text-white/80">
            {outlet.roadDistance && (
              <span>
                {outlet.roadDistance}
              </span>
            )}

            {outlet.deliveryTime && (
              <span>
                • {outlet.deliveryTime}
              </span>
            )}
          </div>

          <div className="mt-2 text-sm">
            {outlet.openNow ? (
              <span className="text-emerald-300">
                Open now
              </span>
            ) : (
              <span className="text-red-300">
                Closed
              </span>
            )}
          </div>
        </div>
      </div>
    </a>
  )
}