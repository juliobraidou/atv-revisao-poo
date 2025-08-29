import { Video } from "./video.js";
export declare class LiveStream extends Video {
    private viewers;
    constructor(title: string, durationS: number, viewers: number);
    play(): void;
    info(): void;
}
//# sourceMappingURL=liveStream.d.ts.map