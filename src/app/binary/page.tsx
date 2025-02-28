"use client";
import dayjs from "dayjs";
import { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faSquare, faTriangle } from "@fortawesome/pro-solid-svg-icons";

function dec2bin(dec: number) {
  const binary = (dec >>> 0).toString(2);
  return binary.padStart(6, "0");

}

export default function Home() {
  const [time, setTime] = useState({
    hours: "",
    minutes: "",
    seconds: "",
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime({
        hours: dec2bin(Number(dayjs().format("HH"))),
        minutes: dec2bin(Number(dayjs().format("mm"))),
        seconds: dec2bin(Number(dayjs().format("ss"))),
      });
    }
    , 1000);
    return () => clearInterval(interval);
  }, [time]);
  return (
    <main className="bg-black text-white flex items-center flex-col justify-center h-screen ">
      <div className="flex items-end flex-col justify-center text-[5vw]">
        <div>{time.hours.split("").map((item,index) => {
          if (index == 0) return; // Skip the first digit, it's always 0 for hours
          return <Fragment key={"h-"+index}><FontAwesomeIcon icon={faCircle} fixedWidth className={item == "0" ? "opacity-30" : ""} /></Fragment>;
        })}</div>
        <div>{time.minutes.split("").map((item,index) => {
          return <Fragment key={"h-"+index}><FontAwesomeIcon icon={faTriangle} fixedWidth className={item == "0" ? "opacity-30" : ""} /></Fragment>;
        })}</div>
        <div>{time.seconds.split("").map((item,index) => {
          return <Fragment key={"h-"+index}><FontAwesomeIcon icon={faSquare} fixedWidth className={item == "0" ? "opacity-30" : ""} /></Fragment>;
        })}</div>
      </div>
    </main>
  );
}
