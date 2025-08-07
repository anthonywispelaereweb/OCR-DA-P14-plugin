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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={openModal}>Ouvrir la modale</button>
      
      <Modal
        isOpen={toggleModal}
        message="Employé créé avec succès !"
        onClose={toggleModal}
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

## Fonctionnalités

- **Fermeture par clic** : La modale se ferme en cliquant sur l'overlay ou sur le bouton de fermeture (×)
- **Styles inclus** : Les styles CSS sont automatiquement inclus
- **Responsive** : La modale s'adapte aux différentes tailles d'écran
- **Accessible** : Structure HTML sémantique pour une meilleure accessibilité

## Personnalisation

Les styles CSS sont inclus par défaut, mais vous pouvez les personnaliser en redéfinissant les classes CSS :

- `.modal` : Conteneur principal de la modale
- `.modal-dialog` : Contenu de la modale
- `.modal-close` : Bouton de fermeture
- `.modal-overlay` : Overlay de fond

## Compatibilité

- React ^17.0.0 || ^19.0.0
- React DOM ^17.0.0 || ^19.0.0

## Licence

MIT
