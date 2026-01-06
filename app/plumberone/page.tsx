"use client";

import React, { useState, useEffect } from 'react';

// --- Inline SVG Icon Components for Reliability ---

const IconDroplet = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
);

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const IconMapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);

const IconStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

const IconArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);

const IconCheckCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

const IconMenu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
);

const IconX = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

const IconWrench = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
);

const IconWater = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 3 0 3-2 5.5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 3 0 3-2 5.5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>
);

const IconFlame = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
);

const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle Menu Function
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu and scroll smoothly
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      <style jsx global>{`
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Header & Navigation */}
      <header className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-white py-4 shadow-sm'}`}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 shrink-0">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <IconDroplet />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight text-blue-900">
              ProFlow<span className="text-blue-600">Ottawa</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8 xl:space-x-12 font-bold text-slate-600">
            {['Home', 'Services', 'Projects', 'FAQ', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <a href="tel:6135550123" className="hidden sm:flex items-center bg-blue-600 text-white px-6 py-2.5 rounded-full font-black hover:bg-blue-700 transition shadow-md active:scale-95">
              <span className="mr-2"><IconPhone /></span>
              <span className="hidden md:inline">(613) 555-0123</span>
              <span className="md:hidden">Call Now</span>
            </a>
            <button 
              onClick={toggleMenu} 
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-all active:scale-90"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="px-4 py-6 flex flex-col space-y-4 font-bold">
            {['Home', 'Services', 'Projects', 'FAQ', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={handleNavLinkClick}
                className="text-slate-800 border-b border-slate-50 pb-2 hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
            <a href="#contact" onClick={handleNavLinkClick} className="text-blue-600 py-2">Request Quote</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-900/85 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Hero Background"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <div className="max-w-3xl text-center md:text-left">
            <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-md text-blue-200 px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest border border-blue-500/30 mb-8">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Serving All Of Ottawa & Surrounding Areas
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
              Ottawa's Trusted <span className="text-blue-400">Plumbing Experts</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-200 mb-10 leading-relaxed font-medium">
              From cast iron drain repairs to full installations, we provide premium workmanship with 24/7 emergency support.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
              <a href="#contact" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl transition transform hover:-translate-y-1 active:scale-95 text-center">
                Book Online Now
              </a>
              <a href="#projects" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-2xl font-black text-lg transition text-center">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 lg:py-32 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-3 block">Expert Solutions</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Our Professional Services</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Installations', desc: 'Professional plumbing for new builds and renovations.', icon: <IconWrench /> },
              { title: 'Drain Cleaning', desc: 'Hydro-jetting and clearing stubborn blockages.', icon: <IconWater /> },
              { title: 'Hot Water Tanks', desc: 'Repair and replacement of tank and tankless systems.', icon: <IconFlame /> },
              { title: 'Cast Iron Repair', desc: 'Specialized repairs for older Ottawa home drains.', icon: <IconShield /> }
            ].map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col group transition-all duration-400 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section id="projects" className="py-20 lg:py-32 bg-slate-100 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-3 block">Work Gallery</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Our Recent Projects</h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-medium">Take a look at some of our lately completed plumbing work across Ottawa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Modern Bathroom Renovation', location: 'Westboro, Ottawa', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800' },
              { title: 'Cast Iron Main Replacement', location: 'Sandy Hill', img: 'https://plus.unsplash.com/premium_photo-1663013675008-bd5a7898ac4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
              { title: 'Commercial Kitchen Fit-Out', location: 'Kanata North', img: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?auto=format&fit=crop&q=80&w=800' }
            ].map((proj, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-200 group hover:-translate-y-2 transition-transform duration-500">
                <div className="h-64 overflow-hidden">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <div className="flex items-center text-xs font-black text-blue-600 uppercase tracking-widest mb-3">
                    <span className="mr-1"><IconMapPin /></span> {proj.location}
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-3">{proj.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">High-quality plumbing services delivered with professional precision.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-32 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-3 block">Common Questions</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-slate-600 font-medium mb-8">Can't find the answer you're looking for? Reach out to our team directly for help.</p>
              <a href="#contact" className="inline-flex items-center text-blue-600 font-black text-sm uppercase tracking-widest group">
                Ask a Question <span className="ml-2 group-hover:translate-x-2 transition-transform"><IconArrowRight /></span>
              </a>
            </div>
            <div className="lg:w-2/3 bg-slate-50 rounded-[2.5rem] p-8 md:p-12">
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-6">
                  <h4 className="text-lg font-black text-slate-900 mb-3 flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">Q.</span> When do I have to do the payment?
                  </h4>
                  <p className="text-slate-600 leading-relaxed font-medium pl-8">
                    Our structure is 100% transparent: <strong className="text-slate-900">10% is required before the work starts</strong> to secure materials, and the remaining <strong className="text-slate-900">90% is payable after you are satisfied</strong> with our results.
                  </p>
                </div>
                <div className="border-b border-slate-200 py-6">
                  <h4 className="text-lg font-black text-slate-900 mb-3 flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">Q.</span> Do you offer emergency 24/7 plumbing?
                  </h4>
                  <p className="text-slate-600 leading-relaxed font-medium pl-8">
                    Yes! We have dedicated emergency technicians available 24 hours a day, 7 days a week across the entire Ottawa region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-slate-900 text-white scroll-mt-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              <img src="https://plus.unsplash.com/premium_photo-1664298589198-b15ff5382648?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Master Plumber" className="rounded-[2.5rem] shadow-2xl" />
            </div>
            <div className="lg:w-1/2">
              <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Trusted Heritage</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-white">The ProFlow <br /> Standard</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">We pride ourselves on providing Ottawa homeowners with reliable, high-quality plumbing solutions that last.</p>
              <a href="tel:6135550123" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black inline-flex items-center space-x-2 transition hover:bg-blue-700 active:scale-95">
                <IconPhone /> <span>Call (613) 555-0123</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
            <div className="lg:w-1/3 bg-blue-600 p-10 md:p-14 text-white">
              <h3 className="text-3xl font-black mb-8">Get In Touch</h3>
              <div className="space-y-8 text-sm">
                <div className="flex items-start gap-5">
                  <IconMapPin />
                  <p>456 Sparks St, Ottawa, ON K1R 5A2</p>
                </div>
                <div className="flex items-start gap-5">
                  <IconPhone />
                  <p>(613) 555-0123</p>
                </div>
                <div className="flex items-start gap-5">
                  <IconMail />
                  <p>service@proflowottawa.ca</p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 p-10 md:p-14">
              <h3 className="text-2xl font-black text-slate-900 mb-8">Request a Free Estimate</h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Name" required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition" />
                  <input type="tel" placeholder="Phone" required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition" />
                </div>
                <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition appearance-none cursor-pointer">
                  <option>Plumbing Installation</option>
                  <option>Drain Cleaning</option>
                  <option>Hot Water Tank Service</option>
                  <option>Cast Iron Pipe Repair</option>
                </select>
                <textarea rows={4} placeholder="Description of problem" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition"></textarea>
                <button type="submit" className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-blue-600 transition active:scale-95">Send Request</button>
              </form>
              {formSubmitted && (
                <div className="mt-6 bg-emerald-50 text-emerald-700 p-5 rounded-2xl font-bold flex items-center animate-pulse">
                  <span className="mr-3"><IconCheckCircle /></span> Request Sent Successfully!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 shrink-0">
                <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                  <IconDroplet />
                </div>
                <span className="text-xl font-black tracking-tight text-white">ProFlow<span className="text-blue-600">Ottawa</span></span>
              </div>
              <p className="text-sm leading-relaxed pr-4">Ottawa's premier plumbing service provider. Available 24/7 for all emergencies.</p>
              <div className="flex space-x-4">
                {/* Social icons using simplified SVG shapes */}
                <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all group">
                   <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all group">
                   <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>

            <div>
              <h5 className="text-white font-black text-sm uppercase tracking-widest mb-8">Navigation</h5>
              <ul className="space-y-4 text-sm font-bold">
                {['Home', 'Services', 'Projects', 'FAQ'].map(item => (
                  <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-white font-black text-sm uppercase tracking-widest mb-8">Services</h5>
              <ul className="space-y-4 text-sm font-bold">
                <li><a href="#services" className="hover:text-blue-500 transition-colors">Emergency Plumbing</a></li>
                <li><a href="#services" className="hover:text-blue-500 transition-colors">Drain Cleaning</a></li>
                <li><a href="#services" className="hover:text-blue-500 transition-colors">Hot Water Tanks</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-black text-sm uppercase tracking-widest mb-8">Emergency</h5>
              <div className="bg-blue-600/10 p-4 rounded-2xl border border-blue-600/20">
                <p className="text-blue-500 text-lg font-black">(613) 555-0123</p>
                <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Fast Response Guaranteed</p>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em]">
            <p>&copy; 2024 ProFlow Ottawa Plumbing. All Rights Reserved.</p>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;