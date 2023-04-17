import Introduction from '@/components/Introduction'
import Sidebar from '@/components/Sidebar'
import s from '@/styles/Home.module.css'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Contact from '@/components/Contact'
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'
import { useEffect, useState } from 'react'

export default function Home() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY
      if (scroll > 0) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  } , [])

  return (
    <>
      <main className={s.main}>
        <Sidebar />
        <div className={s.main_content}>
          <Introduction />
          <Projects />
          <Skills />
          <About />
          <Contact />
        </div>
      </main>

      <div className={`${s.scroll_to_top} ${showButton ? s.active : ''}`} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <MdKeyboardDoubleArrowUp />
      </div>
    </>
  )
}
