import React, { useMemo, useState, useEffect, useCallback } from "react";

/**
 * VocabFlashcards — a single-file, dependency-free flashcard component for
 * competitive-exam (UPSC EPFO / SSC-style) English vocabulary.
 *
 * Usage:  import VocabFlashcards from "./VocabFlashcards";  then <VocabFlashcards />
 *
 * Features: click / Space to flip; ← → to navigate; K = "Known", L = "Still
 * learning"; shuffle; filter (All / Still learning / Known / PYQ words); a
 * search box to jump to a word; and progress tracking (in React state).
 *
 * Data: WORDS below is [ word, meaning/synonyms, partOfSpeech, tag? ].
 * tag "PYQ" marks words that actually appeared in the 2023/2025 papers.
 * Add your own entries to the array anytime — the deck updates automatically.
 *
 * Note: definitions are concise synonym-style glosses meant for recall.
 * Cross-check any nuance against a dictionary; for exam use they are accurate
 * enough to recognise the word in a synonym/phrase-meaning question.
 */

// prettier-ignore
const WORDS = [
  // ── Words that appeared in the 2023 / 2025 papers (tagged PYQ) ──
  ["Cordial","warm, friendly, convivial","adj","PYQ"],
  ["Impugn","to challenge, call into question, dispute","v","PYQ"],
  ["Egregious","flagrant, shockingly bad, glaring","adj","PYQ"],
  ["Apostate","one who renounces held beliefs; defector","n","PYQ"],
  ["Corporeity","the quality of physical/material existence","n","PYQ"],
  ["Platitude","a trite, overused, unoriginal remark","n","PYQ"],
  ["Disinterested","impartial, unbiased, free of self-interest","adj","PYQ"],
  ["Derelict","neglected, run-down, dilapidated","adj","PYQ"],
  ["Serendipitous","occurring by happy chance; fortunate","adj","PYQ"],
  ["Complacency","smug self-satisfaction; uncritical contentment","n","PYQ"],
  ["Ineffable","too great to be expressed in words","adj","PYQ"],
  ["Indigent","poverty-stricken, needy, impoverished","adj","PYQ"],
  ["Incendiary","tending to inflame; provocative; arson-causing","adj","PYQ"],
  ["Parochial","narrow, restricted to a small local scope","adj","PYQ"],
  ["Precipitous","dangerously steep; sudden and abrupt","adj","PYQ"],
  ["Convivial","friendly, sociable, jovial","adj","PYQ"],

  // ── A ──
  ["Abase","to humiliate, degrade, lower","v"],
  ["Abate","to lessen, diminish, subside","v"],
  ["Aberration","a deviation from the normal; anomaly","n"],
  ["Abeyance","a state of temporary suspension","n"],
  ["Abhor","to hate, detest, loathe","v"],
  ["Abject","utterly wretched, hopeless, miserable","adj"],
  ["Abjure","to renounce, give up formally","v"],
  ["Abnegate","to renounce or reject; deny oneself","v"],
  ["Abortive","failing to succeed; fruitless","adj"],
  ["Abrogate","to abolish or annul (a law)","v"],
  ["Abscond","to flee secretly to evade capture","v"],
  ["Abstain","to refrain, hold back (from)","v"],
  ["Abstruse","hard to understand; obscure","adj"],
  ["Abundant","plentiful, ample, copious","adj"],
  ["Accolade","an award or expression of praise","n"],
  ["Acquiesce","to accept or comply passively","v"],
  ["Acrimony","bitterness or harshness in speech","n"],
  ["Acumen","keen insight or shrewdness","n"],
  ["Adamant","unyielding, inflexible, stubborn","adj"],
  ["Admonish","to reprimand or warn gently","v"],
  ["Adroit","skilful, clever, dexterous","adj"],
  ["Adulation","excessive flattery or admiration","n"],
  ["Adulterate","to make impure by adding inferior matter","v"],
  ["Adumbrate","to outline or foreshadow","v"],
  ["Adversity","misfortune, hardship, difficulty","n"],
  ["Advocate","to support or plead for; a supporter","v"],
  ["Affable","friendly, approachable, genial","adj"],
  ["Affluent","wealthy, prosperous, rich","adj"],
  ["Aggrandize","to increase power, wealth or status","v"],
  ["Alacrity","brisk and cheerful readiness","n"],
  ["Alienate","to make hostile or estranged","v"],
  ["Allay","to calm, relieve, or reduce (fear)","v"],
  ["Alleviate","to ease or lessen (pain)","v"],
  ["Aloof","distant, detached, reserved","adj"],
  ["Altruism","selfless concern for others","n"],
  ["Ambiguous","open to more than one meaning; unclear","adj"],
  ["Ambivalent","having mixed or conflicting feelings","adj"],
  ["Ameliorate","to make better; improve","v"],
  ["Amenable","willing to cooperate; agreeable","adj"],
  ["Amiable","friendly, pleasant, good-natured","adj"],
  ["Amicable","showing goodwill; friendly (of relations)","adj"],
  ["Amorphous","shapeless, formless, vague","adj"],
  ["Anachronism","something out of its proper time","n"],
  ["Analogous","comparable, similar in some respects","adj"],
  ["Anarchy","absence of government; disorder","n"],
  ["Anathema","something greatly detested; a curse","n"],
  ["Anguish","severe mental or physical suffering","n"],
  ["Animosity","strong hostility or ill will","n"],
  ["Annex","to add or attach, esp. territory","v"],
  ["Anomaly","a deviation from the normal; irregularity","n"],
  ["Antagonize","to provoke hostility in","v"],
  ["Antipathy","a deep-seated dislike; aversion","n"],
  ["Apathy","lack of interest or emotion","n"],
  ["Aplomb","self-confidence and poise","n"],
  ["Apocryphal","of doubtful authenticity; probably untrue","adj"],
  ["Appease","to pacify by giving in to demands","v"],
  ["Apposite","apt, relevant, fitting","adj"],
  ["Apprise","to inform or notify","v"],
  ["Approbation","approval or praise","n"],
  ["Arbitrary","based on whim; not by reason or rule","adj"],
  ["Arcane","mysterious, secret, obscure","adj"],
  ["Ardent","passionate, fervent, eager","adj"],
  ["Arduous","difficult, strenuous, laborious","adj"],
  ["Arrogate","to claim without right","v"],
  ["Articulate","expressing clearly; to speak clearly","adj"],
  ["Ascetic","practising severe self-discipline; austere","adj"],
  ["Assiduous","diligent, persevering, hard-working","adj"],
  ["Assuage","to soothe, relieve, or satisfy","v"],
  ["Astute","shrewd, perceptive, sharp","adj"],
  ["Atrophy","to waste away; decline","v"],
  ["Audacious","bold, daring; recklessly brave","adj"],
  ["Augment","to increase or enlarge","v"],
  ["Auspicious","favourable, promising, propitious","adj"],
  ["Austere","stern, severe; plain and simple","adj"],
  ["Autonomy","self-government; independence","n"],
  ["Avarice","extreme greed for wealth","n"],
  ["Averse","strongly disinclined; opposed","adj"],
  ["Avid","keenly enthusiastic; eager","adj"],

  // ── B ──
  ["Baleful","threatening harm; menacing","adj"],
  ["Banal","commonplace, trite, unoriginal","adj"],
  ["Bane","a cause of ruin or great distress","n"],
  ["Becoming","appropriate, fitting, suitable","adj"],
  ["Belie","to contradict or misrepresent","v"],
  ["Belligerent","hostile, aggressive, combative","adj"],
  ["Benevolent","kind, generous, well-meaning","adj"],
  ["Benign","gentle, harmless, favourable","adj"],
  ["Bereft","deprived of; lacking","adj"],
  ["Blasphemy","irreverence toward sacred things","n"],
  ["Blatant","obvious and unashamed; flagrant","adj"],
  ["Blithe","carefree, cheerful; casually indifferent","adj"],
  ["Bolster","to support, strengthen, reinforce","v"],
  ["Bombastic","pompous, inflated in language","adj"],
  ["Boorish","rude, ill-mannered, coarse","adj"],
  ["Bourgeois","conventionally middle-class; materialistic","adj"],
  ["Brazen","bold and shameless","adj"],
  ["Brevity","conciseness; shortness of time","n"],
  ["Buttress","to support or strengthen","v"],

  // ── C ──
  ["Cacophony","a harsh, discordant mixture of sounds","n"],
  ["Cajole","to persuade by flattery; coax","v"],
  ["Callous","insensitive; hard-hearted","adj"],
  ["Calumny","a false statement to damage reputation; slander","n"],
  ["Candid","frank, honest, straightforward","adj"],
  ["Canny","shrewd, astute, clever","adj"],
  ["Capitulate","to surrender or give in","v"],
  ["Capricious","impulsive, unpredictable, fickle","adj"],
  ["Castigate","to reprimand severely; criticise","v"],
  ["Catalyst","something that speeds up change","n"],
  ["Caustic","sarcastic, biting; corrosive","adj"],
  ["Censure","to criticise or blame formally","v"],
  ["Chastise","to punish or scold severely","v"],
  ["Chicanery","trickery, deception, subterfuge","n"],
  ["Churlish","rude, surly, ill-tempered","adj"],
  ["Circumlocution","roundabout, wordy expression","n"],
  ["Circumspect","cautious, wary, prudent","adj"],
  ["Circumvent","to avoid or bypass cleverly","v"],
  ["Clandestine","secret, concealed, covert","adj"],
  ["Cleave","to split; or to cling to","v"],
  ["Clemency","mercy or leniency","n"],
  ["Coalesce","to come together; unite","v"],
  ["Coerce","to compel by force or threat","v"],
  ["Cogent","clear, logical, convincing","adj"],
  ["Cognizant","aware, conscious, informed","adj"],
  ["Collusion","secret cooperation for fraud","n"],
  ["Commensurate","proportionate; corresponding in size","adj"],
  ["Compelling","forceful, convincing, gripping","adj"],
  ["Compliant","obliging, submissive, yielding","adj"],
  ["Complicity","involvement in wrongdoing","n"],
  ["Compunction","a feeling of guilt; scruple","n"],
  ["Concede","to admit or yield","v"],
  ["Conciliate","to reconcile or pacify","v"],
  ["Concord","agreement, harmony","n"],
  ["Condescend","to act superior; patronise","v"],
  ["Condone","to overlook or forgive (an offence)","v"],
  ["Conflagration","a large destructive fire","n"],
  ["Confluence","a coming together; junction","n"],
  ["Congenial","pleasant, agreeable, compatible","adj"],
  ["Conjecture","a guess or inference; to speculate","n"],
  ["Connoisseur","an expert judge in matters of taste","n"],
  ["Consecrate","to make or declare sacred","v"],
  ["Consensus","general agreement","n"],
  ["Consternation","dismay, alarm, anxiety","n"],
  ["Contentious","causing disagreement; quarrelsome","adj"],
  ["Contrite","feeling remorse; penitent","adj"],
  ["Contumacious","stubbornly disobedient; rebellious","adj"],
  ["Conundrum","a confusing and difficult problem","n"],
  ["Convoluted","complex, intricate, twisted","adj"],
  ["Copious","abundant, plentiful, ample","adj"],
  ["Corroborate","to confirm or support with evidence","v"],
  ["Cosmopolitan","worldly; from many parts of the world","adj"],
  ["Coterie","a small exclusive group","n"],
  ["Covert","secret, concealed, hidden","adj"],
  ["Covet","to desire wrongfully; crave","v"],
  ["Craven","cowardly, timid","adj"],
  ["Credulous","gullible; too ready to believe","adj"],
  ["Culpable","deserving blame; guilty","adj"],
  ["Cumbersome","clumsy, unwieldy, burdensome","adj"],
  ["Cupidity","greed for money or possessions","n"],
  ["Cursory","hasty and superficial","adj"],
  ["Curtail","to reduce, cut short, restrict","v"],
  ["Cynical","distrustful of others' motives","adj"],

  // ── D ──
  ["Dearth","a scarcity or lack","n"],
  ["Debacle","a sudden, humiliating failure","n"],
  ["Debase","to lower in quality or value","v"],
  ["Debauchery","excessive indulgence in vice","n"],
  ["Decadence","moral or cultural decline","n"],
  ["Decorum","proper behaviour; propriety","n"],
  ["Deference","respectful submission or regard","n"],
  ["Defile","to make dirty or corrupt","v"],
  ["Deft","skilful, adroit, nimble","adj"],
  ["Deleterious","harmful, damaging, injurious","adj"],
  ["Delineate","to describe or outline precisely","v"],
  ["Demagogue","a leader who exploits prejudice","n"],
  ["Demur","to raise objection; hesitate","v"],
  ["Denigrate","to belittle or defame","v"],
  ["Denounce","to condemn publicly","v"],
  ["Deplore","to strongly disapprove; lament","v"],
  ["Depravity","moral corruption; wickedness","n"],
  ["Deprecate","to express disapproval of","v"],
  ["Deride","to mock or ridicule","v"],
  ["Derision","mockery, ridicule, scorn","n"],
  ["Desecrate","to violate the sanctity of","v"],
  ["Despondent","in low spirits; dejected","adj"],
  ["Despot","a tyrant; absolute ruler","n"],
  ["Destitute","extremely poor; lacking necessities","adj"],
  ["Desultory","aimless, unmethodical, random","adj"],
  ["Deter","to discourage or prevent","v"],
  ["Detrimental","harmful, damaging","adj"],
  ["Devious","cunning, deceitful; roundabout","adj"],
  ["Dexterous","skilful with the hands; adroit","adj"],
  ["Diaphanous","light, delicate, translucent","adj"],
  ["Diatribe","a bitter verbal attack","n"],
  ["Didactic","intended to teach; instructive","adj"],
  ["Diffident","shy, lacking confidence","adj"],
  ["Digress","to stray from the main topic","v"],
  ["Dilatory","slow to act; delaying","adj"],
  ["Diligent","hard-working, careful, industrious","adj"],
  ["Diminutive","very small; tiny","adj"],
  ["Disabuse","to free from a false belief","v"],
  ["Discern","to perceive or distinguish","v"],
  ["Discordant","disagreeing; harsh-sounding","adj"],
  ["Discrepancy","an inconsistency or difference","n"],
  ["Disdain","contempt; to regard with scorn","n"],
  ["Disparage","to belittle; speak slightingly of","v"],
  ["Disparate","essentially different; dissimilar","adj"],
  ["Dispassionate","not influenced by emotion; impartial","adj"],
  ["Disseminate","to spread widely","v"],
  ["Dissent","to disagree; disagreement","v"],
  ["Dissipate","to squander or scatter","v"],
  ["Dissonance","lack of harmony; discord","n"],
  ["Dissuade","to persuade against","v"],
  ["Distend","to swell or expand","v"],
  ["Diverge","to move apart; differ","v"],
  ["Divulge","to reveal or disclose","v"],
  ["Docile","obedient, submissive, tractable","adj"],
  ["Dogmatic","asserting opinions arrogantly","adj"],
  ["Dormant","inactive; sleeping","adj"],
  ["Dubious","doubtful, questionable","adj"],
  ["Duplicity","deceitfulness; double-dealing","n"],
  ["Duress","threats or force used to coerce","n"],

  // ── E ──
  ["Ebullient","cheerful and full of energy","adj"],
  ["Eclectic","drawing from diverse sources","adj"],
  ["Edify","to instruct or improve morally","v"],
  ["Efface","to erase or wipe out","v"],
  ["Effervescent","bubbly; vivacious","adj"],
  ["Effigy","a crude image of a person","n"],
  ["Effrontery","insolent boldness; audacity","n"],
  ["Effusive","expressing feelings freely; gushing","adj"],
  ["Egotism","excessive self-importance","n"],
  ["Elated","overjoyed, thrilled, jubilant","adj"],
  ["Elicit","to draw out (a response)","v"],
  ["Eloquent","fluent and persuasive in speech","adj"],
  ["Elucidate","to make clear; explain","v"],
  ["Elusive","hard to catch or define","adj"],
  ["Emaciated","abnormally thin; wasted","adj"],
  ["Embellish","to decorate; to exaggerate","v"],
  ["Emollient","softening or soothing","adj"],
  ["Empirical","based on observation or experience","adj"],
  ["Emulate","to imitate in order to equal","v"],
  ["Enervate","to weaken or drain of energy","v"],
  ["Engender","to cause or give rise to","v"],
  ["Enigma","a puzzle or mystery","n"],
  ["Enmity","hostility, animosity","n"],
  ["Ennui","boredom; listlessness","n"],
  ["Ephemeral","short-lived, fleeting, transient","adj"],
  ["Epitome","a perfect example; embodiment","n"],
  ["Equanimity","calmness; composure","n"],
  ["Equitable","fair and impartial","adj"],
  ["Equivocal","ambiguous; open to two interpretations","adj"],
  ["Erudite","scholarly; learned","adj"],
  ["Eschew","to deliberately avoid","v"],
  ["Esoteric","understood by few; obscure","adj"],
  ["Espouse","to adopt or support (a cause)","v"],
  ["Ethereal","delicate; heavenly; light","adj"],
  ["Eulogy","a speech of high praise","n"],
  ["Euphemism","a mild term for a harsh one","n"],
  ["Euphoria","intense happiness; elation","n"],
  ["Evanescent","quickly fading; fleeting","adj"],
  ["Exacerbate","to make worse; aggravate","v"],
  ["Exasperate","to irritate intensely","v"],
  ["Exculpate","to clear from blame","v"],
  ["Exemplary","serving as a model; outstanding","adj"],
  ["Exhort","to strongly urge or encourage","v"],
  ["Exigency","an urgent need or demand","n"],
  ["Exonerate","to absolve from blame","v"],
  ["Exorbitant","excessive; unreasonably high","adj"],
  ["Expedient","convenient and practical; advantageous","adj"],
  ["Expedite","to speed up; hasten","v"],
  ["Expunge","to erase or remove completely","v"],
  ["Extant","still existing; surviving","adj"],
  ["Extol","to praise highly","v"],
  ["Extraneous","irrelevant; not essential","adj"],
  ["Extricate","to free from difficulty","v"],
  ["Exuberant","full of energy and joy","adj"],

  // ── F ──
  ["Facetious","joking inappropriately; flippant","adj"],
  ["Facile","achieved easily; superficial","adj"],
  ["Fallacious","based on a mistaken belief; false","adj"],
  ["Fastidious","very attentive to detail; fussy","adj"],
  ["Fatuous","silly and pointless; foolish","adj"],
  ["Fawn","to seek favour by flattery","v"],
  ["Feasible","possible; practicable","adj"],
  ["Feckless","ineffective; irresponsible","adj"],
  ["Felicitous","well-chosen; apt; pleasing","adj"],
  ["Fervent","passionate, intense, ardent","adj"],
  ["Fetter","to restrain or shackle","v"],
  ["Fickle","changeable; inconstant","adj"],
  ["Fidelity","faithfulness; loyalty","n"],
  ["Flagrant","glaringly bad; blatant","adj"],
  ["Flippant","not showing due seriousness","adj"],
  ["Florid","excessively ornate; flushed","adj"],
  ["Flout","to openly disregard (a rule)","v"],
  ["Foment","to stir up (trouble)","v"],
  ["Forbearance","patience; self-restraint","n"],
  ["Formidable","inspiring fear or respect","adj"],
  ["Fortitude","courage in adversity","n"],
  ["Fortuitous","happening by chance; lucky","adj"],
  ["Foster","to encourage or nurture","v"],
  ["Fractious","irritable; quarrelsome","adj"],
  ["Frivolous","not serious; trivial","adj"],
  ["Frugal","economical; sparing","adj"],
  ["Furtive","secretive; stealthy","adj"],
  ["Futile","pointless; useless","adj"],

  // ── G ──
  ["Garrulous","excessively talkative","adj"],
  ["Genial","friendly and cheerful","adj"],
  ["Germane","relevant; pertinent","adj"],
  ["Glib","fluent but insincere","adj"],
  ["Gluttony","excessive eating or greed","n"],
  ["Goad","to prod or provoke into action","v"],
  ["Gossamer","light, delicate, flimsy","adj"],
  ["Grandiloquent","pompous in language","adj"],
  ["Gratuitous","uncalled for; unwarranted; free","adj"],
  ["Gregarious","sociable; fond of company","adj"],
  ["Grievous","causing grief or great harm","adj"],
  ["Guile","cunning; deceitfulness","n"],
  ["Gullible","easily deceived; credulous","adj"],

  // ── H ──
  ["Hackneyed","overused; unoriginal; trite","adj"],
  ["Haphazard","random; lacking order","adj"],
  ["Harangue","a long, aggressive speech","n"],
  ["Harbinger","a forerunner; a sign of things to come","n"],
  ["Haughty","arrogantly superior; disdainful","adj"],
  ["Hedonism","the pursuit of pleasure","n"],
  ["Heresy","opinion against accepted belief","n"],
  ["Hiatus","a pause or gap","n"],
  ["Hierarchy","a ranked system of order","n"],
  ["Homogeneous","of the same kind; uniform","adj"],
  ["Hubris","excessive pride or arrogance","n"],
  ["Hyperbole","exaggeration for effect","n"],

  // ── I ──
  ["Iconoclast","one who attacks cherished beliefs","n"],
  ["Idiosyncrasy","a peculiar personal trait","n"],
  ["Ignominious","deserving disgrace; shameful","adj"],
  ["Illicit","forbidden by law or rule","adj"],
  ["Illusory","deceptive; not real","adj"],
  ["Immaculate","spotlessly clean; flawless","adj"],
  ["Imminent","about to happen","adj"],
  ["Immutable","unchangeable","adj"],
  ["Impartial","unbiased; fair","adj"],
  ["Impassive","showing no emotion","adj"],
  ["Impeccable","faultless; flawless","adj"],
  ["Impede","to hinder or obstruct","v"],
  ["Imperative","essential; urgent; a command","adj"],
  ["Imperious","commanding; domineering","adj"],
  ["Impertinent","rude; not showing respect","adj"],
  ["Imperturbable","calm; not easily upset","adj"],
  ["Impetuous","acting rashly; impulsive","adj"],
  ["Impious","lacking reverence; irreligious","adj"],
  ["Implacable","unable to be appeased","adj"],
  ["Implicit","implied though not stated","adj"],
  ["Impromptu","done without preparation","adj"],
  ["Improvident","not providing for the future","adj"],
  ["Imprudent","not showing care; unwise","adj"],
  ["Impudent","boldly disrespectful; insolent","adj"],
  ["Impunity","exemption from punishment","n"],
  ["Inadvertent","unintentional; accidental","adj"],
  ["Inane","silly; empty of meaning","adj"],
  ["Incense","to make very angry","v"],
  ["Inchoate","just begun; undeveloped","adj"],
  ["Incisive","sharp; penetrating; clear","adj"],
  ["Inclement","(of weather) harsh; severe","adj"],
  ["Incongruous","out of place; inconsistent","adj"],
  ["Incontrovertible","not able to be denied","adj"],
  ["Incorrigible","incapable of being reformed","adj"],
  ["Indefatigable","tireless; persistent","adj"],
  ["Indelible","impossible to remove","adj"],
  ["Indict","to formally accuse of a crime","v"],
  ["Indifferent","having no interest; apathetic","adj"],
  ["Indolent","lazy; idle","adj"],
  ["Indomitable","unconquerable; unyielding","adj"],
  ["Indubitable","beyond doubt; certain","adj"],
  ["Induce","to persuade or bring about","v"],
  ["Ineluctable","unavoidable; inescapable","adj"],
  ["Inept","incompetent; clumsy","adj"],
  ["Inert","inactive; sluggish","adj"],
  ["Inexorable","relentless; unstoppable","adj"],
  ["Infallible","incapable of error","adj"],
  ["Infamous","having a bad reputation; notorious","adj"],
  ["Ingenious","cleverly inventive","adj"],
  ["Ingenuous","innocent; naive; frank","adj"],
  ["Ingrained","deeply fixed; firmly established","adj"],
  ["Inherent","existing as an essential quality","adj"],
  ["Inimical","hostile; harmful","adj"],
  ["Iniquity","gross injustice; wickedness","n"],
  ["Innate","inborn; natural","adj"],
  ["Innocuous","harmless","adj"],
  ["Innuendo","an indirect, usually derogatory hint","n"],
  ["Inordinate","excessive; unreasonable","adj"],
  ["Insatiable","impossible to satisfy","adj"],
  ["Insidious","proceeding subtly but harmfully","adj"],
  ["Insipid","lacking flavour or interest; dull","adj"],
  ["Insolent","rude; disrespectful","adj"],
  ["Insular","narrow-minded; isolated","adj"],
  ["Insurgent","a rebel; rising against authority","n"],
  ["Interminable","endless; tediously long","adj"],
  ["Intractable","hard to control or manage","adj"],
  ["Intransigent","refusing to compromise","adj"],
  ["Intrepid","fearless; brave","adj"],
  ["Inundate","to flood or overwhelm","v"],
  ["Inured","accustomed to something unpleasant","adj"],
  ["Invective","abusive language","n"],
  ["Inveterate","habitual; long-established","adj"],
  ["Invidious","likely to cause resentment; unfair","adj"],
  ["Irascible","easily angered; hot-tempered","adj"],
  ["Irk","to irritate or annoy","v"],
  ["Irrefutable","impossible to disprove","adj"],
  ["Itinerant","travelling from place to place","adj"],

  // ── J-K ──
  ["Jaded","tired or bored; worn out","adj"],
  ["Jargon","specialised technical language","n"],
  ["Jeopardize","to put at risk","v"],
  ["Jettison","to throw away; discard","v"],
  ["Jocular","fond of joking; humorous","adj"],
  ["Jubilant","feeling great joy; triumphant","adj"],
  ["Judicious","showing good judgement; wise","adj"],
  ["Juxtapose","to place side by side for contrast","v"],
  ["Ken","range of knowledge or sight","n"],
  ["Kindle","to arouse or inspire; to light","v"],
  ["Kudos","praise; acclaim","n"],

  // ── L ──
  ["Labyrinthine","intricate; maze-like","adj"],
  ["Laconic","using very few words; terse","adj"],
  ["Lament","to express grief; mourn","v"],
  ["Languid","lacking energy; sluggish","adj"],
  ["Largess","generosity in giving","n"],
  ["Latent","hidden; not yet developed","adj"],
  ["Laud","to praise","v"],
  ["Lavish","abundant; extravagant","adj"],
  ["Lax","not strict; careless","adj"],
  ["Lethargic","sluggish; lacking energy","adj"],
  ["Levity","light-heartedness; lack of seriousness","n"],
  ["Libel","a false written statement damaging reputation","n"],
  ["Licentious","promiscuous; lacking moral restraint","adj"],
  ["Loathe","to hate intensely","v"],
  ["Loquacious","talkative","adj"],
  ["Lucid","clear; easy to understand","adj"],
  ["Lugubrious","mournful; dismal","adj"],
  ["Luminous","bright; shining; brilliant","adj"],
  ["Lurid","shocking; sensational; garishly bright","adj"],

  // ── M ──
  ["Magnanimous","generous; forgiving; noble","adj"],
  ["Malaise","a general feeling of unease","n"],
  ["Malevolent","wishing evil to others","adj"],
  ["Malfeasance","wrongdoing, esp. by an official","n"],
  ["Malice","desire to harm others; spite","n"],
  ["Malinger","to pretend illness to avoid work","v"],
  ["Malleable","easily shaped or influenced","adj"],
  ["Maudlin","tearfully sentimental","adj"],
  ["Maverick","an independent nonconformist","n"],
  ["Meager","scanty; insufficient","adj"],
  ["Mendacious","untruthful; lying","adj"],
  ["Mercurial","subject to sudden mood changes","adj"],
  ["Meticulous","very careful and precise","adj"],
  ["Mitigate","to make less severe","v"],
  ["Mollify","to soothe; appease","v"],
  ["Morose","sullen; gloomy","adj"],
  ["Multifarious","having great variety","adj"],
  ["Mundane","ordinary; dull; everyday","adj"],
  ["Munificent","very generous","adj"],
  ["Myriad","countless; a very great number","adj"],

  // ── N ──
  ["Nadir","the lowest point","n"],
  ["Nascent","just coming into existence","adj"],
  ["Nebulous","vague; unclear; hazy","adj"],
  ["Nefarious","wicked; villainous","adj"],
  ["Negligible","so small as to be unimportant","adj"],
  ["Neophyte","a beginner; novice","n"],
  ["Niggardly","stingy; ungenerous","adj"],
  ["Nonchalant","calmly unconcerned; casual","adj"],
  ["Nostalgia","a longing for the past","n"],
  ["Notorious","famous for something bad","adj"],
  ["Novel","new and original","adj"],
  ["Noxious","harmful; poisonous","adj"],
  ["Nuance","a subtle difference in meaning","n"],
  ["Nullify","to make legally void; cancel","v"],

  // ── O ──
  ["Obdurate","stubborn; unyielding","adj"],
  ["Obfuscate","to make obscure or unclear","v"],
  ["Objective","not influenced by feelings; a goal","adj"],
  ["Oblivious","unaware; unmindful","adj"],
  ["Obscure","not clearly known; to conceal","adj"],
  ["Obsequious","excessively obedient; fawning","adj"],
  ["Obsolete","no longer in use; outdated","adj"],
  ["Obstinate","stubbornly refusing to change","adj"],
  ["Obtuse","slow to understand; dull","adj"],
  ["Obviate","to remove (a need or difficulty)","v"],
  ["Odious","hateful; repugnant","adj"],
  ["Officious","meddlesome; interfering","adj"],
  ["Ominous","threatening; foreboding","adj"],
  ["Onerous","burdensome; oppressive","adj"],
  ["Opaque","not transparent; hard to understand","adj"],
  ["Opulent","luxurious; wealthy","adj"],
  ["Ornate","elaborately decorated","adj"],
  ["Oscillate","to swing back and forth; waver","v"],
  ["Ostensible","apparent but not necessarily true","adj"],
  ["Ostentatious","showy; pretentious","adj"],
  ["Ostracize","to exclude from society","v"],
  ["Overt","done openly; not concealed","adj"],

  // ── P ──
  ["Palatable","acceptable; pleasant to taste","adj"],
  ["Palliate","to lessen without curing; alleviate","v"],
  ["Palpable","able to be felt; obvious","adj"],
  ["Panacea","a universal remedy","n"],
  ["Paragon","a model of excellence","n"],
  ["Paramount","supreme; of chief importance","adj"],
  ["Pariah","a social outcast","n"],
  ["Parody","a humorous imitation","n"],
  ["Parsimonious","excessively frugal; stingy","adj"],
  ["Partisan","a strong supporter of a side; biased","adj"],
  ["Paucity","scarcity; smallness of number","n"],
  ["Peccadillo","a minor fault or sin","n"],
  ["Pejorative","expressing disapproval; belittling","adj"],
  ["Penchant","a strong liking; inclination","n"],
  ["Penitent","feeling regret; repentant","adj"],
  ["Pensive","deeply thoughtful; reflective","adj"],
  ["Penury","extreme poverty","n"],
  ["Perceptive","having keen insight","adj"],
  ["Peremptory","insisting on obedience; imperious","adj"],
  ["Perfidious","treacherous; disloyal","adj"],
  ["Perfunctory","done carelessly; cursory","adj"],
  ["Pernicious","harmful in a gradual way","adj"],
  ["Perpetuate","to make continue indefinitely","v"],
  ["Perplex","to confuse or puzzle","v"],
  ["Perspicacious","having keen judgement; shrewd","adj"],
  ["Pertinent","relevant; to the point","adj"],
  ["Perturb","to disturb or worry","v"],
  ["Pervasive","spreading widely throughout","adj"],
  ["Petulant","childishly sulky; peevish","adj"],
  ["Philanthropy","desire to help others; charity","n"],
  ["Phlegmatic","calm; unemotional","adj"],
  ["Pious","devoutly religious","adj"],
  ["Pithy","concise and forceful","adj"],
  ["Placate","to pacify; appease","v"],
  ["Placid","calm; peaceful","adj"],
  ["Plausible","seemingly reasonable or probable","adj"],
  ["Plethora","an excess; overabundance","n"],
  ["Poignant","evoking keen emotion; touching","adj"],
  ["Polemic","a strong verbal or written attack","n"],
  ["Ponderous","heavy; laboured; dull","adj"],
  ["Pragmatic","practical; realistic","adj"],
  ["Precarious","unstable; uncertain; risky","adj"],
  ["Preclude","to prevent; make impossible","v"],
  ["Precocious","developing early; mature for one's age","adj"],
  ["Predilection","a preference or liking","n"],
  ["Preposterous","absurd; contrary to reason","adj"],
  ["Prevaricate","to speak evasively; lie","v"],
  ["Pristine","in original, unspoiled condition","adj"],
  ["Probity","honesty; integrity","n"],
  ["Proclivity","a tendency or inclination","n"],
  ["Prodigal","wastefully extravagant","adj"],
  ["Prodigious","impressively large; enormous","adj"],
  ["Profane","irreverent; secular","adj"],
  ["Profligate","recklessly wasteful; dissolute","adj"],
  ["Profound","very deep; intense","adj"],
  ["Profuse","abundant; plentiful","adj"],
  ["Proliferate","to increase rapidly; multiply","v"],
  ["Prolific","producing much; fruitful","adj"],
  ["Propensity","a natural inclination","n"],
  ["Propitious","favourable; auspicious","adj"],
  ["Prosaic","dull; ordinary; unimaginative","adj"],
  ["Proscribe","to forbid; prohibit","v"],
  ["Protean","versatile; readily changing","adj"],
  ["Provident","preparing for the future; thrifty","adj"],
  ["Prudent","careful; sensible; cautious","adj"],
  ["Puerile","childish; immature","adj"],
  ["Pugnacious","eager to fight; combative","adj"],
  ["Punctilious","showing great attention to detail","adj"],
  ["Pungent","sharp in taste or smell; caustic","adj"],
  ["Purge","to rid of something unwanted","v"],
  ["Pusillanimous","cowardly; timid","adj"],

  // ── Q ──
  ["Quaint","charmingly old-fashioned","adj"],
  ["Quandary","a state of uncertainty; dilemma","n"],
  ["Quell","to suppress or subdue","v"],
  ["Querulous","complaining; peevish","adj"],
  ["Quiescent","inactive; quiet; dormant","adj"],
  ["Quintessential","representing the perfect example","adj"],
  ["Quixotic","idealistic but impractical","adj"],
  ["Quash","to reject or suppress; annul","v"],
  ["Quotidian","daily; commonplace","adj"],

  // ── R ──
  ["Rancor","bitter, long-lasting resentment","n"],
  ["Rapacious","greedy; grasping","adj"],
  ["Rapport","a harmonious relationship","n"],
  ["Rebuke","to reprimand sharply","v"],
  ["Rebut","to refute by argument","v"],
  ["Recalcitrant","stubbornly resistant to authority","adj"],
  ["Recant","to withdraw a statement formally","v"],
  ["Recluse","one who lives in seclusion","n"],
  ["Recondite","obscure; hard to understand","adj"],
  ["Rectitude","moral uprightness","n"],
  ["Redolent","strongly reminiscent; fragrant","adj"],
  ["Redundant","superfluous; unnecessary","adj"],
  ["Refractory","stubborn; unmanageable","adj"],
  ["Refute","to prove to be false","v"],
  ["Relegate","to consign to a lower position","v"],
  ["Relentless","unyielding; persistent","adj"],
  ["Remiss","negligent; careless in duty","adj"],
  ["Remorse","deep regret for wrongdoing","n"],
  ["Renege","to go back on a promise","v"],
  ["Renounce","to give up formally","v"],
  ["Repartee","witty, quick conversation","n"],
  ["Replete","filled or well-supplied","adj"],
  ["Reprehensible","deserving blame; disgraceful","adj"],
  ["Reprieve","a temporary relief or delay","n"],
  ["Reproach","to express disapproval; blame","v"],
  ["Reprove","to reprimand gently","v"],
  ["Repudiate","to reject or disown","v"],
  ["Repugnant","distasteful; offensive","adj"],
  ["Rescind","to revoke or cancel","v"],
  ["Resilient","able to recover quickly","adj"],
  ["Resolute","firmly determined","adj"],
  ["Reticent","reserved; reluctant to speak","adj"],
  ["Reverent","showing deep respect","adj"],
  ["Rhetoric","the art of persuasive speaking","n"],
  ["Ribald","irreverently humorous; coarse","adj"],
  ["Rife","widespread; abundant","adj"],
  ["Robust","strong; vigorous; sturdy","adj"],
  ["Rudimentary","basic; elementary","adj"],
  ["Ruminate","to ponder deeply","v"],
  ["Ruse","a trick or stratagem","n"],

  // ── S ──
  ["Sagacious","wise; shrewd; discerning","adj"],
  ["Salient","most noticeable or important","adj"],
  ["Salubrious","health-giving; wholesome","adj"],
  ["Sanctimonious","making a show of piety","adj"],
  ["Sanguine","optimistic; cheerful","adj"],
  ["Sardonic","grimly mocking; cynical","adj"],
  ["Satiate","to satisfy fully; glut","v"],
  ["Saturnine","gloomy; sullen","adj"],
  ["Scanty","barely sufficient; meagre","adj"],
  ["Scrupulous","careful; conscientious; principled","adj"],
  ["Scrutinize","to examine closely","v"],
  ["Seclusion","the state of being private; isolation","n"],
  ["Sedentary","involving much sitting; inactive","adj"],
  ["Sedition","incitement to rebellion","n"],
  ["Sedulous","diligent; persistent","adj"],
  ["Serene","calm; peaceful; untroubled","adj"],
  ["Servile","excessively submissive","adj"],
  ["Sinister","suggesting evil; menacing","adj"],
  ["Skeptical","doubtful; questioning","adj"],
  ["Slander","a false spoken statement harming reputation","n"],
  ["Sloth","laziness; reluctance to work","n"],
  ["Sobriety","the state of being sober; seriousness","n"],
  ["Solace","comfort in distress","n"],
  ["Solicitous","showing care or concern","adj"],
  ["Soporific","tending to cause sleep","adj"],
  ["Sordid","dirty; morally degraded","adj"],
  ["Spartan","marked by strict self-discipline; austere","adj"],
  ["Specious","seemingly true but actually false","adj"],
  ["Sporadic","occurring irregularly; scattered","adj"],
  ["Spurious","not genuine; false","adj"],
  ["Spurn","to reject with contempt","v"],
  ["Squalid","filthy; wretched","adj"],
  ["Squander","to waste; spend recklessly","v"],
  ["Staid","sedate; serious; sober","adj"],
  ["Stagnant","not flowing; inactive","adj"],
  ["Static","unchanging; still","adj"],
  ["Staunch","loyal and committed; firm","adj"],
  ["Steadfast","firmly loyal; unwavering","adj"],
  ["Stint","to be sparing; a fixed period of work","v"],
  ["Stoic","enduring hardship without complaint","adj"],
  ["Stolid","calm; showing little emotion","adj"],
  ["Strident","loud and harsh; grating","adj"],
  ["Stringent","strict; rigorous","adj"],
  ["Stultify","to make ineffective; dull","v"],
  ["Stupor","a state of near-unconsciousness","n"],
  ["Suave","smoothly polite; sophisticated","adj"],
  ["Subjugate","to bring under control; conquer","v"],
  ["Sublime","of outstanding beauty or grandeur","adj"],
  ["Submissive","meekly obedient; yielding","adj"],
  ["Subterfuge","deceit used to achieve an aim","n"],
  ["Subtle","delicate; not obvious","adj"],
  ["Succinct","briefly and clearly expressed","adj"],
  ["Succumb","to yield or give way","v"],
  ["Sullen","bad-tempered and sulky","adj"],
  ["Sumptuous","luxurious; lavish","adj"],
  ["Sundry","various; miscellaneous","adj"],
  ["Supercilious","haughtily disdainful","adj"],
  ["Superfluous","more than needed; unnecessary","adj"],
  ["Supersede","to replace; take the place of","v"],
  ["Supine","lying face up; passive","adj"],
  ["Supplant","to replace or supersede","v"],
  ["Supple","flexible; adaptable","adj"],
  ["Surfeit","an excess; overindulgence","n"],
  ["Surly","bad-tempered; unfriendly","adj"],
  ["Surmise","to guess; conjecture","v"],
  ["Surreptitious","done secretly; stealthy","adj"],
  ["Sycophant","a servile flatterer","n"],

  // ── T ──
  ["Tacit","understood without being stated","adj"],
  ["Taciturn","reserved; saying little","adj"],
  ["Tangential","only slightly relevant; digressing","adj"],
  ["Tangible","perceptible by touch; concrete","adj"],
  ["Tantamount","equivalent in effect","adj"],
  ["Tawdry","cheap and gaudy","adj"],
  ["Temerity","reckless boldness; audacity","n"],
  ["Temperate","moderate; self-restrained","adj"],
  ["Tenable","defensible; able to be maintained","adj"],
  ["Tenacious","persistent; holding firmly","adj"],
  ["Tentative","provisional; hesitant","adj"],
  ["Tenuous","weak; slight; flimsy","adj"],
  ["Tepid","lukewarm; unenthusiastic","adj"],
  ["Terse","brief and to the point; curt","adj"],
  ["Timorous","fearful; timid","adj"],
  ["Tirade","a long angry speech","n"],
  ["Torpid","sluggish; inactive","adj"],
  ["Tortuous","full of twists; complex","adj"],
  ["Tractable","easily managed; docile","adj"],
  ["Tranquil","calm; peaceful","adj"],
  ["Transcend","to go beyond the limits of","v"],
  ["Transient","lasting a short time; fleeting","adj"],
  ["Transgress","to violate a law or moral code","v"],
  ["Trepidation","fear; apprehension","n"],
  ["Trite","overused; unoriginal","adj"],
  ["Truculent","aggressively defiant","adj"],
  ["Truncate","to shorten by cutting","v"],
  ["Turbulent","in violent commotion; unstable","adj"],
  ["Turgid","swollen; pompous in style","adj"],
  ["Turpitude","depravity; wickedness","n"],

  // ── U ──
  ["Ubiquitous","present everywhere","adj"],
  ["Umbrage","offence or annoyance","n"],
  ["Unassuming","modest; not pretentious","adj"],
  ["Uncanny","strange; mysterious","adj"],
  ["Unctuous","excessively flattering; oily","adj"],
  ["Undermine","to weaken gradually","v"],
  ["Undulate","to move in waves","v"],
  ["Unequivocal","clear; leaving no doubt","adj"],
  ["Unfeigned","genuine; sincere","adj"],
  ["Unkempt","untidy; dishevelled","adj"],
  ["Unmitigated","absolute; complete","adj"],
  ["Unprecedented","never done or known before","adj"],
  ["Unravel","to solve; to undo","v"],
  ["Unruly","disorderly; hard to control","adj"],
  ["Unscrupulous","without moral principles","adj"],
  ["Untenable","indefensible; not maintainable","adj"],
  ["Upbraid","to scold; reproach","v"],
  ["Usurp","to seize wrongfully (power)","v"],
  ["Utilitarian","designed for usefulness; practical","adj"],
  ["Utopia","an ideal perfect place","n"],

  // ── V ──
  ["Vacillate","to waver; be indecisive","v"],
  ["Vacuous","empty; lacking intelligence","adj"],
  ["Vanguard","the leading position; forefront","n"],
  ["Vapid","dull; insipid; lifeless","adj"],
  ["Variegated","having varied colours; diverse","adj"],
  ["Vehement","showing strong feeling; forceful","adj"],
  ["Venal","open to bribery; corrupt","adj"],
  ["Venerable","commanding respect through age","adj"],
  ["Venerate","to regard with deep respect","v"],
  ["Venial","(of a fault) minor; pardonable","adj"],
  ["Veracity","truthfulness; accuracy","n"],
  ["Verbose","using more words than needed; wordy","adj"],
  ["Verdant","green with vegetation; lush","adj"],
  ["Vestige","a trace of something gone","n"],
  ["Vex","to annoy or worry","v"],
  ["Vicarious","experienced through another","adj"],
  ["Vicissitude","a change of circumstances","n"],
  ["Vigilant","keeping careful watch; alert","adj"],
  ["Vilify","to defame; speak ill of","v"],
  ["Vindicate","to clear of blame; justify","v"],
  ["Vindictive","having a strong desire for revenge","adj"],
  ["Virtuoso","a highly skilled performer","n"],
  ["Virulent","extremely harmful; bitterly hostile","adj"],
  ["Viscous","thick and sticky","adj"],
  ["Vitiate","to spoil or impair","v"],
  ["Vitriolic","filled with bitter criticism","adj"],
  ["Vituperate","to abuse verbally; berate","v"],
  ["Vivacious","lively; spirited","adj"],
  ["Vociferous","loud and forceful in expression","adj"],
  ["Volatile","liable to change rapidly; unstable","adj"],
  ["Voluble","speaking fluently and at length","adj"],
  ["Voracious","having a huge appetite; greedy","adj"],

  // ── W-Z ──
  ["Wane","to decrease; decline","v"],
  ["Wanton","deliberate and unprovoked; reckless","adj"],
  ["Wary","cautious; watchful","adj"],
  ["Whimsical","playfully fanciful; unpredictable","adj"],
  ["Wily","cunning; crafty","adj"],
  ["Winsome","charming; engaging","adj"],
  ["Wistful","having vague, sad longing","adj"],
  ["Wizened","shrivelled; wrinkled with age","adj"],
  ["Wrath","extreme anger","n"],
  ["Xenophobia","fear or hatred of foreigners","n"],
  ["Yoke","to join together; a burden","v"],
  ["Zealous","full of eager enthusiasm","adj"],
  ["Zenith","the highest point; peak","n"],
  ["Zephyr","a gentle breeze","n"],
];

export default function APFC_ENGLISH({ words = WORDS }) {
  // normalise to objects
  const deck = useMemo(
    () => words.map((w, i) => ({ id: i, word: w[0], meaning: w[1], pos: w[2], tag: w[3] || null })),
    [words]
  );

  const [order, setOrder] = useState(() => deck.map((c) => c.id));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(() => new Set());
  const [filter, setFilter] = useState("all"); // all | learning | known | pyq
  const [query, setQuery] = useState("");

  // apply filter to the ordered list
  const visible = useMemo(() => {
    let ids = order;
    if (filter === "learning") ids = ids.filter((id) => !known.has(id));
    else if (filter === "known") ids = ids.filter((id) => known.has(id));
    else if (filter === "pyq") ids = ids.filter((id) => deck[id].tag === "PYQ");
    return ids;
  }, [order, filter, known, deck]);

  // keep pos in range when the visible set changes
  useEffect(() => {
    if (pos >= visible.length) setPos(visible.length ? visible.length - 1 : 0);
  }, [visible.length]); // eslint-disable-line

  const current = visible.length ? deck[visible[pos]] : null;

  const go = useCallback((delta) => {
    setFlipped(false);
    setPos((p) => {
      if (!visible.length) return 0;
      return (p + delta + visible.length) % visible.length;
    });
  }, [visible.length]);

  const markKnown = useCallback((isKnown) => {
    if (!current) return;
    setKnown((prev) => {
      const next = new Set(prev);
      if (isKnown) next.add(current.id);
      else next.delete(current.id);
      return next;
    });
    go(1);
  }, [current, go]);

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

  const reset = () => { setKnown(new Set()); setPos(0); setFlipped(false); };

  // keyboard shortcuts
  useEffect(() => {
    const onKey = (e) => {
      if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
      if (e.code === "Space") { e.preventDefault(); setFlipped((f) => !f); }
      else if (e.code === "ArrowRight") go(1);
      else if (e.code === "ArrowLeft") go(-1);
      else if (e.key.toLowerCase() === "k") markKnown(true);
      else if (e.key.toLowerCase() === "l") markKnown(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, markKnown]);

  // search → jump to first match (within full deck) and clear filter
  const runSearch = (q) => {
    setQuery(q);
    const s = q.trim().toLowerCase();
    if (!s) return;
    const idx = deck.findIndex((c) => c.word.toLowerCase().startsWith(s));
    if (idx >= 0) {
      setFilter("all");
      const p = order.indexOf(idx);
      if (p >= 0) { setPos(p); setFlipped(false); }
    }
  };

  const total = deck.length;
  const knownCount = known.size;
  const pyqCount = deck.filter((c) => c.tag === "PYQ").length;

  return (
    <div className="vf-root">
      <style>{styles}</style>

      <header className="vf-header">
        <h1 className="vf-title">Vocabulary Flashcards</h1>
        <p className="vf-sub">
          {total} words · <strong>{knownCount}</strong> known ·{" "}
          <strong>{total - knownCount}</strong> to learn
        </p>
      </header>

      <div className="vf-controls">
        <div className="vf-filters" role="tablist" aria-label="Filter deck">
          {[
            ["all", `All (${total})`],
            ["learning", `Still learning (${total - knownCount})`],
            ["known", `Known (${knownCount})`],
            ["pyq", `PYQ words (${pyqCount})`],
          ].map(([key, label]) => (
            <button
              key={key}
              role="tab"
              aria-selected={filter === key}
              className={`vf-filter${filter === key ? " is-active" : ""}`}
              onClick={() => { setFilter(key); setPos(0); setFlipped(false); }}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="vf-actions">
          <button className="vf-btn" onClick={shuffle}>Shuffle</button>
          <button className="vf-btn" onClick={reset} disabled={!knownCount}>Reset progress</button>
        </div>
      </div>

      <div className="vf-searchbar">
        <input
          className="vf-search"
          value={query}
          onChange={(e) => runSearch(e.target.value)}
          placeholder="Jump to a word…"
          aria-label="Search words"
        />
        {query && <button className="vf-clear" onClick={() => setQuery("")}>Clear</button>}
      </div>

      {current ? (
        <>
          <div className="vf-progress">
            Card <strong>{pos + 1}</strong> / {visible.length}
          </div>

          <button
            className={`vf-card${flipped ? " is-flipped" : ""}`}
            onClick={() => setFlipped((f) => !f)}
            aria-label="Flashcard — click to flip"
          >
            <div className="vf-card-inner">
              <div className="vf-face vf-front">
                {current.tag === "PYQ" && <span className="vf-badge">PYQ</span>}
                <span className="vf-word">{current.word}</span>
                <span className="vf-pos">{posLabel(current.pos)}</span>
                <span className="vf-hint">click / Space to flip</span>
              </div>
              <div className="vf-face vf-back">
                <span className="vf-meaning">{current.meaning}</span>
                <span className="vf-word-sm">{current.word} · {posLabel(current.pos)}</span>
              </div>
            </div>
          </button>

          <div className="vf-nav">
            <button className="vf-nav-btn" onClick={() => go(-1)} aria-label="Previous">‹ Prev</button>
            <button className="vf-mark vf-learning" onClick={() => markKnown(false)}>Still learning</button>
            <button className="vf-mark vf-known" onClick={() => markKnown(true)}>I know this ✓</button>
            <button className="vf-nav-btn" onClick={() => go(1)} aria-label="Next">Next ›</button>
          </div>

          <p className="vf-keys">Keys: Space = flip · ← → = navigate · K = known · L = still learning</p>
        </>
      ) : (
        <div className="vf-empty">
          Nothing in this filter yet. {filter === "known" ? "Mark some cards as known." : "Try another filter."}
        </div>
      )}
    </div>
  );
}

function posLabel(p) {
  return p === "n" ? "noun" : p === "v" ? "verb" : p === "adj" ? "adjective" : p === "adv" ? "adverb" : p || "";
}

const styles = `
.vf-root {
  --ink:#1a2233; --muted:#5b6472; --line:#e2e6ee; --surface:#fff; --bg:#f7f8fb;
  --primary:#2d4a8a; --primary-soft:#eaf0fb; --ok:#1a7f5a; --ok-bg:#e8f5ee;
  --warn:#9a6a00; --warn-bg:#fdf3d8;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  color:var(--ink); background:var(--bg); max-width:640px; margin:0 auto; padding:24px;
  border-radius:14px; box-sizing:border-box; line-height:1.5;
}
.vf-root *,.vf-root *::before,.vf-root *::after{box-sizing:border-box;}
.vf-header{margin-bottom:14px;}
.vf-title{font-size:23px;font-weight:700;margin:0 0 4px;letter-spacing:-.01em;}
.vf-sub{margin:0;color:var(--muted);font-size:14px;}
.vf-sub strong{color:var(--ink);}

.vf-controls{display:flex;flex-wrap:wrap;gap:10px;justify-content:space-between;align-items:center;margin-bottom:12px;}
.vf-filters{display:flex;flex-wrap:wrap;gap:6px;}
.vf-filter{font:inherit;font-size:13px;font-weight:600;padding:6px 11px;border:1px solid var(--line);
  background:var(--surface);color:var(--muted);border-radius:8px;cursor:pointer;}
.vf-filter:hover{border-color:var(--primary);color:var(--primary);}
.vf-filter.is-active{background:var(--primary);border-color:var(--primary);color:#fff;}
.vf-actions{display:flex;gap:6px;}
.vf-btn{font:inherit;font-size:13px;font-weight:600;padding:6px 12px;border:1px solid var(--line);
  background:transparent;color:var(--muted);border-radius:8px;cursor:pointer;}
.vf-btn:hover:not(:disabled){border-color:var(--primary);color:var(--primary);}
.vf-btn:disabled{opacity:.45;cursor:default;}

.vf-searchbar{display:flex;gap:8px;margin-bottom:14px;}
.vf-search{flex:1;font:inherit;font-size:14px;padding:9px 12px;border:1px solid var(--line);
  border-radius:9px;background:var(--surface);color:var(--ink);}
.vf-search:focus{outline:2px solid var(--primary);outline-offset:1px;border-color:var(--primary);}
.vf-clear{font:inherit;font-size:13px;font-weight:600;padding:8px 12px;border:1px solid var(--line);
  background:transparent;color:var(--muted);border-radius:9px;cursor:pointer;}

.vf-progress{text-align:center;font-size:13px;color:var(--muted);margin-bottom:8px;}
.vf-progress strong{color:var(--ink);}

.vf-card{display:block;width:100%;border:none;background:none;padding:0;cursor:pointer;
  perspective:1200px;margin-bottom:16px;}
.vf-card-inner{position:relative;width:100%;min-height:220px;transition:transform .5s;
  transform-style:preserve-3d;}
.vf-card.is-flipped .vf-card-inner{transform:rotateY(180deg);}
.vf-face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;
  display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;
  border:1px solid var(--line);border-radius:16px;padding:26px;text-align:center;}
.vf-front{background:var(--surface);}
.vf-back{background:var(--primary-soft);transform:rotateY(180deg);}
.vf-badge{position:absolute;top:14px;right:14px;font-size:11px;font-weight:800;color:var(--warn);
  background:var(--warn-bg);padding:2px 8px;border-radius:999px;letter-spacing:.03em;}
.vf-word{font-size:32px;font-weight:800;letter-spacing:-.01em;color:var(--ink);}
.vf-pos{font-size:13px;font-style:italic;color:var(--muted);}
.vf-hint{position:absolute;bottom:14px;font-size:11px;color:#aab2c2;}
.vf-meaning{font-size:20px;font-weight:600;color:var(--primary);max-width:26ch;}
.vf-word-sm{font-size:13px;color:var(--muted);}

.vf-nav{display:grid;grid-template-columns:auto 1fr 1fr auto;gap:8px;align-items:stretch;}
.vf-nav-btn{font:inherit;font-size:14px;font-weight:600;padding:11px 14px;border:1px solid var(--line);
  background:var(--surface);color:var(--ink);border-radius:10px;cursor:pointer;}
.vf-nav-btn:hover{border-color:var(--primary);color:var(--primary);}
.vf-mark{font:inherit;font-size:14px;font-weight:700;padding:11px 10px;border:1px solid;border-radius:10px;cursor:pointer;}
.vf-learning{color:var(--warn);background:var(--warn-bg);border-color:#e7d199;}
.vf-known{color:#fff;background:var(--ok);border-color:var(--ok);}
.vf-keys{text-align:center;font-size:12px;color:#aab2c2;margin:10px 0 0;}

.vf-empty{padding:40px 16px;text-align:center;color:var(--muted);border:1px dashed var(--line);border-radius:12px;}

@media (max-width:520px){
  .vf-root{padding:16px;}
  .vf-nav{grid-template-columns:1fr 1fr;}
  .vf-word{font-size:27px;}
}
@media (prefers-reduced-motion:reduce){.vf-card-inner{transition:none;}}
`;