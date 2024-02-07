import "../style/detaildialog.css";

function DetailDialog({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  return (
    
      <div className="detaildialog">
        <div className="detaildialog__content">
            <h1>Dialog {data.title} </h1>
            <button onClick={onClose}>Closing</button>
        </div>
      </div>
  
  );
}

export default DetailDialog;
