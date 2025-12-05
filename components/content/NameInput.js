import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import dc from "@/lib/DataConfig";

const NameInput = ({ show, data, setData }) => {
  if (!show) return null;

  return (
    <div className="nameInput-container w-full mb-8 animate-accordion-down">
      <Card className="glass border-white/20">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{dc.nameInput.title}</CardTitle>
          <CardDescription>{dc.nameInput.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full md:w-[90%]">
            <Input
              className={`bg-white/5 border-white/10 focus:border-blue-400/50 transition-all ${
                data.name.length < 2 && data.name.length !== 0 ? "border-red-500/50 focus:border-red-500" : ""
              }`}
              placeholder={dc.nameInput.placeholder}
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            {data.name.length < 2 && data.name.length !== 0 && (
              <p className="text-sm text-red-400 mt-1 ml-1 animate-in slide-in-from-top-1 fade-in duration-200">
                {dc.nameInput.nameError}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NameInput;

