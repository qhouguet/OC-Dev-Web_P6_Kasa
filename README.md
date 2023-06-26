
# Créez une application web de location immobilière avec React

## Scénario : 

Recruté par Kasa en tant que développeur front-end en freelance, je dois développer leur nouvelle plateforme web avec React.

Pour cela, j'ai eu à ma disposition :

* La maquette figma : https://www.figma.com/file/qEno0LwL4ZLkWyeY59kxp1/UI-Design-Kasa-FR?type=design&node-id=0-1&t=xTrmFOr1KpcmbamW-0
* Un jeu de données des 20 dernières annonces de logements au format JSON
* Des coding guidelines pour décrire les contraintes techniques et les outils utilisés (*React*, *SASS* et *React Router*)

## Utilisation en local

Pour déployer ce projet en local, clonez le repository, installez les dépendances et utilisez la commande 

```bash
  git clone https://link-to-project
```
```bash
  cd my-project
```
```bash
  npm install
```
```bash
  npm start
```

## Structure du code 

Le jeu de données **data.json** se trouve dans le dossier **data** lui même dans le dossier **public** 

Dans le dossier **src**, vous trouverez un dossier :

* **components** composé d'un sous dossier **ui** et d'un autre **business** eux même contenant les composants dans des dossiers dédiés. Dans les dossier de ces composants, vous trouverez un fichier *.jsx* avec le code du composant, ainsi qu'un fichier *.scss* avec le style du composant
* **images** avec les images utilisées pour le projet
* **pages** qui contient les pages à afficher avec le Router
* **services** avec notamment le fichier de fetch où il faudra remplacer le jeu de données par le lien vers l'application
* **styles** avec les imports de fichiers *.scss* dans le fichier **index.scss** ainsi qu'un fichier **settings.scss** avec des variables et des styles globaux + un fichier **reset.scss** contenant les reset du css

Avec ces dossiers, vous trouverez un fichier Routing.jsx contenant la logique de Routes du projet, ainsi que le fichier index.js avec l'import des routes + le footer.
