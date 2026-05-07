import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FiSend, FiCheck } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewport,
} from "../utils/motion";

const socials = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/akshay-parekh1705/",
    label: "LinkedIn",
    color: "#0A66C2",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Akshay1705",
    label: "GitHub",
    color: "#6366f1",
  },
  {
    icon: FaEnvelope,
    href: "mailto:parekhakshay25@email.com",
    label: "Email",
    color: "#EA4335",
  },
];

const FloatingInput = ({
  label,
  name,
  type = "text",
  textarea = false,
  required = true,
}) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const Tag = textarea ? "textarea" : "input";

  return (
    <div className="relative">
      <Tag
        name={name}
        type={type}
        rows={textarea ? 5 : undefined}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setHasValue(!!e.target.value);
        }}
        onChange={(e) => setHasValue(!!e.target.value)}
        className="peer w-full px-4 pt-5 pb-2 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white outline-none focus:border-indigo-500 transition-all duration-200 resize-none text-sm"
      />
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none text-gray-400 ${
          focused || hasValue
            ? "top-1.5 text-xs text-indigo-400"
            : "top-3.5 text-sm"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setSending(false);
        setSuccess(true);
        toast.success("Message sent successfully!");
        form.current.reset();
        setTimeout(() => setSuccess(false), 4000);
      })
      .catch((err) => {
        setSending(false);
        console.error(err);
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gray-50 dark:bg-[#0A0A0F] overflow-hidden dark:text-gray-200"
    >
      {/* BG layers */}
      <div className="absolute inset-0 z-0 indigo-grid pointer-events-none" />
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="orb orb-teal   blob-2"
          style={{ width: 400, height: 400, top: "-80px", right: "-80px" }}
        />
        <div
          className="orb orb-indigo blob-3"
          style={{ width: 300, height: 300, bottom: "-60px", left: "-40px" }}
        />
      </div>
      {/* Center radial glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.05) 0%, transparent 65%)",
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-14"
        >
          <motion.h2
            variants={fadeUp(0)}
            className="text-3xl md:text-4xl font-bold section-heading-center"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="text-gray-500 dark:text-gray-400 mt-4 text-sm max-w-md mx-auto"
          >
            Have a project idea or want to collaborate? Drop me a message
            <br />- I reply within 24 hours.
          </motion.p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-start max-w-4xl mx-auto">
          {/* Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={slideInLeft(0)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex-1 w-full space-y-4 peer w-full px-4 pt-5 pb-2 rounded-xl bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white outline-none focus:border-indigo-500 transition-all duration-200 resize-none text-sm shadow-sm"
          >
            <FloatingInput label="Your Name" name="from_name" />
            <FloatingInput label="Your Email" name="reply_to" type="email" />
            <FloatingInput label="Your Message" name="message" textarea />

            <motion.button
              type="submit"
              disabled={sending || success}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70"
              style={{
                background: "linear-gradient(135deg, #6366f1, #14b8a6)",
              }}
            >
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <FiCheck /> Message Sent!
                  </motion.span>
                ) : sending ? (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Sending...
                  </motion.span>
                ) : (
                  <motion.span key="idle" className="flex items-center gap-2">
                    <FiSend size={14} /> Send Message
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>

          {/* Socials */}
          <motion.div
            variants={slideInRight(0)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col gap-6 md:pt-2"
          >
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Connect with me
            </h3>
            <div className="flex flex-col gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl group transition-all duration-200 hover:border-indigo-500/30"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                    style={{
                      background: `${social.color}22`,
                      color: social.color,
                    }}
                  >
                    <social.icon />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-400 transition-colors">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
