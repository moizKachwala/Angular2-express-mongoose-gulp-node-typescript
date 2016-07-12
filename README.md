# Angular2 with Gulp, Typescript, Express Server and MongoDB (Repository Pattern)

##Introduction

Basic Angular seed application created with Quick start application given on angular website. It uses Express server along with Mongo DB support (Mongoose) via a wrapper of Repository Pattern as Business layer.
It also uses Gulp for copying our resources.

## Steps to Run
```sh
    npm install
    npm build
    npm start
```

## Features (Angular2, Express, Gulp, MongoDB, Node)

1. Angular 2 Quick Start application (Tours of Hero) from https://angular.io/docs/ts/latest/quickstart.html
2. Added support for Gulp so that js files are moved out of the app folder.
3. It will create a build folder where it will place all the js files.
4. Gulp will monitor for the changes via help of watcher.
5. Created folder structure for easy access of components, services and models.
6. Applied tslint for avoiding any typos.
7. Implemented best practices recomended on the Angular 2 website.
8. Implemented Express Server to Host API's
9. Added MongoDB support to communicate our Heroes data to Database
10.Implemented Repository Pattern to communicate with Mongoose.

## Dependencies

1. Angular 2
2. TypeScript
3. Gulp
4. ExpressJS
5. NodeJS
6. Nodemon
7. TsLint
8. MongoDB


## UpComming

Presenlty mongoDB has been added but still need to wire up the heroes services to the DB.


