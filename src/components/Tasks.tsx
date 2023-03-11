import { TaskItem } from './TaskItem';
import useSWR from 'swr';
import { requests, baseEndpoint as cacheKey } from '../api/API';

export const Tasks = () => {
  const { data: todos } = useSWR(cacheKey, requests.getTodos, {
    onSuccess: (data) => data.sort((a, b) => b.id - a.id),
    suspense: true,
  });

  return (
    <div className="flex flex-col gap-2">
      {todos?.length ? (
        todos.map((t) => <TaskItem key={t.id} task={t} />)
      ) : (
        <p>No added tasks yet</p>
      )}
    </div>
  );
};
