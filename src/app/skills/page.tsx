import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software technologies I have experience in.',
}

export default function Skills() {
  return (
    <SimpleLayout
      title="Software technologies I have experience in."
      intro="These are tools and technologies I have a great deal of experience in and have used for both professional and personal projects."
    >
      <div className="space-y-20">
        <ToolsSection title="UI and State Management">
          <Tool title="React">
            Well versed in functional component design, use of standard and
            custom hooks
          </Tool>
          <Tool title="Redux">
            The only display on the market if you want something HiDPI and
            bigger than 27”. When you’re working at planetary scale, every pixel
            you can get counts.
          </Tool>
          <Tool title="Typescript">
            They don’t make keyboards the way they used to. I buy these any time
            I see them go up for sale and keep them in storage in case I need
            parts or need to retire my main.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Styling">
          <Tool title="TailwindCSS">
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, Sublime Text is still the best text editor ever
            made.
          </Tool>
          <Tool title="SCSS">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
          <Tool title="CSS Modules">
            Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects
            over the years.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Server Side">
          <Tool title=".NET (inclusive of full framework and .NET 6)">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Databases">
          <Tool title="Alfred">
            It’s not the newest kid on the block but it’s still the fastest. The
            Sublime Text of the application launcher world.
          </Tool>
          <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it’s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
          <Tool title="SavvyCal">
            Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Cloud">
          <Tool title="AWS Lambda">
            It’s not the newest kid on the block but it’s still the fastest. The
            Sublime Text of the application launcher world.
          </Tool>
          <Tool title="CloudFormation">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it’s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
