import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import dc from "@/lib/DataConfig";

const Letter = ({ show, data, showLetter }) => {
  if (show || !showLetter) return null;

  return (
    <div className="letter-container w-full mb-8 animate-accordion-down">
      <Card className="glass border-white/20 overflow-hidden">
        <CardContent className="pt-6 pb-6">
          <div className="prose prose-sm dark:prose-invert max-w-none italic leading-relaxed space-y-4">
            <p>
              Ngày {data.date.day} tháng {data.date.month} năm {data.date.year}
              <br />
              {data.date.hour} giờ {data.date.minute} phút.
            </p>

            <p>Gửi {dc.myself}</p>

            <p>
              Qua những lần gặp gỡ, ít nhiều, hoặc là tớ chỉ mới quen cậu được vài hôm thui. 
              Tớ chấm cậu được {data.handsome} điểm đó. Mà thôi, cảm nhận của tớ về cậu này:
              <br />
              {data.about}
            </p>

            <p>
              Mấy năm học cấp ba đã kết thúc, tớ chẳng biết nói gì nữa, thôi thì ngồi ôn lại những gì đã từng là kỉ niệm. 
              Kỉ niệm của chúng ta là đây:
              <br />
              {data.memories}
            </p>

            <p>
              Chà, chúng thật đáng nhớ đúng không, tớ cũng muốn nhắn cậu rằng:
              <br />
              {data.message}
            </p>

            <p>
              Hết rùi nè, chắc tớ cũng k viết gì nữa, hi vọng là nó k lỗi để tớ còn gửi được =)))).
            </p>

            <p>
              Kí tên
              <br />
              {data.name}.
            </p>
          </div>
        </CardContent>
        <div className="relative w-full h-64 overflow-hidden">
          <img
            src="https://wallpapers.com/images/featured/vmdj9lfm2un8rji3.jpg"
            alt="Klee"
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      </Card>
    </div>
  );
};

export default Letter;

