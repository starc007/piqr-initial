import ProfileIcon from "@components/Icons/ProfileIcon";
import { useAuthStore } from "@store/index";
import { useRouter } from "next/router";
import { BiCheck, BiX } from "react-icons/bi";
import { HiOutlinePlus } from "react-icons/hi2";
import PrivateRoute from "@routes/PrivateRoute";
import { useState } from "react";
import { AddBioModal } from "@components/EditProfile/AddBioModal";
import { AddAvailableForModal } from "@components/EditProfile/AddAvailableForModal";
import EducationSection from "@components/EditProfile/EducationSection";
import WorkExperienceSection from "@components/EditProfile/WorkExperienceSection";
import { EditButton } from "@components/EditProfile/EditButton";
import LinksSection from "@components/EditProfile/LinksSection";
import { ActivitySection } from "@components/EditProfile/ActivitySection";
import { AddSkillsModal } from "@components/EditProfile/AddSkillsModal";
import Link from "next/link";
import Button from "@components/UI/Button";

const EditProfile = () => {
  const router = useRouter();
  const { user, updateUserDetail } = useAuthStore((state) => ({
    user: state.user,
    updateUserDetail: state.updateUserDetail,
  }));
  const [bioModal, setBioModal] = useState<boolean>(false);
  const [availForModal, setAvailForModal] = useState<boolean>(false);
  const [name, setName] = useState<string>(user?.profile?.name ?? "");
  const [title,setTitle] = useState<string>(user?.profile?.title ?? "")
  const [editName, setEditName] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [skillModal, setSkillModal] = useState<boolean>(false);
  const handleUpdateName = async () => {
    setSubmitting(true);
    await updateUserDetail({ name });
    setEditName(false);
    setSubmitting(false);
  };

  const handleUpdateTitle = async () => {
    setSubmitting(true);
    await updateUserDetail({ title });
    setEditTitle(false);
    setSubmitting(false);
  };
  

  return (
    <PrivateRoute>
      <img
        src="/mesh.jpeg"
        className="fixed top-[4rem] left-0 z-[-1] w-screen"
      />
      <div className="p-12 bg-white mt-8 overflow-hidden rounded-md shadow-md">
        {/* Avatar */}
        <div className="flex flex-wrap gap-20 md:gap-40 items-start justify-center">
          <div>
            <div className="p-2 bg-[#FFECCF] h-48 w-48 rounded-full overflow-hidden">
              <img
                src={user?.profile?.avatar ?? ""}
                alt="avatar"
                className="h-full w-full rounded-full object-center object-cover"
              />
            </div>
            <div className="text-2xl font-semibold mt-4 flex items-center   gap-4">
              {" "}
              {editName ? (
                <input
                  className="border-b-2 w-40"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                user?.profile?.name
              )}
              {editName ? (
                <div>
                  <button
                    onClick={handleUpdateName}
                    className="text-green-500 hover:bg-green-100 duration-200 rounded-md p-1"
                  >
                    <BiCheck className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => setEditName(false)}
                    className="text-red-500 hover:bg-red-100 duration-200 rounded-md p-1"
                  >
                    <BiX className="h-6 w-6" />
                  </button>
                </div>
              ) : (
                <EditButton onClick={() => setEditName(true)} />
              )}
            </div>
            <div className="md:text-lg font-bold flex items-center gap-1 text-gray-400">
              @{user?.profile?.username}
            </div>
            <div className="md:text-lg mb-4 font-semibold flex items-center gap-1 text-gray-600">
             {editTitle ? <input
                  className="border-b-2 w-40"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                /> : user?.profile?.title ?? "Add Title" }
                 {editTitle ? (
                <div>
                  <button
                    onClick={handleUpdateTitle}
                    className="text-green-500 hover:bg-green-100 duration-200 rounded-md p-1"
                  >
                    <BiCheck className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => setEditTitle(false)}
                    className="text-red-500 hover:bg-red-100 duration-200 rounded-md p-1"
                  >
                    <BiX className="h-6 w-6" />
                  </button>
                </div>
              ) : (
                <EditButton onClick={() => setEditTitle(true)} />
              )}
            </div>
            <Link href={"/"+user?.profile?.username} className="btn__secondary-outline ">
              View Profile 
            </Link>
          </div>
          <div className="flex-1">
            {user?.profile?.bio ? (
              <div>
                <div className="flex itesm-center justify-between text-xl font-semibold text-gray-600 md:col-span-2 font">
                  Bio <EditButton onClick={() => setBioModal(true)} />
                </div>
                <p className="text-gray-600">{user?.profile.bio}</p>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <ProfileIcon />
                <div className="flex-1">
                  <p className="font-medium ">Add an Introduction</p>
                  <p className="text-gray-400 text-sm">
                    Tells others who you are and the type of work you do
                  </p>
                </div>
                <button
                  className="text-gray-400 hover:bg-gray-100 rounded-md hover:text-gray-600 duration-200"
                  onClick={() => setBioModal(true)}
                >
                  <HiOutlinePlus className="h-8 w-8 " />
                </button>
              </div>
            )}
            <hr className="my-4" />
            <h6 className="flex mb-4 items-center justify-between text-gray-600  text-xl font-semibold">
              {"I’m Available for"}{" "}
              <EditButton onClick={() => setAvailForModal(true)} />
            </h6>
            <div className=" flex flex-wrap gap-2">
              {user?.profile?.availableFor.length === 0 && (
                <span className="text-gray-400">
                  {" "}
                  You have not added any tags .
                </span>
              )}
              {user?.profile?.availableFor?.map((item: string, idx: number) => (
                <div className="tag__simple" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <hr className="my-4" />
            <h6 className="flex mb-4 items-center justify-between text-gray-600  text-xl font-semibold">
              {"Skills"} <EditButton onClick={() => setSkillModal(true)} />
            </h6>
            <div className=" flex flex-wrap gap-2">
              {user?.profile?.skills.length === 0 && (
                <span className="text-gray-400">
                  You have not added any skills.
                </span>
              )}
              {user?.profile?.skills?.map((item: string, idx: number) => (
                <div className="tag__simple" key={idx}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <p className="text-xl font-semibold text-gray-600 md:col-span-2 font">
            A few quick things about yourself
          </p>
          <EducationSection user={user} />
          <WorkExperienceSection user={user} />
        </div>
        <hr className="my-8" />
        <div className=" grid md:grid-cols-5 gap-16 ">
          <LinksSection />
          <ActivitySection />
        </div>
      </div>
      <AddAvailableForModal
        open={availForModal}
        closeModal={() => setAvailForModal(false)}
        initialValue={user?.profile?.availableFor ?? []}
      />
      <AddBioModal
        open={bioModal}
        closeModal={() => setBioModal(false)}
        initialValue={user?.profile?.bio ?? ""}
      />
      <AddSkillsModal
        open={skillModal}
        closeModal={() => setSkillModal(false)}
        initialValue={user?.profile?.skills ?? []}
      />
    </PrivateRoute>
  );
};

export default EditProfile;
