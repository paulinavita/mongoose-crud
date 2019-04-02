# Mongoose-crud

## List of Books routes : ##
Route | HTTP |  Body | Description
----- | ----- | ----- | -----
/books/?author='author'&title='title' | GET  | none | Get all list of books or by querying  based on Author or Title
/books/:id | GET | none | Get one book by id
/books/ | POST | `isbn:String` (required), `title:String` (required), `author:String`(required), `category:String`(required), `stock:Number`(required) | Create new book to database
/books/:id | PUT | none | Full update on book details
/books/:id| DELETE | none | Delete book by ID
/books/:id| PATCH | none | Update one field on specific book by ID

## List of Members routes : ##
Route | HTTP |  Body | Description
----- | ----- | ----- | -----
/members/ | GET  | none | Get all list of members
/members/:id | GET | none | Get one member by id
/members/ | POST | `name:String` (required), `address:String` (required), `zipcode:String`(required), `email:String`(required), `phone:String`(required) | Create new member to database
/members/:id | PUT | none | Full update on member details
/members/:id| DELETE | none | Delete member by ID
/members/:id| PATCH | none | Update one field on specific member by ID

## List of Transactions routes : ##
Route | HTTP |  Body | Description
----- | ----- | ----- | -----
/transactions/ | GET  | none | Get all list of transactions
/transactions/:id | GET | none | Get one transaction by id
/transactions/ | POST | `name:String` (required), `address:String` (required), `zipcode:String`(required), `email:String`(required), `phone:String`(required) | Create new transaction to database
/transactions/:id | PUT | none | Full update on transaction details
/transactions/:id| DELETE | none | Delete transaction by ID
/transactions/:id| PATCH | none | Update one field on specific transaction by ID

To start the server do
```
npm init
npm install
npm run start
```

## Usage
Open the running server on [http://localhost:4000](http://localhost:4000) 
