import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "/variants";
const cars = [
  {
    type: "Hatchabck",
    name: "ford Focus",
    price: 29,
    stars: 3.5,
    image: "images/carSlider/car01.svg",
    info: [
      { icon: "icons/carSlider/gearshift.svg", text: "Manual" },
      { icon: "icons/carSlider/seat.svg", text: "5 Seats" },
      { icon: "icons/carSlider/gas.svg", text: "Gas" },
      { icon: "icons/carSlider/engine.svg", text: "1600HP" },
      { icon: "icons/carSlider/wheel.svg", text: "Front" },
      { icon: "icons/carSlider/gearshift.svg", text: "Manual" },
    ],
  },
  {
    type: "Sedan",
    name: "Toyota Corolla",
    price: 29,
    stars: 3.5,
    image: "images/carSlider/car02.svg",
    info: [
      { icon: "icons/carSlider/gearshift.svg", text: "Manual" },
      { icon: "icons/carSlider/seat.svg", text: "5 Seats" },
      { icon: "icons/carSlider/gas.svg", text: "Gas" },
      { icon: "icons/carSlider/engine.svg", text: "1600HP" },
      { icon: "icons/carSlider/wheel.svg", text: "Front" },
      { icon: "icons/carSlider/gearshift.svg", text: "Manual" },
    ],
  },
  {
    type: "SUV",
    name: "Honda CR-V",
    price: 35,
    stars: 4.5,
    image: "images/carSlider/car03.svg",
    info: [
      { icon: "icons/carSlider/gearshift.svg", text: "Automatic" },
      { icon: "icons/carSlider/seat.svg", text: "5 Seats" },
      { icon: "icons/carSlider/gas.svg", text: "Gas" },
      { icon: "icons/carSlider/engine.svg", text: "1600HP" },
      { icon: "icons/carSlider/wheel.svg", text: "Front" },
      { icon: "icons/carSlider/gearshift.svg", text: "Manual" },
    ],
  },
  {
    type: "Convertible",
    name: "Mazda Mx-5",
    price: 35,
    stars: 4.5,
    image: "images/carSlider/car03.svg",
    info: [
      { icon: "icons/carSlider/gearshift.svg", text: "Automatic" },
      { icon: "icons/carSlider/seat.svg", text: "5 Seats" },
      { icon: "icons/carSlider/gas.svg", text: "Gas" },
      { icon: "icons/carSlider/engine.svg", text: "1600HP" },
      { icon: "icons/carSlider/wheel.svg", text: "Front" },
      { icon: "icons/carSlider/gearshift.svg", text: "Manual" },
    ],
  },
];
const CarSlider = () => {
  return (
       <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
             className="container mx-auto">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {cars.map((car, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="max-w-[385px] mx-auto sm:mx">
                <Image src={car.image} width={380} height={284} alt="d" />
                <div className="flex justify-between">
                  <div>
                    <div className="text-[13px] text-secondry uppercase">
                      {car.type}
                    </div>
                    <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                    <h3 className="mb-10 text-accent font-semibold uppercase">
                      {car.price}/day
                    </h3>
                  </div>
                </div>
                <div className="flex gap-x-2 text-accent h-max">
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                  {car.info.map((itm, idx) => {
                    return (
                      <div key={idx}>
                        <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2">
                          <Image src={itm.icon} width={24} height={24} alt="" />
                        </div>
                        <div className="text-[12px]  uppercase">{itm.text}</div>
                      </div>
                    );
                  })}
                </div>
                <button className="btn btn-accent btn-lg">See details</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default CarSlider;
