// components/SkillsSidebar.tsx
import { Badge } from "@/components/ui/badge";
import { USER_DATA } from "@/constants/data";

export function SkillsSidebar() {
  return (
    <aside id="stack" className="lg:sticky lg:top-24 space-y-4">
      <div className="border border-slate-200 dark:border-zinc-700 rounded-2xl p-7 bg-white dark:bg-slate-900/50 shadow-sm space-y-8">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Stack Técnica</h3>
          <p className="text-xs text-muted-foreground">Ferramentas que uso</p>
        </div>
        
        <div className="space-y-6">
          <SkillGroup title="Stack Principal" items={USER_DATA.stack.corestack} color="bg-green-500" />
          <SkillGroup title="Ferramentas" items={USER_DATA.stack.tools} color="bg-green-500" />
          <SkillGroup title="Aprendendo" items={USER_DATA.stack.learning} color="bg-blue-500" animate />
        </div>

        <div id="contact" className="pt-6 border-t border-slate-200 dark:border-zinc-700 space-y-3">
          <h4 className="font-bold text-slate-900 dark:text-white">Conecte-se</h4>
          <div className="flex flex-col gap-2.5 text-sm">
            <a href={USER_DATA.links.github} target="_blank" className="font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors">→ GitHub</a>
            <a href={USER_DATA.links.linkedin} target="_blank" className="font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors">→ LinkedIn</a>
          </div>
        </div>
      </div>
    </aside>
  );
}

function SkillGroup({ title, items, color, animate }: { title: string, items: string[], color: string, animate?: boolean }) {
  return (
    <div>
      <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${color} ${animate ? 'animate-pulse' : ''}`}></span>
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <Badge key={item} variant={animate ? "outline" : "default"} className="text-xs bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-slate-100">
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}