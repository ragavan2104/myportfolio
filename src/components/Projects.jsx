import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const ProItems = [
    { name: "Project 1", description: "This is project 1", link: "#" },
    { name: "Project 2", description: "This is project 2", link: "#" },
    { name: "Project 3", description: "This is project 3", link: "#" },
  ];

  return (
    <section id="projects" className="flex flex-col items-center mt-28 px-6">
      <motion.h2
        className="text-4xl font-bold mb-8 text-blue-400"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProItems.map((item, index) => (
          <motion.div
            key={index}
            className="brand-dark border border-blue-500/30 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 w-72 md:w-80"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">
              {item.name}
            </h3>
            <p className="text-gray-300 mb-4">{item.description}</p>
            <a
              href={item.link}
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
