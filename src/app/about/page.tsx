import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
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
          </ul>
        </div>
      </div>
    </Container>
  )
}
