// TODO 1206: 컨트롤러 코드
// const User = require("../model/User"); // 이전 model 불러오는 중.. >> 주석
const models = require("../models/index"); // models/index.js 부르는 중
// models={sequelize, Sequelize, User}

/* TODO 1206 controller 코드 기존 모델사용 코드에서 아래 ORM 을 사용하는 코드로 변경 */
// models.User.create() >>> insert into >> {}
// models.User.findOne() >> select from >> {}
// models.User.findAll() >> select from >> []
// models.User.destroy() >> delete from >> 1,0
// models.User.update() >> update set >> [1],[0]

// GET /user
exports.main = (req, res) => {
  res.render("index");
};

// GET /user/signup
exports.get_signup = (req, res) => {
  res.render("signup");
};

// GET /user/signin
exports.get_signin = (req, res) => {
  res.render("signin");
};

/* MODEL에게 DB 정보 요청하는 부분, 여기부터  ORM 사용하도록 변경  */
// POST /user/signup
exports.post_signup = (req, res) => {
  console.log(req.body);
  // 바꾸기!!!

  // User.post_signup(req.body, () => {
  //   res.end();
  // });
  // [예시.. 밑에 있는 컨트롤러도 모두 ORM 사용하도록 변경하기]
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then(() => {
    res.end();
  });
};

// POST /user/signin
// 로그인 1. 로그인 가능한 계정인지 아닌지만 비교
exports.post_signin = (req, res) => {
  console.log("이건가", req.body); // { userid: ~ , pw: ~ }
  // User.post_signin(req.body, (result) => {
  //   console.log("Controller post_sign: ", result);
  //   // [ RowDataPacket { id: 'allie', name: 'allie', pw: '1234' } ]

  //   console.log(result.length);
  //   if (result.length > 0) {
  //     res.send(true);

  //     // 만약 ~ 님 환영합니다 등의 user 정보를 프론트에서 사용하고 싶다면?
  //     // res.send({isLogin:true, userInfo:result[0]});
  //   } else {
  //     res.send(false);
  //     // res.send({isLogin:false});
  //     /* 단, 프론트에서도 데이터 확인 방식을 변경
  //        (res.data를 바로 확인하는 것이 아닌 res.data.isLogin 확인) */
  //   }
  // });
  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    if (result) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

// POST /user/profile, 로그인 버튼 클릭시 요청되는 form 전송
// 로그인 2(로그인 성공시). 로그인 가능한 회원이라면,
// 회원 정보 수정 페이지 render 시켜주기
exports.post_profile = async (req, res) => {
  console.log(req.body); //{userid: ~}
  // User.post_profile(req.body.userid, (result) => {
  //   // post_signin에서 userid가 테이블에 있을 때만
  //   // /user/profile에 POST 요청을 보내기 때문에
  //   // userid가 넘어오는지 아닌지는 확인하지 않아도 됨

  //   // 로그인 성공; views/profile.ejs 렌더링
  //   res.render("profile", { data: result[0] });
  //   // post요청에도 render 가능
  //   // profile 페이지를 보는 것은 POST 요청으로만 가능하기 때문에
  //   // GET /user/profile으로는 페이지 확인이 불가능함
  // });
  models.User.findOne({
    where: {
      userid: req.body.userid,
    },
  }).then((result) => {
    res.render("profile", { data: result.dataValues });
  });
};

// POST /user/profile/edit
// 회원 정보 수정
exports.edit_profile = (req, res) => {
  console.log(req.body);
  // User.edit_profile(req.body, () => {
  //   // res.send('회원정보 수정 성공!');
  //   res.end(); // 데이터를 아무것도 보내지 않으면서 응답을 종료하기 위해서는 response.end() 메소드를 사용한다.
  // });
  models.User.update(
    {
      pw: req.body.pw,
      name: req.body.name,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    if (Boolean(result)) {
      res.send("완료");
    } else {
      res.send("잘못");
    }
  });
};

// POST /user/profile/delete
// 회원 탈퇴
exports.delete_profile = (req, res) => {
  console.log(req.body);
  // User.delete_profile(req.body.id, () => {
  //   res.end();
  // });
  models.User.destroy({
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    if (Boolean(result)) {
      res.send(req.body.id + "번 id 삭제 완료");
    } else {
      res.send("잘못된 접근입니다");
    }
  });
};
