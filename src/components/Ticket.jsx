import React from "react";
import "../style/ticket.css";

function Ticket({ data, onDelete }) {
  return (
    <div className="ticket">
      <div>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
      <div className="ticket__footer">
        {/* <img src="" alt="" /> */}
        <p>{data.dueDate}</p>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Ticket;
