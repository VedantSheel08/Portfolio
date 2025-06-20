"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaBriefcase,
  FaGraduationCap,
  FaUsers,
  FaCode,
  FaExpand,
  FaCompress,
  FaExternalLinkAlt,
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
    bgColor: "from-red-400/10 to-orange-600/10",
    achievements: "± 47mL Error Rate Achievement",
    impact: "Advancing Medical AI for Lung Disease Diagnosis",
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
    bgColor: "from-cyan-400/10 to-blue-600/10",
    achievements: "35% Accuracy Improvement + 43% Speed Increase",
    impact: "Enterprise Communication Enhancement",
  },
  {
    id: 3,
    role: "ML Research Intern",
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
    bgColor: "from-green-400/10 to-teal-600/10",
    achievements: "98.4% Accuracy ASL Translator",
    impact: "Accessibility Technology Innovation",
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
    bgColor: "from-purple-400/10 to-pink-600/10",
    achievements: "200+ Hours Dedication",
    impact: "Student Development & Educational Support",
  },
];

const TimelineConnector = ({
  index,
  inView,
  isActive,
}: {
  index: number;
  inView: boolean;
  isActive: boolean;
}) => {
  if (index === experiences.length - 1) return null;

  return (
    <motion.div
      className="absolute left-8 top-20 w-0.5 h-32 z-0"
      initial={{ scaleY: 0, opacity: 0 }}
      animate={inView ? { scaleY: 1, opacity: 1 } : {}}
      transition={{ duration: 1.5, delay: index * 0.3 + 0.8 }}
      style={{ transformOrigin: "top" }}
    >
      <motion.div
        className={`w-full h-full bg-gradient-to-b ${isActive ? "from-cyan-400 to-cyan-600" : "from-cyan-400/50 to-transparent"}`}
        animate={{
          opacity: isActive ? [0.5, 1, 0.5] : 0.3,
          boxShadow: isActive
            ? [
                "0 0 5px rgba(0, 255, 255, 0.3)",
                "0 0 20px rgba(0, 255, 255, 0.6)",
                "0 0 5px rgba(0, 255, 255, 0.3)",
              ]
            : "0 0 0px rgba(0, 255, 255, 0)",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

const ExperienceCard = ({
  experience,
  index,
  inView,
  isHovered,
  setHoveredCard,
  expandedCard,
  setExpandedCard,
}: {
  experience: any;
  index: number;
  inView: boolean;
  isHovered: boolean;
  setHoveredCard: (id: number | null) => void;
  expandedCard: number | null;
  setExpandedCard: (id: number | null) => void;
}) => {
  const Icon = experience.icon;
  const isExpanded = expandedCard === experience.id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className="relative perspective-1000"
      onHoverStart={() => setHoveredCard(experience.id)}
      onHoverEnd={() => setHoveredCard(null)}
    >
      <TimelineConnector index={index} inView={inView} isActive={isHovered} />

      <div className="flex gap-6 items-start">
        {/* Enhanced Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: index * 0.2 + 0.3,
            type: "spring",
            stiffness: 200,
          }}
          className="relative z-10"
        >
          <motion.div
            className={`w-16 h-16 rounded-full bg-gradient-to-br ${experience.color} flex items-center justify-center shadow-2xl relative overflow-hidden`}
            whileHover={{
              scale: 1.1,
              rotate: [0, -10, 10, 0],
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.6)",
            }}
            animate={{
              boxShadow: isHovered
                ? [
                    "0 0 20px rgba(0, 255, 255, 0.4)",
                    "0 0 40px rgba(0, 255, 255, 0.8)",
                    "0 0 20px rgba(0, 255, 255, 0.4)",
                  ]
                : "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Icon className="text-white text-xl relative z-10" />

            {/* Animated background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: isHovered ? ["-100%", "100%"] : "-100%",
              }}
              transition={{
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Pulsing rings */}
          <motion.div
            className={`absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br ${experience.color}`}
            animate={{
              scale: isHovered ? [1, 1.4, 1] : [1, 1.2, 1],
              opacity: [0.4, 0.1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          />

          <motion.div
            className={`absolute inset-0 w-16 h-16 rounded-full border-2 border-cyan-400`}
            animate={{
              scale: isHovered ? [1, 1.6, 1] : [1, 1.3, 1],
              opacity: [0.6, 0, 0.6],
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Enhanced Content Card */}
        <motion.div
          className="flex-1 relative"
          layout
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className={`bg-gradient-to-br ${experience.bgColor} backdrop-blur-md border border-cyan-400/20 rounded-2xl p-6 relative overflow-hidden group cursor-pointer`}
            whileHover={{
              scale: 1.02,
              y: -5,
              boxShadow: "0 25px 50px rgba(0, 255, 255, 0.2)",
              borderColor: "rgba(0, 255, 255, 0.5)",
            }}
            animate={{
              borderColor: isHovered
                ? "rgba(0, 255, 255, 0.5)"
                : "rgba(0, 255, 255, 0.2)",
              boxShadow: isHovered
                ? "0 20px 40px rgba(0, 255, 255, 0.15)"
                : "0 10px 20px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.3 }}
            onClick={() => setExpandedCard(isExpanded ? null : experience.id)}
          >
            {/* Animated background gradient */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-5`}
              transition={{ duration: 0.3 }}
            />

            {/* Floating particles */}
            {isHovered && (
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    initial={{
                      x: Math.random() * 300,
                      y: Math.random() * 200,
                      opacity: 0,
                    }}
                    animate={{
                      y: [null, -20, -40],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </>
            )}

            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <motion.h3
                    className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1 font-apple-heading"
                    animate={{
                      color: isHovered ? "#00FFFF" : "#FFFFFF",
                    }}
                  >
                    {experience.role}
                  </motion.h3>
                  <h4 className="text-lg text-cyan-400 mb-2 font-apple-body font-semibold">
                    {experience.company}
                  </h4>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-gray-300 text-sm mb-1 font-apple-body font-medium">
                      {experience.period}
                    </p>
                    <p className="text-gray-400 text-sm font-apple-body">
                      📍 {experience.location}
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400/30 transition-colors"
                  >
                    {isExpanded ? (
                      <FaCompress size={14} />
                    ) : (
                      <FaExpand size={14} />
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Achievement Badge */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                <div className="inline-block bg-gradient-to-r from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-2">
                  <p className="text-cyan-400 text-sm font-semibold font-apple-body">
                    🏆 {experience.achievements}
                  </p>
                </div>
                <p className="text-gray-300 text-sm font-apple-body italic">
                  {experience.impact}
                </p>
              </motion.div>

              {/* Description */}
              <AnimatePresence>
                <motion.ul className="space-y-2 mb-6" layout>
                  {experience.description
                    .slice(0, isExpanded ? experience.description.length : 2)
                    .map((item: string, i: number) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.2 + 0.7 + i * 0.1 }}
                        className="flex items-start text-gray-300 font-apple-body leading-relaxed"
                      >
                        <motion.span
                          className="text-cyan-400 mr-3 mt-1"
                          animate={{
                            scale: isHovered ? [1, 1.2, 1] : 1,
                            rotate: isHovered ? [0, 360] : 0,
                          }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                          •
                        </motion.span>
                        {item}
                      </motion.li>
                    ))}
                </motion.ul>
              </AnimatePresence>

              {/* Show more indicator */}
              {!isExpanded && experience.description.length > 2 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-cyan-400 text-sm mb-4 font-apple-body cursor-pointer hover:text-cyan-300 transition-colors"
                >
                  + {experience.description.length - 2} more achievements...
                </motion.p>
              )}

              {/* Tags */}
              <motion.div className="flex flex-wrap gap-2" layout>
                {experience.tags.map((tag: string, i: number) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.9 + i * 0.05 }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 5px 15px rgba(0, 255, 255, 0.3)",
                    }}
                    className="bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium hover:bg-cyan-400/20 transition-all cursor-default font-apple-body"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function ExperienceSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="experience"
      className="min-h-screen bg-black py-20 px-6 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full opacity-5"
            style={{
              background: `radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%)`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 25}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white mb-4 font-apple-heading"
            animate={{
              textShadow: hoveredCard
                ? "0 0 20px rgba(0, 255, 255, 0.5)"
                : "0 0 0px rgba(0, 255, 255, 0)",
            }}
          >
            My <span className="text-cyan-400">Experience</span>
          </motion.h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-apple-body">
            From cutting-edge AI research to enterprise software engineering -
            building the future of technology.
          </p>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              inView={inView}
              isHovered={hoveredCard === experience.id}
              setHoveredCard={setHoveredCard}
              expandedCard={expandedCard}
              setExpandedCard={setExpandedCard}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2 }}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl p-8 relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)",
            }}
          >
            <h3 className="text-3xl font-bold text-black mb-4 font-apple-heading">
              Ready for New Challenges
            </h3>
            <p className="text-black text-lg font-apple-body max-w-lg">
              Continuously pushing the boundaries of AI and technology to create
              meaningful impact in healthcare, sustainability, and
              human-computer interaction.
            </p>

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
