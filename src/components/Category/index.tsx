import React, { FC } from "react";
import ProfileCard from "@components/Card/ProfileCard";
import { ProfileResponse } from "src/pages/explore";

interface CategoryProps {
  users: ProfileResponse[];
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
    id: 2,
    title: "Web3 Developer | Blockchain Developer",
    name: "John Doe",
    openTo: ["Mentoring", "Collaboration", "Advising"],
    img: "https://images.unsplash.com/photo-1610398000003-8b1b0f2e1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 3,
    title: "Web3 Developer | Blockchain Developer",
    name: "John Doe",
    openTo: ["Mentoring", "Collaboration", "Advising"],
    img: "https://images.unsplash.com/photo-1610398000003-8b1b0f2e1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
];

const Category: FC<CategoryProps> = ({ users }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-5 mt-4">
      {users.map((item) => (
        <ProfileCard key={item._id} {...item} />
      ))}
    </div>
  );
};

export default Category;
