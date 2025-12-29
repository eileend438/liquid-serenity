import type { ComponentType } from 'react';

const modules = import.meta.glob('./*.tsx');

export async function loadArticleContent(slug: string): Promise<ComponentType | null> {
  const key = `./${slug}.tsx`;
  const loader = modules[key];
  if (!loader) return null;

  try {
    const mod = (await loader()) as { default?: ComponentType };
    return mod.default ?? null;
  } catch (err) {
    console.error(`Failed to load article: ${slug}`, err);
    return null;
  }
}
