const Visitor = require("../model/Visitor");
// console.log(Visitor.getVisitors());

/* / GET */
exports.main = (req, res) => {
  res.render("index");
};

/* /visitors GET */
exports.getVisitors = (req, res) => {
  // [DB 연결전]
  // res.render("visitors", { data: Visitor.getVisitors() });
  // [DB 연결후]
  Visitor.getVisitors((result) => {
    // Visitor의 getVisitors에 콜백인자를 받아주는 함수를 열어준다.
    // result = model(Visitor)에서 콜백인자로 넘겨준 rows.
    console.log("전체목록 Cvisitor.js", result);
    res.render("visitors", { data: result });
  });
};

/*  /visitor/:id GET */
exports.getVisitor = (req, res) => {
  // console.log(req.params) // { id: '1 }
  // console.log(req.params.id) // '2
  Visitor.getVisitor(req.params.id, (result) => {
    // rows를 result로 받아줌,, 이름은 뭐든 상관 없음
    console.log("한 개의 데이터 Cvisitor.js", result);
    res.send(result); // cb내부에서 보내줘야함
    // model에서 배열형태인 row에서 0번만 넘어왔기때문에 객체로 나타나짐
    // 여기까지 설정 한 뒤 routes가서 경로 설정
  });
};

/*  /visitor POST, 등록*/
exports.postVisitor = (req, res) => {
  console.log(req.body);
  Visitor.postVisitor(req.body, (result) => {
    // 첫번째인자로 data로 받아줬으니  data에 req.body를 넘겨줌
    console.log("Cvisitor.js", result);
    res.send({ id: result, comment: req.body.comment, name: req.body.name });
    // column에 있는 정보를 다 응답으로 보낸다고 생각하면 됨.
  });
};
/*  /visitor  DELETE, 삭제*/
exports.deleteVisitor = (req, res) => {
  console.log(req.body); // { id : '3' }
  console.log(req.body.id); // '3'
  Visitor.deleteVisitor(req.body.id, () => {
    res.send(req.body.id + "번 id 삭제 완료");
  });
};

/*  /visitor  PATCH, 수정*/
exports.patchVisitor = (req, res) => {
  console.log(req.body);
  // name, comment, id를 다 넘겨 줘야 하기 때문에
  // post처럼 body를 바탕으로 수정을 하게됨.
  Visitor.patchVisitor(req.body, () => {
    // 따로 cb에 인자를 받고 있지 않기 때문에 공백으로 둬도 됨
    res.send("수정 완료");
  });
};
