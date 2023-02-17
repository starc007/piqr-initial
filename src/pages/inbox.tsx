/* eslint-disable @next/next/no-img-element */
import ChatBox from "@components/Inbox/ChatBox";
import Input from "@components/UI/Input";
import PrivateRoute from "@routes/PrivateRoute";
import { useAuthStore } from "@store/index";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {};

export interface ProfileData {
  _id: string;
  user: string;
  username: string;
  name: string;
  bio: string;
  avatar: string;
  availableFor: string[];
}
interface MessagesResponse {
  createdAt: string;
  messageDataId: string;
  updatedAt: string;
  user1: string;
  user2: string;
  profile1: ProfileData;
  profile2: ProfileData;
  _id: string;
}

export interface ChatMessageItem {
  message: string;
  sender: string;
  timestamp: string;
  _id: string;
}

const Inbox = (props: Props) => {
  const [chats, setChats] = useState<MessagesResponse[]>([]);
  const { getAllMessages, getMessagesByUser } = useAuthStore((state) => ({
    getAllMessages: state.getAllMessages,
    getMessagesByUser: state.getAllMessagesByUser,
  }));
  const [selectedChat, setSelectedChat] = useState<{
    id: string;
    profile: ProfileData;
  }>({} as { id: string; profile: ProfileData });
  const [messages, setMessages] = useState<ChatMessageItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const userId = useAuthStore((state) => state.userId);
  // get all messages
  useEffect(() => {
    getAllMessages().then((res) => {
      console.log("all_messages ", res?.messages);
      setChats(res?.messages);
    });
  }, []);

  //get the current Chat
  useEffect(() => {
    if (selectedChat?.id) {
      setLoading(true);
      getMessagesByUser(selectedChat.id)
        .then((res) => {
          setMessages(res?.messages);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [selectedChat]);

  return (
    <PrivateRoute>
      <div className="section__height divide-x border-x bg-white grid grid-cols-2 md:grid-cols-3">
        {/* Sidebar */}
        <div className="flex flex-col col-span-1 ">
          <div className="border-b p-4 font-bold text-xl">Inbox</div>
          {/* <div className="p-4 border-b relative text-gray-400 focus-within:text-gray-600">
          <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
            <HiMagnifyingGlass className="h-6 w-6" />
          </div>
          <Input
            placeholder="Search a user"
            cls="bg-gray-50 w-full h-10 pl-10 pr-4"
            />
        </div> */}
          {chats?.length === 0 && (
            <span className="text-center mt-4">No {"one's"} here</span>
          )}
          {chats?.map((item) => (
            <button
              key={item?.messageDataId}
              onClick={() =>
                setSelectedChat({
                  id: item?.messageDataId,
                  profile:
                    item?.profile1?.user === userId
                      ? item?.profile2
                      : item?.profile1,
                })
              }
              className="p-4 border-b active:bg-gray-100 flex items-center gap-4 hover:bg-gray-50 duration-200 ease-out cursor-pointer"
            >
              <img
                src={
                  item?.profile1?.user === userId
                    ? item?.profile2?.avatar
                    : item?.profile1?.avatar
                }
                alt={`avatar-${item?.profile1.username}`}
                className="rounded-full border h-10 w-10 bg-gray-200"
              />
              <div className="font-medium text-left text-gray-600 ">
                <div className="truncate">
                  {item?.profile1?.user === userId
                    ? item?.profile2?.name
                    : item?.profile1?.name}{" "}
                  <span className="text-gray-400">
                    (@
                    {item?.profile1?.user === userId
                      ? item?.profile2?.username
                      : item?.profile1?.username}
                    )
                  </span>
                </div>
                <div className="text-sm whitespace-pre text-gray-400">
                  {moment(item?.updatedAt).calendar()}
                </div>
              </div>
            </button>
          ))}
        </div>
        {/* Main */}
        <div className="md:col-span-2 p-4 ">
          {selectedChat?.id != null ? (
            <>
              <div className="text-2xl flex justify-between w-full font-bold bg-white z-20">
                {selectedChat?.profile?.name}
                <Link
                  href={"/" + selectedChat?.profile?.username}
                  className="text-gray-400 hover:text-secondary "
                >
                  @
                  <span className="underline underline-offset-4">
                    {`${selectedChat?.profile?.username}`}
                  </span>
                </Link>
              </div>
              {loading ? (
                <div className="space-y-4">
                  <div className="bg-gray-100 animate-pulse h-10 w-40 px-4 py-2 rounded-md text-white rounded-tl-none"></div>
                  <div className="bg-gray-100 animate-pulse h-10 w-80 px-4 py-2 rounded-md text-white rounded-tl-none"></div>
                  <div className="bg-gray-100 animate-pulse h-10 w-56 px-4 py-2 rounded-md text-white rounded-tl-none"></div>
                </div>
              ) : (
                <div className="absolute bottom-4 w-full">
                  <ChatBox
                    userId={selectedChat?.profile?.user}
                    mesgs={messages}
                    loggedInUser={userId}
                    // sent={sentMsgs}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 font-semibold text-xl">
              Please select a chat to see messages
            </div>
          )}
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Inbox;
