# UPSC Prelims — PYQ Test Series

An interactive test-series setup for the Civil Services (Preliminary) Examination. Pick an option and the question locks, the correct/wrong state is revealed, and a full explanation appears. Score tracks Prelims marking (+2 correct, −0.66 wrong).

## Files

| File | What it is |
|------|------------|
| `upsc-prelims-pyq-test.html` | A self-contained, working version. Open it in any browser — no build step, questions are inlined. Use this to try it or host as-is. |
| `data/pyq-questions.json` | The question bank. This is the file you keep growing. |
| `src/TestSeries.jsx` | An embeddable React component for dropping into your own project. |

## Question schema

Every question is one object in the `questions` array of `pyq-questions.json`:

```json
{
  "id": "2019-ENV-01",          // unique id: year-subjectcode-number
  "year": 2019,                  // exam year (number)
  "subject": "Environment",      // must match one entry in the "subjects" list
  "difficulty": "medium",        // easy | medium | hard
  "question": "Full question text. Use \n for statement lists.",
  "options": ["opt a", "opt b", "opt c", "opt d"],
  "answer": 2,                    // 0-based index of the correct option (2 = option c)
  "explanation": "Why the correct answer is correct and the others are not."
}
```

Rules to keep it working:
- `answer` is **0-based** — 0 is option (a), 3 is option (d).
- `subject` must exactly match one of the strings in the top-level `subjects` array (add new subjects there first).
- Use `\n` inside `question` to break out numbered statements onto their own lines.

## Adding more questions from the official PDFs

1. Download the paper from the UPSC archive (`upsc.gov.in → Examinations → Previous Question Papers → Archives`).
2. For each question, copy the stem, the four options, and mark the correct index from the official answer key.
3. Write a one- or two-line explanation.
4. Append the object to the `questions` array.

To also see them in the standalone HTML, paste the same objects into the `DATA.questions` array inside `upsc-prelims-pyq-test.html` (it's kept in sync with the JSON on purpose so the file can run without a server).

## Using the React component

```jsx
import questions from "../data/pyq-questions.json";
import TestSeries from "./TestSeries";

export default function App() {
  return <TestSeries data={questions} />;
}
```

Props: `data` (required), `negative` (default 0.66), `perQuestion` (default 2). Copy the CSS classes prefixed `ts-` from the standalone HTML, or restyle to match your app.

## Note on content

The bundled set is a small batch of verified PYQs across Polity, History, Geography, Economy and Environment, spanning 2013–2021. Always confirm answer keys against the official UPSC key when you expand the bank.
