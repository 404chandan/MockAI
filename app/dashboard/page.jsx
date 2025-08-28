"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";
import { motion } from "framer-motion";
import { PlusCircle, ListChecks } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-12">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-extrabold"
          >
            Dashboard
          </motion.h1>

          {/* <UserButton afterSignOutUrl="/" /> */}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-lg text-gray-600 mb-12"
        >
          🚀 Create and manage your AI-powered mock interviews
        </motion.p>

        {/* Action Section */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* Start New Interview */}
          <div className="flex flex-col justify-between p-10 bg-white rounded-2xl border shadow-md hover:shadow-lg transition min-h-[300px]">
            <div className="flex items-center space-x-4 mb-6">
              <PlusCircle className="w-8 h-8 text-blue-500" />
              <h2 className="text-2xl font-semibold">Start New Interview</h2>
            </div>
            <AddNewInterview />
          </div>

          {/* Your Interviews */}
          <div className="col-span-2 flex flex-col justify-between p-15 bg-white rounded-2xl border shadow-md hover:shadow-lg transition min-h-[300px]">
            <div className="flex items-center space-x-4 mb-6">
              <ListChecks className="w-8 h-8 text-green-500" />
              <h2 className="text-2xl font-semibold">Your Interviews</h2>
            </div>
            <InterviewList />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
