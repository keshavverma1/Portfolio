import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // abhi sirf console me data aayega
    alert("Form Submitted ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-[#121618] pt-30 py-16">
      <div className="max-w-3xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center text-[#8e22ab] mb-8">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-[#0e1113] p-8 rounded-xl shadow-[0_0_20px_#750c92]"
        >
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded bg-[#1a1f22] text-white outline-none focus:ring-2 focus:ring-[#750c92]"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded bg-[#1a1f22] text-white outline-none focus:ring-2 focus:ring-[#750c92]"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full mb-6 p-3 rounded bg-[#1a1f22] text-white outline-none focus:ring-2 focus:ring-[#750c92]"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#750c92] py-3 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;