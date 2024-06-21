import React, { useState } from "react";
import Layouts from "../../Layouts";
import Task from "./Task";
import TaskList from "./TaskList";

function Activities() {
  const [view, setView] = useState("T");

  const handleView = (view) => {
    setView(view);
  };
  return (
    <Layouts>
      <div className="bglg h-full p-4 font-bold rounded-md">
        <div className="flex justify-start items-center mb-4">
          <div className="text-3xl ">Activities</div>
          <div className="flex  ml-8 items-center">
            <div
              className={` ${
                view === "T"
                  ? "bg-red-400 p-2 w-20 text-center rounded-l-md cursor-pointer text-white"
                  : "bg-white p-2 w-20 text-center rounded-l-md cursor-pointer"
              } `}
              onClick={() => handleView("T")}
            >
              Task
            </div>
            <div
              className={` ${
                view === "L"
                  ? "bg-red-400 p-2 w-20 text-center rounded-r-md cursor-pointer text-white"
                  : "bg-white p-2 w-20 text-center rounded-r-md cursor-pointer"
              } `}
              onClick={() => handleView("L")}
            >
              List
            </div>
          </div>
        </div>
        {view === "T" && <Task />}
        {view === "L" && <TaskList />}
      </div>
    </Layouts>
  );
}

export default Activities;
