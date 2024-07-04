const { User } = require('../models');

const userData =
[
  {
    "name": "Zee",
    "email": "zee@gmail.com",
    "password": "thepassword123"
  },

]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;