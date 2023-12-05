import { useLoaderData, useParams } from "react-router-dom";
import { CiCalendarDate, CiDollar } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveJobAplications } from "../Utilitis/Localstorage";

const JobDetels = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id); /* convert */
  

  const job = jobs.find((job) => job.id == idInt);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;

  console.log(job);
  const handelApplaynf = () => {
    saveJobAplications(idInt)
    toast('You applied this job')
  }

  return (
    <div>
      <h1>Job detels</h1>
      <div className="grid md:grid-cols-4 my-10 gap-2">
        <div className="    md:col-span-3 space-y-2">
          <p>
            <span className="font-bold">Job Description:</span>{" "}
            <span className="text-[#757575]">{job_description}</span>
          </p>
          <p>
            <span className="font-bold">Job Responsibility:</span>{" "}
            <span className="text-[#757575]">{job_responsibility}</span>
          </p>
          <h4 className="font-bold">Educational Requirements:</h4>
          <p>
            <span className="text-[#757575]">{educational_requirements}</span>
          </p>
          <h4 className="font-bold">Experiences:</h4>
          <p>
            <span className="text-[#757575]">{experiences}</span>
          </p>
        </div>
        <div className="md:col-span-1">
          <div className="px-4 py-5 bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] p-2 rounded-lg space-y-1">
            <h1 className="font-bold text-lg mb-5">Job Details</h1>
            <hr />
            <div className="flex items-center text-sm">
              <CiDollar className="mr-2 text-[#7E90FE]"></CiDollar>
              <span className="font-bold">Salary :</span>{" "}
              <span className="text-[#757575] ml-1">{salary}</span>
            </div>
            <div className="flex items-center text-sm ">
              <CiCalendarDate className="mr-2" />
              <span className="font-bold">Job Title:</span>{" "}
              <span className="text-[#757575] ml-1">{job_title}</span>
            </div>
            <h1 className="font-bold text-lg pt-3 pb-2">Contact Information</h1>
            <hr />
            <div className="text-sm flex items-center">
              <FaPhoneAlt className="mr-2" />
              <span className="font-bold">Phone: </span>
              <span className="text-[#757575] ml-1">
                {contact_information.phone}
              </span>
            </div>
            <div className="text-sm flex items-center">
              <MdOutlineMail className="mr-2"></MdOutlineMail>
              <span className="font-bold">Email: </span>
              <span className="text-[#757575] ml-1">
                {contact_information.email}
              </span>
            </div>
            <div className="text-sm flex ">
              <IoLocationOutline className="mr-2 text-lg"></IoLocationOutline>
              <span className="font-bold">Address: </span>
              <span className="text-[#757575] ml-1">
                {contact_information.address}
              </span>
            </div>
          </div>
          <button
            onClick={handelApplaynf}
            className="w-full mt-3 btn bg-[#7E90FE] text-white bg-gradient-to-r from-[#9873FF] hover:bg-[#9873FF] font-bold"
          >
            Apply Now
          </button>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default JobDetels;
