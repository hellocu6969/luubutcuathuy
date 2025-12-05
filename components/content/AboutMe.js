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

const AboutMe = ({ data, setData, available }) => {
  if (!available || !data.name) return null;

  return (
    <div className="AboutMe-container w-full mb-8 animate-accordion-down">
      <Card className="glass border-white/20">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{dc.aboutMe.title}</CardTitle>
          <CardDescription>{dc.aboutMe.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full md:w-[90%]">
            <Input
              className={`bg-white/5 border-white/10 focus:border-blue-400/50 transition-all ${
                data.about.length < 5 && data.about.length !== 0 ? "border-red-500/50 focus:border-red-500" : ""
              }`}
              placeholder={dc.aboutMe.placeholder}
              value={data.about}
              onChange={(e) => setData({ ...data, about: e.target.value })}
            />
            {data.about.length < 5 && data.about.length !== 0 && (
              <p className="text-sm text-red-400 mt-1 ml-1 animate-in slide-in-from-top-1 fade-in duration-200">
                {dc.aboutMe.aboutError}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutMe;

