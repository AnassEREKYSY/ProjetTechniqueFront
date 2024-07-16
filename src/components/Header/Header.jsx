import React from "react";
import FormInput from "../FormInput/FormInput";
import Btn from "../Button/Btn";
import { BellIcon, PlusIcon } from "@heroicons/react/24/outline";
import CreatePost from "../CreatePost/CreatePost";

function Header() {
  const [isOpened, setIsOpened] = React.useState(false);

  const close = () => {
    setIsOpened(false);
  }

  return (
    <div className="bg-white dark:bg-stone-800 w-full flex items-center border-b border-stone-200 dark:border-stone-700">
      <div className="flex items-center p-4">
        <h1 className="text-2xl font-semibold">Canard</h1>
      </div>
      <div className="flex items-center w-1/3">
        <input type="text" placeholder="Search" className="bg-stone-50 border border-stone-300 text-stone-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 w-full" />
      </div>
      <div className="flex items-center justify-between p-4 ml-auto">
        <div className="mr-4 w-36 flex items-center">
          <Btn variation={"secondary"} Icon={PlusIcon} onClick={() => setIsOpened(true)}>
            Quack
          </Btn>
          <CreatePost isOpen={isOpened} close={close} />
        </div>
        <div className="flex">
          <div className="mr-4 w-8">
            <button className="p-3 text-primary-600  dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-stone-700 focus:z-10 focus:ring-2 focus:ring-primary-500 focus:text-primary-600 dark:focus:ring-primary-500 dark:focus:text-white rounded-lg">
              <BellIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="ml-4">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
