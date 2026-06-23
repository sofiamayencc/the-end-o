import { useState, useEffect, useRef } from "react";

// ─── TRANSLATIONS ───────────────────────────────────────────────────────────
const TRANSLATIONS = {
  en: {
    appName: "The end-o",
    tagline: "Discover yourself",
    by: "by EWS",
    nav: {
      home: "Home",
      mood: "Mood",
      tasks: "Tasks",
      companion: "Chat",
      profile: "Profile",
    },
    home: {
      greeting: "Hello",
      subtitle: "How are you navigating today?",
      quickCheck: "Quick check-in",
      yourGoal: "Your Goal",
      noGoal: "No goal set yet",
      setGoal: "Set a goal",
      todayMood: "Today's Mood",
      notLogged: "Not logged yet",
      logNow: "Log now",
      features: "Explore Tools",
      moodTracker: "Mood Tracker",
      moodDesc: "Check in with your emotions",
      routineBuilder: "Routine Builder",
      routineDesc: "Plan and build new habits",
      smartCompanion: "Smart Companion",
      companionDesc: "Talk it out, gain perspective",
      knowledge: "Bite-size Knowledge",
      knowledgeDesc: "Evidence-based insights",
      soundscapes: "Focus Soundscapes",
      soundDesc: "Block out the world",
      wellbeing: "Well-being Tests",
      wellDesc: "Track emotional dynamics",
      quote: '"Positive thoughts and a calmer attitude come after 10 minutes of use."',
    },
    mood: {
      title: "Mood Tracker",
      subtitle: "How are you feeling right now?",
      selectEmotion: "Select your emotion",
      whatTriggered: "What triggered it?",
      triggerPlaceholder: "Describe what happened...",
      save: "Save Check-in",
      saved: "Saved! ✓",
      calendar: "Mood Calendar",
      history: "Recent Check-ins",
      noHistory: "No check-ins yet. Start tracking today!",
      emotions: {
        happy: "Happy",
        calm: "Calm",
        anxious: "Anxious",
        sad: "Sad",
        angry: "Angry",
        grateful: "Grateful",
        overwhelmed: "Overwhelmed",
        hopeful: "Hopeful",
      },
    },
    tasks: {
      title: "Routine Builder",
      subtitle: "Build habits that transform you",
      addTask: "Add new task",
      taskPlaceholder: "Enter a task or habit...",
      add: "Add",
      suggestions: "Suggested Activities",
      yourTasks: "Your Tasks",
      noTasks: "No tasks yet. Add your first habit!",
      completed: "completed",
      morning: "Morning",
      afternoon: "Afternoon",
      evening: "Evening",
    },
    companion: {
      title: "Smart Companion",
      subtitle: "Talk freely, without judgment",
      placeholder: "Share what's on your mind...",
      send: "Send",
      welcome: "Hi there 👋 I'm your companion. Tell me what's going on — no judgment, just perspective.",
      thinking: "Thinking...",
    },
    profile: {
      title: "My Profile",
      yourGoal: "Your Goal",
      setGoal: "Set Your Goal",
      goalPlaceholder: "e.g. Build a positive self-image",
      saveGoal: "Save Goal",
      wellbeing: "Well-being Test",
      startTest: "Start Test",
      soundscapes: "Focus Soundscapes",
      stats: "Your Journey",
      daysActive: "Days Active",
      checkIns: "Check-ins",
      tasksCompleted: "Tasks Done",
      language: "Language",
      goals: {
        title: "Choose a Goal",
        selfImage: "Improve self-image",
        sayNo: 'Learn to say "no"',
        focus: "Improve focus",
        negativeThoughts: "Challenge negative thoughts",
        timeManagement: "Manage time better",
        buildHabits: "Build positive habits",
      },
    },
    onboarding: {
      welcome: "Welcome to",
      subtitle: "Your self-discovery companion",
      desc: "A system of tools designed to help you better understand and transform yourself.",
      cta: "Get Started",
      skip: "Skip",
      step1Title: "Track Your Mood",
      step1Desc: "Pause and check in with your emotions. Name your feelings and notice what triggers them.",
      step2Title: "Build Routines",
      step2Desc: "Add new tasks and habits to your days. Small changes lead to big transformations.",
      step3Title: "Talk It Out",
      step3Desc: "Your smart companion listens without judgment — even at 3am.",
    },
    knowledge: {
      title: "Bite-size Knowledge",
      subtitle: "Evidence-based insights for your day",
      readMore: "Read more",
      articles: [
        { title: "Understanding Autopilot Behaviors", category: "Psychology", time: "3 min", body: "Scientists have studied the human mind for over 100 years. Our brains create 'autopilot' shortcuts — automatic reactions that were once useful but may no longer serve us. By becoming aware of these patterns, we can begin to change them." },
        { title: "The Power of Naming Emotions", category: "Mindfulness", time: "2 min", body: "Research shows that labeling emotions reduces their intensity. When you name what you feel, you activate the prefrontal cortex and calm the amygdala — your brain's alarm system." },
        { title: "Why Small Habits Compound", category: "Behavior", time: "4 min", body: "James Clear's research shows a 1% improvement daily leads to 37x better outcomes in a year. Your routine builder is built on this principle — start small, stay consistent." },
        { title: "Reframing Negative Thoughts", category: "CBT", time: "3 min", body: "Cognitive Behavioral Therapy teaches us that thoughts are not facts. By questioning their validity and looking for evidence, we can gradually shift our inner dialogue toward a more balanced perspective." },
      ],
    },
    wellbeing: {
      title: "Well-being Test",
      subtitle: "Answer a few questions to understand where you are",
      start: "Start Test",
      next: "Next",
      finish: "See Results",
      yourScore: "Your Score",
      retake: "Retake Test",
      questions: [
        { q: "How often do you feel overwhelmed by daily demands?", options: ["Rarely", "Sometimes", "Often", "Always"] },
        { q: "How well do you manage to set boundaries?", options: ["Very well", "Fairly well", "With difficulty", "Not at all"] },
        { q: "How would you describe your sleep quality recently?", options: ["Excellent", "Good", "Fair", "Poor"] },
        { q: "How connected do you feel to your own values and purpose?", options: ["Very connected", "Somewhat", "Disconnected", "Unsure"] },
        { q: "How often do you take time for yourself?", options: ["Daily", "Weekly", "Rarely", "Never"] },
      ],
      results: {
        high: { label: "Thriving", desc: "You're in a great space. Keep nurturing your well-being." },
        mid: { label: "Growing", desc: "You're on the right path. Some areas need gentle attention." },
        low: { label: "Rebuilding", desc: "It's okay to not be okay. Small steps make a big difference." },
      },
    },
  },
  es: {
    appName: "The end-o",
    tagline: "Descúbrete a ti mismo",
    by: "por EWS",
    nav: {
      home: "Inicio",
      mood: "Humor",
      tasks: "Tareas",
      companion: "Chat",
      profile: "Perfil",
    },
    home: {
      greeting: "Hola",
      subtitle: "¿Cómo estás navegando hoy?",
      quickCheck: "Check-in rápido",
      yourGoal: "Tu Objetivo",
      noGoal: "Sin objetivo aún",
      setGoal: "Fijar objetivo",
      todayMood: "Humor de hoy",
      notLogged: "Sin registrar aún",
      logNow: "Registrar ahora",
      features: "Explorar herramientas",
      moodTracker: "Rastreador de humor",
      moodDesc: "Conecta con tus emociones",
      routineBuilder: "Constructor de rutinas",
      routineDesc: "Planea y construye hábitos",
      smartCompanion: "Compañero inteligente",
      companionDesc: "Habla y gana perspectiva",
      knowledge: "Conocimiento rápido",
      knowledgeDesc: "Perspectivas basadas en evidencia",
      soundscapes: "Paisajes sonoros",
      soundDesc: "Bloquea el mundo exterior",
      wellbeing: "Tests de bienestar",
      wellDesc: "Rastrea tu dinámica emocional",
      quote: '"Pensamientos positivos y una actitud más tranquila llegan después de 10 minutos de uso."',
    },
    mood: {
      title: "Rastreador de Humor",
      subtitle: "¿Cómo te sientes ahora mismo?",
      selectEmotion: "Selecciona tu emoción",
      whatTriggered: "¿Qué lo desencadenó?",
      triggerPlaceholder: "Describe qué pasó...",
      save: "Guardar check-in",
      saved: "¡Guardado! ✓",
      calendar: "Calendario de humor",
      history: "Check-ins recientes",
      noHistory: "Sin check-ins aún. ¡Empieza hoy!",
      emotions: {
        happy: "Feliz",
        calm: "Tranquilo",
        anxious: "Ansioso",
        sad: "Triste",
        angry: "Enojado",
        grateful: "Agradecido",
        overwhelmed: "Abrumado",
        hopeful: "Esperanzado",
      },
    },
    tasks: {
      title: "Constructor de Rutinas",
      subtitle: "Construye hábitos que te transformen",
      addTask: "Agregar nueva tarea",
      taskPlaceholder: "Escribe una tarea o hábito...",
      add: "Agregar",
      suggestions: "Actividades sugeridas",
      yourTasks: "Tus tareas",
      noTasks: "Sin tareas aún. ¡Agrega tu primer hábito!",
      completed: "completado",
      morning: "Mañana",
      afternoon: "Tarde",
      evening: "Noche",
    },
    companion: {
      title: "Compañero Inteligente",
      subtitle: "Habla libremente, sin juicios",
      placeholder: "Comparte lo que tienes en mente...",
      send: "Enviar",
      welcome: "¡Hola! 👋 Soy tu compañera. Cuéntame qué está pasando — sin juicios, solo perspectiva.",
      thinking: "Pensando...",
    },
    profile: {
      title: "Mi Perfil",
      yourGoal: "Tu Objetivo",
      setGoal: "Establece tu objetivo",
      goalPlaceholder: "ej. Construir una imagen positiva de mí mismo",
      saveGoal: "Guardar objetivo",
      wellbeing: "Test de bienestar",
      startTest: "Iniciar test",
      soundscapes: "Paisajes sonoros",
      stats: "Tu camino",
      daysActive: "Días activo",
      checkIns: "Check-ins",
      tasksCompleted: "Tareas hechas",
      language: "Idioma",
      goals: {
        title: "Elige un objetivo",
        selfImage: "Mejorar la autoimagen",
        sayNo: 'Aprender a decir "no"',
        focus: "Mejorar el enfoque",
        negativeThoughts: "Desafiar pensamientos negativos",
        timeManagement: "Gestionar mejor el tiempo",
        buildHabits: "Construir hábitos positivos",
      },
    },
    onboarding: {
      welcome: "Bienvenido/a a",
      subtitle: "Tu compañero de autodescubrimiento",
      desc: "Un sistema de herramientas para ayudarte a entenderte mejor y transformarte.",
      cta: "Comenzar",
      skip: "Omitir",
      step1Title: "Registra tu Humor",
      step1Desc: "Pausa y conecta con tus emociones. Nombra lo que sientes y observa qué lo desencadena.",
      step2Title: "Construye Rutinas",
      step2Desc: "Agrega nuevas tareas y hábitos a tu día. Los pequeños cambios llevan a grandes transformaciones.",
      step3Title: "Habla sin filtros",
      step3Desc: "Tu compañera inteligente escucha sin juzgar — incluso a las 3am.",
    },
    knowledge: {
      title: "Conocimiento Rápido",
      subtitle: "Perspectivas basadas en evidencia para tu día",
      readMore: "Leer más",
      articles: [
        { title: "Entendiendo los comportamientos en piloto automático", category: "Psicología", time: "3 min", body: "Los científicos han estudiado la mente humana por más de 100 años. Nuestros cerebros crean atajos de 'piloto automático' — reacciones automáticas que antes eran útiles pero ya no nos sirven. Al ser conscientes de estos patrones, podemos comenzar a cambiarlos." },
        { title: "El poder de nombrar emociones", category: "Mindfulness", time: "2 min", body: "Las investigaciones muestran que etiquetar las emociones reduce su intensidad. Cuando nombras lo que sientes, activas la corteza prefrontal y calmas la amígdala — el sistema de alarma de tu cerebro." },
        { title: "Por qué los pequeños hábitos se acumulan", category: "Comportamiento", time: "4 min", body: "La investigación de James Clear muestra que una mejora del 1% diario conduce a resultados 37 veces mejores en un año. Tu constructor de rutinas se basa en este principio — empieza pequeño, sé consistente." },
        { title: "Reformular pensamientos negativos", category: "TCC", time: "3 min", body: "La Terapia Cognitivo-Conductual nos enseña que los pensamientos no son hechos. Al cuestionar su validez y buscar evidencia, podemos cambiar gradualmente nuestro diálogo interno hacia una perspectiva más equilibrada." },
      ],
    },
    wellbeing: {
      title: "Test de Bienestar",
      subtitle: "Responde algunas preguntas para entender dónde estás",
      start: "Iniciar test",
      next: "Siguiente",
      finish: "Ver resultados",
      yourScore: "Tu puntuación",
      retake: "Repetir test",
      questions: [
        { q: "¿Con qué frecuencia te sientes abrumado por las demandas diarias?", options: ["Raramente", "A veces", "A menudo", "Siempre"] },
        { q: "¿Qué tan bien manejas el establecimiento de límites?", options: ["Muy bien", "Bastante bien", "Con dificultad", "Para nada"] },
        { q: "¿Cómo describirías la calidad de tu sueño últimamente?", options: ["Excelente", "Buena", "Regular", "Mala"] },
        { q: "¿Qué tan conectado te sientes con tus valores y propósito?", options: ["Muy conectado", "Algo", "Desconectado", "No sé"] },
        { q: "¿Con qué frecuencia te tomas tiempo para ti?", options: ["Diario", "Semanal", "Raramente", "Nunca"] },
      ],
      results: {
        high: { label: "Prosperando", desc: "Estás en un gran momento. Sigue nutriendo tu bienestar." },
        mid: { label: "Creciendo", desc: "Vas por el buen camino. Algunas áreas necesitan atención suave." },
        low: { label: "Reconstruyendo", desc: "Está bien no estar bien. Los pequeños pasos marcan una gran diferencia." },
      },
    },
  },
  fr: {
    appName: "The end-o",
    tagline: "Découvrez-vous",
    by: "par EWS",
    nav: {
      home: "Accueil",
      mood: "Humeur",
      tasks: "Tâches",
      companion: "Chat",
      profile: "Profil",
    },
    home: {
      greeting: "Bonjour",
      subtitle: "Comment naviguez-vous aujourd'hui?",
      quickCheck: "Bilan rapide",
      yourGoal: "Votre Objectif",
      noGoal: "Pas encore d'objectif",
      setGoal: "Fixer un objectif",
      todayMood: "Humeur du jour",
      notLogged: "Pas encore enregistré",
      logNow: "Enregistrer",
      features: "Explorer les outils",
      moodTracker: "Suivi d'humeur",
      moodDesc: "Connectez-vous à vos émotions",
      routineBuilder: "Créateur de routines",
      routineDesc: "Planifiez et créez des habitudes",
      smartCompanion: "Compagnon intelligent",
      companionDesc: "Parlez et gagnez en perspective",
      knowledge: "Connaissances rapides",
      knowledgeDesc: "Aperçus fondés sur des preuves",
      soundscapes: "Paysages sonores",
      soundDesc: "Bloquez le monde extérieur",
      wellbeing: "Tests de bien-être",
      wellDesc: "Suivez votre dynamique émotionnelle",
      quote: '"Des pensées positives et une attitude plus calme après 10 minutes d\'utilisation."',
    },
    mood: {
      title: "Suivi d'Humeur",
      subtitle: "Comment vous sentez-vous en ce moment?",
      selectEmotion: "Sélectionnez votre émotion",
      whatTriggered: "Qu'est-ce qui l'a déclenché?",
      triggerPlaceholder: "Décrivez ce qui s'est passé...",
      save: "Enregistrer le bilan",
      saved: "Enregistré! ✓",
      calendar: "Calendrier d'humeur",
      history: "Bilans récents",
      noHistory: "Pas encore de bilans. Commencez aujourd'hui!",
      emotions: {
        happy: "Heureux",
        calm: "Calme",
        anxious: "Anxieux",
        sad: "Triste",
        angry: "En colère",
        grateful: "Reconnaissant",
        overwhelmed: "Dépassé",
        hopeful: "Plein d'espoir",
      },
    },
    tasks: {
      title: "Créateur de Routines",
      subtitle: "Construisez des habitudes qui vous transforment",
      addTask: "Ajouter une nouvelle tâche",
      taskPlaceholder: "Entrez une tâche ou une habitude...",
      add: "Ajouter",
      suggestions: "Activités suggérées",
      yourTasks: "Vos tâches",
      noTasks: "Pas encore de tâches. Ajoutez votre première habitude!",
      completed: "terminé",
      morning: "Matin",
      afternoon: "Après-midi",
      evening: "Soir",
    },
    companion: {
      title: "Compagnon Intelligent",
      subtitle: "Parlez librement, sans jugement",
      placeholder: "Partagez ce qui vous préoccupe...",
      send: "Envoyer",
      welcome: "Bonjour! 👋 Je suis votre compagnon. Dites-moi ce qui se passe — sans jugement, juste de la perspective.",
      thinking: "En train de réfléchir...",
    },
    profile: {
      title: "Mon Profil",
      yourGoal: "Votre Objectif",
      setGoal: "Définir votre objectif",
      goalPlaceholder: "ex. Construire une image positive de moi-même",
      saveGoal: "Enregistrer l'objectif",
      wellbeing: "Test de bien-être",
      startTest: "Commencer le test",
      soundscapes: "Paysages sonores",
      stats: "Votre parcours",
      daysActive: "Jours actifs",
      checkIns: "Bilans",
      tasksCompleted: "Tâches faites",
      language: "Langue",
      goals: {
        title: "Choisissez un objectif",
        selfImage: "Améliorer l'image de soi",
        sayNo: 'Apprendre à dire "non"',
        focus: "Améliorer la concentration",
        negativeThoughts: "Défier les pensées négatives",
        timeManagement: "Mieux gérer le temps",
        buildHabits: "Construire des habitudes positives",
      },
    },
    onboarding: {
      welcome: "Bienvenue sur",
      subtitle: "Votre compagnon de découverte de soi",
      desc: "Un système d'outils conçu pour vous aider à mieux vous comprendre et vous transformer.",
      cta: "Commencer",
      skip: "Passer",
      step1Title: "Suivez votre Humeur",
      step1Desc: "Faites une pause et connectez-vous à vos émotions. Nommez vos sentiments et remarquez ce qui les déclenche.",
      step2Title: "Construisez des Routines",
      step2Desc: "Ajoutez de nouvelles tâches et habitudes à vos journées. Les petits changements mènent à de grandes transformations.",
      step3Title: "Parlez sans retenue",
      step3Desc: "Votre compagnon intelligent écoute sans juger — même à 3h du matin.",
    },
    knowledge: {
      title: "Connaissances Rapides",
      subtitle: "Aperçus fondés sur des preuves pour votre journée",
      readMore: "Lire plus",
      articles: [
        { title: "Comprendre les comportements en pilote automatique", category: "Psychologie", time: "3 min", body: "Les scientifiques étudient l'esprit humain depuis plus de 100 ans. Nos cerveaux créent des raccourcis de 'pilote automatique' — des réactions automatiques qui étaient utiles mais ne nous servent plus. En prenant conscience de ces schémas, nous pouvons commencer à les changer." },
        { title: "Le pouvoir de nommer les émotions", category: "Pleine conscience", time: "2 min", body: "La recherche montre que nommer les émotions réduit leur intensité. Quand vous nommez ce que vous ressentez, vous activez le cortex préfrontal et calmez l'amygdale — le système d'alarme de votre cerveau." },
        { title: "Pourquoi les petites habitudes s'accumulent", category: "Comportement", time: "4 min", body: "La recherche de James Clear montre qu'une amélioration de 1% par jour mène à des résultats 37 fois meilleurs en un an. Votre créateur de routines est basé sur ce principe — commencez petit, restez cohérent." },
        { title: "Recadrer les pensées négatives", category: "TCC", time: "3 min", body: "La thérapie cognitivo-comportementale nous enseigne que les pensées ne sont pas des faits. En questionnant leur validité et en cherchant des preuves, nous pouvons progressivement faire évoluer notre dialogue intérieur." },
      ],
    },
    wellbeing: {
      title: "Test de Bien-être",
      subtitle: "Répondez à quelques questions pour comprendre où vous en êtes",
      start: "Commencer le test",
      next: "Suivant",
      finish: "Voir les résultats",
      yourScore: "Votre score",
      retake: "Refaire le test",
      questions: [
        { q: "À quelle fréquence vous sentez-vous dépassé par les exigences quotidiennes?", options: ["Rarement", "Parfois", "Souvent", "Toujours"] },
        { q: "Comment gérez-vous la définition de limites?", options: ["Très bien", "Assez bien", "Avec difficulté", "Pas du tout"] },
        { q: "Comment décririez-vous la qualité de votre sommeil récemment?", options: ["Excellente", "Bonne", "Passable", "Mauvaise"] },
        { q: "Dans quelle mesure vous sentez-vous connecté à vos valeurs et à votre purpose?", options: ["Très connecté", "Quelque peu", "Déconnecté", "Incertain"] },
        { q: "À quelle fréquence prenez-vous du temps pour vous?", options: ["Quotidiennement", "Hebdomadairement", "Rarement", "Jamais"] },
      ],
      results: {
        high: { label: "Épanoui", desc: "Vous êtes dans un excellent état. Continuez à nourrir votre bien-être." },
        mid: { label: "En croissance", desc: "Vous êtes sur la bonne voie. Certains domaines méritent une attention douce." },
        low: { label: "En reconstruction", desc: "Il est normal de ne pas aller bien. Les petits pas font une grande différence." },
      },
    },
  },
};

// ─── THEME ───────────────────────────────────────────────────────────────────
const THEME = {
  bg: "#0D0F1A",
  bgCard: "#161929",
  bgCard2: "#1E2236",
  accent: "#7C6EF5",
  accent2: "#A78BFA",
  accentGlow: "rgba(124,110,245,0.18)",
  teal: "#2DD4BF",
  pink: "#F472B6",
  yellow: "#FBBF24",
  green: "#34D399",
  text: "#F1F5F9",
  textMuted: "#94A3B8",
  textDim: "#475569",
  border: "rgba(255,255,255,0.07)",
  shadow: "0 8px 32px rgba(0,0,0,0.5)",
  radius: "18px",
  radiusSm: "12px",
};

const EMOTION_COLORS = {
  happy: "#FBBF24",
  calm: "#2DD4BF",
  anxious: "#F472B6",
  sad: "#60A5FA",
  angry: "#F87171",
  grateful: "#34D399",
  overwhelmed: "#A78BFA",
  hopeful: "#FCD34D",
};
const EMOTION_EMOJIS = {
  happy: "😊",
  calm: "😌",
  anxious: "😰",
  sad: "😢",
  angry: "😠",
  grateful: "🙏",
  overwhelmed: "😵",
  hopeful: "🌟",
};

// ─── COMPANION RESPONSES ─────────────────────────────────────────────────────
// TODO: Replace with actual AI API integration (e.g., OpenAI, Anthropic)
const COMPANION_RESPONSES = {
  en: [
    "That sounds really challenging. It's okay to feel that way. What do you think is the root cause of this feeling?",
    "I hear you. Sometimes just putting it into words helps. Have you noticed any patterns around when this happens?",
    "Thank you for sharing that. It takes courage. What's one small thing you could do today to ease this?",
    "That's a lot to carry. Remember — you don't have to figure everything out at once. What feels most urgent right now?",
    "I appreciate you opening up. How long have you been feeling this way? Sometimes time gives us important context.",
    "It sounds like you're being very hard on yourself. What would you say to a friend who was in your situation?",
  ],
  es: [
    "Eso suena realmente difícil. Está bien sentirse así. ¿Qué crees que es la causa raíz de este sentimiento?",
    "Te escucho. A veces solo ponerlo en palabras ayuda. ¿Has notado algún patrón alrededor de cuándo sucede esto?",
    "Gracias por compartir eso. Se necesita valentía. ¿Qué pequeña cosa podrías hacer hoy para aliviar esto?",
    "Eso es mucho para cargar. Recuerda — no tienes que resolverlo todo a la vez. ¿Qué se siente más urgente ahora?",
    "Aprecio que te abras. ¿Cuánto tiempo llevas sintiéndote así? A veces el tiempo nos da un contexto importante.",
    "Parece que estás siendo muy duro contigo mismo. ¿Qué le dirías a un amigo que estuviera en tu situación?",
  ],
  fr: [
    "Cela semble vraiment difficile. Il est normal de se sentir ainsi. Quelle pensez-vous être la cause profonde de ce sentiment?",
    "Je vous entends. Parfois, le simple fait de mettre en mots aide. Avez-vous remarqué des schémas autour de quand cela se produit?",
    "Merci de partager cela. Cela demande du courage. Quelle petite chose pourriez-vous faire aujourd'hui pour soulager cela?",
    "C'est beaucoup à porter. Rappelez-vous — vous n'avez pas à tout comprendre d'un coup. Qu'est-ce qui semble le plus urgent maintenant?",
    "J'apprécie votre ouverture. Depuis combien de temps vous sentez-vous ainsi? Parfois, le temps nous donne un contexte important.",
    "Il semble que vous soyez très dur envers vous-même. Que diriez-vous à un ami qui serait dans votre situation?",
  ],
};

const SUGGESTED_TASKS = {
  en: ["5-minute morning meditation", "Write 3 things you're grateful for", "Take a 10-minute walk outside", "Read for 20 minutes", "Drink 8 glasses of water", "Practice deep breathing for 5 minutes", "Call a friend or loved one", "Cook a healthy meal", "Stretch for 10 minutes", "Turn off screens 1 hour before bed"],
  es: ["5 minutos de meditación matutina", "Escribe 3 cosas por las que estás agradecido", "Camina 10 minutos al aire libre", "Lee durante 20 minutos", "Bebe 8 vasos de agua", "Practica respiración profunda 5 minutos", "Llama a un amigo o ser querido", "Cocina una comida saludable", "Estira durante 10 minutos", "Apaga pantallas 1 hora antes de dormir"],
  fr: ["5 minutes de méditation matinale", "Écrivez 3 choses pour lesquelles vous êtes reconnaissant", "Faites une marche de 10 minutes dehors", "Lisez pendant 20 minutes", "Buvez 8 verres d'eau", "Pratiquez la respiration profonde 5 minutes", "Appelez un ami ou un proche", "Cuisinez un repas sain", "Étirez-vous pendant 10 minutes", "Éteignez les écrans 1 heure avant de dormir"],
};

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState("en");
  const [screen, setScreen] = useState("onboarding");
  const [onboardStep, setOnboardStep] = useState(0);
  const [activeTab, setActiveTab] = useState("home");
  const [moodHistory, setMoodHistory] = useState([]);
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [triggerText, setTriggerText] = useState("");
  const [moodSaved, setMoodSaved] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, text: "Morning meditation", done: false, time: "morning" },
    { id: 2, text: "Gratitude journal", done: true, time: "morning" },
  ]);
  const [newTask, setNewTask] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userGoal, setUserGoal] = useState("");
  const [goalInput, setGoalInput] = useState("");
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [showKnowledge, setShowKnowledge] = useState(false);
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [showWellbeing, setShowWellbeing] = useState(false);
  const [wbQuestion, setWbQuestion] = useState(0);
  const [wbAnswers, setWbAnswers] = useState([]);
  const [wbResult, setWbResult] = useState(null);
  const [showSoundscapes, setShowSoundscapes] = useState(false);
  const [playingSound, setPlayingSound] = useState(null);
  const [daysActive] = useState(7);
  const chatEndRef = useRef(null);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    if (chatMessages.length === 0 && screen === "app" && activeTab === "companion") {
      setChatMessages([{ role: "assistant", text: t.companion.welcome }]);
    }
  }, [activeTab, screen, lang]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isTyping]);

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    const userMsg = { role: "user", text: chatInput };
    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput("");
    setIsTyping(true);
    // TODO: Replace with real AI API call
    setTimeout(() => {
      const responses = COMPANION_RESPONSES[lang];
      const reply = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages((prev) => [...prev, { role: "assistant", text: reply }]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleSaveMood = () => {
    if (!selectedEmotion) return;
    const entry = {
      id: Date.now(),
      emotion: selectedEmotion,
      trigger: triggerText,
      date: new Date().toLocaleDateString(lang === "en" ? "en-US" : lang === "es" ? "es-ES" : "fr-FR", { month: "short", day: "numeric" }),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMoodHistory((prev) => [entry, ...prev]);
    setMoodSaved(true);
    setTimeout(() => { setMoodSaved(false); setSelectedEmotion(null); setTriggerText(""); }, 2000);
  };

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    setTasks((prev) => [...prev, { id: Date.now(), text: newTask, done: false, time: "morning" }]);
    setNewTask("");
  };

  const toggleTask = (id) => setTasks((prev) => prev.map((t) => t.id === id ? { ...t, done: !t.done } : t));

  const handleWbAnswer = (answerIndex) => {
    const newAnswers = [...wbAnswers, answerIndex];
    setWbAnswers(newAnswers);
    if (wbQuestion < t.wellbeing.questions.length - 1) {
      setWbQuestion(wbQuestion + 1);
    } else {
      const score = newAnswers.reduce((acc, a) => acc + (3 - a), 0);
      const max = t.wellbeing.questions.length * 3;
      const pct = score / max;
      setWbResult(pct > 0.66 ? "high" : pct > 0.33 ? "mid" : "low");
    }
  };

  const resetWellbeing = () => { setWbQuestion(0); setWbAnswers([]); setWbResult(null); };

  const SOUNDSCAPES = [
    { id: "rain", name: lang === "en" ? "Rain on Leaves" : lang === "es" ? "Lluvia en hojas" : "Pluie sur feuilles", icon: "🌧️", color: "#60A5FA" },
    { id: "ocean", name: lang === "en" ? "Ocean Waves" : lang === "es" ? "Olas del océano" : "Vagues océaniques", icon: "🌊", color: "#2DD4BF" },
    { id: "forest", name: lang === "en" ? "Forest Ambiance" : lang === "es" ? "Ambiente del bosque" : "Ambiance forêt", icon: "🌲", color: "#34D399" },
    { id: "fire", name: lang === "en" ? "Crackling Fire" : lang === "es" ? "Fuego crepitante" : "Feu crépitant", icon: "🔥", color: "#F97316" },
    { id: "wind", name: lang === "en" ? "Mountain Wind" : lang === "es" ? "Viento de montaña" : "Vent de montagne", icon: "🏔️", color: "#A78BFA" },
    { id: "white", name: lang === "en" ? "White Noise" : lang === "es" ? "Ruido blanco" : "Bruit blanc", icon: "☁️", color: "#94A3B8" },
  ];

  // ── Onboarding ──────────────────────────────────────────────────────────────
  const onboardSlides = [
    {
      icon: "✨",
      title: `${t.onboarding.welcome} ${t.appName}`,
      desc: t.onboarding.desc,
      color: THEME.accent,
    },
    {
      icon: "💜",
      title: t.onboarding.step1Title,
      desc: t.onboarding.step1Desc,
      color: THEME.pink,
    },
    {
      icon: "🌱",
      title: t.onboarding.step2Title,
      desc: t.onboarding.step2Desc,
      color: THEME.green,
    },
    {
      icon: "💬",
      title: t.onboarding.step3Title,
      desc: t.onboarding.step3Desc,
      color: THEME.teal,
    },
  ];

  if (screen === "onboarding") {
    const slide = onboardSlides[onboardStep];
    return (
      <div style={{ minHeight: "100dvh", background: THEME.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: "0 0 40px", fontFamily: "'Inter', sans-serif", userSelect: "none" }}>
        {/* Lang selector */}
        <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", padding: "16px 20px 0" }}>
          <div style={{ display: "flex", gap: "6px" }}>
            {["en", "es", "fr"].map((l) => (
              <button key={l} onClick={() => setLang(l)} style={{ padding: "5px 12px", borderRadius: "20px", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "12px", background: lang === l ? THEME.accent : THEME.bgCard2, color: lang === l ? "#fff" : THEME.textMuted, transition: "all 0.2s" }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Slide */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px 32px", textAlign: "center" }}>
          <div style={{ width: 120, height: 120, borderRadius: "40px", background: `${slide.color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56, marginBottom: 32, boxShadow: `0 0 40px ${slide.color}44`, transition: "all 0.4s" }}>
            {slide.icon}
          </div>
          <h1 style={{ color: THEME.text, fontSize: "26px", fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>{slide.title}</h1>
          {onboardStep === 0 && (
            <p style={{ color: THEME.accent2, fontSize: "16px", fontWeight: 600, marginBottom: 8 }}>{t.onboarding.subtitle}</p>
          )}
          <p style={{ color: THEME.textMuted, fontSize: "15px", lineHeight: 1.6, maxWidth: "320px" }}>{slide.desc}</p>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "28px" }}>
          {onboardSlides.map((_, i) => (
            <div key={i} onClick={() => setOnboardStep(i)} style={{ width: i === onboardStep ? 24 : 8, height: 8, borderRadius: 4, background: i === onboardStep ? THEME.accent : THEME.bgCard2, transition: "all 0.3s", cursor: "pointer" }} />
          ))}
        </div>

        {/* Buttons */}
        <div style={{ width: "100%", padding: "0 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <button
            onClick={() => { if (onboardStep < onboardSlides.length - 1) setOnboardStep(onboardStep + 1); else { setScreen("app"); setChatMessages([{ role: "assistant", text: t.companion.welcome }]); } }}
            style={{ width: "100%", padding: "16px", borderRadius: "16px", border: "none", background: `linear-gradient(135deg, ${THEME.accent}, ${THEME.accent2})`, color: "#fff", fontSize: "16px", fontWeight: 700, cursor: "pointer", boxShadow: `0 4px 24px ${THEME.accentGlow}` }}
          >
            {onboardStep < onboardSlides.length - 1 ? "→" : t.onboarding.cta}
          </button>
          {onboardStep < onboardSlides.length - 1 && (
            <button onClick={() => { setScreen("app"); setChatMessages([{ role: "assistant", text: t.companion.welcome }]); }} style={{ background: "none", border: "none", color: THEME.textMuted, fontSize: "14px", cursor: "pointer" }}>
              {t.onboarding.skip}
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── Knowledge Modal ─────────────────────────────────────────────────────────
  if (showKnowledge) {
    return (
      <div style={{ minHeight: "100dvh", background: THEME.bg, fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "24px 20px 16px", display: "flex", alignItems: "center", gap: "12px", background: THEME.bgCard, borderBottom: `1px solid ${THEME.border}` }}>
          <button onClick={() => { setShowKnowledge(false); setExpandedArticle(null); }} style={{ background: THEME.bgCard2, border: "none", color: THEME.text, borderRadius: "12px", padding: "8px 14px", cursor: "pointer", fontSize: "16px" }}>←</button>
          <div>
            <h2 style={{ color: THEME.text, fontSize: "18px", fontWeight: 700, margin: 0 }}>{t.knowledge.title}</h2>
            <p style={{ color: THEME.textMuted, fontSize: "12px", margin: 0 }}>{t.knowledge.subtitle}</p>
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px" }}>
          {expandedArticle !== null ? (
            <div style={{ background: THEME.bgCard, borderRadius: THEME.radius, padding: "24px" }}>
              <button onClick={() => setExpandedArticle(null)} style={{ background: "none", border: "none", color: THEME.accent2, cursor: "pointer", marginBottom: "16px", fontSize: "14px", display: "flex", alignItems: "center", gap: "4px" }}>← Back</button>
              <span style={{ background: THEME.accentGlow, color: THEME.accent2, borderRadius: "8px", padding: "4px 10px", fontSize: "11px", fontWeight: 600 }}>{t.knowledge.articles[expandedArticle].category}</span>
              <h3 style={{ color: THEME.text, fontSize: "22px", fontWeight: 800, margin: "16px 0" }}>{t.knowledge.articles[expandedArticle].title}</h3>
              <p style={{ color: THEME.textMuted, fontSize: "12px", marginBottom: "16px" }}>⏱ {t.knowledge.articles[expandedArticle].time}</p>
              <p style={{ color: THEME.text, fontSize: "15px", lineHeight: 1.8 }}>{t.knowledge.articles[expandedArticle].body}</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {t.knowledge.articles.map((a, i) => (
                <div key={i} onClick={() => setExpandedArticle(i)} style={{ background: THEME.bgCard, borderRadius: THEME.radius, padding: "20px", cursor: "pointer", border: `1px solid ${THEME.border}`, transition: "all 0.2s" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                    <span style={{ background: THEME.accentGlow, color: THEME.accent2, borderRadius: "8px", padding: "4px 10px", fontSize: "11px", fontWeight: 600 }}>{a.category}</span>
                    <span style={{ color: THEME.textMuted, fontSize: "12px" }}>⏱ {a.time}</span>
                  </div>
                  <h3 style={{ color: THEME.text, fontSize: "16px", fontWeight: 700, margin: "0 0 8px" }}>{a.title}</h3>
                  <p style={{ color: THEME.textMuted, fontSize: "13px", margin: "0 0 12px", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{a.body}</p>
                  <span style={{ color: THEME.accent2, fontSize: "13px", fontWeight: 600 }}>{t.knowledge.readMore} →</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── Wellbeing Modal ─────────────────────────────────────────────────────────
  if (showWellbeing) {
    return (
      <div style={{ minHeight: "100dvh", background: THEME.bg, fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "24px 20px 16px", display: "flex", alignItems: "center", gap: "12px", background: THEME.bgCard, borderBottom: `1px solid ${THEME.border}` }}>
          <button onClick={() => { setShowWellbeing(false); resetWellbeing(); }} style={{ background: THEME.bgCard2, border: "none", color: THEME.text, borderRadius: "12px", padding: "8px 14px", cursor: "pointer", fontSize: "16px" }}>←</button>
          <h2 style={{ color: THEME.text, fontSize: "18px", fontWeight: 700, margin: 0 }}>{t.wellbeing.title}</h2>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 20px" }}>
          {wbResult ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}>
              <div style={{ width: 100, height: 100, borderRadius: "50%", background: wbResult === "high" ? `${THEME.green}22` : wbResult === "mid" ? `${THEME.yellow}22` : `${THEME.pink}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>
                {wbResult === "high" ? "🌟" : wbResult === "mid" ? "🌱" : "🌧️"}
              </div>
              <div>
                <p style={{ color: THEME.textMuted, fontSize: "14px", margin: "0 0 4px" }}>{t.wellbeing.yourScore}</p>
                <h2 style={{ color: wbResult === "high" ? THEME.green : wbResult === "mid" ? THEME.yellow : THEME.pink, fontSize: "32px", fontWeight: 900, margin: 0 }}>{t.wellbeing.results[wbResult].label}</h2>
              </div>
              <p style={{ color: THEME.textMuted, fontSize: "15px", maxWidth: "280px", lineHeight: 1.6 }}>{t.wellbeing.results[wbResult].desc}</p>
              <button onClick={resetWellbeing} style={{ padding: "14px 32px", borderRadius: "14px", border: "none", background: THEME.accent, color: "#fff", fontWeight: 700, cursor: "pointer", fontSize: "15px" }}>{t.wellbeing.retake}</button>
            </div>
          ) : wbAnswers.length === 0 && wbQuestion === 0 ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}>
              <div style={{ fontSize: 64 }}>🧠</div>
              <h3 style={{ color: THEME.text, fontSize: "22px", fontWeight: 800 }}>{t.wellbeing.title}</h3>
              <p style={{ color: THEME.textMuted, fontSize: "15px", maxWidth: "280px", lineHeight: 1.6 }}>{t.wellbeing.subtitle}</p>
              <button onClick={() => setWbQuestion(0) & setWbAnswers([])} style={{ padding: "14px 32px", borderRadius: "14px", border: "none", background: `linear-gradient(135deg, ${THEME.accent}, ${THEME.accent2})`, color: "#fff", fontWeight: 700, cursor: "pointer", fontSize: "15px" }} onClick={() => handleWbAnswer(-1) || setWbAnswers([])}>
                {t.wellbeing.start}
              </button>
              <button onClick={() => { setWbAnswers([]); setWbQuestion(0); }} style={{ background: "none", border: "none", color: THEME.accent2, cursor: "pointer", fontSize: "15px", padding: "14px 32px", borderRadius: "14px", border: `1px solid ${THEME.accent}` }}>{t.wellbeing.start}</button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: THEME.textMuted, fontSize: "13px" }}>{wbQuestion + 1} / {t.wellbeing.questions.length}</span>
                <div style={{ flex: 1, marginLeft: "12px", background: THEME.bgCard2, borderRadius: "4px", height: "4px" }}>
                  <div style={{ width: `${((wbQuestion + 1) / t.wellbeing.questions.length) * 100}%`, height: "100%", background: THEME.accent, borderRadius: "4px", transition: "width 0.3s" }} />
                </div>
              </div>
              <h3 style={{ color: THEME.text, fontSize: "20px", fontWeight: 700, lineHeight: 1.4 }}>{t.wellbeing.questions[wbQuestion].q}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {t.wellbeing.questions[wbQuestion].options.map((opt, i) => (
                  <button key={i} onClick={() => handleWbAnswer(i)} style={{ padding: "16px", borderRadius: "14px", border: `1px solid ${THEME.border}`, background: THEME.bgCard, color: THEME.text, fontSize: "15px", cursor: "pointer", textAlign: "left", transition: "all 0.2s" }}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── Soundscapes Modal ────────────────────────────────────────────────────────
  if (showSoundscapes) {
    return (
      <div style={{ minHeight: "100dvh", background: THEME.bg, fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "24px 20px 16px", display: "flex", alignItems: "center", gap: "12px", background: THEME.bgCard, borderBottom: `1px solid ${THEME.border}` }}>
          <button onClick={() => setShowSoundscapes(false)} style={{ background: THEME.bgCard2, border: "none", color: THEME.text, borderRadius: "12px", padding: "8px 14px", cursor: "pointer", fontSize: "16px" }}>←</button>
          <div>
            <h2 style={{ color: THEME.text, fontSize: "18px", fontWeight: 700, margin: 0 }}>{lang === "en" ? "Focus Soundscapes" : lang === "es" ? "Paisajes Sonoros" : "Paysages Sonores"}</h2>
            <p style={{ color: THEME.textMuted, fontSize: "12px", margin: 0 }}>{lang === "en" ? "Block out the world" : lang === "es" ? "Bloquea el mundo" : "Bloquez le monde"}</p>
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
          {/* TODO: Integrate actual audio files or Web Audio API for soundscape playback */}
          {playingSound && (
            <div style={{ background: `${THEME.accent}22`, borderRadius: THEME.radius, padding: "16px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: THEME.accent, animation: "pulse 1.5s infinite" }} />
              <span style={{ color: THEME.accent2, fontSize: "14px", fontWeight: 600 }}>
                {SOUNDSCAPES.find((s) => s.id === playingSound)?.name}
              </span>
              <button onClick={() => setPlayingSound(null)} style={{ marginLeft: "auto", background: "none", border: "none", color: THEME.textMuted, cursor: "pointer", fontSize: "18px" }}>■</button>
            </div>
          )}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            {SOUNDSCAPES.map((s) => (
              <button key={s.id} onClick={() => setPlayingSound(playingSound === s.id ? null : s.id)} style={{ background: playingSound === s.id ? `${s.color}22` : THEME.bgCard, border: `1px solid ${playingSound === s.id ? s.color : THEME.border}`, borderRadius: THEME.radius, padding: "24px 16px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", transition: "all 0.2s" }}>
                <span style={{ fontSize: 36 }}>{s.icon}</span>
                <span style={{ color: THEME.text, fontSize: "14px", fontWeight: 600 }}>{s.name}</span>
                <span style={{ color: playingSound === s.id ? s.color : THEME.textMuted, fontSize: "20px" }}>{playingSound === s.id ? "⏸" : "▶"}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── Goal Modal ──────────────────────────────────────────────────────────────
  if (showGoalModal) {
    const goalOptions = [
      t.profile.goals.selfImage,
      t.profile.goals.sayNo,
      t.profile.goals.focus,
      t.profile.goals.negativeThoughts,
      t.profile.goals.timeManagement,
      t.profile.goals.buildHabits,
    ];
    return (
      <div style={{ minHeight: "100dvh", background: THEME.bg, fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "24px 20px 16px", display: "flex", alignItems: "center", gap: "12px", background: THEME.bgCard, borderBottom: `1px solid ${THEME.border}` }}>
          <button onClick={() => setShowGoalModal(false)} style={{ background: THEME.bgCard2, border: "none", color: THEME.text, borderRadius: "12px", padding: "8px 14px", cursor: "pointer", fontSize: "16px" }}>←</button>
          <h2 style={{ color: THEME.text, fontSize: "18px", fontWeight: 700, margin: 0 }}>{t.profile.goals.title}</h2>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
            {goalOptions.map((g, i) => (
              <button key={i} onClick={() => { setUserGoal(g); setGoalInput(g); }} style={{ padding: "16px 20px", borderRadius: "14px", border: `2px solid ${userGoal === g ? THEME.accent : THEME.border}`, background: userGoal === g ? `${THEME.accent}22` : THEME.bgCard, color: THEME.text, fontSize: "15px", cursor: "pointer", textAlign: "left", transition: "all 0.2s", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: userGoal === g ? THEME.accent : THEME.textMuted, fontSize: "18px" }}>{userGoal === g ? "●" : "○"}</span>
                {g}
              </button>
            ))}
          </div>
          <div style={{ background: THEME.bgCard, borderRadius: THEME.radius, padding: "16px", marginBottom: "16px" }}>
            <p style={{ color: THEME.textMuted, fontSize: "13px", marginBottom: "8px" }}>{lang === "en" ? "Or write your own:" : lang === "es" ? "O escribe el tuyo:" : "Ou écrivez le vôtre:"}</p>
            <input
              value={goalInput}
              onChange={(e) => setGoalInput(e.target.value)}
              placeholder={t.profile.goalPlaceholder}
              style={{ width: "100%", background: THEME.bgCard2, border: `1px solid ${THEME.border}`, borderRadius: "12px", padding: "12px 16px", color: THEME.text, fontSize: "14px", outline: "none", boxSizing: "border-box" }}
            />
          </div>
          <button onClick={() => { if (goalInput) { setUserGoal(goalInput); setShowGoalModal(false); } }} style={{ width: "100%", padding: "16px", borderRadius: "14px", border: "none", background: goalInput ? `linear-gradient(135deg, ${THEME.accent}, ${THEME.accent2})` : THEME.bgCard2, color: goalInput ? "#fff" : THEME.textMuted, fontWeight: 700, cursor: goalInput ? "pointer" : "default", fontSize: "15px" }}>
            {t.profile.saveGoal}
          </button>
        </div>
      </div>
    );
  }

  // ── Main App ─────────────────────────────────────────────────────────────────
  const completedTasks = tasks.filter((t) => t.done).length;
  const todayMood = moodHistory[0];

  return (
    <div style={{ minHeight: "100dvh", background: THEME.bg, fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column", maxWidth: "430px", margin: "0 auto", position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
        ::-webkit-scrollbar { width: 0; }
        input, textarea { -webkit-appearance: none; font-family: 'Inter', sans-serif; }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.3); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .card-hover:active { transform: scale(0.97); }
        .tab-btn:active { transform: scale(0.9); }
        textarea:focus, input:focus { outline: none; border-color: ${THEME.accent} !important; }
        .typing-dot { animation: pulse 1.2s ease-in-out infinite; }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
      `}</style>

      {/* ── Screen Content ── */}
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: "80px" }}>

        {/* ── HOME ── */}
        {activeTab === "home" && (
          <div style={{ animation: "fadeIn 0.3s ease" }}>
            {/* Header */}
            <div style={{ padding: "52px 20px 20px", background: `linear-gradient(180deg, ${THEME.bgCard} 0%, transparent 100%)` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p style={{ color: THEME.textMuted, fontSize: "14px", marginBottom: "4px" }}>{t.home.greeting} 👋</p>
                  <h1 style={{ color: THEME.text, fontSize: "26px", fontWeight: 900, letterSpacing: "-0.5px" }}>{t.appName}</h1>
                  <p style={{ color: THEME.textMuted, fontSize: "13px", marginTop: "2px" }}>{t.home.subtitle}</p>
                </div>
                <div style={{ display: "flex", gap: "8px", paddingTop: "4px" }}>
                  {["en", "es", "fr"].map((l) => (
                    <button key={l} onClick={() => setLang(l)} style={{ padding: "5px 10px", borderRadius: "12px", border: "none", cursor: "pointer", fontWeight: 700, fontSize: "10px", background: lang === l ? THEME.accent : THEME.bgCard2, color: lang === l ? "#fff" : THEME.textMuted, transition: "all 0.2s" }}>
                      {l.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div style={{ padding: "0 20px 16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div className="card-hover" onClick={() => setShowGoalModal(true)} style={{ background: THEME.bgCard, borderRadius: THEME.radius, padding: "16px", border: `1px solid ${THEME.border}`, cursor: "pointer", transition: "all 0.2s" }}>
                <p style={{ color: THEME.textMuted, fontSize: "11px", fontWeight: 600, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{t.home.yourGoal}</p>
                <p style={{ color: userGoal ? THEME.accent2 : THEME.textDim, fontSize: "13px", fontWeight: userGoal ? 600 : 400, lineHeight: 1.3 }}>{userGoal || t.home.noGoal}</p>
                {!userGoal && <p style={{ color: THEME.accent, fontSize: "12px", marginTop: "6px", fontWeight: 600 }}>{t.home.setGoal} →</p>}
              </div>
              <div className="card-hover" onClick={() => setActiveTab("mood")} style={{ background: THEME.bgCard, borderRadius: THEME.radius, padding: "16px", border: `1px solid ${THEME.border}`, cursor: "pointer", transition: "all 0.2s" }}>
                <p style={{ color: THEME.textMuted, fontSize: "11px", fontWeight: 600, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{t.home.todayMood}</p>
                {todayMood ? (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "22px" }}>{EMOTION_EMOJIS[todayMood.emotion]}</span>
                    <span style={{ color: EMOTION_COLORS[todayMood.emotion], fontSize: "13px", fontWeight: 700 }}>{t.mood.emotions[todayMood.emotion]}</span>
                  </div>
                ) : (
                  <>
                    <p style={{ color: THEME.textDim, fontSize: "13px" }}>{t.home.notLogged}</p>
                    <p style={{ color: THEME.accent, fontSize: "12px", marginTop: "6px", fontWeight: 600 }}>{t.home.logNow} →</p>
                  </>
                )}
              </div>
            </div>

            {/* Features Grid */}
            <div style={{ padding: "0 20px" }}>
              <h2 style={{ color: THEME.text, fontSize: "16px", fontWeight: 700, marginBottom: "14px" }}>{t.home.features}</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {[
                  { icon: "💜", title: t.home.moodTracker, desc: t.home.moodDesc, color: THEME.pink, action: () => setActiveTab("mood") },
                  { icon: "🌱", title: t.home.routineBuilder, desc: t.home.routineDesc, color: THEME.green, action: () => setActiveTab("tasks") },
                  { icon: "💬", title: t.home.smartCompanion, desc: t.home.companionDesc, color: THEME.accent, action: () => setActiveTab("companion") },
                  { icon: "🧠", title: t.home.knowledge, desc: t.home.knowledgeDesc, color: THEME.yellow, action: () => setShowKnowledge(true) },
                  { icon: "🎵", title: t.home.soundscapes, desc: t.home.soundDesc, color: THEME.teal, action: () => setShowSoundscapes(true) },
                  { icon: "📊", title: t.home.wellbeing, desc: t.home.wellDesc, color: "#F472B6", action: () => { setShowWellbeing(true); resetWellbeing(); } },
                ].map((f, i) => (
                  <div key={i} className="card-hover" onClick={f.action} style={{ background: THEME.bgCard, borderRadius: THEME.radius, padding: "18px", border: `1px solid ${THEME.border}`, cursor: "pointer", transition: "all 0.2s", animation: `slideUp 0.3s ease ${i * 0.05}s both` }}>
                    <div style={{ width: 44, height: 44, borderRadius: "14px", background: `${f.color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", marginBottom: "12px" }}>{f.icon}</div>
                    <p style={{ color: THEME.text, fontSize: "14px", fontWeight: 700, marginBottom: "4px" }}>{f.title}</p>
                    <p style={{ color: THEME.textMuted, fontSize: "11px", lineHeight: 1.4 }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div style={{ margin: "20px 20px 0", background: `linear-gradient(135deg, ${THEME.accent}22, ${THEME.teal}11)`, borderRadius: THEME.radius, padding: "20px", border: `1px solid ${THEME.accent}33` }}>
              <p style={{ color: THEME.textMuted, fontSize: "13px", lineHeight: 1.6, fontStyle: "italic" }}>{t.home.quote}</p>
              <p style={{ color: THEME.textDim, fontSize: "11px", marginTop: "8px" }}>— {lang === "en" ? "App Store user" : lang === "es" ? "Usuario de App Store" : "Utilisateur App Store"}</p>
            </div>
          </div>
        )}

        {/* ── MOOD ── */}
        {activeTab === "mood" && (
          <div style={{ animation: "fadeIn 0.3s ease" }}>
            <div style={{ padding: "52px 20px 20px", background: `linear-gradient(180deg, ${THEME.bgCard} 0%, transparent 100%)` }}>
              <h1 style={{ color: THEME.text, fontSize: "24px", fontWeight: 900 }}>{t.mood.title}</h1>
              <p style={{ color: THEME.textMuted, fontSize: "14px", marginTop: "4px" }}>{t.mood.subtitle}</p>
            </div>

            <div style={{ padding: "0 20px" }}>
              {/* Emotion Grid */}
              <div style={{ background: THEME.bgCard, borderRadius: THEME.radius, padding: "20px", marginBottom: "16px", border: `1px solid ${THEME.border}` }}>
                <p style={{ color: THEME.textMuted, fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "16px" }}>{t.mood.selectEmotion}</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
                  {Object.entries(EMOTION_EMOJIS).map(([key, emoji]) => (
                    <button key={key} onClick={() => setSelectedEmotion(selectedEmotion === key ? null : key)} style={{ background: selectedEmotion === key ? `${EMOTION_COLORS[key]}33` : THEME.bgCard2, border: `2px solid ${selectedEmotion === key ? EMOTION_COLORS[key] : "transparent"}`, borderRadius: "14px", padding: "12px 4px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", transition: "all 0.2s" }}>
                      <span style={{ fontSize: "24px" }}>{emoji}</span>
                      <span style={{ color: selectedEmotion === key ? EMOTION_COLORS[key] : THEME.textMuted, fontSize: "10px", fontWeight: 600 }}>{t.mood.emotions[key]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trigger */}
              <div style={{ background: THEME.bgCard, borderRadius: THEME.radius, padding: "20px", marginBottom: "16px", border: `1px solid ${THEME.border}` }}>
                <p style={{ color: THEME.textMuted, fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>{t.mood.whatTriggered}</p>
                <textarea
                  value={triggerText}
                  onChange={(e) => setTriggerText(e.target.value)}
                  placeholder={t.mood.triggerPlaceholder}
                  rows={3}
                  style={{ width: "100%", background: THEME.bgCard2, border: `1px solid ${THEME.border}`, borderRadius: "12px", padding: "12px 16px", color: THEME.text, fontSize: "14px", resize: "none", fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              <button onClick={handleSaveMood} disabled={!selectedEmotion} style={{ width: "100%", padding: "16px", borderRadius: "14px", border: "none", background: moodSaved ? THEME.green : selectedEmotion ? `linear-gradient(135deg, ${THEME.accent}, ${THEME.accent2})` : THEME.bgCard2, color: selectedEmotion || moodSaved ? "#fff" : THEME.textMuted, fontWeight: 700, cursor: selectedEmotion ? "pointer" : "default", fontSize: "16px", marginBottom: "24px", transition: "all 0.3s" }}>
                {moodSaved ? t.mood.saved : t.mood.save}
              </button>

              {/* History */}
              {moodHistory.length > 0 && (
                <div>
                  <h3 style={{ color: THEME.text, fontSize: "16px", fontWeight: 700, marginBottom: "12px" }}>{t.mood.history}</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {moodHistory.slice(0, 10).map((entry) => (
                      <div key={entry.id} style={{ background: THEME.bgCard, borderRadius: THEME.radiusSm, padding: "14px 16px", border: `1px solid ${THEME.border}`, display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ fontSize: "24px" }}>{EMOTION_EMOJIS[entry.emotion]}</span>
                        <div style={{ flex: 1 }}>
                          <p style={{ color: EMOTION_COLORS[entry.emotion], fontSize: "14px", fontWeight: 700 }}>{t.mood.emotions[entry.emotion]}</p>
                          {entry.trigger && <p style={{ color: THEME.textMuted, fontSize: "12px", marginTop: "2px", lineHeight: 1.3 }}>{entry.trigger}</p>}
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <p style={{ color: THEME.textDim, fontSize: "11px" }}>{entry.date}</p>
                          <p style={{ color: THEME.textDim, fontSize: "11px" }}>{entry.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {moodHistory.length === 0 && (
                <div style={{ textAlign: "center", padding: "32px 0", color: THEME.textDim }}>
                  <p style={{ fontSize: "36px", marginBottom: "12px" }}>🗓️</p>
                  <p style={{ fontSize: "14px" }}>{t.mood.noHistory}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── TASKS ── */}
        {activeTab === "tasks" && (
          <div style={{ animation: "fadeIn 0.3s ease" }}>
            <div style={{ padding: "52px 20px 20px", background: `linear-gradient(180deg, ${THEME.bgCard} 0%, transparent 100%)` }}>
              <h1 style={{ color: THEME.text, fontSize: "24px", fontWeight: 900 }}>{t.tasks.title}</h1>
              <p style={{ color: THEME.textMuted, fontSize: "14px", marginTop: "4px" }}>{t.tasks.subtitle}</p>
            </div>

            <div style={{ padding: "0 20px" }}>
              {/* Progress */}
              {tasks.length > 0 && (
                <div style={{ background: THEME.bgCard, borderRadius: THEME.radius, padding: "16px", marginBottom: "16px", border: `1px solid ${THEME.border}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span style={{ color: THEME.text, fontSize: "13px", fontWeight: 600 }}>{completedTasks}/{tasks.length} {t.tasks.completed}</span>
                    <span style={{ color: THEME.accent2, fontSize: "13px", fontWeight: 600 }}>{Math.round((completedTasks / tasks.length) * 100)}%</span>
                  </div>
                  <div style={{ background: THEME.bgCard2, borderRadius: "6px", height: "6px" }}>
                    <div style={{ width: `${(completedTasks / tasks.length) * 100}%`, height: "100%", background: `linear-gradient(90deg, ${THEME.accent}, ${THEME.green})`, borderRadius: "6px", transition: "width 0.4s" }} />
                  </div>
                </div>
              )}

              {/* Add Task */}
              <div style={{ background: THEME.bgCard, borderRadius: THEME.radius, padding: "16px", marginBottom: "16px", border: `1px solid ${THEME.border}` }}>
                <p style={{ color: THEME.textMuted, fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>{t.tasks.addTask}</p>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleAddTask()} placeholder={t.tasks.taskPlaceholder} style={{ flex: 1, background: THEME.bgCard2, border: `1px solid ${THEME.border}`, borderRadius: "12px", padding: "12px 16px", color: THEME.text, fontSize: "14px" }} />
                  <button onClick={handleAddTask} style={{ padding: "12px 20px", borderRadius: "12px", border: "none", background: THEME.accent, color: "#fff", fontWeight: 700, cursor: "pointer", fontSize: "14px", whiteSpace: "nowrap" }}>{t.tasks.add}</button>
                </div>
              </div>

              {/* Suggestions */}
              <div style={{ background: THEME.bgCard, borderRadius: THEME.radius, padding: "16px", marginBottom: "16px", border: `1px solid ${THEME.border}` }}>
                <p style={{ color: THEME.textMuted, fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>{t.tasks.suggestions}</p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {SUGGESTED_TASKS[lang].slice(0, 5).map((s, i) => (
                    <button key={i} onClick={() => setTasks((prev) => [...prev, { id: Date.now() + i, text: s, done: false, time: "morning" }])} style={{ background: THEME.bgCard2, border: `1px solid ${THEME.border}`, borderRadius: "20px", padding: "6px 14px", color: THEME.textMuted, fontSize: "12px", cursor: "pointer", transition: "all 0.2s" }}>
                      + {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Task List */}
              <div>
                <h3 style={{ color: THEME.text, fontSize: "16px", fontWeight: 700, marginBottom: "12px" }}>{t.tasks.yourTasks}</h3>
                {tasks.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "32px 0", color: THEME.textDim }}>
                    <p style={{ fontSize: "36px", marginBottom: "12px" }}>✅</p>
                    <p>{t.tasks.noTasks}</p>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {tasks.map((task) => (
                      <div key={task.id} className="card-hover" onClick={() => toggleTask(task.id)} style={{ background: THEME.bgCard, borderRadius: THEME.radiusSm, padding: "14px 16px", border: `1px solid ${task.done ? THEME.green + "44" : THEME.border}`, display: "flex", alignItems: "center", gap: "14px", cursor: "pointer", transition: "all 0.2s" }}>
                        <div style={{ width: 22, height: 22, borderRadius: "50%", border: `2px solid ${task.done ? THEME.green : THEME.textDim}`, background: task.done ? THEME.green : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.2s" }}>
                          {task.done && <span style={{ color: "#fff", fontSize: "12px", fontWeight: 900 }}>✓</span>}
                        </div>
                        <span style={{ color: task.done ? THEME.textDim : THEME.text, fontSize: "14px", textDecoration: task.done ? "line-through" : "none", flex: 1, transition: "all 0.2s" }}>{task.text}</span>
                        <button onClick={(e) => { e.stopPropagation(); setTasks((prev) => prev.filter((t) => t.id !== task.id)); }} style={{ background: "none", border: "none", color: THEME.textDim, cursor: "pointer", fontSize: "16px", padding: "4px" }}>×</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── COMPANION ── */}
        {activeTab === "companion" && (
          <div style={{ animation: "fadeIn 0.3s ease", display: "flex", flexDirection: "column", height: "calc(100dvh - 80px)" }}>
            <div style={{ padding: "52px 20px 16px", background: `linear-gradient(180deg, ${THEME.bgCard} 0%, transparent 100%)`, flexShrink: 0 }}>
              <h1 style={{ color: THEME.text, fontSize: "24px", fontWeight: 900 }}>{t.companion.title}</h1>
              <p style={{ color: THEME.textMuted, fontSize: "14px", marginTop: "4px" }}>{t.companion.subtitle}</p>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
              {chatMessages.map((msg, i) => (
                <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start", animation: "slideUp 0.2s ease" }}>
                  {msg.role === "assistant" && (
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg, ${THEME.accent}, ${THEME.teal})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", marginRight: "8px", flexShrink: 0 }}>✨</div>
                  )}
                  <div style={{ maxWidth: "78%", background: msg.role === "user" ? `linear-gradient(135deg, ${THEME.accent}, ${THEME.accent2})` : THEME.bgCard, borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px", padding: "12px 16px", border: msg.role === "user" ? "none" : `1px solid ${THEME.border}` }}>
                    <p style={{ color: THEME.text, fontSize: "14px", lineHeight: 1.5 }}>{msg.text}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg, ${THEME.accent}, ${THEME.teal})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>✨</div>
                  <div style={{ background: THEME.bgCard, borderRadius: "18px 18px 18px 4px", padding: "12px 16px", border: `1px solid ${THEME.border}`, display: "flex", gap: "4px", alignItems: "center" }}>
                    {[0, 1, 2].map((i) => <div key={i} className="typing-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: THEME.accent }} />)}
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div style={{ padding: "12px 20px 16px", background: THEME.bgCard, borderTop: `1px solid ${THEME.border}`, flexShrink: 0 }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <textarea
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSendMessage(); } }}
                  placeholder={t.companion.placeholder}
                  rows={1}
                  style={{ flex: 1, background: THEME.bgCard2, border: `1px solid ${THEME.border}`, borderRadius: "14px", padding: "12px 16px", color: THEME.text, fontSize: "14px", resize: "none", fontFamily: "'Inter', sans-serif", maxHeight: "80px" }}
                />
                <button onClick={handleSendMessage} disabled={!chatInput.trim() || isTyping} style={{ width: 48, height: 48, borderRadius: "14px", border: "none", background: chatInput.trim() ? `linear-gradient(135deg, ${THEME.accent}, ${THEME.accent2})` : THEME.bgCard2, color: "#fff", cursor: chatInput.trim() ? "pointer" : "default", fontSize: "20px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", alignSelf: "flex-end" }}>
                  ↑
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── PROFILE ── */}
        {activeTab === "profile" && (
          <div style={{ animation: "fadeIn 0.3s ease" }}>
            <div style={{ padding: "52px 20px 24px", background: `linear-gradient(180deg, ${THEME.bgCard} 0%, transparent 100%)` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: 60, height: 60, borderRadius: "20px", background: `linear-gradient(135deg, ${THEME.accent}, ${THEME.teal})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px" }}>🌟</div>
                <div>
                  <h1 style={{ color: THEME.text, fontSize: "22px", fontWeight: 900 }}>{t.profile.title}</h1>
                  <p style={{ color: THEME.textMuted, fontSize: "13px", marginTop: "2px" }}>{t.by}</p>
                </div>
              </div>
            </div>

            <div style={{ padding: "0 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Stats */}
              <div style={{ background: THEME.bgCard, borderRadius: THEME.radius, padding: "20px", border: `1px solid ${THEME.border}` }}>
                <h3 style={{ color: THEME.text, fontSize: "14px", fontWeight: 700, marginBottom: "16px" }}>{t.profile.stats}</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", textAlign: "center" }}>
                  {[
                    { val: daysActive, label: t.profile.daysActive, color: THEME.accent },
                    { val: moodHistory.length, label: t.profile.checkIns, color: THEME.pink },
                    { val: completedTasks, label: t.profile.tasksCompleted, color: THEME.green },
                  ].map((s, i) => (
                    <div key={i} style={{ background: THEME.bgCard2, borderRadius: "14px", padding: "14px 8px" }}>
                      <p style={{ color: s.color, fontSize: "28px", fontWeight: 900 }}>{s.val}</p>
                      <p style={{ color: THEME.textMuted, fontSize: "11px", marginTop: "4px" }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Goal */}
              <div className="card-hover" onClick={() => setShowGoalModal(true)} style={{ background: THEME.bgCard, borderRadius: THEME.radius, padding: "20px", border: `1px solid ${THEME.border}`, cursor: "pointer", transition: "all 0.2s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <p style={{ color: THEME.textMuted, fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "6px" }}>{t.profile.yourGoal}</p>
                    <p style={{ color: userGoal ? THEME.text : THEME.textDim, fontSize: "15px", fontWeight: userGoal ? 600 : 400 }}>{userGoal || t.home.noGoal}</p>
                  </div>
                  <span style={{ color: THEME.accent, fontSize: "20px" }}>✎</span>
                </div>
              </div>

              {/* Tools */}
              {[
                { icon: "🧠", title: t.profile.wellbeing, sub: lang === "en" ? "Track your emotional dynamics" : lang === "es" ? "Rastrea tu dinámica emocional" : "Suivez votre dynamique émotionnelle", action: () => { setShowWellbeing(true); resetWellbeing(); }, color: THEME.accent },
                { icon: "🎵", title: t.profile.soundscapes, sub: lang === "en" ? "Deep focus soundscapes" : lang === "es" ? "Paisajes sonoros de enfoque" : "Paysages sonores de concentration", action: () => setShowSoundscapes(true), color: THEME.teal },
                { icon: "📖", title: t.knowledge.title, sub: lang === "en" ? "Evidence-based insights" : lang === "es" ? "Perspectivas basadas en evidencia" : "Aperçus fondés sur des preuves", action: () => setShowKnowledge(true), color: THEME.yellow },
              ].map((item, i) => (
                <div key={i} className="card-hover" onClick={item.action} style={{ background: THEME.bgCard, borderRadius: THEME.radius, padding: "18px", border: `1px solid ${THEME.border}`, cursor: "pointer", display: "flex", alignItems: "center", gap: "14px", transition: "all 0.2s" }}>
                  <div style={{ width: 46, height: 46, borderRadius: "14px", background: `${item.color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>{item.icon}</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: THEME.text, fontSize: "15px", fontWeight: 700 }}>{item.title}</p>
                    <p style={{ color: THEME.textMuted, fontSize: "12px", marginTop: "2px" }}>{item.sub}</p>
                  </div>
                  <span style={{ color: THEME.textDim, fontSize: "18px" }}>›</span>
                </div>
              ))}

              {/* Language */}
              <div style={{ background: THEME.bgCard, borderRadius: THEME.radius, padding: "20px", border: `1px solid ${THEME.border}` }}>
                <p style={{ color: THEME.textMuted, fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>{t.profile.language}</p>
                <div style={{ display: "flex", gap: "10px" }}>
                  {[{ code: "en", name: "English" }, { code: "es", name: "Español" }, { code: "fr", name: "Français" }].map((l) => (
                    <button key={l.code} onClick={() => setLang(l.code)} style={{ flex: 1, padding: "10px", borderRadius: "12px", border: `2px solid ${lang === l.code ? THEME.accent : THEME.border}`, background: lang === l.code ? `${THEME.accent}22` : THEME.bgCard2, color: lang === l.code ? THEME.accent2 : THEME.textMuted, fontWeight: 700, cursor: "pointer", fontSize: "13px", transition: "all 0.2s" }}>
                      {l.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* About */}
              <div style={{ background: THEME.bgCard, borderRadius: THEME.radius, padding: "20px", border: `1px solid ${THEME.border}`, textAlign: "center", marginBottom: "8px" }}>
                <p style={{ color: THEME.accent2, fontSize: "18px", fontWeight: 900, marginBottom: "4px" }}>{t.appName}</p>
                <p style={{ color: THEME.textMuted, fontSize: "12px", marginBottom: "4px" }}>{t.tagline}</p>
                <p style={{ color: THEME.textDim, fontSize: "11px" }}>{t.by} · v1.0.0</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Bottom Navigation ── */}
      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: "430px", background: `${THEME.bgCard}ee`, backdropFilter: "blur(20px)", borderTop: `1px solid ${THEME.border}`, display: "flex", padding: "8px 0 20px", zIndex: 100 }}>
        {[
          { id: "home", icon: "⊞", label: t.nav.home },
          { id: "mood", icon: "💜", label: t.nav.mood },
          { id: "tasks", icon: "✓", label: t.nav.tasks },
          { id: "companion", icon: "✨", label: t.nav.companion },
          { id: "profile", icon: "◎", label: t.nav.profile },
        ].map((tab) => (
          <button key={tab.id} className="tab-btn" onClick={() => setActiveTab(tab.id)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", background: "none", border: "none", cursor: "pointer", padding: "8px 4px", transition: "all 0.2s" }}>
            <div style={{ width: 32, height: 32, borderRadius: "10px", background: activeTab === tab.id ? THEME.accent : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: activeTab === tab.id ? "16px" : "18px", transition: "all 0.2s" }}>{tab.icon}</div>
            <span style={{ color: activeTab === tab.id ? THEME.accent2 : THEME.textDim, fontSize: "10px", fontWeight: activeTab === tab.id ? 700 : 400, transition: "all 0.2s" }}>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}