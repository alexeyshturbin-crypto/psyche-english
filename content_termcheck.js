(() => { const C = window.CONTENT || (window.CONTENT = {});
  const P=(t,l,a)=>{C[t]=C[t]||{};C[t][l]=C[t][l]||[];a.forEach(x=>C[t][l].push(x));};

  P("termcheck","foundations",[
    {
      id:"tc-foundations-01",
      title:"Проверка: базовые понятия психоанализа",
      questions:[
        { q:"Which term refers to mental processes that are inaccessible to consciousness but still influence behavior?", options:["The unconscious","The preconscious","The conscious"], answer:0 },
        { q:"Free association refers to:", options:["The technique of saying whatever comes to mind without censorship","The therapist's free interpretation of dreams","A method of correcting irrational beliefs"], answer:0 },
        { q:"Which term names a wish or thought that is temporarily out of awareness but can be readily recalled?", options:["The preconscious","The id","Repression"], answer:0 },
        { q:"Psychic determinism is the principle that:", options:["Mental events are caused and have meaning, not random","Behavior is determined only by reinforcement","The future is fixed by destiny"], answer:0 }
      ]
    },
    {
      id:"tc-foundations-02",
      title:"Проверка: метод и сеттинг",
      questions:[
        { q:"Which term describes the analyst's stance of even, impartial attention to all the patient says?", options:["Evenly suspended (free-floating) attention","Confrontation","Reframing"], answer:0 },
        { q:"The 'fundamental rule' of psychoanalysis asks the patient to:", options:["Report everything that comes to mind without selection","Speak only about childhood","Avoid talking about the analyst"], answer:0 },
        { q:"Which term refers to the consistent set of arrangements (time, fee, frequency) within which analysis takes place?", options:["The frame (setting)","The transference","The working alliance"], answer:0 },
        { q:"Insight, in psychoanalytic usage, means:", options:["Conscious understanding of previously unconscious material","A sudden behavioral change","An interpretation made by the analyst"], answer:0 }
      ]
    }
  ]);

  P("termcheck","freud",[
    {
      id:"tc-freud-01",
      title:"Проверка: структурная модель Фрейда",
      questions:[
        { q:"Which agency in Freud's structural model operates on the pleasure principle?", options:["The id","The ego","The superego"], answer:0 },
        { q:"The reality principle is associated with:", options:["The ego","The id","The libido"], answer:0 },
        { q:"Which term names the internalized moral standards and conscience?", options:["The superego","The id","The preconscious"], answer:0 },
        { q:"The ego ideal refers to:", options:["The standard of perfection one strives toward","The most primitive instinctual drive","The repressed memory of trauma"], answer:0 }
      ]
    },
    {
      id:"tc-freud-02",
      title:"Проверка: влечения и сны у Фрейда",
      questions:[
        { q:"Which term denotes the psychic energy of the sexual/life drives?", options:["Libido","Cathexis","Sublimation"], answer:0 },
        { q:"The Oedipus complex refers to:", options:["The child's desire for the opposite-sex parent and rivalry with the same-sex parent","Fear of castration only","Envy of a sibling"], answer:0 },
        { q:"In dream theory, the 'manifest content' is:", options:["The remembered surface story of the dream","The hidden unconscious wish","The day residue"], answer:0 },
        { q:"Which term names the disguising of unconscious wishes in dreams via condensation and displacement?", options:["Dream-work","Secondary revision","Transference"], answer:0 }
      ]
    }
  ]);

  P("termcheck","technique",[
    {
      id:"tc-technique-01",
      title:"Проверка: техника интерпретации",
      questions:[
        { q:"Which intervention makes unconscious meaning conscious by explaining it to the patient?", options:["Interpretation","Confrontation","Clarification"], answer:0 },
        { q:"Working through refers to:", options:["The repeated process of integrating an insight over time","A single decisive interpretation","Termination of treatment"], answer:0 },
        { q:"Which term names pointing out something the patient is avoiding or not noticing?", options:["Confrontation","Reconstruction","Free association"], answer:0 },
        { q:"Clarification, as a technique, means:", options:["Bringing vague material into sharper focus before interpreting","Telling the patient what to do","Giving reassurance"], answer:0 }
      ]
    },
    {
      id:"tc-technique-02",
      title:"Проверка: рамка терапевтических отношений",
      questions:[
        { q:"Which term refers to the rational, cooperative bond between patient and analyst that supports the work?", options:["The working (therapeutic) alliance","The negative transference","Acting out"], answer:0 },
        { q:"Acting out refers to:", options:["Expressing unconscious conflict through action instead of words","Rehearsing behavior consciously","Following the analyst's advice"], answer:0 },
        { q:"Which term names the analyst's principle of minimizing gratification so conflict can be analyzed?", options:["Abstinence (the rule of abstinence)","Neutrality","Containment"], answer:0 },
        { q:"Analytic neutrality means the analyst:", options:["Remains equidistant from id, ego, superego and reality","Has no feelings toward the patient","Never speaks"], answer:0 }
      ]
    }
  ]);

  P("termcheck","defenses",[
    {
      id:"tc-defenses-01",
      title:"Проверка: основные защитные механизмы",
      questions:[
        { q:"Which defense keeps unacceptable thoughts or impulses out of consciousness?", options:["Repression","Projection","Sublimation"], answer:0 },
        { q:"Projection refers to:", options:["Attributing one's own unacceptable feelings to another person","Returning to an earlier developmental stage","Justifying behavior with logical reasons"], answer:0 },
        { q:"Which defense channels unacceptable impulses into socially valued activity?", options:["Sublimation","Denial","Reaction formation"], answer:0 },
        { q:"Reaction formation refers to:", options:["Adopting attitudes opposite to one's unacceptable impulses","Forgetting a traumatic event","Blaming oneself"], answer:0 }
      ]
    },
    {
      id:"tc-defenses-02",
      title:"Проверка: дополнительные защиты",
      questions:[
        { q:"Which defense separates an idea from its associated emotion?", options:["Isolation of affect","Displacement","Identification"], answer:0 },
        { q:"Displacement refers to:", options:["Redirecting feelings from the original target to a safer one","Refusing to accept reality","Imitating an admired figure"], answer:0 },
        { q:"Which defense involves refusing to acknowledge a painful external reality?", options:["Denial","Rationalization","Regression"], answer:0 },
        { q:"Undoing refers to:", options:["Performing an act to symbolically cancel a previous one","Returning to childlike behavior","Splitting good and bad"], answer:0 }
      ]
    }
  ]);

  P("termcheck","klein",[
    {
      id:"tc-klein-01",
      title:"Проверка: позиции по Кляйн",
      questions:[
        { q:"Which Kleinian position is characterized by splitting and persecutory anxiety?", options:["The paranoid-schizoid position","The depressive position","The Oedipal stage"], answer:0 },
        { q:"The depressive position refers to:", options:["Recognizing the object as whole (good and bad) and feeling concern/guilt","A clinical state of depression","Fear of annihilation"], answer:0 },
        { q:"Which term names the splitting of objects into idealized 'good' and persecutory 'bad'?", options:["Splitting","Reparation","Containment"], answer:0 },
        { q:"Reparation, in Klein, refers to:", options:["The wish to repair damage done in phantasy to the loved object","Returning to an earlier stage","Projecting badness outward"], answer:0 }
      ]
    },
    {
      id:"tc-klein-02",
      title:"Проверка: фантазия и проективная идентификация",
      questions:[
        { q:"Projective identification refers to:", options:["Putting unwanted parts of the self into another and experiencing them as in the other","Identifying with an admired person","Withdrawing from relationships"], answer:0 },
        { q:"Which term denotes the unconscious mental representations of instinctual life in Kleinian theory?", options:["Unconscious phantasy","Day residue","The reality principle"], answer:0 },
        { q:"Introjection refers to:", options:["Taking aspects of an external object into the inner world","Expelling bad feelings","Denying reality"], answer:0 },
        { q:"The 'good object' in Klein refers to:", options:["The internalized nurturing, satisfying aspect of the object","The superego","The id"], answer:0 }
      ]
    }
  ]);

  P("termcheck","winnicott",[
    {
      id:"tc-winnicott-01",
      title:"Проверка: понятия Винникотта",
      questions:[
        { q:"Which term names the object (e.g., a blanket) that bridges inner and outer reality for the infant?", options:["The transitional object","The good object","The part-object"], answer:0 },
        { q:"The 'good enough mother' refers to:", options:["A caregiver who adapts adequately, not perfectly, to the infant's needs","A mother who never frustrates the child","An idealized internal object"], answer:0 },
        { q:"Which term describes the mother's reliable provision of a safe psychological environment?", options:["Holding","Mirroring","Containing"], answer:0 },
        { q:"The 'false self' refers to:", options:["A compliant facade built to meet others' demands at the expense of authentic experience","A grandiose self-image","The moral conscience"], answer:0 }
      ]
    },
    {
      id:"tc-winnicott-02",
      title:"Проверка: игра и пространство Винникотта",
      questions:[
        { q:"Which term names the intermediate area of experience where play and creativity occur?", options:["Transitional space (potential space)","The depressive position","The reality principle"], answer:0 },
        { q:"The 'true self', for Winnicott, refers to:", options:["The spontaneous, authentic core of the personality","The internalized parents","A defensive structure"], answer:0 },
        { q:"Which concept describes the infant's early sense that the world is its own creation?", options:["The illusion of omnipotence","Primary repression","Sublimation"], answer:0 },
        { q:"'Primary maternal preoccupation' refers to:", options:["The mother's heightened devoted attunement to the newborn","A pathological obsession","The infant's attachment style"], answer:0 }
      ]
    }
  ]);

  P("termcheck","bion",[
    {
      id:"tc-bion-01",
      title:"Проверка: контейнирование по Биону",
      questions:[
        { q:"Which Bionian concept describes the caregiver receiving and detoxifying the infant's raw emotions?", options:["Container/contained","Reverie alone","Splitting"], answer:0 },
        { q:"Reverie, in Bion, refers to:", options:["The mother's receptive state for taking in the infant's projections","Daydreaming as avoidance","A type of free association"], answer:0 },
        { q:"Which term names raw, unprocessed sensory and emotional data in Bion's theory?", options:["Beta elements","Alpha elements","Selected fact"], answer:0 },
        { q:"Alpha function refers to:", options:["The mental capacity that transforms raw experience into usable thoughts","The death drive","A defense mechanism"], answer:0 }
      ]
    },
    {
      id:"tc-bion-02",
      title:"Проверка: мышление и группы у Биона",
      questions:[
        { q:"Which Bionian instruction advises the analyst to approach each session free of memory and expectation?", options:["Without memory or desire","Free association","Confrontation"], answer:0 },
        { q:"Alpha elements are:", options:["Processed experiences available for thinking, dreaming and memory","Unprocessed sensory impressions","Persecutory objects"], answer:0 },
        { q:"Which term names Bion's shared unconscious group assumptions (e.g., dependency, fight-flight)?", options:["Basic assumptions","Group ego","Transference"], answer:0 },
        { q:"The 'selected fact', in Bion, refers to:", options:["The element that suddenly gives coherence to scattered material","A factual memory","An interpretation rejected by the patient"], answer:0 }
      ]
    }
  ]);

  P("termcheck","lacan",[
    {
      id:"tc-lacan-01",
      title:"Проверка: регистры Лакана",
      questions:[
        { q:"Which Lacanian register is the order of language, law and social structure?", options:["The Symbolic","The Imaginary","The Real"], answer:0 },
        { q:"The Imaginary, in Lacan, refers to:", options:["The realm of images, identification and the ego","The order of language","That which resists symbolization"], answer:0 },
        { q:"Which Lacanian term names that which cannot be symbolized or fully represented?", options:["The Real","The Symbolic","The Other"], answer:0 },
        { q:"The mirror stage refers to:", options:["The infant's identification with its image, forming the ego","The Oedipal resolution","Entry into language"], answer:0 }
      ]
    },
    {
      id:"tc-lacan-02",
      title:"Проверка: желание и Другой у Лакана",
      questions:[
        { q:"Which term names the unattainable object-cause of desire in Lacan?", options:["Objet petit a","The phallus","The ego ideal"], answer:0 },
        { q:"The 'big Other' (l'Autre) refers to:", options:["The symbolic order/locus of language and law beyond any individual","The mother specifically","The unconscious id"], answer:0 },
        { q:"For Lacan, 'the unconscious is structured like...':", options:["A language","A drive","An image"], answer:0 },
        { q:"Jouissance, in Lacan, refers to:", options:["An excessive enjoyment beyond the pleasure principle","Ordinary pleasure","Sublimated desire"], answer:0 }
      ]
    }
  ]);

  P("termcheck","ego_self",[
    {
      id:"tc-ego_self-01",
      title:"Проверка: эго-психология",
      questions:[
        { q:"Which term names ego capacities (perception, memory, motility) assumed free of conflict?", options:["Conflict-free ego sphere","Superego lacuna","Object constancy"], answer:0 },
        { q:"Adaptation, in ego psychology (Hartmann), refers to:", options:["The fit between the individual and the environment","A defense mechanism","A drive derivative"], answer:0 },
        { q:"Which term refers to the ego's overall efficiency in mediating among id, superego and reality?", options:["Ego strength","Libido","Cathexis"], answer:0 },
        { q:"Neutralization refers to:", options:["Transforming raw drive energy into a form usable by the ego","Repressing an impulse","Splitting the object"], answer:0 }
      ]
    },
    {
      id:"tc-ego_self-02",
      title:"Проверка: психология самости (Кохут)",
      questions:[
        { q:"Which Kohutian term names an object experienced as part of the self that provides needed functions?", options:["Selfobject","Part-object","Transitional object"], answer:0 },
        { q:"Mirroring, in self psychology, refers to:", options:["The selfobject's affirming, validating response to the child","Imitating the parent","Reflecting on one's actions"], answer:0 },
        { q:"Which term names the empathic understanding of another's inner experience, central to Kohut?", options:["Vicarious introspection (empathy)","Interpretation","Confrontation"], answer:0 },
        { q:"A 'fragmentation' experience in self psychology refers to:", options:["A breakdown in the cohesion of the self","A defense mechanism","Splitting of the object"], answer:0 }
      ]
    }
  ]);

  P("termcheck","development",[
    {
      id:"tc-development-01",
      title:"Проверка: ранее развитие и привязанность",
      questions:[
        { q:"Which Mahlerian phase names the child's achievement of a stable separate identity?", options:["Separation-individuation","Symbiosis","Latency"], answer:0 },
        { q:"Object constancy refers to:", options:["The capacity to maintain a stable inner image of a person despite frustration","Attachment to a transitional object","Fear of strangers"], answer:0 },
        { q:"In attachment theory, a 'secure base' refers to:", options:["A caregiver from whom the child explores and to whom it returns for safety","A favorite toy","The child's bedroom"], answer:0 },
        { q:"Which term names the symbiotic-like early merger of infant and mother in Mahler's theory?", options:["Symbiosis","Rapprochement","Practicing"], answer:0 }
      ]
    },
    {
      id:"tc-development-02",
      title:"Проверка: психосексуальные стадии",
      questions:[
        { q:"Which Freudian stage centers on toilet training and control?", options:["The anal stage","The oral stage","The phallic stage"], answer:0 },
        { q:"Fixation refers to:", options:["A persistent attachment of libido to an earlier developmental stage","A sudden insight","A defense against anxiety"], answer:0 },
        { q:"Which term names the relatively calm period after the Oedipal phase and before puberty?", options:["Latency","The genital stage","Rapprochement"], answer:0 },
        { q:"The 'rapprochement' subphase (Mahler) refers to:", options:["The toddler's renewed need for closeness after asserting independence","The first smile response","Entry into language"], answer:0 }
      ]
    }
  ]);

  P("termcheck","clinical",[
    {
      id:"tc-clinical-01",
      title:"Проверка: перенос и контрперенос",
      questions:[
        { q:"Transference refers to:", options:["Redirecting feelings from past figures onto the analyst","The analyst's feelings toward the patient","The therapeutic contract"], answer:0 },
        { q:"Which term names the analyst's total emotional response to the patient?", options:["Countertransference","The working alliance","Resistance"], answer:0 },
        { q:"Resistance, in clinical work, refers to:", options:["Anything in the patient that opposes the progress of the analysis","Refusal to pay the fee","Disagreement with an interpretation only"], answer:0 },
        { q:"A 'transference neurosis' refers to:", options:["The patient's central conflicts re-emerging organized around the analyst","A new illness caused by therapy","An untreatable condition"], answer:0 }
      ]
    },
    {
      id:"tc-clinical-02",
      title:"Проверка: процесс и завершение",
      questions:[
        { q:"Which term names a temporary worsening of symptoms in reaction to an effective interpretation?", options:["Negative therapeutic reaction","Acting out","Sublimation"], answer:0 },
        { q:"Enactment, in contemporary technique, refers to:", options:["A jointly lived-out scenario between patient and analyst expressing unconscious dynamics","A scripted role-play","A homework assignment"], answer:0 },
        { q:"Which term refers to the planned ending phase of an analysis?", options:["Termination","Confrontation","Abstinence"], answer:0 },
        { q:"A 'holding environment' in clinical practice refers to:", options:["A supportive relational context that contains the patient's anxieties","The waiting room","The fee arrangement"], answer:0 }
      ]
    }
  ]);

  P("termcheck","contemporary",[
    {
      id:"tc-contemporary-01",
      title:"Проверка: реляционный и интерсубъективный подход",
      questions:[
        { q:"Intersubjectivity, in contemporary theory, refers to:", options:["The mutual interplay of two subjectivities in the analytic relationship","The patient's view alone","Objective scientific observation"], answer:0 },
        { q:"Which term names the idea that meaning is created jointly by patient and analyst?", options:["Co-construction","Free association","Neutralization"], answer:0 },
        { q:"Mentalization refers to:", options:["The capacity to understand behavior in terms of underlying mental states","Memorizing interpretations","Suppressing emotion"], answer:0 },
        { q:"The 'two-person psychology' view holds that:", options:["The analyst is a participant who influences the field, not a blank screen","The patient alone produces the transference","The mind works in isolation"], answer:0 }
      ]
    },
    {
      id:"tc-contemporary-02",
      title:"Проверка: современные концепции",
      questions:[
        { q:"Reflective functioning refers to:", options:["The measurable capacity to mentalize about oneself and others","The speed of free association","A defense mechanism"], answer:0 },
        { q:"Which term names patterns of relating internalized from early caregiver interactions (Stern)?", options:["Representations of interactions generalized (RIGs)","Selfobjects","Beta elements"], answer:0 },
        { q:"The 'analytic third' (Ogden) refers to:", options:["A jointly created intersubjective entity arising between analyst and patient","A supervisor","The superego"], answer:0 },
        { q:"Epistemic trust refers to:", options:["Openness to receiving and using socially transmitted knowledge from another","Trust in scientific data","Confidence in one's own memory"], answer:0 }
      ]
    }
  ]);

})();
