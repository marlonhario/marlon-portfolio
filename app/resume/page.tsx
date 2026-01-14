"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiSass,
  SiStyledcomponents,
  SiShadcnui,
  SiRedux,
  SiReactquery,
  SiEslint,
  SiPrettier,
  SiVite,
  SiStripe,
  SiAuth0,
  SiJsonwebtokens,
  SiVercel,
  SiJest,
  SiTestinglibrary,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiBootstrap,
  SiLaravel,
  SiExpress,
  SiGraphql,
  SiApollographql,
  SiSocketdotio,
  SiAxios,
  SiPostman,
  SiTypescript,
  SiXampp,
  SiSublimetext,
  SiNotepadplusplus,
  SiGit,
} from "react-icons/si";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const about = {
  title: "About Me",
  description:
    "Lorem Ipsum when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Marlon Hario",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+40) 321 654 678",
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ years",
    },
    {
      fieldName: "Skype",
      fieldValue: "oirah83",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Filipino",
    },
    {
      fieldName: "Email",
      fieldValue: "hariomarlon83@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Tagalog, Visaya",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I am a Senior React Developer with strong experience building scalable, high-performance web applications using React, Next.js, and TypeScript. I focus on clean, maintainable code with an emphasis on performance, accessibility, and user experience, while also working comfortably across the stack on backend logic, APIs, and data management. I prioritize application quality through end-to-end testing and enjoy tackling complex systems, improving existing codebases, and collaborating with teams to turn business requirements into reliable, production-ready solutions.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academey",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2017 - 2018",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem Ipsum when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design",
      duration: "2016 - 2018",
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2014 - 2016",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "",
  skillList: [
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiAuth0 />,
      name: "Auth0",
    },
    {
      icon: <SiJsonwebtokens />,
      name: "JWT",
    },
    {
      icon: <SiStripe />,
      name: "Stripe",
    },
    {
      icon: <SiRedux />,
      name: "Redux / Redux Toolkit",
    },
    {
      icon: <SiReactquery />,
      name: "anStack React Query",
    },
    {
      icon: <SiShadcnui />,
      name: "shadcn/ui",
    },
    {
      icon: <SiVercel />,
      name: "Vercel",
    },
    {
      icon: <SiGit />,
      name: "Git",
    },
    {
      icon: <SiJest />,
      name: "Jest",
    },
    {
      icon: <SiTestinglibrary />,
      name: "Testing Library",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiSqlite />,
      name: "SQLite",
    },
    {
      icon: <SiGraphql />,
      name: "GraphQL",
    },
    {
      icon: <SiApollographql />,
      name: "Apollo",
    },
    {
      icon: <SiVite />,
      name: "SiVite",
    },
    {
      icon: <SiSocketdotio />,
      name: "Socket.IO",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
    {
      icon: <SiAxios />,
      name: "Axios",
    },
    {
      icon: <SiEslint />,
      name: "ESLint",
    },
    {
      icon: <SiPrettier />,
      name: "Prettier",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <SiSass />,
      name: "Sass / SCSS",
    },
    {
      icon: <SiStyledcomponents />,
      name: "styled-components",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiPhp />,
      name: "PHP",
    },
    {
      icon: <SiLaravel />,
      name: "Laravel",
    },
    {
      icon: <SiXampp />,
      name: "XAMPP",
    },
    {
      icon: <SiSublimetext />,
      name: "Sublime Text",
    },
    {
      icon: <SiNotepadplusplus />,
      name: "Notepad++",
    },
    // {
    //   icon: <SiAndroidstudio />,
    //   name: "Android Studio (Emulator)",
    // },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex py-12 xl:py-0"
    >
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

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[1500px] text-white/60 mx-auto xl:mx-0 whitespace-pre-line">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="sm:h-[350px] h-[500px]">
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

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-start justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
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
