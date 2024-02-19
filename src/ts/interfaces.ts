export interface IDemo {
  demoElement: HTMLElement;

  constructor(demoElement: HTMLElement): void

  showLogos(elementIndex:number): void;
  changeBackground(): void;


}