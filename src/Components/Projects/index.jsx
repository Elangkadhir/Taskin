import React from "react";
import Layouts from "../../Layouts";

function Projects() {
  let data = [
    {
      id: 1,
      projectName: "Doxzon",
      applicationName: "Doctor's App",
      progress: "50%",
      status: "Development stage",
    },
    {
      id: 2,
      projectName: "HealthPlus",
      applicationName: "Patient Tracker",
      progress: "75%",
      status: "Testing stage",
    },
    {
      id: 3,
      projectName: "MediConnect",
      applicationName: "Appointment Scheduler",
      progress: "40%",
      status: "Development stage",
    },
    {
      id: 4,
      projectName: "PharmaCare",
      applicationName: "Pharmacy Inventory",
      progress: "60%",
      status: "Development stage",
    },
    {
      id: 5,
      projectName: "WellnessTrack",
      applicationName: "Fitness App",
      progress: "90%",
      status: "Pre-launch stage",
    },
    {
      id: 6,
      projectName: "ClinicEase",
      applicationName: "Clinic Management",
      progress: "30%",
      status: "Planning stage",
    },
  ];

  return (
    <Layouts>
      <div className="bglg h-full p-4 font-bold rounded-md">
        <div className="flex justify-between mb-8 items-center">
          <div className="text-3xl">Projects</div>
          <div className="flex gap-2">
            <div className="bg-blue-700 text-white p-2 cursor-pointer rounded-md">
              New Project
            </div>
            <div className="bg-blue-700 text-white p-2 cursor-pointer rounded-md">
              Filter
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-md p-2   hover:-translate-y-1 duration-200"
            >
              <div>
                <span className="text-black">Project Name : </span>
                <span className="text-blue-500">{item.projectName}</span>
              </div>
              <div>
                <span className="text-black">Application : </span>
                <span className="text-blue-500">{item.applicationName}</span>
              </div>
              <div>
                <span className="text-black">Progress : </span>
                <span className="text-blue-500">{item.progress}</span>
              </div>
              <div>
                <span className="text-black">Status : </span>
                <span className="text-blue-500">{item.status}</span>
              </div>
              <button className="w-full text-white p-2 text-center rounded-md mt-4 bg-blue-600">
                View Documentation
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layouts>
  );
}

export default Projects;
