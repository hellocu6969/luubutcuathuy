import React from "react";
import dc from "@/lib/DataConfig";
import RichEditor from "@/components/ui/RichEditor";
import { PenLine } from "lucide-react";

const ShortText = ({ setData, data, available }) => {
  if (!available || !data.memories) return null;

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary/80">
            <PenLine className="w-5 h-5" />
            <h3 className="font-serif text-2xl font-bold">{dc.message.title}</h3>
          </div>
          <p className="text-muted-foreground">{dc.message.subtitle}</p>
        </div>
        
        <RichEditor 
          content={data.message} 
          onChange={(html) => setData({ ...data, message: html })}
          placeholder={dc.message.placeholder}
        />
        
        {data.message.length < 5 && data.message.length !== 0 && (
          <p className="text-sm text-destructive mt-1 animate-in slide-in-from-top-1 fade-in">
            {dc.message.nameError}
          </p>
        )}
      </div>
    </div>
  );
};

export default ShortText;
