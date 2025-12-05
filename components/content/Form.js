import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import dc from "@/lib/DataConfig";

const Form = ({ setData, data, available }) => {
  if (!available || !data.about) return null;

  return (
    <div className="form-container w-full mb-8 animate-accordion-down">
      <Card className="glass border-white/20">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{dc.memories.title}</CardTitle>
          <CardDescription>{dc.memories.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full md:w-[90%]">
            <Textarea
              className={`bg-white/5 border-white/10 focus:border-blue-400/50 min-h-[100px] transition-all ${
                data.memories.length < 5 && data.memories.length !== 0 ? "border-red-500/50 focus:border-red-500" : ""
              }`}
              placeholder={dc.memories.placeholder}
              value={data.memories}
              onChange={(e) => setData({ ...data, memories: e.target.value })}
            />
            {data.memories.length < 5 && data.memories.length !== 0 && (
              <p className="text-sm text-red-400 mt-1 ml-1 animate-in slide-in-from-top-1 fade-in duration-200">
                {dc.memories.memoriesError}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;

