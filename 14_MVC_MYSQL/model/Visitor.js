const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "sesac",
});

// 1. 전체 목록 조회
exports.getVisitors = (cb) => {
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
    if (err) {
      throw err;
    }

    console.log("visitor 테이블 전체 조회", rows);
    // 배열 형태로 들어오게 됨

    cb(rows);
  });
};

// 2. 특정 데이터 조회
exports.getVisitor = (id, cb) => {
  conn.query(`SELECT * FROM visitor WHERE id=${id}`, (err, rows) => {
    // 결과는 rows로 담김
    if (err) {
      throw err;
    }
    console.log("visitor 테이블 한 개 조회", rows);
    cb(rows[0]);
  });
};

// 3. 데이터 등록
// visitor 테이블에 데이터 삽입
exports.postVisitor = (data, cb) => {
  // data : req.body, comment와 name정보가 있는 객체 형태로 받아줌
  conn.query(
    `INSERT INTO visitor VALUE(null, '${data.name}', '${data.comment}')`,
    // 문자열은 따옴표 안에 둘러싸여 있어야 한다.
    (err, rows) => {
      if (err) throw err;
      console.log("model post", rows);
      cb(rows.insertId);
    }
  );
};

// 4. 데이터 삭제
exports.deleteVisitor = (id, cb) => {
  conn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) throw err;
    console.log("모델 Visitor.js 특정 데이터 삭제", rows);
    cb();
  });
};

// 데이터 수정
exports.patchVisitor = (data, cb) => {
  console.log("model data", data);
  // { id, name, comment}
  conn.query(
    `UPDATE visitor SET name='${data.name}',comment='${data.comment}' WHERE id=${data.id}`,
    (err, rows) => {
      if (err) throw err;
      console.log("Visitor.js 수정", rows);
      cb();
    }
  );
};
