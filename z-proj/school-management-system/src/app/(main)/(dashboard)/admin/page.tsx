import { AttendanceChart } from "@/components/_components/AttendanceChart";
import { CalenderComp } from "@/components/_components/Calender";
import { FinanceChart } from "@/components/_components/FinanceChart";
import { RadialChart } from "@/components/_components/RadialChart";
import UserCard from "@/components/_components/UserCard";
import React from "react";

type Props = {};

export default function Admin({}: Props) {
  return (
    <div className="absolute w-full flex gap-2 flex-col smallresponsive:flex-row h-[100vh] md:px-5 smallresponsive:p-0 ">
      <div className="relative p-4 h-[120vh] left w-full smallresponsive:w-[65%] flex flex-col items-center gap-2 smallresponsive:h-screen smallresponsive:overflow-y-auto no-scrollbar transition-all ">
        <div className="xl:w-full lg:w-[85%] grid gap-4  xl:grid-cols-4 md:grid-cols-2 grid-cols-2 w-[85%]">
          <UserCard type={"student"} />
          <UserCard type={"teacher"} />
          <UserCard type={"parent"} />
          <UserCard type={"staff"} />
        </div>
        <div className="flex gap-4 w-full  flex-col responsive:flex-row items-center mt-8 h-fit max-w-full">
          <div className="w-full min-w-fit max-w-full md:w-2/3 smallresponsive:w-full responsive:w-1/3 lg:w-2/3 rounded-xl responsive:h-[380px]">
            <RadialChart />
          </div>
          <div className="w-full max-w-full responsive:w-2/3 lg:w-full min-h-fit rounded-xl responsive:h-[380px]">
            <AttendanceChart />
          </div>
        </div>
        <div className="w-full">
          <FinanceChart />
        </div>
      </div>
      <div className="right h-screen  bg-background relative py-4 md:px-3 px-0  w-full smallresponsive:w-[35%] smallresponsive:h-screen smallresponsive:overflow-y-auto no-scrollbar transition-all ">
        <CalenderComp />
        {/* <Notifications></Notifications> */}
      </div>
    </div>
  );
}
