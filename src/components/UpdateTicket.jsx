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
        {/* <h1>
          Dialog
          {data.title}
        </h1> */}
        <form onSubmit={submitHandler}>
          <input
            name="title"
            type="text"
            placeholder="Title of the Task"
            value={inputs.title || ""}
            onChange={inputHandler}
          />

          <label>
            Assignee
            <input
              name="assignee"
              type="text"
              placeholder="assignee"
              value={inputs.assignee || ""}
              onChange={inputHandler}
            />
          </label>
          <div className="updateTicket__content__formfild">
            <label htmlFor="description">Description</label>
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
              className="updateTicket__content__radioGroup__btn"
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
              className="updateTicket__content__radioGroup__btn yellow"
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
              className="updateTicket__content__radioGroup__btn red"
            >
              High
            </label>
          </div>

     
          <label>
            Due Date
            <input
              name="dueDate"
              type="date"
              placeholder=""
              value={data.dueDate || ""}
              onChange={inputHandler}
            />
          </label>
          <button type="submit">Save Ticket</button>
        </form>
        <button onClick={onClose}>Closing</button>
      </div>
    </div>
  );
}

export default UpdateTicket;
