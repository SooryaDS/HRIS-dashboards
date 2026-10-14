function DataTable({ columns, data }) {
    return (
        <div className="data-table-wrapper">
            <table className="data-table">
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key}>
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, index) => (
                        <tr key={row.id || index}>
                            {columns.map((column) => {
                                const value = row[column.key];

                                if (column.key === "status") {
                                    let statusClass = "";

                                    if (value === "Qualified") {
                                        statusClass = "qualified";
                                    } else if (
                                        value === "Near Threshold"
                                    ) {
                                        statusClass = "near-threshold";
                                    } else if (
                                        value === "Not Qualified"
                                    ) {
                                        statusClass = "not-qualified";
                                    }

                                    return (
                                        <td key={column.key}>
                                            <span
                                                className={`status-badge ${statusClass}`}
                                            >
                                                {value}
                                            </span>
                                        </td>
                                    );
                                }

                                return (
                                    <td key={column.key}>
                                        {value}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;