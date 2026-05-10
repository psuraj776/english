// 500 vocabulary cards for the English app.
// Built around SBI/IBPS PO synonym-antonym patterns and Hindu-editorial style vocabulary.
globalThis.VOCAB_QUESTION_DATA = (() => {
  const source = "SBI/IBPS PO PYQ + Hindu editorial vocabulary pattern";
  const category = "Vocabulary: SBI/IBPS PO + Hindu Editorial";

  const clusters = [
    ["to reduce or become less intense", ["abate", "subside", "diminish", "wane", "ebb"], ["intensify", "escalate", "amplify"], ["abatement", "reduction", "moderation"]],
    ["to increase sharply or become stronger", ["escalate", "intensify", "amplify", "surge", "soar"], ["abate", "decline", "decrease"], ["upsurge", "rise", "acceleration"]],
    ["to criticize or warn strongly", ["censure", "rebuke", "admonish", "reprimand", "upbraid"], ["praise", "commend", "approve"], ["criticism", "warning", "disapproval"]],
    ["to praise highly", ["laud", "commend", "extol", "eulogize", "acclaim"], ["condemn", "criticize", "denounce"], ["praise", "tribute", "appreciation"]],
    ["kept secret or done secretly", ["clandestine", "covert", "surreptitious", "furtive", "stealthy"], ["open", "overt", "public"], ["secrecy", "concealment", "undercover"]],
    ["clear and easy to understand", ["lucid", "explicit", "unambiguous", "coherent", "intelligible"], ["vague", "obscure", "confusing"], ["clarity", "explanation", "precision"]],
    ["unclear or difficult to understand", ["obscure", "ambiguous", "nebulous", "opaque", "cryptic"], ["clear", "lucid", "explicit"], ["ambiguity", "confusion", "vagueness"]],
    ["showing great care and effort", ["meticulous", "diligent", "assiduous", "scrupulous", "painstaking"], ["careless", "negligent", "lazy"], ["care", "precision", "thoroughness"]],
    ["not careful enough", ["negligent", "lax", "remiss", "slipshod", "heedless"], ["careful", "diligent", "vigilant"], ["carelessness", "neglect", "oversight"]],
    ["refusing to change one's opinion", ["obstinate", "obdurate", "adamant", "intransigent", "headstrong"], ["flexible", "yielding", "compliant"], ["stubbornness", "resistance", "rigidity"]],
    ["easy to influence or adapt", ["pliant", "adaptable", "malleable", "amenable", "tractable"], ["rigid", "stubborn", "defiant"], ["flexibility", "compliance", "adjustment"]],
    ["brief but clearly expressed", ["succinct", "concise", "terse", "laconic", "pithy"], ["verbose", "wordy", "lengthy"], ["brevity", "summary", "precision"]],
    ["using too many words", ["verbose", "prolix", "wordy", "rambling", "expansive"], ["succinct", "concise", "brief"], ["wordiness", "repetition", "elaboration"]],
    ["calm and peaceful", ["serene", "tranquil", "placid", "composed", "unruffled"], ["agitated", "turbulent", "anxious"], ["calmness", "peace", "poise"]],
    ["wildly excited or disorderly", ["tumultuous", "turbulent", "frenzied", "hectic", "disorderly"], ["calm", "orderly", "peaceful"], ["chaos", "uproar", "agitation"]],
    ["causing harm or damage", ["detrimental", "deleterious", "pernicious", "adverse", "injurious"], ["beneficial", "helpful", "salutary"], ["harm", "damage", "risk"]],
    ["producing a good effect", ["beneficial", "conducive", "salutary", "advantageous", "constructive"], ["harmful", "adverse", "damaging"], ["benefit", "support", "improvement"]],
    ["lasting for only a short time", ["transient", "fleeting", "ephemeral", "transitory", "short-lived"], ["permanent", "enduring", "lasting"], ["temporariness", "moment", "passing"]],
    ["continuing for a long time", ["enduring", "perpetual", "persistent", "permanent", "abiding"], ["temporary", "fleeting", "brief"], ["continuity", "duration", "stability"]],
    ["a lack or shortage", ["scarcity", "dearth", "paucity", "deficit", "insufficiency"], ["abundance", "surplus", "plenty"], ["shortage", "lack", "need"]],
    ["a large or more-than-enough amount", ["plenty", "profusion", "plethora", "surplus", "copiousness"], ["scarcity", "deficit", "shortage"], ["abundance", "overflow", "excess"]],
    ["courage in difficulty", ["valor", "bravery", "fortitude", "resilience", "mettle"], ["cowardice", "fear", "timidity"], ["courage", "strength", "endurance"]],
    ["fear or worry about something", ["apprehension", "dread", "trepidation", "anxiety", "alarm"], ["confidence", "calm", "assurance"], ["fear", "unease", "concern"]],
    ["strong anger or displeasure", ["ire", "wrath", "fury", "indignation", "resentment"], ["calm", "delight", "approval"], ["anger", "outrage", "annoyance"]],
    ["general agreement", ["consensus", "accord", "concord", "harmony", "concurrence"], ["dispute", "discord", "conflict"], ["agreement", "unity", "alignment"]],
    ["disagreement or conflict", ["contention", "discord", "dispute", "strife", "friction"], ["agreement", "harmony", "accord"], ["conflict", "debate", "opposition"]],
    ["dishonest trickery", ["deceit", "duplicity", "subterfuge", "ruse", "fraud"], ["honesty", "candor", "integrity"], ["trick", "deception", "manipulation"]],
    ["honesty and moral soundness", ["integrity", "candor", "probity", "sincerity", "truthfulness"], ["deceit", "dishonesty", "duplicity"], ["honesty", "ethics", "openness"]],
    ["extreme poverty", ["penury", "destitution", "deprivation", "indigence", "want"], ["wealth", "affluence", "prosperity"], ["poverty", "hardship", "need"]],
    ["wealth and financial comfort", ["prosperity", "affluence", "opulence", "riches", "wealth"], ["poverty", "penury", "destitution"], ["abundance", "income", "comfort"]],
    ["inactivity caused by tiredness or dullness", ["torpor", "lethargy", "inertia", "lassitude", "sloth"], ["energy", "vigor", "activity"], ["idleness", "stagnation", "fatigue"]],
    ["energy and liveliness", ["vigor", "vitality", "dynamism", "verve", "liveliness"], ["lethargy", "torpor", "inertia"], ["energy", "force", "animation"]],
    ["free from outside control", ["autonomous", "sovereign", "self-reliant", "free", "unfettered"], ["dependent", "subordinate", "controlled"], ["autonomy", "freedom", "independence"]],
    ["controlled by or relying on another", ["subservient", "reliant", "subordinate", "beholden", "subject"], ["independent", "free", "autonomous"], ["dependence", "obedience", "submission"]],
    ["a reason or logical basis", ["rationale", "logic", "basis", "justification", "grounds"], ["irrationality", "whim", "impulse"], ["reasoning", "explanation", "cause"]],
    ["a result or effect", ["consequence", "repercussion", "corollary", "outcome", "aftermath"], ["cause", "origin", "source"], ["result", "impact", "effect"]],
    ["close and careful examination", ["scrutiny", "vetting", "appraisal", "assessment", "evaluation"], ["neglect", "ignorance", "oversight"], ["review", "inspection", "analysis"]],
    ["to fail to notice or consider", ["neglect", "disregard", "overlook", "bypass", "sideline"], ["notice", "heed", "consider"], ["ignorance", "omission", "avoidance"]],
    ["to support or strengthen", ["bolster", "buttress", "reinforce", "uphold", "sustain"], ["weaken", "undermine", "oppose"], ["support", "backing", "strengthening"]],
    ["to oppose or refuse to accept", ["resist", "counter", "challenge", "contest", "defy"], ["support", "accept", "obey"], ["opposition", "resistance", "defiance"]],
    ["to begin or start", ["commence", "initiate", "launch", "inaugurate", "embark"], ["end", "terminate", "conclude"], ["beginning", "start", "opening"]],
    ["to bring to an end", ["conclude", "terminate", "cease", "culminate", "finish"], ["begin", "commence", "initiate"], ["ending", "closure", "completion"]],
    ["very strict or demanding", ["stringent", "rigorous", "exacting", "severe", "stern"], ["lenient", "mild", "relaxed"], ["strictness", "discipline", "severity"]],
    ["not strict; forgiving", ["indulgent", "permissive", "tolerant", "forgiving", "merciful"], ["strict", "severe", "stern"], ["leniency", "mercy", "tolerance"]],
    ["not genuine or false", ["spurious", "bogus", "counterfeit", "sham", "forged"], ["genuine", "authentic", "real"], ["falsity", "imitation", "fake"]],
    ["real and trustworthy", ["authentic", "legitimate", "bona fide", "real", "valid"], ["fake", "bogus", "spurious"], ["truth", "genuineness", "credibility"]],
    ["extremely important", ["pivotal", "crucial", "vital", "significant", "paramount"], ["trivial", "minor", "negligible"], ["importance", "priority", "necessity"]],
    ["not important", ["trivial", "negligible", "marginal", "minor", "inconsequential"], ["important", "crucial", "vital"], ["smallness", "detail", "insignificance"]],
    ["sudden or unexpected", ["abrupt", "unexpected", "unforeseen", "swift", "instantaneous"], ["gradual", "expected", "slow"], ["surprise", "speed", "shock"]],
    ["happening slowly in stages", ["gradual", "incremental", "progressive", "steady", "phased"], ["sudden", "abrupt", "instant"], ["progression", "pace", "development"]],
    ["ready to fight or argue", ["belligerent", "hostile", "combative", "bellicose", "militant"], ["peaceful", "friendly", "conciliatory"], ["aggression", "hostility", "conflict"]],
    ["friendly or nonviolent", ["pacific", "conciliatory", "amicable", "nonviolent", "harmonious"], ["hostile", "belligerent", "violent"], ["peace", "friendship", "settlement"]],
    ["physically or morally weak", ["feeble", "frail", "fragile", "infirm", "vulnerable"], ["strong", "robust", "sturdy"], ["weakness", "risk", "delicacy"]],
    ["strong and able to withstand stress", ["robust", "sturdy", "resilient", "potent", "powerful"], ["weak", "frail", "fragile"], ["strength", "force", "durability"]],
    ["dangerous or uncertain", ["precarious", "perilous", "hazardous", "fraught", "dicey"], ["safe", "secure", "stable"], ["risk", "danger", "uncertainty"]],
    ["free from danger", ["secure", "protected", "guarded", "sheltered", "risk-free"], ["unsafe", "risky", "exposed"], ["safety", "protection", "security"]],
    ["relating to the countryside", ["bucolic", "pastoral", "rustic", "agrarian", "rural"], ["urban", "metropolitan", "city-based"], ["village", "farm", "countryside"]],
    ["relating to a city", ["metropolitan", "civic", "municipal", "cosmopolitan", "urban"], ["rural", "pastoral", "rustic"], ["city", "municipality", "urbanization"]],
    ["belonging to the present time", ["contemporary", "current", "up-to-date", "newfangled", "recent"], ["obsolete", "ancient", "outdated"], ["modernity", "present", "newness"]],
    ["old and no longer useful", ["archaic", "obsolete", "antiquated", "dated", "outmoded"], ["modern", "current", "updated"], ["oldness", "past", "disuse"]],
    ["highly skilled", ["adept", "proficient", "competent", "deft", "adroit"], ["inept", "unskilled", "clumsy"], ["skill", "ability", "expertise"]],
    ["lacking skill or grace", ["inept", "awkward", "bungling", "maladroit", "unskilled"], ["skilled", "deft", "adroit"], ["clumsiness", "inability", "mistake"]],
    ["excessively eager for wealth", ["avaricious", "covetous", "acquisitive", "grasping", "rapacious"], ["generous", "charitable", "altruistic"], ["greed", "desire", "hoarding"]],
    ["kind and willing to give", ["benevolent", "charitable", "magnanimous", "liberal", "altruistic"], ["selfish", "greedy", "mean"], ["generosity", "kindness", "giving"]],
    ["a false story or claim", ["canard", "falsehood", "fabrication", "hoax", "myth"], ["truth", "fact", "reality"], ["rumor", "lie", "misinformation"]],
    ["a short summary", ["compendium", "precis", "abstract", "synopsis", "digest"], ["expansion", "full text", "elaboration"], ["summary", "outline", "brief"]],
    ["requiring great effort", ["arduous", "onerous", "strenuous", "taxing", "challenging"], ["easy", "effortless", "simple"], ["difficulty", "burden", "effort"]],
    ["not difficult", ["effortless", "simple", "straightforward", "facile", "manageable"], ["difficult", "arduous", "complex"], ["ease", "simplicity", "clarity"]],
    ["plain, strict, or severe", ["austere", "bleak", "stark", "grim", "forbidding"], ["luxurious", "soft", "decorated"], ["severity", "plainness", "discipline"]],
    ["rich and luxurious", ["opulent", "lavish", "sumptuous", "plush", "luxurious"], ["austere", "plain", "simple"], ["luxury", "richness", "comfort"]],
    ["unpredictable or changeable", ["erratic", "volatile", "unpredictable", "capricious", "unstable"], ["steady", "stable", "predictable"], ["change", "risk", "instability"]],
    ["firm and not changing suddenly", ["stable", "consistent", "constant", "reliable", "dependable"], ["volatile", "erratic", "unstable"], ["steadiness", "reliability", "continuity"]],
    ["to forgive or free from blame", ["pardon", "absolve", "exonerate", "excuse", "acquit"], ["blame", "condemn", "convict"], ["forgiveness", "release", "mercy"]],
    ["to say someone is responsible for wrongdoing", ["accuse", "indict", "implicate", "fault", "condemn"], ["absolve", "pardon", "exonerate"], ["blame", "charge", "allegation"]],
    ["to hide or keep from view", ["conceal", "mask", "veil", "suppress", "cloak"], ["reveal", "expose", "disclose"], ["hiding", "cover", "secrecy"]],
    ["to make known", ["disclose", "unveil", "expose", "divulge", "uncover"], ["hide", "conceal", "suppress"], ["revelation", "openness", "discovery"]],
    ["to gather together", ["accumulate", "amass", "collect", "compile", "aggregate"], ["scatter", "disperse", "dissipate"], ["collection", "growth", "stockpile"]],
    ["to spread in different directions", ["disperse", "dissipate", "distribute", "strew", "diffuse"], ["gather", "collect", "concentrate"], ["spread", "scattering", "distribution"]],
    ["to use up resources", ["deplete", "exhaust", "drain", "consume", "expend"], ["replenish", "increase", "restore"], ["depletion", "use", "shortage"]],
    ["to increase or restore supply", ["augment", "replenish", "enhance", "expand", "boost"], ["deplete", "reduce", "drain"], ["increase", "addition", "growth"]],
    ["allowed by law or rule", ["legal", "permissible", "licit", "compliant", "authorized"], ["illegal", "illicit", "banned"], ["law", "permission", "approval"]],
    ["not allowed by law", ["illicit", "illegal", "unlawful", "prohibited", "banned"], ["legal", "permissible", "authorized"], ["crime", "ban", "violation"]],
    ["deeply moving emotionally", ["poignant", "moving", "touching", "stirring", "evocative"], ["dull", "unmoving", "flat"], ["emotion", "memory", "feeling"]],
    ["ordinary and not interesting", ["mundane", "prosaic", "tedious", "monotonous", "dreary"], ["lively", "interesting", "vivid"], ["dullness", "routine", "boredom"]],
    ["full of life and energy", ["vibrant", "vivacious", "animated", "spirited", "exuberant"], ["dull", "lifeless", "apathetic"], ["energy", "life", "enthusiasm"]],
    ["showing good judgment", ["prudent", "judicious", "sagacious", "sensible", "discerning"], ["reckless", "foolish", "rash"], ["wisdom", "judgment", "caution"]],
    ["showing poor judgment", ["imprudent", "reckless", "rash", "foolhardy", "unwise"], ["prudent", "careful", "sensible"], ["risk", "folly", "haste"]],
    ["polite and respectful", ["courteous", "civil", "gracious", "respectful", "urbane"], ["rude", "insolent", "brusque"], ["politeness", "manners", "respect"]],
    ["impolite or abrupt", ["brusque", "curt", "insolent", "impolite", "discourteous"], ["polite", "courteous", "civil"], ["rudeness", "sharpness", "disrespect"]],
    ["to calm someone's anger", ["appease", "placate", "pacify", "mollify", "conciliate"], ["provoke", "anger", "inflame"], ["calming", "peace", "settlement"]],
    ["to stir up or cause", ["incite", "instigate", "inflame", "arouse", "trigger"], ["calm", "appease", "pacify"], ["provocation", "cause", "spark"]],
    ["eager to know more", ["inquisitive", "probing", "interested", "intrigued", "questioning"], ["indifferent", "apathetic", "uninterested"], ["curiosity", "question", "interest"]],
    ["not interested or concerned", ["apathetic", "unconcerned", "detached", "disinterested", "aloof"], ["interested", "concerned", "involved"], ["indifference", "distance", "neutrality"]],
    ["too much or beyond what is reasonable", ["exorbitant", "undue", "immoderate", "disproportionate", "overblown"], ["moderate", "reasonable", "restrained"], ["excess", "extreme", "overstatement"]],
    ["not extreme; within limits", ["reasonable", "temperate", "restrained", "modest", "balanced"], ["excessive", "extreme", "immoderate"], ["moderation", "balance", "restraint"]],
    ["having many connected parts", ["intricate", "complicated", "convoluted", "elaborate", "tangled"], ["simple", "plain", "basic"], ["complexity", "detail", "structure"]],
    ["easy to understand", ["plain", "elementary", "basic", "clear-cut", "rudimentary"], ["complex", "intricate", "complicated"], ["simplicity", "basics", "clarity"]],
    ["to prove with evidence", ["substantiate", "corroborate", "validate", "verify", "confirm"], ["deny", "refute", "disprove"], ["proof", "evidence", "support"]],
    ["to show that something is false", ["refute", "rebut", "contradict", "repudiate", "disprove"], ["confirm", "validate", "prove"], ["denial", "argument", "rejection"]],
    ["to spread information widely", ["disseminate", "propagate", "circulate", "transmit", "publicize"], ["withhold", "suppress", "conceal"], ["spread", "communication", "publication"]]
  ];

  const entries = clusters.flatMap((cluster, clusterIndex) => {
    const [meaning, words, antonyms, related] = cluster;
    return words.map((word, wordIndex) => {
      const synonyms = words.filter((item) => item !== word);
      const sentence = `The editorial used "${word}" to describe a situation that was ${meaning}.`;
      return { word, meaning, synonyms, antonyms, related, sentence, clusterIndex, wordIndex };
    });
  });

  return entries.map((entry, index) => {
    const distractors = [1, 2, 3, 4].map((offset) => entries[(index + offset * 37) % entries.length].word);
    const options = [entry.word, ...distractors].sort(() => Math.random() - 0.5);
    return {
      category,
      source,
      stem: `Meaning: ${entry.meaning}`,
      options,
      correctAnswer: entry.word,
      prompt: "Choose the word that best matches the meaning.",
      explanation: [
        `<strong>${entry.word}</strong> means ${entry.meaning}.`,
        `<strong>Synonyms:</strong> ${entry.synonyms.join(", ")}.`,
        `<strong>Antonyms:</strong> ${entry.antonyms.join(", ")}.`,
        `<strong>Related words:</strong> ${entry.related.join(", ")}.`,
        `<strong>Sentence:</strong> ${entry.sentence}`,
        "Exam use: In SBI/IBPS PO and editorial vocabulary questions, first read the tone, then compare the exact meaning with nearby synonyms and antonyms."
      ].join("<br><br>")
    };
  });
})();
