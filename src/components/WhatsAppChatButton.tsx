import { WhatsappLogo } from '@phosphor-icons/react'

const WHATSAPP_NUMBER = '260979810970'
const WHATSAPP_TEXT =
  'Hello Ruban Auto Shop, I need help with parts availability and pricing.'

export function WhatsAppChatButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Ruban Auto on WhatsApp"
      className="fixed bottom-5 right-5 z-[70] inline-flex min-h-[52px] items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_-18px_rgba(37,211,102,0.9)] transition-[transform,filter] duration-300 hover:brightness-105 active:translate-y-px"
    >
      <WhatsappLogo size={22} weight="fill" />
      <span>WhatsApp</span>
    </a>
  )
}
