import {
    Users,
    Wallet,
    TrendingUp,
    Award
} from "lucide-react";

import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

import DashboardLayout from "../../layouts/DashboardLayout";
import KpiCard from "../../components/dashboard/KpiCard";
import FilterBar from "../../components/dashboard/FilterBar";
import ChartCard from "../../components/dashboard/ChartCard";
import DataTable from "../../components/dashboard/DataTable";
import InsightsCard from "../../components/dashboard/InsightsCard";


const bonusTrendData = [
    { month: "Apr", bonus: 38 },
    { month: "May", bonus: 42 },
    { month: "Jun", bonus: 40 },
    { month: "Jul", bonus: 46 },
    { month: "Aug", bonus: 49 },
    { month: "Sep", bonus: 53 }
];


const bonusCenterData = [
    { center: "Central", bonus: 14.2 },
    { center: "Colombo", bonus: 11.8 },
    { center: "Kandy", bonus: 9.6 },
    { center: "Galle", bonus: 8.4 },
    { center: "Negombo", bonus: 6.7 }
];


const thresholdEmployees = [
    {
        employee: "Soorya De Silva",
        center: "Colombo",
        attendance: "96%",
        threshold: "95%",
        status: "Qualified"
    },
    {
        employee: "Lubna Janaan",
        center: "Kandy",
        attendance: "94%",
        threshold: "95%",
        status: "Near Threshold"
    },
    {
        employee: "Yasashri Ponnamperuma",
        center: "Galle",
        attendance: "93%",
        threshold: "95%",
        status: "Near Threshold"
    },
    {
        employee: "Menuri Kodikara",
        center: "Central",
        attendance: "97%",
        threshold: "95%",
        status: "Qualified"
    }
];


const thresholdColumns = [
    {
        key: "employee",
        label: "Employee"
    },
    {
        key: "center",
        label: "Center"
    },
    {
        key: "attendance",
        label: "Attendance"
    },
    {
        key: "threshold",
        label: "Threshold"
    },
    {
        key: "status",
        label: "Status"
    }
];


function AttendanceBonus() {

    return (
        <DashboardLayout>

            {/* Dashboard Header */}

            <div className="dashboard-header">

                <div>

                    <h1>
                        Attendance Bonus Dashboard
                    </h1>

                    <p>
                        Attendance and bonus performance overview
                    </p>

                </div>

            </div>


            {/* Filters */}

            <FilterBar />


            {/* KPI Cards */}

            <div className="kpi-grid">

                <KpiCard
                    title="Eligible Employees"
                    value="1,248"
                    subtitle="Employees eligible for bonus"
                    icon={<Users size={19} />}
                />

                <KpiCard
                    title="Bonus Paid This Month"
                    value="Rs. 52.8M"
                    subtitle="Total bonus paid"
                    icon={<Wallet size={19} />}
                />

                <KpiCard
                    title="Average Bonus"
                    value="Rs. 42,300"
                    subtitle="Average per eligible employee"
                    icon={<TrendingUp size={19} />}
                />

                <KpiCard
                    title="Qualification Rate"
                    value="82.4%"
                    subtitle="Qualified employees"
                    icon={<Award size={19} />}
                />

            </div>


            {/* Charts */}

            <div className="chart-grid">

                {/* Bonus Trend */}

                <ChartCard title="Bonus Trend">

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <LineChart data={bonusTrendData}>

                            <CartesianGrid
                                strokeDasharray="3 3"
                            />

                            <XAxis
                                dataKey="month"
                            />

                            <YAxis />

                            <Tooltip />

                            <Line
                                type="monotone"
                                dataKey="bonus"
                                stroke="#2563eb"
                                strokeWidth={3}
                                dot={{ r: 4 }}
                            />

                        </LineChart>

                    </ResponsiveContainer>

                </ChartCard>


                {/* Bonus by Center */}

                <ChartCard title="Bonus by Center">

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <BarChart data={bonusCenterData}>

                            <CartesianGrid
                                strokeDasharray="3 3"
                            />

                            <XAxis
                                dataKey="center"
                            />

                            <YAxis />

                            <Tooltip />

                            <Bar
                                dataKey="bonus"
                                fill="#2563eb"
                                radius={[5, 5, 0, 0]}
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </ChartCard>

            </div>


            {/* Employees Near Threshold */}

            <div className="table-card">

                <div className="table-card-header">

                    <h3>
                        Employees Near Bonus Threshold
                    </h3>

                </div>

                <DataTable
                    columns={thresholdColumns}
                    data={thresholdEmployees}
                />

            </div>


            {/* Highest Bonus Center */}

            <InsightsCard
                title="Highest Bonus Center"
                value="Central Center"
                description="Central recorded the highest total bonus payout at Rs. 14.2M."
            />


        </DashboardLayout>
    );
}


export default AttendanceBonus;