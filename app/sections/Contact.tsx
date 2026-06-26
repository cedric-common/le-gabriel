'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

type ContactProps = {
  data?: {
    surtitle?: string
    sectionTitle?: string
    introText?: string
    address?: string
    phone?: string
    email?: string
    hours?: string
    mapUrl?: string
  } | null
}

export function Contact({ data }: ContactProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const surtitle = data?.surtitle || 'Écrivez-nous'
  const sectionTitle = data?.sectionTitle || 'Prenons Contact'
  const introText = data?.introText || 'Une question, un projet de visite ou de partenariat ? Nous répondons dans les 24 heures.'
  const mapUrl = data?.mapUrl || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.476!2d8.84!3d42.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12da6a3c0b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sSarrola-Carcopino!5e0!3m2!1sfr!2sfr!4v1234567890'

    const infos = [
    { icon: MapPin, label: 'Adresse', value: data?.address || 'Route du Prunello, 20167 Sarrola-Carcopino' },
    { icon: Phone, label: 'Téléphone', value: data?.phone || '07 75 67 50 49' },
    { icon: Mail, label: 'Email', value: data?.email || 'INFO@DOMAINEDUPRUNELLO.FR' },
    { icon: Clock, label: 'Horaires', value: data?.hours || 'Lun — Sam · 9h00 à 18h00' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" ref={ref} className="bg-[#FAF8F3] border-t border-[#E8E4DC]">

      {/* En-tête */}
      <div className="py-20 md:py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, ease }}
            className="text-[0.6rem] tracking-[0.45em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#6B7240] mb-5"
          >
            {surtitle}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.1, ease }}
            className="text-[2.5rem] md:text-[3.5rem] font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] tracking-[0.1em] uppercase leading-[1.1] mb-5"
          >
            {sectionTitle}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="ornament text-[#6B7240]"
          >
            <span className="text-sm">◆</span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Infos contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.2, ease }}
          >
            <p className="text-[0.6rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14]/50 leading-[2.5] mb-10 max-w-xs">
              {introText}
            </p>

            <div className="space-y-7">
              {infos.map((info, i) => (
                <div key={i} className="flex items-start gap-5">
                  <info.icon className="w-4 h-4 text-[#6B7240] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[0.5rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14]/35 mb-1">
                      {info.label}
                    </p>
                    <p className="text-[0.65rem] tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14]/70">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-12 h-52 overflow-hidden border border-[#E8E4DC]">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Formulaire épuré */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.3, ease }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <div className="ornament text-[#6B7240] mb-8">
                  <span className="text-lg">◆</span>
                </div>
                <h3 className="text-[2rem] font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] tracking-[0.1em] uppercase mb-3">
                  Message envoyé
                </h3>
                <p className="text-[0.6rem] tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14]/40">
                  Nous vous répondrons sous 24 heures
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Nom */}
                <div className="border-b border-[#E8E4DC] pb-4">
                  <label className="block text-[0.55rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14]/40 mb-3">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent text-[0.75rem] tracking-[0.15em] font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14] outline-none placeholder:text-[#1A1A14]/20 uppercase"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email */}
                <div className="border-b border-[#E8E4DC] pb-4">
                  <label className="block text-[0.55rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14]/40 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent text-[0.75rem] tracking-[0.15em] font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14] outline-none placeholder:text-[#1A1A14]/20 uppercase"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Message */}
                <div className="border-b border-[#E8E4DC] pb-4">
                  <label className="block text-[0.55rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14]/40 mb-3">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent text-[0.75rem] tracking-[0.15em] font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14] outline-none placeholder:text-[#1A1A14]/20 uppercase resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  className="text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] font-normal bg-[#6B7240] text-white px-10 py-4 hover:bg-[#505535] transition-colors duration-500"
                >
                  Envoyer
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
