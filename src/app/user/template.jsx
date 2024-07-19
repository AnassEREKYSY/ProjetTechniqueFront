"use client";

import { motion } from "framer-motion";
import WithAuth from "../hoc/withAuth";
import SideBar from "@/components/SideBar/SideBar";
import Header from "@/components/Header/Header";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 , transition: { duration: 0.2, ease: "easeInOut" } },
  exit: { opacity: 0, x: 0, y: 0 , transition: { duration: 0.2, ease: "easeInOut", delay: 0.2 } },
};


function UserLayout({ children }) {
  return (
    <main>
      <Header />
      <div className="flex h-screen">
        
        <SideBar />
        <motion.div 
          variants={variants}
          initial="hidden"
          animate="enter"
          transition={{ type: "linear" }}
          className="w-full overflow-y-auto min-h-screen"
        >
          {children}
        </motion.div>
      </div>
    </main>
  );
}

export default WithAuth(UserLayout, 'user');
