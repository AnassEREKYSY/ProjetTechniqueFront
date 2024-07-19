'use client';
import Card from '@/components/Card/Card';
import FormInput from '@/components/FormInput/FormInput';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages, createMessage } from '@/redux/message/message.action';
import moment from 'moment';

function Conversation({ params }) {
  const { id } = params;
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.message);
  const { profile } = useSelector((state) => state.user);
  const [messageContent, setMessageContent] = useState('');
  const [filteredMessages, setFilteredMessages] = useState([]);


  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  const messagesEndRef = useRef(null);


  useEffect(() => {
    setFilteredMessages(messages.filter(
        (message) =>
          (message?.sender?.id === profile.id && message?.receiver?.id === parseInt(id)) ||
          (message?.receiver?.id === profile.id && message?.sender?.id === parseInt(id))
      ));
    }, []);

  const handleSendMessage = () => {
    if (messageContent.trim()) {
      const newMessage = {
        receiver: { id: parseInt(id) },
        content: messageContent,
      };
      dispatch(createMessage(newMessage));

      //update filtered messages
      setFilteredMessages([...filteredMessages, { ...newMessage, sender: profile, receiver: { id: parseInt(id) }, timestamp: new Date() }]);

      setMessageContent('');
    }
  };

  useEffect(() => {
    // messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [filteredMessages]);

  return (
    <div className="m-4 space-y-4">
      <Card>
        <div className="h-96 flex-1">
          <h1 className="text-lg font-semibold">Messages</h1>
          <div className="space-y-6 my-3 overflow-y-auto h-80 custom-scrollbar">
            {filteredMessages.map((message) => (
              <div key={message.id} className={`flex items-center ${message.sender.id === profile.id ? 'justify-end' : ''}`}>
                {message.sender.id !== profile.id && (
                  <div className="mr-4">
                    <img
                      src={message.sender.image || "https://t3.ftcdn.net/jpg/08/05/28/22/240_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg"}
                      alt="profile"
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                )}
                <div className={`mr-4 p-2 ${message.sender.id === profile.id ? 'bg-primary-700 text-white' : 'bg-gray-200'} rounded-lg`}>
                  <h1 className="text-md font-semibold">
                  {message.sender.id === profile.id ? 
                  <span className="text-white">Toi</span> :
                  <span className="text-stone-700 dark:text-stone-700
                  ">{message.sender.firstName} {message.sender.lastName}</span>
                  }
                  </h1>
                  {
                    message.sender.id !== profile.id ?
                  <p className="text-sm text-stone-700">{message.content}</p>
                    : 
                    <p className="text-sm">{message.content}</p>
                  }
                  <p className="text-stone-500 text-sm">{moment(message.timestamp).fromNow()}</p>
                </div>
                {message.sender.id === profile.id && (
                  <div className="ml-4">
                    <img
                      src={profile.image || "https://t3.ftcdn.net/jpg/08/05/28/22/240_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg"}
                      alt="profile"
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                )}
              </div>
            ))}
             <div ref={messagesEndRef} />
          </div>
        </div>
        <div className="flex items-center mt-4">
          <FormInput
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
            placeholder="Type a message"
          />
          <button
            className="ml-2 text-white p-2 border rounded-lg hover:bg-primary-100 focus:outline-none border-stone-700"
            onClick={handleSendMessage}
          >
            <PaperAirplaneIcon className="w-6 h-6 text-stone-500" />
          </button>
        </div>
      </Card>
    </div>
  );
}

export default Conversation;
