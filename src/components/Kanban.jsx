import "../style/kanban.css";
import BoardColumn from "./BoardColumn";
import data from "../data/sampleData.json";

function Kanban() {
  const boardArray = ["To Do", "In Progress", "Done"];

  return (
    <div className="kanban">
      {boardArray.map((boardTitle, index) => {
        return (
          <BoardColumn
            boardTitle={boardTitle}
            key={index}
            data={data.filter(tickets => tickets.status === boardTitle)}
          />
        );
      })}
    </div>
  );
}

export default Kanban;
