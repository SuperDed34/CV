export interface IDemo {
  demoElement: HTMLElement;

  showLogos(elementIndex:number): void;
  changeBackground(): void;
}

export type Patricipants = {
  imgPath: string,
  name: string,
  role: string
}