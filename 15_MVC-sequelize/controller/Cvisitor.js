// const Visitor = require("../model/Visitor");
const models = require("../models/index");
const { errorlogs } = require("../utils/common");
// console.log(Visitor.getVisitors());

/* / GET */
exports.main = (req, res) => {
  res.render("index");
};

/* /visitors GET */
exports.getVisitors = (req, res) => {
  // [DB 연결전]
  // res.render("visitors", { data: Visitor.getVisitors() });

  // [DB 연결후, Sequelize 전]
  // Visitor.getVisitors((result) => {
  //   console.log("전체목록 Cvisitor.js", result);
  //   res.render("visitors", { data: result });
  // });

  // [Sequelize 이후]
  // `SELECT * FROM visitor`
  models.Visitor.findAll()
    .then((result) => {
      console.log("findAll>>", result);
      // findAll의 결과는 배열
      // res.send(result);
      res.render("visitors", { data: result });
    })
    .catch((err) => {
      console.log("getVisitors Controller Err", err);
      res.status(500).send("server err!");
    });
};

/* /visitor/:id GET*/
exports.getVisitor = async (req, res) => {
  console.log(req.params); // {id:'1'}
  console.log(req.params.id); // '2'
  // [Sequelize 이전]
  // Visitor.getVisitor(req.params.id, (result) => {
  //   console.log("한 개의 데이터 Cvisitor.js", result);
  //   res.send(result);
  // });

  // [Sequelize 이후]
  // `SELECT * FROM visitor WHERE id=${req.params.id}`
  try {
    const result = await models.Visitor.findOne({
      where: {
        id: req.params.id,
      },
    });
    console.log("findOne >> ", result);
    res.send(result);
    /* 
    visitor {
  dataValues: { id: 3, name: 'nickname', comment: '수정한 댓글입니다.1' },
  _previousDataValues: { id: 3, name: 'nickname', comment: '수정한 댓글 입니다.1' },
  uniqno: 1,
  _changed: Set(0) {},
  _options: {
    isNewRecord: false,
    _schema: null,
    _schemaDelimiter: '',
    raw: true,
    attributes: [ 'id', 'name', 'comment' ]
  },
  isNewRecord
    */
  } catch (err) {
    console.log("err", err);
    res.status(500).send("Internal Server Error");
  }
};

/* /visitor POST, 등록*/
// INSERT INTO >> create()
exports.postVisitor = (req, res) => {
  console.log("req.body", req.body);

  // [sequelize 이전]
  // Visitor.postVisitor(req.body, (result) => {
  //   console.log("Cvisitor.js", result);
  //   res.send({
  //     id: result,
  //     comment: req.body.comment,
  //     name: req.body.name,
  //   });
  // });

  // [sequelize 이후]
  // `INSERT INTO visitor VALUE(null, "${data.name}", "${data.comment}")`
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  })
    .then((result) => {
      console.log(result);
      /* 
      visitor {
  dataValues: { id: 4, name: 'allie', comment: '짱!!!' },
  _previousDataValues: { name: 'allie', comment: '짱!!!', id: 4 },
  uniqno: 1,
  _changed: Set(0) {},
  _options: {
    isNewRecord: true,
    _schema: null,
    _schemaDelimiter: '',
    attributes: undefined,
    include: undefined,
    raw: undefined,
    silent: undefined
  },
  isNewRecord: false
}
      */
      res.send(result);
    })
    .catch((err) => {
      errorlogs(res, err);
    });
};

/* /visitor DELETE, 삭제 */
// delete from ~~ >> destroy()
exports.deleteVisitor = async (req, res) => {
  console.log(req.body); // { id: '3' }
  console.log(req.body.id); // '3'
  // [sequelize 이전]
  // Visitor.deleteVisitor(req.body.id, () => {
  //   res.send(req.body.id + "번 id 삭제완료");
  // });

  // [sequelize 이후]
  // `DELETE FROM visitor WHERE id=${req.body.id}`
  try {
    const result = await models.Visitor.destroy({
      where: { id: req.body.id },
    });
    console.log(result);
    // 1(삭제 성공), 0(삭제 실패-없는 데이터를 삭제하려고 할 때)
    // true   , false
    if (Boolean(result)) {
      // Number to Boolean
      res.send(req.body.id + "번 id 삭제완료");
    } else {
      res.send("잘못된 접근입니다!!");
    }
  } catch (err) {
    errorlogs(res, err);
  }
};

/* /visitor PATCH, 수정 */
// update  SET ~~~ >> update
exports.patchVisitor = async (req, res) => {
  console.log(req.body);
  // [sequelize 전]
  // Visitor.patchVisitor(req.body, () => {
  //   res.send("수정 완료");
  // });

  // [sequelize 후]
  // `UPDATE visitor
  //   SET name="${req.body.name}", comment="${req.body.comment}"
  //   WHERE id=${req.body.id}`
  try {
    const [result] = await models.Visitor.update(
      {
        name: req.body.name,
        comment: req.body.comment,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    console.log(result); // [1], [0]
    // const [number] = result;
    // console.log(number);

    if (Boolean(result)) {
      res.send("수정 완료");
    } else {
      res.send("잘못된 접근입니다.");
    }
  } catch (err) {
    // errorlogs(
    //   res,
    //   err,
    //   "patch controller 내부",
    //   "수정 에러가 났어요",
    //   500,
    // );
    errorlogs(res, err, "patch controller 내부");
  }
};
