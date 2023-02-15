import Input from "@components/UI/Input";
import PrivateRoute from "@routes/PrivateRoute";
import { useAuthStore } from "@store/index";
import moment from "moment";
import { useEffect, useState } from "react";

type Props = {};

interface MessagesResponse {
  createdAt: string;
  messageDataId: string;
  updatedAt: string;
  user1: {
    email: string;
    _id: string;
  };
}

interface MessageItem {
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
    email: string;
  }>({} as { id: string; email: string });
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // get all messages
  useEffect(() => {
    getAllMessages().then((res) => {
      setChats(res?.messages);
    });
  }, []);

  //get the current Chat
  useEffect(() => {
    if (selectedChat) {
      setLoading(true);
      getMessagesByUser(selectedChat.id)
        .then((res) => {
          setMessages(res?.messages?.messages);
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
          {chats.map((item) => (
            <button
              key={item?.messageDataId}
              onClick={() =>
                setSelectedChat({
                  id: item?.messageDataId,
                  email: item?.user1?.email,
                })
              }
              className="p-4 border-b active:bg-gray-100 flex items-center gap-4 hover:bg-gray-50 duration-200 ease-out cursor-pointer"
            >
              {/* {<div className='h-10 w-10 bg-gray-300 animate-pulse'/>} */}
              <div className="font-medium text-gray-600 ">
                <div className="truncate">{item?.user1.email}</div>
                <div className="text-sm text-left text-gray-400">
                  {moment(item?.updatedAt).calendar()}
                </div>
              </div>
            </button>
          ))}
        </div>
        {/* Main */}
        <div className="md:col-span-2 p-4 ">
          {!selectedChat?.id != null ? (
            <>
              <p className="text-2xl font-bold mb-4">{selectedChat?.email}</p>
              {loading ? (
                <div className="space-y-4">
                  <div className="bg-gray-100 animate-pulse h-10 w-40 px-4 py-2 rounded-md text-white rounded-tl-none"></div>
                  <div className="bg-gray-100 animate-pulse h-10 w-80 px-4 py-2 rounded-md text-white rounded-tl-none"></div>
                  <div className="bg-gray-100 animate-pulse h-10 w-56 px-4 py-2 rounded-md text-white rounded-tl-none"></div>
                </div>
              ) : (
                <div className="space-y-4 w-full">
                  {messages?.map((item) => (
                    <div key={item?._id}>
                      <div className="bg-secondary max-w-fit px-4 py-2 rounded-md text-white rounded-tl-none">
                        {item?.message}
                      </div>
                      <span className="text-sm text-gray-400">
                        {moment(item?.timestamp).calendar()}
                      </span>
                    </div>
                  ))}
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
