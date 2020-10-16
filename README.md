# shop (Not yet complete)

This project was generated with Angular for frontend and Express for backend. The database used is MongoDB

## Prerequisites
Nodejs:https://nodejs.org/en/download/<br>
Angular:npm install -g @angular/cli<br>
Express:
- Install Express in the myapp directory and save it in the dependencies list: npm install express --save
- To install Express temporarily and not add it to the dependencies list: npm install express --no-save

## test angular

testing angular independantly: ng serve 

create production for server: ng build

angular will be hosted at port 4200;

## test express

server start: npm start

express will be hosted at port 3000;

## product final goal

Provide user a clean,friendly and fully responsive shopping websites that promote products online on WebMobile and Web. Final product will give a template for user to use to create their own personal shopping website. The website will be easy setup and use by following documentations provided later. User will be able to easily do CRUD operations on products and have their own user database. The connections between the backend connections will be secured and reliable.

## Documentation
Software used: Visual Studio, Postman, MongodbCompass <br>

Framework used: (Mean Stack) Mongodb, Express, Angular, Nodejs

Languages: Html/Css/Typescript/Javascript

Page template: Most are taken from bootstrap with modifications to it.

Images: all image sources comes from placehold.it for easier implementation. 

## file locations
All backend files are in the backend folder.<br>
Frontend source codes are in frontend/src/app directory

## just where things are

front/end/src/app/models contains all the object models used in the project <br>

front/end/src/app/services contains all the services used in the project<br> 
In product.service.ts, it includes all the data that would output to the website. This is usually coming from another api but for sake of implementation I just created manually.<br> 

front/end/src/app/app-routing includes all the routing<br>


## functions:

- Establish brand identity and hot items on home page

- Providing corporate information and contact information page.

- Allows users to sign up and log in with an account through express and mongoDB

- Able to do CRUD operations on products and user accounts

- Components will be all broken down for easier modifications

- Password or important data will be using salts as a safeguard method

- Login, Sign up, update for user database

## What the product won't include

- third party check out API, the website will end before checkout form sections

- theme customization, user will need to edit the actual html and css file in order to change the view









