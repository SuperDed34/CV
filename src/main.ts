import './styles/styles.scss'
import { Burger } from './scripts/burger';
import { Demo } from './scripts/demo';

const burgerButton = document.querySelector('.burger') as HTMLElement
const modalWindow = document.querySelector('.modal') as HTMLElement
const logo = document.querySelector('.logo') as HTMLElement

const burger = new Burger(modalWindow, burgerButton)
const demoLogo = new Demo(logo);

burgerButton.addEventListener('click', () => {
  burgerButton.classList.contains('opened') ? burger.close() : burger.open();
});

const logoCounter: number = 3
let counter: number = 0

logo.addEventListener('click', () => {
  if (counter < logoCounter) {
    counter++
  } else if (counter === logoCounter) {
    counter = 0
  } 
  demoLogo.showLogos(counter);
})


