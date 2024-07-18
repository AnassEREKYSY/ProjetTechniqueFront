import React, { useEffect } from "react";
import Card from "../Card/Card";
import {
  ChatBubbleLeftIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { commentPostAction, likePostAction, unlikePostAction } from "@/redux/post/post.actions";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
};

function PostCardDetail({ post, setIsDetail }) {
  const handleClose = (e) => {
    if (e.target.classList.contains("absolute")) {
      setIsDetail(false);
    }
  };

  const [liked, setLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(post?.likes?.length ?? 0);
  const [comments, setComments] = React.useState(post?.comments ?? []);
  const [comment, setComment] = React.useState("");
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.user);
  useEffect(() => {
    if (post.likes && post.likes.find((like) => like?.user?.id == profile.id)) {
      setLiked(true);
    }
    setLikes(post?.likes?.length ?? 0);
  }, [post.likes]);

  useEffect(() => {
    setComments(post?.comments ?? []);
  }, [post.comments.length]);


  const handleLikePost = () => {
    if (!liked) {
      dispatch(likePostAction({ post_id: post.id }));
    } else {
      dispatch(
        unlikePostAction({
          like_id: post.likes.find((like) => like?.user?.id == profile.id).id,
        })
      );
    }
    setLiked(!liked);

    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleComment = () => {
    if(!comment) return;
    dispatch(commentPostAction({ contenu:comment,post_id: post.id }));
    setComments([...comments, {contenu:comment, user: profile}]);
    setComment("");
  };

  return (
    <motion.div
      className="flex justify-center items-center h-screen bg-stone-800/50 dark:bg-black/50 absolute z-40 inset-0"
      onClick={handleClose}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-2/3 max-h-5/6 bg-white dark:bg-stone-800 rounded-lg overflow-y-auto custom-scrollbar"
      >
        <Card>
          <div className="flex items-center space-x-2">
            <img
              src={
                post?.user?.image ??
                "https://t3.ftcdn.net/jpg/08/05/28/22/240_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg"
              }
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex items-center space-x-2">
              <Link href={`/user/${post?.user?.id}`}>
                <p className="text-stone-700 font-semibold dark:text-stone-200">
                  {post?.user?.firstName} {post?.user?.lastName}
                </p>{" "}
              </Link>
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
          <div className="mt-4">
            <p className="text-stone-700 dark:text-stone-200">{post.contenu}</p>
          </div>
          {post.image && (
            <div className="mt-4 rounded-lg overflow-hidden">
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
            <button className="text-stone-500 hover:text-primary-500 flex items-center space-x-1">
              <ChatBubbleLeftIcon className="w-6 h-6" />
              <span className="text-stone-500">
                {" "}
                {comments?.length ?? 0}
              </span>
            </button>
          </div>
          <div className="mt-4">
            <div className="flex items-center space-x-4">
              <img
                src={
                  post?.user?.image ??
                  "https://t3.ftcdn.net/jpg/08/05/28/22/240_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg"
                }
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
              <input
                type="text"
                placeholder="Add a comment..."
                className="bg-stone-50 border border-stone-300 text-stone-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 w-full"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button className="text-primary-600 hover:text-primary-500 focus:outline-none" onClick={handleComment}>
                <PaperAirplaneIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="">
              <p className="text-stone-700 font-semibold dark:text-stone-200 text-sm my-3">
                Comments
              </p>
              <div className="custom-scrollbar max-h-60 overflow-y-auto">
                {
                  comments.length === 0 && <p className="text-stone-500 dark:text-stone-300">Pas de commentaires</p>
                }
              {comments.map((comment) => (
                <div className="flex items-start space-x-4 mt-2">
                  <img
                    src={comment.user.image ?? "https://t3.ftcdn.net/jpg/08/05/28/22/240_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg"}
                    alt="profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex flex-col p-2 bg-stone-100 dark:bg-stone-700 rounded-lg">
                    <p
                      className="text-stone-700 font-semibold dark:text-stone-200
                  "
                    >
                      {comment?.user?.firstName} {comment?.user?.lastName}
                    </p>
                    <p className="text-stone-500 mt-2 text-sm dark:text-stone-300">
                      {comment.contenu}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default PostCardDetail;
