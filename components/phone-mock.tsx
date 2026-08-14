import Image from "next/image"
import { Bike, MapPin } from "lucide-react"

export function PhoneMock() {
  return (
    <div className="relative w-[280px] rotate-3 md:w-[340px]">
      <div className="rounded-[2.75rem] border border-white/15 bg-gradient-to-b from-secondary to-background p-3 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.7)]">
        <div className="overflow-hidden rounded-[2.25rem] bg-background">
          {/* status bar */}
          <div className="flex items-center justify-between px-6 pt-5 text-xs font-medium text-muted-foreground">
            <span>4:20</span>
            <span className="font-display font-bold tracking-tight text-foreground">JIPPY</span>
          </div>

          {/* dish image */}
          <div className="relative mx-4 mt-4 aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/dishes/biryani-palace.png"
              alt="Hyderabadi biryani order"
              fill
              className="object-cover"
              sizes="340px"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-white/70">
                Order #JM-8821
              </div>
              <div className="font-display text-lg font-bold text-white">Biryani Palace</div>
            </div>
          </div>

          {/* tracking row */}
          <div className="mx-4 my-4 flex items-center gap-3 rounded-2xl bg-secondary p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Bike className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-foreground">On the way · 32 min</div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-background">
                <div className="h-full w-2/3 rounded-full bg-primary" />
              </div>
            </div>
          </div>

          <div className="mx-4 mb-5 flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Delivering to Madhapur, Hyderabad
          </div>
        </div>
      </div>
    </div>
  )
}
