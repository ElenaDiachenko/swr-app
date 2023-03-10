import { FormEvent, useState } from 'react';

export const Input = () => {
  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => {}}>
      <div className="flex flex-col ">
        <label className="text-white">Enter next task:</label>
        <input
          className="p-1 rounded-sm text-black"
          type="text"
          //   value={''}
          onChange={(e) => {}}
        />
      </div>
      <button
        type="submit"
        className="bg-slate-900 rounded-lg hover:bg-slate-800 p-1"
      >
        Add task
      </button>
    </form>
  );
};
