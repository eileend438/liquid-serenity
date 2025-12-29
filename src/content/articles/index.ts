export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  date?: string;
  readingTime?: string;
};

export const articles: ArticleMeta[] = [

{
    slug: 'unique-product-wow-effect',
    title: 'Внеконкурентный уникальный продукт с Fucking WOW эффектом',
    readingTime: '6 минут',
    description: 'Почему сильный продукт — это фундамент устойчивого бизнеса и как создать его с нуля.',
  },


  // ...
];

export const articlesBySlug = Object.fromEntries(
  articles.map(a => [a.slug, a])
) as Record<string, ArticleMeta>;
