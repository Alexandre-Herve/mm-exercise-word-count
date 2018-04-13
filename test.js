var count = require('./index.js');

var text = `
Cela ressemblait aux gros ordinateurs que David avait pu voir dans des films de science fiction. Beaucoup de petites lumières indiquaient qu’il était en fonction. À la base, une sorte d’aquarium avait été installé tout autour. Certainement le système de refroidissement car des bulles montaient sans cesse, preuve que l’eau était en ébullition. Soudain, David resta bouche bée. Une voix caverneuse sortie des écrans où venait de s’afficher le mot « Prélude ».

La journée commence. Il s’habille comme il peut tout en prenant son café. Chemise blanche repassée la veille par lui-même. Une cravate comme tous les jours. Et son costume noir de chez Sam Montiel, très chic et très branché. Chaussures cuir noir. Comme il aime faire remarquer : "Vous êtes soit dans vos chaussures, soit dans votre lit. Alors il faut de bonnes chaussures et une bonne literie !". La météo a annoncé un ciel bleu et des températures au-dessus de la normale saisonnière. C’est un très beau mois de mai qui s’annonce.

  Les deux hommes entourent David et le conduisent à la voiture, un Espace, garé devant sa maison. Il se dit que ce serait bien si sa voisine pouvait le voir comme ça, entouré de deux gardes du corps. Ça fait ‘pro’. Et comme tous les matins, sa voisine Florence le regarde partir, mais cette fois-ci entouré de deux gros gars baraqués, rasés au plus près, menton et crâne. Un peu plus les pieds sur terre et surtout plus réveillée, elle ne trouve pas cette scène très drôle. Il faudra qu’elle vienne le voir ce soir, à son retour, pour lui demander de quoi il s’agissait.

 !@#$%^&*()-=_+|;':",.<>?'«»’‘{}[]\\
`;

console.log(count(text));
console.log(count(''));
count(2);
