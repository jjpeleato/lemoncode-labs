import { HeadContent, Scripts, createRootRoute, Link } from '@tanstack/react-router';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import appCss from '../styles.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Rural Houses' },
      {
        name: 'description',
        content: 'Browse and discover rural houses available for vacation rental.',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  notFoundComponent: () => (
    <main className="mx-auto max-w-4xl px-6 py-12 text-center">
      <p className="mb-4 text-neutral-500">Page not found.</p>
      <Link to="/houses" className="text-sm text-neutral-900 underline">
        ← Back to listing
      </Link>
    </main>
  ),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{ position: 'bottom-right' }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
