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
import { ExternalLink, BookOpen } from "lucide-react";

const HeadCard = ({ show, setShow, available, setShowLetter, showLetter }) => {
  return (
    <div className="headCard-container w-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Card className="overflow-hidden border-none shadow-xl ring-1 ring-black/5">
        <div className="relative w-full h-64 group">
          <img
            src={dc.headCard.image}
            alt="Letter image"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
            <p className="text-white/90 font-medium tracking-wide">Lưu bút online</p>
          </div>
        </div>
        
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                {dc.headCard.title}
              </CardTitle>
              <CardDescription className="flex items-center gap-1.5 cursor-pointer hover:text-primary transition-colors" onClick={() => window.open("https://www.facebook.com/yun.khngn/", "_blank")}>
                <ExternalLink className="w-3.5 h-3.5" />
                Made by {dc.myself}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {dc.headCard.content}
          </p>
          <p className="text-muted-foreground leading-relaxed">
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

