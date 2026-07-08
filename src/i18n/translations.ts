export type Locale = "zh" | "en" | "es" | "it";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };

export type Translations = {
  nav: { history: string; architecture: string; monuments: string; eco: string; visiting: string; transportation: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tags: string[]; tagline: string; title: string; subtitle: string; cta: string; description: { address: string; phone: string; category: string } };
  rating: { reviews: string; source: string };
  history: { title: string; intro: string };
  myths: { title: string; intro: string; items: { title: string; content: string }[] };
  curiosities: { title: string; content: string };
  eco: { title: string; intro: string; items: string[] };
  architecture: { title: string; intro: string; specs: { structure: { title: string; content: string }; design: { title: string; content: string }; optics: { title: string; content: string } }; plaque: { title: string; items: { label: string; value: string }[] } };
  monuments: { title: string; intro: string; items: { name: string; description: string }[] };
  contrast: { title: string; intro: string; before: string; after: string };
  visiting: { title: string; intro: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; tips: { title: string; items: string[] }; essentials: { icon: string; title: string; text: string }[] };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; publicTransport?: { title: string; content: string; options: { name: string; description: string; steps: string[] }[] }; city: { title: string; content: string; steps: string[] }; tips: { title: string; items: string[] } };
  gallery: { title: string; viewMore: string; categories: { key: string; label: string }[] };
  reviews: { title: string; subtitle: string; viewMore: string; nearbyTitle: string; nearbyIntro: string; nearbyItems: { name: string; description: string }[] };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  siteMap: { title: string; intro: string; hint: string; cta: string; zones: { key: string; name: string; desc: string }[] };
  itinerary: { title: string; intro: string; steps: { time: string; title: string; text: string }[] };
  ctaBand: { title: string; subtitle: string; buttons: string[] };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

const LINK_DEFS: { url: string; names: Record<Locale, string> }[] = [
  {
    url: "https://turismoushuaia.com/actividad/espacio-pensar-malvinas/",
    names: {
      zh: "乌斯怀亚官方旅游局 - 思考马尔维纳斯纪念空间",
      en: "Ushuaia Tourism Office - Espacio Pensar Malvinas",
      es: "Turismo Ushuaia - Espacio Pensar Malvinas",
      it: "Turismo Ushuaia - Spazio Pensare Malvinas",
    },
  },
  {
    url: "https://www.tierradelfuego.gob.ar/secretaria-de-malvinas-antartida-islas-del-atlantico-sur-y-asuntos-internacionales/",
    names: {
      zh: "火地岛省政府 - 马尔维纳斯南极及南大西洋诸岛事务秘书处",
      en: "Tierra del Fuego Government - Malvinas Affairs Secretariat",
      es: "Gobierno de Tierra del Fuego - Secretaría de Malvinas",
      it: "Governo della Terra del Fuoco - Segretariato delle Malvinas",
    },
  },
  {
    url: "https://findelmundo.tur.ar",
    names: {
      zh: "火地岛省官方旅游局 (Fin del Mundo)",
      en: "Tierra del Fuego Official Tourism (Fin del Mundo)",
      es: "Turismo Oficial de Tierra del Fuego (Fin del Mundo)",
      it: "Turismo Ufficiale della Terra del Fuoco (Fin del Mondo)",
    },
  },
  {
    url: "https://www.ushuaia.gob.ar",
    names: {
      zh: "乌斯怀亚市政府官网",
      en: "Municipality of Ushuaia Official Website",
      es: "Municipalidad de Ushuaia - Sitio Oficial",
      it: "Comune di Ushuaia - Sito Ufficiale",
    },
  },
  {
    url: "https://www.argentina.gob.ar/cancilleria/malvinas",
    names: {
      zh: "阿根廷国家政府官网 - 马尔维纳斯问题专页",
      en: "Argentina National Government - Malvinas Affairs",
      es: "Gobierno de Argentina - Cancillería Malvinas",
      it: "Governo dell'Argentina - Affari Malvinas",
    },
  },
];

const LINKS_BY_LOCALE: Record<Locale, LinkItem[]> = {
  zh: LINK_DEFS.map((d) => ({ name: d.names.zh, url: d.url })),
  en: LINK_DEFS.map((d) => ({ name: d.names.en, url: d.url })),
  es: LINK_DEFS.map((d) => ({ name: d.names.es, url: d.url })),
  it: LINK_DEFS.map((d) => ({ name: d.names.it, url: d.url })),
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { history: "历史与记忆", architecture: "广场纪念碑", monuments: "参观体验", eco: "参观礼仪", visiting: "参观信息", transportation: "交通指南", gallery: "照片集锦", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: {
      tags: ["战争纪念碑", "24小时开放", "允许带狗"],
      tagline: "阿根廷 · 火地岛 · 乌斯怀亚",
      title: "Plaza Islas Malvinas",
      subtitle: "马尔维纳斯广场 · 阵亡将士纪念碑 · 世界尽头",
      cta: "了解这段历史记忆",
      description: {
        address: "Patagonia 48, V9410 Ushuaia, Tierra del Fuego, 阿根廷",
        phone: "",
        category: "公园 · 战争纪念碑"
      }
    },
    rating: { reviews: "条评价", source: "Google 评论" },
    history: {
      title: "马尔维纳斯广场的历史与记忆",
      intro: `Plaza Islas Malvinas（马尔维纳斯广场）位于阿根廷火地岛省乌斯怀亚市的**比格尔海峡（Canal Beagle）**畔，是阿根廷国内最重要、最具象征意义的马尔维纳斯战争纪念碑之一。\n\n**1982 年马尔维纳斯战争**\n1982 年 4 月 2 日至 6 月 14 日，阿根廷与英国之间爆发了马尔维纳斯战争（Guerra de Malvinas / Falklands War），历时 74 天。这场冲突造成阿根廷方面 649 名军人阵亡，英国方面 255 名军人阵亡。自战争结束以来，阿根廷始终通过外交途径主张对马尔维纳斯群岛、南乔治亚岛和南桑威奇群岛的主权。\n\n**乌斯怀亚的特殊地位**\n在阿根廷的行政区划中，乌斯怀亚被视为**马尔维纳斯群岛、南极洲及南大西洋诸岛省（Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur）**的首府。根据阿根廷法律，马尔维纳斯群岛的首府名义上设在乌斯怀亚，这使得这座"世界最南端的城市"在马尔维纳斯议题上具有不可替代的政治与情感地位。\n\n**广场的建设与意义**\n马尔维纳斯广场建于乌斯怀亚市中心、比格尔海峡之滨，核心纪念碑是一座**黑色大理石纪念墙**，上面铭刻着在马岛战争中牺牲的 649 名阿根廷军人的姓名。纪念碑前燃烧着永不熄灭的**长明火（Llama Eterna）**，象征着对英烈的永恒追思。广场上矗立着阿根廷国旗与火地岛省省旗，还有一座巨大的马尔维纳斯群岛地图浮雕。\n\n**每年的 4 月 2 日**\n每年的 4 月 2 日是阿根廷的**"马尔维纳斯战争老兵及阵亡将士纪念日"（Día del Veterano y de los Caídos en la Guerra de Malvinas）**。这一天，成千上万的退伍军人、阵亡者家属和普通民众从全国各地汇聚到这座广场，举行通宵守夜（Vigilia）和庄严的纪念仪式，以铭记那场战争和那些为之献出生命的年轻人。`
    },
    myths: {
      title: "象征与集体记忆",
      intro: "马尔维纳斯广场不仅是一座物理空间，更承载着阿根廷民族深厚的情感记忆。以下三个主题帮助理解这座广场的深层象征意义。",
      items: [
        {
          title: "长明火：永不熄灭的追思",
          content: `广场中央的长明火（Llama Eterna）是马尔维纳斯纪念碑最令人动容的元素。这团火焰自点燃之日起从未熄灭，无论风雪、严寒还是黑夜，始终在乌斯怀亚的冷风中燃烧。\n\n火焰象征的不止是对阵亡者的哀悼——它更传达了一种信念：阿根廷对马尔维纳斯群岛主权的主张从未停止。正如当地人所说：\u201C只要火焰还在燃烧，我们就不会忘记。\u201D\n\n每年 4 月 2 日的守夜仪式上，退伍老兵和阵亡者家属会围绕长明火静默站立，整夜守护这团永不熄灭的记忆之火。`
        },
        {
          title: "南十字星座下的世界尽头",
          content: `乌斯怀亚被称为\u201C世界最南端的城市\u201D（La Ciudad Más Austral del Mundo），马尔维纳斯广场就坐落在这座边陲城市的海滨。站在广场上，眼前是幽深的比格尔海峡和远处白雪皑皑的智利达尔文山脉。\n\n从地理角度看，这座纪念碑的位置本身就充满了象征意义——阿根廷在马岛战争中阵亡的士兵大多来自全国各地，他们的生命终结在遥远的南大西洋冰冷海域。而乌斯怀亚，这座\u201C世界尽头\u201D之城，成为了距离他们最近的家园。\n\n广场如一位沉默的守望者，面朝南方，守望那片阿根廷人称为\u201C马尔维纳斯\u201D的群岛方向。`
        },
        {
          title: "649 个名字：每一块石碑背后的故事",
          content: `纪念碑黑色大理石墙面上镌刻的 649 个名字，每一个都代表着一位鲜活的年轻人。他们中有刚满 18 岁的义务兵、有飞行员、有海军陆战队员、也有军官。\n\n许多阿根廷家庭每年都会从内地省份来到乌斯怀亚，在碑墙上寻找亲人的名字，献上一朵花或一面小国旗。对于阵亡者家属而言，这座广场是他们与亲人\u201C最近\u201D的地方——因为站在这里，面朝南方，海的那一边就是马尔维纳斯群岛。\n\n广场因此成为了阿根廷国家创伤记忆的重要疗愈空间——一个让个人悲伤与民族集体记忆交汇的地方。`
        }
      ]
    },
    curiosities: {
      title: "文化剪影与历史注脚",
      content: `**"Las Malvinas son argentinas"**\n"马尔维纳斯是阿根廷的"——这句话在阿根廷几乎无处不在。从布宜诺斯艾利斯的街头涂鸦到足球比赛的横幅，从学校教材到官方文件，这句话是阿根廷现代民族认同中最核心的口号之一。乌斯怀亚的马尔维纳斯广场正是这一集体诉求最庄严的物理表达。\n\n**4 月 2 日守夜仪式**\n每年 4 月 1 日深夜至 4 月 2 日凌晨，马尔维纳斯广场会举行全国最重要的"马尔维纳斯守夜"（Vigilia de Malvinas）。退伍军人组织（Centro de Ex Combatientes）会搭建舞台，播放纪录片，由老兵讲述亲身经历。午夜时分，当 4 月 2 日的钟声敲响，全场默哀一分钟，随后高唱阿根廷国歌。\n\n**比格尔海峡的历史纠葛**\n乌斯怀亚所在的比格尔海峡曾是阿根廷与智利之间领土争端的焦点。1978 年，两国几乎因此爆发战争，后经教皇约翰·保罗二世调解，于 1984 年签订和平友好条约。马尔维纳斯广场面朝比格尔海峡，实际上也见证着南美洲最南端复杂的国际关系史。\n\n**广场上的狗**\n马尔维纳斯广场是乌斯怀亚为数不多的"允许带狗"的公共场所之一。许多当地人每天都会牵着狗在广场散步，让这座庄严的纪念碑也融入了乌斯怀亚市民最日常的生活场景。有人说，这正是广场设计的精妙之处——它既是神圣的纪念空间，又是活生生的城市公共空间。`
    },
    eco: {
      title: "参观礼仪与尊重准则",
      intro: "马尔维纳斯广场是阿根廷最重要的战争纪念地之一。作为独立的非盈利科普指南，我们恳请所有参观者以最大的敬意对待这片神圣空间。",
      items: [
        "**保持肃静**：广场是纪念阵亡者的圣地，请降低音量，避免大声喧哗、播放音乐或嬉戏打闹",
        "尊重长明火：请勿向火焰中投掷任何物品，也不要跨越围栏触碰火焰",
        "**不要触摸纪念碑**：请不要攀爬、坐卧或踩踏纪念碑和纪念墙，这些是庄严的纪念设施",
        "**不遗留垃圾**：请将所有废弃物带走，保持广场整洁",
        "**安静拍照**：允许拍照，但请关闭闪光灯和快门声，避免影响正在缅怀的参观者",
        "尊重纪念活动：如果遇到正在进行的纪念仪式（特别是 4 月 2 日前后），请保持距离、安静观摩"
      ]
    },
    architecture: {
      title: "广场布局与纪念碑群",
      intro: "马尔维纳斯广场占地虽不大，但设计紧凑且富有深意。广场临海而建，以黑色大理石纪念墙为核心，各纪念碑群错落有致地分布在海滨步道之间。",
      specs: {
        structure: { title: "整体布局", content: "广场呈开放式设计，面向比格尔海峡。核心区域由三个主要元素组成：① **阵亡将士纪念墙**——黑色大理石墙面，按姓氏字母顺序排列 649 位阵亡者姓名；② **长明火（Llama Eterna）**——位于纪念墙正前方的永久燃烧火炬；③ **马尔维纳斯群岛地图浮雕**——刻在广场地面上的大型群岛地形图。\n\n广场两侧设有阿根廷国旗和火地岛省省旗的旗杆，周边种植了当地耐寒植物，与乌斯怀亚的海滨风光融为一体。" },
        design: { title: "设计理念", content: `广场的设计体现了\u201C**记忆与自然共生**\u201D的理念。黑色的纪念墙与周围白雪皑皑的山脉形成强烈的视觉对比，象征战争的沉重与和平的可贵。长明火的橘红色光芒在乌斯怀亚常年阴雨的气候中格外醒目，无论白天还是黑夜都能看到。\n\n纪念碑正对南方——马尔维纳斯群岛的方向。设计师有意将广场的主轴线设定为东北-西南走向，使参观者在瞻仰纪念碑时，自然而然地面向那片阿根廷人民魂牵梦萦的群岛。` },
        optics: { title: "周边环境", content: `广场紧邻乌斯怀亚的滨海步道（Costanera），游客在参访后可沿比格尔海峡漫步。广场正对面就是著名的**\u201C思考马尔维纳斯\u201D历史主题空间（Espacio Pensar Malvinas）**，该空间由乌斯怀亚旅游局管理，提供关于马岛战争历史背景的深度展览和官方导览。不远处还有**乌斯怀亚海事博物馆（Museo Marítimo de Ushuaia）**。` }
      },
      plaque: {
        title: "广场基本信息",
        items: [
          { label: "名称", value: "Plaza Islas Malvinas（马尔维纳斯广场）" },
          { label: "位置", value: "乌斯怀亚，火地岛省，阿根廷" },
          { label: "纪念对象", value: "1982 年马尔维纳斯战争阵亡将士" },
          { label: "阵亡人数", value: "649 名阿根廷军人" },
          { label: "开放时间", value: "全年 24 小时" },
          { label: "门票", value: "免费（公共空间）" },
          { label: "地标特征", value: "黑色大理石纪念墙、长明火" }
        ]
      }
    },
    monuments: {
      title: "在马尔维纳斯广场可以做什么",
      intro: "马尔维纳斯广场将庄严的纪念仪式感、深厚的历史教育意义和乌斯怀亚壮美的自然风光融为一体。以下体验深受历史爱好者、退伍军人家属和普通游客的尊重。",
      items: [
        { name: "瞻仰阵亡将士纪念墙", description: "走近黑色大理石墙面，逐一阅读那 649 个名字。每个名字背后都是一位年轻的生命。建议您在碑墙前驻足片刻，以默哀的方式向这些为国捐躯的士兵表达敬意。许多参观者会留下一朵花或一面小旗。" },
        { name: "观看长明火", description: "无论白天还是夜晚，长明火都在乌斯怀亚的海风中燃烧。火焰在黑色大理石的映衬下格外动人。请保持适当距离，安静地注视这团永不熄灭的追思之火，感受它所承载的国家记忆。" },
        { name: `参观\u201C思考马尔维纳斯\u201D展览空间`, description: "紧邻广场的「Espacio Pensar Malvinas」是一个由乌斯怀亚旅游局管理的免费展览空间，通过照片、文物、地图和影像资料，深入介绍 1982 年战争的历史背景和岛屿的地理文化。" },
        { name: "沿海滨步道散步", description: "参访完广场后，可以沿着乌斯怀亚的滨海步道（Costanera）散步。比格尔海峡的壮丽景色令人心旷神怡——远处是智利的达尔文山脉，海面上时常可以看到海狮和信天翁。这是从沉重历史回到当下生活的最佳过渡。" }
      ]
    },
    contrast: {
      title: "庄严纪念碑与壮美海峡",
      intro: "马尔维纳斯广场的魅力，在于人类深沉的历史记忆与壮丽的自然景观在此处交汇。一面是黑色大理石墙上的 649 个名字，一面是比格尔海峡亘古不变的潮起潮落——以下两幅画面，带您感受这份沉重与永恒。",
      before: "庄严纪念碑",
      after: "比格尔海峡远眺"
    },
    visiting: {
      title: "实用参观指南",
      intro: "马尔维纳斯广场作为公共开放空间，全年无休且完全免费。无论您是专程前来缅怀历史，还是在乌斯怀亚旅行中顺道参访，以下信息将帮助您更好地规划这次富有意义的参观。",
      hours: { title: "开放时间", content: "**24 小时全天开放**，全年无休。\n广场作为城市公共空间，没有围栏或门禁限制。\n夜间广场有基本照明，长明火通宵可见。", note: "4 月 2 日前后广场可能因纪念活动而部分区域人流量极大，建议提前规划。" },
      price: { title: "门票信息", content: "**完全免费**。\n广场属于乌斯怀亚市公共空间，不对参观者收取任何费用。\n紧邻的「Espacio Pensar Malvinas」展览空间也免费开放。", note: "免费的公共纪念空间，请以尊重和感恩的心态参访。" },
      duration: { title: "建议参观时长", content: "瞻仰纪念墙 + 长明火 + 拍照：约 **20–30 分钟**。\n如参观「思考马尔维纳斯」展览空间：增加 **30–45 分钟**。\n沿海滨步道散步 + 远眺比格尔海峡：可自由安排。", note: "可与乌斯怀亚海事博物馆、世界尽头博物馆（Museo del Fin del Mundo）串联合并安排半天行程。" },
      tips: { title: "参观贴士与注意事项", items: [
        "**穿着保暖**：乌斯怀亚常年气温较低（夏季平均 10°C，冬季 0°C），海风较大，请穿着防风外套",
        "**防雨准备**：火地岛天气多变，即使晴天也建议随身携带雨具",
        "**尊重纪念场所**：请以参观纪念馆的态度对待广场，避免过于娱乐化的拍照方式",
        "**步行可达**：广场位于乌斯怀亚市中心海滨，从市区大多数酒店步行即可到达",
        "**拍照建议**：清晨或黄昏的光线最适合拍摄纪念碑与比格尔海峡的合影"
      ] },
      essentials: [
        { icon: "🧥", title: "注意保暖", text: "乌斯怀亚全年低温，海风强劲，即使在夏季也请穿着防风外套。" },
        { icon: "🌧️", title: "防雨准备", text: "火地岛天气多变，随身携带雨具，随时可能遇到降雨。" },
        { icon: "🕊️", title: "保持肃穆", text: "这是战争纪念地，请保持安静、避免嬉戏，尊重正在缅怀的参观者。" },
        { icon: "📸", title: "礼貌拍照", text: "可以拍照但请关闭闪光灯和快门声，不要攀爬纪念碑摆拍。" }
      ]
    },
    transportation: {
      title: "精准交通指南",
      airport: { title: "✈️ 从乌斯怀亚机场出发", content: "乌斯怀亚马尔维纳斯阿根廷国际机场（USH）距市中心仅约 4 公里。从机场到马尔维纳斯广场交通非常方便。", options: [
        { name: "出租车 / Uber（最推荐）", price: "约 10–15 分钟", time: "4 公里", steps: ["从机场出口乘坐出租车或网约车", "沿 3 号国道（RN-3）北上进入市区", "告诉司机前往「Plaza Islas Malvinas」或「Monumento a los Caídos en Malvinas」", "约 10–15 分钟即可到达"] }
      ]},
      city: { title: "🏘️ 从乌斯怀亚市中心步行前往", content: "马尔维纳斯广场位于乌斯怀亚市中心**滨海步道（Costanera）**沿线，从市中心主街圣马丁大街（Av. San Martín）步行约 **5–10 分钟**即可到达。", steps: ["从圣马丁大街向南步行至海边", "到达滨海步道（Costanera）后向西（右转）走", "步行约 300 米即可看到广场上的阿根廷国旗和长明火", "广场入口就在滨海步道旁"] },
      tips: { title: "交通贴士", items: [
        "乌斯怀亚市区不大，**几乎所有市中心酒店都能步行到达广场**",
        "如果住在较远的地区（如半山腰的酒店），建议打车或乘坐当地公交",
        "乌斯怀亚机场（USH）有直飞布宜诺斯艾利斯（AEP/EZE）的航班，航程约 3.5 小时",
        "从布宜诺斯艾利斯驾车前往乌斯怀亚距离约 3,000 公里，建议乘坐飞机",
        "乌斯怀亚同时也是前往南极洲的主要出发港口，每年 11 月至次年 3 月有大量南极游轮停靠"
      ] }
    },
    gallery: { title: "照片集锦", viewMore: "在 Google Maps 查看更多照片", categories: [ { key: "memorial", label: "纪念碑" }, { key: "flame", label: "长明火" }, { key: "plaza", label: "广场全景" }, { key: "beagle", label: "海峡风光" } ] },
    reviews: {
      title: "游客评价与周边探索",
      subtitle: "来自马尔维纳斯广场的声音：Google Maps 真实评价",
      viewMore: "在 Google Maps 查看更多评价",
      nearbyTitle: "周边值得一游的景点",
      nearbyIntro: "参访完马尔维纳斯广场后，您可顺道探索以下邻近目的地：",
      nearbyItems: [
        { name: "世界尽头博物馆（Museo del Fin del Mundo）", description: "距离广场步行约 10 分钟。展示了火地岛地区的自然历史和原住民文化，是了解乌斯怀亚前世今生的最佳场所。" },
        { name: "乌斯怀亚海事博物馆（Museo Marítimo de Ushuaia）", description: "位于前监狱建筑内，展示了乌斯怀亚作为流放地的历史、南极探险史以及马尔维纳斯战争的专题展区。" },
        { name: "火地岛国家公园（Parque Nacional Tierra del Fuego）", description: "距市区约 12 公里，是阿根廷最南端的国家公园。可乘坐世界尽头火车（Tren del Fin del Mundo）进入公园，欣赏原始森林和比格尔海峡风光。" }
      ]
    },
    faq: { title: "常见问题", subtitle: "深入了解马尔维纳斯广场", items: [
      { question: "马尔维纳斯广场是什么地方？", answer: "马尔维纳斯广场（Plaza Islas Malvinas）位于阿根廷乌斯怀亚市比格尔海峡之滨，是阿根廷最重要的马尔维纳斯战争（1982）纪念地之一。广场中央矗立着黑色大理石纪念墙，上面铭刻着 649 位在马岛战争中阵亡的阿根廷军人的名字，纪念墙前燃烧着永不熄灭的长明火。" },
      { question: "广场需要门票吗？开放时间是什么？", answer: "马尔维纳斯广场是乌斯怀亚市的**公共开放空间**，完全免费，无需门票。广场**全年 24 小时开放**，夜间有照明设施，长明火通宵可见。4 月 2 日（马尔维纳斯战争纪念日）前后广场人流量极大，建议提前了解。" },
      { question: "参观广场需要注意什么？", answer: "广场是战争纪念地，请保持肃静、尊重纪念碑设施。不要攀爬纪念墙或跨越长明火围栏。拍照时请关闭闪光灯。乌斯怀亚天气多变，请穿着保暖防风衣物。广场允许带狗，但请牵绳并清理宠物排泄物。" },
      { question: "如何从布宜诺斯艾利斯前往乌斯怀亚？", answer: "从布宜诺斯艾利斯乘坐飞机到乌斯怀亚马尔维纳斯阿根廷国际机场（USH），航程约 3.5 小时。到达机场后乘出租车约 10–15 分钟（4 公里）即可到达市中心的马尔维纳斯广场。乌斯怀亚也有长途巴士连接阿根廷其他城市，但路程极长（从布市出发约 36 小时）。" },
      { question: `什么是\u201C思考马尔维纳斯\u201D空间？`, answer: "「Espacio Pensar Malvinas」（思考马尔维纳斯）是紧邻广场的免费展览空间，由乌斯怀亚市旅游局管理。展览通过照片、文物、地图和影像资料深入介绍了 1982 年马尔维纳斯战争的历史背景、地理环境和文化意义。开放时间建议查询 turismoushuaia.com。" }
    ]},
    location: { title: "地图位置", address: "Patagonia 48, V9410\nUshuaia, Tierra del Fuego\nArgentina\n阿根廷火地岛省乌斯怀亚", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "马尔维纳斯广场是阿根廷国家记忆的重要载体。649 个名字、一团永不熄灭的火焰，静静地守望着南大西洋的波涛。请与我们一同以尊重之心探访这片土地，让历史在记忆中永存。", text: "© 2026 马尔维纳斯广场指南 · 保留所有权利。\n本网站是一个独立的第三方非盈利科普指南项目，致力于准确传播 Plaza Islas Malvinas（马尔维纳斯广场）的信息。我们与阿根廷政府、火地岛省政府或任何官方机构均无隶属关系。", made: "本网站是一个独立的非盈利科普项目，为历史爱好者、旅行者和所有珍视和平的人们而建。", linksTitle: "友情链接", links: LINKS_BY_LOCALE.zh },
    siteMap: {
      title: "广场互动地图",
      intro: "将鼠标悬停（或点按）下方地图中的标记，即可探索马尔维纳斯广场的五大核心区域。",
      hint: "悬停查看 · 点击锁定",
      cta: "查看完整广场导览",
      zones: [
        { key: "cenotafio", name: "阵亡将士纪念墙（Cenotafio）", desc: "黑色大理石纪念墙，按姓氏排列 649 位阵亡者姓名，是广场最核心的纪念设施。" },
        { key: "llama", name: "长明火（Llama Eterna）", desc: "位于纪念墙正前方的永久燃烧火炬，象征对英烈永不熄灭的追思。" },
        { key: "banderas", name: "国旗广场（Mástiles）", desc: "矗立着阿根廷国旗和火地岛省省旗，是 4 月 2 日纪念仪式的主会场。" },
        { key: "mapa", name: "群岛地图浮雕（Mapa Relieve）", desc: "刻在地面上的马尔维纳斯群岛大型地形图，直观展示群岛的地理面貌。" },
        { key: "costanera", name: "滨海步道（Costanera）", desc: "沿比格尔海峡修建的海滨步道，连接广场与城市其他景点，适合散步观海。" }
      ]
    },
    itinerary: {
      title: "建议参观行程",
      intro: "半小时即可完成核心瞻仰。以下时间轴供您参考，可按节奏自由调整。",
      steps: [
        { time: "任意时间", title: "抵达广场", text: "从乌斯怀亚市中心沿海滨步道步行抵达，首先在入口处远观广场全貌与比格尔海峡。" },
        { time: "第 5 分钟", title: "瞻仰纪念墙", text: "走近黑色大理石墙，默读阵亡者姓名，献上一朵花或在碑前静默片刻。" },
        { time: "第 15 分钟", title: "观看长明火", text: "在长明火前驻足，感受这团永不熄灭的火焰所承载的国家记忆。" },
        { time: "第 20 分钟", title: "参观展览空间", text: "前往「Espacio Pensar Malvinas」（如开放），深入了解 1982 年战争的历史背景。" },
        { time: "第 50 分钟", title: "沿海滨散步", text: "沿滨海步道散步，欣赏比格尔海峡风光，远眺智利达尔文山脉的雪峰。" }
      ]
    },
    ctaBand: {
      title: "计划您的乌斯怀亚之旅",
      subtitle: "从南极门户到世界尽头，让马尔维纳斯广场之行成为您旅途中最庄严的一站。",
      buttons: ["参观信息与开放时间", "预约官方导览", "在地图查看位置"]
    }
  },
  en: {
    nav: { history: "History & Memory", architecture: "Plaza & Monuments", monuments: "What to Experience", eco: "Visitor Etiquette", visiting: "Visit Info", transportation: "Transportation", gallery: "Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: {
      tags: ["War Memorial", "Open 24 Hours", "Dog-Friendly"],
      tagline: "Argentina · Tierra del Fuego · Ushuaia",
      title: "Plaza Islas Malvinas",
      subtitle: "Malvinas Memorial · Fallen Soldiers Monument · End of the World",
      cta: "Discover This Place of Memory",
      description: {
        address: "Patagonia 48, V9410 Ushuaia, Tierra del Fuego, Argentina",
        phone: "",
        category: "Park · War Memorial"
      }
    },
    rating: { reviews: "reviews", source: "Google Reviews" },
    history: {
      title: "The History and Memory of Plaza Islas Malvinas",
      intro: `Plaza Islas Malvinas (Malvinas Islands Square) stands on the shores of the **Beagle Channel** in Ushuaia, Tierra del Fuego Province, Argentina. It is one of the country's most important and symbolic memorials to the Malvinas/Falklands War.\n\n**The 1982 Malvinas War**\nBetween 2 April and 14 June 1982, the Malvinas War (Guerra de Malvinas / Falklands War) was fought between Argentina and the United Kingdom, lasting **74 days**. The conflict resulted in the deaths of **649 Argentine servicemen** and 255 British servicemen. Since the war's end, Argentina has consistently pursued its sovereignty claim over the Malvinas Islands, South Georgia and the South Sandwich Islands through diplomatic channels.\n\n**The Special Status of Ushuaia**\nWithin Argentina's administrative structure, Ushuaia serves as the capital of the **Province of Tierra del Fuego, Antarctica and South Atlantic Islands**. Under Argentine law, Ushuaia is nominally designated as the capital of the Malvinas Islands, giving this "southernmost city in the world" an irreplaceable political and emotional role in the Malvinas issue.\n\n**The Plaza's Creation and Significance**\nPlaza Islas Malvinas was built in downtown Ushuaia on the Beagle Channel waterfront. Its centrepiece is a **black marble memorial wall** inscribed with the names of the **649 Argentine soldiers** who lost their lives in the Malvinas War. Before the wall burns the **Eternal Flame (Llama Eterna)** — a permanently lit torch symbolising undying remembrance. The square also features the flags of Argentina and Tierra del Fuego Province, and a large relief map of the Malvinas Islands set into the ground.\n\n**2 April — Malvinas Day**\nEvery 2 April, Argentina observes **"Malvinas War Veterans and Fallen Soldiers Day"** (Día del Veterano y de los Caídos en la Guerra de Malvinas). On this date, thousands of war veterans, bereaved families and ordinary citizens travel from across the country to this plaza for an all-night vigil (Vigilia) and solemn commemorative ceremonies — keeping alive the memory of the war and the young lives lost in it.`
    },
    myths: {
      title: "Symbolism and Collective Memory",
      intro: "Plaza Islas Malvinas is more than a physical space — it carries profound emotional significance for the Argentine nation. These three themes help understand the deeper symbolism of this memorial.",
      items: [
        {
          title: "The Eternal Flame: A Fire That Never Dies",
          content: "The Eternal Flame (Llama Eterna) at the heart of the plaza is the most moving element of the Malvinas memorial. Since its lighting, it has never been extinguished — burning through snow, bitter cold and darkness in Ushuaia's windswept waterfront.\n\nThe flame symbolises more than mourning for the fallen — it conveys a deeper conviction: that Argentina's claim to sovereignty over the Malvinas Islands has never ceased. As locals say: 'As long as the flame burns, we will not forget.'\n\nDuring the 2 April vigil each year, war veterans and bereaved families stand in silence around the eternal flame throughout the night, guarding this undying fire of memory."
        },
        {
          title: "The End of the World Under the Southern Cross",
          content: "Ushuaia is known as the southernmost city in the world (La Ciudad Más Austral del Mundo), and Plaza Islas Malvinas sits on this frontier city's waterfront. From the plaza you look out over the deep waters of the Beagle Channel towards the snow-capped Darwin Range in Chile.\n\nGeographically, the monument's location is itself deeply symbolic. The Argentine soldiers who fell in the Malvinas War came from every corner of the country; their lives ended in the frigid waters of the South Atlantic. Ushuaia — this \"city at the end of the world\" — is the closest home they have.\n\nThe plaza stands like a silent guardian, facing south, gazing towards the islands that Argentines call \"the Malvinas.\""
        },
        {
          title: "649 Names: The Story Behind Every Stone",
          content: "Every one of the 649 names carved into the black marble memorial wall represents a real, once-living young person. Among them were 18-year-old conscripts, pilots, marines, and officers.\n\nMany Argentine families travel each year from inland provinces to Ushuaia to find their loved one's name on the wall, leaving a flower or a small flag. For the families of the fallen, this plaza is the closest place they can come to their relatives — because from here, facing south, the Malvinas Islands lie just across the sea.\n\nThe plaza has thus become a vital healing space for Argentina's national trauma — a place where personal grief and collective national memory converge."
        }
      ]
    },
    curiosities: {
      title: "Cultural Vignettes & Historical Footnotes",
      content: `**"Las Malvinas son argentinas"**\n"The Malvinas are Argentine" — this phrase is ubiquitous across Argentina. From street murals in Buenos Aires to banners at football matches, from school textbooks to official documents, it is one of the most central slogans of modern Argentine national identity. Ushuaia's Plaza Islas Malvinas is the most solemn physical expression of this collective sentiment.\n\n**The 2 April Vigil Ceremony**\nEach year from the night of 1 April to the early hours of 2 April, the Plaza hosts the nation's most important "Malvinas Vigil" (Vigilia de Malvinas). Veterans' organisations set up a stage, screen documentaries, and veterans share their personal experiences. At midnight, as the clock strikes 2 April, a minute's silence is observed before the national anthem is sung.\n\n**The Beagle Channel's Historical Complexity**\nThe Beagle Channel, on whose shores Ushuaia stands, was once a territorial flashpoint between Argentina and Chile. In 1978 the two countries came to the brink of war, which was averted through papal mediation by John Paul II, culminating in the 1984 Treaty of Peace and Friendship. Plaza Islas Malvinas, facing the Beagle Channel, thus also bears witness to the complex international history of South America's southernmost reaches.\n\n**Dogs in the Plaza**\nPlaza Islas Malvinas is one of the few public spaces in Ushuaia where dogs are expressly allowed. Many locals walk their dogs through the plaza daily, weaving the solemn memorial into the fabric of everyday city life. Some say this is precisely the plaza's genius — it is simultaneously a sacred space of remembrance and a living, breathing urban public square.`
    },
    eco: {
      title: "Visitor Etiquette and Respect",
      intro: "Plaza Islas Malvinas is one of Argentina's most significant war memorials. As an independent non-profit educational guide, we ask all visitors to treat this sacred space with the utmost respect.",
      items: [
        "**Maintain silence**: this is a memorial to the fallen — keep voices low, avoid loud conversation, music, or horseplay",
        "**Respect the Eternal Flame**: do not throw anything into the flame or cross barriers to touch it",
        "**Do not touch the monuments**: do not climb, sit on, or lean against the memorial wall — it is a solemn commemorative installation",
        "**Leave no trace**: take all rubbish with you and keep the plaza clean",
        "**Quiet photography**: photography is permitted, but please turn off your flash and shutter sound and avoid disturbing others who are paying their respects",
        "**Respect ceremonies**: if you encounter a memorial service in progress (especially around 2 April), keep a respectful distance and observe quietly"
      ]
    },
    architecture: {
      title: "Plaza Layout and Monument Ensemble",
      intro: "Though modest in size, Plaza Islas Malvinas is compactly and thoughtfully designed. Perched on the waterfront, its centrepiece is the black marble memorial wall, with other monuments arranged along the coastal walkway.",
      specs: {
        structure: { title: "Overall Layout", content: "The plaza adopts an open design facing the Beagle Channel. Three principal elements form its core: ① **Fallen Soldiers Memorial Wall** — a black marble wall listing the 649 fallen in alphabetical order; ② **Eternal Flame (Llama Eterna)** — a permanently burning torch placed directly before the memorial wall; ③ **Malvinas Islands Relief Map** — a large topographical representation of the archipelago set into the ground.\n\nFlagpoles carrying the Argentine national flag and the Tierra del Fuego provincial flag flank the plaza. Native hardy plants have been planted around the perimeter, blending the memorial into Ushuaia's coastal landscape." },
        design: { title: "Design Philosophy", content: `The plaza embodies the principle of **\u201Cmemory in harmony with nature\u201D**. The black memorial wall creates a stark visual contrast with the surrounding snow-capped mountains, symbolising the weight of war and the value of peace. The orange glow of the Eternal Flame stands out vividly in Ushuaia's often overcast climate, visible day and night.\n\nThe monument faces south — towards the Malvinas Islands. The designer deliberately aligned the plaza's main axis on a northeast–southwest orientation, so that as visitors stand before the memorial they naturally face the islands that hold such a powerful place in Argentine hearts.` },
        optics: { title: "Surrounding Environment", content: `The plaza sits directly on Ushuaia's coastal promenade (Costanera). After visiting, you can stroll along the Beagle Channel. Directly opposite the plaza is the **\u201CEspacio Pensar Malvinas\u201D** — a historical exhibition space run by Ushuaia Tourism that offers in-depth displays and official guided tours on the background of the Malvinas War. Nearby also stands the **Maritime Museum of Ushuaia (Museo Marítimo de Ushuaia)**.` }
      },
      plaque: {
        title: "Basic Information",
        items: [
          { label: "Name", value: "Plaza Islas Malvinas (Malvinas Square)" },
          { label: "Location", value: "Ushuaia, Tierra del Fuego, Argentina" },
          { label: "Commemorates", value: "Fallen soldiers of the 1982 Malvinas War" },
          { label: "Casualties", value: "649 Argentine servicemen" },
          { label: "Opening Hours", value: "Open 24 hours, year-round" },
          { label: "Admission", value: "Free (public space)" },
          { label: "Landmark Features", value: "Black marble memorial wall, Eternal Flame" }
        ]
      }
    },
    monuments: {
      title: "What to Experience at Plaza Islas Malvinas",
      intro: "Plaza Islas Malvinas blends solemn commemoration, deep historical education and Ushuaia's breathtaking natural scenery. The following experiences are appreciated by history enthusiasts, veterans' families and general visitors alike.",
      items: [
        { name: "Pay Respects at the Memorial Wall", description: "Approach the black marble wall and read through the 649 names. Each name represents a young life. We suggest pausing before the wall for a moment of silence in tribute to the soldiers who gave their lives. Many visitors leave a flower or a small flag." },
        { name: "Contemplate the Eternal Flame", description: "Day or night, the Eternal Flame burns in Ushuaia's sea breeze. The fire is particularly moving against the backdrop of black marble. Maintain a respectful distance and quietly observe this undying flame of remembrance and the national memory it carries." },
        { name: "Visit 'Espacio Pensar Malvinas' Exhibition", description: "Adjacent to the plaza, the Espacio Pensar Malvinas is a free exhibition space managed by Ushuaia Tourism. Through photographs, artefacts, maps and audiovisual materials, it offers an in-depth exploration of the 1982 war's historical background and the islands' geography and culture." },
        { name: "Stroll Along the Coastal Promenade", description: "After visiting the plaza, walk along Ushuaia's waterfront Costanera. The Beagle Channel offers stunning views — the Darwin Range of Chile rises on the distant shore, and sea lions and albatrosses can often be spotted. It is the perfect transition from solemn history back to the present moment." }
      ]
    },
    contrast: {
      title: "Solemn Monument & Majestic Channel",
      intro: "The power of Plaza Islas Malvinas lies at the intersection of profound human memory and sublime natural beauty. On one side, 649 names on black marble; on the other, the eternal ebb and flow of the Beagle Channel — two images below capture this encounter between gravity and eternity.",
      before: "Solemn Memorial",
      after: "Beagle Channel Vista"
    },
    visiting: {
      title: "Plan Your Visit",
      intro: "As a public open space, Plaza Islas Malvinas is open year-round and completely free. Whether you are visiting specifically to pay respects or stopping by during your Ushuaia travels, the following information will help you plan a meaningful visit.",
      hours: { title: "Opening Hours", content: "**Open 24 hours a day**, year-round.\nAs a public urban space, the plaza has no fences or access restrictions.\nBasic lighting is provided at night, and the Eternal Flame is visible around the clock.", note: "In the days around 2 April the plaza may become extremely crowded due to commemorative events — plan ahead." },
      price: { title: "Admission", content: "**Completely free**.\nThe plaza is a public space belonging to the city of Ushuaia; no admission fee is charged.\nThe adjacent 'Espacio Pensar Malvinas' exhibition is also free of charge.", note: "A freely accessible memorial space — please visit with respect and gratitude." },
      duration: { title: "Suggested Duration", content: "Memorial wall + Eternal Flame + photos: about **20–30 minutes**.\nIncluding the 'Espacio Pensar Malvinas' exhibition: allow **30–45 minutes** extra.\nCoastal promenade walk + Beagle Channel views: flexible.", note: "Can be combined with the Ushuaia Maritime Museum and Museo del Fin del Mundo for a half-day itinerary." },
      tips: { title: "Travel Tips & Notes", items: [
        "**Dress warmly**: Ushuaia has cool temperatures year-round (summer avg ~10°C, winter ~0°C) with strong sea winds — wear windproof clothing",
        "**Rain gear**: Tierra del Fuego weather is changeable; carry rain protection even on clear days",
        "**Respect the memorial**: approach the plaza as you would a memorial site; avoid overly casual or entertainment-style photography",
        "**Walkable**: the plaza is on Ushuaia's downtown waterfront, within walking distance of most city-centre hotels",
        "**Photo tip**: early morning or late afternoon light is best for photographing the monument with the Beagle Channel backdrop"
      ] },
      essentials: [
        { icon: "🧥", title: "Stay Warm", text: "Ushuaia is chilly year-round with strong winds — wear windproof clothing even in summer." },
        { icon: "🌧️", title: "Rain-Ready", text: "Tierra del Fuego weather is unpredictable; always carry rain gear." },
        { icon: "🕊️", title: "Stay Solemn", text: "This is a war memorial — keep your voice low, avoid horseplay, and respect those paying respects." },
        { icon: "📸", title: "Respectful Photos", text: "Photography is allowed, but turn off flash and shutter sounds; do not climb on monuments for poses." }
      ]
    },
    transportation: {
      title: "Precise Transportation Guide",
      airport: { title: "✈️ From Ushuaia Airport", content: "Ushuaia Malvinas Argentinas International Airport (USH) is just 4 km from the city centre. Getting to Plaza Islas Malvinas from the airport is very straightforward.", options: [
        { name: "Taxi / Uber (Recommended)", price: "approx. 10–15 min", time: "4 km", steps: ["Take a taxi or ride-share from the airport exit", "Follow National Route 3 (RN-3) north into the city", "Tell the driver you're going to 'Plaza Islas Malvinas' or 'Monumento a los Caídos en Malvinas'", "You'll arrive in about 10–15 minutes"] }
      ]},
      city: { title: "🏘️ On Foot from Downtown Ushuaia", content: "Plaza Islas Malvinas sits along Ushuaia's downtown **waterfront promenade (Costanera)**. From the main street, Avenida San Martín, it is a pleasant **5–10 minute walk**.", steps: ["From Av. San Martín, walk south towards the waterfront", "Reach the coastal promenade (Costanera) and turn right (west)", "Walk about 300 metres — you'll soon see the Argentine flag and the Eternal Flame", "The plaza entrance is directly on the promenade"] },
      tips: { title: "Transport Tips", items: [
        "Ushuaia's downtown is compact — **almost all city-centre hotels are within walking distance of the plaza**",
        "If staying in outlying areas (e.g. hillside hotels), take a taxi or local bus",
        "Ushuaia Airport (USH) has direct flights to Buenos Aires (AEP/EZE), flight time approx. 3.5 hours",
        "Driving from Buenos Aires to Ushuaia is about 3,000 km — flying is strongly recommended",
        "Ushuaia is also a major departure port for Antarctica; numerous Antarctic cruises call here from November to March"
      ] }
    },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps", categories: [ { key: "memorial", label: "Memorial" }, { key: "flame", label: "Eternal Flame" }, { key: "plaza", label: "Plaza Views" }, { key: "beagle", label: "Channel Views" } ] },
    reviews: {
      title: "Visitor Reviews & Nearby Exploration",
      subtitle: "Voices from Plaza Islas Malvinas: Real Google Maps Testimonies",
      viewMore: "View More Reviews on Google Maps",
      nearbyTitle: "Nearby Attractions Worth Visiting",
      nearbyIntro: "After visiting Plaza Islas Malvinas, you can easily explore the following nearby destinations:",
      nearbyItems: [
        { name: "Museo del Fin del Mundo (End of the World Museum)", description: "About a 10-minute walk from the plaza. Showcases the natural history and indigenous cultures of Tierra del Fuego — the best place to understand Ushuaia's past and present." },
        { name: "Maritime Museum of Ushuaia (Museo Marítimo de Ushuaia)", description: "Housed in the former prison building, featuring exhibitions on Ushuaia's penal-colony history, Antarctic exploration, and a dedicated section on the Malvinas War." },
        { name: "Tierra del Fuego National Park (Parque Nacional Tierra del Fuego)", description: "About 12 km from the city, Argentina's southernmost national park. Ride the End of the World Train (Tren del Fin del Mundo) into the park and enjoy pristine forests and Beagle Channel views." }
      ]
    },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn More About Plaza Islas Malvinas", items: [
      { question: "What is Plaza Islas Malvinas?", answer: "Plaza Islas Malvinas (Malvinas Islands Square) is located on the Beagle Channel waterfront in Ushuaia, Argentina. It is one of the country's most important memorials to the 1982 Malvinas/Falklands War. The plaza features a black marble memorial wall inscribed with the names of 649 Argentine soldiers who perished in the war, with an eternal flame burning before it." },
      { question: "Is there an entrance fee? What are the opening hours?", answer: "Plaza Islas Malvinas is a **public open space** belonging to the city of Ushuaia. It is completely free of charge and requires no ticket. The plaza is open **24 hours a day, year-round**, with night-time lighting. The area can become extremely crowded around 2 April (Malvinas Day), so plan accordingly." },
      { question: "What should I keep in mind when visiting?", answer: "This is a war memorial — please maintain silence and respect the monument installations. Do not climb on the memorial wall or cross the Eternal Flame barriers. Turn off your camera flash. Ushuaia's weather is changeable — dress warmly in windproof clothing. Dogs are allowed but must be on a leash." },
      { question: "How do I get to Ushuaia from Buenos Aires?", answer: "Fly from Buenos Aires to Ushuaia Malvinas Argentinas International Airport (USH), a flight of about 3.5 hours. From the airport, take a taxi or ride-share about 10–15 minutes (4 km) to reach Plaza Islas Malvinas downtown. Long-distance buses also connect Ushuaia with other Argentine cities, though the journey from Buenos Aires takes about 36 hours." },
      { question: "What is the 'Espacio Pensar Malvinas'?", answer: "The 'Espacio Pensar Malvinas' (Thinking Malvinas Space) is a free exhibition space adjacent to the plaza, managed by Ushuaia Municipal Tourism. Through photographs, artefacts, maps and audiovisual materials, it offers an in-depth exploration of the 1982 war's historical background, geography and cultural significance. Check turismoushuaia.com for opening hours." }
    ]},
    location: { title: "Map Location", address: "Patagonia 48, V9410\nUshuaia, Tierra del Fuego\nArgentina", openMaps: "View on Google Maps" },
    footer: { callToAction: "Plaza Islas Malvinas stands as a vital carrier of Argentina's national memory. Six hundred and forty-nine names, one eternal flame — silently guarding the waters of the South Atlantic. Please join us in visiting this place with the deepest respect, so that history may live on in memory.", text: "© 2026 Plaza Islas Malvinas Guide · All rights reserved.\nThis website is an independent third-party non-profit educational guide dedicated to sharing accurate information about Plaza Islas Malvinas. We are not affiliated with the Argentine government, the Tierra del Fuego provincial government, or any official institution.", made: "This is an independent non-profit educational project, created for history enthusiasts, travellers, and all who cherish peace.", linksTitle: "Friendly Links", links: LINKS_BY_LOCALE.en },
    siteMap: {
      title: "Interactive Plaza Map",
      intro: "Hover over (or tap) the markers on the map below to explore the five core areas of Plaza Islas Malvinas.",
      hint: "Hover to preview · Tap to pin",
      cta: "View the full plaza guide",
      zones: [
        { key: "cenotafio", name: "Fallen Soldiers Memorial Wall (Cenotafio)", desc: "Black marble wall listing the 649 fallen in alphabetical order — the plaza's central memorial installation." },
        { key: "llama", name: "Eternal Flame (Llama Eterna)", desc: "Permanently burning torch before the memorial wall, symbolising undying remembrance of the fallen." },
        { key: "banderas", name: "Flag Square (Mástiles)", desc: "Argentine national flag and Tierra del Fuego provincial flag — the main venue for 2 April ceremonies." },
        { key: "mapa", name: "Islands Relief Map (Mapa Relieve)", desc: "Large topographical relief of the Malvinas archipelago set into the ground, showing the islands' geography." },
        { key: "costanera", name: "Coastal Promenade (Costanera)", desc: "Waterfront walkway along the Beagle Channel, connecting the plaza to other city attractions — perfect for a seaside stroll." }
      ]
    },
    itinerary: {
      title: "Suggested Visit Itinerary",
      intro: "Half an hour is enough for the core memorial visit. Use the timeline below as a guide and adjust to your own pace.",
      steps: [
        { time: "Arrival", title: "Arrive at the Plaza", text: "Walk from downtown Ushuaia along the Costanera; take in the full view of the plaza and Beagle Channel from the entrance." },
        { time: "+5 min", title: "Pay Respects at the Memorial Wall", text: "Approach the black marble wall, quietly read the names of the fallen, leave a flower or observe a moment of silence." },
        { time: "+15 min", title: "Contemplate the Eternal Flame", text: "Pause before the Eternal Flame and take in the national memory this undying fire represents." },
        { time: "+20 min", title: "Visit the Exhibition Space", text: "Visit 'Espacio Pensar Malvinas' (if open) for a deeper understanding of the 1982 war's historical context." },
        { time: "+50 min", title: "Stroll Along the Waterfront", text: "Walk along the Costanera, enjoy Beagle Channel views and gaze at the snow-capped Darwin Range in the distance." }
      ]
    },
    ctaBand: {
      title: "Plan Your Trip to Ushuaia",
      subtitle: "From the gateway to Antarctica to the end of the world — make your visit to Plaza Islas Malvinas the most meaningful stop on your journey.",
      buttons: ["Visit Info & Hours", "Book an Official Guide", "View Location on Maps"]
    }
  },
  es: {
    nav: { history: "Historia y Memoria", architecture: "Plaza y Monumentos", monuments: "Qué Experimentar", eco: "Etiqueta del Visitante", visiting: "Info de Visita", transportation: "Transporte", gallery: "Galería", reviews: "Reseñas", faq: "FAQ", location: "Ubicación" },
    hero: {
      tags: ["Monumento de Guerra", "Abierto 24 Horas", "Permitido Perros"],
      tagline: "Argentina · Tierra del Fuego · Ushuaia",
      title: "Plaza Islas Malvinas",
      subtitle: "Monumento a los Caídos · Llama Eterna · Fin del Mundo",
      cta: "Descubrí Este Lugar de Memoria",
      description: {
        address: "Patagonia 48, V9410 Ushuaia, Tierra del Fuego, Argentina",
        phone: "",
        category: "Parque · Monumento de Guerra"
      }
    },
    rating: { reviews: "reseñas", source: "Google Reseñas" },
    history: {
      title: "Historia y Memoria de la Plaza Islas Malvinas",
      intro: `La Plaza Islas Malvinas se alza a orillas del **Canal Beagle** en Ushuaia, Provincia de Tierra del Fuego, Argentina. Es uno de los memoriales más importantes y simbólicos del país dedicados a la Guerra de Malvinas.\n\n**La Guerra de Malvinas de 1982**\nEntre el 2 de abril y el 14 de junio de 1982, Argentina y el Reino Unido libraron la Guerra de Malvinas, que duró **74 días**. El conflicto causó la muerte de **649 militares argentinos** y 255 militares británicos. Desde el fin de la guerra, Argentina ha mantenido su reclamo de soberanía sobre las Islas Malvinas, Georgias del Sur y Sándwich del Sur por la vía diplomática.\n\n**El Estatus Especial de Ushuaia**\nDentro de la estructura administrativa argentina, Ushuaia es la capital de la **Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur**. Según la legislación argentina, Ushuaia es designada nominalmente como capital de las Islas Malvinas, lo que otorga a esta "ciudad más austral del mundo" un papel político y emocional insustituible en la cuestión Malvinas.\n\n**La Creación y el Significado de la Plaza**\nLa Plaza Islas Malvinas se construyó en el centro de Ushuaia, sobre la costanera del Canal Beagle. Su elemento central es un **muro de mármol negro** donde están grabados los nombres de los **649 soldados argentinos** caídos en la guerra. Frente al muro arde la **Llama Eterna** — una antorcha permanentemente encendida que simboliza el recuerdo imperecedero. La plaza también exhibe las banderas argentina y fueguina, y un gran mapa en relieve de las Islas Malvinas incrustado en el suelo.\n\n**El 2 de Abril — Día del Veterano**\nCada 2 de abril, Argentina conmemora el **"Día del Veterano y de los Caídos en la Guerra de Malvinas"**. Ese día, miles de excombatientes, familiares de los caídos y ciudadanos comunes viajan desde todo el país a esta plaza para una vigilia de toda la noche y ceremonias solemnes — manteniendo viva la memoria de la guerra y de las jóvenes vidas perdidas en ella.`
    },
    myths: {
      title: "Simbolismo y Memoria Colectiva",
      intro: "La Plaza Islas Malvinas es más que un espacio físico — lleva una profunda carga emocional para la nación argentina. Estos tres temas ayudan a comprender el simbolismo más profundo de este memorial.",
      items: [
        {
          title: "La Llama Eterna: Un Fuego Que Nunca Se Apaga",
          content: "La Llama Eterna en el corazón de la plaza es el elemento más conmovedor del memorial de Malvinas. Desde su encendido, jamás se ha apagado — ardiendo a través de la nieve, el frío intenso y la oscuridad en la costanera ventosa de Ushuaia.\n\nLa llama simboliza más que el duelo por los caídos — transmite una convicción más profunda: que el reclamo argentino de soberanía sobre las Islas Malvinas nunca ha cesado. Como dicen los locales: 'Mientras la llama arda, no olvidaremos.'\n\nDurante la vigilia del 2 de abril, los veteranos y familiares de los caídos permanecen en silencio alrededor de la llama eterna durante toda la noche, custodiando este fuego imperecedero de la memoria."
        },
        {
          title: "El Fin del Mundo Bajo la Cruz del Sur",
          content: "Ushuaia es conocida como la ciudad más austral del mundo (La Ciudad Más Austral del Mundo), y la Plaza Islas Malvinas se sitúa en la costanera de esta ciudad fronteriza. Desde la plaza se contemplan las aguas profundas del Canal Beagle hacia la Cordillera Darwin nevada en Chile.\n\nGeográficamente, la ubicación del monumento es en sí misma profundamente simbólica. Los soldados argentinos caídos en Malvinas provenían de cada rincón del país; sus vidas terminaron en las aguas heladas del Atlántico Sur. Ushuaia — esta \"ciudad del fin del mundo\" — es el hogar más cercano que tienen.\n\nLa plaza se alza como un guardián silencioso, mirando hacia el sur, hacia las islas que los argentinos llaman \"las Malvinas\"."
        },
        {
          title: "649 Nombres: La Historia Detrás de Cada Piedra",
          content: "Cada uno de los 649 nombres grabados en el muro de mármol negro representa a una persona real, que alguna vez vivió. Entre ellos había conscriptos de 18 años, pilotos, infantes de marina y oficiales.\n\nMuchas familias argentinas viajan cada año desde las provincias del interior a Ushuaia para encontrar el nombre de su ser querido en el muro, dejando una flor o una pequeña bandera. Para los familiares de los caídos, esta plaza es el lugar más cercano que pueden estar a sus seres queridos — porque desde aquí, mirando al sur, las Islas Malvinas están justo al otro lado del mar.\n\nLa plaza se ha convertido así en un espacio vital de sanación para el trauma nacional argentino — un lugar donde el dolor personal y la memoria colectiva nacional convergen."
        }
      ]
    },
    curiosities: {
      title: "Viñetas Culturales y Notas Históricas",
      content: `**"Las Malvinas son argentinas"**\nEsta frase es omnipresente en Argentina. Desde murales callejeros en Buenos Aires hasta banderas en partidos de fútbol, desde libros escolares hasta documentos oficiales, es uno de los lemas más centrales de la identidad nacional argentina moderna. La Plaza Islas Malvinas de Ushuaia es la expresión física más solemne de este sentimiento colectivo.\n\n**La Vigilia del 2 de Abril**\nCada año, desde la noche del 1° de abril hasta la madrugada del 2 de abril, la Plaza acoge la "Vigilia de Malvinas" más importante del país. Organizaciones de excombatientes montan un escenario, proyectan documentales y los veteranos comparten sus experiencias personales. A medianoche, al sonar las campanadas del 2 de abril, se guarda un minuto de silencio antes de entonar el himno nacional.\n\n**La Complejidad Histórica del Canal Beagle**\nEl Canal Beagle, en cuyas orillas se asienta Ushuaia, fue en su momento un punto álgido de disputa territorial entre Argentina y Chile. En 1978 ambos países estuvieron al borde de la guerra, evitada gracias a la mediación papal de Juan Pablo II, que culminó en el Tratado de Paz y Amistad de 1984. La Plaza Islas Malvinas, frente al Beagle, también da testimonio de la compleja historia internacional del extremo sur sudamericano.\n\n**Perros en la Plaza**\nLa Plaza Islas Malvinas es uno de los pocos espacios públicos de Ushuaia donde se permiten perros expresamente. Muchos vecinos pasean a sus perros por la plaza a diario, integrando el solemne memorial en la vida cotidiana de la ciudad. Algunos dicen que ésta es precisamente la genialidad de la plaza — es al mismo tiempo un espacio sagrado de recuerdo y una plaza pública viva y palpitante.`
    },
    eco: {
      title: "Etiqueta del Visitante y Respeto",
      intro: "La Plaza Islas Malvinas es uno de los memoriales de guerra más importantes de Argentina. Como guía educativa independiente sin fines de lucro, pedimos a todos los visitantes que traten este espacio sagrado con el máximo respeto.",
      items: [
        "**Mantener silencio**: éste es un memorial a los caídos — mantener la voz baja, evitar conversaciones en voz alta, música o juegos",
        "**Respetar la Llama Eterna**: no arrojar nada al fuego ni cruzar las barreras para tocarla",
        "**No tocar los monumentos**: no trepar, sentarse ni apoyarse en el muro conmemorativo — es una instalación solemne",
        "**No dejar rastro**: llevarse toda la basura y mantener la plaza limpia",
        "**Fotografía silenciosa**: se permite fotografiar, pero apagar el flash y el sonido del obturador; no molestar a quienes están rindiendo homenaje",
        "**Respetar las ceremonias**: si se encuentra con un acto conmemorativo en curso (especialmente en torno al 2 de abril), mantener una distancia respetuosa y observar en silencio"
      ]
    },
    architecture: {
      title: "Distribución de la Plaza y Conjunto Monumental",
      intro: "Aunque de dimensiones modestas, la Plaza Islas Malvinas tiene un diseño compacto y lleno de significado. Asomada a la costanera, su pieza central es el muro de mármol negro, con otros monumentos distribuidos a lo largo del paseo costero.",
      specs: {
        structure: { title: "Distribución General", content: "La plaza adopta un diseño abierto frente al Canal Beagle. Tres elementos principales forman su núcleo: ① **Muro Conmemorativo de los Caídos** — muro de mármol negro con los 649 nombres en orden alfabético; ② **Llama Eterna** — antorcha permanentemente encendida situada directamente frente al muro; ③ **Mapa en Relieve de las Islas Malvinas** — gran representación topográfica del archipiélago incrustada en el suelo.\n\nMástiles con la bandera argentina y la bandera provincial fueguina flanquean la plaza. Se han plantado especies vegetales autóctonas resistentes alrededor del perímetro, integrando el memorial en el paisaje costero de Ushuaia." },
        design: { title: "Filosofía de Diseño", content: `La plaza encarna el principio de **\u201Cmemoria en armonía con la naturaleza\u201D**. El muro de mármol negro crea un contraste visual intenso con las montañas nevadas del entorno, simbolizando el peso de la guerra y el valor de la paz. El resplandor anaranjado de la Llama Eterna destaca vívidamente en el clima frecuentemente nublado de Ushuaia, visible día y noche.\n\nEl monumento mira hacia el sur — hacia las Islas Malvinas. El diseñador alineó deliberadamente el eje principal de la plaza en orientación noreste–suroeste, de modo que los visitantes, al situarse frente al memorial, miren naturalmente hacia las islas que ocupan un lugar tan poderoso en el corazón argentino.` },
        optics: { title: "Entorno Circundante", content: `La plaza se sitúa directamente sobre la costanera de Ushuaia. Tras la visita, se puede pasear junto al Canal Beagle. Justo enfrente de la plaza se encuentra el **\u201CEspacio Pensar Malvinas\u201D** — sala de exposiciones históricas gestionada por Turismo Ushuaia que ofrece muestras en profundidad y visitas guiadas oficiales sobre el trasfondo de la Guerra de Malvinas. Cerca también se halla el **Museo Marítimo de Ushuaia**.` }
      },
      plaque: {
        title: "Información Básica",
        items: [
          { label: "Nombre", value: "Plaza Islas Malvinas" },
          { label: "Ubicación", value: "Ushuaia, Tierra del Fuego, Argentina" },
          { label: "Conmemora", value: "Caídos en la Guerra de Malvinas de 1982" },
          { label: "Caídos", value: "649 militares argentinos" },
          { label: "Horario", value: "Abierto las 24 horas, todo el año" },
          { label: "Entrada", value: "Gratuita (espacio público)" },
          { label: "Elementos Emblemáticos", value: "Muro de mármol negro, Llama Eterna" }
        ]
      }
    },
    monuments: {
      title: "Qué Hacer en la Plaza Islas Malvinas",
      intro: "La Plaza Islas Malvinas conjuga conmemoración solemne, profunda educación histórica y el impresionante paisaje natural de Ushuaia. Las siguientes experiencias son apreciadas por aficionados a la historia, familiares de veteranos y visitantes en general.",
      items: [
        { name: "Rendir Homenaje en el Muro Conmemorativo", description: "Acercarse al muro de mármol negro y leer los 649 nombres. Cada nombre representa una vida joven. Sugerimos hacer una pausa ante el muro para un momento de silencio en homenaje a los soldados que dieron su vida. Muchos visitantes dejan una flor o una pequeña bandera." },
        { name: "Contemplar la Llama Eterna", description: "De día o de noche, la Llama Eterna arde en la brisa marina de Ushuaia. El fuego es particularmente conmovedor contra el fondo de mármol negro. Mantener una distancia respetuosa y observar en silencio esta llama imperecedera del recuerdo y la memoria nacional que representa." },
        { name: "Visitar el Espacio Pensar Malvinas", description: "Junto a la plaza, el Espacio Pensar Malvinas es una sala de exposiciones gratuita gestionada por Turismo Ushuaia. Mediante fotografías, objetos, mapas y material audiovisual, ofrece una exploración en profundidad del contexto histórico de la guerra de 1982 y de la geografía y cultura de las islas." },
        { name: "Pasear por la Costanera", description: "Tras visitar la plaza, caminar por la costanera de Ushuaia. El Canal Beagle ofrece vistas imponentes — la Cordillera Darwin chilena se alza en la orilla lejana, y es frecuente avistar lobos marinos y albatros. Es la transición perfecta de la historia solemne al momento presente." }
      ]
    },
    contrast: {
      title: "Monumento Solemne y Canal Majestuoso",
      intro: "La fuerza de la Plaza Islas Malvinas reside en la intersección entre la profunda memoria humana y la sublime belleza natural. De un lado, 649 nombres sobre mármol negro; del otro, el eterno flujo y reflujo del Canal Beagle — dos imágenes capturan este encuentro entre la gravedad y la eternidad.",
      before: "Monumento Solemne",
      after: "Vista del Canal Beagle"
    },
    visiting: {
      title: "Planificá Tu Visita",
      intro: "Como espacio público abierto, la Plaza Islas Malvinas está abierta todo el año y es completamente gratuita. Ya sea que la visites específicamente para rendir homenaje o como parte de tu recorrido por Ushuaia, la siguiente información te ayudará a planificar una visita significativa.",
      hours: { title: "Horarios", content: "**Abierto las 24 horas**, todo el año.\nComo espacio público urbano, la plaza no tiene rejas ni restricciones de acceso.\nCuenta con iluminación básica nocturna, y la Llama Eterna es visible durante toda la noche.", note: "En los días cercanos al 2 de abril la plaza puede estar extremadamente concurrida por actos conmemorativos — planificar con anticipación." },
      price: { title: "Entrada", content: "**Completamente gratuita**.\nLa plaza es un espacio público de la ciudad de Ushuaia; no se cobra entrada.\nEl Espacio Pensar Malvinas adyacente también es de acceso libre y gratuito.", note: "Un espacio conmemorativo de libre acceso — visitar con respeto y gratitud." },
      duration: { title: "Duración Sugerida", content: "Muro conmemorativo + Llama Eterna + fotos: unas **20–30 minutos**.\nIncluyendo el Espacio Pensar Malvinas: agregar **30–45 minutos**.\nPaseo por la costanera + vistas del Canal Beagle: libre.", note: "Se puede combinar con el Museo Marítimo de Ushuaia y el Museo del Fin del Mundo para un recorrido de medio día." },
      tips: { title: "Consejos y Recomendaciones", items: [
        "**Abrigarse**: Ushuaia tiene temperaturas frescas todo el año (promedio en verano ~10°C, invierno ~0°C) con fuertes vientos marinos — usar ropa cortaviento",
        "**Prepararse para la lluvia**: el clima fueguino es cambiante; llevar protección para lluvia incluso en días despejados",
        "**Respetar el memorial**: acercarse a la plaza como se haría a un memorial; evitar fotografías demasiado informales o de entretenimiento",
        "**Caminable**: la plaza está en la costanera céntrica de Ushuaia, a distancia peatonal de la mayoría de los hoteles del centro",
        "**Consejo fotográfico**: la luz de la mañana temprano o del atardecer es la mejor para fotografiar el monumento con el Canal Beagle de fondo"
      ] },
      essentials: [
        { icon: "🧥", title: "Abrigarse", text: "Ushuaia es fresca todo el año con fuertes vientos — usar ropa cortaviento incluso en verano." },
        { icon: "🌧️", title: "Lluvia", text: "El clima fueguino es impredecible; llevar siempre protección para lluvia." },
        { icon: "🕊️", title: "Solemnidad", text: "Es un memorial de guerra — mantener la voz baja, evitar juegos, respetar a quienes rinden homenaje." },
        { icon: "📸", title: "Fotos Respetuosas", text: "Se permite fotografiar, pero apagar flash y sonido; no trepar a los monumentos para posar." }
      ]
    },
    transportation: {
      title: "Guía de Transporte Precisa",
      airport: { title: "✈️ Desde el Aeropuerto de Ushuaia", content: "El Aeropuerto Internacional Malvinas Argentinas de Ushuaia (USH) está a solo 4 km del centro. Llegar a la Plaza Islas Malvinas desde el aeropuerto es muy sencillo.", options: [
        { name: "Taxi / Uber (Recomendado)", price: "aprox. 10–15 min", time: "4 km", steps: ["Tomar un taxi o remís desde la salida del aeropuerto", "Seguir por la Ruta Nacional 3 (RN-3) hacia el norte hasta la ciudad", "Indicar al conductor 'Plaza Islas Malvinas' o 'Monumento a los Caídos en Malvinas'", "Se llega en unos 10–15 minutos"] }
      ]},
      city: { title: "🏘️ A Pie desde el Centro de Ushuaia", content: "La Plaza Islas Malvinas se encuentra sobre la **costanera** del centro de Ushuaia. Desde la calle principal, Avenida San Martín, es una agradable caminata de **5–10 minutos**.", steps: ["Desde Av. San Martín caminar hacia el sur en dirección a la costa", "Llegar a la costanera y girar a la derecha (hacia el oeste)", "Caminar unos 300 metros — pronto se verán la bandera argentina y la Llama Eterna", "La entrada a la plaza está directamente sobre la costanera"] },
      tips: { title: "Consejos de Transporte", items: [
        "El centro de Ushuaia es compacto — **casi todos los hoteles céntricos están a distancia peatonal de la plaza**",
        "Si se aloja en zonas alejadas (ej. hoteles en la ladera), tomar un taxi o colectivo local",
        "El Aeropuerto de Ushuaia (USH) tiene vuelos directos a Buenos Aires (AEP/EZE), duración aprox. 3,5 horas",
        "Conducir desde Buenos Aires a Ushuaia son unos 3.000 km — se recomienda volar",
        "Ushuaia también es un importante puerto de partida hacia la Antártida; numerosos cruceros antárticos recalan aquí de noviembre a marzo"
      ] }
    },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más Fotos en Google Maps", categories: [ { key: "memorial", label: "Monumento" }, { key: "flame", label: "Llama Eterna" }, { key: "plaza", label: "Vistas de la Plaza" }, { key: "beagle", label: "Vistas del Canal" } ] },
    reviews: {
      title: "Reseñas de Visitantes y Exploración Cercana",
      subtitle: "Voces de la Plaza Islas Malvinas: Testimonios Reales de Google Maps",
      viewMore: "Ver Más Reseñas en Google Maps",
      nearbyTitle: "Atracciones Cercanas que Vale la Pena Visitar",
      nearbyIntro: "Después de visitar la Plaza Islas Malvinas, podés explorar fácilmente los siguientes destinos cercanos:",
      nearbyItems: [
        { name: "Museo del Fin del Mundo", description: "A unos 10 minutos a pie de la plaza. Exhibe la historia natural y las culturas originarias de Tierra del Fuego — el mejor lugar para entender el pasado y presente de Ushuaia." },
        { name: "Museo Marítimo de Ushuaia", description: "Ubicado en el edificio del ex Presidio, con exhibiciones sobre la historia penal de Ushuaia, la exploración antártica y una sección dedicada a la Guerra de Malvinas." },
        { name: "Parque Nacional Tierra del Fuego", description: "A unos 12 km de la ciudad, el parque nacional más austral de Argentina. Se puede tomar el Tren del Fin del Mundo para ingresar al parque y disfrutar de bosques prístinos y vistas del Canal Beagle." }
      ]
    },
    faq: { title: "Preguntas Frecuentes", subtitle: "Conocé Más Sobre la Plaza Islas Malvinas", items: [
      { question: "¿Qué es la Plaza Islas Malvinas?", answer: "La Plaza Islas Malvinas está ubicada sobre la costanera del Canal Beagle en Ushuaia, Argentina. Es uno de los memoriales más importantes del país dedicados a la Guerra de Malvinas de 1982. La plaza presenta un muro de mármol negro con los nombres de 649 soldados argentinos caídos en la guerra, con una Llama Eterna ardiendo frente a él." },
      { question: "¿Se cobra entrada? ¿Cuáles son los horarios?", answer: "La Plaza Islas Malvinas es un **espacio público** perteneciente a la ciudad de Ushuaia. Es completamente gratuita y no requiere entrada. La plaza está abierta **las 24 horas del día, todo el año**, con iluminación nocturna. En los días cercanos al 2 de abril (Día de Malvinas) la zona puede estar muy concurrida." },
      { question: "¿Qué debo tener en cuenta al visitar?", answer: "Es un memorial de guerra — mantener silencio y respetar las instalaciones monumentales. No trepar al muro conmemorativo ni cruzar las barreras de la Llama Eterna. Apagar el flash de la cámara. El clima de Ushuaia es cambiante — vestir ropa de abrigo cortaviento. Se permiten perros con correa." },
      { question: "¿Cómo llego a Ushuaia desde Buenos Aires?", answer: "Volar desde Buenos Aires al Aeropuerto Internacional Malvinas Argentinas de Ushuaia (USH), un vuelo de aproximadamente 3,5 horas. Desde el aeropuerto, tomar un taxi unos 10–15 minutos (4 km) hasta la Plaza Islas Malvinas en el centro. También hay ómnibus de larga distancia, aunque el viaje desde Buenos Aires demora unas 36 horas." },
      { question: "¿Qué es el Espacio Pensar Malvinas?", answer: "El Espacio Pensar Malvinas es una sala de exposiciones gratuita adyacente a la plaza, gestionada por Turismo Municipal de Ushuaia. A través de fotografías, objetos, mapas y material audiovisual, ofrece una exploración en profundidad del contexto histórico de la guerra de 1982 y la geografía y cultura de las islas. Consultar turismoushuaia.com para horarios." }
    ]},
    location: { title: "Ubicación", address: "Patagonia 48, V9410\nUshuaia, Tierra del Fuego\nArgentina", openMaps: "Ver en Google Maps" },
    footer: { callToAction: "La Plaza Islas Malvinas es un portador vital de la memoria nacional argentina. Seiscientos cuarenta y nueve nombres, una llama eterna — custodiando en silencio las aguas del Atlántico Sur. Sumate a nosotros para visitar este lugar con el más profundo respeto, para que la historia viva en la memoria.", text: "© 2026 Guía de Plaza Islas Malvinas · Todos los derechos reservados.\nEste sitio web es una guía educativa independiente sin fines de lucro dedicada a difundir información precisa sobre la Plaza Islas Malvinas. No estamos afiliados con el gobierno argentino, el gobierno provincial de Tierra del Fuego ni ninguna institución oficial.", made: "Este es un proyecto educativo independiente sin fines de lucro, creado para aficionados a la historia, viajeros y todos aquellos que valoran la paz.", linksTitle: "Enlaces Amigos", links: LINKS_BY_LOCALE.es },
    siteMap: {
      title: "Mapa Interactivo de la Plaza",
      intro: "Pasá el cursor (o tocá) sobre los marcadores del mapa para explorar las cinco áreas centrales de la Plaza Islas Malvinas.",
      hint: "Pasá el cursor · Tocá para fijar",
      cta: "Ver la guía completa de la plaza",
      zones: [
        { key: "cenotafio", name: "Muro de los Caídos (Cenotafio)", desc: "Muro de mármol negro con los 649 nombres en orden alfabético — la instalación conmemorativa central de la plaza." },
        { key: "llama", name: "Llama Eterna", desc: "Antorcha permanentemente encendida frente al muro conmemorativo, símbolo del recuerdo imperecedero de los caídos." },
        { key: "banderas", name: "Plaza de Banderas (Mástiles)", desc: "Bandera argentina y bandera provincial fueguina — sede principal de las ceremonias del 2 de abril." },
        { key: "mapa", name: "Mapa en Relieve de las Islas (Mapa Relieve)", desc: "Gran relieve topográfico del archipiélago de Malvinas incrustado en el suelo, mostrando la geografía isleña." },
        { key: "costanera", name: "Costanera", desc: "Paseo costero junto al Canal Beagle, que conecta la plaza con otros atractivos de la ciudad — ideal para caminar junto al mar." }
      ]
    },
    itinerary: {
      title: "Itinerario Sugerido",
      intro: "Media hora alcanza para la visita conmemorativa central. Usá la línea de tiempo como guía y ajustala a tu propio ritmo.",
      steps: [
        { time: "Llegada", title: "Llegar a la Plaza", text: "Caminar desde el centro de Ushuaia por la costanera; contemplar la vista completa de la plaza y el Canal Beagle desde la entrada." },
        { time: "+5 min", title: "Homenaje en el Muro", text: "Acercarse al muro de mármol negro, leer en silencio los nombres de los caídos, dejar una flor o guardar un minuto de silencio." },
        { time: "+15 min", title: "Contemplar la Llama Eterna", text: "Hacer una pausa ante la Llama Eterna y absorber la memoria nacional que este fuego imperecedero representa." },
        { time: "+20 min", title: "Visitar la Sala de Exposiciones", text: "Visitar el Espacio Pensar Malvinas (si está abierto) para una comprensión más profunda del contexto histórico de la guerra de 1982." },
        { time: "+50 min", title: "Pasear por la Costanera", text: "Caminar por la costanera, disfrutar de las vistas del Canal Beagle y contemplar la Cordillera Darwin nevada a lo lejos." }
      ]
    },
    ctaBand: {
      title: "Planificá tu Viaje a Ushuaia",
      subtitle: "Desde la puerta de entrada a la Antártida hasta el fin del mundo — hacé de tu visita a la Plaza Islas Malvinas la parada más significativa de tu viaje.",
      buttons: ["Info de Visita y Horarios", "Reservá Guía Oficial", "Ver Ubicación en Maps"]
    }
  },
  it: {
    nav: { history: "Storia e Memoria", architecture: "Piazza e Monumenti", monuments: "Cosa Sperimentare", eco: "Etichetta del Visitatore", visiting: "Info Visita", transportation: "Trasporti", gallery: "Galleria", reviews: "Recensioni", faq: "FAQ", location: "Posizione" },
    hero: {
      tags: ["Memoriale di Guerra", "Aperto 24 Ore", "Accessibile ai Cani"],
      tagline: "Argentina · Terra del Fuoco · Ushuaia",
      title: "Plaza Islas Malvinas",
      subtitle: "Monumento ai Caduti · Fiamma Eterna · Fine del Mondo",
      cta: "Scopri Questo Luogo della Memoria",
      description: {
        address: "Patagonia 48, V9410 Ushuaia, Terra del Fuoco, Argentina",
        phone: "",
        category: "Parco · Memoriale di Guerra"
      }
    },
    rating: { reviews: "recensioni", source: "Recensioni Google" },
    history: {
      title: "Storia e Memoria della Plaza Islas Malvinas",
      intro: `La Plaza Islas Malvinas sorge sulle rive del **Canale di Beagle** a Ushuaia, Provincia della Terra del Fuoco, Argentina. È uno dei memoriali più importanti e simbolici del paese dedicati alla Guerra delle Malvinas.\n\n**La Guerra delle Malvinas del 1982**\nTra il 2 aprile e il 14 giugno 1982, Argentina e Regno Unito combatterono la Guerra delle Malvinas, durata **74 giorni**. Il conflitto causò la morte di **649 militari argentini** e 255 militari britannici. Dalla fine della guerra, l'Argentina ha costantemente perseguito la sua rivendicazione di sovranità sulle Isole Malvinas, Georgia del Sud e Sandwich Australi per via diplomatica.\n\n**Lo Status Speciale di Ushuaia**\nNell'assetto amministrativo argentino, Ushuaia è la capitale della **Provincia della Terra del Fuoco, Antartide e Isole dell'Atlantico del Sud**. Secondo la legge argentina, Ushuaia è designata nominalmente come capitale delle Isole Malvinas, conferendo a questa "città più australe del mondo" un ruolo politico ed emotivo insostituibile nella questione Malvinas.\n\n**La Creazione e il Significato della Piazza**\nLa Plaza Islas Malvinas è stata costruita nel centro di Ushuaia, sul lungomare del Canale di Beagle. Il suo elemento centrale è un **muro di marmo nero** su cui sono incisi i nomi dei **649 soldati argentini** caduti in guerra. Davanti al muro arde la **Fiamma Eterna (Llama Eterna)** — una torcia permanentemente accesa che simboleggia il ricordo imperituro. La piazza espone anche le bandiere argentina e fuegina, e una grande mappa in rilievo delle Isole Malvinas incastonata nel suolo.\n\n**Il 2 Aprile — Giorno dei Caduti delle Malvinas**\nOgni 2 aprile, l'Argentina commemora il **"Giorno del Veterano e dei Caduti nella Guerra delle Malvinas"**. In questa data, migliaia di ex combattenti, familiari dei caduti e cittadini comuni giungono da tutto il paese in questa piazza per una veglia notturna e cerimonie solenni — mantenendo viva la memoria della guerra e delle giovani vite perdute.`
    },
    myths: {
      title: "Simbolismo e Memoria Collettiva",
      intro: "La Plaza Islas Malvinas è più di uno spazio fisico — porta un profondo significato emotivo per la nazione argentina. Questi tre temi aiutano a comprendere il simbolismo più profondo di questo memoriale.",
      items: [
        {
          title: "La Fiamma Eterna: Un Fuoco Che Non Si Spegne Mai",
          content: "La Fiamma Eterna nel cuore della piazza è l'elemento più commovente del memoriale delle Malvinas. Dalla sua accensione, non si è mai spenta — ardendo attraverso neve, freddo intenso e oscurità sul lungomare ventoso di Ushuaia.\n\nLa fiamma simboleggia più del lutto per i caduti — trasmette una convinzione più profonda: che la rivendicazione argentina di sovranità sulle Isole Malvinas non sia mai cessata. Come dicono i locali: 'Finché la fiamma arde, non dimenticheremo.'\n\nDurante la veglia del 2 aprile, i veterani e i familiari dei caduti restano in silenzio intorno alla fiamma eterna per tutta la notte, custodendo questo fuoco imperituro della memoria."
        },
        {
          title: "La Fine del Mondo Sotto la Croce del Sud",
          content: "Ushuaia è conosciuta come la città più australe del mondo (La Ciudad Más Austral del Mundo), e la Plaza Islas Malvinas si trova sul lungomare di questa città di frontiera. Dalla piazza si ammirano le acque profonde del Canale di Beagle verso la Cordigliera Darwin innevata in Cile.\n\nGeograficamente, la posizione del monumento è di per sé profondamente simbolica. I soldati argentini caduti alle Malvinas provenivano da ogni angolo del paese; le loro vite terminarono nelle acque gelide dell'Atlantico Meridionale. Ushuaia — questa \"città alla fine del mondo\" — è la casa più vicina che hanno.\n\nLa piazza si erge come un guardiano silenzioso, rivolto a sud, verso le isole che gli argentini chiamano \"le Malvinas\"."
        },
        {
          title: "649 Nomi: La Storia Dietro Ogni Pietra",
          content: "Ognuno dei 649 nomi incisi sul muro di marmo nero rappresenta una persona reale, che un tempo visse. Tra loro c'erano coscritti di 18 anni, piloti, fanti di marina e ufficiali.\n\nMolte famiglie argentine viaggiano ogni anno dalle province dell'interno a Ushuaia per trovare il nome del proprio caro sul muro, lasciando un fiore o una piccola bandiera. Per i familiari dei caduti, questa piazza è il luogo più vicino in cui possono stare ai loro cari — perché da qui, guardando a sud, le Isole Malvinas sono proprio al di là del mare.\n\nLa piazza è così diventata uno spazio vitale di guarigione per il trauma nazionale argentino — un luogo dove il dolore personale e la memoria collettiva nazionale convergono."
        }
      ]
    },
    curiosities: {
      title: "Vignette Culturali e Note Storiche",
      content: `**"Las Malvinas son argentinas"**\n"Le Malvinas sono argentine" — questa frase è onnipresente in Argentina. Dai murales di strada a Buenos Aires agli striscioni alle partite di calcio, dai libri scolastici ai documenti ufficiali, è uno degli slogan più centrali dell'identità nazionale argentina moderna. La Plaza Islas Malvinas di Ushuaia è l'espressione fisica più solenne di questo sentimento collettivo.\n\n**La Veglia del 2 Aprile**\nOgni anno, dalla notte del 1° aprile alle prime ore del 2 aprile, la Piazza ospita la "Veglia delle Malvinas" più importante del paese. Le organizzazioni di ex combattenti allestiscono un palco, proiettano documentari e i veterani condividono le loro esperienze personali. A mezzanotte, allo scoccare del 2 aprile, si osserva un minuto di silenzio prima di intonare l'inno nazionale.\n\n**La Complessità Storica del Canale di Beagle**\nIl Canale di Beagle, sulle cui rive sorge Ushuaia, fu un tempo punto caldo di disputa territoriale tra Argentina e Cile. Nel 1978 i due paesi giunsero sull'orlo della guerra, scongiurata grazie alla mediazione papale di Giovanni Paolo II, culminata nel Trattato di Pace e Amicizia del 1984. La Plaza Islas Malvinas, affacciata sul Beagle, testimonia anche la complessa storia internazionale dell'estremo sud sudamericano.\n\n**Cani nella Piazza**\nLa Plaza Islas Malvinas è uno dei pochi spazi pubblici di Ushuaia dove i cani sono espressamente ammessi. Molti residenti passeggiano quotidianamente con i loro cani nella piazza, integrando il solenne memoriale nella vita quotidiana della città. Alcuni dicono che questa sia precisamente la genialità della piazza — è allo stesso tempo uno spazio sacro del ricordo e una piazza pubblica viva e pulsante.`
    },
    eco: {
      title: "Etichetta del Visitatore e Rispetto",
      intro: "La Plaza Islas Malvinas è uno dei memoriali di guerra più importanti dell'Argentina. Come guida educativa indipendente non profit, chiediamo a tutti i visitatori di trattare questo spazio sacro con il massimo rispetto.",
      items: [
        "**Mantenere il silenzio**: questo è un memoriale ai caduti — tenere bassa la voce, evitare conversazioni ad alto volume, musica o giochi",
        "**Rispettare la Fiamma Eterna**: non gettare nulla nel fuoco né oltrepassare le barriere per toccarla",
        "**Non toccare i monumenti**: non arrampicarsi, sedersi o appoggiarsi al muro commemorativo — è un'installazione solenne",
        "**Non lasciare tracce**: portare via tutti i rifiuti e mantenere pulita la piazza",
        "**Fotografia silenziosa**: è permesso fotografare, ma spegnere il flash e il suono dell'otturatore; non disturbare chi sta rendendo omaggio",
        "**Rispettare le cerimonie**: se si incontra una commemorazione in corso (specialmente intorno al 2 aprile), mantenere una distanza rispettosa e osservare in silenzio"
      ]
    },
    architecture: {
      title: "Disposizione della Piazza e Insieme Monumentale",
      intro: "Benché di dimensioni modeste, la Plaza Islas Malvinas ha un design compatto e ricco di significato. Affacciata sul lungomare, il suo elemento centrale è il muro di marmo nero, con altri monumenti distribuiti lungo la passeggiata costiera.",
      specs: {
        structure: { title: "Disposizione Generale", content: "La piazza adotta un design aperto verso il Canale di Beagle. Tre elementi principali ne formano il nucleo: ① **Muro Commemorativo dei Caduti** — muro di marmo nero con i 649 nomi in ordine alfabetico; ② **Fiamma Eterna (Llama Eterna)** — torcia permanentemente accesa situata direttamente davanti al muro; ③ **Mappa in Rilievo delle Isole Malvinas** — grande rappresentazione topografica dell'arcipelago incastonata nel suolo.\n\nPennoni con la bandiera argentina e la bandiera provinciale fuegina fiancheggiano la piazza. Sono state piantate specie vegetali autoctone resistenti intorno al perimetro, integrando il memoriale nel paesaggio costiero di Ushuaia." },
        design: { title: "Filosofia del Design", content: `La piazza incarna il principio della **\u201Cmemoria in armonia con la natura\u201D**. Il muro di marmo nero crea un contrasto visivo intenso con le montagne innevate circostanti, simboleggiando il peso della guerra e il valore della pace. Il bagliore arancione della Fiamma Eterna risalta vividamente nel clima spesso nuvoloso di Ushuaia, visibile giorno e notte.\n\nIl monumento è rivolto a sud — verso le Isole Malvinas. Il progettista ha deliberatamente allineato l'asse principale della piazza in orientamento nordest–sudovest, affinché i visitatori, ponendosi davanti al memoriale, guardino naturalmente verso le isole che occupano un posto così potente nel cuore argentino.` },
        optics: { title: "Ambiente Circostante", content: `La piazza si trova direttamente sulla costanera di Ushuaia. Dopo la visita, si può passeggiare lungo il Canale di Beagle. Proprio di fronte alla piazza si trova lo **\u201CEspacio Pensar Malvinas\u201D** — spazio espositivo storico gestito da Turismo Ushuaia che offre mostre approfondite e visite guidate ufficiali sul contesto della Guerra delle Malvinas. Nelle vicinanze si trova anche il **Museo Marittimo di Ushuaia (Museo Marítimo de Ushuaia)**.` }
      },
      plaque: {
        title: "Informazioni di Base",
        items: [
          { label: "Nome", value: "Plaza Islas Malvinas" },
          { label: "Posizione", value: "Ushuaia, Terra del Fuoco, Argentina" },
          { label: "Commemora", value: "Caduti della Guerra delle Malvinas del 1982" },
          { label: "Caduti", value: "649 militari argentini" },
          { label: "Orario", value: "Aperto 24 ore, tutto l'anno" },
          { label: "Ingresso", value: "Gratuito (spazio pubblico)" },
          { label: "Elementi Emblematici", value: "Muro di marmo nero, Fiamma Eterna" }
        ]
      }
    },
    monuments: {
      title: "Cosa Fare alla Plaza Islas Malvinas",
      intro: "La Plaza Islas Malvinas coniuga commemorazione solenne, profonda educazione storica e lo splendido paesaggio naturale di Ushuaia. Le seguenti esperienze sono apprezzate da appassionati di storia, familiari di veterani e visitatori in generale.",
      items: [
        { name: "Rendere Omaggio al Muro Commemorativo", description: "Avvicinarsi al muro di marmo nero e leggere i 649 nomi. Ogni nome rappresenta una giovane vita. Suggeriamo di fermarsi davanti al muro per un momento di silenzio in omaggio ai soldati che hanno dato la vita. Molti visitatori lasciano un fiore o una piccola bandiera." },
        { name: "Contemplare la Fiamma Eterna", description: "Di giorno o di notte, la Fiamma Eterna arde nella brezza marina di Ushuaia. Il fuoco è particolarmente commovente sullo sfondo di marmo nero. Mantenere una distanza rispettosa e osservare in silenzio questa fiamma imperitura del ricordo e della memoria nazionale che rappresenta." },
        { name: "Visitare lo Spazio Espositivo 'Pensar Malvinas'", description: "Adiacente alla piazza, l'Espacio Pensar Malvinas è uno spazio espositivo gratuito gestito da Turismo Ushuaia. Attraverso fotografie, reperti, mappe e materiali audiovisivi, offre un'esplorazione approfondita del contesto storico della guerra del 1982 e della geografia e cultura delle isole." },
        { name: "Passeggiare Lungo la Costanera", description: "Dopo aver visitato la piazza, camminare lungo la costanera di Ushuaia. Il Canale di Beagle offre viste mozzafiato — la Cordigliera Darwin cilena si erge sulla riva lontana, e si possono spesso avvistare leoni marini e albatri. È la transizione perfetta dalla storia solenne al momento presente." }
      ]
    },
    contrast: {
      title: "Monumento Solenne e Canale Maestoso",
      intro: "La forza della Plaza Islas Malvinas risiede nell'intersezione tra la profonda memoria umana e la sublime bellezza naturale. Da un lato, 649 nomi su marmo nero; dall'altro, l'eterno flusso e riflusso del Canale di Beagle — due immagini catturano questo incontro tra gravità ed eternità.",
      before: "Monumento Solenne",
      after: "Vista del Canale Beagle"
    },
    visiting: {
      title: "Pianifica la Tua Visita",
      intro: "Come spazio pubblico aperto, la Plaza Islas Malvinas è aperta tutto l'anno e completamente gratuita. Che tu la visiti appositamente per rendere omaggio o come tappa del tuo tour di Ushuaia, le seguenti informazioni ti aiuteranno a pianificare una visita significativa.",
      hours: { title: "Orari", content: "**Aperto 24 ore su 24**, tutto l'anno.\nCome spazio pubblico urbano, la piazza non ha cancelli né restrizioni di accesso.\nDotata di illuminazione notturna di base, e la Fiamma Eterna è visibile per tutta la notte.", note: "Nei giorni intorno al 2 aprile la piazza può essere estremamente affollata per eventi commemorativi — pianificare in anticipo." },
      price: { title: "Ingresso", content: "**Completamente gratuito**.\nLa piazza è uno spazio pubblico della città di Ushuaia; non si paga alcun biglietto.\nL'adiacente Espacio Pensar Malvinas è anch'esso a ingresso libero e gratuito.", note: "Uno spazio commemorativo liberamente accessibile — visitare con rispetto e gratitudine." },
      duration: { title: "Durata Consigliata", content: "Muro commemorativo + Fiamma Eterna + foto: circa **20–30 minuti**.\nIncludendo l'Espacio Pensar Malvinas: aggiungere **30–45 minuti**.\nPasseggiata sulla costanera + viste del Canale Beagle: libera.", note: "Si può combinare con il Museo Marittimo di Ushuaia e il Museo del Fin del Mundo per un itinerario di mezza giornata." },
      tips: { title: "Consigli e Raccomandazioni", items: [
        "**Vestirsi pesante**: Ushuaia ha temperature fresche tutto l'anno (media estiva ~10°C, invernale ~0°C) con forti venti marini — indossare abbigliamento antivento",
        "**Prepararsi alla pioggia**: il clima fuegino è mutevole; portare protezione per la pioggia anche in giornate serene",
        "**Rispettare il memoriale**: approcciarsi alla piazza come si farebbe con un memoriale; evitare fotografie troppo informali o di intrattenimento",
        "**Raggiungibile a piedi**: la piazza è sul lungomare centrale di Ushuaia, a distanza pedonale dalla maggior parte degli hotel del centro",
        "**Consiglio fotografico**: la luce del primo mattino o del tardo pomeriggio è la migliore per fotografare il monumento con il Canale di Beagle sullo sfondo"
      ] },
      essentials: [
        { icon: "🧥", title: "Stare al Caldo", text: "Ushuaia è fresca tutto l'anno con forti venti — indossare abbigliamento antivento anche d'estate." },
        { icon: "🌧️", title: "Pioggia", text: "Il clima fuegino è imprevedibile; portare sempre protezione per la pioggia." },
        { icon: "🕊️", title: "Solemnità", text: "È un memoriale di guerra — tenere bassa la voce, evitare giochi, rispettare chi rende omaggio." },
        { icon: "📸", title: "Foto Rispettose", text: "È permesso fotografare, ma spegnere flash e suono; non arrampicarsi sui monumenti per posare." }
      ]
    },
    transportation: {
      title: "Guida Precisa ai Trasporti",
      airport: { title: "✈️ Dall'Aeroporto di Ushuaia", content: "L'Aeroporto Internazionale Malvinas Argentinas di Ushuaia (USH) dista solo 4 km dal centro. Raggiungere la Plaza Islas Malvinas dall'aeroporto è molto semplice.", options: [
        { name: "Taxi / Uber (Consigliato)", price: "ca. 10–15 min", time: "4 km", steps: ["Prendere un taxi o remís dall'uscita dell'aeroporto", "Seguire la Strada Nazionale 3 (RN-3) verso nord fino alla città", "Indicare al conducente 'Plaza Islas Malvinas' o 'Monumento a los Caídos en Malvinas'", "Si arriva in circa 10–15 minuti"] }
      ]},
      city: { title: "🏘️ A Piedi dal Centro di Ushuaia", content: "La Plaza Islas Malvinas si trova sulla **costanera** del centro di Ushuaia. Dalla via principale, Avenida San Martín, è una piacevole passeggiata di **5–10 minuti**.", steps: ["Da Av. San Martín camminare verso sud in direzione della costa", "Raggiungere la costanera e girare a destra (verso ovest)", "Camminare per circa 300 metri — si vedranno presto la bandiera argentina e la Fiamma Eterna", "L'ingresso della piazza è direttamente sulla costanera"] },
      tips: { title: "Consigli di Trasporto", items: [
        "Il centro di Ushuaia è compatto — **quasi tutti gli hotel del centro sono a distanza pedonale dalla piazza**",
        "Se si alloggia in zone periferiche (es. hotel in collina), prendere un taxi o autobus locale",
        "L'Aeroporto di Ushuaia (USH) ha voli diretti per Buenos Aires (AEP/EZE), durata ca. 3,5 ore",
        "Guidare da Buenos Aires a Ushuaia sono circa 3.000 km — si raccomanda di volare",
        "Ushuaia è anche un importante porto di partenza per l'Antartide; numerose crociere antartiche fanno scalo qui da novembre a marzo"
      ] }
    },
    gallery: { title: "Galleria Fotografica", viewMore: "Vedi Altre Foto su Google Maps", categories: [ { key: "memorial", label: "Monumento" }, { key: "flame", label: "Fiamma Eterna" }, { key: "plaza", label: "Viste della Piazza" }, { key: "beagle", label: "Viste del Canale" } ] },
    reviews: {
      title: "Recensioni dei Visitatori ed Esplorazione dei Dintorni",
      subtitle: "Voci dalla Plaza Islas Malvinas: Testimonianze Reali da Google Maps",
      viewMore: "Vedi Altre Recensioni su Google Maps",
      nearbyTitle: "Attrazioni Vicine che Vale la Pena Visitare",
      nearbyIntro: "Dopo aver visitato la Plaza Islas Malvinas, puoi esplorare facilmente le seguenti destinazioni vicine:",
      nearbyItems: [
        { name: "Museo del Fin del Mundo (Museo della Fine del Mondo)", description: "A circa 10 minuti a piedi dalla piazza. Espone la storia naturale e le culture originarie della Terra del Fuoco — il luogo migliore per comprendere il passato e il presente di Ushuaia." },
        { name: "Museo Marittimo di Ushuaia (Museo Marítimo de Ushuaia)", description: "Situato nell'edificio dell'ex carcere, con mostre sulla storia penale di Ushuaia, l'esplorazione antartica e una sezione dedicata alla Guerra delle Malvinas." },
        { name: "Parco Nazionale Terra del Fuoco (Parque Nacional Tierra del Fuego)", description: "A circa 12 km dalla città, il parco nazionale più australe dell'Argentina. Si può prendere il Treno della Fine del Mondo per entrare nel parco e godere di foreste incontaminate e viste del Canale di Beagle." }
      ]
    },
    faq: { title: "Domande Frequenti", subtitle: "Scopri di Più sulla Plaza Islas Malvinas", items: [
      { question: "Cos'è la Plaza Islas Malvinas?", answer: "La Plaza Islas Malvinas si trova sul lungomare del Canale di Beagle a Ushuaia, Argentina. È uno dei memoriali più importanti del paese dedicati alla Guerra delle Malvinas del 1982. La piazza presenta un muro di marmo nero con i nomi di 649 soldati argentini caduti in guerra, con una Fiamma Eterna che arde davanti ad esso." },
      { question: "Si paga l'ingresso? Quali sono gli orari?", answer: "La Plaza Islas Malvinas è uno **spazio pubblico** appartenente alla città di Ushuaia. È completamente gratuita e non richiede biglietto. La piazza è aperta **24 ore al giorno, tutto l'anno**, con illuminazione notturna. Nei giorni intorno al 2 aprile (Giorno delle Malvinas) la zona può essere molto affollata." },
      { question: "Cosa devo tenere presente durante la visita?", answer: "È un memoriale di guerra — mantenere il silenzio e rispettare le installazioni monumentali. Non arrampicarsi sul muro commemorativo né oltrepassare le barriere della Fiamma Eterna. Spegnere il flash della fotocamera. Il clima di Ushuaia è mutevole — indossare abbigliamento caldo antivento. I cani sono ammessi al guinzaglio." },
      { question: "Come arrivo a Ushuaia da Buenos Aires?", answer: "Volare da Buenos Aires all'Aeroporto Internazionale Malvinas Argentinas di Ushuaia (USH), un volo di circa 3,5 ore. Dall'aeroporto, prendere un taxi per circa 10–15 minuti (4 km) fino alla Plaza Islas Malvinas in centro. Esistono anche autobus a lunga percorrenza, anche se il viaggio da Buenos Aires dura circa 36 ore." },
      { question: "Cos'è l'Espacio Pensar Malvinas?", answer: "L'Espacio Pensar Malvinas è uno spazio espositivo gratuito adiacente alla piazza, gestito dal Turismo Municipale di Ushuaia. Attraverso fotografie, reperti, mappe e materiali audiovisivi, offre un'esplorazione approfondita del contesto storico della guerra del 1982 e della geografia e cultura delle isole. Consultare turismoushuaia.com per gli orari." }
    ]},
    location: { title: "Posizione", address: "Patagonia 48, V9410\nUshuaia, Terra del Fuoco\nArgentina", openMaps: "Vedi su Google Maps" },
    footer: { callToAction: "La Plaza Islas Malvinas è un portatore vitale della memoria nazionale argentina. Seicentoquarantanove nomi, una fiamma eterna — a custodire in silenzio le acque dell'Atlantico Meridionale. Unisciti a noi per visitare questo luogo con il più profondo rispetto, affinché la storia viva nella memoria.", text: "© 2026 Guida di Plaza Islas Malvinas · Tutti i diritti riservati.\nQuesto sito è una guida educativa indipendente senza scopo di lucro dedicata a diffondere informazioni accurate sulla Plaza Islas Malvinas. Non siamo affiliati con il governo argentino, il governo provinciale della Terra del Fuoco né alcuna istituzione ufficiale.", made: "Questo è un progetto educativo indipendente non profit, creato per appassionati di storia, viaggiatori e tutti coloro che hanno a cuore la pace.", linksTitle: "Link Amici", links: LINKS_BY_LOCALE.it },
    siteMap: {
      title: "Mappa Interattiva della Piazza",
      intro: "Passa il cursore (o tocca) sui marcatori della mappa per esplorare le cinque aree centrali della Plaza Islas Malvinas.",
      hint: "Passa il cursore · Tocca per fissare",
      cta: "Vedi la guida completa della piazza",
      zones: [
        { key: "cenotafio", name: "Muro dei Caduti (Cenotafio)", desc: "Muro di marmo nero con i 649 nomi in ordine alfabetico — l'installazione commemorativa centrale della piazza." },
        { key: "llama", name: "Fiamma Eterna (Llama Eterna)", desc: "Torcia permanentemente accesa davanti al muro commemorativo, simbolo del ricordo imperituro dei caduti." },
        { key: "banderas", name: "Piazza delle Bandiere (Mástiles)", desc: "Bandiera argentina e bandiera provinciale fuegina — sede principale delle cerimonie del 2 aprile." },
        { key: "mapa", name: "Mappa in Rilievo delle Isole (Mapa Relieve)", desc: "Grande rilievo topografico dell'arcipelago delle Malvinas incastonato nel suolo, che mostra la geografia insulare." },
        { key: "costanera", name: "Costanera (Lungomare)", desc: "Passeggiata costiera lungo il Canale di Beagle, che collega la piazza ad altre attrazioni cittadine — ideale per passeggiare sul mare." }
      ]
    },
    itinerary: {
      title: "Itinerario Suggerito",
      intro: "Mezz'ora basta per la visita commemorativa principale. Usa la linea del tempo come guida e adattala al tuo ritmo.",
      steps: [
        { time: "Arrivo", title: "Arrivare alla Piazza", text: "Camminare dal centro di Ushuaia lungo la costanera; ammirare la vista completa della piazza e del Canale di Beagle dall'ingresso." },
        { time: "+5 min", title: "Omaggio al Muro", text: "Avvicinarsi al muro di marmo nero, leggere in silenzio i nomi dei caduti, lasciare un fiore o osservare un minuto di silenzio." },
        { time: "+15 min", title: "Contemplare la Fiamma Eterna", text: "Fermarsi davanti alla Fiamma Eterna e assorbire la memoria nazionale che questo fuoco imperituro rappresenta." },
        { time: "+20 min", title: "Visitare lo Spazio Espositivo", text: "Visitare l'Espacio Pensar Malvinas (se aperto) per una comprensione più profonda del contesto storico della guerra del 1982." },
        { time: "+50 min", title: "Passeggiare sul Lungomare", text: "Camminare lungo la costanera, godere delle viste del Canale di Beagle e ammirare la Cordigliera Darwin innevata in lontananza." }
      ]
    },
    ctaBand: {
      title: "Pianifica il Tuo Viaggio a Ushuaia",
      subtitle: "Dalla porta d'ingresso all'Antartide fino alla fine del mondo — rendi la tua visita alla Plaza Islas Malvinas la tappa più significativa del tuo viaggio.",
      buttons: ["Info Visita e Orari", "Prenota Guida Ufficiale", "Vedi Posizione su Maps"]
    }
  }
};
