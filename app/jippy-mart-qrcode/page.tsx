"use client"

import { QRCodeSVG } from "qrcode.react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.jippymart.customer"

const APP_STORE_URL =
  "https://apps.apple.com/in/app/jippy-mart/id6755069616"

export default function JippyMartQrcodePage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-background px-5 pb-20 pt-24 text-foreground md:px-10 md:pt-28">

        <div className="mx-auto w-full max-w-5xl">

          {/* HEADER */}
          <section className="text-center">

            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              JippyMart
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Order via the{" "}
              <span className="text-orange-500">
                Jippy Mart
              </span>{" "}
              App
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground md:text-base">
              For a smooth delivery experience, place your order
              directly through the Jippy Mart app.
            </p>

          </section>


          {/* QR CARDS */}
          <section className="mx-auto mt-12 grid w-full max-w-3xl gap-6 md:grid-cols-2">

            {/* ANDROID */}
            <div className="group rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40">

              <div className="flex flex-col items-center">

                {/* PLATFORM */}
                <div className="flex items-center gap-2">

                  <span className="h-2.5 w-2.5 rounded-full bg-purple-500" />

                  <h2 className="text-xl font-bold">
                    Android
                  </h2>

                </div>

                <p className="mt-1 text-sm text-muted-foreground">
                  Google Play
                </p>


                {/* QR */}
                <div className="mt-7 rounded-2xl bg-white p-4 shadow-lg">
                  <QRCodeSVG
                    value={PLAY_STORE_URL}
                    size={185}
                    level="H"
                    bgColor="#ffffff"
                    fgColor="#000000"
                  />
                </div>


                <p className="mt-4 text-xs text-muted-foreground">
                  Scan to download
                </p>


                {/* BUTTON */}
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex h-11 w-full max-w-[190px] items-center justify-center rounded-full bg-red-500 px-6 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
                >
                  Open Play Store
                </a>

              </div>

            </div>


            {/* IPHONE */}
            <div className="group rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40">

              <div className="flex flex-col items-center">

                {/* PLATFORM */}
                <div className="flex items-center gap-2">

                  <span className="h-2.5 w-2.5 rounded-full bg-pink-500" />

                  <h2 className="text-xl font-bold">
                    iPhone
                  </h2>

                </div>

                <p className="mt-1 text-sm text-muted-foreground">
                  Apple App Store
                </p>


                {/* QR */}
                <div className="mt-7 rounded-2xl bg-white p-4 shadow-lg">
                  <QRCodeSVG
                    value={APP_STORE_URL}
                    size={185}
                    level="H"
                    bgColor="#ffffff"
                    fgColor="#000000"
                  />
                </div>


                <p className="mt-4 text-xs text-muted-foreground">
                  Scan to download
                </p>


                {/* BUTTON */}
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex h-11 w-full max-w-[190px] items-center justify-center rounded-full bg-green-500 px-6 text-sm font-semibold text-black transition-all duration-200 hover:bg-pink-400 hover:shadow-lg hover:shadow-pink-500/20"
                >
                  Open App Store
                </a>

              </div>

            </div>

          </section>


          {/* BOTTOM MESSAGE */}
          <section className="mx-auto mt-12 max-w-3xl border-t border-border pt-7 text-center">

            <p className="text-sm text-muted-foreground">
              Already have the Jippy Mart app?
            </p>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-semibold text-orange-500 underline-offset-4 transition-colors hover:text-orange-400 hover:underline"
            >
              Open Jippy Mart and place your order →
            </a>

          </section>

        </div>

      </main>

      <SiteFooter />
    </>
  )
}