import { Video } from "./video.js";

// herança de video
export class LiveStream extends Video {
  private viewers: number;

  constructor(
    title: string, 
    durationS: number, 
    viewers: number)
    {
    super(title, durationS);
    this.viewers = viewers;
  }

  // polimorfismo: foi reescrito o metodo play
  public play(): void {
    console.log(`Transmissão ao vivo: ${this.getTitle()} (${this.viewers} espectadores)`);
  }

  public info(): void {
    console.log(`Live: ${this.getTitle()} com ${this.viewers} espectadores.`);
  }
}
