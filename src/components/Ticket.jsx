import React from "react";
import "../style/ticket.css";

function Ticket({ data, onDelete }) {


  return (
    <div className="ticket">
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <div className="ticket__footer">
        {/* <img src="" alt="" /> */}
        <p>{data.dueDate}</p>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Ticket;
