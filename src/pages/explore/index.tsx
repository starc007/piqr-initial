import React from "react";
import PrivateRoute from "@routes/PrivateRoute";
import Category from "@components/Category";

const Explore = () => {
  return (
    <PrivateRoute>
      <div className="flex h-screen">
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
            <Category title="Developers" />
          </div>
        </div>
        {/* <div className="w-1/3 border"></div> */}
      </div>
    </PrivateRoute>
  );
};

export default Explore;
