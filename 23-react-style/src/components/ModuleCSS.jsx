import classNames from "classnames"; // from뒤에는 모듈의 이름 앞에는 함수의 이름
import style from "../style/style.module.css";
import Names from "classnames/bind";
export default function ModuleCSS() {
  const setting = Names.bind(style); // bind : 묶다 - 점접근 안하려고 할 때 사용
  return (
    <div className={style.container}>
      <h4>module.css 적용</h4>
      <div className={style.box2}>
        <div>안녕하세요</div>
      </div>
      <br />
      <div className={`${style.first} ${style.second}`}>
        클래스를 여러개 지정하는 방법1(템플릿 리터럴/ 벡틱, 달러)
      </div>
      {/* 
      [1,2,3,4,5].join("_") >>1-2-3-4-5
      ["first", "second"].join(" ") >> "first second"
      */}
      <div className={[style.first, style.second].join(" ")}>
        클래스를 여러개 지정하는 방법2(배열과 join)
      </div>
      <div className={classNames(style.first, style.second)}>
        클래스를 여러개 지정하는 방법3(classnames 모듈 설치)(import하고 사용)
      </div>
      <div className={setting("first", "second")}>
        {" "}
        classnames모듈 사용 더해보기
      </div>
    </div>
  );
}
