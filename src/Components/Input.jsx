import React, { useContext, useState } from 'react';
import { ListContext } from './ListContext';

function Input() {
  const [job, setJob] = useState('');
  const { addToList } = useContext(ListContext);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md w-96 mx-auto">
      <p className="text-2xl font-bold mb-4 text-gray-800">To-Do List</p>
      <div className="flex w-full">
        <input
          type="text"
          value={job}
          onChange={(e) => {
            setJob(e.target.value);
          }}
          placeholder="Enter a task"
          className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => {
            if (job.trim()) {
              addToList(job);
              setJob('');
            }
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Input;
