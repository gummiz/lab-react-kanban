import React from "react";
import { useState, useEffect } from "react";
import "../style/boardcolumn.css";
import Ticket from "./Ticket";
import UpdateTicket from "./UpdateTicket";
import { useDroppable } from "@dnd-kit/core";

function BoardColumn({ boardTitle, data, onNewTicket, deleteData, createTicketUp, updatingDataFromDetails}) {
  const [dataState, setDataState] = useState(data);
  const [open, setOpen] = useState(false);
  const [detailData, setDetailData] = useState();
  const { setNodeRef } = useDroppable({
    id: boardTitle,
  });


    
  const deleteHandler = (index) => {
    deleteData(index);
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
    updatingDataFromDetails(input)
  };

  const displayCreatedDate = () => {
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const year = today.getFullYear();
    const day = today.getDate().toString().padStart(2, "0");
    const currentDate = year + "-" + month + "-" + day;
    return currentDate;
  };

  const createNewTicket = () => {
    const newID = onNewTicket();
    const newTicket = {
      id: newID,
      title: "new Ticket",
      createdDate: displayCreatedDate(),
      status: boardTitle,
    };
    createTicketUp(newTicket);
    setDetailData(newTicket);
  };

  //update Tickets once drag&drop is ended
  useEffect(() => {
    setDataState(data)
  }, [data])



  return (
    <div className="board-column">
      <div className="board-column__title">
        <h4>{boardTitle}</h4>
        {/* <h4 onClick={() => openHandler()}><i class="fa-solid fa-square-plus"></i></h4> */}
        <button
          onClick={() => openHandler()}
          className="board-column__title__plusBtn"
        >
          <i className="fa-solid fa-square-plus"></i>
        </button>
      </div>

      <div ref={setNodeRef} className="board-column__ticketholder">
        {dataState.map((ticket, index) => {
          return (
            <Ticket
              data={ticket}
              key={index}
              title={ticket.id}
              index={index}
              parent={boardTitle}
              onDelete={() => deleteHandler(index)}
              onDetails={() => openHandler(index)}
            />
          );
        })}
      </div>

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
