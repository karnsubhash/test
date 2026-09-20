// import { useMemo, useState } from "react";
// import data from "./pyq-questions.json"
// /**
//  * UPSC Prelims PYQ Test Series
//  *
//  * Usage:
//  *   import questions from "../data/pyq-questions.json";
//  *   <TestSeries data={questions} />
//  *
//  * Props:
//  *   data       - the parsed pyq-questions.json object ({ meta, subjects, questions })
//  *   negative   - marks deducted per wrong answer (default 0.66 for UPSC Prelims GS-I)
//  *   perQuestion- marks per correct answer (default 2)
//  *
//  * Behaviour: the moment a user picks an option, the question is locked,
//  * the correct/incorrect state is revealed, and the explanation is shown.
//  */
// export default function CSE_PYQ({  negative = 0.66, perQuestion = 2 }) {
//   const allQuestions = data?.questions ?? [];
//   const subjects = data?.subjects ?? [];
//   const years = useMemo(
//     () => [...new Set(allQuestions.map((q) => q.year))].sort((a, b) => b - a),
//     [allQuestions]
//   );

//   const [subject, setSubject] = useState("All");
//   const [year, setYear] = useState("All");
//   // answers: { [questionId]: selectedOptionIndex }
//   const [answers, setAnswers] = useState({});

//   const questions = useMemo(
//     () =>
//       allQuestions.filter(
//         (q) =>
//           (subject === "All" || q.subject === subject) &&
//           (year === "All" || q.year === Number(year))
//       ),
//     [allQuestions, subject, year]
//   );

//   const attempted = questions.filter((q) => answers[q.id] !== undefined);
//   const correct = attempted.filter((q) => answers[q.id] === q.answer);
//   const wrong = attempted.length - correct.length;
//   const score = (correct.length * perQuestion - wrong * negative).toFixed(2);

//   function select(qid, optionIndex) {
//     if (answers[qid] !== undefined) return; // lock after first choice
//     setAnswers((prev) => ({ ...prev, [qid]: optionIndex }));
//   }

//   function reset() {
//     setAnswers({});
//   }

//   return (
//     <div className="ts-root">
//       <header className="ts-head">
//         <h1>{data?.meta?.exam ?? "UPSC Prelims"} — PYQ Test Series</h1>
//         <p>{data?.meta?.paper}</p>
//       </header>

//       <div className="ts-controls">
//         <label>
//           Subject
//           <select value={subject} onChange={(e) => setSubject(e.target.value)}>
//             <option>All</option>
//             {subjects.map((s) => (
//               <option key={s}>{s}</option>
//             ))}
//           </select>
//         </label>
//         <label>
//           Year
//           <select value={year} onChange={(e) => setYear(e.target.value)}>
//             <option>All</option>
//             {years.map((y) => (
//               <option key={y}>{y}</option>
//             ))}
//           </select>
//         </label>
//         <button className="ts-reset" onClick={reset}>
//           Reset attempt
//         </button>
//       </div>

//       <div className="ts-scorebar">
//         <span>Attempted {attempted.length}/{questions.length}</span>
//         <span className="ts-correct">Correct {correct.length}</span>
//         <span className="ts-wrong">Wrong {wrong}</span>
//         <span>Score {score}</span>
//       </div>

//       <ol className="ts-list">
//         {questions.map((q, i) => {
//           const chosen = answers[q.id];
//           const locked = chosen !== undefined;
//           return (
//             <li key={q.id} className="ts-q">
//               <div className="ts-qmeta">
//                 <span>Q{i + 1}</span>
//                 <span>{q.year}</span>
//                 <span>{q.subject}</span>
//                 {q.difficulty && <span className="ts-diff">{q.difficulty}</span>}
//               </div>
//               <p className="ts-qtext">{q.question}</p>
//               <div className="ts-options">
//                 {q.options.map((opt, oi) => {
//                   let cls = "ts-opt";
//                   if (locked) {
//                     if (oi === q.answer) cls += " ts-opt-correct";
//                     else if (oi === chosen) cls += " ts-opt-wrong";
//                     else cls += " ts-opt-dim";
//                   }
//                   return (
//                     <button
//                       key={oi}
//                       className={cls}
//                       disabled={locked}
//                       onClick={() => select(q.id, oi)}
//                     >
//                       <span className="ts-optletter">
//                         {String.fromCharCode(97 + oi)}
//                       </span>
//                       <span>{opt}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//               {locked && (
//                 <div
//                   className={
//                     "ts-explain " +
//                     (chosen === q.answer ? "ts-explain-ok" : "ts-explain-no")
//                   }
//                 >
//                   <strong>
//                     {chosen === q.answer ? "Correct" : "Incorrect"} — answer is (
//                     {String.fromCharCode(97 + q.answer)})
//                   </strong>
//                   <p>{q.explanation}</p>
//                 </div>
//               )}
//             </li>
//           );
//         })}
//       </ol>

//       {questions.length === 0 && (
//         <p className="ts-empty">No questions for this filter yet. Add some to pyq-questions.json.</p>
//       )}
//     </div>
//   );
// }
