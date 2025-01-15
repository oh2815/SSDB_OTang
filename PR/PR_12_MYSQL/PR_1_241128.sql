CREATE DATABASE practice DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
DROP TABLE member; 
USE practice;

SHOW TABLES;

CREATE TABLE member(
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL, 
    age int NULL,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50) NULL,
    promotion VARCHAR(2) NULL DEFAULT 'x'
);
SHOW TABLES;
DESC member;

--------------------------------------------------------------------------------
ALTER TABLE member MODIFY id VARCHAR(10);
ALTER TABLE member  DROP COLUMN age;
ALTER TABLE member ADD interest VARCHAR(100) NULL;
--------------------------------------------------------------------------------
DESC USER;

CREATE TABLE user(
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM( 'F', 'M', '' ) DEFAULT'',
    birthday DATE NOT NULL,
    age int(3) NOT NULL DEFAULT 0
);
---------------------------------------------------------------------------------------------
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

SELECT * FROM user;

---------------------------------------------------------------------------------------------
SELECT * FROM user ORDER BY birthday ASC;
SELECT * FROM user WHERE gender='M' ORDER BY name DESC;
SELECT id,name FROM user WHERE birthday LIKE '199%';
SELECT * FROM user WHERE birthday LIKE '_____06___' ORDER BY birthday ASC;
SELECT * FROM user WHERE gender='M' AND birthday LIKE '197%';
SELECT * FROM user ORDER BY age DESC LIMIT 3;
SELECT * FROM user WHERE age BETWEEN 25 AND 50;
 UPDATE user SET pw='12345678' WHERE id='hong1234';
 DELETE FROM user WHERE id='jungkrat';