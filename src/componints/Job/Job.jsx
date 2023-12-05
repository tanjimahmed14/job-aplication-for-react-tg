import { CiLocationOn, CiDollar } from "react-icons/ci";

const Job = ({ job }) => {
  console.log(job);
  const {
    logo,
    job_title,
    company_name,
    job_type,
    remote_or_onsite,
    location,
    salary,
  } = job;
  return (
    <div>
      <div className="navbar border mb-3 rounded-lg bg-base-100 space-y-2">
        <div className="flex-none">
          <div className=" bg-gray-100 w-44  p-10 rounded-lg mr-5">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="flex-1">
          <div>
            <h1 className="text-xl font-semibold">{job_title}</h1>
            <h1 className="text-[#757575] font-medium py-2">{company_name}</h1>
            <div className="flex mb-2">
              <button className="border border-[#7E90FE] px-4 py-1 rounded text-[#7E90FE] font-bold mr-3">
                {remote_or_onsite}
              </button>
              <button className="border border-[#7E90FE] px-4 py-1 rounded text-[#7E90FE] font-bold">
                {job_type}
              </button>
            </div>
            <div className="flex">
              <div className="flex items-center">
                <CiLocationOn></CiLocationOn>
                <span className="text-base ml-2 text-[#757575]">
                  {location}
                </span>
              </div>
              <div className="flex items-center ml-10">
                <CiDollar></CiDollar>
                <span className="text-base text-[#757575] ml-2">{salary}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <button className="btn bg-[#7E90FE] text-white bg-gradient-to-r from-[#9873FF] hover:bg-[#9873FF] font-bold">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
