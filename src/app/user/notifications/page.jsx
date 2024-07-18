'use client';
import Card from "@/components/Card/Card";
import { getNotificationsAction } from "@/redux/notification/notification.action";
import { ChatBubbleLeftIcon, HeartIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Notifications() {
  const {profile} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {notifications} = useSelector((state) => state.notification);

  useEffect(() => {
    dispatch(getNotificationsAction({user_id:profile.id}));
  }, []);

  console.log(notifications)

  return (
    <div className="p-4 space-y-4">
      <h1 className="font-bold text-2xl">Notifications</h1>

      <div className="mt-4 space-y-4">
        {
          notifications.length === 0 && (
            <div className="text-center">No notifications available</div>
          )
        }

        {
          notifications.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).map(notification => (
            <Card key={notification.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
               
                  <div className="flex items-center space-x-2">
                    {
                      notification.type == "LIKE" && (
                        <HeartIcon className="w-4 h-4 text-stone-500" />
                      )
                    }
                    {
                      notification.type == "COMMENT" && (
                        <ChatBubbleLeftIcon className="w-4 h-4 text-stone-500" />
                      )
                    }
                    <span className="text-stone-500 text-sm ml-2">
                      {notification?.message}</span>
                  </div>
                </div>
                <p className="text-stone-500">{moment(notification?.timestamp).fromNow()}</p>
              </div>
             
            </Card>
          ))
        }
      </div>
    </div>
  );
}

export default Notifications;
