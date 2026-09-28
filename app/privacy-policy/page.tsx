import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>

            <p className="mt-4 text-sm text-muted-foreground">
              Effective Date: May 29, 2025
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Welcome to JippyMart. We value your privacy and are committed to
              protecting your personal information. This Privacy Policy
              explains how we collect, use, disclose, and safeguard information
              when you use our platform as a User, Restaurant Partner, or
              Driver.
            </p>
          </section>

          {/* CONTENT */}
          <article className="space-y-12">

            {/* 1. INFORMATION WE COLLECT */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                1. Information We Collect
              </h2>

              <div className="mt-7 space-y-8">

                {/* USERS */}
                <div>
                  <h3 className="text-xl font-semibold">
                    A. For Users
                  </h3>

                  <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">
                        Personal Information:
                      </strong>{" "}
                      Full name, email address, phone number, delivery address
                    </li>

                    <li>
                      <strong className="text-foreground">
                        Payment Information:
                      </strong>{" "}
                      Collected via secure third-party processors. We do not
                      store card details.
                    </li>

                    <li>
                      <strong className="text-foreground">
                        Order Information:
                      </strong>{" "}
                      Food preferences, order history, feedback, frequency
                    </li>

                    <li>
                      <strong className="text-foreground">
                        Device & Usage Data:
                      </strong>{" "}
                      IP address, device model, OS version, app usage patterns
                    </li>

                    <li>
                      <strong className="text-foreground">
                        Location Data:
                      </strong>{" "}
                      Live location for delivery tracking and service
                      optimization
                    </li>

                    <li>
                      <strong className="text-foreground">
                        Installed Applications (Optional):
                      </strong>{" "}
                      Metadata on similar apps for personalization
                    </li>
                  </ul>
                </div>

                {/* RESTAURANT PARTNERS */}
                <div>
                  <h3 className="text-xl font-semibold">
                    B. For Restaurant Partners
                  </h3>

                  <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">
                        Business Information:
                      </strong>{" "}
                      Business name, registration number, address, cuisine types
                    </li>

                    <li>
                      <strong className="text-foreground">
                        Contact Information:
                      </strong>{" "}
                      Name, email, phone number of account manager or contact
                      person
                    </li>

                    <li>
                      <strong className="text-foreground">
                        Banking & Tax Information:
                      </strong>{" "}
                      Bank account details, GSTIN, PAN
                    </li>

                    <li>
                      <strong className="text-foreground">
                        Order Performance:
                      </strong>{" "}
                      Menu updates, order processing time, customer reviews
                    </li>
                  </ul>
                </div>

                {/* DRIVERS */}
                <div>
                  <h3 className="text-xl font-semibold">
                    C. For Drivers
                  </h3>

                  <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">
                        Personal & Contact Information:
                      </strong>{" "}
                      Full name, photo, phone number, address, emergency
                      contact
                    </li>

                    <li>
                      <strong className="text-foreground">
                        Driver Documents:
                      </strong>{" "}
                      Driving license, vehicle registration, insurance
                    </li>

                    <li>
                      <strong className="text-foreground">
                        Location & Activity:
                      </strong>{" "}
                      Real-time GPS tracking, delivery status, route history
                    </li>

                    <li>
                      <strong className="text-foreground">
                        Device Information:
                      </strong>{" "}
                      OS, app version, device model
                    </li>

                    <li>
                      <strong className="text-foreground">
                        Banking Details:
                      </strong>{" "}
                      For payment settlements
                    </li>
                  </ul>
                </div>

              </div>
            </section>

            {/* 2. HOW WE USE INFORMATION */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                2. How We Use the Information
              </h2>

              <ul className="mt-6 list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                <li>Fulfill orders and deliveries</li>
                <li>Authenticate and manage accounts</li>
                <li>Personalize app experience and recommendations</li>
                <li>Communicate order updates and support</li>
                <li>Improve app performance and user experience</li>
              </ul>

              <div className="mt-7 space-y-4">
                <p className="leading-7 text-muted-foreground">
                  <strong className="text-foreground">
                    Promotional Uses (if opted-in):
                  </strong>{" "}
                  Send offers, discounts, and updates
                </p>

                <p className="leading-7 text-muted-foreground">
                  <strong className="text-foreground">
                    For Restaurants:
                  </strong>{" "}
                  Enable order management, settle payments, manage reviews
                </p>

                <p className="leading-7 text-muted-foreground">
                  <strong className="text-foreground">
                    For Drivers:
                  </strong>{" "}
                  Assign deliveries, calculate earnings, ensure compliance
                </p>
              </div>
            </section>

            {/* 3. SHARING */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                3. Information Sharing and Disclosure
              </h2>

              <ul className="mt-6 list-disc space-y-4 pl-6 leading-7 text-muted-foreground">
                <li>
                  We do not sell or rent personal data.
                </li>

                <li>
                  <strong className="text-foreground">
                    With Service Providers:
                  </strong>{" "}
                  Payment gateways, cloud services, delivery partners
                </li>

                <li>
                  <strong className="text-foreground">
                    Legal Requirements:
                  </strong>{" "}
                  Compliance with laws or legal processes
                </li>

                <li>
                  <strong className="text-foreground">
                    Business Transfers:
                  </strong>{" "}
                  Data may be transferred during mergers or acquisitions
                </li>
              </ul>
            </section>

            {/* 4. SECURITY */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                4. Data Security
              </h2>

              <ul className="mt-6 list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                <li>
                  We use SSL, firewalls, access controls, and secure data
                  storage.
                </li>

                <li>
                  Note: No method of transmission or storage is 100% secure.
                </li>
              </ul>
            </section>

            {/* 5. RIGHTS */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                5. Your Rights
              </h2>

              <ul className="mt-6 list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                <li>Access, correction, deletion of data</li>
                <li>Opt-out of promotional messages</li>
                <li>Contact via in-app support or website</li>
              </ul>
            </section>

            {/* 6. COOKIES */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                6. Cookies and Tracking Technologies
              </h2>

              <p className="mt-6 leading-7 text-muted-foreground">
                Used for tracking, analysis, and personalization.
              </p>
            </section>

            {/* 7. MESSAGING */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                7. Messaging and Communication
              </h2>

              <ul className="mt-6 list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                <li>
                  <strong className="text-foreground">
                    In-App Messages:
                  </strong>{" "}
                  Stored for support and compliance
                </li>

                <li>
                  <strong className="text-foreground">
                    SMS and Call Logs (with consent):
                  </strong>{" "}
                  May include phone numbers, carrier info, timestamp
                </li>
              </ul>
            </section>

            {/* 8. CHILDREN */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                8. Children&apos;s Privacy
              </h2>

              <p className="mt-6 leading-7 text-muted-foreground">
                Not intended for children under 13. No data knowingly
                collected.
              </p>
            </section>

            {/* 9. UPDATES */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                9. Policy Updates
              </h2>

              <p className="mt-6 leading-7 text-muted-foreground">
                Updates will reflect a new Effective Date and be notified
                in-app.
              </p>
            </section>

            {/* 10. CONTACT */}
            <section className="border-t border-border pt-10">
              <h2 className="text-2xl font-bold md:text-3xl">
                10. Contact Us
              </h2>

              <div className="mt-6 space-y-4 text-muted-foreground">
                <p className="font-semibold text-foreground">
                  JippyMart Privacy Team
                </p>

                <p>
                  Email:{" "}
                  <a
                    href="mailto:support@jippymart.in"
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    support@jippymart.in
                  </a>
                </p>

                <p>
                  Website:{" "}
                  <a
                    href="https://www.jippymart.in/contact-us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    www.jippymart.in/contact
                  </a>
                </p>

                <p>
                  In-app Help Section
                </p>
              </div>
            </section>

          </article>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}