import React from 'react';

const StreakCalendar = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const startingDayOfWeek = firstDayOfMonth.getDay();

  // Example streak days
  const streakDays = [1, 2, 3, 7, 8, 9, 10, 14];

  const generateGrid = () => {
    const grid = [];
    let day = 1;
    for (let i = 0; i < 5; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < startingDayOfWeek) || day > daysInMonth) {
          week.push(
            <div className="w-6 h-6 flex items-center justify-center" key={`${i}-${j}`}></div>
          );
        } else {
          const isStreakDay = streakDays.includes(day);
          week.push(
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-md ${isStreakDay ? 'bg-green-500 text-white' : 'bg-green-50'}`}
              key={`${i}-${j}`}
            >
              {day}
            </div>
          );
          day++;
        }
      }
      grid.push(
        <div className="flex justify-between w-full" key={i}>
          {week}
        </div>
      );
    }
    return grid;
  };

  return (
<div className=" bg-white rounded-lg shadow-sm p-5">

    <h4 className='text-md font-semibold'>Learning Streak: </h4>
    <div className="mt-2 flex flex-wrap justify-center gap-2">
      {generateGrid()}
    </div>
</div>
  );
};

export default StreakCalendar;
