import React, { useState } from "react";
import { AddWorkExperienceModal } from "./AddWorkExperience";
import { UserResponse } from "@store/action/actions.types";
import SuitcaseIcon from "@components/Icons/SuitcaseIcon";
import moment from "moment";

type Props = {
  user: UserResponse | null;
};

const WorkExperienceSection = ({ user }: Props) => {
  const [expModal, setExpModal] = useState<boolean>(false);

  return (
    <>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => setExpModal(true)}
          className="flex gap-4 items-center  p-4 rounded bg-gray-100  hover:ring-1 ring-primary duration-100"
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
          className="flex gap-4 items-center  p-4 rounded border"
          key={`edu-${id}`}
          >
            {/* <AcademicIcon /> */}
            <div className="flex-1 text">
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
              <hr className="my-2" />
              <p className="text-gray-600 text-sm">{item?.description}</p>
            </div>
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
