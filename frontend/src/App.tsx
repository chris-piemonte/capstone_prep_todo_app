import { useState, useEffect } from 'react';
import '../html_css/stylesheets/todo_v2.css';
import { Todo, FormData } from "./types";
import { getAllTodos, deleteTodo, updateTodo } from './todo_requests';
import Modal from './components/Modal';
import Header from './components/Header';
import TodosList from './components/TodosList';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [formData, setForm] = useState<Todo | FormData>({
    id: null,
    title: '',
    completed: false,
    day: '',
    month: '',
    year: '',
    description: ''
  });

  const reloadTodos = () => {
    getAllTodos().then(todos => setTodos(todos));
  }

  useEffect(() => {
    reloadTodos();
  }, [])

  const handleDeleteTodo = (todo: Todo) => () => {
    deleteTodo(todo.id).then(_res => reloadTodos());
  }

  const handleToggleCompleted = (event: React.SyntheticEvent, todo: Todo) => {
    if (event.target === event.currentTarget) {
      updateTodo({ id: todo.id, completed: !todo.completed }).then(res => {
        setTodos(todos.map(todo => todo.id === res.id ? res : todo));
      });
    }
  }

  const toggleModal = () => setModal(!modal);

  const handleNewForm = () => {
    setForm({
      id: null,
      title: '',
      completed: false,
      day: '',
      month: '',
      year: '',
      description: ''
    });
  }

  const handleNewTodo = () => {
    handleNewForm();
    toggleModal();
  }

  const handleEditForm = (todo: Todo) => {
    setForm({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      day: todo.day,
      month: todo.month,
      year: todo.year,
      description: todo.description
    });
  }

  const handleEditTodo = (todo: Todo) => () => {
    handleEditForm(todo);
    toggleModal();
  }

  return (
    <div id="items">
      <Header length={todos.length} handleNewTodo={handleNewTodo} />
      <TodosList todos={todos} handleDeleteTodo={handleDeleteTodo} handleToggleCompleted={handleToggleCompleted} handleEditTodo={handleEditTodo} />
      <Modal modal={modal} toggleModal={toggleModal} formData={formData} reloadTodos={reloadTodos} />
    </div>
  )
}

export default App
