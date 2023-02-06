import Button from "@components/UI/Button";
import Input, { TextArea } from "@components/UI/Input";
import Modal from "@components/UI/Modal";
import { EducationItem } from "@store/action/actions.types";
import { useAuthStore } from "@store/index";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  open: boolean;
  closeModal: () => void;
}

export const AddEducationModal = ({
  open,
  closeModal,
}: Props) => {
  const { register, handleSubmit } = useForm<EducationItem>({
  });
  const [submitting, setSubmitting] = useState<boolean>(false);
  const addEducation = useAuthStore((state) => state.addEducation);

  const handleUpdateBio: SubmitHandler<EducationItem> = async (data) => {
    setSubmitting(true);
    await addEducation(data);
    setSubmitting(false);
    closeModal();
  };

  return (
    <Modal
      title="Add Education"
      isOpen={open}
      closeModal={closeModal}
      cls="max-w-md container"
    >
      <form onSubmit={handleSubmit(handleUpdateBio)} className="mt-4">
        <label className="mb-1 block text-gray-500 font-medium">
          Institution Name
        </label>
        <div>
          <Input
            {...register("schoolName")}
            cls="mb-4 border-gray-400 w-full p-2 px-3"
            required
          />
        </div>
        <label className="mb-1 block text-gray-500 font-medium">Degree</label>
        <div>
          <Input
            {...register("degree")}
            cls="mb-4 border-gray-400 w-full p-2 px-3"
            required
          />
        </div>
        <label className="mb-1 block text-gray-500 font-medium">
          Field of Study
        </label>
        <div>
          <Input
            {...register("fieldOfStudy")}
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
            required
          />
        </div>
        <label className="mb-1 block text-gray-500 font-medium">
          Currently Studying ?
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
