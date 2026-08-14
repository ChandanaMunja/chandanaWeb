"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

type Outlet = {
  outletId: number
  merchantId: number
  outletName: string
  cuisineType: string
  outletPhone: string
  isActive: string
  menuItemCount: number
  stateId: number | null
  areaId: number | null
  road: string | null
  landmark: string | null
  buildingNumber: string | null
}

const RESTAURANT_IMAGES = [
  "/dishes/andhra-spice.png",
  "/dishes/biryani-palace.png",
  "/dishes/sri-krishna-tiffins.png",
  "/dishes/north-fire.png",
  "/dishes/crust-crumb.png",
  "/dishes/tirumala-sweets.png",
]

export function RestaurantsPage() {
  const [outlets, setOutlets] = useState<Outlet[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchOutlets() {
      console.log("Fetching all restaurants...")

      try {
        const response = await fetch("/api/outlets", {
          cache: "no-store",
        })

        console.log("Response:", response.status)

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`)
        }

        const result = await response.json()

        console.log("All outlets:", result)
        console.log("Outlet count:", result.data?.length)

        setOutlets(result.data || [])
      } catch (error) {
        console.error("Error fetching restaurants:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchOutlets()
  }, [])

  const activeOutlets = outlets.filter(
    (outlet) => outlet.isActive === "Y"
  )

  return (
    <main className="min-h-screen bg-background px-5 py-32 md:px-10">
      <div className="mx-auto max-w-[1400px]">

        <div className="mb-12">
          <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            All Restaurants
          </div>

          <h1 className="font-display text-5xl font-extrabold tracking-tight md:text-7xl">
            Find your next meal.
          </h1>

          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Explore all restaurants available on JippyMart.
          </p>
        </div>

        {loading ? (
          <p className="text-muted-foreground">
            Loading restaurants...
          </p>
        ) : activeOutlets.length === 0 ? (
          <p className="text-muted-foreground">
            No restaurants available.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {activeOutlets.map((outlet, index) => (
              <RestaurantCard
                key={outlet.outletId}
                outlet={outlet}
                image={
                  RESTAURANT_IMAGES[
                    index % RESTAURANT_IMAGES.length
                  ]
                }
              />
            ))}

          </div>
        )}

      </div>
    </main>
  )
}

function RestaurantCard({
  outlet,
  image,
}: {
  outlet: Outlet
  image: string
}) {
  return (
    <a
      href="#"
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

          <div className="mt-3 text-sm text-white/80">
            {outlet.landmark ||
              outlet.road ||
              "Location unavailable"}
          </div>

        </div>
      </div>
    </a>
  )
}