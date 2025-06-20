"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaBriefcase,
  FaGraduationCap,
  FaUsers,
  FaCode,
  FaChess,
  FaVolleyballBall,
} from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "Research Intern",
    company: "McMaster University",
    period: "March 2025 – Present",
    location: "Hamilton, ON",
    icon: FaGraduationCap,
    description: [
      "Engineered a state-of-the-art multi machine learning model for conducting prognosis prediction of pulmonary fibrosis with improved error rate of ± 47mL (human lung holds an approximate 6000mL)",
      "Implemented novel techniques for lung volume quantification, including watershed algorithms from CT scans",
      "Developed a Self-attention CNN model to classify fibrotic tissue patterns and improve prognosis accuracy",
      "Conducting research and testing on in-clinic data under Prof. Dr. Martin Kolb and Prof. Sarah Svenningson",
    ],
    tags: [
      "Machine Learning",
      "Medical AI",
      "CNN",
      "Self-attention",
      "CT Scans",
      "Research",
    ],
    color: "from-red-400 to-orange-600",
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    company: "Clearcable Networks™",
    period: "June 2024 – August 2024",
    location: "Hamilton, ON",
    icon: FaCode,
    description: [
      "Enhanced the company's internal chatbot system, improving response accuracy and user engagement by 35%, resulting in faster client communication and support resolution times",
      "Developed automation scripts to streamline manual workflows, including emergency ticket information retrieval from clients, reducing response time by 43%",
      "Improved team productivity by over 20% through optimizing communication tools and internal systems",
    ],
    tags: [
      "Python",
      "Automation",
      "Chatbots",
      "Workflow Optimization",
      "Team Productivity",
    ],
    color: "from-cyan-400 to-blue-600",
  },
  {
    id: 3,
    role: "Research Intern",
    company: "University of Waterloo",
    period: "March 2023 – June 2023",
    location: "Waterloo, ON",
    icon: FaBriefcase,
    description: [
      "Mentored by Prof. Otman Basir and PhD student Daniel Zadeh on Machine Learning and neural network design",
      "Gained hands-on experience in model development, optimization and deployment for real-time computer vision",
      "Engineered a real-time ASL-to-text-to-voice translator with 98.4% accuracy using Machine Learning",
    ],
    tags: [
      "Machine Learning",
      "Computer Vision",
      "ASL Translation",
      "Neural Networks",
      "Real-time Processing",
    ],
    color: "from-green-400 to-teal-600",
  },
  {
    id: 4,
    role: "Volunteer Assistant",
    company: "Kumon Institute of Education Co. Ltd.",
    period: "June 2022 – July 2023",
    location: "Port Elgin, ON",
    icon: FaUsers,
    description: [
      "Dedicated over 200 hours tutoring and supporting students in developing core math and reading skills",
      "Assisted instructors with grading, marking, and maintaining accurate student progress records",
    ],
    tags: [
      "Education",
      "Mentorship",
      "Tutoring",
      "Student Development",
      "200+ Hours",
    ],
    color: "from-purple-400 to-pink-600",
  },
];

const ExperienceCard = ({
  experience,
  index,
  inView,
}: {
  experience: any;
  index: number;
  inView: boolean;
}) => {
  const Icon = experience.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline line connector */}
      {index < experiences.length - 1 && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
          className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-cyan-400 to-transparent z-0"
          style={{ transformOrigin: "top" }}
        />
      )}

      <div className="flex gap-6 items-start">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="relative z-10"
        >
          <div
            className={`w-16 h-16 rounded-full bg-gradient-to-br ${experience.color} flex items-center justify-center shadow-lg`}
          >
            <Icon className="text-white text-xl" />
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            className={`absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br ${experience.color} opacity-30`}
          />
        </motion.div>

        {/* Content Card */}
        <motion.div
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0, 255, 255, 0.15)",
          }}
          className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-500 group"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
            <div>
              <h3
                className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1"
                className="font-apple-body"
              >
                {experience.role}
              </h3>
              <h4
                className="text-lg text-cyan-400 mb-2"
                style={{
                  fontFamily:
                    "-apple-system, SF Pro Display, Inter, Helvetica Neue, sans-serif",
                }}
              >
                {experience.company}
              </h4>
            </div>
            <div className="text-right">
              <p
                className="text-gray-300 text-sm mb-1"
                style={{
                  fontFamily:
                    "-apple-system, SF Pro Display, Inter, Helvetica Neue, sans-serif",
                }}
              >
                {experience.period}
              </p>
              <p
                className="text-gray-400 text-sm"
                style={{
                  fontFamily:
                    "-apple-system, SF Pro Display, Inter, Helvetica Neue, sans-serif",
                }}
              >
                📍 {experience.location}
              </p>
            </div>
          </div>

          <ul className="space-y-2 mb-6">
            {experience.description.map((item: string, i: number) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 + 0.5 + i * 0.1 }}
                className="flex items-start text-gray-300"
                style={{
                  fontFamily:
                    "-apple-system, SF Pro Display, Inter, Helvetica Neue, sans-serif",
                }}
              >
                <span className="text-cyan-400 mr-3 mt-1">•</span>
                {item}
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag: string, i: number) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.7 + i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium hover:bg-cyan-400/20 transition-colors cursor-default"
                style={{
                  fontFamily:
                    "-apple-system, SF Pro Display, Inter, Helvetica Neue, sans-serif",
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      id="experience"
      className="min-h-screen bg-black py-20 px-6 relative"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            className="font-apple-heading"
          >
            My <span className="text-cyan-400">Experience</span>
          </motion.h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            style={{
              fontFamily:
                "-apple-system, SF Pro Display, Inter, Helvetica Neue, sans-serif",
            }}
          >
            From software development to education and leadership, here's my
            journey building skills and making impact.
          </p>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl p-8">
            <h3
              className="text-3xl font-bold text-black mb-4"
              style={{
                fontFamily:
                  "-apple-system, SF Pro Display, Inter, Helvetica Neue, sans-serif",
              }}
            >
              Ready for New Challenges
            </h3>
            <p
              className="text-black text-lg"
              style={{
                fontFamily:
                  "-apple-system, SF Pro Display, Inter, Helvetica Neue, sans-serif",
              }}
            >
              Always seeking opportunities to apply AI and technology to solve
              real-world problems and create meaningful impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
