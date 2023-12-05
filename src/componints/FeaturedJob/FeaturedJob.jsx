import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const FeaturedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    job_type,
    salary,
    location,
    remote_or_onsite,
  } = job;
  return (
    <div className="border rounded-lg p-10 border-gray-600 space-y-2 px-10">
      <img className="w-36 mb-6" src={logo} alt="" />
      <h1 className="text-2xl font-semibold">{job_title}</h1>
      <h4 className="text-base font-normal text-[#757575]">{company_name}</h4>
      <div>
        <button className="border border-[#7E90FE] px-4 py-2 rounded text-[#7E90FE] font-bold mr-3">
          {remote_or_onsite}
        </button>
        <button className="border border-[#7E90FE] px-4 py-2 rounded text-[#7E90FE] font-bold">
          {job_type}
        </button>
      </div>
      <div className="flex">
        <div className="flex items-center">
          <CiLocationOn></CiLocationOn>
          <span className="text-base ml-2 text-[#757575]">{location}</span>
        </div>
        <div className="flex items-center ml-10">
          <CiDollar></CiDollar>
          <span className="text-base text-[#757575] ml-2">{salary}</span>
        </div>
      </div>
      <Link to={`/job/${id}`}> <button className="btn bg-[#7E90FE] text-white bg-gradient-to-r from-[#9873FF] hover:bg-[#9873FF] font-bold">View Details</button> </Link>
    </div>
  );
};

export default FeaturedJob;
