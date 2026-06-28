'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FadeIn } from './FadeIn'

interface FaqItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
  delay?: number
}

export function FaqItem({ question, answer, defaultOpen = false, delay = 0 }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <FadeIn delay={delay}>
      <div className="border-b border-[#E8E4DC]">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center py-4 cursor-pointer text-left group"
          aria-expanded={isOpen}
        >
          <span className="text-[0.65rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] font-medium text-[#1A1A14] pr-4">
            {question}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#1A1A14] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            strokeWidth={1.5}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <p className="text-base font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14]/70 leading-relaxed pb-4">
            {answer}
          </p>
        </div>
      </div>
    </FadeIn>
  )
}
