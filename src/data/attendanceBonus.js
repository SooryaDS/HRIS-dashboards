const attendanceBonusData = {
    bonusEligibilityByRole: [
        {
            role: "Manager",
            employees: 227,
            percentage: 18.2
        },
        {
            role: "Cashier",
            employees: 704,
            percentage: 56.4
        },
        {
            role: "Helper",
            employees: 317,
            percentage: 25.4
        }
    ],

    // Mock role-level qualification rates
    // These can be replaced with backend data later.
    roleQualification: [
        {
            role: "Manager",
            qualificationRate: 91.4,
            previousQualificationRate: 90.2
        },
        {
            role: "Cashier",
            qualificationRate: 84.7,
            previousQualificationRate: 82.8
        },
        {
            role: "Helper",
            qualificationRate: 76.3,
            previousQualificationRate: 79.5
        }
    ],

    summary: {
        bonusPaid: 52800,

        averageBonus: 42.30,

        highestBonusCenter: {
            name: "Central",
            amount: 14.2
        },

        qualificationRate: 82.4,

        nearThreshold: 210
    },

    previousSummary: {
        eligibleEmployees: 1174,

        bonusPaid: 46900,

        averageBonus: 39.12,

        qualificationRate: 77.7,

        nearThreshold: 229
    },

    // Attendance Bonus Trend
    // Values are represented in thousands.
    bonusTrend: [
        {
            month: "Jan",
            bonus: 25
        },
        {
            month: "Feb",
            bonus: 32
        },
        {
            month: "Mar",
            bonus: 40
        },
        {
            month: "Apr",
            bonus: 40
        },
        {
            month: "May",
            bonus: 51
        },
        {
            month: "Jun",
            bonus: 56
        },
        {
            month: "Jul",
            bonus: 50
        },
        {
            month: "Aug",
            bonus: 57
        },
        {
            month: "Sep",
            bonus: 62
        },
        {
            month: "Oct",
            bonus: 60
        },
        {
            month: "Nov",
            bonus: 72
        },
        {
            month: "Dec",
            bonus: 80
        }
    ],

    // Bonus Payout by Center (Top 5)
    bonusByCenter: [
        {
            center: "Central Mall",
            lastYear: 7.2,
            thisYear: 9.6
        },
        {
            center: "Riverside Outlet",
            lastYear: 6.1,
            thisYear: 8.4
        },
        {
            center: "Lakeside Center",
            lastYear: 5.8,
            thisYear: 7.1
        },
        {
            center: "Sunrise Plaza",
            lastYear: 4.5,
            thisYear: 6.3
        },
        {
            center: "Metro Hub",
            lastYear: 4.2,
            thisYear: 5.9
        }
    ],

    employees: [
        {
            id: 1,
            employee: "Soorya De Silva",
            center: "Colombo",
            role: "Cashier",
            attendance: "98%",
            status: "Qualified",
            bonus: "Rs. 60.00"
        },

        {
            id: 2,
            employee: "Lubna Janaan",
            center: "Kandy",
            role: "Helper",
            attendance: "96%",
            status: "Qualified",
            bonus: "Rs. 50.00"
        },

        {
            id: 3,
            employee: "Yasashri Ponnamperuma",
            center: "Galle",
            role: "Cashier",
            attendance: "92%",
            status: "Qualified",
            bonus: "Rs. 45.00"
        },

        {
            id: 4,
            employee: "Menuri Kodikara",
            center: "Central",
            role: "Manager",
            attendance: "88%",
            status: "Qualified",
            bonus: "Rs. 40.00"
        },

        {
            id: 5,
            employee: "Aammina Banu",
            center: "Central",
            role: "Helper",
            attendance: "78%",
            status: "Near Threshold",
            bonus: "Rs. 0.00"
        },

        {
            id: 6,
            employee: "Manumi Lokubalasooriyage",
            center: "Galle",
            role: "Helper",
            attendance: "65%",
            status: "Not Qualified",
            bonus: "Rs. 0.00"
        }
    ]
};


// Automatically calculate the total number of eligible employees
attendanceBonusData.summary.eligibleEmployees =
    attendanceBonusData.bonusEligibilityByRole.reduce(
        (total, role) => total + role.employees,
        0
    );


export default attendanceBonusData;