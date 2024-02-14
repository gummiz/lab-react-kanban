import "../style/updateTicket.css";
import { useState } from "react";

function UpdateTicket({ isOpen, onClose, data, onUpdate }) {
  if (!isOpen) return null;
  const [inputs, setInputs] = useState(data);

  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // data.length === 0 ? onNewTicket(inputs) :
    onUpdate(inputs);
    setInputs({});

    onClose();
  };

  const onInsideClick = (e) => {
    e.stopPropagation();
  };

  

  return (
    <div className="updateTicket" onClick={onClose}>
      <div className="updateTicket__content" onClick={onInsideClick}>
        <form onSubmit={submitHandler}>
          <input
            name="title"
            type="text"
            placeholder="Title of the Task"
            value={inputs.title || ""}
            onChange={inputHandler}
          />

          <label className="assignee_label">
            Assignee
            <input
              className="assignee_input"
              name="assignee"
              type="text"
              placeholder="assignee"
              value={inputs.assignee || ""}
              onChange={inputHandler}
            />
          </label>

          <div className="updateTicket__content__formfild">
            <label htmlFor="description" className="description_label">Description</label>
            <textarea
              id="description"
              rows="3"
              name="description"
              type="text"
              placeholder="Description"
              value={inputs.description || ""}
              onChange={inputHandler}
            ></textarea>
          </div>

          <div className="updateTicket__content__radioGroup">
            Prioritisation
            <input
              id="low"
              name="priority"
              type="radio"
              value="Low"
              className="updateTicket__radio"
              checked={inputs.priority === "Low" || false}
              onChange={inputHandler}
            />
            <label
              htmlFor="low"
              className="updateTicket__content__radioGroup__btn low"
            >
              Low
            </label>
            <input
              id="medium"
              name="priority"
              type="radio"
              className="updateTicket__radio"
              value="Medium"
              checked={inputs.priority === "Medium" || false}
              onChange={inputHandler}
            />
            <label
              htmlFor="medium"
              className="updateTicket__content__radioGroup__btn medium"
            >
              Medium
            </label>
            <input
              id="high"
              name="priority"
              type="radio"
              className="updateTicket__radio"
              value="High"
              checked={inputs.priority === "High" || false}
              onChange={inputHandler}
            />
            <label
              htmlFor="high"
              className="updateTicket__content__radioGroup__btn high"
            >
              High
            </label>
          </div>

          <label className="due-date_label">
            Due Date
            <input
              className="due-date_input"
              name="dueDate"
              type="date"
              placeholder=""
              value={inputs.dueDate || ""}
              onChange={inputHandler}
            />
          </label>
          <div className="button_group">
            <button onClick={onClose} className="secBtn">Closing</button>
            <button type="submit" className="primeBtn">Save Ticket</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateTicket;
