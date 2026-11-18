// Puntuación de encaje oferta ↔ perfil (0-100). Usado por index.html y por test.js.
function scoreOffer(offer, profile) {
  const text = `${offer.title} ${offer.description}`.toLowerCase();
  const skills = profile.skills.map(s => s.trim().toLowerCase()).filter(Boolean);
  const matched = skills.filter(s => text.includes(s));
  let score = skills.length ? (matched.length / skills.length) * 70 : 0;

  const prefs = profile.modalities || [];
  if (!prefs.length || prefs.includes(offer.modality)) score += 15;

  const min = Number(profile.minSalary) || 0;
  const sal = Number(offer.salary) || 0;
  if (!min || sal >= min) score += 15; // sin salario indicado no penaliza si no pides mínimo

  score = Math.round(score);
  const fit = score >= 70 ? 'Encaja' : score >= 40 ? 'Buena opción' : 'Poco encaje';
  return { score, fit, matched };
}

if (typeof module !== 'undefined') module.exports = { scoreOffer };
