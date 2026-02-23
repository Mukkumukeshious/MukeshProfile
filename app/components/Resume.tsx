import { div } from "framer-motion/client";
import { University } from "lucide-react";
import { PiStarFourFill } from "react-icons/pi";
import { PiGraduationCapFill } from "react-icons/pi";
import { PiBriefcaseFill } from "react-icons/pi";



const Resume = () => {
    const EducationData = [
    {
        year: "2021-2024",
        degree: "Bsc(Hons)Copmuting",
        from: "University of Leeds Backket"
    },
    {
        year: "2019-2021",
        degree: "+2 Science",
        from: "Nepal Mega College, Kathmandu"
    },
    {
        year: "2017-2019",
        degree: "SLC",
        from: "Ujyalo Shiksha Sadan Shikshya Sadan, Kailali"
    }
]

const ExperienceData = [
    {
        year: "2023-Present",
        role: "Frontend Developer",
        company: "Freelance"
    }
]
  return (
    <section id="resume" className="mt-20 pb-12">
  <div className="max-w-6xl mx-auto px-4">

    {/* Header */}
    <div className="text-center mb-14">
      <p className="text-content font-semibold inline-flex items-center gap-2 border border-outer rounded-2xl px-4 py-1 mb-4">
        <PiStarFourFill className="text-lg" />
        Resume
      </p>

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        Here is my resume with <br />
        project and experience details.
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Education */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-10">
          My Education
        </h3>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-transparent opacity-40"></div>

          {/* Items */}
          <div className="space-y-10">
            {EducationData.map((item, index) => (
              <div key={index} className="flex gap-6 group">

                {/* Icon */}
                <div className="relative z-10">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg group-hover:scale-110 transition">
                    <PiGraduationCapFill />
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 w-full hover:border-purple-400/40 transition">

                  <span className="text-sm text-purple-400 font-medium">
                    {item.year}
                  </span>

                  <h4 className="font-semibold text-lg mt-1">
                    {item.degree}
                  </h4>

                  <p className="text-sm text-gray-400">
                    {item.from}
                  </p>

                </div>

              </div>
            ))}
          </div>

        </div>
      </div>


      {/* Experience */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-10">
          My Experience
        </h3>

        <div className="relative">

          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent opacity-40"></div>

          <div className="space-y-10">
            {ExperienceData.map((item, index) => (
              <div key={index} className="flex gap-6 group">

                <div className="relative z-10">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg group-hover:scale-110 transition">
                    <PiBriefcaseFill />
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 w-full hover:border-blue-400/40 transition">

                  <span className="text-sm text-blue-400 font-medium">
                    {item.year}
                  </span>

                  <h4 className="font-semibold text-lg mt-1">
                    {item.role}
                  </h4>

                  <p className="text-sm text-gray-400">
                    {item.company}
                  </p>

                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
  )
}

export default Resume
