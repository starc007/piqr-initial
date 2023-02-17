import { MessageItem } from "@store/action/actions.types";
import moment from "moment";
import { ChatMessageItem } from "src/pages/inbox";
import SendMessage from "./SendMessage";

type Props = {
  received: ChatMessageItem[];
  sent:ChatMessageItem[]
  userId:string 
};

const ChatBox = ({ received,sent,userId }: Props) => {
  console.log({received,sent})
  return (
    <div className="space-y-4  w-full">
      {received?.map((item) => (
        <div key={item?._id}>
          <div className="bg-secondary max-w-fit px-4 py-2 rounded-md text-white rounded-tl-none">
            {item?.message}
          </div>
          <span className="text-sm text-gray-400">
            {moment(item?.timestamp).calendar()}
          </span>
        </div>
      ))}
      {sent?.map((item) => (
        <div key={item?._id}>
          <div className="bg-gray-100 max-w-fit px-4 py-2 rounded-md text-white rounded-tl-none">
            {item?.message}
          </div>
          <span className="text-sm text-gray-400">
            {moment(item?.timestamp).calendar()}
          </span>
        </div>
      ))}
      <div className="mt-auto">
      <SendMessage receiverId={userId} />
      </div>
    </div>
  );
};

export default ChatBox;
