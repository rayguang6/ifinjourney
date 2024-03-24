// DailyGoal.js
import React from 'react';

const DailyGoal = () => {
  // Sample data for daily goals progress
  const dailyGoalsData = [
    { day: 'Mon', progress: 70 },
    { day: 'Tue', progress: 90 },
    { day: 'Wed', progress: 60 },
    { day: 'Thu', progress: 80 },
    { day: 'Fri', progress: 50 },
    { day: 'Sat', progress: 85 },
    { day: 'Sun', progress: 75 },
  ];

  return (
    <div className="bg-white p-4 rounded-md">
      {/* <h2 className="text-lg font-semibold mb-4">Daily Goals Progress</h2> */}
      <div className="flex justify-between gap-1">
        <div className="h-36">
          {/* Y-axis labels */}
          <div className="h-full flex flex-col justify-between text-xs font-semibold text-gray-500">
            <div>100%</div>
            <div>75%</div>
            <div>50%</div>
            <div>25%</div>
            <div>0%</div>
          </div>
        </div>
        <div className="flex justify-between w-full space-x-4">
          {dailyGoalsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Vertical progress bar */}
              <div className="relative w-8 h-36 bg-gray-200 rounded-md overflow-hidden">
                <div
                  className="absolute bottom-0 left-0 w-full rounded-md"
                  style={{ height: `${item.progress}%`, background: `linear-gradient(to top, #4F46E5, #674FE5)` }}
                ></div>
              </div>
              <div className="mt-2 text-sm">{item.day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyGoal;
