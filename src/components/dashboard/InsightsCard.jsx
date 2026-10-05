import { Award, TrendingUp } from "lucide-react";

function InsightsCard({ title, value, description }) {
    return (
        <div className="insights-card">

            <div className="insights-icon">
                <Award size={22} />
            </div>

            <div className="insights-content">

                <span className="insights-label">
                    {title}
                </span>

                <h2>
                    {value}
                </h2>

                <p>
                    {description}
                </p>

            </div>

            <TrendingUp
                className="insights-trend"
                size={22}
            />

        </div>
    );
}

export default InsightsCard;