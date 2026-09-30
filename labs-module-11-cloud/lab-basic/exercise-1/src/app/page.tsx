import type { ReactElement } from 'react';
import { LAB_MODULES } from '@/data/labs';
import { LabModuleSection } from '@/components/LabModuleSection';

const REPOSITORY_URL: string = 'https://github.com/jjpeleato/lemoncode-labs';

export default function Home(): ReactElement {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <header className="mb-16 sm:mb-20">
        <h1 className="font-display text-5xl leading-none font-extrabold tracking-tight sm:text-7xl">
          LemonCode Labs
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-stem">
          Every lab from the LemonCode Front-End Master, module by module.
        </p>
      </header>

      <div className="space-y-14">
        {LAB_MODULES.map((labModule) => (
          <LabModuleSection key={labModule.id} labModule={labModule} />
        ))}
      </div>

      <footer className="mt-24 border-t border-rind pt-6 text-sm text-stem">
        <a
          href={REPOSITORY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          Source code on GitHub
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </footer>
    </main>
  );
}
