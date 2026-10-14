function KpiCard({
    title,
    value,
    subtitle,
    icon,
    currentValue,
    previousValue
}) {
    let changeText = null;
    let changeClass = "neutral";

    if (
        currentValue !== undefined &&
        previousValue !== undefined
    ) {
        const difference = currentValue - previousValue;

        const percentageChange =
            previousValue !== 0
                ? (difference / previousValue) * 100
                : 0;

        const roundedChange =
            Math.abs(percentageChange).toFixed(1);

        if (difference > 0) {
            changeClass = "up";
            changeText = `▲ ${roundedChange}%`;
        } else if (difference < 0) {
            changeClass = "down";
            changeText = `▼ ${roundedChange}%`;
        } else {
            changeClass = "neutral";
            changeText = "— 0%";
        }
    }

    return (
        <div className="kpi-card">

            <div className="kpi-card-top">

                <span className="kpi-title">
                    {title}
                </span>

                {icon && (
                    <div className="kpi-icon">
                        {icon}
                    </div>
                )}

            </div>

            <div className="kpi-value">
                {value}
            </div>

            {changeText && (
                <div className="kpi-subtitle">

                    <span className={changeClass}>
                     <b>{changeText}</b>
                    </span>

                    <span className="kpi-period">
                        vs. last period
                    </span>

                </div>
            )}

            {subtitle && !changeText && (
                <div className="kpi-subtitle neutral">
                    {subtitle}
                </div>
            )}

        </div>
    );
}

export default KpiCard;