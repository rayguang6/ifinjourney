import React, { useState } from 'react';
import JobDetails from '../components/JobDetails'
import JobSummary from '../components/JobSummary'
import { jobs } from '../constants'

const Company = () => {
  
  const [selectedJob, setSelectedJob] = useState(jobs[0]); // Default to the first job

  return (
    <div className="flex  bg-white p-4 shadow-xl rounded-2xl">
      {/* Sidebar for job summaries */}
      <div className="w-1/3 overflow-auto p-4 border-r-secondary border-r" style={{ maxHeight: '100vh' }}>
        {jobs.map((job) => (
          <JobSummary key={job.id} job={job} onSelect={setSelectedJob} />
        ))}
      </div>
      {/* Main content area for job details */}
      <div className="w-2/3 overflow-auto p-4" style={{ maxHeight: '100vh' }}>
        <JobDetails job={selectedJob} />
      </div>
    </div>
  );
};

export default Company