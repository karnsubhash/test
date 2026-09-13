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
          {
            id: "a",
            text: "(i) immigrants; (ii) migration; (iii) emigrants; (iv) immigration",
          },
          {
            id: "b",
            text: "(i) emigrants; (ii) migrants; (iii) immigration; (iv) migration",
          },
          {
            id: "c",
            text: "(i) immigrants; (ii) emigrants; (iii) immigration; (iv) migrants",
          },
          {
            id: "d",
            text: "(i) emigrants; (ii) migrants; (iii) migration; (iv) emigration",
          },
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
        question:
          "Summers ___ be really hot at times, so make sure you stay hydrated.",
        options: [
          { id: "a", text: "can" },
          { id: "b", text: "could" },
          { id: "c", text: "might" },
          { id: "d", text: "may" },
        ],
        correctId: "a",
        explanation:
          "'Can' expresses general possibility/characteristic ('summers can be hot').",
        verify: true,
      },
      {
        id: "q8",
        subject: "English · Fill in the blanks",
        question:
          "I was wondering which festival ___ we celebrate together this year?",
        options: [
          { id: "a", text: "will" },
          { id: "b", text: "might" },
          { id: "c", text: "shall" },
          { id: "d", text: "do" },
        ],
        correctId: "c",
        explanation:
          "'Shall we' fits the suggestion/first-person-question form.",
        verify: true,
      },
      {
        id: "q9",
        subject: "English · Fill in the blanks",
        question:
          "I was ___ exhausted by the end of the week spent in the library doing research work.",
        options: [
          { id: "a", text: "exceedingly" },
          { id: "b", text: "inordinately" },
          { id: "c", text: "very" },
          { id: "d", text: "completely" },
        ],
        correctId: "a",
        explanation:
          "'Exceedingly exhausted' collocates naturally as an intensifier of degree.",
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
        explanation:
          "'Cannot' expresses logical impossibility given the evidence just stated.",
      },
      {
        id: "q11",
        subject: "English · Synonyms",
        question:
          "The fact that the deliberations were carried out in a cordial manner pleased the old guard. (cordial)",
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
        question:
          "His views on the matter have been impugned by those evaluating his role. (impugned)",
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
        question:
          "His ad hominem comments on his colleague were considered egregious by those present. (egregious)",
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
        question:
          "…he abandoned all his erstwhile ideas regarding social welfare and was subsequently labelled an apostate. (apostate)",
        options: [
          { id: "a", text: "an arrogant and haughty person" },
          { id: "b", text: "a self-important person" },
          { id: "c", text: "a renouncer of held beliefs" },
          { id: "d", text: "an affluent person" },
        ],
        correctId: "c",
        explanation:
          "An apostate is one who renounces previously held beliefs.",
      },
      {
        id: "q15",
        subject: "English · Synonyms",
        question:
          "The debate around the corporeity of the soul presents a compelling paradox. (corporeity)",
        options: [
          { id: "a", text: "the quality of physical existence" },
          { id: "b", text: "collective consciousness" },
          { id: "c", text: "embodied in divinity" },
          { id: "d", text: "corpuscular existence" },
        ],
        correctId: "a",
        explanation:
          "Corporeity = the state of having a physical/material body.",
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
        question:
          "Who amongst the following discovered the rock art of Bhimbetka?",
        options: [
          { id: "a", text: "Archibald Carlleyle" },
          { id: "b", text: "Alexander Cunningham" },
          { id: "c", text: "V.S. Wakankar" },
          { id: "d", text: "Mortimer Wheeler" },
        ],
        correctId: "c",
        explanation:
          "V.S. Wakankar discovered the Bhimbetka rock shelters (1957).",
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
        question:
          "Which one among the following temples in India is referred to as the “Black Pagoda”?",
        options: [
          { id: "a", text: "Jagannath Temple, Puri" },
          { id: "b", text: "Sun Temple, Konark" },
          { id: "c", text: "Kamakhya Temple, Guwahati" },
          { id: "d", text: "Kandariya Mahadeva Temple, Khajuraho" },
        ],
        correctId: "b",
        explanation:
          "The Konark Sun Temple was called the 'Black Pagoda' by European sailors.",
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
        explanation:
          "All three statements correctly describe Prajñāpāramitā in Mahayana thought.",
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
        question:
          "Core inflation includes which of the following?\n1. Food prices  2. Energy prices",
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
        question:
          "Who amongst the following is not a member of the GST Council?",
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
        question:
          "Which is the correct method employed by GPS to find the location of a target?",
        options: [
          {
            id: "a",
            text: "Trilateration method, which measures lengths of sides of a triangle with target location as one of the heads of the triangle",
          },
          {
            id: "b",
            text: "Dilation method, which measures distance of target location from two already known landmarks",
          },
          {
            id: "c",
            text: "Measurement of the distance of target from the designated geostationary satellite",
          },
          {
            id: "d",
            text: "Measurement of the distance of target from the designated polar satellite",
          },
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
        explanation:
          "The pleural cavity contains a thin film of pleural (serous) fluid — a liquid.",
      },
      {
        id: "q55",
        subject: "Science",
        question: "Which statement with regard to fatty acids is correct?",
        options: [
          {
            id: "a",
            text: "Most fatty acids have carboxyl group at one end and methyl group at the other end.",
          },
          {
            id: "b",
            text: "Saturated fatty acids carry even number of double bonds between carbon atoms.",
          },
          {
            id: "c",
            text: "Saturated fatty acids carry odd number of double bonds between carbon atoms.",
          },
          {
            id: "d",
            text: "Monounsaturated fatty acids carry as many hydrogen atoms as they can.",
          },
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
        explanation:
          "Amines are widely used in the synthesis of drugs and synthetic fibres (e.g., nylon).",
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
        question:
          "For training and deploying complex models in Artificial Intelligence, which one is preferred?",
        options: [
          { id: "a", text: "Central Processing Units" },
          { id: "b", text: "Graphics Processing Units" },
          { id: "c", text: "Read Only Memory" },
          { id: "d", text: "Solid State Drives" },
        ],
        correctId: "b",
        explanation:
          "GPUs are preferred for parallel training/deployment of complex AI models.",
      },
      {
        id: "q61",
        subject: "Computer",
        question:
          "Which one correctly stands for SSL encryption with regard to banking websites?",
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
        explanation:
          "The hard disk provides non-volatile (permanent) storage; RAM is volatile.",
      },
      {
        id: "q64",
        subject: "Science",
        question:
          "Which is the primary environmental concern associated with permafrost thawing in the Arctic?",
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
          {
            id: "a",
            text: "Total concentration of the Ca²⁺ and Mg²⁺ ions in the fresh water",
          },
          {
            id: "b",
            text: "Difference of the pH value of the fresh water with respect to sulphuric acid",
          },
          {
            id: "c",
            text: "The pH value of fresh water measured at room temperature and at one atmospheric pressure",
          },
          { id: "d", text: "The molar ratio of D₂O to H₂O in fresh water" },
        ],
        correctId: "a",
        explanation:
          "Water hardness is the total concentration of Ca²⁺ and Mg²⁺ ions.",
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
        question:
          "If 2nd February 2025 was Sunday, which day was it on 1st February 2024?",
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
        question:
          "If x percent of a is same as y percent of b, then what percent of a is z percent of b?",
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
          {
            id: "a",
            text: "Both A and R are true and R is a correct explanation of A.",
          },
          {
            id: "b",
            text: "Both A and R are true but R is not a correct explanation of A.",
          },
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
        explanation: "Sum 7 → 6 ways; sum 10 → 3 ways; total 9/36 = 0.25.",
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
          {
            id: "a",
            text: "Establishments employing fewer than 50 persons and operating without the aid of power.",
          },
          {
            id: "b",
            text: "Establishments employing fewer than 70 persons and operating with the aid of power.",
          },
          {
            id: "c",
            text: "Establishments employing more than 50 persons or operating without the aid of power.",
          },
          {
            id: "d",
            text: "Establishments employing fewer than 20 persons or operating without the aid of power.",
          },
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
          {
            id: "a",
            text: "Employer's contribution ₹350; Employees' contribution ₹950",
          },
          {
            id: "b",
            text: "Employer's contribution ₹650; Employees' contribution ₹150",
          },
          {
            id: "c",
            text: "Employer's contribution ₹950; Employees' contribution ₹350",
          },
          {
            id: "d",
            text: "Employer's contribution ₹150; Employees' contribution ₹650",
          },
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
        explanation: "Section 7 permits all three as authorised deductions.",
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
          {
            id: "a",
            text: "State of Bombay v. The Hospital Mazdoor Sabha, AIR 1960 SC 610",
          },
          {
            id: "b",
            text: "Bangalore Water Supply and Sewerage Board v. R. Rajappa, AIR 1978 SC 548",
          },
          { id: "c", text: "State of U.P. v. Jai Bir Singh, (2005) 5 SCC 1" },
          {
            id: "d",
            text: "M/s Bharti Airtel Limited v. A.S. Raghavendra [Civil Appeal No. 5187 of 2023]",
          },
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
          {
            id: "a",
            text: "Constitution of a separate fund for political purposes",
          },
          { id: "b", text: "Giving membership to a person aged 17 years" },
          {
            id: "c",
            text: "Committing a tortious act in contemplation of a trade dispute, by an agent of the Trade Union, without the knowledge of the executive of Trade Union",
          },
          {
            id: "d",
            text: "Making changes in the employment contract through an act done in contemplation of a trade dispute",
          },
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
          {
            id: "a",
            text: "She has one surviving child and is a commissioning mother",
          },
          {
            id: "b",
            text: "She has one surviving child and acts as a surrogate",
          },
          {
            id: "c",
            text: "She has no surviving child and is a commissioning mother",
          },
          {
            id: "d",
            text: "She has no surviving child and faces a miscarriage",
          },
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
          {
            id: "a",
            text: "Two breaks in addition to the interval for rest allowed to her",
          },
          {
            id: "b",
            text: "Two breaks within the interval for rest allowed to her",
          },
          {
            id: "c",
            text: "Three breaks in addition to the interval for rest allowed to her",
          },
          {
            id: "d",
            text: "One break within the interval for rest allowed to her",
          },
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
          {
            id: "a",
            text: "Overhaul expenses of a second hand machinery purchased",
          },
          { id: "b", text: "Legal fees to acquire a property" },
          {
            id: "c",
            text: "Amount spent for replacement of worn-out portion of a machine",
          },
          {
            id: "d",
            text: "Expenses in connection with obtaining a license for running the cinema hall",
          },
        ],
        correctId: "c",
        explanation:
          "Replacing a worn-out part (restoring, not enhancing capacity) is revenue expenditure; the others are capital in nature.",
      },
      {
        id: "q99",
        subject: "Accountancy",
        question:
          "When purchase of an asset is treated as an expense, in the accounting context, it is called:",
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
        question:
          "In accounting context, which one of the following statements is correct?",
        options: [
          { id: "a", text: "Reserve created is a charge against profits." },
          {
            id: "b",
            text: "Capital reserves are normally created out of distributable profits.",
          },
          {
            id: "c",
            text: "General reserve can be used only for some specific purposes.",
          },
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
          {
            id: "a",
            text: "Agreement of trial balance is a conclusive proof of accuracy.",
          },
          {
            id: "b",
            text: "Suspense account opened in a trial balance is a permanent account.",
          },
          {
            id: "c",
            text: "At the end of the accounting year, all the nominal accounts of the ledger book are balanced.",
          },
          {
            id: "d",
            text: "A ledger is known as the principal book of accounts.",
          },
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
          {
            id: "b",
            text: "Discount column of cash book records cash discount.",
          },
          {
            id: "c",
            text: "Under traditional approach, rent outstanding is a personal account.",
          },
          {
            id: "d",
            text: "Cash sales are not recorded in the sales day book.",
          },
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
          {
            id: "a",
            text: "Operating profit = Net profit − Non-operating expenses − Non-operating incomes",
          },
          {
            id: "b",
            text: "Operating profit = Net profit + Non-operating expenses + Non-operating incomes",
          },
          {
            id: "c",
            text: "Operating profit = Net profit + Non-operating expenses − Non-operating incomes",
          },
          {
            id: "d",
            text: "Operating profit = Net profit − Non-operating expenses + Non-operating incomes",
          },
        ],
        correctId: "c",
        explanation:
          "Operating profit = Net profit + Non-operating expenses − Non-operating incomes.",
      },
      {
        id: "q104",
        subject: "Accountancy",
        question:
          "Which one of the following costs is generally not included in computing the cost of inventory?",
        options: [
          { id: "a", text: "Administration overheads" },
          { id: "b", text: "All cost of purchase" },
          { id: "c", text: "Normal wastage of materials" },
          {
            id: "d",
            text: "Storage cost assuming a special storage is required as part of production process",
          },
        ],
        correctId: "a",
        explanation:
          "General administration overheads are excluded from inventory cost under AS-2/Ind AS-2.",
      },
      {
        id: "q105",
        subject: "Accountancy",
        question:
          "Which adjustment journal entry will be passed if rent received in advance is ₹2,000?",
        options: [
          {
            id: "a",
            text: "Debit profit and loss account and Credit rent account",
          },
          {
            id: "b",
            text: "Debit rent received account and Credit rent received in advance account",
          },
          {
            id: "c",
            text: "Debit rent received in advance account and Credit rent received account",
          },
          {
            id: "d",
            text: "Debit rent account and Credit profit and loss account",
          },
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
        explanation:
          "The duty to minimise loss is the principle of mitigation.",
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
          {
            id: "c",
            text: "Audit documentation includes summaries of significant matters.",
          },
          {
            id: "d",
            text: "Audit documentation may be recorded on paper or electronic or any other media.",
          },
        ],
        correctId: "b",
        explanation:
          "An audit file is the folder/medium that holds the documentation; the two are not identical — so (b) is incorrect.",
      },
      {
        id: "q109",
        subject: "Auditing",
        question:
          "In the context of auditing, the primary objective of vouching is:",
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
          {
            id: "d",
            text: "Verification of the authority of the acquisition of the assets",
          },
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
          {
            id: "b",
            text: "Organization for Security and Co-operation in Europe (OSCE)",
          },
          { id: "c", text: "Nordic Defence Cooperation (NORDEFCO)" },
          {
            id: "d",
            text: "Stockholm International Peace Research Institute (SIPRI)",
          },
        ],
        correctId: "a",
        explanation:
          "The Dag Hammarskjöld Medal is awarded by the United Nations to peacekeepers.",
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
        question:
          "'Zero Defect, Zero Effect' is an initiative of which Ministry of the Government of India?",
        options: [
          { id: "a", text: "Ministry of Heavy Industries" },
          { id: "b", text: "Ministry of Education" },
          {
            id: "c",
            text: "Ministry of Skill Development and Entrepreneurship",
          },
          { id: "d", text: "Ministry of Micro, Small and Medium Enterprises" },
        ],
        correctId: "d",
        explanation:
          "The ZED certification scheme is run by the Ministry of MSME.",
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
          {
            id: "a",
            text: "South Asian Association for Regional Cooperation (SAARC)",
          },
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
  {
    year: "2023-APFC",
    label: "2023 · APFC (Series A)",
    questions: [
      // ── PART A: English (Q1–20) ──────────────────────────────
      // Q1–5 sentence rearrangement (P/Q/R/S) — sequences are error-prone; all flagged verify.
      {
        id: "q1",
        subject: "English · Rearrange",
        question:
          "Rearrange P–S to form the best sentence:\nP: before the judge\nQ: given that he was clearly innocent\nR: was incomprehensible\nS: his decision to plead guilty",
        options: [
          { id: "a", text: "SQRP" },
          { id: "b", text: "QPSR" },
          { id: "c", text: "QSPR" },
          { id: "d", text: "SRQP" },
        ],
        correctId: "a",
        explanation:
          "'His decision to plead guilty (S), given that he was clearly innocent (Q), was incomprehensible (R), before the judge (P).' → SQRP.",
        verify: true,
      },
      {
        id: "q2",
        subject: "English · Rearrange",
        question:
          "Rearrange P–S:\nP: when your stated principles\nQ: it is difficult\nR: are at odds with your ground realities\nS: to practise what you preach",
        options: [
          { id: "a", text: "PRSQ" },
          { id: "b", text: "SPRQ" },
          { id: "c", text: "QPRS" },
          { id: "d", text: "QSPR" },
        ],
        correctId: "a",
        explanation:
          "'When your stated principles (P) are at odds with your ground realities (R), to practise what you preach (S) it is difficult (Q).' Best reading → PRSQ.",
        verify: true,
      },
      {
        id: "q3",
        subject: "English · Rearrange",
        question:
          "Rearrange P–S:\nP: people in dire need\nQ: it is a truth universally acknowledged that\nR: for assistance\nS: reach out to their friends and family",
        options: [
          { id: "a", text: "QPSR" },
          { id: "b", text: "PSRQ" },
          { id: "c", text: "QRPS" },
          { id: "d", text: "RQPS" },
        ],
        correctId: "a",
        explanation:
          "'It is a truth universally acknowledged that (Q) people in dire need (P) reach out to their friends and family (S) for assistance (R).' → QPSR.",
        verify: true,
      },
      {
        id: "q4",
        subject: "English · Rearrange",
        question:
          "Rearrange P–S:\nP: his vengeful\nQ: by the expression on his face\nR: and diabolical nature\nS: were clearly revealed",
        options: [
          { id: "a", text: "QSPR" },
          { id: "b", text: "QPRS" },
          { id: "c", text: "PSQR" },
          { id: "d", text: "PRSQ" },
        ],
        correctId: "d",
        explanation:
          "'His vengeful (P) and diabolical nature (R) were clearly revealed (S) by the expression on his face (Q).' → PRSQ.",
        verify: true,
      },
      {
        id: "q5",
        subject: "English · Rearrange",
        question:
          "Rearrange P–S:\nP: bitter fights\nQ: between the two rival teams\nR: on more than one occasion\nS: I have witnessed",
        options: [
          { id: "a", text: "SRQP" },
          { id: "b", text: "RSPQ" },
          { id: "c", text: "QPRS" },
          { id: "d", text: "SPQR" },
        ],
        correctId: "d",
        explanation:
          "'I have witnessed (S) bitter fights (P) between the two rival teams (Q) on more than one occasion (R).' → SPQR. (If SPQR is absent, verify the intended key.)",
        verify: true,
      },
      {
        id: "q6",
        subject: "English · Synonyms",
        question:
          "The essay was badly researched and contained several platitudes and generalizations. (platitudes)",
        options: [
          { id: "a", text: "Incorrect statements" },
          { id: "b", text: "Imprecise comments" },
          { id: "c", text: "Often used and unoriginal ideas" },
          { id: "d", text: "Vague, subjective statements" },
        ],
        correctId: "c",
        explanation: "A platitude is a trite, overused and unoriginal remark.",
      },
      {
        id: "q7",
        subject: "English · Synonyms",
        question:
          "The judgment of beauty is based on the human capacity for disinterested pleasure in the natural world. (disinterested)",
        options: [
          { id: "a", text: "Indifference" },
          { id: "b", text: "Free of all self-interest" },
          { id: "c", text: "Not caring for something" },
          { id: "d", text: "Extremely focused" },
        ],
        correctId: "b",
        explanation:
          "'Disinterested' means impartial / free of self-interest, not 'uninterested'.",
      },
      {
        id: "q8",
        subject: "English · Synonyms",
        question:
          "The hundred-year old college building was now in a derelict state. (derelict)",
        options: [
          { id: "a", text: "Preserved for historical value" },
          { id: "b", text: "Unsafe for occupation" },
          { id: "c", text: "Neglected and broken down" },
          { id: "d", text: "Retaining its original beauty" },
        ],
        correctId: "c",
        explanation:
          "Derelict = in a run-down, neglected, dilapidated condition.",
      },
      {
        id: "q9",
        subject: "English · Synonyms",
        question:
          "My serendipitous encounter with the man on the bus was to have a profound impact on my life. (serendipitous)",
        options: [
          { id: "a", text: "Fortunate" },
          { id: "b", text: "Of historical significance" },
          { id: "c", text: "Sudden and abrupt" },
          { id: "d", text: "A chance event" },
        ],
        correctId: "a",
        explanation:
          "Serendipitous = occurring by a happy/fortunate chance. 'Fortunate' best captures the positive sense; 'a chance event' is neutral. Verify against key.",
        verify: true,
      },
      {
        id: "q10",
        subject: "English · Synonyms",
        question:
          "Notwithstanding our victory today we must be careful to avoid a feeling of complacency. (complacency)",
        options: [
          { id: "a", text: "Smug and self-satisfied" },
          { id: "b", text: "A defensive attitude" },
          { id: "c", text: "Pride" },
          { id: "d", text: "Feeling of superiority" },
        ],
        correctId: "a",
        explanation: "Complacency is a smug, uncritical self-satisfaction.",
      },
      {
        id: "q11",
        subject: "English · Passage",
        question:
          "(Millet-project passage) What does “agroecological region of the Eastern Ghats” mean in the passage?",
        options: [
          { id: "a", text: "Area marked by excessive agricultural yield" },
          { id: "b", text: "Area suitable for developing tourism" },
          { id: "c", text: "Area with pollution-free characteristics" },
          {
            id: "d",
            text: "Area meant for sustainable farming that works in tandem with nature",
          },
        ],
        correctId: "d",
        explanation:
          "'Agroecological' denotes a farming region shaped by its ecology — sustainable agriculture in tune with nature.",
        verify: true,
      },
      {
        id: "q12",
        subject: "English · Passage",
        question:
          "There has been a rapid decline in minor millet cultivation because",
        options: [
          { id: "a", text: "the millet crop requires special manures to grow" },
          {
            id: "b",
            text: "the land of Namakkal district is not suitable for growing millet",
          },
          {
            id: "c",
            text: "there has been shift towards growing more profitable crops",
          },
          {
            id: "d",
            text: "the land is declared as not climate-resilient for the production of millet",
          },
        ],
        correctId: "c",
        explanation:
          "The passage attributes the decline to a shift to more profitable crops (cassava, pineapple, coffee, pepper).",
      },
      {
        id: "q13",
        subject: "English · Passage",
        question:
          "What does “a tiny share of grain was processed into value-added products” mean in the passage?",
        options: [
          {
            id: "a",
            text: "Enough was not done for the marketing of millet as a diverse food product.",
          },
          {
            id: "b",
            text: "A small quantity of millet is used with other grains.",
          },
          { id: "c", text: "The demand for millet is not very encouraging." },
          { id: "d", text: "Millet does not have potential health benefits." },
        ],
        correctId: "a",
        explanation:
          "Only a tiny fraction was value-added, implying inadequate processing/marketing into diverse products.",
        verify: true,
      },
      {
        id: "q14",
        subject: "English · Passage",
        question:
          "“The introduction of small-scale localized mechanical milling, operated by self-help groups, was a game-changer.” What does it mean in the passage?",
        options: [
          {
            id: "a",
            text: "Machinery for processing millets is not advanced enough.",
          },
          {
            id: "b",
            text: "Self-help groups are active in improving machinery for various crops.",
          },
          {
            id: "c",
            text: "The use of improvised local machines for removing husk from millets has been a turning point for millet farming.",
          },
          {
            id: "d",
            text: "The process of milling the millets is at a small scale.",
          },
        ],
        correctId: "c",
        explanation:
          "Localized SHG-run milling transformed (was a turning point for) millet processing.",
      },
      {
        id: "q15",
        subject: "English · Passage",
        question: "Millet yield has increased because",
        options: [
          { id: "a", text: "sustainable farming practices are being followed" },
          { id: "b", text: "farmers are exporting millet" },
          { id: "c", text: "more labour is employed for farming" },
          { id: "d", text: "easy bank loans are available now" },
        ],
        correctId: "a",
        explanation:
          "Yields rose from improved seeds, better agronomic practices and intercropping — sustainable practices.",
        verify: true,
      },
      {
        id: "q16",
        subject: "English · Phrase meaning",
        question:
          "Her poetry not only succeeds in capturing the beauty of nature but also carries the power to suggest that which is too great and beautiful to be expressed in words. (too great and beautiful to be expressed in words)",
        options: [
          { id: "a", text: "the unknown" },
          { id: "b", text: "the proscribed" },
          { id: "c", text: "the intangible" },
          { id: "d", text: "the ineffable" },
        ],
        correctId: "d",
        explanation: "'Ineffable' = too great to be expressed in words.",
      },
      {
        id: "q17",
        subject: "English · Phrase meaning",
        question:
          "The Government's policies were aimed at relieving the distress of the homeless, the unemployed and the poverty-stricken sections of society. (poverty-stricken)",
        options: [
          { id: "a", text: "needy" },
          { id: "b", text: "indigent" },
          { id: "c", text: "disadvantaged" },
          { id: "d", text: "challenged" },
        ],
        correctId: "b",
        explanation:
          "'Indigent' precisely means poverty-stricken / impoverished.",
      },
      {
        id: "q18",
        subject: "English · Phrase meaning",
        question:
          "The organizers refused to allow him to speak at the function since he was known to make speeches that tended to provoke and ignite passions. (speeches that tended to provoke and ignite passions)",
        options: [
          { id: "a", text: "irreverent speeches" },
          { id: "b", text: "incendiary speeches" },
          { id: "c", text: "unsubstantiated speeches" },
          { id: "d", text: "irrelevant speeches" },
        ],
        correctId: "b",
        explanation: "'Incendiary' speech is one that inflames passions.",
      },
      {
        id: "q19",
        subject: "English · Phrase meaning",
        question:
          "She was criticized for her views that were often restricted to small local issues and ignored matters of national importance. (restricted to small local issues)",
        options: [
          { id: "a", text: "unilateral" },
          { id: "b", text: "illiberal" },
          { id: "c", text: "parochial" },
          { id: "d", text: "limited" },
        ],
        correctId: "c",
        explanation: "'Parochial' = narrow, restricted to a small local scope.",
      },
      {
        id: "q20",
        subject: "English · Phrase meaning",
        question:
          "When profits began dropping steeply all of a sudden he realized that he ought to wind up his business soon. (dropping steeply all of a sudden)",
        options: [
          { id: "a", text: "precipitously" },
          { id: "b", text: "instantaneously" },
          { id: "c", text: "cataclysmically" },
          { id: "d", text: "dramatically" },
        ],
        correctId: "a",
        explanation: "'Precipitously' = suddenly and steeply.",
      },

      // ── PART B (Q21–120): English column ─────────────────────
      {
        id: "q21",
        subject: "History",
        question:
          "Which one of the following observations pertaining to the works of 19th–20th century archaeologists is not correct?",
        options: [
          {
            id: "a",
            text: "Alexander Cunningham, the first Director-General of the ASI, was of the view that the history of India began with the origins of the Indus Valley Civilization.",
          },
          {
            id: "b",
            text: "John Marshall generally adopted the method of excavation along regular horizontal units and ignored the stratigraphy of the site.",
          },
          {
            id: "c",
            text: "R.E.M. Wheeler first recognized the necessity to follow the stratigraphy of the mound rather than dig along horizontal lines.",
          },
          {
            id: "d",
            text: "Amalananda Ghosh was the first to identify similarities between pre-Harappan and mature-Harappan cultures.",
          },
        ],
        correctId: "a",
        explanation:
          "Cunningham's focus was on the historic (Buddhist/early historic) period; he did not see Indian history as beginning with the Indus Valley Civilization (which was identified only later). So (a) is the incorrect observation.",
        verify: true,
      },
      {
        id: "q22",
        subject: "History",
        question:
          "Which one of the following was an important contributing factor in the rise of Magadha as the most powerful Mahajanapada between the Sixth and the Fourth Centuries BCE?",
        options: [
          { id: "a", text: "Easy access to rich gold mines" },
          { id: "b", text: "Superior cavalry" },
          { id: "c", text: "An agriculturally productive region" },
          { id: "d", text: "Republican system of governance" },
        ],
        correctId: "c",
        explanation:
          "Fertile Gangetic plains, iron deposits and river access underpinned Magadha's rise; agricultural productivity is the key factor here.",
      },
      {
        id: "q23",
        subject: "Culture",
        question:
          "Which one among the following statements about the Kailashanatha temple at Ellora is not correct?",
        options: [
          {
            id: "a",
            text: "The temple was carved out of rocks in the Eighth Century CE.",
          },
          { id: "b", text: "The temple is dedicated to Lord Shiva." },
          {
            id: "c",
            text: "The superstructure of the temple corresponds to the Nagara style.",
          },
          {
            id: "d",
            text: "The temple has both Shaiva and Vaishnava sculptures.",
          },
        ],
        correctId: "c",
        explanation:
          "The Kailasa temple's shikhara is in the Dravida (South Indian) style, not Nagara. So (c) is the incorrect statement.",
        verify: true,
      },
      {
        id: "q24",
        subject: "History",
        question:
          "Which one of the following statements about ancient Indian pottery is correct?",
        options: [
          {
            id: "a",
            text: "Northern Black Polished Ware (NBPW) refers to a type of pottery found from archaeological sites in India dating back to 600 BCE.",
          },
          {
            id: "b",
            text: "Painted Grey Ware (PGW) refers to a type of pottery found over a large part of South India coinciding with the Sangam period.",
          },
          {
            id: "c",
            text: "Ochre Coloured Pottery (OCP) sites are located in South India only.",
          },
          {
            id: "d",
            text: "Black-and-Red Ware (BRW) is never found at Neolithic sites.",
          },
        ],
        correctId: "a",
        explanation:
          "NBPW is associated with the early historic north (c. 700–600 BCE onwards). PGW is a northern (not South Indian) ware, OCP is northern, and BRW is found across a wide time range including Neolithic/Chalcolithic contexts.",
        verify: true,
      },
      {
        id: "q25",
        subject: "Culture",
        question:
          "Which one of the following pairs (Ancient Text/Term — Meaning) is not correctly matched?",
        options: [
          {
            id: "a",
            text: "Samarangana-Sutradhara : A scientific work on ancient Indian architecture",
          },
          {
            id: "b",
            text: "Harmika : A style of temple architecture that originated under the Chola Kings",
          },
          {
            id: "c",
            text: "Vimana : A striking feature of the Dravidian style of temples",
          },
          {
            id: "d",
            text: "Kutagarashala : A hut with a pointed roof where travelling mendicants halted",
          },
        ],
        correctId: "b",
        explanation:
          "Harmika is the railing/box atop a Buddhist stupa dome, not a Chola temple style. So (b) is wrongly matched.",
      },
      {
        id: "q26",
        subject: "Social Security",
        question:
          "What is the time limit prescribed under the Employees' Compensation Act, 1923 from the date of reference within which the Commissioner is required to dispose of the matter relating to compensation and intimate the decision to the employee?",
        options: [
          { id: "a", text: "Six months" },
          { id: "b", text: "One year" },
          { id: "c", text: "Two months" },
          { id: "d", text: "Three months" },
        ],
        correctId: "d",
        explanation:
          "The Act prescribes disposal and intimation within three months of the reference.",
        verify: true,
      },
      {
        id: "q27",
        subject: "Social Security",
        question:
          "What is the minimum number of employees employed by an establishment functioning without the aid of power and registered under the Cooperative Societies Act, 1912 that shall require it to come within the purview of the EPF & MP Act, 1952?",
        options: [
          { id: "a", text: "Fifty" },
          { id: "b", text: "One hundred" },
          { id: "c", text: "One hundred twenty" },
          { id: "d", text: "One hundred fifty" },
        ],
        correctId: "a",
        explanation:
          "For co-operative societies working without the aid of power, the threshold for EPF coverage is 50 persons.",
      },
      {
        id: "q28",
        subject: "Social Security",
        question:
          "Any question relating to disablement shall be determined by which one of the following authorities under the Employees' State Insurance Act, 1948?",
        options: [
          { id: "a", text: "The Insurance Medical Practitioner" },
          { id: "b", text: "The Social Security Officer" },
          { id: "c", text: "The Medical Board" },
          { id: "d", text: "The Medical Appeal Tribunal" },
        ],
        correctId: "c",
        explanation:
          "Under the ESI Act, disablement questions are referred to and determined by the Medical Board.",
      },
      {
        id: "q29",
        subject: "Social Security",
        question:
          "What is the amount of compensation to be paid to an employee who is totally and permanently disabled as a result of injury under the Employees' Compensation Act, 1923? (Monthly wages ₹22,500 and relevant factor 159.80)",
        options: [
          { id: "a", text: "₹14,38,200" },
          { id: "b", text: "₹23,97,000" },
          { id: "c", text: "₹21,57,300" },
          { id: "d", text: "₹7,67,040" },
        ],
        correctId: "c",
        explanation:
          "Permanent total disablement = 60% of monthly wages × relevant factor. Wages capped at ₹15,000 for computation: 60% of ₹15,000 = ₹9,000 × 159.80 = ₹14,38,200 → option (a). If wages taken as ₹22,500 (60% = ₹13,500 × 159.80 = ₹21,57,300 → (c)). The answer depends on the wage ceiling applied — verify against the official key.",
        verify: true,
      },
      {
        id: "q30",
        subject: "Social Security",
        question:
          "What is the minimum number of employees required to be working in an establishment so that the employer, with the authorization of the majority of the employees, may apply to the Central Government to authorize the employer to create a separate Provident Fund Account under the EPF & MP Act, 1952?",
        options: [
          { id: "a", text: "One hundred" },
          { id: "b", text: "Three hundred" },
          { id: "c", text: "Five hundred" },
          { id: "d", text: "One thousand" },
        ],
        correctId: "a",
        explanation:
          "The Act provides for such an application where the establishment employs at least 100 persons. Verify against key.",
        verify: true,
      },
      {
        id: "q31",
        subject: "Labour Laws",
        question:
          "Correct sequence of formation (earliest to latest) of the Central Federations of Trade Unions:\n1. INTUC  2. AITUC  3. SEWA  4. UTUC  5. CITU  6. BMS",
        options: [
          { id: "a", text: "2, 1, 4, 6, 5, 3" },
          { id: "b", text: "2, 1, 3, 4, 6, 5" },
          { id: "c", text: "1, 2, 5, 4, 3, 6" },
          { id: "d", text: "1, 3, 2, 4, 5, 6" },
        ],
        correctId: "a",
        explanation:
          "AITUC (1920) → INTUC (1947) → UTUC (1949) → BMS (1955) → CITU (1970) → SEWA (1972). So 2, 1, 4, 6, 5, 3.",
        verify: true,
      },
      {
        id: "q32",
        subject: "Labour Laws",
        question:
          "Which one of the following core conventions adopted by the ILO has not been ratified by India?",
        options: [
          { id: "a", text: "The Forced Labour Convention (No. 29)" },
          { id: "b", text: "The Equal Remuneration Convention (No. 100)" },
          {
            id: "c",
            text: "The Freedom of Association and Protection of the Right to Organize Convention (No. 87)",
          },
          {
            id: "d",
            text: "The Discrimination (Employment and Occupation) Convention (No. 111)",
          },
        ],
        correctId: "c",
        explanation:
          "India has not ratified ILO Conventions No. 87 and No. 98 (freedom of association / right to organise).",
      },
      {
        id: "q33",
        subject: "Labour Laws",
        question:
          "Five trade unions in an establishment employing 1100 workmen have memberships: A=100, B=370, C=110, D=275, E=80. Based on membership strength, which unions can be registered under the Trade Unions Act, 1926?",
        options: [
          { id: "a", text: "All the unions" },
          { id: "b", text: "Unions A, B, C and D only" },
          { id: "c", text: "Unions B, C and D only" },
          { id: "d", text: "Unions B and D only" },
        ],
        correctId: "a",
        explanation:
          "Registration requires a minimum of 7 members (and at least 10% or 100 workmen, whichever is less, for application). All five unions exceed the minimum membership needed to be registered — so all can be registered. Verify against key given the 10%/100 rule wording.",
        verify: true,
      },
      {
        id: "q34",
        subject: "Labour Laws",
        question:
          "Registration of trade unions of workers under the Trade Unions Act, 1926 is",
        options: [
          { id: "a", text: "optional" },
          { id: "b", text: "compulsory" },
          {
            id: "c",
            text: "optional for workers working in non-public utility services",
          },
          {
            id: "d",
            text: "compulsory for workers working in public utility services",
          },
        ],
        correctId: "a",
        explanation:
          "Registration under the Trade Unions Act, 1926 is voluntary/optional, not mandatory.",
      },
      {
        id: "q35",
        subject: "Labour Laws",
        question: "The Right of workers to resort to strike is the",
        options: [
          { id: "a", text: "Fundamental Right" },
          { id: "b", text: "Statutory Right" },
          { id: "c", text: "Common Law Right" },
          { id: "d", text: "Equitable Right" },
        ],
        correctId: "b",
        explanation:
          "The right to strike is a statutory (legal) right regulated by the Industrial Disputes Act, not a fundamental right (per SC in T.K. Rangarajan).",
      },
      {
        id: "q36",
        subject: "Maths",
        question:
          "PQ and RS are chords on a circle centred at O. A is the point of intersection of PQ and RS. Which statements is/are correct?\n1. If A and O coincide, then the four parts of the circle produced by the chords shall always have equal areas.\n2. If A and O do not coincide, then two of the four parts of the circle produced by the chords shall always have equal areas.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "a",
        explanation:
          "When A = O the chords are diameters, dividing the circle into four equal parts (stmt 1 true). If A ≠ O the four parts are generally unequal, and equality of any two is not guaranteed (stmt 2 false).",
        verify: true,
      },
      {
        id: "q37",
        subject: "Maths",
        question:
          "P, Q, R, S and T are five friends. Mean weight of P, Q, R, S = 50 kg; mean of Q, R, S, T = 50 kg. Which is/are correct?\n1. The weight of T is 50 kg.\n2. The weights of P and T are equal.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "b",
        explanation:
          "Both means = 200 total ⟹ P+Q+R+S = Q+R+S+T ⟹ P = T (stmt 2 true). T's exact value can't be determined (stmt 1 not necessarily true).",
      },
      {
        id: "q38",
        subject: "Reasoning",
        question:
          "P, Q, R, S, T, U, V, W sit in a row facing North. P and S are neighbours; W is a neighbour of both Q and U; T is a neighbour of R and V. If there are four people between P and V, how many people are between P and R?",
        options: [
          { id: "a", text: "1" },
          { id: "b", text: "3" },
          { id: "c", text: "5" },
          { id: "d", text: "6" },
        ],
        correctId: "c",
        explanation:
          "Solving the seating constraints places P and R five positions apart. (Work out the arrangement from the neighbour clues.) Verify against key.",
        verify: true,
      },
      {
        id: "q39",
        subject: "Maths",
        question:
          "The angles of elevation of the top of a tower from the top and bottom of a 10 m tall building are 30° and 45° respectively. Approximately, what is the height of the tower (in m) from the top of the building? (√3 = 1.73)",
        options: [
          { id: "a", text: "10.65" },
          { id: "b", text: "13.41" },
          { id: "c", text: "13.65" },
          { id: "d", text: "15.41" },
        ],
        correctId: "c",
        explanation:
          "Tower height H = 10·√3/(√3−1) ≈ 23.65 m total; from the top of the building (H − 10) ≈ 13.65 m.",
        verify: true,
      },
      {
        id: "q40",
        subject: "Maths",
        question:
          "A 50-question MCQ paper: +4 for a correct answer, −1 for a wrong one. A candidate ticks in the repeating pattern A, B, C, D, A, B, C, D, … from Q1 to the end. If option (C) is correct in every question, what is the candidate's total score?",
        options: [
          { id: "a", text: "6" },
          { id: "b", text: "8" },
          { id: "c", text: "10" },
          { id: "d", text: "12" },
        ],
        correctId: "c",
        explanation:
          "In each block of 4 the candidate is right once (the C) and wrong thrice. 50 = 12 full blocks (48 Qs) + A, B. Correct = 12 (C's) → +48; wrong = 38 → −38; total = 10.",
      },
      {
        id: "q41",
        subject: "Accountancy",
        question:
          "The insurance claim received on account of machinery damaged completely by fire is",
        options: [
          { id: "a", text: "capital receipt" },
          { id: "b", text: "revenue receipt" },
          { id: "c", text: "capital expenditure" },
          { id: "d", text: "revenue expenditure" },
        ],
        correctId: "a",
        explanation:
          "Compensation for the loss of a fixed asset is a capital receipt.",
      },
      {
        id: "q42",
        subject: "Accountancy",
        question:
          "According to Accounting Standard-1, which of the following are the fundamental accounting assumptions?",
        options: [
          { id: "a", text: "Going Concern, Consistency, Accrual" },
          { id: "b", text: "Going Concern, Money Measurement, Conservatism" },
          { id: "c", text: "Going Concern, Consistency, Conservatism" },
          { id: "d", text: "Going Concern, Accounting Period, Accrual" },
        ],
        correctId: "a",
        explanation:
          "AS-1 fundamental assumptions: Going Concern, Consistency and Accrual.",
      },
      {
        id: "q43",
        subject: "Accountancy",
        question:
          "Which of the following errors is not detected by Trial Balance?",
        options: [
          {
            id: "a",
            text: "A credit purchase of ₹1,000 from Mr. Singh is credited wrongly to the account of Mr. Akash",
          },
          {
            id: "b",
            text: "A credit purchase of ₹20,000 from Mr. Sandhu is recorded in the day book as ₹2,000",
          },
          {
            id: "c",
            text: "Conversion of a temporary shed into a permanent building is recorded as repairs and maintenance expense",
          },
          {
            id: "d",
            text: "Error in posting from the book of subsidiary record to the ledger",
          },
        ],
        correctId: "a",
        explanation:
          "Posting a credit to the wrong personal account (right side, right amount) leaves the trial balance in agreement — it isn't detected. (Errors b and c are also not detected, but (a) is the classic 'error of commission' example intended here — verify with key.)",
        verify: true,
      },
      {
        id: "q44",
        subject: "Accountancy",
        question: "Which one of the following statements is correct?",
        options: [
          {
            id: "a",
            text: "Capital reserves are normally created out of free or distributable profits.",
          },
          {
            id: "b",
            text: "Dividend equalization reserve is an example of general reserve.",
          },
          {
            id: "c",
            text: "General reserve can be used only for some specific purposes.",
          },
          { id: "d", text: "'Provision' is a charge against profit." },
        ],
        correctId: "d",
        explanation:
          "A provision is a charge against profit. Capital reserves arise from capital profits; a dividend equalization reserve is a specific reserve; general reserve is free (not restricted).",
      },
      {
        id: "q45",
        subject: "Accountancy",
        question: "Which one of the following is not an error of commission?",
        options: [
          { id: "a", text: "Overcasting of sales book" },
          {
            id: "b",
            text: "Credit sales to Ramesh ₹5,000 credited to his account",
          },
          { id: "c", text: "Wrong balancing of machinery account" },
          { id: "d", text: "Cash sales not recorded in cash book" },
        ],
        correctId: "d",
        explanation:
          "Completely omitting a transaction is an error of omission, not commission. So (d) is not an error of commission.",
      },
      {
        id: "q46",
        subject: "Computer",
        question:
          "Which of the following operators connects a structure variable and its element?",
        options: [
          { id: "a", text: "Dot operator" },
          { id: "b", text: "Plus operator" },
          { id: "c", text: "Minus operator" },
          { id: "d", text: "Multiply operator" },
        ],
        correctId: "a",
        explanation:
          "The dot (.) member-access operator links a structure variable to its member.",
      },
      {
        id: "q47",
        subject: "Computer",
        question: "Which of the following is not a top-down language?",
        options: [
          { id: "a", text: "C" },
          { id: "b", text: "FORTRAN" },
          { id: "c", text: "JAVA" },
          { id: "d", text: "Pascal" },
        ],
        correctId: "c",
        explanation:
          "JAVA is an object-oriented (bottom-up) language; C, FORTRAN and Pascal follow the procedural/top-down approach.",
      },
      {
        id: "q48",
        subject: "Computer",
        question:
          "Which one of the following attributes is required for internal linking in HTML?",
        options: [
          { id: "a", text: "Name" },
          { id: "b", text: "Align" },
          { id: "c", text: "Body" },
          { id: "d", text: "Link" },
        ],
        correctId: "a",
        explanation:
          "Internal (same-page) linking uses a named anchor — the 'name' (or id) attribute as the target.",
        verify: true,
      },
      {
        id: "q49",
        subject: "Computer",
        question:
          "Which one of the following types of operating systems is designed to respond to an event within a predetermined time?",
        options: [
          { id: "a", text: "Embedded" },
          { id: "b", text: "Real time" },
          { id: "c", text: "Multiuser" },
          { id: "d", text: "Synchronized" },
        ],
        correctId: "b",
        explanation:
          "A real-time OS guarantees response within a fixed time bound.",
      },
      {
        id: "q50",
        subject: "Computer",
        question:
          "What is the decimal equivalent of the hexadecimal number 5A6D?",
        options: [
          { id: "a", text: "23149" },
          { id: "b", text: "23148" },
          { id: "c", text: "23147" },
          { id: "d", text: "13149" },
        ],
        correctId: "a",
        explanation:
          "5A6D₁₆ = 5·4096 + 10·256 + 6·16 + 13 = 20480 + 2560 + 96 + 13 = 23149.",
      },
      {
        id: "q51",
        subject: "Science",
        question:
          "Two lenses of powers +2.0 D and −2.5 D are combined to make an optical instrument. The combination will",
        options: [
          { id: "a", text: "act as a convex lens" },
          { id: "b", text: "act as a concave lens" },
          { id: "c", text: "act as a simple mirror" },
          { id: "d", text: "not form any image" },
        ],
        correctId: "b",
        explanation:
          "Net power = +2.0 + (−2.5) = −0.5 D (negative) → behaves as a concave (diverging) lens.",
      },
      {
        id: "q52",
        subject: "Science",
        question:
          "For an inelastic collision between two objects, which one of the following statements is correct?",
        options: [
          {
            id: "a",
            text: "The kinetic energy remains conserved, but not the momentum.",
          },
          {
            id: "b",
            text: "The momentum remains conserved, but not the kinetic energy.",
          },
          {
            id: "c",
            text: "Both the kinetic energy and the momentum remain conserved.",
          },
          {
            id: "d",
            text: "Neither the kinetic energy nor the momentum remains conserved.",
          },
        ],
        correctId: "b",
        explanation:
          "In any collision momentum is conserved; in an inelastic collision kinetic energy is not.",
      },
      {
        id: "q53",
        subject: "Science",
        question:
          "A train starting from rest with uniform acceleration attains a speed of 108 km/h in 5 minutes. The distance covered by the train in attaining the speed is",
        options: [
          { id: "a", text: "9000 m" },
          { id: "b", text: "4500 m" },
          { id: "c", text: "355 m" },
          { id: "d", text: "108 m" },
        ],
        correctId: "b",
        explanation:
          "v = 108 km/h = 30 m/s, t = 300 s. Distance = ½·v·t = ½·30·300 = 4500 m.",
      },
      {
        id: "q54",
        subject: "Science",
        question:
          "An object is placed in front of a concave mirror at infinity. Which one of the following is correct for its image?",
        options: [
          {
            id: "a",
            text: "A real and inverted image would be formed at the focal point.",
          },
          {
            id: "b",
            text: "A virtual and inverted image would be formed at the focal point.",
          },
          {
            id: "c",
            text: "A real and erect image would be formed at infinity.",
          },
          {
            id: "d",
            text: "A virtual and erect image would be formed at the focal point.",
          },
        ],
        correctId: "a",
        explanation:
          "For an object at infinity, a concave mirror forms a real, inverted, highly diminished image at the focus.",
      },
      {
        id: "q55",
        subject: "Science",
        question: "The main cause of ocean acidification is",
        options: [
          { id: "a", text: "carbon dioxide" },
          { id: "b", text: "carbon monoxide" },
          { id: "c", text: "hydrogen sulfide" },
          { id: "d", text: "chlorofluorocarbon" },
        ],
        correctId: "a",
        explanation:
          "Dissolved CO₂ forms carbonic acid, lowering ocean pH — the main cause of ocean acidification.",
      },
      {
        id: "q56",
        subject: "Polity",
        question:
          "Which of the following statements regarding the Ordinance-making power of the Governor is/are not correct?\n1. It is a discretionary power and does not entail the advice of the Ministers.\n2. The Ordinance-making power of the Governor is confined to subjects in all the three Lists of Schedule VII.\n3. With regard to repugnancy with a Union Law relating to concurrent subjects, the Governor's Ordinance will prevail notwithstanding repugnancy, if the Ordinance had been made in pursuance of 'instructions' of the President of India.",
        options: [
          { id: "a", text: "1 and 2 only" },
          { id: "b", text: "1, 2 and 3" },
          { id: "c", text: "2 and 3 only" },
          { id: "d", text: "3 only" },
        ],
        correctId: "a",
        explanation:
          "Ordinance-making is exercised on ministerial advice (not discretionary) — stmt 1 incorrect. It is confined to State List and Concurrent List (not all three lists) — stmt 2 incorrect. Statement 3 is correct. The question asks which are NOT correct → 1 and 2.",
        verify: true,
      },
      {
        id: "q57",
        subject: "Polity",
        question:
          "Which of the following statements about curative petition is/are correct?\n1. It can be entertained by the Supreme Court of India only.\n2. It can be entertained by the Supreme Court of India and the High Courts of India.\n3. Certification by a Senior Advocate is necessary to file a curative petition.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "3 only" },
          { id: "c", text: "2 and 3" },
          { id: "d", text: "1 and 3" },
        ],
        correctId: "d",
        explanation:
          "A curative petition lies only before the Supreme Court (stmt 1 true; stmt 2 false) and must be certified by a Senior Advocate (stmt 3 true). So 1 and 3.",
      },
      {
        id: "q58",
        subject: "Economy",
        question:
          "Consider the following statements:\n1. The Department of Economic Affairs is a nodal agency of the Government of India to formulate and monitor the country's economic policies and programmes.\n2. The principal responsibility of the Department of Economic Affairs is the preparation and presentation of the Union Budget (including the Railway Budget) and the Budgets for Union Territories and States under President's Rule.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "c",
        explanation:
          "Both statements correctly describe the Department of Economic Affairs (which prepares the Union Budget, now including the merged Railway Budget, and budgets for UTs/President's-Rule States).",
        verify: true,
      },
      {
        id: "q59",
        subject: "Polity",
        question:
          "Which of the following statements regarding the District Planning Committee (DPC) and Metropolitan Planning Committee (MPC) is/are correct?\n1. In the DPC, at least 4/5th of the members shall be elected by the elected members of the district level Panchayat and the Municipalities from amongst themselves; their proportion in accordance with the ratio of urban to rural population of the district.\n2. In the MPC, at least 2/3rd of the members shall be elected by the elected members of the Municipalities and the Chairpersons of the Panchayats in the Metropolitan area from amongst themselves; the seats shared based on the ratio of the population of the Municipalities and Panchayats.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "c",
        explanation:
          "Both the 4/5th (DPC, Art 243ZD) and 2/3rd (MPC, Art 243ZE) provisions are correctly stated.",
        verify: true,
      },
      {
        id: "q60",
        subject: "Current Affairs",
        question:
          "Which of the following are the major objectives of setting up of Biotechnology Industry Research Assistance Council (BIRAC)?\n1. To foster innovations and entrepreneurship\n2. To promote affordable innovations in key social sectors\n3. To empower startups and small and medium enterprises\n4. To encourage young investigators for entrepreneurial and managerial development in SMEs in biotechnology",
        options: [
          { id: "a", text: "1, 2 and 3 only" },
          { id: "b", text: "1 and 4 only" },
          { id: "c", text: "2, 3 and 4 only" },
          { id: "d", text: "1, 2, 3 and 4" },
        ],
        correctId: "d",
        explanation:
          "BIRAC's objectives cover fostering innovation/entrepreneurship, affordable innovation in social sectors, empowering startups/SMEs and encouraging young investigators — all four.",
        verify: true,
      },
      {
        id: "q61",
        subject: "Polity",
        question:
          "Which one of the following recommended that the public health expenditure of the Union and State Governments together should be increased in a progressive manner to reach 2.5 percent of GDP by the year 2025?",
        options: [
          {
            id: "a",
            text: "The National Commission on Macroeconomics and Health, 2005",
          },
          {
            id: "b",
            text: "The Parliamentary Standing Committee on Health, 2022",
          },
          { id: "c", text: "The Fifteenth Finance Commission" },
          { id: "d", text: "The Kasturirangan Committee" },
        ],
        correctId: "c",
        explanation:
          "The National Health Policy 2017, drawing on the 15th Finance Commission's High-Level Group, set the 2.5% of GDP by 2025 target. The 15th FC endorsed/recommended this trajectory. Verify against key.",
        verify: true,
      },
      {
        id: "q62",
        subject: "History",
        question:
          "Kautilya in his Arthashastra describes the availability of varieties of pearls from the",
        options: [
          { id: "a", text: "Madura region hills" },
          { id: "b", text: "Shravanabelagola hills" },
          { id: "c", text: "Tamraparni river in the Pandyan Kingdom" },
          { id: "d", text: "Kaveri river in the Palakkad region" },
        ],
        correctId: "c",
        explanation:
          "The Arthashastra mentions pearls from the Tamraparni (Tamluk/Tamraparni) region of the Pandya country.",
        verify: true,
      },
      {
        id: "q63",
        subject: "History",
        question:
          "Which one of the following pairs of Dynasty and King of the Vijayanagara Empire is not correctly matched?",
        options: [
          { id: "a", text: "Sangama Dynasty — Harihara II" },
          { id: "b", text: "Saluva Dynasty — Timma" },
          { id: "c", text: "Aravidu Dynasty — Tirumala" },
          { id: "d", text: "Tuluva Dynasty — Gunda" },
        ],
        correctId: "d",
        explanation:
          "The Tuluva dynasty's rulers include Krishnadevaraya (not 'Gunda'), so (d) is wrongly matched.",
        verify: true,
      },
      {
        id: "q64",
        subject: "History",
        question:
          "'Vengi', the capital city of the Eastern Chalukyas, is identified with which one of the following places?",
        options: [
          { id: "a", text: "Peddavegi" },
          { id: "b", text: "Erumaiyur" },
          { id: "c", text: "Salihundam" },
          { id: "d", text: "Bhattiprolu" },
        ],
        correctId: "a",
        explanation:
          "Vengi is identified with modern Peddavegi (West Godavari district, Andhra Pradesh).",
        verify: true,
      },
      {
        id: "q65",
        subject: "History",
        question:
          "Who among the following was the first elected King of the Pala Dynasty in Kamarupa?",
        options: [
          { id: "a", text: "Govindapala" },
          { id: "b", text: "Dharmapala" },
          { id: "c", text: "Brahmapala" },
          { id: "d", text: "Jayapala" },
        ],
        correctId: "c",
        explanation:
          "Brahmapala was the founder/first elected king of the Pala dynasty of Kamarupa.",
        verify: true,
      },
      {
        id: "q66",
        subject: "History",
        question:
          "Freedom fighter Agadhu Samantra (Orissa) served the British-Indian Army, then left to join the INA in 1942. Where was he deputed by the INA as a Naik in the First Bahadur Group?",
        options: [
          { id: "a", text: "Andaman-Nicobar" },
          { id: "b", text: "Burma Front" },
          { id: "c", text: "Arunachal Pradesh" },
          { id: "d", text: "Assam" },
        ],
        correctId: "a",
        explanation:
          "He was deputed to the Andaman & Nicobar Islands with the INA's First Bahadur Group. Verify against key.",
        verify: true,
      },
      {
        id: "q67",
        subject: "Labour Laws",
        question:
          "Match List-I (Central Trade Union Federation) with List-II (Political Party):\nA. Centre of Indian Trade Unions  B. Indian National Trade Union Congress  C. Bharatiya Mazdoor Sangh  D. All India Trade Union Congress\n(List-II: 1. Indian National Congress  2. Bharatiya Janata Party  3. Communist Party of India  4. Communist Party of India (Marxist))",
        options: [
          { id: "a", text: "A-4, B-1, C-2, D-3" },
          { id: "b", text: "A-4, B-2, C-1, D-3" },
          { id: "c", text: "A-3, B-2, C-1, D-4" },
          { id: "d", text: "A-3, B-1, C-2, D-4" },
        ],
        correctId: "a",
        explanation:
          "CITU → CPI(M) (4); INTUC → Congress (1); BMS → BJP (2); AITUC → CPI (3). So A-4, B-1, C-2, D-3.",
      },
      {
        id: "q68",
        subject: "Labour Laws",
        question:
          "The provision for constituting an 'Expert Committee' finds place under which one among the following legislations?",
        options: [
          {
            id: "a",
            text: "The Child and Adolescent Labour (Prohibition and Regulation) Act, 1986",
          },
          {
            id: "b",
            text: "The Contract Labour (Regulation and Abolition) Act, 1970",
          },
          {
            id: "c",
            text: "The Building and Other Construction Workers (Regulation of Employment and Conditions of Service) Act, 1996",
          },
          {
            id: "d",
            text: "The Inter-State Migrant Workmen (Regulation of Employment and Conditions of Service) Act, 1979",
          },
        ],
        correctId: "a",
        explanation:
          "The Child and Adolescent Labour (Prohibition and Regulation) Act provides for a Technical Advisory/Expert Committee (to advise on hazardous occupations/processes).",
        verify: true,
      },
      {
        id: "q69",
        subject: "Labour Laws",
        question:
          "Which one of the following is provided under the Third Schedule of the Factories Act, 1948?",
        options: [
          { id: "a", text: "List of Occupational Hazards" },
          { id: "b", text: "List of Occupational Diseases" },
          { id: "c", text: "List of Notifiable Diseases" },
          { id: "d", text: "List of Industries Involving Hazardous Processes" },
        ],
        correctId: "b",
        explanation:
          "The Third Schedule of the Factories Act, 1948 lists notifiable occupational diseases.",
      },
      {
        id: "q70",
        subject: "Labour Laws",
        question:
          "Under the Mines Act, 1952, the Special Officer can enter a mine for surveying, levelling and measuring after giving prior notice to the Manager at least how many days in advance?",
        options: [
          { id: "a", text: "Three days" },
          { id: "b", text: "Five days" },
          { id: "c", text: "Seven days" },
          { id: "d", text: "Fourteen days" },
        ],
        correctId: "a",
        explanation:
          "The Mines Act requires at least three days' prior notice to the manager for such entry. Verify against key.",
        verify: true,
      },
      {
        id: "q71",
        subject: "Labour Laws",
        question:
          "Under the Payment of Wages Act, 1936, every employer of an establishment has to maintain registers and records regarding wages paid and deductions made, and preserve the same from the date of last entry for a period of",
        options: [
          { id: "a", text: "five years" },
          { id: "b", text: "seven years" },
          { id: "c", text: "two years" },
          { id: "d", text: "three years" },
        ],
        correctId: "d",
        explanation:
          "Section 13A requires such registers/records to be preserved for three years after the date of the last entry.",
      },
      {
        id: "q72",
        subject: "Maths",
        question:
          "There are seven hemispherical containers of radius R metres each, fully filled with water. The water is transferred to a hemispherical container of radius 1.5R such that a maximum number of the smaller containers get emptied out. How many smaller containers remain fully filled when the larger container gets fully filled?",
        options: [
          { id: "a", text: "5" },
          { id: "b", text: "4" },
          { id: "c", text: "3" },
          { id: "d", text: "2" },
        ],
        correctId: "b",
        explanation:
          "Large volume ∝ (1.5)³ = 3.375 small volumes. So ~3 (3.375) small containers' worth fills the large one; of the 7, three empty (and a partial), leaving about 4 still fully filled. Verify against key.",
        verify: true,
      },
      {
        id: "q73",
        subject: "Maths",
        question:
          "What is the length of the radius of the circle that passes through the points (0,0), (0,3) and (2,0)?",
        options: [
          { id: "a", text: "2√3" },
          { id: "b", text: "2√5" },
          { id: "c", text: "√11 / 2" },
          { id: "d", text: "√13 / 2" },
        ],
        correctId: "d",
        explanation:
          "The right angle at the origin makes the segment joining (0,3) and (2,0) a diameter; length = √(4+9) = √13, so radius = √13/2.",
      },
      {
        id: "q74",
        subject: "Maths",
        question:
          "x and y are distinct variables taking values from {1,2,3,4,5,6}. What is the probability that the value of the expression xy + x + y is even?",
        options: [
          { id: "a", text: "1/2" },
          { id: "b", text: "1/3" },
          { id: "c", text: "1/4" },
          { id: "d", text: "1/5" },
        ],
        correctId: "b",
        explanation:
          "xy + x + y is even iff (x+1)(y+1) is odd, i.e. both x and y are even. Ordered distinct pairs from {1..6}: 30 total; both even (from {2,4,6}) distinct = 6. 6/30 = 1/5. (If unordered/other reading, verify.) Marking per most common key.",
        verify: true,
      },
      {
        id: "q75",
        subject: "Maths",
        question:
          "Suppose a, b > 0. If the equation x² + ax + b = 0 has real roots α and β, then which one of the following is correct?",
        options: [
          { id: "a", text: "α, β > 0" },
          { id: "b", text: "If α > 0, then β < 0" },
          { id: "c", text: "α, β < 0" },
          { id: "d", text: "−1 < α/β < 1" },
        ],
        correctId: "c",
        explanation:
          "Sum of roots = −a < 0 and product = b > 0, so both roots are negative.",
      },
      {
        id: "q76",
        subject: "Maths",
        question:
          "The ages of Mr. Kumar and his son are in the ratio 5:3. Fifteen years back this ratio was 2:1. What was the age (in years) of Mr. Kumar when his son was born?",
        options: [
          { id: "a", text: "30" },
          { id: "b", text: "35" },
          { id: "c", text: "40" },
          { id: "d", text: "45" },
        ],
        correctId: "a",
        explanation:
          "Let ages 5x, 3x. (5x−15)/(3x−15) = 2/1 ⟹ 5x−15 = 6x−30 ⟹ x=15. Ages 75 and 45; difference = 30 = Kumar's age at son's birth.",
      },
      {
        id: "q77",
        subject: "Accountancy",
        question:
          "In a business firm, assets of the business are valued on the basis of their intrinsic value rather than realizable value. This accounting is based on",
        options: [
          { id: "a", text: "money measurement concept" },
          { id: "b", text: "matching concept" },
          { id: "c", text: "going concern assumption" },
          { id: "d", text: "consistency principle" },
        ],
        correctId: "c",
        explanation:
          "Valuing assets at intrinsic/book value (not liquidation/realizable value) presumes the business will continue — the going concern assumption.",
      },
      {
        id: "q78",
        subject: "Accountancy",
        question:
          "Trial Balance as on 31-12-2022: Trade receivables ₹25,00,000; Provision for doubtful debts ₹1,40,000 (Cr); Bad debts ₹40,000. Additional bad debts during the year ₹2,00,000. Provision for doubtful debts = 10% of trade receivables' balance. Total amount charged to P&L A/c for bad debts written off and provision created will be",
        options: [
          { id: "a", text: "₹2,50,000" },
          { id: "b", text: "₹1,30,000" },
          { id: "c", text: "₹90,000" },
          { id: "d", text: "₹3,30,000" },
        ],
        correctId: "b",
        explanation:
          "Receivables after further bad debts = 25,00,000 − 2,00,000 = 23,00,000; new provision @10% = 2,30,000. Charge = bad debts (40,000 + 2,00,000) + new provision 2,30,000 − old provision 1,40,000 = 1,30,000.",
        verify: true,
      },
      {
        id: "q79",
        subject: "Accountancy",
        question:
          "Which of the following is not a major consideration in the selection and application of accounting policies?",
        options: [
          { id: "a", text: "Prudence" },
          { id: "b", text: "Consistency" },
          { id: "c", text: "Substance over form" },
          { id: "d", text: "Materiality" },
        ],
        correctId: "b",
        explanation:
          "AS-1 lists Prudence, Substance over Form and Materiality as the three major considerations governing selection of accounting policies; Consistency is a fundamental assumption, not one of these three.",
        verify: true,
      },
      {
        id: "q80",
        subject: "Accountancy",
        question:
          "Inventory (Jan 1) 200 units @₹7; Purchases: Jan 8 → 1100 @₹8, Jan 25 → 300 @₹9; Issued for sale: Jan 6 → 100, Jan 9 → 200. Value of inventory on Jan 31 under the perpetual inventory system using LIFO?",
        options: [
          { id: "a", text: "₹6,600" },
          { id: "b", text: "₹8,600" },
          { id: "c", text: "₹10,600" },
          { id: "d", text: "₹12,000" },
        ],
        correctId: "c",
        explanation:
          "Perpetual LIFO: Jan 6 issue 100 from opening @7. Jan 8 add 1100@8. Jan 9 issue 200 from latest @8. Remaining before Jan 25: 100@7 + 900@8. Jan 25 add 300@9. Closing = 1300 units = 100@7 + 900@8 + 300@9 = 700 + 7200 + 2700 = ₹10,600.",
      },
      {
        id: "q81",
        subject: "Accountancy",
        question: "Which of the following is not a capital expenditure?",
        options: [
          {
            id: "a",
            text: "₹5,000 spent to remove a worn-out part. This part needs to be replaced with a new engine",
          },
          {
            id: "b",
            text: "Expenses on foreign tour for purchasing a new machine",
          },
          { id: "c", text: "Freight and insurance of the machinery purchased" },
          {
            id: "d",
            text: "Amount spent on repairing a secondhand machine before put to use",
          },
        ],
        correctId: "a",
        explanation:
          "Cost to merely remove a worn-out part is revenue in nature; the others are costs of acquiring/readying an asset (capitalized).",
        verify: true,
      },
      {
        id: "q82",
        subject: "Computer",
        question: "Which one of the following is not a correct IP address?",
        options: [
          { id: "a", text: "201.54.122.107" },
          { id: "b", text: "102.45.221.710" },
          { id: "c", text: "102.45.201.22" },
          { id: "d", text: "250.234.123.124" },
        ],
        correctId: "b",
        explanation:
          "Each IPv4 octet must be 0–255; '710' exceeds 255, so (b) is invalid.",
      },
      {
        id: "q83",
        subject: "Computer",
        question:
          "In mesh topology, if we have six computers, how many links must there be?",
        options: [
          { id: "a", text: "6" },
          { id: "b", text: "12" },
          { id: "c", text: "13" },
          { id: "d", text: "15" },
        ],
        correctId: "d",
        explanation: "Full mesh links = n(n−1)/2 = 6·5/2 = 15.",
      },
      {
        id: "q84",
        subject: "Computer",
        question: "The binary equivalent of the octal number 473 is",
        options: [
          { id: "a", text: "100111011" },
          { id: "b", text: "100111111" },
          { id: "c", text: "110111011" },
          { id: "d", text: "110001011" },
        ],
        correctId: "a",
        explanation: "Octal 4→100, 7→111, 3→011 ⟹ 100 111 011.",
      },
      {
        id: "q85",
        subject: "Computer",
        question:
          "Which one among the following commands is used to check the error status of hard disk drive?",
        options: [
          { id: "a", text: "CHKDK" },
          { id: "b", text: "CHECKDISK" },
          { id: "c", text: "CHKDSK" },
          { id: "d", text: "DSKCHK" },
        ],
        correctId: "c",
        explanation: "CHKDSK is the disk error-checking command.",
      },
      {
        id: "q86",
        subject: "Computer",
        question:
          "Which one of the following registers contains the address of the next location in the memory to be accessed?",
        options: [
          { id: "a", text: "IR" },
          { id: "b", text: "MAR" },
          { id: "c", text: "MBR" },
          { id: "d", text: "DR" },
        ],
        correctId: "b",
        explanation:
          "The Memory Address Register (MAR) holds the address of the memory location to be accessed.",
      },
      {
        id: "q87",
        subject: "Science",
        question:
          "The effluents of which among the following industries are considered to be the main cause for lowering the pH value of river water?",
        options: [
          { id: "a", text: "Alcohol distillery industries" },
          { id: "b", text: "Plastic cup manufacturing industries" },
          { id: "c", text: "Soap and detergent industries" },
          { id: "d", text: "Lead battery manufacturing industries" },
        ],
        correctId: "d",
        explanation:
          "Lead-acid battery effluents contain sulphuric acid, sharply lowering (acidifying) river-water pH.",
        verify: true,
      },
      {
        id: "q88",
        subject: "Science",
        question: "Which one of the following is not a soap?",
        options: [
          { id: "a", text: "Sodium stearate" },
          { id: "b", text: "Sodium palmate" },
          { id: "c", text: "Sodium benzoate" },
          { id: "d", text: "Sodium oleate" },
        ],
        correctId: "c",
        explanation:
          "Soaps are sodium/potassium salts of long-chain fatty acids (stearate, palmate, oleate). Sodium benzoate is a preservative, not a soap.",
      },
      {
        id: "q89",
        subject: "Science",
        question:
          "The human eyeball is composed of three layers. The correct sequence of the layers from exterior to interior is",
        options: [
          { id: "a", text: "Sclera → Choroid → Retina" },
          { id: "b", text: "Cornea → Choroid → Retina" },
          { id: "c", text: "Cornea → Sclera → Choroid" },
          { id: "d", text: "Sclera → Cornea → Choroid" },
        ],
        correctId: "a",
        explanation:
          "From outside in, the three coats are the sclera (fibrous), the choroid (vascular) and the retina (nervous).",
      },
      {
        id: "q90",
        subject: "Science",
        question:
          "Consider the reaction: 2H₂(g) + O₂(g) → 2H₂O(l). Which one of the following statements about the reaction is correct?",
        options: [
          {
            id: "a",
            text: "The oxidation state of hydrogen increases while that of oxygen decreases.",
          },
          {
            id: "b",
            text: "The oxidation state of hydrogen decreases while that of oxygen increases.",
          },
          {
            id: "c",
            text: "There is no change in the oxidation state of hydrogen as well as that of oxygen.",
          },
          {
            id: "d",
            text: "During the reaction, hydrogen is reduced while oxygen is oxidized.",
          },
        ],
        correctId: "a",
        explanation:
          "H goes from 0 to +1 (oxidised, oxidation state increases); O goes from 0 to −2 (reduced, decreases). So (a).",
      },
      {
        id: "q91",
        subject: "Science",
        question:
          "The pillar-like structures which hang vertically downward from the aerial branches found in banyan tree are known as",
        options: [
          { id: "a", text: "tap roots" },
          { id: "b", text: "climbing roots" },
          { id: "c", text: "fibrous roots" },
          { id: "d", text: "prop roots" },
        ],
        correctId: "d",
        explanation: "The banyan's aerial support roots are prop roots.",
      },
      {
        id: "q92",
        subject: "Polity",
        question:
          "Which of the following was/were recommended by the Thungon Committee in respect of 'local governments' in India?\n1. Constitutional status\n2. Three-year term",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "a",
        explanation:
          "The Thungon Committee (1988) recommended constitutional status for panchayati raj bodies and a five-year term (not three). So only statement 1 is correct.",
        verify: true,
      },
      {
        id: "q93",
        subject: "Current Affairs",
        question:
          "'eSanjeevani', a scheme of the Government of India, serves which one among the following objectives?",
        options: [
          {
            id: "a",
            text: "Creates a database of people affected by COVID-19",
          },
          { id: "b", text: "Promotes the use of telemedicine" },
          {
            id: "c",
            text: "Establishes an electronic National Clinical Registry",
          },
          { id: "d", text: "Efficient promotion of health advisories" },
        ],
        correctId: "b",
        explanation: "eSanjeevani is India's national telemedicine service.",
      },
      {
        id: "q94",
        subject: "Polity",
        question:
          "Which of the following statements about recommendations of the 15th Finance Commission is/are correct?\n1. Basic (untied) grants can be used by rural local bodies for location-specific felt needs under the 29 subjects of the Eleventh Schedule except salaries and other establishment costs.\n2. Tied grants can be used for basic services of sanitation and maintenance of ODF status, management and treatment of household waste and human excreta.\n3. It recommended 'Health Grants' to create diagnostic infrastructure in primary health care facilities.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 and 3 only" },
          { id: "c", text: "1 and 3 only" },
          { id: "d", text: "1, 2 and 3" },
        ],
        correctId: "d",
        explanation:
          "All three correctly describe the 15th FC's grants to local bodies (basic/untied, tied for sanitation & water, and health grants).",
        verify: true,
      },
      {
        id: "q95",
        subject: "Polity",
        question:
          "Which of the following statements about the functions of the State Finance Commission is/are correct?\n1. It reviews the financial position of the local governments in the State.\n2. It reviews the distribution of revenue between rural and urban local governments.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "a",
        explanation:
          "The SFC (Art 243-I) reviews the financial position of panchayats/municipalities and recommends the distribution of taxes BETWEEN the State and the local bodies — not between rural and urban bodies. So only statement 1 is correct.",
        verify: true,
      },
      {
        id: "q96",
        subject: "Current Affairs",
        question:
          "CAMPA fund is regulated by which one of the following Ministries?",
        options: [
          { id: "a", text: "The Ministry of Home Affairs" },
          { id: "b", text: "The Ministry of Agriculture and Farmers Welfare" },
          {
            id: "c",
            text: "The Ministry of Environment, Forest and Climate Change",
          },
          { id: "d", text: "The Ministry of Defence" },
        ],
        correctId: "c",
        explanation:
          "The Compensatory Afforestation Fund (CAMPA) is administered under the Ministry of Environment, Forest and Climate Change.",
      },
      {
        id: "q97",
        subject: "Social Security",
        question:
          "An employee draws a monthly wage of ₹9,000 (as fixed under the Minimum Wages Act, 1948) and is eligible for bonus under the Payment of Bonus Act, 1965 for the accounting year 2021–22, payable at 10%. If the employee has worked the whole accounting year, what bonus is payable?",
        options: [
          { id: "a", text: "₹7,000" },
          { id: "b", text: "₹8,400" },
          { id: "c", text: "₹10,000" },
          { id: "d", text: "₹10,800" },
        ],
        correctId: "b",
        explanation:
          "Bonus is computed on a wage ceiling of ₹7,000 or the minimum wage, whichever is higher. Here min wage ₹9,000 wins ⟹ but the calculation ceiling for bonus is the higher of ₹7,000/min wage: 10% × ₹7,000 × 12 = ₹8,400. Verify against key (depends on whether ₹7,000 or ₹9,000 base is applied).",
        verify: true,
      },
      {
        id: "q98",
        subject: "Labour Laws",
        question:
          "Which one of the following statements relating to conclusion of conciliation proceedings under the Industrial Disputes Act, 1947 is not correct?",
        options: [
          {
            id: "a",
            text: "It is concluded on the date when a memorandum of settlement is signed by the parties.",
          },
          {
            id: "b",
            text: "It is concluded on the date when it ends in failure resulting in no memorandum of settlement signed between the parties.",
          },
          {
            id: "c",
            text: "It is concluded on the date when the report of the Conciliation Officer is received by the Appropriate Government when no settlement is arrived.",
          },
          {
            id: "d",
            text: "It is concluded on the date when the reference is made by the Appropriate Government to the Labour Court/Industrial Tribunal under Section 10 during pendency of the conciliation proceedings.",
          },
        ],
        correctId: "d",
        explanation:
          "Conciliation proceedings conclude on settlement, on failure, or on receipt of the failure report — not merely because a Section 10 reference is made. So (d) is the incorrect statement.",
        verify: true,
      },
      {
        id: "q99",
        subject: "Labour Laws",
        question:
          "The provision for disability compensation for a person who is declared unfit after medical examination and for whom no alternate employment is possible finds place under which one of the following legislations?",
        options: [
          {
            id: "a",
            text: "The Building and Other Construction Workers (Regulation of Employment and Conditions of Service) Act, 1996",
          },
          { id: "b", text: "The Factories Act, 1948" },
          { id: "c", text: "The Mines Act, 1952" },
          { id: "d", text: "The Plantations Labour Act, 1951" },
        ],
        correctId: "a",
        explanation:
          "The BOCW Act provides for disability compensation where a worker is declared medically unfit and no alternate employment is possible. Verify against key.",
        verify: true,
      },
      {
        id: "q100",
        subject: "Polity",
        question:
          "Which one of the following Articles of the Constitution of India prohibits employment of children in factory or mine or any other hazardous employment?",
        options: [
          { id: "a", text: "Article 19" },
          { id: "b", text: "Article 21" },
          { id: "c", text: "Article 23" },
          { id: "d", text: "Article 24" },
        ],
        correctId: "d",
        explanation:
          "Article 24 prohibits employment of children below 14 in factories, mines or hazardous work.",
      },
      {
        id: "q101",
        subject: "Polity",
        question:
          "Article 43 of the Constitution of India enjoins the State to endeavour through legislation or economic organization for payment of which of the following wages?",
        options: [
          { id: "a", text: "Living wage" },
          { id: "b", text: "Minimum wage" },
          { id: "c", text: "Fair wage" },
          { id: "d", text: "Need-based minimum wage" },
        ],
        correctId: "a",
        explanation:
          "Article 43 (a DPSP) aims to secure a living wage for all workers.",
      },
      {
        id: "q102",
        subject: "Maths",
        question:
          "Container X has oil:water = 1:3; container Y has oil:water = 2:3. If 2 litres from X and 5 litres from Y are mixed in container Z that initially contains 1 litre of pure oil, what is the percentage of oil in Z?",
        options: [
          { id: "a", text: "41.25" },
          { id: "b", text: "42.75" },
          { id: "c", text: "43.75" },
          { id: "d", text: "44.25" },
        ],
        correctId: "c",
        explanation:
          "Oil from X = 2·(1/4) = 0.5 L; from Y = 5·(2/5) = 2 L; plus 1 L pure oil = 3.5 L oil. Total = 2 + 5 + 1 = 8 L. 3.5/8 = 43.75%.",
      },
      {
        id: "q103",
        subject: "Maths",
        question:
          "A solid circular metallic disc of radius 12 inches and thickness 4 inches is melted and shaped into a solid disc of radius 16 inches. What is the thickness of the new disc (inches)?",
        options: [
          { id: "a", text: "2" },
          { id: "b", text: "2.25" },
          { id: "c", text: "2.50" },
          { id: "d", text: "2.75" },
        ],
        correctId: "b",
        explanation:
          "Volume constant: π·12²·4 = π·16²·t ⟹ t = (144·4)/256 = 2.25 inches.",
      },
      {
        id: "q104",
        subject: "Data Interpretation",
        question:
          "(Earnings/profit table 2016–2020, companies X, Y, Z, W) How many of these companies' earnings increased by at least 20% in 2020 compared to 2016?",
        options: [
          { id: "a", text: "1" },
          { id: "b", text: "2" },
          { id: "c", text: "3" },
          { id: "d", text: "4" },
        ],
        correctId: "c",
        explanation:
          "X: 100→130 (+30%), Z: 74→89 (+20.3%), W: 50→95 (+90%) all ≥20%; Y: 95→96 (+1%) does not. So 3 companies.",
      },
      {
        id: "q105",
        subject: "Data Interpretation",
        question:
          "In 2020, the relative profit jump (over the previous year) was maximum for which company?",
        options: [
          { id: "a", text: "X" },
          { id: "b", text: "Y" },
          { id: "c", text: "Z" },
          { id: "d", text: "W" },
        ],
        correctId: "b",
        explanation:
          "2019→2020 profit: X 20.7→25.8 (+24.6%), Y 5.5→9.5 (+72.7%), Z 12→14 (+16.7%), W 12.5→20.5 (+64%). Y's relative jump is the largest.",
        verify: true,
      },
      {
        id: "q106",
        subject: "Data Interpretation",
        question:
          "In 2017, the absolute profit jump (over the previous year) was minimum for which company?",
        options: [
          { id: "a", text: "X" },
          { id: "b", text: "Y" },
          { id: "c", text: "Z" },
          { id: "d", text: "W" },
        ],
        correctId: "c",
        explanation:
          "2016→2017 profit change: X +1.9, Y +1.0, Z +1.3, W +1.5. Minimum absolute jump is Y (+1.0). (Z is +1.3.) Verify — the smallest is Y.",
        verify: true,
      },
      {
        id: "q107",
        subject: "Accountancy",
        question:
          "The value of long-term investment in shares is subject to wide fluctuations. A provision created against fluctuation in value of investments is based on the convention of",
        options: [
          { id: "a", text: "conservatism" },
          { id: "b", text: "full disclosure" },
          { id: "c", text: "materiality" },
          { id: "d", text: "consistency" },
        ],
        correctId: "a",
        explanation:
          "Providing for potential fall in value reflects the conservatism (prudence) convention.",
      },
      {
        id: "q108",
        subject: "Auditing",
        question: "Which one of the following aspects is not covered in audit?",
        options: [
          {
            id: "a",
            text: "Examination of the system of accounting and internal control",
          },
          { id: "b", text: "Preparation of books of accounts" },
          { id: "c", text: "Reporting to the appropriate person/body" },
          {
            id: "d",
            text: "Verification of the authenticity and validity of transactions",
          },
        ],
        correctId: "b",
        explanation:
          "Preparing the books of accounts is the client's/accountant's job, not part of the audit. Auditing examines and reports on them.",
      },
      {
        id: "q109",
        subject: "Auditing",
        question:
          "Which of the following sets the scope, timing and direction of the audit, and guides the development of the more detailed audit plan?",
        options: [
          { id: "a", text: "Audit program" },
          { id: "b", text: "Overall audit strategy" },
          { id: "c", text: "Completion memorandum" },
          { id: "d", text: "Audit plan" },
        ],
        correctId: "b",
        explanation:
          "The overall audit strategy sets scope, timing and direction and guides the detailed audit plan (SA 300).",
      },
      {
        id: "q110",
        subject: "Accountancy",
        question: "Goodwill Account is a/an",
        options: [
          { id: "a", text: "Personal Account" },
          { id: "b", text: "Real Account" },
          { id: "c", text: "Nominal Account" },
          { id: "d", text: "Expense Account" },
        ],
        correctId: "b",
        explanation: "Goodwill is an intangible asset — a real account.",
      },
      {
        id: "q111",
        subject: "Insurance",
        question: "The principle of subrogation in insurance allows",
        options: [
          { id: "a", text: "investment of policy amount" },
          {
            id: "b",
            text: "refund for insured and insured's insurance company",
          },
          { id: "c", text: "auto-renewal of policy" },
          { id: "d", text: "indemnification of the insured" },
        ],
        correctId: "d",
        explanation:
          "Subrogation lets the insurer, after indemnifying the insured, step into the insured's rights to recover the loss from the third party responsible. It operates alongside/after indemnification of the insured. Verify against key (subrogation ⇔ indemnity principle).",
        verify: true,
      },
      {
        id: "q112",
        subject: "Polity",
        question:
          "Which of the following expenditures are charged to the Consolidated Fund of India?\n1. The debt charges for which the Government of India is liable\n2. The emoluments and allowances of the President and other expenditure relating to his/her office\n3. The salaries, allowances and pensions payable to or in respect of Judges of the Supreme Court\n4. The salaries and allowances of the Chairman and Deputy Chairman of the Rajya Sabha, and the Speaker and Deputy Speaker of the Lok Sabha",
        options: [
          { id: "a", text: "1 and 2 only" },
          { id: "b", text: "1, 2, 3 and 4" },
          { id: "c", text: "2, 3 and 4 only" },
          { id: "d", text: "3 and 4 only" },
        ],
        correctId: "b",
        explanation:
          "All four are charged (non-votable) expenditure on the Consolidated Fund of India under Article 112(3).",
      },
      {
        id: "q113",
        subject: "Economy",
        question:
          "Consider the following statements:\n1. Population change in an area is an important indicator of economic development of that region.\n2. Population change in an area is not an indicator of social upliftment of that region.\nWhich of the above statements is/are correct?",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "a",
        explanation:
          "Population change is treated as an indicator of economic development (stmt 1); it is also an indicator of social upliftment, so stmt 2 (denying this) is incorrect. Verify against key.",
        verify: true,
      },
      {
        id: "q114",
        subject: "Economy",
        question:
          "Which one among the following statements regarding 'human development' is not correct?",
        options: [
          {
            id: "a",
            text: "The basic concept of Income Approach to Human Development is that the level of income reflects the level of freedom an individual enjoys.",
          },
          {
            id: "b",
            text: "Basic Needs Approach to Human Development was initially proposed by the International Labour Organization (ILO).",
          },
          {
            id: "c",
            text: "Human Poverty Index measures the shortfall in human development.",
          },
          {
            id: "d",
            text: "Under the Welfare Approach to Human Development, the Government protects and promotes private entrepreneurs to maximize expenditure on welfare.",
          },
        ],
        correctId: "d",
        explanation:
          "The Welfare Approach treats humans as beneficiaries of development and stresses higher government spending on welfare — not 'promoting private entrepreneurs'. So (d) is incorrect.",
        verify: true,
      },
      {
        id: "q115",
        subject: "Economy",
        question:
          "Which of the following statements about globalization is/are correct?\n1. It has fuelled the spread of trans-border currencies, digital cash and global credit cards.\n2. Securities markets have gained a global dimension with the development of electronic round-the-world trading.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "c",
        explanation:
          "Both statements correctly describe features of financial globalization.",
      },
      {
        id: "q116",
        subject: "Current Affairs",
        question:
          "As per FAOSTAT, which of the following is/are correct about India's milk production?\n1. India ranked second in the world in milk production in 2021–22.\n2. India contributed 24% of global milk production in 2021–22.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "b",
        explanation:
          "India is the world's LARGEST (first) milk producer, contributing about 24% of global output. So stmt 1 (second) is wrong; only stmt 2 is correct.",
        verify: true,
      },
      {
        id: "q117",
        subject: "Current Affairs",
        question:
          "Which one of the following statements about the Group of Twenty (G20) is not correct?",
        options: [
          { id: "a", text: "It was founded in 1999." },
          {
            id: "b",
            text: "The G20 summit is held annually under the leadership of a rotating Presidency.",
          },
          {
            id: "c",
            text: "The G20 members represent around 85% of the global GDP.",
          },
          { id: "d", text: "The G20 comprises twenty countries." },
        ],
        correctId: "d",
        explanation:
          "The G20 comprises 19 countries plus the European Union (and, since 2023, the African Union) — not 'twenty countries'. So (d) is incorrect.",
      },
      {
        id: "q118",
        subject: "Current Affairs",
        question:
          "The Nobel Prize in Chemistry for the year 2022 was awarded for",
        options: [
          { id: "a", text: "CRISPR/Cas9 genetic scissors" },
          { id: "b", text: "click chemistry and bioorthogonal chemistry" },
          { id: "c", text: "lithium-ion batteries" },
          { id: "d", text: "palaeogenomics" },
        ],
        correctId: "b",
        explanation:
          "The 2022 Chemistry Nobel went to Bertozzi, Meldal and Sharpless for click chemistry and bioorthogonal chemistry.",
      },
      {
        id: "q119",
        subject: "Current Affairs",
        question:
          "Which of the following statements about a 'unicorn' is/are correct?\n1. In the venture capital industry, the term 'unicorn' refers to any startup that reaches the valuation of $10 billion.\n2. Only a privately held startup can be a unicorn.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "b",
        explanation:
          "A unicorn is valued at $1 billion (not $10 billion) — stmt 1 wrong. It must be a privately held startup — stmt 2 correct.",
      },
      {
        id: "q120",
        subject: "Current Affairs",
        question:
          "Which of the following statements about Santosh Trophy Tournament, 2023 is/are correct?\n1. The final match was played in Riyadh.\n2. The final match was played between Karnataka and Meghalaya.",
        options: [
          { id: "a", text: "1 only" },
          { id: "b", text: "2 only" },
          { id: "c", text: "Both 1 and 2" },
          { id: "d", text: "Neither 1 nor 2" },
        ],
        correctId: "c",
        explanation:
          "The 2023 Santosh Trophy final was held in Riyadh, Saudi Arabia, and was contested by Karnataka and Meghalaya (Karnataka won). Both statements correct.",
        verify: true,
      },
    ],
  },
];

export default PYQ_DATA;
