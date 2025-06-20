"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/data/portfolio";
import { FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({
  project,
  index,
  onClick,
}: {
  project: any;
  index: number;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.03,
        rotateY: 5,
        boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)",
      }}
      className="bg-gray-900 border border-cyan-400/30 rounded-xl p-6 cursor-pointer transform-gpu hover:border-cyan-400 transition-all duration-300 group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg mb-4 h-48 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 180 }}
            className="w-16 h-16 border-2 border-cyan-400 rounded-full flex items-center justify-center"
          >
            <FaExternalLinkAlt className="text-cyan-400 text-xl" />
          </motion.div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {project.name}
          </h3>
          <span className="text-xs bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech: string) => (
            <span
              key={tech}
              className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs text-cyan-400">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>

        <p className="text-gray-400 text-sm line-clamp-2">
          {project.description[0]}
        </p>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: any;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        className="bg-gray-900 border border-cyan-400 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2
              className="text-3xl font-bold text-white mb-2"
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              {project.name}
            </h2>
            <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-cyan-400 mb-3">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 px-3 py-1 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-cyan-400 mb-3">
            Key Features
          </h3>
          <ul className="space-y-2">
            {project.description.map((desc: string, index: number) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-300 flex items-start"
              >
                <span className="text-cyan-400 mr-2">•</span>
                {desc}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2"
          >
            <FaGithub />
            View Code
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 border-2 border-cyan-400 text-cyan-400 font-bold py-3 px-6 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors flex items-center justify-center gap-2"
          >
            <FaExternalLinkAlt />
            Live Demo
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      id="projects"
      className="min-h-screen bg-black py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: "Orbitron, monospace" }}
          >
            Featured <span className="text-cyan-400">Projects</span>
          </motion.h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative AI solutions tackling real-world challenges across
            healthcare, sustainability, and social impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-cyan-400 text-cyan-400 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-cyan-400 hover:text-black"
          >
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
