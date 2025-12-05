import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Music } from "lucide-react";

const Thanks = ({ show, data, available }) => {
  if (show || available) return null;

  return (
    <div className="thanks-container w-full mb-8 animate-accordion-down">
      <Card className="glass border-white/20 overflow-hidden">
        <CardContent className="pt-6 pb-6 border-b border-white/10">
          <p className="text-lg italic text-center">
            Cảm ơn {data.name} đã gửi thư cho tớ
          </p>
        </CardContent>
        <div className="relative w-full h-64 overflow-hidden">
          <img
            src="https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png"
            alt="Tớ ngồi code sml"
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
        <CardFooter className="flex gap-3 pt-4 justify-center">
          <Button 
            variant="outline" 
            onClick={() => window.open("link cua cau", "_blank")}
            className="border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Direct của tớ
          </Button>
          <Button 
            variant="outline" 
            onClick={() => window.open("cai gi do", "_blank")}
            className="border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
          >
            <Music className="w-4 h-4 mr-2" />
            Playlist của tớ nè
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Thanks;

