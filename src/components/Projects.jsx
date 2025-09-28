import React, { useRef } from "react";
import { motion } from "framer-motion";

import peerAppImg from "../assets/peerAppImg.png";
import bulkMailerImg from "../assets/bulkMailerImg.png";
import cineVaultImg from "../assets/cineVaultImg.png";

const Projects = () => {
  const ProItems = [
    {
      name: "Peer App",
      description:
        "A platform where developers can share their project ideas, showcase GitHub repos, live links, and engage with likes & comments.",
      github: "https://github.com/ragavan2104/peer",
      live: "https://peer-kimv.vercel.app/",
      image: peerAppImg,
    },
    {
      name: "Bulk Mailer App",
      description:
        "An app designed to send bulk emails efficiently to multiple users with ease and proper formatting.",
      github: "https://github.com/ragavan2104/mailsender",
      live: "https://mailsender-x8cv-6t269n12u-raagavans-projects.vercel.app/",
      image: bulkMailerImg,
    },
    {
      name: "CineVault",
      description:
        "A movie showcase platform to browse, search, and explore movies with details, posters, and ratings.",
      github: "https://github.com/ragavan2104/cinevault",
      live: "https://cinevault-beta.vercel.app/",
      image: cineVaultImg,
    },
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ProItems.map((item, index) => {
          const cardRef = useRef(null);

          const handleMouseMove = (e) => {
            const card = cardRef.current;
            if (!card) return;

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * 8;
            const rotateY = ((x - centerX) / centerX) * -8;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
          };

          const handleMouseLeave = () => {
            const card = cardRef.current;
            if (!card) return;
            card.style.transform =
              "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
          };

          return (
            <motion.div
              key={index}
              ref={cardRef}
              className="relative group rounded-2xl shadow-lg overflow-hidden w-72 md:w-80 cursor-pointer transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />

                {/* Glossy Light Reflection */}
                <span
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent 
                  translate-x-[-100%] group-hover:translate-x-[200%] 
                  transition-transform duration-1000 ease-in-out"
                />
              </div>

              {/* Project Name */}
              <h3 className="absolute bottom-0 left-0 w-full text-center bg-gradient-to-t from-black/80 to-transparent text-lg font-semibold text-blue-400 py-2">
                {item.name}
              </h3>

              {/* Overlay: description + links */}
              <div
                className="absolute inset-0 flex flex-col p-6 translate-y-full group-hover:translate-y-0 
                transition-transform duration-500 ease-in-out 
                bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-200 mb-4 text-sm">{item.description}</p>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                  >
                    GitHub Repo
                  </a>
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center border border-blue-400 hover:bg-blue-500 hover:text-white text-blue-400 px-3 py-2 rounded-lg transition-colors text-sm"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
