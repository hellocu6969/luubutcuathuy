import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import dc from "@/lib/DataConfig";

const MultipleChoice = ({ setData, data, available }) => {
  if (!available || !data.name) return null;

  const marks = [
    { value: 0, label: dc.handsome.label.one },
    { value: 40, label: dc.handsome.label.fouth },
    { value: 70, label: dc.handsome.label.sixth },
    { value: 100, label: dc.handsome.label.full },
  ];

  return (
    <div className="multipleChoice-container w-full mb-8 animate-accordion-down">
      <Card className="glass border-white/20">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{dc.handsome.title}</CardTitle>
          <CardDescription>{dc.handsome.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full md:w-[90%] px-3 py-6">
            <Slider
              defaultValue={[40]}
              max={100}
              step={10}
              className="w-full"
              onValueChange={(value) => setData({ ...data, handsome: value[0] })}
            />
            <div className="flex justify-between mt-4 text-xs text-muted-foreground">
              {marks.map((mark) => (
                <span key={mark.value} className="text-center w-16">
                  {mark.label}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MultipleChoice;

