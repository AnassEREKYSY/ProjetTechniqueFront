import React from 'react';
import Card from '../Card/Card';
import { ChatBubbleLeftIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

function PostCard({ setIsDetail }) {
  const [liked, setLiked] = React.useState(false);

  const handleOpenDetail = (e) => {
    setIsDetail(true);
}
    


  return (
    <motion.div
    >
      <div className='cursor-pointer'>
        <Card>
          <div className="flex items-center space-x-2">
            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="profile" className="w-10 h-10 rounded-full" />
            <div className="flex items-center space-x-2">
              <p className="text-stone-700 font-semibold dark:text-stone-200">John Doe</p> &nbsp;
              <p className="text-stone-500"> @johndoe</p>
            </div>
            <div className="ml-auto">
              <p className="text-stone-500">- 1h</p>
            </div>
          </div>
          <div className="mt-4" onClick={handleOpenDetail} >
            <p className="text-stone-700 dark:text-stone-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Donec sol</p>
          </div>
          <div className="mt-4 rounded-lg overflow-hidden" onClick={handleOpenDetail} >
            <img src="https://images.pexels.com/photos/6000789/pexels-photo-6000789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="post" className="w-full h-72 object-cover" />
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <motion.button
              className="text-stone-500 hover:text-primary-500 flex items-center space-x-1"
              whileTap={{ scale: 1.2 }} // Scale animation effect on tap
              onClick={() => setLiked(!liked)}
            >
              {liked ? (
                <SolidHeartIcon className="w-6 h-6 text-red-500" />
              ) : (
                <HeartIcon className="w-6 h-6" />
              )}
              <span className="text-stone-500"> 100</span>
            </motion.button>
            <button className="text-stone-500 hover:text-primary-500 flex items-center space-x-1" onClick={handleOpenDetail} >
              <ChatBubbleLeftIcon className="w-6 h-6" />
              <span className="text-stone-500"> 32</span>
            </button>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}

export default PostCard;
