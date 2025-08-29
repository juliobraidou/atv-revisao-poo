export class Video {
    title;
    durationS; // segundos
    constructor(title, duration) {
        this.title = title;
        this.durationS = duration;
    }
    getTitle() {
        return this.title;
    }
    getDuration() {
        return this.durationS;
    }
    play() {
        console.log(`Reproduzindo vídeo: ${this.title} (${this.durationS}s)`);
    }
    pause() {
        console.log(`Vídeo pausado: ${this.title}`);
    }
    stop() {
        console.log(`Vídeo parado: ${this.title}`);
    }
    info() {
        console.log(`Título: ${this.title}, Duração: ${this.durationS}s`);
    }
}
//# sourceMappingURL=video.js.map