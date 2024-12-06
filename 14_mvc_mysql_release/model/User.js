// TODO: DB(mysql) 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "sesac",
});
// TODO: 모델 코드
exports.postSignup = (data, cb) => {
  console.log(data);
  // 사용자가 입력한 data

  conn.query(
    `INSERT INTO user VALUE(null, "${data.userId}", "${data.name}", "${data.userPw}")`,
    (err, rows) => {
      if (err) throw err;

      console.log("User data 등록", rows);
      cb(rows.insertId);
      // 새로 입력된 data를 Cuser에서 함수 호출할 때 전달.
    }
  );
};

exports.postSignin = (data, cb) => {
  conn.query(
    `SELECT * FROM user WHERE userid='${data.loginId}'`,
    (err, rows) => {
      if (err) throw err;

      console.log("입력한 userId 조회", rows);
      //  [ RowDataPacket { id: 2, userid: 'test', name: 'test', pw: '1234' } ]

      cb(rows[0].userid);
      // test
    }
  );
};
