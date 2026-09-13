// import { useState, useEffect } from "react";

// export default function MyComponent() {
//   const [html, setHtml] = useState("");

//   useEffect(() => {
//     fetch("/Accountancy_Complete_Notes.html")
//       .then((res) => res.text())
//       .then((text) => setHtml(text));
//   }, []);

//   return (
//     <div
//       dangerouslySetInnerHTML={{ __html: html }}
//       style={{ width: "100%", height: "100vh" }}
//     />
//   );
// }

// import htmlContent from "./Accountancy_Complete_Notes.html?raw";

// export default function MyComponent() {
//   return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
// }

// RevisionViewer.jsx
import { useState, useEffect, useRef } from "react";
import DOMPurify from "dompurify"; // optional: `npm i dompurify`, or remove and use `html` directly

// --- Lazy-load all HTML files (each value is () => Promise<string>) ---
const loaders = import.meta.glob("./*.html", {
  query: "?raw",
  import: "default",
});

const tabs = Object.keys(loaders)
  .map((path) => {
    const file = path.split("/").pop().replace(".html", "");
    const title = file
      .replace(/^\d+[-_]/, "")
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    return { id: file, title, path };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

const STORAGE_KEY = "revision-progress";

const styles = `
* { box-sizing: border-box; }

.rv-shell {
  display: flex;
  flex-direction: column;
  height: 100vh;
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

.rv-badge {
  font-size: 11px;
  padding: 2px 7px;
  border-radius: 999px;
  background: #6c5ce7;
  color: #fff;
}

.rv-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background: #fff;
  border-bottom: 1px solid #e6e7f0;
  flex-shrink: 0;
}
.rv-header h1 { margin: 0 0 4px; font-size: 22px; }
.rv-meta { margin: 0; font-size: 13px; color: #8a8ba3; }

.rv-cta {
  padding: 10px 18px;
  border: none;
  border-radius: 10px;
  background: #00b894;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.1s, background 0.15s;
}
.rv-cta:hover { background: #00a383; transform: translateY(-1px); }

.rv-loading {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8a8ba3;
  font-size: 15px;
}
.rv-content {
  flex: 1;
  overflow-y: auto;
  padding: 40px;
  max-width: 820px;
  width: 100%;
  margin: 0 auto;
  line-height: 1.7;
}
.rv-content h1, .rv-content h2, .rv-content h3 { line-height: 1.3; }
.rv-content pre {
  background: #1a1a2e;
  color: #e6e7f0;
  padding: 16px;
  border-radius: 10px;
  overflow-x: auto;
}
.rv-content code { font-family: "Fira Code", monospace; font-size: 0.9em; }
.rv-content table { border-collapse: collapse; width: 100%; }
.rv-content th, .rv-content td { border: 1px solid #e6e7f0; padding: 8px 12px; }

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
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState({});

  const cache = useRef({}); // id -> html string, so each tab loads only once

  // Restore saved progress
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setProgress(JSON.parse(saved));
  }, []);

  // Persist progress
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  // Load the active tab's HTML on demand
  useEffect(() => {
    let cancelled = false;
    const tab = tabs.find((t) => t.id === activeId);
    if (!tab) return;

    if (cache.current[activeId] !== undefined) {
      setHtml(cache.current[activeId]);
      return;
    }

    setLoading(true);
    loaders[tab.path]().then((raw) => {
      if (cancelled) return;
      cache.current[activeId] = raw;
      setHtml(raw);
      setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [activeId]);

  const markRevised = (id) => {
    setProgress((prev) => ({
      ...prev,
      [id]: {
        count: (prev[id]?.count || 0) + 1,
        lastSeen: Date.now(),
      },
    }));
  };

  const activeIndex = tabs.findIndex((t) => t.id === activeId);
  const activeTab = tabs[activeIndex];
  const goTo = (i) => {
    if (i >= 0 && i < tabs.length) setActiveId(tabs[i].id);
  };

  return (
    <div className="rv-shell">
      <style>{styles}</style>

      <nav className="rv-tabs">
        {tabs.map((tab) => {
          const p = progress[tab.id];
          return (
            <button
              key={tab.id}
              className={`rv-tab ${tab.id === activeId ? "active" : ""}`}
              onClick={() => setActiveId(tab.id)}
            >
              {tab.title}
              {p?.count > 0 && <span className="rv-badge">{p.count}×</span>}
            </button>
          );
        })}
      </nav>

      <header className="rv-header">
        <div>
          <h1>{activeTab?.title}</h1>
          <p className="rv-meta">
            {progress[activeId]?.count
              ? `Revised ${progress[activeId].count} time(s)`
              : "Not revised yet"}
          </p>
        </div>
        <button className="rv-cta" onClick={() => markRevised(activeId)}>
          ✓ Mark as revised
        </button>
      </header>

      {loading ? (
        <div className="rv-loading">Loading…</div>
      ) : (
        <article
          className="rv-content"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
        />
      )}

      <footer className="rv-nav">
        <button
          onClick={() => goTo(activeIndex - 1)}
          disabled={activeIndex === 0}
        >
          ← Previous
        </button>
        <span>
          {activeIndex + 1} / {tabs.length}
        </span>
        <button
          onClick={() => goTo(activeIndex + 1)}
          disabled={activeIndex === tabs.length - 1}
        >
          Next →
        </button>
      </footer>
    </div>
  );
}
