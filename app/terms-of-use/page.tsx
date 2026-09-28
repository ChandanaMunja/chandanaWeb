import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function TermsOfUsePage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen px-5 pb-20 pt-24 md:px-10 md:pt-28">
        <div className="mx-auto w-full max-w-4xl">

          {/* HEADER */}
          <section className="mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              JippyMart
            </div>

            <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight md:text-6xl">
              Terms of Use
            </h1>

            <p className="mt-4 text-sm text-muted-foreground">
              Effective Date: May 01, 2026
            </p>
          </section>

          {/* CONTENT */}
          <article className="space-y-12">

            {/* 1 */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                1. Order Cancellation Policy
              </h2>

              <div className="mt-6 space-y-8">

                <div>
                  <h3 className="text-lg font-semibold">
                    1.1 General Rule
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    Once an order is confirmed on Jippy Mart, it enters our
                    processing system immediately. Therefore, cancellation
                    requests are not accepted after confirmation unless the
                    reasons fall under specific exceptions outlined below.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    1.2 Customer-Initiated Cancellations
                  </h3>

                  <ul className="mt-3 list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                    <li>
                      If a customer decides to cancel an order after
                      confirmation without valid reason, a cancellation fee of
                      ₹75 may be charged to cover administrative and handling
                      costs.
                    </li>

                    <li>
                      Valid reasons for cancellation without a penalty include:
                      <ul className="mt-3 list-disc space-y-2 pl-6">
                        <li>
                          Delay in order processing or delivery beyond
                          reasonable expectations.
                        </li>
                        <li>
                          Changes in order due to unavailability of items.
                        </li>
                        <li>
                          Errors in order details caused by Jippy Mart.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    1.3 Jippy Mart-Initiated Cancellations
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    Jippy Mart reserves the right to cancel any order under
                    the following circumstances:
                  </p>

                  <ul className="mt-3 list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                    <li>
                      We are unable to contact the customer via the registered
                      phone number or email at the time of confirmation.
                    </li>

                    <li>
                      The customer fails to provide access or respond at the
                      delivery address during the scheduled delivery window.
                    </li>

                    <li>
                      All or major items in the order are unavailable at the
                      time of dispatch.
                    </li>

                    <li>
                      The delivery address falls outside Jippy Mart's
                      serviceable area.
                    </li>

                    <li>
                      Delivery is hindered due to natural calamities, public
                      unrest, or any unforeseen external disruption.
                    </li>
                  </ul>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    In such cases, a full refund will be processed, if payment
                    has already been made.
                  </p>
                </div>

              </div>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                2. Refund Policy
              </h2>

              <div className="mt-6 space-y-8">

                <div>
                  <h3 className="text-lg font-semibold">
                    2.1 Eligibility for Refund
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    Customers are entitled to a full or partial refund under
                    the following conditions:
                  </p>

                  <ul className="mt-3 list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                    <li>
                      The order was cancelled by Jippy Mart due to
                      unavailability, delivery issues, or force majeure.
                    </li>

                    <li>
                      The delivered order is damaged, tampered with, or
                      incorrect.
                    </li>

                    <li>
                      The order is incomplete, i.e., one or more products are
                      missing.
                    </li>

                    <li>
                      The order was paid for online, but not delivered due to
                      service constraints.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    2.2 Refund Process
                  </h3>

                  <ul className="mt-3 list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                    <li>
                      Refunds will be initiated within 24–48 hours after the
                      cancellation is confirmed.
                    </li>

                    <li>
                      The amount will be credited to the original payment
                      source (e.g., debit card, credit card, UPI) as per your
                      bank's processing timelines, generally within 3–5
                      business days.
                    </li>

                    <li>
                      For Cash on Delivery (COD) orders, refunds (if
                      applicable) will be processed through bank transfer or
                      UPI within 5–7 business days, subject to verification.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    2.3 Refund Denial or Deductions
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    Refunds may be withheld or partially processed in the
                    following cases:
                  </p>

                  <ul className="mt-3 list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                    <li>
                      The cancellation was done after dispatch of the product,
                      unless due to damage or error.
                    </li>

                    <li>
                      The customer fails to cooperate in verification (e.g.,
                      refuses to share images of damaged goods).
                    </li>

                    <li>
                      A refund is requested for perishable items that were
                      already accepted or consumed.
                    </li>
                  </ul>
                </div>

              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                3. Delivery & Real-Time Support
              </h2>

              <ul className="mt-6 list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                <li>
                  Jippy Mart offers real-time order tracking and updates
                  through our app and SMS/email notifications.
                </li>

                <li>
                  Customers may receive a confirmation call or message before
                  dispatch to reconfirm order details and avoid last-minute
                  cancellations.
                </li>

                <li>
                  In the case of doorstep cancellations, our delivery staff is
                  trained to record feedback, offer resolutions, and help you
                  complete the purchase wherever possible.
                </li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                4. Exceptions & Special Cases
              </h2>

              <p className="mt-6 leading-7 text-muted-foreground">
                We understand that sometimes genuine issues occur. In such
                cases:
              </p>

              <ul className="mt-3 list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                <li>
                  If the wrong item is delivered, customers are eligible for a
                  free replacement or refund.
                </li>

                <li>
                  If the product is damaged, we require a photo/video within
                  2 hours of delivery for verification.
                </li>

                <li>
                  If a delivery was missed due to error on our side, we will
                  reschedule at no extra charge or provide a refund.
                </li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                5. Customer Experience Commitment
              </h2>

              <p className="mt-6 leading-7 text-muted-foreground">
                Jippy Mart is committed to delivering a hassle-free experience.
                Therefore:
              </p>

              <ul className="mt-3 list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                <li>
                  We encourage users to review their orders carefully before
                  confirming.
                </li>

                <li>
                  Our customer support team is available via chat, phone, or
                  email to assist with order modifications, cancellations
                  (when possible), or concerns.
                </li>

                <li>
                  We aim to learn from each cancellation or refund to
                  continuously improve our service.
                </li>
              </ul>
            </section>

            {/* CONTACT */}
            <section className="border-t border-border pt-10">
              <h2 className="text-2xl font-bold md:text-3xl">
                Contact Us
              </h2>

              <div className="mt-5 space-y-3 text-muted-foreground">
                <p>
                  📧{" "}
                  <a
                    href="mailto:support@jippymart.in"
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    support@jippymart.in
                  </a>
                </p>

                <p>
                  📞{" "}
                  <a
                    href="tel:+919390579864"
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    +91-9390579864
                  </a>
                </p>

                <p>🕐 Available: Mon–Sun, 9 AM – 9 PM</p>
              </div>
            </section>

          </article>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}   