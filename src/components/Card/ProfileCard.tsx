/* eslint-disable @next/next/no-img-element */
import Button from "@components/UI/Button";
import React, { FC } from "react";
import { FaTelegramPlane, FaFire } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";

interface ProfileCardProps {
  title: string;
  name: string;
  openTo: string[];
  img: string;
}

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

const ProfileCard: FC<ProfileCardProps> = ({ title, name, openTo, img }) => {
  return (
    <div className="flex flex-col border rounded-md px-3 py-4 hover:-translate-y-1 transition duration-300 hover:shadow-md">
      <img
        src="https://picsum.photos/200/300"
        alt="profile"
        className="rounded-full w-14 h-14"
      />
      <p className="font-semibold mt-2">{name}</p>
      <p className="text-xs text-gray-500 mt-1 truncate">{title}</p>
      <div className="flex flex-col mt-4">
        <p className="text-xs text-primary font-semibold">Open to</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {openTo.map((item) => (
            <p
              key={item}
              className={`text-xs text-primary ${generateRandomColor()} px-3 py-1.5 rounded-lg`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <Button cls="flex items-center text-xs text-gray-600 px-3 py-2 rounded-md hover:bg-gray-100 hover:text-primary transition duration-300">
          <FaTelegramPlane className="mr-1 text-base" />
          Message
        </Button>
        <Button cls="text-primary text-xs px-3 py-2 bg-gray-100 rounded-md">
          <FaFire className="mr-1 text-base" />
          Endorse
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
