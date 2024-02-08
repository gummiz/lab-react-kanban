import "../style/updateTicket.css";
import { useState } from "react";

function UpdateTicket({ isOpen, onClose, data, onSubmit }) {
  if (!isOpen) return null; 
  const [inputs, setInputs] = useState(data);

  const inputHandler = (e) => {
    console.log("changing");
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="updateTicket">
      <div className="updateTicket__content">
        {/* <h1>
          Dialog
          {data.title}
        </h1> */}
        <form onSubmit={onSubmit}>
          <input
            name="title"
            type="text"
            placeholder="Title of the Task"
            value={inputs.title || ''}
            onChange={inputHandler}
          />

          {/* <label>
            Assignee
            <input name="assignee" type="text" placeholder="assignee" value={data.assignee || ''} />
          </label>
          <label>
            Description
            <input name="Description" type="text" placeholder="Description" value={data.description || ''} />
          </label>

          <label>
            Prio
            <label >
              Low
              <input name="priority" type="radio" className="updateTicket__radio" checked={data.priority === 'Low' || false}/>
            </label>
            <label >
              Medium
              <input name="priority" type="radio" className="updateTicket__radio" checked={data.priority === 'Medium' || false}/>
            </label>
            <label >
              Hight
              <input name="priority" type="radio" className="updateTicket__radio" checked={data.priority === 'High' || false}/>
            </label>
          </label>
          
          <label>
            Due Date
            <input name="dueDate" type="date" placeholder="" value={data.dueDate || ''}/>
          </label> */}
          <button type="submit">Save Ticket</button>
        </form>
        <button onClick={onClose}>Closing</button>
      </div>
    </div>
  );
}

export default UpdateTicket;
