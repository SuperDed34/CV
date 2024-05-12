import './modal.css'


function Modal(props) {

  function closeModal(e) {
    props.burger.classList.toggle('active')
    e.currentTarget.classList.toggle('active')
  }

  const content = props.content
  return (
    <div className="modal" onClick={closeModal}>
      {content}
    </div>
  )
}

export default Modal