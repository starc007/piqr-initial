import Button from "@components/UI/Button";
import { TextArea } from "@components/UI/Input";
import Modal from "@components/UI/Modal";
import { useAuthStore } from "@store/index";
import { useState } from "react";

interface Props {
  open: boolean;
  closeModal: () => void;
  userId:string
  name:string
}

export const SendMessageModal = ({ open, closeModal,userId,name }: Props) => {
  const [msg, setMsg] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const sendMessage = useAuthStore((state) => state.sendMessage);

  const handleUpdateBio = async () => {
    setSubmitting(true);
    await sendMessage({uid:userId,message:msg});
    setSubmitting(false);
    setMsg("")
    closeModal();
  };

  return (
    <Modal
      title={`Collaborate with ${name}`}
      isOpen={open}
      closeModal={closeModal}
      cls="max-w-md container"
    >
      <div className="mt-4">
        <label className="mb-2 block text-gray-500 font-medium">
          Send a message
        </label>
        <div>
          <TextArea
            cls="w-full p-4"
            placeholder="Say something nice..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center mt-4 gap-4">
          <Button
            onClick={closeModal}
            disabled={submitting}
            cls="w-full h-14 w-full bg-gray-100 hover:bg-gray-200  rounded-md  font-semibold"
          >
            Cancel
          </Button>
          <Button
            onClick={handleUpdateBio}
            isLoading={submitting}
            disabled={submitting}
            cls="w-full h-14 w-full bg-primary text-white rounded-md  font-semibold"
          >
            Send Message
          </Button>
        </div>
      </div>
    </Modal>
  );
};
