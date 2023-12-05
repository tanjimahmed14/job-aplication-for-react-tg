import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  const [jobs, setJob] = useState([]);
  const [dataLength, setDataLength] = useState(4)

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  return (
    <div>
      <div className="text-center space-y-3">
        <h2 className="text-4xl">Featured Jobs {jobs.length}</h2>
        <p className="text-base text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <FeaturedJob key={job.id} job={job}></FeaturedJob>
        ))}
      </div>
      <div className={dataLength === jobs.length && 'hidden'}>
        <div className="text-center m-5">
        <button onClick={() => setDataLength(jobs.length)} 
         className="btn bg-[#7E90FE] text-white bg-gradient-to-r from-[#9873FF] hover:bg-[#9873FF] font-bold">
          See All Jobs
        </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
