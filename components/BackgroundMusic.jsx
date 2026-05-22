'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Thiết lập các thuộc tính cho audio
    audio.loop = true;
    audio.volume = 0.3; // Âm lượng mặc định 30%

    // Lấy trạng thái mute từ localStorage
    const savedMuteState = localStorage.getItem('musicMuted');
    if (savedMuteState !== null) {
      const muted = JSON.parse(savedMuteState);
      setIsMuted(muted);
      audio.muted = muted;
      if (!muted) {
        audio.play().catch((error) => {
          console.log('Không thể phát nhạc:', error);
        });
      }
    } else {
      // Phát nhạc mặc định lần đầu tiên
      audio.muted = false;
      audio.play().catch((error) => {
        console.log('Không thể phát nhạc (autoplay bị block):', error);
      });
    }

    // Thêm event listener để phát nhạc khi người dùng click
    const playOnInteraction = () => {
      if (!hasUserInteracted && audio) {
        setHasUserInteracted(true);
        if (!audio.muted) {
          audio.play().catch((error) => {
            console.log('Không thể phát nhạc:', error);
          });
        }
      }
    };

    document.addEventListener('click', playOnInteraction);
    document.addEventListener('touchstart', playOnInteraction);

    return () => {
      document.removeEventListener('click', playOnInteraction);
      document.removeEventListener('touchstart', playOnInteraction);
      if (audio) {
        audio.pause();
      }
    };
  }, [hasUserInteracted]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    audio.muted = newMutedState;

    // Lưu trạng thái vào localStorage
    localStorage.setItem('musicMuted', JSON.stringify(newMutedState));

    // Phát nhạc nếu chưa phát
    if (!newMutedState) {
      audio.play().catch((error) => {
        console.log('Không thể phát nhạc:', error);
      });
      setIsPlaying(true);
    } else {
      audio.pause();
    }
  };

  return (
    <>
      {/* Audio element - thêm nhạc vào public/music folder */}
      <audio
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        {/* Thêm file nhạc vào đây */}
        <source src="/music/background.webm" type="audio/webm" />
      </audio>

      {/* Music control button */}
      <button
        onClick={toggleMute}
        className="fixed bottom-6 left-6 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl z-40"
        title={isMuted ? 'Bật nhạc' : 'Tắt nhạc'}
        aria-label={isMuted ? 'Bật nhạc' : 'Tắt nhạc'}
      >
        {isMuted ? (
          <VolumeX size={20} />
        ) : (
          <Volume2 size={20} />
        )}
      </button>
    </>
  );
}
