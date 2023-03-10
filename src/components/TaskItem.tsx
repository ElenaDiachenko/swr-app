import React from 'react';

export const TaskItem = () => {
  return (
    <div className="flex justify-between bg-white p-1 px-3 rounded-sm gap-4">
      <div className="flex gap-2 items-center text-black">
        <input type="checkbox" />
        Task
      </div>
      <button
        className=" bg-slate-900 rounded-lg hover:bg-slate-800 p-1 px-3"
        type="button"
      >
        Delete
      </button>
    </div>
  );
};
