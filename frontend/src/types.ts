export interface Todo {
  id: number,
  title: string,
  completed: boolean,
  day: string,
  month: string,
  year: string,
  description: string
}

export interface FormData {
  id: null,
  title: string,
  completed: boolean,
  day: string,
  month: string,
  year: string,
  description: string
}

export type NewTodo = Omit<Todo, 'id'>

export type UpdateTodo = Pick<Todo, 'id'> & Partial<Omit<Todo, 'id'>>

export interface TodosProps {
  todos: Todo[],
  handleDeleteTodo: (todo: Todo) => () => void,
  handleToggleCompleted: (event: React.SyntheticEvent, todo: Todo) => void,
  handleEditTodo: (todo: Todo) => () => void
}

export interface TodoDisplayProp {
  todo: Todo,
  dueDate: (todo: Todo) => string,
  handleDeleteTodo: (todo: Todo) => () => void,
  handleToggleCompleted: (event: React.SyntheticEvent, todo: Todo) => void,
  handleEditTodo: (todo: Todo) => () => void
}

export interface TodosDisplayProps extends TodosProps {
  dueDate: (todo: Todo) => string
}

export interface ModalProps {
  modal: boolean,
  toggleModal: () => void,
  formData: Todo | FormData
  reloadTodos: () => void
}

export interface HeaderProps {
  length: number,
  handleNewTodo: () => void
}
