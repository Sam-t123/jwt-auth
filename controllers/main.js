// Check username and password in post(login) request
// if exist create new jwt
// send back to front end

const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

const login = async (req, res) => {
  const { username, password } = req.body;
  // mongo
  // Joi
  // check in controller
  if (!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400);
  }

  // dummy id since we are not connected to DB
  const id = new Date().getDate();
  // try to keep payload small
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET);

  console.log(username, password);
  res.status(200).json({ msg: 'user created', token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `Your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
