'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronUp } from 'lucide-react'

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const topRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    const currentRef = topRef.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div ref={topRef} className="h-1 w-full absolute top-0" />
      {isVisible && (
        <button
          className="fixed bottom-8 right-8 bg-primary text-primary-foreground rounded-lg p-2 shadow-lg hover:bg-primary/90 focus:outline-none transition-all duration-200 ease-in-out hover:scale-110 active:scale-90"
          onClick={scrollToTop}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? 0 : 20}px)`,
          }}
        >
          <ChevronUp className="w-6 h-6" />
          <span className="sr-only">Back to top</span>
        </button>
      )}
    </>
  )
}

