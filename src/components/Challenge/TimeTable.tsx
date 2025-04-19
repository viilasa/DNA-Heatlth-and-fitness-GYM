import React from 'react';
import { timeTableData } from './TimeTableData';
import { Clock } from 'lucide-react';

const TimeTable: React.FC = () => {
  return (
    <div className="bg-zinc-900 rounded-lg p-6">
      <div className="mb-6 flex items-center space-x-2">
        <Clock className="w-6 h-6 text-orange-500" />
        <h3 className="text-xl font-bold text-white">Weekly Schedule</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {timeTableData.map((session, index) => (
          <div key={index} className="bg-black/30 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-orange-500 font-semibold">{session.day}</span>
              <span className="text-white bg-orange-500/50 px-2 py-1 rounded-full text-sm">
                {session.time}
              </span>
            </div>
            <p className="text-white font-medium mb-1">{session.workout}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeTable;
