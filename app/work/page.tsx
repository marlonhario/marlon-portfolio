"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/data";

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlidecChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.section className="min-h-[80vh] flex flex-col pt-6 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <Button variant="outline" className="rounded-full">
                    Live Demo
                  </Button>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
              <div className="gap-2 flex flex-col">
                <h2 className="text-[30px] font-bold leading-9 text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.title}
                </h2>
                <h2 className="text-[20px] font-bold leading-none text-white/50 group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category}
                </h2>
              </div>
              <p className="text-white/60">{project.description}</p>

              <div>
                <p className="text-white/60 mb-3">Tech Stack :</p>
                <ul className="flex gap-4 flex-wrap leading-3">
                  {project.stack.map((Item, index) => {
                    return (
                      <li key={index} className="text-accent">
                        {Item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlidecChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <video
                        className="block w-full h-auto"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={project.image}
                        controls
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* sllider button */}
              <WorkSliderBtns />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
