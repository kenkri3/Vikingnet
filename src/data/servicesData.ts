import {
  Sparkles,
  Globe,
  ShoppingCart,
  Code2,
  Wand2,
  Bot,
  MessageSquare,
  Workflow,
  Headset,
  Search,
  Video,
  Plane,
  HardHat,
  Gavel,
  Calculator,
  ShieldAlert,
  ClipboardCheck,
  UserCheck,
  Inbox,
  Send,
  LucideIcon,
} from 'lucide-react';

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  badge?: string;
  category: string;
  icon: LucideIcon;
  heroIntro: string;
  startingPrice: string;
  pricePeriod?: string;
  priceNote?: string;
  stats: { value: string; label: string }[];
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  deliverables: string[];
  idealFor: string[];
  faq: { q: string; a: string }[];
}

export const ALL_SERVICES: ServiceDetail[] = [
  {
    slug: 'byggesaksvakten',
    title: 'Byggesaksvakten',
    tagline: 'Daglig overvåking av kommunale byggesaksarkiv — nye søknader rett i innboksen kl. 07:30.',
    badge: 'Fagtjeneste',
    category: 'Autonome Fagtjenester',
    icon: HardHat,
    heroIntro:
      'Byggesaksvakten skanner offentlige eInnsyn- og byggesaksarkiver i dine utvalgte postnumre hver eneste dag, og varsler deg om nye rammesøknader, igangsettingstillatelser og rivetillatelser før de blir allment kjent i markedet.',
    startingPrice: '0,- i etablering',
    pricePeriod: ' (drift fra 2.490,-/mnd)',
    priceNote: 'Levering på e-post/PDF kl. 07:30 er standard inkludert. Teams/Slack (+990,-/mnd eks. mva), Excel/Sheets (+990,-/mnd eks. mva) eller SMS-hastevarsel (+490,-/mnd eks. mva) kan legges til.',
    stats: [
      { value: '07:30', label: 'Levert i innboksen hver morgen' },
      { value: '100%', label: 'Offentlige, verifiserbare kilder' },
      { value: '0,-', label: 'I etablering' },
    ],
    benefits: [
      {
        title: 'Kom først til byggherren',
        desc: 'Du får varsel om nye søknader i dine postnumre samme dag de registreres, i stedet for å oppdage prosjektet når det allerede er i gang.',
      },
      {
        title: 'Kvalifisert, ikke bare søkt',
        desc: 'Agenten leser selve søknadsdokumentene og filtrerer bort irrelevante saker, slik at du kun bruker tid på tiltak som faktisk matcher det du leverer.',
      },
      {
        title: 'Null manuell arkivsøking',
        desc: 'Ingen behov for å lete manuelt i kommunens postliste eller eInnsyn — resymeet ligger klart hver morgen før arbeidsdagen starter.',
      },
      {
        title: 'Flerkanal-varsling',
        desc: 'Standard levering på e-post og PDF. Kobles valgfritt til Teams, Slack, en levende Excel/Sheets-oversikt eller SMS ved hastesaker.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Definer dekningsområde',
        desc: 'Du oppgir postnumre, kommuner og hvilke type tiltak (nybygg, tilbygg, riving m.m.) som er relevante for din virksomhet.',
      },
      {
        step: '02',
        title: 'Daglig autonom skanning',
        desc: 'Agenten henter og leser nye offentlige byggesaker hver natt, og siler ut det som faktisk er relevant for din bransje.',
      },
      {
        step: '03',
        title: 'Ferdig resymé i innboksen',
        desc: 'Kl. 07:30 mottar du et strukturert 1-sides sammendrag med adresse, tiltakstype og saksnummer for videre oppfølging.',
      },
    ],
    deliverables: [
      'Daglig skanning av kommunale byggesaksarkiv (eInnsyn/postliste) i dine postnumre',
      '1-sides mobiltilpasset resymé levert på e-post/PDF kl. 07:30',
      'Filtrering på tiltakstype (nybygg, tilbygg, riving, bruksendring m.m.)',
      'Saksnummer, adresse og lenke til kommunens offentlige saksinnsyn',
      'Valgfri levering i Teams, Slack, Excel/Sheets eller SMS',
      'Ingen bindingstid — løpende månedlig avtale',
    ],
    idealFor: [
      'Håndverkere, entreprenører og byggmestere som ønsker tidlig kontakt med byggherre',
      'Eiendomsutviklere og eiendomsmeglere som følger aktivitet i et geografisk område',
      'Leverandører av byggematerialer og fagtjenester knyttet til nye tiltak',
    ],
    faq: [
      {
        q: 'Hvilke kilder bruker Byggesaksvakten?',
        a: 'Utelukkende offentlig tilgjengelig informasjon fra kommunenes egne eInnsyn- og postlisteløsninger, i tråd med Offentleglova og Plan- og bygningsloven. Ingen lukkede eller private registre benyttes.',
      },
      {
        q: 'Kan dere garantere at vi får alle relevante saker?',
        a: 'Vi henter alt som er offentlig publisert i valgte postnumre og filtrerer det mot dine kriterier. Kommunenes egen publiseringstakt kan variere noe, men agenten skanner på nytt hver dag slik at ingenting blir liggende lenge.',
      },
      {
        q: 'Kan vi endre postnumre eller filtre underveis?',
        a: 'Ja, dekningsområdet kan justeres når som helst — bare gi beskjed, så oppdateres skanningen fra neste virkedag.',
      },
    ],
  },
  {
    slug: 'doffin-anbudsvakt',
    title: 'Doffin- & Anbudsvakten',
    tagline: 'Daglig overvåking av offentlige anbud — og et fullt anbudsutkast skrevet for deg på under 48 timer.',
    badge: 'Fagtjeneste',
    category: 'Autonome Fagtjenester',
    icon: Gavel,
    heroIntro:
      'Doffin- & Anbudsvakten scanner offentlige anbud på Doffin daglig, analyserer kravspesifikasjonene og leverer et kortfattet beslutningsgrunnlag rett i innboksen. Ønsker dere å levere tilbud, kan Anbudsskriveren produsere et komplett, poengoptimalisert utkast på under 48 timer.',
    startingPrice: 'Fra 2.490,-/mnd',
    pricePeriod: ' (overvåking, 0,- i etablering)',
    priceNote: 'Fullt anbudsutkast fra Anbudsskriveren: fra kr 14.500,- eks. mva per anbud (100% forskudd), eller abonnement kr 19.500,-/mnd eks. mva inkl. inntil 2 anbud og daglig overvåking.',
    stats: [
      { value: '48t', label: 'Standard leveringstid på anbudsutkast' },
      { value: '07:30', label: 'Daglig Doffin-resymé' },
      { value: '100%', label: 'Basert på offentlige anbudsdata' },
    ],
    benefits: [
      {
        title: 'Aldri gå glipp av en relevant konkurranse',
        desc: 'Doffin scannes daglig og siles mot terskelverdi, frister og krav som faktisk er gjennomførbare for din virksomhet.',
      },
      {
        title: 'Kravmatrise uten manuell PDF-lesing',
        desc: 'Agenten leser konkurransegrunnlaget og bryter ned absolutte krav og tildelingskriterier, slik at dere raskt vet om det er verdt å levere.',
      },
      {
        title: 'Komplett anbudsutkast på 48 timer',
        desc: 'Anbudsskriveren produserer poengoptimalisert løsningsbeskrivelse, fremdriftsplan og SLA-bilag klar for gjennomgang og innsending.',
      },
      {
        title: 'Dere signerer og sender selv',
        desc: 'Dere logger inn med BankID i Mercell/TendSign og sender inn selv — vi rører aldri innloggingen deres eller tar juridisk ansvar for innholdet.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Definer bransje og terskler',
        desc: 'Dere angir CPV-koder, bransje og minimum kontraktsverdi, slik at kun relevante konkurranser slipper gjennom filteret.',
      },
      {
        step: '02',
        title: 'Daglig analyse & resymé',
        desc: 'Nye anbud analyseres automatisk og et 1-sides beslutningsgrunnlag leveres kl. 07:30 med frist, krav og en kort anbefaling.',
      },
      {
        step: '03',
        title: 'Anbudsskriving på bestilling',
        desc: 'Ønsker dere å levere, bestiller dere Anbudsskriveren: full kravmatrise, løsningsbeskrivelse og bilag leveres innen 48 timer.',
      },
    ],
    deliverables: [
      'Daglig skanning av Doffin mot valgte bransjer og terskelverdier',
      '1-sides beslutningsgrunnlag levert på e-post/PDF kl. 07:30',
      'Anbudsskriver: full kravmatrise brutt ned mot tildelingskriteriene',
      'Poengoptimalisert løsningsbeskrivelse i Word/PDF',
      'Bilag 3 (fremdriftsplan) og Bilag 4 (SLA/tjenestenivå)',
      'Punkt-for-punkt sjekkliste for opplasting i Mercell/TendSign',
    ],
    idealFor: [
      'Entreprenører, rådgivere og IT-/tjenesteleverandører som byr på offentlige kontrakter',
      'Virksomheter som ønsker et fast blikk på Doffin uten å bruke egne timer på søk',
      'Selskaper som har kompetansen til å levere, men mangler tid til å skrive selve tilbudet',
    ],
    faq: [
      {
        q: 'Er dette lovlig og i tråd med anskaffelsesregelverket?',
        a: 'Ja. Vi opptrer som teknisk tilrettelegger på samme måte som en ekstern anbudsrådgiver, i tråd med Lov om offentlige anskaffelser (LOA) og forskriften (FOA). Dere logger selv inn med BankID og står for endelig innsending og signering.',
      },
      {
        q: 'Hvem har ansvaret for innholdet i anbudet?',
        a: 'Dere beholder det fulle ansvaret for sluttkontroll av kalkyler, timepriser, frister og faktiske opplysninger. Vi er ikke part i deres anbud eller kundeavtaler — se pkt. 9 i våre salgsvilkår.',
      },
      {
        q: 'Hva om vi bare vil ha varsling, ikke skriving?',
        a: 'Da starter dere med ren overvåking fra kr 2.490,-/mnd eks. mva. Anbudsskriveren bestilles separat per anbud den dagen dere faktisk bestemmer dere for å levere.',
      },
    ],
  },
  {
    slug: 'kpi-prisjustering',
    title: 'Den Automatiske KPI- & Prisjustereren',
    tagline: 'Riktig, dokumentert prisjustering av alle kundeavtaler — beregnet mot SSBs offisielle indeks.',
    badge: 'Fagtjeneste',
    category: 'Autonome Fagtjenester',
    icon: Calculator,
    heroIntro:
      'Slipp regnearkrot ved årsskiftet. KPI-Prisjustereren henter offisiell konsumprisindeks fra SSBs API, beregner matematisk korrekt ny pris per kundeavtale, og genererer ferdige avstemmingsrapporter og prisvarslingsbrev med 30 dagers forhåndsvarsel.',
    startingPrice: 'Fra 12.500,- per år',
    pricePeriod: ' (fastpris, ingen mnd. avgift)',
    priceNote: 'Alternativ modell: kr 4.900,- eks. mva + 10% av årlig prisøkning. Faktureres 100% forskudd ved bestilling.',
    stats: [
      { value: 'SSB', label: 'Offisiell konsumprisindeks som kilde' },
      { value: '30d', label: 'Forhåndsvarsel til kundene' },
      { value: '100%', label: 'Sporbar, dokumentert beregning' },
    ],
    benefits: [
      {
        title: 'Ingen tapt inntekt på gamle priser',
        desc: 'Avtaler som blir liggende uendret år etter år spiser opp marginen. Justeringen kjøres systematisk mot hele kundeporteføljen samtidig.',
      },
      {
        title: 'Matematisk korrekt, hver gang',
        desc: 'Beregningen hentes direkte fra SSBs offisielle KPI-tall, med full sporbarhet fra gammel pris til ny pris per avtale.',
      },
      {
        title: 'Ferdige varslingsbrev, ikke bare tall',
        desc: 'Dere mottar komplett tekst til prisvarsling med riktig juridisk begrunnelse og frist, klar til å sendes til hver enkelt kunde.',
      },
      {
        title: 'Full revisjonsrapport',
        desc: 'En samlet avstemmingsrapport viser gammel pris, ny pris, indeksgrunnlag og effektiv dato for hver kundeavtale — nyttig ved revisjon.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Last opp avtaleoversikt',
        desc: 'Dere gir oss en oversikt over aktive kundeavtaler med nåværende pris og siste justeringsdato (Excel/CSV eller eksport fra fagsystem).',
      },
      {
        step: '02',
        title: 'Automatisk KPI-beregning',
        desc: 'Agenten henter gjeldende SSB-indeks og beregner ny pris per avtale i tråd med avtalt indekseringsklausul.',
      },
      {
        step: '03',
        title: 'Rapport og varslingsbrev levert',
        desc: 'Dere mottar en samlet avstemmingsrapport og ferdige, personaliserte prisvarslingsbrev til hver kunde, klare til utsending.',
      },
    ],
    deliverables: [
      'Innhenting av offisiell KPI-indeks fra SSBs API',
      'Beregnet ny pris per kundeavtale med full sporbarhet',
      'Samlet avstemmingsrapport (Excel/PDF) for hele porteføljen',
      'Ferdig utformede prisvarslingsbrev med 30 dagers frist',
      'Årlig gjentakelse på fast dato dersom ønskelig',
      'Ingen etableringskostnad — fastpris for hele kjøringen',
    ],
    idealFor: [
      'Bedrifter innen renhold, vaktmestertjenester og eiendomsdrift med mange løpende avtaler',
      'Virksomheter med indeksregulerte leieavtaler eller serviceavtaler',
      'Alle med en kundeportefølje der prisjustering i dag gjøres manuelt eller glemmes',
    ],
    faq: [
      {
        q: 'Hvilket indeksgrunnlag brukes?',
        a: 'Standard er Statistisk sentralbyrås offentlige konsumprisindeks (KPI), hentet direkte fra SSBs API. Andre avtalte indekser kan brukes dersom kundeavtalene krever det.',
      },
      {
        q: 'Sender dere varselet direkte til våre kunder?',
        a: 'Standard er at dere selv sender de ferdige varslingsbrevene fra egen avsenderadresse, slik at kommunikasjonen kommer fra dere. Utsending på våre vegne kan avtales særskilt.',
      },
      {
        q: 'Hva om vi har ulike indekseringsklausuler i ulike avtaler?',
        a: 'Det er fullt mulig. Vi kartlegger klausulen per avtale eller avtalegruppe før beregningen kjøres, slik at hver kunde får riktig, avtalefestet justering.',
      },
    ],
  },
  {
    slug: 'apenhetslov-rapport',
    title: 'Åpenhetslov- & Leverandørrapportøren',
    tagline: 'Lovpålagt aktsomhetsrapport, styreklar og ferdig til publisering — uten interne timer på leverandøroppfølging.',
    badge: 'Fagtjeneste',
    category: 'Autonome Fagtjenester',
    icon: ShieldAlert,
    heroIntro:
      'Åpenhetsloven §§ 4 og 5 pålegger større virksomheter en årlig aktsomhetsvurdering. Vi automatiserer revisjonen av leverandørreskontroen mot land- og bransjerisiko, sender ut digitale egenerklæringer til leverandørene, og leverer en komplett, styreklar rapport klar for publisering.',
    startingPrice: 'Fra 18.500,- per rapport',
    pricePeriod: ' (fastpris, 100% forskudd)',
    priceNote: 'Løpende oppfølging av § 6-informasjonskrav gjennom året kan legges til for kr 1.950,-/mnd eks. mva.',
    stats: [
      { value: '§§4-5', label: 'Åpenhetsloven som rettslig grunnlag' },
      { value: '100%', label: 'Styreklar rapport ved levering' },
      { value: '1x', label: 'Årlig kjøring, fast frist' },
    ],
    benefits: [
      {
        title: 'Slipper manuell leverandørkartlegging',
        desc: 'Leverandørreskontroen krysses automatisk mot lands- og bransjerisiko, slik at dere raskt ser hvor aktsomhetsvurderingen bør prioriteres.',
      },
      {
        title: 'Digital egenerklæring til leverandørene',
        desc: 'Utsending og innsamling av egenerklæringer håndteres strukturert, med påminnelser til leverandører som ikke har svart.',
      },
      {
        title: 'Rapport klar for styrebehandling',
        desc: 'Sluttresultatet er et ferdig PDF/Word-dokument bygget for offentliggjøring på nettsiden, i tråd med lovens krav til innhold.',
      },
      {
        title: 'Dokumentert, ikke gjettet',
        desc: 'Alle vurderinger er sporbare til konkrete kilder og leverandørsvar — ingen oppdiktede konklusjoner eller antakelser presenteres som fakta.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Leverandørreskontro & risikokartlegging',
        desc: 'Dere sender over leverandørlisten. Vi krysser den mot kjente lands- og bransjerisikoindekser og identifiserer hvor det bør graves dypere.',
      },
      {
        step: '02',
        title: 'Egenerklæringer & oppfølging',
        desc: 'Digitale egenerklæringsskjema sendes til prioriterte leverandører, med automatiske purringer ved manglende svar.',
      },
      {
        step: '03',
        title: 'Ferdig aktsomhetsrapport',
        desc: 'Alt samles i en komplett rapport strukturert etter lovens krav, klar for styregodkjenning og publisering på nettsiden.',
      },
    ],
    deliverables: [
      'Automatisert risikoscreening av leverandørreskontroen',
      'Digital egenerklæringsflyt med purring til leverandører',
      'Komplett aktsomhetsrapport i Word/PDF, klar for styrebehandling',
      'Struktur i tråd med Åpenhetslovens §§ 4 og 5',
      'Valgfri løpende oppfølging av § 6-informasjonskrav gjennom året',
      'Genereres på nytt hvert år til fast frist dersom ønskelig',
    ],
    idealFor: [
      'Virksomheter som omfattes av Åpenhetsloven og trenger en solid, dokumentert prosess',
      'Innkjøpsansvarlige og HR/ESG-ansvarlige uten dedikert bærekraftsavdeling',
      'Selskaper som vil unngå at rapporten blir en ren "klipp og lim"-øvelse i siste liten',
    ],
    faq: [
      {
        q: 'Er vi juridisk ansvarlige for rapportens innhold?',
        a: 'Ja. Vi er teknisk tilrettelegger og forfatter av utkastet basert på deres opplysninger og offentlige registre. Dere har det fulle ansvaret for sluttkontroll og publisering, jf. pkt. 9 i våre salgsvilkår.',
      },
      {
        q: 'Hva om en leverandør ikke svarer på egenerklæringen?',
        a: 'Manglende svar dokumenteres i rapporten sammen med hvilke purringer som er sendt, slik at aktsomhetsvurderingen er transparent selv der informasjon mangler.',
      },
      {
        q: 'Kan dere publisere rapporten på nettsiden vår?',
        a: 'Vi leverer et ferdig dokument klart for publisering. Selve publiseringen kan vi bistå med som en del av et Vikingnet-nettsideoppdrag, eller dere legger den ut selv.',
      },
    ],
  },
  {
    slug: 'prosjekt-hms-sja',
    title: 'Prosjekt-HMS & SJA-Generatoren',
    tagline: 'Prosjektspesifikk HMS-plan og Sikker Jobb Analyse klar i PDF på under en time.',
    badge: 'Fagtjeneste',
    category: 'Autonome Fagtjenester',
    icon: ClipboardCheck,
    heroIntro:
      'Byggherreforskriften og StartBANK krever dokumentert HMS-arbeid før oppstart. Vi genererer prosjektspesifikke HMS-planer, Sikker Jobb Analyse (SJA) og risikomatriser tilpasset det enkelte prosjekt, med verifiserte lokale legevakt- og nødprosedyrer inkludert.',
    startingPrice: '9.500,- (Grunnpakke)',
    pricePeriod: ' (drift fra 1.490,-/mnd)',
    priceNote: 'Grunnpakken inkluderer inntil 5 prosjekter/mnd. Enkeltprosjekt uten abonnement: kr 1.500,- eks. mva.',
    stats: [
      { value: '<1t', label: 'Fra bestilling til ferdig PDF' },
      { value: '5', label: 'Prosjekter inkludert per måned' },
      { value: '100%', label: 'Tilpasset Byggherreforskriften' },
    ],
    benefits: [
      {
        title: 'Ferdig dokumentasjon, ikke en tom mal',
        desc: 'Planen fylles ut med faktiske prosjektopplysninger — adresse, arbeidsoppgaver og involverte fag — ikke en generisk mal dere må skrive selv.',
      },
      {
        title: 'Lokale nødprosedyrer inkludert',
        desc: 'Nærmeste legevakt, sykehus og nødprosedyrer verifiseres mot prosjektets faktiske adresse og legges automatisk inn i planen.',
      },
      {
        title: 'Klar for StartBANK og byggherre',
        desc: 'Dokumentene struktureres slik at de kan legges rett inn i StartBANK-dokumentasjonen eller oversendes byggherre uten omskriving.',
      },
      {
        title: 'Skalerer med prosjektmengden',
        desc: 'Grunnpakken dekker inntil 5 prosjekter i måneden — perfekt for entreprenører med flere samtidige byggeplasser.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Send inn prosjektopplysninger',
        desc: 'Adresse, arbeidsomfang, involverte fag og eventuelle kjente risikoer for det aktuelle prosjektet sendes inn på et enkelt skjema.',
      },
      {
        step: '02',
        title: 'Automatisk generering',
        desc: 'Agenten setter sammen HMS-plan, SJA og risikomatrise tilpasset akkurat dette prosjektet, inkludert lokale nødprosedyrer.',
      },
      {
        step: '03',
        title: 'Ferdig PDF levert',
        desc: 'Dere mottar komplett dokumentasjon i PDF innen kort tid, klar for gjennomgang, signering og oppslag på byggeplassen.',
      },
    ],
    deliverables: [
      'Prosjektspesifikk HMS-plan i PDF',
      'Sikker Jobb Analyse (SJA) tilpasset arbeidsoppgavene',
      'Risikomatrise med tiltak og ansvarlig',
      'Verifiserte lokale legevakt- og nødprosedyrer',
      'Struktur tilpasset Byggherreforskriften og StartBANK',
      'Inntil 5 prosjekter per måned inkludert i Grunnpakken',
    ],
    idealFor: [
      'Entreprenører og håndverksbedrifter med krav om dokumentert HMS-arbeid',
      'Byggeledere som trenger rask HMS-dokumentasjon ved oppstart av nye prosjekter',
      'Bedrifter registrert eller under registrering i StartBANK',
    ],
    faq: [
      {
        q: 'Erstatter dette verneombudets eller HMS-ansvarliges rolle?',
        a: 'Nei. Vi leverer dokumentasjonsgrunnlaget. Ansvarlig for gjennomføring, oppfølging på byggeplass og eventuelle avvik ligger fortsatt hos dere som virksomhet, jf. Internkontrollforskriften.',
      },
      {
        q: 'Hvor raskt kan vi få en plan før prosjektstart?',
        a: 'Normal leveringstid er under en time fra vi har mottatt komplette prosjektopplysninger. Ufullstendige opplysninger vil naturlig forlenge dette.',
      },
      {
        q: 'Hva om prosjektet endrer omfang underveis?',
        a: 'Planen kan oppdateres når arbeidsomfanget endres vesentlig — send oss oppdaterte opplysninger, så genereres en revidert versjon.',
      },
    ],
  },
  {
    slug: 'rekrutteringstriage',
    title: 'Søknads- & Rekrutteringsassistenten',
    tagline: 'GDPR-trygg søknadshåndtering med objektiv Topp-5-matrise — for bedrifter uten egen HR-avdeling.',
    badge: 'Fagtjeneste',
    category: 'Autonome Fagtjenester',
    icon: UserCheck,
    heroIntro:
      'Full søknadstriage for små og mellomstore bedrifter: automatisk mottakskvittering innen 60 sekunder, objektiv kvalifikasjonsmatching uten diskriminering, og en ukentlig Topp-5-matrise klar for 1-klikks godkjenning av intervjuer og avslag.',
    startingPrice: 'Fra 14.500,- per prosess',
    pricePeriod: ' (fastpris, 100% forskudd)',
    priceNote: 'Prisen dekker inntil 60 dagers aktiv prosess per utlyst stilling. Ingen løpende månedsavgift.',
    stats: [
      { value: '<60s', label: 'Automatisk mottakskvittering' },
      { value: 'Topp 5', label: 'Ukentlig, objektiv kandidatmatrise' },
      { value: '60d', label: 'Aktiv prosessperiode inkludert' },
    ],
    benefits: [
      {
        title: 'Ingen søknad forsvinner i innboksen',
        desc: 'Alle søkere får en profesjonell mottakskvittering umiddelbart, uavhengig av tidspunkt eller volum.',
      },
      {
        title: 'Objektiv matching mot kravene',
        desc: 'Kandidatene vurderes systematisk mot definerte kvalifikasjonskrav — ikke mot magefølelse eller tilfeldig rekkefølge i innboksen.',
      },
      {
        title: 'Ukentlig prioritert oversikt',
        desc: 'I stedet for å lese alle søknader manuelt, mottar dere en ferdig Topp-5-matrise med begrunnelse for hvorfor kandidatene rangeres som de gjør.',
      },
      {
        title: '1-klikks beslutning',
        desc: 'Godkjenning av intervju eller avslag skjer med ett klikk — dere beholder alltid det endelige menneskelige beslutningsansvaret.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Definer stilling & krav',
        desc: 'Dere sender stillingsbeskrivelse og de konkrete kvalifikasjonskravene som skal ligge til grunn for vurderingen.',
      },
      {
        step: '02',
        title: 'Automatisk mottak & matching',
        desc: 'Innkommende søknader kvitteres automatisk og vurderes fortløpende mot de definerte kravene.',
      },
      {
        step: '03',
        title: 'Topp-5-matrise & beslutning',
        desc: 'Hver uke mottar dere en oppdatert prioritert liste, og godkjenner intervju eller avslag med ett klikk.',
      },
    ],
    deliverables: [
      'Automatisk, GDPR-kompatibel mottakskvittering innen 60 sekunder',
      'Objektiv kvalifikasjonsmatching mot definerte kriterier',
      'Ukentlig Topp-5-matrise med begrunnelse per kandidat',
      '1-klikks godkjenning av intervju eller avslag',
      'Strukturert lagring av søknadsdata i tråd med GDPR',
      'Inntil 60 dagers aktiv prosess per stilling inkludert',
    ],
    idealFor: [
      'Små og mellomstore bedrifter uten egen HR-avdeling',
      'Virksomheter med høyt søknadsvolum på enkeltstillinger',
      'Bedrifter som ønsker en dokumentert, ikke-diskriminerende utvelgelsesprosess',
    ],
    faq: [
      {
        q: 'Tar dere den endelige ansettelsesbeslutningen?',
        a: 'Nei. Vi strukturerer og prioriterer kandidatene objektivt. Intervju, referansesjekk og endelig ansettelsesbeslutning tas alltid av dere.',
      },
      {
        q: 'Hvordan sikrer dere at matchingen ikke diskriminerer?',
        a: 'Vurderingen skjer utelukkende mot de konkrete, faglige kvalifikasjonskravene dere har definert for stillingen — ikke mot navn, alder, kjønn eller andre diskriminerende kriterier.',
      },
      {
        q: 'Hva skjer med søknadene etter at prosessen er avsluttet?',
        a: 'Søknadsdata behandles og slettes i tråd med GDPR og deres egne rutiner for oppbevaring av rekrutteringsdata.',
      },
    ],
  },
  {
    slug: 'innboksassistent',
    title: 'Innboks- & Henvendelsesassistenten',
    tagline: 'Innkommende e-post og PDF-ordrer triageres automatisk — ferdig svarutkast venter i innboksen.',
    badge: 'Fagtjeneste',
    category: 'Autonome Fagtjenester',
    icon: Inbox,
    heroIntro:
      'Kobles til bedriftens felleskasser (f.eks. ordre@, kundeservice@, post@) og leser innkommende e-poster og vedlagte PDF-ordrer. Nøkkeldetaljer trekkes ut automatisk, og et ferdig svarutkast legges rett i innboksen for godkjenning med ett klikk.',
    startingPrice: 'Fra 1.490,-/mnd',
    pricePeriod: ' (0,- i etablering)',
    priceNote: 'Fast månedspris kr 1 490,-/mnd eks. mva. Etablering kr 0,- • Ingen bindingstid.',
    stats: [
      { value: '24/7', label: 'Overvåker felleskassen kontinuerlig' },
      { value: '1-klikk', label: 'Godkjenning av svarutkast' },
      { value: '100%', label: 'Forblir i e-post- og kommunikasjonslaget' },
    ],
    benefits: [
      {
        title: 'Ingen henvendelse blir liggende',
        desc: 'Felleskassen overvåkes kontinuerlig, og hver innkommende e-post eller PDF-ordre fanges opp umiddelbart.',
      },
      {
        title: 'Ferdig utkast, ikke bare varsel',
        desc: 'Agenten trekker ut hva som bestilles, antall, leveringsadresse og frister, og forbereder et komplett svarutkast klart til gjennomlesing.',
      },
      {
        title: 'Din ansatte har alltid siste ord',
        desc: 'Ingenting sendes ut automatisk til kunden — svaret godkjennes eller justeres med ett klikk før det går ut.',
      },
      {
        title: 'Trygt avgrenset ansvarsområde',
        desc: 'Agenten jobber utelukkende i e-post- og dokumentlaget, og rører aldri regnskaps- eller betalingssystemer.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Koble til felleskassen',
        desc: 'En dedikert lesetilgang settes opp mot valgt e-postadresse via standard protokoll (Google Workspace/Microsoft 365).',
      },
      {
        step: '02',
        title: 'Automatisk triage & uttrekk',
        desc: 'Innkommende e-poster og PDF-vedlegg leses, og nøkkelinformasjon som bestilling, mengde og frist trekkes ut strukturert.',
      },
      {
        step: '03',
        title: 'Svarutkast klart for godkjenning',
        desc: 'Et ferdig, kontekstriktig svarutkast legges i innboksen. Den ansatte godkjenner, justerer eller avviser med ett klikk.',
      },
    ],
    deliverables: [
      'Tilkobling til felleskasse via sikker, dedikert servicebruker',
      'Automatisk uttrekk av bestillingsdetaljer fra e-post og PDF-vedlegg',
      'Ferdig svarutkast eller strukturert varsel per henvendelse',
      '1-klikks godkjenning før noe sendes til kunden',
      'Standard Fair Use-kvote for antall behandlede henvendelser per måned',
      'Valgfri BYOK-modell (egen API-nøkkel) for høyt volum',
    ],
    idealFor: [
      'Virksomheter med felles ordre- eller kundeserviceinnboks og høyt e-postvolum',
      'Bedrifter som mottar mange PDF-baserte bestillinger fra faste kunder',
      'Team som ønsker raskere responstid uten å ansette flere i førstelinje',
    ],
    faq: [
      {
        q: 'Kan agenten sende svar helt uten godkjenning?',
        a: 'Som standard nei — hver kladd godkjennes manuelt før utsending. Helautomatisk utsending for lavrisiko-kategorier kan avtales særskilt etter en innkjøringsperiode.',
      },
      {
        q: 'Får agenten tilgang til å endre noe i regnskapssystemet vårt?',
        a: 'Nei. Agenten arbeider utelukkende i e-post- og dokumentlaget og har ingen tilgang til regnskaps-, betalings- eller ERP-systemer.',
      },
      {
        q: 'Hva skjer om vi mottar langt flere henvendelser enn avtalt volum?',
        a: 'Standardavtalen har en Fair Use-kvote. Ved jevnlig overforbruk tilbys en enkel opptrappingspakke eller en BYOK-modell med ren plattformleie.',
      },
    ],
  },
  {
    slug: 'b2b-salgsagent',
    title: 'B2B Salgs- & Møtebookingsagent',
    tagline: 'Autonom e-postprospektering som finner beslutningstakere, følger opp og leverer varme leads rett i innboksen.',
    badge: 'Populær',
    category: 'AI Salg & Møtebooking',
    icon: Send,
    heroIntro:
      'En helautonom salgsagent som kjører målrettet B2B-prospektering mot beslutningstakere i Enhetsregisteret, følger opp asynkront på e-post og leverer varme leads og ferdige avtaler direkte til selgerens innboks. Leveres i tre nivåer etter hvor mye av salgsprosessen dere ønsker automatisert.',
    startingPrice: 'Fra 1.490,-/mnd',
    pricePeriod: ' (0,- i etablering)',
    priceNote: 'Solo (Lead Hunter): kr 1 490,-/mnd · Duo (Møtebookeren): kr 2 490,-/mnd · Trio (Full-Funnel Closer): kr 3 490,-/mnd. Etablering kr 0,- • Ingen bindingstid. 15 % rabatt ved årsforskudd (12 mnd for prisen av 10).',
    stats: [
      { value: '3', label: 'Nivåer å velge mellom' },
      { value: '100%', label: 'Asynkron e-postdrevet prosess' },
      { value: '2mnd', label: 'Gratis ved årsforskudd' },
    ],
    benefits: [
      {
        title: 'Målrettet, ikke masseutsendt',
        desc: 'Prospektering skjer mot Enhetsregisteret med reell verifisering av beslutningstakere, ikke tilfeldige innkjøpte adresselister.',
      },
      {
        title: 'Følger opp uten å mase',
        desc: 'Agenten håndterer naturlige oppfølginger over e-post, besvarer innledende spørsmål og filtrerer bort tydelige nei-svar.',
      },
      {
        title: 'Møtet dukker opp i kalenderen',
        desc: 'Når en beslutningstaker viser interesse, booker agenten møtet direkte i selgerens Google- eller Outlook-kalender — null manuell fram-og-tilbake.',
      },
      {
        title: 'Skalerer med ambisjonsnivået',
        desc: 'Start med ren leadgenerering (Nivå 1), trapp opp til møtebooking (Nivå 2), eller la agenten sende tilbud og hente skriftlig aksept (Nivå 3).',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Definer målgruppe & budskap',
        desc: 'Dere godkjenner overordnede målgruppekriterier og budskapsrammer før agenten settes i ordinær drift.',
      },
      {
        step: '02',
        title: 'Autonom utsending & oppfølging',
        desc: 'Agenten sender fra oppvarmede domener, følger opp naturlig over tid og filtrerer fortløpende bort useriøse eller uinteresserte kontakter.',
      },
      {
        step: '03',
        title: 'Kvalifisert møte eller aksept',
        desc: 'Avhengig av valgt nivå leveres kvalifiserte leads, bookede møter i kalenderen, eller skriftlig akseptert tilbud klart for fakturering.',
      },
    ],
    deliverables: [
      'Nivå 1 – Lead Hunter: verifiserte, kvalifiserte leads rett i selgers innboks',
      'Nivå 2 – Møtebooker: automatisk booking av salgsmøter i kalenderen',
      'Nivå 3 – Full-Funnel Closer: tilbud sendt, oppfølging og skriftlig aksept innhentet',
      'Utsending fra dedikerte, oppvarmede sekundærdomener',
      'Filtrering av nei-svar og opt-out i tråd med Markedsføringsloven § 15',
      'Løpende rapportering på respons, møter og konvertering',
    ],
    idealFor: [
      'B2B-selskaper som vil fylle kalenderen med kvalifiserte salgsmøter uten egen SDR-ressurs',
      'Selgere som bruker for mye tid på manuell prospektering og oppfølging',
      'Virksomheter som ønsker en dokumentert, opt-out-sikret outreach-prosess',
    ],
    faq: [
      {
        q: 'Sendes det kun til næringsdrivende?',
        a: 'Ja. All utsending rettes utelukkende mot næringsdrivende/juridiske personer i tråd med Markedsføringsloven § 15 og GDPR art. 6 nr. 1 f. Private forbrukere kontaktes aldri.',
      },
      {
        q: 'Hva er forskjellen på de tre nivåene?',
        a: 'Nivå 1 leverer kvalifiserte leads til deres egen oppfølging. Nivå 2 booker møtene direkte i kalenderen. Nivå 3 går videre til å sende tilbud og hente skriftlig aksept, klart for fakturering.',
      },
      {
        q: 'Hvem følger opp møtene og kundeforholdet etterpå?',
        a: 'Selve møtet og den videre kundedialogen og -avtalen er deres ansvar. Agenten leverer et forvarmet, kvalifisert møtepunkt — resten av salgsprosessen tar deres selgere over.',
      },
    ],
  },
  {
    slug: 'smarte-nettsider',
    title: 'Smarte Nettsider med AI',
    tagline: 'Nettsiden som aktivt selger, svarer og booker møter for deg – døgnet rundt.',
    badge: 'Mest etterspurt',
    category: 'Nettsider & Digital Vekst',
    icon: Sparkles,
    heroIntro:
      'Glem passive nettsider som bare står der. Med en Smart Nettside fra Vikingnet får du en fullt integrert AI-assistent og møtebooking som konverterer besøkende til betalende kunder 24/7.',
    startingPrice: 'Fra 24 900',
    pricePeriod: ',- (mnd. fra 990,-)',
    priceNote: 'Inkludert AI-Chatbot, auto-booking og SEO-grunnpakke.',
    stats: [
      { value: '+38%', label: 'Flere bookede møter' },
      { value: '< 3s', label: 'Responstid på alle henvendelser' },
      { value: '100%', label: 'GDPR- og mobiloptimalisert' },
    ],
    benefits: [
      {
        title: '24/7 Autonom Møtebooking',
        desc: 'Besøkende kan reservere tid direkte i din kalender uten at du trenger å sende en eneste e-post.',
      },
      {
        title: 'Intelligent Lead-kvalifisering',
        desc: 'AI-en stiller de riktige spørsmålene og siler ut useriøse henvendelser før møtet legges inn.',
      },
      {
        title: 'Topp Google-rangering (SEO)',
        desc: 'Bygget med ren kode, ekstrem innlastingstid og 100/100 i Google Core Web Vitals.',
      },
      {
        title: 'Konverteringsfokusert Design',
        desc: 'Skreddersydd layout med tydelige handlingsknapper som leder kunden mot et kjøp eller et møte.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Strategi & Konsept',
        desc: 'Vi kartlegger din målgruppe, dine USP-er og setter opp treningsgrunnlaget for AI-assistenten.',
      },
      {
        step: '02',
        title: 'Design & AI-Integrasjon',
        desc: 'Vi utvikler en unik, responsiv nettside og kobler opp AI-assistenten mot kalender og skjema.',
      },
      {
        step: '03',
        title: 'Lansering & Vekst',
        desc: 'Nettsiden settes i produksjon på sikre skyservere og begynner umiddelbart å ta imot kunder.',
      },
    ],
    deliverables: [
      'Komplett skreddersydd responsiv nettside (Desktop, nettbrett & mobil)',
      'Integrert 24/7 AI-kundechatbot på flytende norsk',
      'Synkronisert kalender- og auto-booking',
      'Lynrask hosting på europeiske skyservere med SSL-sertifikat',
      'Teknisk SEO-grunnoppsett og Google Search Console registrering',
      'Leadsvarsling rett på SMS eller e-post',
    ],
    idealFor: [
      'Tjenesteytende bedrifter (rådgivere, konsulenter, håndverkere)',
      'Klinikker, behandlere og tannleger',
      'B2B-selskaper som ønsker flere kvalifiserte salgsmøter',
    ],
    faq: [
      {
        q: 'Hvor raskt kan den smarte nettsiden være live?',
        a: 'Typisk produksjonstid er 1–2 uker fra vi har mottatt nødvendig tekst og bilder fra deg.',
      },
      {
        q: 'Hvordan lærer AI-en om mine tjenester?',
        a: 'Vi forhåndstrener AI-en på din bedrifts nettside, prisliste og vanlige spørsmål, slik at den svarer med din tone-of-voice.',
      },
      {
        q: 'Kan jeg beholde mitt nåværende domenenavn?',
        a: 'Ja, vi bistår med å peke ditt eksisterende domene (.no, .com osv.) til den nye løsningen.',
      },
    ],
  },
  {
    slug: 'ai-chatbot',
    title: 'AI Chatbot for Kundeservice',
    tagline: '24/7 lynrask kundesupport som svarer på sekunder og øker tilfredsheten.',
    badge: 'Høy ROI',
    category: 'AI & Automasjon',
    icon: MessageSquare,
    heroIntro:
      'La en intelligent AI-chatbot håndtere 80% av rutinehenvendelsene dine. Chatboten forstår norsk, svarer presist etter dine instrukser og eskalerer komplekse saker til teamet ditt.',
    startingPrice: '790',
    pricePeriod: ',- /mnd',
    priceNote: 'Kan integreres på eksisterende nettside eller ny løsning.',
    stats: [
      { value: '80%', label: 'Av rutinespørsmål løses automatisk' },
      { value: '0 sek', label: 'Ventetid for kunden' },
      { value: '24/7/365', label: 'Aktiv drift hele året' },
    ],
    benefits: [
      {
        title: 'Null Ventetid',
        desc: 'Kundene får umiddelbare svar døgnet rundt – også kvelder og helger.',
      },
      {
        title: 'Frigjør Teamets Tid',
        desc: 'Slipp å svare på de samme åpningstidene og prisspørsmålene hundrevis av ganger.',
      },
      {
        title: 'Sømløs Eskalering',
        desc: 'Dersom kunden ønsker menneskelig kontakt, videreformidles samtalen med full kontekst.',
      },
      {
        title: 'Innsikt & Analyser',
        desc: 'Få ukentlige rapporter om hva kundene dine faktisk lurer på og søker etter.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Kunnskapsinnsamling',
        desc: 'Vi mater AI-en med dine retningslinjer, FAQ og produktdokumentasjon.',
      },
      {
        step: '02',
        title: 'Trening & Sikkerhetstesting',
        desc: 'Vi tester chatboten grundig for å sikre nøyaktige og profesjonelle svar.',
      },
      {
        step: '03',
        title: 'Integrasjon',
        desc: 'Én linje kode på din nettside, og chatboten er i full sving.',
      },
    ],
    deliverables: [
      'Tilpasset AI-chat-widget i dine merkevarefarger',
      'Skreddersydd prompt-trening og kunnskapsbase',
      'E-postvarsling ved viktige henvendelser',
      'Månedlige bruksrapporter og samtalehistorikk',
      'Full GDPR-etterlevelse og datalagring i EU',
    ],
    idealFor: [
      'Nettbutikker med mange produkt- og fraktspørsmål',
      'Bedrifter med høyt trykk på e-post og chat',
      'Organisasjoner som ønsker tilgjengelighet døgnet rundt',
    ],
    faq: [
      {
        q: 'Kan chatboten integreres på min eksisterende nettside (f.eks. WordPress)?',
        a: 'Ja, den kan integreres på alle nettsideplattformer med et enkelt script.',
      },
      {
        q: 'Hva skjer hvis chatboten ikke vet svaret?',
        a: 'Den innrømmer høflig at den trenger assistanse, tar kontaktinfo fra kunden og sender deg en oppgave til oppfølging.',
      },
    ],
  },
  {
    slug: 'autofeed',
    title: 'AutoFeed – Innhold på Autopilot',
    tagline: 'Din KI-drevne motor for innholdsproduksjon og sosiale medier.',
    badge: 'Tidsbesparende',
    category: 'AI & Automasjon',
    icon: Wand2,
    heroIntro:
      'Gå aldri tom for innhold igjen. AutoFeed genererer engasjerende innlegg, artikler og oppdateringer tilpasset din bransje, og planlegger publisering automatisk.',
    startingPrice: 'Fra 498',
    pricePeriod: ',- /mnd',
    priceNote: 'Ingen etableringskostnad (0,- i oppstart).',
    stats: [
      { value: '15+ t', label: 'Spart arbeidstid hver uke' },
      { value: '3x', label: 'Mer regelmessig synlighet' },
      { value: '0,-', label: 'I etableringskostnad' },
    ],
    benefits: [
      {
        title: 'Konsistent Synlighet',
        desc: 'Hold bedriftens kanaler aktive uten at du må bruke timer hver uke på å skrive.',
      },
      {
        title: 'Bransjetilpasset Innhold',
        desc: 'Tekster som resonnerer med dine kunder og etablerer deg som faglig autoritet.',
      },
      {
        title: 'Flere Kanaler Samtidig',
        desc: 'AutoFeed tilpasser formatet for LinkedIn, Facebook, Instagram og blogg.',
      },
      {
        title: 'Menneskelig Godkjenning',
        desc: 'Du har alltid full kontroll og kan godkjenne innlegg med ett klikk før publisering.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Merkevareprofilering',
        desc: 'Vi definerer tone-of-voice, målgruppe og kjernebudskap.',
      },
      {
        step: '02',
        title: 'Innholdskalender',
        desc: 'Systemet genererer en månedlig innholdsplan med ferdige forslag.',
      },
      {
        step: '03',
        title: 'Auto-Publisering',
        desc: 'Etter enkel godkjenning postes innleggene på optimale tidspunkter.',
      },
    ],
    deliverables: [
      'Månedlig pakke med ferdige innlegg for sosiale medier',
      'AI-genererte bildemotiver og maler',
      'Fagartikler og SEO-blogginnlegg for nettsiden',
      'Dashboard for forhåndsvisning og ett-klikks godkjenning',
    ],
    idealFor: [
      'Bedrifter som mangler en dedikert markedsavdeling',
      'Ledere som vil bygge autoritet på LinkedIn',
      'B2B-selskaper som vil generere varme leads via innhold',
    ],
    faq: [
      {
        q: 'Høres tekstene ut som de er skrevet av en robot?',
        a: 'Nei, AutoFeed trenes på ditt språk og menneskeliggjøres med naturlig norsk tonefall.',
      },
      {
        q: 'Kan jeg redigere innleggene før de publiseres?',
        a: 'Absolutt. Du har full redigeringsfrihet i dashbordet før publisering.',
      },
    ],
  },
  {
    slug: 'qognito',
    title: 'Qognito – Autonom AI B2B-Salgsagent',
    tagline: 'Autonom AI-agent for B2B-salg og møtebooking på LinkedIn, utviklet for det norske markedet.',
    badge: 'LinkedIn AI',
    category: 'AI Salg & Møtebooking',
    icon: Bot,
    heroIntro:
      'Qognito er en autonom AI-agent for B2B-salg og møtebooking på LinkedIn, utviklet spesifikt for det norske markedet av Vikingnet (AIChat Norge AS). Systemet automatiserer prosessen fra kald prospektering til ferdig booket møte i din kalender.',
    startingPrice: 'Fra 1 490',
    pricePeriod: ',- /mnd',
    priceNote: '0,- i etablering · Ingen bindingstid · Solo 1 490,- / Team 4 290,- /mnd eks. mva.',
    stats: [
      { value: '1 490,-', label: 'Startpris per mnd (0,- etablering)' },
      { value: '100%', label: 'Naturlig norsk dialog (ikke maskinoversatt)' },
      { value: 'Auto', label: 'Møter rett inn i selgerens kalender' },
    ],
    benefits: [
      {
        title: 'Målgruppesøk & Prospektering',
        desc: 'Finner relevante beslutningstakere basert på geografi, bransje, stillingstittel og LinkedIn-aktivitet.',
      },
      {
        title: 'Autonom Dialog på Norsk',
        desc: 'AI-agenten analyserer profiler, sender personlige henvendelser og håndterer oppfølgingsmeldinger i en naturlig, uformell tone.',
      },
      {
        title: 'Direkte Møtebooking',
        desc: 'Når prospektet viser interesse, avtaler agenten tidspunkt og legger møtet direkte inn i selgerens kalender.',
      },
      {
        title: 'Innebygd Kontosikkerhet',
        desc: 'Bygget med volumbegrensninger og menneskelig atferdsmønster for å beskytte brukerens LinkedIn-konto.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Målgruppedefinisjon',
        desc: 'Vi setter opp dine ideelle kundeprofiler (ICP) basert på geografi, bransje og titler.',
      },
      {
        step: '02',
        title: 'Agentoppsett & Tone-of-Voice',
        desc: 'AI-agenten tilpasses med personlige meldingsmaler på flytende, profesjonell norsk.',
      },
      {
        step: '03',
        title: 'Autonom Kjøring & Møter',
        desc: 'Agenten starter prospektering og fyller kalenderen din med kvalifiserte salgsmøter.',
      },
    ],
    deliverables: [
      'Autonom LinkedIn B2B-salgsagent konfigurert for ditt marked',
      'Målgruppefiltrering og prospektlister',
      'Skreddersydde oppfølgingssekvenser på naturlig norsk',
      'Synkronisering mot Google- eller Outlook-kalender',
      'Sikkerhetsoptimaliserte utsendelsesintervaller',
      'Ukentlig resultatrapport og møteinnsikt',
    ],
    idealFor: [
      'B2B-bedrifter og salgsteam som vil øke møtevolumet',
      'Konsulenter, rådgivere og teknologibyråer',
      'Bedriftsledere som vil effektivisere salgspipelinen',
    ],
    faq: [
      {
        q: 'Hva koster Qognito?',
        a: 'Qognito koster fra 1 490 kr/mnd (Solo) til 4 290 kr/mnd (Team) eks. mva, uten bindingstid og med 0,- i etableringskostnad.',
      },
      {
        q: 'Er det trygt for min LinkedIn-profil?',
        a: 'Ja, Qognito benytter menneskelige atferdsmønstre, tilfeldige tidsintervaller og konservative volumbegrensninger for å beskytte brukerens konto.',
      },
      {
        q: 'Hvordan legges møtene inn i kalenderen min?',
        a: 'Agenten avtaler tidspunkt med prospektet og oppretter automatisk en kalenderhendelse i din Google- eller Outlook-kalender.',
      },
    ],
  },
  {
    slug: 'ai-agenter',
    title: 'Avanserte AI-Salgsagenter',
    tagline: 'Digitale medarbeidere som utfører komplekse salgsprosesser og oppgaver.',
    badge: 'Fremtidsrettet',
    category: 'AI Salg & Møtebooking',
    icon: Sparkles,
    heroIntro:
      'Gå forbi enkle chatboter. Våre autonome AI-agenter kan hente informasjon fra interne databaser, oppdatere CRM, sende tilbud og utføre flertrinns arbeidsflyter uten menneskelig innblanding.',
    startingPrice: 'Fra 17 990',
    pricePeriod: ',- (mnd. fra 1 990,-)',
    priceNote: 'Etablering fra 17 990,- eks. mva inkludert skreddersydd forretningslogikk og integrasjoner.',
    stats: [
      { value: '99%', label: 'Nøyaktighet i oppgaveutførelse' },
      { value: '24/7', label: 'Kontinuerlig prosesskjøring' },
      { value: 'API', label: 'Kobles til alle dine systemer' },
    ],
    benefits: [
      {
        title: 'Avansert Oppgaveløsing',
        desc: 'Agenten kan ta beslutninger basert på forhåndsdefinerte forretningsregler.',
      },
      {
        title: 'Dyp Systemintegrasjon',
        desc: 'Kobles mot ERP, regnskap, CRM og e-postsystemer for direkte handling.',
      },
      {
        title: 'Skalerbarhet',
        desc: 'Håndter 10 eller 10 000 oppgaver samtidig uten å ansette flere.',
      },
      {
        title: 'Full Sporbarhet',
        desc: 'Hver handling loggføres med full audit trail for sikkerhet og kontroll.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Prosesskartlegging',
        desc: 'Vi identifiserer manuelle flaskehalser som kan automatiseres.',
      },
      {
        step: '02',
        title: 'Arkitektur & Utvikling',
        desc: 'Agenten programmeres med tilgangsnivåer og API-koblinger.',
      },
      {
        step: '03',
        title: 'Pilot & Utrulling',
        desc: 'Sikker testperiode før full produksjonsdrift i ditt miljø.',
      },
    ],
    deliverables: [
      'Skreddersydd AI-agent arkitektur (Python / Node.js)',
      'Sikre API-integrasjoner mot interne systemer',
      'Overvåkningsdashbord med sanntidsstatus',
      'SLA-avtale og løpende ytelsesoptimalisering',
    ],
    idealFor: [
      'Bedrifter med tunge manuelle saksbehandlingsprosesser',
      'Logistikk-, eiendoms- og finansvirksomheter',
      'Teknologiselskaper som vil automatisere kundereiser',
    ],
    faq: [
      {
        q: 'Hva skiller en AI-agent fra en vanlig chatbot?',
        a: 'En chatbot svarer på tekst. En AI-agent kan utføre handlinger: hente data, oppdatere databaser og sende dokumenter.',
      },
    ],
  },
  {
    slug: 'nettbutikk',
    title: 'Nettbutikk & E-handel',
    tagline: 'Komplett e-handelsløsning med Vipps, Klarna og høy konvertering.',
    category: 'Nettsider & Digital Vekst',
    icon: ShoppingCart,
    heroIntro:
      'Selg dine varer og tjenester på nett med en lynrask, sikker og mobiltilpasset nettbutikk. Vi setter opp betaling, produktkatalog, fraktintegrasjon og automatiske ordrebekreftelser.',
    startingPrice: '1 490',
    pricePeriod: ',- /mnd',
    priceNote: 'Etableringstilbud ved prosjektstart.',
    stats: [
      { value: '1-klikk', label: 'Vipps og Klarna Checkout' },
      { value: '100%', label: 'Mobiltilpasset handleopplevelse' },
      { value: 'Auto', label: 'Lager- og ordreoppdatering' },
    ],
    benefits: [
      {
        title: 'Norske Betalingsløsninger',
        desc: 'Full støtte for Vipps, Klarna, kort og faktura for maksimal tillit.',
      },
      {
        title: 'Rask Kjøpsprosess',
        desc: 'Minimal friksjon i kassen sikrer at færre forlater handlekurven.',
      },
      {
        title: 'Enkel Produktstyring',
        desc: 'Brukervennlig kontrollpanel hvor du enkelt oppdaterer priser og bilder.',
      },
      {
        title: 'AI-Produktbeskrivelser',
        desc: 'Få hjelp til å skrive selgende produkttekster automatisk.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Katalog & Struktur',
        desc: 'Vi planlegger kategorier, filtere og betalingsmetoder.',
      },
      {
        step: '02',
        title: 'Butikkdesign & Kasse',
        desc: 'Vi bygger en lekker butikk optimalisert for mobilkjøp.',
      },
      {
        step: '03',
        title: 'Test & Lansering',
        desc: 'Testkjøp med Vipps og Klarna før butikken åpnes for kunder.',
      },
    ],
    deliverables: [
      'Komplett nettbutikk med ubegrenset antall produkter',
      'Integrasjon med Vipps Checkout, Klarna og Stripe',
      'Automatiske e-postvarsler til kunde og butikkeier',
      'Lagerstyring og fraktberegning',
      'Opplæring i administrasjonspanelet',
    ],
    idealFor: [
      'Fysiske butikker som vil utvide til netthandel',
      'Merkevarer med egne produkter',
      'Bedrifter som selger kurs, medlemskap eller digitale varer',
    ],
    faq: [
      {
        q: 'Kan jeg selge både fysiske og digitale produkter?',
        a: 'Ja, løsningen håndterer både fysiske varer med frakt og digitale filer med umiddelbar nedlasting.',
      },
    ],
  },
  {
    slug: 'nettsider',
    title: 'Profesjonell Nettside',
    tagline: 'Et solid digitalt fundament med topp design og ytelse.',
    category: 'Nettsider & Digital Vekst',
    icon: Globe,
    heroIntro:
      'For bedrifter som ønsker en representativ, lynrask og moderne nettside uten avanserte AI-verktøy. Skreddersydd design som bygger merkevare og troverdighet.',
    startingPrice: 'Fra 14 900',
    pricePeriod: ',- (mnd. fra 490,-)',
    priceNote: 'Inkludert moderne design, mobilvennlighet og kontaktskjema.',
    stats: [
      { value: '100%', label: 'Responsiv på alle enheter' },
      { value: 'SSL', label: 'Sikker HTTPS og lynrask hosting' },
      { value: 'Google', label: 'SEO-optimalisert struktur' },
    ],
    benefits: [
      {
        title: 'Stilrent & Profesjonelt',
        desc: 'Design som gir kundene et førsteklasses førsteinntrykk av bedriften din.',
      },
      {
        title: 'Høy Ytelse',
        desc: 'Lynhurtig innlasting sikrer god brukeropplevelse og Google-fordeler.',
      },
      {
        title: 'Enkel Kontaktdialog',
        desc: 'Gjennomtenkte kontaktskjemaer og klikkbare telefonlenker.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Innhold & Struktur',
        desc: 'Vi samler tekst og bilder og strukturerer sidene.',
      },
      {
        step: '02',
        title: 'Design & Koding',
        desc: 'Vi koder en rask og pen løsning tilpasset din profil.',
      },
      {
        step: '03',
        title: 'Publisering',
        desc: 'Vi lanserer på sikre servere med kontinuerlig oppetidsovervåking.',
      },
    ],
    deliverables: [
      'Mobiltilpasset nettside med opptil 5 undersider',
      'Kontaktskjema med e-postvarsling',
      'Hosting og SSL-sikkerhetssertifikat',
      'Google Maps og sosiale medier-lenker',
    ],
    idealFor: [
      'Nyoppstartede bedrifter',
      'Lokale håndverkere og fagfolk',
      'Konsulenter som trenger en ren presentasjonsside',
    ],
    faq: [
      {
        q: 'Kan jeg oppgradere til Smart Nettside med AI senere?',
        a: 'Ja, du kan når som helst oppgradere og koble på AI-assistent og booking.',
      },
    ],
  },
  {
    slug: 'skreddersom',
    title: 'Skreddersøm & Apputvikling',
    tagline: 'Unike webapplikasjoner og programvare tilpasset dine forretningsmål.',
    badge: 'Eksklusivt',
    category: 'Nettsider & Digital Vekst',
    icon: Code2,
    heroIntro:
      'Har du en spesiell forretningsmodell eller idé som ikke passer inn i ferdige standardmaler? Vi utvikler spesialtilpassede webapplikasjoner, kundeportaler og interne verktøy fra bunnen av.',
    startingPrice: 'Fra 49 000',
    pricePeriod: ',- (+ driftsavtale)',
    priceNote: 'Inkludert skreddersydd app/web, avansert AI-salgsagent og CRM-integrasjon.',
    stats: [
      { value: '100%', label: 'Skreddersydd til ditt behov' },
      { value: 'React/TS', label: 'Moderne tech-stack' },
      { value: 'SLA', label: 'Garantert oppetid og support' },
    ],
    benefits: [
      {
        title: 'Ubegrenset Funksjonalitet',
        desc: 'Vi bygger nøyaktig de funksjonene og kalkulatorene du har behov for.',
      },
      {
        title: 'Kundeportaler & Innlogging',
        desc: 'Gi kundene dine tilgang til egne profiler, fakturaer og prosjektfremdrift.',
      },
      {
        title: 'Skalerbar Skyarkitektur',
        desc: 'Bygget på moderne skystack for å håndtere ubegrenset trafikkvekst.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Kravspesifikasjon',
        desc: 'Dybdeintervju og funksjonell arkitekturtegning.',
      },
      {
        step: '02',
        title: 'Iterativ Utvikling',
        desc: 'Koding med ukentlige demoer og tilbakemeldingsrunder.',
      },
      {
        step: '03',
        title: 'Kvalitetssikring & Drift',
        desc: 'Penetrasjonstesting og produksjonssetting på Google Cloud / Firebase.',
      },
    ],
    deliverables: [
      'Komplett kildekode og fullt eierskap til løsningen',
      'Brukertesting og responsivt UI/UX-design',
      'API-integrasjoner mot eksterne databaser og tjenester',
      'Driftsavtale med dedikert support og SLA',
    ],
    idealFor: [
      'Scale-ups og vekstselskaper med unike konsepter',
      'Bedrifter som trenger interne kunde- eller medlemsportaler',
      'Komplekse booking- eller beregningssystemer',
    ],
    faq: [
      {
        q: 'Hvem eier kildekoden etter at prosjektet er ferdig?',
        a: 'Du eier 100% av din egen kildekode og alle rettigheter.',
      },
    ],
  },
  {
    slug: 'automatisering',
    title: 'Systemintegrasjon & Automasjon',
    tagline: 'Fjern manuelle flaskehalser ved å koble sammen systemene dine.',
    category: 'AI & Automasjon',
    icon: Workflow,
    heroIntro:
      'Slutt å taste inn samme informasjon i tre forskjellige programmer. Vi bygger automatiserte broer mellom nettside, regnskap, CRM, e-post og lager – slik at data flyter sømløst.',
    startingPrice: 'Fra 4 900',
    pricePeriod: ',-',
    priceNote: 'Engangsinvestering eller som driftsavtale.',
    stats: [
      { value: '0', label: 'Manuelle tastefeil' },
      { value: 'Sanntid', label: 'Datasynkronisering' },
      { value: '100+', label: 'Støttede programmer og API-er' },
    ],
    benefits: [
      {
        title: 'Automatisk Fakturering',
        desc: 'Når et skjema sendes inn eller en ordre legges, genereres faktura automatisk.',
      },
      {
        title: 'CRM-Synkronisering',
        desc: 'Alle leads fra nettsiden flyter rett inn i ditt salgssystem med riktig tagg.',
      },
      {
        title: 'Automatiserte Varsler',
        desc: 'Få varsel på Slack, Teams eller SMS med én gang en viktig hendelse inntreffer.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Systemkartlegging',
        desc: 'Vi sjekker API-tilganger for programmene du bruker i dag.',
      },
      {
        step: '02',
        title: 'Bygging av Arbeidsflyter',
        desc: 'Vi setter opp logikk, feilhåndtering og datasynkronisering.',
      },
      {
        step: '03',
        title: 'Validering & Idriftsettelse',
        desc: 'Vi tester med reelle data og setter automasjonen i kontinuerlig drift.',
      },
    ],
    deliverables: [
      'Ferdig oppsatte arbeidsflyter og webhooks',
      'Feilhåndtering og automatisk varsling ved avvik',
      'Dokumentasjon over dataflyt',
    ],
    idealFor: [
      'Bedrifter som bruker f.eks. Tripletex, Fiken, HubSpot, Slack og Google Workspace',
      'Selskaper med gjentakende manuelle dataoppgaver',
    ],
    faq: [
      {
        q: 'Hvilke regnskapsprogrammer kan dere koble opp?',
        a: 'Vi støtter Fiken, Tripletex, PowerOffice Go, Visma, 24SevenOffice med flere.',
      },
    ],
  },
  {
    slug: 'kundesenter',
    title: 'Omnikanal Kundesenter',
    tagline: 'Samle e-post, chat, Messenger og WhatsApp i ett felles dashbord.',
    category: 'Kundeservice',
    icon: Headset,
    heroIntro:
      'Glem tapte henvendelser spredt over fem ulike innbokser. Med vårt omnikanal kundesenter samles alle kundedialoger på én felles skjerm med innebygd AI-assistanse.',
    startingPrice: '890',
    pricePeriod: ',- /mnd',
    priceNote: 'Inkluderer felles innboks og AI-hurtigsvar.',
    stats: [
      { value: '1', label: 'Felles innboks for alle kanaler' },
      { value: '3x', label: 'Raskere responstid' },
      { value: 'Full', label: 'Oversikt over kundehistorikk' },
    ],
    benefits: [
      {
        title: 'All Dialog på Ett Sted',
        desc: 'Chat, e-post og sosiale meldinger besvares fra samme oversiktlige vindu.',
      },
      {
        title: 'AI-genererte Svarforslag',
        desc: 'AI-en foreslår nøyaktige svar på sekunder som rådgiveren kan godkjenne.',
      },
      {
        title: 'Intern Samhandling',
        desc: 'Tildel oppgaver til kolleger og legg igjen interne notater på kunden.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Kanaltilkobling',
        desc: 'Vi kobler til e-postkontoer, nettsidechat og sosiale profiler.',
      },
      {
        step: '02',
        title: 'Brukerroller & Maler',
        desc: 'Vi oppretter tilganger og standardsvar tilpasset teamet.',
      },
      {
        step: '03',
        title: 'Kort Opplæring',
        desc: '15-minutters gjennomgang for at teamet ditt skal mestre dashbordet.',
      },
    ],
    deliverables: [
      'Omnikanal programvare med sikker innlogging for alle ansatte',
      'Integrasjon mot nettside, e-post, Facebook og Instagram',
      'AI-assistert svarmotor på norsk',
      'Ytelsesrapporter på svartid og kundetilfredshet',
    ],
    idealFor: [
      'Bedrifter med flere ansatte som håndterer kundehenvendelser',
      'Support- og salgsteam som vil unngå at ting faller mellom to stoler',
    ],
    faq: [
      {
        q: 'Må alle ansatte installere spesiell programvare?',
        a: 'Nei, systemet er 100% webbasert og fungerer rett i nettleseren på PC og mobil.',
      },
    ],
  },
  {
    slug: 'seo',
    title: 'SEO & Google-Synlighet',
    tagline: 'Klatre til topps på Google når potensielle kunder søker etter dine tjenester.',
    category: 'Synlighet & Media',
    icon: Search,
    heroIntro:
      'Det hjelper lite med en flott nettside hvis ingen finner den. Vi utfører grundige søkeordsanalyser, teknisk optimalisering og innholdsstrukturering som plasserer deg foran konkurrentene på Google.',
    startingPrice: '1 990',
    pricePeriod: ',- /mnd',
    priceNote: 'Løpende søkeordsoptimalisering og rangeringsoppfølging.',
    stats: [
      { value: 'Topp 3', label: 'Målplassering på relevante søkeord' },
      { value: '+140%', label: 'Gjennomsnittlig økning i organisk trafikk' },
      { value: 'Månedlig', label: 'Rapportering og rangeringsoversikt' },
    ],
    benefits: [
      {
        title: 'Gratis Organisk Trafikk',
        desc: 'Få jevn tilstrømning av kunder uten å måtte betale for hvert eneste klikk på annonser.',
      },
      {
        title: 'Lokal Dominans',
        desc: 'Bli nummer 1 i ditt geografiske nærområde med Google Bedriftsprofil og lokal SEO.',
      },
      {
        title: 'Teknisk Råhet',
        desc: 'Optimalisering av metakoder, strukturert data (Schema.org) og sitemaps.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Søkeords- & Konkurrentanalyse',
        desc: 'Vi finner søkeordene med høyest kjøpsintensjon i din bransje.',
      },
      {
        step: '02',
        title: 'On-Page Optimalisering',
        desc: 'Vi optimaliserer overskrifter, innhold og tekniske tags.',
      },
      {
        step: '03',
        title: 'Måling & Finjustering',
        desc: 'Månedlig sporing av posisjoner og justering for kontinuerlig klatring.',
      },
    ],
    deliverables: [
      'Omfattende søkeordsanalyse for ditt marked',
      'Teknisk SEO-gjennomgang og feilretting',
      'Optimalisering av Google Bedriftsprofil (Google Maps)',
      'Månedlig rangeringsrapport rett i innboksen din',
    ],
    idealFor: [
      'Lokale bedrifter som vil dominere sitt distrikt',
      'Tjenesteytere som vil ha jevnlige henvendelser fra Google',
    ],
    faq: [
      {
        q: 'Hvor lang tid tar det før man ser resultater av SEO?',
        a: 'Tekniske endringer merkes ofte innen 2–4 uker, mens topplasseringer på konkurranseutsatte ord typisk bygger seg opp over 2–6 måneder.',
      },
    ],
  },
  {
    slug: 'reklamefilm',
    title: 'Bedrifts- & Reklamefilm',
    tagline: 'Kvalitetsfilm som formidler din historie og konverterer seere til kunder.',
    category: 'Synlighet & Media',
    icon: Video,
    heroIntro:
      'Video er det kraftigste formatet for å skape tillit og fange oppmerksomhet i dag. Vi produserer profesjonelle reklame- og bedriftsfilmer optimalisert for nettside og sosiale medier.',
    startingPrice: 'Fra 14 900',
    pricePeriod: ',-',
    priceNote: 'Per produksjon inkludert planlegging, filming og ferdig klipp.',
    stats: [
      { value: '4K', label: 'Kinomatisk videokvalitet' },
      { value: '80%', label: 'Høyere konvertering med video på nettsiden' },
      { value: 'Ferdig', label: 'Klippet for både 16:9 og mobilformater' },
    ],
    benefits: [
      {
        title: 'Bygger Umiddelbar Tillit',
        desc: 'La kundene se menneskene, lokalene og håndverket bak bedriften.',
      },
      {
        title: 'Perfekt for Sosiale Medier',
        desc: 'Vi klipper egne kortversjoner tilpasset Reels, TikTok og Facebook Ads.',
      },
      {
        title: 'Komplett Produksjon',
        desc: 'Vi håndterer alt: manus, lys, lyd, filming, fargekorrigering og musikkrettigheter.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Idé & Dreiebok',
        desc: 'Vi avtaler budskap, lokasjon og opptaksplan.',
      },
      {
        step: '02',
        title: 'Filmedag',
        desc: 'Effektiv filming på lokasjon med profesjonelt 4K-kamera, lys og lydutstyr.',
      },
      {
        step: '03',
        title: 'Klipp & Levering',
        desc: 'Ferdigstilling med lydmiks, teksting og fargejustering.',
      },
    ],
    deliverables: [
      'Hovedfilm for nettside (1–2 minutter i 4K)',
      '2–3 kortere teasere tilpasset sosiale medier (9:16 format)',
      'Ferdig tekstet og lisensiert musikk',
    ],
    idealFor: [
      'Bedrifter som vil skille seg ut fra konkurrentene',
      'Merkevarer som lanserer nye produkter eller tjenester',
      'Eiendomsprosjekter og opplevelsesbedrifter',
    ],
    faq: [
      {
        q: 'Hvor lang tid tar en filmproduksjon?',
        a: 'Selve opptaket tar vanligvis en halv til en hel dag. Ferdig film leveres normalt 7–10 dager etter opptaksdagen.',
      },
    ],
  },
  {
    slug: 'dronefilm',
    title: 'Drone- & Luftfoto',
    tagline: 'Spektakulære luftbilder og 4K-video fra sertifisert dronepilot.',
    category: 'Synlighet & Media',
    icon: Plane,
    heroIntro:
      'Gi kundene et storslått overblikk. Vi leverer spektakulære 4K droneopptak og høyoppløselige luftfoto for eiendommer, byggeprosjekter, industri, natur og arrangementer.',
    startingPrice: 'Fra 6 900',
    pricePeriod: ',-',
    priceNote: 'Inkluderer sertifisert flyving, filming og ferdig redigerte bilder.',
    stats: [
      { value: '4K / 60fps', label: 'Krystallklar oppløsning' },
      { value: 'A1/A2/A3', label: 'Fullt sertifisert droneoperatør' },
      { value: 'Lovlig', label: 'Godkjent i Luftfartstilsynet' },
    ],
    benefits: [
      {
        title: 'Unike Vinkler',
        desc: 'Vis frem eiendommens beliggenhet, fasiliteter og omgivelser fra luften.',
      },
      {
        title: 'Sertifisert & Forsikret',
        desc: 'Vi følger alle luftfartsregler og innehar påkrevde ansvarsforsikringer.',
      },
      {
        title: 'Rask Levering',
        desc: 'Ferdig redigerte høyoppløselige bilder og videoklipp levert i skylink.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Lokasjons- & Værsjekk',
        desc: 'Vi sjekker luftromsrestriksjoner og planlegger gunstigste flytidspunkt.',
      },
      {
        step: '02',
        title: 'Flyging & Opptak',
        desc: 'Presis droneflyging med fokus på gode komposisjoner og jevne bevegelser.',
      },
      {
        step: '03',
        title: 'Etterarbeid',
        desc: 'Fargegradering og bildeoptimalisering for skjerm og trykk.',
      },
    ],
    deliverables: [
      '10–20 høyoppløselige luftfoto klare for nett og trykk',
      '4K videoklipp fargegradert og klare for publisering',
      'Full bruksrett til alle opptak',
    ],
    idealFor: [
      'Eiendomsmeglere og utbyggere',
      'Entreprenører og håndverksbedrifter',
      'Turistdestinasjoner, hoteller og golfbaner',
    ],
    faq: [
      {
        q: 'Hva skjer hvis det er dårlig vær på opptaksdagen?',
        a: 'Ved regn eller sterk vind flytter vi opptaket til neste passende finværsdag uten ekstra kostnad.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}

export interface FormServiceGroup {
  group: string;
  items: { slug: string; title: string }[];
}

export const FORM_SERVICE_GROUPS: FormServiceGroup[] = [
  {
    group: '🏗️ Autonome Fagtjenester',
    items: ALL_SERVICES.filter((s) => s.category === 'Autonome Fagtjenester').map((s) => ({
      slug: s.slug,
      title: s.title,
    })),
  },
  {
    group: '🤖 AI-Agenter, Salg & Automasjon',
    items: ALL_SERVICES.filter(
      (s) =>
        s.category === 'AI Salg & Møtebooking' ||
        s.category === 'AI & Automasjon' ||
        s.category === 'Kundeservice'
    ).map((s) => ({
      slug: s.slug,
      title: s.title,
    })),
  },
  {
    group: '🌐 Nettsider, Systemer & Synlighet',
    items: ALL_SERVICES.filter(
      (s) =>
        s.category === 'Nettsider & Digital Vekst' ||
        s.category === 'Synlighet & Media'
    ).map((s) => ({
      slug: s.slug,
      title: s.title,
    })),
  },
  {
    group: '💬 Rådgivning & Spesialoppsett',
    items: [
      { slug: 'kalkulator-oppsett', title: 'Kalkulator-oppsett / Skreddersydd pakke' },
      { slug: 'tilbud', title: 'Skreddersydd tilbud på e-post' },
      { slug: 'annet', title: 'Annet / Generelt spørsmål' },
    ],
  },
];

