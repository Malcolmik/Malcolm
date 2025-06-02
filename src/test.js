import React, { useState, useEffect } from "react";
import Starfield from "react-starfield";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white font-sans">
      {/* Starfield Background */}
      <div className="absolute inset-0 z-0">
        <Starfield
          starCount={6000}
          speedFactor={0.025}
          starColor={[255, 30, 30]}
          backgroundColor="black"
        />
      </div>

      {/* Navbar */}
      <header className="fixed w-full top-0 left-0 z-50 bg-black bg-opacity-80 shadow-md">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-red-600">Malcolm</h1>

          {/* Desktop icons */}
          <ul className="hidden md:flex space-x-5">
            <li>
              <a href="https://www.linkedin.com/in/malcolm-ikpasaja-ba1405258" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 hover:text-red-500 transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.64v2.15h.05c.51-.97 1.75-2 3.6-2 3.85 0 4.56 2.53 4.56 5.82V24h-4v-8.62c0-2.06-.04-4.72-2.88-4.72-2.88 0-3.32 2.25-3.32 4.57V24h-4V8z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/malcolmik" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 hover:text-red-500 transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.53-3.88-1.53-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.74 1.26 3.4.96.1-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.46-2.3 1.2-3.12-.12-.3-.52-1.53.12-3.2 0 0 .98-.31 3.2 1.19A11.2 11.2 0 0 1 12 6.8c.99.004 1.99.13 2.93.38 2.22-1.5 3.2-1.19 3.2-1.19.64 1.67.25 2.9.13 3.2.75.82 1.2 1.86 1.2 3.12 0 4.43-2.7 5.4-5.27 5.7.42.37.8 1.11.8 2.24v3.31c0 .31.21.68.8.56C20.22 21.39 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="mailto:ikpasajamalcolm@gmail.com">
                <svg className="w-6 h-6 hover:text-red-500 transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V6c0-1.11-.89-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="/Ikpasaja_Malcolm_Resume.pdf" download>
                <svg className="w-6 h-6 hover:text-red-500 transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7 7-7z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </nav>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-black bg-opacity-90 p-4 mt-2 rounded shadow text-white space-y-4 text-sm">
            <a href="https://www.linkedin.com/in/malcolm-ikpasaja-ba1405258" className="block hover:text-red-500">LinkedIn</a>
            <a href="https://github.com/malcolmik" className="block hover:text-red-500">GitHub</a>
            <a href="mailto:ikpasajamalcolm@gmail.com" className="block hover:text-red-500">Email</a>
            <a href="/Ikpasaja_Malcolm_Resume.pdf" download className="block hover:text-red-500">Download CV</a>
          </div>
        )}
      </header>

      {/* Content */}
      <main className="relative z-10 pt-24">
        {/* Hero */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl font-bold mb-4 text-red-600">Hi, I'm Malcolm Ikpasaja</h1>
          <p className="text-xl mb-6 text-gray-300">Software Developer | Full Stack Engineer</p>
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-full text-lg hover:bg-red-700 hover:text-white transition"
          >
            VIEW MY WORK
          </a>
        </section>

        <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text Block */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4 text-white">👋 Hey, I'm Malcolm</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I’m Malcolm, a final-year Computer Science student who loves building tools that <em>actually</em> help people.
                Whether it’s a full-stack web app, an AI chatbot, or an experimental project, I’m all about turning practical ideas into polished products.
                <br /><br />
                I’ve always been strategic — years of chess and tennis will do that to you. Those games taught me how to think ahead,
                adapt fast, and keep my cool under pressure — lessons I bring into every line of code I write.
                <br /><br />
                Originally from Nigeria 🇳🇬, now based in the UK 🇬🇧, I’m constantly learning, building, and pushing boundaries.
              </p>
            </div>

            {/* Profile Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/profile.jpg"
                alt="Malcolm Ikpasaja"
                className="rounded-[30px] max-w-[320px] md:max-w-[360px] object-cover shadow-[0_0_40px_rgba(255,0,0,0.3)]"
              />
            </div>
          </div>
        </section>



        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-red-600">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Real-Time Collaborative Code Editor",
                  description:
                    "Built a real-time collaborative code editor using React, Node.js, and Firebase. Enabled simultaneous editing, syntax highlighting, and dark mode features—boosting task completion speed by 30%.",
                  links: ["Live Demo", "GitHub"],
                },
                {
                  title: "AI Financial Advice Chatbot",
                  description:
                    "Developed a chatbot using Python, Flask, TensorFlow, and NLTK to deliver financial advice via NLP. Achieved 85% accuracy across 300+ user queries.",
                  links: ["Live Demo", "GitHub"],
                },
                {
                  title: "JL Care Booking Platform",
                  description:
                    "Launched a WordPress-based care service booking platform using WooCommerce and custom HTML/CSS. Optimized booking flow and reduced checkout time by 40%.",
                  links: ["Live Site"],
                },
                {
                  title: "AI Customer Service Chatbot",
                  description:
                    "Created a customer support chatbot using supervised NLP models in Python with Flask and NLTK. Achieved over 90% accuracy in testing with real-world queries.",
                  links: ["Live Demo", "GitHub"],
                },
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="bg-[#1c1c1c] border border-gray-700 rounded-2xl p-6 shadow hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="mb-4 text-gray-400">{project.description}</p>
                  <div className="flex space-x-4">
                    {project.links.map((label, i) => (
                      <a
                        key={i}
                        href="#"
                        className="text-red-500 hover:underline font-medium"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-4 max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-6 text-red-600">Contact</h2>
          <p className="mb-4 text-gray-300">Let's work together or just say hi!</p>
          <p className="text-gray-400">
            Email: <a href="mailto:ikpasajamalcolm@gmail.com" className="text-red-500 hover:underline">ikpasajamalcolm@gmail.com</a>
          </p>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} <span className="text-red-500">Malcolm Ikpasaja</span>. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
