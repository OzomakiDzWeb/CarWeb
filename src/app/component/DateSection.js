import { Menu } from "@headlessui/react";
import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import { DateRange } from "react-date-range";
import { format, addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
const locations = ["skikda,Algeria", "gulma,Algeria", "batna,Algeria"];

const DateSection = () => {
  const [location, setlocation] = useState("select location");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        <Menu.Button className="dropdown-btn w-full flex flex-col justify-center items-center xl:items-start xl:pl-8 ">
          <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-">
            <FaCalendarAlt className="text-accent" />
            <div className="text-[15px] uppercase font-bold">Select Date</div>
          </div>
          <div className="flex items-center gap-x-3 xl:">
            <div>{format(date[0].startDate, "dd/MM/yyy")}</div>
            <FaArrowRightLong className="text-accent text-[12px] xl:ml-6" />
            <div>
              {date[0].endDate ? (
                <div>{format(date[0].endDate, "dd/MM/yyyy")}</div>
              ) : (
                <div>{format(date[0].startDate, "dd/MM/yyyy")}</div>
              )}
            </div>
          </div>
        </Menu.Button>
        <Menu.Items className="dropdown-menu shadow-lg absolute -top-96 xl:top-[90px]  left-1/2 xl:left-0 z-50 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px] overflow-hidden">
          <DateRange
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={date}
            rangeColors={["#ed1d24"]}
            minDate={addDays(new Date(), 0)}
            onChange={(itm) => setDate([itm.selection])}
          />
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default DateSection;
