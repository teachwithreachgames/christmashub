/* =====================================================
   FRENCH CONTENT for the Christmas Hub (French immersion classes)
   play.html loads an activity, swaps these lists in for the English ones,
   then fr.js translates the buttons and messages.
   Each patch: [find this text, up to (but not including) this text, replace with]
   or [exact text, null, replace with].
   ===================================================== */
window.TWR_FR_DATA = (function(){
const J = JSON.stringify;

/* ---------------- WORDLE (letters only, no accents) ---------------- */
const WORDLE_DAILY = {
  elem: [
    ['NEIGE','❄️','Des flocons blancs qui tombent du ciel'], ['SAPIN','🎄','On le décore de boules et de lumières'],
    ['TUQUE','🧢','Un chapeau d’hiver bien canadien'], ['LUGE','🛷','On glisse dessus pour descendre une côte'],
    ['GANT','🧤','Il garde ta main au chaud'], ['FROID','🥶','Comment on se sent dehors en hiver'],
    ['PATIN','⛸️','Pour glisser sur la glace'], ['GLACE','🧊','De l’eau gelée'],
    ['BOTTE','👢','On la porte pour marcher dans la neige'], ['LUTIN','🧝','Un petit aide du père Noël'],
    ['RENNE','🦌','Il tire le traîneau du père Noël'], ['CLOCHE','🔔','Elle fait ding, ding, ding!'],
    ['ETOILE','⭐','On la met tout en haut du sapin (étoile)'], ['BISCUIT','🍪','On en laisse un pour le père Noël'],
    ['HIVER','🌨️','La saison la plus froide'], ['JOUET','🧸','Les lutins en fabriquent à l’atelier'],
    ['BOULE','🔴','Une décoration ronde pour le sapin'], ['LAIT','🥛','On le sert avec les biscuits du père Noël'],
    ['CHANT','🎶','Une chanson qu’on chante ensemble'], ['NORD','🧭','Le père Noël habite au pôle ___'],
    ['CADEAU','🎁','Une surprise emballée pour quelqu’un'], ['NOEL','🎅','Joyeux ___! (Noël)'],
  ],
  hs: [
    ['GIVRE','🌨️','Une fine couche de glace sur les fenêtres'], ['FLOCON','❄️','Il n’y en a jamais deux pareils'],
    ['MITAINE','🧤','Un gant sans doigts séparés'], ['MANTEAU','🧥','On l’enfile avant de sortir'],
    ['VERGLAS','🧊','De la pluie qui gèle sur la route'], ['TEMPETE','🌬️','Beaucoup de neige et de vent (tempête)'],
    ['HOUX','🌿','Feuilles piquantes et petits fruits rouges'], ['BOUGIE','🕯️','De la cire et une mèche'],
    ['RUBAN','🎀','On en fait une boucle sur un cadeau'], ['AVENT','📅','Un calendrier avec de petites portes'],
    ['CANNELLE','🫚','Une épice brune au goût sucré'], ['MUSCADE','🌰','Une épice qu’on râpe sur le lait de poule'],
    ['CHORALE','🎤','Un groupe qui chante ensemble'], ['ENNEIGE','🏔️','Couvert de neige (enneigé)'],
    ['CANTIQUE','🎶','Un chant de Noël traditionnel'], ['EMBALLER','🎁','Mettre du papier autour d’un cadeau'],
    ['GRINCH','💚','Il a voulu voler Noël'], ['COMETE','☄️','Un renne… et un objet glacé dans l’espace (comète)'],
    ['ETRENNE','🎁','Un cadeau du Nouvel An (étrenne)'], ['CHEMINEE','🧦','On y accroche les bas de Noël (cheminée)'],
    ['BUCHE','🪵','Un gâteau roulé en forme de bout de bois (bûche)'], ['TRAINEAU','🛷','Le véhicule du père Noël (traîneau)'],
  ],
};
const WORDLE_UNL = {
  elem: [
    ['BAS','🧦','On l’accroche à la cheminée'], ['CARTE','💌','On y écrit un message de fête'],
    ['NEZ','👃','Celui de Rodolphe est rouge'], ['CHOCOLAT','🍫','Une gâterie brune et sucrée'],
    ['GATEAU','🍰','Un dessert pour une fête (gâteau)'], ['BONBON','🍬','Une petite sucrerie'],
    ['FEU','🔥','Il crépite dans le foyer'], ['ARBRE','🌲','Le sapin en est un'],
    ['PIN','🌲','Un arbre avec des aiguilles'], ['ROUGE','🟥','La couleur du manteau du père Noël'],
    ['VERT','🟩','La couleur du sapin'], ['BLANC','⬜','La couleur de la neige'],
    ['NUIT','🌙','Le père Noël voyage pendant la ___'], ['LUNE','🌙','Elle brille dans le ciel la nuit'],
    ['MAISON','🏠','L’endroit où on habite'], ['FAMILLE','👨‍👩‍👧','Les gens avec qui on fête'],
    ['AMI','🤝','Quelqu’un avec qui on aime jouer'], ['RIRE','😄','Ce qu’on fait quand c’est drôle'],
    ['MAGIE','✨','Le traîneau vole grâce à la ___'], ['CONTE','📖','Une histoire qu’on lit avant de dormir'],
    ['CABANE','🏡','Une petite maison en bois'], ['ORIGNAL','🫎','Un gros animal canadien avec des panaches'],
    ['OURS','🐻','Il dort tout l’hiver'], ['HIBOU','🦉','Un oiseau qui hulule la nuit'],
    ['RENARD','🦊','Un animal rusé à la queue touffue'], ['PINGOUIN','🐧','Un oiseau noir et blanc qui aime le froid'],
    ['LAINE','🧶','On l’utilise pour tricoter une tuque'], ['SKI','🎿','On en fait sur les pentes enneigées'],
    ['DANSE','💃','On bouge au son de la musique'], ['MUSIQUE','🎵','Les chants de Noël en sont'],
    ['TAMBOUR','🥁','Un instrument qui fait boum boum'], ['SOURIRE','😊','Ce que fait ton visage quand tu es content'],
    ['PAIX','🕊️','Le calme, sans chicane'],
  ],
  hs: [
    ['FESTIN','🍗','Un énorme repas de fête'], ['EPICE','🫚','Cannelle, muscade ou clou de girofle (épice)'],
    ['CARAMEL','🍬','Du sucre fondu et doré'], ['FRIMAS','🌨️','Brouillard givrant de l’hiver (mot poétique)'],
    ['BLIZZARD','🌬️','Tempête de neige avec des vents violents'], ['GLISSADE','🛷','On en fait sur une butte enneigée'],
    ['HOCKEY','🏒','Le sport d’hiver du Canada'], ['GARDIEN','🥅','Il arrête les rondelles'],
    ['RONDELLE','⚫','On la lance dans le filet'], ['CHALET','🏠','Une maison de vacances à la campagne'],
    ['PISTE','⛷️','Un chemin pour descendre en ski'], ['TELESKI','🚡','Il te tire jusqu’en haut de la pente (téléski)'],
    ['BOREAL','🌲','Qui vient du Nord : la forêt ___ (boréale)'], ['TOUNDRA','🏔️','Une plaine gelée sans arbres'],
    ['AURORE','🌌','___ boréale : des lumières dans le ciel'], ['POLAIRE','🐻‍❄️','L’ours ___'],
    ['BANQUISE','🧊','De la mer gelée près du pôle'], ['IGLOO','🏠','Une maison faite de blocs de neige'],
    ['CASTOR','🦫','Il construit des barrages'], ['CARIBOU','🦌','Le cousin sauvage du renne'],
    ['HARFANG','🦉','Le ___ des neiges, oiseau emblème du Québec'], ['ERABLE','🍁','L’arbre qui donne le sirop (érable)'],
    ['SIROP','🥞','Celui d’érable est délicieux'], ['NOISETTE','🌰','Casse-___ (le ballet)'],
    ['AMANDE','🌰','Une noix ovale'], ['LATKES','🥔','Galettes de pommes de terre de Hanoukka'],
    ['BALLET','🩰','Casse-Noisette en est un'], ['CLARA','🩰','La fille dans Casse-Noisette'],
    ['KEVIN','🏠','Le garçon dans Maman, j’ai raté l’avion!'], ['SCROOGE','👻','L’avare dans Un chant de Noël'],
    ['MARLEY','👻','Le fantôme de l’ancien associé de Scrooge'], ['VOEUX','🥂','On les offre au jour de l’An (vœux)'],
    ['BONHEUR','😊','Une grande joie'], ['MINUIT','🕛','L’heure du réveillon'],
    ['DECEMBRE','📅','Le mois de Noël (décembre)'], ['JANVIER','📅','Le premier mois de l’année'],
    ['SOLSTICE','🌑','La nuit la plus longue de l’année'],
  ],
};

/* ---------------- CONNECTIONS ---------------- */
const CONN_DAILY = {
  elem: [
    [['Animaux de la ferme',0,[['Vache','🐄'],['Cochon','🐖'],['Cheval','🐴'],['Mouton','🐑']]], ['Gâteries de Noël',1,[['Canne en bonbon','🍭'],['Pain d’épices','🍪'],['Fudge','🍫'],['Chocolat chaud','☕']]], ['Dans le ciel la nuit',2,[['Lune','🌙'],['Étoile','⭐'],['Planète','🪐'],['Comète','☄️']]], ['Vêtements d’hiver',3,[['Mitaines','🧤'],['Foulard','🧣'],['Tuque','🧢'],['Bottes','👢']]]],
    [['Fruits',0,[['Pomme','🍎'],['Banane','🍌'],['Raisins','🍇'],['Orange','🍊']]], ['L’équipe du père Noël',1,[['Père Noël','🎅'],['Lutin','🧝'],['Renne','🦌'],['Mère Noël','🤶']]], ['Choses avec des roues',2,[['Auto','🚗'],['Vélo','🚲'],['Autobus','🚌'],['Camion','🚚']]], ['Un jour de neige',3,[['Luge','🛷'],['Bonhomme de neige','⛄'],['Ange de neige','👼'],['Fort de neige','🏰']]]],
    [['Couleurs',0,[['Rouge','🟥'],['Bleu','🟦'],['Vert','🟩'],['Violet','🟪']]], ['Instruments',1,[['Tambour','🥁'],['Guitare','🎸'],['Piano','🎹'],['Violon','🎻']]], ['Animaux de l’océan',2,[['Baleine','🐳'],['Requin','🦈'],['Pieuvre','🐙'],['Crabe','🦀']]], ['Dans le sapin',3,[['Lumières','💡'],['Glaçons','✨'],['Boule','🎄'],['Guirlande','🌿']]]],
    [['Formes',0,[['Cercle','🔵'],['Carré','🟧'],['Triangle','🔺'],['Cœur','❤️']]], ['Animaux de compagnie',1,[['Chien','🐶'],['Chat','🐱'],['Poisson','🐠'],['Hamster','🐹']]], ['Brrr, c’est froid!',2,[['Glaçon','🧊'],['Flocon','❄️'],['Crème glacée','🍦'],['Congélateur','🥶']]], ['Au déjeuner',3,[['Crêpes','🥞'],['Céréales','🥣'],['Œufs','🍳'],['Rôties','🍞']]]],
    [['Parties du corps',0,[['Nez','👃'],['Oreille','👂'],['Main','✋'],['Pied','🦶']]], ['Insectes',1,[['Coccinelle','🐞'],['Abeille','🐝'],['Fourmi','🐜'],['Papillon','🦋']]], ['Le père Noël apporte',2,[['Cadeaux','🎁'],['Jouets','🧸'],['Bonbons','🍬'],['Charbon','⚫']]], ['La météo',3,[['Ensoleillé','☀️'],['Pluvieux','🌧️'],['Venteux','💨'],['Neigeux','🌨️']]]],
    [['Légumes',0,[['Carotte','🥕'],['Maïs','🌽'],['Brocoli','🥦'],['Patate','🥔']]], ['Ballons de sport',1,[['Soccer','⚽'],['Basketball','🏀'],['Football','🏈'],['Baseball','⚾']]], ['Ça brille',2,[['Chandelle','🕯️'],['Feu','🔥'],['Lampe','💡'],['Lampe de poche','🔦']]], ['Le monde du père Noël',3,[['Pôle Nord','🧭'],['Atelier','🔨'],['Traîneau','🛷'],['Cheminée','🏠']]]],
    [['Animaux de la jungle',0,[['Lion','🦁'],['Tigre','🐯'],['Singe','🐒'],['Éléphant','🐘']]], ['Pour écrire',1,[['Crayon','✏️'],['Crayon de cire','🖍️'],['Marqueur','🖊️'],['Stylo','🖋️']]], ['Desserts',2,[['Gâteau','🍰'],['Tarte','🥧'],['Petit gâteau','🧁'],['Beigne','🍩']]], ['Sports d’hiver',3,[['Hockey','🏒'],['Ski','⛷️'],['Patin','⛸️'],['Curling','🥌']]]],
    [['Dans la classe',0,[['Pupitre','🪑'],['Livre','📕'],['Règle','📏'],['Sac à dos','🎒']]], ['Oiseaux',1,[['Hibou','🦉'],['Pingouin','🐧'],['Canard','🦆'],['Aigle','🦅']]], ['Ça sonne',2,[['Cloche','🔔'],['Téléphone','📱'],['Réveille-matin','⏰'],['Sonnette','🚪']]], ['Boissons',3,[['Lait','🥛'],['Jus','🧃'],['Eau','💧'],['Chocolat chaud','☕']]]],
    [['Fruits rouges',0,[['Fraise','🍓'],['Cerise','🍒'],['Pomme','🍎'],['Melon d’eau','🍉']]], ['Emballer un cadeau',1,[['Papier','📄'],['Ruban','🎀'],['Étiquette','🏷️'],['Boîte','📦']]], ['L’espace',2,[['Fusée','🚀'],['Astronaute','🧑‍🚀'],['Planète','🪐'],['Extraterrestre','👽']]], ['Émotions',3,[['Content','😀'],['Triste','😢'],['Fâché','😠'],['Fatigué','😴']]]],
    [['Le bonhomme de neige',0,[['Charbon','⚫'],['Haut-de-forme','🎩'],['Foulard','🧣'],['Boutons','🔘']]], ['Ça vole',1,[['Avion','✈️'],['Hélicoptère','🚁'],['Montgolfière','🎈'],['Fusée','🚀']]], ['Dans la cuisine',2,[['Cuillère','🥄'],['Fourchette','🍴'],['Bol','🥣'],['Chaudron','🍲']]], ['Bébés animaux',3,[['Chiot','🐶'],['Chaton','🐱'],['Poussin','🐥'],['Veau','🐮']]]],
    [['Sucreries',0,[['Bonbon','🍬'],['Suçon','🍭'],['Chocolat','🍫'],['Biscuit','🍪']]], ['Dans tes pieds',1,[['Bas','🧦'],['Bottes','👢'],['Espadrilles','👟'],['Pantoufles','🥿']]], ['Jouets',2,[['Ourson','🧸'],['Yo-yo','🪀'],['Blocs','🧱'],['Robot','🤖']]], ['Animaux qui volent',3,[['Oiseau','🐦'],['Abeille','🐝'],['Chauve-souris','🦇'],['Papillon','🦋']]]],
    [['Choses rayées',0,[['Zèbre','🦓'],['Canne en bonbon','🍭'],['Tigre','🐯'],['Poteau de barbier','💈']]], ['Glisser sur la neige',1,[['Luge','🛷'],['Skis','🎿'],['Patins','⛸️'],['Planche à neige','🏂']]], ['Au déjeuner',2,[['Gaufres','🧇'],['Bacon','🥓'],['Œufs','🍳'],['Bagel','🥯']]], ['Instruments',3,[['Trompette','🎺'],['Tambour','🥁'],['Saxophone','🎷'],['Banjo','🪕']]]],
    [['Couleurs de l’arc-en-ciel',0,[['Rouge','🟥'],['Orange','🟧'],['Jaune','🟨'],['Vert','🟩']]], ['Animaux de l’étang',1,[['Grenouille','🐸'],['Canard','🦆'],['Poisson','🐟'],['Tortue','🐢']]], ['Fête d’anniversaire',2,[['Ballon','🎈'],['Gâteau','🎂'],['Cadeau','🎁'],['Bougies','🕯️']]], ['Outils',3,[['Marteau','🔨'],['Scie','🪚'],['Clé','🔧'],['Tournevis','🪛']]]],
    [['Choses blanches',0,[['Neige','❄️'],['Lait','🥛'],['Nuage','☁️'],['Ours polaire','🐻‍❄️']]], ['Choses vertes',1,[['Grenouille','🐸'],['Sapin','🎄'],['Feuille','🍃'],['Brocoli','🥦']]], ['Choses jaunes',2,[['Soleil','☀️'],['Banane','🍌'],['Citron','🍋'],['Poussin','🐥']]], ['Choses rouges',3,[['Fraise','🍓'],['Camion de pompiers','🚒'],['Rose','🌹'],['Pomme','🍎']]]],
    [['Créatures de la mer',0,[['Dauphin','🐬'],['Méduse','🪼'],['Baleine','🐋'],['Crevette','🦐']]], ['Météo d’hiver',1,[['Blizzard','🌨️'],['Givre','❄️'],['Glaçon','🧊'],['Sloche','💧']]], ['Repas des fêtes',2,[['Dinde','🦃'],['Jambon','🍖'],['Patates','🥔'],['Tarte','🥧']]], ['À l’aréna',3,[['Rondelle','🏒'],['Filet','🥅'],['Patins','⛸️'],['Zamboni','🚜']]]],
    [['Contes de fées',0,[['Dragon','🐉'],['Licorne','🦄'],['Château','🏰'],['Couronne','👑']]], ['Ça pousse dans les arbres',1,[['Pomme','🍎'],['Noix de coco','🥥'],['Feuilles','🍂'],['Cocotte','🌲']]], ['Jours de la semaine',2,[['Lundi','📅'],['Mardi','📅'],['Vendredi','📅'],['Dimanche','📅']]], ['Façons de bouger',3,[['Courir','🏃'],['Sauter','🦘'],['Nager','🏊'],['Danser','💃']]]],
    [['Saveurs de crème glacée',0,[['Vanille','🍦'],['Chocolat','🍫'],['Fraise','🍓'],['Menthe','🌿']]], ['Saisons',1,[['Hiver','❄️'],['Printemps','🌷'],['Été','☀️'],['Automne','🍂']]], ['À la plage',2,[['Sable','🏖️'],['Coquillage','🐚'],['Vagues','🌊'],['Crème solaire','🧴']]], ['Choses douces',3,[['Ourson','🧸'],['Plume','🪶'],['Lapin','🐰'],['Nuage','☁️']]]],
    [['Nombres',0,[['Un','1️⃣'],['Cinq','5️⃣'],['Dix','🔟'],['Cent','💯']]], ['Dans la salle de bain',1,[['Brosse à dents','🪥'],['Savon','🧼'],['Bain','🛁'],['Toilette','🚽']]], ['Ça tinte',2,[['Clochettes','🔔'],['Clés','🔑'],['Pièces','🪙'],['Bracelet','📿']]], ['Animaux de l’Arctique',3,[['Ours polaire','🐻‍❄️'],['Morse','🦭'],['Renard arctique','🦊'],['Harfang','🦉']]]],
    [['Planètes',0,[['Terre','🌍'],['Mars','🔴'],['Jupiter','🪐'],['Saturne','🪐']]], ['On les cuit au four',1,[['Biscuits','🍪'],['Pain','🍞'],['Tarte','🥧'],['Muffins','🧁']]], ['Sortes d’arbres',2,[['Pin','🌲'],['Érable','🍁'],['Palmier','🌴'],['Chêne','🌳']]], ['Choses chaudes',3,[['Feu','🔥'],['Soupe','🍲'],['Piment','🌶️'],['Lave','🌋']]]],
    [['Très canadien',0,[['Feuille d’érable','🍁'],['Orignal','🫎'],['Castor','🦫'],['Hockey','🏒']]], ['Décorations',1,[['Lumières','💡'],['Couronne','🌿'],['Bas de Noël','🧦'],['Glaçons','✨']]], ['Dans un coffre à crayons',2,[['Crayon','✏️'],['Règle','📏'],['Ciseaux','✂️'],['Colle','🧴']]], ['Garnitures de pizza',3,[['Fromage','🧀'],['Pepperoni','🍕'],['Champignons','🍄'],['Olives','🫒']]]],
    [['Sur l’eau',0,[['Bateau','⛵'],['Canot','🛶'],['Navire','🚢'],['Traversier','⛴️']]], ['Animaux qui sautent',1,[['Lapin','🐰'],['Grenouille','🐸'],['Kangourou','🦘'],['Sauterelle','🦗']]], ['Sur un gâteau',2,[['Bougies','🕯️'],['Glaçage','🧁'],['Vermicelles','✨'],['Cerise','🍒']]], ['Symboles de Noël',3,[['Tuque du père Noël','🎅'],['Flocon','❄️'],['Renne','🦌'],['Cadeau','🎁']]]],
    [['Choses rondes',0,[['Ballon','⚽'],['Roue','🛞'],['Pièce','🪙'],['Pizza','🍕']]], ['L’heure du dodo',1,[['Pyjama','👕'],['Lit','🛏️'],['Brosse à dents','🪥'],['Livre d’histoires','📖']]], ['À la ferme',2,[['Tracteur','🚜'],['Grange','🏠'],['Foin','🌾'],['Coq','🐓']]], ['Sur un chocolat chaud',3,[['Guimauves','☁️'],['Crème fouettée','🍦'],['Vermicelles','✨'],['Canne en bonbon','🍭']]]],
  ],
  hs: [
    [['Dans le foyer',0,['Bûches','Cendres','Braises','Allume-feu']], ['Arbres',1,['Chêne','Bouleau','Cèdre','Sapin']], ['Jeux de cartes',2,['Poker','Rami','Bataille','Euchre']], ['Cache un animal',3,['Château','Porcelaine','Loupe','Coquelicot']]],
    [['Façons de cuire',0,['Rôtir','Griller','Bouillir','Frire']], ['Personnages de films de Noël',1,['Kevin','Buddy','Grinch','Ralphie']], ['Prénoms de superhéros',2,['Bruce','Peter','Diana','Tony']], ['Cache un nombre',3,['Bronze','Huître','Accent','Septembre']]],
    [['Sur un bonhomme de neige',0,['Carotte','Charbon','Foulard','Chapeau']], ['Choses orange',1,['Citrouille','Mandarine','Cône','Poisson rouge']], ['Films de Pixar',2,['Là-haut','Coco','Rebelle','Wall-E']], ['Tour de ___',3,['Magie','Cartes','Taille','Force']]],
    [['Positions au hockey',0,['Gardien','Défenseur','Centre','Ailier']], ['Équipes de la LNH',1,['Canadiens','Flames','Oilers','Jets']], ['Parties d’un pin',2,['Branche','Aiguille','Cocotte','Écorce']], ['Boule de ___',3,['Neige','Gomme','Cristal','Billard']]],
    [['Goût de menthe',0,['Dentifrice','Canne en bonbon','Gomme','Rince-bouche']], ['Choses rayées',1,['Zèbre','Arbitre','Tigre','Poteau de barbier']], ['Début d’un chant de Noël',2,['Vive','Petit','Mon beau','Douce']], ['Ça éclate',3,['Maïs soufflé','Ballon','Bulle','Pétard']]],
    [['Dans un jeu de cartes',0,['As','Roi','Dame','Valet']], ['Pièces d’échecs',1,['Fou','Cavalier','Tour','Pion']], ['On les achète surgelés',2,['Pois','Pizza','Yogourt','Frites']], ['___ de mer',3,['Étoile','Fruits','Mal','Lion']]],
    [['Pâtes',0,['Penne','Rigatoni','Fusilli','Linguine']], ['Tenue de soirée',1,['Smoking','Robe longue','Nœud papillon','Boutons de manchette']], ['Sur un cadeau',2,['Ruban','Étiquette','Boucle','Papier']], ['Nuances de blanc',3,['Ivoire','Perle','Neige','Crème']]],
    [['Ça fond',0,['Glace','Beurre','Chocolat','Bonhomme de neige']], ['Sur une rôtie',1,['Confiture','Miel','Nutella','Beurre d’arachide']], ['A un bouchon',2,['Bouteille','Stylo','Dentifrice','Thermos']], ['Ours célèbres',3,['Paddington','Winnie','Baloo','Yogi']]],
    [['Odeurs des fêtes',0,['Cannelle','Menthe poivrée','Vanille','Pain d’épices']], ['Noix',1,['Noix de Grenoble','Pacane','Amande','Cajou']], ['Pomme de ___',2,['Pin','Terre','Discorde','Douche']], ['Coquille d’/de ___',3,['Œuf','Noisette','Escargot','Moule']]],
    [['« Noël » dans d’autres langues',0,['Christmas','Navidad','Natale','Weihnachten']], ['Le 31 décembre',1,['Décompte','Résolution','Feux d’artifice','Confettis']], ['Ça peut sonner',2,['Réveil','Minuterie','Cloche','Téléphone']], ['Cache le mot « mer »',3,['Merci','Amérique','Fermer','Mercredi']]],
    [['On glisse dessus',0,['Luge','Toboggan','Planche à neige','Skis']], ['Au curling',1,['Pierre','Balai','Maison','Bloc de départ']], ['À une sorcière',2,['Chapeau pointu','Chat noir','Chaudron','Baguette']], ['___ de nuit',3,['Table','Chemise','Boîte','Oiseau']]],
    [['Desserts des fêtes',0,['Bûche','Tarte au sucre','Pouding chômeur','Beignes']], ['Personnages de Snoopy',1,['Charlie Brown','Linus','Lucy','Woodstock']], ['Parties d’un piano',2,['Touches','Pédale','Marteau','Corde']], ['Rime avec « neige »',3,['Beige','Liège','Piège','Siège']]],
    [['Trousse d’urgence d’hiver',0,['Lampe de poche','Couverture','Pelle','Chandelle']], ['Fantômes dans Un chant de Noël',1,['Passé','Présent','Futur','Marley']], ['Un autre mot pour « cadeau »',2,['Don','Offrande','Étrenne','Surprise']], ['___ d’anniversaire',3,['Fête','Carte','Bougie','Gâteau']]],
    [['Animaux de compagnie',0,['Chien','Chat','Hamster','Poisson rouge']], ['Boissons chaudes',1,['Café','Thé','Chocolat','Cidre']], ['Cabane à ___',2,['Sucre','Pêche','Oiseaux','Bois']], ['Pot de ___',3,['Fleurs','Confiture','Colle','Peinture']]],
    [['Dans un bas de Noël',0,['Orange','Bonbons','Chocolats','Brosse à dents']], ['Fruits',1,['Pomme','Poire','Mangue','Kiwi']], ['Marques d’ordinateurs',2,['Dell','HP','Lenovo','Acer']], ['Nuances de violet',3,['Lavande','Lilas','Mauve','Prune']]],
    [['Conifères',0,['Sapin','Épinette','Pin','Pruche']], ['Ont des aiguilles',1,['Cactus','Boussole','Porc-épic','Horloge']], ['Chandails',2,['Cardigan','Coton ouaté','Col roulé','Pull']], ['Tortues Ninja',3,['Leonardo','Raphael','Donatello','Michelangelo']]],
    [['Grignotines',0,['Bretzels','Croustilles','Nachos','Craquelins']], ['On les enfile pour le sapin',1,['Maïs soufflé','Canneberges','Lumières','Perles']], ['Parties d’un ordinateur',2,['Souris','Clavier','Écran','Haut-parleur']], ['___ noir',3,['Trou','Chat','Tableau','Mouton']]],
    [['Sur un chandail de Noël laid',0,['Renne','Pompon','Paillettes','Flocons']], ['Personnages de Casse-Noisette',1,['Clara','Fritz','Drosselmeyer','Roi des souris']], ['Mots du ballet',2,['Plié','Pirouette','Tutu','Pointe']], ['Ça scintille',3,['Diadème','Diamant','Boule disco','Cristal']]],
    [['Pour monter',0,['Escalier mécanique','Échelle','Escalier','Ascenseur']], ['Petites maisons',1,['Chalet','Cabane','Bungalow','Hutte']], ['Grands patrons',2,['PDG','Magnat','Directrice','Présidente']], ['Mots de ski',3,['Pente','Remonte-pente','Bosse','Piste']]],
    [['Maison en pain d’épices',0,['Toit','Porte','Cheminée','Murs']], ['Systèmes d’exploitation',1,['Windows','Linux','Android','iOS']], ['Coup de ___',2,['Foudre','Main','Soleil','Fil']], ['___ sur glace',3,['Hockey','Danse','Pêche','Course']]],
    [['Hanoukka',0,['Toupie','Menorah','Latkes','Gelt']], ['Ça tourne',1,['Roue','Globe','Tornade','Manège']], ['Plats de patates',2,['Frites','Poutine','Gnocchis','Pâté chinois']], ['Chocolat ___',3,['Chaud','Noir','Blanc','Au lait']]],
    [['Personnages du Dr Seuss',0,['Grinch','Lorax','Horton','Yertle']], ['Choses vertes',1,['Lime','Émeraude','Trèfle','Kermit']], ['Muppets',2,['Gonzo','Fozzie','Animal','Beaker']], ['Éléphants célèbres',3,['Dumbo','Babar','Jumbo','Elmer']]],
  ],
};
const CONN_UNL = {
  easy: [
    [['Vêtements d’hiver',0,[['Mitaines','🧤'],['Foulard','🧣'],['Tuque','🧢']]], ['Dans le sapin',1,[['Étoile','⭐'],['Boule','🔴'],['Glaçons','✨']]], ['Gâteries',2,[['Biscuit','🍪'],['Canne en bonbon','🍭'],['Chocolat chaud','☕']]]],
    [['Animaux du froid',0,[['Renne','🦌'],['Pingouin','🐧'],['Ours polaire','🐻‍❄️']]], ['Choses blanches',1,[['Neige','❄️'],['Lait','🥛'],['Nuage','☁️']]], ['Le monde du père Noël',2,[['Traîneau','🛷'],['Lutins','🧝'],['Pôle Nord','🧭']]]],
    [['Faire de la musique',0,[['Cloche','🔔'],['Tambour','🥁'],['Trompette','🎺']]], ['Choses froides',1,[['Glaçon','🧊'],['Boule de neige','⚪'],['Crème glacée','🍦']]], ['Ça brille',2,[['Chandelle','🕯️'],['Lumières','💡'],['Feu','🔥']]]],
    [['Couleurs de Noël',0,[['Rouge','🟥'],['Vert','🟩'],['Or','🟨']]], ['Dans le ciel la nuit',1,[['Lune','🌙'],['Étoile','⭐'],['Nuage','☁️']]], ['Sur la neige et la glace',2,[['Luge','🛷'],['Skis','🎿'],['Patins','⛸️']]]],
    [['Le bonhomme de neige',0,[['Carotte','🥕'],['Charbon','⚫'],['Haut-de-forme','🎩']]], ['Dans un bas de Noël',1,[['Orange','🍊'],['Bonbon','🍬'],['Jouet','🧸']]], ['Près du foyer',2,[['Bûches','🪵'],['Flammes','🔥'],['Cheminée','🏠']]]],
    [['Desserts',0,[['Gâteau','🍰'],['Fudge','🍫'],['Tarte','🥧']]], ['L’équipe du père Noël',1,[['Lutin','🧝'],['Renne','🦌'],['Mère Noël','🤶']]], ['Emballer un cadeau',2,[['Papier','📄'],['Ciseaux','✂️'],['Ruban','🎀']]]],
    [['Ça tombe',0,[['Neige','❄️'],['Feuilles','🍂'],['Pluie','🌧️']]], ['Sports d’hiver',1,[['Hockey','🏒'],['Ski','⛷️'],['Curling','🥌']]], ['Boissons chaudes',2,[['Chocolat chaud','☕'],['Cidre','🍎'],['Thé','🍵']]]],
    [['Ça éclaire',0,[['Étoile','⭐'],['Soleil','☀️'],['Lampe','💡']]], ['Animaux de la forêt',1,[['Hibou','🦉'],['Renard','🦊'],['Lapin','🐇']]], ['On les cuit au four',2,[['Pain','🍞'],['Biscuits','🍪'],['Muffins','🧁']]]],
  ],
  harder: [
    [['Vêtements d’hiver',0,[['Mitaines','🧤'],['Foulard','🧣'],['Tuque','🧢'],['Bottes','👢']]], ['Dans le sapin',1,[['Étoile','⭐'],['Lumières','💡'],['Glaçons','✨'],['Boule','🔴']]], ['Gâteries',2,[['Biscuit','🍪'],['Canne en bonbon','🍭'],['Fudge','🍫'],['Chocolat chaud','☕']]], ['Animaux du froid',3,[['Pingouin','🐧'],['Ours polaire','🐻‍❄️'],['Phoque','🦭'],['Renne','🦌']]]],
    [['Faire de la musique',0,[['Cloche','🔔'],['Tambour','🥁'],['Piano','🎹'],['Guitare','🎸']]], ['Sports d’hiver',1,[['Hockey','🏒'],['Ski','⛷️'],['Patin','⛸️'],['Glissade','🛷']]], ['Le bonhomme de neige',2,[['Carotte','🥕'],['Charbon','⚫'],['Boutons','🔘'],['Chapeau','🎩']]], ['Ça brille',3,[['Chandelle','🕯️'],['Feu','🔥'],['Lampe','💡'],['Lune','🌙']]]],
    [['Couleurs',0,[['Rouge','🟥'],['Vert','🟩'],['Or','🟨'],['Blanc','⬜']]], ['Météo d’hiver',1,[['Neige','❄️'],['Vent','💨'],['Glace','🧊'],['Brouillard','🌫️']]], ['Le monde du père Noël',2,[['Traîneau','🛷'],['Lutin','🧝'],['Atelier','🔨'],['Pôle Nord','🧭']]], ['Formes',3,[['Cercle','🔵'],['Étoile','⭐'],['Cœur','💜'],['Triangle','🔺']]]],
    [['Animaux de la forêt',0,[['Hibou','🦉'],['Renard','🦊'],['Orignal','🫎'],['Ours','🐻']]], ['On les cuit au four',1,[['Pain','🍞'],['Tarte','🥧'],['Muffin','🧁'],['Gâteau','🍰']]], ['Dans un bas de Noël',2,[['Orange','🍊'],['Jouet','🧸'],['Livre','📚'],['Crayons','🖍️']]], ['Près du foyer',3,[['Bûches','🪵'],['Flammes','🔥'],['Cheminée','🏠'],['Bas de Noël','🧦']]]],
    [['Boissons',0,[['Lait','🥛'],['Jus','🧃'],['Chocolat chaud','☕'],['Cidre','🍎']]], ['Emballer un cadeau',1,[['Papier','📄'],['Ruban','🎀'],['Étiquette','🏷️'],['Ciseaux','✂️']]], ['Dans le ciel',2,[['Lune','🌙'],['Étoile','⭐'],['Nuage','☁️'],['Soleil','☀️']]], ['Émotions',3,[['Content','😀'],['Excité','🤩'],['Fatigué','😴'],['Rigolo','🤪']]]],
    [['Jouets',0,[['Ourson','🧸'],['Robot','🤖'],['Ballon','⚽'],['Blocs','🧱']]], ['Un jour de neige',1,[['Boule de neige','❄️'],['Fort de neige','🏰'],['Ange de neige','👼'],['Bonhomme de neige','⛄']]], ['Dans la cuisine',2,[['Four','🍳'],['Cuillère','🥄'],['Bol','🥣'],['Fourchette','🍴']]], ['Façons de voyager',3,[['Auto','🚗'],['Train','🚂'],['Avion','✈️'],['Traîneau','🛷']]]],
  ],
  hs: [
    [['Rennes du père Noël',0,['Tonnerre','Éclair','Comète','Furie']], ['Dans l’espace',1,['Fusée','Lune','Galaxie','Astéroïde']], ['___ de Noël',2,['Arbre','Carte','Chant','Veille']], ['___ de neige',3,['Bonhomme','Boule','Banc','Ange']]],
    [['Vêtements d’hiver',0,['Tuque','Parka','Mitaine','Cache-cou']], ['Sucreries des fêtes',1,['Fudge','Caramel','Nougat','Sucre à la crème']], ['Gâteau ___',2,['Forêt-noire','Aux carottes','Renversé','Au fromage']], ['On peut les casser',3,['Noix','Œuf','Glace','Tête']]],
    [['Animaux de l’Arctique',0,['Morse','Narval','Caribou','Lemming']], ['Sur une maison en pain d’épices',1,['Jujube','Glaçage','Canne en bonbon','Réglisse']], ['Premier mot d’un film des fêtes',2,['Maman','Le Pôle','Miracle','Elfe']], ['Ballon de ___',3,['Soccer','Plage','Basket','Rugby']]],
    [['Dans un sapin de Noël',0,['Boule','Guirlande','Glaçons','Étoile']], ['Rennes du père Noël',1,['Cupidon','Danseur','Fringant','Rodolphe']], ['Saint-Valentin',2,['Rose','Cœur','Flèche','Chocolat']], ['Lampe de/à ___',3,['Poche','Chevet','Bureau','Lave']]],
    [['Boissons des fêtes',0,['Lait de poule','Cidre','Chocolat chaud','Punch']], ['Épices',1,['Muscade','Clou de girofle','Cannelle','Gingembre']], ['Un chant de Noël (Dickens)',2,['Scrooge','Marley','Tiny Tim','Fezziwig']], ['Pain ___',3,['Doré','Blanc','Brun','Tranché']]],
    [['À l’aréna',0,['Zamboni','Rondelle','Patin','Bande']], ['Jeux de société',1,['Monopoly','Clue','Risk','Scrabble']], ['Carnaval de Québec',2,['Bonhomme','Caribou','Ceinture fléchée','Bain de neige']], ['___ de bain',3,['Salle','Maillot','Bombe','Sel']]],
    [['Choses rouges',0,['Poinsettia','Canneberge','Rubis','Camion de pompiers']], ['Les douze jours de Noël',1,['Perdrix','Cygnes','Oies','Tambours']], ['Oiseaux de nos cours',2,['Merle','Cardinal','Geai bleu','Mésange']], ['Ça tinte',3,['Clés','Pièces','Clochettes','Grelots']]],
    [['Fêtes d’hiver',0,['Hanoukka','Kwanzaa','Solstice','Lendemain de Noël']], ['Nuances de vert',1,['Émeraude','Jade','Menthe','Forêt']], ['Biscuits des fêtes',2,['Sablé','Biscotti','Macaron','Pain d’épices']], ['Arbre ___',3,['Généalogique','Fruitier','Magique','Creux']]],
    [['Météo d’hiver',0,['Blizzard','Poudrerie','Grésil','Rafale']], ['Instruments',1,['Harpe','Flûte','Tuba','Banjo']], ['Plantes des fêtes',2,['Houx','Lierre','Gui','Amaryllis']], ['Casse-___',3,['Noisette','Tête','Croûte','Cou']]],
    [['Pour emballer',0,['Ruban adhésif','Ruban','Étiquette','Papier']], ['Tir à l’arc',1,['Flèche','Cible','Carquois','Arc']], ['Au déjeuner',2,['Gaufre','Crêpe','Bagel','Céréales']], ['Lever le/la ___',3,['Main','Coude','Pied','Rideau']]],
  ],
};

/* ---------------- GLOBE ---------------- */
const C = (id, iso, n, lat, lon, hi, say, clue, facts) => ({id, iso, n, lat, lon, hi, say, clue, facts});
const COUNTRIES = [
  C('ca', '124', 'Canada', 56, -100, 'Merry Christmas! Joyeux Noël!', 'en anglais et en français', 'le père Noël a son propre code postal : H0H 0H0.', [
    ['✉️', 'Le père Noël a son propre code postal canadien : H0H 0H0. Écris-lui une lettre et il te répond!'],
    ['🌲', 'Chaque année, la Nouvelle-Écosse envoie un immense sapin à la ville de Boston. C’est un merci pour l’aide reçue après une catastrophe en 1917.'],
    ['🥧', 'Au Québec, beaucoup de familles veillent tard le soir de Noël pour un festin appelé le réveillon, avec de la tourtière.']]),
  C('us', '840', 'États-Unis', 39, -98, 'Merry Christmas!', '', 'un immense sapin de Noël s’illumine à New York.', [
    ['🎄', 'Chaque année, un sapin géant s’illumine au Rockefeller Center, à New York.'],
    ['🍪', 'Beaucoup d’enfants laissent du lait et des biscuits au père Noël le soir de Noël.'],
    ['🛰️', 'Depuis les années 1950, une équipe appelée NORAD « suit » le traîneau du père Noël le soir de Noël. Le Canada aide aussi!']]),
  C('mx', '484', 'Mexique', 23, -102, '¡Feliz Navidad!', 'félisse na-vi-DADE', 'les enfants brisent des piñatas en forme d’étoile.', [
    ['🕯️', 'Pendant neuf soirs, du 16 au 24 décembre, les familles vont de maison en maison en chantant. Ça s’appelle Las Posadas.'],
    ['🪅', 'Les enfants brisent des piñatas en forme d’étoile remplies de bonbons et de fruits.'],
    ['🌺', 'Le poinsettia rouge vient du Mexique. Là-bas, on l’appelle flor de Nochebuena, la fleur de la veille de Noël.']]),
  C('br', '076', 'Brésil', -10, -52, 'Feliz Natal!', 'fé-LISSE na-TAOU', 'le père Noël s’appelle Papai Noel et Noël arrive en plein été.', [
    ['☀️', 'Ici, Noël arrive en plein été. Le père Noël s’appelle Papai Noel.'],
    ['🍽️', 'Beaucoup de familles prennent leur grand repas de Noël tard le soir du 24 décembre.'],
    ['🐓', 'Beaucoup de gens vont à une messe de minuit appelée Missa do Galo. Ça veut dire « la messe du coq ».']]),
  C('is', '352', 'Islande', 65, -18.5, 'Gleðileg jól!', 'GLÉ-thi-lègue YOLE', 'treize lutins farceurs passent, un chaque nuit.', [
    ['🧦', 'Treize lutins farceurs passent, un chaque nuit avant Noël. Les enfants laissent une chaussure à la fenêtre pour recevoir un petit cadeau.'],
    ['🥔', 'Si tu n’as pas été sage, un lutin pourrait laisser une patate dans ta chaussure!'],
    ['📚', 'Les livres sont un cadeau préféré. Beaucoup de familles passent le soir de Noël à lire leurs nouveaux livres.']]),
  C('ie', '372', 'Irlande', 53.2, -8, 'Nollaig Shona Duit!', 'environ : NOL-ig HO-na ditch (irlandais)', 'les familles mettent une chandelle à la fenêtre le soir de Noël.', [
    ['🕯️', 'Beaucoup de familles mettent une chandelle à la fenêtre le soir de Noël pour accueillir les voyageurs.'],
    ['🏊', 'Des gens très braves se baignent dans la mer glacée le jour de Noël!'],
    ['🐦', 'Le 26 décembre, c’est la Saint-Étienne. Dans certains villages, les gens se déguisent et défilent en musique : c’est le « jour du roitelet ».']]),
  C('gb', '826', 'Royaume-Uni', 53.5, -1.5, 'Happy Christmas!', '', 'on tire sur des pétards de Noël et on porte des couronnes en papier.', [
    ['🎉', 'Au souper, on tire sur des pétards de Noël. Ils font CLAC! Dedans, il y a une couronne en papier, une blague et un petit jouet.'],
    ['👑', 'Le roi présente un message de Noël à la télé à 15 h le jour de Noël.'],
    ['🌲', 'Depuis 1947, la Norvège offre chaque année un sapin géant à Londres pour la remercier.']]),
  C('fr', '250', 'France', 46.5, 2.5, 'Joyeux Noël!', '', 'on mange un gâteau qui ressemble à une bûche de bois.', [
    ['👞', 'Les enfants laissent leurs souliers près de la cheminée pour que le père Noël les remplisse.'],
    ['🪵', 'Un dessert préféré est la bûche de Noël, un gâteau au chocolat qui ressemble à un morceau de bois.'],
    ['🍽️', 'Les familles partagent un long repas tard le soir de Noël : le réveillon.']]),
  C('es', '724', 'Espagne', 40, -3.7, '¡Feliz Navidad!', 'félith na-vi-DADE', 'les Rois mages apportent les cadeaux le 6 janvier.', [
    ['👑', 'Beaucoup d’enfants reçoivent leurs cadeaux des Rois mages le 6 janvier. Il y a de grands défilés la veille.'],
    ['🍇', 'Le soir du 31 décembre, on mange 12 raisins à minuit, un pour chaque coup de l’horloge.'],
    ['🥮', 'Les familles mangent un gâteau en forme de couronne appelé roscón de Reyes. Une petite surprise est cachée dedans!']]),
  C('it', '380', 'Italie', 42.5, 12.5, 'Buon Natale!', 'bouonne na-TA-lé', 'une gentille vieille sorcière appelée la Befana apporte des bonbons.', [
    ['🧹', 'La nuit du 5 janvier, une gentille vieille sorcière appelée la Befana vole sur son balai et apporte des bonbons.'],
    ['🍞', 'Le panettone est un grand pain sucré aux fruits. Il vient de la ville de Milan.'],
    ['⭐', 'Les familles installent des crèches appelées presepi. La ville de Naples est célèbre pour en fabriquer.']]),
  C('de', '276', 'Allemagne', 51, 10, 'Frohe Weihnachten!', 'FRO-eu VAÏ-nar-tène', 'les enfants laissent une botte dehors pour saint Nicolas.', [
    ['🎪', 'L’Allemagne est célèbre pour ses marchés de Noël, remplis de lumières, de pain d’épices et de jouets.'],
    ['👢', 'Le soir du 5 décembre, les enfants laissent une botte devant la porte. Saint Nicolas la remplit de gâteries!'],
    ['📅', 'Les calendriers de l’Avent, qui comptent les jours jusqu’à Noël, ont commencé en Allemagne.']]),
  C('nl', '528', 'Pays-Bas', 52.3, 5.5, 'Vrolijk Kerstfeest!', 'FRO-leuk KÈRST-feïst', 'Sinterklaas arrive en bateau à vapeur.', [
    ['⛴️', 'Sinterklaas arrive en bateau à vapeur à la mi-novembre. Des foules viennent l’accueillir.'],
    ['🥕', 'Les enfants laissent une chaussure avec une carotte pour son cheval.'],
    ['🍫', 'Les cadeaux arrivent le 5 décembre. Beaucoup d’enfants reçoivent une lettre en chocolat : la première lettre de leur prénom.']]),
  C('se', '752', 'Suède', 62, 15, 'God Jul!', 'goud youl', 'on construit chaque année une chèvre géante en paille.', [
    ['🕯️', 'Le 13 décembre, à la Sainte-Lucie, une fille en robe blanche porte une couronne de bougies et mène un défilé en chantant.'],
    ['🐐', 'La ville de Gävle construit chaque année une chèvre géante en paille.'],
    ['📺', 'À 15 h le soir de Noël, les familles regardent la même émission spéciale de Donald Duck. Elle passe depuis 1959!']]),
  C('pl', '616', 'Pologne', 52, 19.5, 'Wesołych Świąt!', 'vé-SO-ouikh CHVIONT', 'le souper commence quand la première étoile apparaît.', [
    ['⭐', 'Le souper du soir de Noël commence quand quelqu’un voit la première étoile dans le ciel.'],
    ['🍽️', 'Le repas compte 12 plats. Les familles mettent une place de plus à table, au cas où un invité arriverait.'],
    ['🤝', 'Avant de manger, tout le monde partage une fine galette appelée opłatek et s’offre des vœux.']]),
  C('ua', '804', 'Ukraine', 49, 31.5, 'Веселого Різдва!', 'vé-SÉ-lo-ho riz-DVA', 'on décore les sapins de toiles d’araignée brillantes pour porter chance.', [
    ['🕸️', 'Certains sapins sont décorés de toiles d’araignée brillantes! Une vieille histoire raconte qu’une toile d’araignée a porté chance à une famille pauvre.'],
    ['🔔', 'La chanson « Carol of the Bells » vient d’un chant ukrainien appelé « Chtchedryk ».'],
    ['🥣', 'Le souper du soir de Noël compte 12 plats. Le plus important est la koutia, un pouding sucré au blé.']]),
  C('et', '231', 'Éthiopie', 9, 39.5, 'Melkam Genna!', 'mel-KAM GUÉ-na', 'Noël s’appelle Genna et se fête le 7 janvier.', [
    ['📅', 'Ici, Noël s’appelle Genna. On le fête le 7 janvier.'],
    ['🤍', 'Beaucoup de gens portent des vêtements de coton blanc pour aller à l’église le matin de Noël.'],
    ['🏑', 'À Noël, les gens jouent à un jeu avec des bâtons courbés et une balle, un peu comme le hockey. Il s’appelle genna, lui aussi!']]),
  C('ng', '566', 'Nigeria', 9.5, 8, 'Merry Christmas!', 'l’anglais est une des nombreuses langues ici', 'beaucoup de familles quittent la ville pour retourner dans leur village.', [
    ['🚌', 'Beaucoup de familles quittent les grandes villes pour retourner dans leur village et se retrouver.'],
    ['🍛', 'Le riz jollof, un riz épicé à la tomate, est un plat de Noël préféré.'],
    ['👗', 'Beaucoup d’enfants reçoivent des vêtements neufs à porter le jour de Noël.']]),
  C('za', '710', 'Afrique du Sud', -30, 24, 'Geseënde Kersfees!', 'rhé-SI-en-deu KÈRS-fis (afrikaans)', 'les familles cuisinent dehors au soleil d’été, lors d’un braai.', [
    ['☀️', 'Noël arrive en été. Beaucoup de familles cuisinent dehors, sur un barbecue appelé braai.'],
    ['🏖️', 'Le 26 décembre est un jour férié appelé le jour de la Bonne Volonté. Beaucoup de familles vont à la plage.'],
    ['🗣️', 'L’Afrique du Sud a 12 langues officielles, alors il y a beaucoup de façons de dire « Joyeux Noël ».']]),
  C('in', '356', 'Inde', 22, 79, 'Bade Din ki Mubarak!', 'BA-dé dine ki mou-BA-rak (hindi)', 'certaines familles décorent un manguier ou un bananier.', [
    ['🥭', 'Certaines familles décorent un manguier ou un bananier comme sapin de Noël.'],
    ['⭐', 'Les gens accrochent de grandes lanternes de papier en forme d’étoile devant leur maison.'],
    ['🗓️', 'En hindi, Noël s’appelle Bada Din. Ça veut dire « le grand jour ».']]),
  C('ph', '608', 'Philippines', 13, 122, 'Maligayang Pasko!', 'ma-li-GA-yang pass-KO', 'les chansons de Noël commencent à jouer en septembre.', [
    ['🎶', 'Ici, Noël commence en septembre! C’est une des plus longues périodes des fêtes au monde.'],
    ['⭐', 'Les maisons et les rues brillent de lanternes en forme d’étoile appelées parols.'],
    ['🌅', 'Du 16 au 24 décembre, beaucoup de familles se lèvent avant le soleil pour neuf messes appelées Simbang Gabi.']]),
  C('jp', '392', 'Japon', 36.5, 138.5, 'Merī Kurisumasu!', 'mé-ri kou-ri-sou-ma-sou', 'beaucoup de familles mangent du poulet frit et un gâteau aux fraises.', [
    ['🍗', 'Beaucoup de familles mangent du poulet frit pour le souper de Noël. Ça a commencé avec une publicité en 1974!'],
    ['🍰', 'Ici, le gâteau de Noël est un gâteau éponge avec de la crème fouettée et des fraises.'],
    ['💡', 'Le 25 décembre n’est pas un congé, alors la plupart des adultes travaillent. Mais les villes brillent de grandes illuminations.']]),
  C('au', '036', 'Australie', -25, 134, 'Merry Christmas!', '', 'six kangourous blancs tirent le traîneau du père Noël dans une chanson.', [
    ['☀️', 'Noël arrive en été. Beaucoup de familles font un barbecue ou passent la journée à la plage.'],
    ['🦘', 'Dans une chanson australienne célèbre, le traîneau du père Noël est tiré par six kangourous blancs.'],
    ['🕯️', 'Les soirs de chaleur, de grandes foules chantent ensemble dehors aux Carols by Candlelight.']]),
];

/* ---------------- SANTA SUMMIT ---------------- */
const ITEMS = [
  {id:'stamp',   e:'✉️', n:'Un timbre de Postes Canada',        d:'Un seul timbre pour le Canada, acheté au bureau de poste', p:1.44, step:0.10, tier:1, src:'Tarifs de Postes Canada'},
  {id:'stamp27', e:'📮', n:'Un timbre en 2027',                  d:'Le nouveau prix prévu par le budget fédéral pour un timbre', p:2.00, step:0.10, tier:1, src:'Budget fédéral 2026'},
  {id:'ttc',     e:'🚇', n:'Un passage dans le métro de Toronto', d:'Tarif adulte de la TTC, payé avec PRESTO ou une carte', p:3.30, step:0.25, tier:1, src:'Tarifs de la TTC'},
  {id:'bigmac',  e:'🍔', n:'Un Big Mac',                         d:'Prix moyen au Canada (varie selon le restaurant)', p:7.81, step:0.50, tier:1, src:'The Economist, indice Big Mac, janv. 2026'},
  {id:'netads',  e:'📺', n:'Netflix avec pubs, un mois',         d:'Forfait Standard avec pubs au Canada', p:7.99, step:1, tier:1, src:'Netflix Canada'},
  {id:'netstd',  e:'🍿', n:'Netflix sans pubs, un mois',         d:'Forfait Standard au Canada', p:18.99, step:1, tier:1, src:'Netflix Canada'},
  {id:'spotify', e:'🎧', n:'Spotify Premium, un mois',           d:'Forfait individuel au Canada', p:13.99, step:1, tier:1, src:'Spotify Canada'},
  {id:'spotstu', e:'🎓', n:'Spotify Étudiants, un mois',         d:'Forfait Premium Étudiants au Canada', p:6.39, step:0.50, tier:1, src:'Spotify Canada'},
  {id:'minwage', e:'⏱️', n:'Une heure de travail au salaire minimum', d:'Salaire minimum général en Ontario (depuis le 1er oct. 2026)', p:17.95, step:0.50, tier:1, src:'Ontario.ca'},
  {id:'stuwage', e:'🧑‍🍳', n:'Salaire minimum étudiant en Ontario', d:'Par heure, pour les élèves de moins de 18 ans (depuis le 1er oct. 2026)', p:16.90, step:0.50, tier:1, src:'Ontario.ca'},
  {id:'stanley', e:'🥤', n:'Gobelet Stanley Quencher, 40 oz',    d:'Gobelet H2.0 FlowState, prix courant', p:59.00, step:2, tier:2, src:'Stanley 1913 Canada'},
  {id:'passport',e:'🛂', n:'Un passeport canadien de 10 ans',    d:'Passeport adulte, demande faite au Canada', p:163.50, step:5, tier:2, src:'Gouvernement du Canada (IRCC)'},
  {id:'airpods', e:'🎶', n:'AirPods 5',                          d:'Les plus récents AirPods ordinaires, prix d’Apple.ca', p:179.00, step:5, tier:2, src:'Prix d’Apple Canada, sept. 2026'},
  {id:'portal',  e:'🎮', n:'PlayStation Portal',                 d:'L’appareil portable de jeu à distance de Sony', p:319.99, step:10, tier:2, src:'Prix recommandé de Sony, avr. 2026'},
  {id:'xwing',   e:'🛸', n:'LEGO Star Wars X-Wing (UCS)',        d:'Ensemble de la série Ultimate Collector 75355', p:319.99, step:10, tier:2, src:'LEGO.com Canada'},
  {id:'switch2', e:'🕹️', n:'Nintendo Switch 2',                 d:'La console seule', p:679.99, step:25, tier:3, src:'Nintendo, prix depuis le 1er sept. 2026'},
  {id:'ps5',     e:'💿', n:'PlayStation 5 (avec lecteur de disque)', d:'Prix recommandé de Sony', p:819.99, step:25, tier:3, src:'Sony, prix depuis le 2 avr. 2026'},
  {id:'ps5pro',  e:'⚡', n:'PlayStation 5 Pro',                  d:'Prix recommandé de Sony', p:1099.99, step:25, tier:3, src:'Sony, prix depuis le 2 avr. 2026'},
  {id:'falcon',  e:'🚀', n:'LEGO Faucon Millenium (UCS)',        d:'Ensemble Star Wars de 7 541 pièces, 75192', p:1049.99, step:25, tier:3, src:'LEGO.com Canada'},
  {id:'iphone',  e:'📱', n:'iPhone 17',                          d:'Prix de départ, Apple.ca', p:1299.00, step:25, tier:3, src:'Prix d’Apple Canada, sept. 2026'},
  {id:'corolla', e:'🚗', n:'Une Toyota Corolla neuve',           d:'Corolla L 2026, PDSF de départ (avant les frais)', p:24520, step:500, tier:3, src:'Toyota Canada'},
  {id:'applemus',e:'🎵', n:'Apple Music, un mois',               d:'Forfait individuel au Canada', p:10.99, step:1, tier:1, src:'Apple Music Canada'},
  {id:'netprem', e:'🎬', n:'Netflix Premium, un mois',           d:'Forfait 4K au Canada', p:23.99, step:1, tier:1, src:'Netflix Canada'},
  {id:'primemo', e:'📦', n:'Amazon Prime, un mois',              d:'Abonnement mensuel au Canada', p:9.99, step:0.50, tier:1, src:'Amazon.ca'},
  {id:'fedwage', e:'🍁', n:'Salaire minimum fédéral, une heure', d:'Pour les emplois de compétence fédérale (depuis le 1er avr. 2026)', p:18.15, step:0.50, tier:1, src:'Gouvernement du Canada'},
  {id:'primeyr', e:'🚚', n:'Amazon Prime, un an',                d:'Abonnement annuel au Canada', p:99.00, step:5, tier:2, src:'Amazon.ca'},
  {id:'primestu',e:'🎒', n:'Prime Étudiants, un an',             d:'Abonnement étudiant à moitié prix', p:49.00, step:2, tier:2, src:'Amazon.ca'},
  {id:'gta6',    e:'🌴', n:'Grand Theft Auto VI',                d:'Édition standard, prix canadien', p:109.99, step:5, tier:2, src:'Prix de précommande de Rockstar, juin 2026'},
  {id:'gta6u',   e:'💎', n:'GTA VI, édition Ultimate',           d:'La version de luxe avec du contenu bonus', p:139.99, step:5, tier:2, src:'Prix de précommande de Rockstar, juin 2026'},
  {id:'vader',   e:'🪖', n:'LEGO Casque de Dark Vador',          d:'Ensemble Star Wars 75304', p:99.99, step:5, tier:2, src:'LEGO.com Canada'},
  {id:'passp5',  e:'🧳', n:'Un passeport canadien de 5 ans',     d:'Passeport adulte, demande faite au Canada', p:122.50, step:5, tier:2, src:'Gouvernement du Canada (IRCC)'},
  {id:'airpodsw',e:'🔋', n:'AirPods 5 avec boîtier de recharge sans fil', d:'La version améliorée des AirPods 5', p:209.00, step:5, tier:2, src:'Prix d’Apple Canada, sept. 2026'},
  {id:'ps5dig',  e:'🎮', n:'PlayStation 5 édition numérique',    d:'Sans lecteur de disque, prix recommandé de Sony', p:749.99, step:25, tier:3, src:'Sony, prix depuis le 2 avr. 2026'},
  {id:'mkbundle',e:'🏎️', n:'Switch 2 + Mario Kart World',       d:'Console, jeu et 3 mois de Switch Online', p:749.99, step:25, tier:3, src:'Nintendo du Canada'},
  {id:'xboxx',   e:'🟩', n:'Xbox Series X',                      d:'Console de 1 To avec lecteur de disque, Microsoft Store', p:999.99, step:25, tier:3, src:'Microsoft Store Canada, oct. 2026'},
  {id:'xboxs',   e:'⬜', n:'Xbox Series S (512 Go)',             d:'La petite Xbox entièrement numérique, Microsoft Store', p:649.99, step:25, tier:3, src:'Microsoft Store Canada, oct. 2026'},
  {id:'rent',    e:'🏢', n:'Un mois de loyer au Canada',         d:'Loyer moyen demandé, tous les logements (juin 2026)', p:2033, step:50, tier:3, src:'Rentals.ca, rapport national sur les loyers'},
  {id:'tuition', e:'🎓', n:'Une année de droits de scolarité à l’université', d:'Moyenne pour un étudiant canadien au premier cycle, 2026-2027', p:8021, step:200, tier:3, src:'Statistique Canada'},
  {id:'tuitint', e:'🌍', n:'Droits de scolarité d’un étudiant étranger', d:'Moyenne au premier cycle, une année, 2026-2027', p:42062, step:1000, tier:3, src:'Statistique Canada'},
  {id:'house',   e:'🏠', n:'Une maison moyenne au Canada',       d:'Prix de vente moyen national, septembre 2026', p:666538, step:10000, tier:3, src:'Association canadienne de l’immeuble'},
];

/* ---------------- THE CLASS SAYS ---------------- */
const B = (id, q, ...a) => ({id, q, a});
const BOARDS = [
  B('tree', 'Nomme quelque chose qu’on trouve dans un sapin de Noël.', ['Des boules', 34], ['Des lumières', 27], ['Une étoile', 16], ['Des glaçons', 9], ['Des cannes en bonbon', 7], ['Un ange', 4]),
  B('snowday', 'Nomme quelque chose qu’on fait pendant une tempête qui ferme l’école.', ['Dormir tard', 30], ['Glisser', 22], ['Faire un bonhomme de neige', 16], ['Jouer à des jeux vidéo', 13], ['Pelleter', 9], ['Regarder des films', 6]),
  B('movie', 'Nomme un film de Noël que tout le monde a vu.', ['Maman, j’ai raté l’avion', 32], ['Elfe', 26], ['Le Grinch', 18], ['Le Pôle Express', 11], ['Une histoire de Noël', 6], ['Rodolphe', 4]),
  B('santajob', 'Nomme quelque chose dont le père Noël a besoin pour faire son travail.', ['Un traîneau', 30], ['Des rennes', 26], ['Un sac de jouets', 15], ['Des lutins', 12], ['La liste', 9], ['Son habit rouge', 5]),
  B('late', 'Nomme une raison d’arriver en retard à l’école en hiver.', ['Je me suis réveillé tard', 28], ['L’autobus était en retard', 24], ['Les routes enneigées', 20], ['L’auto ne partait pas', 12], ['J’ai dû pelleter', 8], ['Je ne trouvais pas mes bottes', 5]),
  B('warm', 'Nomme quelque chose qu’on boit pour se réchauffer.', ['Un chocolat chaud', 40], ['Du café', 22], ['Du thé', 18], ['Du cidre chaud', 9], ['De la soupe', 6], ['Du lait chaud', 3]),
  B('wrap', 'Nomme quelque chose de difficile à emballer.', ['Un vélo', 28], ['Un ballon', 22], ['Une peluche', 15], ['Un bâton de hockey', 13], ['Une guitare', 10], ['Un animal', 6]),
  B('pretend', 'Nomme un cadeau qu’on fait semblant d’aimer.', ['Des bas', 33], ['Un chandail', 22], ['Du gâteau aux fruits', 14], ['Un pyjama', 11], ['Du savon', 10], ['Un calendrier', 6]),
  B('break', 'Nomme quelque chose qu’on fait pendant le congé des fêtes.', ['Dormir tard', 30], ['Voir la famille', 22], ['Jouer à des jeux vidéo', 16], ['Manger', 12], ['Regarder des films', 10], ['Voyager', 6]),
  B('sport', 'Nomme un sport d’hiver.', ['Le hockey', 36], ['Le ski', 22], ['La planche à neige', 16], ['Le patin', 12], ['Le curling', 8], ['La glissade', 4]),
  B('dinner', 'Nomme quelque chose qu’on sert au repas des fêtes.', ['De la dinde', 36], ['De la purée de patates', 20], ['De la farce', 16], ['De la sauce', 10], ['Du jambon', 8], ['De la tourtière', 6]),
  B('wear', 'Nomme quelque chose qu’on porte en hiver.', ['Un manteau', 30], ['Des mitaines', 22], ['Une tuque', 20], ['Des bottes', 14], ['Un foulard', 10], ['Un pantalon de neige', 4]),
  B('snowman', 'Nomme quelque chose qu’on utilise pour faire un bonhomme de neige.', ['De la neige', 30], ['Une carotte', 25], ['Un foulard', 15], ['Un chapeau', 12], ['Des boutons', 10], ['Des branches', 8]),
  B('song', 'Nomme une chanson de Noël que tout le monde connaît.', ['Vive le vent', 34], ['Petit papa Noël', 22], ['Mon beau sapin', 14], ['Le petit renne au nez rouge', 10], ['Douce nuit', 9], ['All I Want for Christmas Is You', 6]),
  B('lastday', 'Nomme quelque chose qu’on fait en classe le dernier jour avant le congé.', ['Regarder un film', 34], ['Manger des gâteries', 22], ['Jouer à des jeux', 16], ['Échanger des cadeaux', 12], ['Vider son casier', 8], ['Partir plus tôt', 5]),
  B('ruin', 'Nomme quelque chose qui détruit un bonhomme de neige.', ['Le temps doux', 36], ['La pluie', 20], ['Quelqu’un le frappe', 18], ['Un chien', 10], ['La déneigeuse', 8], ['Le vent', 4]),
  B('skate', 'Nomme un endroit où on va patiner.', ['L’aréna', 34], ['La patinoire extérieure', 24], ['Un étang ou un lac', 20], ['La patinoire dans la cour', 12], ['Le canal', 6], ['Le centre commercial', 3]),
  B('house', 'Nomme quelque chose qu’on met sur sa maison à Noël.', ['Des lumières', 44], ['Une couronne', 20], ['Des décorations gonflables', 14], ['Des rennes', 9], ['Une guirlande', 7], ['Un père Noël', 4]),
  B('stocking', 'Nomme quelque chose qu’on trouve dans un bas de Noël.', ['Des bonbons', 32], ['Du chocolat', 22], ['Une orange', 14], ['Des bas', 12], ['Une carte-cadeau', 10], ['Une brosse à dents', 6]),
  B('teacher', 'Nomme quelque chose que les profs disent avant le congé.', ['« Joyeuses fêtes! »', 30], ['« Videz vos casiers »', 20], ['« Pas de devoirs »', 18], ['« Assoyez-vous »', 12], ['« Ce n’est pas encore le congé »', 12], ['« À l’année prochaine! »', 6]),
  B('elf', 'Nomme un travail que fait un lutin.', ['Fabriquer des jouets', 40], ['Emballer des cadeaux', 22], ['Nourrir les rennes', 14], ['Vérifier la liste', 10], ['Charger le traîneau', 8], ['Faire des biscuits', 4]),
  B('roadhockey', 'Nomme quelque chose dont on a besoin pour jouer au hockey dans la rue.', ['Des bâtons', 34], ['Une balle', 24], ['Des filets', 20], ['Un gardien', 10], ['Des amis', 8], ['Quelqu’un qui crie « Auto! »', 3]),
  B('cookie', 'Nomme une sorte de biscuit qu’on fait en décembre.', ['Biscuits au sucre', 30], ['Bonshommes en pain d’épices', 28], ['Sablés', 18], ['Biscuits aux brisures de chocolat', 12], ['Biscuits à la cannelle', 6], ['Biscuits à la confiture', 4]),
  B('teen', 'Nomme un cadeau qu’un ado veut recevoir.', ['Un cellulaire', 30], ['De l’argent', 24], ['Des jeux vidéo', 16], ['Des vêtements', 12], ['Des souliers', 10], ['Des cartes-cadeaux', 6]),
  B('forget', 'Nomme quelque chose qu’on oublie d’acheter avant les fêtes.', ['Des piles', 30], ['Du papier d’emballage', 22], ['Du ruban adhésif', 18], ['Un cadeau pour quelqu’un', 14], ['Des cartes', 8], ['De la nourriture', 6]),
  B('homework', 'Nomme une excuse pour ne pas avoir fait ses devoirs pendant le congé.', ['« J’ai oublié »', 30], ['« J’étais trop occupé »', 22], ['« J’étais parti »', 18], ['« Je les ai perdus »', 12], ['« J’étais malade »', 10], ['« Je ne savais pas »', 6]),
  B('crowded', 'Nomme un endroit plein de monde en décembre.', ['Le centre commercial', 44], ['L’aéroport', 18], ['L’épicerie', 14], ['Le bureau de poste', 10], ['Les stationnements', 8], ['La file pour voir le père Noël', 4]),
  B('better', 'Nomme quelque chose de meilleur en hiver qu’en été.', ['Le chocolat chaud', 30], ['Le hockey', 20], ['Les couvertures chaudes', 18], ['La soupe', 12], ['Un feu de foyer', 10], ['Les cotons ouatés', 8]),
  B('power', 'Nomme quelque chose qu’on fait quand il y a une panne de courant.', ['Allumer des chandelles', 30], ['Trouver une lampe de poche', 24], ['Aller dormir', 14], ['Jouer à des jeux de société', 12], ['Utiliser son cellulaire', 12], ['Parler en famille', 6]),
  B('rudolph', 'Nomme quelque chose que Rodolphe pourrait vouloir pour Noël.', ['Des carottes', 32], ['Des lunettes de soleil', 16], ['Une journée de congé', 16], ['De nouvelles clochettes', 12], ['Des pommes', 10], ['Des amis', 8]),
  B('shovel', 'Nomme le pire côté du pelletage.', ['Il fait froid', 30], ['C’est lourd', 24], ['Mal de dos', 16], ['La déneigeuse remplit l’entrée', 14], ['Ça prend une éternité', 10], ['Il neige encore', 5]),
  B('bus', 'Nomme quelque chose qu’on fait pendant un long trajet en autobus ou en auto.', ['Écouter de la musique', 34], ['Dormir', 24], ['Utiliser son cellulaire', 18], ['Regarder par la fenêtre', 10], ['Parler', 8], ['Manger des collations', 5]),
];
const SURVEY_IDEAS = ['Nomme la meilleure chose du congé des fêtes.', 'Nomme un aliment que tu pourrais manger tous les jours.', 'Nomme le meilleur cadeau que tu pourrais recevoir cette année.', 'Nomme quelque chose dont notre école a besoin.', 'Nomme le meilleur film des fêtes.', 'Nomme quelque chose que tu achèterais avec 100 $.', 'Nomme la pire tâche à la maison.', 'Nomme un métier que tu aimerais faire.', 'Nomme la meilleure collation.', 'Nomme quelque chose sans quoi tu ne sors jamais de la maison.'];
const TEAM_DEF = ['Équipe Rennes', 'Équipe Bonshommes', 'Équipe Lutins', 'Équipe Pingouins'];

/* ---------------- HOT TAKES ---------------- */
const TAKES = [
  ['music', 'On ne devrait pas jouer de musique de Noël avant le 1er décembre.'],
  ['cocoa', 'Le chocolat chaud est meilleur que le lait de poule.'],
  ['realtree', 'Un vrai sapin, c’est mieux qu’un sapin artificiel.'],
  ['giftcard', 'Les cartes-cadeaux, c’est un cadeau paresseux.'],
  ['homealone', 'Maman, j’ai raté l’avion! est le meilleur film des fêtes de tous les temps.'],
  ['elf', 'Le film Elfe est surestimé.'],
  ['candycane', 'Les cannes en bonbon sont les pires bonbons des fêtes.'],
  ['winter', 'L’hiver, c’est mieux que l’été.'],
  ['socks', 'Des bas, c’est vraiment un bon cadeau.'],
  ['lights', 'Les lumières de Noël devraient être enlevées avant le 15 janvier.'],
  ['mariah', '« All I Want for Christmas Is You » est la meilleure chanson des fêtes.'],
  ['white', 'Les lumières blanches sont plus belles que les lumières de couleur.'],
  ['fruitcake', 'Le gâteau aux fruits mérite plus de respect.'],
  ['homemade', 'Un cadeau fait à la main, c’est mieux qu’un cadeau acheté.'],
  ['bags', 'Les sacs-cadeaux, c’est mieux que le papier d’emballage.'],
  ['sweater', 'Les chandails de Noël laids sont en fait cool.'],
  ['turkey', 'La dinde est surestimée.'],
  ['gingerbread', 'Les maisons en pain d’épices, c’est fait pour être regardé, pas mangé.'],
  ['skate', 'Le patin, c’est mieux que la glissade.'],
  ['snowball', 'Les batailles de boules de neige devraient être un sport olympique.'],
  ['grinch', 'Le Grinch avait raison à propos de tout ce bruit.'],
  ['peek', 'Regarder ses cadeaux en cachette gâche la surprise.'],
  ['resolutions', 'Les résolutions du Nouvel An ne servent à rien.'],
  ['marshmallow', 'Un chocolat chaud, ça prend des guimauves.'],
  ['secret', 'L’échange de cadeaux secret, c’est mieux que d’acheter pour tout le monde.'],
  ['regift', 'Redonner un cadeau qu’on a reçu, c’est correct.'],
  ['early', 'Décorer avant la mi-novembre, c’est trop tôt.'],
  ['experience', 'Une sortie ou une activité est un meilleur cadeau qu’un objet.'],
  ['toque', 'Une tuque, c’est mieux qu’un capuchon.'],
  ['mint', 'Le chocolat à la menthe est la meilleure saveur des fêtes.'],
  ['leftovers', 'Les restes sont meilleurs que le vrai repas des fêtes.'],
  ['everyoneskate', 'Tout le monde au Canada devrait apprendre à patiner.'],
  ['boxing', 'Magasiner le lendemain de Noël ne vaut pas la foule.'],
  ['sleepin', 'Les matins des fêtes ne devraient pas commencer avant 9 h.'],
  ['food', 'La nourriture est la meilleure partie des fêtes.'],
  ['snowday', 'Une tempête qui ferme l’école, c’est mieux qu’une journée pédagogique.'],
  ['shovel', 'Pelleter de la neige, c’est un bon exercice, pas une corvée.'],
  ['pyjamas', 'Il devrait y avoir une journée pyjama à l’école chaque mois.'],
  ['claymation', 'Les vieilles émissions de Noël en pâte à modeler sont meilleures que les nouveaux films.'],
  ['cards', 'Ça vaut encore la peine d’envoyer des cartes de Noël en papier.'],
  ['icecream', 'La crème glacée, c’est encore bon en hiver.'],
  ['snowman', 'Faire un bonhomme de neige, c’est amusant à tout âge.'],
];

/* ---------------- PRINTABLES (no accents, so they fit the grids) ---------------- */
const THEMES = {
  winter: {name:'Plaisirs d’hiver', words:[
    ['NEIGE','Des flocons blancs qui tombent du ciel'], ['MITAINES','Elles gardent tes mains au chaud'], ['LUGE','On glisse dessus pour descendre une côte'],
    ['FOULARD','On l’enroule autour du cou'], ['GLACE','De l’eau gelée'], ['FROID','Le contraire de chaud'], ['PATIN','Pour glisser sur la glace'],
    ['BOTTES','On les porte pour marcher dans la neige'], ['TUQUE','Un chapeau d’hiver bien canadien'], ['BONHOMME','On le fait avec trois boules de neige'],
    ['GLACON','Il pend du toit quand il gèle'], ['GIVRE','Des dessins de glace sur la fenêtre'] ]},
  santa: {name:'L’atelier du père Noël', words:[
    ['PERE NOEL','Il dit « Ho ho ho! »'], ['LUTIN','Un petit aide du père Noël'], ['JOUETS','Les lutins les fabriquent'], ['TRAINEAU','Le père Noël voyage dedans'],
    ['RENNE','Il tire le traîneau'], ['ATELIER','L’endroit où on fabrique les jouets'], ['POLE NORD','L’endroit où vit le père Noël'],
    ['CADEAU','Une surprise emballée'], ['LISTE','Le père Noël la vérifie deux fois'], ['RODOLPHE','Le renne au nez rouge'],
    ['CHEMINEE','Le père Noël descend par là'], ['BAS','On l’accroche à la cheminée'] ]},
  treats: {name:'Gâteries des fêtes', words:[
    ['BISCUIT','On en laisse un pour le père Noël'], ['BONBON','Une petite sucrerie'], ['CHOCOLAT','Une gâterie brune et sucrée'],
    ['TOURTIERE','Une tarte à la viande du réveillon'], ['FUDGE','Des carrés de chocolat mous'], ['TARTE','Un dessert avec une croûte'],
    ['LAIT','Le père Noël le boit avec ses biscuits'], ['BUCHE','Un gâteau roulé en forme de bout de bois'], ['GLACAGE','Du sucre crémeux sur un biscuit'],
    ['GUIMAUVE','Douce et blanche, elle flotte dans le chocolat chaud'], ['MENTHE','Un goût frais'], ['GATEAU','Un dessert pour une fête'] ]},
  decor: {name:'Les décorations', words:[
    ['SAPIN','On y met des lumières et des boules'], ['ETOILE','Elle va tout en haut du sapin'], ['LUMIERES','Elles scintillent dans le sapin'],
    ['GLACONS','Des fils brillants qu’on met dans le sapin'], ['BOULE','Une décoration ronde qu’on accroche'], ['COURONNE','Un cercle de branches sur la porte'],
    ['CLOCHE','Elle fait ding, ding!'], ['BOUCLE','On en fait une avec un ruban'], ['GUIRLANDE','Une longue corde de branches'],
    ['RUBAN','On l’enroule autour d’un cadeau'], ['CHANDELLE','Elle a une mèche et une flamme'], ['HOUX','Feuilles vertes et petits fruits rouges'] ]},
  animals: {name:'Animaux d’hiver', words:[
    ['OURS POLAIRE','Un gros ours blanc'], ['PINGOUIN','Un oiseau qui ne vole pas mais adore nager'], ['ORIGNAL','Un grand animal avec de gros panaches'],
    ['HIBOU','Un oiseau qui hulule la nuit'], ['RENARD','Un animal rusé à la queue touffue'], ['PHOQUE','Il nage dans l’eau glacée'],
    ['MORSE','Il a de longues défenses'], ['LIEVRE','Il devient blanc en hiver'], ['CARDINAL','Un oiseau rouge vif'],
    ['CASTOR','Il construit des barrages avec des branches'], ['CARIBOU','Le renne sauvage du Nord'], ['BALEINE','Le plus gros animal de l’océan'] ]},
};

const NFD = ".normalize('NFD').replace(/[\\u0300-\\u036f]/g, '')";
return {
  'wordle.html': [
    ['const WORDS_DAILY = {', 'const MAX = 6;', 'const WORDS_DAILY = ' + J(WORDLE_DAILY) + ';\nconst WORDS = ' + J(WORDLE_UNL) + ';\n\n'],
    ["const w = $('#secretWord').value.toUpperCase().replace(/[^A-Z]/g, '');", null, "const w = $('#secretWord').value" + NFD + ".toUpperCase().replace(/[^A-Z]/g, '');"],
    ["else if (/^[a-z]$/i.test(e.key) && !e.ctrlKey && !e.metaKey) press(e.key.toUpperCase());", null, "else if (/^[a-zà-ÿ]$/i.test(e.key) && !e.ctrlKey && !e.metaKey) press(e.key" + NFD + ".toUpperCase());"],
  ],
  'connections.html': [
    ['const DAILY = {', 'const $ = s => document.querySelector(s);', 'const DAILY = ' + J(CONN_DAILY) + ';\nconst PUZZLES = ' + J(CONN_UNL) + ';\n\n'],
  ],
  'globe.html': [
    ['const COUNTRIES = [', 'const POLE = ', 'const COUNTRIES = ' + J(COUNTRIES) + ';\n'],
    ["const POLE = {id:'np', n:'the North Pole', lat:89, lon:-100};", null, "const POLE = {id:'np', n:'le pôle Nord', lat:89, lon:-100};"],
    ["u.lang = 'en-CA';", null, "u.lang = 'fr-CA';"],
  ],
  'summit.html': [
    ['const ITEMS = [', 'const TEAMS = [', 'const ITEMS = ' + J(ITEMS) + ';\n'],
    ["const money = v => '$' + (Math.round(v * 100) / 100).toLocaleString('en-CA', {minimumFractionDigits:v % 1 ? 2 : 0, maximumFractionDigits:2});", null,
     "const money = v => (Math.round(v * 100) / 100).toLocaleString('fr-CA', {minimumFractionDigits:v % 1 ? 2 : 0, maximumFractionDigits:2}) + ' $';"],
  ],
  'class-says.html': [
    ['const BOARDS = [', 'const BUZZ_KEYS', 'const BOARDS = ' + J(BOARDS) + ';\nconst SURVEY_IDEAS = ' + J(SURVEY_IDEAS) + ';\nconst TEAM_DEF = ' + J(TEAM_DEF) + ';\n'],
    ["const normKey = s => s.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/^(a|an|the|my|some) /, '').replace(/\\s+/g, ' ').trim().replace(/s$/, '');", null,
     "const normKey = s => s.toLowerCase()" + NFD + ".replace(/[’']/g, ' ').replace(/[^a-z0-9 ]/g, '').replace(/^(le|la|les|l|un|une|des|du|de|d|mon|ma|mes) /, '').replace(/\\s+/g, ' ').trim().replace(/[sx]$/, '');"],
    ["location.pathname.split('/').pop() + '?key=1&class='", null, "'play.html?page=class-says.html&lang=fr&key=1&class='"],
    ["${esc(location.origin + location.pathname)}?key=1</span>", null, "${esc(location.origin + location.pathname)}?page=class-says.html&amp;lang=fr&amp;key=1</span>"],
    ["Score <b>100 points</b> or more to win a 100-point bonus.", null, "Fais <b>100 points</b> ou plus pour gagner un bonus de 100 points."],
  ],
  'hottakes.html': [
    ['const TAKES = [', 'const KEY = ', 'const TAKES = ' + J(TAKES) + ';\n\n'],
  ],
  'printables.html': [
    ['const THEMES = {', "const KEY = 'twr-printables-v1';", 'const THEMES = ' + J(THEMES) + ';\n\n'],
    ["const word = m[0].toUpperCase().replace(/[^A-Z ]/g, '').trim();", null, "const word = m[0]" + NFD + ".toUpperCase().replace(/[^A-Z ]/g, '').trim();"],
    ["const v = inp.value.toUpperCase().replace(/[^A-Z]/g, '').slice(-1);", null, "const v = inp.value" + NFD + ".toUpperCase().replace(/[^A-Z]/g, '').slice(-1);"],
  ],
};
})();
