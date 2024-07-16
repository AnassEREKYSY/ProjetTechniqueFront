"use client";

const BuildingIcon = ({active}) => {
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
        d="M4 4c0-.6.4-1 1-1h14a1 1 0 1 1 0 2v14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2V5a1 1 0 0 1-1-1Zm5 2a1 1 0 0 0-1 1v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H9Zm5 0a1 1 0 0 0-1 1v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1h-1Zm-5 4a1 1 0 0 0-1 1v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1H9Zm5 0a1 1 0 0 0-1 1v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1h-1Zm-3 4a2 2 0 0 0-2 2v3h2v-3h2v3h2v-3a2 2 0 0 0-2-2h-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default BuildingIcon;
