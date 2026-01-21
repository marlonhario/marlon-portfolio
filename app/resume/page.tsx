"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { about, education, experience, skills } from "@/data/data";

const Resume = () => {
  return (
    <motion.div className="min-h-[80vh] flex py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">
              Professional Experience
            </TabsTrigger>
            <TabsTrigger value="education">Academic Background</TabsTrigger>
            <TabsTrigger value="skills">Technical Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-fit w-full">
            {/* Professional Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[1500px] text-white/60 mx-auto xl:mx-0 whitespace-pre-line">
                  {experience.description}
                </p>
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329]  py-6 px-10 rounded-xl flex flex-col justify-center items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <div className="mb-5">
                            <h3 className="text-left">
                              {item.position} at {item.company}
                            </h3>
                            <p className="text-white/60 text-left">
                              {item.project}
                            </p>
                            {item.url && <Link href={item.url}>
                              <p className="text-left">{item.url}</p>
                            </Link>}
                          </div>
                          <div className="flex gap-3 flex-col">
                            {item.responsibilities?.map((work, index) => (
                              <div
                                className="flex justify-start items-start"
                                key={index}
                              >
                                <span className="w-[6px] h-[6px] rounded-full bg-accent mt-1 mr-3"></span>
                                <p className="text-white/60 leading-5 text-left">
                                  {work}
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className="flex mt-5 flex-col">
                            <p className="text-accent leading-6 text-left">
                              {item.techs}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Academic Background */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span> */}
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Technical Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="sm:h-[350px] h-[500px] md:h-[600px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group flex-col">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                                <span className="text-white/60">
                                  {skill.name}
                                </span>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-start justify-start gap-4"
                      >
                        <span className="text-white/60 text-left">{item.fieldName}:</span>
                        <span className="text-xl text-left">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
