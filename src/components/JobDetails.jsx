// JobDetails.js
import React from 'react';
import { Button } from '../components';

const JobDetails = ({ job }) => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-2">{job.jobname} at {job.company}</h2>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> ${job.salary}</p>
      <p className="mt-4">{job.about}</p>
      <div className="mt-4">
        <h3 className="font-semibold">Role:</h3>
        <p>{job.role}</p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Responsibilities:</h3>
        <ul>
          {job.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Requirements:</h3>
        <ul>
          {job.requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

        <div className="mt-4">
            <Button label='Apply Now' backgroundColor='bg-gradient-to-r from-primary to-secondary' textColor='text-white font-semibold' />
        </div>
     

    </div>
  );
};

export default JobDetails;
