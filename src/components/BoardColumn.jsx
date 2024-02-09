import React from 'react';
import { useState } from 'react';
import '../style/boardcolumn.css';
import Ticket from './Ticket';
import UpdateTicket from './UpdateTicket';

function BoardColumn({
  boardTitle,
  data,
  ticketsCount,
  incrementCountTickets,
}) {
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
    typeof index !== 'undefined'
      ? setDetailData(dataState[index])
      : addNewTicket();

    setOpen(true);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  const updateTicket = (input) => {
    setDataState(
      dataState.map((tickets) =>
        tickets.id === input.id ? (tickets = input) : tickets
      )
    );
    console.log(dataState);
  };

  const displayCreatedDate = () => {
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();
    const day = today.getDate().toString().padStart(2, '0');
    const currentDate = year + '-' + month + '-' + day;
    return currentDate;
  };

  const addNewTicket = () => {
    incrementCountTickets();
    const newTicket = {
      id: `${ticketsCount + 1}`,
      title: 'new Ticket',
      status: `${boardTitle}`,
      createdDate: displayCreatedDate(),
    };
    setDataState([...dataState, newTicket]);
    setDetailData(newTicket);

    console.log(newTicket);
  };

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
