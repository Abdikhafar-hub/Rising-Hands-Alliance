import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Education & Schools",
      description:
        "We partner with schools to ensure children have access to learning materials, mentorship programs, and a safe environment to grow. Our efforts include building classrooms, equipping libraries, and providing scholarships for students in need. Through mentorship initiatives, we help shape future leaders and professionals by fostering academic excellence and personal growth.",
      image: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1740997698/ej6kj59wrrvjkoao0kx7.jpg",
    },
    {
      number: "02",
      title: "Child Development",
      description:
        "Supporting children at different stages of development is a core focus of our work. We provide essential educational support to school-going children, ensuring they have access to books, uniforms, and quality learning experiences. Additionally, we implement nutrition programs to improve the health and well-being of malnourished children, ensuring they receive balanced diets and necessary medical interventions.",
      image: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1740997431/whljme52glfumgaqfnkc.jpg",
    },
    {
      number: "03",
      title: "Oral Health Awareness",
      description:
        "Through community engagement, we raise awareness on the importance of oral hygiene, ensuring families adopt better dental care practices. We organize dental check-up camps, distribute oral care kits, and conduct educational workshops to teach children and parents about preventive dental care. Our goal is to reduce the prevalence of dental issues in underserved communities and promote lifelong healthy habits.",
      image: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1740997314/vh63ofhl08lv4ljsqahl.jpg",
    },
    {
      number: "04",
      title: "Maternal & Family Programs",
      description:
        "We provide support and education for mothers to help them care for their children’s health, nutrition, and overall well-being. Our programs include maternal health workshops, family planning education, and economic empowerment initiatives for mothers. By equipping parents with the necessary knowledge and skills, we help create a stable and supportive environment for children to thrive.",
      image: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1740997183/f4vg41bqmdiycndtzg7z.jpg",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Our <span className="text-teal-500">Programs & Initiatives</span>
          </h2>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[1fr_2fr] lg:grid-cols-[200px_1fr_300px] gap-6 items-center border-b pb-12"
            >
              <div className="text-3xl md:text-4xl font-bold text-teal-500 text-center md:text-right">
                {project.number}.
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
              </div>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-[200px] order-first md:order-last"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>500+</strong> schools supported in children’s education.</li>
            <li><strong>10,000+</strong> children provided with essential resources.</li>
            <li><strong>300+</strong> awareness sessions educating families on crucial health and wellness topics.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
