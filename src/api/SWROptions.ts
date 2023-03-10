import { ITask } from '../interfaces/ITask';

export const addTodoOptions = (newTodo: ITask) => {
  return {
    optimisticData: (todos: ITask[]) =>
      [...todos, newTodo].sort((a, b) => b.id - a.id),
    rollbackOnError: true,
    populateCache: (added: ITask, todos: ITask[]) =>
      [...todos, added].sort((a, b) => b.id - a.id),
    revalidate: false,
  };
};

export const updateTodoOptions = (updatedTodo: ITask) => {
  return {
    optimisticData: (todos: ITask[]) => {
      const prevTodos = todos.filter((todo) => {
        return todo.id !== updatedTodo.id;
      });
      return [...prevTodos, updatedTodo].sort((a, b) => b.id - a.id);
    },
    rollbackOnError: true,
    populateCache: (updated: ITask, todos: ITask[]) => {
      const prevTodos = todos.filter((todo) => {
        return todo.id !== updatedTodo.id;
      });
      return [...prevTodos, updated].sort((a, b) => b.id - a.id);
    },
    revalidate: false,
  };
};

export const deleteTodoOptions = ({ id }: { id: ITask['id'] }) => {
  return {
    optimisticData: (todos: ITask[]) => {
      return todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    rollbackOnError: true,
    populateCache: (_emptyResponseObj: any, todos: ITask[]) => {
      return todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    revalidate: false,
  };
};
