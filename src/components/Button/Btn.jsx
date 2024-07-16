import { Spinner } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function Btn({
  children,
  variation,
  tooltip,
  Icon,
  loading,
  size,
  ...props
}) {
  let buttonClassName =
    " w-full focus:outline-none font-medium rounded-lg text-sm text-center relative";

  if (variation === "primary") {
    buttonClassName +=
      " bg-primary-700 hover:bg-primary-800 dark:bg-primary-50 dark:text-stone-900 dark:hover:bg-primary-700 text-white dark:focus:ring-primary-800 focus:ring-4";
  } else if (variation === "secondary") {
    buttonClassName +=
      " border border-stone-300 bg-white text-stone-900 dark:border-stone-700 dark:bg-stone-800 dark:text-white hover:bg-stone-100 dark:hover:bg-stone-700 focus:z-10 text-stone-900 dark:text-white";
  } else if (variation === "success") {
    buttonClassName += " bg-success-600";
  } 
  else if (variation === "danger") {
    buttonClassName +=
    " bg-red-600 hover:bg-red-700 dark:hover:bg-red-700 text-white dark:focus:ring-red-800";
  } 
  else if (variation === "danger-outline") {
    buttonClassName +=
    " bg-red-600/5 text-red-600 dark:border-red-400 dark:text-red-400 hover:bg-red-100 dark:hover:bg-stone-700 focus:z-10 focus:ring-2 focus:ring-red-500 focus:text-red-600 dark:focus:ring-blue-500 dark:focus:text-white";
  } 
  else if (variation === "primary-outline") {
    buttonClassName +=
      " bg-primary-500/10 text-primary-600 dark:border-primary-400 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-stone-700 focus:z-10 focus:ring-2 focus:ring-primary-500 focus:text-primary-600 dark:focus:ring-blue-500 dark:focus:text-white";
  }
  return (
    <motion.button
      className={buttonClassName}
      whileTap={{ scale: 0.95 }}
      style={{ minHeight: "42px" }} 
      {...props}
    >
      <AnimatePresence>
        {!loading ? (
          <motion.span
            key="text"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            style={{ position: "absolute", width: "100%", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} 
          >
            {children}
          </motion.span>
        ) : (
          <motion.span
            key="spinner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
             <div role="status">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-stone-200 animate-spin dark:text-stone-600 fill-primary-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
