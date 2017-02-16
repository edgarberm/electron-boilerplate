# Ilusia



## Estructura del proyecto :file_folder:

El siguiente gráfico muestra la estructura de ficheros para el proyecto.

```
├── ilusia-webapp/
    |
    ├── app/
    |   ├── js/
    |   |   ├── components/
    |   |   |   ├── index.js
    |   |   |   |
    |   |   |   ├── AsyncRouteManager/
    |   |   |   |   ├── AsyncRouteManager.js
    |   |   |   |   └── AsyncRouteManager.test.js
    |   |   |   |
    |   |   |   |
    |   |   |   └── Dialogs/
    |   |   |       ├── Alert/
    |   |   |       └── components/ <-- HoCs para Alert
    |   |   |           └── components/
    |   |   |               ├── NeedAuthNotification.js
    |   |   |               └── NeedProviderAccount.js
    |   |   |   
    |   |   ├── config/
    |   |   ├── internationalization/
    |   |   ├── models/
    |   |   ├── pages/
    |   |   |   ├── index.js
    |   |   |   |
    |   |   |   └── ShopPage/
    |   |   |       ├── ShopPage.js
    |   |   |       └── ShopPage.test.js
    |   |   |       
    |   |   ├── routes/
    |   |   ├── stores/
    |   |   └── utils/
    |   |
    |   |
    |   ├── scss/
    |   |   ├── base/
    |   |   |   ├── base.scss
    |   |   |   ├── normalize.scss
    |   |   |   └── reset.scss
    |   |   |
    |   |   |
    |   |   ├── components/
    |   |   ├── containers/
    |   |   ├── mixins/
    |   |   ├── settings/
    |   |   |   ├── colors.scss
    |   |   |   ├── fonts.scss
    |   |   |   └── settings.scss
    |   |   |
    |   |   |
    |   |   ├── ux/
    |   |   └── main.scss
    |   |
    |   |
    |   └── index.js <-- Application entry point
    |
    |
    ├── public/ <-- Public files goes here
    |   ├── css/
    |   |   └── main.min.css <-- Generated and minimified CSS
    |   |   
    |   |   
    |   ├── font/
    |   ├── img/
    |   ├── js/
    |   |   └── app.min.js <-- Compiled and minimified JavaScript
    |   |
    |   |
    |   ├── lib/
    |   ├── locales/
    |   |   ├── en/
    |   |   └── es-ES/
    |   |   
    |   |   
    |   ├── static/
    |   |   ├── error.html
    |   |   └── maintenance.html
    |   |   
    |   |   
    |   ├── video/
    |   ├── workers/ <-- WebWorkers goes here
    |   |   
    |   |   
    |   ├── index.html
    |   ├── manifest.json
    |   └── robots.txt
    |
    |
    ├── .babelrc
    ├── .eslintrc
    ├── .gitignore
    ├── deploy.sh
    ├── LICENSE.md
    ├── package.json
    ├── README.md
    └── webpack.config.js
```


## Dependencias :page_with_curl:



## Desarrollo :computer:

Dadas las características de los entornos de desarrollo y producción se ha optado por
utilizar **Webpack** como servidor local y como module bundler.

**TODO:** Documentación configuración Webpack.


### Bootstrapping :rocket:

Existen varias opciones para arrancar el proyecto dependiendo de si queremos trabajar sobre la API de desarrollo o sobre la API de producción.

Tan solo debemos ejecutar el comando `npm run start` con el tag apropiado para cada caso, `:dev` o `:prod`.

```
npm run start:dev  // Development API
// or
npm run start:prod  // Production API
```

Este comando copiará los ficheros de la API en la versión especificada en el tag, arrancará el servidor Webpack en el puerto
**8080** (http://localhost:8080/) y se encargará de observar las modificaciones que se produzcan en nuestros archivos
**JavaScript** y **SCSS** para refrescar la ventana correspondiente del navegador en cada cambio.



### Compilado :pill:

Dado que trabajamos con las últimas versiones de JavaScript y con SASS nuestro proyecto ha de ser compilado.

La carpeta `/public` es el localhost de nuestro proyecto y es la carpeta que compartiremos al S3 de Amazon. En dicha encontraremos todos
los archivos y recursos necesários para publicar la aplicación como fuentes tipográficas, imágenes, vídeos y demás recursos gráficos.

En la carpeta `/public` también será donde compilemos nuestros fuentes `.js` y `.css`, además de la copia que necesitemos de los ficheros
de la API. Para facilitar esta tarea y automatizar estas rutinas en la medida de lo posible se ha creado el fichero `deploy.sh`. Dicho fichero
contiene las instrucciones necesárias para la correcta compilación del proyecto y la subida al GIT de esta compilación.



```
deploy.sh test  // Deploy for test
// or
deploy.sh prod  // Deploy for production
```



# TODOs

## Por pensar
- 

## Con Fernando
- Unificar componentes UI
- Definir tamaños estandar de componentes UI
