import {
    Search,
    Bell,
    CalendarDays
} from "lucide-react";

function Header() {

    return (
        <header className="header">

            {/* Search */}

            <div className="header-search">

                <Search size={16} />

                <input
                    type="text"
                    placeholder="Search for people, teams, or insights..."
                />

            </div>


            {/* Header Filters */}

            <div className="header-filters">

                {/* Date */}

                <div className="header-filter">

                    <CalendarDays size={13} />

                    <select defaultValue="Jan 2024 - Dec 2024">

                        <option>
                            Jan 2024 - Dec 2024
                        </option>

                        <option>
                            Jan 2025 - Dec 2025
                        </option>

                        <option>
                            Jan 2026 - Dec 2026
                        </option>

                    </select>

                </div>


                {/* Region */}

                <div className="header-filter">

                    <select defaultValue="All Regions">

                        <option>
                            All Regions
                        </option>

                        <option>
                            Central
                        </option>

                        <option>
                            Western
                        </option>

                        <option>
                            Southern
                        </option>

                    </select>

                </div>


                {/* Outlet */}

                <div className="header-filter">

                    <select defaultValue="All Outlets">

                        <option>
                            All Outlets
                        </option>

                        <option>
                            Central Mall
                        </option>

                        <option>
                            Riverside Outlet
                        </option>

                        <option>
                            Lakeside Center
                        </option>

                        <option>
                            Sunrise Plaza
                        </option>

                        <option>
                            Metro Hub
                        </option>

                    </select>

                </div>

            </div>


            {/* Right Side */}

            <div className="header-right">

                <button className="notification-button">

                    <Bell size={17} />

                    <span className="notification-dot"></span>

                </button>


                <div className="user-profile">

                    <div className="user-avatar">
                        SU
                    </div>

                    <div className="user-info">

                        <strong>
                            Admin User
                        </strong>

                        <span>
                            Administrator
                        </span>

                    </div>

                </div>

            </div>

        </header>
    );
}

export default Header;