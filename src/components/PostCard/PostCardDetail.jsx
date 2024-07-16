import React from "react";
import Card from "../Card/Card";
import {
  ChatBubbleLeftIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
};

function PostCardDetail({ setIsDetail }) {
  const handleClose = (e) => {
    if (e.target.classList.contains("absolute")) {
      setIsDetail(false);
    }
  };

  return (
    <motion.div
      className="flex justify-center items-center h-screen bg-stone-800/50 dark:bg-black/50 absolute z-40 inset-0"
      onClick={handleClose}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-2/3 h-5/6 bg-white dark:bg-stone-800 rounded-lg overflow-y-auto custom-scrollbar"
      >
        <Card>
          <div className="flex items-center space-x-2">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex items-center space-x-2">
              <p className="text-stone-700 font-semibold dark:text-stone-200">
                John Doe
              </p>{" "}
              &nbsp;
              <p className="text-stone-500"> @johndoe</p>
            </div>
            <div className="ml-auto">
              <p className="text-stone-500">- 1h</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-stone-700 dark:text-stone-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan
              tincidunt. Donec sol
            </p>
          </div>
          <div className="mt-4 rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/6000789/pexels-photo-6000789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="post"
              className="w-full h-72 object-cover"
            />
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <button className="text-stone-500 hover:text-primary-500 flex items-center space-x-1">
              <HeartIcon className="w-6 h-6" />
              <span className="text-stone-500"> 100</span>
            </button>
            <button className="text-stone-500 hover:text-primary-500 flex items-center space-x-1">
              <ChatBubbleLeftIcon className="w-6 h-6" />
              <span className="text-stone-500"> 32</span>
            </button>
          </div>
          <div className="mt-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
              <input
                type="text"
                placeholder="Add a comment..."
                className="bg-stone-50 border border-stone-300 text-stone-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 w-full"
              />
              <button className="text-primary-600 hover:text-primary-500 focus:outline-none">
                <PaperAirplaneIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="">
                <p className="text-stone-700 font-semibold dark:text-stone-200 text-sm my-3">Comments</p>
              <div className="flex items-start space-x-4">
                <img
                  src="https://randomuser.me/api/portraits/women/75.jpg"
                  alt="profile"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col p-2 bg-stone-100 dark:bg-stone-700 rounded-lg">
                  <p
                    className="text-stone-700 font-semibold dark:text-stone-200
                "
                  >
                    Jane Doe
                  </p>
                  <p className="text-stone-500 mt-2 text-sm dark:text-stone-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla quis lorem ut libero malesuada feugiat. Nulla
                    porttitor accumsan tincidunt. Donec sol
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default PostCardDetail;
