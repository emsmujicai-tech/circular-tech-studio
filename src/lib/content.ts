export type Lang = "nb" | "en" | "bs";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "nb", label: "Norsk", short: "NO" },
  { code: "en", label: "English", short: "EN" },
  { code: "bs", label: "Bosanski", short: "BS" },
];

export type NavKey = "home" | "electronics" | "service" | "it" | "ewaste" | "ai" | "drone" | "retro" | "contact";

type Pair = [string, string];

export type SiteContent = {
  authEmail: Record<"signupTitle" | "signupIntro" | "signupPrompt" | "signupButton" | "signupFooter" | "inviteTitle" | "inviteIntro" | "inviteButton" | "ignore" | "loginTitle" | "loginIntro" | "loginButton" | "recoveryTitle" | "recoveryIntro" | "recoveryButton" | "recoveryFooter" | "changeTitle" | "changeIntro" | "from" | "to" | "changeButton" | "changeFooter" | "codeTitle" | "codeIntro", string>;
  chat: Record<"title" | "open" | "close" | "placeholder" | "greeting" | "loading" | "send" | "stop" | "reasoning" | "privacy" | "error" | "contact" | "services" | "pricing" | "repair", string>;
  nav: Record<NavKey, string>;
  footer: { tagline: string; locations: string; servicesTitle: string; companyTitle: string; contactTitle: string; privacy: string; terms: string; account: string; rights: string };
  auth: {
    kicker: string; title: string; lead: string;
    signInTab: string; signUpTab: string; forgotTab: string;
    email: string; password: string; confirmPassword: string; newPassword: string;
    signInButton: string; signUpButton: string; sendResetButton: string; resetButton: string;
    forgotLink: string; backToLogin: string; accountLink: string;
    minPassword: string; passwordMismatch: string; invalidEmail: string;
    checkEmail: string; checkEmailText: string;
    invalidCredentials: string; emailNotConfirmed: string; userExists: string; rateLimited: string; genericError: string;
    forgotTitle: string; forgotText: string; resetSent: string;
    resetTitle: string; resetText: string; resetDone: string; resetExpired: string;
    switchToSignUp: string; switchToSignIn: string;
  };
  account: {
    kicker: string; title: string; lead: string;
    emailLabel: string; createdLabel: string; unknown: string;
    signOut: string; securityNote: string;
  };
  legal: {
    privacy: { kicker: string; title: string; lead: string; updated: string; sections: { title: string; text: string }[] };
    terms: { kicker: string; title: string; lead: string; updated: string; sections: { title: string; text: string }[] };
  };
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
    it: { tag: string; title: string; text: string; link: string };
    drone: { tag: string; title: string; text: string; link: string };
    gallery: { kicker: string; title: string; note: string; open: string; close: string; previous: string; next: string; pause: string; play: string; repair: string; buy: string; sell: string; quote: string; items: { title: string; text: string; alt: string }[] };
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
    howItWorks: string;
    services: Pair[];
    steps: Pair[];
    buyout: { title: string; text: string; button: string };
  };
  it: {
    kicker: string;
    title: string;
    lead: string;
    packages: { name: string; tagline: string; points: string[]; cta: string }[];
    remote: { title: string; text: string; points: string[] };
    quote: { title: string; text: string; button: string };
  };
  eotpad: { kicker: string; title: string; lead: string; steps: Pair[] };
  usluge: {
    kicker: string;
    title: string;
    lead: string;
    cards: { tag: string; title: string; text: string }[];
  };
  drone: {
    kicker: string;
    title: string;
    lead: string;
    services: Pair[];
    points: string[];
    quote: { title: string; text: string; button: string };
  };
  assistant: { title: string; lead: string; device: string; description: string; placeholder: string; photo: string; remove: string; submit: string; stop: string; loading: string; reasoning: string; result: string; send: string; copy: string; copied: string; required: string; photoError: string; invalid: string; unavailable: string; note: string; subject: string; enquiry: string; previousNav: string; nextNav: string };
  retro: { kicker: string; title: string; lead: string; alt: string; note: string; join: string; subject: string; emailBody: string; introTitle: string; intro: string; topics: Pair[]; membership: string; teaser: string; explore: string };
  kontakt: {
    kicker: string;
    title: string;
    lead: string;
    labels: { phone: string; email: string; location: string };
  };
};

const nb: SiteContent = {
  authEmail: {
    "signupTitle": "Bekreft e-postadressen",
    "signupIntro": "Takk for at du opprettet en konto hos",
    "signupPrompt": "Bekreft e-postadressen din:",
    "signupButton": "Bekreft e-post",
    "signupFooter": "Hvis du ikke opprettet en konto, kan du se bort fra denne e-posten.",
    "inviteTitle": "Du er invitert",
    "inviteIntro": "Du er invitert til å opprette en konto hos",
    "inviteButton": "Godta invitasjonen",
    "ignore": "Hvis du ikke ba om dette, kan du se bort fra e-posten.",
    "loginTitle": "Din innloggingslenke",
    "loginIntro": "Bruk lenken for å logge inn hos",
    "loginButton": "Logg inn",
    "recoveryTitle": "Tilbakestill passordet",
    "recoveryIntro": "Vi har mottatt en forespørsel om å tilbakestille passordet ditt hos",
    "recoveryButton": "Velg nytt passord",
    "recoveryFooter": "Hvis du ikke ba om dette, kan du se bort fra e-posten. Passordet ditt blir ikke endret.",
    "changeTitle": "Bekreft ny e-postadresse",
    "changeIntro": "Du ba om å endre e-postadressen hos",
    "from": "Fra",
    "to": "Til",
    "changeButton": "Bekreft endringen",
    "changeFooter": "Hvis du ikke ba om endringen, bør du sikre kontoen din umiddelbart.",
    "codeTitle": "Bekreft identiteten din",
    "codeIntro": "Bruk denne koden for å bekrefte identiteten din."
},
  chat: {
    "title": "EMS Mujic · Kundehjelp",
    "open": "Spør EMS Mujic",
    "close": "Lukk samtalen",
    "placeholder": "Hva lurer du på?",
    "greeting": "Hei! Hva trenger du hjelp med?",
    "loading": "Ser på spørsmålet…",
    "send": "Send",
    "stop": "Stopp",
    "reasoning": "Vurdering",
    "privacy": "Samtalen sendes til AI og lagres ikke av nettstedet. Unngå sensitive opplysninger.",
    "error": "Kundehjelpen er ikke tilgjengelig. Kontakt oss på e-post eller telefon.",
    "contact": "Kontakt oss",
    "services": "Hvilke tjenester tilbyr dere?",
    "pricing": "Hva koster service og IT-pakkene?",
    "repair": "Sparkesykkelen min lader ikke. Kan dere hjelpe?"
},
  nav: {
    home: "Hjem",
    electronics: "Brukt elektronikk",
    service: "Service",
    it: "IT-drift",
    ewaste: "Oppkjøp av elektronavfall",
    ai: "AI & design",
    drone: "Drone",
    retro: "Retro elektronikk",
    contact: "Kontakt",
  },
  footer: {
    tagline: "Brukt elektronikk, service og reparasjoner, e-mobilitet, resirkulering og AI-løsninger.",
    locations: "Bergen og Stord, Norge",
    servicesTitle: "Tjenester", companyTitle: "Selskapet", contactTitle: "Kontakt",
    privacy: "Personvern", terms: "Vilkår", account: "Min konto", rights: "Alle rettigheter forbeholdt.",
  },
  auth: {
    kicker: "Konto",
    title: "Logg inn eller opprett konto",
    lead: "Med en konto kan du se og administrere kontoen din. Du trenger ikke konto for å kontakte oss.",
    signInTab: "Logg inn", signUpTab: "Registrer deg", forgotTab: "Glemt passord",
    email: "E-post", password: "Passord", confirmPassword: "Bekreft passord", newPassword: "Nytt passord",
    signInButton: "Logg inn", signUpButton: "Opprett konto", sendResetButton: "Send tilbakestillingslenke", resetButton: "Lagre nytt passord",
    forgotLink: "Glemt passordet?", backToLogin: "Tilbake til innlogging", accountLink: "Min konto",
    minPassword: "Passordet må ha minst 8 tegn.", passwordMismatch: "Passordene er ikke like.", invalidEmail: "Skriv inn en gyldig e-postadresse.",
    checkEmail: "Sjekk e-posten din", checkEmailText: "Vi har sendt en bekreftelseslenke. Klikk på lenken i e-posten for å aktivere kontoen.",
    invalidCredentials: "Feil e-post eller passord.", emailNotConfirmed: "E-postadressen er ikke bekreftet ennå. Sjekk innboksen din.", userExists: "Det finnes allerede en konto med denne e-postadressen.", rateLimited: "For mange forsøk. Prøv igjen om litt.", genericError: "Noe gikk galt. Prøv igjen.",
    forgotTitle: "Glemt passord", forgotText: "Skriv inn e-postadressen din, så sender vi en lenke for å velge nytt passord.", resetSent: "Hvis adressen finnes hos oss, har vi sendt en tilbakestillingslenke. Sjekk e-posten din.",
    resetTitle: "Velg nytt passord", resetText: "Skriv inn det nye passordet ditt nedenfor.", resetDone: "Passordet er oppdatert. Du kan nå logge inn.", resetExpired: "Lenken er ugyldig eller utløpt. Be om en ny tilbakestillingslenke.",
    switchToSignUp: "Har du ikke konto? Registrer deg", switchToSignIn: "Har du allerede konto? Logg inn",
  },
  account: {
    kicker: "Konto", title: "Min konto", lead: "Her ser du kontoinformasjonen din.",
    emailLabel: "E-post", createdLabel: "Kontoen ble opprettet", unknown: "Ukjent",
    signOut: "Logg ut", securityNote: "Vi lagrer bare e-postadressen du registrerte med. Du kan be oss slette kontoen når som helst.",
  },
  legal: {
    privacy: {
      kicker: "Personvern", title: "Personvernerklæring",
      lead: "Slik behandler vi personopplysninger når du bruker emsmujic.tech.",
      updated: "Sist oppdatert: januar 2026",
      sections: [
        { title: "Behandlingsansvarlig", text: "EMS Mujic, med virksomhet i Bergen og Stord, er behandlingsansvarlig for personopplysninger som samles inn via dette nettstedet. Du kan kontakte oss på ems.mujic@gmail.com." },
        { title: "Hvilke opplysninger vi behandler", text: "Når du kontakter oss på e-post eller telefon, behandler vi navnet ditt, kontaktopplysningene og innholdet i henvendelsen. Hvis du oppretter konto, lagrer vi e-postadressen din og en kryptert versjon av passordet." },
        { title: "AI-funksjoner", text: "Meldinger du skriver til kundehjelpen, og beskrivelser eller bilder du sender til serviceassistenten, sendes til en ekstern AI-tjeneste for å generere svar. Nettstedet lagrer ikke disse meldingene eller bildene. Unngå å dele sensitive opplysninger." },
        { title: "Lagring i nettleseren", text: "Nettstedet bruker ikke sporingscookies. Nettleseren din lagrer bare språkvalget ditt og, hvis du logger inn, informasjon som holder deg innlogget." },
        { title: "Dine rettigheter", text: "Du har rett til innsyn, retting og sletting av personopplysningene dine, og til å klage til Datatilsynet. Kontakt oss for å bruke rettighetene dine." },
      ],
    },
    terms: {
      kicker: "Vilkår", title: "Vilkår for bruk",
      lead: "Vilkår for bruk av emsmujic.tech og tjenestene våre.",
      updated: "Sist oppdatert: januar 2026",
      sections: [
        { title: "Om innholdet", text: "Innholdet på nettstedet er generell informasjon om tjenestene våre og utgjør ikke et bindende tilbud." },
        { title: "Kjøp og salg av brukt utstyr", text: "Alle enheter kontrolleres før salg. For forbrukere gjelder forbrukerkjøpsloven. Betingelsene for hver enkelt avtale avtales direkte med oss." },
        { title: "Tilbud og priser", text: "Priser og tilgjengelighet endres med lagerstatus. Tilbud er gyldige så lenge de er angitt, og avtales skriftlig før arbeid starter." },
        { title: "AI-generert innhold", text: "Svar fra AI-funksjonene er veiledende og kan inneholde feil. De erstatter ikke profesjonell vurdering av enheten." },
        { title: "Ansvar og lovvalg", text: "Vi gjør vårt beste for at informasjonen er korrekt, men kan ikke garantere at den til enhver tid er fullstendig. Norsk lov gjelder." },
      ],
    },
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
    lead: "Vi selger kontrollerte, brukte elektroniske enheter og elektriske kjøretøy til svært gunstige priser, kjøper opp elektronavfall og bygger smarte AI-løsninger for bedriften din.",
    primary: "Se tilbudet",
    secondary: "Selg oss en enhet",
    heroAlt: "En brukt bærbar PC, telefon og nettbrett",
    h2: "Det vi gjør",
    gallery: {
      kicker: "Service & reparasjon",
      title: "Verdt å ta vare på.",
      note: "AI-genererte illustrasjoner av reparasjoner — ikke bilder av utførte kundeoppdrag.",
      open: "Se tjenester", close: "Lukk", previous: "Forrige bilde", next: "Neste bilde", pause: "Pause lysbildefremvisning", play: "Start lysbildefremvisning", repair: "Feilsøking og reparasjon", buy: "Kjøp brukt — spør om lagerstatus", sell: "Selg eller resirkuler enheten", quote: "Be om tilbud",
      items: [
        { title: "Bærbare PC-er", text: "Kjøling · maskinvare", alt: "Bærbar PC under reparasjon" },
        { title: "Nettbrett", text: "Skjerm · batteri", alt: "Nettbrett på en arbeidsbenk" },
        { title: "Smarttelefoner", text: "Batteri · ladekontakt", alt: "Åpnet smarttelefon under reparasjon" },
        { title: "TV-er", text: "Skjerm · elektronikk", alt: "TV med åpnet bakside" },
        { title: "Stasjonære PC-er", text: "Oppgradering · komponenter", alt: "Stasjonær PC med åpent kabinett" },
        { title: "Elektriske sparkesykler", text: "Batteri · motor", alt: "Service på elektrisk sparkesykkel" },
        { title: "Elektriske sykler", text: "Drivverk · vedlikehold", alt: "Service på elsykkelmotor" },
        { title: "Lyd & annen elektronikk", text: "Hi-fi · hodetelefoner", alt: "Forsterker og hodetelefoner på arbeidsbenk" },
      ],
    },
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
    it: {
      tag: "IT-drift",
      title: "IT-support for bedrifter — PC-er, nettverk og fjernsupport",
      text: "Fast vedlikehold av datamaskiner og servere, nettverk og sikkerhet. Det meste løses remote, uten at du venter på oppmøte.",
      link: "Se pakkene",
    },
    drone: {
      tag: "Drone",
      title: "Drone-inspeksjon og filming av utilgjengelige steder",
      text: "Vi flyger dit det er vanskelig eller farlig å komme – tak, fasader, sjakter og høye bygg – og du får bilder, video og en vurdering.",
      link: "Se drone-tjenestene",
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
    howItWorks: "Slik fungerer servicen",
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
  it: {
    kicker: "IT-drift for bedrifter",
    title: "IT-support som fast pakke — PC-er, nettverk og oppfølging på avstand",
    lead: "Vi tar oss av datamaskinene, serverne og nettverket ditt, slik at du kan holde på driften. Alt som lar seg gjøre fra kontoret, gjør vi remote — raskere og rimeligere for deg.",
    packages: [
      {
        name: "Fjernsupport",
        tagline: "Hjelp når noe stopper opp",
        points: [
          "Support per e-post, telefon og Teams",
          "Treg eller defekt PC, printer og e-post",
          "Vi følger hver sak til den er løst",
        ],
        cta: "Be om tilbud",
      },
      {
        name: "Tilsyn",
        tagline: "Fast månedlig vedlikehold",
        points: [
          "Oppdateringer av styresystem og sikkerhetsprogrammer",
          "Sjekk av PC-er, server og backup",
          "Rengjøring og justering av maskiner",
        ],
        cta: "Be om tilbud",
      },
      {
        name: "Nettverk + oppmøte",
        tagline: "Alt i Tilsyn, pluss fysisk oppmøte",
        points: [
          "Router, switch, Wi-Fi og kabeltrekk",
          "Brannmur og tilgangsstyring",
          "Oppmøte i Bergen og Stord når det trengs",
        ],
        cta: "Be om tilbud",
      },
    ],
    remote: {
      title: "Det meste løses uten oppmøte",
      text: "Vi kobler oss på maskinen eller nettverket ditt over en sikker forbindelse. Du slipper å vente på at noen skal komme — og du betaler for arbeidet, ikke for kjøringen.",
      points: [
        "Datamaskiner og servere",
        "Rutere, switcher og Wi-Fi",
        "E-post og Microsoft 365 / Google Workspace",
        "Backup og gjenoppretting",
        "Brannmur og sikkerhet",
        "Overvåking og varsling",
      ],
    },
    quote: {
      title: "Hva koster det?",
      text: "Pakkene tilpasses størrelsen på bedriften din og antall maskiner. Fortell oss hva dere har i dag, så gir vi deg en fast månedspris.",
      button: "Ta kontakt",
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
    lead: "Smartere arbeidsflyt og en tydelig visuell identitet. Vi hjelper bedriften din med AI, automatisering og design.",
    cards: [
      { tag: "AI", title: "AI-botter", text: "Gi kundene svar på nettsiden, i WhatsApp, Viber og sosiale medier. Tilpasset bedriftens informasjon og behov." },
      { tag: "AI", title: "AI-resepsjonister", text: "En virtuell resepsjonist som svarer på anrop, tar imot henvendelser og booker timer – også utenfor åpningstid." },
      { tag: "Automatisering", title: "Automatisering", text: "Koble sammen verktøyene dine og reduser manuelt arbeid. Vi forenkler gjentakende oppgaver og informasjonsflyt." },
      { tag: "Design", title: "Logo og branding", text: "En helhetlig identitet med logo, farger og typografi. Et gjenkjennelig uttrykk på tvers av nettside og markedsmateriell." },
      { tag: "3D", title: "3D-design", text: "Vis frem produkter og rom med 3D-modeller og visualiseringer. Fra idé til et tydelig visuelt uttrykk." },
      { tag: "AI", title: "AI-visualisering", text: "AI-baserte bilder av produkter, interiør og kampanjeideer. Utforsk ulike uttrykk før du velger retning." },
    ],
  },
  drone: {
    kicker: "Drone-tjenester",
    title: "Drone-inspeksjon og filming av utilgjengelige steder",
    lead: "Vi flyger dit det er vanskelig, farlig eller dyrt å komme – og du får bildene, videoen og vurderingen vi henter der.",
    services: [
      ["Inspeksjon av tak og fasader", "Bilder og video av tak, takrenn, fasader og konstruksjoner – uten stillas eller mannskap i høyden."],
      ["Utilgjengelige steder", "Sjakter, tanker, skråninger, høye bygg og andre steder det er farlig eller umulig å komme til."],
      ["Filming og fotografering fra luften", "Luftopptak til eiendom, prosjekter, arrangement og markedsføring."],
      ["Dokumentasjon til rapport og forsikring", "Bildemateriale du kan bruke i rapport, saksgang eller forsikringssak."],
      ["Vurdering før kjøp eller reparasjon", "Vi ser på stedet før du kjøper, bygger eller reparerer – da vet du hva du møter."],
    ],
    points: [
      "Bilder og video fra luften",
      "Materiale levert raskt",
      "Flyging avtales på forhånd",
      "Tilbud før vi flyr",
    ],
    quote: {
      title: "Trenger du opptak fra et sted du ikke kan gå inn i?",
      text: "Fortell oss hva som skal inspiseres eller filmes, så gir vi deg et pristilbud.",
      button: "Be om tilbud",
    },
  },
  assistant: {
    "title": "Finn riktig service",
    "lead": "Beskriv feilen eller legg ved et bilde av enheten.",
    "device": "Enhet",
    "description": "Hva er problemet?",
    "placeholder": "For eksempel: Sparkesykkelen lader ikke, og lampen på laderen lyser grønt.",
    "photo": "Legg ved bilde",
    "remove": "Fjern bilde",
    "submit": "Foreslå service og lag forespørsel",
    "stop": "Stopp",
    "loading": "Vurderer enheten…",
    "reasoning": "AI-vurdering",
    "result": "Forslag og serviceforespørsel",
    "send": "Åpne forespørsel i e-post",
    "copy": "Kopier forespørsel",
    "copied": "Kopiert",
    "required": "Beskriv feilen eller legg ved et bilde.",
    "photoError": "Velg et JPG-, PNG- eller WebP-bilde på maks. 5 MB.",
    "invalid": "Kontroller opplysningene og prøv igjen.",
    "unavailable": "AI-hjelpen er ikke tilgjengelig akkurat nå. Kontakt oss direkte.",
    "note": "AI gir et foreløpig forslag, ikke en diagnose eller pris. Bilde og beskrivelse sendes til AI for vurdering og lagres ikke av nettstedet. E-post sendes først når du selv sender den.",
    "subject": "Serviceforespørsel",
    "enquiry": "Be om service",
    "previousNav": "Forrige menyelementer",
    "nextNav": "Neste menyelementer"
},
  retro: {
    "kicker": "EMS Mujic · Bergen og Stord",
    "title": "Retro elektronikk",
    "lead": "En klubb for deg som elsker gammel elektronikk. Del lidenskapen, historiene og kunnskapen — fra den første PC-en til favorittanlegget.",
    "alt": "Samling av retrodatamaskin, receiver, kassettspiller og kassetter",
    "note": "AI-generert illustrasjon av retroelektronikk.",
    "join": "Bli med i klubben",
    "subject": "Medlemskap i Retro elektronikk",
    "emailBody": "Hei EMS Mujic!\n\nJeg vil gjerne bli med i Retro elektronikk-klubben.\n\nNavn:\nSted:\nMin favoritt blant gamle elektroniske enheter:\nDet jeg ønsker å dele med klubben:\n",
    "introTitle": "Gammel teknologi. Felles lidenskap.",
    "intro": "For samlere, reparatører og nysgjerrige — enten du har en hel samling eller én enhet med en god historie.",
    "topics": [
        [
            "Del samlingen din",
            "Bilder, historier og minner fra elektronikken du har tatt vare på."
        ],
        [
            "Utveksle kunnskap",
            "Restaurering, feilsøking, deler og erfaringer som holder gamle enheter i live."
        ],
        [
            "Finn likesinnede",
            "Kom i kontakt med andre som deler interessen for retro-PC-er, radio, hi-fi, TV og spillutstyr."
        ]
    ],
    "membership": "Medlemskap avtales via e-post med EMS Mujic. Fortell hvem du er og hva du er interessert i — vi følger opp personlig.",
    "teaser": "Ikke alt gammelt er avfall. Møt andre som ser verdien i gammel elektronikk.",
    "explore": "Utforsk retroklubben"
} ,
  kontakt: {
    kicker: "Kontakt",
    title: "La oss ta en prat",
    lead: "Kjøp, service, IT-drift, oppkjøp eller nytt prosjekt – ta kontakt på telefon eller e-post.",
    labels: { phone: "Telefon", email: "E-post", location: "Sted" },
  },
};

const en: SiteContent = {
  authEmail: {
    "signupTitle": "Confirm your email",
    "signupIntro": "Thank you for creating an account at",
    "signupPrompt": "Confirm your email address:",
    "signupButton": "Verify email",
    "signupFooter": "If you did not create an account, you can ignore this email.",
    "inviteTitle": "You are invited",
    "inviteIntro": "You are invited to create an account at",
    "inviteButton": "Accept invitation",
    "ignore": "If you did not request this, you can ignore this email.",
    "loginTitle": "Your sign-in link",
    "loginIntro": "Use the link to sign in to",
    "loginButton": "Sign in",
    "recoveryTitle": "Reset your password",
    "recoveryIntro": "We received a request to reset your password at",
    "recoveryButton": "Choose a new password",
    "recoveryFooter": "If you did not request this, ignore this email. Your password will not change.",
    "changeTitle": "Confirm your new email",
    "changeIntro": "You requested to change your email address at",
    "from": "From",
    "to": "To",
    "changeButton": "Confirm change",
    "changeFooter": "If you did not request this change, secure your account immediately.",
    "codeTitle": "Verify your identity",
    "codeIntro": "Use this code to verify your identity."
},
  chat: {
    "title": "EMS Mujic · Customer help",
    "open": "Ask EMS Mujic",
    "close": "Close chat",
    "placeholder": "What would you like to know?",
    "greeting": "Hello! What can we help you with?",
    "loading": "Looking into your question…",
    "send": "Send",
    "stop": "Stop",
    "reasoning": "Reasoning",
    "privacy": "Your conversation is sent to AI and is not saved by this website. Avoid sensitive information.",
    "error": "Chat is unavailable. Contact us by email or phone.",
    "contact": "Contact us",
    "services": "Which services do you offer?",
    "pricing": "What do repairs and IT packages cost?",
    "repair": "My scooter will not charge. Can you help?"
},
  nav: {
    home: "Home",
    electronics: "Used electronics",
    service: "Service",
    it: "IT support",
    ewaste: "E-waste buyback",
    ai: "AI & design",
    drone: "Drone",
    retro: "Retro electronics",
    contact: "Contact",
  },
  footer: {
    tagline: "Used electronics, service and repairs, e-mobility, recycling and AI solutions.",
    locations: "Bergen and Stord, Norway",
    servicesTitle: "Services", companyTitle: "Company", contactTitle: "Contact",
    privacy: "Privacy", terms: "Terms", account: "My account", rights: "All rights reserved.",
  },
  auth: {
    kicker: "Account",
    title: "Sign in or create an account",
    lead: "With an account you can view and manage your account details. You do not need an account to contact us.",
    signInTab: "Sign in", signUpTab: "Register", forgotTab: "Forgot password",
    email: "Email", password: "Password", confirmPassword: "Confirm password", newPassword: "New password",
    signInButton: "Sign in", signUpButton: "Create account", sendResetButton: "Send reset link", resetButton: "Save new password",
    forgotLink: "Forgot your password?", backToLogin: "Back to sign in", accountLink: "My account",
    minPassword: "The password must be at least 8 characters.", passwordMismatch: "The passwords do not match.", invalidEmail: "Enter a valid email address.",
    checkEmail: "Check your email", checkEmailText: "We have sent a confirmation link. Click the link in the email to activate your account.",
    invalidCredentials: "Wrong email or password.", emailNotConfirmed: "The email address is not confirmed yet. Check your inbox.", userExists: "An account with this email address already exists.", rateLimited: "Too many attempts. Please try again shortly.", genericError: "Something went wrong. Please try again.",
    forgotTitle: "Forgot password", forgotText: "Enter your email address and we will send you a link to choose a new password.", resetSent: "If the address exists with us, we have sent a reset link. Check your email.",
    resetTitle: "Choose a new password", resetText: "Enter your new password below.", resetDone: "Your password has been updated. You can now sign in.", resetExpired: "The link is invalid or has expired. Request a new reset link.",
    switchToSignUp: "No account yet? Register", switchToSignIn: "Already have an account? Sign in",
  },
  account: {
    kicker: "Account", title: "My account", lead: "Here you can see your account information.",
    emailLabel: "Email", createdLabel: "Account created", unknown: "Unknown",
    signOut: "Sign out", securityNote: "We only store the email address you registered with. You can ask us to delete the account at any time.",
  },
  legal: {
    privacy: {
      kicker: "Privacy", title: "Privacy policy",
      lead: "How we process personal data when you use emsmujic.tech.",
      updated: "Last updated: January 2026",
      sections: [
        { title: "Data controller", text: "EMS Mujic, operating in Bergen and Stord, is the controller of personal data collected through this website. You can contact us at ems.mujic@gmail.com." },
        { title: "What data we process", text: "When you contact us by email or phone, we process your name, contact details and the content of your enquiry. If you create an account, we store your email address and an encrypted version of your password." },
        { title: "AI features", text: "Messages you write to the customer assistant, and descriptions or photos you send to the service assistant, are sent to an external AI service to generate replies. The website does not store these messages or photos. Avoid sharing sensitive information." },
        { title: "Browser storage", text: "The website does not use tracking cookies. Your browser only stores your language choice and, if you sign in, information that keeps you signed in." },
        { title: "Your rights", text: "You have the right to access, correct and delete your personal data, and to lodge a complaint with the Norwegian Data Protection Authority (Datatilsynet). Contact us to exercise your rights." },
      ],
    },
    terms: {
      kicker: "Terms", title: "Terms of use",
      lead: "Terms for using emsmujic.tech and our services.",
      updated: "Last updated: January 2026",
      sections: [
        { title: "About the content", text: "The content on this website is general information about our services and does not constitute a binding offer." },
        { title: "Buying and selling used equipment", text: "All devices are checked before sale. For consumers, the Norwegian Consumer Purchases Act applies. The conditions of each individual agreement are agreed directly with us." },
        { title: "Quotes and prices", text: "Prices and availability change with stock. Quotes are valid as stated and are agreed in writing before work begins." },
        { title: "AI-generated content", text: "Replies from the AI features are guidance only and may contain errors. They do not replace a professional assessment of the device." },
        { title: "Liability and governing law", text: "We do our best to keep the information accurate but cannot guarantee that it is complete at all times. Norwegian law applies." },
      ],
    },
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
    gallery: {
      kicker: "Service & repair",
      title: "Worth keeping.",
      note: "AI-generated repair illustrations — not photographs of completed customer jobs.",
      open: "View services", close: "Close", previous: "Previous image", next: "Next image", pause: "Pause slideshow", play: "Play slideshow", repair: "Diagnostics and repairs", buy: "Buy used — ask about stock", sell: "Sell or recycle your device", quote: "Ask for a quote",
      items: [
        { title: "Laptops", text: "Cooling · hardware", alt: "Laptop undergoing repair" },
        { title: "Tablets", text: "Screen · battery", alt: "Tablet on a workbench" },
        { title: "Smartphones", text: "Battery · charging port", alt: "Opened smartphone undergoing repair" },
        { title: "Televisions", text: "Screen · electronics", alt: "Television with its back panel removed" },
        { title: "Desktop computers", text: "Upgrades · components", alt: "Desktop PC with an open case" },
        { title: "Electric scooters", text: "Battery · motor", alt: "Electric scooter servicing" },
        { title: "Electric bikes", text: "Drive system · maintenance", alt: "Electric bike motor servicing" },
        { title: "Audio & other electronics", text: "Hi-fi · headphones", alt: "Amplifier and headphones on a workbench" },
      ],
    },
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
    it: {
      tag: "IT support",
      title: "IT support for companies — PCs, networks and remote help",
      text: "Fixed maintenance of computers and servers, networks and security. Most of it is solved remotely, with no waiting for a visit.",
      link: "See the packages",
    },
    drone: {
      tag: "Drone",
      title: "Drone inspection and filming of hard-to-reach places",
      text: "We fly where it is difficult or dangerous to go — roofs, facades, shafts and tall buildings — and you get photos, video and an assessment.",
      link: "See the drone services",
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
    howItWorks: "How the service works",
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
  it: {
    kicker: "IT support for companies",
    title: "IT support as a fixed package — PCs, networks and remote care",
    lead: "We take care of your computers, servers and network so you can focus on running the business. Anything that can be done remotely, we do remotely — faster and cheaper for you.",
    packages: [
      {
        name: "Remote support",
        tagline: "Help when something stops",
        points: [
          "Support by email, phone and Teams",
          "Slow or broken PCs, printers and email issues",
          "We follow each case until it is solved",
        ],
        cta: "Ask for a quote",
      },
      {
        name: "Maintenance",
        tagline: "Fixed monthly upkeep",
        points: [
          "Operating system and security updates",
          "Checks on PCs, server and backups",
          "Cleaning and tuning of machines",
        ],
        cta: "Ask for a quote",
      },
      {
        name: "Network + on-site",
        tagline: "Everything in Maintenance, plus visits",
        points: [
          "Routers, switches, Wi-Fi and cabling",
          "Firewall and access control",
          "On-site visits in Bergen and Stord when needed",
        ],
        cta: "Ask for a quote",
      },
    ],
    remote: {
      title: "Most of it is solved without a visit",
      text: "We connect to your machine or network over a secure link. You don't have to wait for someone to show up — and you pay for the work, not the travel.",
      points: [
        "Computers and servers",
        "Routers, switches and Wi-Fi",
        "Email and Microsoft 365 / Google Workspace",
        "Backup and recovery",
        "Firewall and security",
        "Monitoring and alerts",
      ],
    },
    quote: {
      title: "What does it cost?",
      text: "The packages are sized to your company and the number of machines. Tell us what you have today and we'll give you a fixed monthly price.",
      button: "Get in touch",
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
    lead: "Smarter workflows and a clear visual identity. We help your business with AI, automation and design.",
    cards: [
      { tag: "AI", title: "AI bots", text: "Answer customers on your website, WhatsApp, Viber and social media. Tailored to your business information and needs." },
      { tag: "AI", title: "AI receptionists", text: "A virtual receptionist that answers calls, receives enquiries and books appointments — even outside opening hours." },
      { tag: "Automation", title: "Automation", text: "Connect your tools and reduce manual work. We simplify repetitive tasks and the flow of information." },
      { tag: "Design", title: "Logo and branding", text: "A cohesive identity with a logo, colours and typography. A recognisable look across your website and marketing materials." },
      { tag: "3D", title: "3D design", text: "Present products and spaces with 3D models and visualisations. Turn an idea into a clear visual expression." },
      { tag: "AI", title: "AI visualisation", text: "AI-generated imagery for products, interiors and campaign ideas. Explore different looks before choosing a direction." },
    ],
  },
  drone: {
    kicker: "Drone services",
    title: "Drone inspection and filming of hard-to-reach places",
    lead: "We fly where it is difficult, dangerous or expensive to get to — and you get the photos, video and assessment we bring back.",
    services: [
      ["Roof and facade inspection", "Photos and video of roofs, gutters, facades and structures — no scaffolding, no crew at height."],
      ["Hard-to-reach places", "Shafts, tanks, slopes, tall buildings and other places that are dangerous or impossible to enter."],
      ["Aerial filming and photography", "Aerial footage for property, projects, events and marketing."],
      ["Documentation for reports and insurance", "Imagery you can use in a report, a case or an insurance claim."],
      ["Assessment before you buy or repair", "We look at the site before you buy, build or repair — so you know what you are facing."],
    ],
    points: [
      "Photos and video from the air",
      "Material delivered fast",
      "Flights agreed in advance",
      "Quote before we fly",
    ],
    quote: {
      title: "Need footage from a place you can't walk into?",
      text: "Tell us what needs inspecting or filming and we'll give you a quote.",
      button: "Ask for a quote",
    },
  },
  assistant: {
    "title": "Find the right service",
    "lead": "Describe the fault or attach a photo of your device.",
    "device": "Device",
    "description": "What is the problem?",
    "placeholder": "For example: The scooter will not charge and the charger light stays green.",
    "photo": "Attach photo",
    "remove": "Remove photo",
    "submit": "Suggest service and draft enquiry",
    "stop": "Stop",
    "loading": "Assessing the device…",
    "reasoning": "AI assessment",
    "result": "Suggestion and service enquiry",
    "send": "Open enquiry in email",
    "copy": "Copy enquiry",
    "copied": "Copied",
    "required": "Describe the fault or attach a photo.",
    "photoError": "Choose a JPG, PNG or WebP image up to 5 MB.",
    "invalid": "Check your information and try again.",
    "unavailable": "AI assistance is currently unavailable. Contact us directly.",
    "note": "AI provides a preliminary suggestion, not a diagnosis or price. Your photo and description are sent to AI for assessment and are not saved by this website. Email is sent only when you send it yourself.",
    "subject": "Service enquiry",
    "enquiry": "Request service",
    "previousNav": "Previous menu items",
    "nextNav": "Next menu items"
},
  retro: {
    "kicker": "EMS Mujic · Bergen and Stord",
    "title": "Retro electronics",
    "lead": "A club for people who love old electronics. Share the passion, stories and knowledge — from your first computer to your favourite hi-fi.",
    "alt": "Collection of a vintage computer, receiver, cassette deck and tapes",
    "note": "AI-generated illustration of retro electronics.",
    "join": "Join the club",
    "subject": "Retro electronics club membership",
    "emailBody": "Hello EMS Mujic!\n\nI would like to join the Retro electronics club.\n\nName:\nLocation:\nMy favourite old electronic device:\nWhat I would like to share with the club:\n",
    "introTitle": "Old technology. Shared passion.",
    "intro": "For collectors, repair enthusiasts and the curious — whether you have a full collection or one device with a great story.",
    "topics": [
        [
            "Share your collection",
            "Photos, stories and memories of the electronics you have preserved."
        ],
        [
            "Exchange knowledge",
            "Restoration, diagnostics, parts and experiences that keep old devices alive."
        ],
        [
            "Meet like-minded people",
            "Connect with others interested in retro computers, radios, hi-fi, TVs and gaming equipment."
        ]
    ],
    "membership": "Membership is arranged by email with EMS Mujic. Tell us who you are and what interests you — we follow up personally.",
    "teaser": "Not everything old is waste. Meet others who see the value in old electronics.",
    "explore": "Explore the retro club"
} ,
  kontakt: {
    kicker: "Contact",
    title: "Let's talk",
    lead: "Buying, service, IT support, buyback or a new project — reach us by phone or email.",
    labels: { phone: "Phone", email: "Email", location: "Location" },
  },
};

const bs: SiteContent = {
  authEmail: {
    "signupTitle": "Potvrdi email adresu",
    "signupIntro": "Hvala što ste otvorili račun kod",
    "signupPrompt": "Potvrdite svoju email adresu:",
    "signupButton": "Potvrdi email",
    "signupFooter": "Ako niste otvorili račun, zanemarite ovaj email.",
    "inviteTitle": "Pozvani ste",
    "inviteIntro": "Pozvani ste da otvorite račun kod",
    "inviteButton": "Prihvati poziv",
    "ignore": "Ako ovo niste tražili, zanemarite email.",
    "loginTitle": "Vaš link za prijavu",
    "loginIntro": "Koristite link za prijavu kod",
    "loginButton": "Prijavi se",
    "recoveryTitle": "Obnovi lozinku",
    "recoveryIntro": "Primili smo zahtjev za obnovu vaše lozinke kod",
    "recoveryButton": "Izaberi novu lozinku",
    "recoveryFooter": "Ako ovo niste tražili, zanemarite email. Vaša lozinka se neće promijeniti.",
    "changeTitle": "Potvrdi novu email adresu",
    "changeIntro": "Zatražili ste promjenu email adrese kod",
    "from": "Sa",
    "to": "Na",
    "changeButton": "Potvrdi promjenu",
    "changeFooter": "Ako niste tražili promjenu, odmah zaštitite račun.",
    "codeTitle": "Potvrdi svoj identitet",
    "codeIntro": "Koristite ovaj kod za potvrdu identiteta."
},
  chat: {
    "title": "EMS Mujic · Pomoć",
    "open": "Pitaj EMS Mujic",
    "close": "Zatvori razgovor",
    "placeholder": "Šta vas zanima?",
    "greeting": "Zdravo! Kako vam možemo pomoći?",
    "loading": "Razmatram pitanje…",
    "send": "Pošalji",
    "stop": "Zaustavi",
    "reasoning": "Procjena",
    "privacy": "Razgovor se šalje AI-u i stranica ga ne čuva. Ne unosite osjetljive podatke.",
    "error": "Chat trenutno nije dostupan. Kontaktirajte nas emailom ili telefonom.",
    "contact": "Kontaktirajte nas",
    "services": "Koje usluge nudite?",
    "pricing": "Koliko koštaju servis i IT paketi?",
    "repair": "Skuter mi se ne puni. Možete li pomoći?"
},
  nav: {
    home: "Početna",
    electronics: "Polovna elektronika",
    service: "Servis",
    it: "IT podrška",
    ewaste: "Otkup e-otpada",
    ai: "AI & Dizajn",
    drone: "Drone",
    retro: "Retro elektronika",
    contact: "Kontakt",
  },
  footer: {
    tagline: "Polovna elektronika, servis i popravke, e-mobilnost, reciklaža i AI rješenja.",
    locations: "Bergen i Stord, Norveška",
    servicesTitle: "Usluge", companyTitle: "Firma", contactTitle: "Kontakt",
    privacy: "Privatnost", terms: "Uslovi", account: "Moj račun", rights: "Sva prava zadržana.",
  },
  auth: {
    kicker: "Račun",
    title: "Prijavite se ili otvorite račun",
    lead: "Uz račun možete pregledati i uređivati svoje podatke. Račun nije potreban da nas kontaktirate.",
    signInTab: "Prijava", signUpTab: "Registracija", forgotTab: "Zaboravljena lozinka",
    email: "Email", password: "Lozinka", confirmPassword: "Potvrdite lozinku", newPassword: "Nova lozinka",
    signInButton: "Prijavi se", signUpButton: "Otvorite račun", sendResetButton: "Pošalji link za reset", resetButton: "Sačuvaj novu lozinku",
    forgotLink: "Zaboravili ste lozinku?", backToLogin: "Nazad na prijavu", accountLink: "Moj račun",
    minPassword: "Lozinka mora imati najmanje 8 znakova.", passwordMismatch: "Lozinke se ne poklapaju.", invalidEmail: "Unesite ispravnu email adresu.",
    checkEmail: "Provjerite email", checkEmailText: "Poslali smo link za potvrdu. Kliknite na link u emailu da aktivirate račun.",
    invalidCredentials: "Pogrešan email ili lozinka.", emailNotConfirmed: "Email adresa još nije potvrđena. Provjerite poštu.", userExists: "Račun s ovom email adresom već postoji.", rateLimited: "Previše pokušaja. Pokušajte ponovo za koji trenutak.", genericError: "Nešto je pošlo naopako. Pokušajte ponovo.",
    forgotTitle: "Zaboravljena lozinka", forgotText: "Unesite svoju email adresu i poslat ćemo vam link za odabir nove lozinke.", resetSent: "Ako adresa postoji kod nas, poslali smo link za reset. Provjerite email.",
    resetTitle: "Odaberite novu lozinku", resetText: "Unesite novu lozinku ispod.", resetDone: "Lozinka je ažurirana. Sada se možete prijaviti.", resetExpired: "Link je nevažeći ili istekao. Zatražite novi link za reset.",
    switchToSignUp: "Nemate račun? Registrujte se", switchToSignIn: "Već imate račun? Prijavite se",
  },
  account: {
    kicker: "Račun", title: "Moj račun", lead: "Ovdje možete vidjeti podatke svog računa.",
    emailLabel: "Email", createdLabel: "Račun otvoren", unknown: "Nepoznato",
    signOut: "Odjavi se", securityNote: "Čuvamo samo email adresu s kojom ste se registrovali. Možete zatražiti brisanje računa u svakom trenutku.",
  },
  legal: {
    privacy: {
      kicker: "Privatnost", title: "Politika privatnosti",
      lead: "Kako obrađujemo lične podatke kada koristite emsmujic.tech.",
      updated: "Posljednje ažuriranje: januar 2026.",
      sections: [
        { title: "Rukovalac podacima", text: "EMS Mujic, sa poslovanjem u Bergenu i Stordeu, rukuje ličnim podacima prikupljenim preko ove web stranice. Možete nas kontaktirati na ems.mujic@gmail.com." },
        { title: "Koje podatke obrađujemo", text: "Kada nas kontaktirate emailom ili telefonom, obrađujemo vaše ime, kontakt podatke i sadržaj upita. Ako otvorite račun, čuvamo vašu email adresu i šifrovanu verziju lozinke." },
        { title: "AI funkcije", text: "Poruke koje pišete korisničkoj pomoći, te opisi ili fotografije koje pošaljete servisnom asistentu, šalju se vanjskoj AI usluzi radi generisanja odgovora. Stranica ne čuva te poruke ni fotografije. Izbjegavajte dijeljenje osjetljivih podataka." },
        { title: "Pohrana u pregledniku", text: "Stranica ne koristi kolačiće za praćenje. Vaš preglednik čuva samo odabrani jezik i, ako ste prijavljeni, podatke koji vas drže prijavljenim." },
        { title: "Vaša prava", text: "Imate pravo na uvid, ispravku i brisanje svojih ličnih podataka, te na pritužbu norveškom organu za zaštitu podataka (Datatilsynet). Kontaktirajte nas za ostvarivanje prava." },
      ],
    },
    terms: {
      kicker: "Uslovi", title: "Uslovi korištenja",
      lead: "Uslovi korištenja stranice emsmujic.tech i naših usluga.",
      updated: "Posljednje ažuriranje: januar 2026.",
      sections: [
        { title: "O sadržaju", text: "Sadržaj na stranici je opća informacija o našim uslugama i ne predstavlja obavezujuću ponudu." },
        { title: "Kupovina i prodaja polovne opreme", text: "Svi uređaji se provjeravaju prije prodaje. Za potrošače važi norveški zakon o kupovini potrošača. Uslovi svakog pojedinačnog dogovora dogovaraju se direktno s nama." },
        { title: "Ponude i cijene", text: "Cijene i dostupnost se mijenjaju sa stanjem na lageru. Ponude važe dok su navedene i dogovaraju se pismeno prije početka rada." },
        { title: "AI generisan sadržaj", text: "Odgovori AI funkcija su samo smjernice i mogu sadržavati greške. Ne zamjenjuju stručnu procjenu uređaja." },
        { title: "Odgovornost i primjenjivo pravo", text: "Trudimo se da informacije budu tačne, ali ne možemo garantovati da su u svakom trenutku potpune. Primjenjuje se norveško pravo." },
      ],
    },
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
    gallery: {
      kicker: "Servis & popravke",
      title: "Vrijedi sačuvati.",
      note: "AI-generisane ilustracije popravki — nisu fotografije završenih radova za klijente.",
      open: "Pogledaj usluge", close: "Zatvori", previous: "Prethodna slika", next: "Sljedeća slika", pause: "Pauziraj slajdove", play: "Pokreni slajdove", repair: "Dijagnostika i popravke", buy: "Kupi polovno — provjeri dostupnost", sell: "Prodaj ili recikliraj uređaj", quote: "Traži ponudu",
      items: [
        { title: "Laptopi", text: "Hlađenje · hardver", alt: "Laptop tokom popravke" },
        { title: "Tableti", text: "Ekran · baterija", alt: "Tablet na radnom stolu" },
        { title: "Smart telefoni", text: "Baterija · konektor", alt: "Otvoren telefon tokom popravke" },
        { title: "Televizori", text: "Ekran · elektronika", alt: "TV s otvorenom zadnjom stranom" },
        { title: "Desktop računari", text: "Nadogradnje · komponente", alt: "Desktop računar s otvorenim kućištem" },
        { title: "Električni skuteri", text: "Baterija · motor", alt: "Servis električnog skutera" },
        { title: "Električna bicikla", text: "Pogon · održavanje", alt: "Servis motora električnog bicikla" },
        { title: "Audio & ostala elektronika", text: "Hi-fi · slušalice", alt: "Pojačalo i slušalice na radnom stolu" },
      ],
    },
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
    it: {
      tag: "IT podrška",
      title: "IT support za firme — računari, mreže i daljinska podrška",
      text: "Fiksno održavanje računara i servera, mreža i sigurnosti. Većina se riješi daljinski, bez čekanja da neko izađe.",
      link: "Pogledaj pakete",
    },
    drone: {
      tag: "Drone",
      title: "Drone inspekcije i snimanje nedostupnih lokacija",
      text: "Letimo tamo gdje je teško ili opasno doći — krovovi, fasade, šahtovi i visoke zgrade — a vi dobijate fotografije, snimak i ocjenu.",
      link: "Pogledaj drone usluge",
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
    howItWorks: "Kako radi servis",
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
  it: {
    kicker: "IT podrška za firme",
    title: "IT support u fiksnom paketu — računari, mreže i daljinska podrška",
    lead: "Preuzimamo brigu o vašim računarima, serverima i mreži da biste se vi bavili poslom. Sve što može da se obavi na daljinu, radimo daljinski — brže i povoljnije za vas.",
    packages: [
      {
        name: "Daljinska podrška",
        tagline: "Pomoć kad nešto stane",
        points: [
          "Podrška putem emaila, telefona i Teams-a",
          "Spori ili neispravni računari, štampači i email problemi",
          "Pratimo svaki slučaj dok se ne riješi",
        ],
        cta: "Traži ponudu",
      },
      {
        name: "Održavanje",
        tagline: "Fiksno mjesečno održavanje",
        points: [
          "Ažuriranje sistema i sigurnosnih programa",
          "Kontrola računara, servera i backupa",
          "Čišćenje i podešavanje mašina",
        ],
        cta: "Traži ponudu",
      },
      {
        name: "Mreže + izlazak",
        tagline: "Sve iz Održavanja, plus izlazak na teren",
        points: [
          "Ruteri, switchevi, Wi-Fi i kablovi",
          "Vatrobran i upravljanje pristupom",
          "Izlazak u Bergen i Stord kad zatreba",
        ],
        cta: "Traži ponudu",
      },
    ],
    remote: {
      title: "Većina se riješi bez izlaska",
      text: "Povezujemo se na vašu mašinu ili mrežu preko sigurne veze. Ne čekate da neko dođe — i plaćate posao, ne prevoz.",
      points: [
        "Računari i serveri",
        "Ruteri, switchevi i Wi-Fi",
        "Email i Microsoft 365 / Google Workspace",
        "Backup i oporavak",
        "Vatrobran i sigurnost",
        "Nadzor i upozorenja",
      ],
    },
    quote: {
      title: "Koliko košta?",
      text: "Paketi se prilagođavaju veličini firme i broju mašina. Recite nam šta imate danas i dajemo vam fiksnu mjesečnu cijenu.",
      button: "Javite se",
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
    lead: "Pametniji tok rada i jasan vizuelni identitet. Pomažemo vašoj firmi uz AI, automatizaciju i dizajn.",
    cards: [
      { tag: "AI", title: "AI botovi", text: "Odgovori klijentima na web-stranici, WhatsAppu, Viberu i društvenim mrežama. Prilagođeni informacijama i potrebama vaše firme." },
      { tag: "AI", title: "AI recepcionisti", text: "Virtualni recepcionist koji odgovara na pozive, prima upite i zakazuje termine — i izvan radnog vremena." },
      { tag: "Automatizacija", title: "Automatizacija", text: "Povežite alate i smanjite ručni rad. Pojednostavljujemo ponavljajuće zadatke i tok informacija." },
      { tag: "Dizajn", title: "Logo i brending", text: "Cjelovit identitet s logotipom, bojama i tipografijom. Prepoznatljiv izgled web-stranice i promotivnih materijala." },
      { tag: "3D", title: "3D dizajn", text: "Predstavite proizvode i prostore uz 3D modele i vizualizacije. Od ideje do jasnog vizuelnog izraza." },
      { tag: "AI", title: "AI vizualizacija", text: "AI slike proizvoda, enterijera i ideja za kampanje. Istražite različite izglede prije odabira pravca." },
    ],
  },
  drone: {
    kicker: "Drone usluge",
    title: "Drone inspekcije i snimanje nedostupnih lokacija",
    lead: "Letimo tamo gdje je teško, opasno ili skupo doći — a vi dobijate fotografije, snimak i ocjenu koje donesemo odatle.",
    services: [
      ["Inspekcija krovova i fasada", "Fotografije i snimak krovova, sljemenova, fasada i konstrukcija — bez skele i bez ljudi na visini."],
      ["Nedostupne lokacije", "Šahtovi, rezervoari, obronci, visoke zgrade i druga mjesta na koja je opasno ili nemoguće ući."],
      ["Snimanje i fotografiranje iz vazduha", "Zračni snimci za nekretnine, projekte, dešavanja i marketing."],
      ["Dokumentacija za izvještaj i osiguranje", "Vizuelni materijal koji možete koristiti u izvještaju, predmetu ili osiguranju."],
      ["Ocjena prije kupovine ili popravke", "Pogledamo mjesto prije nego kupite, gradite ili popravljate — da znate šta vas čeka."],
    ],
    points: [
      "Fotografije i snimak iz vazduha",
      "Materijal isporučen brzo",
      "Let se dogovara unaprijed",
      "Ponuda prije leta",
    ],
    quote: {
      title: "Treba vam snimak s mjesta u koje ne možete ući?",
      text: "Recite nam šta treba inspicirati ili snimiti i dajemo vam ponudu.",
      button: "Traži ponudu",
    },
  },
  assistant: {
    "title": "Pronađi odgovarajući servis",
    "lead": "Opiši kvar ili dodaj fotografiju uređaja.",
    "device": "Uređaj",
    "description": "U čemu je problem?",
    "placeholder": "Na primjer: Skuter se ne puni, a lampica na punjaču ostaje zelena.",
    "photo": "Dodaj fotografiju",
    "remove": "Ukloni fotografiju",
    "submit": "Predloži servis i pripremi upit",
    "stop": "Zaustavi",
    "loading": "Procjenjujem uređaj…",
    "reasoning": "AI procjena",
    "result": "Prijedlog i upit za servis",
    "send": "Otvori upit u emailu",
    "copy": "Kopiraj upit",
    "copied": "Kopirano",
    "required": "Opiši kvar ili dodaj fotografiju.",
    "photoError": "Izaberi JPG, PNG ili WebP fotografiju do 5 MB.",
    "invalid": "Provjeri podatke i pokušaj ponovo.",
    "unavailable": "AI pomoć trenutno nije dostupna. Kontaktiraj nas direktno.",
    "note": "AI daje preliminarni prijedlog, ne konačnu dijagnozu ili cijenu. Fotografija i opis se šalju AI-u za procjenu i stranica ih ne pohranjuje. Email se šalje tek kada ga sam pošalješ.",
    "subject": "Upit za servis",
    "enquiry": "Zatraži servis",
    "previousNav": "Prethodne stavke menija",
    "nextNav": "Sljedeće stavke menija"
},
  retro: {
    "kicker": "EMS Mujic · Bergen i Stord",
    "title": "Retro elektronika",
    "lead": "Klub za sve koji vole staru elektroniku. Podijelite strast, priče i znanje — od prvog računara do omiljenog hi-fi uređaja.",
    "alt": "Kolekcija starog računara, receivera, kasetofona i kaseta",
    "note": "AI-generisana ilustracija retro elektronike.",
    "join": "Učlani se u klub",
    "subject": "Članstvo u Retro elektronika klubu",
    "emailBody": "Zdravo EMS Mujic!\n\nŽelim se učlaniti u Retro elektronika klub.\n\nIme:\nMjesto:\nMoj omiljeni stari elektronski uređaj:\nŠta želim podijeliti s klubom:\n",
    "introTitle": "Stara tehnologija. Zajednička strast.",
    "intro": "Za kolekcionare, ljubitelje popravki i radoznale — bilo da imate cijelu kolekciju ili jedan uređaj s dobrom pričom.",
    "topics": [
        [
            "Podijeli svoju kolekciju",
            "Fotografije, priče i uspomene na elektroniku koju ste sačuvali."
        ],
        [
            "Razmijeni znanje",
            "Restauracija, dijagnostika, dijelovi i iskustva koja održavaju stare uređaje u životu."
        ],
        [
            "Pronađi istomišljenike",
            "Poveži se s ljubiteljima retro računara, radija, hi-fi opreme, televizora i gaming uređaja."
        ]
    ],
    "membership": "Članstvo se dogovara emailom s EMS Mujic. Napišite ko ste i šta vas zanima — javit ćemo se lično.",
    "teaser": "Nije sve staro otpad. Upoznaj ljude koji vide vrijednost u staroj elektronici.",
    "explore": "Istraži retro klub"
} ,
  kontakt: {
    kicker: "Kontakt",
    title: "Razgovarajmo",
    lead: "Kupovina, servis, IT podrška, otkup ili novi projekt — javite se pozivom ili emailom.",
    labels: { phone: "Telefon", email: "Email", location: "Lokacija" },
  },
};

export const content: Record<Lang, SiteContent> = { nb, en, bs };
