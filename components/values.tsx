import { Users, Scale, Lightbulb, Shield, Anchor, Feather } from "lucide-react"

export default function Values() {
  const values = [
    {
      icon: <Users className="h-10 w-10 text-teal-600" />,
      title: "Inclusivity",
      description:
        "We embrace diversity and actively include the voices of all community members, ensuring that every individual, especially the underserved, the vulnerable, and the marginalized, is part of the journey towards a sustainably empowered and resilient society.",
    },
    {
      icon: <Scale className="h-10 w-10 text-teal-600" />,
      title: "Impartiality",
      description:
        "We commit to serving all individuals and communities with fairness and equity, ensuring that our efforts to alleviate suffering, nurture long lasting development solutions, and restore hope are carried out without discrimination.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-teal-600" />,
      title: "Innovation",
      description:
        "Our commitment to innovation drives the creation of new and effective approaches to break the barriers of health, poverty, education, and exclusion. By fostering creativity and embracing new ideas, we develop sustainable and scalable solutions.",
    },
    {
      icon: <Shield className="h-10 w-10 text-teal-600" />,
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty and transparency in all our actions, ensuring that our efforts contribute to a sustainably empowered and resilient society.",
    },
    {
      icon: <Anchor className="h-10 w-10 text-teal-600" />,
      title: "Independence",
      description:
        "Independence allows us to operate without undue influence from external entities, ensuring that our actions and decisions are solely in the best interest of the communities we serve and aligned to our strategic objectives.",
    },
    {
      icon: <Feather className="h-10 w-10 text-teal-600" />,
      title: "Inspiration",
      description:
        "Inspiration is about motivating and empowering individuals and communities to take control of their lives and decisions. We aim to inspire hope and confidence, fostering a sense of agency among those we serve.",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-teal-500 font-medium mb-2">PRINCIPLE VALUES</h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Rising Hands Association <span className="text-teal-500">Core Values</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{value.icon}</div>
              <h4 className="text-xl font-bold mb-2">{value.title}</h4>
              <p className="text-gray-700">{value.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

