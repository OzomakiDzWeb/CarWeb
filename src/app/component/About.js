"use client";

import Image from "next/image";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from "react-icons/md";

const About = () => {
  const [ref, usenView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section flex items-center " id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <div>
            <Image
              className="rounded-[20px]"
              src={"/images/about/car01.png"}
              width={600}
              height={448}
              alt=""
            />
          </div>
          <div>
            <div>
              <h2>Car services simplified</h2>
              <p>
                Rent,choose,and repair with ease.Our convenient location,diverse
                car type ,and reliable pionts a seamless car experience
              </p>
              {/*star*/}
              <div>
                {/*car types  */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent" />
                  <div className="text-3xl font-black mb-2">
                    {usenView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondry">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
