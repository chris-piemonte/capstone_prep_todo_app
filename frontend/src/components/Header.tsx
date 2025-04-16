import NewTodoButton from "./NewTodoButton";
import { HeaderProps } from '../types';

const Header = ({ length, handleNewTodo }: HeaderProps) => {
  return (
    <div>
      <h1>All Todos</h1>
      <span className='count'>{length}</span>
      <NewTodoButton handleNewTodo={handleNewTodo} />
    </div>
  )
}

export default Header
