import Button from "@components/UI/Button"
import { TextArea } from "@components/UI/Input"
import Modal from "@components/UI/Modal"
import { useAuthStore } from "@store/index";
import { useState } from "react";


interface Props {
  open:boolean 
  closeModal:()=>void
  initialValue:string
}

export const AddBioModal = ({open,closeModal,initialValue}:Props) => {
  const [bio,setBio] = useState<string>(initialValue ?? "");
  const [submitting,setSubmitting] = useState<boolean>(false);
  const updateUserDetail = useAuthStore(state=>state.updateUserDetail) 

  const handleUpdateBio = async () => {
    setSubmitting(true);
    await updateUserDetail({bio})
    setSubmitting(false)
    closeModal()
  }
  
  return <Modal title="Add introduction" isOpen={open} closeModal={closeModal} cls="max-w-md container" >
    <div className="mt-4">
      <label className="mb-2 block text-gray-500 font-medium">
        Tell us something about yourself
      </label>
      <div>
        <TextArea cls="w-full p-4" value={bio} onChange={e=>setBio(e.target.value)}/>
      </div>
      <div className="flex items-center justify-center mt-4 gap-4"> 

      <Button onClick={closeModal} disabled={submitting} cls="w-full h-14 w-full bg-gray-100 hover:bg-gray-200  rounded-md  font-semibold">
        Cancel
      </Button>

      <Button onClick={handleUpdateBio} isLoading={submitting} disabled={bio === '' || submitting} cls="w-full h-14 w-full bg-primary text-white rounded-md  font-semibold">
        Save
      </Button>

      </div>
    </div>
  </Modal>
}