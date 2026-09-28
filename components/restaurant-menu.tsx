// "use client"

// import { useMemo, useState } from "react"

// type Product = {
//   productId: number
//   productName: string
//   description: string | null
//   price: number | null
//   merchantPrice?: number | null

//   isVeg: boolean
//   hasProductVariants: boolean
//   isAvailable: boolean
//   isProductFavourite: boolean | null

//   variants: unknown[]

//   productTimings?: {
//     day: string
//     startTime: string
//     endTime: string
//   }[]
// }

// type Category = {
//   categoryId: number
//   categoryName: string
//   isAvailable: boolean
//   products: Product[]
// }

// type Props = {
//   categories: Category[]
// }

// export default function RestaurantMenu({
//   categories,
// }: Props) {

//   /* ================================
//             STATES
//   ================================= */

//   const [search, setSearch] = useState("")

//   const [vegOnly, setVegOnly] =
//     useState(false)

//   const [nonVegOnly, setNonVegOnly] =
//     useState(false)


//   /* ================================
//           FILTER PRODUCTS
//   ================================= */

//   const filteredCategories = useMemo(() => {

//     const searchText =
//       search.trim().toLowerCase()

//     return categories
//       .filter(
//         (category) =>
//           category.isAvailable
//       )
//       .map((category) => {

//         const products =
//           category.products
//             ?.filter(
//               (product) =>
//                 product.isAvailable
//             )
//             .filter((product) => {

//               /*
//                * VEG FILTER
//                */
//               if (
//                 vegOnly &&
//                 !product.isVeg
//               ) {
//                 return false
//               }

//               /*
//                * NON VEG FILTER
//                */
//               if (
//                 nonVegOnly &&
//                 product.isVeg
//               ) {
//                 return false
//               }

//               /*
//                * SEARCH
//                */
//               if (
//                 searchText &&
//                 !product.productName
//                   .toLowerCase()
//                   .includes(searchText)
//               ) {
//                 return false
//               }

//               return true
//             })

//         return {
//           ...category,
//           products,
//         }
//       })
//       .filter(
//         (category) =>
//           category.products.length > 0
//       )

//   }, [
//     categories,
//     search,
//     vegOnly,
//     nonVegOnly,
//   ])


//   /* ================================
//           VEG TOGGLE
//   ================================= */

//   const handleVegToggle = () => {

//     setVegOnly((previous) => {
//       const newValue = !previous

//       /*
//        * Prevent both filters
//        * being active together.
//        */
//       if (newValue) {
//         setNonVegOnly(false)
//       }

//       return newValue
//     })
//   }


//   /* ================================
//         NON VEG TOGGLE
//   ================================= */

//   const handleNonVegToggle = () => {

//     setNonVegOnly((previous) => {
//       const newValue = !previous

//       if (newValue) {
//         setVegOnly(false)
//       }

//       return newValue
//     })
//   }


//   return (
//     <div className="mt-8">


//       {/* ==================================
//                 FILTER SECTION
//       ================================== */}

//       <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-center">


//         {/* VEG */}

//         <button
//           type="button"
//           onClick={handleVegToggle}
//           className="flex items-center gap-2"
//         >

//           <span className="text-xs font-semibold">
//             Veg
//           </span>

//           <span
//             className={`flex h-7 w-12 items-center rounded-full p-1 transition-colors ${
//               vegOnly
//                 ? "bg-green-500"
//                 : "bg-muted"
//             }`}
//           >

//             <span
//               className={`h-5 w-5 rounded-full bg-green-500 shadow-sm transition-transform ${
//                 vegOnly
//                   ? "translate-x-5 bg-white"
//                   : ""
//               }`}
//             />

//           </span>

//         </button>


//         {/* NON VEG */}

//         <button
//           type="button"
//           onClick={handleNonVegToggle}
//           className="flex items-center gap-2"
//         >

//           <span className="text-xs font-semibold">
//             Non veg
//           </span>

//           <span
//             className={`flex h-7 w-12 items-center rounded-full p-1 transition-colors ${
//               nonVegOnly
//                 ? "bg-red-500"
//                 : "bg-muted"
//             }`}
//           >

//             <span
//               className={`h-5 w-5 rounded-full bg-red-500 shadow-sm transition-transform ${
//                 nonVegOnly
//                   ? "translate-x-5 bg-white"
//                   : ""
//               }`}
//             />

//           </span>

//         </button>


//         {/* SEARCH */}

//         <div className="relative w-full max-w-md">

//           <input
//             type="text"
//             value={search}
//             onChange={(event) =>
//               setSearch(event.target.value)
//             }
//             placeholder="Search for dishes"
//             className="h-14 w-full rounded-2xl border border-border bg-background px-5 pr-12 text-sm outline-none transition focus:border-foreground"
//           />

//           <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-lg text-muted-foreground">
//             🔍
//           </span>

//         </div>

//       </div>


//       {/* ==================================
//               ACTIVE FILTER MESSAGE
//       ================================== */}

//       {(vegOnly ||
//         nonVegOnly ||
//         search) && (
//         <div className="mt-5 text-center text-sm text-muted-foreground">

//           {vegOnly && (
//             <span>
//               Showing vegetarian items
//             </span>
//           )}

//           {nonVegOnly && (
//             <span>
//               Showing non-vegetarian items
//             </span>
//           )}

//           {search && (
//             <span>
//               {vegOnly || nonVegOnly
//                 ? " • "
//                 : ""}
//               Search: "{search}"
//             </span>
//           )}

//         </div>
//       )}


//       {/* ==================================
//                 CATEGORIES
//       ================================== */}

//       <div className="mt-8 space-y-3">

//         {filteredCategories.length === 0 ? (

//           <div className="rounded-2xl border border-border p-10 text-center">

//             <p className="font-semibold">
//               No dishes found
//             </p>

//             <p className="mt-2 text-sm text-muted-foreground">
//               Try another search or filter.
//             </p>

//           </div>

//         ) : (

//           filteredCategories.map(
//             (category) => (

//               <details
//                 key={category.categoryId}
//                 className="group overflow-hidden rounded-2xl border border-border bg-background"
//               >

//                 {/* ==============================
//                     CATEGORY HEADER
//                 =============================== */}

//                 <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-5 transition-colors hover:bg-muted/40 [&::-webkit-details-marker]:hidden">

//                   <div className="flex items-center gap-3">

//                     {/* ARROW */}

//                     <span className="text-lg text-green-500 transition-transform duration-200 group-open:rotate-180">
//                       ↓
//                     </span>


//                     {/* CATEGORY NAME */}

//                     <span className="text-base font-bold">
//                       {category.categoryName}
//                     </span>


//                     {/* PRODUCT COUNT */}

//                     <span className="text-sm text-muted-foreground">
//                       ({category.products.length})
//                     </span>

//                   </div>

//                 </summary>


//                 {/* ==============================
//                     PRODUCTS
//                 =============================== */}

//                 <div className="border-t border-border p-4">

//                   <div className="space-y-4">

//                     {category.products.map(
//                       (product) => (

//                         <div
//                           key={product.productId}
//                           className="rounded-2xl border border-border p-5 transition-colors hover:bg-muted/30"
//                         >

//                           <div className="flex items-start justify-between gap-5">


//                             {/* PRODUCT DETAILS */}

//                             <div className="min-w-0">

//                               <div className="flex items-center gap-2">

//                                 <span
//                                   className={`h-2 w-2 rounded-full ${
//                                     product.isVeg
//                                       ? "bg-green-500"
//                                       : "bg-red-500"
//                                   }`}
//                                 />

//                                 <h3 className="text-base font-bold">
//                                   {product.productName}
//                                 </h3>

//                               </div>


//                               {/* DESCRIPTION */}

//                               {product.description && (
//                                 <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
//                                   {product.description}
//                                 </p>
//                               )}


//                               {/* PRICE */}

//                               <p className="mt-3 text-base font-bold">
//                                 ₹
//                                 {product.price ??
//                                   product.merchantPrice ??
//                                   "—"}
//                               </p>

//                             </div>


//                             {/* RIGHT SIDE */}

//                             <div className="flex shrink-0 flex-col items-end gap-4">


//                               {/* VEG / NON VEG */}

//                               <span
//                                 className={`rounded-full border px-3 py-1 text-xs font-semibold ${
//                                   product.isVeg
//                                     ? "border-green-500/30 text-green-500"
//                                     : "border-red-500/30 text-red-500"
//                                 }`}
//                               >
//                                 {product.isVeg
//                                   ? "VEG"
//                                   : "NON-VEG"}
//                               </span>


//                               {/* ADD */}

//                               <a
//  href="/jippy-mart-qrcode"
//   className="rounded-full bg-foreground px-6 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-105"
// >
//   Add
// </a>

//                             </div>

//                           </div>

//                         </div>

//                       )
//                     )}

//                   </div>

//                 </div>

//               </details>

//             )
//           )

//         )}

//       </div>

//     </div>
//   )
// }





"use client"

import { useMemo, useState } from "react"

type Product = {
  productId: number
  productName: string
  description: string | null
  onlinePrice: number
  isVeg: boolean
  hasProductVariants: boolean
  productAvailable: boolean
  variants: {
    productVariantId: number
    variantMerchantPrice: number
    variantPriceType: string
    variantValueId: number
    variantName: string
    variantGroupId: number
    variantGroupName: string
    variantMinSelection: number
    variantMaxSelection: number
  }[]
  imageLink: string
}

type Category = {
  categoryId: number
  categoryName: string
  categoryAvailable: boolean
  products: Product[]
}

type Props = {
  categories: Category[]
}

export default function RestaurantMenu({
  categories,
}: Props) {
  const [search, setSearch] = useState("")
  const [vegOnly, setVegOnly] = useState(false)
  const [nonVegOnly, setNonVegOnly] = useState(false)

  const filteredCategories = useMemo(() => {
    const searchText = search.trim().toLowerCase()

    return categories
      .filter((category) => category.categoryAvailable)
      .map((category) => {
        const products = category.products
          ?.filter((product) => product.productAvailable)
          .filter((product) => {
            if (vegOnly && !product.isVeg) {
              return false
            }

            if (nonVegOnly && product.isVeg) {
              return false
            }

            if (
              searchText &&
              !product.productName
                .toLowerCase()
                .includes(searchText)
            ) {
              return false
            }

            return true
          })

        return {
          ...category,
          products,
        }
      })
      .filter((category) => category.products.length > 0)
  }, [categories, search, vegOnly, nonVegOnly])

  const handleVegToggle = () => {
    setVegOnly((previous) => {
      const newValue = !previous

      if (newValue) {
        setNonVegOnly(false)
      }

      return newValue
    })
  }

  const handleNonVegToggle = () => {
    setNonVegOnly((previous) => {
      const newValue = !previous

      if (newValue) {
        setVegOnly(false)
      }

      return newValue
    })
  }

  return (
    <div className="mt-8">

      {/* FILTER SECTION */}

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-center">

        {/* VEG */}

        <button
          type="button"
          onClick={handleVegToggle}
          className="flex items-center gap-2"
        >
          <span className="text-xs font-semibold">
            Veg
          </span>

          <span
            className={`flex h-7 w-12 items-center rounded-full p-1 transition-colors ${
              vegOnly ? "bg-green-500" : "bg-muted"
            }`}
          >
            <span
              className={`h-5 w-5 rounded-full bg-green-500 shadow-sm transition-transform ${
                vegOnly
                  ? "translate-x-5 bg-white"
                  : ""
              }`}
            />
          </span>
        </button>

        {/* NON VEG */}

        <button
          type="button"
          onClick={handleNonVegToggle}
          className="flex items-center gap-2"
        >
          <span className="text-xs font-semibold">
            Non veg
          </span>

          <span
            className={`flex h-7 w-12 items-center rounded-full p-1 transition-colors ${
              nonVegOnly ? "bg-red-500" : "bg-muted"
            }`}
          >
            <span
              className={`h-5 w-5 rounded-full bg-red-500 shadow-sm transition-transform ${
                nonVegOnly
                  ? "translate-x-5 bg-white"
                  : ""
              }`}
            />
          </span>
        </button>

        {/* SEARCH */}

        <div className="relative w-full max-w-md">
          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search for dishes"
            className="h-14 w-full rounded-2xl border border-border bg-background px-5 pr-12 text-sm outline-none transition focus:border-foreground"
          />

          <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-lg text-muted-foreground">
            🔍
          </span>
        </div>

      </div>

      {/* ACTIVE FILTER MESSAGE */}

      {(vegOnly || nonVegOnly || search) && (
        <div className="mt-5 text-center text-sm text-muted-foreground">

          {vegOnly && (
            <span>
              Showing vegetarian items
            </span>
          )}

          {nonVegOnly && (
            <span>
              Showing non-vegetarian items
            </span>
          )}

          {search && (
            <span>
              {vegOnly || nonVegOnly ? " • " : ""}
              Search: "{search}"
            </span>
          )}

        </div>
      )}

      {/* CATEGORIES */}

      <div className="mt-8 space-y-3">

        {filteredCategories.length === 0 ? (

          <div className="rounded-2xl border border-border p-10 text-center">
            <p className="font-semibold">
              No dishes found
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Try another search or filter.
            </p>
          </div>

        ) : (

          filteredCategories.map((category) => (

            <details
              key={category.categoryId}
              className="group overflow-hidden rounded-2xl border border-border bg-background"
            >

              {/* CATEGORY HEADER */}

              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-5 transition-colors hover:bg-muted/40 [&::-webkit-details-marker]:hidden">

                <div className="flex items-center gap-3">

                  <span className="text-lg text-green-500 transition-transform duration-200 group-open:rotate-180">
                    ↓
                  </span>

                  <span className="text-xl font-extrabold tracking-tight">
  {category.categoryName}
</span>

                  <span className="text-sm text-muted-foreground">
                    ({category.products.length})
                  </span>

                </div>

              </summary>

              {/* PRODUCTS */}

              <div className="border-t border-border p-4">

                <div className="space-y-4">

                  {category.products.map((product) => (

                    <div
                      key={product.productId}
                      className="rounded-2xl border border-border p-5 transition-colors hover:bg-muted/30"
                    >

                      <div className="flex items-start justify-between gap-5">

                        {/* PRODUCT DETAILS */}

                        <div className="min-w-0">

                          <div className="flex items-center gap-2">

                            <span
                              className={`h-2 w-2 rounded-full ${
                                product.isVeg
                                  ? "bg-green-500"
                                  : "bg-red-500"
                              }`}
                            />

                            <h3 className="text-base font-bold">
                              {product.productName}
                            </h3>

                          </div>

                          {/* DESCRIPTION */}

                          {product.description && (
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                              {product.description}
                            </p>
                          )}

                          {/* PRICE */}

                          <p className="mt-3 text-base font-bold">
                            ₹{product.onlinePrice}
                          </p>

                        </div>

                        {/* RIGHT SIDE */}

                        <div className="flex shrink-0 flex-col items-end gap-4">

                          {/* VEG / NON VEG */}

                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                              product.isVeg
                                ? "border-green-500/30 text-green-500"
                                : "border-red-500/30 text-red-500"
                            }`}
                          >
                            {product.isVeg
                              ? "VEG"
                              : "NON-VEG"}
                          </span>

                          {/* ADD */}

                          <a
                            href="/jippy-mart-qrcode"
                            className="rounded-full bg-foreground px-6 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-105"
                          >
                            Add
                          </a>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </details>

          ))

        )}

      </div>

    </div>
  )
}