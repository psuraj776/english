// Long-context questions based on Mango Languages: each / every / all.
// Concepts used: one-by-one vs group-as-a-whole, each/every + singular count noun,
// each of / every one of + plural specific group + singular verb, all of + plural/mass noun,
// all with pronouns, almost/nearly/not with every/all, and distribution of objects.
globalThis.EACH_EVERY_ALL_QUESTION_DATA = (() => {
  const category = "Quantifiers: Each, Every, All";
  const source = "Mango Languages each/every/all concept";
  const prompt = "Choose the expression that best completes the sentence.";

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function makeQuestion(seed) {
    const correctSentence = seed.stem.replace("___", seed.correctAnswer);
    const customExplanation = [
      `<p>The correct answer is <strong>${esc(seed.correctAnswer)}</strong>. The full correct sentence is: <strong>${esc(correctSentence)}</strong></p>`,
      `<p><strong>Rule applied:</strong> ${seed.rule}</p>`,
      `<p><strong>Why it fits this sentence:</strong> ${seed.why}</p>`,
      `<p><strong>Example to remember:</strong> ${seed.example}</p>`,
      `<p><strong>Exam tip:</strong> ${seed.tip || "First identify whether the sentence views the group one-by-one or as a single whole; then check whether the following noun is singular, plural, specific, or a pronoun."}</p>`
    ].join("");

    const optionExplanations = {};
    seed.options.forEach((option) => {
      if (option === seed.correctAnswer) {
        optionExplanations[option] = `<strong>${esc(option)}</strong> is correct here because ${seed.correctWhy || seed.why} Correct sentence: <strong>${esc(correctSentence)}</strong>`;
      } else {
        optionExplanations[option] = seed.wrong && seed.wrong[option]
          ? seed.wrong[option]
          : `<strong>${esc(option)}</strong> is wrong here because it does not match this sentence's exact group meaning, noun pattern, or verb agreement. The needed expression is <strong>${esc(seed.correctAnswer)}</strong>.`;
      }
    });

    return {
      category,
      source,
      stem: seed.stem,
      options: seed.options,
      correctAnswer: seed.correctAnswer,
      explanation: seed.why,
      customExplanation,
      optionExplanations,
      prompt
    };
  }

  const oneByOneOptions = ["each", "every", "all", "all of"];
  const ofOptions = ["each of", "every one of", "all of", "all"];
  const modifierOptions = ["almost every", "almost each", "almost all", "each all"];
  const notOptions = ["not every", "not each", "not all", "each not"];
  const pronounOptions = ["each", "every", "every one", "all"];
  const allPronounOptions = ["all them", "all of them", "each them", "every them"];

  const seeds = [
    {
      stem: "The training coordinator checked the biometric record and confirmed that ___ trainee had signed the attendance sheet before entering the computer lab.",
      options: oneByOneOptions,
      correctAnswer: "each",
      rule: "<strong>Each</strong> is used when the speaker looks at members of a specific group one by one.",
      why: "The sentence is about checking trainees individually in a known training group. <strong>Trainee</strong> is singular, and the action is verified one person at a time, so <strong>each trainee</strong> is natural.",
      correctWhy: "the coordinator is not talking about the trainees as one mass group; he is confirming the signature of every individual trainee separately.",
      example: "<strong>Each trainee received a login ID</strong> means trainee 1 received one, trainee 2 received one, and so on.",
      wrong: {
        every: "<strong>every</strong> is grammatically possible before singular <strong>trainee</strong>, but it is weaker here because the sentence stresses individual checking of attendance records one by one.",
        all: "<strong>all trainee</strong> is wrong because <strong>all</strong> before a count noun needs a plural noun: <strong>all trainees</strong>.",
        "all of": "<strong>all of trainee</strong> is wrong because <strong>all of</strong> needs a determiner or pronoun: <strong>all of the trainees</strong> or <strong>all of them</strong>."
      }
    },
    {
      stem: "The revised scholarship notice says that ___ student must upload a bank statement, an identity proof, and a declaration before the portal closes.",
      options: oneByOneOptions,
      correctAnswer: "every",
      rule: "<strong>Every</strong> is used before a singular count noun when a rule applies to 100% of a group.",
      why: "The notice gives a general requirement that applies to the whole eligible student group. <strong>Student</strong> is singular, so the correct pattern is <strong>every student</strong>.",
      correctWhy: "the sentence states a rule for all students in the group, not a record-by-record action being highlighted.",
      example: "<strong>Every applicant must sign the form</strong> means the rule applies to all applicants.",
      wrong: {
        each: "<strong>each</strong> is possible in some rule sentences, but here the official notice is making a broad general requirement, so <strong>every student</strong> is more natural.",
        all: "<strong>all student</strong> is wrong because <strong>all</strong> before a count noun requires a plural noun: <strong>all students</strong>.",
        "all of": "<strong>all of student</strong> is wrong because <strong>all of</strong> must be followed by a specific noun phrase or pronoun, such as <strong>all of the students</strong>."
      }
    },
    {
      stem: "The invigilator placed one barcode sticker on ___ answer booklet so that no candidate's script could be mixed with another.",
      options: oneByOneOptions,
      correctAnswer: "each",
      rule: "<strong>Each</strong> emphasizes individual distribution: one item for each member or object.",
      why: "The sentence is about one sticker per answer booklet. <strong>Answer booklet</strong> is singular, and the distribution happens booklet by booklet.",
      correctWhy: "the barcode sticker is assigned individually to every booklet, not to the booklets as a group.",
      example: "<strong>Each answer sheet received a barcode</strong> means every sheet got its own barcode.",
      wrong: {
        every: "<strong>every</strong> is grammatical before singular <strong>answer booklet</strong>, but it does not emphasize the one-sticker-per-booklet distribution as strongly as <strong>each</strong>.",
        all: "<strong>all answer booklet</strong> is wrong; with <strong>all</strong>, the count noun should be plural: <strong>all answer booklets</strong>.",
        "all of": "<strong>all of answer booklet</strong> is wrong because <strong>all of</strong> requires a determiner or pronoun: <strong>all of the answer booklets</strong>."
      }
    },
    {
      stem: "The policy department reviewed the scheme and decided that ___ district should prepare a monthly progress report using the same template.",
      options: oneByOneOptions,
      correctAnswer: "every",
      rule: "<strong>Every</strong> works well for a rule applied uniformly to all members of a group.",
      why: "The sentence gives a uniform administrative instruction for all districts. <strong>District</strong> is singular, so the pattern is <strong>every district</strong>.",
      correctWhy: "the focus is a general rule covering the whole set of districts.",
      example: "<strong>Every branch must submit the report by Monday</strong> states a rule for all branches.",
      wrong: {
        each: "<strong>each</strong> would make the instruction sound more individually inspected; the sentence is a broad policy rule, so <strong>every district</strong> is better.",
        all: "<strong>all district</strong> is wrong because a count noun after <strong>all</strong> should be plural: <strong>all districts</strong>.",
        "all of": "<strong>all of district</strong> is wrong because <strong>all of</strong> requires a specific phrase such as <strong>all of the districts</strong>."
      }
    },
    {
      stem: "The research supervisor spoke to the six interns separately and gave ___ of them a different village to survey during the field assignment.",
      options: ofOptions,
      correctAnswer: "each of",
      rule: "<strong>Each of + determiner/pronoun + plural noun</strong> is used for individual members of a specific group.",
      why: "The phrase <strong>of them</strong> refers to a known group of six interns, and the supervisor gives different villages one intern at a time.",
      correctWhy: "the sentence emphasizes separate assignment to individual interns within a specific group.",
      example: "<strong>Each of them received a different file</strong> means every person received an individual file.",
      wrong: {
        "every one of": "<strong>every one of them</strong> is grammatical, but the sentence stresses separate distribution; <strong>each of them</strong> is the sharper choice.",
        "all of": "<strong>all of them a different village</strong> is wrong because <strong>all</strong> treats the group together and does not fit the one-different-village-per-intern structure.",
        all: "<strong>all them</strong> is wrong; before a pronoun, use <strong>all of them</strong>, not <strong>all them</strong>."
      }
    },
    {
      stem: "The audit officer said that ___ of the missing vouchers has to be verified before the reimbursement file can be closed.",
      options: ofOptions,
      correctAnswer: "each of",
      rule: "<strong>Each of + plural noun phrase</strong> is singular and takes a singular verb.",
      why: "The noun after <strong>of</strong> is plural: <strong>the missing vouchers</strong>. But the head word is <strong>each</strong>, so the verb must be singular: <strong>has</strong>.",
      correctWhy: "the sentence checks the vouchers one by one, and the singular verb <strong>has</strong> agrees with <strong>each</strong>.",
      example: "<strong>Each of the receipts has a signature</strong>, not <strong>have</strong>.",
      wrong: {
        "every one of": "<strong>every one of the missing vouchers has</strong> is grammatical, but it is heavier than needed; the exam-style direct answer is <strong>each of</strong>.",
        "all of": "<strong>all of the missing vouchers has</strong> is wrong because <strong>all of + plural noun</strong> takes a plural verb: <strong>have</strong>.",
        all: "<strong>all the missing vouchers has</strong> is wrong because plural <strong>vouchers</strong> would need <strong>have</strong>."
      }
    },
    {
      stem: "The principal reminded the class that ___ one of the students has to bring an identity card, because entry will be checked at the gate.",
      options: ["each", "every", "every one", "all"],
      correctAnswer: "every",
      rule: "<strong>Every one of + plural noun phrase</strong> means every individual member of a specific group and is singular.",
      why: "The sentence already contains <strong>one of the students</strong>, so the blank should be <strong>every</strong>, forming <strong>every one of the students has</strong>.",
      correctWhy: "the complete expression <strong>every one of the students</strong> is singular, matching <strong>has</strong>.",
      example: "<strong>Every one of the forms is checked</strong> uses singular <strong>is</strong>.",
      wrong: {
        each: "<strong>each one of the students</strong> would also be possible, but the fixed expression in this sentence is built around <strong>every one of</strong> because the blank is before <strong>one</strong> and the sense is a universal rule.",
        "every one": "<strong>every one one of</strong> would repeat <strong>one</strong> and become ungrammatical.",
        all: "<strong>all one of the students</strong> is ungrammatical."
      }
    },
    {
      stem: "The dairy supervisor confirmed that ___ of the milk was spoiled because the cold-storage unit had stopped working overnight.",
      options: ofOptions,
      correctAnswer: "all of",
      rule: "<strong>All of</strong> can be used with a specific uncountable/mass noun, and the verb agrees with that noun.",
      why: "<strong>Milk</strong> is an uncountable mass noun, and the sentence talks about 100% of that milk as one amount. Therefore <strong>all of the milk was</strong> is correct.",
      correctWhy: "the sentence treats the milk as one whole amount, not individual items.",
      example: "<strong>All of the bread is ready</strong>; <strong>All of the water was used</strong>.",
      wrong: {
        "each of": "<strong>each of the milk</strong> is wrong because <strong>each</strong> is used with individual countable members, not an uncountable mass noun like <strong>milk</strong>.",
        "every one of": "<strong>every one of the milk</strong> is wrong because <strong>every one</strong> replaces countable individuals, not a mass noun.",
        all: "<strong>all the milk</strong> is possible in ordinary English, but the sentence pattern offered here is <strong>___ of the milk</strong>, so the correct option is <strong>all of</strong>."
      }
    },
    {
      stem: "The field team visited five anganwadi centres, and ___ of the centres were found to have separate drinking-water facilities.",
      options: ofOptions,
      correctAnswer: "all of",
      rule: "<strong>All of + plural noun phrase</strong> takes a plural verb.",
      why: "The phrase is <strong>the centres</strong>, a specific plural count noun. Since the sentence says <strong>were</strong>, <strong>all of the centres were</strong> is correct.",
      correctWhy: "the sentence views the centres as the whole group and reports that 100% of them had facilities.",
      example: "<strong>All of the branches were open</strong>; <strong>All of the files were checked</strong>.",
      wrong: {
        "each of": "<strong>each of the centres were</strong> is wrong because <strong>each of</strong> is singular and would need <strong>was</strong>.",
        "every one of": "<strong>every one of the centres were</strong> is wrong because <strong>every one</strong> is singular and would need <strong>was</strong>.",
        all: "<strong>all of</strong> fits the exact <strong>___ of the centres</strong> pattern; plain <strong>all</strong> would form <strong>all the centres</strong>, not <strong>all of the centres</strong>."
      }
    },
    {
      stem: "The classroom had ten computers, and by the end of the day the technician had repaired ___ of them.",
      options: allPronounOptions,
      correctAnswer: "all of them",
      rule: "Before a pronoun, use <strong>all of + pronoun</strong>; do not drop <strong>of</strong>.",
      why: "The object is the pronoun <strong>them</strong>, referring to the computers. English says <strong>all of them</strong>, not <strong>all them</strong>.",
      correctWhy: "the sentence means the technician repaired 100% of the ten computers.",
      example: "<strong>We cleaned all of them</strong>, not <strong>we cleaned all them</strong>.",
      wrong: {
        "all them": "<strong>all them</strong> is wrong because <strong>of</strong> cannot be dropped before a pronoun.",
        "each them": "<strong>each them</strong> is wrong; use <strong>each of them</strong> if you mean one by one.",
        "every them": "<strong>every them</strong> is wrong because <strong>every</strong> cannot stand directly before a pronoun."
      }
    },
    {
      stem: "There were six sealed envelopes on the table, and the officer opened ___ one carefully before signing the inventory.",
      options: pronounOptions,
      correctAnswer: "each",
      rule: "<strong>Each</strong> can replace a count noun when the group is already known, though <strong>each one</strong> is often more natural.",
      why: "The envelopes have already been mentioned. The officer opens the envelopes individually, so <strong>each one</strong> would be very natural; among these options, <strong>each</strong> correctly replaces the noun.",
      correctWhy: "the action happens envelope by envelope.",
      example: "<strong>There were six forms. I checked each</strong> means I checked every form separately.",
      wrong: {
        every: "<strong>every</strong> cannot normally stand alone as a pronoun. Use <strong>every one</strong>.",
        "every one": "<strong>every one</strong> is grammatical, but the sentence already has <strong>one</strong> after the blank, so this option would produce <strong>every one one</strong>.",
        all: "<strong>all one</strong> is ungrammatical and does not express individual opening."
      }
    },
    {
      stem: "The officer found six sealed envelopes on the table and opened every ___ before signing the inventory.",
      options: ["one", "each", "all", "of"],
      correctAnswer: "one",
      rule: "<strong>Every</strong> cannot normally stand alone as a pronoun; use <strong>every one</strong>.",
      why: "The sentence already has <strong>every</strong>. To replace the noun <strong>envelope</strong>, English uses <strong>every one</strong>.",
      correctWhy: "the phrase becomes <strong>opened every one</strong>, meaning opened every envelope.",
      example: "<strong>There were six slices. I ate every one</strong>.",
      wrong: {
        each: "<strong>every each</strong> is ungrammatical because <strong>every</strong> and <strong>each</strong> cannot be stacked like this.",
        all: "<strong>every all</strong> is ungrammatical.",
        of: "<strong>opened every of</strong> is ungrammatical; for an of-structure use <strong>every one of them</strong>."
      }
    },
    {
      stem: "The survey covered only two villages, and the researcher recorded that ___ village had reported waterlogging after the storm.",
      options: oneByOneOptions,
      correctAnswer: "each",
      rule: "<strong>Each</strong> can be used for a group of two or more; <strong>every/all</strong> normally imply three or more in this kind of universal reference.",
      why: "The group has exactly two villages. For two members considered individually, <strong>each village</strong> is the best choice.",
      correctWhy: "the researcher is saying village 1 reported it and village 2 reported it.",
      example: "<strong>There were two boys. Each boy had a notebook</strong>.",
      wrong: {
        every: "<strong>every village</strong> is less natural for a group of only two; use <strong>each</strong> or <strong>both</strong> for two.",
        all: "<strong>all village</strong> is ungrammatical because <strong>all</strong> before a count noun needs a plural noun.",
        "all of": "<strong>all of village</strong> is wrong; it would need <strong>all of the villages</strong>."
      }
    },
    {
      stem: "The survey covered ten villages, and the researcher recorded that ___ village had reported waterlogging after the storm.",
      options: oneByOneOptions,
      correctAnswer: "every",
      rule: "<strong>Every</strong> is natural for all members of a group of three or more with a singular count noun.",
      why: "The group has ten villages, and the sentence gives a universal finding for all of them. The noun <strong>village</strong> is singular, so <strong>every village</strong> is correct.",
      correctWhy: "the finding applies to 100% of the ten villages.",
      example: "<strong>Every branch submitted the report</strong> means all branches did so.",
      wrong: {
        each: "<strong>each village</strong> is grammatical but would emphasize individual checking; the sentence states a broad universal finding, so <strong>every</strong> is more natural.",
        all: "<strong>all village</strong> is wrong because <strong>village</strong> would need to be plural after <strong>all</strong>.",
        "all of": "<strong>all of village</strong> is wrong; use <strong>all of the villages</strong>."
      }
    },
    {
      stem: "The students ___ received a different paragraph to summarise, so no two summaries in the group were based on the same passage.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "each",
      rule: "<strong>Each</strong> can appear after a plural subject to show individual distribution.",
      why: "The plural subject is <strong>the students</strong>, so the verb <strong>received</strong> stays plural. <strong>Each</strong> after the subject shows that every student got a different paragraph.",
      correctWhy: "the sentence emphasizes one different paragraph per student.",
      example: "<strong>The girls each received a ticket</strong> uses plural subject + each.",
      wrong: {
        every: "<strong>The students every received</strong> is ungrammatical; <strong>every</strong> normally comes before a singular count noun, as in <strong>every student</strong>.",
        all: "<strong>The students all received a different paragraph</strong> is possible but less precise here because <strong>all</strong> treats the students as a group; <strong>each</strong> highlights different distribution.",
        "all of": "<strong>The students all of received</strong> is ungrammatical."
      }
    },
    {
      stem: "The employees have ___ been informed about the revised leave policy, so the HR team will not send individual reminders.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "<strong>All</strong> often comes after the first auxiliary verb when it refers to the whole subject group.",
      why: "The subject is plural: <strong>the employees</strong>. The auxiliary is <strong>have</strong>. The natural position is <strong>have all been informed</strong>.",
      correctWhy: "the sentence means 100% of employees were informed as a group.",
      example: "<strong>The files have all been checked</strong>; <strong>They have all arrived</strong>.",
      wrong: {
        each: "<strong>have each been informed</strong> is possible if individual notification is emphasized, but this sentence speaks about the whole HR communication status, so <strong>all</strong> is better.",
        every: "<strong>have every been informed</strong> is ungrammatical; <strong>every</strong> belongs before a singular noun.",
        "all of": "<strong>have all of been informed</strong> is ungrammatical; <strong>all of</strong> needs a noun phrase or pronoun after it."
      }
    },
    {
      stem: "The milk was ___ spilled over the kitchen floor before anyone noticed that the carton had been left open.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "<strong>All</strong> can appear after the verb <strong>be</strong> to mean 100% of a mass noun.",
      why: "The sentence says 100% of the milk was spilled. With a mass noun subject and the verb <strong>was</strong>, <strong>was all spilled</strong> is natural.",
      correctWhy: "milk is an uncountable amount being described as completely spilled.",
      example: "<strong>The bread was all eaten</strong>; <strong>It was all gone</strong>.",
      wrong: {
        each: "<strong>milk was each spilled</strong> is wrong because <strong>each</strong> needs individual countable members.",
        every: "<strong>milk was every spilled</strong> is ungrammatical.",
        "all of": "<strong>was all of spilled</strong> is ungrammatical; use <strong>all of the milk was spilled</strong> if you want an of-phrase."
      }
    },
    {
      stem: "___ candidate in the final interview was asked the same question about ethical decision-making.",
      options: oneByOneOptions,
      correctAnswer: "every",
      rule: "<strong>Every + singular count noun</strong> is used when the same statement applies to 100% of a group.",
      why: "The sentence reports a uniform interview procedure applied to all candidates. <strong>Candidate</strong> is singular, so use <strong>every candidate</strong>.",
      correctWhy: "the same question was asked to all candidates in the group.",
      example: "<strong>Every student received the same instruction</strong>.",
      wrong: {
        each: "<strong>each candidate</strong> is grammatical, but it stresses candidate-by-candidate distribution more than the uniform rule. The context is a uniform interview procedure.",
        all: "<strong>all candidate</strong> is wrong because <strong>candidate</strong> would need to be plural: <strong>all candidates</strong>.",
        "all of": "<strong>all of candidate</strong> is wrong because <strong>all of</strong> needs a determiner or pronoun."
      }
    },
    {
      stem: "___ candidates in the final interview were asked the same question about ethical decision-making.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "<strong>All + plural count noun</strong> can refer to 100% of a group.",
      why: "The noun is plural: <strong>candidates</strong>. The verb is plural: <strong>were</strong>. Therefore <strong>all candidates were</strong> is correct.",
      correctWhy: "the sentence views the candidates as the whole group.",
      example: "<strong>All applicants were informed</strong>.",
      wrong: {
        each: "<strong>each candidates</strong> is wrong because <strong>each</strong> before a noun takes a singular count noun: <strong>each candidate</strong>.",
        every: "<strong>every candidates</strong> is wrong because <strong>every</strong> takes a singular count noun: <strong>every candidate</strong>.",
        "all of": "<strong>all of candidates</strong> is wrong without a determiner; say <strong>all of the candidates</strong>."
      }
    },
    {
      stem: "___ of the candidates in the final interview were asked the same question about ethical decision-making.",
      options: ofOptions,
      correctAnswer: "all of",
      rule: "<strong>All of + plural noun phrase</strong> takes a plural verb and refers to the whole group.",
      why: "The phrase is <strong>the candidates</strong>, and the verb is plural: <strong>were</strong>. Therefore <strong>all of the candidates were</strong> fits.",
      correctWhy: "the sentence says 100% of the candidates were asked the question.",
      example: "<strong>All of the students were present</strong>.",
      wrong: {
        "each of": "<strong>each of the candidates were</strong> is wrong because <strong>each of</strong> is singular and would need <strong>was</strong>.",
        "every one of": "<strong>every one of the candidates were</strong> is wrong because <strong>every one</strong> is singular and would need <strong>was</strong>.",
        all: "<strong>all of</strong> is required because the sentence already has <strong>of the candidates</strong> after the blank."
      }
    },
    {
      stem: "___ of the candidates in the final interview was asked to explain why public trust matters in administration.",
      options: ofOptions,
      correctAnswer: "each of",
      rule: "<strong>Each of + plural noun phrase</strong> is singular and focuses on members one by one.",
      why: "The noun phrase <strong>the candidates</strong> is plural, but <strong>each</strong> is the head of the subject. The singular verb <strong>was</strong> confirms that <strong>each of</strong> is correct.",
      correctWhy: "the sentence asks the same individual task of every candidate separately.",
      example: "<strong>Each of the applicants was interviewed</strong>.",
      wrong: {
        "every one of": "<strong>every one of the candidates was</strong> is grammatical, but <strong>each of</strong> better matches the one-by-one interview emphasis.",
        "all of": "<strong>all of the candidates was</strong> is wrong because <strong>all of + plural noun</strong> needs plural <strong>were</strong>.",
        all: "<strong>all the candidates was</strong> is wrong because plural <strong>candidates</strong> requires <strong>were</strong>."
      }
    },
    {
      stem: "The report says that ___ all of the surveyed households had access to clean drinking water.",
      options: modifierOptions,
      correctAnswer: "almost all",
      rule: "<strong>Almost</strong> can modify <strong>all</strong> or <strong>every</strong>, but not <strong>each</strong>.",
      why: "The phrase after the blank is <strong>of the surveyed households</strong>, so <strong>almost all of</strong> is the correct pattern meaning close to 100%.",
      correctWhy: "the sentence means nearly the whole group, but not necessarily every household.",
      example: "<strong>Almost all of the rooms have been cleaned</strong>.",
      wrong: {
        "almost every": "<strong>almost every all of</strong> is ungrammatical because <strong>every</strong> cannot be placed before <strong>all of</strong>.",
        "almost each": "<strong>almost each</strong> is wrong because <strong>almost</strong> does not normally modify <strong>each</strong>.",
        "each all": "<strong>each all</strong> is ungrammatical."
      }
    },
    {
      stem: "The report says that ___ surveyed household had access to clean drinking water.",
      options: modifierOptions,
      correctAnswer: "almost every",
      rule: "<strong>Almost every + singular count noun</strong> means close to 100% of a group.",
      why: "The noun is singular: <strong>surveyed household</strong>. The correct near-100% expression is <strong>almost every surveyed household</strong>.",
      correctWhy: "the sentence means nearly all households, but allows a small number of exceptions.",
      example: "<strong>Almost every room has been cleaned</strong>.",
      wrong: {
        "almost each": "<strong>almost each</strong> is wrong because <strong>almost</strong> is used with <strong>every</strong> or <strong>all</strong>, not <strong>each</strong>.",
        "almost all": "<strong>almost all surveyed household</strong> is wrong because <strong>all</strong> would need plural <strong>households</strong>.",
        "each all": "<strong>each all</strong> is ungrammatical."
      }
    },
    {
      stem: "___ applicant who cleared the written exam was called for the interview; some were asked to submit missing certificates first.",
      options: notOptions,
      correctAnswer: "not every",
      rule: "<strong>Not every + singular count noun</strong> means the statement is not true for 100% of the group.",
      why: "The second clause says some applicants were not called immediately. The noun is singular: <strong>applicant</strong>. Therefore <strong>not every applicant</strong> is correct.",
      correctWhy: "it means fewer than 100% of applicants were called.",
      example: "<strong>Not every room has been cleaned</strong> means some rooms have not been cleaned.",
      wrong: {
        "not each": "<strong>not each</strong> is not the normal pattern for this meaning; English uses <strong>not every</strong> or <strong>not all</strong>.",
        "not all": "<strong>not all applicant</strong> is wrong because <strong>all</strong> would need plural <strong>applicants</strong>.",
        "each not": "<strong>each not applicant</strong> is ungrammatical."
      }
    },
    {
      stem: "___ of the applicants who cleared the written exam were called for the interview; some were asked to submit missing certificates first.",
      options: notOptions,
      correctAnswer: "not all",
      rule: "<strong>Not all of + plural noun phrase</strong> means less than 100% of the group.",
      why: "The phrase after the blank is <strong>of the applicants</strong>. The sentence says some applicants were not called, so <strong>not all of the applicants</strong> is correct.",
      correctWhy: "it means the statement is not true for the whole group.",
      example: "<strong>Not all of the files were approved</strong> means some files were not approved.",
      wrong: {
        "not every": "<strong>not every of the applicants</strong> is ungrammatical; use <strong>not every applicant</strong> without <strong>of</strong>.",
        "not each": "<strong>not each of the applicants</strong> is not the standard natural expression for this meaning.",
        "each not": "<strong>each not of</strong> is ungrammatical."
      }
    },
    {
      stem: "The children ___ wore hats during the parade, so the teacher could easily identify the school group from a distance.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "With a plural subject, <strong>all</strong> after the noun can describe the whole group.",
      why: "The subject is <strong>the children</strong>, and the sentence says the entire group wore hats. <strong>The children all wore hats</strong> is natural.",
      correctWhy: "the object <strong>hats</strong> is plural, so it means the children had hats individually, not one shared hat.",
      example: "<strong>The players all wore blue jerseys</strong>.",
      wrong: {
        each: "<strong>The children each wore hats</strong> is possible and stresses one-by-one distribution, but this sentence identifies the group as a whole from a distance; <strong>all</strong> is the intended focus.",
        every: "<strong>The children every wore</strong> is ungrammatical.",
        "all of": "<strong>The children all of wore</strong> is ungrammatical."
      }
    },
    {
      stem: "The teacher gave ___ child a separate worksheet so that no two children had to share during the assessment.",
      options: oneByOneOptions,
      correctAnswer: "each",
      rule: "<strong>Each</strong> is best when something is distributed separately to individual members.",
      why: "The sentence says every child received a separate worksheet. <strong>Child</strong> is singular, and the distribution is one worksheet per child.",
      correctWhy: "the words <strong>separate worksheet</strong> show individual distribution.",
      example: "<strong>Each child received a pencil</strong> means one pencil for every child.",
      wrong: {
        every: "<strong>every child</strong> is grammatical, but it does not highlight separate distribution as strongly as <strong>each child</strong>.",
        all: "<strong>all child</strong> is wrong; use <strong>all children</strong>.",
        "all of": "<strong>all of child</strong> is wrong; use <strong>all of the children</strong>."
      }
    },
    {
      stem: "Because the officer wanted individual confirmation, he asked ___ visitor to show the QR code on the entry pass.",
      options: oneByOneOptions,
      correctAnswer: "each",
      rule: "<strong>Each</strong> is used when members of a group are handled individually.",
      why: "The phrase <strong>individual confirmation</strong> shows that the officer checked visitors one by one. Therefore <strong>each visitor</strong> is correct.",
      correctWhy: "the checking happens separately for each visitor.",
      example: "<strong>Each passenger showed a ticket</strong>.",
      wrong: {
        every: "<strong>every visitor</strong> is grammatical, but the sentence explicitly stresses individual confirmation, so <strong>each</strong> is more precise.",
        all: "<strong>all visitor</strong> is wrong because <strong>visitor</strong> would need to be plural.",
        "all of": "<strong>all of visitor</strong> is wrong without a determiner and plural noun."
      }
    },
    {
      stem: "The notice outside the office clearly states that ___ visitor must carry a government-issued identity card.",
      options: oneByOneOptions,
      correctAnswer: "every",
      rule: "<strong>Every</strong> is natural for official rules applied to all members of a group.",
      why: "The notice states a general rule. <strong>Visitor</strong> is singular, so <strong>every visitor</strong> is correct.",
      correctWhy: "the rule applies to 100% of visitors.",
      example: "<strong>Every visitor must sign the register</strong>.",
      wrong: {
        each: "<strong>each visitor</strong> is grammatical, but an official notice stating a broad rule usually uses <strong>every</strong>.",
        all: "<strong>all visitor</strong> is wrong; use <strong>all visitors</strong>.",
        "all of": "<strong>all of visitor</strong> is wrong; use <strong>all of the visitors</strong>."
      }
    },
    {
      stem: "The officer collected the signed declarations and placed ___ of them in a separate envelope for verification.",
      options: ofOptions,
      correctAnswer: "each of",
      rule: "<strong>Each of them</strong> is used for individual handling of members of a known group.",
      why: "The declarations are already mentioned, and the officer places them in separate envelopes. That is individual handling, so <strong>each of them</strong> is correct.",
      correctWhy: "each declaration gets its own envelope.",
      example: "<strong>I placed each of them in a separate file</strong>.",
      wrong: {
        "every one of": "<strong>every one of them</strong> is grammatical, but <strong>each of them</strong> better highlights separate envelopes.",
        "all of": "<strong>all of them in a separate envelope</strong> could mean the group together went into one envelope, which conflicts with separate handling.",
        all: "<strong>all them</strong> is wrong; use <strong>all of them</strong> before a pronoun."
      }
    },
    {
      stem: "The cashier counted the notes twice and then returned ___ to the customer because the payment had been cancelled.",
      options: ["all", "all of them", "each", "every"],
      correctAnswer: "all of them",
      rule: "When referring to a whole set with a pronoun, use <strong>all of them</strong>.",
      why: "The notes are already mentioned, and the pronoun is <strong>them</strong>. English requires <strong>all of them</strong>, not <strong>all them</strong>.",
      correctWhy: "the cashier returned 100% of the notes.",
      example: "<strong>The files were ready, so I sent all of them</strong>.",
      wrong: {
        all: "<strong>returned all to the customer</strong> is incomplete and formal/unnatural here; with the pronoun, use <strong>all of them</strong>.",
        each: "<strong>returned each to the customer</strong> is possible in formal style but less natural and does not match the whole-set pronoun structure.",
        every: "<strong>every</strong> cannot stand alone as a pronoun; use <strong>every one</strong>."
      }
    },
    {
      stem: "The form has four sections, and the applicant must complete ___ section before pressing the final submit button.",
      options: oneByOneOptions,
      correctAnswer: "every",
      rule: "<strong>Every + singular count noun</strong> is used when completion is required for all parts of a set.",
      why: "The instruction applies to all four sections. <strong>Section</strong> is singular after <strong>every</strong>.",
      correctWhy: "the applicant cannot skip any section.",
      example: "<strong>Every field must be filled</strong>.",
      wrong: {
        each: "<strong>each section</strong> is grammatical, but the instruction is a general requirement; <strong>every section</strong> is the natural official wording.",
        all: "<strong>all section</strong> is wrong; say <strong>all sections</strong>.",
        "all of": "<strong>all of section</strong> is wrong; say <strong>all of the sections</strong>."
      }
    },
    {
      stem: "The form has four sections, and ___ of the sections must be completed before the final submit button becomes active.",
      options: ofOptions,
      correctAnswer: "all of",
      rule: "<strong>All of + plural noun phrase</strong> is used for 100% of a specific group.",
      why: "The phrase after the blank is <strong>the sections</strong>, and the meaning is 100% of the four sections. The plural verb phrase <strong>must be completed</strong> fits <strong>all of the sections</strong>.",
      correctWhy: "the whole set of sections must be complete.",
      example: "<strong>All of the fields must be completed</strong>.",
      wrong: {
        "each of": "<strong>each of the sections must be completed</strong> is grammatical, but the sentence focuses on unlocking the button after the whole set is done; <strong>all of</strong> is more direct.",
        "every one of": "<strong>every one of the sections</strong> is grammatical but heavier than needed here.",
        all: "The blank is followed by <strong>of the sections</strong>, so plain <strong>all</strong> alone does not fit the written pattern."
      }
    },
    {
      stem: "The two witnesses were interviewed separately, and the officer recorded that ___ witness gave the same description of the incident.",
      options: oneByOneOptions,
      correctAnswer: "each",
      rule: "Use <strong>each</strong> for two members considered individually.",
      why: "There are exactly two witnesses, and they were interviewed separately. <strong>Each witness</strong> is the correct one-by-one expression.",
      correctWhy: "witness 1 gave the description and witness 2 gave the description.",
      example: "<strong>Each of the two guards signed the register</strong>.",
      wrong: {
        every: "<strong>every witness</strong> is less natural for exactly two; use <strong>each</strong> or <strong>both</strong>.",
        all: "<strong>all witness</strong> is wrong because <strong>witness</strong> should be plural after <strong>all</strong>.",
        "all of": "<strong>all of witness</strong> is wrong; use <strong>all of the witnesses</strong>."
      }
    },
    {
      stem: "The fifteen witnesses were interviewed separately, and the officer recorded that ___ witness gave the same description of the incident.",
      options: oneByOneOptions,
      correctAnswer: "every",
      rule: "Use <strong>every</strong> for all members of a group of three or more when making a universal statement.",
      why: "The group has fifteen witnesses. The sentence states that the same thing was true for 100% of them. <strong>Witness</strong> is singular, so <strong>every witness</strong> is correct.",
      correctWhy: "the statement covers the whole group of fifteen.",
      example: "<strong>Every witness gave the same answer</strong>.",
      wrong: {
        each: "<strong>each witness</strong> is grammatical and emphasizes separate interviews, but the main claim is the universal result, so <strong>every</strong> is stronger.",
        all: "<strong>all witness</strong> is wrong; use <strong>all witnesses</strong>.",
        "all of": "<strong>all of witness</strong> is wrong; use <strong>all of the witnesses</strong>."
      }
    },
    {
      stem: "The employees were divided into three teams, and the trainer gave ___ team a different case study to discuss.",
      options: oneByOneOptions,
      correctAnswer: "each",
      rule: "<strong>Each</strong> is used for individual distribution to members or subgroups.",
      why: "There are three teams, and every team receives a different case study. <strong>Each team</strong> highlights separate distribution.",
      correctWhy: "team 1 gets one case study, team 2 another, and team 3 another.",
      example: "<strong>Each team received a different topic</strong>.",
      wrong: {
        every: "<strong>every team</strong> is possible, but it does not emphasize different distribution as clearly as <strong>each team</strong>.",
        all: "<strong>all team</strong> is wrong; use <strong>all teams</strong>.",
        "all of": "<strong>all of team</strong> is wrong; use <strong>all of the teams</strong>."
      }
    },
    {
      stem: "The employees were divided into three teams, and ___ teams had to present their conclusions before lunch.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "<strong>All + plural noun</strong> refers to 100% of a group.",
      why: "The noun is plural: <strong>teams</strong>. The sentence says every team in the group had to present. Therefore <strong>all teams</strong> is correct.",
      correctWhy: "the focus is the whole set of teams.",
      example: "<strong>All teams submitted reports</strong>.",
      wrong: {
        each: "<strong>each teams</strong> is wrong because <strong>each</strong> takes singular <strong>team</strong>.",
        every: "<strong>every teams</strong> is wrong because <strong>every</strong> takes singular <strong>team</strong>.",
        "all of": "<strong>all of teams</strong> is wrong without a determiner; say <strong>all of the teams</strong>."
      }
    },
    {
      stem: "The officer said that ___ of the money was recovered from the abandoned vehicle near the toll gate.",
      options: ofOptions,
      correctAnswer: "all of",
      rule: "<strong>All of</strong> can be used with a specific uncountable noun.",
      why: "<strong>Money</strong> is uncountable, and the sentence means the whole amount was recovered. Therefore <strong>all of the money was</strong> is correct.",
      correctWhy: "the money is treated as one total amount.",
      example: "<strong>All of the cash was counted</strong>.",
      wrong: {
        "each of": "<strong>each of the money</strong> is wrong because money is uncountable, not a set of countable individuals.",
        "every one of": "<strong>every one of the money</strong> is wrong because <strong>every one</strong> needs countable members.",
        all: "Plain <strong>all the money</strong> is possible, but the written pattern here is <strong>___ of the money</strong>, so <strong>all of</strong> fits."
      }
    },
    {
      stem: "The committee members ___ disagreed with the proposal, so the chairperson postponed the vote instead of forcing a decision.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "<strong>All</strong> after a plural subject can show that the whole group shares the same action or state.",
      why: "The subject is plural: <strong>committee members</strong>. The sentence says the whole group disagreed. <strong>Members all disagreed</strong> is correct.",
      correctWhy: "100% of the members disagreed as a group.",
      example: "<strong>The directors all supported the plan</strong>.",
      wrong: {
        each: "<strong>members each disagreed</strong> is possible if individual disagreement is emphasized, but the sentence explains the group result, so <strong>all</strong> fits better.",
        every: "<strong>members every disagreed</strong> is ungrammatical.",
        "all of": "<strong>members all of disagreed</strong> is ungrammatical."
      }
    },
    {
      stem: "The teacher asked the students to solve the five examples, and they ___ produced a different method for the third one.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "each",
      rule: "<strong>Each</strong> after a pronoun subject emphasizes individual action or result.",
      why: "The subject is <strong>they</strong>, and the sentence says every student produced a different method. <strong>They each produced</strong> highlights individual results.",
      correctWhy: "each student produced his or her own method.",
      example: "<strong>They each gave a different answer</strong>.",
      wrong: {
        every: "<strong>they every produced</strong> is ungrammatical.",
        all: "<strong>they all produced a different method</strong> is possible, but it does not emphasize one different method per student as strongly as <strong>each</strong>.",
        "all of": "<strong>they all of produced</strong> is ungrammatical."
      }
    },
    {
      stem: "The health department collected samples from eight wells, and ___ sample was labelled with the name of the village and the date of collection.",
      options: oneByOneOptions,
      correctAnswer: "each",
      rule: "<strong>Each</strong> is used when every item is handled separately.",
      why: "The samples are labelled one by one. <strong>Sample</strong> is singular, so <strong>each sample</strong> is correct.",
      correctWhy: "every sample receives its own label.",
      example: "<strong>Each file was stamped separately</strong>.",
      wrong: {
        every: "<strong>every sample</strong> is grammatical, but <strong>each</strong> better expresses separate labelling.",
        all: "<strong>all sample</strong> is wrong; use <strong>all samples</strong>.",
        "all of": "<strong>all of sample</strong> is wrong; use <strong>all of the samples</strong>."
      }
    },
    {
      stem: "The health department collected samples from eight wells, and ___ samples were sent to the district laboratory on the same day.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "<strong>All + plural noun</strong> is used when 100% of a plural group is viewed together.",
      why: "The noun is plural: <strong>samples</strong>. The sentence talks about the samples as a group being sent to the lab.",
      correctWhy: "100% of the samples were sent.",
      example: "<strong>All documents were uploaded</strong>.",
      wrong: {
        each: "<strong>each samples</strong> is wrong because <strong>each</strong> needs singular <strong>sample</strong>.",
        every: "<strong>every samples</strong> is wrong because <strong>every</strong> needs singular <strong>sample</strong>.",
        "all of": "<strong>all of samples</strong> is wrong without a determiner; use <strong>all of the samples</strong>."
      }
    },
    {
      stem: "The three shortlisted designs were displayed on the screen, and ___ of them was discussed for ten minutes before the final vote.",
      options: ofOptions,
      correctAnswer: "each of",
      rule: "<strong>Each of + pronoun</strong> is singular and shows one-by-one treatment.",
      why: "The designs are discussed separately for ten minutes. The singular verb <strong>was</strong> agrees with <strong>each</strong>.",
      correctWhy: "design 1 was discussed, design 2 was discussed, and design 3 was discussed separately.",
      example: "<strong>Each of them was reviewed carefully</strong>.",
      wrong: {
        "every one of": "<strong>every one of them was</strong> is grammatical, but <strong>each of them</strong> more directly expresses separate discussion.",
        "all of": "<strong>all of them was</strong> is wrong because <strong>all of them</strong> would need plural <strong>were</strong>.",
        all: "<strong>all them was</strong> is wrong; before a pronoun use <strong>all of them</strong>, and with all use plural <strong>were</strong>."
      }
    },
    {
      stem: "The three shortlisted designs were displayed on the screen, and ___ of them were rejected after the final vote.",
      options: ofOptions,
      correctAnswer: "all of",
      rule: "<strong>All of + pronoun</strong> takes plural agreement when the pronoun refers to plural count nouns.",
      why: "<strong>Them</strong> refers to three designs. The verb is plural: <strong>were</strong>. Therefore <strong>all of them were</strong> is correct.",
      correctWhy: "100% of the designs were rejected.",
      example: "<strong>All of them were approved</strong>.",
      wrong: {
        "each of": "<strong>each of them were</strong> is wrong because <strong>each</strong> is singular and would need <strong>was</strong>.",
        "every one of": "<strong>every one of them were</strong> is wrong because <strong>every one</strong> is singular and would need <strong>was</strong>.",
        all: "<strong>all them were</strong> is wrong; before a pronoun use <strong>all of them</strong>."
      }
    },
    {
      stem: "The manual says that ___ printer must be switched off before the cartridge is replaced.",
      options: oneByOneOptions,
      correctAnswer: "every",
      rule: "<strong>Every</strong> is used for general instructions applying to all members of a type or group.",
      why: "The manual gives a general safety rule for printers. <strong>Printer</strong> is singular, so the correct phrase is <strong>every printer</strong>.",
      correctWhy: "the instruction applies universally to all printers covered by the manual.",
      example: "<strong>Every machine must be grounded before use</strong>.",
      wrong: {
        each: "<strong>each printer</strong> is grammatical but sounds more like checking known printers individually; the manual gives a general rule, so <strong>every</strong> is better.",
        all: "<strong>all printer</strong> is wrong; use <strong>all printers</strong>.",
        "all of": "<strong>all of printer</strong> is wrong; use <strong>all of the printers</strong>."
      }
    },
    {
      stem: "The manual says that ___ printers must be switched off before their cartridges are replaced.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "<strong>All</strong> can come directly before a plural count noun.",
      why: "The noun is plural: <strong>printers</strong>. The verb phrase is plural: <strong>must be switched off</strong>. <strong>All printers</strong> is correct.",
      correctWhy: "the rule applies to the whole group/type.",
      example: "<strong>All machines must be inspected</strong>.",
      wrong: {
        each: "<strong>each printers</strong> is wrong because <strong>each</strong> needs singular <strong>printer</strong>.",
        every: "<strong>every printers</strong> is wrong because <strong>every</strong> needs singular <strong>printer</strong>.",
        "all of": "<strong>all of printers</strong> is wrong without a determiner; say <strong>all of the printers</strong>."
      }
    },
    {
      stem: "___ milk should be stored below the recommended temperature if it is meant for distribution to children.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "<strong>All + mass noun</strong> can make a general statement about 100% of that substance.",
      why: "<strong>Milk</strong> is an uncountable mass noun. The sentence gives a general rule about milk, so <strong>all milk</strong> is correct.",
      correctWhy: "the rule applies to milk as a substance.",
      example: "<strong>All water should be boiled before drinking</strong>.",
      wrong: {
        each: "<strong>each milk</strong> is wrong because <strong>each</strong> needs individual countable nouns.",
        every: "<strong>every milk</strong> is wrong because <strong>every</strong> needs a singular count noun.",
        "all of": "<strong>all of milk</strong> is wrong without a determiner; say <strong>all of the milk</strong> for a specific quantity."
      }
    },
    {
      stem: "___ of the milk in the storage unit should be tested before it is distributed to children.",
      options: ofOptions,
      correctAnswer: "all of",
      rule: "<strong>All of + the + mass noun</strong> refers to a specific whole amount.",
      why: "The phrase is <strong>the milk in the storage unit</strong>, a specific amount of an uncountable noun. Therefore <strong>all of</strong> is correct.",
      correctWhy: "the sentence means 100% of that stored milk should be tested.",
      example: "<strong>All of the water in the tank was tested</strong>.",
      wrong: {
        "each of": "<strong>each of the milk</strong> is wrong because milk is uncountable.",
        "every one of": "<strong>every one of the milk</strong> is wrong because <strong>every one</strong> needs countable items.",
        all: "Plain <strong>all</strong> would work in <strong>all the milk</strong>, but the blank is followed by <strong>of the milk</strong>, so <strong>all of</strong> fits the pattern."
      }
    },
    {
      stem: "The inspectors ___ carried a separate checklist because they were assigned to different sections of the factory.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "each",
      rule: "<strong>Each</strong> after a plural subject emphasizes individual possession or assignment.",
      why: "The inspectors have separate checklists and different sections. <strong>Inspectors each carried</strong> shows one checklist per inspector.",
      correctWhy: "the sentence is not just saying the group carried checklists; it says every individual inspector had a separate one.",
      example: "<strong>The officers each carried a radio</strong>.",
      wrong: {
        every: "<strong>inspectors every carried</strong> is ungrammatical.",
        all: "<strong>inspectors all carried a separate checklist</strong> is possible, but <strong>each</strong> better explains one separate checklist per inspector.",
        "all of": "<strong>inspectors all of carried</strong> is ungrammatical."
      }
    },
    {
      stem: "The inspectors ___ carried the same checklist because the department wanted a uniform inspection process.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "<strong>All</strong> after a plural subject treats the subject as a complete group.",
      why: "The inspectors used the same checklist. The sentence stresses uniformity across the group, so <strong>all</strong> is natural.",
      correctWhy: "the whole group followed the same process.",
      example: "<strong>The teams all used the same template</strong>.",
      wrong: {
        each: "<strong>each carried the same checklist</strong> is possible, but the sentence's reason is uniform group procedure, so <strong>all</strong> fits better.",
        every: "<strong>inspectors every carried</strong> is ungrammatical.",
        "all of": "<strong>inspectors all of carried</strong> is ungrammatical."
      }
    },
    {
      stem: "The teacher said that ___ answer in the worksheet should be supported by a reason, not just marked as A, B, C, or D.",
      options: oneByOneOptions,
      correctAnswer: "every",
      rule: "<strong>Every + singular count noun</strong> is used when a requirement applies to all items.",
      why: "The requirement applies to all answers in the worksheet. <strong>Answer</strong> is singular after <strong>every</strong>.",
      correctWhy: "no answer should be left without a reason.",
      example: "<strong>Every answer must include a reason</strong>.",
      wrong: {
        each: "<strong>each answer</strong> is grammatical, but the teacher is stating a broad requirement, so <strong>every</strong> is better.",
        all: "<strong>all answer</strong> is wrong; use <strong>all answers</strong>.",
        "all of": "<strong>all of answer</strong> is wrong; use <strong>all of the answers</strong>."
      }
    },
    {
      stem: "The teacher said that ___ answers in the worksheet should be supported by reasons, not just marked as A, B, C, or D.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "<strong>All + plural count noun</strong> is used for 100% of a plural group.",
      why: "The noun is plural: <strong>answers</strong>. The sentence requires support for the whole set of answers.",
      correctWhy: "100% of answers need reasons.",
      example: "<strong>All questions must be attempted</strong>.",
      wrong: {
        each: "<strong>each answers</strong> is wrong because <strong>each</strong> takes singular <strong>answer</strong>.",
        every: "<strong>every answers</strong> is wrong because <strong>every</strong> takes singular <strong>answer</strong>.",
        "all of": "<strong>all of answers</strong> is wrong without a determiner; say <strong>all of the answers</strong>."
      }
    },
    {
      stem: "The senior officer told the clerks that ___ of the registers was to be checked page by page before the inspection.",
      options: ofOptions,
      correctAnswer: "each of",
      rule: "<strong>Each of + plural noun phrase</strong> is singular.",
      why: "The phrase is <strong>the registers</strong>, but the verb is singular: <strong>was</strong>. That matches <strong>each of</strong>.",
      correctWhy: "the checking is register by register and page by page.",
      example: "<strong>Each of the files was checked</strong>.",
      wrong: {
        "every one of": "<strong>every one of the registers was</strong> is grammatical, but <strong>each of</strong> better suits page-by-page individual checking.",
        "all of": "<strong>all of the registers was</strong> is wrong because plural <strong>registers</strong> would need <strong>were</strong>.",
        all: "<strong>all the registers was</strong> is wrong because plural <strong>registers</strong> requires <strong>were</strong>."
      }
    },
    {
      stem: "The senior officer told the clerks that ___ of the registers were to be shifted to the record room before the inspection.",
      options: ofOptions,
      correctAnswer: "all of",
      rule: "<strong>All of + plural noun phrase</strong> takes plural agreement.",
      why: "The phrase is <strong>the registers</strong>, and the verb is plural: <strong>were</strong>. So <strong>all of the registers were</strong> is correct.",
      correctWhy: "the whole set of registers had to be shifted.",
      example: "<strong>All of the files were moved</strong>.",
      wrong: {
        "each of": "<strong>each of the registers were</strong> is wrong because <strong>each</strong> is singular and would need <strong>was</strong>.",
        "every one of": "<strong>every one of the registers were</strong> is wrong because <strong>every one</strong> is singular and would need <strong>was</strong>.",
        all: "Plain <strong>all</strong> does not fit the <strong>___ of the registers</strong> pattern."
      }
    },
    {
      stem: "The old archive had twenty boxes, and the clerk labelled ___ box with the year and department name.",
      options: oneByOneOptions,
      correctAnswer: "each",
      rule: "<strong>Each</strong> emphasizes individual action on separate items.",
      why: "The clerk labels boxes one by one. <strong>Box</strong> is singular and every box gets its own label.",
      correctWhy: "the action is repeated separately for every box.",
      example: "<strong>Each box was labelled clearly</strong>.",
      wrong: {
        every: "<strong>every box</strong> is grammatical, but <strong>each box</strong> better highlights the individual labelling action.",
        all: "<strong>all box</strong> is wrong; use <strong>all boxes</strong>.",
        "all of": "<strong>all of box</strong> is wrong; use <strong>all of the boxes</strong>."
      }
    },
    {
      stem: "The old archive had twenty boxes, and ___ boxes were moved to a safer room after the ceiling started leaking.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "<strong>All + plural noun</strong> refers to the whole plural group.",
      why: "The noun is plural: <strong>boxes</strong>. The sentence says the entire group was moved.",
      correctWhy: "100% of the boxes were moved.",
      example: "<strong>All records were shifted</strong>.",
      wrong: {
        each: "<strong>each boxes</strong> is wrong because <strong>each</strong> takes singular <strong>box</strong>.",
        every: "<strong>every boxes</strong> is wrong because <strong>every</strong> takes singular <strong>box</strong>.",
        "all of": "<strong>all of boxes</strong> is wrong without a determiner; say <strong>all of the boxes</strong>."
      }
    },
    {
      stem: "___ file on the officer's desk was checked separately because the complaint numbers had to be matched with scanned copies.",
      options: oneByOneOptions,
      correctAnswer: "each",
      rule: "<strong>Each</strong> is suitable when separate checking is emphasized.",
      why: "The phrase <strong>checked separately</strong> tells us the files were examined one by one. Use <strong>each file</strong>.",
      correctWhy: "the file-by-file checking is central to the meaning.",
      example: "<strong>Each document was verified separately</strong>.",
      wrong: {
        every: "<strong>every file</strong> is grammatical, but less precise because the sentence stresses separate checking.",
        all: "<strong>all file</strong> is wrong; use <strong>all files</strong>.",
        "all of": "<strong>all of file</strong> is wrong; use <strong>all of the files</strong>."
      }
    },
    {
      stem: "___ files on the officer's desk were checked before the complaint numbers were matched with scanned copies.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "<strong>All + plural noun</strong> is used when the whole group is covered.",
      why: "The noun is plural: <strong>files</strong>. The sentence says the whole set was checked.",
      correctWhy: "100% of the files were checked.",
      example: "<strong>All forms were reviewed</strong>.",
      wrong: {
        each: "<strong>each files</strong> is wrong because <strong>each</strong> takes singular <strong>file</strong>.",
        every: "<strong>every files</strong> is wrong because <strong>every</strong> takes singular <strong>file</strong>.",
        "all of": "<strong>all of files</strong> is wrong without a determiner; use <strong>all of the files</strong>."
      }
    },
    {
      stem: "The judge listened to the lawyers, and he allowed them ___ ten minutes to present their final arguments.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "each",
      rule: "<strong>Each</strong> can come after an object pronoun to show individual distribution.",
      why: "The object pronoun is <strong>them</strong>, referring to the lawyers. <strong>Allowed them each ten minutes</strong> means every lawyer got ten minutes.",
      correctWhy: "the time is distributed individually.",
      example: "<strong>I gave them each a ticket</strong>.",
      wrong: {
        every: "<strong>allowed them every ten minutes</strong> changes the meaning and sounds like repeated intervals, not individual distribution.",
        all: "<strong>allowed them all ten minutes</strong> could mean ten minutes for the group together, not ten minutes per lawyer.",
        "all of": "<strong>allowed them all of ten minutes</strong> is not the intended structure."
      }
    },
    {
      stem: "The judge listened to the lawyers, and he allowed ___ of them ten minutes to present final arguments.",
      options: ofOptions,
      correctAnswer: "each of",
      rule: "<strong>Each of + pronoun</strong> shows individual distribution to members of a known group.",
      why: "The sentence gives ten minutes to every lawyer individually. <strong>Each of them ten minutes</strong> gives the one-by-one distribution.",
      correctWhy: "each lawyer receives a separate ten-minute slot.",
      example: "<strong>We gave each of them a separate password</strong>.",
      wrong: {
        "every one of": "<strong>every one of them ten minutes</strong> is possible in meaning but less natural here than <strong>each of them</strong> for distribution.",
        "all of": "<strong>all of them ten minutes</strong> suggests the group together got ten minutes, not each lawyer separately.",
        all: "<strong>all them</strong> is wrong; before a pronoun use <strong>all of them</strong>."
      }
    },
    {
      stem: "Because the bus had only two vacant seats, the conductor told the two passengers that they could ___ take one seat.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "each",
      rule: "<strong>Each</strong> is used for two people or things when they receive one item individually.",
      why: "There are two passengers and two seats. <strong>They could each take one seat</strong> means passenger 1 gets one and passenger 2 gets one.",
      correctWhy: "the distribution is one seat per passenger.",
      example: "<strong>The two boys each received a medal</strong>.",
      wrong: {
        every: "<strong>they could every take</strong> is ungrammatical.",
        all: "<strong>they could all take one seat</strong> is less precise and can sound like the group shares one seat.",
        "all of": "<strong>they could all of take</strong> is ungrammatical."
      }
    },
    {
      stem: "Because the hall had enough chairs, the volunteers said that ___ guests could sit inside during the programme.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "<strong>All + plural noun</strong> treats the group as a whole.",
      why: "The noun is plural: <strong>guests</strong>. The sentence says the whole group could sit inside.",
      correctWhy: "100% of the guests could sit inside.",
      example: "<strong>All visitors may enter after registration</strong>.",
      wrong: {
        each: "<strong>each guests</strong> is wrong because <strong>each</strong> requires singular <strong>guest</strong>.",
        every: "<strong>every guests</strong> is wrong because <strong>every</strong> requires singular <strong>guest</strong>.",
        "all of": "<strong>all of guests</strong> is wrong without a determiner; say <strong>all of the guests</strong>."
      }
    },
    {
      stem: "The officer said that ___ of the guests could sit inside because the hall had enough chairs.",
      options: ofOptions,
      correctAnswer: "all of",
      rule: "<strong>All of + plural noun phrase</strong> refers to 100% of a specific group.",
      why: "The phrase is <strong>the guests</strong>. The sentence means the whole known group could sit inside.",
      correctWhy: "not some guests, but the entire group.",
      example: "<strong>All of the passengers found seats</strong>.",
      wrong: {
        "each of": "<strong>each of the guests could</strong> is grammatical, but the sentence emphasizes capacity for the whole group, so <strong>all of</strong> is better.",
        "every one of": "<strong>every one of the guests could</strong> is grammatical but heavier than necessary.",
        all: "The blank is followed by <strong>of the guests</strong>, so the full expression must be <strong>all of</strong>."
      }
    },
    {
      stem: "The accountant checked the reimbursement claims and found that ___ one of the bills had a proper signature.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "every",
      rule: "<strong>Every one of + plural noun phrase</strong> is singular and means every individual member.",
      why: "The word <strong>one</strong> is already present after the blank. The correct expression is <strong>every one of the bills</strong>.",
      correctWhy: "the sentence says 100% of the bills had proper signatures.",
      example: "<strong>Every one of the forms was signed</strong>.",
      wrong: {
        each: "<strong>each one of the bills</strong> is also grammatical, but this sentence's wording with <strong>one</strong> and a universal audit result fits <strong>every one</strong>.",
        all: "<strong>all one of the bills</strong> is ungrammatical.",
        "all of": "<strong>all of one of the bills</strong> is ungrammatical."
      }
    },
    {
      stem: "The accountant checked the reimbursement claims and found that ___ of the bills had proper signatures.",
      options: ofOptions,
      correctAnswer: "all of",
      rule: "<strong>All of + plural noun phrase</strong> can take a plural verb and describe the whole group.",
      why: "The subject is <strong>all of the bills</strong>, and the verb is plural: <strong>had</strong>. The sentence says 100% of the bills had signatures.",
      correctWhy: "it talks about the bills as a complete set.",
      example: "<strong>All of the receipts had stamps</strong>.",
      wrong: {
        "each of": "<strong>each of the bills had</strong> is grammatical, but it emphasizes bill-by-bill checking; the sentence reports the whole group result, so <strong>all of</strong> is more direct.",
        "every one of": "<strong>every one of the bills had</strong> is grammatical, but heavier than needed.",
        all: "The sentence already includes <strong>of the bills</strong>, so the expression must be <strong>all of</strong>."
      }
    },
    {
      stem: "The children stood in a circle, and the teacher gave ___ child a card with a different word written on it.",
      options: oneByOneOptions,
      correctAnswer: "each",
      rule: "<strong>Each</strong> is preferred when every person receives a different individual item.",
      why: "The sentence says every child got a card with a different word. That is individual distribution, so <strong>each child</strong> fits.",
      correctWhy: "one card went to one child, and the cards were not identical.",
      example: "<strong>Each child received a different colour</strong>.",
      wrong: {
        every: "<strong>every child</strong> is grammatical, but it does not emphasize different individual cards as clearly.",
        all: "<strong>all child</strong> is wrong; use <strong>all children</strong>.",
        "all of": "<strong>all of child</strong> is wrong; use <strong>all of the children</strong>."
      }
    },
    {
      stem: "The children stood in a circle, and ___ children sang the same song before the annual function began.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "<strong>All + plural noun</strong> is used when the group acts together.",
      why: "The noun is plural: <strong>children</strong>. Singing the same song is a group activity here, so <strong>all children</strong> is correct.",
      correctWhy: "the whole group sang the same song.",
      example: "<strong>All students joined the prayer</strong>.",
      wrong: {
        each: "<strong>each children</strong> is wrong because <strong>each</strong> takes singular <strong>child</strong>.",
        every: "<strong>every children</strong> is wrong because <strong>every</strong> takes singular <strong>child</strong>.",
        "all of": "<strong>all of children</strong> is wrong without a determiner; use <strong>all of the children</strong>."
      }
    },
    {
      stem: "The medicine was expensive, but the health worker ensured that ___ patient received a full dose before leaving the camp.",
      options: oneByOneOptions,
      correctAnswer: "each",
      rule: "<strong>Each</strong> emphasizes equal individual distribution.",
      why: "The sentence focuses on patients receiving full doses individually. <strong>Patient</strong> is singular, and the health worker ensures one full dose per patient.",
      correctWhy: "no patient's dose is being treated as part of a shared group amount.",
      example: "<strong>Each patient received a separate prescription</strong>.",
      wrong: {
        every: "<strong>every patient</strong> is grammatical, but <strong>each patient</strong> better emphasizes individual distribution of doses.",
        all: "<strong>all patient</strong> is wrong; use <strong>all patients</strong>.",
        "all of": "<strong>all of patient</strong> is wrong; use <strong>all of the patients</strong>."
      }
    },
    {
      stem: "The medicine was expensive, but the health worker ensured that ___ patients received full doses before leaving the camp.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "<strong>All + plural noun</strong> refers to 100% of a group.",
      why: "The noun is plural: <strong>patients</strong>. The sentence says no patient was excluded.",
      correctWhy: "the whole patient group received full doses.",
      example: "<strong>All workers received safety kits</strong>.",
      wrong: {
        each: "<strong>each patients</strong> is wrong because <strong>each</strong> takes singular <strong>patient</strong>.",
        every: "<strong>every patients</strong> is wrong because <strong>every</strong> takes singular <strong>patient</strong>.",
        "all of": "<strong>all of patients</strong> is wrong without a determiner; use <strong>all of the patients</strong>."
      }
    },
    {
      stem: "The officer read the guidelines carefully and realised that ___ document in the file had to be uploaded separately.",
      options: oneByOneOptions,
      correctAnswer: "each",
      rule: "<strong>Each</strong> fits when separate action is required for every item.",
      why: "The document upload is separate for every document. <strong>Document</strong> is singular, so <strong>each document</strong> fits.",
      correctWhy: "the uploading happens document by document.",
      example: "<strong>Each certificate must be uploaded separately</strong>.",
      wrong: {
        every: "<strong>every document</strong> is grammatical, but <strong>each document</strong> better matches <strong>separately</strong>.",
        all: "<strong>all document</strong> is wrong; use <strong>all documents</strong>.",
        "all of": "<strong>all of document</strong> is wrong; use <strong>all of the documents</strong>."
      }
    },
    {
      stem: "The officer read the guidelines carefully and realised that ___ documents in the file had to be uploaded before the deadline.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "<strong>All + plural noun</strong> covers 100% of the group.",
      why: "The noun is plural: <strong>documents</strong>. The sentence is about completing the whole upload requirement before the deadline.",
      correctWhy: "every document in the set must be uploaded.",
      example: "<strong>All certificates must be uploaded</strong>.",
      wrong: {
        each: "<strong>each documents</strong> is wrong because <strong>each</strong> takes singular <strong>document</strong>.",
        every: "<strong>every documents</strong> is wrong because <strong>every</strong> takes singular <strong>document</strong>.",
        "all of": "<strong>all of documents</strong> is wrong without a determiner; use <strong>all of the documents</strong>."
      }
    },
    {
      stem: "The students had solved six mock papers, and the mentor discussed ___ of them during the revision class.",
      options: ofOptions,
      correctAnswer: "all of",
      rule: "<strong>All of + pronoun</strong> is used for the whole known group.",
      why: "The pronoun <strong>them</strong> refers to six mock papers. The mentor discussed the whole set, so <strong>all of them</strong> is correct.",
      correctWhy: "100% of the six mock papers were discussed.",
      example: "<strong>I reviewed all of them</strong>.",
      wrong: {
        "each of": "<strong>each of them</strong> would mean paper-by-paper discussion, but the sentence only says the whole set was discussed.",
        "every one of": "<strong>every one of them</strong> is grammatical but heavier than needed.",
        all: "<strong>all them</strong> is wrong; before a pronoun, use <strong>all of them</strong>."
      }
    },
    {
      stem: "The students had solved six mock papers, and the mentor discussed ___ of them separately during the revision class.",
      options: ofOptions,
      correctAnswer: "each of",
      rule: "<strong>Each of + pronoun</strong> is used for separate treatment of known items.",
      why: "The word <strong>separately</strong> shows that the six mock papers were discussed one by one. Therefore <strong>each of them</strong> is correct.",
      correctWhy: "each mock paper received individual discussion.",
      example: "<strong>The teacher corrected each of them separately</strong>.",
      wrong: {
        "every one of": "<strong>every one of them separately</strong> is grammatical, but <strong>each of them separately</strong> is more natural and concise.",
        "all of": "<strong>all of them separately</strong> conflicts because <strong>all</strong> views them as a whole, while separately stresses individual treatment.",
        all: "<strong>all them</strong> is wrong; use <strong>all of them</strong> before a pronoun."
      }
    },
    {
      stem: "The article explained that ___ child wore a hat means one hat per child, while all the children wore a hat can suggest one shared hat.",
      options: oneByOneOptions,
      correctAnswer: "each",
      rule: "<strong>Each/every + singular count noun</strong> normally distributes objects one by one.",
      why: "The sentence is specifically explaining individual distribution: one hat per child. <strong>Each child wore a hat</strong> clearly gives that meaning.",
      correctWhy: "the hat is distributed to individual children.",
      example: "<strong>Each child carried a bag</strong> means every child had one bag.",
      wrong: {
        every: "<strong>every child wore a hat</strong> also gives one hat per child, but the sentence contrasts distribution most clearly with <strong>each</strong>.",
        all: "<strong>all child</strong> is wrong; use <strong>all children</strong>.",
        "all of": "<strong>all of child</strong> is wrong; use <strong>all of the children</strong>."
      }
    },
    {
      stem: "The article explained that ___ children wore hats clearly means 100% of the children had hats on their heads.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "With <strong>all</strong>, use a plural object if every member has one individually.",
      why: "The noun after the blank is plural: <strong>children</strong>. The object is also plural: <strong>hats</strong>. Therefore <strong>all children wore hats</strong> clearly means everyone had hats.",
      correctWhy: "plural <strong>hats</strong> avoids the shared-one-hat reading.",
      example: "<strong>All students brought notebooks</strong> means every student had a notebook.",
      wrong: {
        each: "<strong>each children</strong> is wrong because <strong>each</strong> takes singular <strong>child</strong>.",
        every: "<strong>every children</strong> is wrong because <strong>every</strong> takes singular <strong>child</strong>.",
        "all of": "<strong>all of children</strong> is wrong without a determiner; say <strong>all of the children</strong>."
      }
    },
    {
      stem: "The article explained that ___ the children wore a hat may sound as if the group shared one hat.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "<strong>All the + plural noun</strong> views the group as a whole.",
      why: "The phrase after the blank is <strong>the children</strong>. <strong>All the children</strong> treats them as a whole group. With singular object <strong>a hat</strong>, it can suggest one shared hat.",
      correctWhy: "the sentence is about the group-as-a-whole reading.",
      example: "<strong>All the players lifted a trophy</strong> may suggest one trophy shared by the team.",
      wrong: {
        each: "<strong>each the children</strong> is ungrammatical; use <strong>each child</strong> or <strong>each of the children</strong>.",
        every: "<strong>every the children</strong> is ungrammatical; use <strong>every child</strong>.",
        "all of": "<strong>all of the children</strong> is grammatical, but the sentence's pattern is <strong>___ the children</strong>, so <strong>all</strong> is the direct fit."
      }
    },
    {
      stem: "The residents were angry because ___ of the promised streetlights had been installed even after six months.",
      options: ["not every", "not all", "each", "all"],
      correctAnswer: "not all",
      rule: "<strong>Not all of + plural noun phrase</strong> means less than 100% of the group.",
      why: "The phrase after the blank is <strong>of the promised streetlights</strong>. The residents are angry because the promise was not fully completed.",
      correctWhy: "some streetlights were still missing.",
      example: "<strong>Not all of the rooms have been cleaned</strong> means some rooms remain uncleaned.",
      wrong: {
        "not every": "<strong>not every of the promised streetlights</strong> is ungrammatical; use <strong>not every promised streetlight</strong>.",
        each: "<strong>each of the promised streetlights had been installed</strong> would mean 100%, the opposite of the complaint.",
        all: "<strong>all of the promised streetlights had been installed</strong> would also mean 100%, which contradicts the anger."
      }
    },
    {
      stem: "The residents were angry because ___ promised streetlight had been installed even after six months.",
      options: ["not every", "not all", "each", "all"],
      correctAnswer: "not every",
      rule: "<strong>Not every + singular count noun</strong> means the statement is not true for 100% of the group.",
      why: "The noun after the blank is singular: <strong>promised streetlight</strong>. The sentence means some lights were not installed.",
      correctWhy: "less than 100% of the promised streetlights had been installed.",
      example: "<strong>Not every application was approved</strong> means some applications were rejected.",
      wrong: {
        "not all": "<strong>not all promised streetlight</strong> is wrong because <strong>all</strong> needs plural <strong>streetlights</strong>.",
        each: "<strong>each promised streetlight had been installed</strong> means 100%, which contradicts the sentence.",
        all: "<strong>all promised streetlight</strong> is ungrammatical with singular <strong>streetlight</strong>."
      }
    },
    {
      stem: "The relief packets were numbered, and ___ packet contained rice, lentils, oil, and a packet of salt.",
      options: oneByOneOptions,
      correctAnswer: "every",
      rule: "<strong>Every + singular count noun</strong> is used when the same contents apply to all items.",
      why: "The sentence states the standard content of all relief packets. <strong>Packet</strong> is singular after <strong>every</strong>.",
      correctWhy: "all packets contained the same set of items.",
      example: "<strong>Every kit contained a torch</strong>.",
      wrong: {
        each: "<strong>each packet</strong> is grammatical, but the sentence describes a standard package rule, so <strong>every</strong> is more natural.",
        all: "<strong>all packet</strong> is wrong; use <strong>all packets</strong>.",
        "all of": "<strong>all of packet</strong> is wrong; use <strong>all of the packets</strong>."
      }
    },
    {
      stem: "The relief packets were numbered, and ___ of the packets contained rice, lentils, oil, and a packet of salt.",
      options: ofOptions,
      correctAnswer: "all of",
      rule: "<strong>All of + plural noun phrase</strong> reports something true for the complete set.",
      why: "The phrase is <strong>the packets</strong>, and the verb <strong>contained</strong> can agree with plural <strong>packets</strong>. The sentence says 100% of packets had the listed items.",
      correctWhy: "the whole set of packets had the same contents.",
      example: "<strong>All of the kits contained medicine</strong>.",
      wrong: {
        "each of": "<strong>each of the packets contained</strong> is grammatical and individual, but the sentence reports the contents of the complete set; <strong>all of</strong> is the direct group expression.",
        "every one of": "<strong>every one of the packets</strong> is grammatical but heavier than needed.",
        all: "The blank is followed by <strong>of the packets</strong>, so the expression must be <strong>all of</strong>."
      }
    },
    {
      stem: "The software company promised that ___ customer would receive a unique activation key by email.",
      options: oneByOneOptions,
      correctAnswer: "each",
      rule: "<strong>Each</strong> is preferred when every member receives a unique individual item.",
      why: "The activation key is unique for every customer. That individual distribution makes <strong>each customer</strong> the best choice.",
      correctWhy: "customer 1 receives one unique key, customer 2 receives another, and so on.",
      example: "<strong>Each user received a unique password</strong>.",
      wrong: {
        every: "<strong>every customer</strong> is grammatical, but <strong>each</strong> better highlights unique individual keys.",
        all: "<strong>all customer</strong> is wrong; use <strong>all customers</strong>.",
        "all of": "<strong>all of customer</strong> is wrong; use <strong>all of the customers</strong>."
      }
    },
    {
      stem: "The software company promised that ___ customers would receive activation keys by email before the launch.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "all",
      rule: "<strong>All + plural noun</strong> is used for 100% of a group.",
      why: "The noun is plural: <strong>customers</strong>. The sentence says every customer in the group would receive keys.",
      correctWhy: "the promise covers the whole customer group.",
      example: "<strong>All users will receive a password</strong>.",
      wrong: {
        each: "<strong>each customers</strong> is wrong because <strong>each</strong> takes singular <strong>customer</strong>.",
        every: "<strong>every customers</strong> is wrong because <strong>every</strong> takes singular <strong>customer</strong>.",
        "all of": "<strong>all of customers</strong> is wrong without a determiner; use <strong>all of the customers</strong>."
      }
    },
    {
      stem: "The applicants waited outside the hall, and the clerk called them ___ by name before checking their documents.",
      options: ["each", "every", "all", "all of"],
      correctAnswer: "each",
      rule: "<strong>Each</strong> after an object pronoun can show individual treatment.",
      why: "The object pronoun is <strong>them</strong>. The clerk calls applicants by name one at a time, so <strong>called them each by name</strong> is correct.",
      correctWhy: "each applicant is called individually.",
      example: "<strong>The teacher asked them each a question</strong>.",
      wrong: {
        every: "<strong>called them every by name</strong> is ungrammatical.",
        all: "<strong>called them all by name</strong> can mean called the whole group, but it is less precise than <strong>each</strong> for individual name-by-name calling.",
        "all of": "<strong>called them all of by name</strong> is ungrammatical."
      }
    },
    {
      stem: "The applicants waited outside the hall, and the clerk called ___ of them into the room at once because the panel wanted a group briefing.",
      options: ofOptions,
      correctAnswer: "all of",
      rule: "<strong>All of + pronoun</strong> treats the known group as a whole.",
      why: "The phrase <strong>at once</strong> and <strong>group briefing</strong> show that the applicants entered together. Therefore <strong>all of them</strong> is correct.",
      correctWhy: "the group is moved together, not one by one.",
      example: "<strong>The guard allowed all of them inside together</strong>.",
      wrong: {
        "each of": "<strong>each of them</strong> would suggest individual entry, which conflicts with <strong>at once</strong>.",
        "every one of": "<strong>every one of them</strong> is possible but less natural for group movement at once.",
        all: "<strong>all them</strong> is wrong; before a pronoun use <strong>all of them</strong>."
      }
    }
  ];

  return seeds.map(makeQuestion);
})();
