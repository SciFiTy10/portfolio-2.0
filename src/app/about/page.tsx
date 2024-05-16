import { type Metadata } from 'next'
import { SocialLink } from '@/components/SocialLink'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import logoPaylocity from '@/images/logos/paylocity-logo.svg'
import logoEcraGroup from '@/images/logos/ecra-logo.svg'
import Image, { type ImageProps } from 'next/image'

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Paylocity',
      title: 'Senior Software Engineer',
      logo: logoPaylocity,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Paylocity',
      title: 'Software Engineer',
      logo: logoPaylocity,
      start: '2021',
      end: '2023',
    },
    {
      company: 'ECRA Group',
      title: 'Frontend Developer',
      logo: logoEcraGroup,
      start: '2019',
      end: '2021',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: `I’m Ty Ridings. I live in the suburbs of Chicago, where I build software to make people's lives easier.`,
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Ty Ridings. I live in the suburbs of Chicago, where I build
            software to make people's lives easier.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Building software is one of my favorite things to do, and my
              decision to pursue it as a career has given me some of the best
              opportunities of my life. I really enjoy the challenge of solving
              a problem and the feeling you get once you've gotten over the
              hurdle. In my mind, it's one of the most humbling, yet rewarding
              experiences you can have.
            </p>
            <p>
              I first got into software engineering when I was in college and I
              was hooked immediately. While I considered myself to be a great
              student in other subjects, building software was a completely
              different animal. It forced me to adapt how I thought about
              problems, and to earn the progress of solving them by asking the
              right questions and doing the legwork to figure things out when I
              was stuck. In many ways, building software taught me how to think
              and the learnings I've taken from doing it have been something
              that's helped me tremendously in other areas of my life.
            </p>
            <p>
              When I'm not building applications, you can probably find me on my
              boat. I absolutely love being out on the water. It's kind of funny
              because while software requires a more measured approach to
              things, boats are quite the opposite. Nobody who thinks rationally
              about their money buys a boat (for recreational use). But life is
              short, and some of the biggest smiles I've ever cracked were on my
              pontoon. To me, there's no better way to spend your day than
              taking a cruise with your family, or anchoring in with friends
              while our kids swim around us. I can have a bad day, but the
              moment I start my boat is the end of that bad day.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/SciFiTy10"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/tyler-ridings-24804585/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
              <Resume />
            </div>
          </ul>
        </div>
      </div>
    </Container>
  )
}
