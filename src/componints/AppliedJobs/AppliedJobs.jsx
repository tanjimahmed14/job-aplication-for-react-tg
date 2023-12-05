import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStortJobAplication } from "../Utilitis/Localstorage";
import Job from "../Job/Job";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJob, setAppliedJob] = useState([]);
  const [displayJob, setDisplayJob] = useState([]);

  const handelClickFilter = (filter) => {
    if (filter === "all") {
      setDisplayJob(appliedJob);
    } else if (filter === "Remote") {
      const remoteJob = appliedJob.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJob(remoteJob);
    } else if (filter === "Onsite") {
      const onsideJob = appliedJob.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJob(onsideJob);
    }
    
  };
  
  useEffect(() => {
    const stortsJobIds = getStortJobAplication();
    if (jobs.length > 0) {
      const jobAplied = jobs.filter((job) => stortsJobIds.includes(job.id));
      setAppliedJob(jobAplied);
    }
  }, [jobs]);
  return (
    <div>
      <h1>Applied Jobs : {appliedJob.length}</h1>
      <div className="text-right mb-5">
        <details className="dropdown">
          <summary className="m-1 btn">Filter By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
            <li onClick={() => handelClickFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handelClickFilter("Remote")}>
              <a>Remone</a>
            </li>
            <li onClick={() => handelClickFilter("Onsite")}>
              <a>Onside</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {displayJob.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
