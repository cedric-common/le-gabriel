'use client'

import { useState } from 'react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-4">
          Merci !
        </h3>
        <p className="text-[0.85rem] font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60">
          Nous avons bien reçu votre message et revenons vers vous rapidement.
        </p>
      </div>
    )
  }

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <div>
        <label className="block text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60 mb-2">
          Nom
        </label>
        <input
          type="text"
          className="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-[0.85rem] font-[family-name:var(--font-cormorant)] text-[#1A1A14] focus:outline-none focus:border-[#6B7240] transition-colors"
        />
      </div>
      <div>
        <label className="block text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60 mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-[0.85rem] font-[family-name:var(--font-cormorant)] text-[#1A1A14] focus:outline-none focus:border-[#6B7240] transition-colors"
        />
      </div>
      <div>
        <label className="block text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60 mb-2">
          Message
        </label>
        <textarea
          rows={5}
          className="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-[0.85rem] font-[family-name:var(--font-cormorant)] text-[#1A1A14] focus:outline-none focus:border-[#6B7240] transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-white bg-[#6B7240] hover:bg-[#1A1A14] px-10 py-4 transition-all duration-500"
      >
        Envoyer
      </button>
    </form>
  )
}
