import type { interVideo } from "./interface.js";

// encapusalmento, atributos privados e metodos publicos
export class Video {
  private title: string;
  private durationS: number; // segundos

  constructor(title: string, duration: number) {
    this.title = title;
    this.durationS = duration;
  }

  getTitle(): string {
    return this.title;
  }

  getDuration(): number {
    return this.durationS;
  }

  public play(): void {
    console.log(`Reproduzindo vídeo: ${this.title} (${this.durationS}s)`);
  }

  public pause(): void {
    console.log(`Vídeo pausado: ${this.title}`);
  }

  public stop(): void {
    console.log(`Vídeo parado: ${this.title}`);
  } 

  public info(): void {
    console.log(`Título: ${this.title}, Duração: ${this.durationS}s`);
  }
}
