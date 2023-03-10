import React from 'react';
import { TaskItem } from './TaskItem';

export const Tasks = () => {
  return (
    <div className="flex flex-col gap-2">
      <TaskItem />
      <TaskItem />
    </div>
  );
};
