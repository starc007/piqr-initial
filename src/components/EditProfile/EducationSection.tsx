import AcademicIcon from "@components/Icons/AcademicIcon";
import Button from "@components/UI/Button";
import { UserResponse } from "@store/action/actions.types";
import moment from "moment";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { AddEducationModal } from "./AddEducation";
import { useAmp } from "next/amp";
import { useAuthStore } from "@store/index";

type Props = {
  user: UserResponse | null;
};

const EducationSection = ({ user }: Props) => {
  const [eduModal, setEduModal] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const deleteEducation = useAuthStore(state=>state.deleteEducation); 
  
  const handleDelete = async (id:string) => {
    setSubmitting(true)
    await deleteEducation(id);
    setSubmitting(false)
  }
   // TODO : delete education item by id

  return (
    <>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => setEduModal(true)}
          className="flex gap-4 items-center  p-4 rounded border  hover:ring-1 ring-secondary hover:text-secondary hover:shadow-xl duration-100"
        >
          <AcademicIcon />
          <div className="flex-1 text-left">
            <p className="font-medium ">Add your Education</p>
            <p className="text-gray-400 text-sm">Add your education</p>
          </div>
        </button>
        {user?.education?.map((item) => (
          <div
            className="flex gap-4 group items-center  p-4 rounded border"
            key={`edu-${item?._id}`}
          >
            {/* <AcademicIcon /> */}
            <div className="flex-1 text">
              <p className="font-medium ">
                {item?.degree} | {item?.fieldOfStudy}
              </p>
              <p className="text-gray-400 text-sm">
                {item?.schoolName} ,{" "}
                {`${moment(item?.from).format("MMM YYYY")} - ${moment(
                  item?.to
                ).format("MMM YYYY")}`}
              </p>
            </div>
            <Button
              isLoading={submitting}
              onClick={()=>handleDelete(item?._id)}
              cls={`scale-0 group-hover:scale-100 bg-red-500 rounded-md duration-200 text-white`}
            >
              <FiX className="h-6 w-6 m-1" />
            </Button>
          </div>
        ))}
        {user?.experience.length === 0 && "No education added"}
      </div>
      <AddEducationModal
        open={eduModal}
        closeModal={() => setEduModal(false)}
      />
    </>
  );
};

export default EducationSection;
