import AcademicIcon from "@components/Icons/AcademicIcon";
import StarIcon from "@components/Icons/StarIcon";
import SuitcaseIcon from "@components/Icons/SuitcaseIcon";
import TargetIcon from "@components/Icons/TargetIcon";

interface TimelineItemProps {
  dateFrom: string;
  dateTo: string;
  title: string;
  subtitle: string;
  description: string;
  type: "Education" | "Goal" | "Position" | "Others";
  withBorder?:boolean
}

const subtitleColor = {
  Education: "text-[#4E42C6]",
  Goal: "text-[#4FC971]",
  Position: "text-[#46C1F6]",
  Others: "text-[#FFB240]",
};

const renderIcon = {
  Education: <AcademicIcon/>,
  Goal:<TargetIcon/>,
  Position:<SuitcaseIcon />,
  Others: <StarIcon/>
}

const TimelineItem = ({
  dateFrom,
  dateTo,
  title,
  subtitle,
  description,
  type,
  withBorder=true
}: TimelineItemProps) => {
  return (
    <div className={`${withBorder && " border-l border-gray-300 border-dashed "} relative ml-8  pl-8 pb-8 border-dashed`}> 
      <div className="text-secondary font-medium">
        {dateFrom} - {dateTo}{" "}
      </div>
      <div className="text-2xl font-medium mb-4">{title}</div>

      <div className={`${subtitleColor[type]} mb-1 font-medium`}>{subtitle}</div>
      <p className="text-gray-500 mb-8 ">{description}</p>
      <hr />
      <div className="absolute bg-white rounded-full  p-2 left-0 top-2 -translate-x-[50%]">
      {renderIcon[type]}
      </div>
    </div>
  );
};
export default TimelineItem;
