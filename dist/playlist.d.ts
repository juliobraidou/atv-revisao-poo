import { Video } from "./video.js";
export declare class Playlist {
    private name;
    private videos;
    constructor(name: string);
    addVideo(video: Video): void;
    getVideos(): Video[];
    getName(): string;
}
//# sourceMappingURL=playlist.d.ts.map