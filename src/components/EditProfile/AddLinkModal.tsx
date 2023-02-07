import Button from "@components/UI/Button";
import Input, { TextArea } from "@components/UI/Input";
import Modal from "@components/UI/Modal";
import { Socials, WorkExperienceItem } from "@store/action/actions.types";
import { useAuthStore } from "@store/index";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaTwitter } from "react-icons/fa";

interface Props {
  open: boolean;
  closeModal: () => void;
}

export const AddLinksModal = ({ open, closeModal }: Props) => {
  const { register, handleSubmit, reset } = useForm<Socials>({});
  const [submitting, setSubmitting] = useState<boolean>(false);
  const addSocials = useAuthStore((state) => state.addSocials);

  const handleUpdateBio: SubmitHandler<Socials> = async (data) => {
    setSubmitting(true);
    await addSocials(data);
    setSubmitting(false);
    reset();
    closeModal();
  };

  return (
    <Modal
      title="Add Links"
      isOpen={open}
      closeModal={closeModal}
      cls="max-w-md container"
    >
      <form onSubmit={handleSubmit(handleUpdateBio)} className="mt-4 grid grid-cols-3">
        <label className="mb-1 block text-gray-500 font-medium">Twitter</label>
        <div className="col-span-2">
          <Input
            {...register("twitter")}
            cls="mb-4 border-gray-400 w-full p-2 px-3"
          />
        </div>
        <label className="mb-1 block text-gray-500 font-medium">
          Instagram
        </label>
        <div className="col-span-2">
          <Input
            {...register("instagram")}
            cls="mb-4 border-gray-400 w-full p-2 px-3"
          />
        </div>
        <label className="mb-1 block text-gray-500 font-medium">LinkedIn</label>
        <div className="col-span-2">
          <Input
            {...register("linkedin")}
            cls="mb-4 border-gray-400 w-full p-2 px-3"
          />
        </div>
        <label className="mb-1 block text-gray-500 font-medium">Facebook</label>
        <div className="col-span-2">
          <Input
            {...register("facebook")}
            cls="mb-4 border-gray-400 w-full p-2 px-3"
          />
        </div>
        <label className="mb-1 block text-gray-500 font-medium">Behance</label>
        <div className="col-span-2">
          <Input
            {...register("behance")}
            cls="mb-4 border-gray-400 w-full p-2 px-3"
          />
        </div>
        <label className="mb-1 block text-gray-500 font-medium">Dribble</label>
        <div className="col-span-2">
          <Input
            {...register("dribble")}
            cls="mb-4 border-gray-400 w-full p-2 px-3"
          />
        </div>
        <label className="mb-1 block text-gray-500 font-medium">Website</label>
        <div className="col-span-2">
          <Input
            {...register("website")}
            cls="mb-4 border-gray-400 w-full p-2 px-3"
          />
        </div>
        <label className="mb-1 block text-gray-500 font-medium">Youtube</label>
        <div className="col-span-2">
          <Input
            {...register("youtube")}
            cls="mb-4 border-gray-400 w-full p-2 px-3"
          />
        </div>
        <div className="flex items-center col-span-3 justify-center mt-4 gap-4">
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
