import { API } from "@api/index";
import { Command } from "cmdk";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import debounce from "lodash.debounce";
import { UserResponse } from "@store/action/actions.types";
import { type } from "os";

type Props = {
  collaborators: UserListResponse[]; // array of user ids
  setCollaborators: Dispatch<SetStateAction<UserListResponse[]>>;
};

export type UserListResponse = {
  availableFor: string[];
  avatar: string;
  bio: string;
  name: string;
  skills: string[];
  user: string;
  username: string;
  _id: string;
};
const CollaboratorsInput = ({ collaborators, setCollaborators }: Props) => {
  const [value, setValue] = useState<string>();
  const [items, setItems] = useState<UserListResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const filteredItems = useMemo(() => {
    return items.filter((it) => !collaborators.some((c) => c._id === it._id));
  }, [collaborators, items]);

  const getItems = async (username: string) => {
    if (!username) {
      setItems([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    // console.log("API CALL--",username)
    const res = await API.get("/user/users/" + username);
    console.log(res?.data);
    if (res?.data?.success) setItems(res?.data?.users);
    setLoading(false);
  };

  // React.useEffect(() => {
  // getItems()
  // },[value])

  const handleSelect = (item: UserListResponse) => {
    setCollaborators((state) => [...state, item]);
    setItems([]);
  };

  const handleValueChange = debounce(async (search: string) => {
    await getItems(search);
  }, 1000);

  return (
    <Command label="Collaborators" className="group  relative">
      <Command.Input
        placeholder="Search username ..."
        onValueChange={handleValueChange}
        className="p-2 rounded-md w-full border hover:border-primary group-focus:border-primary text-black focus-within:outline-none"
      />
      {(filteredItems.length > 0 || loading || value) && (
        <Command.List className=" absolute translate-y-2 divide-y bg-white w-full rounded-md py-2 shadow-xl border border-gray-300 flex flex-col">
          {loading && (
            <Command.Loading>
              {" "}
              <span className="text-gray-400 pl-2 animate-pulse">Loading...</span>
            </Command.Loading>
          )}
          <Command.Empty className="text-gray-400 pl-2 ">
            No users found.
          </Command.Empty>
          {filteredItems?.map((item, id) => (
            <Command.Item
              onClick={() => handleSelect(item)}
              onSelect={() => handleSelect(item)}
              className="py-2 w-full px-4 text-gray-600 font-normal"
              key={item?._id}
            >
              {item?.username}
            </Command.Item>
          ))}
        </Command.List>
      )}
    </Command>
  );
};

export default CollaboratorsInput;
