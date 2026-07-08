export function generateSchema(locale: string, baseUrl: string) {
  const localUrl = `${baseUrl}/${locale}`;

  const name =
    locale === 'es'
      ? 'Plaza Islas Malvinas'
      : locale === 'zh'
        ? '马尔维纳斯广场'
        : locale === 'it'
          ? 'Plaza Islas Malvinas'
          : 'Plaza Islas Malvinas';

  const description =
    locale === 'es'
      ? 'Plaza Islas Malvinas en Ushuaia, Tierra del Fuego, Argentina. Monumento conmemorativo de la Guerra de Malvinas con cenotafio y llama eterna.'
      : locale === 'zh'
        ? '阿根廷乌斯怀亚火地岛的马尔维纳斯广场（Plaza Islas Malvinas）。马尔维纳斯战争纪念碑、长明火与阵亡将士纪念广场。'
        : locale === 'it'
          ? 'Plaza Islas Malvinas a Ushuaia, Terra del Fuoco, Argentina. Memoriale della Guerra delle Malvinas con cenotafio e fiamma eterna.'
          : 'Plaza Islas Malvinas in Ushuaia, Tierra del Fuego, Argentina. A Malvinas/Falklands War memorial with cenotaph and eternal flame.';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['TouristAttraction', 'Place', 'LandmarksOrHistoricalBuildings', 'Park'],
        name,
        alternateName: ['Plaza Islas Malvinas', 'Plaza Malvinas', '马尔维纳斯广场', 'Islas Malvinas Plaza', 'Malvinas Memorial'],
        description,
        url: localUrl,
        image: `${baseUrl}/gallery/plaza-islands-malvinas-03.jpg`,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -54.804,
          longitude: -68.304,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Patagonia 48',
          addressLocality: 'Ushuaia',
          addressRegion: 'Tierra del Fuego',
          addressCountry: 'AR',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
        priceRange: 'Gratis',
        isAccessibleForFree: true,
        publicAccess: true,
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'geoCoordinate', value: '5MQM+RH Ushuaia, Tierra del Fuego' },
          { '@type': 'PropertyValue', name: 'petFriendly', value: 'Se permiten perros' },
          { '@type': 'PropertyValue', name: 'category', value: 'Parque · Memorial de Guerra' },
          { '@type': 'PropertyValue', name: 'hours', value: 'Abierto las 24 horas' },
        ],
        sameAs: [
          'https://maps.app.goo.gl/V2Jao8DgMUvchBt58',
          'https://turismoushuaia.com/actividad/espacio-pensar-malvinas/',
          'https://www.tierradelfuego.gob.ar/secretaria-de-malvinas-antartida-islas-del-atlantico-sur-y-asuntos-internacionales/',
          'https://findelmundo.tur.ar',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.7',
          reviewCount: '5261',
          bestRating: '5',
        },
      },
      {
        '@type': 'WebSite',
        url: localUrl,
        name,
        inLanguage:
          locale === 'es' ? 'es-AR' : locale === 'zh' ? 'zh-CN' : locale === 'it' ? 'it-IT' : 'en-US',
        isAccessibleForFree: true,
        publisher: {
          '@type': 'Organization',
          name: 'Plaza Islas Malvinas Guide',
        },
      },
    ],
  };
}
