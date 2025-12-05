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
import { Send, CheckCircle2 } from "lucide-react";

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
    // if (!onDevelopmentEnv) { // ENABLED FOR TESTING
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

      try {
        const response = await fetch('/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        });
        
        const result = await response.json();
        
        if (!result.success) {
          console.error("Failed to send email:", result.error);
          alert("Có lỗi xảy ra khi gửi thư. Vui lòng thử lại sau.");
          setIsSubmitting(false);
          return;
        }
      } catch (error) {
        console.error("Network error:", error);
        alert("Có lỗi kết nối. Vui lòng thử lại sau.");
        setIsSubmitting(false);
        return;
      }
    // }
    
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
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            {dc.submit.title}
          </CardTitle>
          <CardDescription>{dc.submit.subheader}</CardDescription>
        </CardHeader>
        <div className="relative w-full h-64 overflow-hidden">
             <img 
               src={dc.submit.image} 
               alt="Submit" 
               className="w-full h-full object-cover"
             />
        </div>
        <CardContent className="pt-6">
          <p className="text-muted-foreground leading-relaxed mb-4">
            {dc.submit.content}
            <br />
            <br />
            {dc.submit.content2}
          </p>
        </CardContent>
        <CardFooter className="flex gap-4 justify-end">
          <Button 
            variant="outline" 
            onClick={()=>{window.scrollTo({ top: 750, behavior: "smooth" })}}
            disabled={isSubmitting}
          >
            Xem lại
          </Button>
          <Button 
            onClick={() => handleSubmit()}
            disabled={isSubmitting}
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



