const assert = require('assert');
const { scoreOffer } = require('./score.js');

const profile = { skills: ['Figma', 'UX', 'Design System'], modalities: ['Remoto'], minSalary: 40000 };

const full = scoreOffer({ title: 'Product Designer', description: 'Figma, UX y design system', modality: 'Remoto', salary: 45000 }, profile);
assert.strictEqual(full.score, 100);
assert.strictEqual(full.fit, 'Encaja');

const mid = scoreOffer({ title: 'UX Designer', description: 'Sketch', modality: 'Remoto', salary: 30000 }, profile);
assert.strictEqual(mid.score, 38); // 1/3 skills (23) + modalidad (15)
assert.strictEqual(mid.fit, 'Poco encaje');

const empty = scoreOffer({ title: 'x', description: '', modality: 'Presencial', salary: 0 }, { skills: [], modalities: [], minSalary: 0 });
assert.strictEqual(empty.score, 30);

console.log('ok');
