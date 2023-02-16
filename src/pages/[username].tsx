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
import { render } from "@headlessui/react/dist/utils/render";
type Props = {};

const ProfilePage = (props: Props) => {
  const router = useRouter();
  const username = router.query.username as string;

  const [loading, setLoading] = useState<boolean>(true);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const userId = useAuthStore((state) => state.userId);
  const [profile, setProfile] = useState<UserResponse | undefined>(undefined);
  const [error, setError] = useState<string>("");
  const [endorseModal, setEndorseModal] = useState<boolean>(false);
  const [msgModal, setMsgModal] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("all");

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
    if (username && isLoggedIn) {
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
  }, [username, isLoggedIn]);

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
        <div className="bg-white  p-8  border-x ">
          <div
            className="grid items-center  lg:grid-cols-2
        p-4 md:p-8"
          >
            <div className="flex flex-col items-center sm:items-start md:block mb-8">
              {/* Avatar */}
              <div className="p-2 bg-[#FFECCF] h-48 w-48 rounded-full overflow-hidden">
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
              <div className="md:text-lg text-gray-600">
                {profile?.experience &&
                  profile?.experience.length > 0 &&
                  `${profile?.experience[0]?.position} , ${profile?.experience[0]?.companyName}`}
              </div>
              {username !== profile?.profile?.username && <div className="mt-8 flex gap-2">
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
              </div>}
            </div>
            <div className="">
              <h6 className="text-primary text-3xl">
                About{" "}
                <span className="font-extrabold">{profile?.profile?.name}</span>
              </h6>
              <p className="mt-4 mb-8  text-gray-600 md:text-lg">
                {profile?.profile?.bio}
              </p>
              <hr />
              <h6 className="mt-8 mb-4 text-primary text-2xl block">
                {"I'm available for"}
              </h6>
              <div className=" flex flex-wrap gap-2">
                {profile?.profile?.availableFor?.map((item, idx) => (
                  <div className="tag__simple" key={idx}>
                    {item}
                  </div>
                ))}
              </div>
              <h6 className="mt-8 mb-4 text-primary text-2xl block">
                {"My Skills"}
              </h6>
              <div className=" flex flex-wrap gap-2">
                {profile?.profile?.skills?.map((item, idx) => (
                  <div className="tag__simple" key={idx}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr />
          <div className="p-8">
            <div className="flex  items-center justify-around mt-8 mb-16 ">
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setCategory("all")}
                  className={`h-16 w-16 ${
                    category === "all"
                      ? "bg-[#FFB039] text-white"
                      : "bg-[#FFB039]/20 hover:bg-[#FFB039]/25 hover:border border-[#FFB039] text-[#FFB039]"
                  } rounded-full flex items-center justify-center p-3`}
                >
                  <CheckedListIcon />
                </button>
                <div className="font-semibold text-center">All</div>
              </div>
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setCategory("education")}
                  className={`h-16 w-16 ${
                    category === "education"
                      ? "bg-[#544F87] text-white"
                      : "bg-[#EBE9FB]/20 hover:bg-violet-800/20 hover:border border-[#544F87] text-[#544F87]"
                  } rounded-full flex items-center justify-center p-3`}
                >
                  <AcademicIcon />
                </button>
                <div className="font-semibold text-center">Education</div>
              </div>
              {/* <div className="flex flex-col items-center">
              <button onClick={()=>setCategory("goals")} className=" rounded-full p-3 bg-[#F3FFF7]">
                <TargetIcon className="text-[#4FC971]" />
              </button >
              <div className="font-semibold text-center">Goal</div>
            </div> */}
              <div className="flex flex-col items-center ">
                <button
                  onClick={() => setCategory("position")}
                  className={`h-16 w-16 ${
                    category === "position"
                      ? "bg-[#46C1F6] text-white"
                      : "bg-[#46C1F6]/10 hover:bg-[#46C1F6]/25 hover:border border-[#46C1F6] text-[#46C1F6]"
                  } rounded-full flex items-center justify-center p-3`}
                >
                  <SuitcaseIcon />
                </button>
                <div className="font-semibold text-center">Position</div>
              </div>
              <div className="flex flex-col items-center ">
                <button
                  onClick={() => setCategory("others")}
                  className={`h-16 w-16 ${
                    category === "others"
                      ? "bg-[#FFB74A] text-white"
                      : "bg-[#FFB74A]/10 hover:bg-[#FFB74A]/25 hover:border border-[#FFB74A] text-[#FFB74A]"
                  } rounded-full flex items-center justify-center p-3`}
                >
                  <StarIcon />
                </button>
                <div className="font-semibold text-center">Others</div>
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
