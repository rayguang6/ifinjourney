// JobSummary.js
import React from 'react';

const JobSummary = ({ job, onSelect }) => {
  return (
    <div className="p-4 hover:bg-gray-100 cursor-pointer" onClick={() => onSelect(job)}>
        <div className="flex">
            <img src={job.companyImage} alt="company logo" className="h-10 w-10 rounded-full mb-2" />
            <div className="flex-col ml-2">
                <h3 className="font-semibold">{job.company}</h3>
                <p className='text-sm text-slate-gray'>{job.location}</p>
            </div>
        </div>

      <div className="flex flex-wrap mt-2">
        {job.skills.slice(0, 3).map((skill, index) => (
          <span key={index} className="text-xs font-medium border border-primary text-primary mr-2 mb-2 px-2.5 py-0.5 rounded-full">{skill}</span>
        ))}
      </div>
      <p className="text-sm font-semibold">Salary: ${job.salary}</p>
    </div>
  );
};

export default JobSummary;
