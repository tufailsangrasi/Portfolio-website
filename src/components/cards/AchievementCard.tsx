import { Achievement } from "@/data";
import Icon from "@/components/ui/Icon";

interface AchievementCardProps {
  achievement: Achievement;
  isActive: boolean;
  onClick: () => void;
}

export function AchievementSidebarItem({ achievement, isActive, onClick }: AchievementCardProps) {
  return (
    <div
      className={`ach-sidebar-item ${isActive ? "active" : ""}`}
      onClick={onClick}
      style={{ marginBottom: 4 }}
    >
      <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "#fff", marginBottom: 2 }}>
        {achievement.title}
      </p>
      <p style={{ color: "#666", fontSize: "0.8rem" }}>{achievement.organization}</p>
    </div>
  );
}

export function AchievementDetail({ achievement }: { achievement: Achievement }) {
  return (
    <div style={{
      background: "#1e1e1e",
      border: "1px solid #2a2a2a",
      borderRadius: 10,
      padding: "2rem",
      flex: 1,
    }}>
      {achievement.date && (
        <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#888", fontSize: "0.85rem", marginBottom: "1rem" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#888">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
          </svg>
          {achievement.date}
        </div>
      )}

      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>
        {achievement.title}
      </h3>

      {achievement.url && (
        <a href={achievement.url} target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "#aaa", fontSize: "0.85rem", marginBottom: "1rem", textDecoration: "none" }}>
          {achievement.urlLabel ?? "View"}
          <Icon name="external" size={13} className="text-gray-500" />
        </a>
      )}

      <p style={{ color: "#bbb", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1rem" }}>
        {achievement.description}
      </p>

      {achievement.bullets && achievement.bullets.length > 0 && (
        <>
          <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
            KEY ACHIEVEMENTS
          </p>
          <ul style={{ paddingLeft: "1.25rem", color: "#bbb", fontSize: "0.9rem", lineHeight: 1.75 }}>
            {achievement.bullets.map((b, i) => (
              <li key={i} style={{ marginBottom: "0.4rem" }}>{b}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
