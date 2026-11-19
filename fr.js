/* =====================================================
   FRENCH INTERFACE for the Christmas Hub activities.
   Loaded by play.html before each activity. It translates every
   button, message and pop-up into French as the page draws them.
   To fix a translation: find the English text below and change the French.
   ===================================================== */
(function(){
'use strict';

/* ---------- Exact phrases (emoji at the start or end are kept automatically) ---------- */
const D = {
  // shared
  'Hub':'Accueil', 'Teams':'Équipes', 'Team 1':'Équipe 1', 'Team 2':'Équipe 2', 'Play as one class':'Jouer toute la classe ensemble',
  'Play in teams':'Jouer en équipes', 'Reset scores':'Remettre les points à zéro', 'Close':'Fermer', 'Cancel':'Annuler', 'Save':'Enregistrer',
  'Done':'Terminé', 'Delete':'Supprimer', 'delete':'supprimer', 'Fullscreen':'Plein écran', 'Sound on/off':'Son activé/désactivé',
  'Elementary':'Élémentaire', 'High School':'Secondaire', 'Our Class':'Notre classe', 'Our class':'Notre classe', 'Your class':'Ta classe',
  'My Class':'Ma classe', 'Settings':'Réglages', 'Undo':'Annuler', 'New':'Nouveau', 'Reset':'Réinitialiser', 'Add':'Ajouter', 'Play':'Jouer',
  'Pause':'Pause', 'Today':'Aujourd’hui', 'Team Holly':'Équipe Houx', 'Team Ivy':'Équipe Lierre', 'Answer':'Réponse', 'Hint':'Indice',
  'Shuffle':'Mélanger', 'Start over':'Recommencer', 'Nothing to undo':'Rien à annuler', 'Print':'Imprimer', 'Added!':'Ajouté!', 'Saved!':'Enregistré!',
  'Off':'Désactivé', 'Elem':'Élém.', 'HS':'Sec.', 'Easy':'Facile', 'Harder':'Plus difficile',
  "This browser can't show 3D graphics (WebGL is off). Try Chrome or Edge, or another computer.":'Ce navigateur ne peut pas afficher la 3D (WebGL est désactivé). Essaie Chrome ou Edge, ou un autre ordinateur.',

  // ---------- Wordle ----------
  'Daily':'Du jour', 'Unlimited':'Illimité', 'Show the clue':'Voir l’indice', 'Reveal the word':'Révéler le mot', 'Type a secret word':'Écrire un mot secret',
  'Class stats':'Statistiques de la classe', 'New word':'Nouveau mot', 'Days':'Jours', 'Look at the board':'Voir la grille', 'Next word':'Mot suivant',
  'Daily words':'Mots du jour', 'Secret word':'Mot secret',
  "Type your own word (3 to 8 letters), like this week's spelling word. Turn the screen away from the class first!":'Écris ton propre mot (3 à 8 lettres), comme un mot de vocabulaire de la semaine. Cache l’écran à la classe d’abord!',
  'Word':'Mot', 'Clue (optional)':'Indice (facultatif)', 'Emoji (optional)':'Émoji (facultatif)', 'e.g. REINDEER':'ex. RENNE', 'e.g. Rudolph is one of these':'ex. Rodolphe en est un',
  'Play this word':'Jouer ce mot', 'Reset team scores':'Remettre les points des équipes à zéro',
  'Teams take turns guessing. The team that solves the word gets points: 6 for a first-guess solve, down to 1 on the last guess.':'Les équipes devinent à tour de rôle. L’équipe qui trouve le mot gagne des points : 6 si elle trouve au premier essai, jusqu’à 1 au dernier essai.',
  'Enter':'Entrée', 'Back':'Effacer', 'Play Unlimited now':'Jouer en illimité maintenant', 'Play Unlimited':'Jouer en illimité', 'Tap 💡 Clue for a hint':'Touche 💡 pour un indice',
  "You've played every word! Starting the list again.":'Tu as joué tous les mots! On recommence la liste.', 'No clue for this word':'Pas d’indice pour ce mot',
  'Use 3 to 8 letters':'Utilise de 3 à 8 lettres', 'Genius!':'Génial!', 'Amazing!':'Incroyable!', 'Fantastic!':'Fantastique!', 'Great job!':'Bravo!',
  'Nice work!':'Beau travail!', 'Phew, just in time!':'Ouf, juste à temps!', "Here's the word":'Voici le mot', 'So close!':'Presque!',
  'Better luck on the next one!':'Tu l’auras la prochaine fois!', 'That was the last daily word.':'C’était le dernier mot du jour.', 'Merry Christmas!':'Joyeux Noël!',
  'Skip this word? It will count as not solved.':'Passer ce mot? Il comptera comme non résolu.', "Reveal the word? This round won't count as solved.":'Révéler le mot? Cette ronde ne comptera pas comme résolue.',
  'Switch level and start a new word?':'Changer de niveau et commencer un nouveau mot?', 'Reset both team scores to 0?':'Remettre les points des deux équipes à 0?',
  'Days solved':'Jours résolus', 'Streak':'Série', 'Played':'Joués', 'Solved':'Résolus', 'Best':'Record', 'Guesses needed (unlimited)':'Essais nécessaires (illimité)',

  // ---------- Connections ----------
  'Make your own puzzle':'Créer ton propre casse-tête', 'Reveal all groups':'Révéler tous les groupes', 'Deselect all':'Tout désélectionner', 'Submit':'Valider',
  'Next puzzle':'Casse-tête suivant', 'Daily puzzles':'Casse-têtes du jour', 'My puzzles':'Mes casse-têtes', 'Make a new puzzle':'Créer un nouveau casse-tête',
  'Teams take turns submitting a group. Points per group: 🟨 1 · 🟩 2 · 🟦 3 · 🟪 4.':'Les équipes proposent un groupe à tour de rôle. Points par groupe : 🟨 1 · 🟩 2 · 🟦 3 · 🟪 4.',
  'Make your own puzzle from unit vocabulary, a novel study, or class inside jokes. Your puzzles can be used with every class.':'Crée ton propre casse-tête avec le vocabulaire d’une unité, un roman étudié ou des blagues de classe. Tes casse-têtes servent à toutes tes classes.',
  'Puzzle name (e.g. Science unit: Matter)':'Nom du casse-tête (ex. Sciences : la matière)', '4 groups of 4':'4 groupes de 4', '3 groups of 3':'3 groupes de 3',
  'Words are separated by commas. Optional: add an emoji to a word like':'Sépare les mots par des virgules. Facultatif : ajoute un émoji à un mot, comme', 'Snow ❄️':'Neige ❄️',
  '. Each word can only be used once.':'. Chaque mot ne peut servir qu’une fois.', 'Save puzzle':'Enregistrer le casse-tête',
  'Elementary: 3 groups of 3':'Élémentaire : 3 groupes de 3', 'Elementary: 4 groups of 4':'Élémentaire : 4 groupes de 4', 'High School: 4 groups of 4 with traps':'Secondaire : 4 groupes de 4 avec des pièges',
  'Elementary daily: 4 groups of 4 with pictures':'Élémentaire, du jour : 4 groupes de 4 avec des images', 'High School daily':'Secondaire, du jour',
  'Puzzle complete!':'Casse-tête terminé!', 'One group is:':'Un des groupes :', 'Mistakes left:':'Erreurs restantes :', 'You already tried that group!':'Tu as déjà essayé ce groupe!',
  'Nice!':'Bien!', 'You got it!':'Tu l’as!', 'Brilliant!':'Brillant!', 'One away!':'Il en manque un!', 'Not quite.':'Pas tout à fait.', 'Try again!':'Essaie encore!',
  'Not a group':'Ce n’est pas un groupe', "You've done every puzzle! Starting the list again.":'Tu as fait tous les casse-têtes! On recommence la liste.', 'No more hints!':'Plus d’indices!',
  'Show a hint? It reveals one category name.':'Voir un indice? Ça révèle le nom d’une catégorie.', 'Reveal all the groups?':'Révéler tous les groupes?',
  'Skip to a new puzzle?':'Passer à un nouveau casse-tête?', 'Switch level and start a new puzzle?':'Changer de niveau et commencer un nouveau casse-tête?', 'Delete this puzzle?':'Supprimer ce casse-tête?',
  'Perfect! No mistakes!':'Parfait! Aucune erreur!', 'Puzzle solved!':'Casse-tête résolu!', 'Here are the groups':'Voici les groupes', 'Out of mistakes!':'Plus d’erreurs permises!',
  "Here's how it all connects:":'Voici les liens :', 'That was the last daily puzzle.':'C’était le dernier casse-tête du jour.', 'No puzzles yet.':'Pas encore de casse-tête.',
  'My puzzle':'Mon casse-tête', 'Puzzle saved! Press ▶ Play to use it.':'Casse-tête enregistré! Appuie sur ▶ Jouer pour l’utiliser.',

  // ---------- Tree ----------
  'Setting up the tree…':'On installe le sapin…', 'Spin':'Tourner', 'Names':'Noms', 'Save picture':'Enregistrer l’image', 'Tree & Room':'Sapin et pièce',
  'Look':'Regarder', 'Decorate':'Décorer', 'Remove':'Enlever', 'Ornament':'Décoration', 'Colour':'Couleur', 'Size':'Taille', 'Name tag':'Étiquette',
  'Optional, e.g. Maya':'Facultatif, ex. Maya', 'Lights':'Lumières', 'Tree topper':'Cime du sapin', 'Room':'Pièce', 'Rug':'Tapis', 'Walls':'Murs', 'Stockings':'Bas de Noël',
  'Names, separated by commas':'Prénoms, séparés par des virgules', 'First names only. They show on the stocking cuffs.':'Prénoms seulement. Ils s’affichent sur le haut des bas.',
  'Remove all ornaments':'Enlever toutes les décorations', 'Bauble':'Boule', 'Striped':'Rayée', 'Bell':'Cloche', 'Candy cane':'Canne en bonbon', 'Star':'Étoile',
  'Snowflake':'Flocon', 'Mini gift':'Mini cadeau', 'Lights on':'Lumières allumées', 'Lights off':'Lumières éteintes', 'Multicolour':'Multicolore', 'Warm white':'Blanc chaud',
  'Icy blue':'Bleu glacé', 'Red & green':'Rouge et vert', 'Gold':'Or', 'Steady':'Fixe', 'Twinkle':'Scintillant', 'Chase':'Poursuite', 'Slow glow':'Lueur lente',
  'Bow':'Boucle', 'None':'Aucune', 'Room lights on':'Lumières de la pièce allumées', 'Lights out':'Lumières éteintes', 'Red & gold':'Rouge et or', 'Plaid':'Carreaux',
  'Braided':'Tressé', 'Fluffy white':'Blanc moelleux', 'No rug':'Pas de tapis', 'Cream':'Crème', 'Sage':'Sauge', 'Mint':'Menthe', 'Grey':'Gris', 'Navy':'Marine',
  'Cranberry':'Canneberge', 'Fire on':'Feu allumé', 'Fire off':'Feu éteint', 'Presents':'Cadeaux', 'No presents':'Pas de cadeaux', 'Toy train':'Petit train',
  'No train':'Pas de train', 'Ceiling lights':'Lumières au plafond', 'No ceiling lights':'Pas de lumières au plafond', 'Furniture':'Meubles', 'Empty room':'Pièce vide',
  'Drag to look around · Click the tree to hang an ornament':'Glisse pour regarder autour · Clique sur le sapin pour accrocher une décoration',
  'Click the tree to hang an ornament · Drag to look around':'Clique sur le sapin pour accrocher une décoration · Glisse pour regarder autour',
  'Click an ornament to take it off':'Clique sur une décoration pour l’enlever', 'Drag to walk around the tree · Scroll to zoom':'Glisse pour faire le tour du sapin · Fais défiler pour zoomer',
  'The tree is full! (400 ornaments)':'Le sapin est plein! (400 décorations)',

  // ---------- Snowman ----------
  "Snowman's name…":'Nom du bonhomme…', 'Pick a helper':'Choisir un aide', 'Melt!':'Faire fondre!', 'Keep':'Garder', 'Gallery':'Galerie', 'Bigger':'Plus grand',
  'Smaller':'Plus petit', 'Turn left':'Tourner à gauche', 'Turn right':'Tourner à droite', 'Flip':'Retourner', 'Tap a piece below to add it to the snowman!':'Touche une pièce en bas pour l’ajouter au bonhomme!',
  "Who's next?":'À qui le tour?', 'Pick!':'Choisis!', 'Class list':'Liste de la classe', 'One first name per line. Everyone gets a turn before anyone goes twice.':'Un prénom par ligne. Tout le monde passe une fois avant que quelqu’un passe deux fois.',
  'Save list':'Enregistrer la liste', 'Reset turns':'Remettre les tours à zéro', 'Our Snowman Gallery':'La galerie de nos bonshommes', 'Tap a snowman to bring it back.':'Touche un bonhomme pour le ramener.',
  '"📸 Keep" adds the current snowman here.':'« 📸 Garder » ajoute le bonhomme actuel ici.', 'Download current snowman as a picture':'Télécharger le bonhomme actuel en image',
  'Body':'Corps', 'Hats':'Chapeaux', 'Eyes':'Yeux', 'Nose':'Nez', 'Mouth':'Bouche', 'Scarf':'Foulard', 'Arms':'Bras', 'Buttons':'Boutons', 'Extras':'Extras', 'Scene':'Décor',
  'Classic':'Classique', 'Two snowballs':'Deux boules', 'Big & round':'Gros et rond', 'Sunny day':'Journée ensoleillée', 'Sunset':'Coucher de soleil', 'Starry night':'Nuit étoilée',
  'Top hat':'Haut-de-forme', 'Toque':'Tuque', 'Santa hat':'Tuque du père Noël', 'Crown':'Couronne', 'Party hat':'Chapeau de fête', 'Antlers':'Panaches', 'Earmuffs':'Cache-oreilles',
  'Coal':'Charbon', 'Googly':'Yeux rigolos', 'Sparkly':'Brillants', 'Sunglasses':'Lunettes de soleil', 'Happy':'Joyeux', 'Hearts':'Cœurs', 'Stars':'Étoiles', 'Wink':'Clin d’œil',
  'Carrot':'Carotte', 'Long carrot':'Longue carotte', 'Button':'Bouton', 'Red nose':'Nez rouge', 'Heart nose':'Nez en cœur', 'Coal smile':'Sourire en charbon', 'Big grin':'Grand sourire',
  'Surprised':'Surpris', 'Silly':'Rigolo', 'Smile':'Sourire', 'Red stripes':'Rayures rouges', 'Green & gold':'Vert et or', 'Blue':'Bleu', 'Purple':'Violet', 'Rainbow':'Arc-en-ciel',
  'Sticks':'Branches', 'Waving':'Salut!', 'Red mittens':'Mitaines rouges', 'Blue mittens':'Mitaines bleues', 'Red':'Rouge', 'Green':'Vert', 'Heart':'Cœur', 'Broom':'Balai',
  'Star wand':'Baguette étoile', 'Bow tie':'Nœud papillon', 'String lights':'Lumières', 'Cardinal':'Cardinal', 'Present':'Cadeau', 'Hot cocoa':'Chocolat chaud', 'Penguin pal':'Ami pingouin',
  'No more button spots! Drag a button to move it, or remove one.':'Plus de place pour les boutons! Glisse un bouton pour le déplacer, ou enlèves-en un.',
  'Could not save (browser storage is full)':'Impossible d’enregistrer (la mémoire du navigateur est pleine)', 'Uh oh… the sun came out!':'Oh non… le soleil est sorti!',
  "Snow magic… it's coming back!":'Magie de la neige… il revient!', 'Add your class list first':'Ajoute d’abord ta liste de classe', 'Class list saved':'Liste de classe enregistrée',
  "Everyone's had a turn! Starting a new round.":'Tout le monde a eu son tour! On recommence.', 'Add some pieces first!':'Ajoute d’abord des pièces!', 'Saved to the gallery!':'Enregistré dans la galerie!',
  'No snowmen saved yet. Build one and press 📸 Keep.':'Aucun bonhomme enregistré. Fabriques-en un et appuie sur 📸 Garder.', 'Snowman':'Bonhomme',
  'Delete this snowman from the gallery?':'Supprimer ce bonhomme de la galerie?', 'Start a new snowman? (Press 📸 Keep first if you want to save this one.)':'Commencer un nouveau bonhomme? (Appuie d’abord sur 📸 Garder si tu veux garder celui-ci.)',
  'Fresh snow! Tap a piece below to start.':'De la neige fraîche! Touche une pièce en bas pour commencer.', 'Tap a piece below to add it · Drag pieces to move them':'Touche une pièce en bas pour l’ajouter · Glisse les pièces pour les déplacer',

  // ---------- Globe ----------
  'Explore':'Explorer', "Santa's route":'Le trajet du père Noël', 'Where in the world?':'Où dans le monde?', 'WHERE IN THE WORLD?':'OÙ DANS LE MONDE?',
  'Drag to spin the globe · Tap a gold pin to fly Santa there':'Glisse pour faire tourner le globe · Touche une épingle dorée pour y envoyer le père Noël',
  'Zoom in':'Zoomer', 'Zoom out':'Dézoomer', 'Tap a pin on the globe, or a name below.':'Touche une épingle sur le globe, ou un nom en bas.', 'Skip this one':'Passer celui-ci',
  'Next clue':'Indice suivant', 'Where should Santa fly?':'Où le père Noël devrait-il aller?',
  'Tap a gold pin on the globe, or pick a country below. Gold countries turn red once Santa has visited.':'Touche une épingle dorée sur le globe, ou choisis un pays en bas. Les pays dorés deviennent rouges quand le père Noël les a visités.',
  'Santa has finished his route! Reset the passport below to fly it again.':'Le père Noël a fini son trajet! Réinitialise le passeport en bas pour le refaire.',
  'Not everyone in a country celebrates Christmas, or in the same way.':'Ce n’est pas tout le monde dans un pays qui fête Noël, ni de la même façon.',
  'Read it to us':'Lis-le-nous', 'Stop reading':'Arrêter la lecture', 'Clear this class’s passport and start again?':'Effacer le passeport de cette classe et recommencer?',
  'Passport complete! Santa visited every country!':'Passeport complet! Le père Noël a visité tous les pays!', 'This browser can’t read aloud':'Ce navigateur ne peut pas lire à voix haute',
  "This browser can't show 3D graphics (WebGL is off). Try Chrome or Edge, or another computer.":'Ce navigateur ne peut pas afficher la 3D (WebGL est désactivé). Essaie Chrome ou Edge, ou un autre ordinateur.',

  // ---------- Sleigh ----------
  'K–1':'Mat.–1re', 'Gr 2–3':'2e–3e', 'Gr 4':'4e', 'Gr 5–6':'5e–6e', 'Gr 7–8':'7e–8e', 'Challenge':'Défi', 'Free play':'Jeu libre',
  'Presents delivered by this class':'Cadeaux livrés par cette classe', 'Switch camera':'Changer de caméra', 'Side':'De côté', 'Ride along':'À bord',
  'Which ramp will get Santa to the':'Quelle rampe amènera le père Noël à la maison', 'house?':'?', 'RED':'ROUGE', 'BLUE':'BLEUE', 'GREEN':'VERTE', 'YELLOW':'JAUNE', 'PURPLE':'VIOLETTE',
  'Small, medium or big?':'Petite, moyenne ou grande?', 'The':'', 'small':'La petite rampe', 'medium':'La rampe moyenne', 'big':'La grande rampe',
  'ramp! The far house needs the biggest ramp.':'! La maison lointaine a besoin de la plus grande rampe.', 'ramp! The close house only needs a small ramp.':'! La maison proche a seulement besoin d’une petite rampe.',
  'ramp! The middle house needs a medium ramp.':'! La maison du milieu a besoin d’une rampe moyenne.',
  'Build a ramp':'Construis une rampe de', 'blocks tall.':'blocs de haut.', 'Count the blocks as you build!':'Compte les blocs en construisant!',
  'Use the protractor on the ramp to set it to':'Utilise le rapporteur sur la rampe pour la régler à', 'Read where the red ramp crosses the protractor.':'Lis où la rampe rouge croise le rapporteur.',
  'Estimate! Set the ramp to about':'Estime! Règle la rampe à environ', 'The numbers are hidden until you launch. Then check with the protractor!':'Les nombres sont cachés jusqu’au lancement. Ensuite, vérifie avec le rapporteur!',
  'Set the ramp to':'Règle la rampe à', 'half of a right angle':'la moitié d’un angle droit', 'one third of a right angle':'un tiers d’un angle droit', 'two thirds of a right angle':'deux tiers d’un angle droit',
  'A right angle is 90°.':'Un angle droit mesure 90°.', 'Set an':'Règle un angle', 'acute':'aigu', 'angle of':'de', 'Acute angles are less than 90°.':'Un angle aigu mesure moins de 90°.',
  'top angle':'L’angle du haut', 'of the ramp is':'de la rampe mesure', '. What is the ramp angle?':'. Quel est l’angle de la rampe?', 'The angle':'L’angle', 'outside':'extérieur',
  'the ramp is':'à la rampe mesure', 'The ramp triangle has angles of':'Le triangle de la rampe a des angles de', 'and':'et', 'The ramp is a right triangle.':'La rampe est un triangle rectangle.',
  'The ground is a straight line.':'Le sol est une ligne droite.', 'All three angles add to 180°.':'Les trois angles donnent 180° au total.',
  'The top angle is':'L’angle du haut est', 'the ramp angle. Find the ramp angle.':'l’angle de la rampe. Trouve l’angle de la rampe.', 'than the ramp angle. Find the ramp angle.':'que l’angle de la rampe. Trouve l’angle de la rampe.',
  'The outside angle is':'L’angle extérieur est', 'The ramp angle is':'L’angle de la rampe est', 'and the top angle is':'et l’angle du haut est', '. Find x, then set the ramp angle.':'. Trouve x, puis règle l’angle de la rampe.',
  'ground':'sol', 'ramp':'rampe', 'Hide answer':'Cacher la réponse', 'Next question':'Question suivante', 'ramp angle':'angle de la rampe', 'Ramp angle':'Angle de la rampe',
  'Zoom in on the ramp, or out to see the houses':'Zoomer sur la rampe, ou reculer pour voir les maisons', 'Show the protractor on the ramp':'Afficher le rapporteur sur la rampe',
  'Hide the degrees so students estimate':'Cacher les degrés pour que les élèves estiment', 'Small':'Petite', 'Medium':'Moyenne', 'Big':'Grande', 'blocks tall':'blocs de haut', 'block tall':'bloc de haut',
  'Launch!':'Lance!', 'Again!':'Encore!', 'Delivered! Great math!':'Livré! Super maths!', 'Delivered!':'Livré!', "It landed, but that's not the ramp angle!":'Il a atterri, mais ce n’est pas l’angle de la rampe!',
  'Try a bigger ramp!':'Essaie une plus grande rampe!', 'Try a smaller ramp!':'Essaie une plus petite rampe!', 'Try more blocks!':'Essaie plus de blocs!', 'Try fewer blocks!':'Essaie moins de blocs!',
  'Check your math and try again!':'Vérifie tes calculs et réessaie!', 'Landed at':'Atterri à', 'Another idea':'Une autre idée', 'Clear trails':'Effacer les traces',
  'Which angle makes Santa fly the':'Quel angle fait voler le père Noël le plus', 'farthest':'loin', '? Test a few and compare.':'? Essaies-en quelques-uns et compare.',
  'Try':'Essaie', ', then':', puis', '. Which one flies higher? Which one lands farther?':'. Lequel vole le plus haut? Lequel atterrit le plus loin?',
  'Steeper ramps are taller. Does a':'Les rampes plus raides sont plus hautes. Est-ce qu’une rampe plus', 'taller':'haute', 'ramp always mean a':'donne toujours un saut plus', 'longer':'long', 'jump?':'?',
  'Which is higher: a':'Lequel monte le plus haut : un saut de', 'jump or a':'ou un saut de', 'jump? Which one is longer?':'? Lequel est le plus long?',
  'Turn on 🙈 and estimate: can someone set exactly':'Active 🙈 et estime : quelqu’un peut-il régler exactement', 'without looking?':'sans regarder?',
  'Which ramp makes Santa go the':'Quelle rampe fait aller le père Noël le plus', 'Which ramp is the':'Quelle rampe est la plus', 'shortest':'courte', '? Where does Santa land?':'? Où le père Noël atterrit-il?',
  'Guess first! Which house will the':'Devine d’abord la maison atteinte avec :', 'ramp reach?':'.', 'Each number on the snow shows where that many blocks will land.':'Chaque nombre sur la neige montre où atterrit une rampe de ce nombre de blocs.',
  'How many blocks do you need to go past':'Combien de blocs faut-il pour dépasser', 'Does':'Est-ce vrai :', 'one more block':'un bloc de plus', 'always make Santa go farther?':'fait toujours aller le père Noël plus loin?',
  "This computer's browser can't show 3D graphics (WebGL is off).":'Le navigateur de cet ordinateur ne peut pas afficher la 3D (WebGL est désactivé).', 'Try Chrome or Edge, or another computer.':'Essaie Chrome ou Edge, ou un autre ordinateur.',

  // ---------- Summit ----------
  'Play as one class or in 2–4 teams':'Jouer toute la classe ensemble ou en 2 à 4 équipes', 'Items':'Objets', 'Round over':'Ronde terminée', 'Exact!':'Pile!', 'Fell off!':'Tombé!',
  'Lock in guesses':'Confirmer les réponses', 'Lock in guess':'Confirmer la réponse', 'Reveal the price':'Révéler le prix', 'Climbing…':'On grimpe…', 'Next item':'Objet suivant',
  'See who survived':'Voir qui a survécu', 'Every team needs a guess first':'Chaque équipe doit d’abord donner un prix', 'Bullseye':'En plein dans le mille', 'Everyone fell off!':'Tout le monde est tombé!',
  'Santa made it!':'Le père Noël a réussi!', 'Santa fell off the cliff!':'Le père Noël est tombé de la falaise!', 'Better luck next round.':'Bonne chance à la prochaine ronde.',
  'No winner this round.':'Pas de gagnant cette ronde.', 'It’s a tie!':'Égalité!', 'fell off':'tombé', 'Rounds won':'Rondes gagnées', 'The prices':'Les prix', 'New round':'Nouvelle ronde',
  'Items & settings':'Objets et réglages', 'Mountain height':'Hauteur de la montagne', 'Short (15 steps): harder':'Basse (15 marches) : plus difficile', 'Classic (25 steps)':'Classique (25 marches)',
  'Tall (35 steps): easier':'Haute (35 marches) : plus facile', 'Team names':'Noms des équipes', 'Add your own item':'Ajouter ton propre objet',
  'The cafeteria cookie, a local favourite, or something from the news. Pick a step size that fits: about 1/20 of the price works well.':'Le biscuit de la cafétéria, un favori du coin ou quelque chose des nouvelles. Choisis une marche qui convient : environ 1/20 du prix, ça marche bien.',
  'Emoji':'Émoji', 'Item':'Objet', 'Price ($)':'Prix ($)', '$ per step':'$ par marche', 'e.g. Cafeteria cookie':'ex. Biscuit de la cafétéria', 'auto':'auto',
  'Prices are Canadian, before tax, checked November 2026. Untick any you don’t want.':'Prix canadiens, avant taxes, vérifiés en novembre 2026. Décoche ceux que tu ne veux pas.',
  'Reshuffle items':'Mélanger les objets', 'Keep at least 3 items ticked':'Garde au moins 3 objets cochés', 'Add a name and a price':'Ajoute un nom et un prix', 'Items reshuffled':'Objets mélangés',
  'Added by your teacher':'Ajouté par ton enseignant', 'Your item':'Ton objet', '$ ? ? ?':'? ? ? $', 'Team Santa':'Équipe Père Noël', 'Team Elf':'Équipe Lutin', 'Team Snowman':'Équipe Bonhomme',
  'Team Rudolph':'Équipe Rodolphe', '$':'$',

  // ---------- Printables ----------
  'Word Search':'Mots cachés', 'Crossword':'Mots croisés', 'Colouring':'Coloriage', 'Colour by Math':'Coloriage magique', 'Board mode':'Mode tableau', 'Big view for the smartboard':'Grand affichage pour le TNI',
  'Words':'Mots', 'Theme':'Thème', 'My own words':'Mes propres mots', 'Your words, one per line':'Tes mots, un par ligne',
  'Spelling words work great. Add a clue after a word for crosswords:':'Les mots de vocabulaire marchent très bien. Pour les mots croisés, ajoute un indice après le mot :', 'WORD - clue':'MOT - indice',
  '. Words without clues go in a word bank instead.':'. Les mots sans indice vont plutôt dans une banque de mots.', 'Use these words':'Utiliser ces mots', 'Page title (optional)':'Titre de la page (facultatif)',
  'e.g. Week 12 Spelling':'ex. Vocabulaire, semaine 12', 'Difficulty':'Difficulté', 'Words go → across and ↓ down.':'Les mots vont → à l’horizontale et ↓ à la verticale.',
  'Words go →, ↓ and ↘ diagonally.':'Les mots vont →, ↓ et ↘ en diagonale.', 'Words go in every direction, even backwards!':'Les mots vont dans tous les sens, même à l’envers!',
  'Each puzzle is built from the word list. Press 🔀 New layout for a different arrangement.':'Chaque grille est créée à partir de la liste de mots. Appuie sur 🔀 Nouvelle grille pour une autre disposition.',
  'Picture':'Image', 'Math':'Maths', 'Add to 10':'Additions jusqu’à 10', 'Add to 20':'Additions jusqu’à 20', 'Subtract to 20':'Soustractions jusqu’à 20', 'Multiplication':'Multiplications',
  'Each colour gets a number. Every space has a question with that number as the answer.':'Chaque couleur a un nombre. Chaque case a une question dont la réponse est ce nombre.',
  'Leave blank for the default':'Laisse vide pour le titre habituel', 'New puzzle':'Nouvelle grille', 'Show answers':'Voir les réponses', 'New layout':'Nouvelle grille', 'Check':'Vérifier',
  'Reveal':'Révéler', 'Clear':'Effacer', 'New questions':'Nouvelles questions', 'Eraser':'Gomme', 'Name:':'Nom :', 'Date:':'Date :', 'Word Bank':'Banque de mots', 'Across':'Horizontal',
  'Down':'Vertical', 'Add some words in the panel on the left, then press ✅ Use these words.':'Ajoute des mots dans le panneau de gauche, puis appuie sur ✅ Utiliser ces mots.',
  'Solve each question. Colour each space using the key.':'Résous chaque question. Colorie chaque case selon la légende.', 'You found them all!':'Tu les as tous trouvés!', 'Add some words first':'Ajoute d’abord des mots',
  'red':'rouge', 'green':'vert', 'blue':'bleu', 'yellow':'jaune', 'orange':'orange', 'brown':'brun', 'black':'noir', 'pink':'rose', 'purple':'violet', 'light blue':'bleu pâle', 'grey':'gris',
  'Christmas Tree':'Sapin de Noël', 'Gingerbread House':'Maison en pain d’épices', 'Stocking':'Bas de Noël',

  // ---------- The Class Says ----------
  'Teacher answer key':'Corrigé de l’enseignant', 'Answer key':'Corrigé', 'Boards':'Tableaux', 'Play a board':'Jouer un tableau', 'Bonus round':'Ronde bonus', 'Survey your class':'Sonder ta classe',
  'Two teams take turns naming the top answers.':'Deux équipes nomment à tour de rôle les réponses les plus populaires.', 'Three strikes and the other team can steal!':'Trois prises et l’autre équipe peut voler!',
  'Our class surveys':'Les sondages de nos classes', 'None yet. Press':'Aucun pour l’instant. Appuie sur', ': one class gives answers, and another class tries to guess them.':' : une classe donne les réponses, puis une autre classe essaie de les deviner.',
  'Ready-made boards':'Tableaux prêts à jouer', 'These answers and points were written for the game. They are not from a real survey.':'Ces réponses et ces points ont été écrits pour le jeu. Ils ne viennent pas d’un vrai sondage.',
  'Delete this survey':'Supprimer ce sondage', 'Delete this survey board?':'Supprimer ce tableau de sondage?',
  'Tap the answers, then tap the team that wins control.':'Touche les réponses, puis touche l’équipe qui gagne le contrôle.', 'Face-off!':'Mise au jeu!', 'One player from each team.':'Un joueur de chaque équipe.',
  'Buzz in, then tap the team that wins control.':'Appuyez sur le buzzer, puis touchez l’équipe qui gagne le contrôle.', 'Three strikes and the other team can steal.':'Trois prises et l’autre équipe peut voler.',
  'STEAL!':'VOL!', 'Tap it if it’s on the board, or press ❌.':'Touche-la si elle est au tableau, sinon appuie sur ❌.', 'Tap the team that gets the points.':'Touche l’équipe qui gagne les points.', 'Round over.':'Ronde terminée.',
  'Tap to change how much this round is worth':'Touche pour changer la valeur de cette ronde', 'Points in the bank':'Points en banque', 'Strike (X)':'Prise (X)', 'Reveal the rest':'Révéler le reste',
  'Next board':'Tableau suivant', 'STEALING':'VOL EN COURS', 'IN CONTROL':'A LE CONTRÔLE', 'WON THE ROUND':'A GAGNÉ LA RONDE', 'Tap the team that gets the points':'Touche l’équipe qui gagne les points',
  'Change this before any answers are revealed':'Change ça avant de révéler une réponse', 'Board saved! Play it with another class.':'Tableau enregistré! Joue-le avec une autre classe.', 'Type the question first':'Écris d’abord la question',
  'Ask the question. Type each student’s answer and press Enter. Matching answers are counted together. Then another class tries to guess the top answers!':'Pose la question. Écris la réponse de chaque élève et appuie sur Entrée. Les réponses pareilles sont comptées ensemble. Ensuite, une autre classe essaie de deviner les réponses les plus populaires!',
  'The question':'La question', 'Name something…':'Nomme quelque chose…', 'Type an answer, press Enter':'Écris une réponse et appuie sur Entrée', 'No answers yet.':'Pas encore de réponses.',
  'Merge into…':'Fusionner avec…', 'Build the board':'Créer le tableau', 'You need at least 3 different answers.':'Il faut au moins 3 réponses différentes.', 'Clear this survey and start over?':'Effacer ce sondage et recommencer?',
  'Points are the percent of students who gave that answer.':'Les points sont le pourcentage d’élèves qui ont donné cette réponse.',
  'One player. Five questions. 30 seconds. Say the first answer that comes to mind!':'Un joueur. Cinq questions. 30 secondes. Dis la première réponse qui te vient en tête!',
  'You type what the player says (a few letters is enough). Points are revealed at the end.':'Tu écris ce que dit le joueur (quelques lettres suffisent). Les points sont révélés à la fin.',
  'Start the clock':'Partir le chrono', 'Type the answer, press Enter':'Écris la réponse et appuie sur Entrée', 'Pass':'Passer', 'Tap the answer it matches:':'Touche la réponse qui correspond :',
  'Not on the board':'Pas au tableau', 'Final score':'Score final', 'Next answer':'Réponse suivante', 'Bonus beaten!':'Bonus réussi!', 'Back to the boards':'Retour aux tableaux',
  '(no answer)':'(aucune réponse)', 'Team name':'Nom de l’équipe', 'Score':'Points', 'Fix a score here if you tapped the wrong thing.':'Corrige un score ici si tu as touché la mauvaise chose.',
  'Reset scores to 0':'Remettre les points à 0', 'Team Reindeer':'Équipe Rennes', 'Team Snowmen':'Équipe Bonshommes', 'Team Elves':'Équipe Lutins', 'Team Penguins':'Équipe Pingouins',
  'On the board now':'Au tableau en ce moment', 'shown':'affichée', 'Flip it':'La retourner', 'Show':'Afficher', 'Strike':'Prise', 'Every board':'Tous les tableaux', 'Print the answer key':'Imprimer le corrigé',
  'No board is being played right now. Start one on the smartboard and its answers appear here. (This only follows along when both windows are on the same computer. On a phone, use the full list below.)':'Aucun tableau n’est en cours. Commence-en un au TNI et ses réponses s’afficheront ici. (Ça suit seulement si les deux fenêtres sont sur le même ordinateur. Sur un téléphone, utilise la liste complète en bas.)',
  'Three ways to see the answers without showing the class:':'Trois façons de voir les réponses sans les montrer à la classe :', 'Open the teacher view':'Ouvrir la vue de l’enseignant',
  'Opens a small window. Drag it onto your laptop screen, away from the smartboard. It follows each board, and you can flip answers and give strikes from it.':'Ouvre une petite fenêtre. Glisse-la sur l’écran de ton portable, loin du TNI. Elle suit chaque tableau, et tu peux y retourner des réponses et donner des prises.',
  'Every board and its answers on paper, including your class surveys.':'Tous les tableaux et leurs réponses sur papier, y compris les sondages de tes classes.',
  'On your phone: open this address on your website to see every board’s answers.':'Sur ton téléphone : ouvre cette adresse sur ton site pour voir les réponses de tous les tableaux.',
  'Peek at this board’s answers here (the class will see them too!)':'Jeter un œil aux réponses de ce tableau ici (la classe les verra aussi!)', 'Your browser blocked the window. Allow pop-ups for this site.':'Ton navigateur a bloqué la fenêtre. Autorise les fenêtres surgissantes pour ce site.',

  // ---------- Hot Takes ----------
  'All takes':'Toutes les opinions', 'HOT TAKE':'OPINION CHAUDE', 'Agree? Move to the left side of the room. Disagree? Move to the right.':'D’accord? Va du côté gauche de la classe. Pas d’accord? Va à droite.',
  'Agree':'D’accord', 'Disagree':'Pas d’accord', 'left side':'côté gauche', 'right side':'côté droit', 'One fewer':'Un de moins', 'One more':'Un de plus', 'Agree count':'Nombre d’accord', 'Disagree count':'Nombre pas d’accord',
  'Now THAT’S a hot take. The class is split!':'Ça, c’est une opinion chaude. La classe est divisée!', 'Ice cold. Almost everyone agrees.':'Froid glacial. Presque tout le monde est d’accord.',
  'Scorching! Almost nobody agrees.':'Brûlant! Presque personne n’est d’accord.', 'Most of the class agrees.':'La plupart de la classe est d’accord.', 'Most of the class disagrees.':'La plupart de la classe n’est pas d’accord.',
  'Hide results':'Cacher les résultats', 'Show results':'Voir les résultats', 'Next take':'Opinion suivante',
  'Count each side and tap + (or type the number). Use the timer to give each side a turn to defend their answer.':'Compte chaque côté et touche + (ou écris le nombre). Utilise le chrono pour donner à chaque côté un tour pour défendre sa réponse.',
  'No takes are ticked. Open 📋 All takes.':'Aucune opinion n’est cochée. Ouvre 📋 Toutes les opinions.', 'Count the two sides first':'Compte d’abord les deux côtés', 'Time!':'Temps écoulé!',
  'Added! It’s up first.':'Ajoutée! Elle passe en premier.', 'Shuffled!':'Mélangé!', 'This class’s most divisive takes:':'Les opinions qui divisent le plus cette classe :',
  'Add your own take, e.g. Our school should have a skating day.':'Ajoute ta propre opinion, ex. Notre école devrait avoir une journée de patin.',
  'Tap a take to jump to it. Untick any you’d like to skip. Green shows how much of this class agreed.':'Touche une opinion pour y aller. Décoche celles que tu veux sauter. Le vert montre combien de la classe était d’accord.',
  'not voted yet':'pas encore votée', 'Clear this class’s votes':'Effacer les votes de cette classe', 'Shuffle the order':'Mélanger l’ordre', 'Clear all of this class’s votes?':'Effacer tous les votes de cette classe?',

  // ---------- Name That Tune ----------
  'Choices':'Choix', 'Show four answer choices':'Afficher quatre choix de réponse', 'Keep score in teams':'Compter les points en équipes', 'Songs':'Chansons', 'Songs and links':'Chansons et liens',
  'Listen…':'Écoute…', 'Next song':'Chanson suivante', 'Nobody':'Personne', 'Take a point away':'Enlever un point', 'Add a point':'Ajouter un point', 'Reindeer':'Rennes', 'Snowmen':'Bonshommes',
  'Elves':'Lutins', 'Penguins':'Pingouins', 'Yes!':'Oui!', 'Not that one! Listen again…':'Pas celle-là! Écoute encore…', 'Keep at least 4 songs ticked':'Garde au moins 4 chansons cochées',
  'New shuffle!':'Nouveau mélange!', 'Trying a backup video…':'Essai d’une vidéo de secours…', 'This video won’t play here. Change its link in ⚙ Songs, or press Next.':'Cette vidéo ne joue pas ici. Change son lien dans ⚙ Chansons, ou appuie sur Suivante.',
  'Loading the music player…':'Chargement du lecteur de musique…', 'You played every song!':'Tu as joué toutes les chansons!', 'Shuffle them up and play again?':'On les mélange et on rejoue?', 'Play again':'Rejouer',
  'Untick a song to leave it out. Paste any YouTube link to swap a video. The last box is where the clip starts, in seconds. Use it if a video has a long quiet intro.':'Décoche une chanson pour la retirer. Colle un lien YouTube pour changer une vidéo. La dernière case indique où l’extrait commence, en secondes. Utilise-la si une vidéo a une longue intro silencieuse.',
  'Song':'Chanson', 'YouTube link':'Lien YouTube', 'Start (s)':'Début (s)', 'Reset to defaults':'Revenir aux liens d’origine', 'Start over with a new shuffle':'Recommencer avec un nouveau mélange',
  'Include this song':'Inclure cette chanson', 'Start at (seconds)':'Commencer à (secondes)', 'Reset all team scores to 0?':'Remettre les points de toutes les équipes à 0?', 'Put every song back to its original link?':'Remettre chaque chanson à son lien d’origine?',
  'Songs won’t play when this file is opened from your computer. Upload it to your website (GitHub Pages) and open it from there.':'Les chansons ne jouent pas quand ce fichier est ouvert depuis ton ordinateur. Mets-le sur ton site (GitHub Pages) et ouvre-le de là.',

  // ---------- Freeze Dance ----------
  'Freeze Dance!':'Statues musicales!', 'Press ▶ Start. When the music stops… FREEZE!':'Appuie sur ▶ Commencer. Quand la musique arrête… STATUE!', 'FREEZE!':'STATUE!', 'Video':'Vidéo',
  'Show or hide the music video':'Afficher ou cacher la vidéo', 'Start':'Commencer', 'Freeze!':'Statue!', 'Freeze right now (F key)':'Statue tout de suite (touche F)', 'Loading…':'Chargement…',
  'Getting the music ready':'On prépare la musique', 'DANCE!':'DANSE!', 'Keep moving until the music stops!':'Continue de bouger jusqu’à ce que la musique arrête!', 'Don’t move a muscle!':'Ne bouge plus!',
  'If you wiggle, you’re out. Sit down!':'Si tu bouges, tu es éliminé. Assieds-toi!', 'Press ▶ to dance again':'Appuie sur ▶ pour danser encore', 'Paused':'En pause', 'Press ▶ to keep dancing':'Appuie sur ▶ pour continuer à danser',
  'Dance!':'Danse!', 'Freeze Dance settings':'Réglages des statues musicales', 'How long do we dance before each freeze?':'Combien de temps dansons-nous avant chaque statue?',
  'Short (4–8 s)':'Court (4 à 8 s)', 'Medium (6–14 s)':'Moyen (6 à 14 s)', 'Long (10–22 s)':'Long (10 à 22 s)', 'Each freeze comes at a random time in this range, so no one can guess it.':'Chaque statue arrive à un moment au hasard dans cet intervalle, alors personne ne peut deviner.',
  'How long do we stay frozen?':'Combien de temps restons-nous figés?', 'Until I press ▶':'Jusqu’à ce que j’appuie sur ▶', 'Freeze poses':'Poses de statue', 'On: "Freeze like a snowman!"':'Activé : « Statue comme un bonhomme de neige! »',
  'Elimination':'Élimination', 'On: wigglers sit down':'Activé : ceux qui bougent s’assoient', 'Music':'Musique', 'Shuffle all the songs':'Mélanger toutes les chansons',
  'Songs and links come from Name That Tune’s ⚙ Songs list.':'Les chansons et les liens viennent de la liste ⚙ Chansons de « Quelle est la chanson? ».',
  'Music won’t play when this file is opened from your computer. Upload it to your website (GitHub Pages) and open it from there.':'La musique ne joue pas quand ce fichier est ouvert depuis ton ordinateur. Mets-le sur ton site (GitHub Pages) et ouvre-le de là.',

  // ---------- Tier list ----------
  'Class':'Classe', 'Choose class':'Choisir la classe', 'Pick a gift to unwrap':'Choisis un cadeau à déballer', 'Unwrapped — drag into a tier':'Déballées — glisse-les dans un rang',
  'Tap a song to replay it or rank it with one tap.':'Touche une chanson pour la réécouter ou la classer d’un coup.', 'Tap to unwrap!':'Touche pour déballer!', 'Open on YouTube':'Ouvrir sur YouTube',
  'Backup video':'Vidéo de secours', 'Main video':'Vidéo principale', 'Use this if the video says it can’t be played here':'Utilise ceci si la vidéo dit qu’elle ne peut pas jouer ici',
  'No YouTube link added for this song yet.':'Pas encore de lien YouTube pour cette chanson.', 'Add a link':'Ajouter un lien', 'Search on YouTube':'Chercher sur YouTube', 'Rank it:':'Classe-la :',
  'Decide later':'Décider plus tard', 'This class':'Cette classe', 'Rename or add classes in the Hub.':'Renomme ou ajoute des classes dans l’accueil.', 'Rename':'Renommer', 'Re-wrap all gifts':'Remballer tous les cadeaux',
  'Delete class':'Supprimer la classe', 'Backup':'Sauvegarde', 'Export backup':'Exporter une sauvegarde', 'Import backup':'Importer une sauvegarde',
  'Progress saves automatically in this browser. Export to move it to another computer.':'La progression s’enregistre dans ce navigateur. Exporte-la pour la déplacer vers un autre ordinateur.',
  'Song links':'Liens des chansons', 'Spoilers! Every song is listed below. Don\'t put this screen on the smartboard.':'Divulgâcheur! Toutes les chansons sont ci-dessous. N’affiche pas cet écran au TNI.',
  'Paste a YouTube link for each song. A link with a timestamp (&t=45) sets the start time automatically. Start time is in seconds, so you can skip straight to the chorus.':'Colle un lien YouTube pour chaque chanson. Un lien avec un moment précis (&t=45) règle le début automatiquement. Le début est en secondes, pour aller directement au refrain.',
  'Paste YouTube link':'Coller un lien YouTube', 'Start time (seconds)':'Début (secondes)', 'Find':'Trouver', 'Save songs':'Enregistrer les chansons', 'Close':'Fermer',
  'Name for the new class (e.g. "Period 2"):':'Nom de la nouvelle classe (ex. « Période 2 ») :', "That file doesn't look like a tier list backup.":'Ce fichier ne ressemble pas à une sauvegarde du palmarès.',
  'Some links (in red) were not recognized as YouTube links and were not saved.':'Certains liens (en rouge) ne sont pas des liens YouTube et n’ont pas été enregistrés.',
  'Videos won’t play when this file is opened from your computer. Upload it to your website (GitHub Pages) and open it from there.':'Les vidéos ne jouent pas quand ce fichier est ouvert depuis ton ordinateur. Mets-le sur ton site (GitHub Pages) et ouvre-le de là.',
};

/* Page headings: [English heading text] → French HTML */
const H1 = {
  '🎄 Christmas Wordle':'🎄 Wordle de <span>Noël</span>', '🔗 Christmas Connections':'🔗 Connexions de <span>Noël</span>', '🎄 Our Christmas Tree':'🎄 Notre <span>sapin</span> de Noël',
  '⛄ Build-a-Snowman':'⛄ Fabrique un <span>bonhomme</span>', "🌍 Santa's World Tour":'🌍 Le <span>tour du monde</span> du père Noël', "🛷 Santa's Sleigh Jump":'🛷 Le saut du <span>traîneau</span>',
  '🏔️ Santa Summit':'🏔️ Le <span>sommet</span> du père Noël', '🖨️ Christmas Printables':'🖨️ <span>Fiches</span> de Noël', '🎤 The Class Says…':'🎤 La classe <span>a dit…</span>',
  '🔑 Teacher answer key':'🔑 <span>Corrigé</span> de l’enseignant', '🔥 Hot Takes':'🔥 Opinions <span>chaudes</span>', '🎵 Name That Tune':'🎵 Quelle est <span>la chanson?</span>',
  '🎁 25 Songs of Christmas':'🎁 25 chansons de <span>Noël</span>', '❄️ Freeze Dance':'❄️ Statues <span>musicales</span>',
};
const TITLES = {
  'Christmas Wordle':'Wordle de Noël', 'Christmas Connections':'Connexions de Noël', 'Our Christmas Tree':'Notre sapin de Noël', 'Build-a-Snowman':'Fabrique un bonhomme',
  "Santa's World Tour":'Le tour du monde du père Noël', "Santa's Sleigh Jump":'Le saut du traîneau', 'Santa Summit':'Le sommet du père Noël', 'Christmas Printables':'Fiches de Noël',
  'The Class Says…':'La classe a dit…', 'Hot Takes':'Opinions chaudes', 'Name That Tune':'Quelle est la chanson?', '25 Songs of Christmas — Tier List':'25 chansons de Noël — Palmarès', 'Freeze Dance':'Statues musicales',
  'Answer key':'Corrigé',
};
const THEME_FR = {'Winter Fun':'Plaisirs d’hiver', "Santa's Workshop":'L’atelier du père Noël', 'Holiday Treats':'Gâteries des fêtes', 'Deck the Halls':'Les décorations', 'Winter Animals':'Animaux d’hiver'};
const PIC = {'Snowman':'le bonhomme de neige', 'Christmas Tree':'le sapin de Noël', 'Ornament':'la boule de Noël', 'Gingerbread House':'la maison en pain d’épices', 'Stocking':'le bas de Noël', 'Snowflake':'le flocon'};
const POSE = {'a snowman':'un bonhomme de neige', 'a reindeer (hands up for antlers!)':'un renne (les mains en l’air pour les panaches!)', 'a Christmas tree (arms out wide!)':'un sapin de Noël (les bras grands ouverts!)',
  'a star':'une étoile', 'a sneaky elf':'un lutin coquin', 'a penguin':'un pingouin', 'an icicle (stand tall and straight!)':'un glaçon (tiens-toi bien droit!)', 'Santa (hold your belly!)':'le père Noël (tiens ta bedaine!)',
  'a present (curl up small!)':'un cadeau (fais-toi tout petit!)', 'a gingerbread cookie':'un bonhomme en pain d’épices', 'a candy cane (bend to the side!)':'une canne en bonbon (penche-toi sur le côté!)', 'a toy robot':'un robot jouet'};
const PICKEYS = 'Snowman|Christmas Tree|Ornament|Gingerbread House|Stocking|Snowflake';
const LV = {Elementary:'Élémentaire', 'High School':'Secondaire'};
const ord = n => n == 1 ? '1er' : n;
const pl = (n, w, p) => n + ' ' + (Math.abs(+n) >= 2 ? (p || w + 's') : w);
const T = s => { const r = trCore(s.trim(), 1); return r === null ? s : r; };
const M = '([\\d\\s\\u00a0\\u202f,.]+\\s?\\$)';

/* ---------- Patterns for sentences with numbers and names ---------- */
const P = [
  [/^(.+) \| Teach With Reach Games$/, m => (TITLES[m[1]] || m[1]) + ' | Teach With Reach Games'],
  // wordle
  [/^#(\d+) · Today$/, m => `#${m[1]} · Aujourd’hui`],
  [/^Daily words start (.+)!$/, m => `Les mots du jour commencent le ${m[1]}!`],
  [/^A new Christmas word every school day until (.+)\.$/, m => `Un nouveau mot de Noël chaque jour d’école jusqu’au ${m[1].replace(/\.$/, '')}.`],
  [/^(\d+) days to go\.$/, m => `Encore ${pl(m[1], 'jour')}.`],
  [/^Need (\d+) letters$/, m => `Il faut ${m[1]} lettres`],
  [/^Secret word ready: (\d+) letters!$/, m => `Mot secret prêt : ${m[1]} lettres!`],
  [/^Solved in (\d+)\/(\d+)\.$/, m => `Résolu en ${m[1]}/${m[2]}.`],
  [/^(.+) gets (\d+) points?!$/, m => `${T(m[1])} gagne ${pl(m[2], 'point')}!`],
  [/^Daily #(\d+) unlocks (.+)\.$/, m => `Le no ${m[1]} s’ouvre le ${m[2].replace(/\.$/, '')}.`],
  [/^(Elementary|High School) · (\d+) of (\d+) solved so far · streak (\d+) 🔥\s+— tap any unlocked day to play it\.$/, m => `${LV[m[1]]} · ${m[2]} sur ${m[3]} résolus jusqu’ici · série de ${m[4]} 🔥 — touche un jour ouvert pour le jouer.`],
  [/^Daily \((Elementary|High School)\)$/, m => `Du jour (${LV[m[1]]})`],
  [/^(.+)'s turn!$/, m => `Au tour de ${T(m[1])}!`],
  // connections
  [/^(.*?)(?:Daily #(\d+) · )?(?:Find (\d+) groups of (\d+)!|(Puzzle complete!))$/, m => (m[1] || '') + (m[2] ? `Du jour #${m[2]} · ` : '') + (m[5] ? 'Casse-tête terminé!' : `Trouve ${m[3]} groupes de ${m[4]}!`)],
  [/^Tries so far: (\d+)$/, m => `Essais ratés : ${m[1]}`],
  [/^(.+) \+(\d+)!$/, m => `${T(m[1])} +${m[2]}!`],
  [/^Solved with (\d+) wrong tr(?:y|ies)\.$/, m => `Résolu avec ${pl(m[1], 'essai raté', 'essais ratés')}.`],
  [/^Solved with (\d+) mistakes?\.$/, m => `Résolu avec ${pl(m[1], 'erreur')}.`],
  [/^Daily puzzles start (.+)!$/, m => `Les casse-têtes du jour commencent le ${m[1]}!`],
  [/^A new Christmas Connections puzzle every school day until (.+)\.$/, m => `Un nouveau casse-tête chaque jour d’école jusqu’au ${m[1].replace(/\.$/, '')}.`],
  [/^(Easiest|Medium|Harder|Trickiest) category \(e\.g\. (.+)\)$/, m => ({Easiest:'Catégorie la plus facile', Medium:'Catégorie moyenne', Harder:'Catégorie plus difficile', Trickiest:'Catégorie la plus rusée'})[m[1]] + ' (ex. ' + ({'States of matter':'États de la matière', 'Lab equipment':'Matériel de labo', 'Types of energy':'Formes d’énergie', 'Words that sound like letters':'Mots qui sonnent comme des lettres'}[m[2]] || m[2]) + ')'],
  [/^(\d+) words, separated by commas$/, m => `${m[1]} mots, séparés par des virgules`],
  [/^Group (\d+) needs a category name$/, m => `Le groupe ${m[1]} a besoin d’un nom de catégorie`],
  [/^Group (\d+) needs exactly (\d+) words \(it has (\d+)\)$/, m => `Le groupe ${m[1]} doit avoir exactement ${m[2]} mots (il en a ${m[3]})`],
  [/^"(.+)" is used twice$/, m => `« ${m[1]} » est utilisé deux fois`],
  // tree
  [/^(\d+) ornaments?$/, m => pl(m[1], 'décoration')],
  [/^Take all (\d+) ornaments off the tree\? This can't be undone\.$/, m => `Enlever les ${m[1]} décorations du sapin? On ne pourra pas annuler.`],
  // snowman
  [/^(\d+) of (\d+) still to go$/, m => `Encore ${m[1]} sur ${m[2]}`],
  [/^Welcome back, (.+)!$/, m => `Bon retour, ${m[1] === 'snowman' ? 'bonhomme' : m[1]}!`],
  // globe
  [/^Passport: (\d+) of (\d+) countries$/, m => `Passeport : ${m[1]} pays sur ${m[2]}`],
  [/^· ([\d\s  ,]+) km flown$/, m => `· ${m[1]} km parcourus`],
  [/^Flying to (.+)…$/, m => `En route vers : ${m[1]}…`],
  [/^Fly Santa to the country where (.+)$/, m => `Envoie le père Noël au pays où ${m[1]}`],
  [/^Yes! It’s (.+)!$/, m => `Oui! C’est : ${m[1]}!`],
  [/^Next stop: (.+)$/, m => `Prochain arrêt : ${m[1]}`],
  [/^Say it: (.+)$/, m => `Prononce : ${m[1]}`],
  [/^Santa flew about ([\d\s  ,]+) km from (.+)\.$/, m => `Le père Noël a parcouru environ ${m[1]} km depuis : ${m[2]}.`],
  [/^That’s (.+)\. Try again!$/, m => `Ça, c’est : ${m[1]}. Essaie encore!`],
  [/^Flag of (.+)$/, m => `Drapeau : ${m[1]}`],
  // sleigh
  [/^(\d+) more than (\d+)$/, m => `${m[1]} de plus que ${m[2]}`],
  [/^(\d+) fewer than (\d+)$/, m => `${m[1]} de moins que ${m[2]}`],
  [/^double (\d+)$/, m => `le double de ${m[1]}`], [/^half of (\d+)$/, m => `la moitié de ${m[1]}`], [/^(\d+) groups of (\d+)$/, m => `${m[1]} groupes de ${m[2]}`],
  [/^(.*) blocks$/, m => `${m[1]} blocs`], [/^(\d+) blocks?$/, m => pl(m[1], 'bloc')],
  [/^a right angle take away (\d+)°$/, m => `un angle droit moins ${m[1]}°`], [/^(\d+) times$/, m => `${m[1]} fois`], [/^(\d+)° more$/, m => `${m[1]}° de plus`],
  [/^The two angles add to 90°: (.*)$/, m => `Les deux angles donnent 90° : ${m[1]}`],
  [/^Angles on a straight line add to 180°: (.*)$/, m => `Les angles sur une ligne droite donnent 180° : ${m[1]}`],
  [/^A triangle's angles add to 180°: (.*)$/, m => `Les angles d’un triangle donnent 180° : ${m[1]}`],
  [/, so .* = /, m => m.input.replace(/, so /g, ', donc ').replace(/ and x = /g, ' et x = ').replace(/Ramp = /g, 'Rampe = ')],
  [/^Delivered to the (red|blue|green|yellow|purple) house!$/, m => `Livré à la maison ${({red:'rouge', blue:'bleue', green:'verte', yellow:'jaune', purple:'violette'})[m[1]]}!`],
  [/^Landed at ([\d.]+) m$/, m => `Atterri à ${m[1]} m`],
  [/^Ramp angle (\d+)°$/, m => `Angle de la rampe : ${m[1]}°`], [/^Ramp (\d+) blocks tall$/, m => `Rampe de ${m[1]} blocs de haut`],
  [/^(.+) was exactly right\.$/, m => `${T(m[1])} : c’était exactement ça.`],
  [/^(\d+)° and (\d+)° add up to 90°\. Complementary angles jump the same distance! Try (\d+)°\.$/, m => `${m[1]}° et ${m[2]}° donnent 90°. Des angles complémentaires sautent à la même distance! Essaie ${m[3]}°.`],
  [/^Close enough to land, but check the math: the answer is (.+)\.$/, m => `Assez proche pour atterrir, mais vérifie les calculs : la réponse est ${m[1]}.`],
  [/^Too short by ([\d.]+) m$/, m => `Trop court de ${m[1]} m`], [/^Too far by ([\d.]+) m$/, m => `Trop loin de ${m[1]} m`],
  [/^Question (\d+)$/, m => `Question ${m[1]}`],
  // summit
  [/^Teams: Off$/, () => 'Équipes : non'], [/^Teams: (\d+)$/, m => `Équipes : ${m[1]}`],
  [/^Item (\d+) of 3 · (\d+) steps to the cliff$/, m => `Objet ${m[1]} sur 3 · ${m[2]} marches jusqu’à la falaise`],
  [new RegExp('^⚠ Every ' + M + ' off = 1 step$'), m => `⚠ Chaque écart de ${m[1]} = 1 marche`],
  [/^Price: (.+)$/, m => `Prix : ${m[1]}`], [new RegExp('^guessed ' + M + '$'), m => `a dit ${m[1]}`], [new RegExp('^Off ' + M + '$'), m => `Écart de ${m[1]}`],
  [/^\+(\d+) steps?$/, m => '+' + pl(m[1], 'marche')], [/^Guess for (.+)$/, m => `Prix pour ${m[1]}`],
  [/^(.+): exact price!$/, m => `${T(m[1])} : prix exact!`], [/^Finished on step (\d+) of (\d+)\.$/, m => `Fini à la marche ${m[1]} sur ${m[2]}.`],
  [/^(.+) wins!$/, m => `${T(m[1])} gagne!`], [/^Fewest steps without falling: (\d+)\.$/, m => `Le moins de marches sans tomber : ${m[1]}.`],
  [/^(\d+) \/ (\d+) steps$/, m => `${m[1]} / ${m[2]} marches`], [/^Items \((\d+) in play\)$/, m => `Objets (${m[1]} en jeu)`], [new RegExp('^' + M + ' \\/ step$'), m => `${m[1]} / marche`],
  // printables
  [/^(Easy|Medium|Hard) \((\d+×\d+)\)$/, m => `${({Easy:'Facile', Medium:'Moyen', Hard:'Difficile'})[m[1]]} (${m[2]})`],
  [/^(.*?)(Word Search|Crossword)( · Answer Key)?$/, m => (m[2] === 'Word Search' ? 'Mots cachés' : 'Mots croisés') + (m[1].trim() ? ' : ' + (THEME_FR[m[1].trim()] || m[1].trim()) : '') + (m[3] ? ' · Corrigé' : '')],
  [new RegExp('^Colour by Math: (' + PICKEYS + ')( · Answer Key)?$'), m => `Coloriage magique : ${PIC[m[1]].replace(/^(le|la) /, '')}${m[2] ? ' · Corrigé' : ''}`],
  [new RegExp('^Colour the (' + PICKEYS + ')( · Answer Key)?$'), m => `Colorie ${PIC[m[1]]}${m[2] ? ' · Corrigé' : ''}`],
  [/^(.+) · Answer Key$/, m => `${m[1]} · Corrigé`],
  [/^Didn't fit: (.+)\. Try a harder level \(bigger grid\) or fewer words\.$/, m => `N’entre pas : ${m[1]}. Essaie un niveau plus difficile (grille plus grande) ou moins de mots.`],
  [/^Couldn't fit: (.+)\. Words need to share a letter with another word\. Try 🔀 New layout\.$/, m => `Impossible de placer : ${m[1]}. Les mots doivent partager une lettre avec un autre mot. Essaie 🔀 Nouvelle grille.`],
  [/^(\d+) letters$/, m => `${m[1]} lettres`], [/^Found (.+)!$/, m => `Trouvé : ${m[1]}!`], [/^(\d+) words loaded$/, m => `${m[1]} mots chargés`],
  [/^row (\d+) column (\d+)$/, m => `rangée ${m[1]}, colonne ${m[2]}`],
  // class says
  [/^(\d+) of (\d+) boards left for (.+)\.$/, m => `Il reste ${m[1]} tableaux sur ${m[2]} pour ${m[3]}.`],
  [/^Answers from (.+) · (\d+) answers$/, m => `Réponses de ${m[1]} · ${m[2]} réponses`],
  [/^(.+) buzzed in first!$/, m => `${T(m[1])} a appuyé en premier!`], [/^(.+) is playing\.$/, m => `${T(m[1])} joue.`], [/^(.+) gets ONE answer\.$/, m => `${T(m[1])} a droit à UNE réponse.`],
  [/^(.+) wins (\d+) points!$/, m => `${T(m[1])} gagne ${m[2]} points!`], [/^STOLEN! (.+) takes (\d+) points!$/, m => `VOLÉ! ${T(m[1])} prend ${m[2]} points!`],
  [/^Clean sweep! (.+) wins (\d+) points!$/, m => `Tableau complet! ${T(m[1])} gagne ${m[2]} points!`], [/^No steal! (.+) keeps (\d+) points!$/, m => `Pas de vol! ${T(m[1])} garde ${m[2]} points!`],
  [/^(Single|Double|Triple) points ×(\d)$/, m => `Points ${({Single:'simples', Double:'doubles', Triple:'triples'})[m[1]]} ×${m[2]}`],
  [/^(.+) said…$/, m => `${m[1]} a dit…`], [/^Top (\d+) answers$/, m => `Les ${m[1]} meilleures réponses`], [/^Answer (\d+)$/, m => `Réponse ${m[1]}`],
  [/^Buzz \(([A-Z]) key\)$/, m => `Buzzer (touche ${m[1]})`], [/^(\d+) answers? so far$/, m => `${pl(m[1], 'réponse')} jusqu’ici`],
  [/^The board uses the top (\d+) answers\.$/, m => `Le tableau utilise les ${m[1]} meilleures réponses.`],
  [/^Answer (\d) of 5 · Total so far:$/, m => `Réponse ${m[1]} sur 5 · Total jusqu’ici :`], [/^Question (\d) of 5$/, m => `Question ${m[1]} sur 5`],
  [/^They said: “(.*)”$/, m => `Il a dit : « ${m[1] === '(no answer)' ? '(aucune réponse)' : m[1]} »`],
  [/^(.+) earns (\d+)( \+ 100 bonus)? points\.$/, m => `${m[1]} gagne ${m[2]}${m[3] ? ' + 100 de bonus' : ''} points.`], [/^\(top answer: (.+)\)$/, m => `(meilleure réponse : ${m[1]})`],
  [/^Score (\d+) points or more to win a 100-point bonus\.$/, () => 'Fais 100 points ou plus pour gagner un bonus de 100 points.'], [/^Strikes: (\d+) · Buttons here work the smartboard\.$/, m => `Prises : ${m[1]} · Ces boutons contrôlent le TNI.`],
  [/^\((.+)\)$/, m => { const r = trCore(m[1], 1); return r === null ? null : `(${r})`; }],
  [/^(\d) teams$/, m => `${m[1]} équipes`],
  // hot takes
  [/^Take (\d+) of (\d+)$/, m => `Opinion ${m[1]} sur ${m[2]}`], [/^Other classes: (.+)$/, m => 'Autres classes : ' + m[1].replace(/(\d+)% agreed/g, '$1 % d’accord')],
  [/^\((\d+)% agreed\)$/, m => `(${m[1]} % d’accord)`], [/^(\d+)% agreed$/, m => `${m[1]} % d’accord`], [/^(\d+) s$/, m => `${m[1]} s`],
  // tune
  [/^Song (\d+) of (\d+)$/, m => `Chanson ${m[1]} sur ${m[2]}`], [/^Play (\d+) seconds$/, m => `Jouer ${m[1]} secondes`], [/^Play again \(10 s\)$/, () => 'Rejouer (10 s)'],
  [/^Who guessed it\? \(\+(\d+)\)$/, m => `Qui l’a deviné? (+${m[1]})`], [/^\+(\d+) for the (.+)!$/, m => `+${m[1]} pour les ${T(m[2])}!`],
  // freeze
  [/^Freeze like (.+)!$/, m => `Statue comme ${POSE[m[1]] || m[1]}!`], [/^Dance again in (\d+)…$/, m => `On danse dans ${m[1]}…`], [/^(\d+) seconds$/, m => `${m[1]} secondes`],
  // tier list
  [/^(\d+)\/(\d+) unwrapped · (\d+) ranked$/, m => `${m[1]}/${m[2]} déballées · ${m[3]} classées`], [/^Gift #?(\d+)$/, m => `Cadeau no ${m[1]}`],
  [/^Re-wrap all 25 gifts for "(.+)"\? This clears this class's tier list and reshuffles the songs\.$/, m => `Remballer les 25 cadeaux de « ${m[1]} »? Ça efface le palmarès de cette classe et mélange les chansons.`],
  [/^Delete "(.+)" and its tier list\?$/, m => `Supprimer « ${m[1]} » et son palmarès?`],
];

/* ---------- Text written onto 3D labels (canvas) ---------- */
const CANVAS = {'North Pole':'Pôle Nord', 'SNOWBANK':'BANC DE NEIGE', '⚠ CLIFF':'⚠ FALAISE', 'SMALL':'PETITE', 'MEDIUM':'MOYENNE', 'BIG':'GRANDE', 'small':'petite', 'medium':'moyenne', 'big':'grande'};

/* =====================================================
   ENGINE
   ===================================================== */
const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
const EDGE = /^([\s\p{Extended_Pictographic}\p{So}\p{Sm}‍️⃣]*)([\s\S]*?)([\s\p{Extended_Pictographic}\p{So}\p{Sm}‍️]*)$/u;
const SEP = /(\s{2,}|\s·\s|(?<=[.!?:])\s+(?=[A-Z#“"«(\p{Extended_Pictographic}]))/u;
function trCore(t, depth = 0){
  if (!t) return null;
  if (has(D, t)) return D[t];
  for (const [re, fn] of P){ const m = t.match(re); if (m){ const r = fn(m); if (r !== null && r !== undefined) return r; } }
  const e = t.match(EDGE);
  if (e && (e[1] || e[3]) && e[2] && e[2] !== t){ const r = trCore(e[2], depth + 1); if (r !== null) return e[1] + r + e[3]; }
  if (depth < 3){
    const parts = t.split(SEP);
    if (parts.length > 1){
      let changed = false;
      const out = parts.map((p, i) => { if (i % 2 || !p.trim()) return p; const core = p.trim(), r = trCore(core, depth + 1); if (r === null) return p; changed = true; return p.replace(core, r); });
      if (changed) return out.join('');
    }
  }
  return null;
}
function tr(s){
  if (typeof s !== 'string') return s;
  const t = s.trim(); if (!t || t.length > 600) return s;
  const r = trCore(t);
  return r === null ? s : s.replace(t, () => r);
}
const ATTRS = ['title', 'placeholder', 'aria-label', 'alt'];
const SKIP = {SCRIPT:1, STYLE:1, TEXTAREA:1};
function doText(n){ const p = n.parentNode; if (!p || SKIP[p.nodeName]) return; const v = n.nodeValue, r = tr(v); if (r !== v) n.nodeValue = r; }
function doEl(e){
  if (SKIP[e.nodeName]) return true;
  if (e.nodeName === 'H1'){ const k = e.textContent.trim(); if (has(H1, k)){ e.innerHTML = H1[k]; return true; } }
  for (const a of ATTRS) if (e.hasAttribute(a)){ const v = e.getAttribute(a), r = tr(v); if (r !== v) e.setAttribute(a, r); }
  return false;
}
function walk(n){
  if (n.nodeType === 3) return doText(n);
  if (n.nodeType !== 1) return;
  if (doEl(n)) return;
  for (let c = n.firstChild; c; c = c.nextSibling) walk(c);
}

/* pop-ups, dates, numbers and 3D labels */
if (!window.__twrFrHooks){
  window.__twrFrHooks = true;
  const oc = window.confirm, oa = window.alert, op = window.prompt;
  window.confirm = m => oc.call(window, tr(String(m)));
  window.alert = m => oa.call(window, tr(String(m)));
  window.prompt = (m, d) => op.call(window, tr(String(m)), d);
  const dl = Date.prototype.toLocaleDateString, ds = Date.prototype.toLocaleString, nl = Number.prototype.toLocaleString;
  Date.prototype.toLocaleDateString = function(l, o){ return dl.call(this, l === undefined || l === 'en-CA' ? 'fr-CA' : l, o); };
  Date.prototype.toLocaleString = function(l, o){ return ds.call(this, l === undefined || l === 'en-CA' ? 'fr-CA' : l, o); };
  Number.prototype.toLocaleString = function(l, o){ return nl.call(this, l === undefined || l === 'en-CA' ? 'fr-CA' : l, o); };
  const ct = s => typeof s !== 'string' ? s : has(CANVAS, s) ? CANVAS[s] : tr(s);
  try {
    const C2 = CanvasRenderingContext2D.prototype, ft = C2.fillText, st = C2.strokeText, mt = C2.measureText;
    C2.fillText = function(t, ...a){ return ft.call(this, ct(t), ...a); };
    C2.strokeText = function(t, ...a){ return st.call(this, ct(t), ...a); };
    C2.measureText = function(t){ return mt.call(this, ct(t)); };
  } catch(e) {}
}
function start(){
  const root = document.documentElement; if (!root) return;
  walk(root);
  new MutationObserver(recs => {
    for (const r of recs){
      if (r.type === 'characterData') doText(r.target);
      else if (r.type === 'attributes') doEl(r.target);
      else r.addedNodes.forEach(walk);
    }
  }).observe(root, {subtree:true, childList:true, characterData:true, attributes:true, attributeFilter:ATTRS});
}
window.TWR_FR = {tr, start};
start();
})();
