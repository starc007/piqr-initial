import AcademicIcon from "@components/Icons/AcademicIcon";
import ProfileIcon from "@components/Icons/ProfileIcon";
import SuitcaseIcon from "@components/Icons/SuitcaseIcon";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-hot-toast";
import { BiEdit, BiEditAlt } from "react-icons/bi";
import { FiGlobe, FiLink, FiPlus } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi2";

const EditButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button onClick={onClick}>
      <BiEditAlt className="text-gray-400" />
    </button>
  );
};

const EditProfile = () => {
  const router = useRouter();
  const username = router.query.username as string;
  const availableFor = [
    "Full Time Roles",
    "Part Time Roles",
    "UX Research",
    "Meeting new peoples",
    "Brain Storming",
    "UI Design",
    "Product Design",
    "+6",
  ];
  return (
    <div className="p-8">
      {/* Avatar */}
      <div className="flex gap-40 items-center justify-center">
        <div>
          <div className="p-2 bg-[#FFECCF] h-48 w-48 rounded-full overflow-hidden">
            <img
              src={
                "https://avatars.githubusercontent.com/u/26627776?s=400&u=cd1b01b3ff21747c214b0b4b0d2a6b9bfef39695&v=4"
              }
              alt="avatar"
              className="h-full w-full rounded-full object-center object-cover"
            />
          </div>
          <p className="text-2xl font-semibold mt-4 flex items-center  gap-4">
            {" "}
            Bhavna Srivastava <EditButton
              onClick={() => toast("Edit Name")}
            />{" "}
          </p>
          <div className="md:text-lg flex items-center gap-1 text-gray-600">
            @{username} <FiGlobe className="text-secondary" />
            India
          </div>
          <div className="mt-2 text-base text-gray-500 flex items-center">
            0 Following | 2 Followers
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <ProfileIcon />
            <div className="flex-1">
              <p className="font-medium ">Add an Introduction</p>
              <p className="text-gray-400 text-sm">
                Tells others who you are and the type of work you do
              </p>
            </div>
            <HiOutlinePlus className="h-8 w-8 text-gray-400" />
          </div>
          <hr className="my-4" />
          <h6 className="flex mb-4 items-center justify-between text-primary text-xl font-medium ">
            {"I’m Available for"} <EditButton />
          </h6>
          <div className=" flex flex-wrap gap-2">
            {availableFor?.map((item, idx) => (
              <div className="tag__simple" key={idx}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <p className="text-xl font-medium text-gray-600 md:col-span-2">
          A few quick things about yourself
        </p>
        <div className="flex gap-4 items-center p-4 rounded bg-[#FAFAFF]">
          <AcademicIcon />
          <div className="flex-1">
            <p className="font-medium ">Add an Introduction</p>
            <p className="text-gray-400 text-sm">
              Tells others who you are and the type of work you do
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center bg-[#FAFAFF] p-4 rounded">
          <SuitcaseIcon />
          <div className="flex-1">
            <p className="font-medium ">Add an Introduction</p>
            <p className="text-gray-400 text-sm">
              Tells others who you are and the type of work you do
            </p>
          </div>
        </div>
      </div>
      <hr className="my-8" />
      <div className=" grid grid-cols-5 gap-16 ">
        <div className="md:col-span-2">
          <p className="text-xl flex items-center justify-between text-gray-600 col-span-2 font-medium">
            Links <EditButton />
          </p>
          <p className="text-sm text-gray-400">
            Show off your website, social media profiles, or other links.
          </p>
          <div className="space-y-4 mt-4">
            <div className="flex gap-4 items-center p-4 rounded bg-[#FAFAFF]">
              <FiLink className="h-8 w-8" />
              <div className="flex-1">
                <p className="font-medium ">Add an Introduction</p>
                <p className="text-gray-400 text-sm">
                  Tells others who you are and the type of work you do
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center p-4 rounded bg-[#FAFAFF]">
              <FiLink className="h-8 w-8" />
              <div className="flex-1">
                <p className="font-medium ">Add an Introduction</p>
                <p className="text-gray-400 text-sm">
                  Tells others who you are and the type of work you do
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center p-4 rounded bg-[#FAFAFF]">
              <FiLink className="h-8 w-8" />
              <div className="flex-1">
                <p className="font-medium ">Add an Introduction</p>
                <p className="text-gray-400 text-sm">
                  Tells others who you are and the type of work you do
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-xl text-gray-600 flex items-center justify-between col-span-2 font-medium">
            Highlights <EditButton />
          </p>
          <p className="text-sm text-gray-400">
            Share what {"you’ve"} been working on!
          </p>
          <div className="mt-4 space-y-4">
            <div className="flex gap-4 items-center p-4 rounded bg-[#FAFAFF]">
              <BiEditAlt className="h-8 w-8 text-gray-400" />
              <div className="flex-1">
                <p className="font-medium ">Add an Introduction</p>
                <p className="text-gray-400 text-sm">
                  Tells others who you are and the type of work you do
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center p-4 rounded bg-[#FAFAFF]">
            <BiEditAlt className="h-8 w-8 text-gray-400"/>
              <div className="flex-1">
                <p className="font-medium ">Add an Introduction</p>
                <p className="text-gray-400 text-sm">
                  Tells others who you are and the type of work you do
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center p-4 rounded bg-[#FAFAFF]">
            <BiEditAlt className="h-8 w-8 text-gray-400" />
              <div className="flex-1">
                <p className="font-medium ">Add an Introduction</p>
                <p className="text-gray-400 text-sm">
                  Tells others who you are and the type of work you do
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
