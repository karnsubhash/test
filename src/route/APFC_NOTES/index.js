// RevisionViewer.jsx
import { useState } from "react";

// Import note components directly — no file loading, no glob, no fetch.
// Add more notes by importing them and adding a row to `tabs`.
import AccountingNote from "./AccountingNote";

const tabs = [
  { id: "accounting", title: "Accounting", Component: AccountingNote },
  // { id: "economics", title: "Economics", Component: EconomicsNote },
];

const styles = `
* { box-sizing: border-box; }

.rv-shell {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  color: #1a1a2e;
  background: #f4f5fb;
}

.rv-tabs {
  display: flex;
  gap: 4px;
  padding: 10px 16px 0;
  background: #1a1a2e;
  overflow-x: auto;
  flex-shrink: 0;
}
.rv-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border: none;
  border-radius: 10px 10px 0 0;
  background: transparent;
  color: #cfd0e8;
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.rv-tab:hover { background: rgba(255, 255, 255, 0.08); color: #fff; }
.rv-tab.active { background: #f4f5fb; color: #1a1a2e; font-weight: 600; }

/* content area: flex child that the note iframe fills */
.rv-body {
  flex: 1;
  display: flex;
  min-height: 0;
}
.rv-frame { flex: 1; width: 100%; border: none; }

.rv-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 40px;
  background: #fff;
  border-top: 1px solid #e6e7f0;
  flex-shrink: 0;
}
.rv-nav button {
  padding: 8px 18px;
  border: 1px solid #d6d7e8;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
}
.rv-nav button:hover:not(:disabled) { background: #f0f0fa; }
.rv-nav button:disabled { opacity: 0.4; cursor: not-allowed; }
`;

export default function RevisionViewer() {
  const [activeId, setActiveId] = useState(tabs[0]?.id);

  const activeIndex = tabs.findIndex((t) => t.id === activeId);
  const Active = tabs[activeIndex]?.Component;

  // const goTo = (i) => {
  //   if (i >= 0 && i < tabs.length) setActiveId(tabs[i].id);
  // };

  return (
    <div className="rv-shell">
      <style>{styles}</style>

      <nav className="rv-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`rv-tab ${tab.id === activeId ? "active" : ""}`}
            onClick={() => setActiveId(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </nav>

      <div className="rv-body">
        {Active && (
          // key={activeId} remounts the note (fresh iframe) when you switch tabs.
          // Each note handles its own state via localStorage, so nothing is lost.
          <Active
            key={activeId}
            className="rv-frame"
            title={tabs[activeIndex]?.title}
          />
        )}
      </div>
    </div>
  );
}
