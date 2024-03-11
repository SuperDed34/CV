import { Patricipants } from "../ts/interfaces";
import performers from "./participants.json";

export class ParticipantsBuilder {
  private counter = 0
  constructor() {
    this.draw();
  }

  public draw() {
    const perf: Patricipants[] = Object.values(performers.performers);
    perf.forEach(perfomance => {
      this.drawingLogic(this.drawParticipants(perfomance))
    })
  }

  private drawParticipants(participant: Patricipants) {
    const card = document.createElement('div')
    card.classList.add('other-card')

    const img = document.createElement('img')
    img.classList.add('other-img')
    img.alt = participant.name
    img.src = participant.imgPath

    const cardName = document.createElement('h3')
    cardName.classList.add('card-name')
    cardName.textContent = participant.name

    const cardRole = document.createElement('p')
    cardRole.classList.add('card-role')
    cardRole.textContent = participant.role

    card.appendChild(img)
    card.appendChild(cardName)
    card.appendChild(cardRole)

    this.counter++

    return card
  }


  private drawingLogic(card: HTMLDivElement) {
    let participantDiv = document.querySelector('.other-participant')
      participantDiv?.appendChild(card)
    
  }
}