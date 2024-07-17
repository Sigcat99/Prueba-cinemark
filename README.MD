
# 🤖 Automatizacion 

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)


## 📋 Tabla de Contenidos
- [Sobre el Proyecto](#sobre-el-proyecto)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Instalación](#instalación)


## 📄 Sobre el Proyecto
Este proyecto es un autoomatizacion web y Móvil basada en las siguientes 

### 🖥️ Web :

Para el desarrollo de esta automatizacion se implemento con el Framework 
 ***playwright*** 🎭.

Dela mano de tecnologias como :

- 🟢 ***NODE JS***
- 🔷 ***TYPESCRIPT***
- 📊 ***ALLURE***
- 🏗️ **JENKINS**
- 🌿 **GIT**

## 📁 Estructura de Carpetas
```
├── allure-results/📁
├──  node_modules/📁
├── playwright-report/📁
├── src/📁
│ ├── page/📁
│ │ ├── CinemarkChairPage.ts📄
│ │ ├── CinemarkFoodpage.ts📄
│ │ ├── CinemarkHallPage.ts📄
│ │ ├── CinemarkLoginPage.ts📄
│ │ ├── CinemarkMoviePage.ts📄
│ │ ├── CinemarkQrPage.ts📄
│ │ ├── CinemarkResumeBuyPage.ts📄
│ │ ├── CinemarPayInfoPage.ts📄
│ ├── utils/📁
│ │ └── Fecha.ts📄
│ ├── target/ site/ serenity/📁
├── test-results/📁
├── tests/📁
│ ├── cinemark_buy_ticket.spec.ts
├── tests-examples/📁
├── .gitignore📄
├── jenkinsfile📄
├── package-lock.json📄
├── package.json📄
└── playwright.config.ts📄

```
## 🛠️ Ejecucion

Los comandos para la ejecucion son los siguientes :

```bash
git clone 
cd proyecto
npm ci 
npm install  playwright 
npx playwright test   tests/cinemark_buy_ticket.spec.ts --headed --project=Chrome



1. Clona el repositorio
2. Instala las dependencias con `npm ci`
3  para que descarge los drivers

```

### 📱 Móvil
Para el desarrollo de esta automatizacion se implemento con el  
 ***Selenium***  🌐 .

Dela mano de tecnologias como :

- ☕  ***JAVA***
- 🪶 ***MEAVEN***
- 📱 ***APPIUM***
- 🤖 **ANDROID STUDIO EMULADOR**
- 🌿 **GIT**



## 📁 Estructura de Carpetas


```
app/📁
├── .idea/
├── src/📁
│   ├── main/📁
│   │   ├── java/📁
│   │   │   └── org/📁
│   │   │       └── app/📁
│   │   │           ├── page/📁
│   │   │           │   ├── BasePage📄
│   │   │           │   └── WidgetPage📄
│   │   │           ├── utils/📁
│   │   │           │   ├── AppiumServer📄
│   │   │           │   └── Main📄
│   │   │           └── resources/📁
│   │   │               └── 2833.apk
│   ├── test/📁
│   │   ├── java/📁
│   │   │   └── WidgetTest📄
├── target/📁
├── .gitignore📄
├── pom.xml📄


```
## 🛠️ Ejecucion

Los comandos para la ejecucion son los siguientes :

```bash
git clone 
cd proyecto
npm install -g appium
appium
mvn install
mvn clean compile
mvn test

1. Clona el repositorio
2. Instalar Appium (globalmente)
3  para que descarge los drivers
4. Iniciar el servidor Appium
5. Instalar el proyecto en el repositorio local
6. Limpiar el proyecto y compilar
7. mvn test


```