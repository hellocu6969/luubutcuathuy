import { React, useState } from "react";
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
import { Send } from "lucide-react";
import { sendEmail } from "@/app/actions";

const Submit = ({
  setShowLetter,
  onDevelopmentEnv,
  setShow,
  setData,
  data,
  setAvailable,
  available,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (
      data.name.length >= 2 &&
      data.about.length >= 5 &&
      data.memories.length >= 5 &&
      data.message.length >= 5
    ) {
      submitForm();
    } else {
      alert("Bạn chưa điền đủ thông tin");
    }
  };

  const submitForm = async (event) => {
    setIsSubmitting(true);
    
    //get date
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = String(date.getMinutes()).padStart(2, "0");
    const time = {
      day: day,
      month: month,
      year: year,
      hour: hour,
      minute: minute,
    };

    //set data mới vào data và local storage
    const newData = { ...data, date: time };
    setData(newData);
    if (typeof window !== 'undefined') {
      localStorage.setItem("data", JSON.stringify(newData));
    }

    //email về email
    if (!onDevelopmentEnv) {
      const emailData = {
        name: data.name,
        myself: dc.myself,
        email: dc.email,
        date_day: time.day,
        date_month: time.month,
        date_year: time.year,
        date_hour: time.hour,
        date_minute: time.minute,
        about_me: data.about,
        memories: data.memories,
        message: data.message,
        point: data.handsome,
      };

      const result = await sendEmail(emailData);
      
      if (!result.success) {
        console.error("Failed to send email:", result.error);
        alert("Có lỗi xảy ra khi gửi thư. Vui lòng thử lại sau.");
        setIsSubmitting(false);
        return;
      }
    }
    
    //Ẩn form và hiện kết quả (chỉ khi thành công hoặc dev env)
    setShow(false);
    setShowLetter(true);
    setAvailable(false);
    setIsSubmitting(false);
    //scroll to top, smooth
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  if (!available || !data.message) return null;

  return (
    <div className="submit-container w-full animate-accordion-down">
      <Card className="glass border-white/20">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{dc.submit.title}</CardTitle>
          <CardDescription>{dc.submit.subheader}</CardDescription>
        </CardHeader>
        <div className="relative w-full h-64 overflow-hidden">
             <img 
               src={dc.submit.image} 
               alt="Submit" 
               className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
             />
        </div>
        <CardContent className="pt-6">
          <p className="text-foreground/90 leading-relaxed mb-4">
            {dc.submit.content}
            <br />
            <br />
            {dc.submit.content2}
          </p>
        </CardContent>
        <CardFooter className="flex gap-4 justify-end">
          <Button 
            variant="ghost" 
            onClick={()=>{window.scrollTo({ top: 750, behavior: "smooth" })}}
            disabled={isSubmitting}
          >
            Xem lại
          </Button>
          <Button 
            onClick={() => handleSubmit()}
            disabled={isSubmitting}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/20"
          >
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? "Đang gửi..." : dc.submit.button}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Submit;


