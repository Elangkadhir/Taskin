import React from "react";

function TaskList() {
  let data = [
    {
      id: 1,
      name: "Kadhir",
      workType: "WFO",
      project: "DOXZON",
      taskName: "User Creation",
      date: "12-06-2024",
      time: "10:30 AM",
      hours: "01:00 hrs",
      status: "In-Progress",
      comments: "API Pending",
    },
    {
      id: 2,
      name: "Amit",
      workType: "WFH",
      project: "FINCORP",
      taskName: "Backend Development",
      date: "13-06-2024",
      time: "11:00 AM",
      hours: "02:00 hrs",
      status: "Completed",
      comments: "Code Review Done",
    },
    {
      id: 3,
      name: "Sarah",
      workType: "WFO",
      project: "MEDITECH",
      taskName: "Database Optimization",
      date: "14-06-2024",
      time: "09:00 AM",
      hours: "03:00 hrs",
      status: "In-Progress",
      comments: "Indexing Pending",
    },
    {
      id: 4,
      name: "John",
      workType: "WFH",
      project: "HEALTHPLUS",
      taskName: "Frontend Design",
      date: "15-06-2024",
      time: "10:00 AM",
      hours: "02:30 hrs",
      status: "In-Progress",
      comments: "UI Review Pending",
    },
    {
      id: 5,
      name: "Emily",
      workType: "WFO",
      project: "EDUTECH",
      taskName: "API Integration",
      date: "16-06-2024",
      time: "08:30 AM",
      hours: "04:00 hrs",
      status: "Completed",
      comments: "Testing Done",
    },
  ];
  return (
    <div>
      <table className="w-full">
        <thead className="bg-white rounded-md text-blue-500">
          <tr>
            <th className="border-solid border border-black py-2">Name</th>
            <th className="border-solid border border-black py-2">Work</th>
            <th className="border-solid border border-black py-2">Project</th>
            <th className="border-solid border border-black py-2">Task</th>
            <th className="border-solid border border-black py-2">
              Start Date/Time
            </th>
            <th className="border-solid border border-black py-2">
              Time Spent
            </th>
            <th className="border-solid border border-black py-2">Status</th>
            <th className="border-solid border border-black py-2">Comments</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr className="text-start bg-white">
              <td className="border-solid border border-black p-4">
                {item.name}
              </td>
              <td className="border-solid border border-black p-4">
                {item.workType}
              </td>
              <td className="border-solid border border-black p-4">
                {item.project}
              </td>
              <td className="border-solid border border-black p-4">
                {item.taskName}
              </td>
              <td className="border-solid border border-black p-4">
                {item.date}/{item.time}
              </td>
              <td className="border-solid border border-black p-4">
                {item.hours}
              </td>
              <td
                className={`border-solid border border-black p-4 ${
                  item.status === "Completed"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item.status}
              </td>
              <td className="border-solid border border-black p-4">
                {item.comments}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
