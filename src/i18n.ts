export type Language = 'en' | 'es' | 'fr' | 'pt' | 'ru' | 'ms' | 'id' | 'bem' | 'rw' | 'lg' | 'ne' | 'om' | 'sn' | 'sw' | 'tn' | 'uz'

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ms', name: 'Bahasa Malaysia', flag: '🇲🇾' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'sw', name: 'Kiswahili', flag: '🇰🇪' },
  { code: 'ne', name: 'नेपाली', flag: '🇳🇵' },
  { code: 'rw', name: 'Kinyarwanda', flag: '🇷🇼' },
  { code: 'lg', name: 'Luganda', flag: '🇺🇬' },
  { code: 'om', name: 'Afaan Oromoo', flag: '🇪🇹' },
  { code: 'sn', name: 'Shona', flag: '🇿🇼' },
  { code: 'tn', name: 'Setswana', flag: '🇧🇼' },
  { code: 'bem', name: 'Ichibemba', flag: '🇿🇲' },
  { code: 'uz', name: 'Oʻzbekcha', flag: '🇺🇿' },
]

interface Question {
  id: number
  title: string
  desc: string
  plantIcon: string
}

interface Category {
  id: number
  name: string
  icon: string
  questions: Question[]
}

interface Stage {
  name: string
  title: string
  description: string[]
}

interface Translation {
  orgName: string
  title: string
  subtitle: string
  level: string
  previous: string
  next: string
  notesPlaceholder: string
  footer: string
  overall: string
  completed: string
  score: string
  categoryComplete: string
  completeAll: string
  stages: Stage[]
  categories: Category[]
}

// English categories - base structure
const categoriesEn: Category[] = [
  {
    id: 1,
    name: 'Registration & Governance',
    icon: '⚖️',
    questions: [
      { id: 101, title: 'Legal Registration', desc: 'Formal organizational status', plantIcon: '🌳' },
      { id: 102, title: 'Board Governance', desc: 'Leadership and oversight', plantIcon: '🌿' },
      { id: 103, title: 'Senior Leadership', desc: 'Executive management', plantIcon: '🌴' },
      { id: 104, title: 'Organization Structure', desc: 'Roles and hierarchy', plantIcon: '🎋' },
      { id: 105, title: 'Organization Policies & Procedures', desc: 'Documented guidelines', plantIcon: '🌲' },
    ],
  },
  {
    id: 2,
    name: 'Human Resources',
    icon: '👥',
    questions: [
      { id: 201, title: 'Job Descriptions and Responsibilities', desc: 'Role clarity', plantIcon: '🌳' },
      { id: 202, title: 'Compensation and Benefits', desc: 'Staff remuneration', plantIcon: '🌿' },
      { id: 203, title: 'Staff Capacity & Professional Development', desc: 'Training and growth', plantIcon: '🌴' },
      { id: 204, title: 'Internal Communications', desc: 'Team information flow', plantIcon: '🎋' },
      { id: 205, title: 'Reducing Unconscious Biases', desc: 'DEI practices', plantIcon: '🌲' },
      { id: 206, title: 'New Staff Recruitment', desc: 'Hiring processes', plantIcon: '🌵' },
    ],
  },
  {
    id: 3,
    name: 'Strategic Planning & Execution',
    icon: '📋',
    questions: [
      { id: 301, title: 'Mission, Vision, & Values', desc: 'Organizational purpose', plantIcon: '🌳' },
      { id: 302, title: 'Strategic Plan', desc: 'Long-term planning', plantIcon: '🌿' },
      { id: 303, title: 'Conservation Impact', desc: 'Measuring outcomes', plantIcon: '🌴' },
      { id: 304, title: 'Monitoring, Evaluation, & Adaptive Response', desc: 'Learning and adjusting', plantIcon: '🎋' },
    ],
  },
  {
    id: 4,
    name: 'Finance & Accounting',
    icon: '💰',
    questions: [
      { id: 401, title: 'Accounting Policies', desc: 'Financial procedures', plantIcon: '🌳' },
      { id: 402, title: 'Budgeting', desc: 'Financial planning', plantIcon: '🌿' },
      { id: 403, title: 'Financial Reporting', desc: 'Transparency and reports', plantIcon: '🌴' },
      { id: 404, title: 'Audits & External Oversight', desc: 'Independent review', plantIcon: '🎋' },
    ],
  },
  {
    id: 5,
    name: 'Commitment to People & Place',
    icon: '🌍',
    questions: [
      { id: 501, title: 'Target Groups & Constituents', desc: 'Stakeholder identification', plantIcon: '🌳' },
      { id: 502, title: 'Community Needs Assessment', desc: 'Understanding local needs', plantIcon: '🌿' },
      { id: 503, title: 'Long-Term Sustainability', desc: 'Lasting impact', plantIcon: '🌴' },
      { id: 504, title: 'Accountability', desc: 'Community responsibility', plantIcon: '🎋' },
      { id: 505, title: 'Peer Networks', desc: 'Collaboration with others', plantIcon: '🌲' },
    ],
  },
  {
    id: 6,
    name: 'Infrastructure & Equipment',
    icon: '🏗️',
    questions: [
      { id: 601, title: 'Facilities & Transportation', desc: 'Physical resources', plantIcon: '🌳' },
      { id: 602, title: 'Equipment Procurement & Asset Management', desc: 'Acquiring and maintaining', plantIcon: '🌿' },
      { id: 603, title: 'Land Tenure', desc: 'Property rights', plantIcon: '🌴' },
      { id: 604, title: 'Documentation & Record Keeping', desc: 'Data management', plantIcon: '🎋' },
    ],
  },
  {
    id: 7,
    name: 'Donor Engagement & Fundraising',
    icon: '🤝',
    questions: [
      { id: 701, title: 'Donor Influence & Trust', desc: 'Donor relationships', plantIcon: '🌳' },
      { id: 702, title: 'Donor Outreach & Engagement', desc: 'Cultivation efforts', plantIcon: '🌿' },
      { id: 703, title: 'Grant-Writing', desc: 'Proposal development', plantIcon: '🌴' },
      { id: 704, title: 'Fundraising Strategy', desc: 'Revenue planning', plantIcon: '🎋' },
    ],
  },
  {
    id: 8,
    name: 'External Marketing & Communications',
    icon: '📢',
    questions: [
      { id: 801, title: 'Communications Strategy', desc: 'Messaging approach', plantIcon: '🌳' },
      { id: 802, title: 'Visual Branding', desc: 'Organizational identity', plantIcon: '🌿' },
      { id: 803, title: 'Social Media', desc: 'Digital presence', plantIcon: '🌴' },
      { id: 804, title: 'Media & Press Relationships', desc: 'Public awareness', plantIcon: '🎋' },
    ],
  },
]

// Spanish categories
const categoriesEs: Category[] = [
  {
    id: 1,
    name: 'Registro y Gobernanza',
    icon: '⚖️',
    questions: [
      { id: 101, title: 'Registro Legal', desc: 'Estatus organizacional formal', plantIcon: '🌳' },
      { id: 102, title: 'Gobernanza de Junta', desc: 'Liderazgo y supervisión', plantIcon: '🌿' },
      { id: 103, title: 'Liderazgo Ejecutivo', desc: 'Gestión ejecutiva', plantIcon: '🌴' },
      { id: 104, title: 'Estructura Organizacional', desc: 'Roles y jerarquía', plantIcon: '🎋' },
      { id: 105, title: 'Políticas y Procedimientos', desc: 'Guías documentadas', plantIcon: '🌲' },
    ],
  },
  {
    id: 2,
    name: 'Recursos Humanos',
    icon: '👥',
    questions: [
      { id: 201, title: 'Descripciones de Puestos', desc: 'Claridad de roles', plantIcon: '🌳' },
      { id: 202, title: 'Compensación y Beneficios', desc: 'Remuneración del personal', plantIcon: '🌿' },
      { id: 203, title: 'Desarrollo Profesional', desc: 'Capacitación y crecimiento', plantIcon: '🌴' },
      { id: 204, title: 'Comunicación Interna', desc: 'Flujo de información', plantIcon: '🎋' },
      { id: 205, title: 'Reducción de Sesgos', desc: 'Prácticas de DEI', plantIcon: '🌲' },
      { id: 206, title: 'Reclutamiento', desc: 'Procesos de contratación', plantIcon: '🌵' },
    ],
  },
  {
    id: 3,
    name: 'Planificación Estratégica',
    icon: '📋',
    questions: [
      { id: 301, title: 'Misión, Visión y Valores', desc: 'Propósito organizacional', plantIcon: '🌳' },
      { id: 302, title: 'Plan Estratégico', desc: 'Planificación a largo plazo', plantIcon: '🌿' },
      { id: 303, title: 'Impacto en Conservación', desc: 'Medición de resultados', plantIcon: '🌴' },
      { id: 304, title: 'Monitoreo y Evaluación', desc: 'Aprendizaje y ajustes', plantIcon: '🎋' },
    ],
  },
  {
    id: 4,
    name: 'Finanzas y Contabilidad',
    icon: '💰',
    questions: [
      { id: 401, title: 'Políticas Contables', desc: 'Procedimientos financieros', plantIcon: '🌳' },
      { id: 402, title: 'Presupuesto', desc: 'Planificación financiera', plantIcon: '🌿' },
      { id: 403, title: 'Informes Financieros', desc: 'Transparencia y reportes', plantIcon: '🌴' },
      { id: 404, title: 'Auditorías', desc: 'Revisión independiente', plantIcon: '🎋' },
    ],
  },
  {
    id: 5,
    name: 'Compromiso con la Comunidad',
    icon: '🌍',
    questions: [
      { id: 501, title: 'Grupos Objetivo', desc: 'Identificación de partes interesadas', plantIcon: '🌳' },
      { id: 502, title: 'Evaluación de Necesidades', desc: 'Entender necesidades locales', plantIcon: '🌿' },
      { id: 503, title: 'Sostenibilidad a Largo Plazo', desc: 'Impacto duradero', plantIcon: '🌴' },
      { id: 504, title: 'Rendición de Cuentas', desc: 'Responsabilidad comunitaria', plantIcon: '🎋' },
      { id: 505, title: 'Redes de Pares', desc: 'Colaboración con otros', plantIcon: '🌲' },
    ],
  },
  {
    id: 6,
    name: 'Infraestructura y Equipos',
    icon: '🏗️',
    questions: [
      { id: 601, title: 'Instalaciones y Transporte', desc: 'Recursos físicos', plantIcon: '🌳' },
      { id: 602, title: 'Gestión de Activos', desc: 'Adquisición y mantenimiento', plantIcon: '🌿' },
      { id: 603, title: 'Tenencia de Tierras', desc: 'Derechos de propiedad', plantIcon: '🌴' },
      { id: 604, title: 'Documentación', desc: 'Gestión de datos', plantIcon: '🎋' },
    ],
  },
  {
    id: 7,
    name: 'Relación con Donantes',
    icon: '🤝',
    questions: [
      { id: 701, title: 'Confianza de Donantes', desc: 'Relaciones con donantes', plantIcon: '🌳' },
      { id: 702, title: 'Captación de Donantes', desc: 'Esfuerzos de cultivo', plantIcon: '🌿' },
      { id: 703, title: 'Redacción de Propuestas', desc: 'Desarrollo de propuestas', plantIcon: '🌴' },
      { id: 704, title: 'Estrategia de Recaudación', desc: 'Planificación de ingresos', plantIcon: '🎋' },
    ],
  },
  {
    id: 8,
    name: 'Marketing y Comunicación',
    icon: '📢',
    questions: [
      { id: 801, title: 'Estrategia de Comunicación', desc: 'Enfoque de mensajería', plantIcon: '🌳' },
      { id: 802, title: 'Identidad Visual', desc: 'Identidad organizacional', plantIcon: '🌿' },
      { id: 803, title: 'Redes Sociales', desc: 'Presencia digital', plantIcon: '🌴' },
      { id: 804, title: 'Relaciones con Medios', desc: 'Conciencia pública', plantIcon: '🎋' },
    ],
  },
]

// French categories
const categoriesFr: Category[] = [
  {
    id: 1,
    name: 'Enregistrement et Gouvernance',
    icon: '⚖️',
    questions: [
      { id: 101, title: 'Enregistrement Légal', desc: 'Statut organisationnel formel', plantIcon: '🌳' },
      { id: 102, title: 'Gouvernance du Conseil', desc: 'Leadership et supervision', plantIcon: '🌿' },
      { id: 103, title: 'Direction Exécutive', desc: 'Gestion exécutive', plantIcon: '🌴' },
      { id: 104, title: 'Structure Organisationnelle', desc: 'Rôles et hiérarchie', plantIcon: '🎋' },
      { id: 105, title: 'Politiques et Procédures', desc: 'Lignes directrices documentées', plantIcon: '🌲' },
    ],
  },
  {
    id: 2,
    name: 'Ressources Humaines',
    icon: '👥',
    questions: [
      { id: 201, title: 'Descriptions de Postes', desc: 'Clarté des rôles', plantIcon: '🌳' },
      { id: 202, title: 'Rémunération et Avantages', desc: 'Compensation du personnel', plantIcon: '🌿' },
      { id: 203, title: 'Développement Professionnel', desc: 'Formation et croissance', plantIcon: '🌴' },
      { id: 204, title: 'Communications Internes', desc: 'Flux d\'information', plantIcon: '🎋' },
      { id: 205, title: 'Réduction des Biais', desc: 'Pratiques DEI', plantIcon: '🌲' },
      { id: 206, title: 'Recrutement', desc: 'Processus d\'embauche', plantIcon: '🌵' },
    ],
  },
  {
    id: 3,
    name: 'Planification Stratégique',
    icon: '📋',
    questions: [
      { id: 301, title: 'Mission, Vision et Valeurs', desc: 'But organisationnel', plantIcon: '🌳' },
      { id: 302, title: 'Plan Stratégique', desc: 'Planification à long terme', plantIcon: '🌿' },
      { id: 303, title: 'Impact de Conservation', desc: 'Mesure des résultats', plantIcon: '🌴' },
      { id: 304, title: 'Suivi et Évaluation', desc: 'Apprentissage et ajustement', plantIcon: '🎋' },
    ],
  },
  {
    id: 4,
    name: 'Finance et Comptabilité',
    icon: '💰',
    questions: [
      { id: 401, title: 'Politiques Comptables', desc: 'Procédures financières', plantIcon: '🌳' },
      { id: 402, title: 'Budgétisation', desc: 'Planification financière', plantIcon: '🌿' },
      { id: 403, title: 'Rapports Financiers', desc: 'Transparence et rapports', plantIcon: '🌴' },
      { id: 404, title: 'Audits', desc: 'Révision indépendante', plantIcon: '🎋' },
    ],
  },
  {
    id: 5,
    name: 'Engagement Communautaire',
    icon: '🌍',
    questions: [
      { id: 501, title: 'Groupes Cibles', desc: 'Identification des parties prenantes', plantIcon: '🌳' },
      { id: 502, title: 'Évaluation des Besoins', desc: 'Comprendre les besoins locaux', plantIcon: '🌿' },
      { id: 503, title: 'Durabilité à Long Terme', desc: 'Impact durable', plantIcon: '🌴' },
      { id: 504, title: 'Responsabilité', desc: 'Responsabilité communautaire', plantIcon: '🎋' },
      { id: 505, title: 'Réseaux de Pairs', desc: 'Collaboration avec d\'autres', plantIcon: '🌲' },
    ],
  },
  {
    id: 6,
    name: 'Infrastructure et Équipement',
    icon: '🏗️',
    questions: [
      { id: 601, title: 'Installations et Transport', desc: 'Ressources physiques', plantIcon: '🌳' },
      { id: 602, title: 'Gestion des Actifs', desc: 'Acquisition et maintenance', plantIcon: '🌿' },
      { id: 603, title: 'Tenure Foncière', desc: 'Droits de propriété', plantIcon: '🌴' },
      { id: 604, title: 'Documentation', desc: 'Gestion des données', plantIcon: '🎋' },
    ],
  },
  {
    id: 7,
    name: 'Relations avec les Donateurs',
    icon: '🤝',
    questions: [
      { id: 701, title: 'Confiance des Donateurs', desc: 'Relations avec les donateurs', plantIcon: '🌳' },
      { id: 702, title: 'Engagement des Donateurs', desc: 'Efforts de cultivation', plantIcon: '🌿' },
      { id: 703, title: 'Rédaction de Subventions', desc: 'Développement de propositions', plantIcon: '🌴' },
      { id: 704, title: 'Stratégie de Collecte', desc: 'Planification des revenus', plantIcon: '🎋' },
    ],
  },
  {
    id: 8,
    name: 'Marketing et Communications',
    icon: '📢',
    questions: [
      { id: 801, title: 'Stratégie de Communication', desc: 'Approche de messagerie', plantIcon: '🌳' },
      { id: 802, title: 'Image de Marque', desc: 'Identité organisationnelle', plantIcon: '🌿' },
      { id: 803, title: 'Médias Sociaux', desc: 'Présence numérique', plantIcon: '🌴' },
      { id: 804, title: 'Relations Médias', desc: 'Sensibilisation publique', plantIcon: '🎋' },
    ],
  },
]

// Portuguese categories  
const categoriesPt: Category[] = [
  {
    id: 1,
    name: 'Registro e Governança',
    icon: '⚖️',
    questions: [
      { id: 101, title: 'Registro Legal', desc: 'Status organizacional formal', plantIcon: '🌳' },
      { id: 102, title: 'Governança do Conselho', desc: 'Liderança e supervisão', plantIcon: '🌿' },
      { id: 103, title: 'Liderança Executiva', desc: 'Gestão executiva', plantIcon: '🌴' },
      { id: 104, title: 'Estrutura Organizacional', desc: 'Funções e hierarquia', plantIcon: '🎋' },
      { id: 105, title: 'Políticas e Procedimentos', desc: 'Diretrizes documentadas', plantIcon: '🌲' },
    ],
  },
  {
    id: 2,
    name: 'Recursos Humanos',
    icon: '👥',
    questions: [
      { id: 201, title: 'Descrições de Cargos', desc: 'Clareza de funções', plantIcon: '🌳' },
      { id: 202, title: 'Remuneração e Benefícios', desc: 'Compensação da equipe', plantIcon: '🌿' },
      { id: 203, title: 'Desenvolvimento Profissional', desc: 'Treinamento e crescimento', plantIcon: '🌴' },
      { id: 204, title: 'Comunicação Interna', desc: 'Fluxo de informação', plantIcon: '🎋' },
      { id: 205, title: 'Redução de Vieses', desc: 'Práticas de DEI', plantIcon: '🌲' },
      { id: 206, title: 'Recrutamento', desc: 'Processos de contratação', plantIcon: '🌵' },
    ],
  },
  {
    id: 3,
    name: 'Planejamento Estratégico',
    icon: '📋',
    questions: [
      { id: 301, title: 'Missão, Visão e Valores', desc: 'Propósito organizacional', plantIcon: '🌳' },
      { id: 302, title: 'Plano Estratégico', desc: 'Planejamento de longo prazo', plantIcon: '🌿' },
      { id: 303, title: 'Impacto na Conservação', desc: 'Medição de resultados', plantIcon: '🌴' },
      { id: 304, title: 'Monitoramento e Avaliação', desc: 'Aprendizado e ajustes', plantIcon: '🎋' },
    ],
  },
  {
    id: 4,
    name: 'Finanças e Contabilidade',
    icon: '💰',
    questions: [
      { id: 401, title: 'Políticas Contábeis', desc: 'Procedimentos financeiros', plantIcon: '🌳' },
      { id: 402, title: 'Orçamento', desc: 'Planejamento financeiro', plantIcon: '🌿' },
      { id: 403, title: 'Relatórios Financeiros', desc: 'Transparência e relatórios', plantIcon: '🌴' },
      { id: 404, title: 'Auditorias', desc: 'Revisão independente', plantIcon: '🎋' },
    ],
  },
  {
    id: 5,
    name: 'Compromisso com a Comunidade',
    icon: '🌍',
    questions: [
      { id: 501, title: 'Grupos-Alvo', desc: 'Identificação de partes interessadas', plantIcon: '🌳' },
      { id: 502, title: 'Avaliação de Necessidades', desc: 'Entender necessidades locais', plantIcon: '🌿' },
      { id: 503, title: 'Sustentabilidade de Longo Prazo', desc: 'Impacto duradouro', plantIcon: '🌴' },
      { id: 504, title: 'Prestação de Contas', desc: 'Responsabilidade comunitária', plantIcon: '🎋' },
      { id: 505, title: 'Redes de Pares', desc: 'Colaboração com outros', plantIcon: '🌲' },
    ],
  },
  {
    id: 6,
    name: 'Infraestrutura e Equipamentos',
    icon: '🏗️',
    questions: [
      { id: 601, title: 'Instalações e Transporte', desc: 'Recursos físicos', plantIcon: '🌳' },
      { id: 602, title: 'Gestão de Ativos', desc: 'Aquisição e manutenção', plantIcon: '🌿' },
      { id: 603, title: 'Posse de Terras', desc: 'Direitos de propriedade', plantIcon: '🌴' },
      { id: 604, title: 'Documentação', desc: 'Gestão de dados', plantIcon: '🎋' },
    ],
  },
  {
    id: 7,
    name: 'Relação com Doadores',
    icon: '🤝',
    questions: [
      { id: 701, title: 'Confiança dos Doadores', desc: 'Relacionamento com doadores', plantIcon: '🌳' },
      { id: 702, title: 'Engajamento de Doadores', desc: 'Esforços de cultivo', plantIcon: '🌿' },
      { id: 703, title: 'Redação de Propostas', desc: 'Desenvolvimento de propostas', plantIcon: '🌴' },
      { id: 704, title: 'Estratégia de Captação', desc: 'Planejamento de receita', plantIcon: '🎋' },
    ],
  },
  {
    id: 8,
    name: 'Marketing e Comunicação',
    icon: '📢',
    questions: [
      { id: 801, title: 'Estratégia de Comunicação', desc: 'Abordagem de mensagens', plantIcon: '🌳' },
      { id: 802, title: 'Identidade Visual', desc: 'Identidade organizacional', plantIcon: '🌿' },
      { id: 803, title: 'Mídias Sociais', desc: 'Presença digital', plantIcon: '🌴' },
      { id: 804, title: 'Relações com a Mídia', desc: 'Conscientização pública', plantIcon: '🎋' },
    ],
  },
]

// Swahili categories
const categoriesSw: Category[] = [
  {
    id: 1,
    name: 'Usajili na Utawala',
    icon: '⚖️',
    questions: [
      { id: 101, title: 'Usajili wa Kisheria', desc: 'Hali rasmi ya shirika', plantIcon: '🌳' },
      { id: 102, title: 'Utawala wa Bodi', desc: 'Uongozi na usimamizi', plantIcon: '🌿' },
      { id: 103, title: 'Uongozi Mkuu', desc: 'Usimamizi mkuu', plantIcon: '🌴' },
      { id: 104, title: 'Muundo wa Shirika', desc: 'Majukumu na uongozi', plantIcon: '🎋' },
      { id: 105, title: 'Sera na Taratibu', desc: 'Miongozo iliyoandikwa', plantIcon: '🌲' },
    ],
  },
  {
    id: 2,
    name: 'Rasilimali Watu',
    icon: '👥',
    questions: [
      { id: 201, title: 'Maelezo ya Kazi', desc: 'Uwazi wa majukumu', plantIcon: '🌳' },
      { id: 202, title: 'Mishahara na Faida', desc: 'Malipo ya wafanyakazi', plantIcon: '🌿' },
      { id: 203, title: 'Maendeleo ya Kitaaluma', desc: 'Mafunzo na ukuaji', plantIcon: '🌴' },
      { id: 204, title: 'Mawasiliano ya Ndani', desc: 'Mtiririko wa habari', plantIcon: '🎋' },
      { id: 205, title: 'Kupunguza Upendeleo', desc: 'Mazoea ya DEI', plantIcon: '🌲' },
      { id: 206, title: 'Kuajiri Wafanyakazi', desc: 'Mchakato wa kuajiri', plantIcon: '🌵' },
    ],
  },
  {
    id: 3,
    name: 'Mipango Mkakati',
    icon: '📋',
    questions: [
      { id: 301, title: 'Dhamira, Maono na Thamani', desc: 'Kusudi la shirika', plantIcon: '🌳' },
      { id: 302, title: 'Mpango Mkakati', desc: 'Mipango ya muda mrefu', plantIcon: '🌿' },
      { id: 303, title: 'Athari ya Uhifadhi', desc: 'Kupima matokeo', plantIcon: '🌴' },
      { id: 304, title: 'Ufuatiliaji na Tathmini', desc: 'Kujifunza na kurekebisha', plantIcon: '🎋' },
    ],
  },
  {
    id: 4,
    name: 'Fedha na Uhasibu',
    icon: '💰',
    questions: [
      { id: 401, title: 'Sera za Uhasibu', desc: 'Taratibu za fedha', plantIcon: '🌳' },
      { id: 402, title: 'Bajeti', desc: 'Mipango ya fedha', plantIcon: '🌿' },
      { id: 403, title: 'Ripoti za Fedha', desc: 'Uwazi na ripoti', plantIcon: '🌴' },
      { id: 404, title: 'Ukaguzi', desc: 'Mapitio huru', plantIcon: '🎋' },
    ],
  },
  {
    id: 5,
    name: 'Kujitolea kwa Jamii',
    icon: '🌍',
    questions: [
      { id: 501, title: 'Makundi Lengwa', desc: 'Kutambua wadau', plantIcon: '🌳' },
      { id: 502, title: 'Tathmini ya Mahitaji', desc: 'Kuelewa mahitaji ya eneo', plantIcon: '🌿' },
      { id: 503, title: 'Uendelevu wa Muda Mrefu', desc: 'Athari ya kudumu', plantIcon: '🌴' },
      { id: 504, title: 'Uwajibikaji', desc: 'Wajibu wa jamii', plantIcon: '🎋' },
      { id: 505, title: 'Mitandao ya Rika', desc: 'Ushirikiano na wengine', plantIcon: '🌲' },
    ],
  },
  {
    id: 6,
    name: 'Miundombinu na Vifaa',
    icon: '🏗️',
    questions: [
      { id: 601, title: 'Majengo na Usafiri', desc: 'Rasilimali za kimwili', plantIcon: '🌳' },
      { id: 602, title: 'Usimamizi wa Mali', desc: 'Ununuzi na matengenezo', plantIcon: '🌿' },
      { id: 603, title: 'Umiliki wa Ardhi', desc: 'Haki za mali', plantIcon: '🌴' },
      { id: 604, title: 'Nyaraka', desc: 'Usimamizi wa data', plantIcon: '🎋' },
    ],
  },
  {
    id: 7,
    name: 'Uhusiano na Wafadhili',
    icon: '🤝',
    questions: [
      { id: 701, title: 'Imani ya Wafadhili', desc: 'Mahusiano na wafadhili', plantIcon: '🌳' },
      { id: 702, title: 'Ushirikiano na Wafadhili', desc: 'Juhudi za kukuza', plantIcon: '🌿' },
      { id: 703, title: 'Kuandika Mapendekezo', desc: 'Kuendeleza mapendekezo', plantIcon: '🌴' },
      { id: 704, title: 'Mkakati wa Kukusanya Fedha', desc: 'Mipango ya mapato', plantIcon: '🎋' },
    ],
  },
  {
    id: 8,
    name: 'Masoko na Mawasiliano',
    icon: '📢',
    questions: [
      { id: 801, title: 'Mkakati wa Mawasiliano', desc: 'Mbinu ya ujumbe', plantIcon: '🌳' },
      { id: 802, title: 'Chapa ya Kuonekana', desc: 'Utambulisho wa shirika', plantIcon: '🌿' },
      { id: 803, title: 'Mitandao ya Kijamii', desc: 'Uwepo wa kidijitali', plantIcon: '🌴' },
      { id: 804, title: 'Uhusiano na Vyombo vya Habari', desc: 'Ufahamu wa umma', plantIcon: '🎋' },
    ],
  },
]

// Stages translations
const stagesEn: Stage[] = [
  { name: 'Planting', title: 'Seeds of Potential', description: ['No formal processes', 'Ad-hoc approach', 'Limited awareness'] },
  { name: 'Seedling', title: 'Taking Root', description: ['Basic systems exist', 'Some structure', 'Growing awareness'] },
  { name: 'Growing', title: 'Branching Out', description: ['Clear processes', 'Regular practice', 'Good foundation'] },
  { name: 'Harvesting', title: 'Full Bloom', description: ['Excellence achieved', 'Best practices', 'Continuous improvement'] },
]

const stagesEs: Stage[] = [
  { name: 'Sembrando', title: 'Semillas de Potencial', description: ['Sin procesos formales', 'Enfoque ad-hoc', 'Conciencia limitada'] },
  { name: 'Brotando', title: 'Echando Raíces', description: ['Sistemas básicos existen', 'Algo de estructura', 'Conciencia creciente'] },
  { name: 'Creciendo', title: 'Expandiéndose', description: ['Procesos claros', 'Práctica regular', 'Buena base'] },
  { name: 'Cosechando', title: 'Plena Floración', description: ['Excelencia lograda', 'Mejores prácticas', 'Mejora continua'] },
]

const stagesFr: Stage[] = [
  { name: 'Plantation', title: 'Graines de Potentiel', description: ['Pas de processus formels', 'Approche ad-hoc', 'Conscience limitée'] },
  { name: 'Germination', title: 'Prendre Racine', description: ['Systèmes de base', 'Un peu de structure', 'Conscience croissante'] },
  { name: 'Croissance', title: 'Expansion', description: ['Processus clairs', 'Pratique régulière', 'Bonne base'] },
  { name: 'Récolte', title: 'Pleine Floraison', description: ['Excellence atteinte', 'Meilleures pratiques', 'Amélioration continue'] },
]

const stagesPt: Stage[] = [
  { name: 'Plantio', title: 'Sementes de Potencial', description: ['Sem processos formais', 'Abordagem ad-hoc', 'Consciência limitada'] },
  { name: 'Germinação', title: 'Criando Raízes', description: ['Sistemas básicos', 'Alguma estrutura', 'Consciência crescente'] },
  { name: 'Crescimento', title: 'Expandindo', description: ['Processos claros', 'Prática regular', 'Boa base'] },
  { name: 'Colheita', title: 'Plena Floração', description: ['Excelência alcançada', 'Melhores práticas', 'Melhoria contínua'] },
]

const stagesSw: Stage[] = [
  { name: 'Kupanda', title: 'Mbegu za Uwezo', description: ['Hakuna mchakato rasmi', 'Mbinu ya dharura', 'Ufahamu mdogo'] },
  { name: 'Mche', title: 'Kushika Mizizi', description: ['Mifumo ya msingi ipo', 'Muundo fulani', 'Ufahamu unakua'] },
  { name: 'Kukua', title: 'Kupanuka', description: ['Michakato wazi', 'Mazoezi ya kawaida', 'Msingi mzuri'] },
  { name: 'Kuvuna', title: 'Maua Kamili', description: ['Ubora umepatikana', 'Mazoezi bora', 'Uboreshaji endelevu'] },
]

export const translations: Record<Language, Translation> = {
  en: {
    orgName: 'Wildlife Conservation Network',
    title: 'Organizational',
    subtitle: 'Health Check',
    level: 'Level',
    previous: '← Previous',
    next: 'Next →',
    notesPlaceholder: 'Add context (optional)...',
    footer: 'Built with 💚 for conservation',
    overall: 'Overall',
    completed: 'completed',
    score: 'Score',
    categoryComplete: '✓ Category complete!',
    completeAll: 'Complete all questions',
    stages: stagesEn,
    categories: categoriesEn,
  },
  es: {
    orgName: 'Red de Conservación de Vida Silvestre',
    title: 'Chequeo de Salud',
    subtitle: 'Organizacional',
    level: 'Nivel',
    previous: '← Anterior',
    next: 'Siguiente →',
    notesPlaceholder: 'Agregar contexto (opcional)...',
    footer: 'Hecho con 💚 para la conservación',
    overall: 'General',
    completed: 'completado',
    score: 'Puntuación',
    categoryComplete: '✓ ¡Categoría completa!',
    completeAll: 'Completar todas las preguntas',
    stages: stagesEs,
    categories: categoriesEs,
  },
  fr: {
    orgName: 'Réseau de Conservation de la Faune',
    title: 'Bilan de Santé',
    subtitle: 'Organisationnel',
    level: 'Niveau',
    previous: '← Précédent',
    next: 'Suivant →',
    notesPlaceholder: 'Ajouter du contexte (optionnel)...',
    footer: 'Fait avec 💚 pour la conservation',
    overall: 'Global',
    completed: 'terminé',
    score: 'Score',
    categoryComplete: '✓ Catégorie terminée!',
    completeAll: 'Compléter toutes les questions',
    stages: stagesFr,
    categories: categoriesFr,
  },
  pt: {
    orgName: 'Rede de Conservação da Vida Selvagem',
    title: 'Verificação de Saúde',
    subtitle: 'Organizacional',
    level: 'Nível',
    previous: '← Anterior',
    next: 'Próximo →',
    notesPlaceholder: 'Adicionar contexto (opcional)...',
    footer: 'Feito com 💚 para conservação',
    overall: 'Geral',
    completed: 'concluído',
    score: 'Pontuação',
    categoryComplete: '✓ Categoria completa!',
    completeAll: 'Completar todas as perguntas',
    stages: stagesPt,
    categories: categoriesPt,
  },
  ru: {
    orgName: 'Сеть охраны дикой природы',
    title: 'Проверка здоровья',
    subtitle: 'организации',
    level: 'Уровень',
    previous: '← Назад',
    next: 'Далее →',
    notesPlaceholder: 'Добавить контекст (необязательно)...',
    footer: 'Создано с 💚 для природы',
    overall: 'Общий',
    completed: 'завершено',
    score: 'Оценка',
    categoryComplete: '✓ Категория завершена!',
    completeAll: 'Завершить все вопросы',
    stages: stagesEn, // Fallback to English
    categories: categoriesEn, // Fallback to English
  },
  ms: {
    orgName: 'Rangkaian Pemuliharaan Hidupan Liar',
    title: 'Pemeriksaan Kesihatan',
    subtitle: 'Organisasi',
    level: 'Tahap',
    previous: '← Sebelum',
    next: 'Seterusnya →',
    notesPlaceholder: 'Tambah konteks (pilihan)...',
    footer: 'Dibina dengan 💚 untuk pemuliharaan',
    overall: 'Keseluruhan',
    completed: 'selesai',
    score: 'Skor',
    categoryComplete: '✓ Kategori selesai!',
    completeAll: 'Lengkapkan semua soalan',
    stages: stagesEn,
    categories: categoriesEn,
  },
  id: {
    orgName: 'Jaringan Konservasi Satwa Liar',
    title: 'Pemeriksaan Kesehatan',
    subtitle: 'Organisasi',
    level: 'Level',
    previous: '← Sebelumnya',
    next: 'Selanjutnya →',
    notesPlaceholder: 'Tambahkan konteks (opsional)...',
    footer: 'Dibuat dengan 💚 untuk konservasi',
    overall: 'Keseluruhan',
    completed: 'selesai',
    score: 'Skor',
    categoryComplete: '✓ Kategori selesai!',
    completeAll: 'Selesaikan semua pertanyaan',
    stages: stagesEn,
    categories: categoriesEn,
  },
  sw: {
    orgName: 'Mtandao wa Uhifadhi wa Wanyamapori',
    title: 'Ukaguzi wa Afya',
    subtitle: 'ya Shirika',
    level: 'Ngazi',
    previous: '← Iliyotangulia',
    next: 'Ifuatayo →',
    notesPlaceholder: 'Ongeza muktadha (si lazima)...',
    footer: 'Imejengwa kwa 💚 kwa uhifadhi',
    overall: 'Jumla',
    completed: 'imekamilika',
    score: 'Alama',
    categoryComplete: '✓ Kategoria imekamilika!',
    completeAll: 'Kamilisha maswali yote',
    stages: stagesSw,
    categories: categoriesSw,
  },
  ne: {
    orgName: 'वन्यजीव संरक्षण नेटवर्क',
    title: 'संगठनात्मक',
    subtitle: 'स्वास्थ्य जाँच',
    level: 'स्तर',
    previous: '← अघिल्लो',
    next: 'अर्को →',
    notesPlaceholder: 'सन्दर्भ थप्नुहोस् (वैकल्पिक)...',
    footer: 'संरक्षणको लागि 💚 ले बनाइएको',
    overall: 'समग्र',
    completed: 'पूरा भयो',
    score: 'स्कोर',
    categoryComplete: '✓ श्रेणी पूरा भयो!',
    completeAll: 'सबै प्रश्नहरू पूरा गर्नुहोस्',
    stages: stagesEn,
    categories: categoriesEn,
  },
  rw: {
    orgName: 'Urusobe rw\'Kubungabunga Inyamaswa',
    title: 'Isuzuma ry\'Ubuzima',
    subtitle: 'bw\'Umuryango',
    level: 'Urwego',
    previous: '← Ibibanza',
    next: 'Ibikurikira →',
    notesPlaceholder: 'Ongeraho ibitekerezo (si ngombwa)...',
    footer: 'Byubatswe na 💚 ku bw\'ibidukikije',
    overall: 'Byose hamwe',
    completed: 'byarangiye',
    score: 'Amanota',
    categoryComplete: '✓ Icyiciro cyarangiye!',
    completeAll: 'Uzuza ibibazo byose',
    stages: stagesEn,
    categories: categoriesEn,
  },
  lg: {
    orgName: 'Enkuŋŋaana y\'Okukuuma Ebisolo',
    title: 'Okukebera Obulamu',
    subtitle: 'bw\'Ekitongole',
    level: 'Eddaala',
    previous: '← Ebyayita',
    next: 'Ekiddako →',
    notesPlaceholder: 'Yongera ebigambo (si kyetaagisa)...',
    footer: 'Kyazimbibwa ne 💚 ku bikwasizo',
    overall: 'Byonna',
    completed: 'biwedde',
    score: 'Obubonero',
    categoryComplete: '✓ Ekitundu kiwedde!',
    completeAll: 'Maliriza ebibuuzo byonna',
    stages: stagesEn,
    categories: categoriesEn,
  },
  om: {
    orgName: 'Neetworkii Eegumsa Bineensota Bosonaa',
    title: 'Sakatta\'a Fayyaa',
    subtitle: 'Dhaabbataa',
    level: 'Sadarkaa',
    previous: '← Duraa',
    next: 'Itti aanuu →',
    notesPlaceholder: 'Haala dabalaa (dirqama miti)...',
    footer: '💚 dhaan kunuunsaaf ijaarame',
    overall: 'Waliigala',
    completed: 'xumurame',
    score: 'Qabxii',
    categoryComplete: '✓ Ramaddiin xumurame!',
    completeAll: 'Gaaffiiwwan hunda xumuri',
    stages: stagesEn,
    categories: categoriesEn,
  },
  sn: {
    orgName: 'Network yekuChengeta Mhuka',
    title: 'Kuongororwa kweHutano',
    subtitle: 'hweSangano',
    level: 'Danho',
    previous: '← Yapfuura',
    next: 'Inotevera →',
    notesPlaceholder: 'Wedzera mashoko (zvakasununguka)...',
    footer: 'Yakavakwa ne 💚 yekuchengetedza',
    overall: 'Zvose',
    completed: 'zvapera',
    score: 'Mapoints',
    categoryComplete: '✓ Chikamu chapera!',
    completeAll: 'Pedzisa mibvunzo yose',
    stages: stagesEn,
    categories: categoriesEn,
  },
  tn: {
    orgName: 'Lekgotla la Pabalelo ya Diphologolo',
    title: 'Tlhatlhobo ya Boitekanelo',
    subtitle: 'jwa Mokgatlho',
    level: 'Legato',
    previous: '← E e fetileng',
    next: 'E e latelang →',
    notesPlaceholder: 'Tsenya tshedimosetso (go sa patelediwe)...',
    footer: 'E agilwe ka 💚 ya pabalelo',
    overall: 'Kakaretso',
    completed: 'e fedile',
    score: 'Maduo',
    categoryComplete: '✓ Karolo e fedile!',
    completeAll: 'Feleletsa dipotso tsotlhe',
    stages: stagesEn,
    categories: categoriesEn,
  },
  bem: {
    orgName: 'Inkambi ya Kucingilila Inama',
    title: 'Ukupima Ubumi',
    subtitle: 'bwa Cibumba',
    level: 'Ubwingi',
    previous: '← Iyapitapo',
    next: 'Iyalondapo →',
    notesPlaceholder: 'Ongeleni ifyo (tashitala)...',
    footer: 'Cabumbilwe na 💚 pa kucingilila',
    overall: 'Fyonse',
    completed: 'fyapwa',
    score: 'Amaksa',
    categoryComplete: '✓ Icipande capwa!',
    completeAll: 'Pwisheni ifyakwipusha fyonse',
    stages: stagesEn,
    categories: categoriesEn,
  },
  uz: {
    orgName: 'Yovvoyi tabiatni muhofaza qilish tarmog\'i',
    title: 'Tashkiliy',
    subtitle: 'Salomatlik tekshiruvi',
    level: 'Daraja',
    previous: '← Oldingi',
    next: 'Keyingi →',
    notesPlaceholder: 'Kontekst qo\'shing (ixtiyoriy)...',
    footer: 'Tabiatni saqlash uchun 💚 bilan qurilgan',
    overall: 'Umumiy',
    completed: 'tugallandi',
    score: 'Ball',
    categoryComplete: '✓ Kategoriya tugallandi!',
    completeAll: 'Barcha savollarni tugallang',
    stages: stagesEn,
    categories: categoriesEn,
  },
}
