import Logo from "../../assets/illustrations/Logo"
import { Bell, Menu } from "lucide-react"

function NavBar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-3 text-[32px] font-semibold tracking-tight text-navy lg:text-[40px]">
        <Logo className="h-[50px] w-20" />
        <span>WorkTrack</span>
      </div>

      <div className="flex items-center gap-4">
        <button aria-label="Notifications" className="relative">
          <Bell className="h-6 w-6" />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <button aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  )
}

export default NavBar