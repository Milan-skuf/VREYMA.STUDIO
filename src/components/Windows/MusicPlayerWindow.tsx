import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Music, Disc } from 'lucide-react';
import { Track } from '../../types';

const TRACKS: Track[] = [
  { id: '1', title: 'Midnight Coding Session', artist: 'ILNUR Lo-Fi Beats', duration: '2:45', genre: 'Chillhop' },
  { id: '2', title: 'Kazan Rainy Studio', artist: 'Anime Lofi Vol. 2', duration: '3:10', genre: 'Ambient' },
  { id: '3', title: 'Figma & Mechanical Keys', artist: 'Pixel Dreams', duration: '2:15', genre: 'Synthwave' },
  { id: '4', title: 'Coffee & WebGL Shaders', artist: 'Chilled Cow Studio', duration: '3:35', genre: 'Lo-Fi Jazz' }
];

interface MusicPlayerWindowProps {
  isMuted: boolean;
  onToggleMute: () => void;
}

export const MusicPlayerWindow: React.FC<MusicPlayerWindowProps> = ({ isMuted, onToggleMute }) => {
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const track = TRACKS[currentTrackIdx];

  // Start sound using web audio API lo-fi synth tone
  const startSynthSound = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      // Stop existing oscillators
      stopSynthSound();

      const ctx = audioCtxRef.current;
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(isMuted ? 0 : volume * 0.15, ctx.currentTime);
      gainNode.connect(ctx.destination);
      gainRef.current = gainNode;

      // Chord frequencies for lo-fi vibe (Cmaj7 / Am9)
      const freqs = [
        [261.63, 329.63, 392.00, 493.88], // Cmaj7
        [220.00, 261.63, 329.63, 392.00], // Am7
        [174.61, 220.00, 261.63, 329.63], // Fmaj7
        [196.00, 246.94, 293.66, 349.23], // G7
      ];

      const currentChord = freqs[currentTrackIdx % freqs.length];

      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(currentChord[0], ctx.currentTime);
      osc1.connect(gainNode);
      osc1.start();
      osc1Ref.current = osc1;

      const osc2 = ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(currentChord[1], ctx.currentTime);
      osc2.connect(gainNode);
      osc2.start();
      osc2Ref.current = osc2;

      setIsPlaying(true);
    } catch (err) {
      console.warn('Audio playback error', err);
    }
  };

  const stopSynthSound = () => {
    if (osc1Ref.current) {
      try { osc1Ref.current.stop(); } catch (e) {}
      osc1Ref.current = null;
    }
    if (osc2Ref.current) {
      try { osc2Ref.current.stop(); } catch (e) {}
      osc2Ref.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopSynthSound();
    } else {
      startSynthSound();
    }
  };

  useEffect(() => {
    if (gainRef.current && audioCtxRef.current) {
      gainRef.current.gain.setValueAtTime(isMuted ? 0 : volume * 0.15, audioCtxRef.current.currentTime);
    }
  }, [volume, isMuted]);

  useEffect(() => {
    return () => {
      stopSynthSound();
    };
  }, []);

  const nextTrack = () => {
    setCurrentTrackIdx((prev) => (prev + 1) % TRACKS.length);
    if (isPlaying) {
      setTimeout(startSynthSound, 100);
    }
  };

  const prevTrack = () => {
    setCurrentTrackIdx((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
    if (isPlaying) {
      setTimeout(startSynthSound, 100);
    }
  };

  return (
    <div className="space-y-6 max-w-md mx-auto font-sans text-zinc-900">
      
      {/* Vinyl Disc Visualizer */}
      <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 flex flex-col items-center justify-center space-y-4">
        <div className={`relative w-32 h-32 rounded-full bg-black border-4 border-zinc-200 flex items-center justify-center shadow-2xl ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '10s' }}>
          <div className="w-12 h-12 rounded-full bg-black border border-white flex items-center justify-center text-white font-mono font-bold text-xs">
            LO-FI
          </div>
          <Disc className="absolute w-28 h-28 text-white/20 pointer-events-none" />
        </div>

        <div className="text-center space-y-1">
          <h3 className="font-bold text-base text-black">{track.title}</h3>
          <p className="text-xs text-zinc-600 font-mono font-bold">{track.artist} • {track.genre}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 space-y-4 font-mono">
        
        {/* Playback buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevTrack}
            className="p-2 text-zinc-600 hover:text-black transition-colors cursor-pointer"
          >
            <SkipBack className="w-5 h-5" />
          </button>

          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-black hover:bg-zinc-800 text-white flex items-center justify-center shadow-lg transition-all cursor-pointer"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>

          <button
            onClick={nextTrack}
            className="p-2 text-zinc-600 hover:text-black transition-colors cursor-pointer"
          >
            <SkipForward className="w-5 h-5" />
          </button>
        </div>

        {/* Volume slider */}
        <div className="flex items-center gap-3 px-2">
          <button onClick={onToggleMute} className="text-zinc-600 hover:text-black cursor-pointer">
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-full accent-black bg-zinc-200 h-1.5 rounded-lg cursor-pointer"
          />
          <span className="text-[10px] font-mono text-zinc-500 font-bold w-8">{Math.round((isMuted ? 0 : volume) * 100)}%</span>
        </div>

      </div>

      {/* Track list */}
      <div className="space-y-2 font-mono">
        <h4 className="text-xs font-bold text-black uppercase tracking-widest">// STUDIO PLAYLIST:</h4>
        <div className="space-y-1">
          {TRACKS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => {
                setCurrentTrackIdx(idx);
                if (!isPlaying) startSynthSound();
              }}
              className={`w-full p-2.5 rounded-xl border text-left text-xs transition-colors flex justify-between items-center cursor-pointer ${
                currentTrackIdx === idx
                  ? 'bg-black border-black text-white font-bold'
                  : 'bg-white border-zinc-200 text-zinc-700 hover:text-black hover:bg-zinc-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <Music className="w-3.5 h-3.5" />
                <span>{t.title}</span>
              </div>
              <span className={`font-mono text-[10px] ${currentTrackIdx === idx ? 'text-zinc-300' : 'text-zinc-400'}`}>{t.duration}</span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

