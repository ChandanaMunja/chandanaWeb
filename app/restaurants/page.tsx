// import Image from "next/image"

// import { SiteHeader } from "@/components/site-header"
// import { SiteFooter } from "@/components/site-footer"



// type Outlet = {
//   outletId: number
//   outletName: string

//   stateId: number | null
//   stateName: string | null

//   cityId: number | null
//   cityName: string | null

//   areaId: number | null
//   areaName: string | null

//   cuisineType: string | null

//   distanceKm: number | null
//   roadDistance: string | null
//   deliveryTime: string | null

//   openingTime: string | null
//   closingTime: string | null

//   openNow: boolean | null
// }

// const RESTAURANT_IMAGES = [
//   "/dishes/andhra-spice.png",
//   "/dishes/biryani-palace.png",
//   "/dishes/sri-krishna-tiffins.png",
//   "/dishes/north-fire.png",
//   "/dishes/crust-crumb.png",
//   "/dishes/tirumala-sweets.png",
// ]

// function createSlug(value: string | null | undefined) {
//   if (!value) return ""

//   return value
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-|-$/g, "")
// }

// export default async function RestaurantsPage() {
//   const response = await fetch(
//     `${
//       process.env.NEXT_PUBLIC_SITE_URL ||
//       "http://localhost:3000"
//     }/api/outlets`,
//     {
//       cache: "no-store",
//     }
//   )

//   if (!response.ok) {
//     return (
//       <>
//         <SiteHeader />

//         <main className="min-h-screen px-5 py-24 md:px-10">
//           <div className="mx-auto max-w-6xl rounded-3xl border border-border p-10 text-center">
//             <h1 className="text-3xl font-bold">
//               Unable to load restaurants
//             </h1>

//             <p className="mt-3 text-muted-foreground">
//               We couldn't fetch the restaurants.
//             </p>
//           </div>
//         </main>

//         <SiteFooter />
//       </>
//     )
//   }

//   const result = await response.json()

//   console.log("ALL OUTLETS API RESPONSE:", JSON.stringify(result, null, 2))
  

//   const outlets: Outlet[] = Array.isArray(result)
//     ? result
//     : Array.isArray(result?.data)
//       ? result.data
//       : Array.isArray(result?.outlets)
//         ? result.outlets
//         : []

//   return (
//     <>
//       <SiteHeader />

//       <main className="min-h-screen px-5 pb-20 pt-24 md:px-10 md:pt-28">
//         <div className="mx-auto w-full max-w-6xl">

//           {/* HEADER */}
//           <section className="mb-10">
//             <div className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
//               Restaurants
//             </div>

//             <h1 className="mt-3 text-5xl font-extrabold tracking-tight md:text-6xl">
//               All Restaurants
//             </h1>

//             <p className="mt-4 text-lg text-muted-foreground">
//               Explore restaurants near you.
//             </p>
//           </section>

//           {/* RESTAURANTS */}
//           {outlets.length === 0 ? (
//             <p className="text-muted-foreground">
//               No restaurants found.
//             </p>
//           ) : (
//             <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

//               {outlets.map((outlet, index) => {
//                 const citySlug =
//                   createSlug(outlet.cityName) || "location"

//                 const restaurantSlug =
//                   createSlug(outlet.outletName)

//                 const restaurantUrl =
//                   `/restaurant/${citySlug}/${restaurantSlug}` +
//                   `?outletId=${outlet.outletId}`

//                 return (
//                   <a
//                     key={outlet.outletId}
//                     href={restaurantUrl}
//                     className="group block"
//                   >

//                     {/* IMAGE */}
//                     <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-muted md:h-72">

//                       <Image
//                         src={
//                           RESTAURANT_IMAGES[
//                             index % RESTAURANT_IMAGES.length
//                           ]
//                         }
//                         alt={outlet.outletName}
//                         fill
//                         className="object-cover transition-transform duration-500 group-hover:scale-105"
//                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                       />

//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

//                       {/* OPEN / CLOSED */}
//                       {outlet.openNow != null && (
//                         <div className="absolute bottom-3 left-3">
//                           {outlet.openNow ? (
//                             <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-green-600 shadow-sm">
//                               Open
//                             </span>
//                           ) : (
//                             <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-red-600 shadow-sm">
//                               Closed
//                             </span>
//                           )}
//                         </div>
//                       )}
//                     </div>

//                     {/* DETAILS */}
//                     <div className="px-1 pt-3">

//                       {/* NAME */}
//                       <h2 className="truncate text-lg font-bold">
//                         {outlet.outletName}
//                       </h2>

//                       {/* CUISINE • DISTANCE • DELIVERY */}
//                       <div className="mt-1.5 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">

//                         <span>
//                           {outlet.cuisineType ||
//                             "Cuisine unavailable"}
//                         </span>

//                         <span>•</span>

//                         <span>
//                           📍{" "}
//                           {outlet.roadDistance ||
//                             (outlet.distanceKm != null
//                               ? `${outlet.distanceKm} km`
//                               : "Unavailable")}
//                         </span>

//                         <span>•</span>

//                         <span>
//                           🕐{" "}
//                           {outlet.deliveryTime ||
//                             "Unavailable"}
//                         </span>

//                       </div>

                     
//                       {/* AVAILABILITY */}
//                       <div className="mt-1.5 text-xs">
//                         {outlet.openNow === true ? (
//                           <span className="text-green-500">
//                             Open
//                           </span>
//                         ) : outlet.openNow === false ? (
//                           <span className="text-red-500">
//                             Closed
//                           </span>
//                         ) : (
//                           <span className="text-muted-foreground">
//                             Availability unavailable
//                           </span>
//                         )}
//                       </div>

//                     </div>
//                   </a>
//                 )
//               })}

//             </div>
//           )}

//         </div>
//       </main>

//       <SiteFooter />
//     </>
//   )
// }



"use client"

import Image from "next/image"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

import { DUMMY_OUTLETS } from "@/data/dummy-outlets"

function createSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export default function RestaurantsPage() {
  const restaurants = DUMMY_OUTLETS.slice(0, 10)

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen px-5 pb-20 pt-24 md:px-10 md:pt-28">
        <div className="mx-auto w-full max-w-6xl">

          {/* HEADER */}

          <section className="mb-10">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Restaurants
            </div>

            <h1 className="mt-3 text-5xl font-extrabold tracking-tight md:text-6xl">
              All Restaurants
            </h1>

            <p className="mt-4 text-lg text-muted-foreground">
              Explore all restaurants available on JippyMart.
            </p>
          </section>

          {/* RESTAURANTS */}

          {restaurants.length === 0 ? (
            <p className="text-muted-foreground">
              No restaurants found.
            </p>
          ) : (
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

              {restaurants.map((outlet) => {

                const restaurantSlug =
                  createSlug(outlet.outletName)

                const restaurantUrl =
                  `/restaurant/hyderabad/${restaurantSlug}` +
                  `?outletId=${outlet.outletId}`

                return (
                  <a
                    key={outlet.outletId}
                    href={restaurantUrl}
                    className="group block"
                  >

                    {/* IMAGE */}

                    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-muted md:h-72">

                      <Image
                        src={
                          outlet.outletPicUrl ||
                          "/dishes/biryani-palace.png"
                        }
                        alt={outlet.outletName}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                      {/* OPEN / CLOSED */}

                      <div className="absolute bottom-3 left-3">
                        {outlet.openNow ? (
                          <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-green-600 shadow-sm">
                            Open
                          </span>
                        ) : (
                          <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-red-600 shadow-sm">
                            Closed
                          </span>
                        )}
                      </div>

                    </div>

                    {/* DETAILS */}

                    <div className="px-1 pt-3">

                      {/* NAME */}

                      <h2 className="truncate text-lg font-bold">
                        {outlet.outletName}
                      </h2>

                      {/* RATING + TYPE */}

                      <div className="mt-1.5 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">

                        {outlet.rating !== null && (
                          <span>
                            ⭐ {outlet.rating}
                          </span>
                        )}

                        <span>•</span>

                        <span>
                          {outlet.isVegOutlet
                            ? "Pure Veg"
                            : "Restaurant"}
                        </span>

                        {outlet.isApproved && (
                          <>
                            <span>•</span>

                            <span>
                              Verified
                            </span>
                          </>
                        )}

                      </div>

                      {/* AVAILABILITY */}

                      <div className="mt-1.5 text-xs">
                        {outlet.openNow ? (
                          <span className="text-green-500">
                            Open now
                          </span>
                        ) : (
                          <span className="text-red-500">
                            Closed
                          </span>
                        )}
                      </div>

                    </div>

                  </a>
                )
              })}

            </div>
          )}

        </div>
      </main>

      <SiteFooter />
    </>
  )
}