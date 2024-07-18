"use client";
import PostCard from "@/components/PostCard/PostCard";
import PostCardDetail from "@/components/PostCard/PostCardDetail";
import { getPostsAction } from "@/redux/post/post.actions";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Feeds() {
  const [isDetail, setIsDetail] = React.useState(false);
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  return (
    <>
      <AnimatePresence>
        {isDetail && <PostCardDetail post={isDetail} setIsDetail={setIsDetail} />}
      </AnimatePresence>
      <div className="flex flex-col space-y-4 p-4 w-2/3">
        {posts?.length === 0 && (
          <div className="text-center">Aucun post disponible </div>
        )}
        {posts?.sort((a, b) => new Date(b.dateCreation) - new Date(a.dateCreation)).map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PostCard post={post} setIsDetail={setIsDetail} />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Feeds;
