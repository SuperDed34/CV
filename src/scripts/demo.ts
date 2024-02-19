import { IDemo } from "../ts/interfaces";

export class Demo implements IDemo {
    demoElement: HTMLElement;
  constructor(demoElement: HTMLElement) {
    this.demoElement = demoElement;
  }

  showLogos(elementIndex:number): void {
    this.demoElement.setAttribute('src', `./assets/logo${elementIndex}.svg`)
  }

  changeBackground(): void {
    
  }

}