# parse-server rest-api
API Documentation for parse-server rest-api.

## Requirements
  * mongoDB (https://www.mongodb.com/try/download/community) 
  * node.js (https://nodejs.org/en/)
  * postman (https://www.postman.com/downloads/)

## Installation 
  - Clone the repository

``` 
 $ npm install
```

## Quick Start 
Follow these steps given bellow 

Run Command: 

```
  $ node app.js
```

## API DOCUMENTATION

rest api for parse-server is automatically created.

Request Format:

In headers, you must include: 

Headers

X-Parse-Application-Id: parse-rest-api  
Content-Type: application/json

## creating objects 

  - POST

  - /parse/classes/rest

Body

create any object according to your wish. Example:

name: Mukim

position: Front End Developer

company: Now Deliveries

here, rest is the name of the class. if confused, visit https://docs.parseplatform.org/rest/guide/


## Reading all objects

  - GET

  - /parse/classes/rest


## Reading one specific object 

  - GET

  - /parse/classes/rest/:id

example:

/parse/classes/rest/0dcFQ0IN8o


## Updating object 

  - PUT

  - /parse/classes/rest/:id

example:

/parse/classes/rest/0dcFQ0IN8o

Body

create or modify any object properties according to your wish. Example:

position: Senior Front End Developer

## Deleting an Object 

  - DELETE

  - /parse/classes/rest/:id

example:

/parse/classes/rest/0dcFQ0IN8o


## parse-dashboard

Manage the app through the parse-dashboard.

you can find the configuration file named parse-dashboard-config.json in the directory.

make sure you have parse-dashboard npm installed globally.

```
$ npm install -g parse-dashboard
```

Finally, run this command to the manage your application.

```
$ parse-dashboard --config .\parse-dashboard-config.json
```

