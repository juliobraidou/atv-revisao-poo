import type { interVideo } from "./interface.js";   
import { Playlist } from "./playlist.js";

export class Player {
    private playlist: Playlist;
    private idAtual: number = 0;
    private loop: boolean = false;
    private shuffle: boolean = false;
    private historico: interVideo[] = [];

    constructor(playlist: Playlist) {
        this.playlist = playlist;
    }

    // metodos controle player
    public play(): void {
        const video = this.playlist.getVideos()[this.idAtual];
        if (!video) return console.log("Nenhum vídeo para reproduzir.");
        video.play();
        this.historico.push(video);
    }

    public pause(): void {
        const video = this.playlist.getVideos()[this.idAtual];
        if (!video) return console.log("Nenhum vídeo para pausar.");
        video.pause();
    }

    public stop(): void {
        const video = this.playlist.getVideos()[this.idAtual];
        if (!video) return console.log("Nenhum vídeo para parar.");
        video.stop();
    }

    public info(): void {
        const video = this.playlist.getVideos()[this.idAtual];
        console.log(`Playlist: ${this.playlist.getName()}`);
        if (video) video.info();
    }

    

    // metodos de navegação
    public next(): void {
        const videos = this.playlist.getVideos();
        if (this.shuffle) {
            this.idAtual = Math.floor(Math.random() * videos.length);
        } else {
            this.idAtual++;
            if (this.idAtual >= videos.length) {
                this.idAtual = this.loop ? 0 : videos.length - 1;
            }
        }
        this.play();
    }

    public previous(): void {
        const videos = this.playlist.getVideos();
        this.idAtual--;
        if (this.idAtual < 0) {
            this.idAtual = this.loop ? videos.length - 1 : 0;
        }
        this.play();
    }

    // metodos de modo (loop/shuffle)
    
    public toggleLoop(): void {
        this.loop = !this.loop;
        console.log(`Loop ${this.loop ? "Ativado" : "Desativado"}`);
    }

    public toggleShuffle(): void {
        this.shuffle = !this.shuffle;
        console.log(`Shuffle ${this.shuffle ? "Ativado" : "Desativado"}`);
    }

    // historico
    public historicoVideos(): void {
        console.log("Histórico de vídeos reproduzidos:");
        this.historico.forEach(video => video.info());
    }
}
