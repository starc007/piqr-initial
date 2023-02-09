import { EditButton } from "./EditButton"

/*
  TODO : 
  1. [] Create Input section 
  2. Show recent activity

  ACTIVITY TYPE {
    title: string 
    description: string 
    tags:string 
    collaborators:string 
    date:string
  }
*/

export const ActivitySection = () =>{
  return <div className="md:col-span-3">
    <p className="text-xl text-gray-600 flex items-center justify-between col-span-2 font-medium">
      Highlights <EditButton />
    </p>
    <p className="text-sm text-gray-400">
      Share what {"you’ve"} been working on!
    </p>
  </div>
}