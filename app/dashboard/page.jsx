"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-10">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-10">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          🚀 Dashboard
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <UserButton afterSignOutUrl="/" />
        </motion.div>
      </div>

      {/* Sub Heading */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-gray-300"
      >
        Create and start your <span className="text-blue-400 font-semibold">AI Mock Interview</span>
      </motion.h3>

      {/* Add New Interview Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10"
      >
        <div className="col-span-1">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:bg-white/20 transition cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-blue-300">Start New</h3>
              <PlusCircle className="h-7 w-7 text-blue-400" />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Create a new AI-powered mock interview session customized for your job role.
            </p>
            <AddNewInterview />
          </motion.div>
        </div>
      </motion.div>

      {/* Interview List Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-10"
      >
        <h3 className="text-2xl font-bold mb-6 text-blue-300">Your Interviews</h3>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg"
        >
          <InterviewList />
        </motion.div>
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16 text-center"
      >
        <h4 className="text-xl font-semibold text-gray-300 mb-4">
          Want to improve faster?
        </h4>
        <Button className="px-8 py-4 text-lg rounded-xl shadow-lg hover:scale-105 transition">
          Upgrade to Pro 🚀
        </Button>
      </motion.div>
    </div>
  );
};

export default Dashboard;
