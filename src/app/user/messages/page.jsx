'use client';
import Card from '@/components/Card/Card'
import { getMessages } from '@/redux/message/message.action';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import moment from 'moment';
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';



function Messages() {

  const {messages} = useSelector((state) => state.message)
  const [conversations, setConversations] = React.useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMessages())
  }, [])

  const {profile} = useSelector((state) => state.user)


  useEffect(() => {
    const userConversations = {};
    
    messages.forEach((message) => {
      const otherUser = message?.sender?.id !== profile.id ? message.sender : message.receiver;
      const userId = otherUser?.id;

      if (!userConversations[userId] || new Date(message.timestamp) > new Date(userConversations[userId].timestamp)) {
        userConversations[userId] = {
          ...otherUser,
          lastMessage: message.content,
          timestamp: message.timestamp,
        };
      }
    });

    const sortedConversations = Object.values(userConversations).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setConversations(sortedConversations);
  }, [messages, profile.id]);

  return (
    <div className='p-4 space-y-4'>
      {
        conversations.map((conversation) => (
          <Card>
          <div className='flex items-center'>
            <div className='mr-4'>
              <img src="https://t3.ftcdn.net/jpg/08/05/28/22/240_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg" alt="profile" className="w-10 h-10 rounded-full" />
            </div>
            <div className='mr-4'>
              <div className='flex items-center space-x-2'>
              <p className='text-lg font-semibold'>{conversation.firstName} {conversation.lastName}</p>
              <p className='text-stone-500'>@{conversation.userName}</p> 
              <p className='text-stone-500'>{moment(conversation.timestamp).fromNow()}</p>
              </div>
              <p className='text-stone-500 dark:text-stone-400'>
                {conversation.lastMessage}
              </p>
            </div>
            <div className='ml-auto'>
              <Link href={`/user/messages/${conversation.id}`}>
                <button className='text-white p-2 border rounded-lg hover:bg-primary-100 focus:outline-none dark:border-stone-600 dark:hover:bg-stone-600'>
                  <ChatBubbleLeftIcon className='w-6 h-6 text-stone-500' />
                </button>
              </Link>
            </div>
          </div>
        </Card>
        ))
      }
     
    </div>
  )
}

export default Messages