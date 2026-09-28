const RULES = [
  {
    n: "01",
    title: "Real kitchens.",
    body: "Every restaurant is visited, tasted, and vetted. No dark kitchens, no delivery-only ghosts — just the places locals already love.",
  },
  {
    n: "02",
    title: "Real photography.",
    body: "We photograph every dish the way it actually lands on your table. No stock. No lies. If it looks like biryani, it is biryani.",
  },
  {
    n: "03",
    title: "Real fast.",
    body: "Average delivery under 32 minutes across Hyderabad. Our couriers know shortcuts your maps app doesn't.",
  },
  {
    n: "04",
    title: "Order on the app.",
    body: "This website is for the browse. The ordering, the tracking, the offers — that all happens on JippyMart on Play Store.",
  },
]

export function Manifesto() {
  return (
    <section id="manifesto" className="scroll-mt-24 border-t border-border bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" aria-hidden />
            <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              The Manifesto
            </span>
          </div>
          <h2 className="font-display text-5xl font-extrabold tracking-tight text-balance md:text-6xl">
            We don&apos;t do fake food.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">
            Four rules we don&apos;t break. They&apos;re printed on the wall of our Hyderabad office. They keep the food
            good.
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
          {RULES.map((rule) => (
            <div key={rule.n} className="flex gap-6">
              <span className="text-outline-muted select-none font-display text-7xl font-extrabold leading-none md:text-8xl">
                {rule.n}
              </span>
              <div className="pt-2">
                <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{rule.title}</h3>
                <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">{rule.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
