import React from "react";
import { History as HistoryIcon, ChevronRight } from "lucide-react";

type AttendanceStatus = "Present" | "Absent" | "Late";

interface AttendanceRecord {
  id: number;
  date: string;
  status: AttendanceStatus;
  checkIn: string;
  checkOut: string | null;
}

const attendanceRecords: AttendanceRecord[] = [
  {
    id: 1,
    date: "Fri Nov 13",
    status: "Present",
    checkIn: "08:05 AM",
    checkOut: null,
  },
  {
    id: 2,
    date: "Thu Nov 12",
    status: "Present",
    checkIn: "07:58 AM",
    checkOut: "05:02 PM",
  },
  {
    id: 3,
    date: "Wed Nov 11",
    status: "Present",
    checkIn: "08:01 AM",
    checkOut: "05:10 PM",
  },
];

const statusStyles: Record<AttendanceStatus, { text: string; dot: string }> = {
  Present: { text: "text-green-600", dot: "bg-green-600" },
  Absent: { text: "text-red-600", dot: "bg-red-600" },
  Late: { text: "text-amber-600", dot: "bg-amber-500" },
};

export default function History() {
  return (
    <main className="rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <HistoryIcon className="h-7 w-7 text-blue-600" strokeWidth={2.5} />
          <h1 className="text-xl font-bold text-[#0B1B4D]">
            Recent attendance
          </h1>
        </div>

        <button className="flex items-center gap-2 rounded-[20px] border border-gray-300 px-4 py-2 font-medium text-[#0B1B4D] transition-colors hover:bg-gray-100">
          View All
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Table */}
      <table className="mt-4 w-full border-collapse text-left">
        <thead>
          <tr className="bg-[#F0F5FD] text-[#0B1B4D]">
            <th className="px-3 py-2 font-bold">Date</th>
            <th className="px-3 py-2 font-bold">Status</th>
            <th className="px-3 py-2 font-bold">Check in</th>
            <th className="px-3 py-2 font-bold">Check out</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record) => (
            <tr key={record.id} className="text-[#0B1B4D]">
              <td className="px-3 py-3 font-medium">{record.date}</td>
              <td className="px-3 py-3">
                <span
                  className={`flex items-center gap-2 font-medium ${statusStyles[record.status].text}`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${statusStyles[record.status].dot}`}
                  />
                  {record.status}
                </span>
              </td>
              <td className="px-3 py-3 font-medium">{record.checkIn}</td>
              <td className="px-3 py-3 font-medium">
                {record.checkOut ?? "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
