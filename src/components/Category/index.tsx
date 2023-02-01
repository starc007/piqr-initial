import React, { FC } from "react";
import ProfileCard from "@components/Card/ProfileCard";
import Link from "next/link";

interface CategoryProps {
  title: string;
}

const data = [
  {
    id: 1,
    title: "Web3 Developer | Blockchain Developer",
    name: "John Doe",
    openTo: ["Mentoring", "Collaboration", "Advising"],
    img: "https://images.unsplash.com/photo-1610398000003-8b1b0f2e1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 1,
    title: "Web3 Developer | Blockchain Developer",
    name: "John Doe",
    openTo: ["Mentoring", "Collaboration", "Advising"],
    img: "https://images.unsplash.com/photo-1610398000003-8b1b0f2e1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 1,
    title: "Web3 Developer | Blockchain Developer",
    name: "John Doe",
    openTo: ["Mentoring", "Collaboration", "Advising"],
    img: "https://images.unsplash.com/photo-1610398000003-8b1b0f2e1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
];

const Category: FC<CategoryProps> = ({ title }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between">
        <p className="text-2xl font-bold text-primary">{title}</p>
        <Link href={`/${title}`} className="flex items-center font-medium">
          <span className="mr-1">View all</span>
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.54113 0.574219L11.2822 4.38423L7.54113 8.19424M0.804688 4.38423H11.1774"
              stroke="#544F87"
              stroke-width="0.952503"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 mt-4">
        {data.map((item) => (
          <ProfileCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
