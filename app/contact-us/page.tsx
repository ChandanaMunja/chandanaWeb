"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSubmitted(false)

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed to send message")

      setSubmitted(true)
      form.reset()
    } catch (err) {
      setError("Something went wrong. Please try again in a moment.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background px-5 py-20 md:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Contact JippyMart
            </p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Tell Us About Yourself
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              Have a question, suggestion, or need help? Send us a message
              and we&apos;ll get back to you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10"
          >
            <div className="mb-6">
              <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                Your Name
              </label>
              <input
                id="name" name="name" type="text"
                placeholder="Enter your name" required disabled={loading}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary disabled:opacity-60"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                Email Address
              </label>
              <input
                id="email" name="email" type="email"
                placeholder="Enter your email address" required disabled={loading}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary disabled:opacity-60"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
                Phone Number
              </label>
              <input
                id="phone" name="phone" type="tel"
                placeholder="Enter your phone number" required disabled={loading}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary disabled:opacity-60"
              />
            </div>

            <div className="mb-7">
              <label htmlFor="message" className="mb-2 block text-sm font-semibold uppercase">
                How Can We Help You?
              </label>
              <textarea
                id="message" name="message" rows={6}
                placeholder="Hi there, I would like to..." required disabled={loading}
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary disabled:opacity-60"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}
          </form>

          {submitted && (
            <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-center">
              <p className="font-semibold text-green-700">Thanks for contacting us!</p>
              <p className="mt-1 text-sm text-green-600">
                We&apos;ve received your message and will get back to you soon.
              </p>
            </div>
          )}

          <div className="mt-10 text-center text-sm text-muted-foreground">
            <p>
              You can also reach us at{" "}
              <a href="mailto:support@jippymart.in" className="font-medium text-primary hover:underline">
                support@jippymart.in
              </a>
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}