import "../style/kanban.css";
import BoardColumn from "./BoardColumn";
import data from "../data/sampleData.json";
import { useState } from "react";

function Kanban() {
  const [ticketCount, setTicketCount] = useState(data.length)

  const boardArray = ["To Do", "In Progress", "Done"];

  const onNewTicket = () => {
    const newTicketId = ticketCount + 1
    setTicketCount(newTicketId)
    return newTicketId

  }  

  return (
    <div className="kanban">
      {boardArray.map((boardTitle, index) => {
        return (
          <BoardColumn
            boardTitle={boardTitle}
            key={index}
            data={data.filter(tickets => tickets.status === boardTitle)}
            // ticketCount={ticketCount} 
            onNewTicket={onNewTicket}
          />
        );
      })}
    </div>
  );
}

export default Kanban;
