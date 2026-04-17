'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

// Información Hardcodeada
const SONG_DATA = {
  title: "never Gonna Give you Up",
  artist: "Rick Astley",
  albumArt: "/rick.jpg", 
  audioSrc: "/rick.mp3" 
};

const AudioPlayer = () => {
  // CORRECCIÓN DEL ERROR 'never': Especificamos que es un HTMLAudioElement
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Verificación de seguridad para TypeScript
    if (!audioRef.current) return;

    if (isPlaying) {
      // Ahora TS sabe que .play() existe en HTMLAudioElement
      audioRef.current.play().catch((err) => {
        console.error("Error al reproducir:", err);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-center">
      <audio
        ref={audioRef}
        src={SONG_DATA.audioSrc}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="w-full max-w-[95vw] md:max-w-4xl bg-[#1e1e2e]/95 backdrop-blur-md border border-white/10 p-3 md:p-4 rounded-2xl shadow-2xl flex items-center gap-3 md:gap-5">
        
        {/* IMAGEN */}
        <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
          <Image
            src={SONG_DATA.albumArt}
            alt="Art"
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </div>

        {/* INFO Y BARRA (CENTRO) */}
        <div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
          <div className="flex justify-between items-center">
            <div className="truncate pr-4">
              <h3 className="text-sm md:text-base font-bold text-white truncate leading-tight">{SONG_DATA.title}</h3>
              <p className="text-[10px] md:text-xs text-gray-400 truncate">{SONG_DATA.artist}</p>
            </div>
            
            {/* PLAY MINI (MÓVIL) */}
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="md:hidden w-9 h-9 bg-white rounded-full flex items-center justify-center text-black active:scale-90 transition"
            >
              {isPlaying ? <Pause size={16} fill="black" /> : <Play size={16} fill="black" className="ml-0.5" />}
            </button>
          </div>

          {/* BARRA DE PROGRESO (Visible en Desktop, muy fina en móvil) */}
          <div className="flex items-center gap-2">
            <span className="hidden md:inline text-[10px] text-gray-500 font-mono w-8">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#f5c2e7]" 
            />
            <span className="hidden md:inline text-[10px] text-gray-500 font-mono w-8">{formatTime(duration)}</span>
          </div>
        </div>

        {/* CONTROLES DERECHA (DESKTOP) */}
        <div className="hidden md:flex items-center gap-6 pl-4 border-l border-white/5">
          <button onClick={toggleMute} className="text-gray-400 hover:text-[#f5c2e7] transition">
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 bg-[#f5c2e7] rounded-full flex items-center justify-center text-[#1e1e2e] hover:scale-110 active:scale-95 transition shadow-lg shadow-[#f5c2e7]/20"
            >
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
            </button>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default AudioPlayer;