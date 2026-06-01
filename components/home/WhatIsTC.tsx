import { Pillars } from '@/components/home/Pillars'
import { FadeIn } from '@/components/ui/FadeIn'

export function WhatIsTC() {
  return (
    <section className="bg-tc-off-white py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-start md:gap-12 md:px-8 lg:gap-16">
        <FadeIn className="max-w-lg">
          <h2 className="font-sans text-3xl font-semibold tracking-tight text-tc-text md:text-4xl">
            Not a conference.
            <br />A conversation.
          </h2>
          <p className="mt-5 font-sans text-base text-tc-muted leading-relaxed md:text-lg">
            TransportCamp is an unconference — there is no preset agenda. On the
            morning of the event, participants propose sessions, vote on topics,
            and lead discussions throughout the day.
          </p>
          <p className="mt-4 font-sans text-base text-tc-muted leading-relaxed md:text-lg">
            Whether you work in government, operations, research, tech or community
            advocacy, you bring the questions. Everyone contributes.
          </p>
          <p className="mt-4 font-sans text-base text-tc-muted leading-relaxed md:text-lg">
            Expect practical conversations on mobility, planning, data and policy
            — shaped by the room, not a programme committee months in advance.
          </p>
        </FadeIn>

        <Pillars />
      </div>
    </section>
  )
}
