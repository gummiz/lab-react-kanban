import '../style/kanban.css';
import BoardColumn from './BoardColumn';
import data from '../data/sampleData.json';
import { useState } from 'react';

function Kanban() {
  const [countTickets, setCountTickets] = useState(data.length);
  const boardArray = ['To Do', 'In Progress', 'Done'];

  const incrementCountTickets = () => {
    setCountTickets((prevCount) => prevCount + 1);
  };

  return (
    <div className="kanban">
      {boardArray.map((boardTitle, index) => {
        return (
          <BoardColumn
            boardTitle={boardTitle}
            key={index}
            data={data.filter((tickets) => tickets.status === boardTitle)}
            ticketsCount={countTickets}
            incrementCountTickets={incrementCountTickets}
          />
        );
      })}
    </div>
  );
}

export default Kanban;
