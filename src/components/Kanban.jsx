import "../style/kanban.css";
import BoardColumn from "./BoardColumn";
import data from "../data/sampleData.json";
import { useEffect, useState } from "react";
import {
  DndContext,
  rectIntersection,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Kanban() {
  const [ticketCount, setTicketCount] = useState(data.length);
  const [dataAll, setDataAll] = useState(data);

  // ========== Dnd-kit Sensors ====
  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });

  const sensors = useSensors(mouseSensor);

  // ============ TOATS MESSAGES =========
  const showNewTicketMessage = () => {
    toast.success("New Ticket created!", {
      position: "top-right"
    });
  };

  const showUpdateMessage = () => {
    toast.success("Ticket was updated!", {
      position: "top-right"
      
    });
  };

  const showDeleteMessage = () => {
    toast.success("Your ticket has been delete!", {
      position: "top-right"
    });
  };


  const boardArray = ["To Do", "In Progress", "Done"];

  const onNewTicket = () => {
    const newTicketId = ticketCount + 1;
    setTicketCount(newTicketId);
    showNewTicketMessage();
    return newTicketId;
  };

  const changeColumn = (id, container) => {
    const newData = [...dataAll];
    newData.forEach((ticket) => {
      if (ticket.id === id) {
        ticket.status = container;
      }
    });
    setDataAll(newData);
  };

  const deleteData = (index) => {
    const updatedData = [...dataAll];
    updatedData.splice(index, 1);
    setDataAll(updatedData);
    showDeleteMessage()
  };

  const createTicketUp = (newTicket) => {
    const updatedData = [newTicket, ...dataAll];
    setDataAll(updatedData);
  };

  const updatingDataFromDetails = (input) => {
    setDataAll(
      dataAll.map((tickets) =>
        tickets.id === input.id ? (tickets = input) : tickets
      )
    );
    showUpdateMessage();
  };



  return (
    <DndContext
      collisionDetection={rectIntersection}
      sensors={sensors}
      onDragEnd={(e) => {
        const container = e.over?.id;
        const title = e.active.data.current?.title ?? "";
        const index = e.active.data.current?.index ?? 0;
        const parent = e.active.data.current?.parent ?? "To Do";
        // console.log("Container (Target):", container);
        // console.log("ID:", title);
        // console.log("Index:", index);
        // console.log("Parent (coming from):", parent);
        // console.log("------------------------");

        //update the
        changeColumn(title, container);
      }}
    >
      <div className="kanban" >
        {boardArray.map((boardTitle, index) => {
          return (
            <BoardColumn
              boardTitle={boardTitle}
              key={index}
              data={dataAll.filter((tickets) => tickets.status === boardTitle)}
              // ticketCount={ticketCount}
              onNewTicket={onNewTicket}
              deleteData={deleteData}
              createTicketUp={createTicketUp}
              updatingDataFromDetails={updatingDataFromDetails}
            />
          );
        })}
        <ToastContainer />
      </div>
    </DndContext>
  );
}

export default Kanban;
