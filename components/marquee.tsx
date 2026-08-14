const ITEMS = [
  "Hyderabad's Finest Flavors",
   "Delivered in Minutes",
 "Breakfast Specials",
  "Lunch Made Easy",
  "Dinner Sorted",
  "Ghee Mithai",
  "Since Forever",
]

export function Marquee() {
  const loop = [...ITEMS, ...ITEMS]

  return (
    <section className="border-y border-border py-6" aria-hidden>
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
          {loop.map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="whitespace-nowrap font-display text-2xl font-semibold uppercase tracking-tight md:text-3xl">
                {item}
              </span>
              <span className="text-2xl text-primary md:text-3xl">✦</span>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
          {loop.map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="whitespace-nowrap font-display text-2xl font-semibold uppercase tracking-tight md:text-3xl">
                {item}
              </span>
              <span className="text-2xl text-primary md:text-3xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
