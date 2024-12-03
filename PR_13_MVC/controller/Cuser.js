const User = require("../model/User");
// model을 User에 담아서 파일경로를 이용해서 불러오기
// ..은 부모 파일을 일걷는다.
// .은 자신이 속해있는 파일

// GET요청이고, routes에서 사용 할 수 있도록 exports로 내보내준다.
exports.main = (req, res) => {
  res.render("index.ejs");
};

// post '/login'
// post 요청으로 해줬기 때문에 body를 봐야함
exports.login = (req, res) => {
  // console.log(req.body);
  // { userId: 'asdasd', userPw: 'asdf' } 이렇게 나옴

  // console.log("model에있는 진짜 data", User.getUserInfo()); // model의 data는 User안에 getUserInfo 라는 함수에 있음.
  // { realId: 'banana', realPw: '1234' }
  // model에서 주고있는 data와 client에서 주고있는 data가 일치하는지 확인 해야한다.
  // controller에서 해야하는 일

  // 객체 구조 분해 추가 : 함수를 불러줄때 너무 기니까 짧게 지정해준다.
  const { realId, realPw } = User.getUserInfo(); // { realId: 'banana', realPw: '1234' }
  // console.log("---------------");
  // console.log(realId, realPw);
  const { userId, userPw } = req.body;
  if (realId === userId && realPw === userPw) {
    // if문을 통해서 들어온 data랑 database에 있던 data와 일치하는지를 봐주면 된다.
    res.send({ userInfo: req.body, isSuccess: true });
    // client에게 userInfo라는 공간에req.body를 담아서 보내줄 것이다. isSucess : true : 성공 했는지 확인.
  } else {
    res.send({ isSuccess: false });
    // 만약 다르다면 false를 내보낸다.
  }

  // index.ejs에서 response.data로 찍힘
};

// --------------- 실습 2
// post '/login2' ----이 주소로 post요청이 들어오면 login2를 실행시켜 주세요
exports.login2 = (req, res) => {
  console.log(User.user);
  /* 
  User.user :
  apple//1234//사과사과
  banana//4321//바나나나나
  cocoa//qwer1234//미떼
  한명의user가 아니고 여러명의 user 이기때문에 배열형식 안에 객체형태로 바꿔 주면 됨.*/
  const users = []; // 만들어준 빈 객체에 [{realId,realPw,name}] : 배열안의 객체형태로 data들이 들어옴. ....1
  const userIds = []; // ["apple","banana","cocoa"] .....2
  const userData = User.user.split("\n");
  // split : 어떤것을 기준으로 문자열을 배열로 바꿔줌.
  // '\n'은 '엔터'의 뜻 : 엔터를 기준으로 배열을 만들어라.

  userData.forEach((user) => {
    // 객체로 바꿔주는 것은 for문을 돌려줌.
    // user='apple//1234//사과사과'
    const userInfoArr = user.split("//"); //[apple, 1234, 사과사과]
    const userObj = {
      realId: userInfoArr[0],
      realPw: userInfoArr[1],
      name: userInfoArr[2],
    };

    users.push(userObj); // userObj를 users배열에 집어넣음.
    userIds.push(userInfoArr[0]); // userID만 필요하므로 userInfoArr[0]을 넣어줌
  });

  // console.log(userData); //  배열 안에 3개의 data가 있는 것까지 만들어줌.
  console.log("users", users);
  console.log("userIds", userIds);
  // ----------------------data를 원하는 형태로 바꿔줌--------------------------- //

  // ----------------------요청 정보를 바탕으로 회원이 맞는지를 확인해주는 작업-----------------------------//
  // 실습문제 1과 같이 for문으로 하지않고, 들어오는 data에따라 배열안에 있는지 없는지를 확인해서 true, false반환.
  const idx = userIds.indexOf(req.body.userId);
  // userIds는 배열이고, req.body.userId는 입력하는 data이고,
  // indexOf는 몇번째 배열에 있는지 숫자로 반환시켜줌. ( 있으면 양수로 없으면 음수로 반환 )
  // idx는 숫자를 반환 : userId라는 배열의 index번호를 반환
  // idx >=0 이라면 userIds에 있는 회원이고, idx가 음수라면 userIds에 없는 회원.

  if (idx >= 0) {
    console.log("아이디가 있는 회원입니다.");
  } else {
    console.log("아이디가 없는 회원입니다.");
  }
  res.send("response");
};
// 위에 실습 1에서는 getUserInfo()라는 함수를 지정해줘서 호출(괄호)을 해줬는데
// 실습 2는 user라고만 지정해놔서 호출을 따로 할 필요는 없다.
// 다 적었으면 routes로 이동해서 요청 써주기
