import React from 'react'
import {ProgressBar} from '../components'

const ResumeCourseCard = ({ imgURL, title, progress, instructor }) => {
  return (
    <div className='flex flex-1 w-full max-sm:w-full bg-white shadow-green rounded-xl'>
      <img src={imgURL} alt={title} className='w-[50%] rounded-md' />

      <div className='w-full mt-2 flex flex-col justify-start align-middle px-4 py2'>
        <h3 className='text-2xl leading-normal font-semibold font-palanquin'>
            {title}
        </h3>
        <p className='font-montserrat text-sm leading-normal text-slate-gray'>
          {instructor}
        </p>
        <div className="mt-2">
            <ProgressBar progress={progress} />
        </div>
      </div>
    </div>
  )
}

export default ResumeCourseCard

// id: '1',
// imgURL: course1,
// title: "Investing 101",
// intructor: "Gordon",
// progress: 65,