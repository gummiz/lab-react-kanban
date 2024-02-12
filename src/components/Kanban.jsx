import "../style/kanban.css";
import BoardColumn from "./BoardColumn";
import data from "../data/sampleData.json";
import { useEffect, useState } from "react";
import { DndContext, rectIntersection } from "@dnd-kit/core";

function Kanban() {
  const [ticketCount, setTicketCount] = useState(data.length);
  const [dataAll, setDataAll] = useState(data);

  const boardArray = ["To Do", "In Progress", "Done"];

  const onNewTicket = () => {
    const newTicketId = ticketCount + 1;
    setTicketCount(newTicketId);
    return newTicketId;
  };

  const changeColumn = (id, container) => {
    const newData = [...dataAll];
    newData.forEach((ticket) => {
      if(ticket.id === id){
        ticket.status = container;
      }
    })
    setDataAll(newData);
    console.table(dataAll);
  }

  const deleteData = (index) => {
    console.log("delete index:", index);
    const updatedData = [...dataAll];
    updatedData.splice(index, 1);
    setDataAll(updatedData);
  }

const updateTicketUp = (newTicket) => {
  const updatedData = [newTicket, ...dataAll];
    setDataAll(updatedData);
}

  return (
    <DndContext collisionDetection={rectIntersection}
    onDragEnd={(e) =>{
      const container = e.over?.id;
      const title = e.active.data.current?.title ?? "";
      const index = e.active.data.current?.index ?? 0;
      const parent = e.active.data.current?.parent ?? "To Do";
      console.log("Container (Target):", container);
      console.log("ID:", title);
      console.log("Index:", index);
      console.log("Parent (coming from):", parent);
      console.log("------------------------");
      
      //update the 
      changeColumn(title, container);
    } }
    >
      <div className="kanban">
        {boardArray.map((boardTitle, index) => {
          return (
            <BoardColumn
              boardTitle={boardTitle}
              key={index}
              data={dataAll.filter((tickets) => tickets.status === boardTitle)}
              // ticketCount={ticketCount}
              onNewTicket={onNewTicket}
              deleteData={deleteData}
              updateTicketUp={updateTicketUp}
            />
          );
        })}
      </div>
    </DndContext>
  );
}

export default Kanban;
