import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { Command } from "cmdk";


/*
autocomplete= will show suggestions , select tags from suggestions
autocompleteO = wont' show suggestion , behave as normal tags input , add new tags by pressing Enter
*/
interface TagsInputProps {
  suggestions?:string[]
  tags:string[] 
  setTags:Dispatch<SetStateAction<string[]>>
  placeholder?:string
  autocomplete?:boolean
}

interface TagProps {
  text: string;
  removeTagFn?: () => void;
}


export const Tag = ({ text, removeTagFn,}: TagProps) => {
  return (
    <div className="flex items-center w-fit gap-2 bg-secondary/10 text-sm py-1 pl-2 pr-1 text-secondary font-medium rounded-full">
      {text}
      <button
        type="button"
        onClick={removeTagFn}
        className="bg-secondary/20 rounded-full p-1"
      >
        <FiX />
      </button>
    </div>
  );
};

export const TagsInput = ({ suggestions,placeholder,tags,setTags,autocomplete,...props }: TagsInputProps) => {
  const [filteredItems,setFilteredItems] = useState<string[]>(suggestions ?? []); 
  const [value, setValue] = useState<string>("");
  const [open,setOpen] = useState<boolean>(false)

  const addItem = (val:string) => {
    setValue("")
    setTags(tags=>([...tags,val]))
    if(autocomplete){
      setFilteredItems(filteredItems => filteredItems.filter(it => it !== val))
    }
    setOpen(false)
  }

  const removeTag = (val:string) =>{
    setTags(tags.filter(item => item !== val))
    if(autocomplete){
      setFilteredItems(state =>[...state,val])
    }
  }

  useEffect(()=>{
    if(value) setOpen(true)
  },[value])

  return (
    <div>
      <div className="flex gap-1 flex-wrap mb-2">
        {tags?.map((item) => (
          <Tag key={`tag-${item}`} text={item} removeTagFn={()=>removeTag(item)} />
        ))}
      </div>
      <Command
        shouldFilter={true}
         label="Command Menu" className="group relative">
        <Command.Input
          onKeyDown={(e) =>{
          if(!autocomplete && value && e.key === 'Enter'){
            addItem(value)
          }
        }}
        onFocus={()=>{
          setOpen(true)
        }}
          onBlur={()=>setOpen(false)}
          value={value}
          placeholder={placeholder}
          onValueChange={(search) => setValue(search)}
          className="p-2 rounded-md w-full border hover:border-primary group-focus:border-primary text-black focus-within:outline-none"
        />
       {value && <Command.List  className=" absolute max-h-40 z-50 overflow-y-scroll translate-y-2 divide-y text-sm bg-white w-full rounded-md overflow-hidden py-2 shadow-xl border border-gray-300 flex flex-col">
        <Command.Empty className="text-gray-400 pl-3 ">
            {!autocomplete ? "Press 'Enter' to add" : "Nothing here !"}
          </Command.Empty>
          {autocomplete && filteredItems?.map((item, id) => (
            <Command.Item
              onClick={()=>addItem(item)}
              onSelect={()=>addItem(item)}
              className="py-2 w-full px-4 text-gray-600 font-normal"
              key={`item-${id}`}
            >
              {item}
            </Command.Item>
          ))}
        </Command.List>}
      </Command>
    </div>
  );
};
