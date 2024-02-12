import "../style/kanban.css";
import BoardColumn from "./BoardColumn";
import data from "../data/sampleData.json";
import { useState } from "react";
import { DndContext, rectIntersection } from "@dnd-kit/core";

function Kanban() {
  const [ticketCount, setTicketCount] = useState(data.length);

  const boardArray = ["To Do", "In Progress", "Done"];

  const onNewTicket = () => {
    const newTicketId = ticketCount + 1;
    setTicketCount(newTicketId);
    return newTicketId;
  };

  return (
    <DndContext collisionDetection={rectIntersection}
    onDragEnd={(e) =>{
      const container = e.over?.id;
      const title = e.active.data.current?.title ?? "";
      const index = e.active.data.current?.index ?? 0;
      const parent = e.active.data.current?.parent ?? "To Do";
      console.log("Container:", container);
      console.log("Title:", title);
      console.log("Index:", index);
      console.log("Parent:", parent);
      //Implement Conditions ....
    } }
    >
      <div className="kanban">
        {boardArray.map((boardTitle, index) => {
          return (
            <BoardColumn
              boardTitle={boardTitle}
              key={index}
              data={data.filter((tickets) => tickets.status === boardTitle)}
              // ticketCount={ticketCount}
              onNewTicket={onNewTicket}
            />
          );
        })}
      </div>
    </DndContext>
  );
}

export default Kanban;
