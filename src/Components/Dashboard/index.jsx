import React from "react";
import Layouts from "../../Layouts";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "../Dashboard/calenderStyle.css";

function Dashboard() {
  const localizer = momentLocalizer(moment);

  const CustomToolbar = ({ label, onNavigate, onView }) => {
    return (
      <div className="rbc-toolbar mt-5 px-4 py-5">
        <span className="rbc-btn-group">
          <button type="button" onClick={() => onNavigate("PREV")}>
            Back
          </button>
          <button type="button" onClick={() => onNavigate("TODAY")}>
            Today
          </button>
          <button type="button" onClick={() => onNavigate("NEXT")}>
            Next
          </button>
        </span>
        <span className="rbc-toolbar-label">{label}</span>
        <span className="rbc-btn-group">
          <button type="button" onClick={() => onView("month")}>
            Month
          </button>
          <button type="button" onClick={() => onView("week")}>
            Week
          </button>
          <button type="button" onClick={() => onView("day")}>
            Day
          </button>
          <button type="button" onClick={() => onView("agenda")}>
            Agenda
          </button>
        </span>
      </div>
    );
  };

  return (
    <Layouts>
      <div className="bglg rounded-md h-full p-4">
        <div className="bg-white overflow-y-scroll p-5 rounded-md h-[550px] ">
          <Calendar
            className=""
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            components={{
              toolbar: CustomToolbar,
            }}
            style={{ height: 700 }}
          />
        </div>
      </div>
    </Layouts>
  );
}

export default Dashboard;
