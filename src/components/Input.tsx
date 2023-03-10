import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { requests, baseEndpoint as cacheKey } from '../api/API';
import { useSWRConfig } from 'swr/_internal';
import { ITask } from '../interfaces/ITask';
import { addTodoOptions } from '../api/SWROptions';

export const Input = () => {
  const [newTask, setNewTask] = useState('');
  const { mutate } = useSWRConfig();

  const addTodoMutation = async (newTask: ITask) => {
    try {
      await mutate(
        cacheKey,
        requests.addTodo(newTask),
        addTodoOptions(newTask),
      );
      toast.success('Success! Added new item.');
    } catch (error) {
      toast.error('Failed to add the new item.');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodoMutation({
      userId: 1,
      title: newTask,
      completed: false,
      id: 9999,
    });
    setNewTask('');
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col ">
        <label className="text-white">Enter next task:</label>
        <input
          className="p-1 rounded-sm text-black"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
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
