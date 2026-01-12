"use client";
import { BsArrowDownRight } from "react-icons/bs";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Senior Frontend / React Development",
    description:
      "Designing and building scalable, high-performance user interfaces using modern React.",
    href: "",
  },
  {
    num: "02",
    title: "Full-Stack Web Development",
    description:
      "Delivering end-to-end web solutions by handling both frontend and backend.",
    href: "",
  },
  {
    num: "03",
    title: "Backend Development",
    description:
      "Building reliable and secure backend systems to support web applications.",
    href: "",
  },
  {
    num: "04",
    title: "End-to-End (E2E) Testing",
    description:
      "Ensuring application reliability through comprehensive automated testing.",
    href: "",
  },
  {
    num: "04",
    title: "Data Management & Integration",
    description: "Handling application data efficiently and securely.",
    href: "",
  },
  {
    num: "04",
    title: "Code Quality & Maintenance",
    description: "Improving and maintaining existing codebases.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:[-webkit-text-stroke:1px_#FA8146] transition-all duration-500">
                    {service.num}
                  </div>
                  {/* <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link> */}
                </div>
                {/* title */}
                <h5 className="text-[25px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h5>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
