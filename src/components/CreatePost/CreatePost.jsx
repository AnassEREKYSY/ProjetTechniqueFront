import React, { useState, useRef, useEffect } from "react";
import HeadlessDialog from "../Dialog/Dialog";
import EmojiPicker from "emoji-picker-react";
import { CameraIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import Btn from "../Button/Btn";
import { useDispatch, useSelector } from "react-redux";
import { POST_TYPES } from "@/redux/post/post.types";
import { createPostAction } from "@/redux/post/post.actions";

function CreatePost({ isOpen, close }) {
  const [postContent, setPostContent] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const {loading,success } = useSelector(state => state.post);

  const handleEmojiClick = (emojiObject) => {
    setPostContent(postContent + emojiObject.emoji);
  };

  useEffect(() => {
    if(success){
      setPostContent('');
      setTimeout(() => {
        close();
        dispatch({type:"RESET_SUCCESS_ERRORS"});
      }, 3000);
    }

  }, [success]);

  useEffect(() => {
    dispatch({type:"RESET_SUCCESS_ERRORS"});
  }, []);


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

  const dispatch = useDispatch();
  const handlePublier = () => {
    dispatch(createPostAction({contenu:postContent}));
  }

  return (
    <HeadlessDialog title="Create Post" isOpen={isOpen} close={close} width="">
     
      {
        success && <div className="w-full text-green-800 bg-green-50 my-3 p-2 rounded-md">Post publié avec succès </div>
      }
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
            className="focus:outline-none font-medium rounded-lg text-sm text-center border border-stone-300 bg-white text-stone-900 dark:border-stone-700 dark:bg-stone-800 dark:text-white hover:bg-stone-100 dark:hover:bg-stone-700 focus:z-10 text-stone-900 dark:text-white py-2 px-4 rounded-lg cursor-pointer"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <FaceSmileIcon className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center justify-between">
            <input type="file" id="file" name="file" className="hidden" />
            <label
              htmlFor="file"
              className="w-full focus:outline-none font-medium rounded-lg text-sm text-center border border-stone-300 bg-white text-stone-900 dark:border-stone-700 dark:bg-stone-800 dark:text-white hover:bg-stone-100 dark:hover:bg-stone-700 focus:z-10 text-stone-900 dark:text-white py-2 px-4 rounded-lg cursor-pointer"
            >
              <CameraIcon className="w-6 h-6 inline-block" />
            </label>
          </div>
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
          <Btn onClick={handlePublier} variation={"primary"} loading={loading}>
            Publier
          </Btn>
        </div>
      </div>
    </HeadlessDialog>
  );
}

export default CreatePost;
