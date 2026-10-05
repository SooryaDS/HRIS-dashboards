function KpiCard({ title, value, subtitle, icon }) {
    return (
        <div className="kpi-card">

            <div className="kpi-card-top">
                <span className="kpi-title">{title}</span>

                {icon && (
                    <div className="kpi-icon">
                        {icon}
                    </div>
                )}
            </div>

            <div className="kpi-value">
                {value}
            </div>

            {subtitle && (
                <div className="kpi-subtitle">
                    {subtitle}
                </div>
            )}

        </div>
    );
}

export default KpiCard;