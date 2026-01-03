"use client"

import { useState } from "react"
import { BiMenu } from "react-icons/bi"
import { HiX } from "react-icons/hi"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-500">
          FitZone
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#services" className="hover:text-orange-500 transition">
            Services
          </a>
          <a href="#plans" className="hover:text-orange-500 transition">
            Plans
          </a>
          <a href="#testimonials" className="hover:text-orange-500 transition">
            Testimonials
          </a>
          <a href="https://wa.me/919999999999" className="hover:text-orange-500 transition">
            contact us
          </a>
          
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <HiX size={24} /> : <BiMenu size={24} />}
        </button>
      </div>

      {/* Mobile & Tablet Menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-4 py-4 gap-4 text-sm font-medium">
            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="hover:text-orange-500"
            >
              Services
            </a>
            <a
              href="#plans"
              onClick={() => setOpen(false)}
              className="hover:text-orange-500"
            >
              Plans
            </a>
            <a
              href="#testimonials"
              onClick={() => setOpen(false)}
              className="hover:text-orange-500"
            >
              Testimonials
            </a>
            
          </nav>
        </div>
      )}
    </header>
  )
}
