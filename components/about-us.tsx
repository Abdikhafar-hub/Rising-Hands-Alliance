import Image from "next/image"
import Link from "next/link"
import { Eye, Target } from "lucide-react"

export default function AboutUs() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1740994455/opdrgppbqzu8m2rlgc00.jpg"
              alt="Community outreach"
              width={300}
              height={300}
              className="rounded-lg object-cover h-full"
            />
            <Image
              src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1740997822/ftmmkrvem5jjyrwl3hv7.webp"
              alt="Refugee assistance"
              width={300}
              height={300}
              className="rounded-lg object-cover h-full"
            />
            <Image
              src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1740996169/tvyfqowt8wafteeqelfa.jpg"
              alt="Education program"
              width={300}
              height={300}
              className="rounded-lg object-cover h-full"
            />
            <Image
              src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1740995955/tju4vfvsln2tgbp1btbg.jpg"
              alt="Healthcare services"
              width={300}
              height={300}
              className="rounded-lg object-cover h-full"
            />
          </div>

          <div>
            <h2 className="text-teal-500 font-medium mb-2">About Rising Hands Alliance</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Empowering Communities, Inspiring Hope</h3>
            <p className="text-gray-700 mb-6">
            Rising Hands Alliance is dedicated to empowering communities through sustainable initiatives that create opportunities for growth and well-being. Our organization works to support school-going children, combat malnutrition, and educate mothers on essential topics such as oral health awareness.
            </p>
            <p className="text-gray-700 mb-8">
              Founded in 2023 and based in Garissa, Kenya, our organization focuses on providing humanitarian assistance
              in refugee camps and marginalized areas in North Eastern Kenya.
            </p>
            <Link href="#" className="text-teal-500 font-medium hover:underline">
              Read more
            </Link>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-100 p-4 rounded-full mb-4">
                  <Target className="h-8 w-8 text-teal-600" />
                </div>
                <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                <p className="text-gray-700">
                Our mission is to uplift communities by providing resources, education, and support that enhance the lives of children and families. We believe in fostering resilience, creating sustainable solutions, and ensuring that every child has the chance to thrive.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-100 p-4 rounded-full mb-4">
                  <Eye className="h-8 w-8 text-teal-600" />
                </div>
                <h4 className="text-xl font-bold mb-2">Our Vision</h4>
                <p className="text-gray-700">
                We envision a sustainably empowered and resilient society, with restored dignity and hope in the lives of the underserved, the vulnerable and the marginalized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

