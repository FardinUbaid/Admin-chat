import "./Stats.css";

export default function Stats({ stats }) {
  
    function StatCard({ value, label }) {
        return (
            <div className="statCard">
            <div className="statValue">{value}</div>
            <div className="statLabel">{label}</div>
            </div>
        );
    }
  
    return (
    <div className="statsRow">
      <StatCard value={stats.today} label="Today" />
      <StatCard value={stats.avgTime} label="Avg. Time" />
      <StatCard value={stats.csat} label="CSAT" />
    </div>
  );
}