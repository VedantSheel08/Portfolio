"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { awards } from "@/data/portfolio";
import { FaTrophy, FaMedal, FaStar, FaAward } from "react-icons/fa";

const iconMap = [FaTrophy, FaMedal, FaStar, FaAward];

const TimelineItem = ({
  award,
  index,
  inView,
}: {
  award: any;
  index: number;
  inView: boolean;
}) => {
  const Icon = iconMap[index % iconMap.length];
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex items-center mb-12 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
    >
      <div
        className={`flex-1 ${isLeft ? "pr-8 text-right" : "pl-8 text-left"}`}
      >
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-gray-900 border border-cyan-400/30 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 group"
        >
          <div className="flex items-center gap-3 mb-3">
            {isLeft ? (
              <>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {award.title}
                  </h3>
                  <span className="text-cyan-400 font-semibold">
                    {award.year}
                  </span>
                </div>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="text-cyan-400 text-2xl"
                >
                  <Icon />
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="text-cyan-400 text-2xl"
                >
                  <Icon />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {award.title}
                  </h3>
                  <span className="text-cyan-400 font-semibold">
                    {award.year}
                  </span>
                </div>
              </>
            )}
          </div>
          <p className="text-gray-300">{award.description}</p>
        </motion.div>
      </div>

      <div className="relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="w-4 h-4 bg-cyan-400 rounded-full relative z-10"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.7, delay: index * 0.2 + 0.4 }}
          className="absolute inset-0 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-75"
        />
      </div>

      <div className={`flex-1 ${isLeft ? "pl-8" : "pr-8"}`}></div>
    </motion.div>
  );
};

export default function AwardsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      id="awards"
      className="min-h-screen bg-black py-20 px-6 relative"
    >
      <div className="max-w-4xl mx-auto">
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
            Awards & <span className="text-cyan-400">Recognition</span>
          </motion.h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition for excellence in AI innovation, research, and
            leadership across national and international competitions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-600"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 2, delay: 0.5 }}
            style={{ transformOrigin: "top" }}
          />

          {awards.map((award, index) => (
            <TimelineItem
              key={`${award.year}-${award.title}`}
              award={award}
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
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              What's Next?
            </h3>
            <p className="text-black text-lg">
              Continuing to push the boundaries of AI research and innovation,
              with upcoming projects in quantum machine learning and sustainable
              technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
