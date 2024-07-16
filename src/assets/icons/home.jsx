"use client";

const HomeIcon = ({active}) => {
    return (
        <svg
        className={`w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400  dark:group-hover:text-white ${active ? "text-primary-500 hover:bg-primary-300 group-hover:text-primary-400 dark:text-white " : "group-hover:text-gray-900"}`} 

            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                fillRule="evenodd"
                d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export default HomeIcon;
  