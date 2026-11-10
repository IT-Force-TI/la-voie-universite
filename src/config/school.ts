// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /**
   * Valeur technique du cycle. Doit correspondre aux cycles acceptés par le backend
   * (utils/schemas.js) : Maternelle / Primaire / Collège. N'est pas affichée telle quelle.
   */
  name: string
  /** Libellé affiché sur le site (ex. « Préscolaire » pour la valeur technique « Maternelle »). */
  label: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

// ----------------------------------------------------------------------------
//  CSPL LA VOIE DE L'UNIVERSITÉ — Tomdè, Kara
//  Données vérifiées : nom, statut (privé laïc agréé par le MEPST), fondateur, téléphone,
//  ville / quartier / repères, cycles et classes, examens (CEPE, BEPC), pièces
//  d'inscription, modalités de paiement.
//  Données FICTIVES à confirmer avec l'établissement : slogan, e-mail, horaires, montants
//  des tarifs, effectifs, textes de présentation.
// ----------------------------------------------------------------------------
export const school: SchoolProfile = {
  id: 'cspl-la-voie-universite',
  logo: '/la-voie-logo.png',
  settings: {
    name: 'Complexe Scolaire Privé Laïque La Voie de l’Université',
    shortName: 'La Voie de l’Université',
    slogan: 'BÂTIR AUJOURD’HUI LES RÉUSSITES DE DEMAIN',
    address: 'Quartier Tomdè, axe de l’Université de Kara — Kara, Togo',
    email: 'contact@lavoiedeluniversite.tg',
    phone: '+228 90 16 31 71',
    phone2: '',
    hours: 'Lundi – Vendredi : 7h00 – 17h00',
    annualFee: 75000,
    canteenFee: 400,
    badgeFee: 1000,
    uniformFee: 4000,
    apeFee: 2000,
  },
  footerText:
    'Établissement privé laïc agréé par l’État togolais, à Tomdè (Kara) : du préscolaire au collège, nous préparons chaque élève à suivre la voie de la réussite.',
  hero: {
    eyebrow: 'TRAVAIL - DISCIPLINE - RÉUSSITE',
    titleLines: ['Complexe Scolaire', 'Privé Laïque'],
    highlight: 'La Voie de l’Université',
    intro:
      'Bienvenue sur le site officiel du Complexe Scolaire La Voie de l’Université, à Tomdè (Kara). Du préscolaire au collège, nous accompagnons chaque enfant vers la réussite.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'M. Sandou GNASSIMGBE, fondateur du Complexe Scolaire La Voie de l’Université',
    eyebrow: 'UN MOT DU FONDATEUR',
    titleLines: ['Ouvrir à chaque enfant', 'la voie de la réussite.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'En fondant La Voie de l’Université, j’ai voulu offrir aux familles de Kara une école sérieuse, où chaque enfant reçoit les bases solides qui lui permettront, un jour, de poursuivre ses études jusqu’à l’université.',
      'Établissement laïc agréé par l’État, nous accueillons les élèves sans distinction et plaçons le travail, la discipline et le respect au cœur de notre projet éducatif, de la petite section jusqu’au BEPC.',
    ],
    signature: 'GNASSIMGBE Sandou, Fondateur et Promoteur',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'Implanté dans le quartier de Tomdè, à Kara, sur l’axe qui mène à l’Université de Kara, le Complexe Scolaire Privé Laïque La Voie de l’Université se trouve à environ 1 km de la paroisse Christ Sauveur de Tomdè et à proximité de la paroisse de Tchintchinda.',
      'Fondé à l’initiative de M. Sandou GNASSIMGBE, l’établissement est né de la volonté d’offrir aux familles de la région un enseignement de qualité, avec une ambition claire inscrite dans son nom : mener chaque élève, pas à pas, sur la voie des études supérieures.',
      'Agréé par le Ministère des Enseignements Primaire, Secondaire et Technique, l’établissement suit les programmes officiels togolais et prépare ses élèves aux examens nationaux — le CEPE en fin de primaire et le BEPC en fin de collège.',
    ],
    stats: [
      { value: '3', label: 'Cycles d’enseignement' },
      { value: '300+', label: 'Élèves' },
      { value: '100%', label: 'Engagement pour la réussite' },
    ],
  },
  values: [
    {
      icon: 'graduation',
      title: 'Ambition',
      text: 'Préparer dès aujourd’hui les élèves aux études supérieures.',
    },
    {
      icon: 'shield',
      title: 'Discipline',
      text: 'Un cadre structuré qui apprend la rigueur, la ponctualité et le respect.',
    },
    {
      icon: 'heart',
      title: 'Laïcité et respect',
      text: 'Une école ouverte à tous, qui accueille chaque enfant sans distinction.',
    },
    {
      icon: 'users',
      title: 'Communauté',
      text: 'Parents, enseignants et élèves unis autour de la réussite.',
    },
  ],
  faq: [
    {
      q: 'Où se trouve l’établissement ?',
      a: 'À Kara, dans le quartier de Tomdè, sur l’axe qui mène à l’Université de Kara : à environ 1 km de la paroisse Christ Sauveur de Tomdè, près de la paroisse de Tchintchinda.',
    },
    {
      q: 'L’établissement est-il reconnu par l’État ?',
      a: 'Oui. C’est un établissement d’enseignement général privé laïc, agréé par le Ministère des Enseignements Primaire, Secondaire et Technique.',
    },
    {
      q: 'Vos élèves passent-ils les examens officiels ?',
      a: 'Oui. Les élèves de CM2 présentent le CEPE, obligatoire pour l’entrée en 6e, et les élèves de 3e présentent le BEPC. Nous les y préparons tout au long de l’année.',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
    {
      q: 'À combien s’élèvent les frais de scolarité ?',
      a: 'La scolarité annuelle et les frais annexes sont détaillés sur la page Tarifs et scolarité.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
    {
      q: 'Quelles sont les modalités de paiement ?',
      a: 'Des frais d’inscription annuels, non remboursables, sont réglés à l’inscription. Les frais de scolarité se paient ensuite en trois tranches (ou par mensualités, selon le règlement de l’école).',
    },
  ],
  cycles: [
    {
      name: 'Maternelle',
      label: 'Préscolaire',
      slug: 'prescolaire',
      age: '3 à 6 ans',
      text: 'Le cycle préscolaire (maternelle) est la première étape du parcours scolaire. Il favorise l’éveil, la socialisation et l’initiation à la lecture et au calcul.',
      classes: ['Petite section', 'Moyenne section', 'Grande section'],
      skills: [
        'Éveil et expression corporelle',
        'Développement du langage',
        'Initiation à la lecture et au calcul',
        'Apprentissage de la vie en groupe',
      ],
      programs: [
        {
          icon: 'idea',
          title: 'Éveil artistique',
          text: 'Dessin, peinture, activités manuelles et créativité.',
        },
        {
          icon: 'heart',
          title: 'Chants et expression',
          text: 'Comptines, chants, rythmes et jeux de mouvement.',
        },
        {
          icon: 'book',
          title: 'Premiers apprentissages',
          text: 'Préparer l’entrée au CP1 en découvrant et en jouant.',
        },
      ],
    },
    {
      name: 'Primaire',
      label: 'Primaire',
      slug: 'primaire',
      age: '6 à 12 ans',
      text: 'Le primaire consolide les apprentissages fondamentaux, du CP1 au CM2. Le cycle est sanctionné par le CEPE (Certificat d’Études du Premier Cycle), obligatoire pour le passage en classe de 6e.',
      classes: ['CP1', 'CP2', 'CE1', 'CE2', 'CM1', 'CM2'],
      skills: [
        'Lecture, écriture et expression orale',
        'Mathématiques et raisonnement logique',
        'Sciences, histoire-géographie et éducation civique',
        'Préparation au CEPE en classe de CM2',
      ],
      programs: [
        {
          icon: 'book',
          title: 'Savoirs fondamentaux',
          text: 'Lecture, écriture et calcul au quotidien.',
        },
        {
          icon: 'idea',
          title: 'Sciences et découverte',
          text: 'Observer, comprendre et développer sa curiosité.',
        },
        {
          icon: 'graduation',
          title: 'Objectif CEPE',
          text: 'Révisions, devoirs et examens blancs en CM2.',
        },
      ],
    },
    {
      name: 'Collège',
      label: 'Collège',
      slug: 'college',
      age: '11 à 16 ans',
      text: 'Le collège (secondaire 1er cycle) accueille les élèves de la 6e à la 3e. Il approfondit les connaissances et les méthodes de travail, et prépare à l’examen national du BEPC (Brevet d’Études du Premier Cycle).',
      classes: ['6e', '5e', '4e', '3e'],
      skills: [
        'Enseignements généraux approfondis',
        'Méthodologie et autonomie',
        'Suivi régulier des résultats',
        'Préparation au BEPC et à l’orientation',
      ],
      programs: [
        {
          icon: 'graduation',
          title: 'Objectif BEPC',
          text: 'Un suivi renforcé et des examens blancs en classe de 3e.',
        },
        {
          icon: 'book',
          title: 'Langues et culture',
          text: 'Français, anglais et ouverture culturelle.',
        },
        {
          icon: 'shield',
          title: 'Préparer l’avenir',
          text: 'Construire son projet et préparer le lycée, puis l’université.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'L’acte de naissance original et une (1) photocopie légalisée',
      'Le carnet de notes ou les bulletins de l’année précédente (sauf entrée en petite section)',
      'Un certificat de transfert (pour les nouveaux élèves venant d’une autre école)',
      'Le relevé ou l’attestation de réussite au CEPE (pour une entrée en 6e)',
      'Des photos d’identité récentes',
      'Le reçu de paiement des frais d’inscription annuels (non remboursables)',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)

/** Libellé affiché d'un cycle à partir de sa valeur technique (ex. « Maternelle » → « Préscolaire »). */
export const cycleLabel = (name: string): string =>
  school.cycles.find((c) => c.name === name)?.label ?? name
