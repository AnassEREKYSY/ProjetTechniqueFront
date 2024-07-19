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
           
          </div>
        </aside>
      )}
    </>
  );
}

export default SideBar;
