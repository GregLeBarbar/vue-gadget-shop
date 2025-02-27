# Vue Gadget Shop - step1-solution

## Structure du projet

```bash
/vue-gadget-shop
│── index.html
│── main.js
│── style.css
```

## Création de l’application Vue

On commence par un affichage simple du titre et d’une description.

📄 index.html

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Gadget Shop</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="app">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>

    <script src="main.js"></script>
  </body>
</html>
```

📄 main.js :

```js
const app = Vue.createApp({
  data() {
    return {
      title: "Vue Gadget Shop",
      description:
        "Découvrez les derniers gadgets électroniques de haute technologie !",
    };
  },
});

app.mount("#app");
```

Ce qu'on fait ici :

- On définit une instance Vue avec Vue.createApp()
- On lie les données title et description à notre index.html
- On monte l’application Vue sur #app
