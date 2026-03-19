import { useState } from 'react'
import { GrowingTree } from './GrowingTree'
import { translations, languages, type Language } from './i18n'

const categories = [
  {
    id: 1,
    name: 'Strategic Planning & Execution',
    icon: '📋',
    questions: [
      { id: 101, title: 'Strategic Plan', desc: 'Long-term planning and goal setting', plantIcon: '🌳' },
      { id: 102, title: 'Implementation', desc: 'Turning plans into action', plantIcon: '🌿' },
      { id: 103, title: 'Monitoring & Evaluation', desc: 'Tracking progress and impact', plantIcon: '🌴' },
      { id: 104, title: 'Adaptive Management', desc: 'Learning and adjusting', plantIcon: '🎋' },
    ],
  },
  {
    id: 2,
    name: 'Registration & Governance',
    icon: '⚖️',
    questions: [
      { id: 201, title: 'Legal Registration', desc: 'Formal organizational status', plantIcon: '🌲' },
      { id: 202, title: 'Board Governance', desc: 'Leadership and oversight', plantIcon: '🌵' },
      { id: 203, title: 'Policies & Procedures', desc: 'Documented guidelines', plantIcon: '🎄' },
      { id: 204, title: 'Compliance', desc: 'Meeting legal requirements', plantIcon: '🌾' },
    ],
  },
  {
    id: 3,
    name: 'Financial Management',
    icon: '💰',
    questions: [
      { id: 301, title: 'Budgeting', desc: 'Financial planning and allocation', plantIcon: '🌻' },
      { id: 302, title: 'Accounting Systems', desc: 'Financial record keeping', plantIcon: '🌼' },
      { id: 303, title: 'Financial Controls', desc: 'Safeguards and oversight', plantIcon: '🌸' },
      { id: 304, title: 'Financial Reporting', desc: 'Transparency and accountability', plantIcon: '💐' },
    ],
  },
  {
    id: 4,
    name: 'Human Resources',
    icon: '👥',
    questions: [
      { id: 401, title: 'Staffing Structure', desc: 'Team organization and roles', plantIcon: '🌺' },
      { id: 402, title: 'Recruitment & Retention', desc: 'Hiring and keeping talent', plantIcon: '🌹' },
      { id: 403, title: 'Performance Management', desc: 'Evaluation and development', plantIcon: '🌷' },
      { id: 404, title: 'Staff Well-being', desc: 'Support and work environment', plantIcon: '🪻' },
    ],
  },
  {
    id: 5,
    name: 'Program Management',
    icon: '🎯',
    questions: [
      { id: 501, title: 'Program Design', desc: 'Planning conservation activities', plantIcon: '🪴' },
      { id: 502, title: 'Project Implementation', desc: 'Executing field work', plantIcon: '🎍' },
      { id: 503, title: 'Community Engagement', desc: 'Local partnerships', plantIcon: '🎑' },
      { id: 504, title: 'Impact Assessment', desc: 'Measuring conservation outcomes', plantIcon: '🌱' },
    ],
  },
  {
    id: 6,
    name: 'Communications & Marketing',
    icon: '📢',
    questions: [
      { id: 601, title: 'Brand & Messaging', desc: 'Organizational identity', plantIcon: '🌿' },
      { id: 602, title: 'Digital Presence', desc: 'Website and social media', plantIcon: '🍀' },
      { id: 603, title: 'Stakeholder Communications', desc: 'Donor and partner updates', plantIcon: '☘️' },
      { id: 604, title: 'Media Relations', desc: 'Press and public awareness', plantIcon: '🌲' },
    ],
  },
  {
    id: 7,
    name: 'Fundraising & Development',
    icon: '🤝',
    questions: [
      { id: 701, title: 'Fundraising Strategy', desc: 'Revenue planning', plantIcon: '🌳' },
      { id: 702, title: 'Donor Relations', desc: 'Cultivation and stewardship', plantIcon: '🌴' },
      { id: 703, title: 'Grant Management', desc: 'Institutional funding', plantIcon: '🎋' },
      { id: 704, title: 'Revenue Diversification', desc: 'Multiple funding sources', plantIcon: '🌵' },
    ],
  },
  {
    id: 8,
    name: 'Partnerships & Networks',
    icon: '🌐',
    questions: [
      { id: 801, title: 'Partner Identification', desc: 'Finding collaborators', plantIcon: '🌾' },
      { id: 802, title: 'Partnership Management', desc: 'Maintaining relationships', plantIcon: '🌻' },
      { id: 803, title: 'Network Participation', desc: 'Coalition involvement', plantIcon: '🌼' },
      { id: 804, title: 'Knowledge Sharing', desc: 'Learning exchange', plantIcon: '🌸' },
    ],
  },
]

const stageTemplates = [
  { name: 'Planting', title: 'Seeds of Potential', descriptions: ['No formal processes', 'Ad-hoc approach', 'Limited awareness'] },
  { name: 'Seedling', title: 'Taking Root', descriptions: ['Basic systems exist', 'Some structure', 'Growing awareness'] },
  { name: 'Growing', title: 'Branching Out', descriptions: ['Clear processes', 'Regular practice', 'Good foundation'] },
  { name: 'Harvesting', title: 'Full Bloom', descriptions: ['Excellence achieved', 'Best practices', 'Continuous improvement'] },
]

const stageStyles = [
  { gradient: 'from-amber-700 via-amber-800 to-stone-700', bgGradient: 'bg-gradient-to-br from-amber-950/30 to-stone-950/40' },
  { gradient: 'from-lime-600 via-green-600 to-emerald-700', bgGradient: 'bg-gradient-to-br from-lime-950/30 to-green-950/40' },
  { gradient: 'from-emerald-500 via-green-500 to-teal-600', bgGradient: 'bg-gradient-to-br from-emerald-950/30 to-teal-950/40' },
  { gradient: 'from-green-500 via-emerald-400 to-teal-400', bgGradient: 'bg-gradient-to-br from-green-950/30 to-emerald-950/40' },
]

function App() {
  const [currentCategory, setCurrentCategory] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [notes, setNotes] = useState<Record<number, string>>({})
  const [lang, setLang] = useState<Language>('en')
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)

  const t = translations[lang]
  const category = categories[currentCategory]
  const totalQuestions = category.questions.length
  const answeredInCategory = category.questions.filter(q => answers[q.id]).length
  const categoryProgress = (answeredInCategory / totalQuestions) * 100
  const categoryScore = category.questions.reduce((sum, q) => sum + (answers[q.id] || 0), 0)
  const maxCategoryScore = totalQuestions * 4
  const categoryScorePercent = Math.round((categoryScore / maxCategoryScore) * 100)
  const allAnsweredInCategory = answeredInCategory === totalQuestions

  // Overall progress
  const totalAllQuestions = categories.reduce((sum, c) => sum + c.questions.length, 0)
  const totalAnswered = Object.keys(answers).length
  const overallProgress = Math.round((totalAnswered / totalAllQuestions) * 100)

  const handleSelect = (questionId: number, level: number) => {
    setAnswers({ ...answers, [questionId]: level })
  }

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      <div className="relative z-10 py-4 px-4 md:py-6">
        {/* Language Dropdown */}
        <div className="fixed top-4 right-4 z-30">
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/90 border border-slate-700/50 text-slate-300 text-sm font-medium hover:bg-slate-700/90 transition-colors backdrop-blur-sm shadow-lg"
            >
              <span>{languages.find(l => l.code === lang)?.flag}</span>
              <svg className={`w-4 h-4 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 max-h-64 overflow-y-auto rounded-xl bg-slate-800 border border-slate-700/50 shadow-xl">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => { setLang(language.code); setLangDropdownOpen(false) }}
                    className={`w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-slate-700/50 transition-colors ${lang === language.code ? 'bg-emerald-500/20 text-emerald-400' : 'text-slate-300'}`}
                  >
                    <span>{language.flag}</span>
                    <span>{language.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Header */}
        <div className="max-w-5xl mx-auto mb-4 text-center">
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
            {t.title} <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">{t.subtitle}</span>
          </h1>
          
          {/* Overall Progress */}
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-3">
            <span>Overall: {overallProgress}%</span>
            <div className="w-32 h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500" style={{ width: `${overallProgress}%` }}></div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-1.5">
            {categories.map((cat, idx) => {
              const catAnswered = cat.questions.filter(q => answers[q.id]).length
              const catComplete = catAnswered === cat.questions.length
              return (
                <button
                  key={cat.id}
                  onClick={() => setCurrentCategory(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    idx === currentCategory 
                      ? 'bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400' 
                      : catComplete
                        ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400/80'
                        : catAnswered > 0
                          ? 'bg-slate-800/80 border border-slate-600 text-slate-300'
                          : 'bg-slate-800/60 border border-slate-700/50 text-slate-400 hover:bg-slate-700/60'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span className="hidden md:inline">{cat.name}</span>
                  {catComplete && <span className="text-emerald-400">✓</span>}
                </button>
              )
            })}
          </div>
        </div>

        {/* Category Content */}
        <div className="max-w-5xl mx-auto">
          {/* Category Header */}
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-t-2xl p-4 border border-slate-700/50 border-b-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-xl shadow-lg">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{category.name}</h2>
                  <p className="text-slate-400 text-xs">{answeredInCategory}/{totalQuestions} completed</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{allAnsweredInCategory ? `${categoryScorePercent}%` : '--'}</div>
                <div className="text-xs text-slate-400">Category Score</div>
              </div>
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500" style={{ width: `${categoryProgress}%` }}></div>
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-0">
            {category.questions.map((question, qIdx) => {
              const currentAnswer = answers[question.id] || 0
              return (
                <div key={question.id} className={`bg-slate-900/60 backdrop-blur-xl p-4 border-x border-slate-700/50 ${qIdx === category.questions.length - 1 ? '' : 'border-b border-slate-700/30'}`}>
                  {/* Question Header */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{question.plantIcon}</span>
                    <div className="flex-1">
                      <span className="text-sm font-semibold text-white">{question.title}</span>
                      <span className="text-slate-500 text-xs ml-2">— {question.desc}</span>
                    </div>
                    {currentAnswer > 0 && (
                      <span className="text-emerald-400 text-xs font-medium px-2 py-0.5 bg-emerald-500/10 rounded-full">Level {currentAnswer}</span>
                    )}
                  </div>

                  {/* Stage Cards + Tree */}
                  <div className="grid grid-cols-5 gap-2">
                    {stageTemplates.map((stage, idx) => {
                      const level = idx + 1
                      const style = stageStyles[idx]
                      const isSelected = currentAnswer === level
                      return (
                        <div
                          key={level}
                          onClick={() => handleSelect(question.id, level)}
                          className={`relative cursor-pointer rounded-lg p-2 transition-all duration-200 ${style.bgGradient} border ${isSelected ? 'border-yellow-400 shadow-md shadow-yellow-500/20 scale-[1.03]' : 'border-slate-700/50 hover:border-slate-600'}`}
                        >
                          <div className="flex items-center gap-1 mb-1">
                            <span className="text-sm">{['🌱', '🌿', '🌳', '🍎'][idx]}</span>
                            <span className={`text-xs font-bold ${isSelected ? 'text-yellow-400' : 'text-white'}`}>{level}</span>
                          </div>
                          <p className="text-[10px] font-medium text-white leading-tight">{stage.name}</p>
                          <p className="text-[9px] text-slate-400 leading-tight">{stage.title}</p>
                          {isSelected && (
                            <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                        </div>
                      )
                    })}
                    
                    {/* Mini Tree */}
                    <div className="rounded-lg p-1 bg-slate-800/30 border border-slate-700/30 flex items-center justify-center">
                      <div className="scale-75 origin-center">
                        <GrowingTree value={currentAnswer * 3} maxValue={12} />
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  {currentAnswer > 0 && (
                    <textarea
                      value={notes[question.id] || ''}
                      onChange={(e) => setNotes({ ...notes, [question.id]: e.target.value })}
                      placeholder="Add context (optional)..."
                      rows={1}
                      className="w-full mt-2 px-3 py-1.5 rounded-lg bg-slate-800/40 border border-slate-700/30 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none text-xs"
                    />
                  )}
                </div>
              )
            })}
          </div>

          {/* Category Summary */}
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-b-2xl p-4 border border-slate-700/50 border-t-0">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-400">
                {allAnsweredInCategory ? (
                  <span className="text-emerald-400">✓ Category complete!</span>
                ) : (
                  <span>Complete all {totalQuestions} questions to see your orchard</span>
                )}
              </div>
              
              {/* Mini Orchard Preview */}
              <div className="flex gap-2">
                {category.questions.map((q) => (
                  <div key={q.id} className="text-center">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${answers[q.id] ? 'bg-emerald-500/20' : 'bg-slate-800/50'}`}>
                      {q.plantIcon}
                    </div>
                    <span className="text-[9px] text-slate-500">{answers[q.id] || '-'}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Category Navigation */}
          <div className="flex justify-between mt-4">
            <button 
              onClick={() => setCurrentCategory(Math.max(0, currentCategory - 1))}
              disabled={currentCategory === 0}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${currentCategory === 0 ? 'bg-slate-800/40 text-slate-600 cursor-not-allowed' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700/50'}`}
            >
              ← {currentCategory > 0 ? categories[currentCategory - 1].name : 'Previous'}
            </button>
            <button 
              onClick={() => setCurrentCategory(Math.min(categories.length - 1, currentCategory + 1))}
              disabled={currentCategory === categories.length - 1}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${currentCategory === categories.length - 1 ? 'bg-slate-800/40 text-slate-600 cursor-not-allowed' : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25 hover:scale-105'}`}
            >
              {currentCategory < categories.length - 1 ? categories[currentCategory + 1].name : 'Next'} →
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-5xl mx-auto mt-6 text-center">
          <p className="text-slate-600 text-sm">{t.footer}</p>
        </div>
      </div>
    </div>
  )
}

export default App
