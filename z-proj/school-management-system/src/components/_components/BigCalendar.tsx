"use client";

import {
  Calendar as BigCalendar,
  momentLocalizer,
  View,
  Views,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "../constants";
import { useState } from "react";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export const Bigcalendar = () => {
  const [view, setview] = useState<View>(Views.DAY);

  const handleView = (view: View) => {
    setview(view);
  };
  return (
    <div className="h-[90vh] ">
      <BigCalendar
        style={{ height: "98%" }}
        className="text-blueprimary  no-scrollbar"
        localizer={localizer}
        startAccessor={"start"}
        events={events}
        view={view}
        views={["work_week", "day"]}
        onView={handleView}
        defaultDate={new Date()}
        popup={false}
        min={new Date(2024, 1, 0, 9, 0, 0)}
        max={new Date(2024, 1, 0, 17, 0, 0)}
      />
    </div>
  );
};
