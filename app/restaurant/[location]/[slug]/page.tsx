import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import RestaurantMenu from "@/components/restaurant-menu"

type RestaurantDetails = {
  outletName: string
  outletEmail: string | null
  outletPhone: string | null
  alternateOutletPhone: string | null
  cuisineType: string | null

  latitude: number | null
  longitude: number | null

  buildingNumber: string | null
  road: string | null
  landmark: string | null

  cityId: number | null
  cityName: string | null

  stateId: number | null
  stateName: string | null

  areaId: number | null
  areaName: string | null

  isFavourite: boolean
  isAvailable: boolean | null

  outletTimings: {
    day: string
    isOpen: boolean
    openingTime: string
    closingTime: string
  }[]

  categories: {
    categoryId: number
    categoryName: string
    isAvailable: boolean

    products: {
      productId: number
      productName: string
      description: string | null
      price: number | null
      merchantPrice?: number | null

      isVeg: boolean
      hasProductVariants: boolean
      isAvailable: boolean
      isProductFavourite: boolean | null

      variants: unknown[]

      productTimings?: {
        day: string
        startTime: string
        endTime: string
      }[]
    }[]
  }[]
}

export default async function RestaurantDetailPage({
  searchParams,
}: {
  searchParams: Promise<{
    outletId?: string
  }>
}) {
  const { outletId } = await searchParams

  if (!outletId) {
    return (
      <>
        <SiteHeader />

        <main className="min-h-screen px-5 py-24 md:px-10">
          <div className="mx-auto max-w-5xl rounded-3xl border border-border p-10 text-center">
            <h1 className="text-3xl font-bold">
              Restaurant not found
            </h1>
          </div>
        </main>

        <SiteFooter />
      </>
    )
  }

  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000"
    }/api/restaurant-details?outletId=${encodeURIComponent(
      outletId
    )}`,
    {
      cache: "no-store",
    }
  )

  if (!response.ok) {
    return (
      <>
        <SiteHeader />

        <main className="min-h-screen px-5 py-24 md:px-10">
          <div className="mx-auto max-w-5xl rounded-3xl border border-border p-10 text-center">
            <h1 className="text-3xl font-bold">
              Unable to load restaurant
            </h1>

            <p className="mt-3 text-muted-foreground">
              We couldn't fetch the restaurant details.
            </p>
          </div>
        </main>

        <SiteFooter />
      </>
    )
  }

  const restaurant: RestaurantDetails =
    await response.json()

  /*
   * Find today's timing.
   * This is only used for displaying the basic
   * restaurant information.
   */
  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(new Date())

  const todayTiming =
    restaurant.outletTimings?.find(
      (timing) => timing.day === today
    )

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen px-5 pb-20 pt-24 md:px-10 md:pt-28">
        <div className="mx-auto w-full max-w-5xl">

          {/* ================================
              RESTAURANT BASIC INFORMATION
          ================================= */}

          <section className="rounded-3xl border border-border bg-background px-6 py-8 shadow-sm md:px-10 md:py-10">

            {/* RESTAURANT NAME */}
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              {restaurant.outletName}
            </h1>

            {/* CUISINE */}
            {restaurant.cuisineType && (
              <div className="mt-3 text-sm font-medium text-muted-foreground">
                {restaurant.cuisineType}
              </div>
            )}

            {/* OPEN / CLOSED + TIMING */}
<div className="mt-3 flex flex-wrap items-center gap-3 text-sm">

  {todayTiming ? (
    todayTiming.isOpen ? (
      <span className="font-semibold text-green-600">
        ● Open now
      </span>
    ) : (
      <span className="font-semibold text-red-500">
        ● Closed
      </span>
    )
  ) : (
    <span className="text-muted-foreground">
      ● Availability unavailable
    </span>
  )}

  {todayTiming?.isOpen && (
    <>
      <span className="text-muted-foreground">
        •
      </span>

      <span className="text-muted-foreground">
        Closes at{" "}
        <span className="font-medium text-foreground">
          {todayTiming.closingTime}
        </span>
      </span>
    </>
  )}

</div>

            {/* LOCATION */}
            {(restaurant.areaName ||
              restaurant.cityName ||
              restaurant.stateName) && (
              <div className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
                <span>📍</span>

                <span>
                  {[
                    restaurant.areaName,
                    restaurant.cityName,
                    restaurant.stateName,
                  ]
                    .filter(Boolean)
                    .join(", ")}
                </span>
              </div>
            )}

            {/* OUTLET */}
            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <span>●</span>
              <span>Outlet</span>
            </div>

            

          </section>


          {/* ================================
                      MENU
          ================================= */}

          <section className="mt-14">

            <h2 className="text-center text-4xl font-extrabold tracking-tight">
              🍽️ MENU 🍽️
            </h2>

            {/* CLIENT-SIDE MENU */}
            <RestaurantMenu
              categories={restaurant.categories || []}
            />

          </section>

        </div>
      </main>

      <SiteFooter />
    </>
  )
}