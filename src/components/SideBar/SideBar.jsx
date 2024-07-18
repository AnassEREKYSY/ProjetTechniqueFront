"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import SideBarItem from "../SideBarItem/SideBarItem";
import OverviewIcon from "@/assets/icons/overview";
import BuildingIcon from "@/assets/icons/building";
import ComputerIcon from "@/assets/icons/computer";
import { useDispatch, useSelector } from "react-redux";
import {ChatBubbleLeftRightIcon, BellIcon, HomeIcon, UsersIcon, BookmarkIcon, HashtagIcon, ArrowLeftEndOnRectangleIcon} from '@heroicons/react/24/outline'
import { USER_TYPES } from "@/redux/user/user.types";
function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();
  const dispatch = useDispatch();
  const {profile} = useSelector((state) => state.user);

  useEffect(() => {
    if (localStorage.theme == "dark") {
      setIsDarkMode(true);
      localStorage.setItem("flowbite-theme-mode", "dark");
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
      localStorage.setItem("flowbite-theme-mode", "light");
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }

  }, []);

  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleToggleDarkMode = () => {
    if (isDarkMode) {
      localStorage.theme = "light";
      localStorage.setItem("flowbite-theme-mode", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      localStorage.setItem("flowbite-theme-mode", "dark");
    }
    setIsDarkMode(!isDarkMode);
    dispatch({ type: "TOGGLE_DARK_MODE", payload: isDarkMode });

  };

  const handleLogout = () => {
    dispatch({type:USER_TYPES.LOGOUT});
  }

  return (
    <>
      {isSidebarOpen && (
        <aside
          id="default-sidebar"
          className=" top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidenav"
        >
          <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-stone-200 dark:bg-stone-800 dark:border-stone-700 flex flex-col justify-between">
            <div>
             
              <ul className="space-y-2">
                <SideBarItem
                  key="feeds"
                  title="Feeds"
                  href="/user/feeds"
                  Icon={HomeIcon}
                  active={pathname.includes("/user/feeds")}
                />
                <SideBarItem
                  key="messages"
                  title="Messages"
                  href="/user/messages"
                  Icon={ChatBubbleLeftRightIcon}
                  active={pathname.includes("/user/activities")}
                />
                <SideBarItem
                  key="bookmarks"
                  title="Bookmarks"
                  href="/user/bookmarks"
                  Icon={BookmarkIcon}
                  active={pathname.includes("/user/bookmarks")}
                />
                <SideBarItem
                  key="notifications"
                  title="Notifications"
                  href="/user/notifications"
                  Icon={HashtagIcon}
                  active={pathname.includes("/user/notifications")}
                />

                <SideBarItem
                  key="profile"
                  title="Profile"
                  href="/user/profile"
                  Icon={UsersIcon}
                  active={pathname.includes("/user/profile")}
                />
                <SideBarItem
                  key="logout"
                  title="Déconnexion"
                  onClick={handleLogout}
                  Icon={ArrowLeftEndOnRectangleIcon}
                  active={pathname.includes("/user/logout")}
                />
               
              </ul>
            </div>
            <div className="flex justify-around mt-4 items-end flex-1  ">
              <button
                onClick={() => router.push('/gestionnaire/profile')}
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 dark:hover:bg-stone-600"
              >
                <svg
                  className="w-6 h-6 text-stone-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                onClick={handleToggleDarkMode}
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 dark:hover:bg-stone-600"
              >
                {!isDarkMode ? (
                  <>
                    <svg
                      className="w-6 h-6 text-stone-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.7 2a10 10 0 1 0 9.8 13.3 1 1 0 0 0-1-1.3H20a8 8 0 0 1-7.6-10.6l.1-.4a1 1 0 0 0-.8-1Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Switch to light mode</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-6 h-6 text-stone-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.3 5A1 1 0 0 0 5 6.2l1.4 1.5a1 1 0 0 0 1.5-1.5L6.3 5Zm12.8 1.3A1 1 0 0 0 17.7 5l-1.5 1.4a1 1 0 0 0 1.5 1.5L19 6.3ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.8 17.7a1 1 0 1 0-1.5-1.5L5 17.7A1 1 0 1 0 6.3 19l1.5-1.4Zm9.9-1.5a1 1 0 0 0-1.5 1.5l1.5 1.4a1 1 0 0 0 1.4-1.4l-1.4-1.5ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Switch to dark mode</span>
                  </>
                )}
              </button>
              <button data-tooltip-target="deconnexion-tooltip" type="button"  className="flex items-center justify-center w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 dark:hover:bg-stone-600" onClick={() => dispatch({ type: "LOGOUT" })}>
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
                    d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}

export default SideBar;
