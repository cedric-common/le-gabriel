'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export function ReserverForm() {
  const [submitted, setSubmitted] = useState(false)
  const t = useTranslations('bookingForm')

  if (submitted) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-4">
          {t('thanksTitle')}
        </h3>
        <p className="text-[0.85rem] font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60">
          {t('thanksText')}
        </p>
      </div>
    )
  }

  const field =
    'w-full bg-white border border-[#E8E4DC] px-4 py-3 text-[0.85rem] font-[family-name:var(--font-montserrat)] text-[#1A1A14] focus:outline-none focus:border-[#6B7240] transition-colors'
  const label =
    'block text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60 mb-2'

  return (
    <form
      className="space-y-8"
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={label}>{t('firstName')}</label>
          <input type="text" className={field} />
        </div>
        <div>
          <label className={label}>{t('lastName')}</label>
          <input type="text" className={field} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={label}>{t('email')}</label>
          <input type="email" className={field} />
        </div>
        <div>
          <label className={label}>{t('phone')}</label>
          <input type="tel" className={field} />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className={label}>{t('arrival')}</label>
          <input type="date" className={field} />
        </div>
        <div>
          <label className={label}>{t('departure')}</label>
          <input type="date" className={field} />
        </div>
        <div>
          <label className={label}>{t('guests')}</label>
          <select className={field}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>

      <div>
        <label className={label}>{t('housingType')}</label>
        <select className={field}>
          <option>{t('studio')}</option>
          <option>{t('apartment')}</option>
          <option>{t('either')}</option>
        </select>
      </div>

      <div>
        <label className={label}>{t('message')}</label>
        <textarea rows={4} className={`${field} font-[family-name:var(--font-cormorant)] resize-none`} />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-white bg-[#6B7240] hover:bg-[#1A1A14] px-10 py-4 transition-all duration-500"
        >
          {t('submit')}
        </button>
      </div>
    </form>
  )
}
