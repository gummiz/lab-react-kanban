import React from "react";
import { useState } from "react";
import "../style/boardcolumn.css";
import Ticket from "./Ticket";
import UpdateTicket from "./UpdateTicket";

function BoardColumn({ boardTitle, data }) {
  const [dataState, setDataState] = useState(data);
  const [open, setOpen] = useState(false);
  const [detailData, setDetailData] = useState();

  const deleteHandler = (index) => {
    const updatedData = [...dataState];
    updatedData.splice(index, 1);
    setDataState(updatedData);
  };
  
  // Detail Dialog popup
  const openHandler = (index) => {
    
    // get ALL Data fromm Kanban next to find the highest ID, right now we only get the filtered per Column
    // const allTicketId = data.map((ticket) => Number(ticket.id))
    // console.log(allTicketId);


    const newTicket = {id : '10', title: 'new Ticket'}
    typeof index !== 'undefined' ? setDetailData(dataState[index]) : setDetailData(newTicket);
    setOpen(true);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  const updateTicket = (input) => {
    console.log("updated");

    setDataState(dataState.map((tickets) => tickets.id===input.id ? tickets = input : tickets));
  }

  

  return (
    <div className="board-column">
      <div className="board-column__titleDiv">
        <h4>{boardTitle}</h4>
        <h4 onClick={() => openHandler()}>+</h4>
      </div>

      {dataState.map((ticket, index) => {
        return (
          <Ticket
            data={ticket}
            key={ticket.id}
            onDelete={() => deleteHandler(index)}
            onDetails={() => openHandler(index)}
          />
        );
      })}


      {/* <UpdateTicket isOpen={open} onClose={closeHandler} data={detailData}  setValFn={setDetailData}/> */}
      <UpdateTicket isOpen={open} onClose={closeHandler} data={detailData}  onUpdate={updateTicket}/>
    </div>
  );
}

export default BoardColumn;
