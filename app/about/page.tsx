import type { Metadata } from 'next'
import { HistorySection } from '@/components/about/HistorySection'
import { WhoSection } from '@/components/about/WhoSection'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'About',
  description:
    'What is an unconference? Learn how TransportCamp works, who attends, and who organises the series.',
}

const steps = [
  {
    title: 'Morning board',
    body: 'Arrive, introduce yourself, and propose session topics on the communal agenda board.',
  },
  {
    title: 'Vote on sessions',
    body: 'Everyone votes on which topics matter most. The schedule takes shape in real time.',
  },
  {
    title: 'Run your session',
    body: 'Facilitate a discussion, workshop, case study or idea pitch — format is up to you.',
  },
  {
    title: 'Afternoon wrap',
    body: 'Close with shared reflections, then continue the conversation over drinks.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-tc-off-white pt-28 pb-12 md:pt-32 md:pb-16">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <FadeIn>
              <SectionHeader
                title="What is an unconference?"
                description="TransportCamp flips the traditional conference model. There are no keynote slots booked months ahead — participants shape the day together."
              />
            </FadeIn>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <FadeIn>
              <h2 className="font-sans text-2xl font-semibold text-tc-text md:text-3xl">
                How the day works
              </h2>
            </FadeIn>
            <ol className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
              {steps.map((step, index) => (
                <FadeIn key={step.title} delay={index * 0.06}>
                  <li className="flex gap-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-tc-dark font-sans text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-sans text-xl font-semibold text-tc-text">
                        {step.title}
                      </h3>
                      <p className="mt-2 font-sans text-tc-muted leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </section>

        <WhoSection />

        <HistorySection />
      </main>
      <Footer />
    </>
  )
}
