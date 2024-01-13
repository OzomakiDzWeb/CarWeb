"use client";

import { useContext } from "react";
import { SearchContext } from "../contsxt/search";
import LocationSelection from "./LocationSelection";
import DateSection from "./DateSection";
import HoursSection from "./HoursSection";

const Search = () => {
  const { setsearchActiv, searchActive } = useContext(SearchContext);
  return (
    <div
      className={`${
        setsearchActiv
          ? "bg-white rounded-[20px] xl:h-[80px] "
          : "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px] "
      } hidden xl:block w-full relative shadow-lg`}
    >
      <div
        className={`flex flex-row px-5 items-center h-full   ${
          searchActive && "container mx-auto"
        }`}
      >
        <LocationSelection />
        <DateSection />
        <HoursSection />
        <div className="xl:h-full flex items-center px-6 xl:px-0">
          <button
            className={`${
              searchActive
                ? "btn btn-sm btn-accent xl:w-[164px]"
                : "btn btn-sm btn-accent xl:w-[164px]"
            }`}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
