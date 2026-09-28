import type { LabLevel, LabModule } from '@/types/lab';

const LEVEL_LABELS: Record<LabLevel, string> = {
  basic: 'Basic',
  extra: 'Extra',
  advanced: 'Advanced',
};

interface LabModuleSectionProps {
  module: LabModule;
}

export function LabModuleSection({ module }: LabModuleSectionProps) {
  return (
    <section>
      <h2>
        Module {module.id}: {module.title}
      </h2>
      <ul>
        {module.labs.map((lab) => (
          <li key={lab.url}>
            <a href={lab.url} target="_blank" rel="noopener noreferrer">
              {lab.title}
            </a>
            {lab.level && <span> · {LEVEL_LABELS[lab.level]}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}
