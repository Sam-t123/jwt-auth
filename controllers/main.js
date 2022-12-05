// Check username and password in post(login) request
// if exist create new jwt
// send back to front end

const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');

const login = async (req, res) => {
  const { username, password } = req.body;
  // mongo
  // Joi
  // check in controller
  if (!username || !password) {
    throw new BadRequestError('Please provide email and password');
  }

  // dummy id since we are not connected to DB
  const id = new Date().getDate();
  // try to keep payload small
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET);
  res.status(StatusCodes.OK).json({ msg: 'user created', token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(StatusCodes.OK).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
