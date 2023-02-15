import Button from "@components/UI/Button";
import Modal from "@components/UI/Modal";
import { TagsInput } from "@components/UI/TagsInput";
import { useAuthStore } from "@store/index";
import { useState } from "react";


interface Props {
  open:boolean 
  closeModal:()=>void
  initialValue:string[]
}

export const AddAvailableForModal = ({open,closeModal,initialValue}:Props) => {
  const [availableFor,setAvailableFor] = useState<string[]>(initialValue)
  const [submitting,setSubmitting] = useState<boolean>(false);
  const updateUserDetail = useAuthStore(state=>state.updateUserDetail)
  
  const handleUpdate = async () => {
    setSubmitting(true);
    await updateUserDetail({availableFor})
    setSubmitting(false)
    closeModal()
  }

  return (
    <Modal
      title="Add avaiable for"
      isOpen={open}
      closeModal={closeModal}
      cls="max-w-md container"
    >
      <div className="mt-4">
        <label className="mb-2 block text-gray-500 font-medium">
        Stuff you are available for
        </label>
        <div>
        <TagsInput placeholder="Type something.." tags={availableFor} setTags={setAvailableFor}  autocomplete={false}/>
        </div>
        <div className="flex items-center justify-center mt-4 gap-4">
        <Button onClick={closeModal} disabled={submitting} cls="w-full h-14 w-full bg-gray-100 hover:bg-gray-200  rounded-md  font-semibold">
        Cancel
      </Button>

      <Button onClick={handleUpdate} isLoading={submitting} disabled={availableFor.length === 0 || submitting} cls="w-full h-14 w-full bg-primary text-white rounded-md  font-semibold">
        Save
      </Button>
        </div>
      </div>
    </Modal>
  );
};
