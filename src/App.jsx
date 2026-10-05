import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AttendanceBonus from "./pages/dashboards/AttendanceBonus";
import ZoneOperations from "./pages/dashboards/ZoneOperations";
import ShiftsThresholds from "./pages/dashboards/ShiftsThresholds";
import LeaveAbsence from "./pages/dashboards/LeaveAbsence";
import SalaryAnalysis from "./pages/dashboards/SalaryAnalysis";
import EmploymentDemographics from "./pages/dashboards/EmploymentDemographics";
import OutletTurnover from "./pages/dashboards/OutletTurnover";
import EmployeeTurnover from "./pages/dashboards/EmployeeTurnover";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Navigate to="/dashboards/attendance-bonus" />}
                />

                <Route
                    path="/dashboards/attendance-bonus"
                    element={<AttendanceBonus />}
                />

                <Route
                    path="/dashboards/zone-operations"
                    element={<ZoneOperations />}
                />

                <Route
                    path="/dashboards/shifts-thresholds"
                    element={<ShiftsThresholds />}
                />

                <Route
                    path="/dashboards/leave-absence"
                    element={<LeaveAbsence />}
                />

                <Route
                    path="/dashboards/salary-analysis"
                    element={<SalaryAnalysis />}
                />

                <Route
                    path="/dashboards/employment-demographics"
                    element={<EmploymentDemographics />}
                />

                <Route
                    path="/dashboards/outlet-turnover"
                    element={<OutletTurnover />}
                />

                <Route
                    path="/dashboards/employee-turnover"
                    element={<EmployeeTurnover />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;