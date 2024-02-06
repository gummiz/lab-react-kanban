import React from "react";
import { useState } from "react";
import "../style/boardcolumn.css";
import Ticket from "./Ticket";


function BoardColumn({ boardTitle, data }) {
  return (
    <div className="board-column">
      <div className="board-column__titleDiv">
        <h3>{boardTitle}</h3>
        +
      </div>

      {
        data.map(ticket => {
            return <Ticket data={ticket} key={ticket.id}/>
        })
      }
    
    </div>
  );
}



export default BoardColumn;
