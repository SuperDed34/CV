import './styles/styles.scss'
import { Burger } from './scripts/burger';

const burgerButton = document.querySelector('.burger') as HTMLElement;
const modalWindow = document.querySelector('.modal') as HTMLElement;

const burger = new Burger(modalWindow, burgerButton);

burgerButton.addEventListener('click', () => {
  burgerButton.classList.contains('opened') ? burger.close() : burger.open();
  console.log('click')
});
