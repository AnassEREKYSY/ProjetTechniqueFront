"use client";

const ComputerIcon = ({active}) => {
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
        d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.4 0 .7 0 1 .2V5a2 2 0 0 0-2-2H5Zm4 10H3v2c0 1.1.9 2 2 2h4v-4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ComputerIcon;
