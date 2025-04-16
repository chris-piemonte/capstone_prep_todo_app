const NewTodoButton = ({ handleNewTodo }: { handleNewTodo: () => void }) => {
  return (
    <button className='add_todo' onClick={handleNewTodo}>
      <img src="../html_css/images/plus.png"></img>
      Add new to do
    </button>
  )
}

export default NewTodoButton;
