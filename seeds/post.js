const { Post } = require('../models');

const postData = [
    {
        title: "Day 1",
        content: "Alright now",
        user_id: 1
    },

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;