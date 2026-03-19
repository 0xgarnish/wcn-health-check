export type Language = 'en' | 'es' | 'fr'

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
]

export const translations: Record<Language, {
  orgName: string
  title: string
  subtitle: string
  questionLabel: string
  questionTitle: string
  questionDesc: string
  selectStage: string
  stageSelected: string
  level: string
  previous: string
  continue: string
  notesLabel: string
  notesPlaceholder: string
  notesHelper: string
  dragToGrow: string
  start: string
  footer: string
  stages: {
    name: string
    title: string
    description: string[]
  }[]
}> = {
  en: {
    orgName: 'Wildlife Conservation Network',
    title: 'Organizational',
    subtitle: 'Health Check',
    questionLabel: 'Question 1 of 12',
    questionTitle: 'Strategic Plan',
    questionDesc: 'How well does your organization plan for the future?',
    selectStage: 'Select your stage',
    stageSelected: 'selected',
    level: 'Level',
    previous: '← Previous',
    continue: 'Continue →',
    notesLabel: 'Why did you select',
    notesPlaceholder: 'Add any context or notes about your selection...',
    notesHelper: 'This helps WCN understand your organization\'s unique context.',
    dragToGrow: 'Drag slider to grow',
    start: 'Start',
    footer: 'Built with 💚 for conservation',
    stages: [
      {
        name: 'Planting',
        title: 'Seeds of Potential',
        description: [
          'No long-range program goals',
          'Activities driven by funding & donors',
          'Staff wait to be told what to do',
          'Daily tasks unclear',
        ],
      },
      {
        name: 'Seedling',
        title: 'Taking Root',
        description: [
          'Goals exist but are vague',
          'Plans are just activity lists',
          'Staff know duties, can\'t plan ahead',
          'Limited coordination',
        ],
      },
      {
        name: 'Growing',
        title: 'Branching Out',
        description: [
          'Reasonably clear strategy',
          'Only management articulates goals',
          'Individual work plans exist',
          'Some coordination gaps',
        ],
      },
      {
        name: 'Harvesting',
        title: 'Full Bloom',
        description: [
          'Clear 2-3 year strategy',
          'Goals align with mission',
          'Cohesive team planning',
          'Everyone articulates goals',
        ],
      },
    ],
  },
  es: {
    orgName: 'Red de Conservación de Vida Silvestre',
    title: 'Chequeo de Salud',
    subtitle: 'Organizacional',
    questionLabel: 'Pregunta 1 de 12',
    questionTitle: 'Plan Estratégico',
    questionDesc: '¿Qué tan bien planifica su organización para el futuro?',
    selectStage: 'Seleccione su etapa',
    stageSelected: 'seleccionado',
    level: 'Nivel',
    previous: '← Anterior',
    continue: 'Continuar →',
    notesLabel: '¿Por qué seleccionó',
    notesPlaceholder: 'Agregue contexto o notas sobre su selección...',
    notesHelper: 'Esto ayuda a WCN a entender el contexto único de su organización.',
    dragToGrow: 'Arrastra para crecer',
    start: 'Inicio',
    footer: 'Hecho con 💚 para la conservación',
    stages: [
      {
        name: 'Sembrando',
        title: 'Semillas de Potencial',
        description: [
          'Sin metas de programa a largo plazo',
          'Actividades impulsadas por financiamiento',
          'El personal espera instrucciones',
          'Tareas diarias poco claras',
        ],
      },
      {
        name: 'Brotando',
        title: 'Echando Raíces',
        description: [
          'Las metas existen pero son vagas',
          'Planes son solo listas de actividades',
          'Personal conoce deberes, no planifica',
          'Coordinación limitada',
        ],
      },
      {
        name: 'Creciendo',
        title: 'Expandiéndose',
        description: [
          'Estrategia razonablemente clara',
          'Solo gerencia articula las metas',
          'Existen planes de trabajo individuales',
          'Algunas brechas de coordinación',
        ],
      },
      {
        name: 'Cosechando',
        title: 'Plena Floración',
        description: [
          'Estrategia clara de 2-3 años',
          'Metas alineadas con la misión',
          'Planificación de equipo cohesiva',
          'Todos articulan las metas',
        ],
      },
    ],
  },
  fr: {
    orgName: 'Réseau de Conservation de la Faune',
    title: 'Bilan de Santé',
    subtitle: 'Organisationnel',
    questionLabel: 'Question 1 sur 12',
    questionTitle: 'Plan Stratégique',
    questionDesc: 'Dans quelle mesure votre organisation planifie-t-elle l\'avenir?',
    selectStage: 'Sélectionnez votre étape',
    stageSelected: 'sélectionné',
    level: 'Niveau',
    previous: '← Précédent',
    continue: 'Continuer →',
    notesLabel: 'Pourquoi avez-vous sélectionné',
    notesPlaceholder: 'Ajoutez du contexte ou des notes sur votre sélection...',
    notesHelper: 'Cela aide WCN à comprendre le contexte unique de votre organisation.',
    dragToGrow: 'Glissez pour grandir',
    start: 'Début',
    footer: 'Fait avec 💚 pour la conservation',
    stages: [
      {
        name: 'Plantation',
        title: 'Graines de Potentiel',
        description: [
          'Pas d\'objectifs à long terme',
          'Activités guidées par le financement',
          'Le personnel attend les instructions',
          'Tâches quotidiennes floues',
        ],
      },
      {
        name: 'Germination',
        title: 'Prendre Racine',
        description: [
          'Les objectifs existent mais sont vagues',
          'Plans sont des listes d\'activités',
          'Personnel connaît ses tâches, ne planifie pas',
          'Coordination limitée',
        ],
      },
      {
        name: 'Croissance',
        title: 'Expansion',
        description: [
          'Stratégie raisonnablement claire',
          'Seule la direction articule les objectifs',
          'Plans de travail individuels existent',
          'Quelques lacunes de coordination',
        ],
      },
      {
        name: 'Récolte',
        title: 'Pleine Floraison',
        description: [
          'Stratégie claire sur 2-3 ans',
          'Objectifs alignés sur la mission',
          'Planification d\'équipe cohésive',
          'Tous articulent les objectifs',
        ],
      },
    ],
  },
}
