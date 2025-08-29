export interface IPlayable {
    play(): void;
    pause(): void;
    stop(): void;
    info(): string;
}
export type VideoId = string;
export interface HistoryItem {
    id: VideoId;
    title: string;
    playedAt: Date;
}
//# sourceMappingURL=types.d.ts.map