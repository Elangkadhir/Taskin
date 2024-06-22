import React, { useState } from "react";
import Layouts from "../../Layouts";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "../Dashboard/calenderStyle.css";

function Dashboard() {
  const localizer = momentLocalizer(moment);
  const [btnColor, setBtnColor] = useState("month");
  const [fb, setFb] = useState("TODAY");

  const CustomToolbar = ({ label, onNavigate, onView }) => {
    const handleButtonChange = (view) => {
      setBtnColor(view);
      onView(view);
    };

    const handelFB = (view) => {
      setFb(view);
      onNavigate(view);
    };

    return (
      <div className="rbc-toolbar mt-5 px-4 py-5">
        <span className="rbc-btn-group">
          <button
            className={`custom-button ${
              fb === "PREV" ? "custom-button-active" : "custom-button-inactive"
            }`}
            type="button"
            onClick={() => handelFB("PREV")}
          >
            Back
          </button>
          <button
            type="button"
            className={`custom-button ${
              fb === "TODAY" ? "custom-button-active" : "custom-button-inactive"
            }`}
            onClick={() => handelFB("TODAY")}
          >
            Today
          </button>
          <button
            type="button"
            className={`custom-button ${
              fb === "NEXT" ? "custom-button-active" : "custom-button-inactive"
            }`}
            onClick={() => handelFB("NEXT")}
          >
            Next
          </button>
        </span>
        <span className="rbc-toolbar-label">{label}</span>
        <span className="rbc-btn-group">
          <button
            className={`custom-button ${
              btnColor === "month"
                ? "custom-button-active"
                : "custom-button-inactive"
            }`}
            type="button"
            onClick={() => handleButtonChange("month")}
          >
            Month
          </button>
          <button
            className={`custom-button ${
              btnColor === "week"
                ? "custom-button-active"
                : "custom-button-inactive"
            }`}
            type="button"
            onClick={() => handleButtonChange("week")}
          >
            Week
          </button>
          <button
            className={`custom-button ${
              btnColor === "day"
                ? "custom-button-active"
                : "custom-button-inactive"
            }`}
            type="button"
            onClick={() => handleButtonChange("day")}
          >
            Day
          </button>
          <button
            className={`custom-button ${
              btnColor === "agenda"
                ? "custom-button-active"
                : "custom-button-inactive"
            }`}
            type="button"
            onClick={() => handleButtonChange("agenda")}
          >
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
