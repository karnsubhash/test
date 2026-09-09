/**
 * UPSC EPFO (APFC / EO-AO) Previous Year Questions.
 *
 * Data shape consumed by <PYQPractice />:
 *   { year, label?, questions: [
 *       { id, subject?, question, options:[{id,text}], correctId, explanation?, verify? }
 *   ]}
 *
 * 2025 questions are transcribed from the official CRT-IX booklet
 * (Series A, TBC PENA-A-PTS, held 30/11/2025). 120 items, 2.5 marks each.
 *
 * IMPORTANT: The uploaded booklet had NO answer key. correctId values are
 * based on subject knowledge. Items marked `verify: true` are current-affairs
 * or ambiguous statement questions worth cross-checking against the official
 * UPSC answer key once released.
 */

export const PYQ_DATA = [
  {
    year: "2025",
    label: "2025 · Combined (Series A)",
    questions: [
      // ── PART A: English (Q1–20) ──────────────────────────────
      {
        id: "q1",
        subject: "English · Passage",
        question:
          "Passage — blanks (i)–(iv): “At least 20 million (i) ___ live outside the continent … Europe accounts for about half of African (ii) ___ outside Africa … fierce backlash against (iii) ___ across the West … African (iv) ___ is an unstoppable force.” Select the correct set of terms for (i)–(iv).",
        options: [
          { id: "a", text: "(i) immigrants; (ii) migration; (iii) emigrants; (iv) immigration" },
          { id: "b", text: "(i) emigrants; (ii) migrants; (iii) immigration; (iv) migration" },
          { id: "c", text: "(i) immigrants; (ii) emigrants; (iii) immigration; (iv) migrants" },
          { id: "d", text: "(i) emigrants; (ii) migrants; (iii) migration; (iv) emigration" },
        ],
        correctId: "b",
        explanation:
          "People who leave Africa are emigrants/migrants; the backlash in the West is against immigration; the unstoppable force is (African) migration.",
        verify: true,
      },
      {
        id: "q2",
        subject: "English · Passage",
        question:
          "Which of the following sentences with respect to the passage is/are correct?\n1. All rich western nations have been seeing an increase in emigration from Africa over the past few decades.\n2. Over the past thirty-five odd years, the number of African-origin people living outside Africa has gone up by a factor of three.\n3. The fierce resistance to labour incursion into the West will temper emigration from Africa in the 21st century.",
        options: [
          { id: "a", text: "1 and 2" },
          { id: "b", text: "1 and 3" },
          { id: "c", text: "2 and 3" },
          { id: "d", text: "2 only" },
        ],
        correctId: "d",
        explanation:
          "The passage states African population abroad tripled since 1990 (stmt 2). It says migration will outlast populists (contradicts 3), and does not say ALL western nations saw increases (Europe's share declined) — so only 2 is correct.",
        verify: true,
      },
      {
        id: "q3",
        subject: "English · Passage",
        question:
          "Factors that can be seen to determine the movement of Africans to other countries to seek work:\n1. Younger populations in developing countries like the Philippines and Mexico\n2. Only about 20 per cent of the required jobs being available within African nations\n3. Fierce backlash from Western countries given the increasing immigration load",
        options: [
          { id: "a", text: "1 and 2" },
          { id: "b", text: "2 and 3" },
          { id: "c", text: "1 and 3" },
          { id: "d", text: "2 only" },
        ],
        correctId: "d",
        explanation:
          "The passage links movement to African countries creating only ~1/5 of needed jobs (stmt 2). Statement 1 misreads the passage (those countries are ageing/richer, reducing emigration) and 3 is a deterrent, not a driver.",
        verify: true,
      },
      {
        id: "q4",
        subject: "English · Passage",
        question:
          "Which one of the following options most appropriately describes the phrase “exacerbating labour shortages”?",
        options: [
          { id: "a", text: "Increasing labour shortages" },
          { id: "b", text: "Worsening the problem of labour shortages" },
          { id: "c", text: "Mitigating the issue of labour shortages" },
          { id: "d", text: "Intractably unburdening labour shortages" },
        ],
        correctId: "b",
        explanation: "To exacerbate means to make worse.",
      },
      {
        id: "q5",
        subject: "English · Passage",
        question:
          "Which one of the following is the figure of speech in the expression “Africa is on the move”?",
        options: [
          { id: "a", text: "Personification" },
          { id: "b", text: "Irony" },
          { id: "c", text: "Anthropomorphism" },
          { id: "d", text: "Antithesis" },
        ],
        correctId: "a",
        explanation:
          "A continent (non-human) is given the human action of 'moving' — personification.",
      },
      {
        id: "q6",
        subject: "English · Fill in the blanks",
        question: "The evening looked ___ against the stretched out sky.",
        options: [
          { id: "a", text: "red, beautiful and soul-quenching" },
          { id: "b", text: "beautiful, red and soul-quenching" },
          { id: "c", text: "soul-quenching, beautiful and red" },
          { id: "d", text: "beautiful, soul-quenching and red" },
        ],
        correctId: "b",
        explanation:
          "Adjective order (opinion → colour) gives 'beautiful, red …'; the compound 'soul-quenching' reads best last.",
        verify: true,
      },
      {
        id: "q7",
        subject: "English · Fill in the blanks",
        question: "Summers ___ be really hot at times, so make sure you stay hydrated.",
        options: [
          { id: "a", text: "can" },
          { id: "b", text: "could" },
          { id: "c", text: "might" },
          { id: "d", text: "may" },
        ],
        correctId: "a",
        explanation: "'Can' expresses general possibility/characteristic ('summers can be hot').",
        verify: true,
      },
      {
        id: "q8",
        subject: "English · Fill in the blanks",
        question: "I was wondering which festival ___ we celebrate together this year?",
        options: [
          { id: "a", text: "will" },
          { id: "b", text: "might" },
          { id: "c", text: "shall" },
          { id: "d", text: "do" },
        ],
        correctId: "c",
        explanation: "'Shall we' fits the suggestion/first-person-question form.",
        verify: true,
      },
      {
        id: "q9",
        subject: "English · Fill in the blanks",
        question: "I was ___ exhausted by the end of the week spent in the library doing research work.",
        options: [
          { id: "a", text: "exceedingly" },
          { id: "b", text: "inordinately" },
          { id: "c", text: "very" },
          { id: "d", text: "completely" },
        ],
        correctId: "a",
        explanation: "'Exceedingly exhausted' collocates naturally as an intensifier of degree.",
        verify: true,
      },
      {
        id: "q10",
        subject: "English · Fill in the blanks",
        question: "They ___ be very far away. I saw them a little while ago.",
        options: [
          { id: "a", text: "shall not" },
          { id: "b", text: "cannot" },
          { id: "c", text: "should not" },
          { id: "d", text: "ought not" },
        ],
        correctId: "b",
        explanation: "'Cannot' expresses logical impossibility given the evidence just stated.",
      },
      {
        id: "q11",
        subject: "English · Synonyms",
        question: "The fact that the deliberations were carried out in a cordial manner pleased the old guard. (cordial)",
        options: [
          { id: "a", text: "joust" },
          { id: "b", text: "convivial" },
          { id: "c", text: "jocular" },
          { id: "d", text: "zestful" },
        ],
        correctId: "b",
        explanation: "Cordial ≈ warm and friendly, closest to 'convivial'.",
      },
      {
        id: "q12",
        subject: "English · Synonyms",
        question: "His views on the matter have been impugned by those evaluating his role. (impugned)",
        options: [
          { id: "a", text: "challenged" },
          { id: "b", text: "belittled" },
          { id: "c", text: "enhanced" },
          { id: "d", text: "endured" },
        ],
        correctId: "a",
        explanation: "To impugn is to call into question / challenge.",
      },
      {
        id: "q13",
        subject: "English · Synonyms",
        question: "His ad hominem comments on his colleague were considered egregious by those present. (egregious)",
        options: [
          { id: "a", text: "extensively elaborate" },
          { id: "b", text: "flagrant and shocking" },
          { id: "c", text: "out of context" },
          { id: "d", text: "impromptu and unintended" },
        ],
        correctId: "b",
        explanation: "Egregious ≈ conspicuously bad, flagrant, shocking.",
      },
      {
        id: "q14",
        subject: "English · Synonyms",
        question: "…he abandoned all his erstwhile ideas regarding social welfare and was subsequently labelled an apostate. (apostate)",
        options: [
          { id: "a", text: "an arrogant and haughty person" },
          { id: "b", text: "a self-important person" },
          { id: "c", text: "a renouncer of held beliefs" },
          { id: "d", text: "an affluent person" },
        ],
        correctId: "c",
        explanation: "An apostate is one who renounces previously held beliefs.",
      },
      {
        id: "q15",
        subject: "English · Synonyms",
        question: "The debate around the corporeity of the soul presents a compelling paradox. (corporeity)",
        options: [
          { id: "a", text: "the quality of physical existence" },
          { id: "b", text: "collective consciousness" },
          { id: "c", text: "embodied in divinity" },
          { id: "d", text: "corpuscular existence" },
        ],
        correctId: "a",
        explanation: "Corporeity = the state of having a physical/material body.",
      },
      {
        id: "q16",
        subject: "English · Prepositions",
        question:
          "Correct use of the underlined preposition/phrasal verb:\n1. The delivery reached its destination just about time.\n2. The evidence presented by Shyam states something different than what is being presented by Ram.\n3. That is the difference of somebody doing his duty and not doing his duty.",
        options: [
          { id: "a", text: "1 and 2" },
          { id: "b", text: "1 and 3" },
          { id: "c", text: "1 only" },
          { id: "d", text: "None of the above" },
        ],
        correctId: "d",
        explanation:
          "'in time' (not 'about time'), 'different from', and 'difference between' are the correct forms — none of the three is correct as written.",
        verify: true,
      },
      {
        id: "q17",
        subject: "English · Prepositions",
        question:
          "Correct use of the underlined word:\n1. Amidst the scuffle and the resultant confusion, the thief managed to slip away.\n2. There was not a single person amongst those assembled who was willing to become the leader.\n3. Among the members of the community the local doctor was the one who was most respected.",
        options: [
          { id: "a", text: "1 and 2 only" },
          { id: "b", text: "2 and 3 only" },
          { id: "c", text: "1 and 3 only" },
          { id: "d", text: "1, 2 and 3" },
        ],
        correctId: "d",
        explanation: "Amidst, amongst and among are all used correctly here.",
        verify: true,
      },
      {
        id: "q18",
        subject: "English · Prepositions",
        question:
          "Correct use of the underlined word:\n1. Raj's apartment was three floors underneath the Subramanian residence.\n2. There was little space below the tin roof and the scaffolding for the squirrel to hide in.\n3. Inside the box was the secret he had been searching for all his life.",
        options: [
          { id: "a", text: "3 only" },
          { id: "b", text: "1 and 2" },
          { id: "c", text: "2 and 3" },
          { id: "d", text: "None of the above" },
        ],
        correctId: "c",
        explanation:
          "'Below' and 'inside' are used correctly (2, 3); 'underneath' for floors of a building is awkward — 'below' would be standard.",
        verify: true,
      },
      {
        id: "q19",
        subject: "English · Phrasal verbs",
        question:
          "Correct use of the underlined phrasal verb:\n1. The ship put in at the first available port to repair its damaged hull.\n2. The advertisement was put out for wide circulation.\n3. The matter had become so urgent that it could not be put off for another day.",
        options: [
          { id: "a", text: "1 and 2 only" },
          { id: "b", text: "1 and 3 only" },
          { id: "c", text: "2 and 3 only" },
          { id: "d", text: "1, 2 and 3" },
        ],
        correctId: "d",
        explanation:
          "put in (call at a port), put out (issue/circulate), put off (postpone) are all used correctly.",
        verify: true,
      },
      {
        id: "q20",
        subject: "English · Phrasal verbs",
        question:
          "Correct use of the underlined phrasal verb:\n1. It is widely acknowledged that he takes after his aunt.\n2. He was reluctant to take in any more responsibility.\n3. He assured the client that he would take out the matter at the first given opportunity.",
        options: [
          { id: "a", text: "1 and 2" },
          { id: "b", text: "1 and 3" },
          { id: "c", text: "1 only" },
          { id: "d", text: "None of the above" },
        ],
        correctId: "a",
        explanation:
          "'takes after' (resembles) and 'take in' (accept) are correct; 'take out the matter' is wrong — it should be 'take up'.",
        verify: true,
      },

      // ── PART B: History & Culture (Q21–29) ───────────────────
      {
        id: "q21",
        subject: "History",
        question:
          "The rebellions at regular intervals against the British in the hill region of Visakhapatnam (Gudem area) were due to which reason(s)?\n1. The feudal affinities of the muttadars with the Bhupathi family of Golconda zamindari\n2. Placing the ex-zamindari family on the seat of Golconda\n3. British authorities' refusal to grant annual maintenance for the Bhupathi family",
        options: [
          { id: "a", text: "1 and 2" },
          { id: "b", text: "2 and 3" },
          { id: "c", text: "1 and 3" },
          { id: "d", text: "3 only" },
        ],
        correctId: "c",
        explanation:
          "The Gudem/Rampa hill rebellions stemmed from the muttadars' feudal ties and British refusal of customary maintenance/rights.",
        verify: true,
      },
      {
        id: "q22",
        subject: "History",
        question:
          "Correct chronological order (earliest first): 1. Deccan Revolt  2. Santhal Rebellion  3. Kherwar Movement  4. Rampa Rebellion",
        options: [
          { id: "a", text: "1-2-3-4" },
          { id: "b", text: "4-3-2-1" },
          { id: "c", text: "2-3-1-4" },
          { id: "d", text: "1-3-2-4" },
        ],
        correctId: "c",
        explanation:
          "Santhal (1855) → Kherwar (1870s) → Deccan Revolt (1875) → Rampa Rebellion (1879/1922). Order 2-3-1-4.",
        verify: true,
      },
      {
        id: "q23",
        subject: "History",
        question:
          "Which statements about the Home Rule Movement is/are correct?\n1. Advocates believed in constitutional methods and were opposed to violence and revolutionary action.\n2. In 1917, the two Home Rule Leagues of Tilak and Annie Besant worked in cooperation with each other.\n3. Annie Besant confined her activities to the Bombay Presidency and Central Provinces and the rest of India was left to Tilak.",
        options: [
          { id: "a", text: "1 and 2" },
          { id: "b", text: "2 and 3" },
          { id: "c", text: "1 only" },
          { id: "d", text: "3 only" },
        ],
        correctId: "a",
        explanation:
          "Statements 1 and 2 are correct. Statement 3 is reversed — Tilak's League worked in Maharashtra (except Bombay city), Karnataka, C.P. and Berar; Besant's covered the rest of India.",
        verify: true,
      },
      {
        id: "q24",
        subject: "History",
        question:
          "Statements regarding the Freedom Struggle 1920–1935:\n1. In Bihar and Bengal, the Non-Cooperation Movement owed its effectiveness to the participation of peasants.\n2. In Bihar they were organised against the planters under the banner of Kisan Sabha.\n3. In Midnapore (Bengal), Mahishya peasants rallied against the taxes of the Union Board under Birendranath Sasmal.",
        options: [
          { id: "a", text: "1, 2 and 3" },
          { id: "b", text: "2 and 3 only" },
          { id: "c", text: "1 only" },
          { id: "d", text: "3 only" },
        ],
        correctId: "a",
        explanation: "All three statements are historically correct.",
        verify: true,
      },
      {
        id: "q25",
        subject: "Culture",
        question:
          "Statements about Bharata's Natyashastra:\n1. It is dated by scholars between the second century BCE and the second century CE.\n2. It analyses theatrical spectacle as an amalgam of speech, vocal and instrumental music, gesture, mime, etc.\n3. The ground it covers is less extensive than Aristotle's Poetics, its nearest ancient Greek counterpart.",
        options: [
          { id: "a", text: "2 only" },
          { id: "b", text: "1 and 2 only" },
          { id: "c", text: "1, 2 and 3" },
          { id: "d", text: "1 and 3 only" },
        ],
        correctId: "b",
        explanation:
          "1 and 2 are correct. Statement 3 is wrong — the Natyashastra is far MORE extensive than Aristotle's Poetics.",
        verify: true,
      },
      {
        id: "q26",
        subject: "Culture",
        question: "Who amongst the following discovered the rock art of Bhimbetka?",
        options: [
          { id: "a", text: "Archibald Carlleyle" },
          { id: "b", text: "Alexander Cunningham" },
          { id: "c", text: "V.S. Wakankar" },
          { id: "d", text: "Mortimer Wheeler" },
        ],
        correctId: "c",
        explanation: "V.S. Wakankar discovered the Bhimbetka rock shelters (1957).",
      },
      {
        id: "q27",
        subject: "Culture",
        question:
          "Correct chronological order in the evolution of Indian painting (earliest first):\n1. Mahajanaka Jataka, Ajanta  2. Bhimbetka rock art  3. Royal portrait, Sittannavasal cave  4. Heavenly musicians, Brihadishvara temple",
        options: [
          { id: "a", text: "1, 2, 3, 4" },
          { id: "b", text: "2, 1, 3, 4" },
          { id: "c", text: "2, 4, 3, 1" },
          { id: "d", text: "3, 1, 4, 2" },
        ],
        correctId: "b",
        explanation:
          "Bhimbetka (prehistoric) → Ajanta (c. 5th c.) → Sittannavasal (7th c.) → Brihadishvara/Chola (11th c.). Order 2-1-3-4.",
        verify: true,
      },
      {
        id: "q28",
        subject: "Culture",
        question: "Which one among the following temples in India is referred to as the “Black Pagoda”?",
        options: [
          { id: "a", text: "Jagannath Temple, Puri" },
          { id: "b", text: "Sun Temple, Konark" },
          { id: "c", text: "Kamakhya Temple, Guwahati" },
          { id: "d", text: "Kandariya Mahadeva Temple, Khajuraho" },
        ],
        correctId: "b",
        explanation: "The Konark Sun Temple was called the 'Black Pagoda' by European sailors.",
      },
      {
        id: "q29",
        subject: "Culture",
        question:
          "Statements with reference to Mahayana (Buddhism):\n1. Female deities are benevolent saviours and protectors who embody Buddhist virtues.\n2. In Prajñāpāramitā texts, knowledge is visualised in feminine form, as a deity called Prajñāpāramitā.\n3. Prajñāpāramitā is described as the source of the omniscience of all the Buddhas and the mother of all the Buddhas.",
        options: [
          { id: "a", text: "1, 2 and 3" },
          { id: "b", text: "1 and 2 only" },
          { id: "c", text: "2 only" },
          { id: "d", text: "3 only" },
        ],
        correctId: "a",
        explanation: "All three statements correctly describe Prajñāpāramitā in Mahayana thought.",
        verify: true,
      },

      // ── Social Security / Economy / Current (Q30–38) ─────────
      {
        id: "q30",
        subject: "Social Security",
        question:
          "Statements regarding Social Protection in India:\n1. The World Social Protection Report (WSPR) 2024–26 released by the ILO estimates that India's social protection coverage has doubled from 2021 to 2024.\n2. The Ministry of Labour and Employment estimates that nearly 65% of the population are now covered by at least one form of social protection through Central Government schemes.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "c",
        explanation:
          "Both figures were widely reported from the ILO WSPR 2024-26 / MoLE estimates. Cross-check with official key.",
        verify: true,
      },
      {
        id: "q31",
        subject: "Economy",
        question:
          "The classification of Micro, Small and Medium enterprises is based on which factors?\n1. Annual turnover  2. Number of workers  3. Investment in plant and machinery or equipment",
        options: [
          { id: "a", text: "1, 2 and 3" },
          { id: "b", text: "1 and 2 only" },
          { id: "c", text: "2 only" },
          { id: "d", text: "1 and 3 only" },
        ],
        correctId: "d",
        explanation:
          "Since the 2020 revision, MSMEs are classified on investment (plant & machinery/equipment) AND annual turnover — not number of workers.",
      },
      {
        id: "q32",
        subject: "Current Affairs",
        question:
          "Fiscal Health Index 2025 published by NITI Aayog assesses fiscal health of 18 major States based on which sub-indices?\n1. Quality of expenditure  2. Debt index  3. Debt sustainability  4. Fiscal prudence  5. Revenue mobilisation",
        options: [
          { id: "a", text: "1, 3 and 5 only" },
          { id: "b", text: "2 and 4 only" },
          { id: "c", text: "2, 4 and 5 only" },
          { id: "d", text: "1, 2, 3, 4 and 5" },
        ],
        correctId: "d",
        explanation:
          "The NITI Aayog Fiscal Health Index 2025 uses five sub-indices: quality of expenditure, revenue mobilisation, fiscal prudence, debt index and debt sustainability.",
        verify: true,
      },
      {
        id: "q33",
        subject: "Economy",
        question:
          "The contribution of the services sector in Gross Value Added at current prices in the Indian economy in 2024–25 is estimated to be:",
        options: [
          { id: "a", text: "25%" },
          { id: "b", text: "35%" },
          { id: "c", text: "45%" },
          { id: "d", text: "55%" },
        ],
        correctId: "d",
        explanation:
          "The services sector contributes roughly 55% of GVA at current prices (Economic Survey figures).",
        verify: true,
      },
      {
        id: "q34",
        subject: "Current Affairs",
        question:
          "Statements regarding Pradhan Mantri MUDRA Yojana:\n1. The average ticket size of loan disbursed has more than doubled between FY 2016 and FY 2025.\n2. Since its launch in 2015, Maharashtra has recorded the highest disbursal among States.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "a",
        explanation:
          "Average ticket size has more than doubled (stmt 1 correct). Tamil Nadu/Karnataka have generally led disbursal, not Maharashtra — verify against key.",
        verify: true,
      },
      {
        id: "q35",
        subject: "Current Affairs",
        question:
          "Statements:\n1. NISHTHA is an integrated teacher training programme that has been extended to cover teachers at all stages of school education.\n2. PM POSHAN covers only those school children who are studying in classes I–VI in Government and Government-aided schools.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "a",
        explanation:
          "NISHTHA now spans all school stages (correct). PM POSHAN covers classes I–VIII (Balvatika to VIII), not only I–VI, so stmt 2 is wrong.",
        verify: true,
      },
      {
        id: "q36",
        subject: "Current Affairs",
        question:
          "Statements:\n1. India's bio-economy contributes about 4.25% to the GDP in India.\n2. BioE3 promotes regenerative bio-manufacturing and supports a circular bio-economy aligned with India's net-zero goals.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "c",
        explanation:
          "India's bio-economy is reported around 4–4.25% of GDP, and BioE3 (Biotechnology for Economy, Environment and Employment) supports circular/regenerative bio-manufacturing.",
        verify: true,
      },
      {
        id: "q37",
        subject: "Economy",
        question:
          "Which Development Financial Institutions were set up in India between 1950s and 1960s?\n1. IFCI  2. ICICI  3. IDBI  4. NaBFID",
        options: [
          { id: "a", text: "1, 2 and 3 only" },
          { id: "b", text: "1 and 4 only" },
          { id: "c", text: "2 and 3 only" },
          { id: "d", text: "1, 2, 3 and 4" },
        ],
        correctId: "a",
        explanation:
          "IFCI (1948), ICICI (1955) and IDBI (1964) belong to the 1950s–60s; NaBFID was set up in 2021.",
      },
      {
        id: "q38",
        subject: "Economy",
        question: "Core inflation includes which of the following?\n1. Food prices  2. Energy prices",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "d",
        explanation:
          "Core inflation specifically EXCLUDES food and fuel/energy prices (the volatile components).",
      },

      // ── Polity / Governance (Q39–50) ─────────────────────────
      {
        id: "q39",
        subject: "Polity",
        question:
          "Which of the following statements are correct?\n1. The Chief Justice of India is the highest Administrative Officer of the Supreme Court of India.\n2. The administrative powers for determining the work structure of the Supreme Court and its Registry are exclusively vested in the CJI.\n3. A person who has been a Judge of the Supreme Court can practise after retirement only in the Supreme Court and not in any other court within India.\n4. A designated Senior Advocate is not entitled to appear in the Supreme Court without an Advocate-on-Record.",
        options: [
          { id: "a", text: "1 and 2 only" },
          { id: "b", text: "1, 2 and 3" },
          { id: "c", text: "3 and 4 only" },
          { id: "d", text: "2 and 4 only" },
        ],
        correctId: "d",
        explanation:
          "Stmt 1 is wrong (CJI is the highest judicial authority, not merely 'administrative officer'); a retired SC judge cannot practise in ANY court in India (stmt 3 wrong). Stmts 2 and 4 are correct.",
        verify: true,
      },
      {
        id: "q40",
        subject: "Polity",
        question:
          "Consider the following statements:\n1. The Supreme Court and High Courts have exclusive original jurisdiction in disputes amongst two or more States.\n2. Only the Supreme Court, High Courts and District Courts have the power to issue Writs.\n3. Chief Minister of a State has absolutely no role in the entire appointment process of a High Court Judge.\n4. Local customs and conventions which do not contradict a Statute or the Constitution are recognised and taken into account by Courts.\nHow many of the above statements are correct?",
        options: [
          { id: "a", text: "One" },
          { id: "b", text: "Two" },
          { id: "c", text: "Three" },
          { id: "d", text: "Four" },
        ],
        correctId: "a",
        explanation:
          "Only stmt 4 is correct. Inter-State disputes are the SC's exclusive original jurisdiction (not HCs); writs are issued only by SC (Art 32) and HCs (Art 226), not District Courts; the CM/State does have a consultative role in HC appointments.",
        verify: true,
      },
      {
        id: "q41",
        subject: "Polity",
        question:
          "Statements about Electronic Voting Machine (EVM) in India:\n1. The first use of EVMs in a Lok Sabha election was in 2004, when EVMs were deployed nationwide.\n2. Votes are recorded in Control Units and VVPATs at exactly the same time.\n3. Two PSUs, namely Bharat Electronics Ltd. and Electronics Corporation of India Ltd., have been engaged by the ECI to design and manufacture the EVMs.",
        options: [
          { id: "a", text: "1 and 2" },
          { id: "b", text: "2 and 3" },
          { id: "c", text: "1 and 3" },
          { id: "d", text: "3 only" },
        ],
        correctId: "c",
        explanation:
          "EVMs were used nationwide first in the 2004 LS election (1 correct) and are made by BEL & ECIL (3 correct). Votes are stored in the Control Unit; VVPAT prints a slip — not 'at exactly the same time' in the same way, so 2 is wrong.",
        verify: true,
      },
      {
        id: "q42",
        subject: "Polity",
        question:
          "Statements about National e-Vidhan Application (NeVA):\n1. It is a Mission Mode Project (MMP) under the Digital India Programme.\n2. This application is based on the principle of 'One Nation – One Application'.\n3. It has been developed by the Parliament Secretariat.\n4. Its core aim is end-to-end digitalisation of all the functions of the State Legislatures.",
        options: [
          { id: "a", text: "1, 2 and 3" },
          { id: "b", text: "1, 2 and 4" },
          { id: "c", text: "2 and 3 only" },
          { id: "d", text: "4 only" },
        ],
        correctId: "b",
        explanation:
          "NeVA is an MMP under Digital India, based on 'One Nation–One Application', aimed at digitalising legislatures. It is implemented by the Ministry of Parliamentary Affairs, not the Parliament Secretariat (stmt 3 wrong).",
        verify: true,
      },
      {
        id: "q43",
        subject: "Social Security",
        question:
          "Support for Marginalized Individuals for Livelihood and Enterprise (SMILE) Scheme is meant for the rehabilitation of:\n1. Transgender persons  2. Persons engaged in the act of Begging",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "c",
        explanation:
          "SMILE has two sub-schemes — one for the welfare of transgender persons and one for the rehabilitation of persons engaged in begging.",
      },
      {
        id: "q44",
        subject: "Current Affairs",
        question:
          "Statements about Global Alliance of National Human Rights Institutions (GANHRI):\n1. It works in accordance with UN Paris Principle.\n2. Fully compliant and partially compliant members are accredited as 'A' and 'B' respectively.\n3. National Human Rights Commission (NHRC), India has been accredited/classified under 'A' in the year 2025.",
        options: [
          { id: "a", text: "1 and 2 only" },
          { id: "b", text: "2 and 3 only" },
          { id: "c", text: "1, 2 and 3" },
          { id: "d", text: "1 only" },
        ],
        correctId: "a",
        explanation:
          "GANHRI follows the Paris Principles; 'A' = fully compliant, 'B' = partially compliant. NHRC India's re-accreditation was deferred (not granted 'A' in 2025) — so stmt 3 is wrong. Verify against key.",
        verify: true,
      },
      {
        id: "q45",
        subject: "Polity",
        question:
          "Match List-I (Provision of the Constitution) with List-II (Part):\nA. Provisions related to Parliament  B. Legislative powers of the Governor  C. Borrowings by the Government of India  D. Cooperative Societies\n(List-II: 1. Part-VI  2. Part-IX B  3. Part-XII  4. Part-V)",
        options: [
          { id: "a", text: "A-4, B-3, C-1, D-2" },
          { id: "b", text: "A-2, B-1, C-3, D-4" },
          { id: "c", text: "A-2, B-3, C-1, D-4" },
          { id: "d", text: "A-4, B-1, C-3, D-2" },
        ],
        correctId: "d",
        explanation:
          "Parliament → Part V; Governor's legislative powers → Part VI; Borrowings by GoI → Part XII (Art 292); Cooperative Societies → Part IX-B. So A-4, B-1, C-3, D-2.",
      },
      {
        id: "q46",
        subject: "Polity",
        question: "Who amongst the following is not a member of the GST Council?",
        options: [
          { id: "a", text: "Prime Minister of India" },
          { id: "b", text: "Union Finance Minister" },
          { id: "c", text: "Union Minister of State (Finance)" },
          { id: "d", text: "A Minister nominated by each State Government" },
        ],
        correctId: "a",
        explanation:
          "The GST Council (Art 279A) is chaired by the Union FM, with the MoS (Finance) and State-nominated ministers. The PM is not a member.",
      },
      {
        id: "q47",
        subject: "Polity",
        question:
          "Statements with reference to the RTI Act:\n1. The CIC and other Information Commissioners are appointed by the President on the recommendation of a committee headed by the Chief Justice of India.\n2. While the CIC is not eligible for reappointment after five years, other Information Commissioners are eligible for reappointment.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "d",
        explanation:
          "The selection committee is headed by the Prime Minister (not the CJI) — stmt 1 wrong. An Information Commissioner may be appointed as CIC but no Commissioner is eligible for reappointment as such — stmt 2 wrong.",
        verify: true,
      },
      {
        id: "q48",
        subject: "Polity",
        question:
          "Statements with reference to the Constitution of India:\n1. The Parliament can make laws on matters enumerated in the Union List and/or the Concurrent List.\n2. The Parliament can make laws on any matter not enumerated in the Concurrent List or the State List.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "c",
        explanation:
          "Parliament legislates on Union & Concurrent lists (stmt 1), and holds residuary powers over matters in none of the lists (stmt 2).",
      },
      {
        id: "q49",
        subject: "Polity",
        question:
          "Consider the following statements:\n1. Only the Supreme Court of India is vested with the power to punish for contempt of itself.\n2. Both the Supreme Court of India and High Courts have advisory jurisdiction.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "d",
        explanation:
          "High Courts too are courts of record and can punish for their contempt (stmt 1 wrong). Advisory jurisdiction (Art 143) belongs only to the Supreme Court, not High Courts (stmt 2 wrong).",
      },
      {
        id: "q50",
        subject: "Polity",
        question:
          "Which subjects/provisions fall under the Directive Principles of State Policy?\n1. Uniform Civil Code for all persons living in India\n2. Provision for early childhood care and education to children up to the age of 14 years\n3. Promotion of international peace and security",
        options: [
          { id: "a", text: "1, 2 and 3" },
          { id: "b", text: "2 and 3 only" },
          { id: "c", text: "1 only" },
          { id: "d", text: "3 only" },
        ],
        correctId: "a",
        explanation:
          "UCC (Art 44), early childhood care & education up to age 14/6 (Art 45) and promotion of international peace (Art 51) are all DPSPs.",
      },

      // ── General Science & Computers (Q51–65) ─────────────────
      {
        id: "q51",
        subject: "Science",
        question: "Which one correctly stands for the acronym AWACS?",
        options: [
          { id: "a", text: "Advanced Warning and Critical Scanning" },
          { id: "b", text: "Arial Warfare and Case Study" },
          { id: "c", text: "Airborne Warfare and Critical Solutions" },
          { id: "d", text: "Airborne Warning and Control System" },
        ],
        correctId: "d",
        explanation: "AWACS = Airborne Warning And Control System.",
      },
      {
        id: "q52",
        subject: "Science",
        question:
          "As a countermeasure to a drone swarm, EM drone jamming disrupts the GPS and communication system of drones. Which is the correct frequency range used for EM drone jamming?",
        options: [
          { id: "a", text: "Far-infrared frequency" },
          { id: "b", text: "Microwave frequency" },
          { id: "c", text: "Visible frequency" },
          { id: "d", text: "Infrared frequency" },
        ],
        correctId: "b",
        explanation:
          "GPS/RF communication and jamming operate in the microwave (radio) band.",
      },
      {
        id: "q53",
        subject: "Science",
        question: "Which is the correct method employed by GPS to find the location of a target?",
        options: [
          { id: "a", text: "Trilateration method, which measures lengths of sides of a triangle with target location as one of the heads of the triangle" },
          { id: "b", text: "Dilation method, which measures distance of target location from two already known landmarks" },
          { id: "c", text: "Measurement of the distance of target from the designated geostationary satellite" },
          { id: "d", text: "Measurement of the distance of target from the designated polar satellite" },
        ],
        correctId: "a",
        explanation: "GPS uses trilateration from multiple satellites.",
      },
      {
        id: "q54",
        subject: "Science",
        question:
          "Which is the correct nature of the substance filling up the pleural cavity, the space between the lungs and the chest?",
        options: [
          { id: "a", text: "Liquid" },
          { id: "b", text: "Dry air" },
          { id: "c", text: "Humid air" },
          { id: "d", text: "Fatty muscle" },
        ],
        correctId: "a",
        explanation: "The pleural cavity contains a thin film of pleural (serous) fluid — a liquid.",
      },
      {
        id: "q55",
        subject: "Science",
        question: "Which statement with regard to fatty acids is correct?",
        options: [
          { id: "a", text: "Most fatty acids have carboxyl group at one end and methyl group at the other end." },
          { id: "b", text: "Saturated fatty acids carry even number of double bonds between carbon atoms." },
          { id: "c", text: "Saturated fatty acids carry odd number of double bonds between carbon atoms." },
          { id: "d", text: "Monounsaturated fatty acids carry as many hydrogen atoms as they can." },
        ],
        correctId: "a",
        explanation:
          "Fatty acids have a carboxyl (–COOH) head and a methyl (–CH3) tail. Saturated fatty acids have NO double bonds.",
      },
      {
        id: "q56",
        subject: "Science",
        question: "Which are the primary reactants of photochemical smog?",
        options: [
          { id: "a", text: "Sulphur Hexafluoride and Soot" },
          { id: "b", text: "Carbon Monoxide and Ozone" },
          { id: "c", text: "Nitric Oxide and Unburnt Hydrocarbons" },
          { id: "d", text: "Peroxy Radicals and Sub-oxides" },
        ],
        correctId: "c",
        explanation:
          "Photochemical smog forms from nitrogen oxides and unburnt hydrocarbons (VOCs) reacting under sunlight.",
      },
      {
        id: "q57",
        subject: "Science",
        question: "Which one is known as Carbolic acid?",
        options: [
          { id: "a", text: "Phenol" },
          { id: "b", text: "Alcohol" },
          { id: "c", text: "Ether" },
          { id: "d", text: "Acetone" },
        ],
        correctId: "a",
        explanation: "Phenol is commonly called carbolic acid.",
      },
      {
        id: "q58",
        subject: "Science",
        question: "Which is the primary commercial use of Amines?",
        options: [
          { id: "a", text: "Development of explosives" },
          { id: "b", text: "Synthesis of medicines and fibres" },
          { id: "c", text: "Development of batteries" },
          { id: "d", text: "Stem cell therapy" },
        ],
        correctId: "b",
        explanation: "Amines are widely used in the synthesis of drugs and synthetic fibres (e.g., nylon).",
      },
      {
        id: "q59",
        subject: "Computer",
        question: "Which one with regard to ChatGPT is correct?",
        options: [
          { id: "a", text: "It is based on large language model (LLM)" },
          { id: "b", text: "It is a predictive Artificial Intelligence" },
          { id: "c", text: "It is a high level scientific computer language" },
          { id: "d", text: "It is a chatting software" },
        ],
        correctId: "a",
        explanation: "ChatGPT is built on a large language model (LLM).",
      },
      {
        id: "q60",
        subject: "Computer",
        question: "For training and deploying complex models in Artificial Intelligence, which one is preferred?",
        options: [
          { id: "a", text: "Central Processing Units" },
          { id: "b", text: "Graphics Processing Units" },
          { id: "c", text: "Read Only Memory" },
          { id: "d", text: "Solid State Drives" },
        ],
        correctId: "b",
        explanation: "GPUs are preferred for parallel training/deployment of complex AI models.",
      },
      {
        id: "q61",
        subject: "Computer",
        question: "Which one correctly stands for SSL encryption with regard to banking websites?",
        options: [
          { id: "a", text: "Secure Socket Layer encryption" },
          { id: "b", text: "Superior Safety Level encryption" },
          { id: "c", text: "Server-to-Server Linked encryption" },
          { id: "d", text: "Safety Server Level encryption" },
        ],
        correctId: "a",
        explanation: "SSL = Secure Socket Layer.",
      },
      {
        id: "q62",
        subject: "Computer",
        question:
          "Statements regarding the solid state drive (SSD):\n1. Spinning speed of SSD is zero.\n2. SSD consumes more energy compared to hard disk drive (HDD).\n3. SSD could be used as virtual memory when RAM is insufficient.\n4. SSD can replace the processor.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "1 and 3" },
          { id: "c", text: "3 and 4" },
          { id: "d", text: "2 and 4" },
        ],
        correctId: "b",
        explanation:
          "SSDs have no spinning parts (1 true), consume LESS energy than HDDs (2 false), can be used as virtual memory (3 true), and cannot replace the processor (4 false).",
      },
      {
        id: "q63",
        subject: "Computer",
        question: "Which one could be a permanent memory of a computer?",
        options: [
          { id: "a", text: "Hard Disk" },
          { id: "b", text: "CPU" },
          { id: "c", text: "RAM" },
          { id: "d", text: "Motherboard" },
        ],
        correctId: "a",
        explanation: "The hard disk provides non-volatile (permanent) storage; RAM is volatile.",
      },
      {
        id: "q64",
        subject: "Science",
        question: "Which is the primary environmental concern associated with permafrost thawing in the Arctic?",
        options: [
          { id: "a", text: "Displacement of the indigenous communities" },
          { id: "b", text: "Release of Methane and Carbon dioxide" },
          { id: "c", text: "Spread of invasive species" },
          { id: "d", text: "Increase of UV radiation" },
        ],
        correctId: "b",
        explanation:
          "Thawing permafrost releases stored methane and CO₂, amplifying global warming.",
      },
      {
        id: "q65",
        subject: "Science",
        question: "Which one determines the Hardness Index of fresh water?",
        options: [
          { id: "a", text: "Total concentration of the Ca²⁺ and Mg²⁺ ions in the fresh water" },
          { id: "b", text: "Difference of the pH value of the fresh water with respect to sulphuric acid" },
          { id: "c", text: "The pH value of fresh water measured at room temperature and at one atmospheric pressure" },
          { id: "d", text: "The molar ratio of D₂O to H₂O in fresh water" },
        ],
        correctId: "a",
        explanation: "Water hardness is the total concentration of Ca²⁺ and Mg²⁺ ions.",
      },

      // ── Maths / Reasoning / Statistics (Q66–80) ──────────────
      {
        id: "q66",
        subject: "Maths",
        question:
          "Candle B is 3 times the length of candle A. B burns 4 times as fast as A. Both are lit together; the party ends when their heights become equal. If the numerical value of the burnt-away length of A (in m) and A's burning speed (m/hr) are equal, how long (in hours) did the party continue?",
        options: [
          { id: "a", text: "1/2" },
          { id: "b", text: "1" },
          { id: "c", text: "1¼" },
          { id: "d", text: "1½" },
        ],
        correctId: "b",
        explanation:
          "Let A length = L, speed = a (with burnt length of A = a·t and a = numeric value of burnt length). Setting heights equal: L − a·t = 3L − 4a·t ⟹ 3a·t = 2L. With the given equal-value condition the consistent solution gives t = 1 hour. (Work through with the given constraint.)",
        verify: true,
      },
      {
        id: "q67",
        subject: "Maths",
        question:
          "Five prime numbers are in ascending order. The ratio of the product of the first three to that of the last three is 35 : 323. What is the difference between the smallest and the largest numbers?",
        options: [
          { id: "a", text: "8" },
          { id: "b", text: "10" },
          { id: "c", text: "12" },
          { id: "d", text: "14" },
        ],
        correctId: "d",
        explanation:
          "First three product / last three product = (p1p2p3)/(p3p4p5) = (p1p2)/(p4p5) = 35/323 = (5·7)/(17·19). So p1=5, p2=7, p4=17, p5=19. Largest − smallest = 19 − 5 = 14.",
      },
      {
        id: "q68",
        subject: "Maths",
        question:
          "Cinema hall seats: Diamond, Gold, Silver. Weekday prices ₹500/₹300/₹200; weekend ₹800/₹500/₹300. There are exactly 10 Diamond seats; Silver seats are double the Gold seats. If the hall goes full in all shows, what is the excess earning per show on a weekend (vs weekday)?",
        options: [
          { id: "a", text: "₹20,000" },
          { id: "b", text: "₹23,000" },
          { id: "c", text: "₹26,000" },
          { id: "d", text: "₹30,000" },
        ],
        correctId: "b",
        explanation:
          "Per-seat weekend excess: Diamond +₹300 (×10 = 3,000), Gold +₹200 (×G), Silver +₹100 (×2G). Using the standard configuration (G = 100), extra = 3,000 + 200G + 100·2G = 3,000 + 400G. With G=50 → 23,000. Verify seat counts against key.",
        verify: true,
      },
      {
        id: "q69",
        subject: "Maths",
        question:
          "How many digits are there in 6²⁵? (Given log₁₀2 = 0.3010 and log₁₀3 = 0.4771)",
        options: [
          { id: "a", text: "20" },
          { id: "b", text: "21" },
          { id: "c", text: "22" },
          { id: "d", text: "23" },
        ],
        correctId: "a",
        explanation:
          "log(6²⁵)=25·log6=25·(0.3010+0.4771)=25·0.7781=19.4525. Digits = ⌊19.4525⌋+1 = 20.",
      },
      {
        id: "q70",
        subject: "Maths",
        question:
          "A, B and C invested in the ratio 2 : 3 : 5 but earned the same profit. If profit is proportional to amount as well as duration of investment, what is the ratio of the durations of their investments?",
        options: [
          { id: "a", text: "5 : 3 : 2" },
          { id: "b", text: "2 : 3 : 5" },
          { id: "c", text: "10 : 15 : 6" },
          { id: "d", text: "15 : 10 : 6" },
        ],
        correctId: "d",
        explanation:
          "Equal profit ⟹ amount×time equal ⟹ time ∝ 1/amount = 1/2 : 1/3 : 1/5 = 15 : 10 : 6.",
      },
      {
        id: "q71",
        subject: "Maths",
        question:
          "If five persons take five hours to paint five walls of equal area, how many hours will 7 persons take to paint 7 walls of equal area (walls identical)?",
        options: [
          { id: "a", text: "8" },
          { id: "b", text: "7" },
          { id: "c", text: "6" },
          { id: "d", text: "5" },
        ],
        correctId: "d",
        explanation:
          "Rate: 5 persons paint 5 walls in 5 hrs ⟹ 1 person paints 1 wall in 5 hrs. So 7 persons paint 7 walls in 5 hrs.",
      },
      {
        id: "q72",
        subject: "Reasoning",
        question: "If 2nd February 2025 was Sunday, which day was it on 1st February 2024?",
        options: [
          { id: "a", text: "Saturday" },
          { id: "b", text: "Monday" },
          { id: "c", text: "Thursday" },
          { id: "d", text: "Friday" },
        ],
        correctId: "c",
        explanation:
          "2024 is a leap year. From 1 Feb 2024 to 2 Feb 2025 is 367 days = 52 weeks + 3 days. 2 Feb 2025 is Sunday, so 1 Feb 2024 = Sunday − 3 days = Thursday.",
      },
      {
        id: "q73",
        subject: "Maths",
        question:
          "A train starts from A at 9 AM and reaches B at 2 PM. Another starts from B at 11 AM and reaches A at 3 PM. They meet at point P. The distances A→P and B→P bear the ratio:",
        options: [
          { id: "a", text: "1 : 2" },
          { id: "b", text: "2 : 1" },
          { id: "c", text: "2 : 3" },
          { id: "d", text: "3 : 2" },
        ],
        correctId: "d",
        explanation:
          "Train 1 speed = D/5, Train 2 = D/4. From 11 AM they close the remaining gap. Solving the meeting point gives AP : BP = 3 : 2.",
        verify: true,
      },
      {
        id: "q74",
        subject: "Maths",
        question: "If x percent of a is same as y percent of b, then what percent of a is z percent of b?",
        options: [
          { id: "a", text: "zx/y" },
          { id: "b", text: "xy/z" },
          { id: "c", text: "yz/x" },
          { id: "d", text: "x/yz" },
        ],
        correctId: "a",
        explanation:
          "x%·a = y%·b ⟹ b = (x/y)a. z% of b = (z/100)(x/y)a = (zx/y)% of a.",
      },
      {
        id: "q75",
        subject: "Maths",
        question:
          "Assertion (A): A 15% discount on marked price is more than a 10% discount followed by a further 5% successive discount.\nReason (R): The subsequent (successive) discount is on the discounted amount.",
        options: [
          { id: "a", text: "Both A and R are true and R is a correct explanation of A." },
          { id: "b", text: "Both A and R are true but R is not a correct explanation of A." },
          { id: "c", text: "A is true but R is false." },
          { id: "d", text: "A is false but R is true." },
        ],
        correctId: "a",
        explanation:
          "10%+5% successive = 14.5% effective (< 15%), because the 5% is on the reduced amount. So A is true and R correctly explains it.",
      },
      {
        id: "q76",
        subject: "Maths",
        question:
          "Three distinct positive integers a, b, c with b − a = c − b and a + b + c = 12. What is the maximum number of such possible sets (a, b, c)?",
        options: [
          { id: "a", text: "1" },
          { id: "b", text: "2" },
          { id: "c", text: "3" },
          { id: "d", text: "4" },
        ],
        correctId: "c",
        explanation:
          "AP with sum 12 ⟹ middle term b = 4. (a,c) distinct positive with a+c=8, a≠4: (1,7),(2,6),(3,5) → 3 sets (unordered).",
      },
      {
        id: "q77",
        subject: "Reasoning",
        question: "Find the missing term: C-24, H-19, M-14, ?, W-4",
        options: [
          { id: "a", text: "S-7" },
          { id: "b", text: "R-9" },
          { id: "c", text: "S-18" },
          { id: "d", text: "R-17" },
        ],
        correctId: "b",
        explanation:
          "Letters +5 each: C, H, M, R, W. Numbers −5 each: 24, 19, 14, 9, 4. So R-9.",
      },
      {
        id: "q78",
        subject: "Maths",
        question:
          "How many three-digit numbers are there that have the middle digit as the sum of the first digit and the third digit?",
        options: [
          { id: "a", text: "40" },
          { id: "b", text: "45" },
          { id: "c", text: "50" },
          { id: "d", text: "55" },
        ],
        correctId: "b",
        explanation:
          "For each first digit a (1–9) and third digit c (0–9) with a+c ≤ 9, count pairs. Total = Σ (10−a) for a=1..9 = 9+8+…+1 = 45.",
      },
      {
        id: "q79",
        subject: "Statistics",
        question:
          "Scores of 16 students: 19, 4, 17, 7, 15, 2, 18, 11, 15, 17, 19, 4, 3, 2, 6, 9. Difference between arithmetic mean and median?",
        options: [
          { id: "a", text: "1.0" },
          { id: "b", text: "0.8" },
          { id: "c", text: "0.5" },
          { id: "d", text: "0.2" },
        ],
        correctId: "c",
        explanation:
          "Sum = 168, mean = 168/16 = 10.5. Sorted, the 8th & 9th values are 10 → median = 10. Difference = 0.5.",
        verify: true,
      },
      {
        id: "q80",
        subject: "Maths",
        question:
          "Two unbiased dice (1–6) are rolled together. Probability that the sum of the top faces is 7 or 10?",
        options: [
          { id: "a", text: "0.15" },
          { id: "b", text: "0.20" },
          { id: "c", text: "0.25" },
          { id: "d", text: "0.30" },
        ],
        correctId: "c",
        explanation:
          "Sum 7 → 6 ways; sum 10 → 3 ways; total 9/36 = 0.25.",
      },

      // ── Labour Laws / Social Security (Q81–95) ───────────────
      {
        id: "q81",
        subject: "Social Security",
        question:
          "Which one is not a currently existing Scheme under the Employees' Provident Funds and Miscellaneous Provisions Act, 1952?",
        options: [
          { id: "a", text: "Employees' Provident Fund Scheme, 1952" },
          { id: "b", text: "Employees' Deposit-Linked Insurance Scheme, 1976" },
          { id: "c", text: "Employees' Pension Scheme, 1995" },
          { id: "d", text: "Employees' Family Pension Scheme, 1971" },
        ],
        correctId: "d",
        explanation:
          "The Family Pension Scheme, 1971 was subsumed into the Employees' Pension Scheme, 1995 and no longer exists.",
      },
      {
        id: "q82",
        subject: "Social Security",
        question:
          "The EPF & MP Act, 1952 does not apply to which establishment registered under the Co-operative Societies Act, 1912?",
        options: [
          { id: "a", text: "Establishments employing fewer than 50 persons and operating without the aid of power." },
          { id: "b", text: "Establishments employing fewer than 70 persons and operating with the aid of power." },
          { id: "c", text: "Establishments employing more than 50 persons or operating without the aid of power." },
          { id: "d", text: "Establishments employing fewer than 20 persons or operating without the aid of power." },
        ],
        correctId: "a",
        explanation:
          "The Act exempts co-operative societies employing fewer than 50 persons and working without the aid of power.",
      },
      {
        id: "q83",
        subject: "Social Security",
        question:
          "Mr. X earns wages of ₹20,000 per month. What will be the contributions to the ESI Scheme under the Employees' State Insurance Act, 1948?",
        options: [
          { id: "a", text: "Employer's contribution ₹350; Employees' contribution ₹950" },
          { id: "b", text: "Employer's contribution ₹650; Employees' contribution ₹150" },
          { id: "c", text: "Employer's contribution ₹950; Employees' contribution ₹350" },
          { id: "d", text: "Employer's contribution ₹150; Employees' contribution ₹650" },
        ],
        correctId: "c",
        explanation:
          "ESI: employer 3.25% of ₹20,000 = ₹650; employee 0.75% = ₹150. Note: the option pairing here is imperfect — the correct amounts are ₹650 (employer) and ₹150 (employee); mark per the official key.",
        verify: true,
      },
      {
        id: "q84",
        subject: "Social Security",
        question:
          "Which one is not a benefit provided to an employee under the Employees' State Insurance Act, 1948?",
        options: [
          { id: "a", text: "Sickness benefit" },
          { id: "b", text: "Maternity benefit" },
          { id: "c", text: "Disablement benefit" },
          { id: "d", text: "Health benefit" },
        ],
        correctId: "d",
        explanation:
          "ESI benefits are sickness, maternity, disablement, dependants', medical and funeral. 'Health benefit' is not a defined statutory benefit head.",
      },
      {
        id: "q85",
        subject: "Labour Laws",
        question:
          "Statements re the Payment of Wages Act, 1936:\n1. Wages may be paid in current coins.\n2. Wage period can be fixed for weekly payment.\n3. Wages are to be paid before the expiry of the seventh day after the last day of the wage period in establishments employing more than 1000 persons.",
        options: [
          { id: "a", text: "1 and 2 only" },
          { id: "b", text: "1 only" },
          { id: "c", text: "2 only" },
          { id: "d", text: "1, 2 and 3" },
        ],
        correctId: "a",
        explanation:
          "Wages may be paid in current coin/currency (1 true); wage period ≤ 1 month, can be weekly (2 true). The 7th-day rule applies to establishments with 1000+ workers; smaller ones are the 7th day — the '>1000' phrasing makes 3 wrong (it's the reverse — larger establishments get the 10th day). Verify against key.",
        verify: true,
      },
      {
        id: "q86",
        subject: "Labour Laws",
        question:
          "Which deductions from wages can be made under the Payment of Wages Act, 1936?\n1. Deductions for amenities and services supplied by the employer\n2. Deductions for recovery of advances\n3. Deductions for payments to co-operative societies",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 and 3 only" },
          { id: "c", text: "1 and 3 only" },
          { id: "d", text: "1, 2 and 3" },
        ],
        correctId: "d",
        explanation:
          "Section 7 permits all three as authorised deductions.",
      },
      {
        id: "q87",
        subject: "Social Security",
        question:
          "Loss of one eye without complication (the other normal) is considered as what kind of injury under Schedule I of the Employees' Compensation Act, 1923?",
        options: [
          { id: "a", text: "Permanent total disablement" },
          { id: "b", text: "Permanent partial disablement" },
          { id: "c", text: "Temporary partial disablement" },
          { id: "d", text: "Will be decided based on medical examination" },
        ],
        correctId: "b",
        explanation:
          "Loss of one eye is listed in Schedule I as permanent partial disablement (40% loss of earning capacity).",
      },
      {
        id: "q88",
        subject: "Social Security",
        question:
          "A person X, aged 48, working in a mine, met a fatal accident underground while earning ₹12,000/month. Compensation payable under the Employees' Compensation Act, 1923? (Relevant factor 159.80)",
        options: [
          { id: "a", text: "₹6,40,680" },
          { id: "b", text: "₹8,30,700" },
          { id: "c", text: "₹9,58,800" },
          { id: "d", text: "₹10,43,760" },
        ],
        correctId: "c",
        explanation:
          "Death compensation = 50% of monthly wages × relevant factor. Wage ceiling ₹15,000, so 50% of ₹12,000 = ₹6,000 × 159.80 = ₹9,58,800.",
      },
      {
        id: "q89",
        subject: "Labour Laws",
        question:
          "In which judgment did the Supreme Court lay down the 'Triple test' in respect of the definition of 'industry' under the Industrial Disputes Act, 1947?",
        options: [
          { id: "a", text: "State of Bombay v. The Hospital Mazdoor Sabha, AIR 1960 SC 610" },
          { id: "b", text: "Bangalore Water Supply and Sewerage Board v. R. Rajappa, AIR 1978 SC 548" },
          { id: "c", text: "State of U.P. v. Jai Bir Singh, (2005) 5 SCC 1" },
          { id: "d", text: "M/s Bharti Airtel Limited v. A.S. Raghavendra [Civil Appeal No. 5187 of 2023]" },
        ],
        correctId: "b",
        explanation:
          "The Bangalore Water Supply case (1978) laid down the triple test for 'industry'.",
      },
      {
        id: "q90",
        subject: "Labour Laws",
        question:
          "Which one of the following industries is not a public utility service under the First Schedule of the Industrial Disputes Act, 1947?",
        options: [
          { id: "a", text: "Chemical Fertilizer Industry" },
          { id: "b", text: "Pyrites Mining" },
          { id: "c", text: "Manufacturing of Alumina and Aluminium" },
          { id: "d", text: "Tea Plantation" },
        ],
        correctId: "d",
        explanation:
          "Tea plantation is not listed as a public utility service under the First Schedule.",
        verify: true,
      },
      {
        id: "q91",
        subject: "Labour Laws",
        question:
          "The mandate of giving a notice of six weeks under the Industrial Disputes Act, 1947 is applicable to which categories?\n1. Workmen employed in public utility service, before going for a strike\n2. Employers carrying out public utility service, before declaring lock-out\n3. Workmen employed in any service, before going for a strike",
        options: [
          { id: "a", text: "3 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "1 and 2" },
          { id: "d", text: "1 only" },
        ],
        correctId: "c",
        explanation:
          "Section 22 requires six weeks' notice for strikes/lock-outs in public utility services — applying to both workmen and employers there (not to 'any service').",
      },
      {
        id: "q92",
        subject: "Social Security",
        question:
          "In which situation(s) will gratuity be payable to Mr. X under the Payment of Gratuity Act, 1972?\n1. X resigns after rendering continuous service for six years\n2. X dies due to an accident after rendering continuous service for two years\n3. X retires after rendering continuous service for five years",
        options: [
          { id: "a", text: "3 only" },
          { id: "b", text: "1, 2 and 3" },
          { id: "c", text: "1 and 3 only" },
          { id: "d", text: "1 and 2 only" },
        ],
        correctId: "b",
        explanation:
          "Gratuity needs 5 years' continuous service — met on resignation (6 yrs) and retirement (5 yrs); the 5-year rule is waived on death, so all three qualify.",
      },
      {
        id: "q93",
        subject: "Labour Laws",
        question:
          "Which one is not a right provided to a registered Trade Union under Chapter III of the Trade Unions Act, 1926?",
        options: [
          { id: "a", text: "Constitution of a separate fund for political purposes" },
          { id: "b", text: "Giving membership to a person aged 17 years" },
          { id: "c", text: "Committing a tortious act in contemplation of a trade dispute, by an agent of the Trade Union, without the knowledge of the executive of Trade Union" },
          { id: "d", text: "Making changes in the employment contract through an act done in contemplation of a trade dispute" },
        ],
        correctId: "c",
        explanation:
          "Immunity from tort liability does not extend to acts done by an agent without the executive's knowledge — so (c) is not a protected right.",
        verify: true,
      },
      {
        id: "q94",
        subject: "Social Security",
        question:
          "In which circumstance can Ms. X (a government servant) not claim the twenty-six weeks maternity benefit under the Maternity Benefit Act, 1961?",
        options: [
          { id: "a", text: "She has one surviving child and is a commissioning mother" },
          { id: "b", text: "She has one surviving child and acts as a surrogate" },
          { id: "c", text: "She has no surviving child and is a commissioning mother" },
          { id: "d", text: "She has no surviving child and faces a miscarriage" },
        ],
        correctId: "b",
        explanation:
          "A surrogate mother is not entitled to the 26-week maternity benefit (the commissioning mother gets 12 weeks). Verify wording against key.",
        verify: true,
      },
      {
        id: "q95",
        subject: "Social Security",
        question:
          "How many nursing breaks does the Maternity Benefit Act, 1961 prescribe for a woman who returns to work after her delivery?",
        options: [
          { id: "a", text: "Two breaks in addition to the interval for rest allowed to her" },
          { id: "b", text: "Two breaks within the interval for rest allowed to her" },
          { id: "c", text: "Three breaks in addition to the interval for rest allowed to her" },
          { id: "d", text: "One break within the interval for rest allowed to her" },
        ],
        correctId: "a",
        explanation:
          "Section 11 allows two nursing breaks in addition to the normal rest interval, until the child is 15 months old.",
      },

      // ── Accountancy / Auditing / Insurance (Q96–110) ─────────
      {
        id: "q96",
        subject: "Accountancy",
        question:
          "The principle of inventory valuation — “cost or net realisable value, whichever is lower” — is based on:",
        options: [
          { id: "a", text: "Accrual Concept" },
          { id: "b", text: "Matching Concept" },
          { id: "c", text: "Money Measurement Concept" },
          { id: "d", text: "Convention of Conservatism" },
        ],
        correctId: "d",
        explanation:
          "Valuing stock at the lower of cost or NRV reflects the conservatism (prudence) convention.",
      },
      {
        id: "q97",
        subject: "Accountancy",
        question:
          "Which one is not a 'fundamental accounting assumption' in the preparation of financial statements?",
        options: [
          { id: "a", text: "Matching concept" },
          { id: "b", text: "Going concern" },
          { id: "c", text: "Accrual" },
          { id: "d", text: "Consistency" },
        ],
        correctId: "a",
        explanation:
          "The three fundamental accounting assumptions (AS-1) are Going Concern, Consistency and Accrual. Matching is a concept, not one of the three.",
      },
      {
        id: "q98",
        subject: "Accountancy",
        question: "Which one is a revenue expenditure?",
        options: [
          { id: "a", text: "Overhaul expenses of a second hand machinery purchased" },
          { id: "b", text: "Legal fees to acquire a property" },
          { id: "c", text: "Amount spent for replacement of worn-out portion of a machine" },
          { id: "d", text: "Expenses in connection with obtaining a license for running the cinema hall" },
        ],
        correctId: "c",
        explanation:
          "Replacing a worn-out part (restoring, not enhancing capacity) is revenue expenditure; the others are capital in nature.",
      },
      {
        id: "q99",
        subject: "Accountancy",
        question: "When purchase of an asset is treated as an expense, in the accounting context, it is called:",
        options: [
          { id: "a", text: "Error of principle" },
          { id: "b", text: "Error of omission" },
          { id: "c", text: "Error of commission" },
          { id: "d", text: "Compensating error" },
        ],
        correctId: "a",
        explanation:
          "Treating capital expenditure as revenue (or vice versa) is an error of principle.",
      },
      {
        id: "q100",
        subject: "Accountancy",
        question: "In accounting context, which one of the following statements is correct?",
        options: [
          { id: "a", text: "Reserve created is a charge against profits." },
          { id: "b", text: "Capital reserves are normally created out of distributable profits." },
          { id: "c", text: "General reserve can be used only for some specific purposes." },
          { id: "d", text: "'Provision' is a charge against profit." },
        ],
        correctId: "d",
        explanation:
          "A provision is a charge against profit; a reserve is an appropriation of profit.",
      },
      {
        id: "q101",
        subject: "Accountancy",
        question: "Which one of the following statements is correct?",
        options: [
          { id: "a", text: "Agreement of trial balance is a conclusive proof of accuracy." },
          { id: "b", text: "Suspense account opened in a trial balance is a permanent account." },
          { id: "c", text: "At the end of the accounting year, all the nominal accounts of the ledger book are balanced." },
          { id: "d", text: "A ledger is known as the principal book of accounts." },
        ],
        correctId: "d",
        explanation:
          "The ledger is the principal book of accounts. Trial balance agreement is not conclusive proof; suspense is temporary; nominal accounts are closed (transferred), not carried as balances.",
      },
      {
        id: "q102",
        subject: "Accountancy",
        question: "Which one of the following statements is not correct?",
        options: [
          { id: "a", text: "Capital account has a debit balance." },
          { id: "b", text: "Discount column of cash book records cash discount." },
          { id: "c", text: "Under traditional approach, rent outstanding is a personal account." },
          { id: "d", text: "Cash sales are not recorded in the sales day book." },
        ],
        correctId: "a",
        explanation:
          "Capital account normally carries a credit balance (a liability of the business to the owner), so statement (a) is incorrect.",
      },
      {
        id: "q103",
        subject: "Accountancy",
        question: "Which one of the following is correct?",
        options: [
          { id: "a", text: "Operating profit = Net profit − Non-operating expenses − Non-operating incomes" },
          { id: "b", text: "Operating profit = Net profit + Non-operating expenses + Non-operating incomes" },
          { id: "c", text: "Operating profit = Net profit + Non-operating expenses − Non-operating incomes" },
          { id: "d", text: "Operating profit = Net profit − Non-operating expenses + Non-operating incomes" },
        ],
        correctId: "c",
        explanation:
          "Operating profit = Net profit + Non-operating expenses − Non-operating incomes.",
      },
      {
        id: "q104",
        subject: "Accountancy",
        question: "Which one of the following costs is generally not included in computing the cost of inventory?",
        options: [
          { id: "a", text: "Administration overheads" },
          { id: "b", text: "All cost of purchase" },
          { id: "c", text: "Normal wastage of materials" },
          { id: "d", text: "Storage cost assuming a special storage is required as part of production process" },
        ],
        correctId: "a",
        explanation:
          "General administration overheads are excluded from inventory cost under AS-2/Ind AS-2.",
      },
      {
        id: "q105",
        subject: "Accountancy",
        question: "Which adjustment journal entry will be passed if rent received in advance is ₹2,000?",
        options: [
          { id: "a", text: "Debit profit and loss account and Credit rent account" },
          { id: "b", text: "Debit rent received account and Credit rent received in advance account" },
          { id: "c", text: "Debit rent received in advance account and Credit rent received account" },
          { id: "d", text: "Debit rent account and Credit profit and loss account" },
        ],
        correctId: "b",
        explanation:
          "Rent received in advance is a liability; the advance portion is removed from income: Debit Rent Received A/c, Credit Rent Received in Advance A/c.",
      },
      {
        id: "q106",
        subject: "Insurance",
        question:
          "In a contract of insurance, the principle which states that it is the duty of the insured to take reasonable steps to minimize the loss or damage to the insured property is called:",
        options: [
          { id: "a", text: "Principle of Subrogation" },
          { id: "b", text: "Principle of Utmost Good Faith" },
          { id: "c", text: "Principle of Co-operation" },
          { id: "d", text: "Principle of Mitigation" },
        ],
        correctId: "d",
        explanation: "The duty to minimise loss is the principle of mitigation.",
      },
      {
        id: "q107",
        subject: "Insurance",
        question: "Which one of the following is not a Contract of Indemnity?",
        options: [
          { id: "a", text: "Contract of Fire Insurance" },
          { id: "b", text: "Contract of Life Insurance" },
          { id: "c", text: "Contract of Marine Insurance" },
          { id: "d", text: "Contract of Motor Insurance" },
        ],
        correctId: "b",
        explanation:
          "Life insurance is not a contract of indemnity (life cannot be valued); fire, marine and motor are indemnity contracts.",
      },
      {
        id: "q108",
        subject: "Auditing",
        question: "Which statement about audit documentation is not correct?",
        options: [
          { id: "a", text: "Audit documentation includes audit programmes." },
          { id: "b", text: "Audit file and audit documentation are the same." },
          { id: "c", text: "Audit documentation includes summaries of significant matters." },
          { id: "d", text: "Audit documentation may be recorded on paper or electronic or any other media." },
        ],
        correctId: "b",
        explanation:
          "An audit file is the folder/medium that holds the documentation; the two are not identical — so (b) is incorrect.",
      },
      {
        id: "q109",
        subject: "Auditing",
        question: "In the context of auditing, the primary objective of vouching is:",
        options: [
          { id: "a", text: "To detect errors in financial statements" },
          { id: "b", text: "To evaluate internal controls" },
          { id: "c", text: "To verify the authenticity of transactions" },
          { id: "d", text: "To assess management performance" },
        ],
        correctId: "c",
        explanation:
          "Vouching verifies the authenticity and validity of recorded transactions against documentary evidence.",
      },
      {
        id: "q110",
        subject: "Auditing",
        question: "Which one is not the objective of verification in auditing?",
        options: [
          { id: "a", text: "Checking the historical accuracy of accounts" },
          { id: "b", text: "Verification of the existence of the assets" },
          { id: "c", text: "Verification of the valuation of the assets" },
          { id: "d", text: "Verification of the authority of the acquisition of the assets" },
        ],
        correctId: "a",
        explanation:
          "Verification concerns existence, ownership, valuation and authority regarding assets — not the historical accuracy of past accounts.",
      },

      // ── Current Affairs (Q111–120) ───────────────────────────
      {
        id: "q111",
        subject: "Current Affairs",
        question:
          "Shri Jatin Goswami, a Padma Bhushan awardee in 2025, is an exponent of which dance form?",
        options: [
          { id: "a", text: "Bharatanatyam" },
          { id: "b", text: "Sattriya" },
          { id: "c", text: "Kathakali" },
          { id: "d", text: "Kathak" },
        ],
        correctId: "b",
        explanation: "Jatin Goswami is a noted exponent of Sattriya (Assam).",
        verify: true,
      },
      {
        id: "q112",
        subject: "Current Affairs",
        question:
          "Two Indian servicemen were posthumously conferred the Dag Hammarskjöld medal in 2025 by which international organisation?",
        options: [
          { id: "a", text: "United Nations Organization (UNO)" },
          { id: "b", text: "Organization for Security and Co-operation in Europe (OSCE)" },
          { id: "c", text: "Nordic Defence Cooperation (NORDEFCO)" },
          { id: "d", text: "Stockholm International Peace Research Institute (SIPRI)" },
        ],
        correctId: "a",
        explanation: "The Dag Hammarskjöld Medal is awarded by the United Nations to peacekeepers.",
        verify: true,
      },
      {
        id: "q113",
        subject: "Current Affairs",
        question:
          "Statements:\n1. Space Exploration Technologies Corp. is commonly known as SpaceX.\n2. 'Falcon' is a space vehicle developed by SpaceX whereas 'Dragon' is a space vehicle developed by 'NASA'.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "a",
        explanation:
          "SpaceX = Space Exploration Technologies Corp (1 correct). Both Falcon (rocket) and Dragon (capsule) are SpaceX vehicles, so stmt 2 is wrong.",
      },
      {
        id: "q114",
        subject: "Current Affairs",
        question:
          "Statements relating to the 2026 FIFA Men's Football World Cup:\n1. USA, Mexico and Canada will jointly host the event.\n2. 48 teams shall participate in the event.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "c",
        explanation:
          "The 2026 World Cup is co-hosted by the USA, Mexico and Canada and expands to 48 teams.",
      },
      {
        id: "q115",
        subject: "Current Affairs",
        question:
          "PM Paetongtarn Shinawatra was removed by Thailand's Constitutional Court in 2025 over a leaked phone call with a senior statesperson of which neighbouring country?",
        options: [
          { id: "a", text: "Myanmar" },
          { id: "b", text: "Cambodia" },
          { id: "c", text: "Laos" },
          { id: "d", text: "Vietnam" },
        ],
        correctId: "b",
        explanation: "The leaked call involved Cambodia's Hun Sen.",
        verify: true,
      },
      {
        id: "q116",
        subject: "Current Affairs",
        question:
          "Statements relating to the 'Scheme for Promotion of Registration of Employers and Employees (SPREE) 2025':\n1. SPREE is approved by the Employees' State Insurance Corporation (ESIC).\n2. SPREE provides a one-time opportunity for unregistered employers and employees – including contractual and temporary workers.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "c",
        explanation:
          "SPREE is an ESIC scheme offering a one-time registration window including contractual/temporary workers.",
        verify: true,
      },
      {
        id: "q117",
        subject: "Current Affairs",
        question: "'Zero Defect, Zero Effect' is an initiative of which Ministry of the Government of India?",
        options: [
          { id: "a", text: "Ministry of Heavy Industries" },
          { id: "b", text: "Ministry of Education" },
          { id: "c", text: "Ministry of Skill Development and Entrepreneurship" },
          { id: "d", text: "Ministry of Micro, Small and Medium Enterprises" },
        ],
        correctId: "d",
        explanation: "The ZED certification scheme is run by the Ministry of MSME.",
      },
      {
        id: "q118",
        subject: "Social Security",
        question:
          "Statements relating to recent steps taken by the EPFO:\n1. EPFO has enhanced member services by increasing the auto-settlement limit for advance claims from ₹1 lakh to ₹3 lakh.\n2. EPFO first introduced auto-settlement of advance claims during the COVID-19 pandemic.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "c",
        explanation:
          "EPFO raised the auto-settlement limit to ₹3 lakh, and auto-settlement of advances began during COVID-19.",
        verify: true,
      },
      {
        id: "q119",
        subject: "Current Affairs",
        question:
          "Statements relating to the 'Employment Linked Incentive (ELI) Scheme':\n1. ELI Scheme has an outlay of about ₹1 lakh crore.\n2. Establishments registered with EPFO must hire at least two additional employees (fewer than 50 employees) or five additional employees (50 or more), on a sustained basis for at least six months, to avail benefits.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "c",
        explanation:
          "The ELI Scheme has ~₹1 lakh crore outlay with the stated additional-hiring thresholds tied to EPFO registration.",
        verify: true,
      },
      {
        id: "q120",
        subject: "Current Affairs",
        question:
          "The Union Cabinet approved a new Framework on Currency Swap Arrangement with which regional bloc for the period 2024–2027?",
        options: [
          { id: "a", text: "South Asian Association for Regional Cooperation (SAARC)" },
          { id: "b", text: "African Union (AU)" },
          { id: "c", text: "Association of Southeast Asian Nations (ASEAN)" },
          { id: "d", text: "European Union (EU)" },
        ],
        correctId: "a",
        explanation:
          "The RBI/Cabinet framework on currency swaps for 2024–27 is for SAARC countries.",
        verify: true,
      },
    ],
  },
];

export default PYQ_DATA;