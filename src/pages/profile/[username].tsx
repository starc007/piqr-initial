import Button from "@components/UI/Button";
import { useRouter } from "next/router";
import React from "react";
import TimelineItem from "@components/Profile/TimelineItem";
import CheckedListIcon from "@components/Icons/CheckedListIcon";
import AcademicIcon from "@components/Icons/AcademicIcon";
import TargetIcon from "@components/Icons/TargetIcon";
import SuitcaseIcon from "@components/Icons/SuitcaseIcon";
import StarIcon from "@components/Icons/StarIcon";
import { FiGlobe } from "react-icons/fi";
import {HiOutlineEnvelope} from "react-icons/hi2"
type Props = {};

const ProfilePage = (props: Props) => {
  const router = useRouter();
  const username = router.query.username as string;
  const data = {
    name: "Sarah Mariam",
    username: username,
    location: "India",
    occupation: "Product Designer ",
    company: "Reelway",
    supporters: 0,
    supporting: 2,
    about:
      "I'm an early-career product designer experienced in planning, designing, and optimizing consumer-based experiences across web and mobile for early-stage startups.",
    availableFor: [
      "Full Time Roles",
      "Part Time Roles",
      "UX Research",
      "Meeting new peoples",
      "Brain Storming",
      "UI Design",
      "Product Design",
      "+6",
    ],
    avatarUrl:
      "https://avatars.githubusercontent.com/u/26627776?s=400&u=cd1b01b3ff21747c214b0b4b0d2a6b9bfef39695&v=4",
  };
  return (
    <section className="section__height md:px-16 pt-4 md:pt-0 ">
      <div
        className="grid items-center  md:grid-cols-2
       p-4 md:p-8"
      >
        <div className="flex flex-col items-center sm:items-start md:block mb-8">
          {/* Avatar */}
          <div className="p-2 bg-[#FFECCF] h-48 w-48 rounded-full overflow-hidden">
            <img
              src={data?.avatarUrl}
              alt="avatar"
              className="h-full w-full rounded-full object-center object-cover"
            />
          </div>
          <p className="text-3xl font-semibold mt-4">{data?.name}</p>
          <div className="md:text-lg flex items-center gap-1 text-gray-600">
            @{username} <FiGlobe className="text-secondary" />
            {data?.location}
          </div>
          <div className="md:text-lg text-gray-600">
            {data?.occupation} , {data?.company}
          </div>
          <div className="text-sm md:text-base text-gray-500 flex items-center">
            Suporters : {data?.supporters} | Supporting : {data?.supporting}
          </div>
          <div className="mt-8 flex gap-2">
            <Button cls="btn__primary">Collaborate</Button>
            <Button cls="btn__secondary-outline">Follow</Button>
            <Button cls="btn__secondary-outline px-2"><HiOutlineEnvelope className="h-6 w-6"/></Button>
          </div>
        </div>
        <div className="">
          <h6 className="text-primary text-3xl">
            About{" "}
            <span className="font-extrabold">{data?.name.split(" ")[0]}</span>
          </h6>
          <p className="mt-4 mb-8  text-gray-600 md:text-lg">{data?.about}</p>
          <hr />
          <h6 className="mt-8 mb-4 text-primary text-3xl block">
            {"I'm available for"}
          </h6>
          <div className=" flex flex-wrap gap-2">
            {data?.availableFor?.map((item, idx) => (
              <div className="tag__simple" key={idx}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-8">
        <div className="flex  items-center justify-around mt-8 mb-16 ">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-[#FFB039] rounded-full flex items-center justify-center p-3">
              <CheckedListIcon />
            </div>
            <div className="font-semibold text-center">All</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-[#EBE9FB] rounded-full flex items-center justify-center p-3">
              <AcademicIcon />
            </div>
            <div className="font-semibold text-center">Education</div>
          </div>
          <div className="flex flex-col items-center">
            <div className=" rounded-full p-3 bg-[#F3FFF7]">
              <TargetIcon />
            </div>
            <div className="font-semibold text-center">Goal</div>
          </div>
          <div className="flex flex-col items-center ">
            <div className=" rounded-full p-3 bg-[#EDFAFF]">
              <SuitcaseIcon />
            </div>
            <div className="font-semibold text-center">Position</div>
          </div>
          <div className="flex flex-col items-center ">
            <div className=" rounded-full p-3 bg-[#FFF3E3]">
              <StarIcon />
            </div>
            <div className="font-semibold text-center">Others</div>
          </div>
        </div>
        <TimelineItem
          dateFrom="Jan 2023"
          dateTo="Feb 2023"
          description="Created a dynamic visualization system of Disk Scheduling Algorithms based on Operating System concepts -- Implemented active comparison of algorithms with dynamic file input & output integration for large-scale data"
          title="Builder @ OSVIS - Operating system visualizations"
          subtitle="PDEU"
          type="Education"
        />
        <TimelineItem
          dateFrom="Jan 2023"
          dateTo="Feb 2023"
          description="Created a dynamic visualization system of Disk Scheduling Algorithms based on Operating System concepts -- Implemented active comparison of algorithms with dynamic file input & output integration for large-scale data"
          title="Builder @ OSVIS - Operating system visualizations"
          subtitle="PDEU"
          type="Goal"
        />
        <TimelineItem
          dateFrom="Jan 2023"
          dateTo="Feb 2023"
          description="Created a dynamic visualization system of Disk Scheduling Algorithms based on Operating System concepts -- Implemented active comparison of algorithms with dynamic file input & output integration for large-scale data"
          title="Builder @ OSVIS - Operating system visualizations"
          subtitle="PDEU"
          type="Position"
        />
        <TimelineItem
          dateFrom="Jan 2023"
          dateTo="Feb 2023"
          description="Created a dynamic visualization system of Disk Scheduling Algorithms based on Operating System concepts -- Implemented active comparison of algorithms with dynamic file input & output integration for large-scale data"
          title="Builder @ OSVIS - Operating system visualizations"
          subtitle="PDEU"
          type="Others"
        />
        <TimelineItem
          dateFrom="Jan 2023"
          dateTo="Feb 2023"
          description="Created a dynamic visualization system of Disk Scheduling Algorithms based on Operating System concepts -- Implemented active comparison of algorithms with dynamic file input & output integration for large-scale data"
          title="Builder @ OSVIS - Operating system visualizations"
          subtitle="PDEU"
          type="Others"
          withBorder={false}
        />
      </div>
    </section>
  );
};

export default ProfilePage;
