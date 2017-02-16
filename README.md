# Electron® Boilerplate

## Development :computer:

```
npm start  // Start Electron app
// or
npm run start-dev  // Start Webpack on watch mode
```


## Folder structure :file_folder:

El siguiente gráfico muestra la estructura de ficheros para el proyecto.

```
├── electron-boilerplate/
    |
    ├── app/
    |   ├── js/
    |   |   ├── components/
    |   |   ├── config/
    |   |   ├── internationalization/
    |   |   ├── models/
    |   |   ├── views/
    |   |   ├── routes/
    |   |   ├── stores/
    |   |   └── utils/
    |   |
    |   |
    |   ├── scss/
    |   |   ├── components/
    |   |   ├── containers/
    |   |   ├── mixins/
    |   |   ├── settings/
    |   |   ├── ux/
    |   |   └── main.scss
    |   |
    |   |
    |   └── app.js <-- Electron render
    |
    |
    ├── public/ <-- Public files goes here
    |   ├── css/
    |   ├── font/
    |   ├── img/
    |   ├── js/
    |   ├── lib/
    |   ├── locales/
    |   ├── video/
    |   ├── workers/
    |   |   
    |   └── index.html
    |
    |
    ├── .eslintrc
    ├── .gitignore
    ├── deploy.sh
    ├── LICENSE.md
    ├── main.js  <-- Electron entry point
    ├── package.json
    ├── README.md
    └── webpack.config.js
```
