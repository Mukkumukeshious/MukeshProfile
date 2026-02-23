import React, { useState } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
      const [result, setResult] = useState("");

  const onSubmit = async (event:any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY || "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Your Message Sent Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
  return (
    <section id="contact" className="mt-12 pb-8">
      {/* Heading */}
      <div className="text-center">
        <p className="text-content font-semibold inline-flex items-center gap-1 border border-outer rounded-2xl px-4 py-1 mb-4">
          <PiStarFourFill className="text-lg" />
          Contact
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          Building your business in advance <br />
          connect with me for your project.
        </h2>
      </div>

      {/* contact form */}
      <form
      onSubmit={onSubmit}
        action=""
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 text-xl font-semibold"
      >
        {/* left side */}
        <div className="flex flex-col space-y-6">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter your name"
            required
            className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3"
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter your email"
            required
            className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3"
          />
        </div>

        {/* Right side */}
        <div className="flex flex-col space-y-6">
          <input
            type="text"
            name="address"
            id=""
            placeholder="Enter your address"
            required
            className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3"
          />
          <input
            type="tel"
            name="phone"
            id=""
            placeholder="Enter your phone number"
            required
            className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3"
          />

        
        </div>

        <div className="md:col-span-2">
        <textarea
          name="message"
          id=""
          placeholder="Enter your message"
          required
          className="w-full border-b-2 bg-transparent border-outer focus:outline-none focus:border-primary py-2 h-24 resize-none "
        ></textarea>
        </div>
        <div className="md:col-span-2">
             <button type="submit"
             className="mt-6 bg-amber-100/20 backdrop-blur-sm border border-outer rounded-full px-6 py-3 flex items-center gap-2 hover:bg-amber-100/30 transition">
          Send messege <IoIosSend />
        </button>

        </div>
        
       <span className="max-w-4xl mx-auto">{result}</span>
      </form>
    </section>
  );
};

export default Contact;
