import type { LabModule } from "@/types/lab";

const README_BASE_URL = "https://github.com/jjpeleato/lemoncode-labs/blob/main";

const readme = (path: string): string => `${README_BASE_URL}/${path}/README.md`;

export const LAB_MODULES: LabModule[] = [
  {
    id: 1,
    title: "Layout",
    labs: [
      {
        title: "Dynamic Color Palette",
        level: "basic",
        url: readme("labs-module-1-layout/lab-basic/exercise-1"),
      },
      {
        title: "Themes",
        level: "basic",
        url: readme("labs-module-1-layout/lab-basic/exercise-2"),
      },
      {
        title: "Responsive Layout",
        level: "basic",
        url: readme("labs-module-1-layout/lab-basic/exercise-3"),
      },
      {
        title: "Card with CSS Grid",
        level: "basic",
        url: readme("labs-module-1-layout/lab-basic/exercise-4"),
      },
      {
        title: "Lemoncoders Webapp",
        level: "extra",
        url: readme("labs-module-1-layout/lab-extra/exercise-1"),
      },
      {
        title: "Warner Live",
        level: "advanced",
        url: readme("labs-module-1-layout/lab-advanced/exercise-1"),
      },
    ],
  },
  {
    id: 3,
    title: "Language",
    labs: [
      {
        title: "Array operations",
        level: "basic",
        url: readme("labs-module-3-language/lab-basic/exercise-1"),
      },
      {
        title: "Concat",
        level: "basic",
        url: readme("labs-module-3-language/lab-basic/exercise-2"),
      },
      {
        title: "Clone & Merge",
        level: "basic",
        url: readme("labs-module-3-language/lab-basic/exercise-3"),
      },
      {
        title: "Read books",
        level: "basic",
        url: readme("labs-module-3-language/lab-basic/exercise-4"),
      },
      {
        title: "Slot machine",
        level: "basic",
        url: readme("labs-module-3-language/lab-basic/exercise-5"),
      },
    ],
  },
  {
    id: 4,
    title: "Bundling",
    labs: [
      {
        title: "Webpack laboratory",
        url: readme("labs-module-4-bundling/lab-webpack"),
      },
      {
        title: "Vite laboratory",
        url: readme("labs-module-4-bundling/lab-vite"),
      },
    ],
  },
  {
    id: 5,
    title: "React",
    labs: [
      {
        title: "GitHub Organization Member Explorer",
        level: "basic",
        url: readme("labs-module-5-react/lab-basic/exercise-1"),
      },
      {
        title: "Rick and Morty",
        level: "basic",
        url: readme("labs-module-5-react/lab-basic-rick-morty/exercise-1"),
      },
      {
        title: "Image bank",
        level: "extra",
        url: readme("labs-module-5-react/lab-extra-images/exercise-1"),
      },
      {
        title: "Orders",
        level: "extra",
        url: readme("labs-module-5-react/lab-extra-orders/exercise-1"),
      },
    ],
  },
  {
    id: 6,
    title: "Angular",
    labs: [
      {
        title: "Angular Lab",
        level: "basic",
        url: readme("labs-module-6-angular/lab-basic/exercise-1"),
      },
      {
        title: "Gallery Lab",
        level: "extra",
        url: readme("labs-module-6-angular/lab-extra-gallery/exercise-1"),
      },
      {
        title: "RxJs Lab",
        level: "extra",
        url: readme("labs-module-6-angular/lab-extra-rxjs/exercise-1"),
      },
    ],
  },
  {
    id: 7,
    title: "Vue",
    labs: [
      {
        title: "Meal Planner App",
        level: "basic",
        url: readme("labs-module-7-vue/lab-basic/exercise-1"),
      },
    ],
  },
  {
    id: 8,
    title: "Frameworks",
    labs: [
      {
        title: "Next.js - Rural Houses",
        level: "basic",
        url: readme("labs-module-8-frameworks/lab-basic/exercise-nextjs"),
      },
      {
        title: "TanStack Start - Rural Houses",
        level: "basic",
        url: readme("labs-module-8-frameworks/lab-basic/exercise-tanstack"),
      },
    ],
  },
  {
    id: 9,
    title: "Testing",
    labs: [
      {
        title: "Testing",
        level: "basic",
        url: readme("labs-module-9-testing/lab-basic/exercise-1"),
      },
    ],
  },
  {
    id: 10,
    title: "API Rest",
    labs: [
      {
        title: "Rick and Morty",
        level: "basic",
        url: readme("labs-module-10-api/lab-basic/exercise-1"),
      },
    ],
  },
];
