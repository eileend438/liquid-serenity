import type { ReactNode, ComponentType } from "react";
import ReactMarkdown from "react-markdown";

const modules = import.meta.glob("./*.tsx");

function markdownToNodes(md: string): ReactNode[] {
  return [
    <div
      key="md"
      className="text-foreground-muted text-lg leading-relaxed space-y-6"
    >
      <ReactMarkdown
        components={{
          strong: ({ children }) => (
            <strong className="font-black text-gold-gradient">
              {children}
            </strong>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-6 space-y-3 marker:text-[#D4A441]">
              {children}
            </ul>
          ),
          p: ({ children }) => <p>{children}</p>,
        }}
      >
        {md}
      </ReactMarkdown>
    </div>,
  ];
}

export async function loadArticleContent(
  slug: string
): Promise<ReactNode[] | null> {
  const key = `./${slug}.tsx`;
  const loader = modules[key];
  if (!loader) return null;

  try {
    const mod = (await loader()) as { default?: any };
    const def = mod.default;

    // старые статьи
    if (Array.isArray(def)) return def;

    // markdown-строка
    if (typeof def === "string") return markdownToNodes(def);

    // статья как компонент
    if (typeof def === "function") {
      const Cmp = def as ComponentType;
      return [<Cmp key="article" />];
    }

    return null;
  } catch (err) {
    console.error(`Failed to load article: ${slug}`, err);
    return null;
  }
}
