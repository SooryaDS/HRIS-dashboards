import {
    Users,
    Wallet,
    TrendingUp,
    Award,
    User2Icon,
    Building2Icon
} from "lucide-react";

import {
    LineChart,
    Line,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

import DashboardLayout from "../../layouts/DashboardLayout";
import KpiCard from "../../components/dashboard/KpiCard";
import ChartCard from "../../components/dashboard/ChartCard";
import DataTable from "../../components/dashboard/DataTable";

import attendanceBonusData from "../../data/attendanceBonus";


const roleColors = [
    "#2563eb",
    "#1d4ed8",
    "#5595e3"
];


const employeeBonusColumns = [
    {
        key: "employee",
        label: "Employee"
    },
    {
        key: "center",
        label: "Center"
    },
    {
        key: "role",
        label: "Role"
    },
    {
        key: "attendance",
        label: "Attendance %"
    },
    {
        key: "status",
        label: "Bonus Status"
    },
    {
        key: "bonus",
        label: "Bonus Amount"
    }
];


function AttendanceBonus() {

    const {
        summary,
        previousSummary,
        bonusTrend,
        bonusByCenter,
        bonusEligibilityByRole,
        roleQualification,
        employees
    } = attendanceBonusData;


    // =====================================================
    // INSIGHT CALCULATIONS
    // =====================================================

    // Bonus payout percentage change
    const bonusChange =
        previousSummary.bonusPaid !== 0
            ? (
                ((summary.bonusPaid -
                    previousSummary.bonusPaid) /
                    previousSummary.bonusPaid) *
                100
            ).toFixed(1)
            : 0;


    // Find Helper qualification data
    const helperData = roleQualification.find(
        (role) => role.role === "Helper"
    );


    // Helper qualification rate change in percentage points
    const helperChange =
        helperData
            ? (
                helperData.qualificationRate -
                helperData.previousQualificationRate
            ).toFixed(1)
            : 0;


    // Find the center with the highest current-year payout
    const highestBonusCenter = bonusByCenter.reduce(
        (highest, center) =>
            center.thisYear > highest.thisYear
                ? center
                : highest,
        bonusByCenter[0]
    );


    // Calculate that center's year-over-year growth
    const centerGrowth =
        highestBonusCenter.lastYear !== 0
            ? (
                ((highestBonusCenter.thisYear -
                    highestBonusCenter.lastYear) /
                    highestBonusCenter.lastYear) *
                100
            ).toFixed(0)
            : 0;


    return (
        <DashboardLayout>

            {/* =====================================================
                DASHBOARD HEADER
            ===================================================== */}

            <div className="dashboard-header">

                <div>

                    <span className="dashboard-eyebrow">
                        ENTERPRISE OUTLET STAFF
                    </span>

                    <h1>
                        Attendance Bonus Dashboard
                    </h1>

                    <p>
                        Primary Users: Manager, Cashier, Helper
                    </p>

                </div>


                <div className="dashboard-message">

                    <span>
                        “People create the possibilities.
                        <br />
                        We help you see them.”
                    </span>

                    <div className="message-divider"></div>

                    <span>
                        Smarter People Decisions
                        <br />
                        A Stronger Tomorrow
                    </span>

                </div>

            </div>


            {/* =====================================================
                KPI CARDS
            ===================================================== */}

            <div className="kpi-grid">

                <KpiCard
                    title="Eligible Employees"
                    value={summary.eligibleEmployees.toLocaleString()}
                    currentValue={summary.eligibleEmployees}
                    previousValue={previousSummary.eligibleEmployees}
                    icon={<Users size={21} />}
                />


                <KpiCard
                    title="Bonus Paid This Month"
                    value={`Rs. ${(summary.bonusPaid / 1000).toFixed(1)}K`}
                    currentValue={summary.bonusPaid}
                    previousValue={previousSummary.bonusPaid}
                    icon={<Wallet size={21} />}
                />


                <KpiCard
                    title="Average Bonus"
                    value={`Rs. ${summary.averageBonus.toFixed(2)}`}
                    currentValue={summary.averageBonus}
                    previousValue={previousSummary.averageBonus}
                    icon={<TrendingUp size={21} />}
                />


                <KpiCard
                    title="Highest Bonus Center"
                    value={summary.highestBonusCenter.name}
                    subtitle={`Rs. ${summary.highestBonusCenter.amount}M`}
                    icon={<Award size={21} />}
                />


                <KpiCard
                    title="Bonus Qualification Rate"
                    value={`${summary.qualificationRate}%`}
                    currentValue={summary.qualificationRate}
                    previousValue={previousSummary.qualificationRate}
                    icon={<Award size={21} />}
                />


                <KpiCard
                    title="Employees Near Threshold"
                    value={summary.nearThreshold}
                    currentValue={summary.nearThreshold}
                    previousValue={previousSummary.nearThreshold}
                    icon={<Users size={21} />}
                />

            </div>


            {/* =====================================================
                CHARTS
            ===================================================== */}

            <div className="chart-grid">


                {/* =================================================
                    ATTENDANCE BONUS TREND
                ================================================= */}

                <ChartCard 
                    title={
                        <>
                            <TrendingUp size={18}/>
                            Attendance Bonus Trend
                        </>
                        }>

                    <div className="chart-top-info">

                        <span>
                            Total attendance bonus paid over time
                        </span>

                        <div className="chart-period-change">

                            <strong>
                                +{bonusChange}%
                            </strong>

                            <small>
                                vs. Jan 2024
                            </small>

                        </div>

                    </div>


                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <LineChart
                            data={bonusTrend}
                            margin={{
                                top: 15,
                                right: 10,
                                left: -45,
                                bottom: 35
                            }}
                        >

                            <CartesianGrid
                                strokeDasharray="3 3"
                            />

                            <XAxis
                                dataKey="month"
                            />

                            <YAxis
                                tickFormatter={(value) =>
                                    `${value}K`
                                }
                            />

                            <Tooltip
                                formatter={(value) => [
                                    `${value}K`,
                                    "Bonus"
                                ]}
                            />

                            <Line
                                type="monotone"
                                dataKey="bonus"
                                stroke="#2563eb"
                                strokeWidth={3}
                                dot={{
                                    r: 4,
                                    fill: "#ffffff",
                                    stroke: "#2563eb",
                                    strokeWidth: 3
                                }}
                            />

                        </LineChart>

                    </ResponsiveContainer>

                </ChartCard>


                {/* =================================================
                    BONUS PAYOUT BY CENTER
                ================================================= */}

                <ChartCard                    
                    title={
                        <>
                        <Building2Icon size={18} />
                        Bonus Payout by Center (Top 5)
                        </>
                    }
                    >

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <BarChart
                            data={bonusByCenter}
                            margin={{
                                top: 25,
                                right: 5,
                                left: -40,
                                bottom: 5
                            }}
                            barGap={4}
                        >

                            <CartesianGrid
                                strokeDasharray="3 3"
                            />

                            <XAxis
                                dataKey="center"
                                tick={{ fontSize: 10 }}
                            />

                            <YAxis
                                tickFormatter={(value) =>
                                    `${value}K`
                                }
                            />

                            <Tooltip
                                formatter={(value) => [
                                    `${value}K`,
                                    "Bonus"
                                ]}
                            />

                            <Bar
                                dataKey="lastYear"
                                name="Last Year"
                                fill="#93c5fd"
                                radius={[5, 5, 0, 0]}
                            />

                            <Bar
                                dataKey="thisYear"
                                name="This Year"
                                fill="#2563eb"
                                radius={[5, 5, 0, 0]}
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </ChartCard>


                {/* =================================================
                    BONUS ELIGIBILITY BY ROLE
                ================================================= */}

                <ChartCard
                     title={
                        <>
                            <Users size={18} />
                             Bonus Eligibility by Role
                        </>
                        }>

                    <div className="role-chart">

                        <div className="role-donut">

                            <ResponsiveContainer
                                width="100%"
                                height="100%"
                            >

                                <PieChart>

                                    <Pie
                                        data={bonusEligibilityByRole}
                                        dataKey="employees"
                                        nameKey="role"
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={55}
                                        outerRadius={82}
                                        paddingAngle={2}
                                        stroke="white"
                                        strokeWidth={2}
                                    >

                                        {bonusEligibilityByRole.map(
                                            (entry, index) => (

                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={
                                                        roleColors[index]
                                                    }
                                                />

                                            )
                                        )}

                                    </Pie>

                                </PieChart>

                            </ResponsiveContainer>


                            <div className="donut-center">

                                <strong>
                                    {summary.eligibleEmployees.toLocaleString()}
                                </strong>

                                <span>
                                    Eligible
                                </span>

                                <span>
                                    Employees
                                </span>

                            </div>

                        </div>


                        <div className="role-legend">

                            {bonusEligibilityByRole.map(
                                (item, index) => (

                                    <div
                                        className="role-legend-item"
                                        key={item.role}
                                    >

                                        <div className="role-legend-left">

                                            <span
                                                className="role-dot"
                                                style={{
                                                    backgroundColor:
                                                        roleColors[index]
                                                }}
                                            >
                                            </span>


                                            <div className="role-legend-text">

                                                <span className="role-name">
                                                    {item.role}
                                                </span>

                                                <span className="role-value">
                                                    {item.percentage}% (
                                                    {item.employees}
                                                    )
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                )
                            )}

                        </div>

                    </div>

                </ChartCard>

            </div>


            {/* =====================================================
                BOTTOM SECTION
            ===================================================== */}

            <div className="bottom-dashboard-grid">


                {/* =================================================
                    EMPLOYEE ATTENDANCE BONUS DETAILS
                ================================================= */}

                <div className="table-card">

                    <div className="section-card-header">

                        <div>

                            <h3>
                                Employee Attendance Bonus Details
                            </h3>

                            <p>
                                Employee-level attendance and bonus qualification details
                            </p>

                        </div>


                        <button className="view-all-button">
                            View All
                        </button>

                    </div>


                    <DataTable
                        columns={employeeBonusColumns}
                        data={employees}
                    />

                </div>


                {/* =================================================
                    INSIGHTS & ACTIONS
                ================================================= */}

                <div className="actions-card">

                    <div className="section-card-header">

                        <h3>
                            Insights & Actions
                        </h3>

                        <button className="view-all-button">
                            View All
                        </button>

                    </div>


                    {/* =================================================
                        INSIGHT 1 - BONUS PAYOUT
                    ================================================= */}

                    <div className="action-item">

                        <div className="action-icon positive">
                            ↗
                        </div>


                        <div>

                            <h4>
                                Bonus payout up {bonusChange}% this month
                            </h4>

                            <p>
                                Total attendance bonuses increased from
                                Rs.{" "}
                                {(previousSummary.bonusPaid / 1000).toFixed(1)}
                                K
                                {" "}to{" "}
                                Rs.{" "}
                                {(summary.bonusPaid / 1000).toFixed(1)}
                                K,
                                driven by higher qualification rates.
                            </p>

                        </div>


                        <span className="action-arrow">
                            ›
                        </span>

                    </div>


                    {/* =================================================
                        INSIGHT 2 - HELPER ATTENTION
                    ================================================= */}

                    <div className="action-item">

                        <div className="action-icon negative">
                            ↘
                        </div>


                        <div>

                            <h4>
                                Helpers need attention
                            </h4>


                            <p>
                                Helper bonus qualification rate declined by{" "}
                                {Math.abs(helperChange)}
                                {" "}percentage points.
                                Consider additional attendance support.
                            </p>

                        </div>


                        <span className="action-arrow">
                            ›
                        </span>

                    </div>


                    {/* =================================================
                        INSIGHT 3 - HIGHEST BONUS CENTER
                    ================================================= */}

                    <div className="action-item">

                        <div className="action-icon target">
                            ◎
                        </div>


                        <div>

                            <h4>
                                {highestBonusCenter.center} leads in bonus payout
                            </h4>


                            <p>
                                Payout is{" "}
                                {centerGrowth}%
                                {" "}higher than last year.
                                Great attendance consistency from the team.
                            </p>

                        </div>


                        <span className="action-arrow">
                            ›
                        </span>

                    </div>


                    {/* =================================================
                        INSIGHT 4 - NEAR THRESHOLD
                    ================================================= */}

                    <div className="action-item">

                        <div className="action-icon settings">
                            ⚙
                        </div>


                        <div>

                            <h4>
                                Focus on near-threshold employees
                            </h4>


                            <p>
                                {summary.nearThreshold} employees are within
                                5% of the bonus qualification threshold.
                                Consider targeted reminders and engagement.
                            </p>

                        </div>


                        <span className="action-arrow">
                            ›
                        </span>

                    </div>

                </div>

            </div>

        </DashboardLayout>
    );
}


export default AttendanceBonus;