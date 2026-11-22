import { useState, useEffect } from "react";
import { Check } from "lucide-react";

type Step = {
  label: string;
  display: string;
  hour: number;
  minute: number;
};

const steps: Step[] = [
  { label: "Check-in", display: "08:05 AM", hour: 8, minute: 5 },
  { label: "Lunch break", display: "12:00 PM", hour: 12, minute: 0 },
  { label: "Check-out", display: "05:00 PM", hour: 17, minute: 0 },
];

const hasReached = (now: Date, { hour, minute }: Step) => {
  const target = new Date(now);
  target.setHours(hour, minute, 0, 0);
  return now >= target;
};

export default function Scheduler() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Today's Schedule</h1>
        <button className="rounded-[20px] border border-gray-600 px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-100">
          View All
        </button>
      </div>

      <ol className="mt-4 px-4">
        {steps.map((step, i) => {
          const done = hasReached(now, step);
          const isLast = i === steps.length - 1;

          return (
            <li key={step.label} className="relative flex gap-4 pb-6 last:pb-0">
              {/* connecting line */}
              {!isLast && (
                <span
                  className={`absolute left-[11px] top-6 bottom-0 w-0.5 ${
                    done ? "bg-green-500" : "bg-gray-200"
                  }`}
                />
              )}

              {/* circle */}
              <span
                className={`z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                  done
                    ? "border-green-500 bg-green-500 text-white"
                    : "border-gray-300 bg-white"
                }`}
              >
                {done && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
              </span>

              {/* text */}
              <div>
                <h2
                  className={`font-semibold ${
                    done ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  {step.label}
                </h2>
                <span className="text-sm text-gray-500">{step.display}</span>
              </div>
            </li>
          );
        })}
      </ol>
    </main>
  );
}