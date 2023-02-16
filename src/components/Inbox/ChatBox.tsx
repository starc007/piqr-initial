import { MessageItem } from "@store/action/actions.types";
import moment from "moment";
import { ChatMessageItem } from "src/pages/inbox";

type Props = {
  data: ChatMessageItem[];
};

const ChatBox = ({ data }: Props) => {
  return (
    <div className="space-y-4 w-full">
      {data?.map((item) => (
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
  );
};

export default ChatBox;
