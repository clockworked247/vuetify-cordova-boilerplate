# Boilerplate for Vuetify and Cordova working with Vue CLI 3

_Hi everyone, I'm working on a small project building a boilerplate for a Vuetify x Cordova project. Currently I have difficults to find a nice way to build a Vue x Cordova project and I needed to find a way for a Final Year Poject, so I decided to do it myself. I'm listening to all the evolutions I can add to this project, but Vue CLI 3 is now really nice to build project without or with minimal configuration. I'll try to keep it maintained but I'm also counting on you. Have fun guys !_

## You will find :
- VueJS v2.6 with Vue CLI 3 powered project
- Vuetify Framework
- FontAwesome 5 (with pre-configured library)
- Axios (with pre-configured instance)
- Vuex
- Cordova (with pre-configured routing building)

## Requirements
- Install Cordova globaly :
```
  npm i -g cordova
```
- Install Vue CLI 3 globaly :
```
  npm i -g @vue/cli
```
- Node and NPM installations
- Android Studio with SDKs and JDKs // ADB configuration
- Android Studio Configuration // ADB configuration

## Project setup
```
  npm install
```

## Set up Cordova App
To test your Cordova App as Android App, please refer to the installation of Android Studio, JDKs, SDKs
and everything needed for a great Android deployment. You can also try on your physical Android device by adding it to the ADB devices (Don't forget to check USB Debug in Developers Options).
------
Then, all you have to do is create a new Cordova app in the root of the project : 
```
cd project-name
cordova create project-name
```
Then uncomment the following lines in your **_vue.config.js_** file, replacing it with your own configuration :
```javascript 
ouputDir: '/path/to/your/www/cordova/folder'
publicPath: './'
```
The last line is a **mandatory line** to indicate Cordova where your assets files (css, js, medias) are placed.
I guess it depends on your wish to see a *@x!3E+$?* (replace with the bad word you want) blank page.

## Utils

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Run your tests
```
npm run test
```

#### Lints and fixes files
```
npm run lint
```

#### Run your unit tests
```
npm run test:unit
```

# Special Thanks
Special thanks to all the VueJS Team, Cordova Team and Vuetify Team.