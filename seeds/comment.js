const { Comment } = require('../models');

const commentData = [
    {
        content: "Yalla!",
        author: 2,
        id: 1,
        
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;