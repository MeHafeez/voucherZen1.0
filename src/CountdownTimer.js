import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // const calculateTimeLeft = () => {
  //   const endTime = new Date(localStorage.getItem("endTime")).getTime();
  //   const now = new Date().getTime();
  //   const difference = endTime - now;

  //   let timeLeft = {};

  //   if (difference > 0) {
  //     timeLeft = {
  //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((difference / 1000 / 60) % 60),
  //       seconds: Math.floor((difference / 1000) % 60),
  //     };
  //   } else {
  //     timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  //   }

  //   return timeLeft;
  // };
  const calculateTimeLeft = () => {
    let endTime = localStorage.getItem("endTime");
  
    if (!endTime) {
      // Set endTime to three months from now if not already set
      endTime = new Date();
      endTime.setMonth(endTime.getMonth() + 3);
      localStorage.setItem("endTime", endTime.toISOString());
    } else {
      endTime = new Date(endTime);
    }
  
    const now = new Date().getTime();
    const difference = endTime.getTime() - now;
  
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  
    return timeLeft;
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const endTime = localStorage.getItem("endTime");
    if (!endTime) {
      const startTime = new Date();
      startTime.setSeconds(startTime.getSeconds() + 60 * 60 * 24 * 60); // 60 days from now
      localStorage.setItem("endTime", startTime);
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer">
      <div className="time-box">
        <span>{timeLeft.days}</span>
        <small>Days</small>
      </div>
      <div className="time-box">
        <span>{timeLeft.hours}</span>
        <small>Hours</small>
      </div>
      <div className="time-box">
        <span>{timeLeft.minutes}</span>
        <small>Minutes</small>
      </div>
      <div className="time-box">
        <span>{timeLeft.seconds}</span>
        <small>Seconds</small>
      </div>
    </div>
  );
};

export default CountdownTimer;
