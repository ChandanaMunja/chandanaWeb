import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Restaurants } from "@/components/restaurants"
import { Manifesto } from "@/components/manifesto"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <Hero />

      <Marquee />

      <Restaurants />

      <Manifesto />

      <SiteFooter />
    </main>
  )
}