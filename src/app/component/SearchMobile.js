import HoursSection from "./HoursSection";
import DateSection from "./DateSection";
import LocationSelection from "./LocationSelection";

const SearchMobile = () => {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-4">
          <LocationSelection />
          <DateSection />
          <HoursSection />
          <div className="flex flex-col items-center px-6">
            <button className="btn btn-sm btn-accent w-[164px] mx-auto">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
