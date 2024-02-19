
export class Burger {
  private modal: HTMLElement;
  private burger: HTMLElement;

  constructor(modal: HTMLElement, burger: HTMLElement) {
    this.burger = burger;
    this.modal = modal;
    }
  open() {
    this.burger.classList.add('opened');
    this.modal.classList.add('show-modal');
  }

  close() {
    this.burger.classList.remove('opened');
    this.modal.classList.remove('show-modal');
  }
}