const App = require("./data");

const getUserById = (id, cb) => {
  const user = App.users.find((user) => user.id === id);
  cb(user);
};

const getPostsForUser = (userId, cb) => {
  const posts = App.posts.filter((post) => post.createdBy === userId);
  cb(posts);
};

module.exports = { getUserById, getPostsForUser };
