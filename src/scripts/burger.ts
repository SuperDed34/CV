export class Burger {
  private modal: HTMLElement;
  private burger: HTMLElement;
  private menu: NodeListOf<HTMLElement>

  constructor(modal: HTMLElement, burger: HTMLElement, menu: NodeListOf<HTMLElement>) {
    this.burger = burger;
    this.modal = modal;
    this.menu = menu;
    }
  open() {
    this.burger.classList.add('opened');
    this.modal.classList.add('show-modal');
    this.draw()
  }

  close() {
    this.burger.classList.remove('opened');
    this.modal.classList.remove('show-modal');
    this.modal.innerHTML = ''
  }

  draw() { 
    const cross = document.createElement('div')
    cross.classList.add('cross')
    cross.textContent = 'X'
    this.modal.appendChild(cross)
    cross.addEventListener('click', () => this.close())

    const wrapper = document.createElement('div')
    wrapper.classList.add('modal-wrapper')


    for (let item of this.menu) {
      let clone = item;
      wrapper.appendChild(clone)
    }

    wrapper.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A') {
        this.close()
      }
    })

    this.modal.appendChild(wrapper)
  }
}