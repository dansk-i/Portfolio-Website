import { useState, useEffect } from "react";

function LiveClockEST() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // AM/PM
  });

  return (
    <div className="flex gap-2 text-2xl items-center justify-center font-mono font-light text-zinc-400">
      <time
        dateTime={time.toISOString()}
        className=""
      >
        {formattedTime}
      </time>
      <span>EST</span>
    </div>
  );
}

export default LiveClockEST;