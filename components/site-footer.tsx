import { ArrowUpRight, AtSign, Camera, Send } from "lucide-react"

const EXPLORE = [
  { label: "Contact Us", href: "/contact-us" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "About Us", href: "/about-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
]

const FOR_USERS = [
  { label: "User Login", href: "http://localhost:3000/jippy-mart-qrcode" },
  { label: "User Register", href: "http://localhost:3000/jippy-mart-qrcode" },
  { label: "Account Setting", href: "http://localhost:3000/jippy-mart-qrcode" },
  {
    label: "Merchant Register",
    href: "http://srv1617582.hstgr.cloud:3006/register",
  },
]

const FOLLOW = [
  {
    label: "@jippymart",
    icon: Camera,
    href: "https://www.instagram.com/jippyfooddelivery/",
  },
  {
    label: "facebook.com/jippymart",
    icon: AtSign,
    href: "https://www.facebook.com/p/Jippy-Mart-61564613597092/",
  },
  {
    label: "@jippymart",
    icon: Send,
    href: "https://t.me/jippymart",
  },
]

export function SiteFooter() {
  return (
    <footer id="footer" className="scroll-mt-24 border-t border-border">
      {/* CTA */}
      <div className="mx-auto max-w-[1400px] px-5 py-24 text-center md:px-10 md:py-32">
        <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Hungry yet?
        </div>

        <h2 className="mx-auto max-w-4xl font-display text-6xl font-extrabold leading-[0.95] tracking-tight text-balance md:text-8xl">
          Get JippyMart on{" "}
          <span className="italic text-primary">Play Store</span>
        </h2>

        <a
          href="/jippy-mart-qrcode"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-7 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground/40"
        >
          Download the app

          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Footer grid */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10">

          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">

            {/* Pitch */}
            <div>
              <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {/* (01) The Pitch */}
              </div>

              <h3 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-balance md:text-5xl">
                Real food. Real kitchens. Delivered.
              </h3>

              <a
                href="/jippy-mart-qrcode"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground/40"
              >
                Get JippyMart on Play Store

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Explore */}
            <FooterCol title="Explore">
              {EXPLORE.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-1.5 text-lg text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </FooterCol>

            {/* For Users */}
            <FooterCol title="For Users">
              {FOR_USERS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-1.5 text-lg text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </FooterCol>

            {/* Follow */}
            <FooterCol title="Follow">
  {FOLLOW.map((item, index) => (
    <a
      key={`${item.label}-${index}`}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 py-1.5 text-lg text-foreground/80 transition-colors hover:text-primary"
    >
      <item.icon className="h-4 w-4" />
      {item.label}
    </a>
  ))}
</FooterCol>

          </div>

          {/* Bottom */}
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-xs uppercase tracking-widest text-muted-foreground">
            <span>© 2026 JippyMart — Hyderabad, IN</span>

            <span>
              Built for the browse. Ordered on the app.
            </span>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="overflow-hidden px-5 pb-6 md:px-10">
          <div className="text-outline-muted select-none whitespace-nowrap text-center font-display text-[22vw] font-extrabold leading-none tracking-tight">
            JIPPY
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </div>

      {children}
    </div>
  )
}