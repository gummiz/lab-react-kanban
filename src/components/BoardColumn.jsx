import React from "react";
import { useState } from "react";
import "../style/boardcolumn.css";
import Ticket from "./Ticket";
import DetailDialog from "./DatailDialog";

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
    setDetailData(dataState[index]);
    setOpen(true);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <div className="board-column">
      <div className="board-column__titleDiv">
        <h4>{boardTitle}</h4>
        <h4>+</h4>
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

      <DetailDialog isOpen={open} onClose={closeHandler} data={detailData} />
    </div>
  );
}

export default BoardColumn;
