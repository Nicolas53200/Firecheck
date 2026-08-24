# 🔍 Audit Technique Complet — FireCheck

**Date :** 24 août 2026  
**Version analysée :** V36+  
**Périmètre :** 16 486 lignes de code, 6 fichiers source  

---

## Scores globaux

| Domaine | Score | Commentaire |
|---------|-------|-------------|
| 🔒 Sécurité | **3/10** | Vulnérabilités critiques |
| 🏗️ Architecture | **4/10** | Monolithique, non modulaire |
| 📝 Qualité du code | **5/10** | Fonctionnel mais fragile |
| ⚡ Performance | **5/10** | Charge initiale élevée |
| 🎨 UX / UI | **7/10** | Bonne ergonomie métier |
| 🔧 Maintenabilité | **3/10** | Risque élevé de régression |

---

## 01 — Vue d'ensemble

FireCheck est une PWA vanilla (HTML/CSS/JS) pour les sapeurs-pompiers, permettant la vérification d'inventaire des engins, le suivi des anomalies, la gestion du personnel et de l'habillement.

### Fichiers analysés

| Fichier | Rôle | Lignes | Taille |
|---------|------|--------|--------|
| `app.js` | Logique applicative complète | 10 717 | 396 Ko |
| `style.css` | Styles de l'application | 3 839 | 88 Ko |
| `index.html` | Structure HTML, 13 écrans, 10+ modales | 979 | 36 Ko |
| `supabase.js` | Couche de synchronisation Supabase | 809 | 28 Ko |
| `supabase-sdk.js` | Mini-client Supabase custom | 128 | 4 Ko |
| `sw.js` | Service Worker (minimal) | 14 | 0,4 Ko |

**Fichiers orphelins :** `app (2).js` (308 Ko) et `supabase (1).js` (15 Ko) — copies obsolètes à supprimer.

---

## 02 — Architecture

### 🔴 CRITIQUE — Fichier monolithique de 10 717 lignes
**`app.js` — 396 Ko**

222 fonctions, 521+ items de bibliothèque hardcodés, 13 écrans, drag & drop, QR scanning, impression, pharmacie, habillement et fiches véhicule dans un seul fichier. Rend le débogage, la collaboration git, le chargement et les tests impossibles.

### 🟠 ÉLEVÉ — Pattern de monkey-patching

Les mises à jour empilent des surcharges de fonctions au lieu de refactorer :
```javascript
const fcRenderDetailBeforePrintV13 = renderFcDetail;
renderFcDetail = function(root) { /* ... */ };
```

### 🟠 ÉLEVÉ — Aucun système de build

Pas de webpack, Vite, esbuild ou Rollup. Pas de minification, tree-shaking, transpilation, lint ni vérification statique. Dépendance CDN externe (`xlsx@0.18.5`).

### 🟡 MOYEN — Navigation sans gestion d'historique

Écrans togglés via `.active`. Pas de `pushState` : le bouton « retour » quitte l'application.

### 🟡 MOYEN — Données métier hardcodées

Inventaire FPT GO, bibliothèque matériel (521 items), données d'habillement (HAB_REF : 22 effets) directement dans le code source.

---

## 03 — Sécurité ⚠️

### 🔴 CRITIQUE — Clé API Supabase exposée
**`supabase.js` — ligne 4**

URL et clé API en clair dans le code client. Sans Row Level Security (RLS) correctement configurée, n'importe qui peut lire, modifier ou supprimer toutes les données via des requêtes HTTP.

### 🔴 CRITIQUE — Aucune authentification

L'identification se fait par simple saisie de matricule ou grade+nom dans localStorage. Pas de mot de passe, pas de token, pas de session.

### 🔴 CRITIQUE — 66 usages de innerHTML (risque XSS)
**`app.js` — 66 occurrences**

La fonction `fcEsc()` existe et est correcte, mais n'est pas systématiquement utilisée. De nombreuses interpolations directes sans échappement subsistent (logos, rapports, noms de personnel).

### 🟠 ÉLEVÉ — Accès ST protégé par code simple en localStorage

Code visible depuis la console développeur, sans expiration ni verrouillage.

### 🟠 ÉLEVÉ — RPC exec_sql potentielle

Si la fonction RPC `exec_sql` existe côté Supabase, elle permet l'exécution SQL arbitraire depuis le client.

### 🟡 MOYEN — Pas de validation des entrées

Aucune validation de type, longueur ou format sur les champs de formulaire.

### 🟡 MOYEN — Données sensibles en localStorage sans protection

Rapports, inventaires, personnel avec matricules — tout en clair, sans chiffrement ni expiration.

---

## 04 — Qualité du code

### Métriques

| Métrique | Valeur | Commentaire |
|----------|--------|-------------|
| Fonctions | 222 | Toutes dans le scope global |
| Usages `innerHTML` | 66 | XSS potentiel |
| Usages `localStorage` | 43 | Pas d'abstraction |
| Blocs `try/catch` | 54 | Bonne couverture réseau |
| `addEventListener` | 15 | Faible, majorité en `onclick` |
| Tests unitaires | **0** | Aucune suite de tests |
| Configuration lint | **0** | Aucun ESLint |

### Points positifs
- `fcEsc()` correctement implémentée pour l'échappement HTML
- `try/catch` sur les appels réseau
- Patterns modernes : `async/await`, template literals, optional chaining

### Problèmes
- 222 fonctions dans le scope global (risque de collision)
- Aucun test automatisé
- Duplication massive dans la bibliothèque matériel (doublons orthographiques)
- Erreur de syntaxe ligne 2234 (virgule orpheline)
- Conventions de nommage incohérentes (français/anglais)

---

## 05 — Performance

### 🟠 ÉLEVÉ — 550+ Ko de JS non minifié au chargement

`app.js` (396 Ko) + `xlsx.full.min.js` (~450 Ko CDN) + reste. Le fichier XLSX est chargé systématiquement alors qu'il n'est utilisé que pour l'import Excel.

### 🟡 MOYEN — Aucune mise en cache par le Service Worker

`sw.js` (14 lignes) ne cache rien. L'application ne fonctionne pas hors-ligne.

### 🟡 MOYEN — Re-renders complets du DOM

Chaque interaction recalcule et réinjecte l'intégralité du HTML de la section via `innerHTML`.

---

## 06 — Accessibilité

- **Attributs ARIA absents** — Aucun rôle, label ou live region
- **Navigation clavier non testée** — Drag & drop, hotspots souris uniquement
- **Pas de mode sombre** — Tokens CSS en place mais non déclinés
- ✅ `lang="fr"` présent, `<dialog>` natifs, responsive bien géré

---

## 07 — PWA et offline

### 🟠 ÉLEVÉ — `<link rel="manifest">` absente du HTML

Le fichier `manifest.json` existe mais n'est pas référencé dans `index.html`. Le navigateur ne peut pas proposer l'installation.

### 🟠 ÉLEVÉ — Application inutilisable hors-ligne

Le service worker ne cache rien. Le HTML/CSS/JS ne sont pas disponibles sans réseau. Critique pour les interventions en zone blanche.

---

## 08 — Plan d'action recommandé

### 🔴 Priorité immédiate — Sécurité (2-3 jours)

1. **Activer Row Level Security (RLS) sur Supabase** — politiques par CIS
2. **Implémenter Supabase Auth** — authentification email/mot de passe
3. **Supprimer la RPC `exec_sql`** — migrations via Supabase CLI
4. **Systématiser l'échappement HTML** — audit des 66 `innerHTML`

### 🟠 Priorité haute — Architecture & Performance (1-2 semaines)

5. **Ajouter manifest link + cache SW** — stratégie cache-first pour les statiques
6. **Découper `app.js` en modules** — fichiers thématiques
7. **Introduire Vite** — minification, code splitting, hot reload
8. **Lazy loading XLSX** — `import()` dynamique (~450 Ko économisés)

### 🟡 Priorité moyenne — Qualité (continu)

9. **Ajouter ESLint + Prettier**
10. **Écrire les premiers tests** — fonctions pures : `fcEsc()`, `habStatut()`, `parsePersonnelRows()`
11. **Externaliser les données de référence** — JSON ou tables Supabase
12. **Nettoyer fichiers orphelins** — supprimer doublons

### 🟢 Priorité basse — Améliorations

13. **Mode sombre**
14. **Routage avec pushState**
15. **Accessibilité** — ARIA, focus-visible, clavier

---

*Audit généré le 24 août 2026 — FireCheck V36+ — 16 486 lignes analysées*
