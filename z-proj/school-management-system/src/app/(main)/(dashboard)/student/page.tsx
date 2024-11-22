import {Bigcalendar} from "@/components/_components/BigCalendar";
import { CalenderComp } from "@/components/_components/Calender";
import React from "react";
import "./calendar.css";

type Props = {};

export default function Student({}: Props) {
  return (
    <div className="absolute w-full flex gap-2 flex-col smallresponsive:flex-row h-[100vh] md:px-5 smallresponsive:p-0">
      <div className="relative p-4 h-[120vh] left w-full smallresponsive:w-[65%] flex flex-col  gap-2 smallresponsive:h-screen smallresponsive:overflow-y-auto no-scrollbar transition-all ">
        <div className="h-full p-4 rounded-md">
          <h1 className="text-xl">Schedule (class)</h1>
          <Bigcalendar />
        </div>
      </div>
      <div className="right h-screen  bg-background relative py-4 md:px-3 px-0  w-full smallresponsive:w-[35%] smallresponsive:h-screen smallresponsive:overflow-y-auto no-scrollbar transition-all ">
        <CalenderComp />
        {/* <Notifications></Notifications> */}
      </div>
    </div>
  );
}
