import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";

const CLoadingBarWithLogo = () => {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(6 * 60 * 60); // 6 hours in seconds

  useEffect(() => {
    const totalTime = 6 * 60 * 60 * 1000; // 6 hours in milliseconds
    const intervalTime = 1000; // 1 second
    const increment = (intervalTime / totalTime) * 100;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + increment;
      });
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center">
      <div className="flex border-gray-200 rounded-lg px-2 py-2 shadow-blue-400 shadow-md bg-white">
        <div className="w-[140px] max-w-md flex items-end relative">
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="w-full bg-blue-100 rounded-lg h-3 overflow-hidden shadow-inner">
              <div
                className="bg-gradient-to-r from-blue-400 to-blue-600 h-full rounded-lg transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-gray-600 font-mono text-sm tracking-wide mt-1">
              {formatTime(timeLeft)}
            </p>
          </div>
        </div>
      </div>
      <div className="ml-2 flex border-gray-200 rounded-lg px-2 py-2 shadow-blue-400 shadow-md relative
                    before:content-[''] before:absolute before:left-[-8px] before:top-[50%] before:transform before:-translate-y-1/2
                    before:border-t-[8px] before:border-b-[8px] before:border-r-[8px] 
                    before:border-t-transparent before:border-b-transparent before:border-r-gray-200 bg-white">
        <img
          src="/elmoReloj.png"
          alt="Logo"
          className="w-9 h-9 object-contain"
        />
      </div>
    </div>
  );
};

export default CLoadingBarWithLogo;
