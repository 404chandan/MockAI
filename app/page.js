"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-900 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }} // replace with your bg image in /public
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Master Your <span className="text-blue-400">Interviews</span> <br />
          With AI-Powered Practice
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-lg md:text-2xl max-w-2xl text-gray-200"
        >
          Get instant feedback, tailored questions, and real-world interview experience with our next-gen AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link href="/dashboard">
            <Button className="px-8 py-6 text-lg rounded-2xl shadow-lg hover:scale-105 transition">
              🚀 Start Practicing
            </Button>
          </Link>
          <Link href="https://github.com/modamaan/Ai-mock-Interview" target="_blank">
            <Button
              variant="outline"
              className="px-8 py-6 text-lg rounded-2xl border-white text-white hover:bg-white hover:text-black transition"
            >
              <FaGithub className="mr-2 h-6 w-6" /> GitHub
            </Button>
          </Link>
        </motion.div>
      </main>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6 md:px-16 bg-black/40 backdrop-blur-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Why Choose <span className="text-blue-400">AI Mock Interview?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Realistic AI Interviews",
              desc: "Simulate real job interviews with tailored AI-driven questions.",
            },
            {
              title: "Instant Feedback",
              desc: "Get actionable insights and tips to refine your answers immediately.",
            },
            {
              title: "Performance Reports",
              desc: "Track your growth with detailed analytics & recommendations.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-white/10 shadow-xl border border-white/20 text-center hover:bg-white/20 transition"
            >
              <h3 className="text-2xl font-semibold text-blue-300 mb-4">{feature.title}</h3>
              <p className="text-gray-200">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative z-10 py-20 text-center bg-gradient-to-r from-blue-500 to-purple-600">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Ready to Land Your <span className="text-black">Dream Job?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg md:text-xl"
        >
          Join thousands of job-seekers leveling up their interview skills with AI.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-8 flex justify-center"
        >
          <Link href="/dashboard">
            <Button className="px-10 py-6 text-lg rounded-2xl shadow-lg bg-black text-white hover:bg-gray-800 transition">
              🎯 Start Now
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center bg-black/80 border-t border-gray-700">
        <p className="text-gray-400 text-sm">© 2025 AI Mock Interview. Built BY CHANDAN PANDEY</p>
      </footer>
    </div>
  );
};

export default HomePage;
