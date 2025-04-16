import { IncompleteTodo, CompleteTodo } from './Todo';
import { TodosDisplayProps } from '../types';

export const IncompleteTodos = ({ todos, handleDeleteTodo, handleToggleCompleted, dueDate, handleEditTodo }: TodosDisplayProps) => {
  return (
    <ul>
      {todos.map(todo => {
        return <IncompleteTodo key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleCompleted={handleToggleCompleted} dueDate={dueDate} handleEditTodo={handleEditTodo} />
      })}
    </ul>
  )
}

export const CompleteTodos = ({ todos, handleDeleteTodo, handleToggleCompleted, dueDate, handleEditTodo }: TodosDisplayProps) => {
  return (
    <ul>
      {todos.map(todo => {
        return <CompleteTodo key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleCompleted={handleToggleCompleted} dueDate={dueDate} handleEditTodo={handleEditTodo} />
      })}
    </ul>
  )
}
