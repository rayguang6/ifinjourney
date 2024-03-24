// Dashboard.js
import React from 'react';
import { star } from '../assets/icons';
import { me } from '../assets/images';
import { ProgressBar, PersonalDetails, Roadmap, StreakCalendar, DailyGoal} from '../components';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-8 h-screen" style={{ gridTemplateRows: `calc(100vh - var(--navbar-height))` }}>



      <div className="col-span-2 h-full">
      {/* calendar */}
      <StreakCalendar />
      
      {/* Sidebar */}
        <div className="flex px-4 py-3">
          <img src={star} alt="" />
          <h4 className='text-lg font-semibold ml-2'>Events</h4>
        </div>
        <div className="flex px-4 py-3">
          <img src={star} alt="" />
          <h4 className='text-lg font-semibold ml-2'>Career Talk</h4>
        </div>
        <div className="flex px-4 py-3">
          <img src={star} alt="" />
          <h4 className='text-lg font-semibold ml-2'>Explore</h4>
        </div>
        <div className="flex px-4 py-3">
          <img src={star} alt="" />
          <h4 className='text-lg font-semibold ml-2'>Goal</h4>
        </div>

      </div>

      {/* Main Content */}
      <div className="col-span-7">
        
        <div className="py-2 mb-8">
          <h1 className='font-bold text-3xl'>Welcome! <span className='text-primary'>Lei</span></h1>
          <p className='text-base text-slate-gray'>You have completed 40% of your weekly challenge</p>
        </div>

        <div className="flex w-full gap-6 h-72">
          <div className="learning-progress bg-white shadow-sm w-full px-4 py-4 h-full rounded-2xl">
            <div className="flex items-center justify-between">
              <h1 className='text-lg font-semibold'>Learning Progress</h1>
              <p className='text-xs text-primary font-bold'>GO TO LEARNING</p>
            </div>

            {/* can make to component */}
            <div className="py-2">
              <div className="flex gap-4">
                <img src="https://i.pinimg.com/736x/d9/e1/24/d9e1241d22b422cc12b9e36ff018a505.jpg" alt="" width={64} height={64} className='rounded-md shadow-lg'/>
                <div className="w-full flex flex-col justify-center gap-2">
                    <h4 className='font-semibold text-md'>Checkpoint Progress</h4>
                    <ProgressBar progress={70}/>
                </div>

              </div>
            </div>

            {/* can make to component */}
            <div className="py-2">
              <div className="flex gap-4">
                <img src="https://img.freepik.com/premium-vector/goal-setting_1133-679.jpg" alt="" width={64} height={64} className='rounded-md shadow-lg'/>
                <div className="w-full flex flex-col justify-center gap-2">
                    <h4 className='font-semibold text-md'>Checkpoint Progress</h4>
                    <ProgressBar progress={25}/>
                </div>

              </div>
            </div>

            {/* can make to component */}
            <div className="py-2">
              <div className="flex gap-4">
                <img src="https://as2.ftcdn.net/v2/jpg/03/73/09/73/1000_F_373097327_ldcqRZZzmg8HUlLWu9mloStmla10Hd0s.jpg" alt="" width={64} height={64} className='rounded-md shadow-lg'/>
                <div className="w-full flex flex-col justify-center gap-2">
                    <h4 className='font-semibold text-md'>Checkpoint Progress</h4>
                    <ProgressBar progress={40}/>
                </div>

              </div>
            </div>


          </div>

          <div className=" bg-white shadow-sm w-full px-4 py-4 h-full rounded-2xl">
          <div className="flex items-center justify-between">
              <h1 className='text-lg font-semibold'>Daily Goal</h1>
              <p className='text-xs text-primary font-bold'>GO TO GOAL</p>
            </div>
            <DailyGoal/>
          </div>
        </div>

        {/* roadmap container */}
        <div className="roadmap bg-white shadow-sm w-full px-8 py-4 rounded-2xl mt-8">
          {/* <div className="flex items-center justify-between">
            <h1 className='text-lg font-semibold'>Your Current Roadmap</h1>
            <p className='text-xs text-primary font-bold'>GO TO GOAL</p>


          </div> */}
            <Roadmap/>
        </div>
        
      </div>

      {/* Personal Details */}
      <div className="col-span-3 bg-white shadow-md" >
       
        <PersonalDetails/>
      </div>
    </div>
  );
};

export default Dashboard;
