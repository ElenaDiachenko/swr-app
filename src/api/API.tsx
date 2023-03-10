import axios from 'axios';
import { ITask } from '../interfaces/ITask';

// const delay = () => new Promise((res) => setTimeout(() => res(), 800));

const $api = axios.create({
  baseURL: 'http://localhost:3500',
});

export const baseEndpoint = '/todos';

const getTodos = async () => {
  const { data } = await $api.get(baseEndpoint);
  return data;
};

const addTodo = async ({ userId, title, completed }: ITask) => {
  const { data } = await $api.post(baseEndpoint, { userId, title, completed });
  return data;
};

const updateTodo = async (todo: ITask) => {
  const { data } = await $api.patch(`${baseEndpoint}/${todo.id}`, todo);
  return data;
};

export const deleteTodo = async ({ id }: { id: number }) => {
  return await $api.delete(`${baseEndpoint}/${id}`);
};
export const requests = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
