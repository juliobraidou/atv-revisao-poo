import { Playlist } from "./playlist.js";
export class Player {
    playlist;
    idAtual = 0;
    loop = false;
    shuffle = false;
    historico = [];
    constructor(playlist) {
        this.playlist = playlist;
    }
    // metodos controle player
    play() {
        const video = this.playlist.getVideos()[this.idAtual];
        if (!video)
            return console.log("Nenhum vídeo para reproduzir.");
        video.play();
        this.historico.push(video);
    }
    pause() {
        const video = this.playlist.getVideos()[this.idAtual];
        if (!video)
            return console.log("Nenhum vídeo para pausar.");
        video.pause();
    }
    stop() {
        const video = this.playlist.getVideos()[this.idAtual];
        if (!video)
            return console.log("Nenhum vídeo para parar.");
        video.stop();
    }
    info() {
        const video = this.playlist.getVideos()[this.idAtual];
        console.log(`Playlist: ${this.playlist.getName()}`);
        if (video)
            video.info();
    }
    // metodos de navegação
    next() {
        const videos = this.playlist.getVideos();
        if (this.shuffle) {
            this.idAtual = Math.floor(Math.random() * videos.length);
        }
        else {
            this.idAtual++;
            if (this.idAtual >= videos.length) {
                this.idAtual = this.loop ? 0 : videos.length - 1;
            }
        }
        this.play();
    }
    previous() {
        const videos = this.playlist.getVideos();
        this.idAtual--;
        if (this.idAtual < 0) {
            this.idAtual = this.loop ? videos.length - 1 : 0;
        }
        this.play();
    }
    // metodos de modo (loop/shuffle)
    toggleLoop() {
        this.loop = !this.loop;
        console.log(`Loop ${this.loop ? "Ativado" : "Desativado"}`);
    }
    toggleShuffle() {
        this.shuffle = !this.shuffle;
        console.log(`Shuffle ${this.shuffle ? "Ativado" : "Desativado"}`);
    }
    // historico
    historicoVideos() {
        console.log("Histórico de vídeos reproduzidos:");
        this.historico.forEach(video => video.info());
    }
}
//# sourceMappingURL=player.js.map