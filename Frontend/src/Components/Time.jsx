import React, { useState, useEffect } from "react";

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [isDay, setIsDay] = useState(true); // Default to day

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(
        seconds
      )}`;
      setCurrentTime(formattedTime);

      // Determine if it's day or night
      if (hours >= 6 && hours < 18) {
        setIsDay(true);
      } else {
        setIsDay(false);
      }
    }, 1000); // Update every second

    return () => {
      clearInterval(intervalId); // Clear interval on unmount
    };
  }, []);

  function padZero(number) {
    return number < 10 ? `0${number}` : number;
  }
  return (
    <>
      <h1>Current Location:</h1>
      <h2>Kathmandu {currentTime}</h2>
      <div className="green-box">
        <div className="green"></div>
        <h1>{isDay ? "At office" : "At Home"}</h1>
      </div>
    </>
  );
};
export default CurrentTime;
