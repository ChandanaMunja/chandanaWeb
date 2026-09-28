// "use client"

// import Image from "next/image"
// import { useEffect, useState } from "react"

// type Outlet = {
//   outletId: number
//   merchantId: number
//   outletName: string
//   cuisineType: string
//   outletPhone: string
//   isActive: string
//   menuItemCount: number
//   stateId: number | null
//   areaId: number | null
//   road: string | null
//   landmark: string | null
//   buildingNumber: string | null
// }

// const RESTAURANT_IMAGES = [
//   "/dishes/andhra-spice.png",
//   "/dishes/biryani-palace.png",
//   "/dishes/sri-krishna-tiffins.png",
//   "/dishes/north-fire.png",
//   "/dishes/crust-crumb.png",
//   "/dishes/tirumala-sweets.png",
// ]

// export function RestaurantsPage() {
//   const [outlets, setOutlets] = useState<Outlet[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     async function fetchOutlets() {
//       console.log("Fetching all restaurants...")

//       try {
//         const response = await fetch("/api/outlets", {
//           cache: "no-store",
//         })

//         console.log("Response:", response.status)

//         if (!response.ok) {
//           throw new Error(`API error: ${response.status}`)
//         }

//         const result = await response.json()

//         console.log("All outlets:", result)
//         console.log("Outlet count:", result.data?.length)

//         setOutlets(result.data || [])
//       } catch (error) {
//         console.error("Error fetching restaurants:", error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchOutlets()
//   }, [])

//   const activeOutlets = outlets.filter(
//     (outlet) => outlet.isActive === "Y"
//   )

//   return (
//     <main className="min-h-screen bg-background px-5 py-32 md:px-10">
//       <div className="mx-auto max-w-[1400px]">

//         <div className="mb-12">
//           <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
//             All Restaurants
//           </div>

//           <h1 className="font-display text-5xl font-extrabold tracking-tight md:text-7xl">
//             Find your next meal.
//           </h1>

//           <p className="mt-4 max-w-xl text-lg text-muted-foreground">
//             Explore all restaurants available on JippyMart.
//           </p>
//         </div>

//         {loading ? (
//           <p className="text-muted-foreground">
//             Loading restaurants...
//           </p>
//         ) : activeOutlets.length === 0 ? (
//           <p className="text-muted-foreground">
//             No restaurants available.
//           </p>
//         ) : (
//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

//             {activeOutlets.map((outlet, index) => (
//               <RestaurantCard
//                 key={outlet.outletId}
//                 outlet={outlet}
//                 image={
//                   RESTAURANT_IMAGES[
//                     index % RESTAURANT_IMAGES.length
//                   ]
//                 }
//               />
//             ))}

//           </div>
//         )}

//       </div>
//     </main>
//   )
// }

// function RestaurantCard({
//   outlet,
//   image,
// }: {
//   outlet: Outlet
//   image: string
// }) {
//   return (
//     <a
//       href="#"
//       className="group relative block overflow-hidden rounded-2xl bg-muted"
//     >
//       <div className="relative aspect-[4/3]">

//         <Image
//           src={image}
//           alt={outlet.outletName}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//           sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//         />

//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

//         <div className="absolute inset-x-0 bottom-0 p-5">

//           <div className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-white/70">
//             {outlet.cuisineType}
//           </div>

//           <h3 className="font-display text-2xl font-bold text-white">
//             {outlet.outletName}
//           </h3>

//           <div className="mt-3 text-sm text-white/80">
//             {outlet.landmark ||
//               outlet.road ||
//               "Location unavailable"}
//           </div>

//         </div>
//       </div>
//     </a>
//   )
// }


"use client"

import Image from "next/image"
import { useEffect, useState } from "react"


import { DUMMY_OUTLETS } from "@/data/dummy-outlets"

type Outlet = {
  outletId: number
  outletName: string
  merchantId: number
  rating: number | null
  isActive: boolean
  isApproved: boolean
  openNow: boolean
  isVegOutlet: boolean
  outletPicUrl: string | null
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


  const restaurants = DUMMY_OUTLETS.slice(0, 10)

  // useEffect(() => {
  //   async function fetchNearbyOutlets(
  //     latitude: number,
  //     longitude: number
  //   ) {
  //     try {
  //       const apiUrl =
  //         `http://srv1617582.hstgr.cloud:8084/api/fm/outlets/public/customer/nearby` +
  //         `?lat=${encodeURIComponent(latitude)}` +
  //         `&lng=${encodeURIComponent(longitude)}`

  //       console.log("Nearby restaurants API:", apiUrl)

  //       const response = await fetch(apiUrl, {
  //         method: "GET",
  //         headers: {
  //           accept: "*/*",
  //         },
  //         cache: "no-store",
  //       })

  //       const result = await response.json()

  //       console.log("Nearby restaurants:", result)

  //       if (!response.ok) {
  //         throw new Error(`API error: ${response.status}`)
  //       }

  //       setOutlets(result.outlets || [])
  //     } catch (error) {
  //       console.error("Error fetching nearby restaurants:", error)
  //       setOutlets([])
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   if (!navigator.geolocation) {
  //     console.error("Geolocation is not supported")
  //     setLoading(false)
  //     return
  //   }

  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords

  //       console.log("Customer latitude:", latitude)
  //       console.log("Customer longitude:", longitude)

  //       fetchNearbyOutlets(latitude, longitude)
  //     },
  //     (error) => {
  //       console.error("Location error:", error)
  //       setLoading(false)
  //     },
  //     {
  //       enableHighAccuracy: true,
  //       timeout: 30000,
  //       maximumAge: 0,
  //     }
  //   )
  // }, [])


  useEffect(() => {
  setLoading(false)
}, [])

  const uniqueOutlets = Array.from(
    new Map(
      outlets.map((outlet) => [outlet.outletId, outlet])
    ).values()
  )

  return (
    <main className="min-h-screen bg-background px-5 py-32 md:px-10">
      <div className="mx-auto max-w-[1400px]">

        <div className="mb-12">
          <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Nearby Restaurants
          </div>

          <h1 className="font-display text-5xl font-extrabold tracking-tight md:text-7xl">
            Find your next meal.
          </h1>

          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Restaurants near your current location.
          </p>
        </div>

        {loading ? (
          <p className="text-muted-foreground">
            Finding restaurants near you...
          </p>
        // ) : uniqueOutlets.length === 0 ? (

        ) : restaurants.length === 0 ? (
          <p className="text-muted-foreground">
            No restaurants found near your location.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* {uniqueOutlets.map((outlet, index) => ( */}

            {restaurants.map((outlet, index) => (
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
  const slug = outlet.outletName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

  const restaurantUrl =
    `/restaurant/hyderabad/${slug}?outletId=${outlet.outletId}`

  return (
    <a
      href={restaurantUrl}
      className="group relative block overflow-hidden rounded-2xl bg-muted"
    >
      <div className="relative aspect-[4/3]">

        <Image
          src={
            outlet.outletPicUrl ||
            image
          }
          alt={outlet.outletName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-5">

          <h3 className="font-display text-2xl font-bold text-white">
            {outlet.outletName}
          </h3>

          {outlet.rating !== null && (
            <div className="mt-2 text-sm text-white/80">
              ⭐ {outlet.rating}
            </div>
          )}

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