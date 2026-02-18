import { PiStarFourFill } from "react-icons/pi";

const About = () => {
  return (
    <section id="about" className="mt-12 pb-8 ">
      {/* Heading */}
      <div className="text-center">
        <p className="text-content font-semibold inline-flex items-center gap-1 border border-outer rounded-2xl px-4 py-1 mb-4">
          <PiStarFourFill className="text-lg" />
          About Me
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          Turn your business into <br />
          easy to use website
        </h2>
      </div>

      {/* card1 */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer ">
          <h3 className="text-5xl md:text-6xl font-bold mb-2">10+</h3>
          <p className="text-gray-600 font-semibold text-2xl">Modern Project</p>
        </div>

        {/* Card2 */}

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer ">
          <h3 className="text-5xl md:text-6xl font-bold mb-2">1+</h3>
          <p className="text-gray-600 font-semibold text-2xl">
            Years of experience
          </p>
        </div>

        {/* card3 */}

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer ">
          <h3 className="text-5xl md:text-6xl font-bold mb-2">Modern</h3>
          <p className="text-gray-600 font-semibold text-2xl">Design</p>
        </div>
      </div>

      {/* text cotent */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-gray-600 text-lg leading-relaxed">
            I'm a passionate web developer dedicated to creating modern,
            user-friendly websites that transform your business online. With
            expertise in responsive design and cutting-edge technologies, I
            deliver solutions that not only look great but perform
            exceptionally. My goal is to help you establish a strong digital
            presence and connect with your audience effectively.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you're a small business or an individual, I'm here to bring
            your vision to life and make your online presence stand out. Let's
            work together to create a website that not only meets your needs but
            exceeds your expectations. Contact me today to get started on your
            web development journey!
          </p>
        </div>

        {/* Right column */}
        <div className="lg:col-span-1 space-y-4">
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1"> Name</p>
            <p className="text-gray-700 text-xl font-semibold">
              Mukesh Chaudhary
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm font-medium mb-1"> Gmail</p>
            <p className="text-gray-700 text-xl font-semibold">
              iammuekshious@gmail.com
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">Phone</p>
            <p className="text-gray-700 text-xl font-semibold">9821640914</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">Location</p>
            <p className="text-gray-700 text-xl font-semibold">
              Kathmandu, Nepal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
