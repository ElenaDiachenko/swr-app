import { TaskItem } from './TaskItem';
import useSWR from 'swr';
import { requests, baseEndpoint as cacheKey } from '../api/API';

export const Tasks = () => {
  const {
    isLoading,
    error,
    data: todos,
  } = useSWR(cacheKey, requests.getTodos, {
    onSuccess: (data) => data.sort((a, b) => b.id - a.id),
  });

  console.log(todos);
  return (
    <div className="flex flex-col gap-2">
      {isLoading ? <p>Loading ...</p> : null}
      {error ? <p>{error.message}</p> : null}
      {todos?.length ? (
        todos.map((t) => <TaskItem key={t.id} task={t} />)
      ) : (
        <p>No added tasks yet</p>
      )}
    </div>
  );
};
