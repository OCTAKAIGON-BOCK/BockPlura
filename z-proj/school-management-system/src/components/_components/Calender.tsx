"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import { IoIosMore } from "react-icons/io";

const events = [
  {
    title: "Event 1",
    time: "10:00 AM- 12:00 PM",
    description: "Event 1 description",
  },
  {
    title: "Event 1",
    time: "10:00 AM- 12:00 PM",
    description: "Event 1 description",
  },
  {
    title: "Event 1",
    time: "10:00 AM- 12:00 PM",
    description: "Event 1 description",
  },
  {
    title: "Event 1",
    time: "10:00 AM- 12:00 PM",
    description: "Event 1 description",
  },
];

export function CalenderComp() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="w-full flex flex-col items-center gap-2">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border w-fit bg-blackOrBackground"
      />
      <div className="flex flex-col gap-4 sm:w-3/4 w-full  lg:p-3 px-4 sm:px-0 rounded-2xl smallresponsive:w-full">
        <div className="flex justify-between items-center px-0 lg:px-2">
          <h1 className="font-bold text-xl">Events</h1>
          <IoIosMore size={25} />
        </div>
        {events.map((event, index) => {
          return (
            <>
              <div
                className="p-4 rounded-md border-2 border-gray-800 border-t-4 odd:border-t-purplePrimary even:border-t-yellowPrimary bg-blackOrBackground"
                key={event.description}
              >
                <div className="flex items-center justify-between">
                  <h1 className="text-lg font-semibold text-gray-200">
                    {event.title}
                  </h1>
                  <span className="font-medium text-base text-gray-500">
                    {event.time}
                  </span>
                </div>
                <p className="text-gray-400">{event.description}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
