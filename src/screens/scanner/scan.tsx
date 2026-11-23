import React, { useState, useEffect, useRef } from "react";
import { Info, X } from "lucide-react";
import { Html5Qrcode } from "html5-qrcode";

export default function Scan() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [scanning, setScanning] = useState(false);
  const [scannedResult, setScannedResult] = useState<string | null>(null);
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const time = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const date = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const startScan = async () => {
    setScanning(true);
    setScannedResult(null);
    // wait for the div to mount
    await new Promise((r) => setTimeout(r, 100));
    const scanner = new Html5Qrcode("qr-reader");
    scannerRef.current = scanner;
    scanner
      .start(
        { facingMode: "environment" },
        { fps: 10, qrbox: { width: 250, height: 250 } },
        (decodedText) => {
          setScannedResult(decodedText);
          stopScan();
        },
        () => {},
      )
      .catch(() => stopScan());
  };

  const stopScan = () => {
    scannerRef.current?.stop().catch(() => {});
    scannerRef.current = null;
    setScanning(false);
  };

  return (
    <main className="border-2 border-[#C9F4E2] rounded-[20px] bg-[#EDFCF3] p-6">
      <header className="flex flex-col items-center gap-3">
        <h1>Your check in time for today</h1>
        <span className="text-4xl font-bold">{time}</span>
        <p>{date}</p>

        {scannedResult && (
          <p className="text-green-700 font-medium text-sm">
            ✓ Scanned: {scannedResult}
          </p>
        )}

        {scanning ? (
          <div className="w-full flex flex-col items-center gap-3">
            <div id="qr-reader" className="w-full rounded-xl overflow-hidden" />
            <button
              onClick={stopScan}
              className="flex items-center gap-2 rounded-xl border border-red-400 px-4 py-2 text-red-500"
            >
              <X size={16} /> Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={startScan}
            className="w-full rounded-xl bg-blue-600 py-3 text-white"
          >
            Scan Me
          </button>
        )}

        <div className="flex items-center justify-center gap-3 rounded-full bg-[#E2EEFC] p-3">
          <Info size={28} color="#2563EB" strokeWidth={2.5} />
          <span className="text-[#101B55] text-xs font-medium">
            Your attendance will be recorded once you scan the code.
          </span>
        </div>
      </header>
    </main>
  );
}
