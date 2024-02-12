import React from "react";
import "../style/ticket.css";

function Ticket({ data, onDelete, onDetails }) {

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(); 
  }

  return (
    <div className="ticket" onClick={onDetails}>
      <div>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
      <div className="ticket__footer">
        {/* <img src="" alt="" /> */}
        <p>{data.dueDate}</p>
        <button onClick={handleDelete} className="ticket__footer_deleteBtn"><i className="fa fa-trash-o"></i></button>
      </div>
    </div>
  );
}

export default Ticket;
