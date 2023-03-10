import axios from 'axios';
import { ITask } from '../interfaces/ITask';

const delay = () => new Promise<void>((res) => setTimeout(() => res(), 800));

const $api = axios.create({
  baseURL: 'http://localhost:3500',
});

export const baseEndpoint = '/todos';

const getTodos = async () => {
  await delay();
  const { data } = await $api.get<ITask[]>(baseEndpoint);
  return data;
};

const addTodo = async ({ userId, title, completed }: ITask) => {
  await delay();
  const { data } = await $api.post(baseEndpoint, { userId, title, completed });
  return data;
};

const updateTodo = async (todo: ITask) => {
  await delay();
  const { data } = await $api.patch(`${baseEndpoint}/${todo.id}`, todo);
  return data;
};

const deleteTodo = async ({ id }: { id: ITask['id'] }) => {
  await delay();
  return await $api.delete(`${baseEndpoint}/${id}`);
};
export const requests = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
