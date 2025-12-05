import { React, useEffect, useState } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, ExternalLink } from "lucide-react";

const Nhac = "/nhac.mp3";

const useAudio = url => {
  const [audio] = useState(typeof Audio !== "undefined" ? new Audio(url) : null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => { setPlaying(!playing); };

  const replay = () => {
    if (audio) {
      audio.currentTime = 0;
      setPlaying(true);
    }
  };

  useEffect(() => {
    if (audio) {
      audio.volume = 0.7;
      playing ? audio.play() : audio.pause();
    }
  }, [playing, audio]);

  useEffect(() => {
    if (audio) {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }
  }, [audio]);

  return [playing, toggle, replay];
};

const MusicPlayer = () => {
  const [playing, toggle, replay] = useAudio(Nhac);

  return (
    <div className="music-container w-full mb-8 animate-accordion-down">
      <Card className="glass border-white/20 flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-[250px] aspect-square relative group">
          <img
            src="https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png"
            alt="Music Cover"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <Button
              size="icon"
              variant="ghost"
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
              onClick={toggle}
            >
              {playing ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
            </Button>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center p-6">
          <CardContent className="p-0 space-y-4">
            <div>
              <h3 className="text-2xl font-bold">Cá hồi (Hoang)</h3>
              <p className="text-muted-foreground">Ngọt band</p>
            </div>
            
            <p className="text-sm text-muted-foreground italic">
              Thay nhạc của cậu vào đây này
            </p>
            
            <div className="flex gap-3 pt-2">
              <Button variant="outline" onClick={replay} className="border-white/20 hover:bg-white/10">
                <RotateCcw className="w-4 h-4 mr-2" />
                Replay
              </Button>
              <Button 
                variant="outline" 
                className="border-green-500/30 text-green-600 hover:bg-green-500/10 hover:text-green-700"
                onClick={() => window.open("play list của cậu", "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Playlist
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default MusicPlayer;

