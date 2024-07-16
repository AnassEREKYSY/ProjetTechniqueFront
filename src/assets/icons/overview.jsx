"use client";

const OverviewIcon = ({active}) => {
  return (
    <svg
      aria-hidden="true"
      className={`w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400  dark:group-hover:text-white ${active ? "text-primary-500 hover:bg-primary-300 group-hover:text-primary-400 dark:text-white " : "group-hover:text-gray-900"}`} 
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
    </svg>
  );
};

export default OverviewIcon;
