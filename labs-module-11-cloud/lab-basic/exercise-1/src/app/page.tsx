import { LAB_MODULES } from '@/data/labs';
import { LabModuleSection } from '@/components/LabModuleSection';

export default function Home() {
  return (
    <main>
      <h1>LemonCode Labs</h1>
      {LAB_MODULES.map((labModule) => (
        <LabModuleSection key={labModule.id} module={labModule} />
      ))}
    </main>
  );
}
