import React from "react";
import { IoIosMore } from "react-icons/io";

type Props = {
  type: string;
};

export default function UserCard({ type }: Props) {
  return (
    <div className="rounded-2xl flex flex-col gap-2 odd:bg-yellowPrimary odd:text-black font-sans even:bg-purplePrimary p-4 flex-1 xl:min-w-[130px] md:min-w-[200px] min-w-[150px] max-w-[250px] ">
      <div className="flex justify-between">
        <span className="font-normal bg-white px-2 py-1 rounded-full text-black">Year</span>
        <IoIosMore size={25} />
      </div>
      <div className="text-2xl font-mono font-bold" >1325</div>
      <div className="capitalise text-normal font-normal">{type}s</div>
    </div>
  );
}
