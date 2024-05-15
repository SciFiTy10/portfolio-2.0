import { type Metadata } from 'next'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoBurger from '@/images/logos/burger.svg'
import logoTalkLikeSnoop from '@/images/logos/talkLikeSnoop.svg'
import logoUser from '@/images/logos/user.svg'
import { GitHubIcon } from '@/components/SocialIcons'
import { LinkIcon } from '@/components/SocialIcons'
import Link from 'next/link'

const projects = [
  {
    name: 'Employee Benefits',
    description:
      'An application for adding and editing employee benefits for themselves and their beneficiaries.',
    links: [
      {
        href: 'https://github.com/SciFiTy10/employee_benefits_frontend',
        label: 'github.com (frontend)',
        icon: GitHubIcon,
      },
      {
        href: 'https://github.com/SciFiTy10/employee_benefits_api',
        label: 'github.com (api)',
        icon: GitHubIcon,
      },
    ],
    logo: logoUser,
  },
  {
    name: 'Big Kahuna Burger',
    description:
      'A restaurant menu and ordering UI for the famous Big Kahuna Burger restaurant.',
    links: [
      {
        href: 'https://big-kahuna-burger.netlify.app',
        label: 'Live Site',
        icon: LinkIcon,
      },
      {
        href: 'https://github.com/SciFiTy10/burger-restaurant',
        label: 'github.com',
        icon: GitHubIcon,
      },
    ],
    logo: logoBurger,
  },
  {
    name: 'Talk Like Snoop',
    description: `An Alexa Skill which takes the speech that you provide as input and returns it with 'izzle' injected.`,
    links: [
      {
        href: 'https://www.amazon.com/SciFiTy-Talk-Like-Snoop/dp/B07K1SHLJ8',
        label: 'Install Skill Page',
        icon: LinkIcon,
      },
      {
        href: 'https://github.com/SciFiTy10/talkLikeSnoop',
        label: 'github.com',
        icon: GitHubIcon,
      },
    ],
    logo: logoTalkLikeSnoop,
  },
]

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made for fun and to sharpen my skills.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve built that taught me a lot and were a lot of fun to make."
      intro="I’ve worked on projects in a few different domains but they are typically open-source and web based. If you see something that piques your interest, check out the code and let me know if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project.name}
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 text-sm font-medium text-zinc-400 transition dark:text-zinc-200">
              {project.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group/link mb-2 mt-2 flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 group-hover/link:text-teal-500 dark:text-zinc-200"
                >
                  {link.icon === GitHubIcon ? (
                    <GitHubIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover/link:fill-teal-500" />
                  ) : (
                    <LinkIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover/link:fill-teal-500" />
                  )}

                  <span className="ml-4 group-hover/link:text-teal-500">
                    {link.label}
                  </span>
                </Link>
              ))}
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
