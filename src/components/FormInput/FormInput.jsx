import { useEffect, useRef, useState } from "react";

function FormInput({ label, id, readonly, type, ...otherProps }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="flex-1">
        {label && (
          <label
            htmlFor={id}
            className="block mb-2 text-sm font-medium text-stone-900 dark:text-white"
          >
            {label}
          </label>
        )}

        {type == "password" ? (
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id={id}
              className={`bg-stone-50 border border-stone-300 text-stone-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                readonly
                  ? "bg-stone-300 dark:bg-stone-800 cursor-not-allowed"
                  : ""
              }`}
              {...otherProps}
            />
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              type="button"
              onClick={(e) => setShowPassword(!showPassword)}
            >
              {!showPassword ? (
                <svg
                  className="w-6 h-6 text-stone-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-stone-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 14c-.5-.6-.9-1.3-1-2 0-1 4-6 9-6m7.6 3.8A5 5 0 0 1 21 12c0 1-3 6-9 6h-1m-6 1L19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </button>
          </div>
        ) : (
          <input
            type={type}
            id={id}
            className={`bg-stone-50 border border-stone-300 text-stone-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              readonly ? "bg-stone-300 dark:bg-stone-800 cursor-not-allowed" : ""
            }`}
            {...otherProps}
          />
        )}
      </div>
    </>
  );
}

export default FormInput;
