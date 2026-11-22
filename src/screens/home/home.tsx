import { CalendarCheck, CalendarDays, Clock, Timer, Trophy } from "lucide-react"
import type { ReactNode } from "react"
import { Wave } from "../../assets/illustrations/Logo"
import NavBar from "../../components/navbar/navbar"
import CodeScanner from "../scanner/scan"
import Scheduler from "../scheduler/scheduler"
type StatCardProps = {
  icon: ReactNode
  label: string
  value: string
  status?: string
}

function StatCard({ icon, label, value, status }: StatCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        {icon}
      </div>
      <div>
        <h2 className="text-xs text-slate-500">{label}</h2>
        <p className="text-xl font-bold text-navy">{value}</p>
        {status && (
          <p className="flex items-center gap-1 text-xs text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            {status}
          </p>
        )}
      </div>
    </div>
  )
}

function Home() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 p-4 md:p-8">
        {/* Layout container with max width for desktop */}
      <NavBar />
      <header className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div>
            <p className="text-lg font-medium text-slate-600">Good morning,</p>
            <h1 className="flex items-center gap-2 text-3xl md:text-4xl font-bold text-navy">
              Alex Johnson
              <Wave className="h-8 w-8" />
            </h1>
          </div>
          <div className="mt-2 md:mt-0 flex items-center gap-2 text-sm text-slate-500">
            <CalendarDays className="h-4 w-4" />
            <p>Friday, 13 November 2026</p>
          </div>
        </header>


      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Shift card has a badge, so it's written out separately */}
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="flex items-start justify-between">
            <CalendarCheck className="h-8 w-8 text-blue-600" />
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
              Scheduled
            </span>
          </div>
          <h2 className="mt-3 text-xs text-slate-500">Today's shift</h2>
          <p className="font-bold text-navy">Morning Shift</p>
          <p className="text-xs text-slate-500">08:00 AM – 05:00 PM</p>
        </div>

        <StatCard
          icon={<Clock className="h-6 w-6" />}
          label="Check-in"
          value="08:05 AM"
          status="On time"
        />
        <StatCard
          icon={<Timer className="h-6 w-6" />}
          label="Hours worked"
          value="0h 00m"
        />
        <StatCard
          icon={<Trophy className="h-6 w-6" />}
          label="Attendance this month"
          value="12 days"
          status="Present"
        />
      </section>
      <section className="">
      <CodeScanner />

      </section>
      <section>
        <Scheduler />
      </section>
    </main>
  )
}

export default Home