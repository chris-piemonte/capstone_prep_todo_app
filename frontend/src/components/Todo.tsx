import { TodoDisplayProp } from "../types"

export const IncompleteTodo = ({ todo, handleDeleteTodo, handleToggleCompleted, dueDate, handleEditTodo }: TodoDisplayProp) => {
  return (
    <li className="container">
      <div className="list_item" onClick={(event) => handleToggleCompleted(event, todo)}>
        <span className="not_check" onClick={(event) => handleToggleCompleted(event, todo)}></span>
        <p onClick={handleEditTodo(todo)}>{todo.title} - {dueDate(todo)}</p>
      </div>
      <div className='delete' onClick={handleDeleteTodo(todo)}>
        <img src="../html_css/images/trash.png"></img>
      </div>
    </li>
  )
}

export const CompleteTodo = ({ todo, handleDeleteTodo, handleToggleCompleted, dueDate, handleEditTodo }: TodoDisplayProp) => {
  return (
    <li className="container">
      <div className="list_item" onClick={(event) => handleToggleCompleted(event, todo)}>
        <span className="check" onClick={(event) => handleToggleCompleted(event, todo)}></span>
        <p className='completed' onClick={handleEditTodo(todo)}>{todo.title} - {dueDate(todo)}</p>
      </div>
      <div className='delete' onClick={handleDeleteTodo(todo)}>
        <img src="../html_css/images/trash.png"></img>
      </div>
    </li>
  )
}
