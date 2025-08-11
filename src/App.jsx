import React, { useState, useEffect } from 'react';
import './index.css';
import DarkModeToggle from './components/DarkModeToggle';
import { motion } from 'framer-motion';
import Header from './components/Header'; // Make sure this is the updated Header.jsx I gave you

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [zoomMode, setZoomMode] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  useEffect(() => {
    let timeoutId = null;

    function onScroll() {
      if (zoomMode) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setZoomMode(false), 200);
      }

      const sections = [
        'home',
        'about',
        'skills',
        'education',
        'certifications',
        'experience',
        'projects',
        'contact',
      ];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      let current = activeSection;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          current = section;
        }
      }
      setActiveSection(current);
    }

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [activeSection, zoomMode]);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
      setZoomMode(true);
    }
  };

  const skills = [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Responsive Web Design',
    'Axios',
    'JWT',
    'REST API',
    'CRUD',
    'Git',
    'GitHub',
    'Postman',
    'VS Code',
    'AWS',
    'Netlify',
    'Render',
    'MongoDB Atlas',
    'Power BI',
    'Tableau',
    'Excel',
    'Data Visualization',
    'Python',
    'NumPy',
    'Matplotlib',
    'SQL',
    'Embedded SQL',
    'SharePoint',
    'Microsoft Dynamics',
    'Office 365',
  ];

  const education = [
    {
      title: 'University of North Texas',
      time: 'Aug 2022 - Aug 2024',
      desc: "Master's degree, Information Systems and Technology",
    },
    {
      title: 'Veltech Dr.RR Dr.SR University',
      time: 'Jun 2018 - July 2022',
      desc: 'Bachelor of Technology - BTech, Computer Science (8.10 CGPA)',
    },
  ];

  const experience = [
    {
      title: 'IStream Solutions Inc. – Software Trainee',
      time: 'July 2024 – July 2025',
      location: 'Ashburn, VA',
      points: [
        'Collaborated with technical teams to analyze user requirements.',
        'Participated in conceptual design and workflow automation.',
        'Supported QA testing and Agile-based software development.',
      ],
    },
    {
      title: 'CAPGEMINI (DBS Bank) – Software Analyst Intern',
      time: 'June 2021 – July 2022',
      location: 'Bangalore, India',
      points: [
        'Analyzed backend data using SQL and Python.',
        'Streamlined development and QA with cross-functional teams.',
        'Improved internal documentation and Agile delivery.',
      ],
    },
  ];

  const projects = [
    {
      title: 'Task Manager Web App (MERN Stack)',
      date: 'Aug 2025 - Aug 2025',
      description: `A full-stack task manager web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).`,
      features: [
        'User registration and login with JWT authentication',
        'Create, update, delete, and view tasks',
        'Tasks are tied to user accounts (private to each user)',
        'Frontend built with React and Axios for API requests',
        'Backend API with Node.js, Express, and MongoDB Atlas',
        'Protected routes using middleware',
      ],
      deployment: [
        'Frontend hosted on Netlify',
        'Backend hosted on Render',
        'MongoDB Atlas used as cloud database',
      ],
      github: {
        frontend: 'https://github.com/subash1306/task-manager-frontend',
        backend: 'https://github.com/subash1306/task-manager-backend',
      },
      skills: [
        'React.js',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Axios',
        'Responsive Web Design',
        'Node.js',
        'Express.js',
        'REST API',
        'JWT',
        'Middleware',
        'MongoDB',
        'Mongoose',
        'Netlify',
        'Render',
        'MongoDB Atlas',
        'Git',
        'GitHub',
        'Postman',
        'VS Code',
        'CRUD',
        'Digital Authentication',
        'Authorization',
        'Protected Routes',
        'Full-Stack Development',
      ],
      image: '/images/task-manager.png',
    },
    {
      title: 'Covid Rate Analysis',
      date: 'Feb 2021 - Jul 2022',
      description: `Visual data analysis techniques to track the spread of COVID-19 globally, focusing on data integration, identification, and analysis. Provides up-to-date information via maps and graphs to aid understanding and coping with the pandemic.`,
      skills: ['Matplotlib', 'Python', 'Queuing','pandas','NumPy','Data visualization','Data analysis','REST API integration','Git','Jupyter Notebook','Dashboard development'],
      image: '/images/covid-rate-analysis.png',
      associatedWith: 'Veltech Dr.RR Dr.SR University',
      github: {
        frontend: 'https://github.com/AARTHIBK20/code-red',
        backend: 'https://github.com/AARTHIBK20/code-red',
      },
    },
    {
      title: 'Automated Plant Disease Identification Using Deep Learning',
      date: 'Jun 2020 - May 2022',
      description: `Employs deep learning techniques for automated identification of plant diseases, facilitating swift and accurate diagnosis to aid timely mitigation and improve agricultural productivity.`,
      skills: ['NumPy', 'Python','TensorFlow','Keras','CNN','OpenCV','Pandas','Image Processing','Deep learning','Machine Learning'],
      image: '/images/plant-disease.jpg',
      associatedWith: 'Veltech Dr.RR Dr.SR University',
    },
    {
      title: 'Webpage Phishing Detection',
      date: 'Aug 2021 - Dec 2021',
      description: `Machine learning-based phishing detection by analyzing user interactions and content features to identify phishing pages with higher accuracy, enhancing cybersecurity.`,
      skills: ['Machine Learning', 'Python','Scikit-learn','Pandas','NumPy','Data Preprocessing','Model Evaluation','Cybersecurity','Phishing Detection','Data Visualization'],
      image: '/images/phishing-detection.png',
      associatedWith: 'Veltech Dr.RR Dr.SR University',
    },
  ];

  return (
    <>
      <Header activeSection={activeSection} onNavClick={handleNavClick} />
      <div
        className="min-h-screen font-sans transition-colors duration-300 text-gray-800 dark:text-white pt-20"
        style={{
          background:
            'linear-gradient(135deg, #1e3c72, #2a5298, #8e44ad, #ff6a00, #ff9966)',
          backgroundSize: '400% 400%',
          animation: 'gradientAnimation 15s ease infinite',
        }}
      >
        {/* Hero Section */}
        <motion.section
          id="home"
          {...fadeInUp}
          animate={{ scale: zoomMode && activeSection === 'home' ? 1.05 : 1 }}
          className="flex flex-col items-center justify-center h-screen text-center px-4"
        >
          <img
            src="/profile.jpeg"
            alt="Subash Jampana"
            className="w-40 h-40 shadow-md mb-4 object contain mx-auto"
          />
          <h1 className="text-4xl font-bold mb-2">Subash Jampana</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Information Systems Graduate | Web & App Development Enthusiast
          </p>
          <p className="mt-2 text-sm">
            📧 jampanasubash@gmail.com | 📱 +1 (813) 842-4529
          </p>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          {...fadeInUp}
          animate={{ scale: zoomMode && activeSection === 'about' ? 1.05 : 1 }}
          className="max-w-3xl mx-auto py-12 px-4"
        >
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p>
            I hold a Master of Science in Information Systems and Technology
            from the University of North Texas, where I gained a strong
            foundation in backend development, cloud platforms, QA testing, and
            secure coding practices. Throughout my academic and professional
            journey, I have consistently demonstrated a passion for building
            robust and scalable software solutions.
            My primary area of interest lies in web development, as it allows me
            to combine my technical skills with my creative instincts. I enjoy
            designing user-friendly interfaces and developing seamless user
            experiences that bring ideas to life. The dynamic nature of web
            development empowers me to constantly learn, innovate, and adapt
            qualities I deeply value in a fast-evolving tech landscape.
            Driven by a desire to create meaningful digital experiences, I
            continuously explore modern web technologies such as{' '}
            <strong>React, Node.js, MongoDB, and REST APIs</strong>. I'm
            particularly drawn to full-stack development, where I can
            contribute across both frontend and backend workflows while ensuring
            performance, security, and design excellence.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          {...fadeInUp}
          animate={{ scale: zoomMode && activeSection === 'skills' ? 1.05 : 1 }}
          className="max-w-4xl mx-auto py-12 px-4"
        >
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          {...fadeInUp}
          animate={{
            scale: zoomMode && activeSection === 'education' ? 1.05 : 1,
          }}
          className="max-w-4xl mx-auto py-12 px-4"
        >
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="relative border-l border-gray-300 dark:border-gray-600 pl-6">
            {education.map((edu, index) => (
              <div key={index} className="mb-10">
                <div className="absolute w-3 h-3 bg-teal-500 rounded-full -left-1.5 top-1.5"></div>
                <h3 className="text-lg font-semibold">{edu.title}</h3>
                <p className="text-sm text-green-500">{edu.time}</p>
                <p className="text-sm">{edu.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          {...fadeInUp}
          animate={{
            scale: zoomMode && activeSection === 'certifications' ? 1.05 : 1,
          }}
          className="max-w-4xl mx-auto py-12 px-4"
        >
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <ul className="list-disc list-inside text-sm">
            <li>
              Databricks - Generative AI Fundamentals (Credential ID: 107482882,
              Jun 2024 - Jun 2026)
            </li>
            <li>AWS Educate - Getting Started with Cloud Ops (Issued Apr 2024)</li>
            <li>
              AWS Educate - Getting Started with Compute (Issued Apr 2024)
            </li>
            <li>
              AWS Educate - Getting Started with Databases (Issued Apr 2024)
            </li>
            <li>AWS Educate - Introduction to Cloud 101 (Issued Apr 2024)</li>
          </ul>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          {...fadeInUp}
          animate={{
            scale: zoomMode && activeSection === 'experience' ? 1.05 : 1,
          }}
          className="bg-gray-100 dark:bg-gray-800 py-12 px-4 transition-colors duration-300"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="relative border-l border-gray-300 dark:border-gray-600 pl-6">
              {experience.map((exp, index) => (
                <div key={index} className="mb-10">
                  <div className="absolute w-3 h-3 bg-teal-500 rounded-full -left-1.5 top-1.5"></div>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-sm text-500">
                    {exp.location} | {exp.time}
                  </p>
                  <ul className="list-disc list-inside mt-2 text-sm">
                    {exp.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          {...fadeInUp}
          animate={{
            scale: zoomMode && activeSection === 'projects' ? 1.05 : 1,
          }}
          className="max-w-6xl mx-auto py-12 px-6 space-y-20"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">Projects </h2>
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={project.title}
                className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg shadow-lg object-cover w-full max-h-80"
                  />
                </div>

                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm italic text--500">{project.date}</p>
                  {project.associatedWith && (
                    <p className="text-xs font-semibold text--600">
                      Associated with {project.associatedWith}
                    </p>
                  )}
                  <p>{project.description}</p>

                  {project.features && (
                    <>
                      <h4 className="font-semibold">Key Features:</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {project.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {project.deployment && (
                    <>
                      <h4 className="font-semibold mt-3">Deployment:</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {project.deployment.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {project.github && (
                    <>
                      <h4 className="font-semibold mt-3">GitHub Code:</h4>
                      <p className="text-sm">
                        Frontend:{' '}
                        <a
                          href={project.github.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text--00 underline"
                        >
                          {project.github.frontend}
                        </a>
                      </p>
                      <p className="text-sm">
                        Backend:{' '}
                        <a
                          href={project.github.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text--600 underline"
                        >
                          {project.github.backend}
                        </a>
                      </p>
                    </>
                  )}

                  {project.skills && (
                    <>
                      <h4 className="font-semibold mt-3">Skills:</h4>
                      <p className="text-sm">{project.skills.join(' · ')}</p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          {...fadeInUp}
          animate={{
            scale: zoomMode && activeSection === 'contact' ? 1.05 : 1,
          }}
          className="bg-gray-200 dark:bg-gray-900 py-12 px-4 text-center transition-colors duration-300"
        >
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>
            Email:{' '}
            <a
              href="mailto:jampanasubash@gmail.com"
              className="text-blue-600 dark:text-blue-400"
            >
              jampanasubash@gmail.com
            </a>
          </p>
          <p>Phone: +1 (813) 842-4529</p>
          <p>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/subash-jampana-92130622a"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400"
            >
              www.linkedin.com/in/subash-jampana-92130622a
            </a>
          </p>
        </motion.section>
        <div className="dark-mode-toggle-wrapper">
          <DarkModeToggle />
        </div>
      </div>
    </>
  );
}

export default App;
