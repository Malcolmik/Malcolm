import React, { useState, useEffect } from "react";
import Starfield from "react-starfield";
import AOS from "aos";
import "aos/dist/aos.css";
import { track } from './analytics';
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
          <img src="icons8-source-code-24.png"></img>
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
              <a href="/Malcolm_ikpasaja_cv.pdf" download>
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
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl font-bold mb-4 text-red-600">Hi, I'm Malcolm Ikpasaja</h1>
          <p className="text-xl mb-6 text-gray-300">Software Developer | Full Stack Engineer</p>
          <a
            href="#projects"
           className="bg-red-700 text-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-black transition"

          >
            VIEW MY WORK
          </a>
        </section>

        {/* About */}
        <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text Block */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4 text-red-600"> About Me</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a First Class Computer Science Graduate from the university of wolverhampton, who is passionate about developing helpful and easy-to-use tools whether a web application, an AI chatbot, or a design project. Here are some technologies I am familiar with:</p>
                <div className="flex gap-8">
                  <ul className="red-bullets">
                    <li>Python</li>
                    <li>Java</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                  <ul class="red-bullets">
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>C</li>
                    <li>C++</li>
                  </ul>
                </div> 
            </div>

            {/* Profile Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/malcolm_face.jpeg"
                alt="Malcolm Ikpasaja"
                className="rounded-[30px] max-w-[250px] md:max-w-[300px] object-cover shadow-[0_0_40px_rgba(255,0,0,0.3)]"
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="relative py-24 px-4 bg-black text-white" data-aos="fade-up">
          <div className="max-w-6xl mx-auto relative">

            {/* Wavy vertical SVG line */}
            <svg
              className="absolute left-5 top-0 h-full w-8 z-0"
              viewBox="0 0 10 1000"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5,0 Q0,50 5,100 Q10,150 5,200 Q0,250 5,300 Q10,350 5,400 Q0,450 5,500 Q10,550 5,600 Q0,650 5,700 Q10,750 5,800 Q0,850 5,900 Q10,950 5,1000"
                stroke="#b91c1c"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            <h2 className="text-4xl font-bold text-center text-red-600 mb-16 relative z-10">Experience</h2>

            <div className="relative pl-10 space-y-12 z-10">

              {/* Blue Inc Tech */}
              <div className="relative group">
                <div className="absolute -left-[13px] top-2 w-6 h-6 bg-red-700 rounded-full border-4 border-black z-20"></div>
                <div className="bg-[#1c1c1c] rounded-xl p-6 shadow-lg hover:shadow-red-800/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white">Software Engineering Intern</h3>
                  <p className="text-sm text-gray-400">Blue Inc Tech — Abuja, Nigeria | Nov 2021 – Feb 2022</p>
                  <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                    <li>Resolved 50+ IT issues with 98% system uptime.</li>
                    <li>Improved database + site performance by 15%.</li>
                    <li>Handled help desk support across networks/systems.</li>
                  </ul>
                </div>
              </div>

              {/* Student Ambassador */}
              <div className="relative group">
                <div className="absolute -left-[13px] top-2 w-6 h-6 bg-red-700 rounded-full border-4 border-black z-20"></div>
                <div className="bg-[#1c1c1c] rounded-xl p-6 shadow-lg hover:shadow-red-800/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white">Student Ambassador</h3>
                  <p className="text-sm text-gray-400">University of Wolverhampton | Jan 2023 – Sept 2023</p>
                  <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                    <li>Guided prospective students and families during tours.</li>
                    <li>Represented university at open days and outreach events.</li>
                    <li>Worked with staff on events and digital marketing.</li>
                  </ul>
                </div>
              </div>

              {/* Teaching Assistant */}
              <div className="relative group">
                <div className="absolute -left-[13px] top-2 w-6 h-6 bg-red-700 rounded-full border-4 border-black z-20"></div>
                <div className="bg-[#1c1c1c] rounded-xl p-6 shadow-lg hover:shadow-red-800/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white">Teaching Assistant</h3>
                  <p className="text-sm text-gray-400">WLV Computer Science Dept | Feb 2024 – June 2024</p>
                  <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                    <li>Supported 30+ students in Robotics workshops and labs.</li>
                    <li>Taught CoppeliaSim, Python & behavior trees for navigation.</li>
                    <li>Optimized simulations and improved student debugging skills.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-red-600">My Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Real-Time Collaborative Code Editor",
                  description:
                    "Built a real-time collaborative code editor using React, Node.js, and Firebase. Enabled simultaneous editing, syntax highlighting, and dark mode features boosting task completion speed by 30%.",
                  links: [
                    { label: "Video Demo", url: "https://youtu.be/h0H-qW1ZKvM" },
                    { label: "GitHub", url: "https://github.com/Malcolmik/Real-Time-Code-Editor/blob/main/README.md" }
                  ],
                },
                {
                  title: "Maze Navigating Robot using  CopeliaSim",
                  description:
                    "I built a series of intelligent bots that navigate mazes using Python and CoppeliaSim. From basic motion to advanced sensor-driven logic, the project showcases how a simulated robot (dr20) uses ultrasonic sensors, and vision to explore paths and recognize signs. ",
                  links: [
                    { label: "GitHub", url: "https://github.com/Malcolmik/Maze-Navigating-Robot-using-CoppeliaSim" }
                  ],
                },
                {
                  title: "JL Care Booking Platform",
                  description:
                    "As project manager and software developer, I led the development of JLcare, a care-focused web application for the elderly, built during the Collaborative Development module. The app was developed using WordPress, with features tailored to accessibility and user needs.",
                  links: [
                    { label: "Video Demo", url: "https://youtu.be/kAIIr-1iui4?si=mfni2LBATbEV7m0u" }
                  ],
                },
                {
                  title: "Akka-Based Bank Account Simulation",
                  description:
                    "A concurrent transaction simulation built using the Akka Actor framework in Java. The project models a bank account that processes deposits and withdrawals as actor messages, demonstrating thread-safe state management and message-driven architecture. It highlights the use of concurrency, asynchronous communication, and actor-based design for real-time financial simulations.",
                  links: [
                    { label: "GitHub", url: "https://github.com/Malcolmik/Concurrent-Bank-Account-Simulation-with-Akka-Actors/tree/main" }
                  ],
                },
                {
                  title: "Movies Review Web App using Google Firestore",
                  description:
                    "A JavaScript and HTML-based web app that connects to Google Firestore to manage movie reviews. Users can add, edit, delete, and sort reviews by fields like rating, director, or release date, all in real time with no login required.",
                  links: [
                    { label: "Live Demo", url: "https://movies-review-web-app-using-google.vercel.app/" },
                    { label: "GitHub", url: "https://github.com/Malcolmik/Movies-Review-Web-App-using-Google-Firestore/tree/main" }
                  ],
                },
                {
                  title: "AI-Powered Chatbot (Next.js)",
                  description:
                        "Built an AI customer support chatbot using Next.js and OpenAI API. Designed to simulate human-like interactions, with dynamic message rendering and context awareness.",
                  links: [
                    { label: "Live Demo", url: "https://nextjs-ai-chatbot-rust-gamma-62.vercel.app/" },
                    { label: "GitHub", url: "https://github.com/Malcolmik/nextjs-ai-chatbot" },
                  ]
                },
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="bg-[#1c1c1c] border border-gray-700 rounded-2xl p-6 shadow hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="mb-4 text-gray-400">{project.description}</p>
                  <div className="flex space-x-4">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 hover:underline font-medium"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Freelance Projects Section */}
        <section id="freelance" className="py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-red-600">Freelance Projects</h2>
            <p className="text-gray-400 text-center mb-12">
              Selected websites built for real-world clients in plumbing and home services.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Earthy Plumbing",
                  image: "earthy-hero.png",
                  description: "Eco-inspired landing page with a strong CTA and soft visuals to drive leads.",
                  link: "https://earthy-plumb-connect.lovable.app/",
                },
                {
                  title: "plumbing103",
                  image: "plumbing103.png",
                  description: "Conversion-focused website with floating 'Book Now' buttons and trust cues.",
                  link: "https://plumbing-103.lovable.app/",
                },
                {
                  title: "ProPlumb",
                  image: "proPlumb.png",
                  description: "A results-driven site featuring standout 'Book Now' prompts and credibility-boosting elements.",
                  link: "https://clean-plumb-lead-flow.lovable.app/",
                },
                {
                  title: "Plumber105",
                  image: "plumb105.png",
                  description: "Built to guide visitors seamlessly from initial interest to booking, turning leads into paying customers through clear CTAs and trust-enhancing design.",
                  link: "https://service-suds-site.lovable.app/",
                },
              ].map((proj, idx) => (
                <div key={idx} className="bg-[#1c1c1c] rounded-xl overflow-hidden shadow-lg hover:shadow-red-800/20 transition">
                  <div className="overflow-hidden">
                    <img
                      src={proj.image}
                      alt={`${proj.title} screenshot`}
                      className="w-full h-50 object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
                    <p className="text-gray-400 mb-4">{proj.description}</p>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:underline"
                    >
                      View Live
                    </a>
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
