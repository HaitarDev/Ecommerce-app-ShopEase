// eslint-disable-next-line react/prop-types, no-unused-vars
function Modal({ open, children, onCLose }) {
  if (!open) return null;

  return (
    <>
      <div className="overlay" onClick={onCLose} />
      <div className="modal">{children}</div>
    </>
  );
}

export default Modal;
