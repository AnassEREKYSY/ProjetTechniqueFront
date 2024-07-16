"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }) {

  const {profile} = useSelector((state) => state.user);
  const router = useRouter();
  // useEffect(() => {
  //   if(profile?.user ){
  //     router.push(`${profile.user.role}/overview`);
  //   }
  // }
  // , [profile]);

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
    >
      <section>

        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white dark:border md:mt-0 sm:max-w-md xl:p-0 border border-gray-200 rounded-lg dark:border-stone-700 dark:bg-stone-800">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">{children}</div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
