import type {ExploreLocale, ExploreSlug} from './explore';

type Fact = {type: string; area: string; focus: string};

export const factLabels: Record<ExploreLocale, {type:string; area:string; focus:string; reference:string}> = {
  en: {type:'Type of attraction',area:'Neighbourhood and setting',focus:'Main feature',reference:'Official information source'},
  zh: {type:'景点类型',area:'所在区域与环境',focus:'主要看点',reference:'官方参考机构'},
  mt: {type:'Tip ta’ attrazzjoni',area:'Żona u ambjent',focus:'X’ta’ min tara',reference:'Sors uffiċjali'},
  it: {type:'Tipo di attrazione',area:'Zona e contesto',focus:'Punto di interesse principale',reference:'Fonte ufficiale'},
  de: {type:'Art der Sehenswürdigkeit',area:'Stadtteil und Umgebung',focus:'Wichtigste Besonderheit',reference:'Offizielle Informationsquelle'},
  es: {type:'Tipo de atracción',area:'Zona y entorno',focus:'Principal atractivo',reference:'Fuente de información oficial'},
};

// Location-specific, editorial visitor facts. These do not imply verified review scores or fixed opening hours.
export const exploreFacts: Record<ExploreSlug, Record<ExploreLocale, Fact>> = {
  'valletta-city-gate': {
    en:{type:'Contemporary city gate and pedestrian entrance',area:'Western entrance to Valletta, beside the bus terminus',focus:'Renzo Piano’s entrance, bridge and city-wall threshold'},
    zh:{type:'当代城门与步行入口',area:'瓦莱塔西侧入口，邻近巴士总站',focus:'伦佐·皮亚诺设计的城门、桥梁与城墙交界'},
    mt:{type:'Bieb tal-belt modern u daħla għall-mixi',area:'Id-daħla tal-punent tal-Belt Valletta, ħdejn it-terminal tal-karozzi tal-linja',focus:'Il-bieb ta’ Renzo Piano, il-pont u s-swar'},
    it:{type:'Porta urbana contemporanea e accesso pedonale',area:'Ingresso occidentale di La Valletta, vicino al terminal degli autobus',focus:'La porta di Renzo Piano, il ponte e le mura'},
    de:{type:'Modernes Stadttor und Fußgängereingang',area:'Westlicher Zugang zu Valletta am Busbahnhof',focus:'Renzo Pianos Stadttor, Brücke und Stadtmauer'},
    es:{type:'Puerta urbana contemporánea y acceso peatonal',area:'Entrada occidental de La Valeta, junto a la estación de autobuses',focus:'La puerta de Renzo Piano, el puente y las murallas'},
  },
  'hastings-gardens': {
    en:{type:'Public bastion-top garden',area:'Western ramparts of Valletta, overlooking Marsamxett Harbour',focus:'Fortification viewpoints and the memorial to Lord Hastings'},
    zh:{type:'堡垒顶层公共花园',area:'瓦莱塔西侧城墙，俯瞰马萨姆谢特港',focus:'防御工事观景台与黑斯廷斯勋爵纪念碑'},
    mt:{type:'Ġnien pubbliku fuq is-swar',area:'Is-swar tal-punent tal-Belt Valletta, fuq il-Port ta’ Marsamxett',focus:'Veduti mis-swar u l-monument lil Lord Hastings'},
    it:{type:'Giardino pubblico sui bastioni',area:'Mura occidentali di La Valletta, affacciate sul porto di Marsamxett',focus:'Belvedere sui bastioni e monumento a Lord Hastings'},
    de:{type:'Öffentlicher Garten auf der Bastion',area:'Westliche Stadtmauer von Valletta über dem Marsamxett-Hafen',focus:'Aussichtspunkte der Befestigung und Denkmal für Lord Hastings'},
    es:{type:'Jardín público sobre los bastiones',area:'Murallas occidentales de La Valeta, sobre el puerto de Marsamxett',focus:'Miradores de las fortificaciones y monumento a Lord Hastings'},
  },
  'upper-barrakka-gardens': {
    en:{type:'Historic public terrace garden',area:'Eastern Valletta above Grand Harbour',focus:'Grand Harbour panorama and the Saluting Battery below'},
    zh:{type:'历史公共露台花园',area:'瓦莱塔东侧，大港上方',focus:'大港全景与下方的鸣礼炮台'},
    mt:{type:'Ġnien storiku fuq terrazzin pubbliku',area:'Lvant tal-Belt Valletta fuq il-Port il-Kbir',focus:'Panorama tal-Port il-Kbir u s-Saluting Battery taħt il-ġnien'},
    it:{type:'Giardino storico a terrazza pubblica',area:'La Valletta orientale, sopra il Porto Grande',focus:'Panorama del Porto Grande e Saluting Battery sottostante'},
    de:{type:'Historischer öffentlicher Terrassengarten',area:'Östliches Valletta oberhalb des Grand Harbour',focus:'Hafenpanorama und darunterliegende Saluting Battery'},
    es:{type:'Jardín histórico en terraza pública',area:'Este de La Valeta, sobre el Gran Puerto',focus:'Panorámica del Gran Puerto y Saluting Battery inferior'},
  },
  'lower-barrakka-gardens': {
    en:{type:'Historic public garden and lookout',area:'Eastern Valletta above the Grand Harbour waterfront',focus:'Neoclassical monument and harbour-facing terrace'},
    zh:{type:'历史公共花园与观景台',area:'瓦莱塔东侧，大港滨水区上方',focus:'新古典主义纪念建筑与临港露台'},
    mt:{type:'Ġnien storiku pubbliku u belvedere',area:'Lvant tal-Belt Valletta fuq ix-xatt tal-Port il-Kbir',focus:'Monument neoklassiku u terrazzin lejn il-port'},
    it:{type:'Giardino storico pubblico e belvedere',area:'La Valletta orientale, sopra il lungomare del Porto Grande',focus:'Monumento neoclassico e terrazza sul porto'},
    de:{type:'Historischer öffentlicher Garten mit Aussichtspunkt',area:'Östliches Valletta über dem Grand-Harbour-Ufer',focus:'Neoklassizistisches Denkmal und Hafenterrasse'},
    es:{type:'Jardín histórico público y mirador',area:'Este de La Valeta, sobre la ribera del Gran Puerto',focus:'Monumento neoclásico y terraza hacia el puerto'},
  },
  'siege-bell-memorial': {
    en:{type:'Second World War remembrance memorial',area:'St Christopher’s Bastion, eastern Valletta',focus:'Siege bell, commemorative setting and harbour outlook'},
    zh:{type:'第二次世界大战纪念设施',area:'瓦莱塔东侧圣克里斯托弗堡垒',focus:'围城纪念钟、悼念空间与海港视野'},
    mt:{type:'Monument ta’ tifkira tat-Tieni Gwerra Dinjija',area:'Is-Swar ta’ San Kristofru, fil-Lvant tal-Belt Valletta',focus:'Il-qanpiena tal-assedju, it-tifkira u l-veduta tal-port'},
    it:{type:'Memoriale della Seconda guerra mondiale',area:'Bastione di San Cristoforo, La Valletta orientale',focus:'Campana dell’assedio, spazio commemorativo e vista sul porto'},
    de:{type:'Gedenkstätte des Zweiten Weltkriegs',area:'St.-Christoph-Bastion im östlichen Valletta',focus:'Belagerungsglocke, Gedenkort und Hafenblick'},
    es:{type:'Monumento conmemorativo de la Segunda Guerra Mundial',area:'Bastión de San Cristóbal, este de La Valeta',focus:'Campana del asedio, espacio de homenaje y vistas al puerto'},
  },
  'the-mall-gardens': {
    en:{type:'Historic tree-lined public promenade',area:'Floriana, on the approach to Valletta',focus:'Shaded avenue, monuments and garden paths'},
    zh:{type:'历史林荫公共步道',area:'弗洛里亚纳，通往瓦莱塔的道路旁',focus:'林荫大道、纪念碑与花园步道'},
    mt:{type:'Passeġġata pubblika storika bis-siġar',area:'Il-Furjana, fit-triq lejn il-Belt Valletta',focus:'Vjal bid-dell, monumenti u mogħdijiet'},
    it:{type:'Passeggiata pubblica storica alberata',area:'Floriana, lungo l’accesso a La Valletta',focus:'Viale ombreggiato, monumenti e sentieri'},
    de:{type:'Historische baumbestandene Promenade',area:'Floriana auf dem Weg nach Valletta',focus:'Schattige Allee, Denkmäler und Gartenwege'},
    es:{type:'Paseo público histórico arbolado',area:'Floriana, en el acceso a La Valeta',focus:'Avenida sombreada, monumentos y senderos'},
  },
  'floriana-granaries': {
    en:{type:'Historic civic square and former grain-storage site',area:'Floriana, beside St Publius Church',focus:'Open piazza, covered granary pits and event setting'},
    zh:{type:'历史市民广场与旧粮仓遗址',area:'弗洛里亚纳，圣普布利乌斯教堂旁',focus:'开阔广场、地下储粮窖与公共活动空间'},
    mt:{type:'Pjazza storika u post ta’ ħażna tal-qamħ',area:'Il-Furjana, ħdejn il-Knisja ta’ San Publiju',focus:'Il-pjazza, il-fosos tal-qamħ u l-ispazju għall-avvenimenti'},
    it:{type:'Piazza civica storica ed ex area dei granai',area:'Floriana, accanto alla chiesa di San Publio',focus:'Piazza aperta, fosse granarie e spazio per eventi'},
    de:{type:'Historischer Platz und ehemaliger Getreidespeicher',area:'Floriana neben der Kirche St. Publius',focus:'Offener Platz, Getreidegruben und Veranstaltungsfläche'},
    es:{type:'Plaza cívica histórica y antiguo granero',area:'Floriana, junto a la iglesia de San Publio',focus:'Plaza abierta, silos subterráneos y espacio para eventos'},
  },
  'tritons-fountain-photography': {
    en:{type:'Landmark fountain and photography walk',area:'Floriana–Valletta boundary, by the City Gate approach',focus:'Three bronze Tritons, water basin and evening lighting'},
    zh:{type:'地标喷泉与摄影步行专题',area:'弗洛里亚纳与瓦莱塔交界，城门入口附近',focus:'三尊青铜海神、喷泉水池与夜间照明'},
    mt:{type:'Funtana ikonika u mixja għar-ritratti',area:'Bejn il-Furjana u l-Belt Valletta, qrib id-daħla tal-Belt',focus:'It-tliet Tritoni tal-bronż, il-vaska u d-dawl ta’ filgħaxija'},
    it:{type:'Fontana simbolo e itinerario fotografico',area:'Tra Floriana e La Valletta, vicino alla Porta della Città',focus:'Tre Tritoni in bronzo, vasca e illuminazione serale'},
    de:{type:'Wahrzeichen-Brunnen und Fotospaziergang',area:'Grenze Floriana–Valletta nahe dem Stadttor',focus:'Drei bronzene Tritonen, Wasserbecken und Abendbeleuchtung'},
    es:{type:'Fuente emblemática y paseo fotográfico',area:'Entre Floriana y La Valeta, cerca de la Puerta de la Ciudad',focus:'Tres tritones de bronce, estanque e iluminación nocturna'},
  },
};
