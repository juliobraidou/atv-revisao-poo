import { Video } from "./video.js";

export class Playlist {
  private name: string;
  private videos: Video[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public addVideo(video: Video): void {
    this.videos.push(video);
  }

  getVideos(): Video[] {
    return this.videos;
  }

  getName(): string {
    return this.name;
  }
}
