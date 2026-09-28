import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutUsPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-background">

        {/* HERO */}
        <section className="px-5 pb-16 pt-24 md:px-10 md:pb-24 md:pt-32">
          <div className="mx-auto max-w-[1200px]">
            <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              About Jippy
            </p>

            <h1 className="max-w-5xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Building a{" "}
              <span className="italic text-primary">
                Fairer Future
              </span>{" "}
              for Food Delivery
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
              Jippy is a next-generation food delivery platform built to
              create a better balance between restaurants, customers, and
              delivery partners.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="border-t border-border px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                 Why Jippy
              </p>
            </div>

            <div className="space-y-6 text-lg leading-8 text-foreground/80">
              <p>
                We believe food delivery should work for everyone—not just
                the platform.
              </p>

              <p>
                Traditional delivery models can put pressure on restaurants
                through high commissions and promotional costs, while
                customers often face additional fees and price differences.
                Jippy is building an alternative: a subscription-based, 0%
                commission model that helps restaurants retain more of their
                earnings while giving customers a transparent and convenient
                ordering experience.
              </p>

              <p>
                We started by validating our model in emerging Tier 3 and
                Tier 4 markets, learning directly from restaurants,
                customers, and delivery partners. With 100,000+ app
                downloads, 500+ restaurants onboarded, and 12,000+ orders
                processed, we are now taking those learnings into larger
                markets.
              </p>

              <p>
                Our journey starts with food delivery, but our ambition goes
                beyond food.
              </p>
            </div>

          </div>
        </section>

        {/* MISSION */}
        <section className="border-t border-border px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1200px]">

            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Our Mission
            </p>

            <h2 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Make local commerce fairer, more transparent, and more
              sustainable.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
              We want to empower local restaurants and businesses with
              technology that helps them grow without giving away an
              unsustainable share of every transaction.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
              At the same time, we want customers to receive transparent
              pricing and reliable service, while delivery partners have
              access to better and more predictable earning opportunities.
            </p>

          </div>
        </section>

        {/* VISION */}
        <section className="border-t border-border px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1200px]">

            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
               Our Vision
            </p>

            <h2 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              To build India&apos;s most trusted fair-commerce ecosystem.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
              We envision a future where local businesses can compete and
              grow on their own terms, customers have greater choice and
              transparency, and technology creates value for every
              participant in the ecosystem.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
              Jippy aims to grow from a food-delivery platform into a broader
              hyperlocal commerce network, connecting customers with the
              restaurants, businesses, products, and services around them.
            </p>

          </div>
        </section>

        {/* WHAT WE STAND FOR */}
        <section className="border-t border-border px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1200px]">

            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
               What We Stand For
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

              {/* Restaurants */}
              <div className="rounded-2xl border border-border p-7 md:p-9">
                <h3 className="font-display text-2xl font-bold md:text-3xl">
                  Fair for Restaurants
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  Lower platform costs and a model designed to help local
                  restaurants retain more value.
                </p>
              </div>

              {/* Customers */}
              <div className="rounded-2xl border border-border p-7 md:p-9">
                <h3 className="font-display text-2xl font-bold md:text-3xl">
                  Fair for Customers
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  Clear pricing, convenient ordering, and no unnecessary
                  complexity.
                </p>
              </div>

              {/* Delivery Partners */}
              <div className="rounded-2xl border border-border p-7 md:p-9">
                <h3 className="font-display text-2xl font-bold md:text-3xl">
                  Fair for Delivery Partners
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  A delivery ecosystem designed around transparent and
                  sustainable earning opportunities.
                </p>
              </div>

              {/* Local Businesses */}
              <div className="rounded-2xl border border-border p-7 md:p-9">
                <h3 className="font-display text-2xl font-bold md:text-3xl">
                  Built for Local Businesses
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  Technology that helps independent restaurants and
                  businesses compete in an increasingly digital marketplace.
                </p>
              </div>

              {/* Responsibility */}
              <div className="rounded-2xl border border-border p-7 md:p-9 md:col-span-2">
                <h3 className="font-display text-2xl font-bold md:text-3xl">
                  Growth with Responsibility
                </h3>

                <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
                  We believe sustainable growth matters more than growth at
                  any cost.

                </p>
              </div>

            </div>
          </div>
        </section>

        {/* OUR BELIEF */}
        <section className="border-t border-border px-5 py-20 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1200px] text-center">

            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Our Belief
            </p>

            <h2 className="mx-auto mt-6 max-w-5xl font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              When restaurants succeed, customers benefit. When customers
              benefit, local commerce grows.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
              And when the entire ecosystem grows together, everyone wins.
            </p>

            <p className="mt-8 font-display text-2xl font-bold md:text-3xl">
              That&apos;s the future Jippy is building.
            </p>

          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  )
}