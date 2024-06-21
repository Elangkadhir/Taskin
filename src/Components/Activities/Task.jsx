import React from "react";

function Task() {
  return (
    <div className="">
      <form className="bg-white w-full shadow-md rounded px-8 pt-6 pb-8 mb-4 overflow-y-scroll h-[500px]">
        <h2 className="mb-6 text-2xl font-bold">Assign Task</h2>
        <div className="mb-4">
          <label
            htmlFor="project"
            className=" text-gray-700 text-sm font-bold mb-2"
          >
            Project :
          </label>
          <input
            type="text"
            name="project"
            className="shadow-green-900  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="task"
            className=" text-gray-700 text-sm font-bold mb-2"
          >
            Task:
          </label>
          <input
            name="task"
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="task"
            className=" text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </label>
          <input
            name="task"
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="task"
            className=" text-gray-700 text-sm font-bold mb-2"
          >
            Date/Time
          </label>
          <input
            name="task"
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="task"
            className=" text-gray-700 text-sm font-bold mb-2"
          >
            Status
          </label>
          <input
            name="task"
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="task"
            className=" text-gray-700 text-sm font-bold mb-2"
          >
            Comment
          </label>
          <input
            name="task"
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <input
            type="submit"
            value="Add Task"
            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          />
        </div>
      </form>
    </div>
  );
}

export default Task;
