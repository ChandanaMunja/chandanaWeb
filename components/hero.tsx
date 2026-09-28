import Image from "next/image"
import { ArrowUpRight, Star } from "lucide-react"
import { PhoneMock } from "@/components/phone-mock"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
      {/* subtle grid + glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/4 h-[600px] w-[600px] rounded-full bg-primary/25 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="pb-10">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-foreground/50" aria-hidden />
              <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Now serving · Hyderabad
              </span>
            </div>

            <h1 className="font-display font-extrabold leading-[0.9] tracking-tight text-balance">
              <span className="block text-[16vw] sm:text-[13vw] lg:text-[7.5rem]">Hyderabad&apos;s</span>
              <span className="block text-[16vw] italic text-primary sm:text-[13vw] lg:text-[7.5rem]">
                finest kitchens.
              </span>
              <span className="block text-outline text-[13vw] sm:text-[11vw] lg:text-[6.5rem]">One tap away.</span>
            </h1>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              Browse curated restaurants, real menus, real photography. Then hop over to the app for the actual
              ordering — because our couriers work better than our checkout page ever could.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
            href="/jippy-mart-qrcode"
                 target="_blank"
  rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Get it on Play Store
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <div className="flex items-center gap-5 text-sm">
                <div>
                  <div className="font-display text-lg font-bold">100k+</div>
                  <div className="text-muted-foreground">downloads</div>
                </div>
                <span className="h-8 w-px bg-border" aria-hidden />
                <div>
                  <div className="flex items-center gap-1 font-display text-lg font-bold">
                    4.6 <Star className="h-4 w-4 fill-primary text-primary" />
                  </div>
                  <div className="text-muted-foreground">on Play Store</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* produce badge */}
            <div className="absolute -left-2 top-6 z-20 h-32 w-32 overflow-hidden rounded-full border-4 border-background shadow-2xl sm:left-6 md:h-40 md:w-40">
              <Image
                src="/hero-produce.png"
                alt="Fresh produce at a Tirupati market"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <PhoneMock />
          </div>
        </div>
      </div>
    </section>
  )
}
