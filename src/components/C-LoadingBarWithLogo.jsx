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
    <div className="flex px-4 bg-gray-50">
      <div className="w-[280px] max-w-md flex items-end relative">
        <div className="flex-1">
          <div className="w-full bg-gray-200 rounded-lg h-6 overflow-hidden shadow-inner">
            <div
              className="bg-blue-600 h-full rounded-lg transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="shrink-0 flex flex-col items-center absolute -right-9 -top-5">
          <img
            src="/elmoReloj.png"
            alt="Logo"
            className="w-14 h-14 object-contain"
          />
          <p className="text-gray-600 font-mono text-sm tracking-wide mt-1">
            {formatTime(timeLeft)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CLoadingBarWithLogo;
