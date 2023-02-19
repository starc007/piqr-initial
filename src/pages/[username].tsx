/* eslint-disable @next/next/no-img-element */
import Button from "@components/UI/Button";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import TimelineItem from "@components/Profile/TimelineItem";
import { API } from "@api/index";
import { useAuthStore } from "@store/index";
import Loader from "@components/Loader";
import { UserResponse } from "@store/action/actions.types";
import { FaFire } from "react-icons/fa";
import moment from "moment";
import { EndorseModal } from "@components/Endorse/EndorseModal";
import { SendMessageModal } from "@components/Inbox/SendMessageModal";
import CollaborateIcon from "@components/Icons/CollaborateIcon";
import TargetIcon from "@components/Icons/TargetIcon";
import AcademicIcon from "@components/Icons/AcademicIcon";
import CheckedListIcon from "@components/Icons/CheckedListIcon";
import SuitcaseIcon from "@components/Icons/SuitcaseIcon";
import StarIcon from "@components/Icons/StarIcon";
import {
  TbBrandBehance,
  TbBrandDribbble,
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbBrandYoutube,
  TbNetwork,
} from "react-icons/tb";
import Link from "next/link";

type Props = {};

const ProfilePage = (props: Props) => {
  const router = useRouter();
  const username = router.query.username as string;

  const [loading, setLoading] = useState<boolean>(true);
  const userId = useAuthStore((state) => state.userId);
  const [profile, setProfile] = useState<UserResponse | undefined>(undefined);
  const [error, setError] = useState<string>("");
  const [endorseModal, setEndorseModal] = useState<boolean>(false);
  const [msgModal, setMsgModal] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("all");

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
      "bg-orange-50",
      "bg-teal-50",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  };

  const showAll = () => {
    if (category === "all") {
      return (
        <>
          {profile?.education?.map((item) => (
            <TimelineItem
              key={item?._id}
              dateFrom={moment(item?.from).format("MMM YYYY")}
              dateTo={moment(item?.from).format("MMM YYYY")}
              description={item?.fieldOfStudy}
              title={item?.degree}
              subtitle={item?.schoolName}
              type="Education"
            />
          ))}
          {profile?.activities?.map((item) => (
            <TimelineItem
              key={item?._id}
              dateFrom={moment(item?.date).format("MMM YYYY")}
              description={item?.description}
              title={item?.title}
              type="Others"
            />
          ))}
          {profile?.experience?.map((item) => (
            <TimelineItem
              key={item?._id}
              dateFrom={moment(item?.from).format("MMM YYYY")}
              dateTo={moment(item?.to).format("MMM YYYY")}
              title={`${item?.position} @ ${item?.companyName} `}
              subtitle={item?.location}
              description={item?.description}
              type="Position"
            />
          ))}
        </>
      );
    }
    return <></>;
  };

  const showEducation = () => {
    if (category === "education") {
      return (
        <>
          {profile?.education?.map((item) => (
            <TimelineItem
              key={item?._id}
              dateFrom={moment(item?.from).format("MMM YYYY")}
              dateTo={moment(item?.from).format("MMM YYYY")}
              description={item?.fieldOfStudy}
              title={item?.degree}
              subtitle={item?.schoolName}
              type="Education"
            />
          ))}
        </>
      );
    }
    return <></>;
  };

  const showPositions = () => {
    if (category === "position") {
      return (
        <>
          {profile?.experience?.map((item) => (
            <TimelineItem
              key={item?._id}
              dateFrom={moment(item?.from).format("MMM YYYY")}
              dateTo={moment(item?.to).format("MMM YYYY")}
              title={`${item?.position} @ ${item?.companyName} `}
              subtitle={item?.location}
              description={item?.description}
              type="Position"
            />
          ))}
        </>
      );
    }
    return <></>;
  };

  const showOthers = () => {
    if (category === "others") {
      return (
        <>
          {profile?.activities?.map((item) => (
            <TimelineItem
              key={item?._id}
              dateFrom={moment(item?.date).format("MMM YYYY")}
              description={item?.description}
              title={item?.title}
              type="Others"
            />
          ))}
        </>
      );
    }
    return <></>;
  };

  useEffect(() => {
    if (username) {
      setLoading(true);
      API.get("/user/" + username)
        .then((response) => {
          if (response.status === 200) {
            setProfile(response?.data);
          }
          setLoading(false);
        })
        .catch((err: any) => {
          console.log(err);
          if (err?.response?.data?.msg) setError("User Does not exist!");
          setLoading(false);
        });
    }
  }, [username]);
  const socials = profile?.socials;
  const links = [
    {
      title: "Twitter",
      href: socials?.twitter,
      icon: <TbBrandTwitter className="h-6 w-6" />,
    },
    {
      title: "LinkedIn",
      href: socials?.linkedin,
      icon: <TbBrandLinkedin className="h-6 w-6" />,
    },
    {
      title: "Facebook",
      href: socials?.facebook,
      icon: <TbBrandFacebook className="h-6 w-6" />,
    },
    {
      title: "Instagram",
      href: socials?.instagram,
      icon: <TbBrandInstagram className="h-6 w-6" />,
    },
    {
      title: "Behance",
      href: socials?.behance,
      icon: <TbBrandBehance className="h-6 w-6" />,
    },
    {
      title: "Dribble",
      href: socials?.dribble,
      icon: <TbBrandDribbble className="h-6 w-6" />,
    },
    {
      title: "Youtube",
      href: socials?.youtube,
      icon: <TbBrandYoutube className="h-6 w-6" />,
    },
    {
      title: "Website",
      href: socials?.website,
      icon: <TbNetwork className="h-6 w-6" />,
    },
  ];

  if (loading) {
    return (
      <div className="section__height flex items-center justify-center">
        <Loader col="text-black" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="section__height flex items-center justify-center ">
        {error}
      </div>
    );
  }

  return (
    <>
      <section className="section__height lg:px-16 pt-4 md:pt-0 ">
        <div className="bg-white  sm:p-8 p-0  sm:border-x ">
          <div className="grid items-center  lg:grid-cols-3 p-4 md:p-8">
            <div className="flex flex-col items-center sm:items-start md:block mb-8 lg:col-span-1">
              {/* Avatar */}
              <div className="p-2 bg-[#FFECCF] sm:h-48 sm:w-48 w-32 h-32 rounded-full overflow-hidden">
                <img
                  loading="lazy"
                  src={profile?.profile?.avatar}
                  alt="avatar"
                  className="h-full w-full rounded-full object-center object-cover"
                />
              </div>
              <p className="text-2xl font-semibold mt-4">
                {profile?.profile?.name}
              </p>
              <div className="md:text-lg flex items-center gap-1 text-gray-600">
                @{username}
                {/* {profile?.profile?.location} */}
              </div>
              <div className="md:text-lg font-medium text-gray-600">
                {profile?.profile?.title}
              </div>
              <div className="flex gap-2 mt-1 flex-wrap">
                {links?.map((item) => {
                  if (!item.href) return <></>;
                  return (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      key={item.title}
                      className="text-gray-400 hover:text-secondary p-1  rounded-md hover:shadow-xl duration-200 ease-out"
                    >
                      {item.icon}
                    </Link>
                  );
                })}
              </div>
              {userId !== profile?.profile?.user && (
                <div className="mt-8 flex gap-2">
                  <Button
                    onClick={() => setMsgModal(true)}
                    cls=" px-4 gap-4 bg-primary text-white   rounded-md  font-semibold gap"
                  >
                    <CollaborateIcon />
                    Collaborate
                  </Button>
                  {/* Todo : Add Endorse function here  */}
                  <Button
                    onClick={() => setEndorseModal(true)}
                    cls="btn__secondary-outline"
                  >
                    {" "}
                    <FaFire className="mr-1 text-base" /> Endorse
                  </Button>
                </div>
              )}
            </div>
            <div className="lg:col-span-2">
              <h6 className="text-primary sm:text-3xl text-xl">
                About{" "}
                <span className="font-extrabold">{profile?.profile?.name}</span>
              </h6>
              <p className="mt-4 mb-8  text-gray-600 md:text-lg">
                {profile?.profile?.bio}
              </p>
              <hr />
              <h6 className="mt-8 mb-4 text-primary text-xl block">
                {"I'm available for"}
              </h6>
              <div className=" flex flex-wrap gap-2">
                {profile?.profile?.availableFor?.map((item, idx) => (
                  <p
                    key={idx}
                    className={`text-sm text-primary ${generateRandomColor()} px-3 py-1.5 rounded-lg`}
                  >
                    {item}
                  </p>
                ))}
              </div>
              <h6 className="mt-8 mb-4 text-primary text-xl block">
                {"My Skills"}
              </h6>
              <div className=" flex flex-wrap gap-2">
                {profile?.profile?.skills?.map((item, idx) => (
                  <p
                    key={idx}
                    className={`text-sm text-primary ${generateRandomColor()} px-3 py-1.5 rounded-lg`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <hr />
          <div className="sm:p-8 p-0">
            <div className="flex  items-center justify-around mt-8 mb-16 ">
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setCategory("all")}
                  className={`sm:h-16 sm:w-16 h-12 w-12 ${
                    category === "all"
                      ? "bg-[#FFB039] text-white"
                      : "bg-[#FFB039]/20 hover:bg-[#FFB039]/25 hover:border border-[#FFB039] text-[#FFB039]"
                  } rounded-full flex items-center justify-center sm:p-3 p-2`}
                >
                  <CheckedListIcon />
                </button>
                <div className="font-semibold text-center sm:text-base text-sm">
                  All
                </div>
              </div>
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setCategory("education")}
                  className={`sm:h-16 sm:w-16 h-12 w-12 ${
                    category === "education"
                      ? "bg-[#544F87] text-white"
                      : "bg-[#EBE9FB]/20 hover:bg-violet-800/20 hover:border border-[#544F87] text-[#544F87]"
                  } rounded-full flex items-center justify-center p-3`}
                >
                  <AcademicIcon />
                </button>
                <div className="font-semibold text-center sm:text-base text-sm">
                  Education
                </div>
              </div>
              <div className="flex flex-col items-center ">
                <button
                  onClick={() => setCategory("position")}
                  className={`sm:h-16 sm:w-16 h-12 w-12 ${
                    category === "position"
                      ? "bg-[#46C1F6] text-white"
                      : "bg-[#46C1F6]/10 hover:bg-[#46C1F6]/25 hover:border border-[#46C1F6] text-[#46C1F6]"
                  } rounded-full flex items-center justify-center p-3`}
                >
                  <SuitcaseIcon />
                </button>
                <div className="font-semibold text-center sm:text-base text-sm">
                  Position
                </div>
              </div>
              <div className="flex flex-col items-center ">
                <button
                  onClick={() => setCategory("others")}
                  className={`sm:h-16 sm:w-16 h-12 w-12 ${
                    category === "others"
                      ? "bg-[#FFB74A] text-white"
                      : "bg-[#FFB74A]/10 hover:bg-[#FFB74A]/25 hover:border border-[#FFB74A] text-[#FFB74A]"
                  } rounded-full flex items-center justify-center p-3`}
                >
                  <StarIcon />
                </button>
                <div className="font-semibold text-center sm:text-base text-sm">
                  Others
                </div>
              </div>
            </div>
            {showAll()}
            {showPositions()}
            {showEducation()}
            {showOthers()}
          </div>
        </div>
      </section>
      {profile && (
        <EndorseModal
          open={endorseModal}
          name={profile?.profile?.name}
          userId={profile?.profile?.user as string}
          closeModal={() => setEndorseModal(false)}
        />
      )}
      {profile && (
        <SendMessageModal
          open={msgModal}
          name={profile?.profile?.name}
          userId={profile?.profile?.user as string}
          closeModal={() => setMsgModal(false)}
        />
      )}
    </>
  );
};

export default ProfilePage;
