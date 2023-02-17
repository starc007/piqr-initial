/* eslint-disable @next/next/no-img-element */
import Button from "@components/UI/Button";
import React, { FC, useState } from "react";
import { FaTelegramPlane, FaFire, FaArrowRight } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { useAuthStore } from "@store/index";
import { ProfileResponse } from "src/pages/explore";
import Link from "next/link";
import { EndorseModal } from "@components/Endorse/EndorseModal";
import { SendMessageModal } from "@components/Inbox/SendMessageModal";
import { HiArrowRight } from "react-icons/hi2";

const generateRandomColor = () => {
  const colors = [
    "bg-indigo-50",
    "bg-pink-50",
    "bg-purple-50",
    "bg-blue-50",
    "bg-gray-50",
    "bg-green-50",
    "bg-yellow-50",
    "bg-red-50",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};

const ProfileCard = ({
  _id,
  availableFor,
  avatar,
  bio,
  name,
  skills,
  user,
  username,
}: ProfileResponse) => {
  const [endorseModal, setEndorseModal] = useState<boolean>(false);
  const [msgModal, setMsgModal] = useState<boolean>(false);

  return (
    <>
      <Link href={"/" + username}>
        <div className="flex flex-col justify-between h-72 border rounded-md px-3 py-4 hover:-translate-y-1 hover:border-secondary transition duration-300 hover:shadow-lg">
          <img
            src={avatar}
            alt="profile"
            className="rounded-full border w-14 h-14"
          />
          <p className="font-semibold mt-2">{name}</p>
          <p className="text-xs text-gray-500 mt-1 truncate">{bio}</p>
          <div className="flex flex-col mt-4">
            <p className="text-xs text-primary font-semibold">Open to</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {availableFor.length === 0 && (
                <span className="text-xs text-gray-400">Nothing here</span>
              )}
              {availableFor.map((item) => (
                <p
                  key={item}
                  className={`text-xs text-primary ${generateRandomColor()} px-3 py-1.5 rounded-lg`}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <p className="text-xs text-primary font-semibold">Skills</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {skills.map((item) => (
                <p
                  key={item}
                  className={`text-xs text-primary bg-secondary/10  px-3 py-1.5 rounded-lg`}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            {/* <Button onClick={()=>setMsgModal(true)} cls="flex items-center text-xs text-gray-600 px-3 py-2 rounded-md hover:bg-gray-100 hover:text-primary transition duration-300">
          <FaTelegramPlane className="mr-1 text-base" />
          Message
        </Button> */}
            {/* <Button onClick={()=>setEndorseModal(true)} cls="text-primary text-xs px-3 py-2 bg-gray-100 rounded-md">
          View Profile
          <HiArrowRight className="ml-2 text-sm" />
        </Button> */}
          </div>
        </div>
      </Link>
      <EndorseModal
        open={endorseModal}
        closeModal={() => setEndorseModal(false)}
        userId={_id}
        name={name}
      />
      <SendMessageModal
        open={msgModal}
        closeModal={() => setMsgModal(false)}
        userId={_id}
        name={name}
      />
    </>
  );
};

export default ProfileCard;
