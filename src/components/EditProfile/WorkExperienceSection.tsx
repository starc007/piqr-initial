import React, { useState } from "react";
import { AddWorkExperienceModal } from "./AddWorkExperience";
import { UserResponse } from "@store/action/actions.types";
import SuitcaseIcon from "@components/Icons/SuitcaseIcon";
import moment from "moment";
import Button from "@components/UI/Button";
import { useAuthStore } from "@store/index";
import { FiX } from "react-icons/fi";

type Props = {
  user: UserResponse | null;
};

const WorkExperienceSection = ({ user }: Props) => {
  const [expModal, setExpModal] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const deleteExperience = useAuthStore((state) => state.deleteExperience);

  const handleDelete = async (id: string | undefined) => {
    if(!id) throw new Error("Invalid Id")
    setSubmitting(true);
    await deleteExperience(id);
    setSubmitting(false);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => setExpModal(true)}
          className="flex gap-4 items-center  p-4 rounded border  hover:ring-1 ring-secondary hover:text-secondary hover:shadow-xl duration-100"
        >
          <SuitcaseIcon />
          <div className="flex-1 text-left">
            <p className="font-medium ">Add Position</p>
            <p className="text-gray-400 text-sm">
              Add your position in your current company
            </p>
          </div>
        </button>
        {user?.experience?.map((item, id) => (
          <div
            className="flex flex-col gap-4  group  p-4 rounded border"
            key={`edu-${id}`}
          >
            {/* <AcademicIcon /> */}
            <div className="flex justify-between items-center  text">
              <div>
                <p className="font-medium ">
                  {item.position} @ {item?.companyName}
                </p>
                <p className="text-gray-400 text-sm">
                  {item?.location} ,{" "}
                  {`${moment(item?.from).format("MMM YYYY")} - ${
                    item?.to
                      ? moment(item?.to).format("MMM YYYY")
                      : item?.current && "Now"
                  }`}
                </p>
              </div>
              <Button
                isLoading={submitting}
                onClick={() => handleDelete(item?._id)}
                cls="scale-0 group-hover:scale-100 bg-red-500 duration-200 rounded-md  text-white "
              >
                <FiX className="h-6 w-6 m-1 " />
              </Button>
            </div>
            <hr className="my-2" />
            <p className="text-gray-600 text-sm">{item?.description}</p>
          </div>
        ))}
        {user?.experience.length === 0 && "No positions added"}
      </div>
      <AddWorkExperienceModal
        open={expModal}
        closeModal={() => setExpModal(false)}
      />
    </>
  );
};

export default WorkExperienceSection;
