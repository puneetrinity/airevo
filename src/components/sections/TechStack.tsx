import {
  Braces,
  Atom,
  FileCode2,
  Zap,
  Database,
  Grid3X3,
  Workflow,
  Route,
  SquareStack,
  Ship,
  CloudCog,
  Train,
} from 'lucide-react';
import { Icon } from '@/components/icons/Icon';

const stack = [
  { name: 'Python', icon: Braces },
  { name: 'React', icon: Atom },
  { name: 'TypeScript', icon: FileCode2 },
  { name: 'FastAPI', icon: Zap },
  { name: 'PostgreSQL', icon: Database },
  { name: 'pgvector', icon: Grid3X3 },
  { name: 'Transformers', icon: Workflow },
  { name: 'LangGraph', icon: Route },
  { name: 'Redis', icon: SquareStack },
  { name: 'Docker', icon: Ship },
  { name: 'RunPod', icon: CloudCog },
  { name: 'Railway', icon: Train },
];

export function TechStack() {
  return (
    <section className="bg-white py-10">
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
              <div className="mb-2 flex justify-center">
                <Icon icon={item.icon} size={26} className="text-slate-800" />
              </div>
              <div className="font-bold text-slate-900">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
