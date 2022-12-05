# JWT-Auth

## Introduction

This is an API written in NodeJS to test the JSON Web Token (JWT) feature which is used almost everywhere on web. The project is simple one page website where user can login and will recieve a JWT using which he can get data. No DB is used in this project all the data returned is just a random number.

## Requirements

Firstly, you need to install NodeJS. After that, following packages are required :

- Express
- Dotenv
- Express-Async-Errors
- Http-status-codes
- Jsonwebtoken
- Nodemon

You would need to add a secret key in your .env file. This secret key is used for signing a JWT and should be kept a secret. Add your secret key to your .env file in a variable `JWT_SECRET`

## Installation

Clone the repository

```
git clone https://github.com/Sam-t123/jwt-auth.git
```

Install NPM packages

```
npm install
```

Run the code using

```
npm start
```
