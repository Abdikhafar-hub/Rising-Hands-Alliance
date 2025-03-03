"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Menu, X } from "lucide-react"

// We'll add custom CSS for specific effects
const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

  .navbar {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .navbar-top-strip {
    border-bottom: 1px solid #e5e7eb;
    background: #f1f5f9;
  }

  .navbar-contact-info {
    color: #4b5563;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .navbar-icon {
    color: #14B8A6;
    transition: color 0.3s ease;
  }

  .navbar-social-link {
    position: relative;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  .navbar-social-link:hover {
    transform: translateY(-3px);
    color: #14B8A6;
  }

  .navbar-social-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #FBBF24;
    transition: width 0.3s ease;
  }

  .navbar-social-link:hover::after {
    width: 100%;
  }

  .navbar-brand:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }

  .nav-link {
    color: #1f2937;
    font-weight: 600;
    font-size: 1rem;
    position: relative;
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    color: #14B8A6;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #FBBF24;
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .cta-button {
    background: linear-gradient(90deg, #14B8A6 0%, #10a8aa 100%);
    color: white;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(20, 184, 166, 0.3);
  }

  .cta-button:hover {
    background: linear-gradient(90deg, #10a8aa 0%, #14B8A6 100%);
    box-shadow: 0 6px 16px rgba(20, 184, 166, 0.5);
    transform: translateY(-2px);
  }

  .mobile-menu {
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border-top: 1px solid #e5e7eb;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    animation: slideDown 0.3s ease-in-out;
  }

  @keyframes slideDown {
    0% { transform: translateY(-10%); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  .mobile-nav-link {
    color: #1f2937;
    font-weight: 600;
    font-size: 1.1rem;
    transition: color 0.3s ease;
  }

  .mobile-nav-link:hover {
    color: #14B8A6;
  }

  .mobile-cta-button {
    background: linear-gradient(90deg, #14B8A6 0%, #10a8aa 100%);
    color: white;
    font-weight: 600;
    border-radius: 9999px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(20, 184, 166, 0.3);
  }

  .mobile-cta-button:hover {
    background: linear-gradient(90deg, #10a8aa 0%, #14B8A6 100%);
    box-shadow: 0 6px 16px rgba(20, 184, 166, 0.5);
  }
`

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      {/* Inject custom CSS */}
      <style>{customStyles}</style>

      <header className="navbar sticky top-0 z-50">
        <div className="navbar-top-strip">
          <div className="container mx-auto px-4 py-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Phone className="navbar-icon h-4 w-4" />
                <span className="navbar-contact-info">+254 722 357 439</span>
                <Mail className="navbar-icon h-4 w-4 hidden sm:inline" />
                <span className="navbar-contact-info hidden sm:inline">
                  risinghandsalliance@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="navbar-contact-info hidden sm:inline">Follow Us:</span>
                <Link href="#" className="navbar-social-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="navbar-social-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="navbar-social-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="navbar-social-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="navbar-brand flex items-center">
              <Image
                src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1740999487/zldbzioedvx0s0lqiaxl.png"
                alt="Rising Hands Alliance Logo"
                width={80}
                height={80}
                className="mr-2"
              />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="#hero" className="nav-link">
                Home
              </Link>
              <Link href="#about" className="nav-link">
                About Us
              </Link>
              <Link href="#programs" className="nav-link">
                Programs
              </Link>
              <Link href="#contact" className="nav-link">
                Contact
              </Link>
            </nav>
            <Link href="#donate" className="cta-button hidden md:inline-block">
              Make an Impact
            </Link>
            <button onClick={toggleMenu} className="md:hidden text-gray-800">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mobile-menu md:hidden py-4">
            <nav className="flex flex-col space-y-4 px-4">
              <Link href="#hero" className="mobile-nav-link" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="#about" className="mobile-nav-link" onClick={toggleMenu}>
                About Us
              </Link>
              <Link href="#programs" className="mobile-nav-link" onClick={toggleMenu}>
                Programs
              </Link>
              <Link href="#contact" className="mobile-nav-link" onClick={toggleMenu}>
                Contact
              </Link>
              <Link href="#donate" className="mobile-cta-button px-4 py-2 text-center" onClick={toggleMenu}>
                Make an Impact
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}