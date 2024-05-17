import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-8">
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
  title: 'Skills',
  description: 'Software technologies I have experience in.',
}

export default function Skills() {
  return (
    <SimpleLayout
      title="Software technologies I have experience in."
      intro="These are tools and technologies I have a great deal of experience in and have used for both professional and personal projects."
    >
      <div className="space-y-20">
        <ToolsSection title="Frontend">
          <Tool title="UI Libraries">React, Vue</Tool>
          <Tool title="State Management">Redux, Redux-Toolkit</Tool>
          <Tool title="Languages">Typescript, Javascript</Tool>
          <Tool title="Styling">
            TailwindCSS, MaterialUI, SCSS, CSS Modules
          </Tool>
        </ToolsSection>
        <ToolsSection title="Backend">
          <Tool title=".NET">.NET Framework, .NET 6</Tool>
          <Tool title="Languages">C#</Tool>
        </ToolsSection>
        <ToolsSection title="Databases">
          <Tool title="SQL Server">
            Table and query design and implementation, constraints and indices,
            use of transactions
          </Tool>
          <Tool title="MongoDB">
            Collection, document, and query design and implementation
          </Tool>
        </ToolsSection>
        <ToolsSection title="Cloud">
          <Tool title="AWS Lambda">
            Functions written in Node.js and Python
          </Tool>
          <Tool title="CloudFormation">
            Creation and modification of templates for standing up
            infrastructure related to secrets management, AWS Lambda, API
            Gateway.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Build & Deploy">
          <Tool title="Team City">
            Creation and modification of build pipelines with agents hosted in
            docker containers. Creation and modification of build steps,
            dotCover test coverage reports, and use of custom Powershell
            scripts.
          </Tool>
          <Tool title="Octopus">
            Creation and modification of deployment pipelines to both Windows
            hosts and K8s. Creation and modification of process steps, alerting
            and notifications, and variables via library sets.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Observability">
          <Tool title="Datadog">
            Led operational review meetings for our team. Gathered metrics
            around latency, error rates, and CPU/memory metrics. Managed the
            creation and modification of monitors, SLOs, dashboards. Monitored
            production by analyzing traces and logs to gather insights and
            generate actionable work items.
          </Tool>
          <Tool title="Kibana">
            Querying and analyzing logs for production issues.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
