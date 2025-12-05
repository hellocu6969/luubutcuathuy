import React from "react";
import dc from "@/lib/DataConfig";
import RichEditor from "@/components/ui/RichEditor";
import { MessageSquare } from "lucide-react";

const Form = ({ setData, data, available }) => {
  if (!available || !data.about) return null;

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary/80">
            <MessageSquare className="w-5 h-5" />
            <h3 className="font-serif text-2xl font-bold">{dc.memories.title}</h3>
          </div>
          <p className="text-muted-foreground">{dc.memories.subtitle}</p>
        </div>
        
        <RichEditor 
          content={data.memories} 
          onChange={(html) => setData({ ...data, memories: html })}
          placeholder={dc.memories.placeholder}
        />
        
        {data.memories.length < 5 && data.memories.length !== 0 && (
          <p className="text-sm text-destructive mt-1 animate-in slide-in-from-top-1 fade-in">
            {dc.memories.nameError}
          </p>
        )}
      </div>
    </div>
  );
};

export default Form;
