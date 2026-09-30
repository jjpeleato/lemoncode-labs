import type { ReactElement } from 'react';
import type { Lab, LabLevel, LabModule } from '@/types/lab';

const LEVEL_LABELS: Record<LabLevel, string> = {
  basic: 'Basic',
  extra: 'Extra',
  advanced: 'Advanced',
};

interface LabEntryProps {
  lab: Lab;
}

interface LabListProps {
  labs: Lab[];
}

interface LabModuleSectionProps {
  labModule: LabModule;
}

function LabEntry({ lab }: LabEntryProps): ReactElement {
  return (
    <a
      href={lab.url}
      target="_blank"
      rel="noopener noreferrer"
      className="-mx-2 flex items-baseline gap-3 rounded-sm px-2 py-1.5 transition-colors hover:bg-lemon focus-visible:bg-lemon focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
    >
      <span className="text-lg">{lab.title}</span>
      {lab.level && (
        <>
          <span aria-hidden="true" className="min-w-8 flex-1 -translate-y-1 border-b-2 border-dotted border-rind" />
          <span className="shrink-0 text-sm text-stem">{LEVEL_LABELS[lab.level]}</span>
        </>
      )}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

function LabList({ labs }: LabListProps): ReactElement {
  if (labs.length === 0) {
    return <p className="text-stem italic">No labs yet.</p>;
  }

  return (
    <ul>
      {labs.map((lab) => (
        <li key={lab.url}>
          <LabEntry lab={lab} />
        </li>
      ))}
    </ul>
  );
}

export function LabModuleSection({ labModule }: LabModuleSectionProps): ReactElement {
  const headingId: string = `module-${labModule.id}`;

  return (
    <section aria-labelledby={headingId} className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-[5rem_1fr]">
      <p
        aria-hidden="true"
        className="font-display text-5xl leading-none font-extrabold tabular-nums sm:text-right sm:text-6xl"
      >
        {labModule.id}
      </p>

      <div>
        <h2 id={headingId} className="mb-3 text-2xl font-semibold">
          <span className="sr-only">Module {labModule.id}: </span>
          {labModule.title}
        </h2>
        <LabList labs={labModule.labs} />
      </div>
    </section>
  );
}
