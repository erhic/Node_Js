function getUsers(cb1) {
  //calling the users from api
  //preparing the data
  let users = [{ name: "Melan" }, { name: "Joyce" }];
  cb1(users);
}

function getPosts(users, cb2) {
  //calling the posts from api
  //pass user to get posts
  let posts = [{ title: "time is now" }, { title: "hello" }];
  cb2(posts);
}

console.log(".......line 1");

setTimeout(function () {
  getUsers(function (users) {
    setTimeout(function () {
      getPosts(users[0], function (posts) {});
    }, 0);
  });
}, 0);
