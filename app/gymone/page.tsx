'use client';

import React, { useState, useEffect } from 'react';
import { 
  FaDumbbell, 
  FaBars, 
  FaTimes, 
  FaRobot, 
  FaUtensils, 
  FaHeartbeat, 
  FaCheck, 
  FaStar, 
  FaCheckCircle, 
  FaWhatsapp, 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter 
} from 'react-icons/fa';

// Helper Component for Images (blur removed)
const LazyImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onLoad={() => setLoaded(true)}
      style={{
        // Blur removed: images appear immediately without blur
        opacity: 1,
        filter: 'blur(0)',
        transform: 'scale(1)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        willChange: 'opacity, transform',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}
    />
  );
};

export default function HulkGym() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent FOUC (Flash of Unstyled Content)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close menu on resize if screen gets larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu on click
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
        className="hulk-gym-container" 
        style={{ 
            opacity: isMounted ? 1 : 0, 
            transition: 'opacity 0.4s ease-in-out' 
        }}
    >
      {/* --- FONTS (Loaded via Link for better performance) --- */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />

      {/* --- STYLES (Scoped mainly via class names, but kept global for exact fidelity) --- */}
      <style jsx global>{`
        /* --- VARIABLES --- */
        :root {
            --primary-green: #C1FF38;
            --dark-bg: #050505;
            --card-bg: #111111;
            --text-white: #ffffff;
            --text-gray: #b0b0b0;
        }

        /* --- GLOBAL RESET --- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Roboto', sans-serif;
            background-color: var(--dark-bg);
            color: var(--text-white);
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* --- TYPOGRAPHY --- */
        h1, h2, h3, h4, .brand-font {
            font-family: 'Orbitron', sans-serif;
            text-transform: uppercase;
        }

        a { text-decoration: none; color: inherit; transition: 0.3s; }
        ul { list-style: none; }

        /* --- UTILITIES --- */
        .btn {
            display: inline-block;
            background-color: var(--primary-green);
            color: #000;
            padding: 12px 30px;
            font-family: 'Orbitron', sans-serif;
            font-weight: 700;
            border-radius: 4px;
            text-transform: uppercase;
            border: 2px solid var(--primary-green);
            cursor: pointer;
        }

        .btn:hover {
            background-color: transparent;
            color: var(--primary-green);
            box-shadow: 0 0 15px rgba(193, 255, 56, 0.4);
        }

        .btn-outline {
            background-color: transparent;
            color: var(--primary-green);
            border: 2px solid var(--primary-green);
        }

        .btn-outline:hover {
            background-color: var(--primary-green);
            color: #000;
        }

        .section-padding { padding: 80px 5%; }
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            letter-spacing: 2px;
        }

        .section-title span { color: var(--primary-green); }

        /* --- HEADER --- */
        header {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 20px 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(5, 5, 5, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
            border-bottom: 1px solid rgba(193, 255, 56, 0.1);
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 900;
            color: #fff;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .logo svg { color: var(--primary-green); }

        .nav-links {
            display: flex;
            gap: 30px;
        }

        .nav-links a {
            font-size: 0.9rem;
            font-weight: 500;
            letter-spacing: 1px;
        }

        .nav-links a:hover { color: var(--primary-green); }

        .join-btn {
            background: var(--primary-green);
            color: #000;
            padding: 8px 20px;
            border-radius: 4px;
            font-weight: 700;
        }

        /* Mobile Menu */
        .mobile-menu-btn { display: none; color: #fff; font-size: 1.5rem; cursor: pointer; }

        /* --- HERO --- */
        .hero-section {
            height: 100vh;
            background: linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80');
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            padding: 0 5%;
        }

        .hero-content { max-width: 700px; }
        .hero-content h1 { font-size: 4rem; line-height: 1.1; margin-bottom: 20px; }
        .hero-content span { color: var(--primary-green); }
        .hero-content p { font-size: 1.2rem; color: var(--text-gray); margin-bottom: 30px; max-width: 500px; }

        /* --- SERVICES --- */
        .services-section { background-color: var(--dark-bg); }
        .services-grid {
            display: grid;
            /* Changed from 300px to 250px to fit small screens (320px) better */
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }
        .service-card {
            background: var(--card-bg);
            padding: 40px;
            border-radius: 10px;
            border: 1px solid #222;
            transition: 0.3s;
            position: relative;
            overflow: hidden;
        }
        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: var(--primary-green);
        }
        .service-card:hover { transform: translateY(-10px); border-color: var(--primary-green); }
        .service-icon { font-size: 3rem; color: var(--primary-green); margin-bottom: 20px; }
        .service-card h3 { margin-bottom: 15px; font-size: 1.4rem; }
        .service-card p { color: var(--text-gray); font-size: 0.95rem; }

        /* --- GALLERY --- */
        .gallery-section { background-color: #000; }
        .gallery-grid {
            display: grid;
            /* Changed to 250px minmax for responsiveness */
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
        }
        .gallery-item {
            position: relative;
            height: 300px;
            overflow: hidden;
            border-radius: 8px;
            background-color: #1a1a1a;
        }
        /* Image hover effect handled by LazyImage style props in React, 
           but we need parent hover trigger */
        .gallery-item:hover img { transform: scale(1.1) !important; }

        /* --- PRICING --- */
        .pricing-section { background: var(--dark-bg); }
        .pricing-grid {
            display: grid;
            /* Changed to 250px minmax */
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            max-width: 1200px;
            margin: 0 auto;
        }
        .pricing-card {
            background: var(--card-bg);
            padding: 50px 30px;
            border-radius: 15px;
            border: 1px solid #222;
            text-align: center;
            position: relative;
            transition: 0.3s;
        }
        .pricing-card.featured {
            border: 2px solid var(--primary-green);
            transform: scale(1.05);
            z-index: 2;
        }
        .pricing-card h3 { font-size: 1.5rem; margin-bottom: 10px; }
        .price {
            font-size: 3rem;
            font-weight: 700;
            color: var(--primary-green);
            margin-bottom: 30px;
            font-family: 'Orbitron', sans-serif;
        }
        .price span { font-size: 1rem; color: var(--text-gray); font-weight: 400; }
        .pricing-features li {
            margin-bottom: 15px;
            color: var(--text-gray);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
        .pricing-features svg { color: var(--primary-green); }

        /* --- TESTIMONIALS --- */
        .testimonials-section { background: #000; text-align: center; }
        .testimonials-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
        }
        .testimonial-card {
            background: var(--card-bg);
            padding: 30px;
            border-radius: 10px;
            max-width: 350px;
            text-align: left;
            border: 1px solid #222;
        }
        .stars { color: var(--primary-green); margin-bottom: 15px; display: flex; gap: 5px; }
        .client { display: flex; align-items: center; gap: 15px; margin-top: 20px; }
        .client-img-wrapper {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid var(--primary-green);
        }
        .verified-badge {
            font-size: 0.8rem;
            color: #4285F4;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        /* --- CONTACT --- */
        .contact-section { background: var(--dark-bg); }
        .contact-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
        }
        .contact-form input, .contact-form textarea {
            width: 100%;
            padding: 15px;
            margin-bottom: 20px;
            background: var(--card-bg);
            border: 1px solid #333;
            color: #fff;
            border-radius: 5px;
        }
        .contact-form input:focus, .contact-form textarea:focus {
            outline: none;
            border-color: var(--primary-green);
        }
        .whatsapp-btn {
            background: #25D366;
            color: #fff;
            width: 100%;
            margin-top: 15px;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
        .whatsapp-btn:hover { background: #20bd5a; color: #fff; }
        .map-container {
            border-radius: 10px;
            overflow: hidden;
            border: 1px solid #333;
            height: 100%;
            min-height: 400px;
        }

        /* --- FOOTER --- */
        footer {
            background: #000;
            padding: 60px 5% 20px;
            border-top: 1px solid #222;
        }
        .footer-grid {
            display: grid;
            /* Changed to 200px minmax */
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }
        .footer-col h4 { color: var(--primary-green); margin-bottom: 20px; font-size: 1.2rem; }
        .footer-col ul li { margin-bottom: 10px; }
        .footer-col ul li a:hover { color: var(--primary-green); padding-left: 5px; }
        .social-icons { display: flex; gap: 15px; }
        .social-icons a {
            width: 40px;
            height: 40px;
            background: #111;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            color: #fff;
        }
        .social-icons a:hover { background: var(--primary-green); color: #000; }
        .copyright { text-align: center; border-top: 1px solid #111; padding-top: 20px; color: #555; font-size: 0.9rem; }

        /* --- RESPONSIVE --- */
        @media (max-width: 991px) {
            .contact-container { grid-template-columns: 1fr; }
            .pricing-card.featured { transform: scale(1); }
        }

        @media (max-width: 1024px) {
            .nav-links { display: none; } /* Hidden by default, toggled by React state */
            .mobile-menu-btn { display: block; }
            .hero-content h1 { font-size: 3rem; }
            .section-padding { padding: 60px 5%; }
            .join-btn { padding: 8px 16px; font-size: 0.9rem; }
        }

        @media (max-width: 768px) {
            .hero-content h1 { font-size: 2.5rem; }
        }

        /* --- 320px SPECIFIC FIXES --- */
        @media (max-width: 375px) {
            header { padding: 15px 10px; gap: 8px; }
            .logo { font-size: 1.4rem; gap: 5px; }
            .join-btn { 
                padding: 6px 10px; 
                font-size: 0.75rem; 
                white-space: nowrap; 
            }
            .mobile-menu-btn { font-size: 1.3rem; }
            .hero-content h1 { font-size: 2rem; }
            .section-title { font-size: 1.8rem; }
            .section-padding { padding: 60px 15px; }
        }
      `}</style>
      
      {/* Header */}
      <header>
        <a href="#" className="logo">
          <FaDumbbell /> HULK<span>GYM</span>
        </a>
        
        <nav 
            className="nav-links" 
            style={isMenuOpen ? { 
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                top: '70px',
                right: '0',
                width: '100%',
                background: 'rgba(0,0,0,0.95)',
                padding: '20px',
                zIndex: '999',
            } : undefined}
        >
          {['home', 'services', 'gallery', 'pricing', 'testimonials', 'contact'].map((item) => (
            <a 
                key={item} 
                href={`#${item}`} 
                onClick={(e) => handleScroll(e, item)}
                style={{ marginBottom: isMenuOpen ? '20px' : '0' }}
            >
              {item.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Added wrapper to keep layout tight on small screens */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a href="#pricing" className="btn join-btn" onClick={(e) => handleScroll(e, 'pricing')}>JOIN NOW</a>
            
            <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>SMASH YOUR <br /> <span>LIMITS TODAY</span></h1>
          <p>Welcome to the ultimate training facility. Premium equipment, elite trainers, and an atmosphere built for the strongest. Unleash your inner Hulk.</p>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <a href="#pricing" onClick={(e) => handleScroll(e, 'pricing')} className="btn">START TRAINING</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="btn btn-outline">VISIT US</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding services-section">
        <h2 className="section-title">OUR <span>SERVICES</span></h2>
        <div className="services-grid">
          <div className="service-card">
            <FaRobot className="service-icon" />
            <h3>AI-Powered Training</h3>
            <p>Advanced algorithms track your lifts and optimize your routine for maximum hypertrophy.</p>
          </div>
          <div className="service-card">
            <FaUtensils className="service-icon" />
            <h3>Hulk Nutrition</h3>
            <p>Custom meal plans designed to fuel massive growth and recovery. Eat big to get big.</p>
          </div>
          <div className="service-card">
            <FaHeartbeat className="service-icon" />
            <h3>Cardio & Endurance</h3>
            <p>High-intensity interval training zones to keep your heart as strong as your biceps.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section-padding gallery-section">
        <h2 className="section-title">THE <span>ARENA</span></h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <LazyImage src="/gymoneimg/gallary1.jpg" alt="Heavy Weights" />
          </div>
          <div className="gallery-item">
            <LazyImage src="/gymoneimg/gallary2.jpg" alt="Gym Interior" />
          </div>
          <div className="gallery-item">
            <LazyImage src="/gymoneimg/gallary3.jpg" alt="Weights" />
          </div>
          <div className="gallery-item">
            <LazyImage src="/gymoneimg/gallary4.jpg" alt="Training" />
          </div>
          <div className="gallery-item">
            <LazyImage src="/gymoneimg/gallary5.png" alt="Crossfit" />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-padding pricing-section">
        <h2 className="section-title">MEMBERSHIP <span>PLANS</span></h2>
        <div className="pricing-grid">
          {/* Basic */}
          <div className="pricing-card">
            <h3>BASIC</h3>
            <div className="price">$29<span>/mo</span></div>
            <ul className="pricing-features">
              <li><FaCheck /> Access to Gym Floor</li>
              <li><FaCheck /> Locker Room Access</li>
              <li><FaCheck /> Free WiFi</li>
              <li><FaCheck /> 1 Induction Session</li>
            </ul>
            {/* Changed to WhatsApp message link for Basic plan */}
            <a
              href="https://wa.me/1234567890?text=Hi%2C%20I%20want%20to%20join%20the%20BASIC%20plan."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ marginTop: '30px', width: '100%' }}
            >
              JOIN NOW
            </a>
          </div>

          {/* Pro */}
          <div className="pricing-card featured">
            <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--primary-green)', color: '#000', padding: '5px 15px', fontWeight: 'bold', fontSize: '0.8rem' }}>BEST VALUE</div>
            <h3>PRO SMASH</h3>
            <div className="price">$59<span>/mo</span></div>
            <ul className="pricing-features">
              <li><FaCheck /> 24/7 Gym Access</li>
              <li><FaCheck /> All Classes Included</li>
              <li><FaCheck /> Smart App Access</li>
              <li><FaCheck /> Monthly PT Session</li>
              <li><FaCheck /> Sauna & Steam</li>
            </ul>
            {/* Changed to WhatsApp message link for Pro plan */}
            <a
              href="https://wa.me/1234567890?text=Hi%2C%20I%20want%20to%20join%20the%20PRO%20SMASH%20plan."
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ marginTop: '30px', width: '100%' }}
            >
              JOIN NOW
            </a>
          </div>

          {/* Elite */}
          <div className="pricing-card">
            <h3>ELITE</h3>
            <div className="price">$99<span>/mo</span></div>
            <ul className="pricing-features">
              <li><FaCheck /> All Pro Features</li>
              <li><FaCheck /> Weekly PT Sessions</li>
              <li><FaCheck /> Nutrition Plan</li>
              <li><FaCheck /> Priority Support</li>
              <li><FaCheck /> Guest Pass (Unlimited)</li>
            </ul>
            {/* Changed to WhatsApp message link for Elite plan */}
            <a
              href="https://wa.me/1234567890?text=Hi%2C%20I%20want%20to%20join%20the%20ELITE%20plan."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ marginTop: '30px', width: '100%' }}
            >
              JOIN NOW
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-padding testimonials-section">
        <h2 className="section-title">REAL <span>RESULTS</span></h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <p>"The atmosphere is electric. I've added 20kg to my bench press in just 3 months. The equipment is top tier."</p>
            <div className="client">
              <div className="client-img-wrapper">
                <LazyImage src="/gymoneimg/user1.jpeg" alt="User" />
              </div>
              <div>
                <h4>Bruce Banner</h4>
                <div className="verified-badge"><FaCheckCircle /> Google Verified</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <p>"Love the AI tracking features. It takes the guesswork out of my training. Best gym in the city hands down."</p>
            <div className="client">
              <div className="client-img-wrapper">
                <LazyImage src="/gymoneimg/user2.jpeg" alt="User" />
              </div>
              <div>
                <h4>Jennifer Walters</h4>
                <div className="verified-badge"><FaCheckCircle /> Google Verified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding contact-section">
        <h2 className="section-title">GET IN <span>TOUCH</span></h2>
        <div className="contact-container">
          <div>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); }}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea rows={5} placeholder="Your Message" required></textarea>
              <button type="submit" className="btn" style={{ width: '100%', border: 'none' }}>SEND MESSAGE</button>
            </form>
            <a href="https://wa.me/1234567890" target="_blank" className="btn whatsapp-btn" rel="noopener noreferrer">
              <FaWhatsapp style={{ marginRight: '8px' }} /> Chat on WhatsApp
            </a>
          </div>
          <div className="map-container">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) invert(1)' }} 
                allowFullScreen={true} 
                loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-grid">
          <div className="footer-col">
            <a href="#" className="logo" style={{ marginBottom: '20px' }}>HULK<span>GYM</span></a>
            <p style={{ color: '#777' }}>Forging elite physiques since 2024. Join the movement.</p>
            <div className="social-icons" style={{ marginTop: '20px' }}>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>QUICK LINKS</h4>
            <ul>
              {['Home', 'Services', 'Pricing', 'Contact'].map(link => (
                <li key={link}><a href={`#${link.toLowerCase()}`}>{link}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>LEGAL</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Liability Waiver</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          &copy; 2026 HULK GYM. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
