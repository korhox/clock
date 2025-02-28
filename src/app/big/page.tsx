"use client";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime({
        hours: dayjs().format("HH"),
        minutes: dayjs().format("mm"),
        seconds: dayjs().format("ss"),
      });
    }
    , 1000);
    return () => clearInterval(interval);
  }, [time]);
  return (
    <main className="bg-black text-[18vw] font-mono text-white flex items-center justify-center font-bold h-screen">
      <div className="">{time.hours}</div>
      <div className="text-[10vw] mb-[2vw]">:</div>
      <div className="">{time.minutes}</div>
      <div className="text-[10vw] mb-[2vw]">:</div>
      <div className="">{time.seconds}</div>
    </main>
  );
}
