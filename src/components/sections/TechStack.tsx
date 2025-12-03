const stack = [
  { name: 'Python', emoji: '🐍' },
  { name: 'React', emoji: '⚛️' },
  { name: 'TypeScript', emoji: '🔷' },
  { name: 'FastAPI', emoji: '⚡' },
  { name: 'PostgreSQL', emoji: '🐘' },
  { name: 'pgvector', emoji: '🔍' },
  { name: 'Transformers', emoji: '🤗' },
  { name: 'LangGraph', emoji: '🦙' },
  { name: 'Redis', emoji: '📊' },
  { name: 'Docker', emoji: '🐳' },
  { name: 'RunPod', emoji: '☁️' },
  { name: 'Railway', emoji: '🚂' },
];

export function TechStack() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-black text-slate-900">Our Tech Stack</h2>
          <p className="text-lg text-slate-600">Production-tested tools and frameworks we use</p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          {stack.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border-2 border-slate-200 bg-slate-50 p-4 text-center transition-colors hover:border-brand-blue hover:bg-blue-50"
            >
              <div className="mb-2 text-3xl">{item.emoji}</div>
              <div className="font-bold text-slate-900">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
