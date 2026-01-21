"use client";

import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FormState, submitContactForm } from "./actions";
import { services as servicesCategory } from "@/data/data";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Mobile",
    description: "0968 740 5360",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hariomarlon83@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Blk 23, Lot 6 3rd st.Villa Magsanoc Sbd, Tagum City, Davao del Norte, 8100",
  },
];

const Contact = () => {
  const [currentState, formAction, isPending] = useActionState<
    FormState,
    FormData
  >(submitContactForm, {});
  const [service, setService] = useState("");

  return (
    <motion.section className="py-6 2xl:pb-24">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              action={formAction}
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Have a project in mind? Let’s talk and build something great together.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="First name" />
                <Input type="text" name="lastname" placeholder="Last name" />
                <Input type="email" name="email" placeholder="Email address" />
                <Input type="text" name="phone" placeholder="Phone number" />
              </div>

              <input type="hidden" name="service" value={service} />
              <Select onValueChange={setService}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    {servicesCategory.map((item) => (
                      <SelectItem key={item.title} value={item.title}>
                        {item.title}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here"
              />

              <Button
                type="submit"
                disabled={isPending}
                variant={"outline"}
                className="max-w-40"
              >
                {isPending ? "Submitting..." : "Send message"}
              </Button>

              {currentState.success && currentState.message && (
                <p className="text-center text-sm text-accent">
                  {currentState.message}
                </p>
              )}

              {currentState.error && (
                <p className="text-center text-sm text-red-600">
                  {currentState.error}
                </p>
              )}
            </form>
          </div>

          <div className="flex-1 flex  xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
