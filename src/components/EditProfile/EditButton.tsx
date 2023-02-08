import { BiEditAlt } from "react-icons/bi";

export const EditButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="hover:bg-gray-100 p-1 rounded-md text-gray-400 hover:text-gray-800"
    >
      <BiEditAlt className="h-6 w-6" />
    </button>
  );
};