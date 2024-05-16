import { type Metadata } from 'next'
import Image from 'next/image'
import { SocialLink } from '@/components/SocialLink'
import { Container } from '@/components/Container'
import { LinkIcon } from '@/components/SocialIcons'
import bookImage from '@/images/a-cool-guide-to-life.jpg'

export const metadata: Metadata = {
  title: 'Books',
  description: `A collection of my published books.`,
}

export default function Books() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={bookImage}
              alt="a book cover for A COOL Guide To Life"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            A COOL Guide To Life
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              At the height of the pandemic, when things were a lot less
              certain, I thought a lot about what I would want my kids to know
              if something were to happen to me. Coincidentally, I also found
              myself with a lot of free time which gave me opportunities to get
              back into writing. I found myself writing daily, telling stories
              and lessons that I felt were important. After about 2 weeks, I
              thought this could become something, so I decided that I was going
              to commit to writing a book.
            </p>
            <p>
              Somewhere along the line I got the bright idea to include
              illustrations even though I'm terrible at drawing. Nevertheless, I
              discovered a tool that let me draw pixel art, which I thought was
              fitting since part of my philosophy in the book is that life is a
              game. I gradually got better at drawing things in layers and after
              about 9-12 months, I published the book you see here.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.amazon.com/COOL-Guide-Life-Tyler-Ridings/dp/B08YQCQ96P/ref=sr_1_1?crid=2CKHBCQP3Y25A&dib=eyJ2IjoiMSJ9.UOPLK5J9gup2jFaw1Tfi1FnETT0SH9Qku-XHZOvxKYazvc8CadeeDwojLb8tVEoxlIH1Qz_J8p0FNSieg7kFupzDmzMcRpWfRraCjv-_ysSAfYEWCqmsRhNnKjOnL0SxBcpeoRYS_QoUY069w27ChG4WHGir0ZGHteGweHKx7O1dl1qz61GefK1MSYx2aWaXmrMefPaHOS6dXcoGHbpDy8lkr4TzyGQKBhEVSKYkqQM.E-sTq3jlbZXCgQCHDIf86V_AxZQckk-6RNHH7M7Vrs8&dib_tag=se&keywords=a+cool+guide+to+life&qid=1715773173&sprefix=a+cool+guide+to+lif%2Caps%2C121&sr=8-1"
              icon={LinkIcon}
              className="mt-4"
            >
              View on Amazon
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
