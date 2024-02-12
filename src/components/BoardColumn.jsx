import React from "react";
import { useState } from "react";
import "../style/boardcolumn.css";
import Ticket from "./Ticket";
import UpdateTicket from "./UpdateTicket";

function BoardColumn({ boardTitle, data, onNewTicket }) {
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
     typeof index !== "undefined"
      ? setDetailData(dataState[index])
      : createNewTicket();
    setOpen(true);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  const updateTicket = (input) => {
    console.log("updated");

    setDataState(
      dataState.map((tickets) =>
        tickets.id === input.id ? (tickets = input) : tickets
      )
    );
  };
    
  const displayCreatedDate = () => {
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();
    const day = today.getDate().toString().padStart(2, '0');
    const currentDate = year + '-' + month + '-' + day;
    return currentDate;
  };

  const createNewTicket = () => {
    const newID = onNewTicket();
    const newTicket = { id: newID, title: "new Ticket",  createdDate: displayCreatedDate(), status: boardTitle };
    const updatedData = [newTicket, ...dataState];
    setDataState(updatedData);

    console.log("New Ticket", newTicket);
    console.table(newTicket);
    setDetailData(newTicket);
  };

  return (
    <div className="board-column">
      <div className="board-column__title">
        <h4>{boardTitle}</h4>
        {/* <h4 onClick={() => openHandler()}><i class="fa-solid fa-square-plus"></i></h4> */}
        <button onClick={() => openHandler()} className="board-column__title__plusBtn"><i className="fa-solid fa-square-plus"></i></button>
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
      <UpdateTicket
        isOpen={open}
        onClose={closeHandler}
        data={detailData}
        onUpdate={updateTicket}
      />
    </div>
  );
}

export default BoardColumn;
