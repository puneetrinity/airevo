import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Network, Brain, Search, Radar, Bot, GraduationCap, Building2, FileVideo } from 'lucide-react';
import { Icon } from '@/components/icons/Icon';

type Project = {
  title: string;
  category: string;
  description: string;
  badges: string[];
  icon: LucideIcon;
  tagColor: string;
  link?: { href: string; label: string; external?: boolean };
};

const projects: Project[] = [
  {
    title: 'ActiveGraph KG',
    category: 'Knowledge Graph',
    description: 'Open source knowledge graph engine with semantic drift detection and multi-tenant RLS — powers EvalMatch and VantaHire.',
    badges: ['FastAPI', 'PostgreSQL', 'pgvector'],
    icon: Network,
    tagColor: 'bg-blue-100 text-blue-700',
    link: { href: 'https://puneetrinity.github.io/active-graph-kg/', label: 'View Docs →', external: true },
  },
  {
    title: 'Career Guidance LLM',
    category: 'LLM Fine-Tuning',
    description: 'Fine-tuned Qwen 2.5 7B for personalized career guidance with vLLM and RunPod serverless.',
    badges: ['Transformers', 'Unsloth', 'RunPod'],
    icon: Brain,
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    title: 'Unified AI Search System',
    category: 'AI Search',
    description: 'LangGraph-powered local-first search with Ollama integration and hybrid metadata stores.',
    badges: ['LangGraph', 'Redis', 'ClickHouse'],
    icon: Search,
    tagColor: 'bg-pink-100 text-pink-700',
    link: { href: 'mailto:hello@airevolabs.com?subject=Demo Request - Unified AI Search System', label: 'Connect for Demo →' },
  },
  {
    title: 'Ideal Octo Goggles',
    category: 'Vector Search',
    description: 'Hybrid search with sub-second response using HNSW and PQ indexing algorithms.',
    badges: ['FastAPI', 'Docker', 'HNSW'],
    icon: Radar,
    tagColor: 'bg-violet-100 text-violet-700',
    link: { href: 'mailto:hello@airevolabs.com?subject=Demo Request - Ideal Octo Goggles', label: 'Connect for Demo →' },
  },
  {
    title: 'EvalMatch',
    category: 'Recruitment AI',
    description: 'AI recruitment platform with job matching, resume parsing, and bias detection.',
    badges: ['React', 'FastAPI', 'OpenAI/Groq'],
    icon: Bot,
    tagColor: 'bg-orange-100 text-orange-700',
    link: { href: 'https://evalmatch.app', label: 'View Live →', external: true },
  },
  {
    title: 'ESCO Skill Extraction',
    category: 'Skills Ontology',
    description: 'Extracts and maps resumes to ESCO skills and competences taxonomy.',
    badges: ['Python', 'NLP', 'FastAPI'],
    icon: GraduationCap,
    tagColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    title: 'VantaHire',
    category: 'Enterprise',
    description: 'Enterprise recruitment platform with job lifecycle management and ATS integration.',
    badges: ['Node.js', 'TypeScript', 'Railway'],
    icon: Building2,
    tagColor: 'bg-purple-100 text-purple-700',
    link: { href: 'https://vantahire.com/recruiter-auth', label: 'View Live →', external: true },
  },
  {
    title: 'LMS Video Generation',
    category: 'Document AI',
    description: 'Converts SOP PDFs to a 1-page summary plus 60-second training video with 100% section coverage.',
    badges: ['Claude 3.5', 'PyMuPDF', 'FFmpeg'],
    icon: FileVideo,
    tagColor: 'bg-red-100 text-red-700',
  },
];

export function Work() {
  return (
    <section id="work" className="relative z-10 bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-black text-slate-900">What We Can Build For You</h2>
          <p className="text-xl text-slate-600">Battle-tested AI solutions from knowledge graphs to LLM fine-tuning</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue/70 hover:shadow-xl"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="inline-flex rounded-xl bg-slate-100 p-3 text-2xl">
                  <Icon icon={project.icon} size={24} className="text-slate-800" />
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${project.tagColor}`}>{project.category}</span>
              </div>
              <h3 className="mb-2 text-xl font-black text-slate-900">{project.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">{project.description}</p>
              <div className="mb-3 flex flex-wrap gap-2">
                {project.badges.map((badge) => (
                  <span key={badge} className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                    {badge}
                  </span>
                ))}
              </div>
              {project.link && (
                <Link
                  href={project.link.href}
                  target={project.link.external ? '_blank' : undefined}
                  rel={project.link.external ? 'noopener noreferrer' : undefined}
                  className="text-sm font-bold text-brand-blue transition-colors hover:text-blue-700"
                >
                  {project.link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
