
import React, { useState, useEffect } from 'react';
import { Info } from 'lucide-react';
export default function Scan() {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const time = currentTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    const date = currentTime.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <main className="border-2 border-[#C9F4E2] rounded-[20px] bg-[#EDFCF3] p-6">
            <header className="flex flex-col items-center gap-3">
                <h1>Your check in time for today</h1>

                <span className="text-4xl font-bold">
                    {time}
                </span>

                <p>{date}</p>

                <button className="w-full rounded-xl bg-blue-600 py-3 text-white">
                    Scan Me
                </button>

                <div className="flex items-center justify-center gap-3
  rounded-full bg-[#E2EEFC] p-3">

                    <Info size={28} color="#2563EB" strokeWidth={2.5} />

                    <span className="text-[#101B55] text-xs font-medium">
                        Your attendance will be recorded once you scan the code.
                    </span>
                </div>
            </header>
        </main>
    );
}
