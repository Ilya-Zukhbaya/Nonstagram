import React from 'react';
import {
  EllipsisHorizontalIcon as DotsIcon,
  PaperAirplaneIcon as MessageIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon as ChatIcon,
  BookmarkIcon as SaveIcon,
  FaceSmileIcon as EmojiIcon,
} from '@heroicons/react/24/outline';

function Post({ username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src={userImg}
          alt="user avatar"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsIcon className="h-5" />
      </div>

      <img src={img} className="object-cover w-full" alt="posted image" />

      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="postBtn" />
          <ChatIcon className="postBtn" />
          <MessageIcon className="postBtn" />
        </div>
        <SaveIcon className="postBtn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span> {caption}
      </p>

      <form className="flex items-center p-4">
        <EmojiIcon className="postBtn" />
        <input
          placeholder="add a comment..."
          type="text"
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default Post;
