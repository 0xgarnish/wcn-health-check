import { useState } from 'react'
import { GrowingTree } from './GrowingTree'
import { translations, languages, type Language } from './i18n'

const categoryData = {
  name: 'Strategic Planning & Execution',
  icon: '📋',
  questions: [
    {
      id: 1,
      title: 'Strategic Plan',
      desc: 'Long-term planning and goal setting',
      plantIcon: '🌳',
      stages: [
        { name: 'Planting', title: 'Seeds of Potential', description: ['No long-range goals', 'Reactive to funding', 'Staff wait for direction'] },
        { name: 'Seedling', title: 'Taking Root', description: ['Vague goals exist', 'Plans are activity lists', 'Limited coordination'] },
        { name: 'Growing', title: 'Branching Out', description: ['Clear strategy forming', 'Management articulates goals', 'Individual plans exist'] },
        { name: 'Harvesting', title: 'Full Bloom', description: ['2-3 year roadmap', 'Mission-aligned goals', 'Team-wide clarity'] },
      ],
    },
    {
      id: 2,
      title: 'Implementation',
      desc: 'Turning plans into action',
      plantIcon: '🌿',
      stages: [
        { name: 'Planting', title: 'Getting Started', description: ['No implementation process', 'Ad-hoc execution', 'No accountability'] },
        { name: 'Seedling', title: 'Building Habits', description: ['Basic processes exist', 'Some follow-through', 'Inconsistent results'] },
        { name: 'Growing', title: 'Gaining Momentum', description: ['Regular check-ins', 'Measurable progress', 'Adjustments made'] },
        { name: 'Harvesting', title: 'Excellence', description: ['Systematic execution', 'Strong accountability', 'Continuous improvement'] },
      ],
    },
    {
      id: 3,
      title: 'Monitoring & Evaluation',
      desc: 'Tracking progress and measuring impact',
      plantIcon: '🌴',
      stages: [
        { name: 'Planting', title: 'No Visibility', description: ['No tracking systems', 'Anecdotal evidence only', 'No data collection'] },
        { name: 'Seedling', title: 'Basic Tracking', description: ['Some metrics exist', 'Irregular reporting', 'Limited analysis'] },
        { name: 'Growing', title: 'Data-Informed', description: ['Regular monitoring', 'Key indicators tracked', 'Reports shared'] },
        { name: 'Harvesting', title: 'Impact-Driven', description: ['Comprehensive M&E', 'Real-time dashboards', 'Evidence-based decisions'] },
      ],
    },
    {
      id: 4,
      title: 'Adaptive Management',
      desc: 'Learning and adjusting strategies',
      plantIcon: '🎋',
      stages: [
        { name: 'Planting', title: 'Rigid', description: ['No flexibility', 'Stick to original plan', 'Change is resisted'] },
        { name: 'Seedling', title: 'Reactive', description: ['Change when forced', 'Slow to adapt', 'Limited learning'] },
        { name: 'Growing', title: 'Responsive', description: ['Regular reviews', 'Willing to pivot', 'Learning culture'] },
        { name: 'Harvesting', title: 'Agile', description: ['Continuous adaptation', 'Proactive changes', 'Innovation embraced'] },
      ],
    },
  ],
}

const stageStyles = [
  { gradient: 'from-amber-700 via-amber-800 to-stone-700', bgGradient: 'bg-gradient-to-br from-amber-950/30 to-stone-950/40' },
  { gradient: 'from-lime-600 via-green-600 to-emerald-700', bgGradient: 'bg-gradient-to-br from-lime-950/30 to-green-950/40' },
  { gradient: 'from-emerald-500 via-green-500 to-teal-600', bgGradient: 'bg-gradient-to-br from-emerald-950/30 to-teal-950/40' },
  { gradient: 'from-green-500 via-emerald-400 to-teal-400', bgGradient: 'bg-gradient-to-br from-green-950/30 to-emerald-950/40' },
]

function App() {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [notes, setNotes] = useState<Record<number, string>>({})
  const [lang, setLang] = useState<Language>('en')
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)

  const t = translations[lang]
  const totalQuestions = categoryData.questions.length
  const answeredCount = Object.keys(answers).length
  const progress = (answeredCount / totalQuestions) * 100
  const overallScore = Object.values(answers).reduce((a, b) => a + b, 0)
  const maxScore = totalQuestions * 4
  const scorePercent = Math.round((overallScore / maxScore) * 100)
  const allAnswered = answeredCount === totalQuestions

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
        {/* Language Dropdown - Fixed */}
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
        <div className="max-w-5xl mx-auto mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-2">
            <span>{categoryData.icon}</span>
            {categoryData.name}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            {t.title} <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">{t.subtitle}</span>
          </h1>
          
          {/* Progress */}
          <div className="max-w-md mx-auto mt-4">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-500">{answeredCount} of {totalQuestions} answered</span>
              <span className="text-emerald-400">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-800/80 overflow-hidden border border-slate-700/50">
              <div className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>

        {/* All Questions */}
        <div className="max-w-5xl mx-auto space-y-6">
          {categoryData.questions.map((question, qIdx) => {
            const currentAnswer = answers[question.id] || 0
            return (
              <div key={question.id} className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-4 md:p-6 border border-slate-700/50 shadow-xl">
                {/* Question Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-lg shadow-lg">
                    {question.plantIcon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-white">{qIdx + 1}. {question.title}</h2>
                    <p className="text-slate-400 text-sm">{question.desc}</p>
                  </div>
                  {currentAnswer > 0 && (
                    <div className="text-emerald-400 text-sm font-medium">✓ Level {currentAnswer}</div>
                  )}
                </div>

                {/* Stage Cards + Tree */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {question.stages.map((stage, idx) => {
                    const level = idx + 1
                    const style = stageStyles[idx]
                    const isSelected = currentAnswer === level
                    return (
                      <div
                        key={level}
                        onClick={() => handleSelect(question.id, level)}
                        className={`relative group cursor-pointer rounded-xl p-3 transition-all duration-300 ${style.bgGradient} border-2 ${isSelected ? 'border-yellow-400 shadow-lg shadow-yellow-500/20 scale-[1.02]' : 'border-slate-700/50 hover:border-slate-600'}`}
                      >
                        <div className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${isSelected ? 'bg-yellow-400 text-slate-900' : 'bg-slate-800/80 text-slate-400'}`}>
                          {level}
                        </div>
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${style.gradient} flex items-center justify-center text-xl mb-2 shadow-md`}>
                          {['🌱', '🌿', '🌳', '🍎'][idx]}
                        </div>
                        <h3 className="text-sm font-bold text-white">{stage.name}</h3>
                        <p className="text-slate-400 text-xs mb-1">{stage.title}</p>
                        <ul className="space-y-0.5">
                          {stage.description.map((item, i) => (
                            <li key={i} className="text-slate-300 text-[10px] leading-tight">• {item}</li>
                          ))}
                        </ul>
                        {isSelected && (
                          <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center">
                            <svg className="w-3 h-3 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    )
                  })}
                  
                  {/* Tree */}
                  <div className="rounded-xl p-3 bg-slate-800/40 border border-slate-700/30 flex flex-col items-center justify-center">
                    <GrowingTree value={currentAnswer * 3} maxValue={12} />
                    <p className="text-xs text-slate-500 mt-1">{question.plantIcon} Growth</p>
                  </div>
                </div>

                {/* Notes */}
                {currentAnswer > 0 && (
                  <div className="mt-3">
                    <textarea
                      value={notes[question.id] || ''}
                      onChange={(e) => setNotes({ ...notes, [question.id]: e.target.value })}
                      placeholder={`Why Level ${currentAnswer}? Add context... (optional)`}
                      rows={2}
                      className="w-full px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none text-sm"
                    />
                  </div>
                )}
              </div>
            )
          })}

          {/* Summary Section */}
          <div className={`bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 shadow-xl transition-all duration-500 ${allAnswered ? 'opacity-100' : 'opacity-50'}`}>
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-white mb-1">🏡 Your Strategic Planning Orchard</h2>
              <p className="text-slate-400 text-sm">{allAnswered ? 'Your complete garden assessment' : 'Complete all questions to see your full orchard'}</p>
            </div>
            
            {/* Orchard */}
            <div className="bg-gradient-to-b from-slate-800/40 to-emerald-950/20 rounded-xl p-4 mb-4 border border-slate-700/30">
              <div className="grid grid-cols-4 gap-3">
                {categoryData.questions.map((q) => (
                  <div key={q.id} className="text-center">
                    <div className="bg-slate-900/50 rounded-lg p-2">
                      <GrowingTree value={(answers[q.id] || 0) * 3} maxValue={12} />
                    </div>
                    <span className="text-sm">{q.plantIcon}</span>
                    <p className="text-[10px] text-slate-400">{q.title}</p>
                    <p className="text-emerald-400 text-xs font-medium">Lvl {answers[q.id] || '-'}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Score */}
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">{allAnswered ? `${scorePercent}%` : '--'}</div>
              <div className="text-slate-400 text-sm mb-3">Category Score</div>
              <div className="h-3 rounded-full bg-slate-700 overflow-hidden max-w-xs mx-auto">
                <div 
                  className="h-full rounded-full transition-all duration-700 bg-gradient-to-r from-amber-500 via-emerald-500 to-teal-500"
                  style={{ width: allAnswered ? `${scorePercent}%` : '0%' }}
                ></div>
              </div>
            </div>
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
