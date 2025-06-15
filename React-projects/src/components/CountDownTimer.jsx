import React, { useEffect, useRef, useState } from "react";

const CountdownTimer = ({ lastDate }) => {
  const [timeLeft, setTimeLeft] = useState(lastDate - new Date());
  const [isRunTimer, setIsRunTimer] = useState(true);
  const intervelId = useRef(null);

  useEffect(() => {
    intervelId.current = setInterval(() => {
      const now = new Date();
      const difference = lastDate - now;

      if (difference <= 0) {
        setIsRunTimer(false);
        setTimeLeft(0);
        clearInterval(intervelId.current);
      } else {
        setTimeLeft(difference);
      }
    }, 1000);

    return () => clearInterval(intervelId.current);
  }, [lastDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">⏳ Countdown Timer</h1>
        {
          isRunTimer ? (
            <div className="flex gap-4 justify-center text-xl md:text-3xl font-mono text-indigo-600">
              <div>
                <div className="font-bold">{days}</div>
                <div className="text-sm text-gray-500">Days</div>
              </div>
              <div>
                <div className="font-bold">{hours}</div>
                <div className="text-sm text-gray-500">Hours</div>
              </div>
              <div>
                <div className="font-bold">{minutes}</div>
                <div className="text-sm text-gray-500">Minutes</div>
              </div>
              <div>
                <div className="font-bold">{seconds}</div>
                <div className="text-sm text-gray-500">Seconds</div>
              </div>
            </div>
          ) : (
            <div className="text-3xl font-semibold text-blue-700">
              💐💐Congratulation🌸🌸🌸
            </div>
          )
        }
      </div>
    </div>
  );
};

export default CountdownTimer;
