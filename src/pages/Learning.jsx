import React from 'react'
import { courses, resumecourses } from '../constants'
import { CourseCard, ResumeCourseCard } from '../components'

const Learning = () => {
  return (
    <div>
        <section id='continue-learning' className='max-container max-sm:mt-12'>
        <div className='flex flex-col justify-start'>
              <h2 className='text-4xl font-palanquin font-bold'>
              Continue Your <span className='text-primary'> Learning </span> 
              </h2>
          </div>
          {/* Continue Learning Course Card */}
          <div className='flex gap-6 mt-6'>
            {resumecourses.map((course) => (
                <ResumeCourseCard key={course.name} {...course}/>
            ))}
        </div>

        </section>

        <section id='recommended-courses' className='max-container max-sm:mt-12 mt-20'>
          
          <div className='flex flex-col justify-start'>
              <h2 className='text-4xl font-palanquin font-bold'>
              Top <span className='text-primary'> Courses </span> For You
              </h2>
              <p className='lg:max-w-lg font-montserrat text-slate-gray'>
              Experience top recommended courses just for you!
              </p>
          </div>

        <div className='mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
          {courses.map((course) => (
            <CourseCard key={course.name} {...course} />
          ))}
        </div>
     
        </section>
    </div>
  )
}

export default Learning