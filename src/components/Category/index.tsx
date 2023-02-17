import React, { FC } from "react";
import ProfileCard from "@components/Card/ProfileCard";
import { ProfileResponse } from "src/pages/explore";

interface CategoryProps {
  users: ProfileResponse[];
}

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
