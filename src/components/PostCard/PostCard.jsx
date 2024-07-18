import React, { useEffect } from "react";
import Card from "../Card/Card";
import { ChatBubbleLeftIcon, HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { likePostAction, unlikePostAction } from "@/redux/post/post.actions";

function PostCard({ post, setIsDetail }) {
  const [liked, setLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(post?.likes?.length ?? 0);
  const dispatch = useDispatch();
  const {profile} = useSelector((state) => state.user);
  useEffect(() => {
    if (post.likes && post.likes.find((like) => like?.user?.id == profile.id)) {
      setLiked(true);
    }else{
      setLiked(false);
    }
    setLikes(post?.likes?.length ?? 0);
  }, [post.likes]);




  const handleLikePost = () => {

    if (!liked) {
      dispatch(likePostAction({ post_id: post.id }));
    }else{
      dispatch(unlikePostAction({ like_id: post.likes.find((like) => like?.user?.id == profile.id).id }));
    }
    setLiked(!liked);

    setLikes(liked ? likes - 1 : likes + 1);
    
  };

  const handleOpenDetail = (e) => {
    setIsDetail(post);
  };

  return (
    <motion.div>
      <div className="cursor-pointer">
        <Card>
          <div className="flex items-center space-x-2">
            <img
              src={post?.user?.image ?? "https://t3.ftcdn.net/jpg/08/05/28/22/240_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg"}
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex items-center space-x-2">
              <p className="text-stone-700 font-semibold dark:text-stone-200">
                {post?.user?.firstName} {post?.user?.lastName}
              </p>{" "}
              &nbsp;
              <p className="text-stone-500"> @{post?.user?.userName}</p>
            </div>
            <div className="ml-auto">
              {/* <p className="text-stone-500">- 1h ago</p> */}
              <p className="text-stone-500">
                {moment(post?.dateCreation).fromNow()}
              </p>
            </div>
          </div>
          <div className="mt-4" onClick={handleOpenDetail}>
            <p className="text-stone-700 dark:text-stone-200">{post.contenu}</p>
          </div>
          {post.image && (
            <div
              className="mt-4 rounded-lg overflow-hidden"
              onClick={handleOpenDetail}
            >
              <img
                src={post.image}
                alt={post.contenu}
                className="w-full h-72 object-cover"
              />
            </div>
          )}
          <div className="mt-4 flex items-center space-x-4">
            <motion.button
              className="text-stone-500 hover:text-primary-500 flex items-center space-x-1"
              whileTap={{ scale: 1.2 }} 
              onClick={handleLikePost}
            >
              {liked ? (
                <SolidHeartIcon className="w-6 h-6 text-red-500" />
              ) : (
                <HeartIcon className="w-6 h-6" />
              )}
              <span className="text-stone-500"> {likes ?? 0}</span>
            </motion.button>
            <button
              className="text-stone-500 hover:text-primary-500 flex items-center space-x-1"
              onClick={handleOpenDetail}
            >
              <ChatBubbleLeftIcon className="w-6 h-6" />
              <span className="text-stone-500"> {post?.comments?.length ?? 0}</span>
            </button>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}

export default PostCard;
