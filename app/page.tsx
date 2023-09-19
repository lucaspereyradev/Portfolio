import About from '@/components/About/About'
import Contact from '@/components/Contact/ContactForm'
import Experience from '@/components/Experience/Experience'
import Intro from '@/components/Intro/Intro'
import Projects from '@/components/Projects/Projects'
import SectionDivider from '@/components/SectionDivider/SectionDivider'
import Skills from '@/components/Skills/Skills'

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4 pt-[8rem]">
            <Intro />
            <SectionDivider />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
        </main>
    )
}
