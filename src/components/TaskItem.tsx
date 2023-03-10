import { FC } from 'react';
import toast from 'react-hot-toast';
import { ITask } from '../interfaces/ITask';
// import useSWR from 'swr';
import { requests, baseEndpoint as cacheKey } from '../api/API';
import { useSWRConfig } from 'swr/_internal';

type Props = {
  task: ITask;
};

export const TaskItem: FC<Props> = ({ task }) => {
  const { mutate } = useSWRConfig();

  const deleteTodoMutation = async ({ id }: { id: number }) => {
    try {
      await mutate(cacheKey, requests.deleteTodo({ id }));
      toast.success('Success! Deleted item.');
    } catch (error) {
      toast.error('Failed to delete the item.');
    }
  };

  const updateTodoMutation = async (updatedTodo: ITask) => {
    try {
      await mutate(cacheKey, requests.updateTodo(updatedTodo));

      toast.success('Success! Updated item.');
    } catch (err) {
      toast.error('Failed to update the item.');
    }
  };

  return (
    <div className="flex justify-between bg-white p-1 px-3 rounded-sm gap-4">
      <div className="flex gap-2 items-center text-black">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() =>
            updateTodoMutation({ ...task, completed: !task.completed })
          }
        />
        {task.title}
      </div>
      <button
        className=" bg-slate-900 rounded-lg hover:bg-slate-800 p-1 px-3"
        type="button"
        onClick={() => deleteTodoMutation({ id: task.id })}
      >
        Delete
      </button>
    </div>
  );
};
