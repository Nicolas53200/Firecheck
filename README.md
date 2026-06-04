# FireCheck — Application Prototype V3

Prototype fonctionnel en HTML/CSS/JavaScript.

## Lancer
Ouvrir `index.html` dans un navigateur.

## Parcours pompier
- Accueil avec logo centre, nom, grade, matricule
- Bouton Vérifications
- Scan QR code simulé
- Arrivée directe sur la fiche de contrôle FPT GO
- Contrôle étape par étape
- Photo de référence prévue pour chaque zone
- Liste du matériel toujours visible
- 1 clic si tout est conforme
- Déclaration détaillée uniquement si anomalie
- Bouton + d’infos sur l’engin

## Service technique
- Interface séparée
- Remontées terrain
- Prise en charge / clôture
- Statut “Corrigé par SP”
- Suivi véhicules : CT, vidange, kilométrage
- Suivi matériel : MPR, motopompe, groupe électrogène

## Inventaire intégré
La V3 intègre une première structure issue de l’inventaire FPT GO :
- Cabine avant
- Cabine arrière
- Coffre arrière cabine
- Rideau avant gauche
- Rideau milieu gauche
- Rideau arrière gauche
- Arrière véhicule
- Toit
- Rideau arrière droit
- Rideau milieu droit
- Rideau avant droit
- Lot Prompt Secours


## V4
- Chaque ligne de matériel est cliquable.
- Un clic ouvre une fenêtre d’anomalie dédiée à l’élément.
- Exemple : cliquer sur “Projecteurs” puis choisir “1 élément défectueux”.
- La ligne reste marquée en rouge avec l’anomalie enregistrée.
- Le SP continue la vérification sans quitter l’étape.
- Les anomalies sont envoyées au service technique au passage à l’étape suivante.


## V5
- Ajout côté service technique de l’onglet “Fiches vérification”.
- Le service technique peut visualiser, modifier et compléter l’inventaire.
- Possibilité de créer une nouvelle fiche véhicule.
- Fenêtre d’anomalie matériel améliorée : Problème constaté / Nombre / Priorité.
- Fichier Excel propre “inventaire_FPT_GO_FireCheck.xlsx” fourni en complément.


## V6
- Suppression de la logique Excel comme source principale.
- Les inventaires sont désormais pensés pour être gérés directement dans l’application.
- Onglet “Fiches vérification” :
  - catégories Parc roulant / Matériel / Créer un inventaire ;
  - liste des engins ou matériels ;
  - page détail avec immatriculation, type, nombre d’éléments ;
  - dessin cliquable du véhicule ;
  - sélection par zone ;
  - bibliothèque matériel par catégorie ;
  - ajout par glisser-déposer ;
  - suppression et modification des quantités.


## V7
- Carousel de vues véhicule : côté droit, arrière, côté gauche, toit, devant, intérieur.
- Possibilité d’importer une photo par vue.
- Les rectangles cliquables peuvent être ajoutés, déplacés et redimensionnés.
- La bibliothèque matériel reste en colonne gauche.
- Glisser-déposer du matériel vers la zone sélectionnée.


## V8
- Correction de l’ouverture des inventaires.
- Bibliothèque matériel toujours visible en colonne gauche dans Fiches vérification.
- Bibliothèque structurée en catégories : INCENDIE / SSUAP / SR / DIVERS.
- Les boutons “Ouvrir l’inventaire” utilisent une logique stable dédiée V8.


## V9
- Bibliothèque enrichie depuis les inventaires fournis :
  - CCF M - inventaires 2024
  - VSAV 1 - GG 168 AV - COVID-19
  - VSR - inventaire Juin 2024
  - Inventaire matériels OPDI CIS Chateau-gontier
- Classement automatique par thèmes : INCENDIE / SSUAP / SR / DIVERS.
- Nombre de matériels uniques intégrés : 521
- Répartition : INCENDIE 60, SSUAP 41, SR 48, DIVERS 372.


## V10
- Ajout du FPT 53 comme véhicule préconfiguré.
- Photos réelles intégrées :
  - avant ;
  - arrière ;
  - côté gauche ;
  - côté droit.
- Zones cliquables déjà positionnées sur les photos.
- Inventaire provisoire rattaché aux premières zones.
- Les photos intérieures et rideaux ouverts pourront être ajoutés ensuite.


## V11
- Correction complète de l’onglet Fiches vérification.
- Module inventaire stabilisé et indépendant.
- Les boutons “Ouvrir l’inventaire” fonctionnent.
- Bibliothèque matériel visible en colonne gauche.
- FPT 53 préchargé avec photos et zones.


## V12
- Amélioration visuelle des zones sur photo.
- Photo légèrement assombrie.
- Zones en bleu transparent avec contour blanc.
- Zone sélectionnée en orange.
- Ajout d’une légende et d’un compteur zones / matériels.


## V13
- Ajout d’un bouton “Imprimer l’inventaire” dans la fiche véhicule.
- Impression propre par véhicule, zones, matériel, quantités et catégories.
- Zone signature / date ajoutée en bas de l’impression.
- Ajout possible par double-clic sur un matériel de la bibliothèque en complément du glisser-déposer.


## V14
- Refonte de la fiche imprimée pour usage classeur inventaire.
- Titre : nom de l’inventaire + dernière mise à jour.
- Bloc véhicule : véhicule, immatriculation, type, QR code et photo de l’engin.
- Inventaire imprimé par étapes/zones.
- Suppression de la catégorie et de la signature vérificateur.
- Ajout d’une case “Vu” pour contrôle papier.


## V15
- Refonte de l’impression inventaire en parcours opérationnel :
  CABINE → CÔTÉ DROIT → ARRIÈRE → CÔTÉ GAUCHE → TOIT.
- Suppression de la colonne “Vu”.
- Ajout de titres de grandes sections.
- Ajout d’emplacements photo pour chaque étape.
- Liste plus lisible : matériel attendu + quantité.
- Les zones non classées sont conservées en annexe pour ne rien perdre.


## V16
- Ajout d’une icône Paramètres sur l’accueil.
- Paramètres modifiables : nom du CIS, logo du centre.
- Import CSV de la liste du personnel.
- Liste du personnel modifiable directement dans l’interface.
- Identification utilisateur par matricule.
- Préparation usage web sans installation : QR code vers URL FireCheck.


## V17
- Adaptation grand écran / ordinateur.
- Accueil en mise en page large sur PC.
- Service technique plus confortable : sidebar fixe, espace de travail large.
- Fiches vérification optimisées pour écran PC :
  - bibliothèque plus large ;
  - photo véhicule plus grande ;
  - panneau zone sélectionnée plus lisible ;
  - grilles d’inventaires élargies.
- Mode automatiquement activé à partir de 1100 px de largeur.


## V18
- Remontées : cartes statistiques cliquables pour filtrer Nouveau / En cours / Corrigé par SP.
- Prise en charge : popup avec nom du technicien, date et commentaire.
- Historique simple ajouté aux remontées.
- Boutons Ajouter véhicules et matériel technique rendus fonctionnels.
- Entretien : suivi possible en kilomètres, heures ou date.
- Calcul automatique du prochain entretien à partir de la valeur actuelle, du dernier entretien et de la périodicité.


## V19
- Ajout d’un bouton “+ Ajouter du matériel” dans la bibliothèque.
- Formulaire : nom du matériel, thème, sous-catégorie, quantité par défaut.
- Le nouveau matériel apparaît immédiatement dans la bibliothèque.
- Le matériel ajouté peut ensuite être glissé/déposé ou double-cliqué selon les fonctions disponibles.


## V20
- Chaque inventaire possède un QR Code.
- Bouton QR Code disponible depuis la liste des inventaires et la fiche détail.
- Impression dédiée du QR Code.
- À la création d’un inventaire, un QR Code est automatiquement disponible.
- QR visuel prototype : à remplacer en production par une librairie QR Code certifiée.


## V21
- Logo d'accueil recentré.
- Logo agrandi.
- Plus d'espace entre le logo et le texte.
- Présentation CIS plus équilibrée visuellement.


## V22
- Identification possible par matricule ou manuellement.
- Mode manuel : grade, nom, prénom, matricule facultatif.
- Utile si le personnel n’est pas encore présent dans la liste importée.


## V23
- Accueil contextualisé quand l’application est ouverte via QR code d’un véhicule/matériel.
- Bouton “Vérifications” devient “Vérification + nom de l’engin scanné”.
- Accès service technique protégé sur mobile.
- Onglet ST “Accès ST” pour gérer les personnes autorisées.
- Code mobile ST configurable.
- Sur ordinateur, accès ST direct prévu pour les postes du service technique.


## V24
- Import personnel Excel ajouté.
- Fichier modèle CHG intégré comme base de personnel par défaut.
- Feuille attendue : Personnel.
- Colonnes reconnues : MATRICULE, NOM, PRÉNOM, GRADE, TYPE, ÉQUIPE, APTITUDE, SPÉCIALITÉS, DATE NAISSANCE, STATUT, NOTES.
- Nombre de personnels préchargés depuis le fichier fourni : 77.
- CSV reste accepté en secours.


## V25
- Correction identification matricule.
- Recherche plus souple : accepte 3025, 03025, SP-3025.
- Fusion automatique de la liste Excel préchargée avec l’éventuelle ancienne liste gardée en mémoire locale.
- Message plus clair si le matricule n’est pas trouvé.


## V26
- Ajout onglet Service Technique : Personnel CIS.
- Liste complète des SP visible sous Accès ST.
- Modification directe : matricule, grade, nom, prénom, type, équipe.
- Ajout et suppression de personnel.
- Case Accès ST synchronisée avec l’onglet Accès ST.
- Import Excel aussi disponible depuis l’onglet Personnel CIS.


## V27
- Nouveau parcours de vérification hybride.
- Carrousel visuel avec photos : avant, côté droit, arrière, côté gauche, toit.
- Zones cliquables sur les photos.
- Contrôle guidé conservé sous le carrousel.
- Étape recommandée : cabine avant puis ordre du tour véhicule.
- Le SP peut choisir une zone librement, tout en gardant le guidage.
- Progression visuelle et état des zones.


## V28
- Séparation des photos générales et des photos détaillées.
- Les photos générales restent dans le carrousel : avant, côté droit, arrière, côté gauche, toit.
- Ajout possible d’une photo détaillée par zone : cabine avant, rideau ouvert, coffre, pompe, etc.
- La photo détaillée s’affiche ensuite dans le contrôle guidé SP.
- L’ajout d’une photo de zone ne remplace plus la photo générale du véhicule.


## V29
- Ajout d’une photo dédiée à la couverture de l’inventaire papier.
- Cette photo apparaît à côté du QR Code sur la première page.
- Elle ne remplace pas les photos générales du carrousel.
- Les photos détaillées de zones apparaissent maintenant dans les étapes de l’impression.
- Les emplacements photo restent visibles si aucune photo n’a encore été ajoutée.


## V30
- Création d’un vrai gestionnaire “Médias de l’inventaire”.
- Photo de couverture papier et photos par étape centralisées.
- Compatible avec plusieurs types d’inventaires : véhicule, bateau, MPR, sac prompt-secours, matériel seul.
- Impression uniquement illustrée.
- Correction impression : les photos sont insérées en balises image pour mieux apparaître à l’impression.
- Les anciennes photos de couverture / zone restent compatibles.


## V31
- Bloc haut de l’impression réduit pour occuper environ 1/4 de page A4.
- Photo couverture imprimée plus petite.
- QR Code plus compact.
- Gestionnaire Médias corrigé avec vrais champs fichier intégrés aux boutons.
- Aperçu média mis à jour immédiatement après ajout.


## V32
- Photo couverture d’impression agrandie sans reprendre trop de place.
- Gestionnaire Médias corrigé : bouton fichier plus fiable.
- Compression automatique des photos avant stockage dans le prototype.
- Message d’erreur si une photo est trop lourde ou impossible à enregistrer.
