"use client";
import Link from "next/link";
import { motion } from "framer-motion";


export default function SideBarItem({ title, href, Icon, active, onClick }) {
  return (
    <motion.li
      whileTap={{ scale: 0.95 }}
    >
      {onClick ? (
        <button
          onClick={onClick}
          className={`w-full flex items-center p-2 text-base font-normal text-stone-500 rounded-lg dark:text-white hover:bg-stone-100 dark:hover:bg-stone-700 group ${active ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-primary-500 dark:text-white dark:hover:bg-primary-600" : ""}`}
        >
          <Icon active={active} className="w-5 h-5 text-stone-500 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-white" />
          <span className="ml-3 text-sm hover:text-stone-900 dark:hover:text-white"
          >{title}</span>
        </button>
      ) : (
        <Link
          href={href}
          className={`flex items-center p-2 text-base font-normal text-stone-500 rounded-lg dark:text-white hover:bg-stone-100 dark:hover:bg-stone-700 group ${active ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-primary-500 dark:text-white dark:hover:bg-primary-600" : ""}`}
        >
          <Icon active={active} className="w-5 h-5 text-stone-500 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-white" />
          <span className="ml-3 text-sm hover:text-stone-900 dark:hover:text-white"
          >{title}</span>
        </Link>
      )}
    </motion.li>
  );
}
