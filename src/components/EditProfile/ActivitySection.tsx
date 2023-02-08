import { EditButton } from "./EditButton"

export const ActivitySection = () =>{
  return  <div className=" grid md:grid-cols-5 gap-16 ">
  <div className="md:col-span-3">
    <p className="text-xl text-gray-600 flex items-center justify-between col-span-2 font-medium">
      Highlights <EditButton />
    </p>
    <p className="text-sm text-gray-400">
      Share what {"you’ve"} been working on!
    </p>
  </div>
</div>
}