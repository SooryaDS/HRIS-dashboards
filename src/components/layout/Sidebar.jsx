import {
    LayoutDashboard,
    Users,
    CalendarCheck,
    Clock,
    Wallet,
    UserRound,
    Building2,
    Settings
} from "lucide-react";

function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar-logo">
                <h2>RABBIT</h2>
                <span>HRIS</span>
            </div>

            <nav className="sidebar-nav">

                <div className="nav-section">
                    <p className="nav-title">MAIN</p>

                    <a href="#" className="nav-item active">
                        <LayoutDashboard size={19} />
                        <span>Dashboard</span>
                    </a>

                    <a href="#" className="nav-item">
                        <Users size={19} />
                        <span>Employees</span>
                    </a>

                    <a href="#" className="nav-item">
                        <CalendarCheck size={19} />
                        <span>Attendance</span>
                    </a>

                    <a href="#" className="nav-item">
                        <Clock size={19} />
                        <span>Leave</span>
                    </a>

                    <a href="#" className="nav-item">
                        <Wallet size={19} />
                        <span>Payroll</span>
                    </a>

                </div>

                <div className="nav-section">
                    <p className="nav-title">MANAGEMENT</p>

                    <a href="#" className="nav-item">
                        <Building2 size={19} />
                        <span>Organization</span>
                    </a>

                    <a href="#" className="nav-item">
                        <UserRound size={19} />
                        <span>Reports</span>
                    </a>

                </div>

                <div className="nav-section">

                    <a href="#" className="nav-item">
                        <Settings size={19} />
                        <span>Settings</span>
                    </a>

                </div>

            </nav>

        </aside>
    );
}

export default Sidebar;