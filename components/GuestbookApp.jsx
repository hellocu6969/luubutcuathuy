"use client";

import React, { useState, useEffect } from "react";
import {
  HeadCard,
  NameInput,
  MultipleChoice,
  Form,
  ShortText,
  Submit,
  MusicPlayer,
  Thanks,
  AboutMe,
  Letter,
  WarnBeforeUnload,
} from "./content";
import Header from "./Header";
import dc from "../lib/DataConfig";

function GuestbookApp() {
  const [show, setShow] = useState(false); //show để show form
  const [available, setAvailable] = useState(true); //available để check xem có thể submit form hay không
  const [showLetter, setShowLetter] = useState(false); //showLetter để show letter

  // State for data
  const [data, setData] = useState({
    date: "",
    name: "",
    about: "",
    handsome: 40,
    memories: "",
    message: "",
  });

  const onDevelopmentEnv = process.env.NODE_ENV === "development";

  //check if data is on local storage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localData = localStorage.getItem("data");
      if (localData) {
        setData(JSON.parse(localData));
        setAvailable(false);
      }
    }
  }, []);

  useEffect(() => {
    if (onDevelopmentEnv) {
      console.log("Is on development environment: ", onDevelopmentEnv);
    }
  }, [onDevelopmentEnv]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Header />


        <HeadCard
          show={show}
          setShow={setShow}
          setData={setData}
          available={available}
          showLetter={showLetter}
          setShowLetter={setShowLetter}
        />

        <MusicPlayer />

        <Thanks show={show} available={available} data={data} />

        <Letter show={show} data={data} showLetter={showLetter} />

        <NameInput
          show={show}
          setData={setData}
          data={data}
        />

        <AboutMe
          available={available}
          show={show}
          setData={setData}
          data={data}
        />

        <MultipleChoice
          available={available}
          setData={setData}
          data={data}
        />

        <Form
          available={available}
          setData={setData}
          data={data}
        />

        <ShortText
          available={available}
          setData={setData}
          data={data}
        />

        <Submit
          setShowLetter={setShowLetter}
          onDevelopmentEnv={onDevelopmentEnv}
          show={show}
          setShow={setShow}
          setData={setData}
          data={data}
          available={available}
          setAvailable={setAvailable}
        />
        {(data.name || data.about || data.message || data.memories) &&
          available && <WarnBeforeUnload />}
      </div>
    </div>
  );
}

export default GuestbookApp;


