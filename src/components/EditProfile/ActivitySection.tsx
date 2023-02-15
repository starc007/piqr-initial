import { useState } from "react";
import { EditButton } from "./EditButton";
import Input, { TextArea } from "@components/UI/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  ActivityItem,
  ActivityItemResponse,
} from "@store/action/actions.types";
import Button from "@components/UI/Button";
import { useAuthStore } from "@store/index";
import moment from "moment";
import { FiX } from "react-icons/fi";
import { toast } from "react-hot-toast";
import CollaboratorsInput, { UserListResponse } from "./CollaboratorsInput";

/*
  TODO : 
  1. [✅] Create Input section 
  2. [] Show recent activity
      [] Create Activity Item

  ACTIVITY TYPE {
    title: string 
    description: string 
    tags:string 
    collaborators:string 
    date:string
  }

*/

type ActivityPostProps = {
  data:ActivityItemResponse,
  deleteCallback: (is:string) => Promise<void>
}
export const ActivityPostItem = ({ data,deleteCallback }: ActivityPostProps) => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  
  console.log("activity",data)
  
  return (
    <div className="border group relative p-4 rounded">
      <p className="text-xl font-semibold">{data?.title}</p>
      <div className="text-sm text-gray-400">
        {moment(data.date).format("LL")}
      </div>
      <p className="text-gray-600 ">{data?.description}</p>

      <Button
        isLoading={submitting}
        onClick={() => toast.promise(deleteCallback(data?._id),{
          loading:"Deleting Post",
          success: "Post deleted successfully",
          error:"Something went wrong"
        })}
        cls="scale-0 absolute top-4 right-4 group-hover:scale-100 bg-red-500 duration-200 rounded-md  text-white "
      >
        <FiX className="h-6 w-6 m-1 " />
      </Button>
      <hr className="my-2" />
      <div className="flex flex-wrap gap-2">
        {data?.tags.map((item, key) => (
          <div className="bg-gray-100 px-2 py-1 rounded-md text-sm" key={key}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export const ActivitySection = () => {
  const [createMode, setCreateMode] = useState<boolean>(false);
  const { register, reset, handleSubmit } = useForm<ActivityItem>();
  const labelStyle =
    "text-sm font-semibold text-gray-400 focus-within:text-gray-500 flex flex-col gap-1";
  const inputStyle = "p-2 !border-gray-300";
  const [tags, setTags] = useState<string[]>([]);
  const [collaborators, setCollaborators] = useState<UserListResponse[]>([]);
  const [submitting, setSubmitting] = useState<boolean>(false);
  
  const { addActivity, activityList,deleteActivity } = useAuthStore((state) => ({
    addActivity: state.addActivity,
    activityList: state?.user?.activities,
    deleteActivity:state?.deleteActivity
  }));

  const handlePostActivity: SubmitHandler<ActivityItem> = async (data) => {
    setSubmitting(true);
    // TODO : Add collaborators id
    const collaboratorsIds = collaborators.map((item)=>item?._id)
    await addActivity({ ...data, tags,collaborators:collaboratorsIds });
    reset();
    setTags([])
    setCollaborators([])
    setCreateMode(false)
    setSubmitting(false);
  };

  const removeCollaborator = (id:string)=>{
    setCollaborators(state => state.filter(it=>it._id !== id))
  }

  return (
    <div className="md:col-span-3">
      <p className="text-xl text-gray-600 flex items-center justify-between col-span-2 font-medium">
        Highlights{" "}
        <EditButton onClick={() => setCreateMode((state) => !state)} />
      </p>
      <p className="text-sm text-gray-400">
        Share what {"you’ve"} been working on!
      </p>
      {/* Create new activiy section */}
      {createMode && (
        <form
          onSubmit={handleSubmit(handlePostActivity)}
          className="border sadow-sm p-4 rounded-md mt-4 grid gap-4"
        >
          <p className="font-semibold text-gray-600">Post new activity</p>
          <label className={labelStyle} htmlFor="title">
            Title
            <Input
              {...register("title")}
              id="title"
              required
              cls={inputStyle}
              disabled={submitting}
            />
          </label>
          <label className={labelStyle} htmlFor="description">
            Description
            <TextArea
              {...register("description")}
              id="description"
              cls={inputStyle}
              disabled={submitting}
            />
          </label>
          <label className={labelStyle} htmlFor="tags">
            Tags
          </label>
          <label className={labelStyle} htmlFor="collaborators">
            Collaborators
            <div className="flex flex-wrap gap-1">
            {collaborators?.map((item)=>(
               <div key={item?._id} className="flex items-center gap-2 bg-secondary/10 text-sm py-1 pl-2 pr-1 text-secondary font-medium rounded-full">{item?.username}
               <button type="button" onClick={()=>removeCollaborator(item?._id)} className="bg-secondary/20 rounded-full p-1"> <FiX/> </button></div> 
             ))} 
          </div>
            <CollaboratorsInput collaborators={collaborators} setCollaborators={setCollaborators}  />
          </label>
          
          <label className={labelStyle} htmlFor="date">
            Date
            <Input
              type="date"
              {...register("date")}
              id="date"
              required
              cls={inputStyle}
              disabled={submitting}
            />
          </label>
          <div>
            <Button
              isLoading={submitting}
              cls=" px-16 h-14 bg-primary text-white rounded-md  font-semibold"
            >
              Post
            </Button>
          </div>
        </form>
      )}
      {/* Show recent activity */}
      <div className="grid mt-4 gap-4">
        {activityList?.map((item, id) => (
          <ActivityPostItem data={item} key={item?._id} deleteCallback={deleteActivity} />
        ))}
      </div>
    </div>
  );
};
