import React, { useMemo, useState, useEffect, useCallback } from "react";

/**
 * RootFlashcards — a single-file, dependency-free flashcard app for learning
 * vocabulary by ROOT (Latin/Greek) and the family of words built from each root.
 *
 * Usage:  import RootFlashcards from "./RootFlashcards";  then <RootFlashcards />
 *
 * Front of card = the root, its meaning and origin.
 * Back  of card = the meaning + the related-word family (each with a gloss).
 *
 * Features: click / Space to flip; ← → navigate; K = known, L = still learning;
 * shuffle; filter (All / Still learning / Known / Latin / Greek); and a search
 * box that finds a root OR any family word (type "impugn" → jumps to the pug/pugn
 * card). Progress is tracked in React state.
 *
 * Extend: add entries to ROOTS below — each is { r, mean, orig, words:[[word, gloss], …] }.
 */

// prettier-ignore
const ROOTS = [
  { r:"spect / spic", mean:"to look, see", orig:"Latin", words:[
    ["circumspect","cautious, wary (looking around)"],
    ["perspicacious","having keen insight (seeing through)"],
    ["conspicuous","clearly visible; obvious"],
    ["retrospect","a look back at the past"],
    ["prospect","a view of the future; expectation"],
    ["introspection","looking into one's own mind"]]},
  { r:"dict", mean:"to say, speak", orig:"Latin", words:[
    ["indict","to formally accuse (say against)"],
    ["edict","an official order or command"],
    ["predict","to say beforehand"],
    ["contradict","to say the opposite"],
    ["benediction","a blessing (saying well)"],
    ["dictum","a formal pronouncement"]]},
  { r:"loqu / locu", mean:"to speak", orig:"Latin", words:[
    ["loquacious","very talkative"],
    ["eloquent","fluent and persuasive in speech"],
    ["circumlocution","roundabout, wordy speech"],
    ["colloquial","of ordinary/informal conversation"],
    ["soliloquy","a speech to oneself"],
    ["elocution","the skill of clear public speaking"]]},
  { r:"voc / vok", mean:"to call, voice", orig:"Latin", words:[
    ["vociferous","loud and forceful in expression"],
    ["evoke","to call forth (a feeling)"],
    ["provoke","to call forth; incite"],
    ["revoke","to call back; cancel"],
    ["equivocal","ambiguous (of two voices)"],
    ["advocate","one who speaks for a cause"]]},
  { r:"ver", mean:"truth", orig:"Latin", words:[
    ["veracity","truthfulness; accuracy"],
    ["verdict","a decision (a 'true saying')"],
    ["aver","to state as true; affirm"],
    ["verify","to confirm the truth of"],
    ["verisimilitude","the appearance of being true"]]},
  { r:"fid", mean:"faith, trust", orig:"Latin", words:[
    ["fidelity","faithfulness; loyalty"],
    ["perfidious","treacherous; disloyal"],
    ["confide","to trust with a secret"],
    ["diffident","lacking self-confidence"],
    ["infidel","one without the faith"],
    ["bona fide","in good faith; genuine"]]},
  { r:"cred", mean:"to believe, trust", orig:"Latin", words:[
    ["credulous","gullible; too ready to believe"],
    ["incredible","not believable"],
    ["credence","belief; acceptance as true"],
    ["credentials","evidence of trustworthiness"],
    ["discredit","to harm the belief in"]]},
  { r:"magn", mean:"great, large", orig:"Latin", words:[
    ["magnanimous","great-souled; generous"],
    ["magnitude","great size or importance"],
    ["magnate","a powerful, wealthy person"],
    ["magnify","to make greater"],
    ["magnificent","grand; splendid"]]},
  { r:"pug / pugn", mean:"to fight", orig:"Latin", words:[
    ["pugnacious","eager to fight; combative"],
    ["impugn","to attack as false; challenge"],
    ["repugnant","distasteful; offensive"],
    ["pugilist","a boxer"]]},
  { r:"greg", mean:"flock, herd", orig:"Latin", words:[
    ["egregious","flagrant (standing out from the flock)"],
    ["gregarious","sociable; fond of company"],
    ["congregate","to gather into a crowd"],
    ["segregate","to set apart from the flock"],
    ["aggregate","a whole gathered from parts"]]},
  { r:"bene / bon", mean:"good, well", orig:"Latin", words:[
    ["benevolent","kind; well-wishing"],
    ["benefactor","one who does good (a donor)"],
    ["benign","gentle; harmless"],
    ["beneficial","producing good; favourable"],
    ["bonhomie","good-natured friendliness"]]},
  { r:"mal", mean:"bad, ill", orig:"Latin", words:[
    ["malevolent","wishing evil to others"],
    ["malice","desire to harm; spite"],
    ["malign","to speak ill of; harmful"],
    ["malady","an illness"],
    ["malfeasance","wrongdoing by an official"],
    ["malcontent","a discontented person"]]},
  { r:"anim", mean:"soul, spirit, mind", orig:"Latin", words:[
    ["magnanimous","great-souled; generous"],
    ["equanimity","evenness of spirit; composure"],
    ["unanimous","of one mind; all agreeing"],
    ["animosity","hostility; ill will"],
    ["pusillanimous","weak-spirited; cowardly"],
    ["animated","full of spirit; lively"]]},
  { r:"ten / tain", mean:"to hold, keep", orig:"Latin", words:[
    ["tenacious","holding firmly; persistent"],
    ["tenable","defensible; able to be held"],
    ["tenet","a held principle or belief"],
    ["tenure","the holding of a post"],
    ["abstain","to hold back from"],
    ["sustain","to hold up; maintain"]]},
  { r:"lev", mean:"light, to raise", orig:"Latin", words:[
    ["alleviate","to lighten; ease"],
    ["levity","light-heartedness"],
    ["elevate","to raise up"],
    ["levitate","to rise/float in the air"],
    ["relieve","to lift a burden from"]]},
  { r:"circ / circum", mean:"around", orig:"Latin", words:[
    ["circumspect","cautious (looking around)"],
    ["circumvent","to bypass; go around"],
    ["circumlocution","roundabout speech"],
    ["circuitous","indirect; roundabout"],
    ["circumscribe","to limit; draw a line around"]]},
  { r:"spir", mean:"to breathe", orig:"Latin", words:[
    ["aspire","to seek eagerly (breathe toward)"],
    ["conspire","to plot together (breathe with)"],
    ["inspire","to breathe life/ideas into"],
    ["expire","to breathe out; die; end"],
    ["respire","to breathe"],
    ["dispirited","having lost spirit"]]},
  { r:"son", mean:"sound", orig:"Latin", words:[
    ["dissonance","harsh, clashing sound; discord"],
    ["consonance","agreement of sound; harmony"],
    ["resonate","to sound/echo strongly"],
    ["sonorous","full and deep in sound"],
    ["unison","one sound; together"]]},
  { r:"cede / cess", mean:"to go, yield", orig:"Latin", words:[
    ["concede","to yield; admit"],
    ["precede","to go before"],
    ["recede","to go back; withdraw"],
    ["accede","to agree; yield to"],
    ["secede","to withdraw (from a union)"],
    ["antecedent","something going before"]]},
  { r:"lud / lus", mean:"to play", orig:"Latin", words:[
    ["allude","to refer to indirectly"],
    ["illusion","a deceptive appearance"],
    ["delude","to deceive; mislead"],
    ["elude","to escape cleverly"],
    ["ludicrous","absurd; laughable"],
    ["collusion","secret 'playing together'; conspiracy"]]},
  { r:"pel / puls", mean:"to drive, push", orig:"Latin", words:[
    ["compel","to drive/force"],
    ["repel","to drive back"],
    ["expel","to drive out"],
    ["propel","to drive forward"],
    ["impulsive","driven by sudden urge"],
    ["compulsion","an irresistible drive"]]},
  { r:"tract", mean:"to pull, draw", orig:"Latin", words:[
    ["protract","to draw out; prolong"],
    ["retract","to draw back; withdraw"],
    ["distract","to draw away attention"],
    ["intractable","hard to manage (won't be drawn)"],
    ["tractable","easily managed"],
    ["detract","to draw away; diminish"]]},
  { r:"duc / duct", mean:"to lead", orig:"Latin", words:[
    ["induce","to lead to; bring about"],
    ["deduce","to draw a conclusion; infer"],
    ["abduct","to lead away; kidnap"],
    ["conducive","tending to lead to; helpful"],
    ["ductile","able to be led/drawn out"]]},
  { r:"cap / cept", mean:"to take, seize", orig:"Latin", words:[
    ["capacious","able to hold much; roomy"],
    ["incipient","just beginning (being taken up)"],
    ["susceptible","liable to be taken/affected"],
    ["precept","a rule taken as a guide"],
    ["captivate","to seize with charm"]]},
  { r:"fer", mean:"to carry, bear", orig:"Latin", words:[
    ["confer","to bestow; consult (bring together)"],
    ["infer","to carry a conclusion; deduce"],
    ["proliferate","to increase; bear offspring"],
    ["vociferous","carrying the voice; loud"],
    ["referendum","a matter carried to the people"]]},
  { r:"mit / miss", mean:"to send", orig:"Latin", words:[
    ["remit","to send back (payment); cancel"],
    ["emit","to send out"],
    ["remiss","negligent (sent back; slack)"],
    ["intermittent","stopping and starting (sent between)"],
    ["emissary","one sent on a mission"],
    ["remission","a lessening; sending away"]]},
  { r:"scrib / script", mean:"to write", orig:"Latin", words:[
    ["prescribe","to lay down (write) a rule"],
    ["proscribe","to forbid (write against)"],
    ["inscribe","to write in/on"],
    ["transcribe","to write across; copy out"],
    ["nondescript","hard to describe; dull"]]},
  { r:"flu", mean:"to flow", orig:"Latin", words:[
    ["affluent","flowing with wealth; rich"],
    ["superfluous","overflowing; excessive"],
    ["confluence","a flowing together; junction"],
    ["mellifluous","flowing sweetly (of sound)"],
    ["influx","a flowing in"]]},
  { r:"grad / gress", mean:"to step, go", orig:"Latin", words:[
    ["digress","to step away; stray"],
    ["transgress","to step across; violate"],
    ["regress","to step back"],
    ["egress","a way out; exit"],
    ["gradual","by steps; little by little"],
    ["aggressive","stepping toward; hostile"]]},
  { r:"sequ / secu", mean:"to follow", orig:"Latin", words:[
    ["obsequious","fawning (following servilely)"],
    ["consecutive","following in order"],
    ["sequel","that which follows"],
    ["non sequitur","it does not follow; an illogical step"],
    ["ensue","to follow after"]]},
  { r:"tort", mean:"to twist", orig:"Latin", words:[
    ["distort","to twist out of shape"],
    ["contort","to twist violently"],
    ["tortuous","full of twists; complex"],
    ["extort","to twist/wrench out (by force)"],
    ["retort","a sharp twisted-back reply"]]},
  { r:"rupt", mean:"to break", orig:"Latin", words:[
    ["abrupt","sudden; broken off"],
    ["disrupt","to break apart"],
    ["erupt","to break out"],
    ["corrupt","broken morally; dishonest"],
    ["rupture","a break or burst"]]},
  { r:"vac / van", mean:"empty", orig:"Latin", words:[
    ["vacuous","empty; lacking intelligence"],
    ["vacant","empty; unoccupied"],
    ["evacuate","to empty out"],
    ["vain","empty; futile"],
    ["vanity","empty pride"]]},
  { r:"flect / flex", mean:"to bend", orig:"Latin", words:[
    ["deflect","to bend/turn aside"],
    ["inflection","a bend/change in the voice"],
    ["reflect","to bend back; think"],
    ["flexible","able to bend"],
    ["genuflect","to bend the knee"]]},
  { r:"plac", mean:"to please", orig:"Latin", words:[
    ["placate","to please; pacify"],
    ["placid","pleasingly calm"],
    ["complacent","self-satisfied; smug"],
    ["implacable","unable to be pleased/appeased"],
    ["placebo","a 'will please' dummy treatment"]]},
  { r:"cand", mean:"to glow, white", orig:"Latin", words:[
    ["candid","frank (clear, white)"],
    ["candour","frankness; openness"],
    ["incandescent","glowing with heat"],
    ["candidate","(one in a white toga) a seeker of office"]]},
  { r:"luc / lum", mean:"light", orig:"Latin", words:[
    ["lucid","clear; easily understood"],
    ["elucidate","to make clear; explain"],
    ["translucent","letting light through"],
    ["luminous","giving off light; bright"],
    ["illustrious","shining; distinguished"]]},
  { r:"mut", mean:"to change", orig:"Latin", words:[
    ["mutable","liable to change"],
    ["immutable","unchangeable"],
    ["permutation","a rearrangement"],
    ["commute","to change; exchange; travel"],
    ["transmute","to change in form"]]},
  { r:"err", mean:"to wander, stray", orig:"Latin", words:[
    ["err","to make a mistake; stray"],
    ["errant","straying; wandering"],
    ["aberration","a straying from the norm"],
    ["erratic","irregular; wandering"],
    ["erroneous","mistaken; wrong"]]},
  { r:"sol", mean:"alone", orig:"Latin", words:[
    ["solitude","the state of being alone"],
    ["solitary","done/existing alone"],
    ["desolate","deserted; forlorn"],
    ["soliloquy","a speech made alone"],
    ["sole","single; only"]]},
  { r:"equ", mean:"equal, even", orig:"Latin", words:[
    ["equanimity","even-mindedness; composure"],
    ["equitable","fair; even-handed"],
    ["equivocal","ambiguous (equal voices)"],
    ["equilibrium","a balance of forces"],
    ["adequate","equal to the need; enough"]]},
  { r:"verb", mean:"word", orig:"Latin", words:[
    ["verbose","using too many words; wordy"],
    ["verbatim","word for word"],
    ["verbal","relating to words"],
    ["proverb","a wise saying"]]},
  { r:"sens / sent", mean:"to feel", orig:"Latin", words:[
    ["sentient","able to feel; conscious"],
    ["consensus","common feeling; agreement"],
    ["dissent","to feel apart; disagree"],
    ["resent","to feel bitter about"],
    ["sentiment","a feeling or opinion"]]},
  { r:"gen", mean:"birth, kind, produce", orig:"Latin/Greek", words:[
    ["engender","to give birth to; cause"],
    ["congenital","existing from birth"],
    ["indigenous","native; born in a place"],
    ["homogeneous","of the same kind"],
    ["progeny","offspring; descendants"],
    ["genesis","an origin or beginning"]]},
  { r:"nov", mean:"new", orig:"Latin", words:[
    ["novel","new and original"],
    ["novice","a beginner"],
    ["innovate","to introduce something new"],
    ["renovate","to make new again"],
    ["novelty","newness"]]},
  { r:"vit / viv", mean:"life, to live", orig:"Latin", words:[
    ["vivid","full of life; bright"],
    ["vivacious","lively; spirited"],
    ["revive","to bring back to life"],
    ["convivial","sociable; festive"],
    ["vital","essential to life"]]},
  { r:"corp", mean:"body", orig:"Latin", words:[
    ["corporeal","bodily; physical"],
    ["corpulent","fat; bulky of body"],
    ["incorporate","to combine into one body"],
    ["corpse","a dead body"],
    ["corps","an organised body of people"]]},
  { r:"jud / jur / jus", mean:"law, judge, right", orig:"Latin", words:[
    ["judicious","showing good judgement; wise"],
    ["jurisdiction","the range of legal authority"],
    ["perjury","lying under oath (false law)"],
    ["adjudicate","to judge; decide"],
    ["justify","to show to be right"]]},
  { r:"cord / cardi", mean:"heart", orig:"Latin/Greek", words:[
    ["cordial","warm; heartfelt"],
    ["concord","agreement (hearts together)"],
    ["discord","disagreement (hearts apart)"],
    ["accord","agreement; harmony"],
    ["cardiac","relating to the heart"]]},
  // ── Greek roots ──
  { r:"path", mean:"feeling, suffering", orig:"Greek", words:[
    ["apathy","lack of feeling; indifference"],
    ["empathy","feeling with another"],
    ["antipathy","a feeling against; dislike"],
    ["pathos","a quality that evokes pity"],
    ["sympathy","fellow feeling; compassion"]]},
  { r:"phil", mean:"love, fondness", orig:"Greek", words:[
    ["philanthropy","love of humankind; charity"],
    ["bibliophile","a lover of books"],
    ["philology","the love/study of language"],
    ["philanderer","one who trifles in love"]]},
  { r:"phob", mean:"fear", orig:"Greek", words:[
    ["xenophobia","fear/hatred of foreigners"],
    ["claustrophobia","fear of enclosed spaces"],
    ["phobia","an irrational fear"],
    ["hydrophobia","fear of water; rabies"]]},
  { r:"chron", mean:"time", orig:"Greek", words:[
    ["chronology","the order of events in time"],
    ["anachronism","something out of its time"],
    ["chronic","lasting a long time"],
    ["synchronize","to make happen at the same time"]]},
  { r:"graph / gram", mean:"to write, draw", orig:"Greek", words:[
    ["epigram","a witty short saying"],
    ["calligraphy","beautiful handwriting"],
    ["cartography","the drawing of maps"],
    ["graphic","vividly written/drawn"],
    ["telegram","a written message sent afar"]]},
  { r:"morph", mean:"form, shape", orig:"Greek", words:[
    ["amorphous","shapeless; formless"],
    ["metamorphosis","a change of form"],
    ["anthropomorphic","given human form"],
    ["morphology","the study of form"]]},
  { r:"anthrop", mean:"human, mankind", orig:"Greek", words:[
    ["misanthrope","a hater of humankind"],
    ["philanthropy","love of humankind"],
    ["anthropology","the study of humans"],
    ["anthropomorphic","attributing human form"]]},
  { r:"dem", mean:"people", orig:"Greek", words:[
    ["democracy","rule by the people"],
    ["demagogue","a leader who exploits the people"],
    ["epidemic","(disease) upon the people"],
    ["endemic","native to a people/place"],
    ["demographic","relating to populations"]]},
  { r:"arch", mean:"rule, chief, ancient", orig:"Greek", words:[
    ["anarchy","absence of rule; disorder"],
    ["monarch","a sole ruler"],
    ["oligarchy","rule by a few"],
    ["hierarchy","a ranked order of rule"],
    ["archetype","an original model"]]},
  { r:"gnos / gno", mean:"to know", orig:"Greek", words:[
    ["agnostic","one who holds truth is unknown"],
    ["diagnosis","knowing through (a condition)"],
    ["prognosis","a forecast; knowing before"],
    ["cognizant","aware; having knowledge"],
    ["incognito","with identity unknown"]]},
  { r:"eu", mean:"good, well", orig:"Greek", words:[
    ["euphemism","a mild word for a harsh one"],
    ["euphoria","a feeling of great well-being"],
    ["eulogy","a speech of praise (good words)"],
    ["euphonious","pleasant-sounding"],
    ["euthanasia","a 'good death'; mercy killing"]]},
  { r:"dys", mean:"bad, difficult, faulty", orig:"Greek", words:[
    ["dystopia","a bad/imagined wretched place"],
    ["dysfunction","faulty functioning"],
    ["dyslexia","difficulty with reading"],
    ["dyspepsia","indigestion"]]},
  { r:"poly", mean:"many", orig:"Greek", words:[
    ["polyglot","one who knows many languages"],
    ["polygon","a many-sided figure"],
    ["polymath","one learned in many fields"],
    ["polygamy","marriage to many"]]},
  { r:"omni", mean:"all", orig:"Latin", words:[
    ["omnipotent","all-powerful"],
    ["omniscient","all-knowing"],
    ["omnivore","an eater of all (foods)"],
    ["omnipresent","present everywhere"]]},
  { r:"ambi / amphi", mean:"both, around", orig:"Latin/Greek", words:[
    ["ambiguous","open to both/several meanings"],
    ["ambivalent","having mixed feelings"],
    ["ambidextrous","using both hands well"],
    ["amphibian","living in both water and land"]]},
  { r:"sci", mean:"to know", orig:"Latin", words:[
    ["conscience","inner sense of right (with-knowing)"],
    ["omniscient","all-knowing"],
    ["prescient","knowing beforehand"],
    ["conscious","aware; knowing"],
    ["nescient","ignorant; not knowing"]]},
];

export default function RootFlashcards({ roots = ROOTS }) {
  const deck = useMemo(() => roots.map((x, i) => ({ id: i, ...x })), [roots]);

  const [order, setOrder] = useState(() => deck.map((c) => c.id));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(() => new Set());
  const [filter, setFilter] = useState("all"); // all | learning | known | Latin | Greek
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    let ids = order;
    if (filter === "learning") ids = ids.filter((id) => !known.has(id));
    else if (filter === "known") ids = ids.filter((id) => known.has(id));
    else if (filter === "Latin")
      ids = ids.filter((id) => deck[id].orig.includes("Latin"));
    else if (filter === "Greek")
      ids = ids.filter((id) => deck[id].orig.includes("Greek"));
    return ids;
  }, [order, filter, known, deck]);

  useEffect(() => {
    if (pos >= visible.length) setPos(visible.length ? visible.length - 1 : 0);
  }, [visible.length]); // eslint-disable-line

  const current = visible.length ? deck[visible[pos]] : null;

  const go = useCallback(
    (delta) => {
      setFlipped(false);
      setPos((p) =>
        visible.length ? (p + delta + visible.length) % visible.length : 0,
      );
    },
    [visible.length],
  );

  const markKnown = useCallback(
    (isKnown) => {
      if (!current) return;
      setKnown((prev) => {
        const next = new Set(prev);
        isKnown ? next.add(current.id) : next.delete(current.id);
        return next;
      });
      go(1);
    },
    [current, go],
  );

  const shuffle = () => {
    const a = [...order];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    setOrder(a);
    setPos(0);
    setFlipped(false);
  };
  const reset = () => {
    setKnown(new Set());
    setPos(0);
    setFlipped(false);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (
        e.target &&
        (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
      )
        return;
      if (e.code === "Space") {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (e.code === "ArrowRight") go(1);
      else if (e.code === "ArrowLeft") go(-1);
      else if (e.key.toLowerCase() === "k") markKnown(true);
      else if (e.key.toLowerCase() === "l") markKnown(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, markKnown]);

  // search: match a root OR any family word → jump to that root card
  const runSearch = (q) => {
    setQuery(q);
    const s = q.trim().toLowerCase();
    if (!s) return;
    const idx = deck.findIndex(
      (c) =>
        c.r.toLowerCase().includes(s) ||
        c.words.some(([w]) => w.toLowerCase().includes(s)),
    );
    if (idx >= 0) {
      setFilter("all");
      const p = order.indexOf(idx);
      if (p >= 0) {
        setPos(p);
        setFlipped(false);
      }
    }
  };

  const total = deck.length;
  const knownCount = known.size;
  const wordCount = deck.reduce((n, c) => n + c.words.length, 0);

  return (
    <div className="rf-root">
      <style>{styles}</style>

      <header className="rf-header">
        <h1 className="rf-title">Root Word Flashcards</h1>
        <p className="rf-sub">
          {total} roots · {wordCount} related words ·{" "}
          <strong>{knownCount}</strong> roots known
        </p>
      </header>

      <div className="rf-controls">
        <div className="rf-filters" role="tablist" aria-label="Filter roots">
          {[
            ["all", `All (${total})`],
            ["learning", `Learning (${total - knownCount})`],
            ["known", `Known (${knownCount})`],
            ["Latin", "Latin"],
            ["Greek", "Greek"],
          ].map(([key, label]) => (
            <button
              key={key}
              role="tab"
              aria-selected={filter === key}
              className={`rf-filter${filter === key ? " is-active" : ""}`}
              onClick={() => {
                setFilter(key);
                setPos(0);
                setFlipped(false);
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="rf-actions">
          <button className="rf-btn" onClick={shuffle}>
            Shuffle
          </button>
          <button className="rf-btn" onClick={reset} disabled={!knownCount}>
            Reset
          </button>
        </div>
      </div>

      <div className="rf-searchbar">
        <input
          className="rf-search"
          value={query}
          onChange={(e) => runSearch(e.target.value)}
          placeholder="Find a root or a word (e.g. 'impugn' → pug/pugn)…"
          aria-label="Search"
        />
        {query && (
          <button className="rf-clear" onClick={() => setQuery("")}>
            Clear
          </button>
        )}
      </div>

      {current ? (
        <>
          <div className="rf-progress">
            Card <strong>{pos + 1}</strong> / {visible.length}
          </div>

          <button
            className={`rf-card${flipped ? " is-flipped" : ""}`}
            onClick={() => setFlipped((f) => !f)}
            aria-label="Flashcard — click to flip"
          >
            <div className="rf-card-inner">
              <div className="rf-face rf-front">
                <span className="rf-origin">{current.orig}</span>
                <span className="rf-rootword">{current.r}</span>
                <span className="rf-mean">{current.mean}</span>
                <span className="rf-hint">click / Space to reveal words</span>
              </div>
              <div className="rf-face rf-back">
                <div className="rf-back-head">
                  <span className="rf-back-root">{current.r}</span>
                  <span className="rf-back-mean">— {current.mean}</span>
                </div>
                <ul className="rf-words">
                  {current.words.map(([w, g], i) => (
                    <li key={i} className="rf-wordrow">
                      <span className="rf-w">{w}</span>
                      <span className="rf-g">{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </button>

          <div className="rf-nav">
            <button className="rf-nav-btn" onClick={() => go(-1)}>
              ‹ Prev
            </button>
            <button
              className="rf-mark rf-learning"
              onClick={() => markKnown(false)}
            >
              Still learning
            </button>
            <button
              className="rf-mark rf-known"
              onClick={() => markKnown(true)}
            >
              Root learned ✓
            </button>
            <button className="rf-nav-btn" onClick={() => go(1)}>
              Next ›
            </button>
          </div>
          <p className="rf-keys">
            Keys: Space = flip · ← → = navigate · K = known · L = still learning
          </p>
        </>
      ) : (
        <div className="rf-empty">Nothing in this filter. Try another.</div>
      )}
    </div>
  );
}

const styles = `
.rf-root{
  --ink:#1a2233;--muted:#5b6472;--line:#e2e6ee;--surface:#fff;--bg:#f7f8fb;
  --primary:#2d4a8a;--primary-soft:#eaf0fb;--ok:#1a7f5a;--ok-bg:#e8f5ee;
  --warn:#9a6a00;--warn-bg:#fdf3d8;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  color:var(--ink);background:var(--bg);max-width:660px;margin:0 auto;padding:24px;
  border-radius:14px;box-sizing:border-box;line-height:1.5;
}
.rf-root *,.rf-root *::before,.rf-root *::after{box-sizing:border-box;}
.rf-header{margin-bottom:14px;}
.rf-title{font-size:23px;font-weight:700;margin:0 0 4px;letter-spacing:-.01em;}
.rf-sub{margin:0;color:var(--muted);font-size:14px;}
.rf-sub strong{color:var(--ink);}
.rf-controls{display:flex;flex-wrap:wrap;gap:10px;justify-content:space-between;align-items:center;margin-bottom:12px;}
.rf-filters{display:flex;flex-wrap:wrap;gap:6px;}
.rf-filter{font:inherit;font-size:13px;font-weight:600;padding:6px 11px;border:1px solid var(--line);
  background:var(--surface);color:var(--muted);border-radius:8px;cursor:pointer;}
.rf-filter:hover{border-color:var(--primary);color:var(--primary);}
.rf-filter.is-active{background:var(--primary);border-color:var(--primary);color:#fff;}
.rf-actions{display:flex;gap:6px;}
.rf-btn{font:inherit;font-size:13px;font-weight:600;padding:6px 12px;border:1px solid var(--line);
  background:transparent;color:var(--muted);border-radius:8px;cursor:pointer;}
.rf-btn:hover:not(:disabled){border-color:var(--primary);color:var(--primary);}
.rf-btn:disabled{opacity:.45;cursor:default;}
.rf-searchbar{display:flex;gap:8px;margin-bottom:14px;}
.rf-search{flex:1;font:inherit;font-size:14px;padding:9px 12px;border:1px solid var(--line);
  border-radius:9px;background:var(--surface);color:var(--ink);}
.rf-search:focus{outline:2px solid var(--primary);outline-offset:1px;border-color:var(--primary);}
.rf-clear{font:inherit;font-size:13px;font-weight:600;padding:8px 12px;border:1px solid var(--line);
  background:transparent;color:var(--muted);border-radius:9px;cursor:pointer;}
.rf-progress{text-align:center;font-size:13px;color:var(--muted);margin-bottom:8px;}
.rf-progress strong{color:var(--ink);}
.rf-card{display:block;width:100%;border:none;background:none;padding:0;cursor:pointer;perspective:1400px;margin-bottom:16px;}
.rf-card-inner{position:relative;width:100%;min-height:270px;transition:transform .5s;transform-style:preserve-3d;}
.rf-card.is-flipped .rf-card-inner{transform:rotateY(180deg);}
.rf-face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;
  border:1px solid var(--line);border-radius:16px;padding:24px;}
.rf-front{background:var(--surface);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;}
.rf-origin{font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--warn);
  background:var(--warn-bg);padding:3px 10px;border-radius:999px;}
.rf-rootword{font-size:34px;font-weight:800;letter-spacing:-.01em;color:var(--ink);}
.rf-mean{font-size:17px;color:var(--primary);font-weight:600;}
.rf-hint{position:absolute;bottom:14px;font-size:11px;color:#aab2c2;}
.rf-back{background:var(--primary-soft);transform:rotateY(180deg);overflow:auto;}
.rf-back-head{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap;margin-bottom:10px;
  padding-bottom:8px;border-bottom:1px solid #d4ddef;}
.rf-back-root{font-size:19px;font-weight:800;color:var(--primary);}
.rf-back-mean{font-size:14px;color:var(--muted);font-style:italic;}
.rf-words{list-style:none;margin:0;padding:0;display:grid;gap:7px;}
.rf-wordrow{display:flex;gap:8px;align-items:baseline;font-size:14px;}
.rf-w{flex:0 0 auto;font-weight:700;color:var(--ink);min-width:118px;}
.rf-g{color:var(--muted);}
.rf-nav{display:grid;grid-template-columns:auto 1fr 1fr auto;gap:8px;}
.rf-nav-btn{font:inherit;font-size:14px;font-weight:600;padding:11px 14px;border:1px solid var(--line);
  background:var(--surface);color:var(--ink);border-radius:10px;cursor:pointer;}
.rf-nav-btn:hover{border-color:var(--primary);color:var(--primary);}
.rf-mark{font:inherit;font-size:14px;font-weight:700;padding:11px 10px;border:1px solid;border-radius:10px;cursor:pointer;}
.rf-learning{color:var(--warn);background:var(--warn-bg);border-color:#e7d199;}
.rf-known{color:#fff;background:var(--ok);border-color:var(--ok);}
.rf-keys{text-align:center;font-size:12px;color:#aab2c2;margin:10px 0 0;}
.rf-empty{padding:40px 16px;text-align:center;color:var(--muted);border:1px dashed var(--line);border-radius:12px;}
@media (max-width:540px){
  .rf-root{padding:16px;}
  .rf-nav{grid-template-columns:1fr 1fr;}
  .rf-rootword{font-size:29px;}
  .rf-w{min-width:96px;}
}
@media (prefers-reduced-motion:reduce){.rf-card-inner{transition:none;}}
`;
