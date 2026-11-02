// Score IA : 10 questions, règles déterministes, aucun appel à un LLM.
// Résultat = un score sur 100 + les 3 choses que l'IA devrait faire pour vous en premier,
// chacune avec un gain hebdomadaire prudent. Utilisé côté client (affichage) ET côté
// serveur (/api/score-ia recalcule le score à partir des réponses, sans faire confiance au client).

// WhatsApp de Jean, l'assistant IA de JB (profil « Flawless Prod »).
export const JEAN_WA = '16192125285'

export type AreaId = 'admin' | 'suivi' | 'messages' | 'rdv' | 'contenu' | 'brief' | 'prive'
type Area = { title: string; text: string; gain: [number, number] }
type Option = {
  label: string
  value: string
  pts?: Partial<Record<AreaId, number>>
  ready?: number
  boost?: Partial<Record<AreaId, number>>
}
export type Question = { id: string; q: string; options: Option[] }

// Ce que l'IA fait en général pour ce public. Gains = fourchettes prudentes (heures par semaine).
export const AREAS: Record<AreaId, Area> = {
  admin: {
    title: 'Vos mails et votre admin préparés pour vous',
    text: 'Mails triés, réponses rédigées, factures et paperasse préparées : vous relisez et vous envoyez.',
    gain: [2, 4],
  },
  suivi: {
    title: 'Prospects et clients relancés au bon moment',
    text: 'Chaque demande reçoit une réponse rapide et une relance au bon moment, avec les outils que vous avez déjà. Pas de nouveau logiciel à apprendre.',
    gain: [1, 3],
  },
  messages: {
    title: 'Les questions qui reviennent, traitées',
    text: 'Les messages, DM et questions de vos clients ou élèves qui reviennent chaque semaine reçoivent une première réponse. Les vraies conversations vous sont transmises.',
    gain: [1, 3],
  },
  rdv: {
    title: 'Des rendez-vous sans aller-retour',
    text: 'Vos clients choisissent un créneau, reçoivent confirmation et rappels. Moins de rendez-vous oubliés, plus de ping-pong par mail.',
    gain: [1, 2],
  },
  contenu: {
    title: 'Votre contenu décliné partout',
    text: 'Une vidéo ou une idée devient posts, extraits et newsletter, préparés dans votre style. Vous validez, ça part.',
    gain: [2, 4],
  },
  brief: {
    title: 'Un point clair chaque matin',
    text: 'Ventes, demandes, rendez-vous et tâches du jour dans un seul message court, et vos idées rangées au lieu d’être perdues.',
    gain: [1, 2],
  },
  prive: {
    title: 'Une IA privée, chez vous',
    text: 'Une IA qui travaille sur vos fichiers depuis un ordinateur à vous. Vos données ne partent pas chez les géants de l’IA.',
    gain: [1, 3],
  },
}

// pts = à quel point l'IA peut aider sur ce point (0–3) ; ready = maturité (outils, organisation).
export const QUESTIONS: Question[] = [
  {
    id: 'profil',
    q: 'Vous êtes plutôt…',
    options: [
      { label: 'Créateur de contenu', value: 'créateur de contenu', pts: { contenu: 1, messages: 1 } },
      { label: 'Coach, consultant ou formateur', value: 'coach / consultant / formateur', pts: { rdv: 1, messages: 1 } },
      { label: 'Indépendant ou freelance', value: 'indépendant / freelance', pts: { admin: 1, suivi: 1 } },
      { label: 'Petite entreprise (2 à 20 personnes)', value: 'TPE / petite équipe', pts: { brief: 1, suivi: 1 } },
    ],
  },
  {
    id: 'frein',
    q: 'Aujourd’hui, qu’est-ce qui vous freine le plus ?',
    options: [
      { label: 'Trop de tâches manuelles qui mangent mes journées', value: 'trop de tâches manuelles', pts: { admin: 2 } },
      { label: 'Pas le temps de produire mon contenu', value: 'pas le temps de produire', pts: { contenu: 2 } },
      { label: 'Des prospects et des clients qui passent entre les mailles', value: 'prospects qui passent entre les mailles', pts: { suivi: 2 } },
      { label: 'Je m’éparpille, je perds le fil de mes idées', value: 'éparpillement, perte du fil', pts: { brief: 2 } },
      { label: 'Je ne sais pas par où commencer avec l’IA', value: 'ne sait pas par où commencer', pts: {} },
    ],
  },
  {
    id: 'admin',
    q: 'Combien d’heures par semaine passez-vous sur l’admin : mails, factures, organisation ?',
    options: [
      { label: 'Moins de 2 heures', value: '< 2 h', pts: {}, ready: 2 },
      { label: '2 à 5 heures', value: '2–5 h', pts: { admin: 1 } },
      { label: '5 à 10 heures', value: '5–10 h', pts: { admin: 2, brief: 1 } },
      { label: 'Plus de 10 heures', value: '10 h et +', pts: { admin: 3, brief: 1 } },
    ],
  },
  {
    id: 'contenu',
    q: 'Et votre contenu (vidéos, posts, newsletter) ?',
    options: [
      { label: 'Je publie régulièrement, ça tourne', value: 'régulier', pts: {}, ready: 3 },
      { label: 'Irrégulier : ça me prend trop de temps', value: 'irrégulier, trop long', pts: { contenu: 3 } },
      { label: 'Je n’en fais pas, mais je devrais', value: 'pas encore, devrait', pts: { contenu: 2 } },
      { label: 'Ce n’est pas important pour moi', value: 'pas important', pts: {} },
    ],
  },
  {
    id: 'prospects',
    q: 'Quand quelqu’un s’intéresse à ce que vous proposez, que se passe-t-il ?',
    options: [
      { label: 'Je réponds vite et je relance toujours', value: 'réponse rapide, toujours relancé', pts: {}, ready: 4 },
      { label: 'Ça va, mais certains passent à la trappe', value: 'certains passent à la trappe', pts: { suivi: 2 } },
      { label: 'Je réponds souvent tard, j’oublie de relancer', value: 'réponses tardives, relances oubliées', pts: { suivi: 3 } },
      { label: 'Je n’ai pas encore vraiment de demandes', value: 'pas encore de demandes', pts: { contenu: 1 } },
    ],
  },
  {
    id: 'messages',
    q: 'Les messages et les questions qui reviennent sans arrêt (DM, mails, clients, élèves) ?',
    options: [
      { label: 'Rarement', value: 'rarement', pts: {} },
      { label: 'Quelques fois par semaine', value: 'quelques fois par semaine', pts: { messages: 2 } },
      { label: 'Tous les jours', value: 'tous les jours', pts: { messages: 3 } },
    ],
  },
  {
    id: 'rdv',
    q: 'Comment vos clients prennent-ils rendez-vous avec vous ?',
    options: [
      { label: 'Agenda en ligne, avec rappels', value: 'agenda en ligne', pts: {}, ready: 4 },
      { label: 'Par aller-retour de mails ou de messages', value: 'aller-retour mails / messages', pts: { rdv: 2 } },
      { label: 'Surtout par téléphone', value: 'par téléphone', pts: { rdv: 2, messages: 1 } },
      { label: 'Pas concerné', value: 'pas concerné', pts: {} },
    ],
  },
  {
    id: 'outils',
    q: 'Avec quels outils travaillez-vous aujourd’hui ?',
    options: [
      { label: 'Surtout mail, téléphone et papier', value: 'mail / téléphone / papier', pts: { admin: 1 }, ready: 6 },
      { label: 'Google ou Microsoft (Gmail, Drive, Outlook…)', value: 'Google / Microsoft', pts: {}, ready: 14 },
      { label: 'Des outils pros en plus (Notion, CRM, plateforme de formation…)', value: 'outils pros (Notion, CRM, plateforme…)', pts: {}, ready: 16 },
      { label: 'Plein d’applis qui ne se parlent pas', value: 'beaucoup d’applis déconnectées', pts: { brief: 2 }, ready: 10 },
    ],
  },
  {
    id: 'donnees',
    q: 'Vos données et celles de vos clients, c’est plutôt…',
    options: [
      { label: 'Rien de sensible', value: 'rien de sensible', pts: {}, ready: 8 },
      { label: 'Quelques fichiers confidentiels', value: 'quelques fichiers confidentiels', pts: { prive: 1 }, ready: 6 },
      { label: 'Sensible (santé, juridique, finances, coaching)', value: 'sensible', pts: { prive: 3 }, ready: 4 },
      { label: 'Je ne veux pas les confier aux géants de l’IA', value: 'ne veut pas dépendre des géants', pts: { prive: 3 }, ready: 6 },
    ],
  },
  {
    id: 'objectif',
    q: 'Dans les 90 prochains jours, votre objectif ?',
    options: [
      { label: 'Gagner du temps', value: 'gagner du temps', boost: { admin: 1.3, messages: 1.2, rdv: 1.2 } },
      { label: 'Plus de clients, plus de chiffre', value: 'plus de clients', boost: { suivi: 1.4, contenu: 1.2, messages: 1.1 } },
      { label: 'Produire plus de contenu', value: 'produire plus de contenu', boost: { contenu: 1.5, brief: 1.1 } },
      { label: 'Arrêter de m’éparpiller et finir ce que je commence', value: 'se recentrer', boost: { brief: 1.5, suivi: 1.2, admin: 1.1 } },
    ],
  },
]

// Complète quand moins de 3 points ressortent.
const FALLBACK: AreaId[] = ['brief', 'admin', 'contenu']

export type TopItem = Area & { id: AreaId }
export type ScoreResult = { score: number; level: string; top: TopItem[]; hours: [number, number] }

export function computeScore(answers: Record<string, string>): ScoreResult {
  const ids = Object.keys(AREAS) as AreaId[]
  const pts = Object.fromEntries(ids.map((k) => [k, 0])) as Record<AreaId, number>
  let ready = 0
  let boost: Partial<Record<AreaId, number>> = {}
  for (const q of QUESTIONS) {
    const o = q.options.find((x) => x.value === answers[q.id])
    if (!o) continue
    for (const [k, v] of Object.entries(o.pts || {})) pts[k as AreaId] += v as number
    ready += o.ready || 0
    if (o.boost) boost = o.boost
  }

  const ranked = ids
    .map((id) => ({ id, w: pts[id] * (boost[id] || 1) }))
    .filter((a) => a.w > 0)
    .sort((a, b) => b.w - a.w)
  for (const k of FALLBACK) if (ranked.length < 3 && !ranked.some((a) => a.id === k)) ranked.push({ id: k, w: 0 })

  // Le gain suit la force du signal : signal faible → bas de la fourchette.
  const top = ranked.slice(0, 3).map(({ id }) => {
    const [lo, hi] = AREAS[id].gain
    const p = Math.min(pts[id], 3)
    const gain: [number, number] =
      p >= 3 ? [lo, hi] : p === 2 ? [Math.max(1, lo - 1), Math.max(lo, hi - 1)] : [1, Math.max(1, lo)]
    return { id, ...AREAS[id], gain }
  })

  const opportunity = Math.min(55, Object.values(pts).reduce((s, v) => s + v, 0) * 3)
  const score = Math.max(12, Math.min(97, Math.round(opportunity + Math.min(40, ready))))
  const hours = top.reduce<[number, number]>((s, a) => [s[0] + a.gain[0], s[1] + a.gain[1]], [0, 0])
  const level = score >= 70 ? 'Gros potentiel' : score >= 45 ? 'Vrai potentiel' : 'Quelques gains rapides'
  return { score, level, top, hours }
}

// Réponses valides uniquement (valeurs de la liste), pour le serveur.
export function cleanAnswers(raw: unknown): Record<string, string> | null {
  if (!raw || typeof raw !== 'object') return null
  const out: Record<string, string> = {}
  for (const q of QUESTIONS) {
    const v = (raw as Record<string, unknown>)[q.id]
    if (typeof v !== 'string' || !q.options.some((o) => o.value === v)) return null
    out[q.id] = v
  }
  return out
}

export function fmtGain([lo, hi]: [number, number]) {
  return lo === hi ? `${lo} h` : `${lo} à ${hi} h`
}

export function waLink(text: string) {
  return `https://wa.me/${JEAN_WA}?text=${encodeURIComponent(text)}`
}

export function scoreMessage(result: ScoreResult, code: string | null, prenom: string) {
  const lines = [
    `Bonjour, je viens de faire le Score IA sur jbrives.com : ${result.score}/100.`,
    ...(prenom ? [`Moi c’est ${prenom}.`] : []),
    'Mes 3 priorités :',
    ...result.top.map((a, i) => `${i + 1}. ${a.title}`),
    ...(code ? [`Code : ${code}`] : []),
  ]
  return lines.join('\n')
}
