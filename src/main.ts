import { Video} from "./video.js";
import { LiveStream } from "./liveStream.js";
import { Playlist } from "./playlist.js";
import { Player } from "./player.js";

// criando video e livestream

const video1 = new Video("Aula do Marcelo", 400);
const live1 = new LiveStream("Live da Feob", 9999, 30);

// criando a playlist 

const playlist = new Playlist("Meus videos");
playlist.addVideo(video1);
playlist.addVideo(live1);


const player = new Player(playlist);

// testando player

player.info();
player.play();
player.pause();
player.stop();
player.next();
player.previous();
player.toggleShuffle();
player.toggleShuffle();
player.toggleLoop();
player.toggleLoop();
player.historicoVideos();