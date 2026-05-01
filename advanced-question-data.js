// Advanced exam-style questions inspired by the long error-correction pattern in eng.pdf.
// Kept separate from the existing 900-question bank so the working base remains intact.
globalThis.ADVANCED_QUESTION_DATA = [
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "Although the state government has announced several welfare schemes for small farmers",
      "the implementation of these policies remain slow in districts",
      "where poor digital access and shortage of trained staff",
      "continue to delay the delivery of benefits"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "B",
    explanation: "The subject is implementation, which is singular, so the verb must be remains.",
    correctedSentence: "Although the state government has announced several welfare schemes for small farmers, the implementation of these policies remains slow in districts where poor digital access and shortage of trained staff continue to delay the delivery of benefits.",
    ruleInsight: {
      rule: "A verb must agree with the real subject, not with the nearest plural noun.",
      why: "The real subject of part B is implementation. The phrase of these policies only describes implementation; policies is not the subject. Since implementation is singular, the verb must be remains, not remain.",
      correctPart: "the implementation of these policies remains slow in districts",
      example: "Example: The quality of these reports is poor. Here quality is singular, so the verb is is, even though reports is plural."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The committee, which was formed to review irregularities in online recruitment",
      "has asked the agency to submit a detailed report",
      "and explain why several candidates were not allowed",
      "to appear in the examination despite having valid admit cards"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "E",
    explanation: "The sentence is grammatically correct.",
    correctedSentence: "The committee, which was formed to review irregularities in online recruitment, has asked the agency to submit a detailed report and explain why several candidates were not allowed to appear in the examination despite having valid admit cards.",
    ruleInsight: {
      rule: "Choose No error when every marked part follows agreement, tense, pronoun, and preposition rules.",
      why: "Committee is treated as one body here, so has asked is correct. Which correctly refers to committee. To submit and explain are parallel infinitive/complement forms after has asked the agency.",
      correctPart: "No correction needed",
      example: "Example: The panel has asked the bank to review the file and explain the delay."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "If the municipal corporation will fail to repair the drainage system before monsoon",
      "several low-lying areas may again face flooding",
      "because the temporary pumps installed last year",
      "cannot handle continuous rainfall for more than a few hours"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "A",
    explanation: "Use present simple in the if-clause for a real future condition.",
    correctedSentence: "If the municipal corporation fails to repair the drainage system before monsoon, several low-lying areas may again face flooding because the temporary pumps installed last year cannot handle continuous rainfall for more than a few hours.",
    ruleInsight: {
      rule: "In a first conditional sentence, the if-clause takes present simple, not will.",
      why: "The sentence talks about a real future possibility. English puts the future result in the main clause with may/will, but the if-clause uses present simple: if it fails, not if it will fail.",
      correctPart: "If the municipal corporation fails to repair the drainage system before monsoon",
      example: "Example: If the bank approves the loan, the project will start next month."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The officer who prepared the inspection note",
      "was accused of hiding important documents",
      "which could have helped the auditors understand",
      "why the accounts had been altered repeatedly"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "E",
    explanation: "The sentence is correct.",
    correctedSentence: "The officer who prepared the inspection note was accused of hiding important documents which could have helped the auditors understand why the accounts had been altered repeatedly.",
    ruleInsight: {
      rule: "Relative pronouns must match their antecedent and verb tenses must preserve the timeline.",
      why: "Who correctly refers to the officer, and which correctly refers to documents. Had been altered is correct because the alteration happened before the later act of understanding in the past context.",
      correctPart: "No correction needed",
      example: "Example: The manager who signed the file found documents which had been changed earlier."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "Many applicants complained that the portal remained unavailable for hours",
      "but the officials insisted that neither the server nor the network",
      "were responsible for the delay",
      "which affected thousands of candidates across rural centres"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "C",
    explanation: "With neither...nor, the verb agrees with the nearer subject network, which is singular.",
    correctedSentence: "Many applicants complained that the portal remained unavailable for hours, but the officials insisted that neither the server nor the network was responsible for the delay which affected thousands of candidates across rural centres.",
    ruleInsight: {
      rule: "With neither...nor, the verb usually agrees with the subject nearer to it.",
      why: "The nearer subject before the verb is network, and network is singular. Therefore the verb must be was, not were.",
      correctPart: "was responsible for the delay",
      example: "Example: Neither the teachers nor the principal was present. But: Neither the principal nor the teachers were present."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The report suggested that the number of cyber fraud complaints",
      "have increased sharply in smaller towns",
      "where first-time users often share sensitive information",
      "without verifying the identity of the caller"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "B",
    explanation: "The number of takes a singular verb.",
    correctedSentence: "The report suggested that the number of cyber fraud complaints has increased sharply in smaller towns where first-time users often share sensitive information without verifying the identity of the caller.",
    ruleInsight: {
      rule: "The number of refers to one total count and takes a singular verb.",
      why: "Complaints is plural, but it sits inside the of-phrase. The real subject is number, which is singular, so use has increased.",
      correctPart: "has increased sharply in smaller towns",
      example: "Example: The number of vacancies is low. A number of vacancies are still open."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The bank has warned its customers not to disclose OTPs",
      "unless they do not receive a call from an authorised official",
      "because fraudsters often pretend to represent the grievance department",
      "and collect confidential details during stressful conversations"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "B",
    explanation: "Unless already means if not, so do not use another negative with it.",
    correctedSentence: "The bank has warned its customers not to disclose OTPs unless they receive a call from an authorised official, because fraudsters often pretend to represent the grievance department and collect confidential details during stressful conversations.",
    ruleInsight: {
      rule: "Unless means if not, so it should not normally be followed by another negative.",
      why: "Unless already carries negative meaning. Unless they do not receive creates a double negative and changes the intended sense. The correct form is unless they receive.",
      correctPart: "unless they receive a call from an authorised official",
      example: "Example: Unless you revise, you will forget the rule. Do not write: Unless you do not revise."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "After the new traffic rules were implemented in the city",
      "the police observed that fewer drivers were jumping signals",
      "but the number of accidents at unmanned crossings",
      "were still disturbingly high"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "D",
    explanation: "The number of accidents is singular as a total count.",
    correctedSentence: "After the new traffic rules were implemented in the city, the police observed that fewer drivers were jumping signals, but the number of accidents at unmanned crossings was still disturbingly high.",
    ruleInsight: {
      rule: "The number of takes a singular verb because it means one total count.",
      why: "Accidents is plural, but the subject is the number. Since the sentence talks about one figure/count, the verb should be was.",
      correctPart: "was still disturbingly high",
      example: "Example: The number of road accidents was high. A number of accidents were reported."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The journalist, whose article on public health funding was widely discussed",
      "claimed that the rural clinic had neither enough doctors",
      "nor adequate equipments to handle emergency cases",
      "during the peak of the outbreak"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "C",
    explanation: "Equipment is normally uncountable, so use equipment, not equipments.",
    correctedSentence: "The journalist, whose article on public health funding was widely discussed, claimed that the rural clinic had neither enough doctors nor adequate equipment to handle emergency cases during the peak of the outbreak.",
    ruleInsight: {
      rule: "Some nouns are uncountable in standard usage and do not take a plural -s.",
      why: "Equipment is treated as an uncountable noun. We can say pieces of equipment, but not equipments in standard exam English.",
      correctPart: "nor adequate equipment to handle emergency cases",
      example: "Example: The laboratory needs modern equipment. We bought three pieces of equipment."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The manager requested the trainees to complete the audit exercise",
      "as quickly as possible because the regional office",
      "had asked for the final report before Friday evening",
      "and no extension was likely to be granted"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "E",
    explanation: "The sentence is correct.",
    correctedSentence: "The manager requested the trainees to complete the audit exercise as quickly as possible because the regional office had asked for the final report before Friday evening and no extension was likely to be granted.",
    ruleInsight: {
      rule: "As + adverb/adjective + as is the correct structure for equality or degree.",
      why: "As quickly as possible is a correct expression. Had asked is also correct because it shows an earlier past action before the later request context.",
      correctPart: "No correction needed",
      example: "Example: Finish the work as carefully as possible."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The citizens demanded that the contractor should be blacklisted",
      "because the newly built bridge collapsed within months",
      "and the materials used in construction were found",
      "to be inferior than those promised in the agreement"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "D",
    explanation: "Inferior is followed by to, not than.",
    correctedSentence: "The citizens demanded that the contractor should be blacklisted because the newly built bridge collapsed within months and the materials used in construction were found to be inferior to those promised in the agreement.",
    ruleInsight: {
      rule: "Certain comparative adjectives take fixed prepositions; inferior is followed by to.",
      why: "Inferior already carries comparative meaning, but its standard construction is inferior to, not inferior than.",
      correctPart: "to be inferior to those promised in the agreement",
      example: "Example: This model is inferior to the previous one. Also: senior to, junior to, superior to."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "No sooner had the results been announced",
      "when several candidates started calling the helpline",
      "to ask whether the revised cut-off would apply",
      "to all categories or only to general merit seats"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "B",
    explanation: "No sooner is followed by than, not when.",
    correctedSentence: "No sooner had the results been announced than several candidates started calling the helpline to ask whether the revised cut-off would apply to all categories or only to general merit seats.",
    ruleInsight: {
      rule: "Use no sooner...than, not no sooner...when.",
      why: "No sooner begins a fixed comparative time construction. The second connector must be than.",
      correctPart: "than several candidates started calling the helpline",
      example: "Example: No sooner had I reached the station than the train departed."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The company is planning to launch a new mobile application",
      "that will allow customers to track complaints, upload documents",
      "and checking the status of refunds",
      "without visiting the branch repeatedly"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "C",
    explanation: "Parallel structure requires check, not checking.",
    correctedSentence: "The company is planning to launch a new mobile application that will allow customers to track complaints, upload documents and check the status of refunds without visiting the branch repeatedly.",
    ruleInsight: {
      rule: "Items in a list must be parallel in grammatical form.",
      why: "The app will allow customers to track, upload and check. Track and upload are base verbs, so the third verb should also be the base form check.",
      correctPart: "and check the status of refunds",
      example: "Example: The policy aims to reduce delays, improve transparency and protect customers."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "Despite repeated reminders from the accounts department",
      "each of the vendors have failed to submit invoices",
      "that contain the mandatory tax identification details",
      "required for releasing payments under the new system"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "B",
    explanation: "Each of takes a singular verb.",
    correctedSentence: "Despite repeated reminders from the accounts department, each of the vendors has failed to submit invoices that contain the mandatory tax identification details required for releasing payments under the new system.",
    ruleInsight: {
      rule: "Each of is singular and takes a singular verb.",
      why: "Vendors is plural because it names the set after of, but the real subject is each. Therefore use has failed, not have failed.",
      correctPart: "each of the vendors has failed to submit invoices",
      example: "Example: Each of the reports has a summary. Each of the officers is responsible."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The school principal advised the students",
      "to avoid depending only on shortcuts",
      "because conceptual understanding is more better",
      "than memorising formulas without knowing their use"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "C",
    explanation: "Do not use double comparative: more better is wrong.",
    correctedSentence: "The school principal advised the students to avoid depending only on shortcuts because conceptual understanding is better than memorising formulas without knowing their use.",
    ruleInsight: {
      rule: "Do not use double comparatives.",
      why: "Better is already the comparative form of good. Adding more before better repeats the comparative idea and makes the phrase incorrect.",
      correctPart: "because conceptual understanding is better",
      example: "Example: Use better, not more better; use more useful, not usefuler."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The research team concluded that the new medicine",
      "was effective in reducing symptoms among elderly patients",
      "but warned that further trials were necessary",
      "before it could be prescribed for a large population"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "E",
    explanation: "The sentence is correct.",
    correctedSentence: "The research team concluded that the new medicine was effective in reducing symptoms among elderly patients but warned that further trials were necessary before it could be prescribed for a large population.",
    ruleInsight: {
      rule: "Tense and passive structure must match the meaning and timeline.",
      why: "Was effective and were necessary are correct past-tense forms after concluded and warned. Could be prescribed is a correct passive modal construction.",
      correctPart: "No correction needed",
      example: "Example: The panel stated that more checks were necessary before the policy could be approved."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The director asked the new interns",
      "to not share confidential documents with outsiders",
      "until the legal team had reviewed the draft agreement",
      "and approved its release to the public"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "B",
    explanation: "The natural structure is not to share.",
    correctedSentence: "The director asked the new interns not to share confidential documents with outsiders until the legal team had reviewed the draft agreement and approved its release to the public.",
    ruleInsight: {
      rule: "In formal standard English, the negative infinitive is usually not to + verb.",
      why: "After asked the interns, the infinitive phrase should be not to share. To not share is sometimes heard, but exam grammar generally prefers not to share.",
      correctPart: "not to share confidential documents with outsiders",
      example: "Example: The teacher advised us not to waste time."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The village council could not decide whether to repair the old road",
      "or building a new bridge across the canal",
      "because both proposals required technical clearance",
      "from the district engineering department"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "B",
    explanation: "Parallel infinitive structure requires build, not building.",
    correctedSentence: "The village council could not decide whether to repair the old road or build a new bridge across the canal because both proposals required technical clearance from the district engineering department.",
    ruleInsight: {
      rule: "In a whether...or structure, the alternatives should be parallel.",
      why: "The first alternative is to repair. The second should match it as build, sharing the earlier to: whether to repair...or build. Building breaks the parallel structure.",
      correctPart: "or build a new bridge across the canal",
      example: "Example: We must decide whether to revise the plan or cancel the project."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "A large number of workers employed in the textile units",
      "has demanded safer working conditions",
      "after a fire in a nearby factory exposed serious violations",
      "of basic safety and ventilation norms"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "B",
    explanation: "A large number of takes a plural verb.",
    correctedSentence: "A large number of workers employed in the textile units have demanded safer working conditions after a fire in a nearby factory exposed serious violations of basic safety and ventilation norms.",
    ruleInsight: {
      rule: "A number of / a large number of means many and takes a plural verb.",
      why: "The subject idea is many workers, not one number. Therefore use have demanded, not has demanded.",
      correctPart: "have demanded safer working conditions",
      example: "Example: A number of employees have resigned. The number of employees has fallen."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The climate report, which was prepared by independent scientists",
      "warns that rising temperatures are likely to affect crop yields",
      "unless governments does not invest in water conservation",
      "and improve early-warning systems in vulnerable districts"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "C",
    explanation: "Unless already means if not, and governments is plural.",
    correctedSentence: "The climate report, which was prepared by independent scientists, warns that rising temperatures are likely to affect crop yields unless governments invest in water conservation and improve early-warning systems in vulnerable districts.",
    ruleInsight: {
      rule: "Unless means if not; do not add another negative after it. Also, plural subjects need plural verbs.",
      why: "Governments is plural, so does is wrong. More importantly, unless does not should be avoided because unless already carries negative meaning. The correct form is unless governments invest.",
      correctPart: "unless governments invest in water conservation",
      example: "Example: Unless schools improve facilities, students will suffer. Do not write: unless schools do not improve."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The official data released yesterday indicate",
      "that household savings have declined steadily",
      "because prices of essential goods have risen faster",
      "than wages in several informal sectors"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "E",
    explanation: "The sentence is correct in formal usage, where data may be treated as plural.",
    correctedSentence: "The official data released yesterday indicate that household savings have declined steadily because prices of essential goods have risen faster than wages in several informal sectors.",
    ruleInsight: {
      rule: "In formal usage, data can be treated as plural and take a plural verb.",
      why: "Indicate agrees with data in formal plural use. The present perfect forms have declined and have risen correctly connect past change with the present situation.",
      correctPart: "No correction needed",
      example: "Example: The data show a clear trend. In informal modern usage, data is is also common, but exams often prefer formal plural agreement."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The teacher explained that the answer was not only grammatically correct",
      "but also it was logically connected with the main argument",
      "which the passage developed through several examples",
      "from education, technology and public policy"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "B",
    explanation: "Not only...but also should keep parallel structure.",
    correctedSentence: "The teacher explained that the answer was not only grammatically correct but also logically connected with the main argument which the passage developed through several examples from education, technology and public policy.",
    ruleInsight: {
      rule: "Not only...but also should connect parallel grammatical elements.",
      why: "Grammatically correct is an adjective phrase. The second element should match it: logically connected. Adding it was breaks the parallel structure.",
      correctPart: "but also logically connected with the main argument",
      example: "Example: The policy is not only practical but also affordable."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "By the time the rescue team reached the village",
      "most of the families left their homes",
      "because the water level had crossed the danger mark",
      "and local volunteers had already warned them"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "B",
    explanation: "Use past perfect for the earlier action before reached.",
    correctedSentence: "By the time the rescue team reached the village, most of the families had left their homes because the water level had crossed the danger mark and local volunteers had already warned them.",
    ruleInsight: {
      rule: "Use past perfect for an action completed before another past action.",
      why: "The families left before the rescue team reached. Since left is the earlier past action, it should be had left.",
      correctPart: "most of the families had left their homes",
      example: "Example: By the time I arrived, the meeting had started."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The editorial argued that public institutions lose credibility",
      "when officials avoid answering difficult questions",
      "and prefer issuing vague statements",
      "than acknowledging genuine administrative failures"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "D",
    explanation: "Prefer takes to, not than.",
    correctedSentence: "The editorial argued that public institutions lose credibility when officials avoid answering difficult questions and prefer issuing vague statements to acknowledging genuine administrative failures.",
    ruleInsight: {
      rule: "Prefer is followed by to, not than.",
      why: "The standard structure is prefer X to Y. Here X is issuing vague statements and Y is acknowledging genuine failures.",
      correctPart: "to acknowledging genuine administrative failures",
      example: "Example: I prefer reading newspapers to watching noisy debates."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The officer said that he had visited the flood-hit area",
      "and spoken to several families who were waiting for compensation",
      "but he did not find any evidences",
      "to prove that relief material had been diverted"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "C",
    explanation: "Evidence is normally uncountable.",
    correctedSentence: "The officer said that he had visited the flood-hit area and spoken to several families who were waiting for compensation, but he did not find any evidence to prove that relief material had been diverted.",
    ruleInsight: {
      rule: "Evidence is normally uncountable and does not take plural -s.",
      why: "In standard English, we say evidence, not evidences, when referring to proof or information collectively.",
      correctPart: "but he did not find any evidence",
      example: "Example: The police found enough evidence. We can say pieces of evidence, but not evidences in ordinary exam usage."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The board has decided to postpone the interview",
      "because neither the chairman nor the external experts",
      "has received the revised list of shortlisted candidates",
      "from the recruitment agency"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "C",
    explanation: "With neither...nor, the verb agrees with the nearer plural subject experts.",
    correctedSentence: "The board has decided to postpone the interview because neither the chairman nor the external experts have received the revised list of shortlisted candidates from the recruitment agency.",
    ruleInsight: {
      rule: "With neither...nor, the verb agrees with the nearer subject.",
      why: "The nearer subject is external experts, which is plural. Therefore the verb should be have received, not has received.",
      correctPart: "have received the revised list of shortlisted candidates",
      example: "Example: Neither the manager nor the clerks have signed the register. Neither the clerks nor the manager has signed it."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The candidate who had cleared the preliminary examination",
      "was confident that he would perform well in the interview",
      "because he had been preparing for it",
      "since nearly six months"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "D",
    explanation: "Use for with a duration.",
    correctedSentence: "The candidate who had cleared the preliminary examination was confident that he would perform well in the interview because he had been preparing for it for nearly six months.",
    ruleInsight: {
      rule: "Use for with a duration and since with a starting point.",
      why: "Nearly six months is a duration, not a starting point. Therefore use for nearly six months.",
      correctPart: "for nearly six months",
      example: "Example: for three days, for ten years; since Monday, since 2020."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The minister's speech was received warmly by the audience",
      "because it addressed unemployment, inflation and rural distress",
      "in a manner that was both practical and sensitive",
      "to the concerns of ordinary citizens"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "E",
    explanation: "The sentence is correct.",
    correctedSentence: "The minister's speech was received warmly by the audience because it addressed unemployment, inflation and rural distress in a manner that was both practical and sensitive to the concerns of ordinary citizens.",
    ruleInsight: {
      rule: "A sentence is correct when agreement, tense, parallel listing, and adjective-preposition use are all acceptable.",
      why: "Addressed correctly takes the listed objects unemployment, inflation and rural distress. Both practical and sensitive is parallel. Sensitive to is the correct adjective-preposition combination.",
      correctPart: "No correction needed",
      example: "Example: The plan is both realistic and sensitive to local needs."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The students were advised to read the passage carefully",
      "because the answer to the main-theme question",
      "depended not on isolated sentences",
      "but the argument developed throughout the paragraph"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "D",
    explanation: "The parallel structure is not on...but on.",
    correctedSentence: "The students were advised to read the passage carefully because the answer to the main-theme question depended not on isolated sentences but on the argument developed throughout the paragraph.",
    ruleInsight: {
      rule: "In the structure not on X but on Y, the preposition should be repeated for parallel clarity.",
      why: "Depended takes on. Since the contrast is between two objects of the same preposition, both sides should carry the same structure: not on isolated sentences but on the argument.",
      correctPart: "but on the argument developed throughout the paragraph",
      example: "Example: Success depends not on luck but on consistent practice."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The finance department refused to release the payment",
      "until the contractor submitted bills that were properly signed",
      "and supported by documents which clearly showed",
      "that the work had been completed within the approved budget"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "E",
    explanation: "The sentence is correct.",
    correctedSentence: "The finance department refused to release the payment until the contractor submitted bills that were properly signed and supported by documents which clearly showed that the work had been completed within the approved budget.",
    ruleInsight: {
      rule: "Past perfect is correct for an action completed before another past reference point.",
      why: "Had been completed shows that the work was completed before the documents showed it or before the payment decision. That and which are also acceptable relative connectors here.",
      correctPart: "No correction needed",
      example: "Example: The file showed that the amount had been approved earlier."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The new policy aims at creating more jobs in rural areas",
      "while also ensuring that young entrepreneurs",
      "receive access to credit, training and market information",
      "without having to depend on informal moneylenders"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "E",
    explanation: "The sentence is correct.",
    correctedSentence: "The new policy aims at creating more jobs in rural areas while also ensuring that young entrepreneurs receive access to credit, training and market information without having to depend on informal moneylenders.",
    ruleInsight: {
      rule: "Aim at + gerund and ensure that + clause are both standard structures.",
      why: "Aims at creating is grammatically acceptable. Ensuring that young entrepreneurs receive access is also correct because receive agrees with plural entrepreneurs.",
      correctPart: "No correction needed",
      example: "Example: The programme aims at improving skills while ensuring that trainees receive support."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The panel observed that the explanation offered by the department",
      "was so vague and incomplete",
      "as the applicants could not understand",
      "why their forms had been rejected"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "C",
    explanation: "Use so...that, not so...as, for result.",
    correctedSentence: "The panel observed that the explanation offered by the department was so vague and incomplete that the applicants could not understand why their forms had been rejected.",
    ruleInsight: {
      rule: "Use so + adjective/adverb + that to show result.",
      why: "The sentence shows the result of the vague explanation: applicants could not understand. Therefore the correct connector is that, not as.",
      correctPart: "that the applicants could not understand",
      example: "Example: The instruction was so confusing that many students asked for clarification."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "Several officers who were posted in remote areas",
      "said that they had not received proper accommodation",
      "or transport facilities despite repeated requests",
      "made to the district administration"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "E",
    explanation: "The sentence is correct.",
    correctedSentence: "Several officers who were posted in remote areas said that they had not received proper accommodation or transport facilities despite repeated requests made to the district administration.",
    ruleInsight: {
      rule: "Past perfect and relative clause use are correct when they match the timeline and noun reference.",
      why: "Who correctly refers to officers. Had not received correctly places the non-receipt before the reporting verb said.",
      correctPart: "No correction needed",
      example: "Example: The workers who were transferred said that they had not received travel allowance."
    }
  },
  {
    category: "Advanced Exam Error Spotting",
    source: "eng.pdf advanced pattern",
    type: "error",
    parts: [
      "The senior lawyer argued that the witness",
      "was not enough credible to influence the judgment",
      "because his statement contradicted the documents",
      "submitted earlier by the investigating agency"
    ],
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: "B",
    explanation: "Enough is placed after adjectives; use credible enough.",
    correctedSentence: "The senior lawyer argued that the witness was not credible enough to influence the judgment because his statement contradicted the documents submitted earlier by the investigating agency.",
    ruleInsight: {
      rule: "Enough comes after adjectives but before nouns.",
      why: "Credible is an adjective, so enough should follow it: credible enough. Enough credible is not the standard adjective pattern.",
      correctPart: "was not credible enough to influence the judgment",
      example: "Example: The hall is large enough. But: We have enough chairs."
    }
  }
];
