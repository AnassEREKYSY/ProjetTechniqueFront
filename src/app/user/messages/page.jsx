import Card from '@/components/Card/Card'
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

function Messages() {
  return (
    <div className='p-4 space-y-4'>
      <Card>
        <div className='flex items-center'>
          <div className='mr-4'>
            <img src="https://t3.ftcdn.net/jpg/08/05/28/22/240_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg" alt="profile" className="w-10 h-10 rounded-full" />
          </div>
          <div className='mr-4'>
            <div className='flex items-center space-x-2'>
            <p className='text-lg font-semibold'>John Doe</p>
            <p className='text-stone-500'>@johndoe</p>
            <p className='text-stone-500'>- 1h ago</p>
            </div>
            <p className='text-stone-500 dark:text-stone-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='ml-auto'>
            <button className='text-white p-2 border rounded-lg hover:bg-primary-100 focus:outline-none dark:border-stone-600 dark:hover:bg-stone-600'>
              <ChatBubbleLeftIcon className='w-6 h-6 text-stone-500' />
            </button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Messages