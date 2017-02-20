# Electron® Boilerplate

This Electron boilerplate uses __Babel__ to uses all ES6/ES7 features, __Webpack__ to 
automatically reload changes while developing an electron app adn __React__+__Mobx__ to
build the application interface.


## Download and install

```
npm install
# Runs webpack on watch mode
npm run start-dev
# Starts the Electron app
npm run start
```


## Folder structure :file_folder:

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
