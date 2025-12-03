const capabilities = [
  { title: 'LLM Fine-Tuning', description: 'Custom fine-tuning with rapid deployment', emoji: '🧠', border: 'border-green-500', gradient: 'from-green-500 to-green-600' },
  { title: 'Knowledge Graphs', description: 'Self-refreshing with drift detection', emoji: '🕸️', border: 'border-blue-500', gradient: 'from-blue-500 to-blue-600' },
  { title: 'AI Search', description: 'Hybrid vector + keyword search', emoji: '🔍', border: 'border-pink-500', gradient: 'from-pink-500 to-pink-600' },
  { title: 'Recruitment AI', description: 'Bias-aware matching & automation', emoji: '🤖', border: 'border-violet-500', gradient: 'from-violet-500 to-violet-600' },
  { title: 'Data Pipelines', description: 'Scalable ETL with monitoring', emoji: '💾', border: 'border-orange-500', gradient: 'from-orange-500 to-orange-600' },
  { title: 'MLOps', description: 'Deployment with optimization', emoji: '☁️', border: 'border-purple-500', gradient: 'from-purple-500 to-purple-600' },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="relative z-10 bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-black text-slate-900">Our Technology Stack</h2>
          <p className="text-xl text-slate-600">The AI capabilities powering our products</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className={`relative z-10 rounded-2xl border-4 ${capability.border} bg-white p-6 shadow-card transition-transform hover:-translate-y-1`}
            >
              <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${capability.gradient} p-4`}>
                <span className="text-3xl text-white">{capability.emoji}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">{capability.title}</h3>
              <p className="text-slate-600">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
