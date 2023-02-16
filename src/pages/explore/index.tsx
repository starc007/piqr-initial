import React, { useEffect, useMemo, useState } from "react";
import PrivateRoute from "@routes/PrivateRoute";
import Category from "@components/Category";
import { API } from "@api/index";
import { SKILL_CATEGORIES } from "src/constants";
import Loader from "@components/Loader";

export type ProfileResponse = {
  _id: string;
  user: {
    _id: string;
    role: string;
  };
  avatar: string;
  username: string;
  bio: string;
  name: string;
  availableFor: string[];
  skills: string[];
};
const Explore = () => {
  const [users, setUsers] = useState<ProfileResponse[]>([]);
  const [category, setCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (users?.length === 0) {
      setLoading(true);
      API.get("/user/all").then((res) => {
        setUsers(res?.data?.users);
        setLoading(false);
      });
    }
  }, []);

  return (
    <PrivateRoute>
      <div className="flex h-screen justify-center">
        <div className="lg:w-2/3 w-full flex flex-col py-6">
          <div className=" w-full rounded-lg bg-gray-100 flex flex-col sm:px-8 sm:py-10 py-6 px-4">
            <p className="sm:text-4xl text-3xl font-extrabold text-primary max-w-lg leading-slug">
              Discover best talent to collaborate
            </p>
            <p className="mt-4 text-gray-500 max-w-lg sm:text-base text-sm">
              Find best people to work with, and build your team with the best
              of the best in the industry.
            </p>
          </div>
          <div className="flex flex-col space-y-4 mt-6">

            {loading ? <Loader col="text-black"/> : (
              <>
                <div className="flex items-center gap-4 flex-wrap">
                  <button
                    onClick={() => setCategory("")}
                    className={`tag__simple ${
                      category === "" && "text-secondary border-secondary"
                    }`}
                  >
                    All
                  </button>
                  {SKILL_CATEGORIES?.map((item) => (
                    <button
                      onClick={() => setCategory(item)}
                      key={`category-${item}`}
                      className={`tag__simple ${
                        category === item && "text-secondary border-secondary"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <Category
                  users={
                    category
                      ? users?.filter((item) =>
                          item?.skills?.includes(category)
                        )
                      : users
                  }
                />
              </>
            )}
          </div>
        </div>
        {/* <div className="w-1/3 border"></div> */}
      </div>
    </PrivateRoute>
  );
};

export default Explore;
