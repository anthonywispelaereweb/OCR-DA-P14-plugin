# HRNet Plugin Modal

Un composant modal réutilisable développé pour le projet HRNet. Ce plugin fournit une modale simple et élégante pour afficher des messages à l'utilisateur.

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

```jsx
import React, { useState } from 'react';
import { Modal } from 'hrnet-plugin-modal-aw';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Ouvrir la modale</button>
      <Modal
        isOpen={isModalOpen}
        message="Employé créé avec succès !"
        onClose={closeModal}
        customClass="ma-classe-personnalisee" // optionnel : pour personnaliser le style
      />
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
| `message` | string | Non | Le message à afficher dans la modale |
| `onClose` | function | Oui | Fonction appelée pour fermer la modale |
| `customClass` | string | Non | Classe CSS personnalisée appliquée au conteneur principal de la modale |
| `position` | string | Non | Position de la modale sur l'écran (`center` par défaut, `top`, `bottom`, etc.) |

## Fonctionnalités

- **Fermeture par clic** : La modale se ferme en cliquant sur l'overlay ou sur le bouton de fermeture (×)
- **Styles inclus** : Les styles CSS sont automatiquement inclus
- **Responsive** : La modale s'adapte aux différentes tailles d'écran
- **Accessible** : Structure HTML sémantique pour une meilleure accessibilité


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
  isOpen={isModalOpen}
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
  <Modal customClass="ma-classe-personnalisee" ... />
  ```

2. **En redéfinissant les classes CSS par défaut** :

  - `.modal` : Conteneur principal de la modale
  - `.modal-dialog` : Contenu de la modale
  - `.modal-close` : Bouton de fermeture
  - `.modal-overlay` : Overlay de fond

## Compatibilité

- React ^17.0.0 || ^19.0.0
- React DOM ^17.0.0 || ^19.0.0

## Licence

MIT
