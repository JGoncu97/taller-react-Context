import React, { useState, useRef } from "react";
import { ControllerSound } from './ControllerSound'


export const SoundPlayer = () => {

    const audioRef = useRef(null); 
    const [songIndex, setSongIndex] = useState(0); 
    const songs = [
        { title: "Shape of You", artist: "Ed Sheeran", duration: "3:54", src: "/songs/shape-of-you.mp3" },
        { title: "Blinding Lights", artist: "The Weeknd", duration: "3:20", src: "/songs/blinding-lights.mp3" },
        { title: "Levitating", artist: "Dua Lipa", duration: "3:23", src: "/songs/levitating.mp3" }
      ];
      

const playSong = () => audioRef.current.play();
const pauseSong = () => audioRef.current.pause();
const resetSong = () => { audioRef.current.currentTime = 0; pauseSong(); };
const nextSong = () => setSongIndex((songIndex + 1) % songs.length);
const prevSong = () => setSongIndex((songIndex - 1 + songs.length) % songs.length);

return (
  <div className="p-4 bg-gray-800 text-white text-center rounded-lg">
    <h2 className="text-lg font-bold">{songs[songIndex].title}</h2>
    <audio ref={audioRef} src={songs[songIndex].src}></audio>
    
  
    <div className="mt-4 space-x-2">
      <button onClick={prevSong}>⏮ Anterior</button>
      <button onClick={playSong}>▶ Play</button>
      <button onClick={pauseSong}>⏸ Pausa</button>
      <button onClick={resetSong}>🔄 Reiniciar</button>
      <button onClick={nextSong}>⏭ Siguiente</button>
    </div>
  </div>
);
};