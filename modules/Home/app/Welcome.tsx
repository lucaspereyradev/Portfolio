import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import Button from '@/components/Button/Button'
import { LuCopy } from 'react-icons/lu'

const Welcome = () => {
    return (
        <section>
            <h1 className="font-semibold text-2xl leading-[1.5em] text-[#111111] dark:text-white tracking-[-0.01em] xs:text-[32px] sm:text-[40px]">
                Hello! I&apos;m Lucas 👏
            </h1>
            <p className="font-semibold text-2xl leading-[1.5em] text-[#666666] tracking-[-0.01em] xs:text-[32px] sm:text-[40px]">
                Real Things. Experienced Developer.
            </p>

            <span className="my-10 flex items-center gap-2 text-[#33d263] dark:text-[#BFF5D5]">
                <IoLocationOutline size="22" />
                Buenos Aires, Argentina
            </span>

            <p className="text-[18px] leading-[1.8em] text-[#666666] tracking-[-0.01em]">
                Product designer and design system specialist with over 9 years of experience focusing on user experience and design systems to
                creating a user-centered design in SaaS products.
            </p>

            <div className="flex flex-col gap-4 my-10 sm:flex-row">
                <Button className="w-full sm:w-fit">About</Button>
                <Button className="w-full sm:w-fit" styleType="secondary" icon={<LuCopy size="22" />}>
                    Copy email
                </Button>
            </div>
        </section>
    )
}

export default Welcome
