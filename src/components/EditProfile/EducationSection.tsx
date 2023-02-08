import AcademicIcon from "@components/Icons/AcademicIcon";
import Button from "@components/UI/Button";
import { UserResponse } from "@store/action/actions.types";
import moment from "moment";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { AddEducationModal } from "./AddEducation";

type Props = {
  user: UserResponse | null;
};

const EducationSection = ({ user }: Props) => {
  const [eduModal, setEduModal] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  // TODO : delete education item by id
  return (
    <>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => setEduModal(true)}
          className="flex gap-4 items-center  p-4 rounded bg-gray-100  hover:ring-1 ring-primary duration-100"
        >
          <AcademicIcon />
          <div className="flex-1 text-left">
            <p className="font-medium ">Add your Education</p>
            <p className="text-gray-400 text-sm">Add your education</p>
          </div>
        </button>
        {user?.education?.map((item, id) => (
          <div
            className="flex gap-4 group items-center  p-4 rounded border"
            key={`edu-${id}`}
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
              cls="hidden group-hover:flex bg-red-500 rounded-md  text-white "
            >
              <FiX className="h-6 w-6" />
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
