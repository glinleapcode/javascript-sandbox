const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

const promise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  setTimeout(() => {
    if (success) {
      const post = { title: "Post Three", body: "This is post three" };
      resolve(post);
    } else {
      reject("Something went wrong");
    }
  }, 2000);
});

promise
  .then((post) => {
    posts.push(post);
    getPosts();
  })
  .catch((err) => {
    console.log(err);
  });

// function createPost(post, cb) {
//   setTimeout(() => {
//     posts.push(post);
//     cb();
//   }, 2000);
// }

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 1000);
}

// createPost({ title: 'Post Three', body: 'This is post' }, getPosts);
