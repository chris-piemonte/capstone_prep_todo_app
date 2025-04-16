import { Todo, NewTodo, ModalProps } from "../types"
import { createTodo, updateTodo } from "../todo_requests";
import { YEARS, MONTHS, DAYS } from '../utils/utils';

const Modal = ({ modal, toggleModal, formData, reloadTodos }: ModalProps) => {

  const handleSave = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (event.currentTarget.title.value.length < 3) {
      alert('You must enter a title at least 3 characters long.');
      return;
    }

    const newForm: NewTodo = {
      title: event.currentTarget.title.value,
      completed: formData.completed,
      day: event.currentTarget.day.value || '  ',
      month: event.currentTarget.month.value || '  ',
      year: event.currentTarget.year.value || '    ',
      description: event.currentTarget.description.value || ' ',
    }

    if (formData.id) {
      const formSubmission: Todo = {...newForm, id: formData.id}
      updateTodo(formSubmission).then(_res => {
        toggleModal();
        reloadTodos();
      });
    } else {
      createTodo(newForm).then(_res => {
        toggleModal();
        reloadTodos();
      });
    }
  }

  const handleMarkCompleted = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!formData.id) {
      alert("Cannot mark as complete as item has not been created yet!");
      return;
    }

    updateTodo({ id: formData.id, completed: true }).then(_res => {
      toggleModal();
      reloadTodos();
    });
  }

  if (modal) {
    return (
      <div>
        <div className="modal" id="modal_layer" style={{display: "block"}} onClick={toggleModal}></div>
        <div className="modal" id="form_modal" style={{display: "block", top: "200px"}}>
          <form action='#' method="post" onSubmit={(event) => handleSave(event)}>
            <ul>
              <li>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" placeholder="Title" defaultValue={formData.title} />
              </li>
            </ul>
            <ul>
              <li>
                <label>Due Date</label>
                <div className="date">
                  <select name="day" defaultValue={formData.day}>
                    <option value=''>Day</option>
                    {DAYS.map(day => <option key={day} value={day}>{day}</option>)}
                  </select>{' / '}
                  <select name="month" defaultValue={formData.month}>
                    <option value=''>Month</option>
                    {MONTHS.map((month, ind) => <option key={month} value={String(ind + 1).length > 1 ? String(ind + 1) : '0' + String(ind + 1)}>{month}</option>)}
                  </select>{' / '}
                  <select name="year" defaultValue={formData.year}>
                    <option value=''>Year</option>
                    {YEARS.map(year => <option key={year} value={year}>{year}</option>)}
                  </select>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <label>Description</label>
                <textarea cols={50} rows={7} name="description" placeholder="Description" defaultValue={formData.description.trim()}></textarea>
              </li>
            </ul>
            <ul>
              <li>
                <input type="submit" value="Save" />
                <button onClick={handleMarkCompleted}>Mark As Complete</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
}

export default Modal
