import { PiStarFourFill } from "react-icons/pi";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const Portfolio = () => {
  //project array

  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: "/assets/portfolio-1.png",
      tags: ["Food Delivery", "website"],
    },
    {
      id: 2,
      title: "Project 2",
      image: "/assets/portfolio-2.png",
      tags: ["E-commerce", "website"],
    },
    {
      id: 3,
      title: "Project 3",
      image: "/assets/portfolio-3.png",
      tags: ["Social Media", "website"],
    },
    {
      id: 4,
      title: "Project 4",
      image: "/assets/portfolio-4.png",
      tags: ["Blog", "website"],
    },
  ];
  return (
    <section id="portfolio" className="my-8">
      {/* Heading */}
      <div className="text-center">
        <p className="text-content font-semibold inline-flex items-center gap-1 border border-outer rounded-2xl px-4 py-1 mb-4">
          <PiStarFourFill className="text-lg" />
          Portfolio
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          Checkout my feature <br />
          Project
        </h2>
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white/5 text-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-t from-black-60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* //project details */}
              <div className="absolute bottom-4 left-4 right-4 p-3 md:p-6 bg-black/20 backdrop-blur-md border-t border-white/10">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 text-sm rounded-full border border-white/20 "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Button */}
                  <button className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-md border-white/20 rounded-full text-white hover:bg-white/20">
                    <HiArrowUpRight />
                  </button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 rounded-3xl bg-linear-to-r from-purple-500/10 to-pink-500/10 "
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
