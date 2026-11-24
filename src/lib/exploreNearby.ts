import type {ExploreLocale} from './explore';
import nearby from './exploreNearby.json';

type VisitMode = 'ticket' | 'event' | 'worship' | 'outdoor' | 'garden' | 'restricted';

type LocalGuide = {
  name: string;
  tagline: string;
  history: string;
  route: string;
  observation: string;
  question: string;
  answer: string;
};

export type NearbyGuide = {
  address: string;
  operator: string;
  source: string;
  mode: VisitMode;
  minutes: number;
  photo: {file: string; artist: string; license: string};
  copy: Record<ExploreLocale, LocalGuide>;
};

export const nearbyGuides = nearby as Record<keyof typeof nearby, NearbyGuide>;
export type NearbySlug = keyof typeof nearbyGuides;
export const nearbyGuideSlugs = Object.keys(nearbyGuides) as NearbySlug[];

type VisitText = [type: string, opening: string, admission: string];

const visitText: Record<ExploreLocale, Record<VisitMode, VisitText>> = {
  en: {
    ticket: ['Ticketed visitor site', 'Check opening hours and last admission with the operator.', 'Sightseeing admission requires a ticket.'],
    event: ['Cultural venue', 'Check the programme for visitor access and event times.', 'Check the venue for admission and event prices.'],
    worship: ['Place of worship', 'Check for services and the times available for sightseeing.', 'Ask the church for current visitor arrangements.'],
    outdoor: ['Historic outdoor space', 'The promenade is outdoors. Check for event closures.', 'The promenade is free to walk.'],
    garden: ['Botanical garden', 'Check the garden’s published opening and gate arrangements.', 'Check the operator for current entry arrangements.'],
    restricted: ['Historic building', 'Plan a street-level visit. Ask the operator about announced tours.', 'The exterior is visible from public streets.'],
  },
  zh: {
    ticket: ['售票参观场馆', '向运营方核对开放及最后入场时间。', '旅游参观需购票。'],
    event: ['文化场馆', '从节目公告核对参观开放与活动时间。', '入场办法和活动票价请查场馆公告。'],
    worship: ['礼拜场所', '请分别核对礼拜与游客参观时段。', '当前游客入场办法请咨询教堂。'],
    outdoor: ['历史户外空间', '步道位于室外，留意活动期间的临时管制。', '步道可免费步行。'],
    garden: ['植物园', '查看园方公布的开放时间和入口安排。', '当前入园办法请查运营方公告。'],
    restricted: ['历史建筑', '可从街面参观；内部导览以运营方公布为准。', '公共街道可观看建筑外观。'],
  },
  mt: {
    ticket: ['Sit bi biljett', 'Iċċekkja l-ħinijiet u l-aħħar dħul mal-operatur.', 'Għaż-żjara turistika hemm bżonn biljett.'],
    event: ['Post kulturali', 'Ara l-programm għall-aċċess u l-ħinijiet tal-avvenimenti.', 'Ara l-kundizzjonijiet tad-dħul u l-prezzijiet tal-avvenimenti.'],
    worship: ['Post ta’ qima', 'Iċċekkja s-servizzi u l-ħinijiet għaż-żjarat.', 'Staqsi lill-knisja dwar id-dħul tal-viżitaturi.'],
    outdoor: ['Spazju storiku fil-beraħ', 'Il-promenade hi fil-beraħ. Ara jekk tingħalaqx għal xi avveniment.', 'Tista’ timxi mal-promenade bla ħlas.'],
    garden: ['Ġnien botaniku', 'Iċċekkja l-ħinijiet ippubblikati u liema daħla tintuża.', 'Ara l-arranġamenti tad-dħul mal-operatur.'],
    restricted: ['Bini storiku', 'Ara l-binja mit-triq u staqsi dwar żjarat imħabbra.', 'Il-faċċata tidher mit-toroq pubbliċi.'],
  },
  it: {
    ticket: ['Sito con biglietto', 'Verifica presso il gestore gli orari e l’ultimo ingresso.', 'Per la visita turistica occorre un biglietto.'],
    event: ['Spazio culturale', 'Consulta il programma per accesso e orari degli eventi.', 'Consulta la sede per condizioni d’ingresso e prezzi.'],
    worship: ['Luogo di culto', 'Verifica gli orari delle funzioni e quelli di visita.', 'Chiedi alla chiesa come si svolgono le visite.'],
    outdoor: ['Spazio storico all’aperto', 'La passeggiata è all’aperto. Verifica eventuali chiusure per eventi.', 'La passeggiata è percorribile gratuitamente.'],
    garden: ['Giardino botanico', 'Consulta gli orari pubblicati e l’accesso indicato dal giardino.', 'Verifica le modalità d’ingresso con il gestore.'],
    restricted: ['Edificio storico', 'Prevedi una visita dalla strada. Chiedi al gestore delle visite annunciate.', 'L’esterno è visibile dalle strade pubbliche.'],
  },
  de: {
    ticket: ['Besuch mit Eintrittskarte', 'Prüfe Öffnungszeiten und letzten Einlass beim Betreiber.', 'Für die Besichtigung ist eine Eintrittskarte erforderlich.'],
    event: ['Kulturstätte', 'Prüfe das Programm für den Zugang und die Veranstaltungszeiten.', 'Prüfe die Einlassbedingungen und Veranstaltungspreise beim Veranstalter.'],
    worship: ['Gotteshaus', 'Prüfe Gottesdienst- und Besichtigungszeiten getrennt.', 'Frage bei der Kirche nach den aktuellen Besuchsregeln.'],
    outdoor: ['Historischer Außenbereich', 'Die Promenade liegt im Freien. Prüfe Sperrungen bei Veranstaltungen.', 'Der Spaziergang auf der Promenade ist kostenlos.'],
    garden: ['Botanischer Garten', 'Prüfe die veröffentlichten Öffnungszeiten und den Eingang.', 'Erfrage die aktuellen Einlassbedingungen beim Betreiber.'],
    restricted: ['Historisches Gebäude', 'Plane einen Besuch von der Straße aus und frage nach angekündigten Führungen.', 'Das Gebäude ist von öffentlichen Straßen aus sichtbar.'],
  },
  es: {
    ticket: ['Recinto con entrada', 'Comprueba el horario y el último acceso con el operador.', 'La visita turística requiere entrada.'],
    event: ['Espacio cultural', 'Consulta el programa para conocer el acceso y los horarios.', 'Consulta el acceso y los precios de los eventos con el recinto.'],
    worship: ['Lugar de culto', 'Comprueba por separado los horarios de culto y de visita.', 'Pregunta a la iglesia por las condiciones de visita.'],
    outdoor: ['Espacio histórico al aire libre', 'El paseo está al aire libre. Comprueba cierres por eventos.', 'Se puede recorrer el paseo gratis.'],
    garden: ['Jardín botánico', 'Consulta el horario publicado y la entrada indicada.', 'Consulta las condiciones de acceso con el operador.'],
    restricted: ['Edificio histórico', 'Planifica una visita desde la calle y pregunta por recorridos anunciados.', 'El exterior es visible desde las calles públicas.'],
  },
};

const visitLabels: Record<ExploreLocale, {about: string; operator: string; approach: string; detail: string; time: string}> = {
  en: {about:'Visitor access and stewardship',operator:'Visitor information',approach:'How do I reach the entrance?',detail:'What should I look for here?',time:'min'},
  zh: {about:'参观安排与管理',operator:'参观信息机构',approach:'怎样找到这里的入口？',detail:'现场有哪些值得细看的地方？',time:'分钟'},
  mt: {about:'Aċċess u ġestjoni',operator:'Informazzjoni għall-viżitaturi',approach:'Kif nasal sad-daħla?',detail:'X’għandi nosserva?',time:'min'},
  it: {about:'Accesso e gestione',operator:'Informazioni per le visite',approach:'Come arrivo all’ingresso?',detail:'Che cosa vale la pena osservare?',time:'min'},
  de: {about:'Zugang und Betreuung',operator:'Besucherinformation',approach:'Wie erreiche ich den Eingang?',detail:'Worauf sollte ich vor Ort achten?',time:'Min.'},
  es: {about:'Acceso y gestión',operator:'Información para visitantes',approach:'¿Cómo llego a la entrada?',detail:'¿En qué merece la pena fijarse?',time:'min'},
};

export function nearbyVisitorInfo(guide: NearbyGuide, locale: ExploreLocale) {
  const [type, opening, admission] = visitText[locale][guide.mode];
  const labels = visitLabels[locale];
  const copy = guide.copy[locale];
  const faq: [string, string][] = [
    [copy.question, copy.answer],
    [labels.approach, copy.route],
    [labels.detail, copy.observation],
  ];
  return {labels, type, opening, admission, duration: `${guide.minutes} ${labels.time}`, faq};
}
