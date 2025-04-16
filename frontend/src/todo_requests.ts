import axios from 'axios';
import { Todo, NewTodo, UpdateTodo } from "./types";

const baseUrl = "http://localhost:3000/api"

export const getAllTodos = () => {
  return axios.get<Todo[]>(`${baseUrl}/todos`).then(res => res.data)
}

export const deleteTodo = (id: number) => {
  return axios.delete(`${baseUrl}/todos/${id}`)
}

export const createTodo = (todo: NewTodo) => {
  return axios.post<Todo>(`${baseUrl}/todos`, todo).then(res => res.data)
}

export const updateTodo = (todo: UpdateTodo) => {
  return axios.put<Todo>(`${baseUrl}/todos/${todo.id}`, todo).then(res => res.data)
}
