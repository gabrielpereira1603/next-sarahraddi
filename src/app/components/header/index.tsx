'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#7f015f]">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Sarah Raddi</span>
            <h1 
              className="text-white" 
              style={{
                fontFamily: '"Sora", Sans-serif',
                fontSize: '27px',
                fontWeight: '900',
              }}
            >
              Sarah Raddi
            </h1>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" 
          >
            <span className="sr-only">Abrir Menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Sobre
          </a>
          <a href="/purpose" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Missão, Visão e Valores
          </a>
          <a href="/commitments" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Compromissos
          </a>
          <a href="/curriculum" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Currículo
          </a>
          <a href="/visits" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Visitas
          </a>
        </PopoverGroup>
      </nav>
      <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
      >
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50" /> {/* Overlay escuro ao abrir o menu */}
        <DialogPanel 
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform transform-gpu duration-300 ease-in-out"
          style={{
            transform: mobileMenuOpen ? 'translateX(0%)' : 'translateX(100%)',
          }}
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Sarah Raddi</span>
              <a
                href='/'
                className="text-black" 
                style={{
                  fontFamily: '"Sora", Sans-serif',
                  fontSize: '42px',
                  fontWeight: '900',
                  color: '#7f015f'
                }}
              >
                Sarah Raddi
              </a>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Fechar Menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sobre
                </a>
                <a
                    href="/purpose"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Missão, Visão e Valores
                </a>
                <a
                    href="/commitments"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Compromissos
                </a>
                <a
                    href="/curriculum"
                    className="text-sm font-semibold leading-6 text-white hover:text-gray-300"
                >
                  Currículo
                </a>
                <a
                    href="/visits"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Visitas
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
