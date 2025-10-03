import React, { useRef } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
// Optional: for toasts
import { toast } from 'react-toastify'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert("Message sent successfully!")
      toast.success("Message sent successfully!")
      form.current.reset()
    })
    .catch((err) => {
      console.error(err.text)
      alert("Something went wrong!")
      toast.error("Something went wrong!")
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-[#0D1117]">
      <div className="container mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-2"
          data-aos="fade-up"
        >
          Contact Me
        </h2>
        <p
          className="text-center text-gray-600 dark:text-gray-400 text-md md:text-lg mb-12 max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Have a question, collaboration idea, or just want to say hello? Reach out through the form or connect via socials.
        </p>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full md:w-1/2 bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 space-y-4"
            data-aos="fade-right"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4" data-aos="fade-left">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Connect with me:</h3>
            <div className="flex gap-6 text-2xl text-blue-500">
              <a href="https://www.linkedin.com/in/akshay-parekh1705/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-blue-700 transition" />
              </a>
              <a href="https://github.com/Akshay1705" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-gray-800 dark:hover:text-white transition" />
              </a>
              <a href="mailto:parekhakshay25@email.com">
                <FaEnvelope className="hover:text-red-500 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
