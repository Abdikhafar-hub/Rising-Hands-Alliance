import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-teal-500 font-medium mb-2">JOIN THE ACTION</h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">How You Can Make A Difference</h3>
          <p className="max-w-3xl mx-auto text-gray-700">
            Your support enables us to continue our vital work in refugee camps and marginalized areas in North Eastern
            Kenya. Together, we can create lasting positive change for communities in need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-teal-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal-600"
              >
                <path d="M12 2v20" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Donate</h4>
            <p className="text-gray-700 mb-4">
              Your financial contribution helps us provide essential services and support to those in need.
            </p>
            <Link
              href="#"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Donate Now
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-teal-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal-600"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Volunteer</h4>
            <p className="text-gray-700 mb-4">
              Join our team of dedicated volunteers and contribute your time and skills to our mission.
            </p>
            <Link
              href="#"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Join Us
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-teal-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal-600"
              >
                <path d="M17 6.1H3" />
                <path d="M21 12.1H3" />
                <path d="M15.1 18H3" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Partner With Us</h4>
            <p className="text-gray-700 mb-4">
              Collaborate with Rising Hands Alliance to create sustainable impact through strategic partnerships.
            </p>
            <Link
              href="#"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

