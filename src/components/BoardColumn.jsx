import React from "react";
import { useState } from "react";
import "../style/boardcolumn.css";
import Ticket from "./Ticket";


function BoardColumn({ boardTitle, data }) {
    const [dataState, setDataState] = useState(data)

    const deleteHandler = (index) => {
        // console.log(dataState);
        // const updatedData = newTestArr.filter((ticket, ticketIndex)=>{ticketIndex  !==  index})
        const updatedData = [...dataState]
        updatedData.splice(index, 1)
        setDataState(updatedData)
    }

  return (
    <div className="board-column">
      <div className="board-column__titleDiv">
        <h4>{boardTitle}</h4>
        <h4>+</h4>
      </div>

      {
        dataState.map((ticket, index) => {
            
            return <Ticket data={ticket} key={ticket.id} onDelete={() => deleteHandler(index)}/>
        })
      }
    
    </div>
  );
}



export default BoardColumn;

