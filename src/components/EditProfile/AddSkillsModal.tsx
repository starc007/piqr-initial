import Button from "@components/UI/Button";
import Modal from "@components/UI/Modal";
import { TagsInput } from "@components/UI/TagsInput";
import { useAuthStore } from "@store/index";
import { useState } from "react";



interface Props {
  open: boolean;
  closeModal: () => void;
  initialValue: string[];
}

const SUGGESTIONS = [
  "Frontend Development",
  "Backend Development",
  "Fullstack Development",
  "Community Management",
  "Typscript",
  "Dev Rel",
  "Web3 Development",
  "Blockchain Development",
].map((item) => ({ id: item, text: item }));


export const AddSkillsModal = ({ open, closeModal, initialValue }: Props) => {
  const [skills,setSkills] = useState<string[]>(initialValue ?? [])
  const suggestions = ["Frontend","Backend","DevRel","Fullstack","Web3"]
  const [submitting, setSubmitting] = useState<boolean>(false);
  const updateUserDetail = useAuthStore((state) => state.updateUserDetail);

  const handleUpdate = async () => {
    setSubmitting(true);
    await updateUserDetail({ skills: skills });
    setSubmitting(false);
    closeModal();
  };

  
  return (
    <Modal
      title="Add avaiable for"
      isOpen={open}
      closeModal={closeModal}
      cls="max-w-md containe overflow-visible"
    >
      <div className="mt-4">
        <label className="mb-2  block text-gray-500 font-medium">
          What are you skilled at
        </label>
        <div>
        <TagsInput placeholder="Type something.." tags={skills} setTags={setSkills} suggestions={suggestions} autocomplete/>
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
            onClick={handleUpdate}
            isLoading={submitting}
            disabled={skills.length === 0 || submitting}
            cls="w-full h-14 w-full bg-primary text-white rounded-md  font-semibold"
          >
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};
