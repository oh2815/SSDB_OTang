const mysql = require("mysql"); // mysql 연결하기
const conn = mysql.createConnection({
  // mysql이라는 변수안에 createconnection 이라는 함수 사용 가능.
  // 선언 함수이름이 너무 기니까 conn이라는 변수에 담아서 사용
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "sesac",
});

// 1. 전체 목록 조회
exports.getVisitors = (cb) => {
  /* - getVisitors라는 함수는 controller에서 호출해서 사용 할것인데, 
       호출 할 때 콜백함수를 넘겨줄 것이다. 콜백함수와 관련된 매개변수 cb를 사용 */
  // [DB 연결 전]
  /* return [
    { id: 1, name: "홍길동", comment: "내가 왔다." },
    { id: 2, name: "이찬혁", comment: "으라차차" },
  ]; */

  conn.connect((err) => {
    if (err) {
      console.error("데이터베이스 연결 실패:", err);
      return;
    }
    console.log("데이터베이스에 성공적으로 연결되었습니다.");
  });

  // [DB 연결 후]
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    /*  - conn이라는 정보에 query 라는 함수를 사용할 것이다.
      - query함수에는 ``(query문)이 들어가고, 콜백 함수가 들어간다. 
      - 콜백함수에는 err 와 rows라는 두 인자를 갖는다. rows : data를 의미   */
    if (err) {
      throw err; // 만약 err가 있으면 err를 만들어줘라.
    }

    console.log("visitor 테이블 전체 조회", rows);
    // 배열 형태로 들어오게 됨 - query문을 담은 rows

    cb(rows); // controller에 들어갈 cb에 rows의 정보를 넘겨줌
  });
};

// 2. 특정 데이터 조회
exports.getVisitor = (id, cb) => {
  // 한개만 조회 할 거라서 visitor  ----- id 값으로 조회를 할 것이기 때문에 id를 인자로 받아줌
  conn.query(`SELECT * FROM visitor WHERE id=${id}`, (err, rows) => {
    // 결과는 rows로 담김
    if (err) {
      throw err;
    }
    console.log("visitor 테이블 한 개 조회", rows);
    // rows는 배열 형태이지만 밑에는 controller에 0번만 줬기 때문에 객체로 나옴
    cb(rows[0]);
    // 컨트롤러에 주는 함수 : 쿼리문을 다 찾고 실행될 함수
    // 무조건 배열 형태이긴한데 무조건 하나만 찾아오거나 못찾아오거나 둘 중 하나이기 때문에
    // 데이터를 좀 더 구체적으로 보내주기 위해 [0]을 찍어줌 ---- 객체 형태로 넘어감
  });
};

// 3. 데이터 등록
// visitor 테이블에 데이터 삽입
exports.postVisitor = (data, cb) => {
  // data : req.body : comment와 name정보가 있는 객체 형태로 받아줌
  // client에서 입력한 commen, name의 정보를 data에다가 담아줌
  conn.query(
    `INSERT INTO visitor VALUE(null, '${data.name}', '${data.comment}')`,
    // id, name comment 순서대로 넣어야함
    // id는 AutoIncrement를 주어서 자동으로 숫자가 올라가기때문에 null줘야함
    // 문자열은 따옴표 안에 둘러싸여 있어야 한다.
    (err, rows) => {
      if (err) throw err;
      console.log("model post", rows);
      cb(rows.insertId); // cb은 제일 마지막에 있는게 제일 좋음
      /* model post OkPacket {
         fieldCount: 0,
         affectedRows: 1,
         insertId: 4, 현재 넣어진 id
         serverStatus: 2,
         warningCount: 0,
         message: '',
         protocol41: true,
         changedRows: 0 } 
         이 insertID값을 controller에 전달 해 줌*/
    }
  );
};

// 4. 데이터 삭제
exports.deleteVisitor = (id, cb) => {
  conn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
    //  where안적으면 visitor data다 삭제됨. delete시 where조건 필수
    // id기준으로 삭제를 해줘야함
    // req.body.id가 '3'으로 객체 형태가 아닌 값으로 되어있으므로,
    // '.'으로 접근 안하고 바로 id로 접근해도 된다.
    if (err) throw err;
    console.log("모델 Visitor.js 특정 데이터 삭제", rows);
    cb();
    // deleteVisitor 함수를 하고나서 일어날 일들을 controller에서
    // 직접 작성을 해줄 예정이므로 비워둬도 됨
  });
};

// 데이터 수정
exports.patchVisitor = (data, cb) => {
  // id, name, comment를 받으므로 이렇게 적어도 상관 없지만
  // 한번에 받아주는 data에 객체 형태로 받아줌.
  console.log("model data", data);
  // { id, name, comment}
  conn.query(
    `UPDATE visitor SET name='${data.name}',comment='${data.comment}' WHERE id=${data.id}`,
    // name과 comment는 바꿔줄 data이므로 불러와햐 하는데,
    // id값을 기준으로 바꿀data를 찾아올 예정이므로 where에 id를 걸어준다.
    // SET에는 바꾸고 싶은 내용(name, comment), WHERE에는 바꿔줄 기준을 적으면 됨.(id)
    (err, rows) => {
      if (err) throw err;
      console.log("Visitor.js 수정", rows);
      cb(); // 수정하고나서의 data는 따로 넘겨주지 않을 에정이라 공백으로 둔다.
    }
  );
};
