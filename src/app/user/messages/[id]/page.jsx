"use client";
import Card from "@/components/Card/Card";
import FormInput from "@/components/FormInput/FormInput";
import { ChatBubbleLeftIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import React from "react";

function Conversation({ params }) {
  const { id } = params;
  const [otherUser, setOtherUser] = React.useState({
    firstName: "John",
    lastName: "Doe",
    userName: "johndoe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    image:
      "https://t3.ftcdn.net/jpg/08/05/28/22/240_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg",
  });
  const [messages, setMessages] = React.useState([
    {
      sender: {
        firstName: "John",
        lastName: "Doe",
        image:
          "https://t3.ftcdn.net/jpg/08/05/28/22/240_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg",
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "1h ago",
    },
    {
      sender: {
        firstName: "John",
        lastName: "Doe",
        image:
          "https://t3.ftcdn.net/jpg/08/05/28/22/240_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg",
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "1h ago",
    },
    {
      sender: {
        firstName: "John",
        lastName: "Doe",
        image:
          "https://t3.ftcdn.net/jpg/08/05/28/22/240_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg",
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "1h ago",
    },
    {
      sender: {
        firstName: "John",
        lastName: "Doe",
        image:
          "https://t3.ftcdn.net/jpg/08/05/28/22/240_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg",
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "1h ago",
    },
    {
      sender: {
        firstName: "John",
        lastName: "Doe",
        image:
          "https://t3.ftcdn.net/jpg/08/05/28/22/240_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg",
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "1h ago",
    },
    {
      sender: {
        firstName: "John",
        lastName: "Doe",
        image:
          "https://t3.ftcdn.net/jpg/08/05/28/22/240_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg",
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "1h ago",
    },
  ]);

  return (
    <div className="m-4 space-y-4">
      <Card>
        <div className="h-96 flex-1">
          <h1 className="text-lg font-semibold">Messages</h1>
          <div className="space-y-6 my-3 overflow-y-auto h-80 custom-scrollbar">
            {messages.map((message) => (
              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    src={message?.sender?.image}
                    alt="profile"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div className="mr-4">
                  <h1 className="text-md font-semibold">
                    {message?.sender?.firstName} {message?.sender?.lastName}
                  </h1>
                  <p className="text-stone-500">{message?.content}</p>
                </div>
                <div className="ml-auto">
                  <p className="text-stone-500">{message?.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center mt-4">
          <FormInput placeholder="Type a message" />
          <button className="ml-2 text-white p-2 border rounded-lg hover:bg-primary-100 focus:outline-none">
            <PaperAirplaneIcon className="w-6 h-6 text-stone-500" />
          </button>
        </div>
      </Card>
      
    </div>
  );
}

export default Conversation;
