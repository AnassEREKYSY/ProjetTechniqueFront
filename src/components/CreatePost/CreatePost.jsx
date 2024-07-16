import React, { useState, useRef, useEffect } from "react";
import HeadlessDialog from "../Dialog/Dialog";
import EmojiPicker from "emoji-picker-react";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import Btn from "../Button/Btn";

function CreatePost({ isOpen, close }) {
  const [postContent, setPostContent] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiClick = (emojiObject) => {
    setPostContent(postContent + emojiObject.emoji);
  };

  const emojiPickerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [emojiPickerRef]);

  return (
    <HeadlessDialog title="Create Post" isOpen={isOpen} close={close} width="">
      <div className="flex flex-col space-y-4">
        <textarea
          className="p-2 rounded-md w-full resize-none border-b border-gray-300 outline-none mt-2"
          placeholder="What's on your mind?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        ></textarea>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="p-2"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <FaceSmileIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        {showEmojiPicker && (
          <div className="relative w-full h-40 z-40" ref={emojiPickerRef}>
            <EmojiPicker
              onEmojiClick={handleEmojiClick}
              pickerStyle={{ position: "absolute", zIndex: 1000 }}
            />
          </div>
        )}
        <div className="flex items-center justify-between">
          <input type="file" id="file" name="file" className="hidden" />
          <label htmlFor="file" className="w-full focus:outline-none font-medium rounded-lg text-sm text-center border border-stone-300 bg-white text-stone-900 dark:border-stone-700 dark:bg-stone-800 dark:text-white hover:bg-stone-100 dark:hover:bg-stone-700 focus:z-10 text-stone-900 dark:text-white py-2 px-4 rounded-lg cursor-pointer">
            Upload
          </label>
        </div>

        <div className="flex items-center justify-between">
          <Btn onClick={close} variation={"primary"}>
            Publier
          </Btn>
        </div>
      </div>
    </HeadlessDialog>
  );
}

export default CreatePost;
