import React from "react";
import "../style/ticket.css";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function Ticket({ data, onDelete, onDetails, title, index, parent }) {
  // console.table(data);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: title,
    data: {
      title,
      index,
      parent,
    },
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete();
  };

  console.log(data.priority);
  const high = data.priority === 'High' ? 'high-priority' : '';
  const medium = data.priority === 'Medium' ? 'medium-priority' : '';

  return (
    <div
      className={`ticket ${high} ${medium}`}
      onClick={onDetails}
      transform={style.transform}
      {...listeners}
      {...attributes}
      ref={setNodeRef}
      style={style}
    >
      <div>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
      <div className="ticket__footer">
        {/* <img src="" alt="" /> */}
        <p>{data.dueDate}</p>
        <button onClick={handleDelete} className="ticket__footer_deleteBtn">
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  );
}

export default Ticket;
