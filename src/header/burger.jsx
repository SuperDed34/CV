import Modal from '../modal/modal'
import './burger.css'

function burgerClick() {

  const burger = document.querySelector('.burger')
  const modal = document.querySelector('.modal')
  document.querySelector('.navigation')
  burger.classList.toggle('active')
  modal.classList.toggle('active')
}

function BurgerMenu(props) {

  const burger = document.querySelector('.burger')
  
  return (
    <>
      <div className="burger" onClick={burgerClick}>
        <div className="burger-middle"></div>
      </div>
      <Modal content={props.content} burger={burger}></Modal>
    </>
  )
}

export default BurgerMenu