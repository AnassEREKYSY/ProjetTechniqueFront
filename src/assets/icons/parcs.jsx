"use client";

const ParcIcon = ({ active }) => {
  return (
    <svg
      className={`w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400  dark:group-hover:text-white ${active ? "text-primary-500 hover:bg-primary-300 group-hover:text-primary-400 dark:text-white " : "group-hover:text-gray-900"}`} 
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"
      />
    </svg>
  );
};

export default ParcIcon;
