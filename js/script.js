// ── QUIZ DATA ──
const quizData = {
  athen: [
    { q: "Mi volt az ekklészia, és kik vehettek részt benne?", a: "Athén népgyűlése – csak szabad, athéni születésű férfiak szavazhattak. Rabszolgák, nők, metoikoszok ki voltak zárva." },
    { q: "Miben különbözik az athéni demokrácia a mai képviseleti demokráciától?", a: "Athénban közvetlen demokrácia volt: a polgárok személyesen szavaztak törvényekről és döntésekről, nem képviselők útján." },
    { q: "Mi volt az osztrakiszmosz és mi volt a célja?", a: "Cserépszavazás – ha valaki 6000 cserépen szerepelt, 10 évre száműzték. A veszélyesnek ítélt politikusokat távolíthatták el vele." },
    { q: "Ki vezette be a területi törzsrendszert Athénban és mikor?", a: "Kleiszthenész Kr.e. 508-ban – ezzel törte meg az arisztokrata törzsi struktúrát és erősítette a demokráciát." },
    { q: "Sorold fel a Periklész-kori athéni demokrácia főbb intézményeit!", a: "Ekklészia (népgyűlés), Bulé (500-ak tanácsa – törvény-előkészítés), Héliaia (esküdtbíróság), sztratégoszok (választott hadvezérek)." }
  ],
  cehs: [
    { q: "Milyen fokozatai voltak a céhrendszernek és hogyan lehetett mesterré válni?", a: "Inas → Legény → Mester. Mesterré remekművel lehetett válni, amelyet a céh bírált el." },
    { q: "Mi a különbség a manufaktúra és a gyár között?", a: "Manufaktúrában kézzel dolgoztak munkamegosztással; gyárban gépekkel folyt a tömegtermelés. A manufaktúra közbülső fejlődési fok." },
    { q: "Melyik az egyetlen magyar alapítású szerzetesrend?", a: "A pálos rend (Boldog Özséb alapította a 13. században, Pilisben). Erre érettségin rá szoktak kérdezni!" },
    { q: "Mi volt a bencés rend jelmondata és fő tevékenysége?", a: "\"Ora et labora\" – Imádkozz és dolgozz. Fő tevékenység: mezőgazdaság, kultúra megőrzése, oktatás terjesztése." },
    { q: "Mik jellemzők a gótikus stílusra?", a: "Csúcsív, karcsú torony, nagy üvegfestett ablakok, rózsaablak – a katedrálisok magas, légies megjelenése. Pl. párizsi Notre-Dame." }
  ],
  honfoglalas: [
    { q: "Mikor és kinek a vezetésével foglalták el a magyarok a Kárpát-medencét?", a: "895–896-ban Árpád vezér irányításával. Az Árpád-ház alapítója lett." },
    { q: "Mi volt az augsburgi (lechfeldi) csata és mi lett a következménye?", a: "955-ben I. (Nagy) Ottó legyőzte a magyarokat – ezzel véglegesen véget ért a kalandozások kora." },
    { q: "Mikor koronázták meg I. Istvánt és miért volt kiemelkedő esemény?", a: "1000/1001-ben (dec. 25. vagy jan. 1.). Pápai koronával – ez a keresztény Európához való csatlakozást szimbolizálta." },
    { q: "Miért hagyták el a magyarok Etelközt?", a: "Besenyő nyomás (katonai támadás) miatt kényszerültek nyugatabbra, a Kárpát-medencébe vonulni." },
    { q: "Mit épített ki I. István az új keresztény királyság igazgatásához?", a: "Vármegyerendszert (ispánok élén) és egyházi szervezetet: püspökségeket, apátságokat (pl. pannonhalmi bencés apátság)." }
  ],
  matyas: [
    { q: "Mi volt a Fekete sereg és miért volt politikailag fontos?", a: "Mátyás zsoldos hadserege – nem a nemesektől függött, hanem közvetlenül a királynak engedelmeskedett. A királyi hatalom alapja lett." },
    { q: "Mi a Corvina könyvtár és mi a jelentősége?", a: "Mátyás humanista könyvgyűjteménye – Európa egyik leggazdagabb könyvtára volt. A reneszánsz kultúra jelképe Magyarországon." },
    { q: "Mikor és mit foglalt el Mátyás a Habsburgoktól?", a: "1485-ben elfoglalta Bécset és ideiglenesen ott rendezte be udvarát – ezzel a Habsburgokat kiszorította." },
    { q: "Mi lett Mátyás halálának (1490) következménye Magyarországra nézve?", a: "Utód nélkül halt meg. A Jagelló-kor következett, amely hanyatlást hozott – megindult az ország gyengülése Mohács felé." },
    { q: "Ki volt Hunyadi János és mi a kapcsolata Mátyással?", a: "Hunyadi János Mátyás apja, Magyarország kormányzója volt. 1456-ban megvédte Nándorfehérvárt a törököktől – ez Mátyás apjának legnagyobb dicsősége." }
  ],
  felfedezes: [
    { q: "Mikor, ki és milyen zászló alatt fedezte fel Amerikát? Mit keresett valójában?", a: "1492-ben Kolumbusz Kristóf spanyol zászló alatt – valójában Indiát kereste nyugat felé haladva. Nem tudta, hogy új kontinenst talált." },
    { q: "Mi volt a háromszögű kereskedelem?", a: "Európa → Afrika (fegyver, szövet) → rabszolgák → Amerika (ültetvények) → nemesfémek, cukor, dohány → Európa. Egymást erősítő kör." },
    { q: "Mi a merkantilizmus lényege?", a: "Az állam gazdagságát az arany/ezüst felhalmozásával mérték; erős exportot, korlátozott importot és gyarmatosítást szorgalmaztak." },
    { q: "Ki és mikor hajózta körbe először a Földet?", a: "Magellán–Elcano expedíciója 1519–1522 között. Magellán útközben meghalt, Elcano fejezte be az utat." },
    { q: "Milyen élelmiszerek kerültek Európába a felfedezések nyomán?", a: "Burgonya, kukorica, paradicsom, paprika, kakaó, dohány – ezek alapvetően átírták az európai étrendet." }
  ],
  mohacs: [
    { q: "Mikor volt a mohácsi csata és mi lett az eredménye?", a: "1526. augusztus 29-én. I. Szulejmán szultán legyőzte a magyarokat. II. Lajos király menekülés közben a Csele-patakba fulladt." },
    { q: "Mikor és hogyan szakadt három részre Magyarország?", a: "1541-ben Buda elestével alakult ki a hármas tagolódás: Török hódoltság (közép), Királyi Magyarország (észak-nyugat, Habsburg), Erdélyi Fejedelemség (kelet)." },
    { q: "Hogyan kerültek a Habsburgok a magyar trónra?", a: "II. Lajos halála után: nővére Habsburg Máriához ment feleségül, maga II. Lajos pedig Habsburg Máriát vette el – I. Ferdinánd örökölte a trónt." },
    { q: "Mi volt az Erdélyi Fejedelemség jogi helyzete?", a: "Oszmán vazallus állam – évi adót fizetett a szultánnak, de belső önállósággal rendelkezett. Egyfajta ütközőállam volt." },
    { q: "Miért volt Mohács előre látható katasztrófa?", a: "Mátyás halála (1490) után hanyatlás indult, a Jagelló-királyok gyengék voltak, a nemesség nem akart adót fizetni a hadseregre – így a török ellen nem volt megfelelő védelmi képesség." }
  ],
  felvilagosodas: [
    { q: "Mi Montesquieu legfontosabb elmélete?", a: "A hatalmi ágak elválasztása: törvényhozó, végrehajtó és bírói hatalom legyen különálló – egyik se összpontosuljon egy kézben." },
    { q: "Mi a különbség a felvilágosodás és a felvilágosult abszolutizmus között?", a: "A felvilágosodás eszmerendszer (gondolkodók ideái). A felvilágosult abszolutizmus olyan monarchia, amely alkalmaz felvilágosult elveket, de az uralkodó nem mond le abszolút hatalmáról." },
    { q: "Mit tett II. József 1781-ben és miért volt ez forradalmi?", a: "Türelmi rendelet (protestánsok vallásszabadsága) és jobbágyrendelet (szabad költözési jog) – a feudális rend alapjait ingatták meg." },
    { q: "Miért hívták II. Józsefet \"kalapos királynak\"?", a: "Nem koronáztatta meg magát a Szent Koronával, kalap volt a fején – ezzel elutasította a hagyományos magyar rendi kereteket." },
    { q: "Mi Rousseau társadalmi szerződés elméletének lényege?", a: "Az állam a polgárok szabad megállapodásán alapul. A hatalmat a nép adja, és vissza is veheti – ez az egyik gyökere a demokrácia-elvnek." }
  ],
  ipari: [
    { q: "Hol és mikor kezdődött az első ipari forradalom?", a: "Angliában, kb. 1760–1840 között. A textilipar gépesítésével és a gőzgép elterjedésével indult meg." },
    { q: "Ki fejlesztette ki a hatékony gőzgépet és mikor?", a: "James Watt 1769-ben. Ez lett az ipari forradalom szimbolikus motorja – mozdonyokban, gyárakban alkalmazták." },
    { q: "Milyen új társadalmi osztályok jöttek létre az iparosodás nyomán?", a: "Burzsoázia (tőkések/gyárosok – termelési eszközök tulajdonosai) és proletariátus (bérmunkások – nincs saját termelési eszközük)." },
    { q: "Miben különbözött a 2. ipari forradalom az elsőtől?", a: "Elektromosság, vegyipar, acélipar, autógyártás – USA és Németország vette át a vezető szerepet Angliától." },
    { q: "Mi a marxizmus alapgondolata?", a: "A tőkés társadalom osztályharcra épül; a munkásosztálynak forradalommal kell megdöntenie a tőkés rendszert, a magántulajdon megszüntetésével." }
  ],
  reformkor: [
    { q: "Ki volt Széchenyi István és miért hívták \"a legnagyobb magyarnak\"?", a: "Reformkori politikus – saját egyévi jövedelmét ajánlotta fel az MTA alapítására (1825). Nevéhez fűződik a Lánchíd, a Tisza-szabályozás és a balatoni gőzhajózás." },
    { q: "Mi volt a liberális nemesség fő követelése a reformkorban?", a: "Sajtószabadság (cenzúra eltörlése), közteherviselés (nemesek is adózzanak), jobbágyfelszabadítás, felelős kormány – ezekből lett a 12 pont." },
    { q: "Mi volt a Pesti Hírlap szerepe a reformkorban?", a: "Kossuth Lajos szerkesztette (1841-től). Terjesztette a reformeszmék et és formálta a közvéleményt – a korabeli \"social media\" szerepét töltötte be." },
    { q: "Miben különbözött Széchenyi és Kossuth reformstratégiája?", a: "Széchenyi: fokozatos gazdasági reformok Habsburg-kereteken belül. Kossuth: politikai függetlenség, gyorsabb változás, szélesebb néprétegeket mozgósít." },
    { q: "Mit mondott ki az 1848-as úrbéri törvény?", a: "Eltörölte a jobbágyi kötelezettségeket (robot, dézsma, kilenced), a jobbágyokat szabad parasztokká tette – ez volt a reformkor egyik legnagyobb vívmánya." }
  ],
  '1848': [
    { q: "Mi volt a 12 pont három legfontosabb követelése?", a: "Sajtószabadság (cenzúra eltörlése), felelős (az országgyűlésnek felelős) kormány, jobbágyfelszabadítás." },
    { q: "Ki volt Magyarország első felelős miniszterelnöke és mi lett a sorsa?", a: "Batthyány Lajos – 1849. október 6-án kivégezték Pesten. Ugyanazon a napon, amikor Aradon a 13 honvéd tábornokot." },
    { q: "Mi volt a Függetlenségi nyilatkozat és mikor fogadták el?", a: "1849. április 14-én Debrecenben mondták ki a Habsburgok trónfosztását és Magyarország függetlenségét. Kossuth lett a kormányzó-elnök." },
    { q: "Mi volt Világos és mikor történt? Miért fontos, kinek adták meg magukat?", a: "1849. augusztus 13-án Görgei Artúr az orosz csapatok előtt tette le a fegyvert – nem az osztrákok előtt! Ez Haynau megtorláshoz vezetett." },
    { q: "Mi történt 1849. október 6-án és miért fontos ma is?", a: "Aradon kivégezték a 13 honvéd tábornokot (aradi vértanúk); Pesten Batthyány Lajost. Ma ez a Magyar Gyász Napja." }
  ],
  nemetegyseg: [
    { q: "Ki volt Bismarck és milyen módszerrel egységesítette Németországot?", a: "Otto von Bismarck porosz miniszterelnök/kancellár – \"vérrel és vassal\", azaz katonai győzelmekkel, nem liberális parlamenti politikával." },
    { q: "Mikor és hol kiáltották ki a Német Birodalmat?", a: "1871. január 18-án Versailles-ban, a tükörtermében – a legyőzött Franciaország fővárosában. I. Vilmos lett a császár." },
    { q: "Mit döntött el a königgrätzi (sadowai) csata 1866-ban?", a: "Poroszország győzött Ausztria felett – Ausztria kiesett a german egységből. Ezentúl Poroszország vezette a német államokat." },
    { q: "Mi az összefüggés Königgrätz (1866) és a magyar kiegyezés (1867) között?", a: "Az osztrákok a porosz vereség után kompromisszumra kényszerültek, és egyeztek ki Magyarországgal 1867-ben – a két esemény ok-okozati összefüggésben van." },
    { q: "Melyik tartományt vette el Poroszország Franciaországtól 1871 után és miért volt ez következményes?", a: "Elzász-Lotaringia – ez Franciaország megalázásává vált és a revans-igény hozzájárult az I. vh. feszültségeihez." }
  ],
  polgarhab: [
    { q: "Mi volt az alapvető gazdasági-társadalmi ellentét az Észak és a Dél között?", a: "Az Észak iparosodott bérmunkával; a Dél ültetvényes gazdaságra épített rabszolga-munkával. Ez alapvető életmód- és érdek-különbség volt." },
    { q: "Ki volt Lincoln és mi volt az Emancipációs nyilatkozat?", a: "Abraham Lincoln az USA 16. elnöke. 1863. január 1-jén kiadott nyilatkozatával a déli rabszolgákat szabadnak nyilvánította." },
    { q: "Mikor és hogyan ért véget a polgárháború?", a: "1865 tavaszán – Lee tábornok Appomattoxnál megadta magát Grant tábornoknak. Az Unió (Észak) győzött." },
    { q: "Mi volt a 13. alkotmánykiegészítés?", a: "Alkotmányos szinten eltörölte a rabszolgaságot az egész USA területén – nem csak a déli államokban." },
    { q: "Mi volt Lincoln meggyilkolásának időpontja és körülménye?", a: "1865. április 14-én a Ford Színházban lőtte le John Wilkes Booth; másnap belehalt. A győzelem után néhány nappal halt meg." }
  ],
  dualizmus: [
    { q: "Mi volt a kiegyezés lényege és ki dolgozta ki?", a: "1867-ben jött létre az Osztrák–Magyar Monarchia. Deák Ferenc dolgozta ki – a külügy, hadügy, pénzügy közös maradt, minden más különálló." },
    { q: "Ki volt a Monarchia közös uralkodója és milyen kettős szerepe volt?", a: "Ferenc József – egyszerre volt osztrák császár (Bécsben) és magyar király (Budapesten). Két főváros, egy ember." },
    { q: "Mi volt a millennium és mikor tartották?", a: "1896-ban ünnepelték a honfoglalás 1000. évfordulóját – Millenniumi Kiállítás, Hősök tere, Andrássy út, Földalatti vasút ekkor nyílt meg." },
    { q: "Mi volt az 1868-as nemzetiségi törvény valódi ellentmondása?", a: "Elvileg liberálisan biztosította a nemzeti jogokat, de a valóságban erős magyarosítás folyt az oktatásban és közigazgatásban." },
    { q: "Milyen feszültségek gyűltek fel a dualizmus korában, amelyek végül a Monarchia összeomlásához vezettek?", a: "Munkásmozgalom, agrárszegénység, erősödő nemzeti mozgalmak (románok, szlávok, szlovákok), a háborús terhek – mindez aláaknázta a rendszert." }
  ],
  ww1: [
    { q: "Mi volt az I. világháború közvetlen kiváltó oka?", a: "Ferenc Ferdinánd osztrák–magyar trónörökös meggyilkolása Szarajevóban, 1914. június 28-án – egy bosnyák szerb nacionalista, Gavrilo Princip által." },
    { q: "Kik alkották a két szembenálló szövetségi rendszert?", a: "Központi hatalmak: Németország, Osztrák–Magyar Monarchia, Oszmán Birodalom, Bulgária. Antant: Franciaország, Oroszország, Nagy-Britannia (USA 1917-től)." },
    { q: "Mikor és hogyan ért véget az I. világháború?", a: "1918. november 11-én a compiègne-i fegyverszünettel, a Központi hatalmak vereségével. A 11. hó 11. napján 11 órakor!" },
    { q: "Mi volt az őszirózsás forradalom?", a: "1918. október végén Magyarországon lezajló polgári forradalom, Károlyi Mihály vezette. A Monarchia összeomlásának kísérőjelensége – a katonák őszirózsát tűztek ki." },
    { q: "Hogyan hatott a versailles-i békerendszer az európai stabilitásra?", a: "Új határok, Németország megalázása és jóvátétel-kötelezettség → gazdasági válság → fasizmus felemelkedése → végül II. vh. Ez az \"el nem intézett béke\" közvetlen következménye." }
  ],
  trianon: [
    { q: "Mikor és hol írták alá a trianoni békét?", a: "1920. június 4-én a Versailles-i kastély Nagy-Trianon palotájában." },
    { q: "Mekkora területet és mekkora népességet érintett Trianon?", a: "Magyarország területének kb. 2/3-a elcsatolva; az ott élő magyar anyanyelvű népesség kb. 1/3-a határon kívülre került." },
    { q: "Melyik utódállamok kaptak területeket Magyarországtól?", a: "Csehszlovákia (Felvidék, Kárpátalja), Románia (Erdély, Partium), SHS Királyság / Jugoszlávia (Délvidék), Ausztria (Burgenland)." },
    { q: "Mi volt a revizionizmus és hogyan jelent meg a Horthy-korszakban?", a: "A határok megváltoztatásának politikai igénye – \"Nem! Nem! Soha!\" jelszóval, területi visszaszerzési céllal. Ez vezette Magyarországot a bécsi döntések felé és a II. vh.-ba." },
    { q: "Mi a különbség a trianoni (1920) és a párizsi béke (1947) között?", a: "Trianon az I. vh. lezárta; a párizsi béke a II. vh. után visszaállította a trianoni határokat (az I–II. bécsi döntéssel visszakapott területek újra elvesztek)." }
  ],
  ww2: [
    { q: "Mi volt a Don-kanyar és mikor volt?", a: "1942–43 telén a 2. magyar hadsereg megsemmisült a szovjet fronton; kb. 200 000 fő veszteség – az egyik legnagyobb magyar katonai katasztrófa." },
    { q: "Mi volt a bécsi döntések célja és eredménye?", a: "Magyarország visszakapta elveszített területeinek egy részét: 1938 (Felvidék déle), 1940 (Észak-Erdély) – Németország és Olaszország döntőbíráskodásával." },
    { q: "Mi történt 1944. március 19-én?", a: "Németország megszállta Magyarországot – ezután indultak meg a tömeges zsidó deportálások Eichmann irányításával." },
    { q: "Hány magyar zsidót deportáltak és hova? Mi lett a sorsuk?", a: "Kb. 600 000 főt – főleg Auschwitzba, ahol a legtöbbjük meghalt. Ez a holokauszt egyik legnagyobb egységes deportálási akciója volt." },
    { q: "Mi volt Horthy 1944. október 15-i kiugrási kísérletének eredménye?", a: "Sikertelen volt – a németek Horthy fiát túszul ejtették. A nyilasok átvették a hatalmat, Szálasi Ferenc lett a \"nemzetvezető\"." }
  ],
  hideghaboru: [
    { q: "Mi volt a Truman-doktrína (1947) lényege?", a: "Az USA meghirdette a kommunizmus terjedésének feltartóztatását – gazdasági és katonai segítséget nyújtott a fenyegetett országoknak (pl. Görögország, Törökország)." },
    { q: "Mi volt a vasfüggöny Churchill szerint?", a: "1946-ban emlegetett metafora – képzeletbeli határ, amely demokratikus Nyugatra és szovjet dominanciájú Keletre osztotta Európát, Stettintől Triesztig." },
    { q: "Mi volt a kubai rakétaválság (1962) és miért volt különösen veszélyes?", a: "A Szovjetunió nukleáris rakétákat telepített Kubába; az USA blokáddal és ultimátummal reagált. Kennedy és Hruscsov között dőlt el a világ sorsa – ez volt a hidegháború csúcspontja." },
    { q: "Mit jelent a glasznoszty és a peresztrojka?", a: "Gorbacsov reformjai: glasznoszty = nyitottság (szabad sajtó), peresztrojka = átalakítás (gazdasági reform). Ezek veztek a Szovjetunió felbomlásához." },
    { q: "Mikor omlott le a berlini fal és mi volt a szimbolikája?", a: "1989. november 9-én – a hidegháború végének és Európa újraegyesülésének szimbolikus pillanata. 1961-től 1989-ig állt." }
  ],
  kadar: [
    { q: "Mi volt az 1956-os forradalom és mikor tört ki?", a: "1956. október 23-án kitört antisztálinista, szovjetellenesforradalom Budapesten. Nagy Imre lett miniszterelnök, semlegességet hirdetett." },
    { q: "Mi volt a \"gulyáskommunizmus\"?", a: "Kádár-kori sajátosság – viszonylagos fogyasztói jólét (hűtő, autó, nyaralás) és politikai enyhülés a kommunista diktatúra keretei között." },
    { q: "Mi volt az 1968-as Új Gazdasági Mechanizmus?", a: "Gazdasági reform, amely korlátozott piaci elemeket engedett be a szocialista tervgazdaságba – vállalatok némi önállóságot kaptak." },
    { q: "Mi történt 1989. május 2-án és miért volt világtörténelmi jelentőségű?", a: "Magyarország lebontotta a vasfüggönyt – NDK-sok tömegesen menekültek Nyugatra Ausztrián át. Ez felgyorsította a kommunista rendszerek dominószerű összeomlását." },
    { q: "Mikor kiáltották ki a Magyar Köztársaságot és mikor voltak az első szabad választások?", a: "1989. október 23-án kiáltották ki; 1990-ben tartották az első szabad választásokat. Az MDF győzött, Antall József lett a miniszterelnök." }
  ],
  eu: [
    { q: "Mikor és mivel kezdődött az európai integráció?", a: "1951-ben a Montánunióval (ESZAK – szén és acél közösség), majd 1957-ben a Római Szerződéssel létrejött az EGK (Európai Gazdasági Közösség)." },
    { q: "Mik voltak az EGK 1957-es alapítói?", a: "Franciaország, Nyugat-Németország (NSZK), Olaszország, Belgium, Hollandia, Luxemburg – 6 állam, \"a hatok\"." },
    { q: "Mikor jött létre az EU és mi változott az EGK-hoz képest?", a: "1992-ben a Maastrichti Szerződéssel – politikai unió lett, nemcsak gazdasági közösség. Bevezették az EU-állampolgárságot és az euró tervét." },
    { q: "Mikor csatlakozott Magyarország az EU-hoz és mi lett az euróval?", a: "2004. május 1-jén csatlakozott; az euró nincs bevezetve, Magyarország megtartotta a forintot." },
    { q: "Mik az EU négy alapszabadsága?", a: "Áruk, személyek, tőke és szolgáltatások szabad áramlása a tagállamok között – ezek az egységes belső piac alapjai." }
  ],
  vallasok: [
    { q: "Mi a különbség a monoteizmus és politeizmus között? Melyik vallások tartoznak melyik kategóriába?", a: "Monoteizmus = egy isten (zsidóság, kereszténység, iszlám). Politeizmus = sok isten (görög, római, egyiptomi vallás). A zsidóság volt az első nagy monoteista vallás az ókori Keleten." },
    { q: "Mikor és hogyan lett a kereszténység Róma államvallása?", a: "380-ban Nagy Theodosius rendelete alapján. Előtte Constantinus már tolerálta (313, milánói ediktum), de Theodosius tette kizárólagos állami vallássá." },
    { q: "Mi volt Luther 95 tézisének lényege és mi lett a következménye?", a: "1517-ben Luther meghirdette, hogy a búcsúcédula nem ment fel a bűnök alól – az üdvözülés Istentől, nem az egyháztól függ. Következmény: protestáns egyházak kialakulása (lutheránus, református, anglikán)." },
    { q: "Mi az augsburgi vallásbéke (1555) és mi a tordai ediktum (1568)?", a: "Augsburg: 'akié a föld, azé a vallás' – a fejedelem dönti el az alattvalók vallását. Torda: Erdélyben 4 bevett vallás szabadon gyakorolható (katolikus, lutheránus, református, unitárius) – európai elsőség." },
    { q: "Mik az iszlám öt pillére és mikor állt meg az arab terjeszkedés Európában?", a: "5 pillér: hitvallás (saháda), ima (napi 5x), böjt (ramadán), alamizsna (zakát), mekkai zarándoklat (hadzs). Az arab hódítást 732-ben Martell Károly állította meg Poitiers-nél." }
  ],
  vizsgainfo: [
    { q: "Mennyi ideig tart a középszintű írásbeli vizsga és hány pontot ér?", a: "180 perc, összesen 100 pont. I. rész (12 feladat) = 50 pont; II. rész (esszék) = 50 pont." },
    { q: "Hány esszét kell írni és hogyan kell választani a II. részben (középszint)?", a: "4 feladatból 2-t kell választani: 1 rövid (100–130 szó) az egyetemes, 1 hosszú (210–260 szó) a magyar történelemből – egyik 1849-ig, másik 1849 után kell legyen." },
    { q: "Melyik szóbeli értékelési szempont ér legtöbbet és mennyit?", a: "\"Történelmi gondolkodás és történelmi ismeretek\" – 18 pont (50-ből). Ha a feladatmegértés 0 pont, az egész tétel 0 pontot ér!" },
    { q: "Hogyan oszlanak el a 12 rövid feladat a témakörök között?", a: "1. (ókor) és 7. (jelenkor) témakörből 1-1 feladat; a 2–6. témakörből 2-2 feladat. Legalább 50%-a magyar történelemre vonatkozik, kötelező egy komplex MH forráselemző." },
    { q: "Milyen arányban kell megjelenni a különböző történelmi területeknek a feladatsorban?", a: "Politika/állam/jog: 35–45%; Társadalom/kultúra/életmód: 17–23%; Gazdaság/technika: 17–23%; Eszme/vallás: 17–23%." }
  ],
  adozas: [
    { q: "Mi a különbség a közvetlen és közvetett adó között?", a: "Közvetlen: jövedelem/vagyon után (pl. SZJA – a fizető közvetlenül adózik). Közvetett: fogyasztásra terhelt (pl. ÁFA) – a végfogyasztó viseli, de más fizeti be az államnak." },
    { q: "Mi volt a jobbágyság három fő terhe a feudalizmusban?", a: "Robot (ingyenes munka a földesúrnak), kilenced (termés 1/9-e a földesúrnak), tized (termés 1/10-e az egyháznak)." },
    { q: "Mi a progresszív adó és mi a különbség a proporcionálissal?", a: "Progresszív: magasabb jövedelemnél magasabb %-os adó (sávos). Proporcionális (egykulcsos): mindenki ugyanolyan %-ot fizet jövedelmétől függetlenül." },
    { q: "Mi a háztartás kettős szerepe a gazdaságban?", a: "Egyszerre termelő (munkavégzés, jövedelem szerzése) és fogyasztó (áruk és szolgáltatások vásárlása). Termel és elkölt." },
    { q: "Mi volt a kapuadó a középkorban és ki szedte?", a: "Az állam (király) részére fizetett adó, amelyet portánként (kapun átférő szénásszekér alapján) számítottak. A nemesek adómentesek voltak – a jobbágyok fizették." }
  ]
};

// ── QUIZ STATE ──
const quizState = {};

// ── TOGGLE (section open/close) ──
function toggle(header) {
  header.classList.toggle('open');
  const body = header.nextElementSibling;
  body.classList.toggle('open');
}

// ── RENDER QUIZ ──
function renderQuiz(topicId, container) {
  const state = quizState[topicId];
  const qs = quizData[topicId];
  const q = qs[state.current];
  container.innerHTML =
    '<div class="quiz-header">' +
      '<span class="quiz-label">Gyors kérdések – 2026</span>' +
      '<span class="quiz-progress">' + (state.current + 1) + ' / ' + qs.length + '</span>' +
    '</div>' +
    '<div class="flip-card" id="flip-' + topicId + '">' +
      '<div class="flip-front">' +
        '<div class="flip-q">' + q.q + '</div>' +
        '<button class="btn-reveal" onclick="flipQ(\'' + topicId + '\')">Mutasd a választ ↩</button>' +
      '</div>' +
      '<div class="flip-back">' +
        '<div>' +
          '<div class="flip-a-label">✓ Válasz</div>' +
          '<div class="flip-a">' + q.a + '</div>' +
        '</div>' +
        '<button class="btn-reveal green-btn" onclick="flipQ(\'' + topicId + '\')">↩ Vissza a kérdéshez</button>' +
      '</div>' +
    '</div>' +
    '<div class="quiz-nav">' +
      '<button class="btn-qnav" onclick="prevQ(\'' + topicId + '\')" ' + (state.current === 0 ? 'disabled' : '') + '>← Előző</button>' +
      '<button class="btn-qnav" onclick="nextQ(\'' + topicId + '\')" ' + (state.current === qs.length - 1 ? 'disabled' : '') + '>Következő →</button>' +
    '</div>';
}

// ── FLIP ──
function flipQ(topicId) {
  const card = document.getElementById('flip-' + topicId);
  if (card) card.classList.toggle('flipped');
}

// ── UPDATE CARD CONTENT (nav without full re-render) ──
function updateCard(topicId) {
  const state = quizState[topicId];
  const qs = quizData[topicId];
  const q = qs[state.current];
  const container = document.querySelector('.quiz-section[data-topic="' + topicId + '"]');
  if (!container) return;
  container.querySelector('.flip-q').textContent = q.q;
  container.querySelector('.flip-a').textContent = q.a;
  container.querySelector('.quiz-progress').textContent = (state.current + 1) + ' / ' + qs.length;
  const card = document.getElementById('flip-' + topicId);
  if (card) card.classList.remove('flipped');
  const navBtns = container.querySelectorAll('.btn-qnav');
  navBtns[0].disabled = state.current === 0;
  navBtns[1].disabled = state.current === qs.length - 1;
}

function prevQ(topicId) {
  if (quizState[topicId].current > 0) {
    quizState[topicId].current--;
    updateCard(topicId);
  }
}

function nextQ(topicId) {
  if (quizState[topicId].current < quizData[topicId].length - 1) {
    quizState[topicId].current++;
    updateCard(topicId);
  }
}

// ── INIT ALL QUIZZES ──
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('footer-year').textContent = new Date().getFullYear();
  document.querySelectorAll('.quiz-section[data-topic]').forEach(function(el) {
    var topicId = el.dataset.topic;
    if (quizData[topicId]) {
      quizState[topicId] = { current: 0 };
      renderQuiz(topicId, el);
    }
  });
});