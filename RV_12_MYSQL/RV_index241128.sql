show databases;
-- 데이터 베이스 생성
CREATE DATABASE mydatabase DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
-- 데이터 베이스 생성
CREATE DATABASE sesac CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
 
 -- utf8mb4 > utf 
 
 -- utf : 한글 및 영어,,
 -- utfmb4 : utf보다 훨 많은 문자열 사용가능(이모티콘, 특수문자, 다국어...)

-- 데이터 베이스 사용 선언
USE reviews;

-- 테이블 목록 확인
SHOW TABLES;

-- 데이터 베이스 삭제
DROP DATABASE mydatabase;

###################[정의어 : 테이블 관련 명령어]####################
/* 
CREATE TABLE 테이블이름(
    속성이름1 데이터타입 제약조건,
    속성이름2 데이터타입 제약조건
);
 */
--  제약조건
-- NOT NULL : null 허용 x
-- AUTO_INCREMENT: 자동 숫자 증가
-- PRIMARY KEY: 기본키 설정(중복 허용x, null 허용x)
-- DEFAULT: 기본 값 설정
-- UNIQUE: 중복 허용x, null 허용x, 한 테이블에 여러 개 설정 가능
-- 띄어쓰기를 기준으로 연달아 적으면 조건 적용이 된다.
 
 CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -- id: 속성이름, 데이터 타입: INT, NOT NULL로 주고 ~ 이 뒤로부터 쭉 제약조건
    -- 원래 여기에는 NOT NULL을 안써도 됨 : PK가 알아서 해주기떄문
    -- 하나의 column에 속성이 끝나면 ,를 해주고 넘어가면 됨
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- 테이블 목록 확인 : table만 보여줌
SHOW TABLES;

-- 테이블 구조 확인 : table 내부 확인
DESC products;

-- 테이블 삭제
-- DROP TABLE products;

-- 테이블 속성 수정
ALTER TABLE products ADD new_column VARCHAR(20);
-- products에다가 new_column이라는 column을 추가 데이터는 20바이트

-- varchar을 int로 수정
ALTER TABLE products MODIFY new_column INT;

-- 추가한 column삭제
ALTER TABLE products DROP new_column;


############ [여기부터 DML] #############
-- 데이터 조작어
-- 데이터 CRUD 를 위해 사용하는 SQL 문

CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);
-- Create >> INSERT INTO
-- AUTO_INCREMENT 를 넣어놔서 직접 데이터를 안넣어줘도 알아서 들어감.
INSERT INTO user (name, age, address) VALUES ('유현서', 21, '서울특별시 강북구');
INSERT INTO user (name, age, address) VALUES ('홍진우', 6, '서울특별시 짱구');
INSERT INTO user (name, age, address) VALUES ('민효식', 8, '인천광역시 백구');
INSERT INTO user (name, age, address) VALUES ('신익균', 7, '강원도 원주시 벼멸구');
INSERT INTO user (name, age, address) VALUES ('박상현', 22, '서울특별시 도봉구');
INSERT INTO user (name, age, address) VALUES ('인세웅', 23, '서울특별시 노원구');
INSERT INTO user (name, age, address) VALUES ('이기철', 24, '경기도 안성시 중구');
INSERT INTO user (name, age, address) VALUES ('송태성', 25, '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUES ('서태호', 26, '서울특별시 강남구');
INSERT INTO user (name, age, address) VALUES ('서태완', 27, '대구광역시 강동구');
INSERT INTO user (name, age, address) VALUES ('김준하', 28, '서울특별시 영등포구');
INSERT INTO user (name, age, address) VALUES ('이태현', 29, '부산광역시 서대문구');
INSERT INTO user (name, age, address) VALUES ('정소영', 30, '서울특별시 광진구');
INSERT INTO user (name, age, address) VALUES ('전지현', 31, '경기도 광주시 관악구');

-- Read >> SELECT [컬럼이름] FROM [테이블 이름] (WHERE 조건) WHERE은 써도 되고 안써도 되고
SELECT * FROM user; -- 전체 컬럼 전체 조회 // 전체를 의미하는 ' * '
SELECT name FROM user; -- 특정 컬럼 전체 조회 (이름)
SELECT age, name FROM user; -- 특정 컬럼 2개 전체 조회 (이름, 나이)

-- where 절을 이용해서 조건 걸기
SELECT * FROM user WHERE age >=25; -- 이상 비교
-- 나이 25 이상만

SELECT * FROM user WHERE id=3; -- 일치 비교
-- 아이디가 3인 DATA만

SELECT id, age FROM user WHERE name='유현서';
-- name이 유현서인 data만


-- LIKE 패턴 조회
SELECT * FROM user WHERE address LIKE '서울%'; -- 서울로 시작하는 주소값
SELECT * FROM user WHERE name LIKE '__현'; -- 마지막 글자가 '현'인 사람
SELECT * FROM user WHERE name LIKE '%태%'; -- 이름에 '태'가 들어가는 사람
SELECT * FROM user WHERE address LIKE '%광역시%';-- 광역시 주소인 사람들


------- IN(list)-------
-- , 를 기준으로 범위값이 들어가면됨
-- 괄호에 들어간 숫자들만 나옴
SELECT * FROM user WHERE age IN(20,21,24,26); -- 나이가 20,21,22,23살 중 하나

-- BETWEEN a AND b, a와 b는 포함
-- 괄호에 들어가는 숫자의 사이 숫자들까지 다 나옴
SELECT * FROM user WHERE age BETWEEN 25 AND 30; -- 25살 이상 30살 이하

-- 추가 //  제일 마지막에 추가됨
INSERT INTO user(name, age) VALUES('임승빈', 25);


------- IS NULL, IS NOT NULL --------
-- 주소가 null인 사람 조회
SELECT * FROM user WHERE address IS NULL;
-- 주소가 null이 아닌 사람 조회
SELECT * FROM user WHERE address IS NOT NULL;


------- 논리 연산자 -------
-- 주소가 null이 아니면서, age가 25 초과인 전체 속성 (AND)
SELECT * FROM user WHERE address IS NOT NULL AND age > 25;

-- 박씨이고, 나이가 22인 사람 (AND)
SELECT * FROM user WHERE name LIKE '박%' AND age='22';

-- 서울에 살거나 김씨인 사람 (OR)
SELECT * FROM user WHERE address LIKE '서울%' OR name LIKE '이%';


---------------- order by, distinct, limit-----------------
-- order by
SELECT * FROM user ORDER BY age DESC; -- age 기준으로 내림차순 정렬
-- id가 6보다 큰 것을 조회하고 난 후, age 기준으로 오름차순 정렬
SELECT * FROM user WHERE id > 6 ORDER BY age ASC; 

-- distinct
select age from user ORDER BY age ASC;
SELECT DISTINCT age FROM user ORDER BY age ASC;

-- 서울시에 사는 사람의 이름, 주소 조회/ 2개만..
SELECT name, address 
FROM user 
WHERE address LIKE '서울%'
ORDER BY name ASC
LIMIT 3;
-- ORDRER BY 다음으로 LIMIT가 와야 한다.