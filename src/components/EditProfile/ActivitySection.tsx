import { useState } from "react";
import { EditButton } from "./EditButton";
import Input, { TextArea } from "@components/UI/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { ActivityItem, ActivityItemResponse } from "@store/action/actions.types";
import { TagsInput } from "react-tag-input-component";
import Button from "@components/UI/Button";
import { useAuthStore } from "@store/index";
import moment from "moment";

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

export const ActivityPostItem = ({data}:{data:ActivityItemResponse}) => {
  return <div className="border p-4 rounded">
    <p className="text-xl font-semibold">{data?.title}</p>
    <div className="text-sm text-gray-400">{moment(data.date).format("LL")}</div>
    <p className="text-gray-600 ">{data?.description}</p>
    <hr className="my-2" />
    <div className="flex flex-wrap gap-2">
      {data?.tags.map((item,key)=>(<div className="bg-gray-100 px-2 py-1 rounded-md text-sm" key={key}>{item}</div>))}
    </div>
  </div>
}

export const ActivitySection = () => {
  const [createMode, setCreateMode] = useState<boolean>(false);
  const { register,reset,handleSubmit } = useForm<ActivityItem>();
  const labelStyle =
    "text-sm font-semibold text-gray-400 focus-within:text-gray-500 flex flex-col gap-1";
  const inputStyle = "p-2 !border-gray-300";
  const [tags, setTags] = useState<string[]>([]);
  const [collaborators, setCollaborators] = useState<string[]>([]);
  const [submitting,setSubmitting] = useState<boolean>(false)
  const {addActivity,activityList} = useAuthStore(state=>({addActivity:state.addActivity,activityList:state?.user?.activities}))
  
  const handlePostActivity:SubmitHandler<ActivityItem> = async (data) =>{
    setSubmitting(true)
    await addActivity({...data,tags,collaborators})
    reset()
    setSubmitting(false)
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
        <form onSubmit={handleSubmit(handlePostActivity)} className="border sadow-sm p-4 rounded-md mt-4 grid gap-4">
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
            {/* TODO: replace this with tag input */}
            <div>
              <TagsInput
                classNames={{ tag: "!pl-3 text-gray-600", input: "!w-full" }}
                value={tags}
                onChange={setTags}
                name="tags"
                placeHolder="Enter tags "
                disabled={submitting}
              />
            </div>
          </label>
          <label className={labelStyle} htmlFor="collaborators">
            Collaborators
            {/* TODO: replace this with tag input */}
            <TagsInput
                classNames={{ tag: "!pl-3 text-gray-600", input: "!w-full" }}
                value={collaborators}
                onChange={setCollaborators}
                name="collaborators"
                placeHolder="Enter collaborators "
                disabled={submitting}
              />
          </label>
          <label className={labelStyle} htmlFor="date">
            Date
            {/* TODO: replace this with tag input */}
            <Input
              type="date"
              {...register("date")}
              id="date"
              required
              cls={inputStyle}
              
              disabled={submitting}
            />
          </label>
            
          <div >
          <Button isLoading={submitting} cls=" px-16 h-14 bg-primary text-white rounded-md  font-semibold">
            Post
          </Button>
          </div>
        </form>
      )}
      {/* Show recent activity */}
      <div className="grid mt-4 gap-4">

      {activityList?.map((item,id)=>(
        <ActivityPostItem data={item} key={item?._id}/>
        ))}
        </div>
    </div>
  );
};
