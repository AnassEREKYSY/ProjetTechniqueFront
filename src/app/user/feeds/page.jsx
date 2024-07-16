"use client";
import PostCard from "@/components/PostCard/PostCard";
import PostCardDetail from "@/components/PostCard/PostCardDetail";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

function Feeds() {
  const [isDetail, setIsDetail] = React.useState(false);
  return (
    <>
      <AnimatePresence>
        {isDetail && <PostCardDetail setIsDetail={setIsDetail} />}
      </AnimatePresence>
      <div className="flex flex-col space-y-4 p-4 w-2/3">
          <PostCard setIsDetail={setIsDetail} />
          <PostCard setIsDetail={setIsDetail} />
          <PostCard setIsDetail={setIsDetail} />
          <PostCard setIsDetail={setIsDetail} />
      </div>
    </>
  );
}

export default Feeds;
