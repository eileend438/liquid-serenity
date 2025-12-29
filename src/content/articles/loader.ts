import type { ReactNode } from 'react';

const modules = import.meta.glob('./*.tsx');

export async function loadArticleContent(slug: string): Promise<ReactNode[] | null> {
  const key = `./${slug}.tsx`;
  const loader = modules[key];

  if (!loader) return null;

  const mod = (await loader()) as { default: ReactNode[] };
  return mod.default ?? null;
}
