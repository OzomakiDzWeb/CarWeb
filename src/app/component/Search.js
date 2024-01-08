"use client";

import { useContext } from "react";
import { SearchContext } from "../contsxt/search";
import LocationSelection from "./LocationSelection";

const Search = () => {
  const { setsearchActiv } = useContext(SearchContext);
  return (
    <div
      className={`${
        setsearchActiv
          ? "bg-white rounded-[20px] xl:h-[80px]"
          : "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]"
      } hidden xl:block w-full relative shadow-lg`}
    >
      <div className="xl:h-full flex items-center px-6 xl:px-0">
        <LocationSelection />
      </div>
    </div>
  );
};

export default Search;
