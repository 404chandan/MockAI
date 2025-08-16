"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";
import { motion } from "framer-motion";
import { PlusCircle, ListChecks } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white p-10">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-10">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-wide"
        >
          Dashboard
        </motion.h1>

        <UserButton afterSignOutUrl="/" />
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-slate-300 mb-8"
      >
        🚀 Create and start your AI-powered mock interviews
      </motion.p>

      {/* Action Section */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5"
      >
        <div className="p-6 bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-1">
          <div className="flex items-center space-x-3 mb-4">
            <PlusCircle className="w-8 h-8 text-blue-400" />
            <h2 className="text-xl font-bold">Start New Interview</h2>
          </div>
          <AddNewInterview />
        </div>

        <div className="col-span-2 p-6 bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-1">
          <div className="flex items-center space-x-3 mb-4">
            <ListChecks className="w-8 h-8 text-green-400" />
            <h2 className="text-xl font-bold">Your Interviews</h2>
          </div>
          <InterviewList />
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
