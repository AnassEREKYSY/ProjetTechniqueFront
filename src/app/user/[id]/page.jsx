'use client';
import WithAuth from '@/app/hoc/withAuth';
import Btn from '@/components/Button/Btn';
import Card from '@/components/Card/Card'
import Dialog from '@/components/Dialog/Dialog';
import FormInput from '@/components/FormInput/FormInput';
import PostCard from '@/components/PostCard/PostCard';
import PostCardDetail from '@/components/PostCard/PostCardDetail';
import { getPostsAction } from '@/redux/post/post.actions';
import { getOneUser } from '@/redux/user/user.actions';
import { ChatBubbleLeftIcon, PencilIcon } from '@heroicons/react/24/outline'
import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function User({params}) {
    const {user} = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect (() => {
        dispatch(getOneUser({user_id:params.id}))
    }
    , [])

    const [userPosts, setUserPosts] = useState([])

    const {posts} = useSelector(state => state.post)

    useEffect(() => {
        if(posts.length == 0){
            dispatch(getPostsAction())
        }
        setUserPosts(posts.filter(post => post.user.id == params.id))
    }
    , [posts])

    const [isDetail, setIsDetail] = React.useState(false);


  return (
    <div className='m-4 space-y-4'>
        <Card>
            <div className='flex items-center'>
                <div className='mr-4'>
                   <img src={user?.image ?? "https://t3.ftcdn.net/jpg/08/05/28/22/240_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg"

                   } alt="profile" className="w-20 h-20 rounded-full" />
                </div>
                <div className='mr-4'>
                    <h1 className='text-2xl font-semibold'>{user?.firstName} {user?.lastName}</h1>
                    <p className='text-stone-500'>@{user?.userName}</p>
                </div>
                {/* <div>
                    <p className='text-stone-700 '><b>100</b> Abonnés</p>
                    <p className='text-stone-700 '><b>100</b> Suivis</p>
                </div> */}
                <div className='ml-auto'>
                    <button className='text-white p-2 border rounded-lg hover:bg-primary-100 focus:outline-none' >
                        <ChatBubbleLeftIcon className='w-6 h-6 text-stone-500' />
                    </button>
                    
                </div>
            </div>
            
        </Card>

        <Card>
            <div>
                <h1 className='text-lg font-semibold'>Bio</h1>
                <p className='text-stone-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Donec sol  licitudin molestie malesuada.</p>
            </div>
        </Card>

        <Card>
            <div>
                <h1 className='text-lg font-semibold'>Posts</h1>
                <div className='space-y-4 my-4'>
                    {userPosts.map(post => (
                       <PostCard setIsDetail={setIsDetail} key={post.id} post={post} />
                    ))}
                </div>
                <AnimatePresence>
                    {isDetail && <PostCardDetail post={isDetail} setIsDetail={setIsDetail} />}
                </AnimatePresence>
            </div>
        </Card>
        
        
    </div>
  )
}

export default WithAuth(User,"USER"); 