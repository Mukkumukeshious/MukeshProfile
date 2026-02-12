import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineViewGrid, HiDownload } from "react-icons/hi";

const Hero = () => {
  const icons = [
    "/assets/icon-1.svg",
    "/assets/icon-2.svg",
    "/assets/icon-3.svg",
    "/assets/icon-4.svg",
    "/assets/icon-5.svg",
    "/assets/icon-6.svg",
  ];
  return (
    <section>
      <div className="max-w-2xl m-auto flex flex-col items-center text-center pt-24 md:pt-36 px-4 md:px-0 pb-8 overflow-hidden">
        {/* profile Picture */}

        <div>
          <Image
            src="/assets/profile.png"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full mb-4"
            priority
          />
        </div>
        <h3 className="text-lg md:text-xl font-semibold flex items-center justify-center gap-2">
          I'm Mukesh Chaudhary
        </h3>

        <h1 className="text-3xl md:text-5xl font-semibold mt-2 leading-tight">
          Frontend Developer <br className="md:hidden" /> and Video Editor.
        </h1>
        <div className="relative my-6  md:my-8 w-full mask-r-from-50% mask-l-from-50% overflow-hidden">
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            }}
          >
            {icons.concat(icons).map((icon, index) => (
              <Image
                src={icon}
                key={index}
                alt={`Icon ${index + 1}`}
                width={40}
                height={40}
                className="md:w-[50px] md:h-[50px]"
              />
            ))}
          </motion.div>
        </div>

        {/* Button */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <a href="#portfolio" className="custom-gradient flex w-full md:w-auto py-3 px-8 text-white rounded-full font-semibold items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300">
            My Work <HiOutlineViewGrid className="text-lg" />
          </a>
          <a href="assets/resume.pdf" download className="custom-gradient flex w-full md:w-auto py-3 px-8 text-white rounded-full font-semibold items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300">
           My Resume <HiDownload className="text-lg"/> </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
