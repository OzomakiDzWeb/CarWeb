import { Menu } from "@headlessui/react";
import React, { useState } from "react";
import { FaClock } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
const hours = ["18", "34", "554"];
const HoursSection = () => {
  const [hour, sethours] = useState("10:00 Am");
  return (
    <Menu as="div" className="w-full items-center h-full flex xl:flex-row">
      <div className="relative flex-1">
        <Menu.Button className="dropdown-btn w-full flex flex-col justify-center items-center xl:items-start xl:pl-8 ">
          <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-">
            <FaClock className="text-accent" />
            <div className="text-[15px] uppercase font-bold">Select Hours</div>
          </div>
          <div className="uppercase flex gap-x-3 items-center font-medium text-[13px] text-secondry text-center xl:text-left">
            <div>{hour}</div>
            <FaArrowRightLong className="text-accent text-[12px] xl:ml-6" />
            <div>18</div>
          </div>
        </Menu.Button>
        <Menu.Items className="dropdown-menu shadow-lg absolute -top-96 xl:top-[90px]  left-1/2 xl:left-0 z-50 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px]">
          {hours.map((hour, index) => {
            return (
              <div
                onClick={() => sethours(hour)}
                key={index}
                className="cursor-pointer py-4 text-center hover:bg-gray-50"
              >
                {hour}
              </div>
            );
          })}
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default HoursSection;
