export const exploreSlugs = ['valletta-city-gate', 'tritons-fountain-photography'] as const;
export type ExploreSlug = (typeof exploreSlugs)[number];
export type ExploreLocale = 'en' | 'zh' | 'mt' | 'it' | 'de' | 'es';

type LocalCopy = {
  name: string; tagline: string; intro: string; aboutTitle: string; about: string;
  history: string; design: string; highlights: string[]; tips: string[];
  route: string[]; photoTips: string[]; faq: [string, string][];
};

export const explorePlaces: Record<ExploreSlug, {
  image: string; extraImages: string[]; map: string; address: string;
  operatorSource: string; factSource: string; free: boolean;
  copy: Record<ExploreLocale, LocalCopy>;
}> = {
  'valletta-city-gate': {
    image: '/nearby/valletta-city-gate.jpg',
    extraImages: ['/gallery/tritons-fountain-floriana-1.jpg'],
    map: 'https://www.google.com/maps/search/?api=1&query=Valletta%20City%20Gate%2C%20Malta',
    address: 'City Gate, Republic Street, Valletta, Malta',
    operatorSource: 'https://www.visitmalta.com/en/search-dtp/?post=valletta%2F',
    factSource: 'https://www.visitmalta.com/en/search-dtp/?post=valletta%2F',
    free: true,
    copy: {
      en: {
        name: 'Valletta City Gate', tagline: 'A modern limestone entrance to Malta’s fortified capital',
        intro: 'The City Gate marks the transition from Floriana’s Tritons’ Fountain square to Valletta’s main pedestrian axis. The present entrance is part of the Renzo Piano redevelopment, where clean-cut limestone forms meet the older bastion walls. The bridge, gate and Parliament building make an easy architecture-focused walk.',
        aboutTitle: 'About the City Gate and its public setting',
        about: 'Valletta City Gate is a public entrance within the capital’s historic fortifications, not a ticketed attraction. Public streets and spaces are administered by the relevant Maltese public authorities; this guide does not identify a single permanent operator for the entire precinct. Visit Malta provides the official tourism information for visitors.',
        history: 'Valletta was established as a fortified capital after the Great Siege of 1565. The entrance has been rebuilt over the centuries. The contemporary gate and adjacent Parliament building were developed as part of Renzo Piano’s 21st-century urban project, deliberately contrasting with the city’s older defensive masonry.',
        design: 'Look at the deep limestone cut through the ramparts, the sharp geometry of the gate walls, the restored pedestrian approach, and the interplay between the open forecourt and the narrow historic street beyond. The adjacent Parliament façade uses carved stone surfaces that respond to Mediterranean light.',
        highlights: ['City Gate’s sculpted limestone walls', 'View back toward Tritons’ Fountain', 'Parliament building and Republic Street', 'Contrast between the bastions and contemporary architecture'],
        tips: ['Begin at Tritons’ Fountain, then follow the pedestrian approach to the gate.', 'Visit early for softer light and a less crowded view of the passage.', 'The outdoor approach is free; access to surrounding buildings follows their own rules.'],
        route: ['Stand at Tritons’ Fountain for a wide view of the approach.', 'Walk toward the City Gate bridge and study the historic fortification walls.', 'Pass between the modern limestone gate walls.', 'Continue to Parliament and the opening of Republic Street; return via the same pedestrian axis.'],
        photoTips: ['Frame the modern gate between the older walls.', 'Turn back from inside the gate to include the fountain in the distance.', 'Use the side light to reveal the textured limestone; avoid blocking pedestrian flow.'],
        faq: [['Is Valletta City Gate free?', 'The outdoor public entrance and pedestrian approach are free. Separate attractions and interiors may charge admission.'], ['How far is it from Tritons’ Fountain?', 'The gate is directly beside the fountain square; the walk takes only a few minutes.'], ['Can I drive through the gate?', 'Plan to arrive on foot from the nearby bus terminus or parking areas; the main gate approach is pedestrian-oriented.']],
      },
      zh: {
        name: '瓦莱塔城门', tagline: '从海神喷泉走入马耳他古城的石灰岩门户',
        intro: '瓦莱塔城门连接弗洛里亚纳的海神喷泉广场与瓦莱塔主步行街。现今的入口属于伦佐·皮亚诺主持的城市更新工程：现代几何形态的石灰岩墙面，与旧城防御工事形成鲜明对照。城门、桥梁和国会大厦适合串成一段建筑步行路线。',
        aboutTitle: '关于瓦莱塔城门及管理主体',
        about: '瓦莱塔城门是首都历史城防的一处公共入口，并非独立售票景点。周边公共道路与广场由马耳他相关公共机构按职责管理；目前不将整片区域归为某一家永久管理单位。游客信息可参考马耳他官方旅游机构 Visit Malta。',
        history: '1565 年大围城后，瓦莱塔逐步建设为设防首都，城门历经多次改建。如今的城门与邻近国会大厦属于 21 世纪伦佐·皮亚诺城市更新项目，以简洁的新建筑语言衬托历史堡垒。',
        design: '观察城墙之间深切的石灰岩入口、几何切面、步行桥与内侧街道的空间收放。国会大厦的石材外立面会随日照角度产生不同的光影。',
        highlights: ['现代石灰岩城门', '回望海神喷泉的视线', '国会大厦与共和国街', '古城堡垒与现代建筑的对比'],
        tips: ['从海神喷泉出发，沿行人通道进入城门。', '早晨人流较少，更适合观察建筑与拍照。', '室外通行免费；周边建筑内部另有各自的参观规则。'],
        route: ['在海神喷泉广场观察通往城门的整体轴线。', '步行前往城门桥，留意两侧历史防御工事。', '穿过现代石灰岩门墙，体验空间尺度变化。', '继续至国会大厦与共和国街起点，再沿原路返回。'],
        photoTips: ['借旧城墙框住现代城门。', '进入城门后回望远处的喷泉广场。', '侧光最能体现石灰岩纹理，拍照时保持通道畅通。'],
        faq: [['城门需要门票吗？', '公共城门和室外步行区免费，周边博物馆或室内参观可能另收费。'], ['距离海神喷泉多远？', '就在喷泉广场旁边，步行仅需几分钟。'], ['可以开车穿过城门吗？', '建议从巴士总站或外围停车区步行进入；主要入口以行人为主。']],
      },
      mt: {
        name: 'Bieb il-Belt, Valletta', tagline: 'Id-daħla tal-ġebla tal-franka għall-kapitali storika',
        intro: 'Bieb il-Belt jgħaqqad il-pjazza tal-Funtana tat-Tritoni mat-triq ewlenija tal-Belt Valletta. Id-daħla kontemporanja, parti mill-proġett ta’ Renzo Piano, tgħaqqad forom ġodda tal-ġebla mal-fortifikazzjonijiet qodma.',
        aboutTitle: 'Dwar Bieb il-Belt u l-amministrazzjoni', about: 'Bieb il-Belt huwa aċċess pubbliku għall-belt storika, mhux attrazzjoni bil-biljett. L-ispazji pubbliċi huma amministrati mill-awtoritajiet Maltin responsabbli; ma nassenjawx operatur wieħed għall-inħawi kollha. Visit Malta toffri tagħrif turistiku uffiċjali.',
        history: 'Wara l-Assedju l-Kbir tal-1565, il-Belt Valletta nbniet bħala kapitali fortifikata. Id-daħla nbidlet diversi drabi; il-bieb attwali jifforma parti mill-proġett urban ta’ Renzo Piano.',
        design: 'Osserva l-qtugħ fond fil-ħitan tal-ġebla tal-franka, il-pont għall-mixi u l-kuntrast mal-bini tal-Parlament.',
        highlights: ['Il-ħitan moderni tal-bieb', 'Veduta lejn il-Funtana tat-Tritoni', 'Il-Parlament u Triq ir-Repubblika', 'Kuntrast bejn il-ġdid u l-fortifikazzjonijiet'],
        tips: ['Ibda ħdejn il-Funtana tat-Tritoni.', 'Żur kmieni għal dawl aktar artab.', 'L-aċċess pubbliku barra hu bla ħlas.'],
        route: ['Ibda fil-pjazza tal-funtana.', 'Imxi lejn il-pont u l-ħitan storiċi.', 'Għaddi minn Bieb il-Belt.', 'Kompli lejn il-Parlament u Triq ir-Repubblika.'],
        photoTips: ['Uża l-ħitan storiċi bħala qafas.', 'Ħares lura lejn il-funtana.', 'Fotografa l-konsistenza tal-ġebla bid-dawl tal-ġenb.'],
        faq: [['Hemm ħlas?', 'Il-passaġġ pubbliku huwa bla ħlas.'], ['Kemm hu bogħod mill-funtana?', 'Ftit minuti bil-mixi.'], ['Nista’ nidħol bil-karozza?', 'L-aħjar tasal bil-mixi mit-terminus tal-karozzi tal-linja.']],
      },
      it: {
        name: 'City Gate di La Valletta', tagline: 'L’ingresso contemporaneo alla capitale fortificata',
        intro: 'Il City Gate collega la piazza della Fontana dei Tritoni con la principale via pedonale di La Valletta. Il progetto di Renzo Piano accosta geometrie moderne in pietra calcarea alle antiche fortificazioni.',
        aboutTitle: 'Informazioni e gestione dello spazio pubblico', about: 'Il City Gate è un ingresso pubblico, non un’attrazione con biglietto. Le aree sono amministrate dalle autorità maltesi competenti; non attribuiamo l’intero complesso a un unico gestore permanente. Visit Malta offre informazioni turistiche ufficiali.',
        history: 'Dopo il Grande Assedio del 1565, La Valletta fu costruita come capitale fortificata. La porta è cambiata più volte; quella attuale appartiene alla riqualificazione contemporanea di Renzo Piano.',
        design: 'Osserva il taglio profondo nella pietra calcarea, il ponte pedonale e il contrasto con il vicino Parlamento.',
        highlights: ['Pareti in pietra calcarea', 'Vista sulla Fontana dei Tritoni', 'Parlamento e Republic Street', 'Incontro tra architettura antica e moderna'],
        tips: ['Parti dalla Fontana dei Tritoni.', 'La mattina offre luce morbida e meno folla.', 'L’accesso esterno è gratuito.'],
        route: ['Osserva la prospettiva dalla fontana.', 'Raggiungi il ponte e le mura.', 'Attraversa la porta moderna.', 'Prosegui verso il Parlamento e Republic Street.'],
        photoTips: ['Inquadra la porta tra le mura.', 'Voltati per vedere la fontana in lontananza.', 'Sfrutta la luce laterale sulla pietra.'],
        faq: [['Si paga?', 'Il passaggio pubblico è gratuito.'], ['Quanto dista dalla fontana?', 'Pochi minuti a piedi.'], ['Si può entrare in auto?', 'L’accesso principale è pensato per i pedoni.']],
      },
      de: {
        name: 'Valletta City Gate', tagline: 'Moderner Kalksteineingang in die befestigte Hauptstadt',
        intro: 'Das City Gate verbindet den Tritonenbrunnen mit Vallettas Fußgängerachse. Renzo Pianos Neugestaltung setzt moderne Kalksteinformen in Beziehung zu den historischen Festungsmauern.',
        aboutTitle: 'Über das City Gate und seine Verwaltung', about: 'Das City Gate ist ein öffentlicher Stadteingang und keine Attraktion mit Eintrittskarte. Die öffentlichen Bereiche unterstehen den zuständigen maltesischen Behörden; ein einziger dauerhafter Betreiber wird hier nicht behauptet. Visit Malta bietet offizielle Reiseinformationen.',
        history: 'Nach der Großen Belagerung von 1565 entstand Valletta als befestigte Hauptstadt. Das Tor wurde mehrfach verändert; die heutige Fassung gehört zu Renzo Pianos modernem Stadtprojekt.',
        design: 'Beachten Sie die tiefen Einschnitte im Kalkstein, die Fußgängerbrücke und die Nähe des Parlaments.',
        highlights: ['Moderne Kalksteinwände', 'Blick zurück zum Tritonenbrunnen', 'Parlament und Republic Street', 'Kontrast zwischen Alt und Neu'],
        tips: ['Starten Sie am Tritonenbrunnen.', 'Am Morgen ist das Licht weicher.', 'Der öffentliche Außenbereich ist kostenlos.'],
        route: ['Beginnen Sie am Brunnenplatz.', 'Gehen Sie zur Brücke und zu den Bastionen.', 'Durchqueren Sie das neue Tor.', 'Folgen Sie dem Weg zum Parlament und zur Republic Street.'],
        photoTips: ['Rahmen Sie das Tor mit den alten Mauern ein.', 'Blicken Sie zurück zum Brunnen.', 'Nutzen Sie Seitenlicht für die Steinstruktur.'],
        faq: [['Kostet der Zugang Eintritt?', 'Der öffentliche Durchgang ist kostenlos.'], ['Wie weit ist der Brunnen entfernt?', 'Nur wenige Gehminuten.'], ['Kann man durchfahren?', 'Der Haupteingang ist fußgängerorientiert.']],
      },
      es: {
        name: 'Puerta de la Ciudad de La Valeta', tagline: 'La entrada moderna a la capital fortificada',
        intro: 'La puerta conecta la plaza de la Fuente de los Tritones con la calle peatonal principal de La Valeta. El diseño de Renzo Piano combina piedra caliza contemporánea con murallas históricas.',
        aboutTitle: 'Sobre la puerta y su gestión', about: 'La puerta es un acceso público, no una atracción de pago. Los espacios públicos dependen de las autoridades maltesas competentes; no se atribuye toda la zona a un único operador permanente. Visit Malta ofrece información turística oficial.',
        history: 'Tras el Gran Sitio de 1565, La Valeta se desarrolló como capital fortificada. La entrada cambió varias veces; la estructura actual forma parte del proyecto urbano de Renzo Piano.',
        design: 'Observa el profundo corte entre muros de piedra caliza, el puente peatonal y el Parlamento cercano.',
        highlights: ['Muros de caliza moderna', 'Vista hacia la Fuente de los Tritones', 'Parlamento y Republic Street', 'Contraste entre murallas y diseño actual'],
        tips: ['Empieza en la Fuente de los Tritones.', 'La mañana ofrece luz suave.', 'El acceso exterior es gratuito.'],
        route: ['Empieza en la plaza de la fuente.', 'Camina hacia el puente y las murallas.', 'Cruza la puerta contemporánea.', 'Continúa al Parlamento y Republic Street.'],
        photoTips: ['Enmarca la puerta con las murallas.', 'Mira atrás hacia la fuente.', 'Aprovecha la luz lateral sobre la piedra.'],
        faq: [['¿Hay entrada?', 'El paso público es gratuito.'], ['¿Está lejos de la fuente?', 'A pocos minutos a pie.'], ['¿Se puede pasar en coche?', 'El acceso principal está orientado a peatones.']],
      },
    },
  },
  'tritons-fountain-photography': {
    image: '/gallery/tritons-fountain-floriana-8.jpg',
    extraImages: ['/gallery/tritons-fountain-floriana-5.jpg', '/gallery/tritons-fountain-floriana-11.jpg'],
    map: 'https://maps.app.goo.gl/Fm5kTdRDa9nBYwtY6',
    address: 'Tritons’ Fountain, Vjal Nelson, Floriana, Malta',
    operatorSource: 'https://www.etenders.gov.mt/epps/cft/prepareViewCfTWS.do?resourceId=10262387',
    factSource: 'https://www.visitmalta.com/en/search-dtp/?post=valletta%2F',
    free: true,
    copy: {
      en: {
        name: 'Tritons’ Fountain Photography Guide', tagline: 'Angles, light and a short photo walk at Valletta’s entrance',
        intro: 'Tritons’ Fountain offers several distinct compositions within one public square: the sculptural bronze figures, the wide circular setting and the long sightline toward Valletta City Gate. This guide focuses on where to stand and what to notice, using photographs already published by this site.',
        aboutTitle: 'About the fountain and its upkeep', about: 'The fountain is a public monument in Floriana beside Valletta. Malta’s Public Works Department has issued a public framework tender for its operation and maintenance; this documents public-sector involvement without implying that one contractor or department permanently controls every aspect of the square.',
        history: 'The mid-20th-century fountain was conceived by Maltese sculptor Vincent Apap with Victor Anastasi. Restoration and redesign of the surrounding square in 2017–18 renewed its place as the visual threshold to Valletta.',
        design: 'Three bronze Tritons support the raised basin. Shoot from different sides to understand how their silhouettes overlap; the water, stone paving and City Gate approach provide very different foregrounds and backgrounds.',
        highlights: ['The three bronze figures and basin', 'Water patterns when the fountain is operating', 'Wide plaza and City Gate axis', 'Evening illumination when switched on'],
        tips: ['Allow roughly 20–40 minutes for several viewpoints.', 'Do not rely on the water jets or lighting being active at a fixed time.', 'Keep walkways clear and protect equipment from wind or spray.'],
        route: ['Start at the outer edge of the square for a wide establishing frame.', 'Walk partway around the basin to separate the three figures.', 'Move toward City Gate for a fountain-and-gate composition.', 'Return at dusk if conditions allow, keeping to public pedestrian space.'],
        photoTips: ['A wide lens captures the square; a longer lens isolates the bronze figures.', 'Try side light to show sculptural depth rather than shooting only into strong midday sun.', 'At night, expose for the lit bronze rather than the darkest sky.'],
        faq: [['Where is the best place for a photo?', 'Start from the edge of the square, then circle the basin and try the City Gate approach.'], ['Is evening lighting guaranteed?', 'No. Lighting, water operation and events can change; check conditions on site.'], ['Is photography free?', 'Ordinary photography from open public pedestrian areas does not require an entry ticket.']],
      },
      zh: {
        name: '海神喷泉摄影攻略', tagline: '瓦莱塔入口的取景角度、光线与短距离步行机位',
        intro: '海神喷泉在同一片广场内就能拍出不同画面：三尊青铜海神、圆形水池、石铺地面与通向瓦莱塔城门的纵深视线。本攻略整理具体站位和观察重点，并使用本站已有的喷泉实景照片。',
        aboutTitle: '关于海神喷泉与维护主体', about: '海神喷泉位于弗洛里亚纳、毗邻瓦莱塔的公共广场。马耳他公共工程部门曾公开招标喷泉运行与维护服务，说明该设施有公共部门参与管理；但不据此断言某一承包商永久管理整个广场。',
        history: '喷泉在 20 世纪中期由马耳他雕塑家 Vincent Apap 与 Victor Anastasi 合作设计。2017 至 2018 年的修复及广场更新，使它重新成为进入瓦莱塔的醒目地标。',
        design: '三尊青铜海神共同托举上方水盘。绕行观察人物的轮廓如何重叠，利用水流、石铺广场和城门轴线创造不同的前景与背景。',
        highlights: ['三尊海神与上方水盘', '喷泉运行时的水纹', '广场与城门的纵深构图', '开启时的夜间灯光'],
        tips: ['预留约 20–40 分钟尝试多个机位。', '喷水与灯光运行时间可能变化，不要按固定时刻安排。', '避免阻挡行人，注意风和水花对器材的影响。'],
        route: ['先在广场外围拍摄喷泉全景。', '绕水池步行，寻找三尊人物轮廓分离的角度。', '向城门方向移动，让喷泉与入口同框。', '条件允许时黄昏再拍一组，始终留在公共步行区域。'],
        photoTips: ['广角适合广场环境，中长焦适合青铜人物细节。', '侧光更能表现雕塑层次，正午强烈逆光需谨慎。', '夜景优先对亮起的雕塑测光，避免整幅过曝。'],
        faq: [['哪个角度最好拍？', '先在广场边缘拍全景，再绕水池寻找人物角度，最后尝试城门方向。'], ['夜间一定有灯光吗？', '不保证；灯光、喷水和活动安排可能变化，以现场为准。'], ['拍照需要门票吗？', '在开放的公共步行区进行一般摄影无需景点门票。']],
      },
      mt: {
        name: 'Gwida tar-Ritratti tal-Funtana tat-Tritoni', tagline: 'Angoli, dawl u mixja qasira bir-ritratti',
        intro: 'Il-Funtana tat-Tritoni toffri veduti differenti tal-figuri tal-bronż, il-pjazza u Bieb il-Belt. Din il-gwida tindika fejn tieqaf u x’għandek tosserva.',
        aboutTitle: 'Dwar il-funtana u l-manutenzjoni', about: 'Il-funtana hija monument pubbliku fil-Furjana. Id-Dipartiment tax-Xogħlijiet Pubbliċi ħareġ sejħa għall-operat u l-manutenzjoni tagħha; dan ma jfissirx li kuntrattur wieħed jmexxi l-pjazza kollha b’mod permanenti.',
        history: 'Il-funtana tas-seklu għoxrin kienet iddisinjata minn Vincent Apap u Victor Anastasi. Ġiet restawrata flimkien mal-pjazza fl-2017–18.',
        design: 'Tliet Tritoni tal-bronż iżommu skutella elevata; il-pożizzjoni tiegħek tbiddel il-kontorni tal-figuri.',
        highlights: ['It-tliet figuri tal-bronż', 'L-ilma meta jkun qed jaħdem', 'Il-pjazza u Bieb il-Belt', 'Id-dawl ta’ filgħaxija meta jkun mixgħul'],
        tips: ['Ħalli 20–40 minuta għal diversi angoli.', 'L-ilma u d-dawl mhux dejjem ikunu attivi.', 'Żomm il-passaġġi ħielsa.'],
        route: ['Ibda mit-tarf tal-pjazza.', 'Dawwar mal-baċin.', 'Mexxi lejn Bieb il-Belt.', 'Erġa’ żur fil-għaxija jekk il-kundizzjonijiet jippermettu.'],
        photoTips: ['Uża angolu wiesa’ għall-pjazza.', 'Id-dawl tal-ġenb jenfasizza l-bronż.', 'Bil-lejl esponi għaż-żoni mdawla.'],
        faq: [['Fejn nieħu l-aħjar ritratt?', 'Ipprova mit-tarf tal-pjazza u mill-approċċ ta’ Bieb il-Belt.'], ['Id-dawl huwa garantit?', 'Le, l-operat jista’ jinbidel.'], ['Hemm ħlas għar-ritratti?', 'M’hemmx biljett għar-ritratti ordinarji fi spazju pubbliku.']],
      },
      it: {
        name: 'Guida fotografica alla Fontana dei Tritoni', tagline: 'Inquadrature, luce e breve percorso fotografico',
        intro: 'La Fontana dei Tritoni offre viste diverse delle figure in bronzo, della piazza e della Porta della Città. Questa guida descrive le posizioni e i dettagli da osservare.',
        aboutTitle: 'La fontana e la manutenzione', about: 'La fontana è un monumento pubblico a Floriana. Il Dipartimento dei Lavori Pubblici ha pubblicato una gara per la gestione operativa e la manutenzione; ciò non attribuisce l’intera piazza a un unico gestore permanente.',
        history: 'La fontana del Novecento fu progettata da Vincent Apap e Victor Anastasi. Fu restaurata insieme alla piazza nel 2017–18.',
        design: 'Tre Tritoni in bronzo sostengono la vasca superiore. Cambiando posizione si distinguono meglio le sagome.',
        highlights: ['Tre figure in bronzo', 'Giochi d’acqua quando attivi', 'Asse verso City Gate', 'Illuminazione serale quando attiva'],
        tips: ['Dedica 20–40 minuti alle inquadrature.', 'Acqua e luci possono non essere attive.', 'Non intralciare i passaggi.'],
        route: ['Inizia dal bordo della piazza.', 'Gira attorno alla vasca.', 'Spostati verso City Gate.', 'Torna al crepuscolo se possibile.'],
        photoTips: ['Grandangolo per la piazza.', 'Luce laterale per il bronzo.', 'Di notte esponi sulle parti illuminate.'],
        faq: [['Da dove fotografare?', 'Dal bordo della piazza e dall’asse verso City Gate.'], ['Le luci sono garantite?', 'No, il funzionamento varia.'], ['Serve un biglietto?', 'No per le normali foto negli spazi pubblici aperti.']],
      },
      de: {
        name: 'Tritonenbrunnen Fotoguide', tagline: 'Perspektiven, Licht und kurzer Fotospaziergang',
        intro: 'Der Tritonenbrunnen bietet verschiedene Ansichten der Bronzefiguren, des Platzes und des City Gate. Dieser Guide nennt konkrete Standpunkte und Beobachtungstipps.',
        aboutTitle: 'Über den Brunnen und seine Wartung', about: 'Der Brunnen ist ein öffentliches Denkmal in Floriana. Die maltesische Baubehörde hat einen Auftrag für Betrieb und Wartung ausgeschrieben; daraus folgt kein dauerhafter Alleinbetreiber des gesamten Platzes.',
        history: 'Der Brunnen wurde im 20. Jahrhundert von Vincent Apap und Victor Anastasi gestaltet und 2017–18 mit dem Platz restauriert.',
        design: 'Drei bronzene Tritonen tragen die obere Schale. Unterschiedliche Standpunkte trennen ihre Silhouetten.',
        highlights: ['Drei Bronzefiguren', 'Wasserformen bei Betrieb', 'Blickachse zum City Gate', 'Abendbeleuchtung bei Betrieb'],
        tips: ['Planen Sie 20–40 Minuten ein.', 'Wasser und Licht sind nicht garantiert.', 'Halten Sie die Wege frei.'],
        route: ['Beginnen Sie am Platzrand.', 'Umrunden Sie das Becken.', 'Gehen Sie in Richtung City Gate.', 'Kommen Sie nach Möglichkeit in der Dämmerung zurück.'],
        photoTips: ['Weitwinkel für den Platz.', 'Seitenlicht für die Bronze.', 'Nachts auf beleuchtete Partien belichten.'],
        faq: [['Wo fotografiert man am besten?', 'Am Platzrand und auf der Achse zum City Gate.'], ['Ist die Beleuchtung garantiert?', 'Nein, der Betrieb kann variieren.'], ['Kostet das Fotografieren Eintritt?', 'Nicht bei normalen Fotos auf offenen öffentlichen Wegen.']],
      },
      es: {
        name: 'Guía fotográfica de la Fuente de los Tritones', tagline: 'Ángulos, luz y paseo corto para fotografías',
        intro: 'La Fuente de los Tritones ofrece diferentes vistas de las esculturas de bronce, la plaza y la puerta de La Valeta. Esta guía propone posiciones concretas y detalles interesantes.',
        aboutTitle: 'La fuente y su mantenimiento', about: 'La fuente es un monumento público en Floriana. El Departamento de Obras Públicas convocó un contrato para su operación y mantenimiento; esto no implica un único gestor permanente para toda la plaza.',
        history: 'La fuente del siglo XX fue diseñada por Vincent Apap y Victor Anastasi. Se restauró junto con la plaza en 2017–18.',
        design: 'Tres Tritones de bronce sostienen la pila elevada. Al caminar alrededor cambian las siluetas y los fondos.',
        highlights: ['Tres figuras de bronce', 'Agua cuando está funcionando', 'Perspectiva hacia City Gate', 'Iluminación nocturna cuando está activa'],
        tips: ['Reserva 20–40 minutos.', 'El agua y las luces pueden estar apagadas.', 'No bloquees el paso.'],
        route: ['Empieza en el borde de la plaza.', 'Rodea la fuente.', 'Acércate a City Gate.', 'Vuelve al atardecer si es posible.'],
        photoTips: ['Gran angular para la plaza.', 'Luz lateral para el bronce.', 'De noche expón para las zonas iluminadas.'],
        faq: [['¿Desde dónde fotografiar?', 'Desde el borde de la plaza y hacia City Gate.'], ['¿Siempre hay iluminación?', 'No, puede variar.'], ['¿Hay que pagar?', 'No para fotografías normales en espacios públicos abiertos.']],
      },
    },
  },
};

export const exploreUi: Record<ExploreLocale, {
  nearby: string; section: string; about: string; facts: string; address: string; hours: string;
  admission: string; transport: string; history: string; design: string; highlights: string;
  tips: string; route: string; photos: string; faq: string; sources: string; map: string;
  back: string; free: string; access: string; check: string;
}> = {
  en: {nearby:'Explore nearby',section:'More to explore around Tritons’ Fountain',about:'About',facts:'Basic information',address:'Location',hours:'Opening information',admission:'Admission',transport:'How to get there',history:'History',design:'Design and what to notice',highlights:'Highlights',tips:'Visit tips',route:'Suggested walking route',photos:'Photography viewpoints',faq:'Frequently asked questions',sources:'Official references',map:'Open this location in Google Maps',back:'Back to Tritons’ Fountain',free:'Free access to public outdoor space',access:'Open-air public setting; access may change during events',check:'Check official notices and conditions before visiting'},
  zh: {nearby:'周边景点',section:'探索海神喷泉周边',about:'关于',facts:'基本信息',address:'地点',hours:'开放信息',admission:'门票',transport:'交通方式',history:'历史背景',design:'建筑与观察重点',highlights:'景点特色',tips:'游览建议',route:'建议步行路线',photos:'拍照机位',faq:'常见问答',sources:'官方参考资料',map:'在 Google 地图查看此地点',back:'返回海神喷泉',free:'公共室外区域免费通行',access:'开放公共空间；活动期间通行情况可能变化',check:'出发前核对官方公告与现场状况'},
  mt: {nearby:'Skopri fil-qrib',section:'Skopri madwar il-Funtana tat-Tritoni',about:'Dwar',facts:'Informazzjoni bażika',address:'Post',hours:'Aċċess',admission:'Dħul',transport:'Kif tasal',history:'Storja',design:'Disinn u dettalji',highlights:'Punti ewlenin',tips:'Pariri',route:'Mixja suġġerita',photos:'Punti għar-ritratti',faq:'Mistoqsijiet',sources:'Sorsi uffiċjali',map:'Ara l-post fuq Google Maps',back:'Lura għall-Funtana tat-Tritoni',free:'Aċċess pubbliku bla ħlas',access:'Spazju fil-beraħ; avvenimenti jistgħu jbiddlu l-aċċess',check:'Iċċekkja l-avviżi qabel iż-żjara'},
  it: {nearby:'Nei dintorni',section:'Esplora vicino alla Fontana dei Tritoni',about:'Informazioni',facts:'Informazioni pratiche',address:'Luogo',hours:'Accesso',admission:'Ingresso',transport:'Come arrivare',history:'Storia',design:'Architettura e dettagli',highlights:'Punti di interesse',tips:'Consigli',route:'Percorso a piedi',photos:'Punti fotografici',faq:'Domande frequenti',sources:'Fonti ufficiali',map:'Apri la posizione su Google Maps',back:'Torna alla Fontana dei Tritoni',free:'Accesso pubblico gratuito',access:'Spazio esterno; accesso variabile durante eventi',check:'Verifica gli avvisi prima della visita'},
  de: {nearby:'In der Nähe',section:'Rund um den Tritonenbrunnen entdecken',about:'Über den Ort',facts:'Basisinformationen',address:'Standort',hours:'Zugang',admission:'Eintritt',transport:'Anreise',history:'Geschichte',design:'Architektur und Details',highlights:'Höhepunkte',tips:'Besuchstipps',route:'Spazierroute',photos:'Fotostandorte',faq:'Häufige Fragen',sources:'Offizielle Quellen',map:'Standort auf Google Maps öffnen',back:'Zurück zum Tritonenbrunnen',free:'Öffentlicher Außenbereich kostenlos',access:'Öffentlicher Außenraum; bei Veranstaltungen Änderungen möglich',check:'Vor dem Besuch aktuelle Hinweise prüfen'},
  es: {nearby:'Cerca de aquí',section:'Explora cerca de la Fuente de los Tritones',about:'Acerca de',facts:'Datos básicos',address:'Ubicación',hours:'Acceso',admission:'Entrada',transport:'Cómo llegar',history:'Historia',design:'Arquitectura y detalles',highlights:'Qué observar',tips:'Consejos',route:'Ruta a pie',photos:'Puntos fotográficos',faq:'Preguntas frecuentes',sources:'Fuentes oficiales',map:'Abrir ubicación en Google Maps',back:'Volver a la Fuente de los Tritones',free:'Acceso público gratuito',access:'Espacio abierto; puede cambiar durante eventos',check:'Consulta avisos antes de visitar'},
};
