import "../style/updateTicket.css";
import { useState } from "react";

function UpdateTicket({ isOpen, onClose, data, onUpdate  }) {
  if (!isOpen) return null;
  const [inputs, setInputs] = useState(data);

  const inputHandler = (e) => {
    console.log("changing");
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e) => {
    e.preventDefault()
    // data.length === 0 ? onNewTicket(inputs) : 
    onUpdate(inputs);
    setInputs({});

    
    onClose();
  }

  return (
    <div className="updateTicket">
      <div className="updateTicket__content">
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
          <label>
            Description
            <input
              name="description"
              type="text"
              placeholder="Description"
              value={inputs.description || ""}
              onChange={inputHandler}
            />
          </label>

          <label>
            Prio
            <label>
              Low
              <input
                name="priority"
                type="radio"
                value="Low"
                className="updateTicket__radio"
                checked={inputs.priority === "Low" || false}
                onChange={inputHandler}
              />
            </label>
            <label>
              Medium
              <input
                name="priority"
                type="radio"
                className="updateTicket__radio"
                value="Medium"
                checked={inputs.priority === "Medium" || false}
                onChange={inputHandler}
              />
            </label>
            <label>
              Hight
              <input
                name="priority"
                type="radio"
                className="updateTicket__radio"
                value="High"
                checked={inputs.priority === "High" || false}
                onChange={inputHandler}
              />
            </label>
          </label>

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
