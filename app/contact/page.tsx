import type { Metadata } from 'next'
import { NewsletterSignup } from '@/components/home/NewsletterSignup'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { contactEmail, hasSocialLinks } from '@/data/social'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with TransportCamp — email, newsletter, and social channels.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-tc-off-white pt-28 pb-12 md:pt-32 md:pb-16">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <FadeIn>
              <SectionHeader
                title="Contact"
                description="Questions about TransportCamp events, sponsorship, or hosting a camp in your city? We'd like to hear from you."
              />
            </FadeIn>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <FadeIn>
                <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-tc-muted">
                  Email
                </h2>
                <p className="mt-4 font-sans text-lg text-tc-muted leading-relaxed">
                  For registrations, sponsorship, media, or general enquiries:
                </p>
                <div className="mt-6">
                  <Button
                    variant="primary"
                    size="lg"
                    href={`mailto:${contactEmail}`}
                  >
                    {contactEmail}
                  </Button>
                </div>

                <div className="mt-10">
                  <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-tc-muted">
                    Follow
                  </h2>
                  {hasSocialLinks() ? (
                    <SocialLinks variant="light" className="mt-4" />
                  ) : (
                    <p className="mt-4 font-sans text-sm text-tc-muted leading-relaxed">
                      Social links appear here once configured. Add your X profile
                      URL in the site environment (Instagram can be added when the
                      account is live).
                    </p>
                  )}
                </div>
              </FadeIn>

              <FadeIn delay={0.06}>
                <div className="rounded-sm border border-black/8 bg-tc-off-white p-6 md:p-8">
                  <NewsletterSignup variant="light" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
