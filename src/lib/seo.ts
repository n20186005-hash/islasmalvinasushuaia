export interface Seo {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  siteName: string;
  keywords: string[];
}

export function getSeo(locale: string): Seo {
  const map: Record<string, Seo> = {
    es: {
      title: 'Plaza Islas Malvinas — Memorial de Guerra en Ushuaia, Argentina',
      description:
        'Guía de la Plaza Islas Malvinas en Ushuaia, Tierra del Fuego, Argentina. Monumento a los caídos, llama eterna y espacio conmemorativo frente al Canal Beagle.',
      ogTitle: 'Plaza Islas Malvinas — Memorial de Guerra en Ushuaia, Argentina',
      ogDescription:
        'Guía de la Plaza Islas Malvinas en Ushuaia. Monumento conmemorativo, cenotafio, llama eterna y memorial de la Guerra de Malvinas frente al Canal Beagle.',
      siteName: 'Guía de Plaza Islas Malvinas',
      keywords: [
        'Plaza Islas Malvinas',
        'Ushuaia',
        'Tierra del Fuego',
        'Argentina tourism',
        'Malvinas memorial',
        'Guerra de Malvinas',
        '马尔维纳斯广场',
        '乌斯怀亚旅游',
        'monumento caídos',
        'llama eterna',
      ],
    },
    en: {
      title: 'Plaza Islas Malvinas — War Memorial in Ushuaia, Argentina',
      description:
        'A travel guide to Plaza Islas Malvinas in Ushuaia, Tierra del Fuego, Argentina. A memorial square with cenotaph, eternal flame, overlooking the Beagle Channel.',
      ogTitle: 'Plaza Islas Malvinas — War Memorial in Ushuaia, Argentina',
      ogDescription: 'A travel guide to Plaza Islas Malvinas. Memorial square, cenotaph, eternal flame commemorating the Falklands War in Ushuaia.',
      siteName: 'Plaza Islas Malvinas Travel Guide',
      keywords: [
        'Plaza Islas Malvinas',
        'Ushuaia',
        'Tierra del Fuego',
        'Argentina tourism',
        'Malvinas memorial',
        'Falklands War',
        '马尔维纳斯广场',
        '乌斯怀亚旅游',
        'war memorial',
        'eternal flame',
      ],
    },
    zh: {
      title: '马尔维纳斯广场（Plaza Islas Malvinas）— 阿根廷乌斯怀亚战争纪念碑',
      description:
        '马尔维纳斯广场（Plaza Islas Malvinas）旅行指南——探索阿根廷乌斯怀亚火地岛的马尔维纳斯战争纪念碑、长明火与阵亡将士纪念墙。',
      ogTitle: '马尔维纳斯广场（Plaza Islas Malvinas）— 阿根廷乌斯怀亚战争纪念碑',
      ogDescription: '马尔维纳斯广场旅行指南——阿根廷乌斯怀亚马尔维纳斯战争纪念碑、长明火与阵亡将士纪念墙。',
      siteName: '马尔维纳斯广场旅行指南',
      keywords: [
        'Plaza Islas Malvinas',
        'Ushuaia',
        'Tierra del Fuego',
        'Argentina tourism',
        'Malvinas memorial',
        'Falklands War',
        '马尔维纳斯广场',
        '乌斯怀亚旅游',
        '战争纪念碑',
        '长明火',
      ],
    },
    it: {
      title: 'Plaza Islas Malvinas — Memoriale di Guerra a Ushuaia, Argentina',
      description:
        'Guida alla Plaza Islas Malvinas a Ushuaia, Terra del Fuoco, Argentina. Monumento ai caduti, fiamma eterna e spazio commemorativo sul Canale di Beagle.',
      ogTitle: 'Plaza Islas Malvinas — Memoriale di Guerra a Ushuaia, Argentina',
      ogDescription: 'Guida alla Plaza Islas Malvinas. Memoriale di guerra, cenotafio, fiamma eterna che commemora la Guerra delle Malvinas a Ushuaia.',
      siteName: 'Guida di Plaza Islas Malvinas',
      keywords: [
        'Plaza Islas Malvinas',
        'Ushuaia',
        'Tierra del Fuego',
        'Argentina tourism',
        'Malvinas memorial',
        'Guerra delle Malvinas',
        '马尔维纳斯广场',
        '乌斯怀亚旅游',
        'monumento caduti',
        'fiamma eterna',
      ],
    },
  };
  return map[locale] || map.es;
}
