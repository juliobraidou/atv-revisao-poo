import { Video } from "./video.js";
export class LiveStream extends Video {
    viewers;
    constructor(title, durationS, viewers) {
        super(title, durationS);
        this.viewers = viewers;
    }
    // polimorfismo: foi reescrito o metodo play
    play() {
        console.log(`Transmissão ao vivo: ${this.getTitle()} (${this.viewers} espectadores)`);
    }
    info() {
        console.log(`Live: ${this.getTitle()} com ${this.viewers} espectadores.`);
    }
}
//# sourceMappingURL=liveStream.js.map