import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dc from "@/lib/DataConfig";
import { ExternalLink } from "lucide-react";

const HeadCard = ({ show, setShow, available, setShowLetter, showLetter }) => {
  return (
    <div className="headCard-container w-full mb-8 animate-accordion-down">
      <Card className="glass border-white/20 overflow-hidden">
        <div className="relative w-full h-64 overflow-hidden group cursor-pointer">
          <img
            src={dc.headCard.image}
            alt="Letter image"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p className="text-white font-medium">Lưu bút online</p>
          </div>
        </div>
        
        <CardHeader className="cursor-pointer hover:bg-white/5 transition-colors" onClick={() => window.open("https://www.facebook.com/yun.khngn/", "_blank")}>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                {dc.headCard.title + " " + dc.myself}
              </CardTitle>
              <CardDescription className="flex items-center gap-1 mt-1 hover:text-blue-400 transition-colors">
                Created by @yun.khngn <ExternalLink className="w-3 h-3" />
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-foreground/90 leading-relaxed">
            {dc.headCard.content}
          </p>
          <p className="text-foreground/90 leading-relaxed">
            {dc.headCard.content2}
          </p>
        </CardContent>
        
        <CardFooter className="flex gap-3 pt-4 border-t border-white/10">
          <Button 
            variant={show ? "secondary" : "default"}
            onClick={() => setShow(!show)} 
            disabled={!available}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {dc.headCard.button1}
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setShow(false) & setShowLetter(!showLetter)} 
            disabled={available}
            className="flex-1 border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
          >
            {dc.headCard.button2}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HeadCard;

