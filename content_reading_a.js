(() => { const C = window.CONTENT || (window.CONTENT = {});
  const P=(t,l,a)=>{C[t]=C[t]||{};C[t][l]=C[t][l]||[];a.forEach(x=>C[t][l].push(x));};

  P("reading","foundations",[
    {
      id:"rdA-foundations-01",
      title:"The Dynamic Unconscious",
      text:"Psychoanalysis rests on the proposition that much of mental life unfolds outside awareness. The unconscious, in this tradition, is not merely a storehouse of forgotten material but a dynamic system that actively shapes thought, feeling, and behaviour. Wishes, fears, and conflicts deemed unacceptable to the conscious mind are kept from awareness through ongoing psychic effort. This effort, however, is never wholly successful. The repressed returns in disguised forms: in dreams, in slips of the tongue, in symptoms, and in the seemingly trivial errors of everyday conduct. Because these expressions are compromises between a forbidden impulse and the force opposing it, they appear distorted rather than transparent. The clinical task therefore becomes one of interpretation, of reading the surface as a coded message about deeper processes. Understanding the unconscious as dynamic, rather than as a passive reservoir, distinguishes psychoanalytic thinking from descriptive accounts of memory and attention, and it accounts for why the analyst attends so closely to material the patient regards as accidental or meaningless.",
      questions:[
        { q:"How does this text characterise the unconscious?", options:["As a dynamic system that actively shapes mental life","As a passive store of forgotten facts","As identical to short-term memory"], answer:0 },
        { q:"Why do unconscious expressions appear distorted?", options:["Because memory naturally decays over time","Because they are compromises between an impulse and an opposing force","Because patients deliberately lie"], answer:1 },
        { q:"What does the clinical task chiefly involve?", options:["Measuring reaction times","Interpreting surface material as coded meaning","Eliminating dreams entirely"], answer:1 },
        { q:"What distinguishes the psychoanalytic view from descriptive accounts?", options:["Its focus on the brain's anatomy","Its treatment of the unconscious as merely descriptive","Its emphasis on dynamic conflict rather than passive storage"], answer:2 }
      ]
    },
    {
      id:"rdA-foundations-02",
      title:"Psychic Determinism",
      text:"A foundational assumption of psychoanalysis is psychic determinism, the view that mental events are not random but are caused by antecedent psychological processes. When a person forgets a familiar name, misreads a word, or arrives late to a feared appointment, the analyst does not treat these occurrences as mere accidents. Each is understood as meaningful, motivated by intentions of which the person remains unaware. This principle extends the scientific assumption of causality into the domain of subjective experience, insisting that even the most apparently trivial productions of the mind carry significance. The consequence for technique is considerable. Nothing the patient says or does can be safely dismissed as irrelevant, since the irrelevant may be precisely where defended material has slipped through. Critics have argued that this position risks unfalsifiability, since any event can be assigned a hidden motive. Defenders reply that the value of the assumption lies in the clinical discoveries it makes possible, and in the coherence it lends to phenomena that other frameworks leave unexplained.",
      questions:[
        { q:"What does psychic determinism assert?", options:["That mental events are random","That mental events are caused by antecedent psychological processes","That only conscious choices matter"], answer:1 },
        { q:"How does the analyst regard a forgotten name?", options:["As a meaningful, motivated event","As proof of brain damage","As entirely unimportant"], answer:0 },
        { q:"What technical consequence follows from this principle?", options:["The analyst ignores small details","Nothing the patient says can be safely dismissed as irrelevant","Sessions should be kept very short"], answer:1 },
        { q:"What criticism is mentioned in the text?", options:["That the position risks being unfalsifiable","That it relies too heavily on statistics","That it ignores childhood"], answer:0 }
      ]
    },
    {
      id:"rdA-foundations-03",
      title:"The Talking Cure",
      text:"The phrase talking cure originated with an early patient who observed that speaking freely about her distress brought relief. From this observation grew the central method of psychoanalysis: the systematic use of language to gain access to mental contents that ordinary reflection cannot reach. The patient is invited to say whatever comes to mind, suspending the usual filters of logic, propriety, and shame. This procedure, known as free association, treats spontaneous speech as a path toward material that has been kept from awareness. The analyst listens with what has been called evenly suspended attention, refraining from privileging any one element in advance. Through this collaborative process, patterns emerge that neither participant could have predicted. The cure, in this conception, is not achieved by advice or persuasion but by the gradual recovery and integration of disowned aspects of the self. Speech becomes the instrument through which the inner world is mapped, and through which the rigid arrangements that produce suffering may at last be loosened.",
      questions:[
        { q:"Where did the phrase talking cure originate?", options:["From a textbook of neurology","From an early patient's observation","From a philosophical treatise"], answer:1 },
        { q:"What is the patient asked to do in free association?", options:["Answer questions precisely","Say whatever comes to mind without filtering","Memorise the analyst's words"], answer:1 },
        { q:"How is the analyst's manner of listening described?", options:["As evenly suspended attention","As rapid note-taking","As constant interruption"], answer:0 },
        { q:"How is the cure achieved in this conception?", options:["Through advice and persuasion","Through recovery and integration of disowned aspects of the self","Through physical exercise"], answer:1 }
      ]
    }
  ]);

  P("reading","freud",[
    {
      id:"rdA-freud-01",
      title:"The Structural Model",
      text:"In his later theorising Freud proposed a structural model dividing the mind into three agencies: the id, the ego, and the superego. The id is the reservoir of instinctual drives, operating according to the pleasure principle and seeking immediate gratification without regard for reality. The ego develops out of the id through contact with the external world and operates according to the reality principle, mediating between desire and circumstance. The superego represents the internalised standards of parents and culture, exercising moral judgement and generating guilt when its demands are violated. These agencies are not anatomical regions but functional concepts describing recurrent patterns of conflict. Mental health, in this framework, depends on a workable balance among them. When the ego is overwhelmed, whether by the urgency of the id, the severity of the superego, or the pressures of reality, anxiety arises and defensive operations are mobilised. The structural model thus reframes psychological difficulty as the outcome of negotiations among competing internal forces.",
      questions:[
        { q:"According to which principle does the id operate?", options:["The reality principle","The pleasure principle","The moral principle"], answer:1 },
        { q:"What is the chief function of the ego?", options:["Generating guilt","Seeking immediate gratification","Mediating between desire and circumstance"], answer:2 },
        { q:"What does the superego represent?", options:["Internalised standards of parents and culture","Raw instinctual energy","The capacity for perception"], answer:0 },
        { q:"What arises when the ego is overwhelmed?", options:["Anxiety and defensive operations","Complete tranquillity","Loss of all memory"], answer:0 }
      ]
    },
    {
      id:"rdA-freud-02",
      title:"The Interpretation of Dreams",
      text:"Freud regarded the dream as the royal road to the unconscious, a privileged route by which hidden wishes find expression during sleep. He distinguished between the manifest content, the dream as remembered and recounted, and the latent content, the underlying thoughts and wishes that the dream disguises. The transformation from latent to manifest is accomplished by the dream work, which employs several mechanisms. Condensation compresses multiple ideas into a single image; displacement shifts emotional emphasis from an important element to a trivial one; and considerations of representability convert abstract thoughts into concrete pictures. Because the wishes expressed are often unacceptable, the dream work serves a censoring function, allowing forbidden material to surface only in distorted form. Interpretation reverses this process. By following the dreamer's associations to each element, the analyst traces the path back from manifest imagery to latent meaning. In this way the dream, far from being meaningless, becomes a structured text awaiting careful decipherment.",
      questions:[
        { q:"What did Freud call the dream?", options:["The royal road to the unconscious","An accident of digestion","A purely random event"], answer:0 },
        { q:"What is the latent content of a dream?", options:["The dream as remembered","The underlying thoughts and wishes it disguises","The time spent asleep"], answer:1 },
        { q:"What does condensation do?", options:["Shifts emphasis to a trivial element","Compresses multiple ideas into a single image","Converts pictures into words"], answer:1 },
        { q:"How does the analyst recover latent meaning?", options:["By following the dreamer's associations","By ignoring the manifest content","By counting the dream's images"], answer:0 }
      ]
    },
    {
      id:"rdA-freud-03",
      title:"The Oedipus Complex",
      text:"Among Freud's most contested formulations is the Oedipus complex, his account of a pivotal phase in early childhood development. In the classical version, the young child directs intense desire toward the parent of the opposite sex and experiences the same-sex parent as a rival. This constellation of love and rivalry generates anxiety, since the child fears retaliation from the more powerful figure. Resolution arrives through identification with the rival, by which the child internalises parental prohibitions and values, contributing to the formation of the superego. Freud considered the navigation of this complex decisive for later character and for the capacity to form mature relationships. Subsequent analysts have substantially revised the theory, questioning its universality, its assumptions about gender, and the centrality Freud assigned to it. Even among critics, however, the underlying insight has retained influence: that the child's early triangular relationships with caregivers leave an enduring imprint, shaping the patterns of desire, prohibition, and identification that organise adult emotional life.",
      questions:[
        { q:"How does the child experience the same-sex parent in the classical version?", options:["As a rival","As irrelevant","As a teacher only"], answer:0 },
        { q:"Through what process is the complex said to resolve?", options:["Through forgetting","Through identification with the rival","Through physical separation"], answer:1 },
        { q:"What does resolution contribute to forming?", options:["The id","The superego","Long-term memory"], answer:1 },
        { q:"What enduring insight survives among critics?", options:["That early triangular relationships leave a lasting imprint","That gender is unimportant","That childhood has no effect on adults"], answer:0 }
      ]
    }
  ]);

  P("reading","technique",[
    {
      id:"rdA-technique-01",
      title:"Free Association and the Fundamental Rule",
      text:"The fundamental rule of psychoanalysis instructs the patient to report everything that comes to mind without selection, omission, or correction, regardless of how irrelevant, embarrassing, or trivial it may appear. This deceptively simple instruction is the practical engine of the method. By relaxing the ordinary controls that govern speech, the patient permits material ordinarily kept from awareness to approach the surface. Resistances to the rule are themselves informative, for the points at which association falters, where the patient falls silent, changes the subject, or insists that nothing is occurring, frequently mark the vicinity of defended content. The analyst therefore attends not only to what is said but to the manner and interruptions of its saying. Adherence to the rule is never complete, and the analyst does not expect it to be. Rather, the gap between the ideal of free speech and the patient's actual difficulty in approaching it becomes a primary object of study, revealing the structure of the patient's inner conflicts in the very act of attempting to speak.",
      questions:[
        { q:"What does the fundamental rule instruct the patient to do?", options:["Report only important thoughts","Report everything without selection or omission","Speak only about dreams"], answer:1 },
        { q:"Why are resistances to the rule informative?", options:["They prove the patient is uncooperative","They mark the vicinity of defended content","They show the patient is cured"], answer:1 },
        { q:"What does the analyst attend to besides what is said?", options:["The manner and interruptions of its saying","The room temperature","The patient's clothing"], answer:0 },
        { q:"How complete is adherence to the rule expected to be?", options:["Perfectly complete","Never complete, and the gap itself is studied","Complete only on the first session"], answer:1 }
      ]
    },
    {
      id:"rdA-technique-02",
      title:"Transference",
      text:"Transference denotes the patient's tendency to experience the analyst in terms drawn from earlier, formative relationships. Feelings, expectations, and patterns originally belonging to parents or other significant figures are unconsciously revived and directed toward the analyst, who comes to be perceived not simply as a present person but through the template of the past. Far from an obstacle, this phenomenon became for psychoanalysis its central therapeutic instrument. Within the relative safety of the consulting room, the patient's characteristic ways of relating are reenacted in living form, available for observation and understanding as they unfold. The analyst's task is to recognise these patterns and, at appropriate moments, to interpret them, helping the patient see how the past intrudes upon the present. Through the working through of the transference, rigid and repetitive modes of relating may gradually be revised. What was once compulsively repeated without awareness becomes something that can be reflected upon, named, and ultimately transformed within the developing relationship between patient and analyst.",
      questions:[
        { q:"What does transference involve?", options:["Experiencing the analyst through the template of earlier relationships","Forgetting one's childhood entirely","Imitating the analyst's behaviour"], answer:0 },
        { q:"How does psychoanalysis regard transference?", options:["As a meaningless distraction","As its central therapeutic instrument","As a sign of incurable illness"], answer:1 },
        { q:"Where are the patient's ways of relating reenacted?", options:["Only in dreams","In living form within the consulting room","Exclusively at home"], answer:1 },
        { q:"What may result from working through the transference?", options:["Rigid patterns of relating may be revised","The patient loses all memory","The analyst takes over the patient's life"], answer:0 }
      ]
    },
    {
      id:"rdA-technique-03",
      title:"Countertransference",
      text:"Countertransference refers to the analyst's own emotional responses to the patient. Early in the history of the discipline this was regarded chiefly as an interference, a sign that the analyst's unresolved conflicts were intruding upon the work and requiring further self-analysis. A significant shift in thinking later transformed the concept. Many analysts came to view their emotional reactions not merely as obstacles but as a valuable source of information about the patient's inner world. On this view, the feelings stirred in the analyst may correspond to states the patient cannot yet articulate, communicated through subtle pressures within the relationship rather than through words. An analyst who notices an unexpected feeling of boredom, irritation, or protectiveness may, on reflection, discover that it points toward something the patient is enacting unconsciously. The contemporary stance therefore demands disciplined self-observation. The analyst must distinguish reactions arising from personal history from those evoked by the patient, using the latter as a clinical instrument while guarding against the distortions of the former.",
      questions:[
        { q:"What is countertransference?", options:["The patient's response to the analyst","The analyst's own emotional responses to the patient","A type of dream"], answer:1 },
        { q:"How was countertransference regarded early on?", options:["As the most important tool","Chiefly as an interference","As completely irrelevant"], answer:1 },
        { q:"What does the later view propose about the analyst's reactions?", options:["They are a valuable source of information about the patient","They should always be expressed aloud","They prove the analyst is unfit"], answer:0 },
        { q:"What does the contemporary stance demand?", options:["Disciplined self-observation","Total emotional detachment","Ignoring all feelings"], answer:0 }
      ]
    }
  ]);

  P("reading","defenses",[
    {
      id:"rdA-defenses-01",
      title:"Repression and the Defensive Function",
      text:"Defence mechanisms are the unconscious operations by which the ego protects itself from anxiety arising out of internal conflict. Repression is the most fundamental among them, the active process by which threatening thoughts, wishes, or memories are barred from consciousness. What is repressed does not cease to exist; it persists in the unconscious and continues to exert influence, requiring an ongoing expenditure of psychic energy to keep it from returning. Repression should be distinguished from ordinary forgetting, for its object is not lost but actively held away from awareness. Other defences build upon or supplement this basic operation, but each shares a common aim: to manage feelings that would otherwise prove overwhelming. Defences are not inherently pathological. They become problematic only when they are rigid, excessive, or so costly that they impoverish experience and constrain functioning. A flexible repertoire of defences, by contrast, is a mark of psychological health, allowing the person to regulate distress while remaining open to reality.",
      questions:[
        { q:"What is the purpose of defence mechanisms?", options:["To protect the ego from anxiety arising from internal conflict","To increase pleasure directly","To improve memory recall"], answer:0 },
        { q:"How does repression differ from ordinary forgetting?", options:["It is faster than forgetting","Its object is actively held away from awareness, not lost","There is no difference"], answer:1 },
        { q:"What does keeping material repressed require?", options:["No effort at all","An ongoing expenditure of psychic energy","A change of environment"], answer:1 },
        { q:"When do defences become problematic?", options:["Whenever they are used at all","When they are rigid, excessive, or impoverishing","Only during sleep"], answer:1 }
      ]
    },
    {
      id:"rdA-defenses-02",
      title:"Projection and Denial",
      text:"Among the defences that distort the perception of reality, projection and denial occupy a prominent place. In projection, impulses or attributes that the person cannot tolerate in himself are attributed instead to others. A man who cannot acknowledge his own hostility may come to experience the world as full of hostile others, thereby locating within external figures what properly belongs to his own inner life. Denial operates somewhat differently, refusing to acknowledge an aspect of external reality that would be too painful to admit. The person behaves as though a distressing fact simply did not exist, sustaining a comforting illusion at the cost of accurate perception. Both defences are relatively primitive, in the sense that they alter the relation to reality rather than merely rearranging internal contents. They appear early in development and recur under conditions of severe stress. When they dominate adult functioning, they may contribute to disturbances in which the boundary between inner and outer worlds becomes seriously compromised.",
      questions:[
        { q:"What happens in projection?", options:["Intolerable attributes are attributed to others","Memories are recovered","Reality is accepted fully"], answer:0 },
        { q:"How does denial operate?", options:["By exaggerating one's own faults","By refusing to acknowledge a painful external reality","By improving perception"], answer:1 },
        { q:"Why are these defences described as relatively primitive?", options:["They are used only by experts","They alter the relation to reality itself","They require no energy"], answer:1 },
        { q:"What may result when they dominate adult functioning?", options:["Improved relationships","Disturbances in the boundary between inner and outer worlds","Complete emotional stability"], answer:1 }
      ]
    },
    {
      id:"rdA-defenses-03",
      title:"Sublimation and Mature Defences",
      text:"Not all defences impoverish the personality; some transform conflict into achievement. Sublimation is the process by which the energy of an unacceptable impulse is redirected toward a socially valued aim. Aggressive urges may find expression in surgery, in athletic competition, or in the pursuit of justice, while libidinal energy may be channelled into artistic creation. What distinguishes sublimation from other defences is that it neither distorts reality nor blocks the underlying drive; rather, it provides a constructive outlet that satisfies the impulse in modified form. Alongside sublimation, theorists have described other mature defences, including humour, which permits the expression of distressing feelings in a manner that is tolerable, and anticipation, which prepares for future difficulty through realistic planning. These defences are considered adaptive because they preserve contact with reality while reducing internal tension. Their presence is regarded as a sign of psychological maturity, marking a capacity to meet inner conflict without sacrificing either truthfulness or the richness of experience.",
      questions:[
        { q:"What does sublimation do with an unacceptable impulse?", options:["Redirects its energy toward a socially valued aim","Eliminates it completely","Projects it onto others"], answer:0 },
        { q:"What distinguishes sublimation from other defences?", options:["It distorts reality more severely","It neither distorts reality nor blocks the underlying drive","It requires no energy at all"], answer:1 },
        { q:"Which of the following is named as a mature defence?", options:["Denial","Humour","Projection"], answer:1 },
        { q:"Why are mature defences considered adaptive?", options:["They preserve contact with reality while reducing tension","They abolish all conflict","They are easier than other defences"], answer:0 }
      ]
    }
  ]);

  P("reading","klein",[
    {
      id:"rdA-klein-01",
      title:"The Paranoid-Schizoid Position",
      text:"Melanie Klein introduced the concept of the paranoid-schizoid position to describe the earliest organisation of the infant's mental life. In this state the infant cannot yet experience another person as a whole; instead the world is divided into part-objects that are either wholly good or wholly bad. The mother who satisfies is felt as an entirely good breast, while the mother who frustrates is felt as a persecuting bad breast, and these are kept rigidly apart by the process of splitting. Splitting serves a protective purpose, preserving the good from contamination by the bad and managing the anxiety of being annihilated by destructive forces. The term paranoid captures the persecutory anxiety that dominates this position, while schizoid refers to the splitting that characterises it. Klein regarded the position not as a fixed stage to be left behind but as a mode of functioning to which the mind may return throughout life, particularly under conditions of severe stress or in certain forms of disturbance.",
      questions:[
        { q:"How does the infant experience the world in the paranoid-schizoid position?", options:["As whole, integrated persons","As part-objects that are wholly good or wholly bad","As entirely neutral"], answer:1 },
        { q:"What does the process of splitting accomplish?", options:["It keeps good and bad rigidly apart for protection","It unites all experiences","It improves memory"], answer:0 },
        { q:"What does the word paranoid in the term refer to?", options:["The persecutory anxiety dominating the position","A love of solitude","A stage of language learning"], answer:0 },
        { q:"How did Klein regard this position?", options:["As a fixed stage left permanently behind","As a mode the mind may return to throughout life","As unique to adults"], answer:1 }
      ]
    },
    {
      id:"rdA-klein-02",
      title:"The Depressive Position",
      text:"As development proceeds, the infant gradually comes to recognise that the gratifying and the frustrating figures are one and the same person. This integration ushers in what Klein termed the depressive position, a profound reorganisation of inner life. The mother is now experienced as a whole object, both loved and hated, and with this recognition comes a new and painful awareness. The infant realises that the destructive impulses directed at the bad object have been aimed at the very person who is also loved and needed. From this realisation arises guilt and the wish to repair the damage believed to have been done, a wish Klein called reparation. The depressive position represents an achievement rather than an illness, for it marks the capacity to hold love and hate toward the same person, to tolerate ambivalence, and to feel concern for others. Working through this position, never completed once and for all, underlies the development of mature relationships and the capacity for creative restoration.",
      questions:[
        { q:"What recognition ushers in the depressive position?", options:["That the gratifying and frustrating figures are the same person","That the mother is entirely bad","That other people do not exist"], answer:0 },
        { q:"What painful awareness arises in this position?", options:["That destructive impulses were aimed at the loved person","That love is impossible","That memory is unreliable"], answer:0 },
        { q:"What does Klein call the wish to repair the damage?", options:["Splitting","Reparation","Projection"], answer:1 },
        { q:"How is the depressive position best described?", options:["As an illness to be cured","As an achievement marking the capacity for ambivalence and concern","As a return to part-objects"], answer:1 }
      ]
    },
    {
      id:"rdA-klein-03",
      title:"Projective Identification",
      text:"Projective identification is among Klein's most influential and complex contributions. It extends the idea of projection but adds a crucial dimension. In ordinary projection, an unwanted feeling is simply attributed to another. In projective identification, parts of the self are not only attributed to another person but are felt to be located within that person, who may then be unconsciously pressured to experience and behave in accordance with what has been projected. A patient who cannot bear his own helplessness, for example, may relate to the analyst in such a way that the analyst comes to feel helpless. The mechanism thus operates as a form of unconscious communication and as a means of control, shaping the actual responses of the other rather than merely altering the projector's perception. Later analysts elaborated the concept extensively, recognising in it a powerful key to understanding the emotional pressures exerted within relationships, and a means by which states that cannot be put into words may nonetheless be conveyed from one mind to another.",
      questions:[
        { q:"How does projective identification differ from ordinary projection?", options:["Parts of the self are felt to be located within the other person","It only involves memories","It requires no other person"], answer:0 },
        { q:"What may the recipient of the projection be pressured to do?", options:["Forget the interaction","Experience and behave in accordance with what was projected","Leave the relationship immediately"], answer:1 },
        { q:"In the example, what does the analyst come to feel?", options:["Joyful","Helpless","Angry"], answer:1 },
        { q:"What did later analysts recognise in the concept?", options:["A way to measure intelligence","A key to emotional pressures within relationships","A method of dream analysis only"], answer:1 }
      ]
    }
  ]);

  P("reading","winnicott",[
    {
      id:"rdA-winnicott-01",
      title:"The Good-Enough Mother",
      text:"Donald Winnicott, working from extensive experience as a paediatrician, introduced the notion of the good-enough mother to describe the kind of care that fosters healthy development. The phrase deliberately rejects any ideal of perfection. At the outset the devoted mother adapts almost completely to her infant's needs, providing an environment in which the baby's spontaneous gestures can be met and given meaning. As the infant grows, however, the mother gradually and naturally fails to adapt so perfectly, and this graduated failure is not a deficiency but a necessity. Through small, tolerable frustrations the infant comes to apprehend a reality that is not entirely under its control, and so begins the long process of recognising a world beyond the self. A mother who adapted too perfectly, were such a thing possible, would deprive the child of the very experiences through which independence is achieved. Good-enough care, then, lies in this responsive imperfection, neither overwhelming the infant nor abandoning it to needs it cannot manage.",
      questions:[
        { q:"What does the phrase good-enough mother deliberately reject?", options:["Any ideal of perfection","The importance of care","The reality of infancy"], answer:0 },
        { q:"How does the mother behave at the very outset?", options:["She fails to respond","She adapts almost completely to her infant's needs","She demands independence"], answer:1 },
        { q:"What is the role of the mother's graduated failure to adapt?", options:["It is a harmful deficiency","It is a necessity for development","It has no effect"], answer:1 },
        { q:"What would too-perfect adaptation deprive the child of?", options:["The experiences through which independence is achieved","All forms of comfort","The ability to sleep"], answer:0 }
      ]
    },
    {
      id:"rdA-winnicott-02",
      title:"Transitional Objects",
      text:"Winnicott observed that many infants become deeply attached to a particular blanket, soft toy, or similar possession, which they treat with intense devotion and refuse to be parted from. He called such a possession a transitional object and located it in what he termed an intermediate area of experience. The transitional object is neither purely internal, a creation of the infant's imagination, nor purely external, an ordinary part of shared reality. Instead it occupies a paradoxical space between the two, and Winnicott insisted that this paradox must be respected rather than resolved. The object helps the child manage the transition from a state of fused dependence on the mother toward a recognition of separateness, offering comfort and continuity during the mother's absence. Crucially, Winnicott regarded this intermediate area as the origin of a capacity that endures throughout life. The same space in which the transitional object resides later expands into the domains of play, of cultural experience, and of creative living, where inner and outer reality meet without strict demarcation.",
      questions:[
        { q:"What is a transitional object?", options:["A possession the infant treats with intense devotion","A type of dream","A medical instrument"], answer:0 },
        { q:"Where did Winnicott locate the transitional object?", options:["Purely in the imagination","In an intermediate area between internal and external","Entirely in shared reality"], answer:1 },
        { q:"What transition does the object help the child manage?", options:["From sleep to waking","From fused dependence toward recognition of separateness","From speech to silence"], answer:1 },
        { q:"What does the intermediate area later expand into?", options:["Play, cultural experience, and creative living","Pure logic alone","Physical illness"], answer:0 }
      ]
    },
    {
      id:"rdA-winnicott-03",
      title:"The True Self and the False Self",
      text:"Winnicott distinguished between what he called the true self and the false self, a distinction central to his understanding of authenticity and its disturbances. The true self is rooted in the infant's spontaneous gestures and bodily aliveness, the source of the feeling that life is real and worth living. When care is good enough, the environment meets these spontaneous gestures, and the true self can develop and find expression. When care fails in a particular way, however, the infant is repeatedly required to comply with the demands of the caregiver rather than to express its own impulses. In response the infant constructs a false self, a compliant facade organised around meeting the expectations of others. This false self protects the hidden true self, but at considerable cost. The person may function adequately and even achieve outward success while suffering a persistent sense of futility and unreality. The therapeutic task, in such cases, becomes the gradual recovery of access to the true self that has long been concealed.",
      questions:[
        { q:"In what is the true self rooted?", options:["The infant's spontaneous gestures and bodily aliveness","The demands of the caregiver","Abstract reasoning"], answer:0 },
        { q:"What prompts the construction of a false self?", options:["Repeated requirement to comply with the caregiver's demands","Excessive freedom","Good-enough care"], answer:0 },
        { q:"What is the false self organised around?", options:["Meeting the expectations of others","Expressing the true self openly","Avoiding all relationships"], answer:0 },
        { q:"What may a person dominated by the false self experience?", options:["A persistent sense of futility and unreality","Complete fulfilment","Loss of all ability to function"], answer:0 }
      ]
    }
  ]);

})();
