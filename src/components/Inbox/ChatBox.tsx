import moment from "moment";
import { ChatMessageItem } from "src/pages/inbox";
import SendMessage from "./SendMessage";

type Props = {
  mesgs: ChatMessageItem[];
  // sent: ChatMessageItem[];
  userId: string;
  loggedInUser: string;
};

const ChatBox = ({ mesgs, userId, loggedInUser }: Props) => {
  console.log("mesgs ", mesgs, userId);
  return (
    <div className="-z-20 lg:w-[810px] md:w-[480px]">
      <div className="-z-20 overflow-y-auto h-[78vh] space-y-4 w-full pb-20 pt-4">
        {mesgs?.map((item) =>
          item.sender === loggedInUser ? (
            <div key={item?._id} className="flex flex-col items-end">
              <div className="bg-secondary max-w-fit px-4 py-2 rounded-md text-white rounded-tr-none">
                {item?.message}
              </div>
              <span className="text-sm text-gray-400">
                {moment(item?.timestamp).calendar()}
              </span>
            </div>
          ) : (
            <div key={item?._id}>
              <div className="bg-gray-100 max-w-fit px-4 py-2 rounded-md text-gray-700 rounded-tl-none">
                {item?.message}
              </div>
              <span className="text-sm text-gray-400">
                {moment(item?.timestamp).calendar()}
              </span>
            </div>
          )
        )}
      </div>
      <div className="mt-auto absolute bottom-0 lg:w-[810px] md:w-[480px] bg-white">
        <SendMessage receiverId={userId} />
      </div>
    </div>
  );
};

export default ChatBox;
