# HRNet Plugin Modal

Un composant modal réutilisable et accessible développé pour le projet HRNet. Ce plugin fournit une modale flexible et moderne pour afficher des messages, formulaires ou tout contenu personnalisé à l'utilisateur.

## 🚀 Fonctionnalités principales

- ✅ **Backdrop plein écran personnalisable**
- ✅ **Contenu flexible** (message simple ou JSX complexe)
- ✅ **Positionnement configurable** (center, top, bottom, coins)
- ✅ **Contrôle de fermeture avancé** (blocage + fermeture forcée)
- ✅ **Accessibilité complète** (ARIA, focus management, navigation clavier)
- ✅ **Styles CSS inclus et personnalisables**
- ✅ **Responsive design**

## Installation

```bash
npm install hrnet-plugin-modal-aw
```

## Utilisation

### Import du composant

```javascript
import { Modal } from 'hrnet-plugin-modal-aw';
// ou
import Modal from 'hrnet-plugin-modal-aw';
```

### Possibilité d'utiliser le style du composant
```jsx
import 'hrnet-plugin-modal-aw/dist/style.css';
```

### Exemple d'utilisation

#### Utilisation avec message simple

```jsx
import React, { useState } from 'react';
import { Modal } from 'hrnet-plugin-modal-aw';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Ouvrir la modale</button>
      <Modal
        isOpen={isOpen}
        title="Succès" // Titre personnalisé
        message="Employé créé avec succès !"
        onClose={closeModal}
        customClass="ma-classe-personnalisee" // optionnel : pour personnaliser le style
      />
    </div>
  );
}

export default App;
```

#### Utilisation avec titre personnalisé uniquement

```jsx
import React, { useState } from 'react';
import { Modal } from 'hrnet-plugin-modal-aw';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Ouvrir la modale</button>
      <Modal
        isOpen={isOpen}
        title="Information importante"
        onClose={closeModal}
      />
      {/* Pas de message - juste le titre */}
    </div>
  );
}

export default App;
```

#### Utilisation avec contenu personnalisé (slot)

```jsx
import React, { useState } from 'react';
import { Modal } from 'hrnet-plugin-modal-aw';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Ouvrir la modale</button>
      <Modal 
        isOpen={isOpen} 
        onClose={closeModal}
      >
        <h2>Félicitations !</h2>
        <div>
          <p>L'employé a été créé avec succès.</p>
          <ul>
            <li>Nom : Jean Dupont</li>
            <li>Département : IT</li>
            <li>Date de début : 01/10/2025</li>
          </ul>
          <button onClick={() => console.log('Voir détails')}>
            Voir les détails
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
```

#### Utilisation avec contrôle de fermeture et backdrop personnalisé

```jsx
import React, { useState } from 'react';
import { Modal } from 'hrnet-plugin-modal-aw';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSave = async () => {
    setIsProcessing(true);
    // Simulation d'une opération async
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Ouvrir la modale</button>
      <Modal 
        isOpen={isOpen} 
        onClose={closeModal}
        preventClose={isProcessing} // Bloque pendant traitement
        forceClose={() => setIsOpen(false)} // Force la fermeture si besoin
        backdropColor="rgba(255, 0, 0, 0.3)" // Backdrop rouge
      >
        <h2>Sauvegarde en cours...</h2>
        <p>{isProcessing ? 'Veuillez patienter...' : 'Prêt à sauvegarder'}</p>
        <button onClick={handleSave} disabled={isProcessing}>
          {isProcessing ? 'Sauvegarde...' : 'Sauvegarder'}
        </button>
      </Modal>
    </div>
  );
}

export default App;
```

## Props

Le composant Modal accepte les props suivantes :

| Prop | Type | Requis | Description |
|------|------|---------|-------------|
| `isOpen` | boolean | Oui | Contrôle la visibilité de la modale |
| `message` | string | Non | Le message à afficher dans la modale (ignoré si `children` est fourni) |
| `title` | string | Non | Le titre à afficher dans la modale (ignoré si `children` est fourni, optionnel même sans `children`) |
| `onClose` | function | Oui | Fonction appelée pour fermer la modale |
| `customClass` | string | Non | Classe CSS personnalisée appliquée au conteneur principal de la modale |
| `position` | string | Non | Position de la modale sur l'écran (`center` par défaut, `top`, `bottom`, etc.) |
| `children` | ReactNode | Non | Contenu personnalisé à afficher dans la modale (remplace le titre et message par défaut) |
| `preventClose` | boolean | Non | Si `true`, empêche la fermeture de la modale par clic sur le backdrop, bouton × ou touche Échap |
| `forceClose` | function | Non | Fonction à appeler pour forcer la fermeture de la modale même si `preventClose` est `true` |
| `backdropColor` | string | Non | Couleur du backdrop en plein écran (par défaut : `rgba(0, 0, 0, 0.5)`) |

## 📋 Cas d'usage typiques

- **Notifications** : Messages de succès, erreurs, avertissements
- **Confirmations** : Actions destructives, validations d'opérations
- **Formulaires** : Création/édition d'entités dans une popup
- **Processus asynchrones** : Indicateurs de progression avec fermeture bloquée
- **Galeries** : Affichage d'images ou de contenu media
- **Aide contextuelle** : Tutoriels, informations détaillées


## Gestion de la position

La prop `position` permet de choisir l'emplacement de la modale sur l'écran. Par défaut, la modale est centrée (`center`).


**Valeurs possibles :**

- `center` (par défaut) : centre la modale
- `top` : affiche la modale en haut de l'écran
- `bottom` : affiche la modale en bas de l'écran
- `top-left` : coin supérieur gauche
- `top-right` : coin supérieur droit
- `bottom-left` : coin inférieur gauche
- `bottom-right` : coin inférieur droit

**Exemple d'utilisation :**

```jsx
<Modal
  isOpen={isOpen}
  onClose={closeModal}
  message="Employé créé avec succès !"
  position="top" // ou "bottom", "center"...
/>
```

## Personnalisation

Vous pouvez personnaliser la modale de deux façons :

1. **Via la prop `customClass`** :

  Passez une classe CSS personnalisée à la prop `customClass` pour surcharger ou ajouter vos propres styles au conteneur principal de la modale.

  ```jsx
  <Modal 
    isOpen={isOpen}
    onClose={closeModal}
    customClass="ma-classe-personnalisee"
  >
    <YourContent />
  </Modal>
  ```

2. **En redéfinissant les classes CSS par défaut** :

  - `.modal` : Conteneur principal de la modale
  - `.modal-dialog` : Contenu de la modale  
  - `.modal-close` : Bouton de fermeture
  - `.modal-backdrop` : Backdrop plein écran (nouveau)
  - `.modal-overlay` : Ancien overlay (maintenu pour compatibilité)

3. **Via la prop `backdropColor`** :

  Personnalisez directement la couleur du backdrop :

  ```jsx
  <Modal 
    isOpen={isOpen}
    onClose={closeModal}
    backdropColor="rgba(255, 255, 255, 0.9)" // Blanc semi-transparent
  >
    <YourContent />
  </Modal>

  <Modal 
    isOpen={isOpen}
    onClose={closeModal}
    backdropColor="#000000CC" // Noir avec alpha en hexadécimal
  >
    <YourContent />
  </Modal>

  <Modal 
    isOpen={isOpen}
    onClose={closeModal}
    backdropColor="linear-gradient(45deg, rgba(255,0,0,0.5), rgba(0,0,255,0.5))" // Dégradé
  >
    <YourContent />
  </Modal>
  ```

## 🔧 Accessibilité

Ce composant respecte les standards d'accessibilité WCAG :

- **Rôles ARIA** : `role="dialog"`, `aria-modal="true"`, `aria-labelledby`
- **Focus management** : Focus automatique sur la modale à l'ouverture
- **Focus trap** : Navigation au clavier limitée à la modale
- **Navigation clavier** : Fermeture avec la touche `Échap`
- **Lecteurs d'écran** : Structure sémantique et labels appropriés

## 🛠️ Développement

```bash
# Cloner le projet
git clone https://github.com/anthonywispelaereweb/OCR-DA-P14-plugin.git

# Installer les dépendances
npm install

# Démarrer en mode développement
npm run dev

# Construire pour la production
npm run build
```

## 📚 Changelog

### v1.0.0
- Composant Modal de base avec message simple
- Positionnement configurable
- Styles CSS inclus

### v1.1.0
- Ajout de la prop `children` pour contenu personnalisé
- Amélioration de l'accessibilité (ARIA, focus management)
- Support des positions dans les coins

### v1.2.0
- Backdrop plein écran (100vw x 100vh)
- Contrôle de fermeture avec `preventClose`
- Fermeture forcée avec `forceClose`
- Couleur de backdrop personnalisable

## 📞 Support

Si vous rencontrez des problèmes ou avez des suggestions :

1. Vérifiez les [issues existantes](https://github.com/anthonywispelaereweb/OCR-DA-P14-plugin/issues)
2. Créez une nouvelle issue avec un exemple reproductible
3. Consultez la documentation complète ci-dessus

## 🤝 Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à :

- Fork le projet
- Créer une branche pour votre fonctionnalité
- Commiter vos changements
- Pousser vers la branche
- Ouvrir une Pull Request

## 📋 Compatibilité

- **React** : ^17.0.0 || ^18.0.0 || ^19.0.0
- **React DOM** : ^17.0.0 || ^18.0.0 || ^19.0.0
- **Navigateurs** : Tous les navigateurs modernes (Chrome, Firefox, Safari, Edge)

## 📄 Licence

MIT © [anthonywispelaereweb](https://github.com/anthonywispelaereweb)

---

**Développé avec ❤️ pour le projet HRNet**
