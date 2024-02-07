import "../style/detaildialog.css";

function DetailDialog({ isOpen, onClose, data}) {
  if (!isOpen) return null;

  return (
    <>
      <h1>Dialog {data.title} </h1>
      <button onClick={onClose}>Closing</button>
    </>
  );
}

export default DetailDialog;
