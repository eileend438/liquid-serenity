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
    title: 'Формула внеконкурентного продукта: как создать WOW-эффект, за который платят',
    readingTime: '6 минут',
    description: 'Почему сильный продукт — это фундамент устойчивого бизнеса и как создать его с нуля.',
  },



  {
      slug: 'strategy-2026',
      title: 'Стратегия 2026. Разделение бизнесов на 2 пути. Переход бизнес-мира в 6 технологический уклад',
      readingTime: '7 минут',
      description: 'О переходе в 6-й технологический уклад и о том, почему «нормальный бизнес» больше не выживает',
    },

{
        slug: 'complex-competitiveness',
        title: 'В чём сила комплексной конкурентоспособности',
        readingTime: '5 минут',
        description: 'Это система, где личность, продукт, стратегия, маркетинг и мышление усиливают друг друга, создавая внеконкурентный бизнес, который невозможно скопировать.',
      },

{
      slug: 'business-after-2026',
      title: 'Бизнес после 2026: какие компании выживут, а какие исчезнут',
      readingTime: '7 минут',
      description: 'Как понять, что именно ломается в бизнесе — и что делать, пока ещё есть время',
    },

{
      slug: 'business-after-2026',
      title: 'Бизнес после 2026: какие компании выживут, а какие исчезнут',
      readingTime: '7 минут',
      description: 'Как понять, что именно ломается в бизнесе — и что делать, пока ещё есть время',
    },

{
      slug: 'mission-as-strategy',
      title: 'Миссия как стратегия: как идея превращает бизнес в рынок',
      readingTime: '6 минут',
      description: 'Почему бизнес без чёткой миссии и Big Idea теряет устойчивость, застревает в конкуренции и со временем выгорает — и почему именно миссия становится фундаментом долгосрочного роста',
    },

/*
{
      slug: 'three-reasons-why',
      title: 'Основные 3 причины почемы мало продаж',
      readingTime: '5 минут',
      description: '...',
    },
*/

  // ...
];

export const articlesBySlug = Object.fromEntries(
  articles.map(a => [a.slug, a])
) as Record<string, ArticleMeta>;
