export type Lang = "nb" | "en" | "bs";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "nb", label: "Norsk", short: "NO" },
  { code: "en", label: "English", short: "EN" },
  { code: "bs", label: "Bosanski", short: "BS" },
];

export type NavKey = "home" | "electronics" | "service" | "ewaste" | "ai" | "contact";

type Pair = [string, string];

export type SiteContent = {
  nav: Record<NavKey, string>;
  footer: { tagline: string; locations: string };
  cta: { title: string; text: string; button: string };
  notFound: { title: string; text: string; button: string };
  home: {
    kicker: string;
    h1a: string;
    h1b: string;
    lead: string;
    primary: string;
    secondary: string;
    heroAlt: string;
    h2: string;
    cards: { tag: string; title: string; text: string }[];
    service: { tag: string; title: string; text: string; link: string };
  };
  elektronika: {
    kicker: string;
    title: string;
    lead: string;
    cats: Pair[];
    checks: string[];
    repair: { title: string; text: string; button: string };
  };
  servis: {
    kicker: string;
    title: string;
    lead: string;
    services: Pair[];
    steps: Pair[];
    buyout: { title: string; text: string; button: string };
  };
  eotpad: { kicker: string; title: string; lead: string; steps: Pair[] };
  usluge: {
    kicker: string;
    title: string;
    lead: string;
    cards: { tag: string; title: string; text: string }[];
  };
  kontakt: {
    kicker: string;
    title: string;
    lead: string;
    labels: { phone: string; email: string; location: string };
  };
};

const nb: SiteContent = {
  nav: {
    home: "Hjem",
    electronics: "Brukt elektronikk",
    service: "Service",
    ewaste: "Oppkjøp av elektronavfall",
    ai: "AI & design",
    contact: "Kontakt",
  },
  footer: {
    tagline: "Brukt elektronikk, service og reparasjoner, e-mobilitet, resirkulering og AI-løsninger.",
    locations: "Bergen og Stord, Norge",
  },
  cta: {
    title: "Har du et spørsmål eller en enhet du vil selge?",
    text: "Ta kontakt – vi svarer raskt.",
    button: "Kontakt oss",
  },
  notFound: {
    title: "Siden ble ikke funnet",
    text: "Siden du leter etter, finnes ikke eller er flyttet.",
    button: "Til forsiden",
  },
  home: {
    kicker: "Elektronikk · E-mobilitet · AI",
    h1a: "Teknologi med en ny sjanse,",
    h1b: "til riktig pris.",
    lead: "Vi selger kontrollert brukte elektroniske enheter og elektriske kjøretøy til svært gunstige priser, kjøper opp elektronavfall og bygger smarte AI-løsninger for bedriften din.",
    primary: "Se tilbudet",
    secondary: "Selg oss en enhet",
    heroAlt: "En brukt bærbar PC, telefon og nettbrett",
    h2: "Det vi gjør",
    cards: [
      { tag: "Primært", title: "Brukt elektronikk", text: "Bærbare PC-er, stasjonære PC-er, nettbrett og mobiltelefoner – testet og klare til bruk." },
      { tag: "E-mobilitet", title: "Elektriske sparkesykler og sykler", text: "Rimlig overgang til elektrisk kjøring i byen." },
      { tag: "Eko", title: "Oppkjøp og resirkulering av elektronavfall", text: "Oppkjøp, sortering og ansvarlig resirkulering av gammel elektronikk." },
      { tag: "AI", title: "AI-botter og AI-resepsjonister", text: "Virtuelle assistenter som svarer kundene dine døgnet rundt." },
      { tag: "Automatisering", title: "Forretningsautomatisering", text: "Mindre manuelt arbeid, mer tid til vekst." },
      { tag: "Design", title: "Branding, logo, 3D og AI-visualisering", text: "Komplett visuell identitet for merkevaren din." },
    ],
    service: {
      tag: "Service",
      title: "Service av elektronikk, elsykler, sparkesykler og motorsykler",
      text: "En feil er ikke slutten – vi feilsøker og reparerer bærbare PC-er, stasjonære PC-er, mobiltelefoner, elektriske sparkesykler, sykler og motorsykler.",
      link: "Se service",
    },
  },
  elektronika: {
    kicker: "Vår hovedvirksomhet",
    title: "Brukt elektronikk til svært gunstige priser",
    lead: "Alle enheter kontrolleres før salg. Spør oss om aktuell lagerstatus.",
    cats: [
      ["Bærbare PC-er", "Forretnings- og gamingmodeller med kontrollerte batterier og skjermer."],
      ["Stasjonære PC-er", "PC-konfigurasjoner for kontor, skole og spill."],
      ["Nettbrett", "For læring, arbeid og underholdning – rimelig."],
      ["Mobiltelefoner", "Testede smarttelefoner fra kjente merker."],
      ["Elektriske sparkesykler", "Elektrisk bykjøring uten drivstoffkostnad."],
      ["Elektriske sykler", "Lettere sykling med elmotorens hjelp."],
    ],
    checks: ["Testede enheter", "Lave priser", "Rask avtale og henting"],
    repair: {
      title: "Enheten er defekt eller virker ikke?",
      text: "Vi utfører service av bærbare PC-er, stasjonære PC-er, nettbrett og mobiltelefoner, samt reparasjon av elektriske sparkesykler, sykler og motorsykler.",
      button: "Se service",
    },
  },
  servis: {
    kicker: "Service",
    title: "Service av elektronikk, elsykler, sparkesykler og motorsykler",
    lead: "En defekt enhet behøver ikke være slutten. Vi kontrollerer, feilsøker og reparerer – med et tydelig pristilbud før arbeidet startes.",
    services: [
      ["Service av elektronikk", "Feilsøking og reparasjon av bærbare PC-er, stasjonære PC-er, nettbrett og mobiltelefoner – maskinvare og programvare."],
      ["Skjerm, batteri, ladekontakt", "Bytte av skjerm, batteri, tastatur, ladekontakter og andre deler."],
      ["Service av elektriske sparkesykler", "Batteri, motor, kontroller, bremser, dekk og elektronikk – raskt og rimelig."],
      ["Service av elektriske sykler", "Service av drivverk, motor og batteri, samt innstilling og regelmessig vedlikehold."],
      ["Service av motorsykler og motorer", "Regelmessig service, mekaniske reparasjoner, feilsøking og klargjøring for kontroll."],
      ["Oppgradering av PC", "Raskere disk, mer minne, rengjøring og oppfrisking av eldre konfigurasjoner."],
    ],
    steps: [
      ["Meld fra om feilen", "Beskriv problemet eller send et bilde av enheten."],
      ["Feilsøking", "Vi kontrollerer enheten og finner årsaken til feilen."],
      ["Pristilbud", "Du får pris og leveringstid før vi gjør noen ting."],
      ["Reparasjon", "Vi reparerer og tester – du får en fungerende enhet."],
    ],
    buyout: {
      title: "Lønner det seg ikke å reparere?",
      text: "Vi kjøper opp defekte og gamle enheter – alt havner i sortering og resirkulering av elektronavfall.",
      button: "Selg oss enheten",
    },
  },
  eotpad: {
    kicker: "Elektronavfall",
    title: "Oppkjøp, sortering og resirkulering av elektronavfall",
    lead: "Gamle bærbare PC-er, telefoner, stasjonære PC-er, kabler og batterier hører ikke hjemme i søpla. Vi kjøper dem opp og gir dem nytt liv.",
    steps: [
      ["Ta kontakt", "Send oss en beskrivelse eller et bilde av enheten."],
      ["Vurdering", "Vi gir deg et pristilbud for oppkjøp."],
      ["Henting", "Vi avtaler overlevering eller henting."],
      ["Resirkulering", "Vi sorterer, fornyer eller resirkulerer på en ansvarlig måte."],
    ],
  },
  usluge: {
    kicker: "Smart Solutions",
    title: "AI, automatisering og komplett branding",
    lead: "Smart verktøy og visuell identitet som sparer tiden din og tiltrekker kunder.",
    cards: [
      { tag: "AI", title: "AI-botter", text: "Chatbotter for nettside, Viber, WhatsApp og sosiale medier." },
      { tag: "AI", title: "AI-resepsjonister", text: "Virtuell resepsjonist som tar imot anrop, booker timer og svarer døgnet rundt." },
      { tag: "Automatisering", title: "Forretningsautomatisering", text: "Vi kobler sammen verktøyene dine og fjerner gjentagende oppgaver." },
      { tag: "Design", title: "Logo og branding", text: "Komplette brandingløsninger – fra logotype til visuell identitet." },
      { tag: "3D", title: "3D-design", text: "3D-modeller og visualiseringer av produkter og rom." },
      { tag: "AI", title: "AI-visualisering", text: "Realistiske visualiseringer av produkter, interiør og kampanjer med AI." },
    ],
  },
  kontakt: {
    kicker: "Kontakt",
    title: "La oss ta en prat",
    lead: "Kjøp, service, oppkjøp eller nytt prosjekt – ta kontakt på telefon eller e-post.",
    labels: { phone: "Telefon", email: "E-post", location: "Sted" },
  },
};

const en: SiteContent = {
  nav: {
    home: "Home",
    electronics: "Used electronics",
    service: "Service",
    ewaste: "E-waste buyback",
    ai: "AI & design",
    contact: "Contact",
  },
  footer: {
    tagline: "Used electronics, service and repairs, e-mobility, recycling and AI solutions.",
    locations: "Bergen and Stord, Norway",
  },
  cta: {
    title: "Have a question or a device to sell?",
    text: "Get in touch — we reply fast.",
    button: "Contact us",
  },
  notFound: {
    title: "Page not found",
    text: "The page you're looking for doesn't exist or has been moved.",
    button: "Go home",
  },
  home: {
    kicker: "Electronics · E-mobility · AI",
    h1a: "Technology with a second chance,",
    h1b: "at the right price.",
    lead: "We sell checked used electronics and electric vehicles at very favourable prices, buy back e-waste, and build smart AI solutions for your business.",
    primary: "See the offer",
    secondary: "Sell us a device",
    heroAlt: "A used laptop, phone and tablet",
    h2: "What we do",
    cards: [
      { tag: "Primary", title: "Used electronics", text: "Laptops, desktops, tablets and phones — tested and ready to use." },
      { tag: "E-mobility", title: "Electric scooters and bikes", text: "An affordable switch to electric riding around town." },
      { tag: "Eco", title: "E-waste buyback and recycling", text: "We buy back, sort and responsibly recycle old electronics." },
      { tag: "AI", title: "AI bots and AI receptionists", text: "Virtual assistants that answer your customers 24/7." },
      { tag: "Automation", title: "Business automation", text: "Less manual work, more time to grow." },
      { tag: "Design", title: "Branding, logo, 3D and AI visualisation", text: "A complete visual identity for your brand." },
    ],
    service: {
      tag: "Service",
      title: "Electronics, e-scooter, e-bike and motorcycle service",
      text: "A breakdown isn't the end — we diagnose and repair laptops, desktops, phones, electric scooters, bikes and motorcycles.",
      link: "See service",
    },
  },
  elektronika: {
    kicker: "Our main business",
    title: "Used electronics at very favourable prices",
    lead: "Every device is checked before sale. Ask us about current stock.",
    cats: [
      ["Laptops", "Business and gaming models with checked batteries and screens."],
      ["Desktops", "Desktop builds for office, school and gaming."],
      ["Tablets", "For learning, work and fun — affordable."],
      ["Phones", "Tested smartphones from known brands."],
      ["Electric scooters", "City e-mobility without fuel costs."],
      ["Electric bikes", "Easier riding with an electric motor's help."],
    ],
    checks: ["Tested devices", "Low prices", "Fast deal and pickup"],
    repair: {
      title: "Device broken or not working?",
      text: "We service laptops, desktops, tablets and phones, and repair electric scooters, bikes and motorcycles.",
      button: "See service",
    },
  },
  servis: {
    kicker: "Service",
    title: "Electronics, e-scooter, e-bike and motorcycle service",
    lead: "A broken device doesn't have to be the end. We inspect, diagnose and repair — with a clear quote before any work starts.",
    services: [
      ["Electronics service", "Diagnosis and repair of laptops, desktops, tablets and phones — hardware and software."],
      ["Screen, battery, charging port", "Replacement of screens, batteries, keyboards, charging ports and other parts."],
      ["Electric scooter service", "Battery, motor, controller, brakes, tyres and electronics — fast and affordable."],
      ["Electric bike service", "Drive system, motor and battery service, plus tuning and regular maintenance."],
      ["Motorcycle and engine service", "Regular service, mechanical repairs, diagnostics and preparation for inspection."],
      ["PC upgrades", "Faster drive, more memory, cleaning and speed-ups for older builds."],
    ],
    steps: [
      ["Report the fault", "Describe the problem or send a photo of the device."],
      ["Diagnostics", "We inspect the device and find the cause of the fault."],
      ["Quote", "You get the price and turnaround before we do anything."],
      ["Repair", "We repair and test — you get a working device."],
    ],
    buyout: {
      title: "Not worth repairing?",
      text: "We buy back broken and old devices — everything ends up in e-waste sorting and recycling.",
      button: "Sell us the device",
    },
  },
  eotpad: {
    kicker: "E-waste",
    title: "E-waste buyback, sorting and recycling",
    lead: "Old laptops, phones, desktops, cables and batteries don't belong in the trash. We buy them back and give them a new life.",
    steps: [
      ["Get in touch", "Send us a description or a photo of the device."],
      ["Assessment", "We give you a buyback offer."],
      ["Pickup", "We agree on handover or pickup."],
      ["Recycling", "We sort, refurbish or recycle responsibly."],
    ],
  },
  usluge: {
    kicker: "Smart Solutions",
    title: "AI, automation and complete branding",
    lead: "Smart tools and a visual identity that save you time and attract customers.",
    cards: [
      { tag: "AI", title: "AI bots", text: "Chat bots for web, Viber, WhatsApp and social media." },
      { tag: "AI", title: "AI receptionists", text: "A virtual receptionist that takes calls, books appointments and answers 24/7." },
      { tag: "Automation", title: "Business automation", text: "We connect your tools and remove repetitive tasks." },
      { tag: "Design", title: "Logo and branding", text: "Complete branding solutions — from logotype to visual identity." },
      { tag: "3D", title: "3D design", text: "3D models and renders of products and spaces." },
      { tag: "AI", title: "AI visualisation", text: "Realistic AI visuals of products, interiors and campaigns." },
    ],
  },
  kontakt: {
    kicker: "Contact",
    title: "Let's talk",
    lead: "Buying, service, buyback or a new project — reach us by phone or email.",
    labels: { phone: "Phone", email: "Email", location: "Location" },
  },
};

const bs: SiteContent = {
  nav: {
    home: "Početna",
    electronics: "Polovna elektronika",
    service: "Servis",
    ewaste: "Otkup e-otpada",
    ai: "AI & Dizajn",
    contact: "Kontakt",
  },
  footer: {
    tagline: "Polovna elektronika, servis i popravke, e-mobilnost, reciklaža i AI rješenja.",
    locations: "Bergen i Stord, Norveška",
  },
  cta: {
    title: "Imate pitanje ili uređaj za prodaju?",
    text: "Javite se — odgovaramo brzo.",
    button: "Kontaktirajte nas",
  },
  notFound: {
    title: "Stranica nije pronađena",
    text: "Stranica koju tražite ne postoji ili je premještena.",
    button: "Na početnu",
  },
  home: {
    kicker: "Elektronika · E-mobilnost · AI",
    h1a: "Tehnologija s drugom šansom,",
    h1b: "po pravoj cijeni.",
    lead: "Prodajemo provjerenu polovnu elektroniku i električna vozila po veoma povoljnim cijenama, otkupljujemo e-otpad i gradimo pametna AI rješenja za vaš biznis.",
    primary: "Pogledaj ponudu",
    secondary: "Prodaj nam uređaj",
    heroAlt: "Polovni laptop, telefon i tablet",
    h2: "Šta radimo",
    cards: [
      { tag: "Primarno", title: "Polovna elektronika", text: "Laptopi, računari, tableti i telefoni — testirani i spremni za upotrebu." },
      { tag: "E-mobilnost", title: "Električni skuteri i bicikla", text: "Povoljan prelazak na električnu vožnju po gradu." },
      { tag: "Eko", title: "Otkup i reciklaža e-otpada", text: "Otkup, sortiranje i odgovorno recikliranje stare elektronike." },
      { tag: "AI", title: "AI botovi i recepcionisti", text: "Virtualni asistenti koji odgovaraju klijentima 24/7." },
      { tag: "Automatizacija", title: "Poslovna automatizacija", text: "Manje ručnog posla, više vremena za rast." },
      { tag: "Dizajn", title: "Brending, logo, 3D i AI vizualizacija", text: "Kompletan vizuelni identitet vašeg brenda." },
    ],
    service: {
      tag: "Servis",
      title: "Servis elektronike, e-skutera, bicikala i motora",
      text: "Kvar nije kraj — dijagnostika i popravka laptopa, računara, telefona, električnih skutera, bicikala i motora.",
      link: "Pogledaj servis",
    },
  },
  elektronika: {
    kicker: "Primarna djelatnost",
    title: "Polovna elektronika po veoma povoljnim cijenama",
    lead: "Svaki uređaj prolazi provjeru prije prodaje. Pitajte nas za trenutno stanje zaliha.",
    cats: [
      ["Laptopi", "Poslovni i gaming modeli, provjerene baterije i ekrani."],
      ["Računari", "Desktop konfiguracije za kancelariju, školu i igru."],
      ["Tableti", "Za učenje, posao i zabavu — povoljno."],
      ["Mobilni telefoni", "Testirani pametni telefoni poznatih brendova."],
      ["Električni skuteri", "Gradska e-mobilnost bez troška goriva."],
      ["Električna bicikla", "Lakša vožnja uz pomoć elektromotora."],
    ],
    checks: ["Testirani uređaji", "Niske cijene", "Brz dogovor i preuzimanje"],
    repair: {
      title: "Uređaj se kvari ili ne radi?",
      text: "Radimo servis laptopa, računara, tableta i telefona te popravke električnih skutera, bicikala i motora.",
      button: "Pogledaj servis",
    },
  },
  servis: {
    kicker: "Servis",
    title: "Servis elektronike, e-skutera, bicikala i motora",
    lead: "Neispravan uređaj ne mora biti kraj. Pregledamo, dijagnostikujemo i popravljamo — uz jasan predračun prije rada.",
    services: [
      ["Servis elektronike", "Dijagnostika i popravka laptopa, računara, tableta i telefona — hardver i softver."],
      ["Ekran, baterija, konektor", "Zamjena ekrana, baterija, tipkovnica, konektora punjenja i drugih dijelova."],
      ["Servis električnih skutera", "Baterija, motor, kontroler, kočnice, gume i elektronika — brzo i povoljno."],
      ["Servis električnih bicikala", "Servis pogona, motora i baterije te podešavanje i redovno održavanje."],
      ["Servis motora i motocikala", "Redovni servisi, mehaničke popravke, dijagnostika i priprema za tehnički pregled."],
      ["Nadogradnja računara", "Jači disk, više RAM-a, čišćenje i ubrzanje starijih konfiguracija."],
    ],
    steps: [
      ["Prijavite kvar", "Opisite problem ili pošaljite fotografiju uređaja."],
      ["Dijagnostika", "Pregledamo uređaj i utvrdimo uzrok kvara."],
      ["Ponuda", "Dobijate cijenu i rok prije bilo kakve intervencije."],
      ["Popravka", "Popravimo i testiramo — predajemo vam ispravan uređaj."],
    ],
    buyout: {
      title: "Ne isplati se popravljati?",
      text: "Otkupljujemo neispravne i stare uređaje — sve završava u sortiranju i reciklaži e-otpada.",
      button: "Prodaj nam uređaj",
    },
  },
  eotpad: {
    kicker: "E-waste",
    title: "Otkup, sortiranje i reciklaža e-otpada",
    lead: "Stari laptopi, telefoni, računari, kablovi i baterije ne pripadaju u smeće. Mi ih otkupljujemo i dajemo im novi život.",
    steps: [
      ["Javite se", "Pošaljite nam opis ili fotografiju uređaja."],
      ["Procjena", "Dajemo vam ponudu za otkup."],
      ["Preuzimanje", "Dogovaramo predaju ili preuzimanje."],
      ["Reciklaža", "Sortiramo, obnavljamo ili odgovorno recikliramo."],
    ],
  },
  usluge: {
    kicker: "Smart Solutions",
    title: "AI, automatizacija i kompletan brending",
    lead: "Pametni alati i vizuelni identitet koji vašem biznisu štede vrijeme i privlače klijente.",
    cards: [
      { tag: "AI", title: "AI botovi", text: "Chat botovi za web, Viber, WhatsApp i društvene mreže." },
      { tag: "AI", title: "AI recepcionisti", text: "Virtualni recepcioner koji prima pozive, zakazuje i odgovara 24/7." },
      { tag: "Automatizacija", title: "Automatizacija poslovanja", text: "Povezujemo vaše alate i uklanjamo ponavljajuće zadatke." },
      { tag: "Dizajn", title: "Logo i brending", text: "Kompletna brending rješenja — od logotipa do vizuelnog identiteta." },
      { tag: "3D", title: "3D dizajn", text: "3D modeli i prikazi proizvoda i prostora." },
      { tag: "AI", title: "AI vizualizacija", text: "Realistični vizuali proizvoda, enterijera i kampanja uz pomoć AI." },
    ],
  },
  kontakt: {
    kicker: "Kontakt",
    title: "Razgovarajmo",
    lead: "Kupovina, servis, otkup ili novi projekt — javite se pozivom ili emailom.",
    labels: { phone: "Telefon", email: "Email", location: "Lokacija" },
  },
};

export const content: Record<Lang, SiteContent> = { nb, en, bs };
