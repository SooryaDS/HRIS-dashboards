import { CalendarDays, ChevronDown } from "lucide-react";

function FilterBar() {
    return (
        <div className="filter-bar">

            <div className="filter-group">
                <CalendarDays size={17} />

                <select defaultValue="September 2026">
                    <option>September 2026</option>
                    <option>August 2026</option>
                    <option>July 2026</option>
                </select>
            </div>

            <div className="filter-group">
                <select defaultValue="All Organizations">
                    <option>All Organizations</option>
                    <option>Sumathi Universal</option>
                </select>
            </div>

            <div className="filter-group">
                <select defaultValue="All Outlets">
                    <option>All Outlets</option>
                    <option>Colombo</option>
                    <option>Kandy</option>
                    <option>Galle</option>
                </select>
            </div>

            <div className="filter-group">
                <select defaultValue="All Departments">
                    <option>All Departments</option>
                    <option>Human Resources</option>
                    <option>Finance</option>
                    <option>Operations</option>
                    <option>Information Technology</option>
                </select>
            </div>

        </div>
    );
}

export default FilterBar;