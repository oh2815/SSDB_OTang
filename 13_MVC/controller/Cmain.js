const Comment = require("../model/Comment");
// model로 분리해준 data를 require로 끌어옴

// GET요청
exports.main = (req, res) => {
  res.render("index");
};
// 이렇게 만들어진 함수는 원래 있던 자리로 돌아간다. routes의 (req, res)자리

// GET /comments
exports.comments = (req, res) => {
  //    --console.log(comments);
  // 지금 이 값은 app.before에서보면 const로 지정을 해준 것이 있어서 데이터 출력이 가능했는데
  // 지금은 없으니까 나오지 않음 -- 이걸 model에서 가지고와서 바꿔주면 나올 수 있음.
  console.log(Comment.commentInfos());
  // comment였던 것을 model에서 이미 지정해 놓은 Comment.commentInfo()로 전부 바꿔준다.

  res.render("comments", { commentInfos: Comment.commentInfos() });
};
// GET /comment/:id
exports.comment = (req, res) => {
  const comments = Comment.commentInfos();
  // 근데 너무 많이 바꾸기 좀 그러면 위에다가 하나 지정해주고 바꿔주면 됨.
  // app.js에서는 전역으로 선언을 해줘도 가능 했는데 지금은 요청마다 다 분리를 해놨기 때문에
  // 적용이 안될 수도 있기에 함수 안으로 선언 해줘야 됨
  console.log(req.params);

  const commentId = req.params.id;

  console.log("commentId:", commentId);

  console.log(comments[commentId - 1]);

  if (commentId < 1 || commentId > comments.length) {
    res.render("404");
  }

  if (isNaN(commentId)) {
    res.render("404");
  }

  res.render("comment", { commentInfo: comments[commentId - 1] });
};
