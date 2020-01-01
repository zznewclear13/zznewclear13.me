# zznewclear13.me
my personal website (under construction)

## System Preparation
To use this project, you will need [NodeJS](https://nodejs.org) installed on your machine.

## Local Installation
Inside the directory, run
```
$ npm install
```

## Usage
### 1. Development mode
This will start the environment with file watching, browser synchronisation, auto-rebuild, js compilation, sass compilation, css injection, etc.
```
$ npm run start
```
Note that sometimes changing Pug include file or MD file may not refresh the browser.

### 2. Production mode
This will build your website in your `./dist` folder. You may change webpack configure to make your ideal file structure.
```
$ npm run build
