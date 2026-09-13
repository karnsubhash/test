import React, { useMemo, useState } from "react";
import PYQ_DATA from "./pyqData";

/**
 * PYQPractice — year-wise previous-year-question practice widget.
 *
 * Selecting any option locks that question and reveals the correct answer:
 * the correct option turns green, a wrong pick turns red, and the
 * explanation appears. Questions flagged `verify: true` show a small badge
 * indicating the answer should be cross-checked against the official key.
 *
 * Data comes from ./pyqData.js — see that file for the question shape.
 */
export default function PYQPractice({ data = PYQ_DATA }) {
  const [activeYear, setActiveYear] = useState(data[0]?.year ?? "");
  const [answers, setAnswers] = useState({}); // `${year}-${qid}` -> optId

  const currentYear = useMemo(
    () => data.find((y) => y.year === activeYear) ?? data[0],
    [data, activeYear],
  );

  const keyFor = (year, qid) => `${year}-${qid}`;

  const handleSelect = (year, question, optId) => {
    const key = keyFor(year, question.id);
    if (answers[key] !== undefined) return; // locked once answered
    setAnswers((prev) => ({ ...prev, [key]: optId }));
  };

  const resetYear = (year) => {
    setAnswers((prev) => {
      const next = {};
      for (const k of Object.keys(prev)) {
        if (!k.startsWith(`${year}-`)) next[k] = prev[k];
      }
      return next;
    });
  };

  const stats = useMemo(() => {
    if (!currentYear) return { answered: 0, correct: 0, total: 0 };
    let answered = 0;
    let correct = 0;
    for (const q of currentYear.questions) {
      const chosen = answers[keyFor(currentYear.year, q.id)];
      if (chosen !== undefined) {
        answered += 1;
        if (chosen === q.correctId) correct += 1;
      }
    }
    return { answered, correct, total: currentYear.questions.length };
  }, [currentYear, answers]);

  if (!currentYear) return null;

  const renderMultiline = (text) =>
    String(text)
      .split("\n")
      .map((line, i) => (
        <React.Fragment key={i}>
          {i > 0 && <br />}
          {line}
        </React.Fragment>
      ));

  return (
    <div className="pyq-root">
      <style>{styles}</style>

      <header className="pyq-header">
        <h2 className="pyq-title">Previous Year Questions</h2>
        <p className="pyq-sub">
          Pick a year and answer. Choosing an option reveals the correct answer.
        </p>
      </header>

      <div className="pyq-years" role="tablist" aria-label="Select year">
        {data.map((y) => {
          const isActive = y.year === activeYear;
          return (
            <button
              key={y.year}
              role="tab"
              aria-selected={isActive}
              className={`pyq-year-btn${isActive ? " is-active" : ""}`}
              onClick={() => setActiveYear(y.year)}
            >
              {y.label ?? y.year}
            </button>
          );
        })}
      </div>

      <div className="pyq-scorebar">
        <span className="pyq-score-text">
          Answered <strong>{stats.answered}</strong> / {stats.total}
          <span className="pyq-dot" aria-hidden="true">
            •
          </span>
          Correct <strong className="pyq-score-correct">{stats.correct}</strong>
        </span>
        <button
          className="pyq-reset"
          onClick={() => resetYear(currentYear.year)}
          disabled={stats.answered === 0}
        >
          Reset year
        </button>
      </div>

      <ol className="pyq-list">
        {currentYear.questions.map((q, idx) => {
          const key = keyFor(currentYear.year, q.id);
          const chosen = answers[key];
          const answered = chosen !== undefined;
          const wasRight = answered && chosen === q.correctId;
          const state = !answered ? "idle" : wasRight ? "correct" : "incorrect";

          return (
            <li key={q.id} className="pyq-card" data-state={state}>
              <div className="pyq-qhead">
                <span className="pyq-qnum">Q{idx + 1}</span>
                {q.subject && <span className="pyq-tag">{q.subject}</span>}
                {q.verify && (
                  <span
                    className="pyq-tag pyq-tag-verify"
                    title="Answer not from official key — verify against the official UPSC answer key."
                  >
                    verify
                  </span>
                )}
              </div>

              <p className="pyq-qtext">{renderMultiline(q.question)}</p>

              <div
                className="pyq-options"
                role="radiogroup"
                aria-label={`Options for question ${idx + 1}`}
              >
                {q.options.map((opt) => {
                  const isChosen = chosen === opt.id;
                  const isCorrect = opt.id === q.correctId;
                  let optState = "";
                  if (answered) {
                    if (isCorrect) optState = "correct";
                    else if (isChosen) optState = "incorrect";
                    else optState = "muted";
                  }
                  return (
                    <label
                      key={opt.id}
                      className={`pyq-option${optState ? " is-" + optState : ""}${
                        answered ? " is-locked" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name={key}
                        value={opt.id}
                        checked={isChosen}
                        disabled={answered}
                        onChange={() =>
                          handleSelect(currentYear.year, q, opt.id)
                        }
                        className="pyq-radio"
                      />
                      <span className="pyq-radio-dot" aria-hidden="true" />
                      <span className="pyq-option-key">{opt.id})</span>
                      <span className="pyq-option-text">{opt.text}</span>
                      {answered && isCorrect && (
                        <span
                          className="pyq-mark pyq-mark-correct"
                          aria-label="Correct answer"
                        >
                          ✓
                        </span>
                      )}
                      {answered && isChosen && !isCorrect && (
                        <span
                          className="pyq-mark pyq-mark-wrong"
                          aria-label="Your answer, incorrect"
                        >
                          ✕
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>

              {answered && (
                <div className="pyq-reveal" role="status">
                  <span className="pyq-verdict" data-ok={wasRight}>
                    {wasRight ? "Correct" : "Not quite"}
                  </span>
                  {!wasRight && (
                    <span className="pyq-answer-line">
                      Answer: {q.correctId}){" "}
                      {q.options.find((o) => o.id === q.correctId)?.text}
                    </span>
                  )}
                  {q.explanation && (
                    <p className="pyq-explanation">{q.explanation}</p>
                  )}
                  {q.verify && (
                    <p className="pyq-verify-note">
                      This answer is not from the official key — please verify.
                    </p>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

const styles = `
.pyq-root {
  --ink: #1a2233;
  --muted: #5b6472;
  --line: #e2e6ee;
  --surface: #ffffff;
  --bg: #f7f8fb;
  --primary: #2d4a8a;
  --primary-soft: #eaf0fb;
  --ok: #1a7f5a;
  --ok-bg: #e8f5ee;
  --bad: #c0392b;
  --bad-bg: #fbecea;
  --warn: #9a6a00;
  --warn-bg: #fdf3d8;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: var(--ink);
  background: var(--bg);
  max-width: 760px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 14px;
  box-sizing: border-box;
  line-height: 1.55;
}
.pyq-root *, .pyq-root *::before, .pyq-root *::after { box-sizing: border-box; }

.pyq-header { margin-bottom: 18px; }
.pyq-title { font-size: 22px; font-weight: 700; margin: 0 0 4px; letter-spacing: -0.01em; }
.pyq-sub { margin: 0; color: var(--muted); font-size: 14px; }

.pyq-years { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.pyq-year-btn {
  border: 1px solid var(--line); background: var(--surface); color: var(--muted);
  font: inherit; font-size: 14px; font-weight: 600; padding: 8px 14px;
  border-radius: 9px; cursor: pointer;
  transition: background .15s, color .15s, border-color .15s;
}
.pyq-year-btn:hover { border-color: var(--primary); color: var(--primary); }
.pyq-year-btn.is-active { background: var(--primary); border-color: var(--primary); color: #fff; }

.pyq-scorebar {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 10px 14px; background: var(--surface); border: 1px solid var(--line);
  border-radius: 10px; margin-bottom: 16px; font-size: 14px;
  position: sticky; top: 8px; z-index: 1;
}
.pyq-score-text { color: var(--muted); }
.pyq-score-text strong { color: var(--ink); }
.pyq-score-correct { color: var(--ok) !important; }
.pyq-dot { margin: 0 8px; color: var(--line); }
.pyq-reset {
  border: 1px solid var(--line); background: transparent; color: var(--muted);
  font: inherit; font-size: 13px; font-weight: 600; padding: 6px 12px;
  border-radius: 8px; cursor: pointer;
}
.pyq-reset:hover:not(:disabled) { border-color: var(--primary); color: var(--primary); }
.pyq-reset:disabled { opacity: .45; cursor: default; }

.pyq-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 14px; }
.pyq-card {
  background: var(--surface); border: 1px solid var(--line);
  border-left: 4px solid var(--line); border-radius: 10px; padding: 16px 18px;
  transition: border-color .2s;
}
.pyq-card[data-state="correct"] { border-left-color: var(--ok); }
.pyq-card[data-state="incorrect"] { border-left-color: var(--bad); }

.pyq-qhead { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 8px; }
.pyq-qnum { font-size: 13px; font-weight: 700; color: var(--primary); }
.pyq-tag { font-size: 12px; color: var(--muted); background: var(--primary-soft); padding: 2px 8px; border-radius: 999px; }
.pyq-tag-verify { color: var(--warn); background: var(--warn-bg); }
.pyq-qtext { margin: 0 0 14px; font-size: 15.5px; font-weight: 500; }

.pyq-options { display: grid; gap: 8px; }
.pyq-option {
  display: flex; align-items: flex-start; gap: 10px; padding: 11px 13px;
  border: 1px solid var(--line); border-radius: 9px; cursor: pointer;
  font-size: 14.5px; transition: border-color .15s, background .15s;
}
.pyq-option:not(.is-locked):hover { border-color: var(--primary); background: var(--primary-soft); }
.pyq-option.is-locked { cursor: default; }
.pyq-radio { position: absolute; opacity: 0; width: 0; height: 0; }
.pyq-radio-dot {
  flex: 0 0 auto; width: 18px; height: 18px; margin-top: 1px;
  border: 2px solid #c2c9d6; border-radius: 50%; position: relative; transition: border-color .15s;
}
.pyq-option-key { flex: 0 0 auto; font-weight: 600; color: var(--muted); }
.pyq-option-text { flex: 1; }
.pyq-mark { flex: 0 0 auto; font-weight: 800; font-size: 15px; }
.pyq-mark-correct { color: var(--ok); }
.pyq-mark-wrong { color: var(--bad); }

.pyq-option.is-correct { background: var(--ok-bg); border-color: var(--ok); }
.pyq-option.is-correct .pyq-radio-dot { border-color: var(--ok); }
.pyq-option.is-correct .pyq-radio-dot::after { content: ""; position: absolute; inset: 3px; background: var(--ok); border-radius: 50%; }
.pyq-option.is-incorrect { background: var(--bad-bg); border-color: var(--bad); }
.pyq-option.is-incorrect .pyq-radio-dot { border-color: var(--bad); }
.pyq-option.is-incorrect .pyq-radio-dot::after { content: ""; position: absolute; inset: 3px; background: var(--bad); border-radius: 50%; }
.pyq-option.is-muted { opacity: .7; }
.pyq-radio:focus-visible + .pyq-radio-dot { outline: 2px solid var(--primary); outline-offset: 2px; }

.pyq-reveal { margin-top: 12px; padding-top: 12px; border-top: 1px dashed var(--line); }
.pyq-verdict { font-size: 13px; font-weight: 700; }
.pyq-verdict[data-ok="true"] { color: var(--ok); }
.pyq-verdict[data-ok="false"] { color: var(--bad); }
.pyq-answer-line { display: block; margin-top: 4px; font-size: 14px; font-weight: 600; }
.pyq-explanation { margin: 6px 0 0; font-size: 14px; color: var(--muted); }
.pyq-verify-note { margin: 6px 0 0; font-size: 12.5px; color: var(--warn); font-style: italic; }

@media (max-width: 480px) {
  .pyq-root { padding: 16px; }
  .pyq-scorebar { flex-direction: column; align-items: flex-start; position: static; }
}
@media (prefers-reduced-motion: reduce) { .pyq-root * { transition: none !important; } }
`;
