import { Video } from "./video.js";
export class Playlist {
    name;
    videos = [];
    constructor(name) {
        this.name = name;
    }
    addVideo(video) {
        this.videos.push(video);
    }
    getVideos() {
        return this.videos;
    }
    getName() {
        return this.name;
    }
}
//# sourceMappingURL=playlist.js.map