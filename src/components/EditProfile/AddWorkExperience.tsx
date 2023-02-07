import Button from "@components/UI/Button";
import Input, { TextArea } from "@components/UI/Input";
import Modal from "@components/UI/Modal";
import { EducationItem, WorkExperienceItem } from "@store/action/actions.types";
import { useAuthStore } from "@store/index";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  open: boolean;
  closeModal: () => void;
}

export const AddWorkExperienceModal = ({
  open,
  closeModal,
}: Props) => {
  const { register, handleSubmit ,reset} = useForm<WorkExperienceItem>({
  });
  const [submitting, setSubmitting] = useState<boolean>(false);
  const addWorkExperience = useAuthStore((state) => state.addWorkExp);

  const handleUpdateBio: SubmitHandler<WorkExperienceItem> = async (data) => {
    setSubmitting(true);
    await addWorkExperience(data);
    setSubmitting(false);
    reset()
    closeModal();
  };

  return (
    <Modal
      title="Add Work Experience"
      isOpen={open}
      closeModal={closeModal}
      cls="max-w-md container"
    >
      <form onSubmit={handleSubmit(handleUpdateBio)} className="mt-4">
        <label className="mb-1 block text-gray-500 font-medium">
          Company Name
        </label>
        <div>
          <Input
            {...register("companyName")}
            cls="mb-4 border-gray-400 w-full p-2 px-3"
            required
          />
        </div>
        <label className="mb-1 block text-gray-500 font-medium">Position</label>
        <div>
          <Input
            {...register("position")}
            cls="mb-4 border-gray-400 w-full p-2 px-3"
            required
          />
        </div>
        <label className="mb-1 block text-gray-500 font-medium">
          Description
        </label>
        <div>
          <TextArea
            {...register("description")}
            cls="mb-4 border-gray-400 w-full p-2 px-3"
            required
          />
        </div>
        <label className="mb-1 block text-gray-500 font-medium">Location</label>
        <div>
          <Input
            {...register("location")}
            cls="mb-4 border-gray-400 w-full p-2 px-3"
            required
          />
        </div>
        <label className="mb-1 block text-gray-500 font-medium">
          Starting Date
        </label>
        <div>
          <Input
            type="date"
            {...register("from")}
            cls="mb-4 border-gray-400 w-full p-2 px-3"
            required
          />
        </div>
        <label className="mb-1 block text-gray-500 font-medium">
          Ending Date
        </label>
        <div>
          <Input
            type="date"
            {...register("to")}
            cls="mb-4 border-gray-400 w-full p-2 px-3"
          />
        </div>
        <label className="mb-1 block text-gray-500 font-medium">
          Currently Working ?
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-1">
            Yes
            <Input type="radio" required {...register("current")} value={"true"}  cls="h-4 w-4"/>
          </label>
          <label
          className="flex items-center gap-1"
                >
            No
            <Input type="radio" required {...register("current")} value="false" cls="h-4 w-4"/>
          </label>
        </div>

        <div className="flex items-center justify-center mt-4 gap-4">
          <Button
            type="button"
            onClick={closeModal}
            disabled={submitting}
            cls="w-full h-14 w-full bg-gray-100 hover:bg-gray-200  rounded-md  font-semibold"
          >
            Cancel
          </Button>

          <Button
            type="submit"
            isLoading={submitting}
            cls="w-full h-14 w-full bg-primary text-white rounded-md  font-semibold"
          >
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
};
