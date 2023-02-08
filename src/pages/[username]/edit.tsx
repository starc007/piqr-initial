import AcademicIcon from "@components/Icons/AcademicIcon";
import ProfileIcon from "@components/Icons/ProfileIcon";
import SuitcaseIcon from "@components/Icons/SuitcaseIcon";
import { useAuthStore } from "@store/index";
import { useRouter } from "next/router";
import { BiCheck, BiEditAlt, BiX } from "react-icons/bi";
import { FiGlobe, FiLink, FiX } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi2";
import PrivateRoute from "@routes/PrivateRoute";
import { useState } from "react";
import { AddBioModal } from "@components/EditProfile/AddBioModal";
import { AddAvailableForModal } from "@components/EditProfile/AddAvailableForModal";
import { AddEducationModal } from "@components/EditProfile/AddEducation";
import { EducationItem } from "@store/action/actions.types";
import { AddWorkExperienceModal } from "@components/EditProfile/AddWorkExperience";
import moment from "moment";
import { AddLinksModal } from "@components/EditProfile/AddLinkModal";
import { deleteEducation } from "@store/action";
import Button from "@components/UI/Button";
import EducationSection from "@components/EditProfile/EducationSection";
import WorkExperienceSection from "@components/EditProfile/WorkExperienceSection";
import { EditButton } from "@components/EditProfile/EditButton";



const EditProfile = () => {
  const router = useRouter();
  const username = router.query.username as string;
  const { user, deleteEducation, deleteExperience, updateUserDetail } =
    useAuthStore();
  const [bioModal, setBioModal] = useState<boolean>(false);
  const [availForModal, setAvailForModal] = useState<boolean>(false);
  const [name, setName] = useState<string>(user?.profile?.name ?? "");
  const [editName, setEditName] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleUpdateName = async () => {
    setSubmitting(true);
    await updateUserDetail({ name });
    setEditName(false);
    setSubmitting(false);
  };

  const handleDeleteEducation = async (id: string) => {
    setSubmitting(true);
    // await deleteEducation(id)
    // setSubmitting(false)
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
            <p className="text-2xl font-semibold mt-4 flex items-center   gap-4">
              {" "}
              {editName ? (
                <input
                  className="border-b-2 w-40"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                name
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

    
    </PrivateRoute>
  );
};

export default EditProfile;
