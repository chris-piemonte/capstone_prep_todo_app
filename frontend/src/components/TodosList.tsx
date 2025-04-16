import { IncompleteTodos, CompleteTodos } from "./Todos";
import { Todo, TodosProps } from '../types'

const TodosList = ({ todos, handleDeleteTodo, handleToggleCompleted, handleEditTodo }: TodosProps ) => {
  const getIncompleteTodos = (todos: Todo[]) => {
    return todos.filter(todo => todo.completed === false);
  }

  const getCompleteTodos = (todos: Todo[]) => {
    return todos.filter(todo => todo.completed === true);
  }

  const displayDueDate = (todo: Todo) => {
    if (todo.month.trim() && todo.year.trim()) {
      return `${todo.month}/${todo.year.slice(2)}`
    } else {
      return 'No due date'
    }
  }

  return (
    <>
      <IncompleteTodos todos={getIncompleteTodos(todos)} handleDeleteTodo={handleDeleteTodo} handleToggleCompleted={handleToggleCompleted} dueDate={displayDueDate} handleEditTodo={handleEditTodo} />
      <CompleteTodos todos={getCompleteTodos(todos)} handleDeleteTodo={handleDeleteTodo} handleToggleCompleted={handleToggleCompleted} dueDate={displayDueDate} handleEditTodo={handleEditTodo} />
    </>
  )
}

export default TodosList
