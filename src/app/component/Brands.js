'use client'
import Image from "next/image"
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "/variants";

const Brands = () => {
  return (
    <section className="xl:pt-20 mt-10 xl:h-[200px] bg-white flex flex-col justify-center">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-1 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between ">
          <div>
            <Image
              src={"icons/brands/ford.svg"}
              width={85}
              height={32}
              alt=""
              Image
            />
          </div>
          <div>
            <Image
              src={"icons/brands/mercedes.svg"}
              width={85}
              height={32}
              alt=""
              Image
            />
          </div>{" "}
          <div>
            <Image
              src={"icons/brands/bmw.svg"}
              width={85}
              height={32}
              alt=""
              Image
            />
          </div>{" "}
          <div>
            <Image
              src={"icons/brands/vw.svg"}
              width={85}
              height={32}
              alt=""
              Image
            />
          </div>
          <div>
            <Image
              src={"icons/brands/skoda.svg"}
              width={85}
              height={32}
              alt=""
              Image
            />
          </div>
          <div>
            <Image
              src={"icons/brands/mazda.svg"}
              width={85}
              height={32}
              alt=""
              Image
            />
          </div>{" "}
          <div>
            <Image
              src={"icons/brands/audi.svg"}
              width={85}
              height={32}
              alt=""
              Image
            />
          </div>
          <div>
            <Image
              src={"icons/brands/ford.svg"}
              width={85}
              height={32}
              alt=""
              Image
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Brands