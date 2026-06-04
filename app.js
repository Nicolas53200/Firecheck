const appData = {
  vehicle: {
    name: "FPT GO",
    plate: "GQ 311 JE",
    center: "CIS Château-Gontier"
  },
  steps: [
    {
      id: "cabine-avant",
      title: "Cabine avant",
      photo: "Cabine avant",
      groups: [
        {name: "Côté conducteur", items: [
          ["🦺", "Gilet haute visibilité conducteur", "1"],
          ["☀️", "Pare-soleil conducteur", "À contrôler"],
          ["💳", "Carte carburant", "1"]
        ]},
        {name: "Entre chef d’agrès et conducteur", items: [
          ["🔑", "Double de clé", "1"],
          ["💳", "Badge autoroute", "1"],
          ["📻", "Portatifs TPH 900", "2"],
          ["🔦", "Projecteur", "1"],
          ["🧪", "Explosimètre", "1"],
          ["📻", "Kit radio", "1"],
          ["📁", "Classeurs opérationnels / carto / PI", "3"],
          ["🧰", "Polycoise", "1"],
          ["📄", "Pochettes véhicule et PNRPA", "2"]
        ]},
        {name: "Côté chef d’agrès", items: [
          ["🦺", "Gilet haute visibilité C/A", "1"],
          ["🎒", "ARI avec BSL, liaison personnel et masque", "1"]
        ]}
      ]
    },
    {
      id: "cabine-arriere",
      title: "Cabine arrière",
      photo: "Cabine arrière",
      groups: [
        {name: "Matériel cabine arrière", items: [
          ["🎒", "ARI avec BSL, liaison personnel, Rhinoevac + masque", "4"],
          ["🔦", "Projecteurs", "5"],
          ["📻", "Portatifs TPH 900", "2"],
          ["🎒", "Commandes en sac", "2"],
          ["🦺", "Gilets haute visibilité", "4"],
          ["😷", "Cagoules d’évacuation", "2"],
          ["🚨", "Spiraled rouges et vertes", "4"],
          ["💧", "Caisse eau sous les sièges", "1"]
        ]}
      ]
    },
    {
      id: "coffre-arriere-cabine",
      title: "Coffre arrière cabine",
      photo: "Coffre arrière cabine",
      groups: [
        {name: "Coffre", items: [
          ["🧯", "Aspiraux", "5"],
          ["🧹", "Carquois avec tiges de ramonage", "1"],
          ["🔧", "Barre de maintien cabine", "1"]
        ]}
      ]
    },
    {
      id: "rideau-avant-gauche",
      title: "Rideau avant gauche",
      photo: "Rideau avant gauche",
      groups: [
        {name: "Haut", items: [
          ["📦", "Caisses vides tenues souillées", "2"],
          ["🧰", "Caisse lot de bord", "1"]
        ]},
        {name: "Milieu", items: [
          ["💧", "Pulvérisateur dorsal souple", "1"],
          ["🔥", "Lance feux de cheminée", "1"],
          ["🧰", "Seau acier + pelle + gants + hérisson + miroir + massette + burins", "1"]
        ]},
        {name: "Bas", items: [
          ["🌬️", "Ventilateur sur batterie", "1"],
          ["🧯", "Extincteurs poudre 9 kg", "2"],
          ["🧯", "Extincteur CO2 5 kg", "1"]
        ]}
      ]
    },
    {
      id: "rideau-milieu-gauche",
      title: "Rideau milieu gauche",
      photo: "Rideau milieu gauche",
      groups: [
        {name: "Haut", items: [
          ["📦", "Caisse vide", "1"],
          ["🧵", "Tuyau de 45 en couronne", "1"],
          ["📦", "Caisse vide + caoutchoucs réserve Rhinoevac", "1"]
        ]},
        {name: "Bas", items: [
          ["🚿", "LM2", "1"],
          ["🚿", "Lance queue de paon", "1"],
          ["🚿", "LDMR 500", "1"],
          ["🚿", "LDV 1000", "1"],
          ["🔩", "Réduction 100 x 65", "1"],
          ["🔩", "Réduction 65 x 40", "1"],
          ["🔀", "Division 100 / 2 x 65", "1"],
          ["🔀", "Division 65 / 2 x 40", "1"],
          ["🧰", "Retenue", "1"],
          ["🔩", "Coude de 100 raccord Keiser", "1"],
          ["🧵", "Tuyau de 70 - 20 m en couronne", "2"],
          ["🛠️", "Polycoises", "4"]
        ]}
      ]
    },
    {
      id: "rideau-arriere-gauche",
      title: "Rideau arrière gauche",
      photo: "Rideau arrière gauche",
      groups: [
        {name: "Haut", items: [
          ["🧰", "Caisse accessoires hydrauliques", "1"],
          ["🧰", "Caisse gaz", "1"]
        ]},
        {name: "Milieu", items: [
          ["🪜", "Échelle télescopique", "1"],
          ["🚿", "LAT : tuyau Ø45 x20 m en O avec lance gâchette", "1"],
          ["🧵", "LAT : 2 tuyaux Ø45 x20 m en Z", "2"],
          ["🚿", "LAT : tuyau Ø45 x20 m en O avec LDV 500", "1"],
          ["🧵", "LAT : 2 tuyaux Ø45 x20 m en Z", "2"],
          ["🧰", "Canne plongeuse", "1"],
          ["🧼", "Espace désinfection / nettoyage", "1"]
        ]},
        {name: "Bas", items: [
          ["🧰", "Crépine", "1"],
          ["🧰", "Commande", "1"],
          ["🛟", "Flotteur", "1"],
          ["🧵", "Manche d’alimentation Ø110 en écheveaux", "2"],
          ["🛞", "Cales de roues", "2"]
        ]}
      ]
    },
    {
      id: "arriere-vehicule",
      title: "Arrière du véhicule",
      photo: "Arrière du véhicule",
      groups: [
        {name: "Arrière", items: [
          ["🧵", "Dévidoir avec 2 tuyaux Ø22 x20 m + LDT", "1"],
          ["🧵", "Tuyau 45 x20 m en couronne avec raccord GFR", "1"],
          ["🧵", "Tuyau 70 x20 m en couronne", "1"],
          ["🔦", "Projecteur amovible", "1"],
          ["🛠️", "Tricoises Ø100", "2"],
          ["🧰", "Manivelle pour enroulement DT", "1"],
          ["🔑", "Clé fédérale + clé de barrage", "1 + 1"],
          ["🔀", "Collecteur d’alimentation", "1"],
          ["🧵", "Tuyau de remplissage tonne", "1"],
          ["🧵", "Dévidoir avec 5 tuyaux Ø70 x40 m + tricoise", "2"]
        ]}
      ]
    },
    {
      id: "toit",
      title: "Sur le toit",
      photo: "Toit",
      groups: [
        {name: "Toit", items: [
          ["🪜", "Échelle à coulisse 2 plans", "1"],
          ["🪜", "Échelle à crochet", "1"]
        ]}
      ]
    },
    {
      id: "rideau-arriere-droit",
      title: "Rideau arrière droit",
      photo: "Rideau arrière droit",
      groups: [
        {name: "Haut", items: [
          ["📦", "Caisse ceinturon", "1"],
          ["📦", "Caisse tenue type 3", "1"],
          ["🥼", "Combinaisons CAT3 type 5/6 XL et 2XL", "4"]
        ]},
        {name: "Milieu", items: [
          ["🔀", "Division d’attaque DAT", "1"],
          ["🧵", "Tuyau Ø70 x20 m en Z avec division", "1"],
          ["🧵", "Tuyaux Ø70 x20 m en Z", "2"]
        ]},
        {name: "Bas", items: [
          ["🧯", "DFT", "4"],
          ["🔶", "Cônes de Lübeck", "4"]
        ]}
      ]
    },
    {
      id: "rideau-milieu-droit",
      title: "Rideau milieu droit",
      photo: "Rideau milieu droit",
      groups: [
        {name: "Haut", items: [
          ["🪢", "Cordage", "1"],
          ["🧰", "Bâche + récupérateur hydrocarbure", "1 + 1"],
          ["🪚", "Découpeuse à disque + disques + fiche technique + clé", "1"]
        ]},
        {name: "Milieu", items: [
          ["🎒", "ARI conducteur + masque", "1 + 1"],
          ["🔦", "Projecteur", "1"],
          ["🔋", "Batterie projecteur + batterie découpeuse", "1 + 1"],
          ["🚪", "Stoppeur de fumées", "1"]
        ]},
        {name: "Bas", items: [
          ["🪢", "LSPCC + commande", "2"],
          ["🛠️", "Halligan tool + merlin", "1 + 1"],
          ["📋", "Tableau de contrôleur + lignes guide", "1 + 2"],
          ["🚨", "Coffret Spiraled", "1"]
        ]}
      ]
    },
    {
      id: "rideau-avant-droit",
      title: "Rideau avant droit",
      photo: "Rideau avant droit",
      groups: [
        {name: "Gauche", items: [
          ["🧰", "OFD", "1"],
          ["🛠️", "Fourche droite", "1"],
          ["🛠️", "Fourche recourbée", "1"],
          ["🧹", "Balai de cantonnier", "1"],
          ["⛏️", "Pelle", "1"],
          ["🪚", "Scie à bûches", "1"],
          ["🪝", "Gaffe", "1"],
          ["✂️", "Coupe-boulon", "1"],
          ["⛏️", "Pioche", "1"],
          ["🔨", "Masse", "1"],
          ["🪓", "Hache", "1"]
        ]},
        {name: "Haut / milieu / bas", items: [
          ["🎒", "Lot prompt secours", "1"],
          ["🧵", "Tuyaux 45 x20 en écheveaux préconnectés + LDMR", "4"],
          ["🧵", "Tuyaux 70 x20 en écheveaux préconnectés + division mixte", "4"],
          ["🧯", "Bouteilles d’ARI", "6"],
          ["🔦", "Enrouleur avec support métallique pour projecteur", "1"],
          ["🔦", "Trépied pour projecteur sur batterie", "1"]
        ]}
      ]
    },
    {
      id: "lps",
      title: "Lot Prompt Secours",
      photo: "Lot Prompt Secours",
      groups: [
        {name: "Ventilation", items: [
          ["🫁", "Bouteille O2 - 5 litres", "1"],
          ["🫁", "Insufflateur adulte + tubulure UU", "1"],
          ["😷", "Masques pour BAVU UU T5 / T3", "2"],
          ["😷", "Masque haute concentration adulte", "1"]
        ]},
        {name: "Kits pansements", items: [
          ["🧴", "Unidoses de chlorhexidine", "3"],
          ["🧴", "Unidoses de chlorure de sodium 0,9%", "2"],
          ["🩹", "Compresses 7,5 x 7,5 cm", "5"],
          ["🩹", "Rouleau de sparadrap", "1"],
          ["🩹", "Bandes de crêpe 5 cm et 10 cm", "2"],
          ["🧤", "Réserve gants à usage unique", "À contrôler"],
          ["🌡️", "Couverture isothermique", "1"],
          ["🧴", "Gel hydroalcoolique", "1"],
          ["🩹", "Pansement absorbant", "1"],
          ["🔥", "Watergel 10 x 10 cm", "2"],
          ["❄️", "Poche de froid", "1"]
        ]},
        {name: "Divers", items: [
          ["🔪", "Couteau de sécurité", "1"]
        ]}
      ]
    }
  ]
};

let currentStep = 0;
let completed = new Set();
let activeFixReportId = null;
let currentItemIssue = null;
let stepIssues = {};

let reports = [
  {
    id: 101,
    asset: "FPT GO",
    zone: "Cabine avant",
    origin: "Vérification matin",
    type: "Plein à faire",
    item: "Carburant",
    comment: "Jauge à 1/4.",
    status: "Nouveau",
    priority: "Normale",
    author: "Inconnu",
    time: "Aujourd’hui 08:12"
  },
  {
    id: 102,
    asset: "MPR 02",
    zone: "Matériel technique",
    origin: "Après manœuvre",
    type: "Matériel cassé",
    item: "Raccord",
    comment: "Raccord difficile à verrouiller.",
    status: "Pris en compte",
    priority: "Normale",
    author: "Sergent Martin A.",
    time: "Hier 17:42"
  }
];

const vehicles = [
  {name:"FPT GO", detail:"GQ 311 JE", ct:"12/09/2026", oil:"18/07/2026", km:"48 230 km", state:"ok"},
  {name:"VSAV 02", detail:"Immat AB-123-CD", ct:"20/06/2026", oil:"02/07/2026", km:"82 110 km", state:"soon"},
  {name:"CCF 01", detail:"Immat EF-456-GH", ct:"04/06/2026", oil:"En retard", km:"61 400 km", state:"late"}
];

const equipment = [
  {name:"MPR 02", detail:"Motopompe remorquable", ct:"—", oil:"Révision 14/08/2026", km:"128 h", state:"ok"},
  {name:"Motopompe 01", detail:"Pompe portable", ct:"—", oil:"Vidange 22/06/2026", km:"76 h", state:"soon"},
  {name:"Groupe électrogène", detail:"Lot éclairage", ct:"—", oil:"Révision en retard", km:"214 h", state:"late"}
];

let serviceInventory = [{"id": "FPTGO-Z01-M001", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Côté conducteur", "zoneOrder": 1, "itemOrder": 1, "name": "Gilet haute visibilité conducteur", "qty": 1, "unit": "pièce", "category": "EPI", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z01-M002", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Côté conducteur", "zoneOrder": 1, "itemOrder": 2, "name": "Carte carburant", "qty": 1, "unit": "pièce", "category": "Document / carte", "criticality": "Importante", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z01-M003", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Côté conducteur", "zoneOrder": 1, "itemOrder": 3, "name": "Outil OFD", "qty": 1, "unit": "pièce", "category": "Outillage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z01-M004", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Côté conducteur", "zoneOrder": 1, "itemOrder": 4, "name": "Clés gaz", "qty": 1, "unit": "lot", "category": "Outillage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z01-M005", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Côté conducteur", "zoneOrder": 1, "itemOrder": 5, "name": "Rouleau de rubalise", "qty": 1, "unit": "rouleau", "category": "Balisage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z01-M006", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Côté conducteur", "zoneOrder": 1, "itemOrder": 6, "name": "Boîte de craies", "qty": 1, "unit": "boîte", "category": "Balisage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z01-M007", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Entre conducteur et chef d’agrès", "zoneOrder": 1, "itemOrder": 7, "name": "Double de clé", "qty": 1, "unit": "pièce", "category": "Clés / accès", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z01-M008", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Entre conducteur et chef d’agrès", "zoneOrder": 1, "itemOrder": 8, "name": "Badge autoroute", "qty": 1, "unit": "pièce", "category": "Document / carte", "criticality": "Importante", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z01-M009", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Entre conducteur et chef d’agrès", "zoneOrder": 1, "itemOrder": 9, "name": "Portatifs TPH 900", "qty": 2, "unit": "pièces", "category": "Communication", "criticality": "Importante", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z01-M010", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Entre conducteur et chef d’agrès", "zoneOrder": 1, "itemOrder": 10, "name": "Projecteur", "qty": 1, "unit": "pièce", "category": "Éclairage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z01-M011", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Entre conducteur et chef d’agrès", "zoneOrder": 1, "itemOrder": 11, "name": "Explosimètre", "qty": 1, "unit": "pièce", "category": "Détection", "criticality": "Importante", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z01-M012", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Entre conducteur et chef d’agrès", "zoneOrder": 1, "itemOrder": 12, "name": "Kit radio", "qty": 1, "unit": "kit", "category": "Communication", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z01-M013", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Entre conducteur et chef d’agrès", "zoneOrder": 1, "itemOrder": 13, "name": "Classeur cartographie", "qty": 1, "unit": "classeur", "category": "Documents", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z01-M014", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Entre conducteur et chef d’agrès", "zoneOrder": 1, "itemOrder": 14, "name": "Classeur PI", "qty": 1, "unit": "classeur", "category": "Documents", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z01-M015", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Entre conducteur et chef d’agrès", "zoneOrder": 1, "itemOrder": 15, "name": "Classeur opérationnel", "qty": 1, "unit": "classeur", "category": "Documents", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z01-M016", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Entre conducteur et chef d’agrès", "zoneOrder": 1, "itemOrder": 16, "name": "Polycoise", "qty": 1, "unit": "pièce", "category": "Outillage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z01-M017", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Entre conducteur et chef d’agrès", "zoneOrder": 1, "itemOrder": 17, "name": "Pochette véhicule", "qty": 1, "unit": "pochette", "category": "Documents", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z01-M018", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Entre conducteur et chef d’agrès", "zoneOrder": 1, "itemOrder": 18, "name": "PNRPA", "qty": 1, "unit": "pochette", "category": "Documents", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z01-M019", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Côté chef d’agrès", "zoneOrder": 1, "itemOrder": 19, "name": "Gilet haute visibilité chef d’agrès", "qty": 1, "unit": "pièce", "category": "EPI", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z01-M020", "vehicle": "FPT GO", "zone": "Cabine avant", "subzone": "Côté chef d’agrès", "zoneOrder": 1, "itemOrder": 20, "name": "ARI chef d’agrès avec BSL, liaison personnel et masque", "qty": 1, "unit": "ensemble", "category": "ARI", "criticality": "Critique", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z02-M001", "vehicle": "FPT GO", "zone": "Cabine arrière", "subzone": "Matériel cabine arrière", "zoneOrder": 2, "itemOrder": 1, "name": "ARI avec BSL, liaison personnel, Rhinoevac et masque", "qty": 4, "unit": "ensembles", "category": "ARI", "criticality": "Critique", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z02-M002", "vehicle": "FPT GO", "zone": "Cabine arrière", "subzone": "Matériel cabine arrière", "zoneOrder": 2, "itemOrder": 2, "name": "Projecteurs", "qty": 5, "unit": "pièces", "category": "Éclairage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z02-M003", "vehicle": "FPT GO", "zone": "Cabine arrière", "subzone": "Matériel cabine arrière", "zoneOrder": 2, "itemOrder": 3, "name": "Portatifs TPH 900", "qty": 2, "unit": "pièces", "category": "Communication", "criticality": "Importante", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z02-M004", "vehicle": "FPT GO", "zone": "Cabine arrière", "subzone": "Matériel cabine arrière", "zoneOrder": 2, "itemOrder": 4, "name": "Commandes en sac", "qty": 2, "unit": "sacs", "category": "Commandement", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z02-M005", "vehicle": "FPT GO", "zone": "Cabine arrière", "subzone": "Matériel cabine arrière", "zoneOrder": 2, "itemOrder": 5, "name": "Gilets haute visibilité", "qty": 4, "unit": "pièces", "category": "EPI", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z02-M006", "vehicle": "FPT GO", "zone": "Cabine arrière", "subzone": "Matériel cabine arrière", "zoneOrder": 2, "itemOrder": 6, "name": "Cagoules d’évacuation", "qty": 2, "unit": "pièces", "category": "Sauvetage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z02-M007", "vehicle": "FPT GO", "zone": "Cabine arrière", "subzone": "Matériel cabine arrière", "zoneOrder": 2, "itemOrder": 7, "name": "Spiraled rouges et vertes", "qty": 4, "unit": "pièces", "category": "Signalisation", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z02-M008", "vehicle": "FPT GO", "zone": "Cabine arrière", "subzone": "Matériel cabine arrière", "zoneOrder": 2, "itemOrder": 8, "name": "Caisse eau sous les sièges", "qty": 1, "unit": "caisse", "category": "Consommable", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z03-M001", "vehicle": "FPT GO", "zone": "Coffre arrière cabine", "subzone": "Coffre", "zoneOrder": 3, "itemOrder": 1, "name": "Aspiraux", "qty": 5, "unit": "pièces", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z03-M002", "vehicle": "FPT GO", "zone": "Coffre arrière cabine", "subzone": "Coffre", "zoneOrder": 3, "itemOrder": 2, "name": "Carquois avec tiges de ramonage", "qty": 1, "unit": "ensemble", "category": "Feux de cheminée", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z03-M003", "vehicle": "FPT GO", "zone": "Coffre arrière cabine", "subzone": "Coffre", "zoneOrder": 3, "itemOrder": 3, "name": "Barre de maintien cabine", "qty": 1, "unit": "pièce", "category": "Outillage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z04-M001", "vehicle": "FPT GO", "zone": "Rideau avant gauche", "subzone": "Haut", "zoneOrder": 4, "itemOrder": 1, "name": "Caisses vides pour tenues souillées", "qty": 2, "unit": "caisses", "category": "Rangement", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z04-M002", "vehicle": "FPT GO", "zone": "Rideau avant gauche", "subzone": "Haut", "zoneOrder": 4, "itemOrder": 2, "name": "Caisse lot de bord", "qty": 1, "unit": "caisse", "category": "Lot de bord", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z04-M003", "vehicle": "FPT GO", "zone": "Rideau avant gauche", "subzone": "Milieu", "zoneOrder": 4, "itemOrder": 3, "name": "Pulvérisateur dorsal souple", "qty": 1, "unit": "pièce", "category": "Extinction", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z04-M004", "vehicle": "FPT GO", "zone": "Rideau avant gauche", "subzone": "Milieu", "zoneOrder": 4, "itemOrder": 4, "name": "Lance feux de cheminée", "qty": 1, "unit": "pièce", "category": "Feux de cheminée", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z04-M005", "vehicle": "FPT GO", "zone": "Rideau avant gauche", "subzone": "Milieu", "zoneOrder": 4, "itemOrder": 5, "name": "Seau acier avec pelle, gants, hérisson, miroir, massette et burins", "qty": 1, "unit": "ensemble", "category": "Feux de cheminée", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z04-M006", "vehicle": "FPT GO", "zone": "Rideau avant gauche", "subzone": "Bas", "zoneOrder": 4, "itemOrder": 6, "name": "Ventilateur sur batterie", "qty": 1, "unit": "pièce", "category": "Ventilation", "criticality": "Importante", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z04-M007", "vehicle": "FPT GO", "zone": "Rideau avant gauche", "subzone": "Bas", "zoneOrder": 4, "itemOrder": 7, "name": "Extincteurs poudre 9 kg", "qty": 2, "unit": "pièces", "category": "Extinction", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z04-M008", "vehicle": "FPT GO", "zone": "Rideau avant gauche", "subzone": "Bas", "zoneOrder": 4, "itemOrder": 8, "name": "Extincteur CO2 5 kg", "qty": 1, "unit": "pièce", "category": "Extinction", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z05-M001", "vehicle": "FPT GO", "zone": "Rideau milieu gauche", "subzone": "Haut", "zoneOrder": 5, "itemOrder": 1, "name": "Caisse vide", "qty": 1, "unit": "caisse", "category": "Rangement", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z05-M002", "vehicle": "FPT GO", "zone": "Rideau milieu gauche", "subzone": "Haut", "zoneOrder": 5, "itemOrder": 2, "name": "Tuyau de 45 en couronne", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z05-M003", "vehicle": "FPT GO", "zone": "Rideau milieu gauche", "subzone": "Haut", "zoneOrder": 5, "itemOrder": 3, "name": "Caisse vide avec caoutchoucs réserve Rhinoevac", "qty": 1, "unit": "caisse", "category": "Rangement", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z05-M004", "vehicle": "FPT GO", "zone": "Rideau milieu gauche", "subzone": "Bas", "zoneOrder": 5, "itemOrder": 4, "name": "LM2", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z05-M005", "vehicle": "FPT GO", "zone": "Rideau milieu gauche", "subzone": "Bas", "zoneOrder": 5, "itemOrder": 5, "name": "Lance queue de paon", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z05-M006", "vehicle": "FPT GO", "zone": "Rideau milieu gauche", "subzone": "Bas", "zoneOrder": 5, "itemOrder": 6, "name": "LDMR 500", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z05-M007", "vehicle": "FPT GO", "zone": "Rideau milieu gauche", "subzone": "Bas", "zoneOrder": 5, "itemOrder": 7, "name": "LDV 1000", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z05-M008", "vehicle": "FPT GO", "zone": "Rideau milieu gauche", "subzone": "Bas", "zoneOrder": 5, "itemOrder": 8, "name": "Réduction 100 x 65", "qty": 1, "unit": "pièce", "category": "Raccord", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z05-M009", "vehicle": "FPT GO", "zone": "Rideau milieu gauche", "subzone": "Bas", "zoneOrder": 5, "itemOrder": 9, "name": "Réduction 65 x 40", "qty": 1, "unit": "pièce", "category": "Raccord", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z05-M010", "vehicle": "FPT GO", "zone": "Rideau milieu gauche", "subzone": "Bas", "zoneOrder": 5, "itemOrder": 10, "name": "Division 100 / 2 x 65", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z05-M011", "vehicle": "FPT GO", "zone": "Rideau milieu gauche", "subzone": "Bas", "zoneOrder": 5, "itemOrder": 11, "name": "Division 65 / 2 x 40", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z05-M012", "vehicle": "FPT GO", "zone": "Rideau milieu gauche", "subzone": "Bas", "zoneOrder": 5, "itemOrder": 12, "name": "Retenue", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z05-M013", "vehicle": "FPT GO", "zone": "Rideau milieu gauche", "subzone": "Bas", "zoneOrder": 5, "itemOrder": 13, "name": "Coude de 100 raccord Keiser", "qty": 1, "unit": "pièce", "category": "Raccord", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z05-M014", "vehicle": "FPT GO", "zone": "Rideau milieu gauche", "subzone": "Bas", "zoneOrder": 5, "itemOrder": 14, "name": "Tuyaux de 70 - 20 m en couronne", "qty": 2, "unit": "pièces", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z05-M015", "vehicle": "FPT GO", "zone": "Rideau milieu gauche", "subzone": "Bas", "zoneOrder": 5, "itemOrder": 15, "name": "Polycoises", "qty": 4, "unit": "pièces", "category": "Outillage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z06-M001", "vehicle": "FPT GO", "zone": "Rideau arrière gauche", "subzone": "Haut", "zoneOrder": 6, "itemOrder": 1, "name": "Caisse accessoires hydrauliques", "qty": 1, "unit": "caisse", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z06-M002", "vehicle": "FPT GO", "zone": "Rideau arrière gauche", "subzone": "Haut", "zoneOrder": 6, "itemOrder": 2, "name": "Caisse gaz", "qty": 1, "unit": "caisse", "category": "Gaz", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z06-M003", "vehicle": "FPT GO", "zone": "Rideau arrière gauche", "subzone": "Milieu", "zoneOrder": 6, "itemOrder": 3, "name": "Échelle télescopique", "qty": 1, "unit": "pièce", "category": "Échelle", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z06-M004", "vehicle": "FPT GO", "zone": "Rideau arrière gauche", "subzone": "Milieu", "zoneOrder": 6, "itemOrder": 4, "name": "LAT : tuyau Ø45 x20 m en O avec lance gâchette", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z06-M005", "vehicle": "FPT GO", "zone": "Rideau arrière gauche", "subzone": "Milieu", "zoneOrder": 6, "itemOrder": 5, "name": "LAT : tuyaux Ø45 x20 m en Z", "qty": 2, "unit": "pièces", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z06-M006", "vehicle": "FPT GO", "zone": "Rideau arrière gauche", "subzone": "Milieu", "zoneOrder": 6, "itemOrder": 6, "name": "LAT : tuyau Ø45 x20 m en O avec LDV 500", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z06-M007", "vehicle": "FPT GO", "zone": "Rideau arrière gauche", "subzone": "Milieu", "zoneOrder": 6, "itemOrder": 7, "name": "LAT : tuyaux Ø45 x20 m en Z", "qty": 2, "unit": "pièces", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z06-M008", "vehicle": "FPT GO", "zone": "Rideau arrière gauche", "subzone": "Milieu", "zoneOrder": 6, "itemOrder": 8, "name": "Canne plongeuse", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z06-M009", "vehicle": "FPT GO", "zone": "Rideau arrière gauche", "subzone": "Milieu", "zoneOrder": 6, "itemOrder": 9, "name": "Espace désinfection / nettoyage", "qty": 1, "unit": "emplacement", "category": "Hygiène", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z06-M010", "vehicle": "FPT GO", "zone": "Rideau arrière gauche", "subzone": "Bas", "zoneOrder": 6, "itemOrder": 10, "name": "Crépine", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z06-M011", "vehicle": "FPT GO", "zone": "Rideau arrière gauche", "subzone": "Bas", "zoneOrder": 6, "itemOrder": 11, "name": "Commande", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z06-M012", "vehicle": "FPT GO", "zone": "Rideau arrière gauche", "subzone": "Bas", "zoneOrder": 6, "itemOrder": 12, "name": "Flotteur", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z06-M013", "vehicle": "FPT GO", "zone": "Rideau arrière gauche", "subzone": "Bas", "zoneOrder": 6, "itemOrder": 13, "name": "Manches d’alimentation Ø110 en écheveaux", "qty": 2, "unit": "pièces", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z06-M014", "vehicle": "FPT GO", "zone": "Rideau arrière gauche", "subzone": "Bas", "zoneOrder": 6, "itemOrder": 14, "name": "Cales de roues", "qty": 2, "unit": "pièces", "category": "Sécurité", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z07-M001", "vehicle": "FPT GO", "zone": "Arrière véhicule", "subzone": "Arrière", "zoneOrder": 7, "itemOrder": 1, "name": "Dévidoir avec 2 tuyaux Ø22 x20 m et LDT", "qty": 1, "unit": "ensemble", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z07-M002", "vehicle": "FPT GO", "zone": "Arrière véhicule", "subzone": "Arrière", "zoneOrder": 7, "itemOrder": 2, "name": "Tuyau 45 x20 m en couronne avec raccord GFR", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z07-M003", "vehicle": "FPT GO", "zone": "Arrière véhicule", "subzone": "Arrière", "zoneOrder": 7, "itemOrder": 3, "name": "Tuyau 70 x20 m en couronne", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z07-M004", "vehicle": "FPT GO", "zone": "Arrière véhicule", "subzone": "Arrière", "zoneOrder": 7, "itemOrder": 4, "name": "Projecteur amovible", "qty": 1, "unit": "pièce", "category": "Éclairage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z07-M005", "vehicle": "FPT GO", "zone": "Arrière véhicule", "subzone": "Arrière", "zoneOrder": 7, "itemOrder": 5, "name": "Tricoises Ø100", "qty": 2, "unit": "pièces", "category": "Outillage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z07-M006", "vehicle": "FPT GO", "zone": "Arrière véhicule", "subzone": "Arrière", "zoneOrder": 7, "itemOrder": 6, "name": "Manivelle pour enroulement DT", "qty": 1, "unit": "pièce", "category": "Outillage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z07-M007", "vehicle": "FPT GO", "zone": "Arrière véhicule", "subzone": "Arrière", "zoneOrder": 7, "itemOrder": 7, "name": "Clé fédérale", "qty": 1, "unit": "pièce", "category": "Clés / accès", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z07-M008", "vehicle": "FPT GO", "zone": "Arrière véhicule", "subzone": "Arrière", "zoneOrder": 7, "itemOrder": 8, "name": "Clé de barrage", "qty": 1, "unit": "pièce", "category": "Clés / accès", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z07-M009", "vehicle": "FPT GO", "zone": "Arrière véhicule", "subzone": "Arrière", "zoneOrder": 7, "itemOrder": 9, "name": "Collecteur d’alimentation", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z07-M010", "vehicle": "FPT GO", "zone": "Arrière véhicule", "subzone": "Arrière", "zoneOrder": 7, "itemOrder": 10, "name": "Tuyau de remplissage tonne", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z07-M011", "vehicle": "FPT GO", "zone": "Arrière véhicule", "subzone": "Arrière", "zoneOrder": 7, "itemOrder": 11, "name": "Dévidoirs avec 5 tuyaux Ø70 x40 m et tricoise", "qty": 2, "unit": "ensembles", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z08-M001", "vehicle": "FPT GO", "zone": "Toit", "subzone": "Toit", "zoneOrder": 8, "itemOrder": 1, "name": "Échelle à coulisse 2 plans", "qty": 1, "unit": "pièce", "category": "Échelle", "criticality": "Importante", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z08-M002", "vehicle": "FPT GO", "zone": "Toit", "subzone": "Toit", "zoneOrder": 8, "itemOrder": 2, "name": "Échelle à crochet", "qty": 1, "unit": "pièce", "category": "Échelle", "criticality": "Importante", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z09-M001", "vehicle": "FPT GO", "zone": "Rideau arrière droit", "subzone": "Haut", "zoneOrder": 9, "itemOrder": 1, "name": "Caisse ceinturon", "qty": 1, "unit": "caisse", "category": "EPI", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z09-M002", "vehicle": "FPT GO", "zone": "Rideau arrière droit", "subzone": "Haut", "zoneOrder": 9, "itemOrder": 2, "name": "Caisse tenue type 3", "qty": 1, "unit": "caisse", "category": "EPI", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z09-M003", "vehicle": "FPT GO", "zone": "Rideau arrière droit", "subzone": "Haut", "zoneOrder": 9, "itemOrder": 3, "name": "Combinaisons CAT3 type 5/6 XL et 2XL", "qty": 4, "unit": "pièces", "category": "EPI", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z09-M004", "vehicle": "FPT GO", "zone": "Rideau arrière droit", "subzone": "Milieu", "zoneOrder": 9, "itemOrder": 4, "name": "Division d’attaque DAT", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z09-M005", "vehicle": "FPT GO", "zone": "Rideau arrière droit", "subzone": "Milieu", "zoneOrder": 9, "itemOrder": 5, "name": "Tuyau Ø70 x20 m en Z avec division", "qty": 1, "unit": "pièce", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z09-M006", "vehicle": "FPT GO", "zone": "Rideau arrière droit", "subzone": "Milieu", "zoneOrder": 9, "itemOrder": 6, "name": "Tuyaux Ø70 x20 m en Z", "qty": 2, "unit": "pièces", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z09-M007", "vehicle": "FPT GO", "zone": "Rideau arrière droit", "subzone": "Bas", "zoneOrder": 9, "itemOrder": 7, "name": "DFT", "qty": 4, "unit": "pièces", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z09-M008", "vehicle": "FPT GO", "zone": "Rideau arrière droit", "subzone": "Bas", "zoneOrder": 9, "itemOrder": 8, "name": "Cônes de Lübeck", "qty": 4, "unit": "pièces", "category": "Balisage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z10-M001", "vehicle": "FPT GO", "zone": "Rideau milieu droit", "subzone": "Haut", "zoneOrder": 10, "itemOrder": 1, "name": "Cordage", "qty": 1, "unit": "pièce", "category": "Sauvetage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z10-M002", "vehicle": "FPT GO", "zone": "Rideau milieu droit", "subzone": "Haut", "zoneOrder": 10, "itemOrder": 2, "name": "Bâche", "qty": 1, "unit": "pièce", "category": "Protection", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z10-M003", "vehicle": "FPT GO", "zone": "Rideau milieu droit", "subzone": "Haut", "zoneOrder": 10, "itemOrder": 3, "name": "Récupérateur hydrocarbure", "qty": 1, "unit": "pièce", "category": "Pollution", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z10-M004", "vehicle": "FPT GO", "zone": "Rideau milieu droit", "subzone": "Haut", "zoneOrder": 10, "itemOrder": 4, "name": "Découpeuse à disque avec disques, fiche technique et clé", "qty": 1, "unit": "ensemble", "category": "Découpe", "criticality": "Importante", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z10-M005", "vehicle": "FPT GO", "zone": "Rideau milieu droit", "subzone": "Milieu", "zoneOrder": 10, "itemOrder": 5, "name": "ARI conducteur avec masque", "qty": 1, "unit": "ensemble", "category": "ARI", "criticality": "Critique", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z10-M006", "vehicle": "FPT GO", "zone": "Rideau milieu droit", "subzone": "Milieu", "zoneOrder": 10, "itemOrder": 6, "name": "Projecteur", "qty": 1, "unit": "pièce", "category": "Éclairage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z10-M007", "vehicle": "FPT GO", "zone": "Rideau milieu droit", "subzone": "Milieu", "zoneOrder": 10, "itemOrder": 7, "name": "Batterie projecteur", "qty": 1, "unit": "pièce", "category": "Éclairage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z10-M008", "vehicle": "FPT GO", "zone": "Rideau milieu droit", "subzone": "Milieu", "zoneOrder": 10, "itemOrder": 8, "name": "Batterie découpeuse", "qty": 1, "unit": "pièce", "category": "Découpe", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z10-M009", "vehicle": "FPT GO", "zone": "Rideau milieu droit", "subzone": "Milieu", "zoneOrder": 10, "itemOrder": 9, "name": "Stoppeur de fumées", "qty": 1, "unit": "pièce", "category": "Incendie", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z10-M010", "vehicle": "FPT GO", "zone": "Rideau milieu droit", "subzone": "Bas", "zoneOrder": 10, "itemOrder": 10, "name": "LSPCC avec commande", "qty": 2, "unit": "ensembles", "category": "Sauvetage", "criticality": "Critique", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z10-M011", "vehicle": "FPT GO", "zone": "Rideau milieu droit", "subzone": "Bas", "zoneOrder": 10, "itemOrder": 11, "name": "Halligan tool", "qty": 1, "unit": "pièce", "category": "Forcement", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z10-M012", "vehicle": "FPT GO", "zone": "Rideau milieu droit", "subzone": "Bas", "zoneOrder": 10, "itemOrder": 12, "name": "Merlin", "qty": 1, "unit": "pièce", "category": "Forcement", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z10-M013", "vehicle": "FPT GO", "zone": "Rideau milieu droit", "subzone": "Bas", "zoneOrder": 10, "itemOrder": 13, "name": "Tableau de contrôleur", "qty": 1, "unit": "pièce", "category": "ARI", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z10-M014", "vehicle": "FPT GO", "zone": "Rideau milieu droit", "subzone": "Bas", "zoneOrder": 10, "itemOrder": 14, "name": "Lignes guide", "qty": 2, "unit": "pièces", "category": "ARI", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z10-M015", "vehicle": "FPT GO", "zone": "Rideau milieu droit", "subzone": "Bas", "zoneOrder": 10, "itemOrder": 15, "name": "Coffret Spiraled", "qty": 1, "unit": "coffret", "category": "Signalisation", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z11-M001", "vehicle": "FPT GO", "zone": "Rideau avant droit", "subzone": "Gauche", "zoneOrder": 11, "itemOrder": 1, "name": "OFD", "qty": 1, "unit": "pièce", "category": "Outillage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z11-M002", "vehicle": "FPT GO", "zone": "Rideau avant droit", "subzone": "Gauche", "zoneOrder": 11, "itemOrder": 2, "name": "Fourche droite", "qty": 1, "unit": "pièce", "category": "Outillage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z11-M003", "vehicle": "FPT GO", "zone": "Rideau avant droit", "subzone": "Gauche", "zoneOrder": 11, "itemOrder": 3, "name": "Fourche recourbée", "qty": 1, "unit": "pièce", "category": "Outillage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z11-M004", "vehicle": "FPT GO", "zone": "Rideau avant droit", "subzone": "Gauche", "zoneOrder": 11, "itemOrder": 4, "name": "Balai de cantonnier", "qty": 1, "unit": "pièce", "category": "Outillage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z11-M005", "vehicle": "FPT GO", "zone": "Rideau avant droit", "subzone": "Gauche", "zoneOrder": 11, "itemOrder": 5, "name": "Pelle", "qty": 1, "unit": "pièce", "category": "Outillage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z11-M006", "vehicle": "FPT GO", "zone": "Rideau avant droit", "subzone": "Gauche", "zoneOrder": 11, "itemOrder": 6, "name": "Scie à bûches", "qty": 1, "unit": "pièce", "category": "Outillage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z11-M007", "vehicle": "FPT GO", "zone": "Rideau avant droit", "subzone": "Gauche", "zoneOrder": 11, "itemOrder": 7, "name": "Gaffe", "qty": 1, "unit": "pièce", "category": "Outillage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z11-M008", "vehicle": "FPT GO", "zone": "Rideau avant droit", "subzone": "Gauche", "zoneOrder": 11, "itemOrder": 8, "name": "Coupe-boulon", "qty": 1, "unit": "pièce", "category": "Outillage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z11-M009", "vehicle": "FPT GO", "zone": "Rideau avant droit", "subzone": "Gauche", "zoneOrder": 11, "itemOrder": 9, "name": "Pioche", "qty": 1, "unit": "pièce", "category": "Outillage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z11-M010", "vehicle": "FPT GO", "zone": "Rideau avant droit", "subzone": "Gauche", "zoneOrder": 11, "itemOrder": 10, "name": "Masse", "qty": 1, "unit": "pièce", "category": "Outillage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z11-M011", "vehicle": "FPT GO", "zone": "Rideau avant droit", "subzone": "Gauche", "zoneOrder": 11, "itemOrder": 11, "name": "Hache", "qty": 1, "unit": "pièce", "category": "Outillage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z11-M012", "vehicle": "FPT GO", "zone": "Rideau avant droit", "subzone": "Haut / milieu / bas", "zoneOrder": 11, "itemOrder": 12, "name": "Lot prompt secours", "qty": 1, "unit": "sac", "category": "Secours", "criticality": "Critique", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z11-M013", "vehicle": "FPT GO", "zone": "Rideau avant droit", "subzone": "Haut / milieu / bas", "zoneOrder": 11, "itemOrder": 13, "name": "Tuyaux 45 x20 en écheveaux préconnectés avec LDMR", "qty": 4, "unit": "pièces", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z11-M014", "vehicle": "FPT GO", "zone": "Rideau avant droit", "subzone": "Haut / milieu / bas", "zoneOrder": 11, "itemOrder": 14, "name": "Tuyaux 70 x20 en écheveaux préconnectés avec division mixte", "qty": 4, "unit": "pièces", "category": "Hydraulique", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z11-M015", "vehicle": "FPT GO", "zone": "Rideau avant droit", "subzone": "Haut / milieu / bas", "zoneOrder": 11, "itemOrder": 15, "name": "Bouteilles d’ARI", "qty": 6, "unit": "pièces", "category": "ARI", "criticality": "Critique", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z11-M016", "vehicle": "FPT GO", "zone": "Rideau avant droit", "subzone": "Haut / milieu / bas", "zoneOrder": 11, "itemOrder": 16, "name": "Enrouleur avec support métallique pour projecteur", "qty": 1, "unit": "pièce", "category": "Éclairage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z11-M017", "vehicle": "FPT GO", "zone": "Rideau avant droit", "subzone": "Haut / milieu / bas", "zoneOrder": 11, "itemOrder": 17, "name": "Trépied pour projecteur sur batterie", "qty": 1, "unit": "pièce", "category": "Éclairage", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z12-M001", "vehicle": "FPT GO", "zone": "Lot Prompt Secours", "subzone": "Ventilation", "zoneOrder": 12, "itemOrder": 1, "name": "Bouteille O2 - 5 litres", "qty": 1, "unit": "pièce", "category": "Secours", "criticality": "Critique", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z12-M002", "vehicle": "FPT GO", "zone": "Lot Prompt Secours", "subzone": "Ventilation", "zoneOrder": 12, "itemOrder": 2, "name": "Insufflateur adulte avec tubulure UU", "qty": 1, "unit": "pièce", "category": "Secours", "criticality": "Critique", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z12-M003", "vehicle": "FPT GO", "zone": "Lot Prompt Secours", "subzone": "Ventilation", "zoneOrder": 12, "itemOrder": 3, "name": "Masques pour BAVU UU T5 / T3", "qty": 2, "unit": "pièces", "category": "Secours", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z12-M004", "vehicle": "FPT GO", "zone": "Lot Prompt Secours", "subzone": "Ventilation", "zoneOrder": 12, "itemOrder": 4, "name": "Masque haute concentration adulte", "qty": 1, "unit": "pièce", "category": "Secours", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z12-M005", "vehicle": "FPT GO", "zone": "Lot Prompt Secours", "subzone": "Kits pansements", "zoneOrder": 12, "itemOrder": 5, "name": "Unidoses de chlorhexidine", "qty": 3, "unit": "pièces", "category": "Secours", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z12-M006", "vehicle": "FPT GO", "zone": "Lot Prompt Secours", "subzone": "Kits pansements", "zoneOrder": 12, "itemOrder": 6, "name": "Unidoses de chlorure de sodium 0,9%", "qty": 2, "unit": "pièces", "category": "Secours", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z12-M007", "vehicle": "FPT GO", "zone": "Lot Prompt Secours", "subzone": "Kits pansements", "zoneOrder": 12, "itemOrder": 7, "name": "Compresses 7,5 x 7,5 cm", "qty": 5, "unit": "paquets", "category": "Secours", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z12-M008", "vehicle": "FPT GO", "zone": "Lot Prompt Secours", "subzone": "Kits pansements", "zoneOrder": 12, "itemOrder": 8, "name": "Rouleau de sparadrap", "qty": 1, "unit": "pièce", "category": "Secours", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z12-M009", "vehicle": "FPT GO", "zone": "Lot Prompt Secours", "subzone": "Kits pansements", "zoneOrder": 12, "itemOrder": 9, "name": "Bandes de crêpe 5 cm et 10 cm", "qty": 2, "unit": "pièces", "category": "Secours", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z12-M010", "vehicle": "FPT GO", "zone": "Lot Prompt Secours", "subzone": "Kits pansements", "zoneOrder": 12, "itemOrder": 10, "name": "Réserve gants à usage unique", "qty": 1, "unit": "réserve", "category": "Secours", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z12-M011", "vehicle": "FPT GO", "zone": "Lot Prompt Secours", "subzone": "Kits pansements", "zoneOrder": 12, "itemOrder": 11, "name": "Couverture isothermique", "qty": 1, "unit": "pièce", "category": "Secours", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z12-M012", "vehicle": "FPT GO", "zone": "Lot Prompt Secours", "subzone": "Kits pansements", "zoneOrder": 12, "itemOrder": 12, "name": "Gel hydroalcoolique", "qty": 1, "unit": "flacon", "category": "Secours", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z12-M013", "vehicle": "FPT GO", "zone": "Lot Prompt Secours", "subzone": "Kits pansements", "zoneOrder": 12, "itemOrder": 13, "name": "Pansement absorbant", "qty": 1, "unit": "pièce", "category": "Secours", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z12-M014", "vehicle": "FPT GO", "zone": "Lot Prompt Secours", "subzone": "Kits pansements", "zoneOrder": 12, "itemOrder": 14, "name": "Watergel 10 x 10 cm", "qty": 2, "unit": "pièces", "category": "Secours", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z12-M015", "vehicle": "FPT GO", "zone": "Lot Prompt Secours", "subzone": "Kits pansements", "zoneOrder": 12, "itemOrder": 15, "name": "Poche de froid", "qty": 1, "unit": "pièce", "category": "Secours", "criticality": "Normale", "photo": "", "active": "Oui"}, {"id": "FPTGO-Z12-M016", "vehicle": "FPT GO", "zone": "Lot Prompt Secours", "subzone": "Divers", "zoneOrder": 12, "itemOrder": 16, "name": "Couteau de sécurité", "qty": 1, "unit": "pièce", "category": "Secours", "criticality": "Normale", "photo": "", "active": "Oui"}];
let editingInventoryIndex = null;

function $(id){return document.getElementById(id)}
function showScreen(id){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo(0,0);
  renderAll();
}
document.querySelectorAll("[data-go]").forEach(btn => btn.addEventListener("click", () => showScreen(btn.dataset.go)));

function toast(message){
  const t = $("toast");
  t.textContent = message;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}

$("simulateScan").onclick = () => {
  currentStep = 0;
  completed = new Set();
  renderStep();
  showScreen("check");
  toast("QR code reconnu : FPT GO");
};

function flattenItems(step){
  return step.groups.flatMap(g => g.items.map(item => ({group:g.name, emoji:item[0], name:item[1], qty:item[2]})));
}

function renderStep(){
  const step = appData.steps[currentStep];
  $("zoneTitle").textContent = step.title;
  $("stepLabel").textContent = `Étape ${currentStep + 1} / ${appData.steps.length}`;
  const totalItems = flattenItems(step).length;
  $("itemsCount").textContent = `${totalItems} élément${totalItems > 1 ? "s" : ""}`;
  $("progressBar").style.width = `${((currentStep + 1) / appData.steps.length) * 100}%`;
  $("referencePhoto").innerHTML = `<span>📷</span><strong>${step.photo}</strong><small>Photo de référence à intégrer</small>`;

  $("inventoryList").innerHTML = step.groups.map((group, groupIndex) => `
    <div class="group-title">${group.name}</div>
    ${group.items.map((item, itemIndex) => {
      const key = issueKey(currentStep, groupIndex, itemIndex);
      const issue = stepIssues[key];
      return `
        <div class="item-row ${issue ? "has-issue" : ""}" data-group="${groupIndex}" data-item="${itemIndex}">
          <span class="item-emoji">${item[0]}</span>
          <strong>${item[1]}</strong>
          <span class="qty">x ${item[2]}</span>
          ${issue ? `<span class="item-issue-badge">⚠️ ${issue.problemQty || 1} · ${issue.problem}</span>` : ""}
        </div>
      `;
    }).join("")}
  `).join("");

  document.querySelectorAll(".item-row").forEach(row => {
    row.onclick = () => openItemIssue(Number(row.dataset.group), Number(row.dataset.item));
  });
}

$("conforme").onclick = () => {
  syncStepIssuesToReports(currentStep);
  completed.add(currentStep);
  if(currentStep < appData.steps.length - 1){
    currentStep++;
    renderStep();
    toast("Étape validée");
  } else {
    $("finishedSteps").textContent = appData.steps.length;
    $("finishedIssues").textContent = Object.values(stepIssues).length;
    showScreen("finish");
  }
};

$("viewAnomalies").onclick = () => {
  const currentIssues = Object.values(stepIssues).filter(i => i.stepIndex === currentStep);
  if(!currentIssues.length){
    toast("Aucune anomalie sur cette étape");
    return;
  }
  renderAnomaly();
  showScreen("anomaly");
};


function issueKey(stepIndex, groupIndex, itemIndex){
  return `${stepIndex}-${groupIndex}-${itemIndex}`;
}

function openItemIssue(groupIndex, itemIndex){
  const step = appData.steps[currentStep];
  const item = step.groups[groupIndex].items[itemIndex];
  const key = issueKey(currentStep, groupIndex, itemIndex);
  currentItemIssue = { key, stepIndex: currentStep, groupIndex, itemIndex, item };

  $("itemIssueTitle").textContent = step.title;
  $("itemIssueEmoji").textContent = item[0];
  $("itemIssueName").textContent = item[1];
  $("itemIssueQty").textContent = `Quantité attendue : ${item[2]}`;

  const existing = stepIssues[key];
  $("itemProblem").value = existing?.problem || "Manquant";
  if($("itemProblemQty")) $("itemProblemQty").value = existing?.problemQty || "1";
  $("itemPriority").value = existing?.priority || "Normale";
  $("itemComment").value = existing?.comment || "";
  $("deleteItemIssue").style.display = existing ? "block" : "none";

  $("itemIssueDialog").showModal();
}

$("closeItemIssue").onclick = () => $("itemIssueDialog").close();

$("saveItemIssue").onclick = () => {
  if(!currentItemIssue) return;
  const { key, stepIndex, item } = currentItemIssue;
  stepIssues[key] = {
    key,
    stepIndex,
    asset: appData.vehicle.name,
    zone: appData.steps[stepIndex].title,
    emoji: item[0],
    item: item[1],
    qty: item[2],
    problem: $("itemProblem").value,
    problemQty: $("itemProblemQty") ? $("itemProblemQty").value : "1",
    priority: $("itemPriority").value,
    comment: $("itemComment").value || "Aucun commentaire."
  };
  $("itemIssueDialog").close();
  renderStep();
  toast("Anomalie enregistrée, vérification en cours");
};

$("deleteItemIssue").onclick = () => {
  if(currentItemIssue){
    delete stepIssues[currentItemIssue.key];
    $("itemIssueDialog").close();
    renderStep();
    toast("Anomalie supprimée");
  }
};

function syncStepIssuesToReports(stepIndex){
  const issues = Object.values(stepIssues).filter(i => i.stepIndex === stepIndex && !i.sent);
  issues.forEach(issue => {
    const report = {
      id: Date.now() + Math.floor(Math.random() * 999),
      asset: issue.asset,
      zone: issue.zone,
      origin: "Vérification matin",
      type: issue.problem,
      item: `${issue.item} (${issue.problemQty || 1} / ${issue.qty})`,
      comment: issue.comment,
      status: "Nouveau",
      priority: issue.priority,
      author: currentUser ? `${currentUser.grade} ${currentUser.nom}` : "Inconnu",
      time: "À l'instant"
    };
    reports.unshift(report);
    if(typeof saveRemonteeSupabase === "function") saveRemonteeSupabase(report);
    issue.sent = true;
  });
}


function renderAnomaly(){
  const step = appData.steps[currentStep];
  $("anomalyZone").textContent = step.title;
  const currentIssues = Object.values(stepIssues).filter(i => i.stepIndex === currentStep);
  $("anomalyItems").innerHTML = currentIssues.length ? currentIssues.map(issue => `
    <div class="checkbox-row">
      <span>${issue.emoji}</span>
      <div>
        <strong>${issue.item}</strong><br>
        <span class="muted">${issue.problem} · ${issue.comment}</span>
      </div>
      <span class="qty">x ${issue.qty}</span>
    </div>
  `).join("") : `<p class="muted">Aucune anomalie enregistrée sur cette étape.</p>`;
}

$("saveAnomaly").onclick = () => {
  syncStepIssuesToReports(currentStep);
  completed.add(currentStep);
  toast("Anomalies envoyées au service technique");
  if(currentStep < appData.steps.length - 1){
    currentStep++;
    renderStep();
    showScreen("check");
  } else {
    $("finishedSteps").textContent = appData.steps.length;
    $("finishedIssues").textContent = Object.values(stepIssues).length;
    showScreen("finish");
  }
};

$("sendQuickReport").onclick = () => {
  const report = {
    id: Date.now(),
    asset: $("quickAsset").value,
    zone: "Signalement direct",
    origin: $("quickOrigin").value,
    type: $("quickType").value,
    item: "—",
    comment: $("quickComment").value || "Aucun commentaire.",
    status: "Nouveau",
    priority: "Normale",
    author: currentUser ? `${currentUser.grade} ${currentUser.nom}` : "Inconnu",
    time: "À l'instant"
  };
  reports.unshift(report);
  if(typeof saveRemonteeSupabase === "function") saveRemonteeSupabase(report);
  $("quickComment").value = "";
  toast("Avarie envoyée au service technique");
  showScreen("home");
};

$("openInfo").onclick = () => $("infoDialog").showModal();
$("closeInfo").onclick = () => $("infoDialog").close();
$("closeFix").onclick = () => $("fixDialog").close();

function statusClass(status){
  if(status === "Clôturé" || status === "Corrigé par SP") return "green";
  if(status === "Pris en compte" || status === "En cours") return "orange";
  return "red";
}

function renderReports(){
  const myName = currentUser ? `${currentUser.grade} ${currentUser.nom}` : null;
  $("homeReportsCount").textContent = myName ? reports.filter(r => r.author === myName).length : reports.filter(r => r.status === "Nouveau").length;

  $("myReportsList").innerHTML = reports.filter(r => !myName || r.author === myName).map(r => `
    <article class="report-card">
      <div class="report-top">
        <div><strong>${r.asset}</strong><br><span class="muted">${r.zone} · ${r.origin}</span></div>
        <span class="pill ${statusClass(r.status)}">${r.status}</span>
      </div>
      <p><strong>${r.type}</strong> — ${r.item}</p>
      <p class="muted">${r.comment}</p>
      <small class="muted">${r.time}</small>
      ${!["Clôturé","Corrigé par SP"].includes(r.status) ? `<button class="btn secondary full fix-btn" data-id="${r.id}">J’ai réglé</button>` : ""}
    </article>
  `).join("");

  document.querySelectorAll(".fix-btn").forEach(btn => btn.onclick = () => {
    activeFixReportId = Number(btn.dataset.id);
    $("fixDialog").showModal();
  });

  const filter = $("reportFilter")?.value || "all";
  $("techReportsList").innerHTML = reports.filter(r => filter === "all" || r.status === filter).map(r => `
    <article class="tech-report">
      <div><strong>${r.asset}</strong><br><span class="muted">${r.zone}</span></div>
      <div><strong>${r.type}</strong><br><span class="muted">${r.item}</span></div>
      <div>${r.author}<br><span class="muted">${r.time}</span></div>
      <div>
        <span class="pill ${statusClass(r.status)}">${r.status}</span>
        <button class="btn ghost take-btn" data-id="${r.id}">Prendre en charge</button>
        <button class="btn primary close-btn" data-id="${r.id}">Clôturer</button>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".take-btn").forEach(btn => btn.onclick = () => {
    const r = reports.find(x => x.id === Number(btn.dataset.id));
    if(r){ r.status = "Pris en compte"; if(typeof updateRemonteeStatusSupabase === "function") updateRemonteeStatusSupabase(r.id, "Pris en compte"); }
    renderAll();
  });
  document.querySelectorAll(".close-btn").forEach(btn => btn.onclick = () => {
    const r = reports.find(x => x.id === Number(btn.dataset.id));
    if(r){ r.status = "Clôturé"; if(typeof updateRemonteeStatusSupabase === "function") updateRemonteeStatusSupabase(r.id, "Clôturé"); }
    renderAll();
  });

  $("newCount").textContent = reports.filter(r => r.status === "Nouveau").length;
  $("progressCount").textContent = reports.filter(r => ["Pris en compte","En cours"].includes(r.status)).length;
  $("spFixedCount").textContent = reports.filter(r => r.status === "Corrigé par SP").length;
}

$("confirmFix").onclick = () => {
  const r = reports.find(x => x.id === activeFixReportId);
  if(r){
    r.status = "Corrigé par SP"; if(typeof updateRemonteeStatusSupabase === "function") updateRemonteeStatusSupabase(r.id, "Corrigé par SP");
    const c = $("fixComment").value;
    r.comment += c ? ` Correction SP : ${c}` : " Correction SP indiquée.";
  }
  $("fixComment").value = "";
  $("fixDialog").close();
  renderAll();
  toast("Signalement marqué corrigé par SP");
};

$("reportFilter").onchange = renderReports;

document.querySelectorAll(".tech-nav").forEach(btn => btn.onclick = () => {
  document.querySelectorAll(".tech-nav").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".tech-tab").forEach(t => t.classList.remove("active"));
  btn.classList.add("active");
  $(btn.dataset.tab).classList.add("active");
  $("techTitle").textContent = btn.textContent;
});




const inventoryVehicles = [
  {id:"fpt-go", category:"rolling", name:"FPT GO", plate:"GQ 311 JE", type:"Fourgon pompe tonne", status:"Actif"},
  {id:"vsav-02", category:"rolling", name:"VSAV 02", plate:"AB-123-CD", type:"Véhicule de secours et d’assistance aux victimes", status:"Actif"},
  {id:"mpr-02", category:"equipment", name:"MPR 02", plate:"MAT-MPR-02", type:"Motopompe remorquable", status:"Actif"},
  {id:"motopompe-01", category:"equipment", name:"Motopompe 01", plate:"MAT-MP-01", type:"Motopompe portable", status:"Actif"}
];

const vehicleZones = [
  {id:"Cabine avant", label:"Cabine avant", cls:"zone-cab"},
  {id:"Rideau avant gauche", label:"R. av. G", cls:"zone-left-front"},
  {id:"Rideau milieu gauche", label:"R. mil. G", cls:"zone-left-middle"},
  {id:"Rideau arrière gauche", label:"R. ar. G", cls:"zone-left-rear"},
  {id:"Rideau avant droit", label:"R. av. D", cls:"zone-right-front"},
  {id:"Rideau milieu droit", label:"R. mil. D", cls:"zone-right-middle"},
  {id:"Rideau arrière droit", label:"R. ar. D", cls:"zone-right-rear"},
  {id:"Toit", label:"Toit", cls:"zone-roof"},
  {id:"Arrière véhicule", label:"Arrière", cls:"zone-back"}
];

const materialLibrary = [
  {name:"ARI avec BSL, liaison personnel et masque", category:"ARI", qty:1},
  {name:"Bouteille d’ARI", category:"ARI", qty:1},
  {name:"Tableau de contrôleur", category:"ARI", qty:1},
  {name:"Ligne guide", category:"ARI", qty:1},
  {name:"Portatif TPH 900", category:"Communication", qty:1},
  {name:"Kit radio", category:"Communication", qty:1},
  {name:"Projecteur", category:"Éclairage", qty:1},
  {name:"Batterie projecteur", category:"Éclairage", qty:1},
  {name:"Trépied projecteur", category:"Éclairage", qty:1},
  {name:"Gilet haute visibilité", category:"EPI", qty:1},
  {name:"Combinaison CAT3", category:"EPI", qty:1},
  {name:"Cône de Lübeck", category:"Balisage", qty:1},
  {name:"Rouleau de rubalise", category:"Balisage", qty:1},
  {name:"Boîte de craies", category:"Balisage", qty:1},
  {name:"Carte carburant", category:"Documents / cartes", qty:1},
  {name:"Badge autoroute", category:"Documents / cartes", qty:1},
  {name:"Classeur cartographie", category:"Documents / cartes", qty:1},
  {name:"Classeur PI", category:"Documents / cartes", qty:1},
  {name:"Outil OFD", category:"Outillage", qty:1},
  {name:"Clés gaz", category:"Outillage", qty:1},
  {name:"Polycoise", category:"Outillage", qty:1},
  {name:"Halligan tool", category:"Outillage", qty:1},
  {name:"Merlin", category:"Outillage", qty:1},
  {name:"Pelle", category:"Outillage", qty:1},
  {name:"Pioche", category:"Outillage", qty:1},
  {name:"Hache", category:"Outillage", qty:1},
  {name:"Tuyau Ø45 x20 m", category:"Hydraulique", qty:1},
  {name:"Tuyau Ø70 x20 m", category:"Hydraulique", qty:1},
  {name:"LDV 500", category:"Hydraulique", qty:1},
  {name:"LDV 1000", category:"Hydraulique", qty:1},
  {name:"Division", category:"Hydraulique", qty:1},
  {name:"Réduction", category:"Hydraulique", qty:1},
  {name:"Aspiral", category:"Hydraulique", qty:1},
  {name:"Crépine", category:"Hydraulique", qty:1},
  {name:"Flotteur", category:"Hydraulique", qty:1},
  {name:"Échelle à coulisse", category:"Échelles", qty:1},
  {name:"Échelle à crochet", category:"Échelles", qty:1},
  {name:"Échelle télescopique", category:"Échelles", qty:1},
  {name:"LSPCC", category:"Sauvetage", qty:1},
  {name:"Cagoule d’évacuation", category:"Sauvetage", qty:1},
  {name:"Lot prompt secours", category:"Secours", qty:1},
  {name:"Bouteille O2 5 L", category:"Secours", qty:1},
  {name:"Insufflateur adulte", category:"Secours", qty:1}
];

let selectedInventoryCategory = "rolling";
let selectedInventoryVehicle = "fpt-go";
let selectedInventoryZone = "Cabine avant";

function normalizeInventoryData(){
  if(typeof serviceInventory === "undefined") window.serviceInventory = [];
  serviceInventory.forEach(item => {
    const vehicle = inventoryVehicles.find(v => v.name === item.vehicle);
    item.vehicleId = vehicle?.id || item.vehicleId || "fpt-go";
    item.zone = item.zone || "Nouvelle zone";
    item.qty = Number(item.qty || 1);
  });
}
normalizeInventoryData();

function renderCheckSheets(){
  const view = $("inventoryCategoryView");
  if(!view) return;
  normalizeInventoryData();

  document.querySelectorAll(".inventory-category").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.inventoryCategory === selectedInventoryCategory);
    btn.onclick = () => {
      selectedInventoryCategory = btn.dataset.inventoryCategory;
      if(selectedInventoryCategory === "create"){
        $("createInventoryDialog").showModal();
        selectedInventoryCategory = "rolling";
      }
      renderCheckSheets();
    };
  });

  if(!inventoryVehicles.find(v => v.id === selectedInventoryVehicle && v.category === selectedInventoryCategory)){
    selectedInventoryVehicle = inventoryVehicles.find(v => v.category === selectedInventoryCategory)?.id || inventoryVehicles[0]?.id;
  }

  const selectedVehicle = inventoryVehicles.find(v => v.id === selectedInventoryVehicle);

  if(!selectedVehicle){
    view.innerHTML = `<p class="muted">Aucun inventaire disponible.</p>`;
    return;
  }

  if(!view.dataset.mode || view.dataset.mode === "list"){
    renderInventoryList(view);
  } else {
    renderInventoryDetail(view, selectedVehicle);
  }
}

function renderInventoryList(view){
  view.dataset.mode = "list";
  const vehicles = inventoryVehicles.filter(v => v.category === selectedInventoryCategory);
  view.innerHTML = `
    <div class="inventory-list-grid">
      ${vehicles.map(v => {
        const count = serviceInventory.filter(i => i.vehicleId === v.id || i.vehicle === v.name).length;
        return `
          <article class="inventory-vehicle-card">
            <h3>${v.name}</h3>
            <p>${v.type}</p>
            <p><strong>${v.plate}</strong></p>
            <p>${count} matériels inventoriés</p>
            <button class="btn secondary open-inventory" data-id="${v.id}">Ouvrir l’inventaire</button>
          </article>
        `;
      }).join("")}
    </div>
  `;
  document.querySelectorAll(".open-inventory").forEach(btn => {
    btn.onclick = () => {
      selectedInventoryVehicle = btn.dataset.id;
      view.dataset.mode = "detail";
      selectedInventoryZone = "Cabine avant";
      renderCheckSheets();
    };
  });
}

function renderInventoryDetail(view, vehicle){
  const zones = vehicleZones;
  const zoneItems = serviceInventory.filter(i => (i.vehicleId === vehicle.id || i.vehicle === vehicle.name) && i.zone === selectedInventoryZone);
  const allCount = serviceInventory.filter(i => i.vehicleId === vehicle.id || i.vehicle === vehicle.name).length;
  view.dataset.mode = "detail";
  view.innerHTML = `
    <button class="btn ghost back-to-list" id="backInventoryList">← Retour à la liste</button>

    <div class="vehicle-detail-card">
      <div class="panel-head">
        <div>
          <p class="eyebrow">Inventaire véhicule</p>
          <h2>${vehicle.name}</h2>
        </div>
        <button class="btn primary" id="editVehicleMeta">Modifier l’inventaire</button>
      </div>
      <div class="vehicle-detail-grid">
        <div><span>Immatriculation / référence</span><strong>${vehicle.plate}</strong></div>
        <div><span>Type de véhicule</span><strong>${vehicle.type}</strong></div>
        <div><span>Matériels</span><strong>${allCount}</strong></div>
      </div>
    </div>

    <div class="inventory-detail-layout">
      <div>
        <div class="vehicle-drawing">
          <div class="vehicle-svg">
            <div class="vehicle-body"></div>
            <div class="vehicle-cab"></div>
            <div class="vehicle-rear"></div>
            <div class="vehicle-wheel w1"></div>
            <div class="vehicle-wheel w2"></div>
            ${zones.map(z => `<button class="zone-hotspot ${z.cls} ${z.id === selectedInventoryZone ? "active" : ""}" data-zone="${z.id}">${z.label}</button>`).join("")}
          </div>
        </div>

        <div class="zone-editor">
          <div class="zone-editor-head">
            <div>
              <h3>${selectedInventoryZone}</h3>
              <span class="muted">${zoneItems.length} matériels dans cette zone</span>
            </div>
            <button class="btn secondary" id="addBlankToZone">+ Ajouter manuel</button>
          </div>
          <div class="zone-material-list" id="zoneDropArea">
            ${zoneItems.length ? zoneItems.map((item, index) => {
              const globalIndex = serviceInventory.indexOf(item);
              return `
                <div class="zone-material-row" data-index="${globalIndex}">
                  <div>
                    <strong>${item.name}</strong>
                    <small>${item.category || "Sans catégorie"} · ${item.subzone || selectedInventoryZone}</small>
                  </div>
                  <input type="number" min="1" value="${item.qty}" data-zone-qty="${globalIndex}">
                  <button class="delete-mini" data-zone-delete="${globalIndex}">Suppr.</button>
                </div>`;
            }).join("") : `<p class="muted">Glisse ici du matériel depuis la bibliothèque ou ajoute un élément manuel.</p>`}
          </div>
        </div>
      </div>

      <aside class="library-panel">
        <h3>Bibliothèque matériel</h3>
        <div class="library-filters">
          <input id="librarySearch" placeholder="Rechercher un matériel...">
          <select id="libraryCategory"></select>
        </div>
        <div class="library-list" id="libraryList"></div>
      </aside>
    </div>
  `;

  $("backInventoryList").onclick = () => {
    view.dataset.mode = "list";
    renderCheckSheets();
  };

  document.querySelectorAll(".zone-hotspot").forEach(btn => {
    btn.onclick = () => {
      selectedInventoryZone = btn.dataset.zone;
      renderCheckSheets();
    };
  });

  const drop = $("zoneDropArea");
  drop.ondragover = e => {
    e.preventDefault();
    drop.classList.add("drag-over");
  };
  drop.ondragleave = () => drop.classList.remove("drag-over");
  drop.ondrop = e => {
    e.preventDefault();
    drop.classList.remove("drag-over");
    const item = JSON.parse(e.dataTransfer.getData("application/json"));
    addLibraryItemToZone(vehicle, selectedInventoryZone, item);
  };

  document.querySelectorAll("[data-zone-delete]").forEach(btn => {
    btn.onclick = () => {
      serviceInventory.splice(Number(btn.dataset.zoneDelete), 1);
      renderCheckSheets();
    };
  });
  document.querySelectorAll("[data-zone-qty]").forEach(input => {
    input.onchange = () => {
      const idx = Number(input.dataset.zoneQty);
      serviceInventory[idx].qty = Number(input.value || 1);
      renderCheckSheets();
    };
  });
  $("addBlankToZone").onclick = () => addLibraryItemToZone(vehicle, selectedInventoryZone, {name:"Nouveau matériel", category:"Autre", qty:1});
  $("editVehicleMeta").onclick = () => toast("Modification véhicule prévue : nom, immatriculation, type, zones et QR code.");

  renderLibrary();
}

function renderLibrary(){
  const categorySelect = $("libraryCategory");
  const list = $("libraryList");
  if(!categorySelect || !list) return;
  const cats = ["Toutes catégories", ...new Set(materialLibrary.map(i => i.category))];
  const currentCat = categorySelect.value || "Toutes catégories";
  categorySelect.innerHTML = cats.map(c => `<option ${c===currentCat?"selected":""}>${c}</option>`).join("");
  const search = ($("librarySearch")?.value || "").toLowerCase();
  const filtered = materialLibrary
    .filter(i => currentCat === "Toutes catégories" || i.category === currentCat)
    .filter(i => i.name.toLowerCase().includes(search));
  list.innerHTML = filtered.map((item, idx) => `
    <div class="library-item" draggable="true" data-library-index="${materialLibrary.indexOf(item)}">
      <strong>${item.name}</strong>
      <small>${item.category} · quantité par défaut ${item.qty}</small>
    </div>
  `).join("");
  document.querySelectorAll(".library-item").forEach(el => {
    el.ondragstart = e => {
      const item = materialLibrary[Number(el.dataset.libraryIndex)];
      e.dataTransfer.setData("application/json", JSON.stringify(item));
    };
    el.ondblclick = () => {
      const item = materialLibrary[Number(el.dataset.libraryIndex)];
      const vehicle = inventoryVehicles.find(v => v.id === selectedInventoryVehicle);
      addLibraryItemToZone(vehicle, selectedInventoryZone, item);
    };
  });
  $("librarySearch").oninput = renderLibrary;
  $("libraryCategory").onchange = renderLibrary;
}

function addLibraryItemToZone(vehicle, zone, item){
  const existingZoneItems = serviceInventory.filter(i => (i.vehicleId === vehicle.id || i.vehicle === vehicle.name) && i.zone === zone);
  serviceInventory.push({
    id: `${vehicle.id}-${zone}-${Date.now()}`,
    vehicleId: vehicle.id,
    vehicle: vehicle.name,
    zone,
    subzone: zone,
    zoneOrder: vehicleZones.findIndex(z => z.id === zone) + 1,
    itemOrder: existingZoneItems.length + 1,
    name: item.name,
    qty: item.qty || 1,
    unit: "pièce",
    category: item.category || "Autre",
    criticality: "Normale",
    photo: "",
    active: "Oui"
  });
  toast(`${item.name} ajouté à ${zone}`);
  renderCheckSheets();
}

if($("createInventoryBtn")) $("createInventoryBtn").onclick = () => $("createInventoryDialog").showModal();
if($("closeCreateInventory")) $("closeCreateInventory").onclick = () => $("createInventoryDialog").close();
if($("saveNewInventory")) $("saveNewInventory").onclick = () => {
  const name = $("newInventoryName").value || "Nouvel inventaire";
  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now();
  inventoryVehicles.push({
    id,
    category:$("newInventoryCategory").value,
    name,
    plate:$("newInventoryPlate").value || "À définir",
    type:$("newInventoryType").value || "À définir",
    status:"Actif"
  });
  selectedInventoryCategory = $("newInventoryCategory").value;
  selectedInventoryVehicle = id;
  selectedInventoryZone = "Cabine avant";
  $("createInventoryDialog").close();
  const view = $("inventoryCategoryView");
  if(view) view.dataset.mode = "detail";
  renderCheckSheets();
};


function renderAssets(){
  $("vehiclesGrid").innerHTML = vehicles.map(assetCard).join("");
  $("equipmentGrid").innerHTML = equipment.map(assetCard).join("");
}
function assetCard(a){
  const label = a.state === "ok" ? "À jour" : a.state === "soon" ? "Bientôt à faire" : "En retard";
  return `
    <article class="asset-card">
      <h3>${a.name}</h3>
      <p>${a.detail}</p>
      <p>Contrôle / CT : <strong>${a.ct}</strong></p>
      <p>Vidange / entretien : <strong>${a.oil}</strong></p>
      <p>Km / heures : <strong>${a.km}</strong></p>
      <p class="due ${a.state}">${label}</p>
    </article>
  `;
}

function renderAll(){
  renderReports();
  renderAssets();
  renderCheckSheets();
  if($("check").classList.contains("active")) renderStep();
}

/* V7: éditeur photo véhicule + carousel */
const defaultVehicleViewsV7 = [
  {id:"droite", label:"Côté droit"},
  {id:"arriere", label:"Arrière"},
  {id:"gauche", label:"Côté gauche"},
  {id:"toit", label:"Toit"},
  {id:"avant", label:"Devant"},
  {id:"interieur", label:"Intérieur"}
];

let selectedVehicleViewV7 = "gauche";
let selectedDrawZoneIdV7 = null;
let vehicleViewPhotosV7 = {};
let zoneLayoutsV7 = {
  "fpt-go": {
    droite: [],
    arriere: [{id:"Arrière véhicule", label:"Arrière", x:28, y:22, w:44, h:55}],
    gauche: [
      {id:"Cabine avant", label:"Cabine avant", x:6, y:28, w:22, h:42},
      {id:"Rideau avant gauche", label:"Rideau av. G", x:31, y:28, w:18, h:20},
      {id:"Rideau milieu gauche", label:"Rideau mil. G", x:51, y:28, w:18, h:20},
      {id:"Rideau arrière gauche", label:"Rideau ar. G", x:71, y:28, w:18, h:20},
      {id:"Rideau avant droit", label:"Zone basse 1", x:31, y:53, w:18, h:20},
      {id:"Rideau milieu droit", label:"Zone basse 2", x:51, y:53, w:18, h:20},
      {id:"Rideau arrière droit", label:"Zone basse 3", x:71, y:53, w:18, h:20}
    ],
    toit: [{id:"Toit", label:"Toit", x:20, y:20, w:60, h:60}],
    avant: [{id:"Avant véhicule", label:"Avant", x:28, y:22, w:44, h:55}],
    interieur: []
  }
};

function ensureVehicleLayoutV7(vehicleId){
  if(!zoneLayoutsV7[vehicleId]) zoneLayoutsV7[vehicleId] = {};
  defaultVehicleViewsV7.forEach(v => {
    if(!zoneLayoutsV7[vehicleId][v.id]) zoneLayoutsV7[vehicleId][v.id] = [];
  });
  if(!vehicleViewPhotosV7[vehicleId]) vehicleViewPhotosV7[vehicleId] = {};
}

function renderInventoryDetail(view, vehicle){
  ensureVehicleLayoutV7(vehicle.id);
  const zonesForView = zoneLayoutsV7[vehicle.id][selectedVehicleViewV7] || [];
  if(!selectedDrawZoneIdV7 && zonesForView[0]) selectedDrawZoneIdV7 = zonesForView[0].id;
  const selectedZone = zonesForView.find(z => z.id === selectedDrawZoneIdV7) || zonesForView[0] || null;
  if(selectedZone) selectedInventoryZone = selectedZone.id;

  const zoneItems = selectedZone ? serviceInventory.filter(i => (i.vehicleId === vehicle.id || i.vehicle === vehicle.name) && i.zone === selectedZone.id) : [];
  const allCount = serviceInventory.filter(i => i.vehicleId === vehicle.id || i.vehicle === vehicle.name).length;
  view.dataset.mode = "detail";

  view.innerHTML = `
    <button class="btn ghost back-to-list" id="backInventoryList">← Retour à la liste</button>
    <div class="vehicle-detail-card">
      <div class="panel-head">
        <div>
          <p class="eyebrow">Inventaire véhicule</p>
          <h2>${vehicle.name}</h2>
        </div>
        <button class="btn primary" id="editVehicleMeta">Modifier l’inventaire</button>
      </div>
      <div class="vehicle-detail-grid">
        <div><span>Immatriculation / référence</span><strong>${vehicle.plate}</strong></div>
        <div><span>Type de véhicule</span><strong>${vehicle.type}</strong></div>
        <div><span>Matériels</span><strong>${allCount}</strong></div>
      </div>
    </div>

    <div class="inventory-detail-layout v7">
      <aside class="left-tools">
        <div class="library-panel">
          <h3>Bibliothèque matériel</h3>
          <p class="muted">Glisse un matériel vers la zone sélectionnée.</p>
          <div class="library-filters">
            <input id="librarySearch" placeholder="Rechercher un matériel...">
            <select id="libraryCategory"></select>
          </div>
          <div class="library-list" id="libraryList"></div>
        </div>

        <div class="selected-zone-panel">
          <h3>Zone sélectionnée</h3>
          ${selectedZone ? `
            <input class="zone-name-input" id="zoneRenameInput" value="${escapeHtml(selectedZone.label)}">
            <div class="zone-material-list" id="zoneDropArea">
              ${zoneItems.length ? zoneItems.map(item => {
                const globalIndex = serviceInventory.indexOf(item);
                return `
                  <div class="zone-material-row" data-index="${globalIndex}">
                    <div>
                      <strong>${item.name}</strong>
                      <small>${item.category || "Sans catégorie"}</small>
                    </div>
                    <input type="number" min="1" value="${item.qty}" data-zone-qty="${globalIndex}">
                    <button class="delete-mini" data-zone-delete="${globalIndex}">Suppr.</button>
                  </div>`;
              }).join("") : `<p class="muted">Glisse ici du matériel depuis la bibliothèque.</p>`}
            </div>
          ` : `<div class="zone-empty">Aucune zone sélectionnée. Ajoute une zone sur la photo.</div>`}
        </div>
      </aside>

      <main>
        <div class="view-carousel">
          ${defaultVehicleViewsV7.map(v => `<button class="view-pill ${v.id === selectedVehicleViewV7 ? "active" : ""}" data-view="${v.id}">${v.label}</button>`).join("")}
        </div>

        <div class="photo-zone-editor">
          <div class="photo-stage" id="photoStage">
            <div class="vehicle-photo-placeholder">
              <div>
                <span>📷</span>
                <strong>${defaultVehicleViewsV7.find(v => v.id === selectedVehicleViewV7)?.label || "Vue véhicule"}</strong>
                <p>Importe une photo du véhicule, puis dessine les rectangles cliquables.</p>
              </div>
            </div>
            ${zonesForView.map(z => `
              <div class="draw-zone ${z.id === selectedDrawZoneIdV7 ? "active" : ""}" data-zone-id="${z.id}" style="left:${z.x}%;top:${z.y}%;width:${z.w}%;height:${z.h}%;">
                ${z.label}
                <span class="resize"></span>
              </div>
            `).join("")}
          </div>

          <div class="photo-editor-actions">
            <label class="file-label" for="vehiclePhotoInput">📷 Importer photo</label>
            <input id="vehiclePhotoInput" type="file" accept="image/*">
            <button class="btn secondary" id="addDrawZone">+ Ajouter zone</button>
            <button class="btn ghost" id="deleteDrawZone">Supprimer zone</button>
            <button class="btn primary" id="saveLayoutBtn">Enregistrer le plan</button>
          </div>
        </div>
      </main>
    </div>
  `;

  $("backInventoryList").onclick = () => {
    view.dataset.mode = "list";
    selectedDrawZoneIdV7 = null;
    renderCheckSheets();
  };

  document.querySelectorAll(".view-pill").forEach(btn => {
    btn.onclick = () => {
      selectedVehicleViewV7 = btn.dataset.view;
      selectedDrawZoneIdV7 = (zoneLayoutsV7[vehicle.id][selectedVehicleViewV7] || [])[0]?.id || null;
      renderCheckSheets();
    };
  });

  document.querySelectorAll(".draw-zone").forEach(el => setupDrawZoneEventsV7(el, vehicle.id));

  $("addDrawZone").onclick = () => {
    const newZone = {id:`Zone ${Date.now()}`, label:"Nouvelle zone", x:30, y:30, w:22, h:18};
    zoneLayoutsV7[vehicle.id][selectedVehicleViewV7].push(newZone);
    selectedDrawZoneIdV7 = newZone.id;
    renderCheckSheets();
  };

  $("deleteDrawZone").onclick = () => {
    if(!selectedDrawZoneIdV7) return;
    zoneLayoutsV7[vehicle.id][selectedVehicleViewV7] = zoneLayoutsV7[vehicle.id][selectedVehicleViewV7].filter(z => z.id !== selectedDrawZoneIdV7);
    selectedDrawZoneIdV7 = zoneLayoutsV7[vehicle.id][selectedVehicleViewV7][0]?.id || null;
    renderCheckSheets();
  };

  $("saveLayoutBtn").onclick = () => toast("Plan enregistré dans le prototype");
  $("editVehicleMeta").onclick = () => toast("Modification véhicule prévue : nom, immatriculation, type, vues et QR code.");

  $("vehiclePhotoInput").onchange = e => {
    const file = e.target.files[0];
    if(!file) return;
    const url = URL.createObjectURL(file);
    vehicleViewPhotosV7[vehicle.id][selectedVehicleViewV7] = url;
    applyVehiclePhotoV7(vehicle.id);
  };
  applyVehiclePhotoV7(vehicle.id);

  if($("zoneRenameInput")){
    $("zoneRenameInput").onchange = () => {
      const z = zoneLayoutsV7[vehicle.id][selectedVehicleViewV7].find(x => x.id === selectedDrawZoneIdV7);
      if(z){
        const oldId = z.id;
        z.label = $("zoneRenameInput").value;
        z.id = $("zoneRenameInput").value;
        serviceInventory.forEach(item => {
          if((item.vehicleId === vehicle.id || item.vehicle === vehicle.name) && item.zone === oldId) item.zone = z.id;
        });
        selectedDrawZoneIdV7 = z.id;
        selectedInventoryZone = z.id;
        renderCheckSheets();
      }
    };
  }

  const drop = $("zoneDropArea");
  if(drop){
    drop.ondragover = e => {
      e.preventDefault();
      drop.classList.add("drag-over");
    };
    drop.ondragleave = () => drop.classList.remove("drag-over");
    drop.ondrop = e => {
      e.preventDefault();
      drop.classList.remove("drag-over");
      const item = JSON.parse(e.dataTransfer.getData("application/json"));
      addLibraryItemToZone(vehicle, selectedInventoryZone, item);
    };
  }

  document.querySelectorAll("[data-zone-delete]").forEach(btn => {
    btn.onclick = () => {
      serviceInventory.splice(Number(btn.dataset.zoneDelete), 1);
      renderCheckSheets();
    };
  });
  document.querySelectorAll("[data-zone-qty]").forEach(input => {
    input.onchange = () => {
      const idx = Number(input.dataset.zoneQty);
      serviceInventory[idx].qty = Number(input.value || 1);
      renderCheckSheets();
    };
  });

  renderLibrary();
}

function applyVehiclePhotoV7(vehicleId){
  const url = vehicleViewPhotosV7[vehicleId]?.[selectedVehicleViewV7];
  const stage = $("photoStage");
  if(!stage || !url) return;
  stage.style.backgroundImage = `url('${url}')`;
  stage.style.backgroundSize = "cover";
  stage.style.backgroundPosition = "center";
  const ph = stage.querySelector(".vehicle-photo-placeholder");
  if(ph) ph.style.display = "none";
}

function setupDrawZoneEventsV7(el, vehicleId){
  el.onclick = e => {
    e.stopPropagation();
    selectedDrawZoneIdV7 = el.dataset.zoneId;
    renderCheckSheets();
  };

  const stage = $("photoStage");
  let mode = null;
  let startX, startY, start;

  const begin = (e, resize) => {
    e.preventDefault();
    e.stopPropagation();
    selectedDrawZoneIdV7 = el.dataset.zoneId;
    const zone = zoneLayoutsV7[vehicleId][selectedVehicleViewV7].find(z => z.id === selectedDrawZoneIdV7);
    if(!zone) return;
    mode = resize ? "resize" : "move";
    startX = e.clientX;
    startY = e.clientY;
    start = {...zone};
    document.onmousemove = move;
    document.onmouseup = end;
  };

  const move = e => {
    const zone = zoneLayoutsV7[vehicleId][selectedVehicleViewV7].find(z => z.id === selectedDrawZoneIdV7);
    if(!zone) return;
    const rect = stage.getBoundingClientRect();
    const dx = ((e.clientX - startX) / rect.width) * 100;
    const dy = ((e.clientY - startY) / rect.height) * 100;
    if(mode === "move"){
      zone.x = Math.max(0, Math.min(95, start.x + dx));
      zone.y = Math.max(0, Math.min(95, start.y + dy));
    } else {
      zone.w = Math.max(8, Math.min(95-zone.x, start.w + dx));
      zone.h = Math.max(8, Math.min(95-zone.y, start.h + dy));
    }
    el.style.left = zone.x + "%";
    el.style.top = zone.y + "%";
    el.style.width = zone.w + "%";
    el.style.height = zone.h + "%";
  };

  const end = () => {
    document.onmousemove = null;
    document.onmouseup = null;
    mode = null;
  };

  el.onmousedown = e => begin(e, false);
  const resize = el.querySelector(".resize");
  if(resize) resize.onmousedown = e => begin(e, true);
}


/* V8 stable check sheet module */
const libraryV8 = [
  {
    "name": "ARI + MASQUES",
    "family": "INCENDIE",
    "sub": "ARI",
    "qty": 1
  },
  {
    "name": "BOUTEILLE ARI 300bar",
    "family": "INCENDIE",
    "sub": "ARI",
    "qty": 1
  },
  {
    "name": "CHARIOTS X2",
    "family": "INCENDIE",
    "sub": "ARI",
    "qty": 1
  },
  {
    "name": "Extincteur à poudre",
    "family": "INCENDIE",
    "sub": "Extinction",
    "qty": 1
  },
  {
    "name": "EXTINCTEURS",
    "family": "INCENDIE",
    "sub": "Extinction",
    "qty": 6
  },
  {
    "name": "1 tuyau Ø70",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "2 tuyaux Ø45",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "2 tuyaux Ø70",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "Aspirateur manuel (adaptateur et raccord)",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "COUDE ALIMENTATION RACCORD KEYSER",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "CREPINE + FLOTEUR",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "Crépine/tricoise/broc",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "DEMI-MASQUE AVEC TUYAU D'AIR (dans le filet haut)",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 5
  },
  {
    "name": "DEVIDOIR TOURNANT Ø 45 DE 120m",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "DEVIDOIR TOURNANTØ 22 DE 80m + LANCE LDT",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "DIVISION 40/ 1*40 2*22 GFR",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "DIVISION MIXTE Ø 65 / 1X65 2x40",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "DIVISION Ø 40 / 1x40 2x22 GFR",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "DIVISION Ø 465/ 1X45 2x22 GFR",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "LANCE \"MITRAILLETTE \" SUR DEVIDOIR",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "LANCE 20/7 GFR",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "LANCE 500L/MIN",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "LANCE QUEUE DE PAON",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "MANIVELLE POUR DEVIDOIR TOURNANT",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "Pompe à dépression",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "Pompe électrique",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "POMPE MANUELLE",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "POMPE SOUS PRESSION",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "Pompe Thermique",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "RACCORD DE REDUCTION 65/40",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "REDUCTION 100/65",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "REDUCTION 40/22 (GFR)",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "REDUCTION 65/40",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "SEAU POMPE DORSAL",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "TUYAU DE REMPLISSAGE TONNE Ø45*10M",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "TUYAU DE Ø 110 EN COURONNE DE 10m",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "TUYAU DE Ø 22 EN COURONNE GFR DE 20m",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "TUYAU DE Ø 45 DE 1m",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "TUYAU DE Ø 45 EN COURONNE DE 10m",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "TUYAU DE Ø 45 EN COURONNE DE 20m",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 2
  },
  {
    "name": "TUYAU DE Ø 70 EN COURONNE DE 10m",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 1
  },
  {
    "name": "TUYAUX DE Ø 22 EN COURONNE GFR DE 20m",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 4
  },
  {
    "name": "TUYAUX DE Ø 45 EN COURONNE",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 4
  },
  {
    "name": "TUYAUX DE Ø 70 EN COURONNE DE 20m",
    "family": "INCENDIE",
    "sub": "Hydraulique",
    "qty": 4
  },
  {
    "name": "8 aspiraux Ø45 et 4 aspiraux Ø70",
    "family": "INCENDIE",
    "sub": "Incendie divers",
    "qty": 1
  },
  {
    "name": "ASPIRAUX DN 100",
    "family": "INCENDIE",
    "sub": "Incendie divers",
    "qty": 4
  },
  {
    "name": "BÂTES A FEU",
    "family": "INCENDIE",
    "sub": "Incendie divers",
    "qty": 2
  },
  {
    "name": "CAMION CITERNE FEUX DE FORÊT MOYEN",
    "family": "INCENDIE",
    "sub": "Incendie divers",
    "qty": 1
  },
  {
    "name": "CLE DE POTEAU",
    "family": "INCENDIE",
    "sub": "Incendie divers",
    "qty": 1
  },
  {
    "name": "COLLECTEUR ALIMENTATION Ø110/2*65",
    "family": "INCENDIE",
    "sub": "Incendie divers",
    "qty": 1
  },
  {
    "name": "DFT",
    "family": "INCENDIE",
    "sub": "Incendie divers",
    "qty": 2
  },
  {
    "name": "Epuisement / inondation",
    "family": "INCENDIE",
    "sub": "Incendie divers",
    "qty": 1
  },
  {
    "name": "HYDRO EJECTEUR",
    "family": "INCENDIE",
    "sub": "Incendie divers",
    "qty": 1
  },
  {
    "name": "Hydro-éjecteur",
    "family": "INCENDIE",
    "sub": "Incendie divers",
    "qty": 1
  },
  {
    "name": "Kit mousse bloc tête",
    "family": "INCENDIE",
    "sub": "Incendie divers",
    "qty": 1
  },
  {
    "name": "LSPCC + COMMANDE",
    "family": "INCENDIE",
    "sub": "Incendie divers",
    "qty": 1
  },
  {
    "name": "PAIRES DE GANTS DEBLAIS",
    "family": "INCENDIE",
    "sub": "Incendie divers",
    "qty": 3
  },
  {
    "name": "VANNE D'ARRET + LDMR 500L/min",
    "family": "INCENDIE",
    "sub": "Incendie divers",
    "qty": 1
  },
  {
    "name": "ECHELLE PETIT MODEL",
    "family": "INCENDIE",
    "sub": "Échelles",
    "qty": 1
  },
  {
    "name": "ECHELLE PONT",
    "family": "INCENDIE",
    "sub": "Échelles",
    "qty": 1
  },
  {
    "name": "Flacon de gel hydroalcoolique",
    "family": "SSUAP",
    "sub": "Hygiène / protection",
    "qty": 1
  },
  {
    "name": "Gel Hydroalcoolique",
    "family": "SSUAP",
    "sub": "Hygiène / protection",
    "qty": 1
  },
  {
    "name": "Bouteille O2 5 L",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Bouteilles O2 5L",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 3
  },
  {
    "name": "capteur adulte SPO2 + capteur pédiatrique SP02 UU",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Insufflateur à UU adulte",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Insufflateur pédiatrique + masque Taille 1",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Lunette à oxygène",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Lunettes de protection + masque FFP2",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "MASQUE CHIR",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 3
  },
  {
    "name": "masques chirurgicaux + FFP2",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "masques FFP2",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 3
  },
  {
    "name": "Compresse",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 1
  },
  {
    "name": "Compresses gaz hémostatique",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 2
  },
  {
    "name": "Compresses gaze hémostatique",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 2
  },
  {
    "name": "Pansement compressif (CHU ou Israélien)",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 1
  },
  {
    "name": "Pansement israélien",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 1
  },
  {
    "name": "Pansements absorbants",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 2
  },
  {
    "name": "Pansements Israélien",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 2
  },
  {
    "name": "Rouleau de sparadrap",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 1
  },
  {
    "name": "Sachets de compresses",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 10
  },
  {
    "name": "TROUSSE VERTE ( KIT PANSEMENT )",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 1
  },
  {
    "name": "ASPIRATEUR DE MUCOSITES",
    "family": "SSUAP",
    "sub": "Secours à personne",
    "qty": 1
  },
  {
    "name": "Attelle à dépression",
    "family": "SSUAP",
    "sub": "Secours à personne",
    "qty": 1
  },
  {
    "name": "Attelle à dépression poignet / avant bras",
    "family": "SSUAP",
    "sub": "Secours à personne",
    "qty": 1
  },
  {
    "name": "Attelle ALUFORM coude",
    "family": "SSUAP",
    "sub": "Secours à personne",
    "qty": 1
  },
  {
    "name": "Attelle ALUFORM jambe adulte (avec retour pied)",
    "family": "SSUAP",
    "sub": "Secours à personne",
    "qty": 1
  },
  {
    "name": "Boîte couvre sonde thermomètre tympanique",
    "family": "SSUAP",
    "sub": "Secours à personne",
    "qty": 1
  },
  {
    "name": "Brancard avec chariot, pied de perf et plan dur",
    "family": "SSUAP",
    "sub": "Secours à personne",
    "qty": 1
  },
  {
    "name": "Brancard cuillère",
    "family": "SSUAP",
    "sub": "Secours à personne",
    "qty": 1
  },
  {
    "name": "Collier cervical adulte réglable",
    "family": "SSUAP",
    "sub": "Secours à personne",
    "qty": 1
  },
  {
    "name": "Collier cervical pédiatrique",
    "family": "SSUAP",
    "sub": "Secours à personne",
    "qty": 1
  },
  {
    "name": "Couverture isothermique",
    "family": "SSUAP",
    "sub": "Secours à personne",
    "qty": 1
  },
  {
    "name": "JEU D'ATTELLES",
    "family": "SSUAP",
    "sub": "Secours à personne",
    "qty": 1
  },
  {
    "name": "JEU DE COLLIERS CERVICAUX REGLABLES",
    "family": "SSUAP",
    "sub": "Secours à personne",
    "qty": 1
  },
  {
    "name": "Poche de froid",
    "family": "SSUAP",
    "sub": "Secours à personne",
    "qty": 1
  },
  {
    "name": "Pochette avec 1 tensiomètre + 1 stéthoscope",
    "family": "SSUAP",
    "sub": "Secours à personne",
    "qty": 1
  },
  {
    "name": "Saturomètre",
    "family": "SSUAP",
    "sub": "Secours à personne",
    "qty": 1
  },
  {
    "name": "Thermomètre + 5 couvres sondes",
    "family": "SSUAP",
    "sub": "Secours à personne",
    "qty": 1
  },
  {
    "name": "Thermomètre tympanique",
    "family": "SSUAP",
    "sub": "Secours à personne",
    "qty": 1
  },
  {
    "name": "TROUSSE DE SECOURS",
    "family": "SSUAP",
    "sub": "Secours à personne",
    "qty": 1
  },
  ,{
    "name": "GHV (Gilet Haute Visibilité)",
    "family": "SSUAP",
    "sub": "Équipement personnel",
    "qty": 1
  },
  {
    "name": "Portatif Antares",
    "family": "SSUAP",
    "sub": "Communication",
    "qty": 1
  },
  {
    "name": "Masques chirurgicaux",
    "family": "SSUAP",
    "sub": "Hygiène / protection",
    "qty": 6
  },
  {
    "name": "Masques FFP2",
    "family": "SSUAP",
    "sub": "Hygiène / protection",
    "qty": 3
  },
  {
    "name": "Livret technique du véhicule",
    "family": "SSUAP",
    "sub": "Documents",
    "qty": 1
  },
  {
    "name": "Éthylotest",
    "family": "SSUAP",
    "sub": "Équipement cabine",
    "qty": 1
  },
  {
    "name": "Boîte de gants taille M",
    "family": "SSUAP",
    "sub": "Hygiène / protection",
    "qty": 1
  },
  {
    "name": "Boîte de gants taille L",
    "family": "SSUAP",
    "sub": "Hygiène / protection",
    "qty": 1
  },
  {
    "name": "Boîte de gants taille XL",
    "family": "SSUAP",
    "sub": "Hygiène / protection",
    "qty": 1
  },
  {
    "name": "Boîte de gants taille S",
    "family": "SSUAP",
    "sub": "Hygiène / protection",
    "qty": 1
  },
  {
    "name": "Sacs DASRI 30 litres",
    "family": "SSUAP",
    "sub": "Hygiène / protection",
    "qty": 2
  },
  {
    "name": "Sacs DASRI 15 litres",
    "family": "SSUAP",
    "sub": "Hygiène / protection",
    "qty": 3
  },
  {
    "name": "Fiches réflexes opérationnelles",
    "family": "SSUAP",
    "sub": "Documents",
    "qty": 3
  },
  {
    "name": "Classeur cartographie",
    "family": "SSUAP",
    "sub": "Documents",
    "qty": 1
  },
  {
    "name": "Carnet fiche bilan secouriste",
    "family": "SSUAP",
    "sub": "Documents",
    "qty": 1
  },
  {
    "name": "Cône rétractable",
    "family": "SSUAP",
    "sub": "Balisage",
    "qty": 4
  },
  {
    "name": "Cales de roue",
    "family": "SSUAP",
    "sub": "Balisage",
    "qty": 2
  },
  {
    "name": "Bouée + corde flottante",
    "family": "SSUAP",
    "sub": "Sauvetage aquatique",
    "qty": 1
  },
  {
    "name": "Cagoule d'évacuation",
    "family": "SSUAP",
    "sub": "Hygiène / protection",
    "qty": 1
  },
  {
    "name": "Brise vitre",
    "family": "SSUAP",
    "sub": "Désincarcération",
    "qty": 1
  },
  {
    "name": "Casque F2 Orange",
    "family": "SSUAP",
    "sub": "Équipement personnel",
    "qty": 3
  },
  {
    "name": "Bouteilles d'eau",
    "family": "SSUAP",
    "sub": "Divers",
    "qty": 4
  },
  {
    "name": "Attelle à dépression",
    "family": "SSUAP",
    "sub": "Immobilisation",
    "qty": 1
  },
  {
    "name": "Attelle à dépression poignet / avant-bras",
    "family": "SSUAP",
    "sub": "Immobilisation",
    "qty": 1
  },
  {
    "name": "Attelle ALUFORM jambe adulte",
    "family": "SSUAP",
    "sub": "Immobilisation",
    "qty": 1
  },
  {
    "name": "Attelle ALUFORM coude",
    "family": "SSUAP",
    "sub": "Immobilisation",
    "qty": 1
  },
  {
    "name": "MID pédiatrique",
    "family": "SSUAP",
    "sub": "Immobilisation",
    "qty": 1
  },
  {
    "name": "MID",
    "family": "SSUAP",
    "sub": "Immobilisation",
    "qty": 1
  },
  {
    "name": "Collier cervical pédiatrique réglable",
    "family": "SSUAP",
    "sub": "Immobilisation",
    "qty": 1
  },
  {
    "name": "Collier cervical adulte réglable",
    "family": "SSUAP",
    "sub": "Immobilisation",
    "qty": 2
  },
  {
    "name": "ACT",
    "family": "SSUAP",
    "sub": "Immobilisation",
    "qty": 1
  },
  {
    "name": "Chaise portoir pliante",
    "family": "SSUAP",
    "sub": "Relevage / brancardage",
    "qty": 1
  },
  {
    "name": "Pompe à dépression",
    "family": "SSUAP",
    "sub": "Immobilisation",
    "qty": 1
  },
  {
    "name": "Brancard cuillère",
    "family": "SSUAP",
    "sub": "Relevage / brancardage",
    "qty": 1
  },
  {
    "name": "Brancard avec chariot, pied de perf et plan dur",
    "family": "SSUAP",
    "sub": "Relevage / brancardage",
    "qty": 1
  },
  {
    "name": "Bouteille O2 5L",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Couteau de sécurité",
    "family": "SSUAP",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Ciseaux JESCO",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 1
  },
  {
    "name": "Vomibag",
    "family": "SSUAP",
    "sub": "Hygiène / protection",
    "qty": 1
  },
  {
    "name": "Pansement israélien",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 2
  },
  {
    "name": "Garrot hémostatique d'urgence plat",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 1
  },
  {
    "name": "Garrot tourniquet",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 1
  },
  {
    "name": "Compresses gaze hémostatique",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 2
  },
  {
    "name": "Lecteur de glycémie + bandelettes + auto-piqueurs",
    "family": "SSUAP",
    "sub": "Bilan / monitoring",
    "qty": 1
  },
  {
    "name": "Thermomètre tympanique",
    "family": "SSUAP",
    "sub": "Bilan / monitoring",
    "qty": 1
  },
  {
    "name": "Poche de froid",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 1
  },
  {
    "name": "Dosettes de savon liquide",
    "family": "SSUAP",
    "sub": "Hygiène / protection",
    "qty": 2
  },
  {
    "name": "Dosettes de chlorure de sodium",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 5
  },
  {
    "name": "Rouleau de sparadrap",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 1
  },
  {
    "name": "Bande 5 cm",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 1
  },
  {
    "name": "Bande 10 cm",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 1
  },
  {
    "name": "Lot de filets tubulaires (T2, T4, T6)",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 1
  },
  {
    "name": "Pansements absorbants",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 2
  },
  {
    "name": "Écharpes à UU",
    "family": "SSUAP",
    "sub": "Pansements",
    "qty": 2
  },
  {
    "name": "Insufflateur à UU adulte",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Masque à UU taille 3",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Masque à UU taille 5",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Masque HC adulte",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Lunette à oxygène",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Filtre antimicrobien",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Canule taille 0",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Canule taille 1",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Canule taille 2",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Canule taille 3",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Insufflateur pédiatrique + masque taille 1",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Masque HC pédiatrique",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Sonde d'aspiration F8",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Aspirateur de mucosités",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Canules d'aspiration CH26",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 2
  },
  {
    "name": "Kit d'aspiration à UU",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Aspirateur manuel",
    "family": "SSUAP",
    "sub": "Oxygénothérapie / ventilation",
    "qty": 1
  },
  {
    "name": "Schiller T7 (défibrillateur)",
    "family": "SSUAP",
    "sub": "Bilan / monitoring",
    "qty": 1
  },
  {
    "name": "Détecteur CO",
    "family": "SSUAP",
    "sub": "Bilan / monitoring",
    "qty": 1
  },
  {
    "name": "Brassard adulte normal",
    "family": "SSUAP",
    "sub": "Bilan / monitoring",
    "qty": 1
  },
  {
    "name": "Brassard adulte large",
    "family": "SSUAP",
    "sub": "Bilan / monitoring",
    "qty": 1
  },
  {
    "name": "Brassard pédiatrique",
    "family": "SSUAP",
    "sub": "Bilan / monitoring",
    "qty": 1
  },
  {
    "name": "Capteur adulte SPO2",
    "family": "SSUAP",
    "sub": "Bilan / monitoring",
    "qty": 1
  },
  {
    "name": "Capteur pédiatrique SPO2 UU",
    "family": "SSUAP",
    "sub": "Bilan / monitoring",
    "qty": 1
  },
  {
    "name": "Électrodes DSA",
    "family": "SSUAP",
    "sub": "Bilan / monitoring",
    "qty": 1
  },
  {
    "name": "Électrodes ECG",
    "family": "SSUAP",
    "sub": "Bilan / monitoring",
    "qty": 1
  },
  {
    "name": "Câble 4 brins scope",
    "family": "SSUAP",
    "sub": "Bilan / monitoring",
    "qty": 1
  },
  {
    "name": "Câble 10 brins ECG",
    "family": "SSUAP",
    "sub": "Bilan / monitoring",
    "qty": 1
  },
  {
    "name": "Saturomètre",
    "family": "SSUAP",
    "sub": "Bilan / monitoring",
    "qty": 1
  },
  {
    "name": "Tensiomètre + stéthoscope",
    "family": "SSUAP",
    "sub": "Bilan / monitoring",
    "qty": 1
  },
  {
    "name": "Drap CH",
    "family": "SSUAP",
    "sub": "Relevage / brancardage",
    "qty": 2
  },
  {
    "name": "Drap à UU",
    "family": "SSUAP",
    "sub": "Relevage / brancardage",
    "qty": 1
  },
  {
    "name": "Couverture bactériostatique SDIS",
    "family": "SSUAP",
    "sub": "Relevage / brancardage",
    "qty": 1
  },
  {
    "name": "Portoir souple de transfert",
    "family": "SSUAP",
    "sub": "Relevage / brancardage",
    "qty": 1
  },
  {
    "name": "Housse mortuaire",
    "family": "SSUAP",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Sangle de relevage",
    "family": "SSUAP",
    "sub": "Relevage / brancardage",
    "qty": 1
  },
  {
    "name": "Sangle araignée",
    "family": "SSUAP",
    "sub": "Relevage / brancardage",
    "qty": 1
  },
  {
    "name": "Kit mousse bloc tête",
    "family": "SSUAP",
    "sub": "Immobilisation",
    "qty": 1
  },
  {
    "name": "Kit protection risques biologiques",
    "family": "SSUAP",
    "sub": "Hygiène / protection",
    "qty": 2
  },
  {
    "name": "Visière de protection",
    "family": "SSUAP",
    "sub": "Hygiène / protection",
    "qty": 3
  },
  {
    "name": "Kit accouchement",
    "family": "SSUAP",
    "sub": "Kits spéciaux",
    "qty": 1
  },
  {
    "name": "Kit section de membre",
    "family": "SSUAP",
    "sub": "Kits spéciaux",
    "qty": 1
  },
  {
    "name": "Kit brûlure",
    "family": "SSUAP",
    "sub": "Kits spéciaux",
    "qty": 1
  },
  {
    "name": "Kit EPIPEN (DAI adulte + DAI pédia)",
    "family": "SSUAP",
    "sub": "Kits spéciaux",
    "qty": 1
  },
  {
    "name": "Kit perfusion + solutés",
    "family": "SSUAP",
    "sub": "Kits spéciaux",
    "qty": 1
  },
  {
    "name": "Kit AES (Dakin + cupule)",
    "family": "SSUAP",
    "sub": "Kits spéciaux",
    "qty": 1
  },
  {
    "name": "Kit Sinus",
    "family": "SSUAP",
    "sub": "Kits spéciaux",
    "qty": 1
  },
  {
    "name": "Kit Damage contrôle",
    "family": "SSUAP",
    "sub": "Kits spéciaux",
    "qty": 1
  },
  {
    "name": "Pulvérisateur solution désinfectante",
    "family": "SSUAP",
    "sub": "Hygiène / protection",
    "qty": 1
  },
  {
    "name": "Bombe bactéricide",
    "family": "SSUAP",
    "sub": "Hygiène / protection",
    "qty": 1
  },
  {
    "name": "Sangle araignée",
    "family": "SSUAP",
    "sub": "Relevage / brancardage",
    "qty": 1
  },
  {
    "name": "BOULONNEUSE A CHOCS + DOUILLES",
    "family": "SR",
    "sub": "Découpe",
    "qty": 1
  },
  {
    "name": "CHAÎNE TRONCONNEUSE",
    "family": "SR",
    "sub": "Découpe",
    "qty": 1
  },
  {
    "name": "Huile chaîne Tronçonneuse 1L",
    "family": "SR",
    "sub": "Découpe",
    "qty": 1
  },
  {
    "name": "Mélange Tronçonneuse 1L",
    "family": "SR",
    "sub": "Découpe",
    "qty": 1
  },
  {
    "name": "MEULEUSE + ADAPTATEUR + DISQUES",
    "family": "SR",
    "sub": "Découpe",
    "qty": 1
  },
  {
    "name": "SCIE A PARE-BRISE",
    "family": "SR",
    "sub": "Découpe",
    "qty": 1
  },
  {
    "name": "SCIE SABRE ET LAME DE RECHANGE",
    "family": "SR",
    "sub": "Découpe",
    "qty": 1
  },
  {
    "name": "TRONCONNEUSE",
    "family": "SR",
    "sub": "Découpe",
    "qty": 1
  },
  {
    "name": "Tronçonneuse guide 35 cm (hors véhicules)",
    "family": "SR",
    "sub": "Découpe",
    "qty": 1
  },
  {
    "name": "ADAPTATEUR POUR CHAÎNES ECARTEUR",
    "family": "SR",
    "sub": "Désincarcération",
    "qty": 2
  },
  {
    "name": "CISAILLE",
    "family": "SR",
    "sub": "Désincarcération",
    "qty": 1
  },
  {
    "name": "COUPE CEINTURE \"HOLMATRO\"",
    "family": "SR",
    "sub": "Désincarcération",
    "qty": 1
  },
  {
    "name": "COUTEAU POUR TOLE HOLMATRO",
    "family": "SR",
    "sub": "Désincarcération",
    "qty": 1
  },
  {
    "name": "ECARTEUR",
    "family": "SR",
    "sub": "Désincarcération",
    "qty": 1
  },
  {
    "name": "ETAIS V-STRUTS HOLMATRO",
    "family": "SR",
    "sub": "Désincarcération",
    "qty": 2
  },
  {
    "name": "LAMPE \"HOLMATRO\"",
    "family": "SR",
    "sub": "Désincarcération",
    "qty": 1
  },
  {
    "name": "OUTIL MIXTE HYDRAULIQUE",
    "family": "SR",
    "sub": "Désincarcération",
    "qty": 1
  },
  {
    "name": "OUTIL MIXTE SUR BATTERIE + BATTERIES",
    "family": "SR",
    "sub": "Désincarcération",
    "qty": 1
  },
  {
    "name": "POINTEAU \"HOLMATRO\"",
    "family": "SR",
    "sub": "Désincarcération",
    "qty": 1
  },
  {
    "name": "VERINS",
    "family": "SR",
    "sub": "Désincarcération",
    "qty": 2
  },
  {
    "name": "BACHE DE PROTECTION DESINCARCERATION",
    "family": "SR",
    "sub": "Secours routier divers",
    "qty": 1
  },
  {
    "name": "COUPE PEDALE",
    "family": "SR",
    "sub": "Secours routier divers",
    "qty": 1
  },
  {
    "name": "ELINGUE METALIQUE",
    "family": "SR",
    "sub": "Secours routier divers",
    "qty": 1
  },
  {
    "name": "ELINGUE PLATE TEXTILE 4T",
    "family": "SR",
    "sub": "Secours routier divers",
    "qty": 1
  },
  {
    "name": "ELINGUE TEXTILE 5M / 10T",
    "family": "SR",
    "sub": "Secours routier divers",
    "qty": 1
  },
  {
    "name": "ELINGUE TEXTILE PLATE 4M / 3T",
    "family": "SR",
    "sub": "Secours routier divers",
    "qty": 2
  },
  {
    "name": "ELINGUES TEXTILES 5T",
    "family": "SR",
    "sub": "Secours routier divers",
    "qty": 2
  },
  {
    "name": "LEVIER DE TRACTION TIRE CÂBLE",
    "family": "SR",
    "sub": "Secours routier divers",
    "qty": 1
  },
  {
    "name": "MANILLES",
    "family": "SR",
    "sub": "Secours routier divers",
    "qty": 2
  },
  {
    "name": "MANILLES (+ 2 SUR TREUIL)",
    "family": "SR",
    "sub": "Secours routier divers",
    "qty": 4
  },
  {
    "name": "MANILLES DEVISSABLE A LA MAIN",
    "family": "SR",
    "sub": "Secours routier divers",
    "qty": 2
  },
  {
    "name": "POULIE",
    "family": "SR",
    "sub": "Secours routier divers",
    "qty": 1
  },
  {
    "name": "PROTECTION AIR BAG",
    "family": "SR",
    "sub": "Secours routier divers",
    "qty": 2
  },
  {
    "name": "PROTECTION DE COUPE \"GRAND MODEL\"",
    "family": "SR",
    "sub": "Secours routier divers",
    "qty": 2
  },
  {
    "name": "PROTECTION DE COUPE \"MOYEN MODEL\"",
    "family": "SR",
    "sub": "Secours routier divers",
    "qty": 4
  },
  {
    "name": "PROTECTION DE COUPE \"PETIT MODEL\"",
    "family": "SR",
    "sub": "Secours routier divers",
    "qty": 2
  },
  {
    "name": "rouleau d'adhésif (pare-brise)",
    "family": "SR",
    "sub": "Secours routier divers",
    "qty": 1
  },
  {
    "name": "TIRE CÂBLE + CÂBLE",
    "family": "SR",
    "sub": "Secours routier divers",
    "qty": 1
  },
  {
    "name": "CAISSE DE CALES EN BOIS",
    "family": "SR",
    "sub": "Stabilisation / calage",
    "qty": 1
  },
  {
    "name": "CAISSE DE CALES EN POLYETHYLENE (X10)",
    "family": "SR",
    "sub": "Stabilisation / calage",
    "qty": 1
  },
  {
    "name": "Cales de roue",
    "family": "SR",
    "sub": "Stabilisation / calage",
    "qty": 2
  },
  {
    "name": "CALES DE ROUES",
    "family": "SR",
    "sub": "Stabilisation / calage",
    "qty": 2
  },
  {
    "name": "CALES EN BOIS",
    "family": "SR",
    "sub": "Stabilisation / calage",
    "qty": 1
  },
  {
    "name": "COMMANDE LANCE GELUCALE",
    "family": "SR",
    "sub": "Stabilisation / calage",
    "qty": 1
  },
  {
    "name": "COUSSIN DE LEVAGE",
    "family": "SR",
    "sub": "Stabilisation / calage",
    "qty": 3
  },
  {
    "name": "ETAIS",
    "family": "SR",
    "sub": "Stabilisation / calage",
    "qty": 2
  },
  {
    "name": "JEUX DE CALES EN POLYETHYLENE",
    "family": "SR",
    "sub": "Stabilisation / calage",
    "qty": 4
  },
  {
    "name": "SACOCHES ACCESSOIRES ETAIS",
    "family": "SR",
    "sub": "Stabilisation / calage",
    "qty": 2
  },
  {
    "name": "BOITE DE CRAIE",
    "family": "DIVERS",
    "sub": "Balisage",
    "qty": 1
  },
  {
    "name": "Boite de craies",
    "family": "DIVERS",
    "sub": "Balisage",
    "qty": 1
  },
  {
    "name": "CÔNES DE LUBEC",
    "family": "DIVERS",
    "sub": "Balisage",
    "qty": 4
  },
  {
    "name": "CÔNES DE LUBECK",
    "family": "DIVERS",
    "sub": "Balisage",
    "qty": 6
  },
  {
    "name": "Cônes rétractables",
    "family": "DIVERS",
    "sub": "Balisage",
    "qty": 4
  },
  {
    "name": "ROULEAU DE RUBALISE",
    "family": "DIVERS",
    "sub": "Balisage",
    "qty": 1
  },
  {
    "name": "RUBALISE",
    "family": "DIVERS",
    "sub": "Balisage",
    "qty": 1
  },
  {
    "name": "Rubalise SP CARNET FICHE BILAN SECOURISTE (refus de transport) + SUPPORT",
    "family": "DIVERS",
    "sub": "Balisage",
    "qty": 1
  },
  {
    "name": "VALISE DE 6 SPIRALED POUR CÔNES DE LUBECK",
    "family": "DIVERS",
    "sub": "Balisage",
    "qty": 1
  },
  {
    "name": "1 coudeØ45 1 commande",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "1 coudeØ70 1 commande",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "15m3/h",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "1ER RANGEMENT LATERAL HAUT GAUCHE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "2 ceintures portes-outil 4 marteaux 4 tenailles 2 scies fil de fer",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "23m3/h",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "2EME RANGEMENT LATERAL HAUT GAUCHE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "2T39 2T41 2T42 2T44 2T46",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "2T39 2T41 4T42 4T44 2T46",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "3 DE 25M",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "3EME RANGEMENT LATERAL HAUT GAUCHE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "4 en 6m/4m - 2 en 5m/8m",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "42m3/h",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "4KW / 17,3amp",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "4M-6L-6XL-4XXL",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "A DROITE DES CAISSES",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "ACT",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "ADAPTATEURS",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Adulte réglables",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "ARRIERE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "ARRIERE DU VEHICULE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 3
  },
  {
    "name": "Aspirateur eau et poussières",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "AUX VICTIMES",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "AVANT DU VEHICULE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "BAC DE RETENTION",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Bâchage",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "BÂCHE PARC MATERIEL",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "BALLES DE TENNIS + BRISE VITRE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Bande de 5 cm + bande de 10 cm",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Bandes de 5cm + bandes de 10 cm",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "BARRE POUR POINT FIXE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "BIDON CARBURANT",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "BIDON D'HUILE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "BIDON HUILE DE CHAINE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "BIDON MELANGE / HUILE DE CHAÎNE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "BOITE + SACHET D'AMPOULES ET FUSIBLES",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Boîte d'aiguilles usagées",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Boîte de clous + marteau",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "BOITIER DE COMMANDE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Bombe bactéricide",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Bottes coquées : nombre et tailles",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "BOUCHONS 65 + 100",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "BOUCLIER DE PROTECTION (sur le côté droit)",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Bouée + Corde flottante",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Bougie de remplacement + référence",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "BOUTEILLES D'AIR",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "Bouteilles d'eau",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 4
  },
  {
    "name": "brassards adulte normal + large + pédia + enfant",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Brise vitre",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "CABINE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Cable 10 brins ECG",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Cable 4 brins scope",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "CÂBLES DE DEMARRAGE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "CABLES DE DEMARRAGE OTAN",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Cagoule d'évacuation",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "CAISSE DU BAS",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "CAISSE DU HAUT",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "CAISSE DU MILIEU",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "CANNE PLONGEUSE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Canule Taille 0",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Canule Taille 1",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Canule Taille 2",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Canule Taille 3",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Canules d'aspiration CH26",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "CCF M",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "CELLULE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 5
  },
  {
    "name": "Chaine à neige",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Chaîne de remplacement (+ nbre de maillons)",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "CHAÎNES AVEC CROCHET",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "Chaise portoir pliante",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "CHARGEUR POUR BATTERIES MILWAUKEE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "CLAIE DE PORTAGE 22 :(FFA024)",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "CLAIE DE PORTAGE 45 :(FFA023)",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "COFFRE ARRIERE GAUCHE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "COFFRE AVANT GAUCHE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "COFFRE DE TOIT",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 4
  },
  {
    "name": "COFFRE DROITE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 3
  },
  {
    "name": "COFFRE LATERAL EXTERIEUR ARRIERE COTE DROIT",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "COFFRE LATERAL EXTERIEUR AVANT COTE DROIT",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "COFFRE LATERAL EXTERIEUR COTE DROIT",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 3
  },
  {
    "name": "COFFRE LATERAL EXTERIEUR COTE GAUCHE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "COMMANDE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "COMMANDE DU TREUIL",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "COMMANDE TREUIL",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "COMMANDES",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "CORDAGE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "COUPE BOULON",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Coussin de PLS",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Couteau de sécurité + paire de ciseaux JESCO + ciseaux multifonction inox",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Couverture bactériostatique SDIS + drap",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "CP 367 NZ",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "CP 637 NZ",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "CRIC",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "CROCHET D'ARRIMAGE A CLIQUET",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Cuissardes coquées : nombre et tailles",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "cutters",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "Détecteur Co",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "DETENDEUR",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Dimension des bâches",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Dosettes de chlorure de sodium",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 5
  },
  {
    "name": "Dosettes de savon liquide",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "Draps CH + draps à UU",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Drenag",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Ebara",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Echarpes à UU",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "ECRAN BRISE VUE (housse de rangement)",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Electrodes DSA + électrodes ECG",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Enrouleurs électriques (qté : 2) ; longueur ?",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "ENTRE CABINE ET COFFRE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "ENTRE LE PANNEAU ET LE PLATEAU",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "EPI",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Ethylotest",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "EXCTINCTEUR A POUDRE 9KG",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "FILET CENTRAL",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "FILTRE 100/100",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Filtre antimicrobien",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "FLEXIBLE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "FLEXIBLE AVEC MANOMETRE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "FLEXIBLES",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 4
  },
  {
    "name": "Flyght",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "FOURCHE PLATE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "FOURCHE RECOURBE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "G.H.V bleu \"apprenant\"",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "G.H.V vert \"observateur\"",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Garrot hémostatique d'urgence plat",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Garrot tourniquet",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "GG 168 AV",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "GHV",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "GHV C/A",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "GHV CA (JAUNE)",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "GHV CONDUCTEUR + EQUIPIERS (ORANGE)",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 3
  },
  {
    "name": "GLACIERE ( à prendre au départ )",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Groupe Electrogène",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "GT 704 PQ",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "guide 35cm",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "guide 35cm, en dépannage depuis 25/03",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "HALLIGAN TOOL",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Housse mortuaire",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Inconnu",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "JEU DE 6 CHASSES GOUPILLES",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Karcher",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Kit \"Damage contrôle\"",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Kit \"EPIPEN\" ( 1 DAI adulte + 1 DAI pédia)",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Kit \"SINUS\"",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Kit accouchement",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Kit AES (Dakin + cupule)",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Kit brûlure",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Kit d'aspiration à UU",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "KIT DEMONTE PNEU",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Kit perfusion + solutés",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "KIT RADIO ( HOUSSE + MICRO + HARNAIS DOUBLE)",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Kit Radio (housse + harnais + micro)",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Kit section de membre",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "KIT TOXICITE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Kits de protection risques biologiques",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "Lecteur de glycémie + bandelettes + auto-piqueurs",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Livret technique du véhicule",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Lot de filets tubulaires (T2, T4, T6)",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "LOT GONFLAGE DES COUSSINS",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Lowara",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "MARQUEUR CARROSSIER",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "MARQUEUR MULTI-SURFACE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "MARTEAU",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Masque à UU taille 3",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Masque à UU Taille 3 + taille 5",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Masque à UU taille 5",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Masque HC adulte",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Masque HC pédiatrique",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Masques chirurgicaux",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "Masques HC adulte",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "Master",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "METRE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "MID",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "MID pédiatrique",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "NFS 61553",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Nombre de bâches",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "NOTICE VEHICULE + PAPIERS DU VEHICULE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "OUTILS DEGARNISSAGE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "Pantalon de pluie : nombre et tailles",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "PANTALON DE PROTECTION",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Paquet de chiffonnettes",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "PARE SOLEIL CONDUCTEUR",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "PAROI",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Parois du bloc maintien tête",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "Pédiatrique réglable",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "PELI 3315R ZO",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Peluche (option)",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "PETITE PINCE + HOUSSE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Petits Matériels",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "PINCE COUPANTE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "PINCE MULTIPRISE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "PLACARD BLANC BAS",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "PLACARD BLANC HAUT",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "PLAN DUR EN BOIS",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "POCHE AVANT",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "POCHE CENTRALE HAUTE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "POCHE DE DROITE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "POCHE DE GAUCHE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "POCHETTE BLEUE (KIT VENTILATION PEDIATRIQUE)",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "POCHETTE ROUGE ( KIT HEMORRAGIE )",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Pochette rouge réserve 5 F.B",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "POCHETTE VERTE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Portatif Antares",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Portoirs souples de transfert",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Poubelle (avec réserve de sacs blanc 10L)",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "PROTECTION BOIS",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "Pulvérisateur de solution désinfectante VSAV",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "RADIO ANTARES",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "RALLONGE 220V TRADITIONNELLE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "RALLONGE AIR + MANOMETRE DE PRESSION",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "RALLONGE MARECHAL 220V",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "RALLONGE MARECHAL 380V",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "RALLONGE PRISE MARECHAL 220V SUR TAMBOUR",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "RANGEMENT HAUT C/A",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "RANGEMENT HAUT COND",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Rasoirs",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "RATEAU RICH",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Renault",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "rouleau d'adhésif avec applicateur",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Rouleaux polyanes + liteaux",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SABOTS",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "SAC D'INTERVENTION",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 4
  },
  {
    "name": "Sachet d'électrodes ECG + électrodes DSA",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SACOCHE D'INTERVENTION",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Sacs DASRI 15 litres",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "sacs DASRI 30 litres",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "SACS DE LESTAGE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 4
  },
  {
    "name": "Sangle araignée",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Sangle de relevage",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SANGLES A CLIQUETS",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "SANGLES A CLIQUETS 2 TAILLES",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 4
  },
  {
    "name": "SANGLES D'AMARRE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "Sanicar",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SCHILLER T7",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SCIE A BOIS",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SCIE A BUCHE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SCIE A METAUX + 2 LAMES",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SCIE CIRCULAIRE + VISSEUSE + FORET A ETAGES",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SDIS53 15 OU B797",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SDIS53 17 HY B517",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SDIS53 18 HY B682",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SDIS53 24 CL B797",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SDIS53 24 CL B79?",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SDIS53 24 TR A184",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SDIS53 ZZ CL B103",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SDIS53 ZZ HY B274",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SDIS53 ZZ HY B276",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SDIS53 ZZ HY B281",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SDIS53 ZZ HY B282",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SDIS53 ZZ HY B283",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SDIS53 ZZ HY B716",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SDIS53 ZZ OU B714",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SDIS53 ZZ TR A128",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SDIS53__________",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SDMO",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SECATEUR",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SERPES",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "SERPETTE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SIDES",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Sonde d'aspiration F8 (bleue)",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Stihl 026C",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Stihl MS162",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Support bleu fiche bilan + crayon",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Support chargeur *3",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "SUR LE TOIT",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 4
  },
  {
    "name": "SUR-PANTALON",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "TAPIS",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "TÊTES",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 3
  },
  {
    "name": "Thermique",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "TIROIRS",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 6
  },
  {
    "name": "TOURNEVIS CRUCIFORME",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "TOURNEVIS PLAT",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "Trépieds ou autre supports",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "TRIANGLE DE PRESIGNALISATION",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "TRIANGLES",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Triangles de présignalisation",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "TRICOISES",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "Tsurimi",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Tsurimi Ø45",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Tsurimi Ø70",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "VANNES",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "Vestes de pluies : nombre et tailles",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "VIDE POCHE C/A",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "VIDE POCHE CABINE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "VIDE-POCHE CONDUCTEUR",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Visières de protection",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 3
  },
  {
    "name": "VISIERES PROTECTION CONTRE ARCS ELECTRIQUES",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "VOLET ARRIERE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 3
  },
  {
    "name": "VOLET ARRIERE DROIT",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 4
  },
  {
    "name": "VOLET ARRIERE GAUCHE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 3
  },
  {
    "name": "VOLET AVANT DROIT",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 5
  },
  {
    "name": "VOLET AVANT GAUCHE",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "Vomibag",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "Vomibags",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 2
  },
  {
    "name": "VSAV",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "VSR",
    "family": "DIVERS",
    "sub": "Divers",
    "qty": 1
  },
  {
    "name": "BADGE TELEPEAGE",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "Badge télépéage + support téléphone",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "CARTE CARBURANT",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "CARTE IGN",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "CLASSEUR CARTO 1er ET 2ème APPEL",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "CLASSEUR CARTOGRAPHIE",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "Classeur cartographie 1er et 2ème appel",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "CLASSEUR FICHES TECHNIQUES VEHICULES",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "CLASSEUR OPERATIONNEL",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "CLE A BOUGIE",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "CLE A PIPE (Ø : 10, 17, 20)",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "CLE A TUBE TOURNEVIS CRUCIFORME",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "CLE A TUBE TOURNEVIS PLAT",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "CLE DE BARRAGE ARTICULE",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "CLE DU VEHICULE + CLES COFFRES",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "CLE FEDERAL",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "CLE VOIE VERTE + PORTIQUE",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "CLE VOIE VERTE / PORTIQUE",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "CLEF A VALVES",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "CLES PLATES (Ø : 8,10,11,13)",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 4
  },
  {
    "name": "Clés voie verte + halage",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "DOUBLE DE CLE DU VEHICULE",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "Kit entretien (lime, clé à bougie …)",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "OFD + CLE GAZ + TRICOISE + HOUSE",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "Petite pince + clés opérationnelles",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "raclette",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "Raclettes (qté : 2)",
    "family": "DIVERS",
    "sub": "Documents / accès",
    "qty": 1
  },
  {
    "name": "BOITE A GANT HAUT CHEF D'AGRES",
    "family": "DIVERS",
    "sub": "EPI",
    "qty": 1
  },
  {
    "name": "BOITE A GANTS",
    "family": "DIVERS",
    "sub": "EPI",
    "qty": 1
  },
  {
    "name": "Boîte de gant taille \"L\"",
    "family": "DIVERS",
    "sub": "EPI",
    "qty": 1
  },
  {
    "name": "Boîte de gant taille \"M\"",
    "family": "DIVERS",
    "sub": "EPI",
    "qty": 1
  },
  {
    "name": "Boîte de gant taille \"S\"",
    "family": "DIVERS",
    "sub": "EPI",
    "qty": 1
  },
  {
    "name": "Boîte de gant taille \"XL\"",
    "family": "DIVERS",
    "sub": "EPI",
    "qty": 1
  },
  {
    "name": "Boite de gants taille L",
    "family": "DIVERS",
    "sub": "EPI",
    "qty": 1
  },
  {
    "name": "Boite de gants taille M",
    "family": "DIVERS",
    "sub": "EPI",
    "qty": 1
  },
  {
    "name": "Boite de gants taille XL",
    "family": "DIVERS",
    "sub": "EPI",
    "qty": 1
  },
  {
    "name": "Casques F2 Orange",
    "family": "DIVERS",
    "sub": "EPI",
    "qty": 3
  },
  {
    "name": "CASQUES F2XR",
    "family": "DIVERS",
    "sub": "EPI",
    "qty": 3
  },
  {
    "name": "GILET HAUTE VISIBILITÉ",
    "family": "DIVERS",
    "sub": "EPI",
    "qty": 1
  },
  {
    "name": "PAIRE DE GANT PROTECTION ELECTRIQUE",
    "family": "DIVERS",
    "sub": "EPI",
    "qty": 1
  },
  {
    "name": "Réserve de gants ( XL, L, M, S)",
    "family": "DIVERS",
    "sub": "EPI",
    "qty": 1
  },
  {
    "name": "Sur-Pantalon + casque anti-bruit + visière",
    "family": "DIVERS",
    "sub": "EPI",
    "qty": 1
  },
  {
    "name": "BALAI",
    "family": "DIVERS",
    "sub": "Outillage",
    "qty": 1
  },
  {
    "name": "BALAIS",
    "family": "DIVERS",
    "sub": "Outillage",
    "qty": 2
  },
  {
    "name": "Balais cantonnier (qté : 2)",
    "family": "DIVERS",
    "sub": "Outillage",
    "qty": 1
  },
  {
    "name": "HACHE",
    "family": "DIVERS",
    "sub": "Outillage",
    "qty": 1
  },
  {
    "name": "HACHETTE",
    "family": "DIVERS",
    "sub": "Outillage",
    "qty": 1
  },
  {
    "name": "MASSE",
    "family": "DIVERS",
    "sub": "Outillage",
    "qty": 1
  },
  {
    "name": "MASSETTE ANTI-REBOND",
    "family": "DIVERS",
    "sub": "Outillage",
    "qty": 1
  },
  {
    "name": "PELLE",
    "family": "DIVERS",
    "sub": "Outillage",
    "qty": 1
  },
  {
    "name": "Pelles (qté : 2)",
    "family": "DIVERS",
    "sub": "Outillage",
    "qty": 1
  },
  {
    "name": "PIOCHE",
    "family": "DIVERS",
    "sub": "Outillage",
    "qty": 1
  },
  {
    "name": "Polycoise",
    "family": "DIVERS",
    "sub": "Outillage",
    "qty": 1
  },
  {
    "name": "PRISE DE TERRE AVEC MASSETTE",
    "family": "DIVERS",
    "sub": "Outillage",
    "qty": 1
  },
  {
    "name": "CHARGEUR LAMPES \"PELI\"",
    "family": "DIVERS",
    "sub": "Éclairage",
    "qty": 1
  },
  {
    "name": "Eclairage",
    "family": "DIVERS",
    "sub": "Éclairage",
    "qty": 1
  },
  {
    "name": "ENROULEUR POUR PROJECTEUR AMOVIBLE",
    "family": "DIVERS",
    "sub": "Éclairage",
    "qty": 1
  },
  {
    "name": "Lampe sur chargeur",
    "family": "DIVERS",
    "sub": "Éclairage",
    "qty": 3
  },
  {
    "name": "LAMPES PORTATIVES SUR CHARGEUR",
    "family": "DIVERS",
    "sub": "Éclairage",
    "qty": 4
  },
  {
    "name": "PROJECTEUR AMOVIBLE",
    "family": "DIVERS",
    "sub": "Éclairage",
    "qty": 1
  },
  {
    "name": "Projecteur amovible, aimanté",
    "family": "DIVERS",
    "sub": "Éclairage",
    "qty": 1
  },
  {
    "name": "PROJECTEURS PORTABLES \"PELI\"",
    "family": "DIVERS",
    "sub": "Éclairage",
    "qty": 2
  },
  {
    "name": "PROJECTEURS PORTATIFS SUR CHARGEUR",
    "family": "DIVERS",
    "sub": "Éclairage",
    "qty": 3
  },
  {
    "name": "PROJECTEURS SUR ENROULEUR",
    "family": "DIVERS",
    "sub": "Éclairage",
    "qty": 1
  },
  {
    "name": "RALLONGE 24V POUR ECLAIRAGE",
    "family": "DIVERS",
    "sub": "Éclairage",
    "qty": 1
  },
  {
    "name": "RALLONGE POUR PROJECTEUR AMOVIBLE",
    "family": "DIVERS",
    "sub": "Éclairage",
    "qty": 1
  },
  {
    "name": "Type éclairage (halogène, LED, …) nombre",
    "family": "DIVERS",
    "sub": "Éclairage",
    "qty": 1
  }
];

const inventoryVehiclesV8 = [
  {id:"fpt-go", category:"rolling", name:"FPT GO", plate:"GQ 311 JE", type:"Fourgon pompe tonne", status:"Actif"},
  {id:"vsav-02", category:"rolling", name:"VSAV 02", plate:"AB-123-CD", type:"Véhicule de secours et d’assistance aux victimes", status:"Actif"},
  {id:"mpr-02", category:"equipment", name:"MPR 02", plate:"MAT-MPR-02", type:"Motopompe remorquable", status:"Actif"},
  {id:"motopompe-01", category:"equipment", name:"Motopompe 01", plate:"MAT-MP-01", type:"Motopompe portable", status:"Actif"}
];

const vehicleViewsV8 = [
  {id:"droite", label:"Côté droit"},
  {id:"arriere", label:"Arrière"},
  {id:"gauche", label:"Côté gauche"},
  {id:"toit", label:"Toit"},
  {id:"avant", label:"Devant"},
  {id:"interieur", label:"Intérieur"}
];

let selectedInventoryCategoryV8 = "rolling";
let inventoryModeV8 = "list";
let selectedVehicleIdV8 = "fpt-go";
let selectedViewV8 = "gauche";
let selectedZoneV8 = "Cabine avant";
let selectedLibraryFamilyV8 = "INCENDIE";
let photoUrlsV8 = {};
let layoutsV8 = {
  "fpt-go": {
    gauche: [
      {id:"Cabine avant", label:"Cabine avant", x:6, y:28, w:22, h:42},
      {id:"Rideau avant gauche", label:"Rideau av. G", x:31, y:28, w:18, h:20},
      {id:"Rideau milieu gauche", label:"Rideau mil. G", x:51, y:28, w:18, h:20},
      {id:"Rideau arrière gauche", label:"Rideau ar. G", x:71, y:28, w:18, h:20}
    ],
    arriere: [{id:"Arrière véhicule", label:"Arrière", x:28, y:22, w:44, h:55}],
    toit: [{id:"Toit", label:"Toit", x:20, y:20, w:60, h:60}],
    avant: [{id:"Avant véhicule", label:"Avant", x:28, y:22, w:44, h:55}],
    droite: [],
    interieur: []
  },
  "vsav-02": {
    gauche: [{id:"Cellule sanitaire", label:"Cellule", x:30, y:28, w:48, h:42}],
    interieur: [{id:"Intérieur cellule", label:"Intérieur cellule", x:18, y:18, w:64, h:62}],
    arriere: [{id:"Portes arrière", label:"Portes arrière", x:28, y:22, w:44, h:55}],
    droite: [],
    toit: [],
    avant: []
  }
};

function ensureInventoryV8(){
  if(typeof serviceInventory === "undefined") window.serviceInventory = [];
  serviceInventory.forEach(item => {
    const v = inventoryVehiclesV8.find(x => x.name === item.vehicle) || inventoryVehiclesV8.find(x => x.id === item.vehicleId);
    item.vehicleId = v ? v.id : (item.vehicleId || "fpt-go");
    item.vehicle = v ? v.name : (item.vehicle || "FPT GO");
    item.qty = Number(item.qty || 1);
  });
  inventoryVehiclesV8.forEach(v => {
    if(!layoutsV8[v.id]) layoutsV8[v.id] = {};
    vehicleViewsV8.forEach(view => {
      if(!layoutsV8[v.id][view.id]) layoutsV8[v.id][view.id] = [];
    });
    if(!photoUrlsV8[v.id]) photoUrlsV8[v.id] = {};
  });
}

function renderCheckSheets(){
  const root = document.getElementById("inventoryCategoryView");
  if(!root) return;
  ensureInventoryV8();

  document.querySelectorAll(".inventory-category").forEach(btn => {
    const isActive = btn.dataset.inventoryCategory === selectedInventoryCategoryV8;
    btn.classList.toggle("active", isActive);
    btn.onclick = () => {
      if(btn.dataset.inventoryCategory === "create"){
        const dlg = document.getElementById("createInventoryDialog");
        if(dlg) dlg.showModal();
        return;
      }
      selectedInventoryCategoryV8 = btn.dataset.inventoryCategory;
      inventoryModeV8 = "list";
      renderCheckSheets();
    };
  });

  root.innerHTML = `
    <div class="checksheet-layout-v8">
      ${renderGlobalLibraryV8()}
      <div class="inventory-content-v8" id="inventoryContentV8"></div>
    </div>
  `;

  renderGlobalLibraryEventsV8();

  if(inventoryModeV8 === "detail"){
    renderInventoryDetailV8(document.getElementById("inventoryContentV8"));
  } else {
    renderInventoryListV8(document.getElementById("inventoryContentV8"));
  }
}

function renderGlobalLibraryV8(){
  const families = ["INCENDIE","SSUAP","SR","DIVERS"];
  const items = libraryV8.filter(i => i.family === selectedLibraryFamilyV8);
  return `
    <aside class="global-library">
      <h3>Bibliothèque matériel</h3>
      <p class="muted">${items.length} matériels · ${selectedLibraryFamilyV8}. Glisser/déposer vers une zone ouverte.</p>
      <div class="library-tabs">
        ${families.map(f => `<button class="library-tab ${f===selectedLibraryFamilyV8?"active":""}" data-family="${f}">${f}</button>`).join("")}
      </div>
      <div class="library-filters">
        <input id="globalLibrarySearch" placeholder="Rechercher...">
      </div>
      <div class="global-library-list" id="globalLibraryList">
        ${items.map((item, idx) => `
          <div class="global-library-item" draggable="true" data-lib-name="${escapeHtml(item.name)}" data-lib-family="${item.family}" data-lib-sub="${escapeHtml(item.sub)}" data-lib-qty="${item.qty}">
            <strong>${item.name}</strong>
            <small>${item.family} · ${item.sub}</small>
          </div>
        `).join("")}
      </div>
    </aside>
  `;
}

function renderGlobalLibraryEventsV8(){
  document.querySelectorAll(".library-tab").forEach(btn => {
    btn.onclick = () => {
      selectedLibraryFamilyV8 = btn.dataset.family;
      renderCheckSheets();
    };
  });

  document.querySelectorAll(".global-library-item").forEach(el => {
    el.ondragstart = e => {
      e.dataTransfer.setData("application/json", JSON.stringify({
        name: el.dataset.libName,
        category: el.dataset.libFamily,
        sub: el.dataset.libSub,
        qty: Number(el.dataset.libQty || 1)
      }));
    };
  });

  const search = document.getElementById("globalLibrarySearch");
  if(search){
    search.oninput = () => {
      const q = search.value.toLowerCase();
      document.querySelectorAll(".global-library-item").forEach(el => {
        el.style.display = el.dataset.libName.toLowerCase().includes(q) ? "" : "none";
      });
    };
  }
}

function renderInventoryListV8(container){
  const vehicles = inventoryVehiclesV8.filter(v => v.category === selectedInventoryCategoryV8);
  container.innerHTML = `
    <div class="inventory-helper">
      <strong>${selectedInventoryCategoryV8 === "rolling" ? "Parc roulant" : "Matériel"}</strong><br>
      Choisis un inventaire à modifier. La bibliothèque reste disponible à gauche.
    </div>
    <div class="inventory-list-grid-v8">
      ${vehicles.map(v => {
        const count = serviceInventory.filter(i => i.vehicleId === v.id || i.vehicle === v.name).length;
        return `
          <article class="inventory-vehicle-card">
            <h3>${v.name}</h3>
            <p>${v.type}</p>
            <p><strong>${v.plate}</strong></p>
            <p>${count} matériels inventoriés</p>
            <button class="btn secondary open-inventory-v8" data-id="${v.id}">Ouvrir l’inventaire</button>
          </article>`;
      }).join("")}
    </div>
  `;

  document.querySelectorAll(".open-inventory-v8").forEach(btn => {
    btn.onclick = () => {
      selectedVehicleIdV8 = btn.dataset.id;
      inventoryModeV8 = "detail";
      selectedViewV8 = "gauche";
      const firstZone = (layoutsV8[selectedVehicleIdV8]?.[selectedViewV8] || [])[0];
      selectedZoneV8 = firstZone ? firstZone.id : "";
      renderCheckSheets();
    };
  });
}

function renderInventoryDetailV8(container){
  const vehicle = inventoryVehiclesV8.find(v => v.id === selectedVehicleIdV8) || inventoryVehiclesV8[0];
  const zones = layoutsV8[vehicle.id][selectedViewV8] || [];
  if(!selectedZoneV8 && zones[0]) selectedZoneV8 = zones[0].id;
  const selectedZone = zones.find(z => z.id === selectedZoneV8) || zones[0] || null;
  if(selectedZone) selectedZoneV8 = selectedZone.id;
  const zoneItems = selectedZone ? serviceInventory.filter(i => (i.vehicleId === vehicle.id || i.vehicle === vehicle.name) && i.zone === selectedZone.id) : [];
  const allCount = serviceInventory.filter(i => i.vehicleId === vehicle.id || i.vehicle === vehicle.name).length;

  container.innerHTML = `
    <button class="btn ghost back-list-v8">← Retour à la liste</button>
    <div class="vehicle-detail-card">
      <div class="panel-head">
        <div>
          <p class="eyebrow">Inventaire véhicule</p>
          <h2>${vehicle.name}</h2>
        </div>
        <button class="btn primary" id="editVehicleMetaV8">Modifier l’inventaire</button>
      </div>
      <div class="vehicle-detail-grid">
        <div><span>Immatriculation / référence</span><strong>${vehicle.plate}</strong></div>
        <div><span>Type</span><strong>${vehicle.type}</strong></div>
        <div><span>Matériels</span><strong>${allCount}</strong></div>
      </div>
    </div>

    <div class="view-carousel">
      ${vehicleViewsV8.map(v => `<button class="view-pill ${v.id===selectedViewV8?"active":""}" data-view-v8="${v.id}">${v.label}</button>`).join("")}
    </div>

    <div class="inventory-detail-layout v7">
      <div>
        <div class="photo-zone-editor">
          <div class="photo-stage" id="photoStageV8">
            <div class="vehicle-photo-placeholder">
              <div>
                <span>📷</span>
                <strong>${vehicleViewsV8.find(v => v.id === selectedViewV8)?.label}</strong>
                <p>Importe la photo réelle, puis dessine les rectangles cliquables.</p>
              </div>
            </div>
            ${zones.map(z => `<div class="draw-zone ${z.id===selectedZoneV8?"active":""}" data-zone-v8="${z.id}" style="left:${z.x}%;top:${z.y}%;width:${z.w}%;height:${z.h}%;">${z.label}<span class="resize"></span></div>`).join("")}
          </div>
          <div class="photo-editor-actions">
            <label class="file-label" for="vehiclePhotoInputV8">📷 Importer photo</label>
            <input id="vehiclePhotoInputV8" type="file" accept="image/*">
            <button class="btn secondary" id="addZoneV8">+ Ajouter zone</button>
            <button class="btn ghost" id="deleteZoneV8">Supprimer zone</button>
            <button class="btn primary" id="savePlanV8">Enregistrer le plan</button>
          </div>
        </div>
      </div>

      <aside class="selected-zone-panel">
        <h3>Zone sélectionnée</h3>
        ${selectedZone ? `
          <input class="zone-name-input" id="renameZoneV8" value="${escapeHtml(selectedZone.label)}">
          <div class="zone-material-list" id="dropZoneV8">
            ${zoneItems.length ? zoneItems.map(item => {
              const idx = serviceInventory.indexOf(item);
              return `<div class="zone-material-row">
                <div><strong>${item.name}</strong><small>${item.category || "Sans catégorie"}</small></div>
                <input type="number" min="1" value="${item.qty}" data-qty-v8="${idx}">
                <button class="delete-mini" data-del-v8="${idx}">Suppr.</button>
              </div>`;
            }).join("") : `<p class="muted">Glisse ici du matériel depuis la bibliothèque de gauche.</p>`}
          </div>
        ` : `<div class="zone-empty">Aucune zone sur cette vue. Clique sur “Ajouter zone”.</div>`}
      </aside>
    </div>
  `;

  const savedPhoto = photoUrlsV8[vehicle.id]?.[selectedViewV8];
  if(savedPhoto){
    const stage = document.getElementById("photoStageV8");
    stage.style.backgroundImage = `url('${savedPhoto}')`;
    stage.style.backgroundSize = "cover";
    stage.style.backgroundPosition = "center";
    const ph = stage.querySelector(".vehicle-photo-placeholder");
    if(ph) ph.style.display = "none";
  }

  container.querySelector(".back-list-v8").onclick = () => {
    inventoryModeV8 = "list";
    renderCheckSheets();
  };

  document.querySelectorAll("[data-view-v8]").forEach(btn => {
    btn.onclick = () => {
      selectedViewV8 = btn.dataset.viewV8;
      selectedZoneV8 = (layoutsV8[vehicle.id][selectedViewV8] || [])[0]?.id || "";
      renderCheckSheets();
    };
  });

  document.querySelectorAll("[data-zone-v8]").forEach(el => setupZoneDragV8(el, vehicle.id));

  document.getElementById("addZoneV8").onclick = () => {
    const z = {id:"Nouvelle zone " + Date.now(), label:"Nouvelle zone", x:30, y:30, w:22, h:18};
    layoutsV8[vehicle.id][selectedViewV8].push(z);
    selectedZoneV8 = z.id;
    renderCheckSheets();
  };

  document.getElementById("deleteZoneV8").onclick = () => {
    if(!selectedZoneV8) return;
    layoutsV8[vehicle.id][selectedViewV8] = layoutsV8[vehicle.id][selectedViewV8].filter(z => z.id !== selectedZoneV8);
    selectedZoneV8 = (layoutsV8[vehicle.id][selectedViewV8] || [])[0]?.id || "";
    renderCheckSheets();
  };

  document.getElementById("savePlanV8").onclick = () => toast("Plan enregistré dans le prototype");
  document.getElementById("editVehicleMetaV8").onclick = () => toast("Modification véhicule prévue : nom, type, immatriculation, QR code.");

  document.getElementById("vehiclePhotoInputV8").onchange = e => {
    const file = e.target.files[0];
    if(!file) return;
    if(!photoUrlsV8[vehicle.id]) photoUrlsV8[vehicle.id] = {};
    photoUrlsV8[vehicle.id][selectedViewV8] = URL.createObjectURL(file);
    renderInventoryDetailV8(container);
  };

  const rename = document.getElementById("renameZoneV8");
  if(rename){
    rename.onchange = () => {
      const z = layoutsV8[vehicle.id][selectedViewV8].find(x => x.id === selectedZoneV8);
      if(!z) return;
      const old = z.id;
      z.label = rename.value;
      z.id = rename.value;
      serviceInventory.forEach(item => {
        if((item.vehicleId === vehicle.id || item.vehicle === vehicle.name) && item.zone === old) item.zone = z.id;
      });
      selectedZoneV8 = z.id;
      renderCheckSheets();
    };
  }

  const drop = document.getElementById("dropZoneV8");
  if(drop){
    drop.ondragover = e => { e.preventDefault(); drop.classList.add("drag-over"); };
    drop.ondragleave = () => drop.classList.remove("drag-over");
    drop.ondrop = e => {
      e.preventDefault();
      drop.classList.remove("drag-over");
      const item = JSON.parse(e.dataTransfer.getData("application/json"));
      addMaterialToZoneV8(vehicle, selectedZoneV8, item);
    };
  }

  document.querySelectorAll("[data-del-v8]").forEach(btn => {
    btn.onclick = () => {
      serviceInventory.splice(Number(btn.dataset.delV8), 1);
      renderCheckSheets();
    };
  });

  document.querySelectorAll("[data-qty-v8]").forEach(inp => {
    inp.onchange = () => {
      serviceInventory[Number(inp.dataset.qtyV8)].qty = Number(inp.value || 1);
      renderCheckSheets();
    };
  });
}

function addMaterialToZoneV8(vehicle, zone, item){
  if(!zone){
    toast("Ajoute ou sélectionne une zone avant de glisser du matériel");
    return;
  }
  const current = serviceInventory.filter(i => (i.vehicleId === vehicle.id || i.vehicle === vehicle.name) && i.zone === zone);
  serviceInventory.push({
    id: `${vehicle.id}-${zone}-${Date.now()}`,
    vehicleId: vehicle.id,
    vehicle: vehicle.name,
    zone,
    subzone: zone,
    zoneOrder: 1,
    itemOrder: current.length + 1,
    name: item.name,
    qty: item.qty || 1,
    unit: "pièce",
    category: item.category || item.family || "Autre",
    criticality: "Normale",
    photo: "",
    active: "Oui"
  });
  toast(`${item.name} ajouté à ${zone}`);
  renderCheckSheets();
}

function setupZoneDragV8(el, vehicleId){
  el.onclick = e => {
    e.stopPropagation();
    selectedZoneV8 = el.dataset.zoneV8;
    renderCheckSheets();
  };

  const stage = document.getElementById("photoStageV8");
  let mode = null, startX = 0, startY = 0, start = null;

  function begin(e, resize){
    e.preventDefault();
    e.stopPropagation();
    selectedZoneV8 = el.dataset.zoneV8;
    const z = layoutsV8[vehicleId][selectedViewV8].find(x => x.id === selectedZoneV8);
    if(!z) return;
    mode = resize ? "resize" : "move";
    startX = e.clientX;
    startY = e.clientY;
    start = {...z};
    document.onmousemove = move;
    document.onmouseup = end;
  }

  function move(e){
    const z = layoutsV8[vehicleId][selectedViewV8].find(x => x.id === selectedZoneV8);
    const rect = stage.getBoundingClientRect();
    const dx = ((e.clientX - startX) / rect.width) * 100;
    const dy = ((e.clientY - startY) / rect.height) * 100;
    if(mode === "move"){
      z.x = Math.max(0, Math.min(95, start.x + dx));
      z.y = Math.max(0, Math.min(95, start.y + dy));
    } else {
      z.w = Math.max(8, Math.min(95 - z.x, start.w + dx));
      z.h = Math.max(8, Math.min(95 - z.y, start.h + dy));
    }
    el.style.left = z.x + "%";
    el.style.top = z.y + "%";
    el.style.width = z.w + "%";
    el.style.height = z.h + "%";
  }

  function end(){
    document.onmousemove = null;
    document.onmouseup = null;
    mode = null;
  }

  el.onmousedown = e => begin(e, false);
  const resize = el.querySelector(".resize");
  if(resize) resize.onmousedown = e => begin(e, true);
}

if(document.getElementById("createInventoryBtn")){
  document.getElementById("createInventoryBtn").onclick = () => document.getElementById("createInventoryDialog").showModal();
}


/* V10 : FPT 53 préchargé avec photos réelles */
(function initFPT53V10(){
  if(typeof inventoryVehiclesV8 !== "undefined"){
    const exists = inventoryVehiclesV8.some(v => v.id === "fpt-53");
    if(!exists){
      inventoryVehiclesV8.unshift({
        id:"fpt-53",
        category:"rolling",
        name:"FPT 53",
        plate:"GL-485-CL",
        type:"Fourgon pompe tonne",
        status:"Actif"
      });
    }
  }

  if(typeof layoutsV8 !== "undefined"){
    layoutsV8["fpt-53"] = {
      avant: [
        {id:"Cabine conducteur", label:"Cabine conducteur", x:11, y:21, w:35, h:45},
        {id:"Cabine chef d’agrès", label:"Cabine C/A", x:53, y:21, w:35, h:45},
        {id:"Face avant / éclairage", label:"Éclairage avant", x:18, y:67, w:64, h:20}
      ],
      arriere: [
        {id:"Dévidoir arrière gauche", label:"Dévidoir G", x:8, y:54, w:32, h:30},
        {id:"Dévidoir arrière droit", label:"Dévidoir D", x:60, y:54, w:32, h:30},
        {id:"Pompe", label:"Pompe", x:42, y:58, w:16, h:20},
        {id:"Tableau de commande pompe", label:"Commande pompe", x:66, y:37, w:20, h:14},
        {id:"Rideau arrière", label:"Rideau arrière", x:34, y:25, w:32, h:28},
        {id:"Échelles arrière / toit", label:"Échelles", x:25, y:3, w:50, h:18}
      ],
      gauche: [
        {id:"Cabine avant gauche", label:"Cabine avant", x:5, y:28, w:22, h:34},
        {id:"Cabine arrière gauche", label:"Cabine arrière", x:28, y:28, w:20, h:34},
        {id:"Rideau avant gauche", label:"Rideau av. G", x:50, y:24, w:21, h:39},
        {id:"Rideau arrière gauche", label:"Rideau ar. G", x:71, y:24, w:18, h:39},
        {id:"Coffre bas gauche", label:"Coffre bas G", x:58, y:65, w:29, h:17},
        {id:"Dévidoir arrière gauche", label:"Dévidoir G", x:88, y:42, w:10, h:34},
        {id:"Toit / échelles", label:"Toit / échelles", x:36, y:3, w:50, h:17}
      ],
      droite: [
        {id:"Cabine avant droite", label:"Cabine avant", x:72, y:29, w:22, h:34},
        {id:"Cabine arrière droite", label:"Cabine arrière", x:51, y:29, w:20, h:34},
        {id:"Rideau avant droit", label:"Rideau av. D", x:29, y:24, w:21, h:40},
        {id:"Rideau arrière droit", label:"Rideau ar. D", x:8, y:24, w:21, h:40},
        {id:"Coffre bas droit", label:"Coffre bas D", x:11, y:66, w:30, h:17},
        {id:"Dévidoir arrière droit", label:"Dévidoir D", x:0, y:42, w:10, h:34},
        {id:"Toit / échelles", label:"Toit / échelles", x:14, y:3, w:50, h:17}
      ],
      toit: [
        {id:"Échelles de toit", label:"Échelles de toit", x:15, y:18, w:70, h:25},
        {id:"Équipements de toit", label:"Équipements toit", x:20, y:50, w:60, h:28}
      ],
      interieur: []
    };
  }

  if(typeof photoUrlsV8 !== "undefined"){
    photoUrlsV8["fpt-53"] = {
      avant:"assets/fpt53_avant.jpg",
      arriere:"assets/fpt53_arriere.jpg",
      gauche:"assets/fpt53_cote_gauche.jpg",
      droite:"assets/fpt53_cote_droit.jpg"
    };
  }

  if(typeof serviceInventory !== "undefined"){
    const hasFpt53 = serviceInventory.some(i => i.vehicleId === "fpt-53");
    if(!hasFpt53){
      const seed = [
        ["Cabine conducteur","Carte carburant","DIVERS",1],
        ["Cabine conducteur","Clés gaz","DIVERS",1],
        ["Cabine conducteur","Outil OFD","DIVERS",1],
        ["Cabine conducteur","Boîte de craies","DIVERS",1],
        ["Cabine conducteur","Rouleau de rubalise","DIVERS",1],
        ["Cabine chef d’agrès","Portatif TPH 900","DIVERS",1],
        ["Cabine chef d’agrès","Classeur cartographie","DIVERS",1],
        ["Cabine chef d’agrès","Classeur PI","DIVERS",1],
        ["Dévidoir arrière gauche","Tuyau Ø70 x40 m","INCENDIE",5],
        ["Dévidoir arrière droit","Tuyau Ø70 x40 m","INCENDIE",5],
        ["Pompe","Crépine","INCENDIE",1],
        ["Pompe","Flotteur","INCENDIE",1],
        ["Pompe","Collecteur d’alimentation","INCENDIE",1],
        ["Tableau de commande pompe","Tableau de commande pompe","INCENDIE",1],
        ["Rideau avant gauche","ARI complet avec masque","INCENDIE",2],
        ["Rideau avant gauche","Bouteille ARI","INCENDIE",2],
        ["Rideau arrière gauche","Division","INCENDIE",1],
        ["Rideau arrière gauche","LDV 500","INCENDIE",1],
        ["Rideau avant droit","Projecteur","DIVERS",2],
        ["Rideau avant droit","Ventilateur","INCENDIE",1],
        ["Rideau arrière droit","LSPCC","INCENDIE",1],
        ["Rideau arrière droit","Cône de Lübeck","DIVERS",4],
        ["Toit / échelles","Échelle à coulisse","INCENDIE",1],
        ["Toit / échelles","Échelle à crochet","INCENDIE",1]
      ];
      seed.forEach((s, idx) => {
        serviceInventory.push({
          id:`fpt53-seed-${idx}`,
          vehicleId:"fpt-53",
          vehicle:"FPT 53",
          zone:s[0],
          subzone:s[0],
          zoneOrder:1,
          itemOrder:idx+1,
          name:s[1],
          qty:s[3],
          unit:"pièce",
          category:s[2],
          criticality:"Normale",
          photo:"",
          active:"Oui"
        });
      });
    }
  }

  selectedVehicleIdV8 = "fpt-53";
})();

/* Surclasse l'application photo pour afficher les photos locales préchargées */
const originalRenderInventoryDetailV8_V10 = renderInventoryDetailV8;
renderInventoryDetailV8 = function(container){
  originalRenderInventoryDetailV8_V10(container);
  const vehicle = inventoryVehiclesV8.find(v => v.id === selectedVehicleIdV8);
  if(!vehicle) return;
  const stage = document.getElementById("photoStageV8");
  const url = photoUrlsV8[vehicle.id]?.[selectedViewV8];
  if(stage && url){
    stage.classList.add("has-real-photo");
    stage.style.backgroundImage = `url('${url}')`;
    stage.style.backgroundSize = "contain";
    stage.style.backgroundRepeat = "no-repeat";
    stage.style.backgroundPosition = "center";
    const ph = stage.querySelector(".vehicle-photo-placeholder");
    if(ph) ph.style.display = "none";
  }
};


/* =========================
   V11 - FICHES VÉRIFICATION STABLE
   ========================= */

const FC_LIBRARY = [
  // INCENDIE
  ["ARI complet avec masque","INCENDIE","ARI",1],["Bouteille ARI","INCENDIE","ARI",1],["Ligne guide","INCENDIE","ARI",1],["Tableau de contrôleur","INCENDIE","ARI",1],
  ["Tuyau Ø45 x20 m","INCENDIE","Hydraulique",1],["Tuyau Ø70 x20 m","INCENDIE","Hydraulique",1],["Tuyau Ø70 x40 m","INCENDIE","Hydraulique",1],
  ["LDV 500","INCENDIE","Hydraulique",1],["LDV 1000","INCENDIE","Hydraulique",1],["Division","INCENDIE","Hydraulique",1],["Réduction","INCENDIE","Hydraulique",1],
  ["Aspiral","INCENDIE","Hydraulique",1],["Crépine","INCENDIE","Hydraulique",1],["Flotteur","INCENDIE","Hydraulique",1],["Collecteur d’alimentation","INCENDIE","Hydraulique",1],
  ["Échelle à coulisse","INCENDIE","Échelles",1],["Échelle à crochet","INCENDIE","Échelles",1],["Ventilateur","INCENDIE","Ventilation",1],["Extincteur poudre","INCENDIE","Extinction",1],
  ["Extincteur CO2","INCENDIE","Extinction",1],["LSPCC","INCENDIE","Sauvetage",1],
  // SSUAP
  ["Sac prompt secours","SSUAP","Sac",1],
  // Oxygénothérapie / ventilation
  ["Bouteille O2 5 L","SSUAP","Oxygénothérapie / ventilation",1],["Bouteilles O2 5L","SSUAP","Oxygénothérapie / ventilation",3],
  ["Insufflateur à UU adulte","SSUAP","Oxygénothérapie / ventilation",1],["Insufflateur pédiatrique + masque taille 1","SSUAP","Oxygénothérapie / ventilation",1],
  ["Masque haute concentration adulte","SSUAP","Oxygénothérapie / ventilation",1],["Masque HC adulte","SSUAP","Oxygénothérapie / ventilation",2],
  ["Masque HC pédiatrique","SSUAP","Oxygénothérapie / ventilation",1],["Masque BAVU","SSUAP","Oxygénothérapie / ventilation",1],
  ["Masque à UU taille 3","SSUAP","Oxygénothérapie / ventilation",1],["Masque à UU taille 5","SSUAP","Oxygénothérapie / ventilation",1],
  ["Lunette à oxygène","SSUAP","Oxygénothérapie / ventilation",1],["Filtre antimicrobien","SSUAP","Oxygénothérapie / ventilation",1],
  ["Canule taille 0","SSUAP","Oxygénothérapie / ventilation",1],["Canule taille 1","SSUAP","Oxygénothérapie / ventilation",1],
  ["Canule taille 2","SSUAP","Oxygénothérapie / ventilation",1],["Canule taille 3","SSUAP","Oxygénothérapie / ventilation",1],
  ["Aspirateur de mucosités","SSUAP","Oxygénothérapie / ventilation",1],["Canules d'aspiration CH26","SSUAP","Oxygénothérapie / ventilation",2],
  ["Kit d'aspiration à UU","SSUAP","Oxygénothérapie / ventilation",1],["Aspirateur manuel","SSUAP","Oxygénothérapie / ventilation",1],
  ["Sonde d'aspiration F8","SSUAP","Oxygénothérapie / ventilation",1],
  // Bilan / monitoring
  ["Schiller T7 (défibrillateur)","SSUAP","Bilan / monitoring",1],["Détecteur CO","SSUAP","Bilan / monitoring",1],
  ["Lecteur de glycémie + bandelettes","SSUAP","Bilan / monitoring",1],["Thermomètre tympanique","SSUAP","Bilan / monitoring",1],
  ["Tensiomètre + stéthoscope","SSUAP","Bilan / monitoring",1],["Saturomètre","SSUAP","Bilan / monitoring",1],
  ["Brassard adulte normal","SSUAP","Bilan / monitoring",1],["Brassard adulte large","SSUAP","Bilan / monitoring",1],
  ["Brassard pédiatrique","SSUAP","Bilan / monitoring",1],["Capteur adulte SPO2","SSUAP","Bilan / monitoring",1],
  ["Capteur pédiatrique SPO2 UU","SSUAP","Bilan / monitoring",1],["Électrodes DSA","SSUAP","Bilan / monitoring",1],
  ["Électrodes ECG","SSUAP","Bilan / monitoring",1],["Câble 4 brins scope","SSUAP","Bilan / monitoring",1],
  ["Câble 10 brins ECG","SSUAP","Bilan / monitoring",1],
  // Immobilisation
  ["Collier cervical adulte réglable","SSUAP","Immobilisation",2],["Collier cervical pédiatrique réglable","SSUAP","Immobilisation",1],
  ["Attelle à dépression","SSUAP","Immobilisation",1],["Attelle à dépression poignet / avant-bras","SSUAP","Immobilisation",1],
  ["Attelle ALUFORM jambe adulte","SSUAP","Immobilisation",1],["Attelle ALUFORM coude","SSUAP","Immobilisation",1],
  ["MID","SSUAP","Immobilisation",1],["MID pédiatrique","SSUAP","Immobilisation",1],
  ["ACT","SSUAP","Immobilisation",1],["Kit mousse bloc tête","SSUAP","Immobilisation",1],
  ["Pompe à dépression","SSUAP","Immobilisation",1],
  // Relevage / brancardage
  ["Brancard avec chariot, pied de perf et plan dur","SSUAP","Relevage / brancardage",1],
  ["Brancard cuillère","SSUAP","Relevage / brancardage",1],["Chaise portoir pliante","SSUAP","Relevage / brancardage",1],
  ["Portoir souple de transfert","SSUAP","Relevage / brancardage",1],["Sangle de relevage","SSUAP","Relevage / brancardage",1],
  ["Sangle araignée","SSUAP","Relevage / brancardage",1],["Drap CH","SSUAP","Relevage / brancardage",2],
  ["Drap à UU","SSUAP","Relevage / brancardage",1],["Couverture bactériostatique SDIS","SSUAP","Relevage / brancardage",1],
  // Pansements
  ["Couverture isothermique","SSUAP","Pansements",1],["Pansement israélien","SSUAP","Pansements",2],
  ["Pansement compressif","SSUAP","Pansements",1],["Pansements absorbants","SSUAP","Pansements",2],
  ["Garrot hémostatique d'urgence plat","SSUAP","Pansements",1],["Garrot tourniquet","SSUAP","Pansements",1],
  ["Compresses gaze hémostatique","SSUAP","Pansements",2],["Compresses","SSUAP","Pansements",10],
  ["Rouleau de sparadrap","SSUAP","Pansements",1],["Bande 5 cm","SSUAP","Pansements",2],
  ["Bande 10 cm","SSUAP","Pansements",2],["Lot de filets tubulaires (T2, T4, T6)","SSUAP","Pansements",1],
  ["Écharpes à UU","SSUAP","Pansements",2],["Poche de froid","SSUAP","Pansements",1],
  ["Dosettes de savon liquide","SSUAP","Pansements",2],["Dosettes de chlorure de sodium","SSUAP","Pansements",5],
  // Hygiène / protection
  ["Gel hydroalcoolique","SSUAP","Hygiène / protection",1],["Masques chirurgicaux","SSUAP","Hygiène / protection",6],
  ["Masques FFP2","SSUAP","Hygiène / protection",3],["Boîte de gants taille S","SSUAP","Hygiène / protection",1],
  ["Boîte de gants taille M","SSUAP","Hygiène / protection",1],["Boîte de gants taille L","SSUAP","Hygiène / protection",1],
  ["Boîte de gants taille XL","SSUAP","Hygiène / protection",1],["Sacs DASRI 15 litres","SSUAP","Hygiène / protection",3],
  ["Sacs DASRI 30 litres","SSUAP","Hygiène / protection",2],["Vomibag","SSUAP","Hygiène / protection",2],
  ["Cagoule d'évacuation","SSUAP","Hygiène / protection",1],["Kit protection risques biologiques","SSUAP","Hygiène / protection",2],
  ["Visière de protection","SSUAP","Hygiène / protection",3],["Pulvérisateur solution désinfectante","SSUAP","Hygiène / protection",1],
  ["Bombe bactéricide","SSUAP","Hygiène / protection",1],
  // Kits spéciaux
  ["Kit accouchement","SSUAP","Kits spéciaux",1],["Kit section de membre","SSUAP","Kits spéciaux",1],
  ["Kit brûlure","SSUAP","Kits spéciaux",1],["Kit EPIPEN (DAI adulte + DAI pédia)","SSUAP","Kits spéciaux",1],
  ["Kit perfusion + solutés","SSUAP","Kits spéciaux",1],["Kit AES (Dakin + cupule)","SSUAP","Kits spéciaux",1],
  ["Kit Sinus","SSUAP","Kits spéciaux",1],["Kit Damage contrôle","SSUAP","Kits spéciaux",1],
  // Équipement / balisage
  ["Casque F2 Orange","SSUAP","Équipement personnel",3],["GHV (Gilet Haute Visibilité)","SSUAP","Équipement personnel",1],
  ["Cône rétractable","SSUAP","Balisage",4],["Cales de roue","SSUAP","Balisage",2],
  ["Bouée + corde flottante","SSUAP","Sauvetage aquatique",1],["Brise vitre","SSUAP","Désincarcération",1],
  ["Housse mortuaire","SSUAP","Divers",1],["Bouteilles d'eau","SSUAP","Divers",4],
  ["Portatif Antares","SSUAP","Communication",1],
  ["Fiches réflexes opérationnelles","SSUAP","Documents",3],["Carnet fiche bilan secouriste","SSUAP","Documents",1],
  // PROTECTION PERSONNELLE
  ["Casque F1 pompier","PROTECTION","Casques",1],
  ["Casque F2","PROTECTION","Casques",1],
  ["Casque F2 Orange","PROTECTION","Casques",1],
  ["Cagoule anti-feu","PROTECTION","Tenue feu",1],
  ["Gants de feu","PROTECTION","Tenue feu",1],
  ["Gants de déblai","PROTECTION","Tenue feu",1],
  ["Gants chimiques","PROTECTION","Risque chimique",1],
  ["Sur-pantalon feu","PROTECTION","Tenue feu",1],
  ["Veste de feu","PROTECTION","Tenue feu",1],
  ["Bottines de feu","PROTECTION","Tenue feu",1],
  ["GHV (Gilet Haute Visibilité)","PROTECTION","Visibilité",1],
  ["Gilet haute visibilité conducteur","PROTECTION","Visibilité",1],
  ["Gilet haute visibilité C/A","PROTECTION","Visibilité",1],
  ["Masque FFP2","PROTECTION","Protection respiratoire",1],
  ["Masque chirurgical","PROTECTION","Protection respiratoire",6],
  ["Lunettes de protection","PROTECTION","Protection visage",1],
  ["Visière de protection","PROTECTION","Protection visage",1],
  ["Boîte de gants taille S","PROTECTION","Gants médicaux",1],
  ["Boîte de gants taille M","PROTECTION","Gants médicaux",1],
  ["Boîte de gants taille L","PROTECTION","Gants médicaux",1],
  ["Boîte de gants taille XL","PROTECTION","Gants médicaux",1],
  ["Combinaison de protection","PROTECTION","Risque chimique",1],
  ["Surbottes","PROTECTION","Risque chimique",1],
  ["Kit protection risques biologiques","PROTECTION","Risque biologique",2],
  ["Cagoule d'évacuation","PROTECTION","Évacuation",1],
  ["Gel hydroalcoolique","PROTECTION","Hygiène",1],
  ["Pulvérisateur solution désinfectante","PROTECTION","Hygiène",1],
  ["Bombe bactéricide","PROTECTION","Hygiène",1],
  // COMMUNICATION
  ["Portatif Antares","COMMUNICATION","Radios",1],
  ["Portatif TPH 900","COMMUNICATION","Radios",1],
  ["Portable TETRAPOL","COMMUNICATION","Radios",1],
  ["Kit radio (housse + harnais + micro)","COMMUNICATION","Accessoires radio",1],
  ["Micro-casque radio","COMMUNICATION","Accessoires radio",1],
  ["Chargeur de portatif","COMMUNICATION","Accessoires radio",1],
  ["Baie de chargement radios","COMMUNICATION","Accessoires radio",1],
  ["Badge télépéage","COMMUNICATION","Divers",1],
  ["Support téléphone","COMMUNICATION","Divers",1],
  ["Tablette tactile opérationnelle","COMMUNICATION","Divers",1],
  ["Classeur cartographie","COMMUNICATION","Documents opérationnels",1],
  ["Classeurs PI","COMMUNICATION","Documents opérationnels",1],
  ["Fiches réflexes opérationnelles","COMMUNICATION","Documents opérationnels",3],
  ["Carnet fiche bilan secouriste","COMMUNICATION","Documents opérationnels",1],
  // SR
  ["Cisaille","SR","Désincarcération",1],["Écarteur","SR","Désincarcération",1],["Vérin","SR","Désincarcération",1],
  ["Cales de stabilisation","SR","Stabilisation",1],["Coupe-pédales","SR","Désincarcération",1],["Protection airbag","SR","Sécurité",1],
  ["Bâche de protection","SR","Protection",1],["Scie sabre","SR","Découpe",1],["Meuleuse","SR","Découpe",1],
  // DIVERS
  ["Gilet haute visibilité","DIVERS","EPI",1],["Portatif TPH 900","DIVERS","Communication",1],["Projecteur","DIVERS","Éclairage",1],
  ["Cône de Lübeck","DIVERS","Balisage",1],["Rouleau de rubalise","DIVERS","Balisage",1],["Boîte de craies","DIVERS","Balisage",1],
  ["Carte carburant","DIVERS","Documents",1],["Badge autoroute","DIVERS","Documents",1],["Classeur cartographie","DIVERS","Documents",1],["Classeur PI","DIVERS","Documents",1],
  ["Outil OFD","DIVERS","Outillage",1],["Clés gaz","DIVERS","Outillage",1],["Polycoise","DIVERS","Outillage",1],["Pelle","DIVERS","Outillage",1],
  ["Pioche","DIVERS","Outillage",1],["Hache","DIVERS","Outillage",1],["Masse","DIVERS","Outillage",1]
].map(x => ({name:x[0], family:x[1], sub:x[2], qty:x[3]}));

let fcVehicles = [
  {id:"fpt-53", category:"rolling", name:"FPT 53", plate:"GL-485-CL", type:"Fourgon pompe tonne"},
  {id:"fpt-go", category:"rolling", name:"FPT GO", plate:"GQ 311 JE", type:"Fourgon pompe tonne"},
  {id:"vsav-02", category:"rolling", name:"VSAV 02", plate:"AB-123-CD", type:"VSAV"},
  {id:"mpr-02", category:"equipment", name:"MPR 02", plate:"MAT-MPR-02", type:"Motopompe remorquable"}
];

const fcViews = [
  {id:"droite", label:"Côté droit"},
  {id:"arriere", label:"Arrière"},
  {id:"gauche", label:"Côté gauche"},
  {id:"toit", label:"Toit"},
  {id:"avant", label:"Devant"},
  {id:"interieur", label:"Intérieur"}
];

let fcState = {
  family:"INCENDIE",
  category:"rolling",
  mode:"list",
  vehicleId:"fpt-53",
  view:"gauche",
  zone:"Cabine avant gauche"
};

let fcPhotos = {
  "fpt-53": {
    avant:"assets/fpt53_avant.jpg",
    arriere:"assets/fpt53_arriere.jpg",
    gauche:"assets/fpt53_cote_gauche.jpg",
    droite:"assets/fpt53_cote_droit.jpg"
  }
};

let fcLayouts = {
  "fpt-53": {
    avant: [
      {id:"Cabine conducteur", label:"Cabine conducteur", x:11, y:21, w:35, h:45},
      {id:"Cabine chef d’agrès", label:"Cabine C/A", x:53, y:21, w:35, h:45},
      {id:"Face avant / éclairage", label:"Éclairage avant", x:18, y:67, w:64, h:20}
    ],
    arriere: [
      {id:"Dévidoir arrière gauche", label:"Dévidoir G", x:8, y:54, w:32, h:30},
      {id:"Dévidoir arrière droit", label:"Dévidoir D", x:60, y:54, w:32, h:30},
      {id:"Pompe", label:"Pompe", x:42, y:58, w:16, h:20},
      {id:"Tableau de commande pompe", label:"Commande pompe", x:66, y:37, w:20, h:14},
      {id:"Rideau arrière", label:"Rideau arrière", x:34, y:25, w:32, h:28},
      {id:"Échelles arrière / toit", label:"Échelles", x:25, y:3, w:50, h:18}
    ],
    gauche: [
      {id:"Cabine avant gauche", label:"Cabine avant", x:5, y:28, w:22, h:34},
      {id:"Cabine arrière gauche", label:"Cabine arrière", x:28, y:28, w:20, h:34},
      {id:"Rideau avant gauche", label:"Rideau av. G", x:50, y:24, w:21, h:39},
      {id:"Rideau arrière gauche", label:"Rideau ar. G", x:71, y:24, w:18, h:39},
      {id:"Coffre bas gauche", label:"Coffre bas G", x:58, y:65, w:29, h:17},
      {id:"Dévidoir arrière gauche", label:"Dévidoir G", x:88, y:42, w:10, h:34},
      {id:"Toit / échelles", label:"Toit / échelles", x:36, y:3, w:50, h:17}
    ],
    droite: [
      {id:"Cabine avant droite", label:"Cabine avant", x:72, y:29, w:22, h:34},
      {id:"Cabine arrière droite", label:"Cabine arrière", x:51, y:29, w:20, h:34},
      {id:"Rideau avant droit", label:"Rideau av. D", x:29, y:24, w:21, h:40},
      {id:"Rideau arrière droit", label:"Rideau ar. D", x:8, y:24, w:21, h:40},
      {id:"Coffre bas droit", label:"Coffre bas D", x:11, y:66, w:30, h:17},
      {id:"Dévidoir arrière droit", label:"Dévidoir D", x:0, y:42, w:10, h:34},
      {id:"Toit / échelles", label:"Toit / échelles", x:14, y:3, w:50, h:17}
    ],
    toit: [],
    interieur: []
  }
};

let fcInventory = [
  ["fpt-53","Cabine conducteur","Carte carburant","DIVERS",1],
  ["fpt-53","Cabine conducteur","Clés gaz","DIVERS",1],
  ["fpt-53","Cabine conducteur","Outil OFD","DIVERS",1],
  ["fpt-53","Cabine conducteur","Boîte de craies","DIVERS",1],
  ["fpt-53","Cabine conducteur","Rouleau de rubalise","DIVERS",1],
  ["fpt-53","Cabine chef d’agrès","Portatif TPH 900","DIVERS",1],
  ["fpt-53","Cabine chef d’agrès","Classeur cartographie","DIVERS",1],
  ["fpt-53","Cabine chef d’agrès","Classeur PI","DIVERS",1],
  ["fpt-53","Dévidoir arrière gauche","Tuyau Ø70 x40 m","INCENDIE",5],
  ["fpt-53","Dévidoir arrière droit","Tuyau Ø70 x40 m","INCENDIE",5],
  ["fpt-53","Pompe","Crépine","INCENDIE",1],
  ["fpt-53","Pompe","Flotteur","INCENDIE",1],
  ["fpt-53","Pompe","Collecteur d’alimentation","INCENDIE",1],
  ["fpt-53","Rideau avant gauche","ARI complet avec masque","INCENDIE",2],
  ["fpt-53","Rideau avant gauche","Bouteille ARI","INCENDIE",2],
  ["fpt-53","Rideau arrière gauche","Division","INCENDIE",1],
  ["fpt-53","Rideau arrière gauche","LDV 500","INCENDIE",1],
  ["fpt-53","Rideau avant droit","Projecteur","DIVERS",2],
  ["fpt-53","Rideau avant droit","Ventilateur","INCENDIE",1],
  ["fpt-53","Rideau arrière droit","LSPCC","INCENDIE",1],
  ["fpt-53","Rideau arrière droit","Cône de Lübeck","DIVERS",4],
  ["fpt-53","Toit / échelles","Échelle à coulisse","INCENDIE",1],
  ["fpt-53","Toit / échelles","Échelle à crochet","INCENDIE",1]
].map((x,i)=>({id:"fc-"+i, vehicleId:x[0], zone:x[1], name:x[2], category:x[3], qty:x[4]}));

function fcEnsureVehicle(vehicleId){
  if(!fcLayouts[vehicleId]){
    fcLayouts[vehicleId] = {droite:[], arriere:[], gauche:[], toit:[], avant:[], interieur:[]};
  }
  if(!fcPhotos[vehicleId]) fcPhotos[vehicleId] = {};
}

function renderCheckSheets(){
  const root = document.getElementById("fcView");
  if(!root) return;
  renderFcLibrary();

  document.querySelectorAll("[data-fc-category]").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.fcCategory === fcState.category);
    btn.onclick = () => {
      if(btn.dataset.fcCategory === "create"){
        const dlg = document.getElementById("fcCreateDialog");
        if(dlg) dlg.showModal();
        return;
      }
      fcState.category = btn.dataset.fcCategory;
      fcState.mode = "list";
      renderCheckSheets();
    };
  });

  if(fcState.mode === "detail") renderFcDetail(root);
  else renderFcList(root);
}

function renderFcLibrary(){
  const list = document.getElementById("fcLibraryList");
  if(!list) return;
  document.querySelectorAll(".fc-tab").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.fcFamily === fcState.family);
    btn.onclick = () => {
      fcState.family = btn.dataset.fcFamily;
      renderCheckSheets();
    };
  });

  const q = (document.getElementById("fcSearch")?.value || "").toLowerCase();
  const items = FC_LIBRARY.filter(i => i.family === fcState.family).filter(i => i.name.toLowerCase().includes(q));
  const addButton = `<button class="btn primary fc-library-add" id="openLibraryItemDialog">+ Ajouter du matériel</button>`;

  // Grouper par sous-catégorie
  const groups = {};
  items.forEach(i => {
    const key = i.sub || "Autres";
    if(!groups[key]) groups[key] = [];
    groups[key].push(i);
  });

  const grouped = Object.entries(groups).sort(([a],[b]) => a.localeCompare(b, "fr"));

  list.innerHTML = addButton + grouped.map(([subName, subItems]) => `
    <div class="fc-lib-subcat">${fcEsc(subName)}</div>
    ${subItems.map(i => {
      const libIdx = FC_LIBRARY.indexOf(i);
      return `
        <div class="fc-lib-item ${i.custom ? "fc-lib-custom" : ""}" draggable="true" data-name="${fcEsc(i.name)}" data-family="${i.family}" data-sub="${fcEsc(i.sub)}" data-qty="${i.qty}" data-lib-idx="${libIdx}">
          <strong>${i.name}</strong>
          <button class="fc-lib-edit-btn" data-lib-idx="${libIdx}" title="Modifier / déplacer">✏️</button>
        </div>
      `;
    }).join("")}
  `).join("");
  document.querySelectorAll(".fc-lib-item").forEach(el=>{
    el.ondragstart = e => {
      e.dataTransfer.setData("application/json", JSON.stringify({
        name:el.dataset.name, family:el.dataset.family, sub:el.dataset.sub, qty:Number(el.dataset.qty || 1)
      }));
    };
  });
  document.querySelectorAll(".fc-lib-edit-btn").forEach(btn => {
    btn.onclick = e => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.libIdx);
      const item = FC_LIBRARY[idx];
      if(!item) return;
      openLibraryEditDialog(idx, item);
    };
  });
  const search = document.getElementById("fcSearch");
  if(search) search.oninput = renderFcLibrary;

  // Drag & drop vers une autre catégorie (dépôt sur les onglets)
  document.querySelectorAll(".fc-tab").forEach(tab => {
    tab.ondragover = e => {
      // Vérifie que c'est bien un item bibliothèque
      if(e.dataTransfer.types.includes("application/json")){
        e.preventDefault();
        tab.classList.add("fc-tab-drop-target");
      }
    };
    tab.ondragleave = () => tab.classList.remove("fc-tab-drop-target");
    tab.ondrop = e => {
      tab.classList.remove("fc-tab-drop-target");
      e.preventDefault();
      try{
        const data = JSON.parse(e.dataTransfer.getData("application/json"));
        const targetFamily = tab.dataset.fcFamily;
        if(!data.name || !targetFamily) return;
        if(data.family === targetFamily){ toast("Déjà dans cette catégorie"); return; }
        // Trouver et déplacer dans FC_LIBRARY
        const idx = FC_LIBRARY.findIndex(i => i.name === data.name && i.family === data.family && i.sub === data.sub);
        if(idx >= 0){
          FC_LIBRARY[idx] = {...FC_LIBRARY[idx], family: targetFamily};
          fcState.family = targetFamily;
          renderCheckSheets();
          toast(`"${data.name}" déplacé vers ${targetFamily}`);
        }
      }catch(err){ console.error(err); }
    };
  });

  const addBtn = document.getElementById("openLibraryItemDialog");
  if(addBtn) addBtn.onclick = () => {
    const dlg = document.getElementById("libraryItemDialog");
    dlg.dataset.editIdx = "";
    const title = dlg.querySelector("h2");
    if(title) title.textContent = "Ajouter du matériel";
    const saveBtn = document.getElementById("saveLibraryItem");
    if(saveBtn) saveBtn.textContent = "Ajouter à la bibliothèque";
    document.getElementById("newLibraryItemFamily").value = fcState.family;
    document.getElementById("newLibraryItemSub").value = "";
    document.getElementById("newLibraryItemName").value = "";
    document.getElementById("newLibraryItemQty").value = 1;
    dlg.showModal();
  };
}

function renderFcList(root){
  const vehicles = fcVehicles.filter(v => v.category === fcState.category);
  root.innerHTML = `
    <div class="inventory-helper">
      <strong>${fcState.category === "rolling" ? "Parc roulant" : "Matériel"}</strong><br>
      Clique sur un inventaire pour l’ouvrir. La bibliothèque reste disponible à gauche.
    </div>
    <div class="fc-list-grid">
      ${vehicles.map(v=>{
        const count = fcInventory.filter(i => i.vehicleId === v.id).length;
        return `<article class="fc-card">
          <h3>${v.name}</h3>
          <p>${v.type}</p>
          <p><strong>${v.plate}</strong></p>
          <p>${count} matériels inventoriés</p>
          <button class="btn secondary fc-open" data-id="${v.id}">Ouvrir l’inventaire</button>
        </article>`;
      }).join("")}
    </div>
  `;
  document.querySelectorAll(".fc-open").forEach(btn=>{
    btn.onclick = () => {
      fcState.vehicleId = btn.dataset.id;
      fcState.mode = "detail";
      fcState.view = "gauche";
      fcEnsureVehicle(fcState.vehicleId);
      fcState.zone = (fcLayouts[fcState.vehicleId][fcState.view] || [])[0]?.id || "";
      renderCheckSheets();
    };
  });
}

function renderFcDetail(root){
  const vehicle = fcVehicles.find(v => v.id === fcState.vehicleId) || fcVehicles[0];
  fcEnsureVehicle(vehicle.id);
  const zones = fcLayouts[vehicle.id][fcState.view] || [];
  if(!fcState.zone && zones[0]) fcState.zone = zones[0].id;
  const selectedZone = zones.find(z => z.id === fcState.zone) || zones[0] || null;
  if(selectedZone) fcState.zone = selectedZone.id;
  const zoneItems = selectedZone ? fcInventory.filter(i => i.vehicleId === vehicle.id && i.zone === selectedZone.id) : [];
  const allCount = fcInventory.filter(i => i.vehicleId === vehicle.id).length;
  const photo = fcPhotos[vehicle.id]?.[fcState.view];

  root.innerHTML = `
    <button class="btn ghost fc-back">← Retour à la liste</button>

    <div class="fc-detail-head">
      <div class="panel-head">
        <div>
          <p class="eyebrow">Inventaire véhicule</p>
          <h2>${vehicle.name}</h2>
        </div>
        <button class="btn primary">Modifier l’inventaire</button>
      </div>
      <div class="fc-meta">
        <div><span>Immatriculation / référence</span><strong>${vehicle.plate}</strong></div>
        <div><span>Type</span><strong>${vehicle.type}</strong></div>
        <div><span>Matériels</span><strong>${allCount}</strong></div>
      </div>
    </div>

    <div class="fc-view-tabs">
      ${fcViews.map(v=>`<button class="fc-view-tab ${v.id===fcState.view?"active":""}" data-view="${v.id}">${v.label}</button>`).join("")}
    </div>

    <div class="fc-detail-grid">
      <div class="fc-photo-editor">
        <div class="fc-photo-toolbar">
          <div class="fc-legend">
            <span><b class="blue"></b>Zone</span>
            <span><b class="orange"></b>Sélection</span>
          </div>
          <div class="fc-photo-stats">
            <span>${zones.length} zones</span>
            <span>${allCount} matériels</span>
          </div>
        </div>
        <div class="fc-photo-stage" id="fcPhotoStage" ${photo ? `style="background-image:url('${photo}')"` : ""}>
          ${photo ? "" : `<div class="fc-placeholder"><div><span>📷</span><strong>${fcViews.find(v=>v.id===fcState.view)?.label}</strong><p>Importe une photo ou ajoute des zones.</p></div></div>`}
          ${zones.map(z=>`<div class="fc-zone ${z.id===fcState.zone?"active":""}" data-zone="${fcEsc(z.id)}" style="left:${z.x}%;top:${z.y}%;width:${z.w}%;height:${z.h}%">${z.label}<span class="resize"></span></div>`).join("")}
        </div>
        <div class="fc-actions">
          <label class="fc-file-label" for="fcPhotoInput">📷 Importer photo</label>
          <input id="fcPhotoInput" type="file" accept="image/*">
          <button class="btn secondary" id="fcAddZone">+ Ajouter zone</button>
          <button class="btn ghost" id="fcDeleteZone">Supprimer zone</button>
          <button class="btn primary" onclick="toast('Plan enregistré dans le prototype')">Enregistrer le plan</button>
        </div>
      </div>

      <aside class="fc-zone-panel">
        <h3>Zone sélectionnée</h3>
        ${selectedZone ? `
          <input class="fc-zone-name" id="fcZoneName" value="${fcEsc(selectedZone.label)}">
          <div class="fc-zone-drop" id="fcDrop">
            ${zoneItems.length ? zoneItems.map(i=>`
              <div class="fc-zone-item">
                <div><strong>${i.name}</strong><small>${i.category || "Sans catégorie"}</small></div>
                <input type="number" min="1" value="${i.qty}" data-qty="${i.id}">
                <button class="delete-mini" data-delete="${i.id}">Suppr.</button>
              </div>`).join("") : `<div class="fc-empty">Glisse ici du matériel depuis la bibliothèque.</div>`}
          </div>
        ` : `<div class="fc-empty">Aucune zone sur cette vue. Clique sur “Ajouter zone”.</div>`}
      </aside>
    </div>
  `;

  root.querySelector(".fc-back").onclick = () => { fcState.mode = "list"; renderCheckSheets(); };

  document.querySelectorAll(".fc-view-tab").forEach(btn=>{
    btn.onclick = () => {
      fcState.view = btn.dataset.view;
      fcState.zone = (fcLayouts[vehicle.id][fcState.view] || [])[0]?.id || "";
      renderCheckSheets();
    };
  });

  document.querySelectorAll(".fc-zone").forEach(el=>fcZoneEvents(el, vehicle.id));

  const photoInput = document.getElementById("fcPhotoInput");
  if(photoInput){
    photoInput.onchange = e => {
      const file = e.target.files[0];
      if(!file) return;
      fcPhotos[vehicle.id][fcState.view] = URL.createObjectURL(file);
      renderCheckSheets();
    };
  }

  document.getElementById("fcAddZone").onclick = () => {
    const z = {id:"Nouvelle zone " + Date.now(), label:"Nouvelle zone", x:30, y:30, w:22, h:18};
    fcLayouts[vehicle.id][fcState.view].push(z);
    fcState.zone = z.id;
    renderCheckSheets();
  };

  document.getElementById("fcDeleteZone").onclick = () => {
    if(!fcState.zone) return;
    fcLayouts[vehicle.id][fcState.view] = fcLayouts[vehicle.id][fcState.view].filter(z => z.id !== fcState.zone);
    fcInventory = fcInventory.filter(i => !(i.vehicleId === vehicle.id && i.zone === fcState.zone));
    fcState.zone = (fcLayouts[vehicle.id][fcState.view] || [])[0]?.id || "";
    renderCheckSheets();
  };

  const zoneName = document.getElementById("fcZoneName");
  if(zoneName){
    zoneName.onchange = () => {
      const z = fcLayouts[vehicle.id][fcState.view].find(x => x.id === fcState.zone);
      if(!z) return;
      const old = z.id;
      z.id = zoneName.value;
      z.label = zoneName.value;
      fcInventory.forEach(i => { if(i.vehicleId === vehicle.id && i.zone === old) i.zone = z.id; });
      fcState.zone = z.id;
      renderCheckSheets();
    };
  }

  const drop = document.getElementById("fcDrop");
  if(drop){
    drop.ondragover = e => { e.preventDefault(); drop.classList.add("drag-over"); };
    drop.ondragleave = () => drop.classList.remove("drag-over");
    drop.ondrop = e => {
      e.preventDefault();
      drop.classList.remove("drag-over");
      const item = JSON.parse(e.dataTransfer.getData("application/json"));
      const newItem = {id:"fcitem-" + Date.now(), vehicleId:vehicle.id, zone:fcState.zone, name:item.name, category:item.family, qty:item.qty || 1};
      fcInventory.push(newItem);
      if(typeof saveInventaireItemSupabase === "function") saveInventaireItemSupabase(newItem);
      toast(`${item.name} ajouté à ${fcState.zone}`);
      renderCheckSheets();
    };
  }

  document.querySelectorAll("[data-delete]").forEach(btn=>{
    btn.onclick = () => {
      const deletedId = btn.dataset.delete;
      fcInventory = fcInventory.filter(i => i.id !== deletedId);
      if(typeof deleteInventaireItemSupabase === "function") deleteInventaireItemSupabase(deletedId);
      renderCheckSheets();
    };
  });
  document.querySelectorAll("[data-qty]").forEach(input=>{
    input.onchange = () => {
      const item = fcInventory.find(i => i.id === input.dataset.qty);
      if(item) item.qty = Number(input.value || 1);
      renderCheckSheets();
    };
  });
}

function fcZoneEvents(el, vehicleId){
  el.onclick = e => {
    e.stopPropagation();
    fcState.zone = el.dataset.zone;
    renderCheckSheets();
  };

  const stage = document.getElementById("fcPhotoStage");
  let mode = null, startX = 0, startY = 0, start = null;

  function begin(e, resize){
    e.preventDefault();
    e.stopPropagation();
    fcState.zone = el.dataset.zone;
    const z = fcLayouts[vehicleId][fcState.view].find(x => x.id === fcState.zone);
    if(!z) return;
    mode = resize ? "resize" : "move";
    startX = e.clientX;
    startY = e.clientY;
    start = {...z};
    document.onmousemove = move;
    document.onmouseup = end;
  }
  function move(e){
    const z = fcLayouts[vehicleId][fcState.view].find(x => x.id === fcState.zone);
    const rect = stage.getBoundingClientRect();
    const dx = ((e.clientX - startX) / rect.width) * 100;
    const dy = ((e.clientY - startY) / rect.height) * 100;
    if(mode === "move"){
      z.x = Math.max(0, Math.min(95, start.x + dx));
      z.y = Math.max(0, Math.min(95, start.y + dy));
    } else {
      z.w = Math.max(8, Math.min(95 - z.x, start.w + dx));
      z.h = Math.max(8, Math.min(95 - z.y, start.h + dy));
    }
    el.style.left = z.x + "%";
    el.style.top = z.y + "%";
    el.style.width = z.w + "%";
    el.style.height = z.h + "%";
  }
  function end(){
    document.onmousemove = null;
    document.onmouseup = null;
    mode = null;
  }
  el.onmousedown = e => begin(e, false);
  const resize = el.querySelector(".resize");
  if(resize) resize.onmousedown = e => begin(e, true);
}

function fcEsc(value){
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

function fcBindCreate(){
  const btn = document.getElementById("fcCreateInventory");
  const dlg = document.getElementById("fcCreateDialog");
  if(btn && dlg) btn.onclick = () => dlg.showModal();
  const close = document.getElementById("fcCloseCreate");
  if(close && dlg) close.onclick = () => dlg.close();
  const save = document.getElementById("fcSaveNew");
  if(save && dlg){
    save.onclick = () => {
      const name = document.getElementById("fcNewName").value || "Nouvel inventaire";
      const id = name.toLowerCase().replace(/[^a-z0-9]+/g,"-") + "-" + Date.now();
      const newVehicle = {
        id,
        category:document.getElementById("fcNewCategory").value,
        name,
        type:document.getElementById("fcNewType").value || "À définir",
        plate:document.getElementById("fcNewPlate").value || "À définir"
      };
      fcVehicles.push(newVehicle);
      if(typeof saveVehicleSupabase === "function") saveVehicleSupabase(newVehicle);
      fcState.category = document.getElementById("fcNewCategory").value;
      fcState.vehicleId = id;
      fcState.mode = "detail";
      fcState.view = "gauche";
      fcEnsureVehicle(id);
      dlg.close();
      renderCheckSheets();
    };
  }
}

fcBindCreate();


/* V13 - impression inventaire + amélioration ajout bibliothèque sans drag obligatoire */

function fcPrintInventory(){
  const vehicle = fcVehicles.find(v => v.id === fcState.vehicleId);
  if(!vehicle){ toast("Aucun véhicule sélectionné"); return; }

  const allItems = fcInventory.filter(i => i.vehicleId === vehicle.id);
  let printArea = document.getElementById("printArea");
  if(!printArea){
    printArea = document.createElement("div");
    printArea.id = "printArea";
    printArea.className = "print-only";
    document.body.appendChild(printArea);
  }

  const updated = new Date().toLocaleDateString("fr-FR");
  const coverPhoto = (typeof getMediaV30 === "function" && getMediaV30(vehicle.id, "cover"))
    || fcPhotos?.[vehicle.id]?.avant || fcPhotos?.[vehicle.id]?.gauche || "";

  // Paramètres CIS
  const cisName = localStorage.getItem("fc_cis_name") || "CIS Château-Gontier";

  const printStructure = [
    { title:"CABINE", steps:[
        {name:"Cabine avant", aliases:["Cabine avant","Cabine conducteur","Cabine chef d'agrès","Cabine chef d'agres"]},
        {name:"Cabine arrière", aliases:["Cabine arrière","Cabine arriere"]}
    ]},
    { title:"COFFRE LATÉRAL EXTÉRIEUR CÔTÉ GAUCHE", steps:[
        {name:"Rideau avant gauche", aliases:["Rideau avant gauche","Rideau av. G"]},
        {name:"Rideau milieu gauche", aliases:["Rideau milieu gauche","Rideau mil. G"]},
        {name:"Rideau arrière gauche", aliases:["Rideau arrière gauche","Rideau ar. G"]},
        {name:"Coffre arrière gauche", aliases:["Coffre arrière gauche","Coffre bas gauche"]}
    ]},
    { title:"COFFRE LATÉRAL EXTÉRIEUR CÔTÉ DROIT", steps:[
        {name:"Rideau avant droit", aliases:["Rideau avant droit","Rideau av. D"]},
        {name:"Rideau milieu droit", aliases:["Rideau milieu droit","Rideau mil. D"]},
        {name:"Rideau arrière droit", aliases:["Rideau arrière droit","Rideau ar. D"]},
        {name:"Coffre arrière droit", aliases:["Coffre arrière droit","Coffre bas droit"]}
    ]},
    { title:"ARRIÈRE / POMPE", steps:[
        {name:"Arrière véhicule", aliases:["Arrière véhicule","Arriere vehicule","Compartiment pompe","Pompe","Tableau de commande pompe","Rideau arrière"]},
        {name:"Dévidoirs", aliases:["Dévidoir arrière gauche","Dévidoir arrière droit","Dévidoir gauche","Dévidoir droit"]}
    ]},
    { title:"TOIT", steps:[
        {name:"Toit / échelles", aliases:["Toit","Toit / échelles","Échelles de toit","Équipements de toit","Échelles arrière / toit"]}
    ]}
  ];

  const usedIds = new Set();
  const getItemsForStep = (aliases) => {
    const cleanAliases = aliases.map(a => a.toLowerCase());
    return allItems.filter(item => {
      const zone = String(item.zone || "").toLowerCase();
      const match = cleanAliases.some(a => zone === a);
      if(match) usedIds.add(item.id);
      return match;
    });
  };

  let ficheNum = 1;

  const renderZone = (step) => {
    const items = getItemsForStep(step.aliases);
    const stepPhoto = typeof getMediaV30 === "function" ? getMediaV30(vehicle.id, `step:${step.name}`) : "";
    if(!items.length && !stepPhoto) return "";
    return `
      <div class="inv-zone-block">
        <div class="inv-zone-title">${fcEsc(step.name)}</div>
        ${stepPhoto ? `<div class="inv-zone-photo"><img src="${stepPhoto}" alt="${fcEsc(step.name)}"></div>` : ""}
        ${items.length ? `
          <table class="inv-table">
            <thead><tr><th>DÉSIGNATION</th><th class="inv-col-qty">QTÉ</th><th class="inv-col-check">✓</th></tr></thead>
            <tbody>
              ${items.map(item => `
                <tr>
                  <td>${fcEsc(item.name)}</td>
                  <td class="inv-col-qty">${fcEsc(String(item.qty))}</td>
                  <td class="inv-col-check"></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        ` : `<p class="inv-empty-zone">Emplacement disponible — aucun matériel enregistré</p>`}
      </div>
    `;
  };

  const renderSection = (section) => {
    const zonesHtml = section.steps.map(renderZone).join("");
    if(!zonesHtml) return "";
    return `
      <div class="inv-section">
        <div class="inv-section-header">
          <span class="inv-section-num">FICHE N°${ficheNum++}</span>
          <span class="inv-section-title">${fcEsc(section.title)}</span>
        </div>
        ${zonesHtml}
      </div>
    `;
  };

  const unclassified = allItems.filter(i => !usedIds.has(i.id));

  printArea.innerHTML = `
    <div class="inv-page">

      <!-- PAGE DE COUVERTURE -->
      <div class="inv-cover-page">
        <div class="inv-cover-header">
          <div class="inv-cover-cis">${fcEsc(cisName)}</div>
          <div class="inv-cover-type">${fcEsc(vehicle.name)}</div>
          <div class="inv-cover-immat">${fcEsc(vehicle.plate || "")}</div>
          <div class="inv-cover-fulltype">${fcEsc(vehicle.type || "")}</div>
          <div class="inv-cover-maj">Mise à jour : ${updated}</div>
        </div>

        ${coverPhoto ? `<div class="inv-cover-photo"><img src="${coverPhoto}" alt="Photo véhicule"></div>` : `<div class="inv-cover-photo inv-cover-photo-empty">📷 Photo du véhicule</div>`}

        <div class="inv-cover-sommaire">
          <div class="inv-sommaire-title">SOMMAIRE</div>
          <table class="inv-sommaire-table">
            <thead><tr><th>ZONE</th><th>FICHE N°</th></tr></thead>
            <tbody>
              ${printStructure.map((s, i) => `<tr><td>${fcEsc(s.title)}</td><td>${i+1}</td></tr>`).join("")}
              ${unclassified.length ? `<tr><td>AUTRES ÉLÉMENTS</td><td>ANNEXE</td></tr>` : ""}
            </tbody>
          </table>
        </div>

        <div class="inv-cover-footer">
          <div>INVENTAIRE — ${fcEsc(vehicle.name)}</div>
          <div class="inv-cover-qr">
            <div id="invCoverQrBox" style="width:60px;height:60px;"></div>
            <small>QR FireCheck</small>
          </div>
        </div>
      </div>

      <!-- FICHES PAR ZONE -->
      ${printStructure.map(renderSection).join("")}

      <!-- ANNEXE -->
      ${unclassified.length ? `
        <div class="inv-section">
          <div class="inv-section-header">
            <span class="inv-section-num">ANNEXE</span>
            <span class="inv-section-title">MATÉRIELS NON CLASSÉS</span>
          </div>
          <div class="inv-zone-block">
            <table class="inv-table">
              <thead><tr><th>DÉSIGNATION</th><th>ZONE</th><th class="inv-col-qty">QTÉ</th><th class="inv-col-check">✓</th></tr></thead>
              <tbody>
                ${unclassified.map(item => `
                  <tr>
                    <td>${fcEsc(item.name)}</td>
                    <td><em>${fcEsc(item.zone)}</em></td>
                    <td class="inv-col-qty">${fcEsc(String(item.qty))}</td>
                    <td class="inv-col-check"></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      ` : ""}

      <div class="inv-footer-note">
        Document de vérification journalière — FireCheck · ${fcEsc(cisName)} · ${fcEsc(vehicle.name)}
      </div>
    </div>
  `;

  window.print();
}

// Surclasse le détail pour ajouter le bouton imprimer après rendu existant
const fcRenderDetailBeforePrintV13 = renderFcDetail;
renderFcDetail = function(root){
  fcRenderDetailBeforePrintV13(root);
  const head = root.querySelector(".fc-detail-head .panel-head");
  if(head && !document.getElementById("fcPrintInventoryBtn")){
    const btn = document.createElement("button");
    btn.id = "fcPrintInventoryBtn";
    btn.className = "btn ghost";
    btn.textContent = "🖨️ Imprimer l’inventaire";
    btn.onclick = fcPrintInventory;
    head.appendChild(btn);
  }

  // Ajout par double-clic depuis bibliothèque, en complément du glisser-déposer
  document.querySelectorAll(".fc-lib-item").forEach(el => {
    el.ondblclick = () => {
      const vehicle = fcVehicles.find(v => v.id === fcState.vehicleId);
      if(!vehicle || fcState.mode !== "detail" || !fcState.zone){
        toast("Ouvre un inventaire et sélectionne une zone");
        return;
      }
      const dblItem = {
        id:"fcitem-" + Date.now(),
        vehicleId:vehicle.id,
        zone:fcState.zone,
        name:el.dataset.name,
        category:el.dataset.family,
        qty:Number(el.dataset.qty || 1)
      };
      fcInventory.push(dblItem);
      if(typeof saveInventaireItemSupabase === "function") saveInventaireItemSupabase(dblItem);
      toast(`${el.dataset.name} ajouté à ${fcState.zone}`);
      renderCheckSheets();
    };
  });
};


/* V16 - Paramètres CIS + personnel + identification matricule */
let centerSettings = {
  name: localStorage.getItem("fc_cis_name") || "CIS Château-Gontier",
  logo: localStorage.getItem("fc_cis_logo") || ""
};

let personnelList = JSON.parse(localStorage.getItem("fc_personnel") || "null") || [];


let currentUser = JSON.parse(localStorage.getItem("fc_current_user") || "null");

function applyCenterSettings(){
  const cisNameEls = [
    document.getElementById("homeCisName"),
    document.querySelector(".cis-card h1")
  ].filter(Boolean);
  cisNameEls.forEach(el => el.textContent = centerSettings.name);

  const input = document.getElementById("cisNameInput");
  if(input) input.value = centerSettings.name;

  const preview = document.getElementById("logoPreview");
  if(preview){
    preview.innerHTML = centerSettings.logo ? `<img src="${centerSettings.logo}" alt="Logo">` : "🚒";
  }

  const homeLogo = document.querySelector(".cis-logo");
  if(homeLogo){
    homeLogo.innerHTML = centerSettings.logo ? `<img src="${centerSettings.logo}" alt="Logo CIS" style="width:100%;height:100%;object-fit:cover;border-radius:34px;">` : "🚒";
  }
}

function renderLoginState(){
  const loginCard = document.getElementById("loginCard");
  const profileCard = document.getElementById("profileCard");
  if(!loginCard || !profileCard) return;

  if(currentUser){
    loginCard.classList.add("hidden");
    profileCard.classList.remove("hidden");
    document.getElementById("profileName").textContent = `${currentUser.grade} ${currentUser.prenom} ${currentUser.nom}`;
    document.getElementById("profileGrade").textContent = currentUser.grade;
    document.getElementById("profileMatricule").textContent = currentUser.matricule;
    document.getElementById("profileService").textContent = currentUser.service || "—";
  } else {
    loginCard.classList.remove("hidden");
    profileCard.classList.add("hidden");
  }
}

function loginWithMatricule(){
  const raw = (document.getElementById("matriculeInput")?.value || "").trim().toUpperCase();
  const user = personnelList.find(p => p.matricule.toUpperCase() === raw);
  if(!user){
    toast("Matricule non trouvé dans la liste du personnel");
    return;
  }
  currentUser = user;
  localStorage.setItem("fc_current_user", JSON.stringify(currentUser));
  renderLoginState();
  toast(`Bienvenue ${user.grade} ${user.prenom} ${user.nom}`);
}


function renderPersonnelTable(){
  const table = document.getElementById("personnelTable");
  if(!table) return;
  table.innerHTML = personnelList.map((p, idx) => `
    <div class="personnel-row extended" data-index="${idx}">
      <input value="${fcEsc(p.matricule || "")}" data-field="matricule" placeholder="Matricule">
      <input value="${fcEsc(p.grade || "")}" data-field="grade" placeholder="Grade">
      <input value="${fcEsc(p.nom || "")}" data-field="nom" placeholder="Nom">
      <input value="${fcEsc(p.prenom || "")}" data-field="prenom" placeholder="Prénom">
      <input value="${fcEsc(p.type || "")}" data-field="type" placeholder="Type">
      <input value="${fcEsc(p.equipe || p.service || "")}" data-field="equipe" placeholder="Équipe">
      <input value="${fcEsc(p.statut || "ACTIF")}" data-field="statut" placeholder="Statut">
      <button data-remove="${idx}">Suppr.</button>
    </div>
  `).join("");

  table.querySelectorAll("input").forEach(input => {
    input.onchange = () => {
      const row = input.closest(".personnel-row");
      const target = personnelList[Number(row.dataset.index)];
      target[input.dataset.field] = input.value;
      if(input.dataset.field === "equipe") target.service = input.value;
    };
  });

  table.querySelectorAll("[data-remove]").forEach(btn => {
    btn.onclick = () => {
      personnelList.splice(Number(btn.dataset.remove), 1);
      renderPersonnelTable();
    };
  });
}

function parsePersonnelRows(rows){
  const parsed = [];
  const normalize = (v) => String(v ?? "").trim();

  rows.forEach((row, idx) => {
    if(!row || row.every(v => normalize(v) === "")) return;

    // Skip title/help/header rows
    const firstCells = row.slice(0, 4).map(normalize).join(" ").toUpperCase();
    if(firstCells.includes("MODÈLE D'IMPORT") || firstCells.includes("REMPLISSEZ")) return;
    if(firstCells.includes("MATRICULE") && firstCells.includes("NOM")) return;

    const matricule = normalize(row[0]);
    const nom = normalize(row[1]);
    const prenom = normalize(row[2]);
    const grade = normalize(row[3]);
    const type = normalize(row[4]);
    const equipe = normalize(row[5]);
    const aptitude = normalize(row[6]);
    const specialites = normalize(row[7]);
    const dateNaissance = normalize(row[8]);
    const statut = normalize(row[9]) || "ACTIF";
    const notes = normalize(row[10]);

    if(!nom || !grade) return;

    parsed.push({
      matricule,
      grade,
      nom,
      prenom,
      service: equipe,
      type,
      equipe,
      aptitude,
      specialites,
      dateNaissance,
      statut,
      notes
    });
  });

  return parsed;
}

function importPersonnelCsv(file){
  const reader = new FileReader();

  if(file.name.toLowerCase().endsWith(".xlsx") || file.name.toLowerCase().endsWith(".xls")){
    reader.onload = () => {
      if(typeof XLSX === "undefined"){
        toast("Import Excel indisponible hors connexion. Ouvre l’application avec internet ou utilise CSV.");
        return;
      }
      const workbook = XLSX.read(reader.result, {type:"array"});
      const sheetName = workbook.SheetNames.includes("Personnel") ? "Personnel" : workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const rows = XLSX.utils.sheet_to_json(sheet, {header:1, raw:false});
      const parsed = parsePersonnelRows(rows);
      if(parsed.length){
        personnelList = parsed;
        localStorage.setItem("fc_personnel", JSON.stringify(personnelList));
    if(typeof savePersonnelSupabase === "function") savePersonnelSupabase();
    if(typeof savePersonnelSupabase === "function") savePersonnelSupabase();
    if(typeof savePersonnelSupabase === "function") savePersonnelSupabase();
    if(typeof savePersonnelSupabase === "function") savePersonnelSupabase();
    if(typeof savePersonnelSupabase === "function") savePersonnelSupabase();
    if(typeof savePersonnelSupabase === "function") savePersonnelSupabase();
    if(typeof savePersonnelSupabase === "function") savePersonnelSupabase();
    if(typeof savePersonnelSupabase === "function") savePersonnelSupabase();
    if(typeof savePersonnelSupabase === "function") savePersonnelSupabase();
    if(typeof savePersonnelSupabase === "function") savePersonnelSupabase();
    if(typeof savePersonnelSupabase === "function") savePersonnelSupabase();
        renderPersonnelTable();
        toast(`${parsed.length} personnels importés depuis Excel`);
      } else {
        toast("Aucune ligne exploitable dans le fichier Excel");
      }
    };
    reader.readAsArrayBuffer(file);
    return;
  }

  reader.onload = () => {
    const text = reader.result;
    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const rows = lines.map(line => line.split(/[;,]/).map(p => p.trim()));
    const parsed = parsePersonnelRows(rows);
    if(parsed.length){
      personnelList = parsed;
      localStorage.setItem("fc_personnel", JSON.stringify(personnelList));
      renderPersonnelTable();
      toast(`${parsed.length} personnels importés`);
    } else {
      toast("Aucune ligne exploitable dans le CSV");
    }
  };
  reader.readAsText(file, "UTF-8");
}

function bindSettings(){
  const loginBtn = document.getElementById("loginByMatricule");
  if(loginBtn) loginBtn.onclick = loginWithMatricule;
  const matInput = document.getElementById("matriculeInput");
  if(matInput) matInput.onkeydown = e => { if(e.key === "Enter") loginWithMatricule(); };

  const change = document.getElementById("changeUser");
  if(change) change.onclick = () => {
    currentUser = null;
    localStorage.removeItem("fc_current_user");
    renderLoginState();
  };

  const saveCenter = document.getElementById("saveCenterSettings");
  if(saveCenter) saveCenter.onclick = () => {
    centerSettings.name = document.getElementById("cisNameInput").value || centerSettings.name;
    localStorage.setItem("fc_cis_name", centerSettings.name);
    applyCenterSettings();
    toast("Paramètres du centre enregistrés");
  };

  const logoInput = document.getElementById("cisLogoInput");
  if(logoInput) logoInput.onchange = e => {
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      centerSettings.logo = reader.result;
      localStorage.setItem("fc_cis_logo", centerSettings.logo);
      applyCenterSettings();
    };
    reader.readAsDataURL(file);
  };

  const importInput = document.getElementById("personnelImport");
  if(importInput) importInput.onchange = e => {
    const file = e.target.files[0];
    if(file) importPersonnelCsv(file);
  };

  const addRow = document.getElementById("addPersonnelRow");
  if(addRow) addRow.onclick = () => {
    personnelList.push({matricule:"", grade:"", nom:"", prenom:"", service:""});
    renderPersonnelTable();
  };

  const savePersonnel = document.getElementById("savePersonnel");
  if(savePersonnel) savePersonnel.onclick = () => {
    localStorage.setItem("fc_personnel", JSON.stringify(personnelList));
    toast("Liste du personnel enregistrée");
  };

  const model = document.getElementById("downloadCsvModel");
  if(model) model.onclick = () => {
    const csv = "matricule;grade;nom;prenom;service\\nSP-00001;Caporal;DUPONT;Lucas;Jour\\n";
    const blob = new Blob([csv], {type:"text/csv;charset=utf-8"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "modele_personnel_firecheck.csv";
    a.click();
    URL.revokeObjectURL(url);
  };
}

const renderAllBeforeV16 = renderAll;
renderAll = function(){
  renderAllBeforeV16();
  applyCenterSettings();
  renderLoginState();
  renderPersonnelTable();
  bindSettings();
};


/* V17 - mode ordinateur */
function applyResponsiveMode(){
  const isDesktop = window.innerWidth >= 1100;
  document.body.classList.toggle("desktop-mode", isDesktop);

  let badge = document.getElementById("desktopPcBadge");
  if(isDesktop && !badge){
    badge = document.createElement("div");
    badge.id = "desktopPcBadge";
    badge.className = "desktop-pc-badge";
    badge.textContent = "Mode ordinateur";
    document.body.appendChild(badge);
  }
  if(!isDesktop && badge){
    badge.remove();
  }
}

window.addEventListener("resize", applyResponsiveMode);

const renderAllBeforeV17 = renderAll;
renderAll = function(){
  renderAllBeforeV17();
  applyResponsiveMode();
};


/* V18 - remontées filtrables + prise en charge + ajout entretien */
let techReportFilter = "all";
let activeTakeChargeId = null;
let assetDialogMode = "vehicle";

function enhanceReportsForV18(){
  if(!reports) return;
  reports.forEach(r => {
    if(!r.history) r.history = [];
  });
}
enhanceReportsForV18();

function setTechFilter(filter){
  techReportFilter = filter;
  const select = document.getElementById("reportFilter");
  if(select) select.value = filter;
  renderReports();
}

const renderReportsBeforeV18 = renderReports;
renderReports = function(){
  enhanceReportsForV18();
  renderReportsBeforeV18();

  const filterMap = {
    statNew:"Nouveau",
    statProgress:"Pris en compte",
    statSp:"Corrigé par SP",
    statLate:"due"
  };

  Object.entries(filterMap).forEach(([id, filter]) => {
    const el = document.getElementById(id);
    if(el){
      el.onclick = () => setTechFilter(filter === "due" ? "all" : filter);
      el.classList.toggle("active-filter", techReportFilter === filter);
      el.title = "Cliquer pour filtrer";
    }
  });

  const tech = document.getElementById("techReportsList");
  if(tech){
    const effectiveFilter = techReportFilter;
    const filteredReports = reports.filter(r => effectiveFilter === "all" || r.status === effectiveFilter);
    tech.innerHTML = filteredReports.map(r => `
      <article class="tech-report">
        <div>
          <strong>${r.asset}</strong><br>
          <span class="muted">${r.zone}</span>
          ${r.history?.length ? `<small class="history">${r.history[r.history.length - 1]}</small>` : ""}
        </div>
        <div><strong>${r.type}</strong><br><span class="muted">${r.item}</span></div>
        <div>${r.author}<br><span class="muted">${r.time}</span></div>
        <div class="tech-report-actions">
          <span class="pill ${statusClass(r.status)}">${r.status}</span>
          <button class="btn ghost take-btn-v18" data-id="${r.id}">Prendre en charge</button>
          <button class="btn primary close-btn-v18" data-id="${r.id}">Clôturer</button>
        </div>
      </article>
    `).join("");

    document.querySelectorAll(".take-btn-v18").forEach(btn => {
      btn.onclick = () => openTakeChargeDialog(Number(btn.dataset.id));
    });
    document.querySelectorAll(".close-btn-v18").forEach(btn => {
      btn.onclick = () => {
        const r = reports.find(x => x.id === Number(btn.dataset.id));
        if(r){
          r.status = "Clôturé";
          r.history = r.history || [];
          r.history.push("Dossier clôturé par le service technique.");
        }
        renderAll();
      };
    });
  }

  const select = document.getElementById("reportFilter");
  if(select){
    select.onchange = () => {
      techReportFilter = select.value;
      renderReports();
    };
    select.value = techReportFilter;
  }
};

function openTakeChargeDialog(id){
  activeTakeChargeId = id;
  const report = reports.find(r => r.id === id);
  if(!report) return;
  document.getElementById("takeChargeSummary").textContent = `${report.asset} · ${report.type} · ${report.item}`;
  document.getElementById("takeChargeName").value = currentUser ? `${currentUser.grade} ${currentUser.prenom} ${currentUser.nom}` : "";
  document.getElementById("takeChargeDate").value = new Date().toISOString().slice(0,10);
  document.getElementById("takeChargeComment").value = `Dossier repris en main${currentUser ? " par " + currentUser.prenom + " " + currentUser.nom : ""}.`;
  document.getElementById("takeChargeDialog").showModal();
}

function bindTakeChargeDialog(){
  const close = document.getElementById("closeTakeCharge");
  if(close) close.onclick = () => document.getElementById("takeChargeDialog").close();
  const confirm = document.getElementById("confirmTakeCharge");
  if(confirm) confirm.onclick = () => {
    const report = reports.find(r => r.id === activeTakeChargeId);
    if(!report) return;
    const name = document.getElementById("takeChargeName").value || "Service technique";
    const date = document.getElementById("takeChargeDate").value || new Date().toISOString().slice(0,10);
    const comment = document.getElementById("takeChargeComment").value || "";
    report.status = "Pris en compte";
    report.takenBy = name;
    report.takenDate = date;
    report.history = report.history || [];
    report.history.push(`Pris en charge le ${date} par ${name}. ${comment}`);
    document.getElementById("takeChargeDialog").close();
    renderAll();
    toast("Dossier pris en charge");
  };
}

function computeAssetState(asset){
  const followType = asset.followType || (String(asset.km || "").includes("h") ? "hours" : "km");
  const current = Number(asset.currentValue ?? String(asset.km || "").replace(/\D/g,"")) || 0;
  const last = Number(asset.lastServiceValue || 0);
  const interval = Number(asset.intervalValue || 0);
  const unit = asset.unit || (followType === "hours" ? "h" : "km");
  let nextValue = interval ? last + interval : 0;
  let remaining = nextValue ? nextValue - current : null;
  let percent = nextValue && interval ? Math.min(100, Math.max(0, ((current - last) / interval) * 100)) : 20;
  let state = "ok";
  if(remaining !== null && remaining <= 0) state = "late";
  else if(remaining !== null && remaining <= interval * 0.15) state = "soon";
  return {followType,current,last,interval,unit,nextValue,remaining,percent,state};
}

function openAssetDialog(mode){
  assetDialogMode = mode;
  document.getElementById("assetDialogEyebrow").textContent = mode === "vehicle" ? "Entretien véhicule" : "Matériel technique";
  document.getElementById("assetDialogTitle").textContent = mode === "vehicle" ? "Ajouter un véhicule" : "Ajouter un matériel";
  document.getElementById("assetName").value = "";
  document.getElementById("assetType").value = mode === "vehicle" ? "Véhicule" : "Matériel";
  document.getElementById("assetRef").value = "";
  document.getElementById("assetFollowType").value = mode === "vehicle" ? "km" : "hours";
  document.getElementById("assetCurrentValue").value = "";
  document.getElementById("assetUnit").value = mode === "vehicle" ? "km" : "h";
  document.getElementById("assetLastServiceValue").value = "";
  document.getElementById("assetIntervalValue").value = mode === "vehicle" ? "15000" : "100";
  document.getElementById("assetNextControlDate").value = "";
  document.getElementById("assetNotes").value = "";
  document.getElementById("assetDialog").showModal();
}

const renderAssetsBeforeV18 = renderAssets;
renderAssets = function(){
  const vGrid = document.getElementById("vehiclesGrid");
  const eGrid = document.getElementById("equipmentGrid");

  if(vGrid){
    vGrid.innerHTML = vehicles.map(a => assetCardV18(a, "vehicle")).join("");
  }
  if(eGrid){
    eGrid.innerHTML = equipment.map(a => assetCardV18(a, "equipment")).join("");
  }

  document.querySelectorAll("#vehicles .secondary").forEach(btn => {
    btn.onclick = () => openAssetDialog("vehicle");
  });
  document.querySelectorAll("#equipment .secondary").forEach(btn => {
    btn.onclick = () => openAssetDialog("equipment");
  });
};

function assetCardV18(a, mode){
  const c = computeAssetState(a);
  const label = c.state === "ok" ? "À jour" : c.state === "soon" ? "Bientôt à faire" : "En retard";
  const typeLabel = c.followType === "hours" ? "heures" : c.followType === "date" ? "date" : "kilométrage";
  return `
    <article class="asset-card">
      <h3>${a.name}</h3>
      <p>${a.detail || a.type || ""}</p>
      <p>Suivi : <strong>${typeLabel}</strong></p>
      <p>Valeur actuelle : <strong>${c.current || a.km || "—"} ${c.current ? c.unit : ""}</strong></p>
      ${c.nextValue ? `<p>Prochain entretien : <strong>${c.nextValue} ${c.unit}</strong></p>` : ""}
      ${c.remaining !== null ? `<p>Restant : <strong>${c.remaining} ${c.unit}</strong></p>` : ""}
      <div class="asset-progress"><span style="width:${c.percent}%"></span></div>
      <p>Contrôle / CT : <strong>${a.ct || a.nextControlDate || "—"}</strong></p>
      <p class="due ${c.state}">${label}</p>
      <span class="asset-next">${c.followType === "hours" ? "Calcul en heures" : c.followType === "km" ? "Calcul en kilomètres" : "Suivi par date"}</span>
      <div class="asset-actions">
        <button class="btn ghost" onclick="toast('Historique entretien prévu')">Historique</button>
        <button class="btn secondary" onclick="toast('Modification prévue')">Modifier</button>
      </div>
    </article>
  `;
}

function bindAssetDialog(){
  const close = document.getElementById("closeAssetDialog");
  if(close) close.onclick = () => document.getElementById("assetDialog").close();

  const follow = document.getElementById("assetFollowType");
  if(follow) follow.onchange = () => {
    document.getElementById("assetUnit").value = follow.value === "hours" ? "h" : follow.value === "km" ? "km" : "";
  };

  const save = document.getElementById("saveAsset");
  if(save) save.onclick = () => {
    const followType = document.getElementById("assetFollowType").value;
    const unit = document.getElementById("assetUnit").value || (followType === "hours" ? "h" : "km");
    const asset = {
      name: document.getElementById("assetName").value || "Nouvel élément",
      detail: document.getElementById("assetRef").value || document.getElementById("assetType").value,
      type: document.getElementById("assetType").value,
      followType,
      currentValue: Number(document.getElementById("assetCurrentValue").value || 0),
      unit,
      lastServiceValue: Number(document.getElementById("assetLastServiceValue").value || 0),
      intervalValue: Number(document.getElementById("assetIntervalValue").value || 0),
      nextControlDate: document.getElementById("assetNextControlDate").value,
      ct: document.getElementById("assetNextControlDate").value || "—",
      notes: document.getElementById("assetNotes").value
    };
    if(assetDialogMode === "vehicle") vehicles.push(asset);
    else equipment.push(asset);
    document.getElementById("assetDialog").close();
    renderAll();
    toast("Élément ajouté");
  };
}

const renderAllBeforeV18 = renderAll;
renderAll = function(){
  renderAllBeforeV18();
  bindTakeChargeDialog();
  bindAssetDialog();
};


/* V19 - ajouter matériel dans bibliothèque */
function bindLibraryItemDialog(){
  const close = document.getElementById("closeLibraryItemDialog");
  if(close) close.onclick = () => document.getElementById("libraryItemDialog").close();

  const save = document.getElementById("saveLibraryItem");
  if(save) save.onclick = () => {
    const name = document.getElementById("newLibraryItemName").value.trim();
    const family = document.getElementById("newLibraryItemFamily").value;
    const sub = document.getElementById("newLibraryItemSub").value.trim() || "Sans sous-catégorie";
    const qty = Number(document.getElementById("newLibraryItemQty").value || 1);

    if(!name){
      toast("Indique le nom du matériel");
      return;
    }

    const dlg = document.getElementById("libraryItemDialog");
    const editIdx = dlg.dataset.editIdx !== "" ? parseInt(dlg.dataset.editIdx) : NaN;
    if(!isNaN(editIdx) && editIdx >= 0 && FC_LIBRARY[editIdx]){
      FC_LIBRARY[editIdx] = {...FC_LIBRARY[editIdx], name, family, sub, qty};
      fcState.family = family;
      dlg.dataset.editIdx = "";
      dlg.close();
      renderCheckSheets();
      toast(`${name} déplacé vers ${family} · ${sub}`);
    } else {
      FC_LIBRARY.push({name, family, sub, qty, custom:true});
      fcState.family = family;
      dlg.dataset.editIdx = "";
      dlg.close();
      renderCheckSheets();
      toast(`${name} ajouté à la bibliothèque`);
    }
  };
}

function openLibraryEditDialog(idx, item){
  const dlg = document.getElementById("libraryItemDialog");
  if(!dlg) return;

  // Switch title
  const title = dlg.querySelector("h2");
  if(title) title.textContent = idx >= 0 ? "Modifier / déplacer" : "Ajouter du matériel";
  const saveBtn = document.getElementById("saveLibraryItem");
  if(saveBtn) saveBtn.textContent = idx >= 0 ? "Enregistrer les modifications" : "Ajouter à la bibliothèque";

  document.getElementById("newLibraryItemName").value = item.name;
  document.getElementById("newLibraryItemFamily").value = item.family;
  document.getElementById("newLibraryItemSub").value = item.sub || "";
  document.getElementById("newLibraryItemQty").value = item.qty || 1;

  dlg.dataset.editIdx = idx >= 0 ? idx : "";
  dlg.showModal();
}

const renderAllBeforeV19 = renderAll;
renderAll = function(){
  renderAllBeforeV19();
  bindLibraryItemDialog();
};


/* V20 - QR code par inventaire */
let activeQrVehicleId = null;

function fcVehicleQrUrl(vehicle){
  const base = location.href.split("#")[0].split("?")[0];
  return `${base}?check=${encodeURIComponent(vehicle.id)}`;
}

function renderQrInto(el, text){
  if(!el) return;
  el.innerHTML = "";
  if(typeof QRCode !== "undefined"){
    // Vraie librairie QRCode.js — QR scannable
    const qrSize = el.offsetWidth > 50 ? el.offsetWidth : 180;
    new QRCode(el, {
      text: text,
      width: qrSize,
      height: qrSize,
      colorDark: "#111827",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });
  } else {
    // Fallback texte si librairie non chargée
    el.style.cssText = "display:flex;align-items:center;justify-content:center;font-size:10px;word-break:break-all;padding:8px;background:#f1f5f9;";
    el.textContent = text;
  }
}

function openQrDialog(vehicleId){
  const vehicle = fcVehicles.find(v => v.id === vehicleId);
  if(!vehicle) return;
  activeQrVehicleId = vehicleId;
  const url = fcVehicleQrUrl(vehicle);
  document.getElementById("qrDialogTitle").textContent = `QR Code — ${vehicle.name}`;
  document.getElementById("qrVehicleName").textContent = vehicle.name;
  document.getElementById("qrVehicleMeta").textContent = `${vehicle.type} · ${vehicle.plate}`;
  document.getElementById("qrUrlText").textContent = url;
  document.getElementById("qrPrintDialog").showModal();
  setTimeout(() => renderQrInto(document.getElementById("realQrBox"), url), 50);
}

function printQrOnly(){
  const vehicle = fcVehicles.find(v => v.id === activeQrVehicleId);
  if(!vehicle) return;
  const url = fcVehicleQrUrl(vehicle);

  let area = document.getElementById("qrPrintArea");
  if(!area){
    area = document.createElement("div");
    area.id = "qrPrintArea";
    area.className = "print-only";
    document.body.appendChild(area);
  }

  area.innerHTML = `
    <div class="qr-print-sheet">
      <h1>${vehicle.name}</h1>
      <p>${vehicle.type} · ${vehicle.plate}<br>Scanner pour ouvrir la vérification FireCheck</p>
      <div class="real-qr" id="qrPrintBox"></div>
      <p>${url}</p>
    </div>
  `;
  renderQrInto(document.getElementById("qrPrintBox"), url);
  document.body.classList.add("qr-print-mode");
  window.print();
  setTimeout(()=>document.body.classList.remove("qr-print-mode"), 500);
}

const renderFcListBeforeV20 = renderFcList;
renderFcList = function(root){
  renderFcListBeforeV20(root);
  document.querySelectorAll(".fc-card").forEach(card => {
    const openBtn = card.querySelector(".fc-open");
    if(!openBtn) return;
    const vehicleId = openBtn.dataset.id;
    if(card.querySelector(".qr-action-row")) return;
    const row = document.createElement("div");
    row.className = "qr-action-row";
    row.innerHTML = `
      <button class="btn ghost" data-qr="${vehicleId}">QR Code</button>
    `;
    card.appendChild(row);
  });
  document.querySelectorAll("[data-qr]").forEach(btn=>{
    btn.onclick = () => openQrDialog(btn.dataset.qr);
  });
};

const renderFcDetailBeforeV20 = renderFcDetail;
renderFcDetail = function(root){
  renderFcDetailBeforeV20(root);
  const vehicle = fcVehicles.find(v => v.id === fcState.vehicleId);
  if(!vehicle) return;
  const head = root.querySelector(".fc-detail-head .panel-head");
  if(head && !root.querySelector("#fcQrBtn")){
    const btn = document.createElement("button");
    btn.id = "fcQrBtn";
    btn.className = "btn ghost";
    btn.textContent = "QR Code";
    btn.onclick = () => openQrDialog(vehicle.id);
    head.appendChild(btn);
  }
};

const fcPrintInventoryBeforeV20 = fcPrintInventory;
fcPrintInventory = function(){
  // La fiche imprimée contient déjà un QR visuel générique ; on garde le bouton QR séparé pour impression dédiée.
  fcPrintInventoryBeforeV20();
};

function bindQrDialog(){
  const close = document.getElementById("closeQrPrintDialog");
  if(close) close.onclick = () => document.getElementById("qrPrintDialog").close();
  const print = document.getElementById("printQrOnly");
  if(print) print.onclick = printQrOnly;
}

const fcSaveNewBeforeV20 = fcBindCreate;
fcBindCreate = function(){
  fcSaveNewBeforeV20();
  const save = document.getElementById("fcSaveNew");
  if(save && !save.dataset.qrEnhanced){
    save.dataset.qrEnhanced = "true";
    const old = save.onclick;
    save.onclick = () => {
      old();
      setTimeout(()=>{
        const vehicle = fcVehicles[fcVehicles.length - 1];
        if(vehicle) toast(`Inventaire créé avec QR Code : ${vehicle.name}`);
      }, 50);
    };
  }
};

const renderAllBeforeV20 = renderAll;
renderAll = function(){
  renderAllBeforeV20();
  bindQrDialog();
};


/* V22 - identification libre si matricule absent */
let loginMode = "matricule";

function setLoginMode(mode){
  loginMode = mode;
  const tabMat = document.getElementById("loginTabMatricule");
  const tabManual = document.getElementById("loginTabManual");
  const panelMat = document.getElementById("loginMatriculePanel");
  const panelManual = document.getElementById("loginManualPanel");

  if(tabMat) tabMat.classList.toggle("active", mode === "matricule");
  if(tabManual) tabManual.classList.toggle("active", mode === "manual");
  if(panelMat) panelMat.classList.toggle("hidden", mode !== "matricule");
  if(panelManual) panelManual.classList.toggle("hidden", mode !== "manual");
}

function loginManualUser(){
  const grade = (document.getElementById("manualGrade")?.value || "").trim();
  const nom = (document.getElementById("manualNom")?.value || "").trim();
  const prenom = (document.getElementById("manualPrenom")?.value || "").trim();
  const matricule = (document.getElementById("manualMatricule")?.value || "").trim() || "NON RENSEIGNÉ";

  if(!grade || !nom){
    toast("Indique au minimum le grade et le nom");
    return;
  }

  currentUser = {
    matricule,
    grade,
    nom,
    prenom,
    service:"Identification libre",
    manual:true
  };

  localStorage.setItem("fc_current_user", JSON.stringify(currentUser));
  renderLoginState();
  toast(`Bienvenue ${grade} ${prenom} ${nom}`);
}

const bindSettingsBeforeV22 = bindSettings;
bindSettings = function(){
  bindSettingsBeforeV22();

  const tabMat = document.getElementById("loginTabMatricule");
  const tabManual = document.getElementById("loginTabManual");
  if(tabMat) tabMat.onclick = () => setLoginMode("matricule");
  if(tabManual) tabManual.onclick = () => setLoginMode("manual");

  const manualBtn = document.getElementById("loginManual");
  if(manualBtn) manualBtn.onclick = loginManualUser;
};


/* V23 - Accueil contextualisé QR + accès ST */
let scannedAsset = null;
let stMobileCode = localStorage.getItem("fc_st_mobile_code") || "2026";
let stAccessList = JSON.parse(localStorage.getItem("fc_st_access_list") || "null") || [
  /* utilisateurs chargés depuis Supabase */
];

function detectScannedAsset(){
  const params = new URLSearchParams(location.search);
  const check = params.get("check");
  if(!check) return null;

  const source = (typeof fcVehicles !== "undefined" ? fcVehicles : []).find(v => v.id === check);
  if(source) return source;

  const aliases = {
    "fpt-53": {id:"fpt-53", name:"FPT 53", plate:"GL-485-CL", type:"Fourgon pompe tonne"},
    "fpt-go": {id:"fpt-go", name:"FPT GO", plate:"GQ 311 JE", type:"Fourgon pompe tonne"}
  };
  return aliases[check] || {id:check, name:check.toUpperCase(), plate:"", type:"Inventaire"};
}

function applyScannedContext(){
  scannedAsset = detectScannedAsset();

  const title = document.getElementById("verificationTitle");
  const subtitle = document.getElementById("verificationSubtitle");

  if(scannedAsset){
    if(title) title.textContent = `Vérification ${scannedAsset.name}`;
    if(subtitle) subtitle.textContent = `${scannedAsset.type || "Inventaire"} ${scannedAsset.plate ? "· " + scannedAsset.plate : ""}`;

    const card = document.querySelector(".cis-card");
    if(card && !document.getElementById("scannedContext")){
      const badge = document.createElement("div");
      badge.id = "scannedContext";
      badge.className = "scanned-context";
      badge.textContent = `QR scanné : ${scannedAsset.name}`;
      card.appendChild(badge);
    }
  } else {
    if(title) title.textContent = "Vérifications";
    if(subtitle) subtitle.textContent = "Scanner le QR code de l’engin";
  }
}

function isDesktopDevice(){
  return window.innerWidth >= 1100;
}

function userHasStAccess(){
  if(isDesktopDevice()) return true;
  if(!currentUser) return false;
  return stAccessList.some(p => 
    String(p.matricule || "").toUpperCase() === String(currentUser.matricule || "").toUpperCase()
  );
}

function openStProtected(){
  if(userHasStAccess()){
    showScreen("tech");
    return;
  }
  if(!currentUser){
    toast("Identifie-toi avant d’accéder au service technique");
    return;
  }
  const d = document.getElementById("stCodeDialog");
  if(d) d.showModal();
}

function bindStAccessProtection(){
  const btn = document.getElementById("stAccessButton");
  if(btn) btn.onclick = openStProtected;

  const close = document.getElementById("closeStCodeDialog");
  if(close) close.onclick = () => document.getElementById("stCodeDialog").close();

  const confirm = document.getElementById("confirmStAccess");
  if(confirm) confirm.onclick = () => {
    const code = document.getElementById("stCodeAttempt").value;
    if(code === stMobileCode && userHasStAccess()){
      document.getElementById("stCodeDialog").close();
      showScreen("tech");
    } else if(code === stMobileCode){
      document.getElementById("stCodeDialog").close();
      showScreen("tech");
    } else {
      toast("Code incorrect");
    }
  };
}

function renderStAccessTable(){
  const table = document.getElementById("stAccessTable");
  if(!table) return;
  table.innerHTML = stAccessList.map((p, idx) => `
    <div class="personnel-row" data-st-index="${idx}">
      <input value="${fcEsc(p.matricule || "")}" data-st-field="matricule" placeholder="Matricule">
      <input value="${fcEsc(p.grade || "")}" data-st-field="grade" placeholder="Grade">
      <input value="${fcEsc(p.nom || "")}" data-st-field="nom" placeholder="Nom">
      <input value="${fcEsc(p.prenom || "")}" data-st-field="prenom" placeholder="Prénom">
      <input value="ST" disabled>
      <button data-st-remove="${idx}">Suppr.</button>
    </div>
  `).join("");

  table.querySelectorAll("[data-st-field]").forEach(input => {
    input.onchange = () => {
      const row = input.closest(".personnel-row");
      stAccessList[Number(row.dataset.stIndex)][input.dataset.stField] = input.value;
      localStorage.setItem("fc_st_access_list", JSON.stringify(stAccessList));
    };
  });
  table.querySelectorAll("[data-st-remove]").forEach(btn => {
    btn.onclick = () => {
      stAccessList.splice(Number(btn.dataset.stRemove), 1);
      localStorage.setItem("fc_st_access_list", JSON.stringify(stAccessList));
      renderStAccessTable();
    };
  });
}

function bindStAccessAdmin(){
  const add = document.getElementById("addStAccessRow");
  if(add) add.onclick = () => {
    stAccessList.push({matricule:"", grade:"", nom:"", prenom:""});
    localStorage.setItem("fc_st_access_list", JSON.stringify(stAccessList));
    renderStAccessTable();
  };

  const codeInput = document.getElementById("stMobileCodeInput");
  if(codeInput) codeInput.value = stMobileCode;

  const saveCode = document.getElementById("saveStMobileCode");
  if(saveCode) saveCode.onclick = () => {
    stMobileCode = document.getElementById("stMobileCodeInput").value || "2026";
    localStorage.setItem("fc_st_mobile_code", stMobileCode);
    toast("Code mobile ST enregistré");
  };
}

const renderAllBeforeV23 = renderAll;
renderAll = function(){
  renderAllBeforeV23();
  applyScannedContext();
  bindStAccessProtection();
  renderStAccessTable();
  bindStAccessAdmin();
};

// PERSONNEL_DEFAULT_V25 supprimé — liste chargée depuis Supabase

/* V25 - correction identification matricule */
function normalizeMatricule(value){
  return String(value || "")
    .toUpperCase()
    .replace(/^SP[-\s]*/,"")
    .replace(/\D/g,"")
    .replace(/^0+/,"");
}

function loginWithMatricule(){
  const rawInput = document.getElementById("matriculeInput")?.value || "";
  const wanted = normalizeMatricule(rawInput);

  if(!wanted){
    toast("Indique un matricule");
    return;
  }

  const user = personnelList.find(p => normalizeMatricule(p.matricule) === wanted);

  if(!user){
    toast("Matricule non trouvé. Tu peux utiliser l’identification Grade + nom.");
    return;
  }

  currentUser = user;
  localStorage.setItem("fc_current_user", JSON.stringify(currentUser));
  renderLoginState();
  toast(`Bienvenue ${user.grade} ${user.prenom || ""} ${user.nom}`);
}

// Si l'utilisateur a une ancienne liste de test en mémoire locale, on propose quand même les 77 personnels du modèle.
// On ne supprime pas sa liste, mais on ajoute les matricules manquants depuis la base préchargée si elle existe dans le code.
// mergePersonnelDefaults supprimé — données depuis Supabase

/* V26 - Onglet Personnel CIS dans Service Technique */
function renderPersonnelCisTab(){
  const table = document.getElementById("personnelTableSt");
  if(!table) return;

  const q = (document.getElementById("personnelSearchSt")?.value || "").toLowerCase();
  const filtered = personnelList.filter(p => {
    const text = `${p.matricule || ""} ${p.grade || ""} ${p.nom || ""} ${p.prenom || ""} ${p.type || ""} ${p.equipe || p.service || ""}`.toLowerCase();
    return text.includes(q);
  });

  const stSet = new Set(stAccessList.map(p => normalizeMatricule(p.matricule)));

  document.getElementById("personnelTotalCount").textContent = personnelList.length;
  document.getElementById("personnelActiveCount").textContent = personnelList.filter(p => String(p.statut || "ACTIF").toUpperCase() !== "INACTIF").length;
  document.getElementById("personnelStCount").textContent = personnelList.filter(p => stSet.has(normalizeMatricule(p.matricule))).length;

  table.innerHTML = `
    <div class="personnel-st-row header">
      <span>Matricule</span><span>Grade</span><span>Nom</span><span>Prénom</span><span>Type</span><span>Équipe</span><span>Accès ST</span><span></span>
    </div>
    ${filtered.map((p) => {
      const idx = personnelList.indexOf(p);
      const hasSt = stSet.has(normalizeMatricule(p.matricule));
      return `
        <div class="personnel-st-row" data-personnel-index="${idx}">
          <input value="${fcEsc(p.matricule || "")}" data-personnel-field="matricule" placeholder="Matricule">
          <input value="${fcEsc(p.grade || "")}" data-personnel-field="grade" placeholder="Grade">
          <input value="${fcEsc(p.nom || "")}" data-personnel-field="nom" placeholder="Nom">
          <input value="${fcEsc(p.prenom || "")}" data-personnel-field="prenom" placeholder="Prénom">
          <input value="${fcEsc(p.type || "")}" data-personnel-field="type" placeholder="Type">
          <input value="${fcEsc(p.equipe || p.service || "")}" data-personnel-field="equipe" placeholder="Équipe">
          <label class="st-toggle"><input type="checkbox" data-personnel-st="${idx}" ${hasSt ? "checked" : ""}> ST</label>
          <button data-personnel-delete="${idx}">Suppr.</button>
        </div>
      `;
    }).join("")}
  `;

  table.querySelectorAll("[data-personnel-field]").forEach(input => {
    input.onchange = () => {
      const row = input.closest(".personnel-st-row");
      const p = personnelList[Number(row.dataset.personnelIndex)];
      p[input.dataset.personnelField] = input.value;
      if(input.dataset.personnelField === "equipe") p.service = input.value;
      localStorage.setItem("fc_personnel", JSON.stringify(personnelList));
      renderPersonnelCisTab();
      renderPersonnelTable();
    };
  });

  table.querySelectorAll("[data-personnel-st]").forEach(cb => {
    cb.onchange = () => {
      const p = personnelList[Number(cb.dataset.personnelSt)];
      const norm = normalizeMatricule(p.matricule);
      if(cb.checked){
        const exists = stAccessList.some(x => normalizeMatricule(x.matricule) === norm);
        if(!exists) stAccessList.push({matricule:p.matricule, grade:p.grade, nom:p.nom, prenom:p.prenom});
      } else {
        stAccessList = stAccessList.filter(x => normalizeMatricule(x.matricule) !== norm);
      }
      localStorage.setItem("fc_st_access_list", JSON.stringify(stAccessList));
      renderStAccessTable();
      renderPersonnelCisTab();
    };
  });

  table.querySelectorAll("[data-personnel-delete]").forEach(btn => {
    btn.onclick = () => {
      const idx = Number(btn.dataset.personnelDelete);
      const removed = personnelList[idx];
      personnelList.splice(idx, 1);
      stAccessList = stAccessList.filter(x => normalizeMatricule(x.matricule) !== normalizeMatricule(removed.matricule));
      localStorage.setItem("fc_personnel", JSON.stringify(personnelList));
      localStorage.setItem("fc_st_access_list", JSON.stringify(stAccessList));
      renderPersonnelCisTab();
      renderPersonnelTable();
      renderStAccessTable();
      toast("Personnel supprimé");
    };
  });
}

function bindPersonnelCisTab(){
  const search = document.getElementById("personnelSearchSt");
  if(search) search.oninput = renderPersonnelCisTab;

  const add = document.getElementById("addPersonnelFromSt");
  if(add) add.onclick = () => {
    personnelList.push({matricule:"", grade:"", nom:"", prenom:"", type:"", equipe:"", service:"", statut:"ACTIF"});
    localStorage.setItem("fc_personnel", JSON.stringify(personnelList));
    renderPersonnelCisTab();
    toast("Nouveau SP ajouté");
  };

  const importBtn = document.getElementById("importPersonnelFromSt");
  const importHidden = document.getElementById("personnelImportStHidden");
  if(importBtn && importHidden){
    importBtn.onclick = () => importHidden.click();
    importHidden.onchange = e => {
      const file = e.target.files[0];
      if(file) importPersonnelCsv(file);
      setTimeout(() => {
        renderPersonnelCisTab();
        renderPersonnelTable();
      }, 500);
    };
  }
}

const renderAllBeforeV26 = renderAll;
renderAll = function(){
  renderAllBeforeV26();
  renderPersonnelCisTab();
  bindPersonnelCisTab();
};


/* V27 - vérification terrain avec carousel + contrôle guidé */
let checkV27 = {
  view:"avant",
  currentZone:"Cabine avant",
  done:{},
  issues:{}
};

function getCheckVehicleV27(){
  const asset = scannedAsset || {id:"fpt-53", name:"FPT 53", plate:"GL-485-CL", type:"Fourgon pompe tonne"};
  const vehicle = (typeof fcVehicles !== "undefined" ? fcVehicles.find(v => v.id === asset.id || v.name === asset.name) : null);
  return vehicle || asset;
}

function checkViewsV27(vehicleId){
  const layouts = (typeof fcLayouts !== "undefined" ? fcLayouts : {});
  const photos = (typeof fcPhotos !== "undefined" ? fcPhotos : {});
  const baseViews = [
    {id:"avant", label:"AVANT"},
    {id:"droite", label:"CÔTÉ D"},
    {id:"arriere", label:"ARRIÈRE"},
    {id:"gauche", label:"CÔTÉ G"},
    {id:"toit", label:"TOIT"}
  ];
  return baseViews.map(v => ({
    ...v,
    zones: layouts[vehicleId]?.[v.id] || [],
    photo: photos[vehicleId]?.[v.id] || ""
  }));
}

function guidedOrderV27(vehicleId){
  return [
    {section:"CABINE", zone:"Cabine avant", aliases:["Cabine conducteur","Cabine chef d’agrès","Cabine chef d'agres","Cabine avant","Cabine avant gauche","Cabine avant droite"]},
    {section:"CABINE", zone:"Cabine arrière", aliases:["Cabine arrière","Cabine arriere","Cabine arrière gauche","Cabine arrière droite"]},
    {section:"CÔTÉ DROIT", zone:"Rideau avant droit", aliases:["Rideau avant droit","Rideau av. D"]},
    {section:"CÔTÉ DROIT", zone:"Rideau arrière droit", aliases:["Rideau arrière droit","Rideau ar. D"]},
    {section:"CÔTÉ DROIT", zone:"Coffre arrière droit", aliases:["Coffre arrière droit","Coffre bas droit"]},
    {section:"ARRIÈRE", zone:"Compartiment pompe", aliases:["Pompe","Tableau de commande pompe","Rideau arrière"]},
    {section:"ARRIÈRE", zone:"Dévidoir gauche", aliases:["Dévidoir arrière gauche"]},
    {section:"ARRIÈRE", zone:"Dévidoir droit", aliases:["Dévidoir arrière droit"]},
    {section:"CÔTÉ GAUCHE", zone:"Rideau avant gauche", aliases:["Rideau avant gauche","Rideau av. G"]},
    {section:"CÔTÉ GAUCHE", zone:"Rideau arrière gauche", aliases:["Rideau arrière gauche","Rideau ar. G"]},
    {section:"CÔTÉ GAUCHE", zone:"Coffre arrière gauche", aliases:["Coffre arrière gauche","Coffre bas gauche"]},
    {section:"TOIT", zone:"Échelles et matériel de toit", aliases:["Toit","Toit / échelles","Échelles de toit","Équipements de toit"]}
  ];
}

function zoneMatchesV27(itemZone, aliases){
  const z = String(itemZone || "").toLowerCase();
  return aliases.some(a => z === String(a).toLowerCase());
}

function getZoneItemsV27(vehicleId, step){
  if(typeof fcInventory === "undefined") return [];
  return fcInventory.filter(i => i.vehicleId === vehicleId && zoneMatchesV27(i.zone, step.aliases));
}

function getCurrentStepV27(vehicleId){
  const order = guidedOrderV27(vehicleId);
  return order.find(s => s.zone === checkV27.currentZone) || order.find(s => !checkV27.done[s.zone]) || order[0];
}

function setCurrentZoneFromVisualV27(zoneId, viewId){
  const vehicle = getCheckVehicleV27();
  const order = guidedOrderV27(vehicle.id);
  const step = order.find(s => s.aliases.some(a => String(a).toLowerCase() === String(zoneId).toLowerCase())) || {
    section:"ZONE SÉLECTIONNÉE",
    zone: zoneId,
    aliases:[zoneId]
  };
  checkV27.currentZone = step.zone;
  checkV27.view = viewId;
  renderStep();
}

function markZoneDoneV27(issue=false){
  const vehicle = getCheckVehicleV27();
  const step = getCurrentStepV27(vehicle.id);
  checkV27.done[step.zone] = true;
  if(issue) checkV27.issues[step.zone] = true;

  const next = guidedOrderV27(vehicle.id).find(s => !checkV27.done[s.zone]);
  if(next){
    checkV27.currentZone = next.zone;
    const views = checkViewsV27(vehicle.id);
    const foundView = views.find(v => v.zones.some(z => next.aliases.some(a => String(a).toLowerCase() === String(z.id).toLowerCase())));
    if(foundView) checkV27.view = foundView.id;
    toast("Étape validée, passage à la suivante");
  } else {
    toast("Vérification terminée");
  }
  renderStep();
}

function renderStep(){
  const checkScreen = document.getElementById("check");
  if(!checkScreen) return;

  const vehicle = getCheckVehicleV27();
  const views = checkViewsV27(vehicle.id);
  const order = guidedOrderV27(vehicle.id);
  const step = getCurrentStepV27(vehicle.id);
  const doneCount = order.filter(s => checkV27.done[s.zone]).length;
  const percent = Math.round((doneCount / order.length) * 100);
  const activeView = views.find(v => v.id === checkV27.view) || views[0];
  const items = getZoneItemsV27(vehicle.id, step);

  checkScreen.innerHTML = `
    <div class="mobile-shell">
      <header class="mobile-top">
        <button class="round" data-go="home">←</button>
        <div>
          <p class="eyebrow">Vérification</p>
          <h1>${vehicle.name}</h1>
          <span class="muted">${vehicle.type || ""} ${vehicle.plate ? "· " + vehicle.plate : ""}</span>
        </div>
      </header>

      <section class="check-hero-v27">
        <div class="check-hero-top">
          <div>
            <p class="eyebrow">Choix visuel</p>
            <h2>Photos et zones cliquables</h2>
          </div>
          <div class="check-progress-chip">
            ${doneCount} / ${order.length} zones
            <div class="check-progress-bar"><span style="width:${percent}%"></span></div>
          </div>
        </div>

        <div class="check-carousel-tabs">
          ${views.map(v => {
            const viewZones = v.zones || [];
            const viewDone = viewZones.length && viewZones.every(z => checkV27.done[z.id] || order.some(s => s.aliases.includes(z.id) && checkV27.done[s.zone]));
            const hasIssue = viewZones.some(z => checkV27.issues[z.id] || order.some(s => s.aliases.includes(z.id) && checkV27.issues[s.zone]));
            const icon = hasIssue ? "🔴" : viewDone ? "🟢" : "⚪";
            return `<button class="check-view-tab ${v.id === activeView.id ? "active" : ""}" data-check-view="${v.id}">${icon} ${v.label}</button>`;
          }).join("")}
        </div>

        <div class="check-photo-stage" style="${activeView.photo ? `background-image:url('${activeView.photo}')` : ""}">
          ${activeView.zones.map(z => {
            const mappedStep = order.find(s => s.aliases.some(a => String(a).toLowerCase() === String(z.id).toLowerCase()));
            const key = mappedStep?.zone || z.id;
            const cls = checkV27.issues[key] ? "issue" : checkV27.done[key] ? "done" : key === step.zone ? "active" : "";
            return `<button class="check-zone-hotspot ${cls}" data-check-zone="${z.id}" data-check-view="${activeView.id}" style="left:${z.x}%;top:${z.y}%;width:${z.w}%;height:${z.h}%">${z.label || z.id}</button>`;
          }).join("")}
        </div>
      </section>

      <section class="guided-card-v27">
        <div class="guided-head-v27">
          <div>
            <p class="eyebrow">Contrôle guidé recommandé</p>
            <h2>${step.section}</h2>
            <span class="muted">${step.zone}</span>
          </div>
          <span class="step-pill-v27">Étape ${order.indexOf(step) + 1}</span>
        </div>

        <div class="guided-zone-photo-placeholder">
          📷 Emplacement photo détaillée — ${step.zone}
        </div>

        <div class="guided-items-v27">
          ${items.length ? items.map(item => `
            <div class="guided-item-v27" data-guided-item="${item.id}">
              <strong>${item.name}</strong>
              <span>×${item.qty}</span>
            </div>
          `).join("") : `<div class="fc-empty">Aucun matériel renseigné pour cette zone pour le moment.</div>`}
        </div>

        <div class="guided-actions-v27">
          <button class="btn danger-outline" id="guidedIssueV27">Signaler une anomalie</button>
          <button class="btn success" id="guidedDoneV27">Tout est conforme</button>
        </div>

        <p class="zone-choice-note">
          Le carrousel permet de choisir une autre zone, mais le contrôle guidé propose toujours l’ordre recommandé.
        </p>
      </section>
    </div>
  `;

  document.querySelectorAll("[data-check-view]").forEach(btn => {
    btn.onclick = () => {
      checkV27.view = btn.dataset.checkView;
      renderStep();
    };
  });
  document.querySelectorAll("[data-check-zone]").forEach(btn => {
    btn.onclick = () => setCurrentZoneFromVisualV27(btn.dataset.checkZone, btn.dataset.checkView);
  });
  document.getElementById("guidedDoneV27").onclick = () => markZoneDoneV27(false);
  document.getElementById("guidedIssueV27").onclick = () => {
    toast("Anomalie enregistrée sur la zone");
    markZoneDoneV27(true);
  };

  bindNavigation();
}


/* V28 - photo générale par vue + photo détaillée par zone */
let fcZonePhotos = JSON.parse(localStorage.getItem("fc_zone_photos") || "{}");

function zonePhotoKey(vehicleId, zoneId){
  return `${vehicleId}__${zoneId}`;
}
function getZonePhoto(vehicleId, zoneId){
  return fcZonePhotos[zonePhotoKey(vehicleId, zoneId)] || "";
}
function setZonePhoto(vehicleId, zoneId, dataUrl){
  fcZonePhotos[zonePhotoKey(vehicleId, zoneId)] = dataUrl;
  localStorage.setItem("fc_zone_photos", JSON.stringify(fcZonePhotos));
}

const renderFcDetailBeforeV28 = renderFcDetail;
renderFcDetail = function(root){
  renderFcDetailBeforeV28(root);

  const vehicle = fcVehicles.find(v => v.id === fcState.vehicleId);
  if(!vehicle || !fcState.zone) return;

  const panel = root.querySelector(".fc-zone-panel");
  if(!panel || panel.querySelector("#zoneDetailPhotoInput")) return;

  const photo = getZonePhoto(vehicle.id, fcState.zone);
  const card = document.createElement("div");
  card.className = "zone-detail-photo-card";
  card.innerHTML = `
    <h3>Photo détaillée de la zone</h3>
    <div class="zone-detail-photo ${photo ? "has-photo" : ""}" id="zoneDetailPhotoPreview" ${photo ? `style="background-image:url('${photo}')"` : ""}>
      ${photo ? "" : "📷 Photo du compartiment ouvert"}
    </div>
    <div class="zone-detail-photo-actions">
      <label class="zone-photo-label" for="zoneDetailPhotoInput">Ajouter / remplacer la photo de cette zone</label>
      <input id="zoneDetailPhotoInput" type="file" accept="image/*">
    </div>
  `;

  const zoneInput = panel.querySelector(".fc-zone-name");
  if(zoneInput) zoneInput.insertAdjacentElement("afterend", card);
  else panel.prepend(card);

  card.querySelector("#zoneDetailPhotoInput").onchange = e => {
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setZonePhoto(vehicle.id, fcState.zone, reader.result);
      toast("Photo détaillée ajoutée à la zone");
      renderCheckSheets();
    };
    reader.readAsDataURL(file);
  };
};

const renderStepBeforeV28 = renderStep;
renderStep = function(){
  renderStepBeforeV28();

  const vehicle = getCheckVehicleV27();
  const step = getCurrentStepV27(vehicle.id);
  const photo = getZonePhoto(vehicle.id, step.zone);

  const placeholder = document.querySelector(".guided-zone-photo-placeholder");
  if(placeholder && photo){
    placeholder.classList.add("has-zone-photo");
    placeholder.style.backgroundImage = `url('${photo}')`;
    placeholder.innerHTML = `<span>📷 Photo détaillée — ${step.zone}</span>`;
  }
};


/* V29 - photo dédiée inventaire papier + photos détaillées imprimées */
let fcCoverPhotos = JSON.parse(localStorage.getItem("fc_cover_photos") || "{}");

function getCoverPhoto(vehicleId){
  return fcCoverPhotos[vehicleId] || "";
}
function setCoverPhoto(vehicleId, dataUrl){
  fcCoverPhotos[vehicleId] = dataUrl;
  localStorage.setItem("fc_cover_photos", JSON.stringify(fcCoverPhotos));
}

// Ajout dans la fiche inventaire ST : photo de couverture papier
const renderFcDetailBeforeV29 = renderFcDetail;
renderFcDetail = function(root){
  renderFcDetailBeforeV29(root);

  const vehicle = fcVehicles.find(v => v.id === fcState.vehicleId);
  if(!vehicle) return;

  const detailHead = root.querySelector(".fc-detail-head");
  if(!detailHead || root.querySelector("#inventoryCoverPhotoInput")) return;

  const photo = getCoverPhoto(vehicle.id);
  const card = document.createElement("div");
  card.className = "inventory-cover-card collapsible-panel";
  card.innerHTML = `
    <div class="collapsible-header" data-panel="coverPanel">
      <h3>📷 Photo de couverture</h3>
      <span class="collapsible-arrow">▾</span>
    </div>
    <div class="collapsible-body" id="coverPanel" style="display:none;">
      <p class="muted">Cette photo apparaît sur la première page, à côté du QR Code.</p>
      <div class="inventory-cover-preview ${photo ? "has-photo" : ""}" id="inventoryCoverPreview" ${photo ? `style="background-image:url('${photo}')"` : ""}>
        ${photo ? "" : "📷 Photo dédiée à la fiche papier"}
      </div>
      <label class="inventory-cover-label" for="inventoryCoverPhotoInput">Ajouter / remplacer la photo de couverture</label>
      <input id="inventoryCoverPhotoInput" type="file" accept="image/*">
    </div>
  `;
  detailHead.insertAdjacentElement("afterend", card);

  // Collapsible toggle for cover panel
  const coverHdr = card.querySelector(".collapsible-header");
  if(coverHdr){
    coverHdr.style.cursor = "pointer";
    coverHdr.onclick = () => {
      const body = document.getElementById(coverHdr.dataset.panel);
      const arrow = coverHdr.querySelector(".collapsible-arrow");
      if(body){
        const open = body.style.display !== "none";
        body.style.display = open ? "none" : "";
        if(arrow) arrow.textContent = open ? "▾" : "▴";
      }
    };
  }

  card.querySelector("#inventoryCoverPhotoInput").onchange = e => {
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setCoverPhoto(vehicle.id, reader.result);
      toast("Photo de couverture ajoutée");
      renderCheckSheets();
    };
    reader.readAsDataURL(file);
  };
};

// Remplace l'impression pour utiliser photo couverture + photos par étapes
function fcPrintInventory(){
  const vehicle = fcVehicles.find(v => v.id === fcState.vehicleId);
  if(!vehicle){
    toast("Aucun véhicule sélectionné");
    return;
  }

  const allItems = fcInventory.filter(i => i.vehicleId === vehicle.id);
  let printArea = document.getElementById("printArea");
  if(!printArea){
    printArea = document.createElement("div");
    printArea.id = "printArea";
    printArea.className = "print-only";
    document.body.appendChild(printArea);
  }

  const updated = new Date().toLocaleDateString("fr-FR");
  const coverPhoto = getCoverPhoto(vehicle.id) || fcPhotos?.[vehicle.id]?.avant || fcPhotos?.[vehicle.id]?.gauche || fcPhotos?.[vehicle.id]?.arriere || "";

  const printStructure = [
    {
      title:"CABINE",
      subtitle:"Contrôle intérieur et accès opérationnels",
      steps:[
        {name:"Cabine avant", aliases:["Cabine conducteur","Cabine chef d’agrès","Cabine chef d'agres","Cabine avant","Cabine avant gauche","Cabine avant droite"]},
        {name:"Cabine arrière", aliases:["Cabine arrière","Cabine arriere","Cabine arrière gauche","Cabine arrière droite"]}
      ]
    },
    {
      title:"CÔTÉ DROIT",
      subtitle:"Contrôle des rideaux et coffres côté droit",
      steps:[
        {name:"Rideau avant droit", aliases:["Rideau avant droit","Rideau av. D"]},
        {name:"Rideau arrière droit", aliases:["Rideau arrière droit","Rideau ar. D"]},
        {name:"Coffre arrière droit", aliases:["Coffre arrière droit","Coffre bas droit"]}
      ]
    },
    {
      title:"ARRIÈRE",
      subtitle:"Pompe, tableau de commande et dévidoirs",
      steps:[
        {name:"Compartiment pompe", aliases:["Pompe","Tableau de commande pompe","Rideau arrière"]},
        {name:"Dévidoir gauche", aliases:["Dévidoir arrière gauche"]},
        {name:"Dévidoir droit", aliases:["Dévidoir arrière droit"]},
        {name:"Échelles arrière", aliases:["Échelles arrière / toit"]}
      ]
    },
    {
      title:"CÔTÉ GAUCHE",
      subtitle:"Contrôle des rideaux et coffres côté gauche",
      steps:[
        {name:"Rideau avant gauche", aliases:["Rideau avant gauche","Rideau av. G"]},
        {name:"Rideau arrière gauche", aliases:["Rideau arrière gauche","Rideau ar. G"]},
        {name:"Coffre arrière gauche", aliases:["Coffre arrière gauche","Coffre bas gauche"]}
      ]
    },
    {
      title:"TOIT",
      subtitle:"Échelles et matériel de toit",
      steps:[
        {name:"Échelles et matériel de toit", aliases:["Toit","Toit / échelles","Échelles de toit","Équipements de toit"]}
      ]
    }
  ];

  const usedIds = new Set();
  const getItemsForStep = (aliases) => {
    const cleanAliases = aliases.map(a => String(a).toLowerCase());
    return allItems.filter(item => {
      const zone = String(item.zone || "").toLowerCase();
      const match = cleanAliases.some(a => zone === a);
      if(match) usedIds.add(item.id);
      return match;
    });
  };

  const stepPhoto = (vehicleId, step) => {
    for(const alias of step.aliases){
      const p = getZonePhoto(vehicleId, alias);
      if(p) return p;
    }
    return "";
  };

  const unclassified = allItems.filter(i => !usedIds.has(i.id));
  let stepCounter = 1;

  const renderStep = (step) => {
    const items = getItemsForStep(step.aliases);
    const photo = stepPhoto(vehicle.id, step);
    return `
      <section class="print-step">
        <div class="print-step-head">
          <div class="print-step-number">ÉTAPE ${stepCounter++}</div>
          <div class="print-step-name">${step.name}</div>
        </div>
        <div class="print-step-photo ${photo ? "has-photo" : ""}" ${photo ? `style="background-image:url('${photo}')"` : ""}>
          ${photo ? `<span>Photo ${step.name}</span>` : `Emplacement photo — ${step.name}`}
        </div>
        ${items.length ? `
          <div class="print-items-list">
            ${items.map(item => `
              <div class="print-item-line">
                <strong>${fcEsc(item.name)}</strong>
                <span>×${item.qty}</span>
              </div>
            `).join("")}
          </div>
        ` : `<div class="print-empty-step">Aucun matériel renseigné pour le moment. Emplacement prévu pour compléter l’inventaire.</div>`}
      </section>
    `;
  };

  printArea.innerHTML = `
    <div class="print-page">
      <section class="print-cover">
        <div class="print-titlebar">
          <div>
            <h1>Inventaire ${vehicle.name}</h1>
            <p>Classeur de vérification journalière — FireCheck</p>
          </div>
          <div class="print-update">Mise à jour : ${updated}</div>
        </div>

        <div class="print-vehicle-block">
          <div class="print-info-grid">
            <div class="print-info-item"><span>Véhicule</span><strong>${vehicle.name}</strong></div>
            <div class="print-info-item"><span>Immatriculation</span><strong>${vehicle.plate}</strong></div>
            <div class="print-info-item"><span>Type</span><strong>${vehicle.type}</strong></div>
          </div>

          <div class="print-qr">
            <div class="qr-box"></div>
            <strong>QR Code vérification</strong>
          </div>

          <div class="print-vehicle-photo cover-selected" ${coverPhoto ? `style="background-image:url('${coverPhoto}')"` : ""}></div>
        </div>
      </section>

      <div class="print-intro">
        Vérification papier à réaliser dans l’ordre du tour véhicule :
        <strong>Cabine → Côté droit → Arrière → Côté gauche → Toit</strong>.
        En cas d’anomalie, scanner le QR Code ou effectuer une remontée dans l’application.
      </div>

      ${printStructure.map(section => `
        <div class="print-section-title">
          ${section.title}
          <small>${section.subtitle}</small>
        </div>
        ${section.steps.map(renderStep).join("")}
      `).join("")}

      ${unclassified.length ? `
        <div class="print-section-title">
          AUTRES ÉLÉMENTS
          <small>Matériels non rattachés au parcours principal</small>
        </div>
        <section class="print-step">
          <div class="print-step-head">
            <div class="print-step-number">ANNEXE</div>
            <div class="print-step-name">À reclasser</div>
          </div>
          <div class="print-items-list">
            ${unclassified.map(item => `
              <div class="print-item-line">
                <strong>${fcEsc(item.name)} <em>(${fcEsc(item.zone)})</em></strong>
                <span>×${item.qty}</span>
              </div>
            `).join("")}
          </div>
        </section>
      ` : ""}

      <div class="print-note">
        Document papier de secours / classeur inventaire. La version numérique FireCheck reste la référence pour les remontées d’anomalies.
      </div>
    </div>
  `;

  window.print();
}


/* V30 - média universel par inventaire + impression illustrée robuste */
/* Stockage photo par clé individuelle pour éviter QuotaExceededError */
function mediaKeyV30(vehicleId, slot){
  return "fcm__" + vehicleId + "__" + slot;
}
function getMediaV30(vehicleId, slot){
  if(slot === "cover" && typeof getCoverPhoto === "function"){
    const oldCover = getCoverPhoto(vehicleId);
    if(oldCover) return oldCover;
  }
  if(slot.startsWith("step:") && typeof getZonePhoto === "function"){
    const stepName = slot.replace("step:","");
    const oldStep = getZonePhoto(vehicleId, stepName);
    if(oldStep) return oldStep;
  }
  try{ return localStorage.getItem(mediaKeyV30(vehicleId, slot)) || ""; }
  catch(e){ return ""; }
}
function setMediaV30(vehicleId, slot, dataUrl){
  try{
    localStorage.setItem(mediaKeyV30(vehicleId, slot), dataUrl);
  }catch(e){
    // Quota dépassé : essayer de libérer les anciennes entrées du store groupé
    try{ localStorage.removeItem("fc_media_store_v30"); }catch(e2){}
    // Réessayer avec qualité réduite si possible
    try{ localStorage.setItem(mediaKeyV30(vehicleId, slot), dataUrl); }catch(e3){
      throw new Error("Stockage local plein");
    }
  }
}

function getInventoryStepStructureV30(vehicle){
  // Structure adaptable. Pour FPT on garde le parcours véhicule.
  // Pour matériel/bateau/MPR/sac : on créera des étapes depuis les zones existantes ou génériques.
  const isFpt = String(vehicle.name || "").toUpperCase().includes("FPT") || String(vehicle.type || "").toUpperCase().includes("FOURGON");

  if(isFpt){
    return [
      {title:"CABINE", subtitle:"Contrôle intérieur et accès opérationnels", steps:[
        {name:"Cabine avant", aliases:["Cabine conducteur","Cabine chef d’agrès","Cabine chef d'agres","Cabine avant","Cabine avant gauche","Cabine avant droite"]},
        {name:"Cabine arrière", aliases:["Cabine arrière","Cabine arriere","Cabine arrière gauche","Cabine arrière droite"]}
      ]},
      {title:"CÔTÉ DROIT", subtitle:"Contrôle des rideaux et coffres côté droit", steps:[
        {name:"Rideau avant droit", aliases:["Rideau avant droit","Rideau av. D"]},
        {name:"Rideau arrière droit", aliases:["Rideau arrière droit","Rideau ar. D"]},
        {name:"Coffre arrière droit", aliases:["Coffre arrière droit","Coffre bas droit"]}
      ]},
      {title:"ARRIÈRE", subtitle:"Pompe, tableau de commande et dévidoirs", steps:[
        {name:"Compartiment pompe", aliases:["Pompe","Tableau de commande pompe","Rideau arrière"]},
        {name:"Dévidoir gauche", aliases:["Dévidoir arrière gauche"]},
        {name:"Dévidoir droit", aliases:["Dévidoir arrière droit"]},
        {name:"Échelles arrière", aliases:["Échelles arrière / toit"]}
      ]},
      {title:"CÔTÉ GAUCHE", subtitle:"Contrôle des rideaux et coffres côté gauche", steps:[
        {name:"Rideau avant gauche", aliases:["Rideau avant gauche","Rideau av. G"]},
        {name:"Rideau arrière gauche", aliases:["Rideau arrière gauche","Rideau ar. G"]},
        {name:"Coffre arrière gauche", aliases:["Coffre arrière gauche","Coffre bas gauche"]}
      ]},
      {title:"TOIT", subtitle:"Échelles et matériel de toit", steps:[
        {name:"Échelles et matériel de toit", aliases:["Toit","Toit / échelles","Échelles de toit","Équipements de toit"]}
      ]}
    ];
  }

  const zones = [...new Set(fcInventory.filter(i => i.vehicleId === vehicle.id).map(i => i.zone).filter(Boolean))];
  const steps = zones.length ? zones.map(z => ({name:z, aliases:[z]})) : [
    {name:"Contrôle général", aliases:["Contrôle général"]},
    {name:"Accessoires", aliases:["Accessoires"]},
    {name:"État / fonctionnement", aliases:["État / fonctionnement"]}
  ];

  return [{
    title:"INVENTAIRE",
    subtitle:"Contrôle adapté au matériel ou à l’engin",
    steps
  }];
}

// Manager média dans la fiche inventaire
const renderFcDetailBeforeV30 = renderFcDetail;
renderFcDetail = function(root){
  renderFcDetailBeforeV30(root);
  const vehicle = fcVehicles.find(v => v.id === fcState.vehicleId);
  if(!vehicle || root.querySelector("#mediaManagerV30")) return;

  const structure = getInventoryStepStructureV30(vehicle);
  const detailHead = root.querySelector(".fc-detail-head");
  if(!detailHead) return;

  const slots = [
    {slot:"cover", label:"Photo couverture papier"}
  ];
  structure.forEach(section => section.steps.forEach(step => slots.push({slot:`step:${step.name}`, label:`Étape — ${step.name}`})));

  const card = document.createElement("div");
  card.id = "mediaManagerV30";
  card.className = "media-manager-card";
  card.innerHTML = `
    <h3>Médias de l’inventaire</h3>
    <p class="muted">Photos conservées par inventaire : couverture papier et photos illustrées des étapes. Compatible véhicule, bateau, MPR, sac prompt-secours, etc.</p>
    <div class="media-grid-v30">
      ${slots.map((s, idx) => {
        const img = getMediaV30(vehicle.id, s.slot);
        return `
          <div class="media-slot-v30">
            <strong>${s.label}</strong>
            <div class="media-preview-v30">${img ? `<img src="${img}" alt="">` : "📷 Emplacement photo"}</div>
            <label class="media-label-v30" for="mediaInputV30_${idx}">Ajouter / remplacer</label>
            <input id="mediaInputV30_${idx}" type="file" accept="image/*" data-media-slot="${s.slot}">
          </div>
        `;
      }).join("")}
    </div>
  `;
  detailHead.insertAdjacentElement("afterend", card);

  card.querySelectorAll("[data-media-slot]").forEach(input => {
    input.onchange = e => {
      const file = e.target.files[0];
      if(!file) return;
      const slot = input.dataset.mediaSlot;
      const reader = new FileReader();
      reader.onload = () => {
        setMediaV30(vehicle.id, slot, reader.result);
        // Compatibilité anciennes fonctions
        if(slot === "cover" && typeof setCoverPhoto === "function") setCoverPhoto(vehicle.id, reader.result);
        if(slot.startsWith("step:") && typeof setZonePhoto === "function") setZonePhoto(vehicle.id, slot.replace("step:",""), reader.result);
        toast("Photo enregistrée dans les médias");
        renderCheckSheets();
      };
      reader.readAsDataURL(file);
    };
  });
};

// Impression illustrée robuste avec <img> pour éviter que le navigateur masque les arrière-plans
function fcPrintInventory(){
  const vehicle = fcVehicles.find(v => v.id === fcState.vehicleId);
  if(!vehicle){ toast("Aucun inventaire sélectionné"); return; }

  const allItems = fcInventory.filter(i => i.vehicleId === vehicle.id);
  let printArea = document.getElementById("printArea");
  if(!printArea){
    printArea = document.createElement("div");
    printArea.id = "printArea";
    printArea.className = "print-only";
    document.body.appendChild(printArea);
  }

  const updated = new Date().toLocaleDateString("fr-FR");
  const structure = getInventoryStepStructureV30(vehicle);
  const coverPhoto = getMediaV30(vehicle.id, "cover") || fcPhotos?.[vehicle.id]?.avant || fcPhotos?.[vehicle.id]?.gauche || "";

  const usedIds = new Set();
  const getItems = aliases => {
    const lower = aliases.map(a => String(a).toLowerCase());
    return allItems.filter(item => {
      const ok = lower.some(a => String(item.zone || "").toLowerCase() === a);
      if(ok) usedIds.add(item.id);
      return ok;
    });
  };

  let stepCounter = 1;
  const renderStep = step => {
    const items = getItems(step.aliases);
    const photo = getMediaV30(vehicle.id, `step:${step.name}`) || step.aliases.map(a => getMediaV30(vehicle.id, `step:${a}`)).find(Boolean) || "";
    return `
      <section class="print-step">
        <div class="print-step-head">
          <div class="print-step-number">ÉTAPE ${stepCounter++}</div>
          <div class="print-step-name">${fcEsc(step.name)}</div>
        </div>
        ${photo ? `
          <div class="print-step-photo has-photo"><img src="${photo}" alt="Photo ${fcEsc(step.name)}"></div>
        ` : `
          <div class="print-step-photo placeholder">Emplacement photo — ${fcEsc(step.name)}</div>
        `}
        ${items.length ? `
          <div class="print-items-list">
            ${items.map(item => `
              <div class="print-item-line">
                <strong>${fcEsc(item.name)}</strong>
                <span>×${item.qty}</span>
              </div>
            `).join("")}
          </div>
        ` : `<div class="print-empty-step">Aucun matériel renseigné pour le moment. Emplacement prévu pour compléter l’inventaire.</div>`}
      </section>
    `;
  };

  const unclassified = allItems.filter(i => !usedIds.has(i.id));

  printArea.innerHTML = `
    <div class="print-page">
      <section class="print-cover">
        <div class="print-titlebar">
          <div>
            <h1>Inventaire ${fcEsc(vehicle.name)}</h1>
            <p>Classeur de vérification journalière — FireCheck</p>
          </div>
          <div class="print-update">Mise à jour : ${updated}</div>
        </div>

        <div style="display:flex;gap:10px;align-items:stretch;margin:8px 0;">
          <div class="print-vehicle-block" style="flex:1;margin:0;">
            <div class="print-info-grid">
              <div class="print-info-item"><span>Inventaire</span><strong>${fcEsc(vehicle.name)}</strong></div>
              <div class="print-info-item"><span>Référence / immat.</span><strong>${fcEsc(vehicle.plate || "—")}</strong></div>
              <div class="print-info-item"><span>Type</span><strong>${fcEsc(vehicle.type || "—")}</strong></div>
            </div>
            <div class="print-qr">
              <div class="qr-box"></div>
              <strong>QR Code vérification</strong>
            </div>
          </div>
          ${coverPhoto ? `<div style="width:160px;flex-shrink:0;border-radius:8px;overflow:hidden;"><img style="width:100%;height:100%;object-fit:cover;display:block;" src="${coverPhoto}" alt="Photo couverture"></div>` : ""}
        </div>
      </section>

      <div class="print-intro">
        Vérification papier illustrée à réaliser selon l’ordre proposé. En cas d’anomalie, scanner le QR Code ou effectuer une remontée dans l’application.
      </div>

      ${structure.map(section => `
        <div class="print-section-title">
          ${fcEsc(section.title)}
          <small>${fcEsc(section.subtitle || "")}</small>
        </div>
        ${section.steps.map(renderStep).join("")}
      `).join("")}

      ${unclassified.length ? `
        <div class="print-section-title">
          AUTRES ÉLÉMENTS
          <small>Matériels non rattachés au parcours principal</small>
        </div>
        <section class="print-step">
          <div class="print-step-head">
            <div class="print-step-number">ANNEXE</div>
            <div class="print-step-name">À reclasser</div>
          </div>
          <div class="print-items-list">
            ${unclassified.map(item => `
              <div class="print-item-line">
                <strong>${fcEsc(item.name)} <em>(${fcEsc(item.zone)})</em></strong>
                <span>×${item.qty}</span>
              </div>
            `).join("")}
          </div>
        </section>
      ` : ""}

      <div class="print-note">
        Document papier de secours / classeur inventaire. La version numérique FireCheck reste la référence pour les remontées d’anomalies.
      </div>
    </div>
  `;

  // Rendre les vrais QR codes dans la feuille d'impression
  const coverQr = document.getElementById("invCoverQrBox");
  if(coverQr && typeof QRCode !== "undefined"){
    const url = fcVehicleQrUrl(vehicle);
    new QRCode(coverQr, {text:url, width:60, height:60, colorDark:"#111827", colorLight:"#fff", correctLevel:QRCode.CorrectLevel.M});
  }
  // QR dans les sections
  document.querySelectorAll(".inv-qr-box").forEach(box => {
    const url = fcVehicleQrUrl(vehicle);
    if(typeof QRCode !== "undefined") new QRCode(box, {text:url, width:50, height:50, colorDark:"#111827", colorLight:"#fff", correctLevel:QRCode.CorrectLevel.M});
  });

  setTimeout(() => window.print(), 300);
}


/* V31 - gestion médias fiable + impression compacte */
function mediaSlotsForVehicleV31(vehicle){
  const structure = getInventoryStepStructureV30(vehicle);
  const slots = [{slot:"cover", label:"Photo couverture papier"}];
  structure.forEach(section => section.steps.forEach(step => {
    slots.push({slot:`step:${step.name}`, label:step.name});
  }));
  return slots;
}

/* première définition renderMediaManagerV31 supprimée */

const renderFcDetailBeforeV31 = renderFcDetail;
renderFcDetail = function(root){
  renderFcDetailBeforeV31(root);
  const vehicle = fcVehicles.find(v => v.id === fcState.vehicleId);
  if(vehicle) renderMediaManagerV31(root, vehicle);
};


/* V32 - compression des médias avant stockage local */
function compressImageV32(file, maxWidth=900, quality=0.65){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject("Lecture du fichier impossible");
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject("Image illisible");
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width);
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function safeSetMediaV32(vehicleId, slot, dataUrl){
  try{
    setMediaV30(vehicleId, slot, dataUrl);
    if(slot === "cover" && typeof setCoverPhoto === "function") setCoverPhoto(vehicleId, dataUrl);
    if(slot.startsWith("step:") && typeof setZonePhoto === "function"){
      setZonePhoto(vehicleId, slot.replace("step:",""), dataUrl);
    }
    return true;
  }catch(e){
    console.error(e);
    return false;
  }
}

function renderMediaManagerV31(root, vehicle){
  const old30 = root.querySelector("#mediaManagerV30");
  if(old30) old30.remove();

  const existing = root.querySelector("#mediaManagerV31");
  if(existing) existing.remove();

  const detailHead = root.querySelector(".fc-detail-head");
  if(!detailHead) return;

  const slots = mediaSlotsForVehicleV31(vehicle);
  const card = document.createElement("div");
  card.id = "mediaManagerV31";
  card.className = "media-manager-card";
  card.innerHTML = `
    <div class="collapsible-header" data-panel="mediaPanel">
      <h3>🖼️ Médias de l’inventaire</h3>
      <span class="collapsible-arrow">▾</span>
    </div>
    <div class="collapsible-body" id="mediaPanel" style="display:none;">
    <p class="muted">Les photos sont automatiquement réduites pour être conservées dans le prototype.</p>
    <div class="media-grid-v31">
      ${slots.map((s, idx) => {
        const img = getMediaV30(vehicle.id, s.slot);
        return `
          <div class="media-slot-v31">
            <strong>${fcEsc(s.label)}</strong>
            <div class="media-preview-v31" id="mediaPreviewV31_${idx}">
              ${img ? `<img src="${img}" alt="">` : "📷 Ajouter photo"}
            </div>
            <label class="media-label-v31" style="cursor:pointer;display:block;">
              Ajouter / remplacer
              <input type="file" accept="image/*" data-media-slot-v31="${s.slot}" data-preview-id="mediaPreviewV31_${idx}" style="display:none;">
            </label>
            <div class="media-error-v32 hidden" id="mediaErrorV31_${idx}"></div>
          </div>
        `;
      }).join("")}
    </div>
    </div>
    </div>
  `;

  detailHead.insertAdjacentElement("afterend", card);

  // Collapsible toggle
  card.querySelectorAll(".collapsible-header").forEach(hdr => {
    hdr.style.cursor = "pointer";
    hdr.onclick = () => {
      const body = document.getElementById(hdr.dataset.panel);
      const arrow = hdr.querySelector(".collapsible-arrow");
      if(body){
        const open = body.style.display !== "none";
        body.style.display = open ? "none" : "";
        if(arrow) arrow.textContent = open ? "▾" : "▴";
      }
    };
  });

  card.querySelectorAll("[data-media-slot-v31]").forEach(input => {
    input.addEventListener("change", async e => {
      const file = e.target.files && e.target.files[0];
      if(!file) return;

      const preview = document.getElementById(input.dataset.previewId);
      const errEl = input.closest(".media-slot-v31") && input.closest(".media-slot-v31").querySelector(".media-error-v32");
      const err = errEl || null;
      if(err){ err.classList.add("hidden"); err.textContent = ""; }
      if(preview) preview.textContent = "Compression de l’image...";

      try{
        const value = await compressImageV32(file);
        const ok = safeSetMediaV32(vehicle.id, input.dataset.mediaSlotV31, value);
        if(!ok) throw new Error("Stockage impossible");

        if(preview) preview.innerHTML = `<img src="${value}" alt="">`;
        toast("Photo enregistrée");
      }catch(error){
        if(preview) preview.textContent = "📷 Ajouter photo";
        if(err){
          err.textContent = "Photo non enregistrée. Essaie une image plus légère.";
          err.classList.remove("hidden");
        }
        toast("Impossible d’enregistrer cette photo");
      }
    });
  });
}

// Corrige aussi l'ancienne photo détaillée de zone avec compression
const setZonePhotoBeforeV32 = typeof setZonePhoto === "function" ? setZonePhoto : null;
if(setZonePhotoBeforeV32){
  // On garde la fonction existante pour compatibilité.
}

renderAll();


/* ============================================================
   MODULE PHARMACIE — Gestion dates de péremption
   ============================================================ */

let pharmData = JSON.parse(localStorage.getItem("fc_pharmacie_v1") || "[]");

function pharmSave(){
  localStorage.setItem("fc_pharmacie_v1", JSON.stringify(pharmData));
}

function pharmDaysLeft(dateStr){
  if(!dateStr) return null;
  const exp = new Date(dateStr);
  const now = new Date();
  now.setHours(0,0,0,0);
  return Math.floor((exp - now) / 86400000);
}

function pharmStatus(days){
  if(days === null) return "unknown";
  if(days < 0) return "expired";
  if(days <= 30) return "soon";
  return "ok";
}

function pharmStatusLabel(days){
  if(days === null) return "—";
  if(days < 0) return "PÉRIMÉ";
  if(days === 0) return "Expire aujourd'hui !";
  if(days <= 30) return `Dans ${days} jour${days>1?"s":""}`;
  return `Dans ${days} jours`;
}

function pharmRender(){
  const panel = document.getElementById("pharmList");
  const filterBar = document.getElementById("pharmEnginFilter");
  const alertBanner = document.getElementById("pharmAlertBanner");
  if(!panel) return;

  // Engins uniques
  const engins = [...new Set(pharmData.map(p => p.engin).filter(Boolean))].sort();
  const activeFilter = filterBar.dataset.filter || "all";

  // Filtre bar
  filterBar.innerHTML = `
    <button class="pharm-filter-btn ${activeFilter==="all"?"active":""}" data-f="all">Tous</button>
    ${engins.map(e => `<button class="pharm-filter-btn ${activeFilter===e?"active":""}" data-f="${fcEsc(e)}">${fcEsc(e)}</button>`).join("")}
  `;
  filterBar.querySelectorAll("[data-f]").forEach(btn => {
    btn.onclick = () => { filterBar.dataset.filter = btn.dataset.f; pharmRender(); };
  });

  // Données filtrées et triées par date
  let items = pharmData.slice();
  if(activeFilter !== "all") items = items.filter(p => p.engin === activeFilter);
  items.sort((a,b) => {
    const da = pharmDaysLeft(a.expiry);
    const db = pharmDaysLeft(b.expiry);
    if(da === null) return 1;
    if(db === null) return -1;
    return da - db;
  });

  // Bannière alertes
  const alerts = pharmData.filter(p => {
    const d = pharmDaysLeft(p.expiry);
    return d !== null && d <= 30;
  });
  if(alerts.length > 0){
    alertBanner.classList.remove("hidden");
    const expired = alerts.filter(p => pharmDaysLeft(p.expiry) < 0);
    const soon = alerts.filter(p => pharmDaysLeft(p.expiry) >= 0);
    alertBanner.innerHTML = `
      <span class="pharm-alert-icon">⚠️</span>
      <span>
        ${expired.length > 0 ? `<strong>${expired.length} produit${expired.length>1?"s":""} périmé${expired.length>1?"s":""}</strong>` : ""}
        ${expired.length > 0 && soon.length > 0 ? " · " : ""}
        ${soon.length > 0 ? `<strong>${soon.length} produit${soon.length>1?"s":""}</strong> expire${soon.length>1?"nt":""} dans moins d'un mois` : ""}
      </span>
    `;
  } else {
    alertBanner.classList.add("hidden");
  }

  if(items.length === 0){
    panel.innerHTML = `<div class="pharm-empty">Aucun produit enregistré. Cliquez sur <strong>+ Ajouter un produit</strong> pour commencer.</div>`;
    return;
  }

  panel.innerHTML = `
    <div class="pharm-grid">
      ${items.map((p, i) => {
        const days = pharmDaysLeft(p.expiry);
        const status = pharmStatus(days);
        const realIdx = pharmData.indexOf(p);
        const expFormatted = p.expiry ? new Date(p.expiry).toLocaleDateString("fr-FR", {month:"long", year:"numeric"}) : "—";
        return `
          <div class="pharm-card pharm-${status}">
            <div class="pharm-card-photo" ${p.photo ? `style="background-image:url('${p.photo}')"` : ""}>
              ${!p.photo ? "💊" : ""}
            </div>
            <div class="pharm-card-body">
              <div class="pharm-card-engin">${fcEsc(p.engin || "—")}</div>
              <div class="pharm-card-name">${fcEsc(p.name)}</div>
              <div class="pharm-card-date">Exp. ${expFormatted}</div>
              <div class="pharm-card-status pharm-status-${status}">${pharmStatusLabel(days)}</div>
            </div>
            <div class="pharm-card-actions">
              <button class="pharm-edit-btn" data-pidx="${realIdx}" title="Modifier">✏️</button>
              <button class="pharm-del-btn" data-pidx="${realIdx}" title="Supprimer">🗑️</button>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;

  panel.querySelectorAll(".pharm-edit-btn").forEach(btn => {
    btn.onclick = () => pharmOpenForm(parseInt(btn.dataset.pidx));
  });
  panel.querySelectorAll(".pharm-del-btn").forEach(btn => {
    btn.onclick = () => {
      if(confirm("Supprimer ce produit ?")){ pharmData.splice(parseInt(btn.dataset.pidx), 1); pharmSave(); pharmRender(); if(typeof savePharmacieSupabase === "function") savePharmacieSupabase(); }
    };
  });
}

function pharmOpenForm(idx){
  const isEdit = idx !== undefined && idx >= 0;
  const prod = isEdit ? pharmData[idx] : {name:"", engin:"", expiry:"", photo:""};

  const dlg = document.getElementById("pharmDialog");
  if(!dlg) return;

  // Remplir les champs
  document.getElementById("pharmDialogTitle").textContent = isEdit ? "Modifier un produit" : "Ajouter un produit";
  document.getElementById("pharmFormName").value = prod.name || "";
  document.getElementById("pharmFormEngin").value = prod.engin || "";
  document.getElementById("pharmFormExpiry").value = prod.expiry || "";
  document.getElementById("pharmFormSave").textContent = isEdit ? "Enregistrer" : "Ajouter";

  // Photo preview
  const prev = document.getElementById("pharmFormPhotoPreview");
  if(prod.photo){
    prev.style.backgroundImage = `url('${prod.photo}')`;
    prev.textContent = "";
  } else {
    prev.style.backgroundImage = "";
    prev.textContent = "📷";
  }

  // Datalist engins
  const knownEngins = [...new Set([
    "VSAV 1", "VSAV 2", "FPT 53", "VLHR",
    ...(typeof fcVehicles !== "undefined" ? fcVehicles.map(v=>v.name) : []),
    ...pharmData.map(p=>p.engin)
  ].filter(Boolean))].sort();
  document.getElementById("pharmEnginList").innerHTML = knownEngins.map(e=>`<option value="${fcEsc(e)}">`).join("");

  let currentPhoto = prod.photo || "";

  // Photo input — cloner pour retirer anciens listeners
  const oldInput = document.getElementById("pharmFormPhotoInput");
  const newInput = oldInput.cloneNode(true);
  oldInput.parentNode.replaceChild(newInput, oldInput);
  newInput.addEventListener("change", async e => {
    const file = e.target.files && e.target.files[0];
    if(!file) return;
    try{
      currentPhoto = await compressImageV32(file, 600, 0.7);
      prev.style.backgroundImage = `url('${currentPhoto}')`;
      prev.textContent = "";
    }catch(err){ toast("Photo trop lourde"); }
  });

  // Boutons — cloner pour retirer anciens listeners
  const oldSave = document.getElementById("pharmFormSave");
  const newSave = oldSave.cloneNode(true);
  newSave.textContent = isEdit ? "Enregistrer" : "Ajouter";
  oldSave.parentNode.replaceChild(newSave, oldSave);
  newSave.onclick = () => {
    const name = document.getElementById("pharmFormName").value.trim();
    const engin = document.getElementById("pharmFormEngin").value.trim();
    const expiry = document.getElementById("pharmFormExpiry").value;
    if(!name || !engin || !expiry){ toast("Merci de remplir tous les champs obligatoires"); return; }
    const entry = { name, engin, expiry, photo: currentPhoto };
    if(isEdit){ pharmData[idx] = entry; } else { pharmData.push(entry); }
    pharmSave();
    pharmRender();
    dlg.close();
    toast(isEdit ? "Produit mis à jour" : "Produit ajouté");
    if(typeof savePharmacieSupabase === "function") savePharmacieSupabase();
  };

  document.getElementById("pharmFormCancel").onclick = () => dlg.close();
  document.getElementById("pharmDialogClose").onclick = () => dlg.close();

  dlg.showModal();
}

// Init
const pharmAddBtn = document.getElementById("pharmAddBtn");
if(pharmAddBtn) pharmAddBtn.onclick = () => pharmOpenForm();

// Render quand on clique sur l'onglet
document.querySelectorAll(".tech-nav").forEach(btn => {
  if(btn.dataset.tab === "pharmacie"){
    const origOnclick = btn.onclick;
    btn.onclick = (e) => {
      if(origOnclick) origOnclick.call(btn, e);
      pharmRender();
    };
  }
});
