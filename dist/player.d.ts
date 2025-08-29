import { Playlist } from "./playlist.js";
export declare class Player {
    private playlist;
    private idAtual;
    private loop;
    private shuffle;
    private historico;
    constructor(playlist: Playlist);
    play(): void;
    pause(): void;
    stop(): void;
    info(): void;
    next(): void;
    previous(): void;
    toggleLoop(): void;
    toggleShuffle(): void;
    historicoVideos(): void;
}
//# sourceMappingURL=player.d.ts.map