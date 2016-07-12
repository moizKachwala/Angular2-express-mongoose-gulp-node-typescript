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

## Directory Structure

```
angular2-MEAN
      |-- node_modules
      |-- client
           |-- app
                |-- Components
                        |-- dashboard
                                |-- dashboard.component.css
                                |-- dashboard.component.html
                                |-- dashboard.component.ts
						|-- heroDetail
								|-- hero-detail.component.css
								|-- hero-detail.component.html
								|-- hero-detail.component.ts
						|-- heroes
								|-- heroes.component.css
								|-- heroes.component.html
								|-- heroes.component.ts
                |-- models
						|-- hero.ts
				|-- services
						|-- hero.service.ts
				|-- app.component.css
				|-- app.component.ts
				|-- app.html
				|-- main.ts
           |-- typings
           |-- index.html
           |-- tsconfig.json
           |-- typings.json
      |-- server
		   |-- src
				|-- app
					 |-- business
							|-- common
								  |-- Read.ts
								  |-- Write.ts
							|-- interfaces
								  |-- HeroBusiness.ts
							|-- BaseBusiness.ts
							|-- HeroBusiness.ts
					 |-- dataAccess
							|-- Schemas
								   |-- HeroSchema.ts
							|-- DataAcccess.ts
					 |-- model
						   |-- interfaces
									|-- HeroModel.ts
						   |-- HeroModel.ts
					 |-- repository
							|-- interfaces
									|-- Read.ts
									|-- Write.ts
							|-- BaseRepository.ts
							|-- HeroRepository.ts
				|-- config
					   |-- constants
								|-- constants.ts
					   |-- routes
							  |-- HeroRoutes.ts
							  |-- Routes.ts
				|-- controller
						|-- interfaces
								|-- ReadController.ts
								|-- WriteController.ts
						|-- BaseController.ts
						|-- HeroController.ts
				|-- server.ts
           |-- typings
           |-- tsconfig.json
           |-- typings.json
      gulpfile.ts
      package.json
      tsconfig.json
      tslint.json
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


