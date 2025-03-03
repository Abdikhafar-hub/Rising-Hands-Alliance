"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const carouselImages = [
  {
    src: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1740994479/sxrzw3novbkouzn4htv2.jpg",
    alt: "Humanitarian aid workers helping in refugee camp",
    title: "Empowering Communities",
    subtitle: "Building resilience in marginalized areas",
  },
  {
    src: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1740994506/sbpnbmpxqdhoa6cgyaya.jpg",
    alt: "Children receiving education in refugee camp",
    title: "Education for All",
    subtitle: "Creating opportunities through knowledge",
  },
  {
    src: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1740995723/jgssutqnjywoibv1sm7z.jpg",
    alt: "Healthcare services in remote areas",
    title: "Healthcare Access",
    subtitle: "Bringing medical services to those in need",
  },
  {
    src: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1740995919/wvwvcie1i6rb8j4kxk9n.jpg",
    alt: "Community development project",
    title: "Sustainable Development",
    subtitle: "Creating lasting positive change",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <div className="max-w-3xl">
              <h2 className="text-lg md:text-xl font-medium mb-2">WELCOME TO RISING HANDS ALLIANCE</h2>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">{image.title}</h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8">{image.subtitle}</p>
              <Link
                href="#about"
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

