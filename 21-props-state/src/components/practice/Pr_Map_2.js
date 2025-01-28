import { useRef, useState } from "react";
import Result from "../ex/Result";

export default function Pr_Map_2() {
  //
  const inputRef1 = useRef();
  const handleFocus1 = () => {
    inputRef1.current.focus();
  };
  const inputRef2 = useRef();
  const handleFocus2 = () => {
    inputRef2.current.focus();
  };
  // input에서 입력된 글자들 ( 제목, 작성자, 검색어 ) 를 관리하는 state
  const [comment, setComment] = useState([
    { writer: "민봉", title: "화이팅!!!" },
    { writer: "진우", title: "집에 가고 싶다..." },
    { writer: "규빈", title: "나는야 코딩 천재" },
  ]);

  // input tag를 직접 선택해서 value값을 가지고 오는 것이 아니기 때문에 선택을 하는것 대신 글자들은 state로 관리를 해줄 것이다.
  // 글자들의 대한 state
  // value값을 가지고오는 것이기 때문에 빈문자(문자열)열을 초깃값으로 해준다.
  const [inputWriter, setInputWriter] = useState(""); // 작성자 등록 input
  const [inputTitle, setInputTitle] = useState(""); // 제목 등록 input
  const [inputSearch, setInputSearch] = useState(""); // 검색어 input
  // value를 inputSearch로 놓고, onChange가 될 때마다 e.target.value를 받아서 inputSearch를 바꿀 수 있도록 setInputSearch를 바꿔준다.

  const [result, setResult] = useState([]); // 검색결과에 대한 배열 // 일단 빈 배열로 둠
  const [searchType, setSearchType] = useState("writer");
  // 기본값은 작성자,, 작성자 or 제목. --> option의 value값으로 조정
  //button에 onClick으로 addComment를 걸어준다.
  const addComment = () => {
    // 제목이랑 작성자를 추가해주면 됨.
    // 맨 뒤에에 추가될 새로운 comment 객체정보(input에 입력된 정보들)
    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };

    if (newComment.writer === "") {
      handleFocus1();
      return;
    } else if (newComment.title === "") {
      handleFocus2();
      return;
    }
    // 전개연산자를 이용해서 이전에 있던 comment내용들을 펼쳐준다.
    // 그리고 맨 뒤에 newComment를 추가해준다.
    // 이렇게 concat이 아니고 전개연산자를 통해서도 input의 내용을 뒤에 추가해줄 수 있다.
    setComment([...comment, newComment]);

    // 작성버튼을 누르고 작성이 완료되면 input창은 초기화한다.
    setInputTitle("");
    setInputWriter("");
    /* 
[...comment, newComment] == [
    { writer: "민봉", title: "화이팅!!!" },
    { writer: "진우", title: "집에 가고 싶다..." },
    { writer: "규빈", title: "나는야 코딩 천재" },
    newComment --> comment 배열 뒤에 newComment를 추가해 준것이다.
  ]
    */
  };

  // 검색을 실행하는 함수 -- 검색 button에 onClick 걸어줌
  const searchComment = () => {
    // 기본 데이터 기준으로 검색을 한다. (인자로 item받아주고, console.log를 찍어보면 )
    let searchResult = comment.filter((item) => {
      // console.log(item);
      // --> writer와 title이라는 key를 가지고 있는 객체 --- 위에 선언해둔 searchType이 key의 이름
      // console.log(item[searchType]);
      // --> 원래 객체 접근 할 때는 item.writer, item.title인데 초기 설정 해준 값이 문자열이기때문에 대괄호 접근법을 사용할 수 있다.
      // --> 위에 설정 해놓은 searchType이 writer냐, title이냐에 따라서 들어오는 값이 달라진다.
      /* inputSearch( 검색어 )가 item.writer, item.title에 있는지 확인해주면 됨 --> include 매서드 사용( true나 false반환 )*/
      //   console.log("안녕하세요".includes("안녕"));
      /* --> '안녕하세요'라는 문자열에 안녕이 있기 때문에 true 반환 */
      //   console.log("안녕하세요".includes("hi"));
      /* --> '안녕하세요'라는 문자열에 hi가 없기 때문에 false 반환 */
      // console.log("검색어 검사", item[searchType].includes(inputSearch));
      /* --> item[searchType]에 inputSearch가 포함되어있는지 확인. inputSearch는 검색창 input에 입력된 검색어 */
      if (!item[searchType].includes(inputSearch)) {
        // 검색결과가 없다면 null반환환
        return null;
      }

      return item; // 객체 자체를 리턴 // 조건에 맞는 것들만 serchResult에 배열로 담김(filter니까 배열로 반환)
      //   console.log(item.title);
    });
    // console.log(searchResult);
    setResult(searchResult); // 검색어 결과 설정
    // 검색을하면 새로운결과가 나와야하기 때문에 전개연산자나 concat사용하지 않는다. --> searchResult( 새로운 결과( 검색 결과 )로 설정 )
    setInputSearch(""); // 검색창 초기화
  };

  // searchType에 따라 어떤 검색을 할지 결정 ( 검색 조건 결정 )
  const selectSearchType = (e) => {
    setSearchType(e.target.value);
    // setSearchType을통해 selectSearchType를 바꿀 것이다. --> e.target.value 이 값으로 : 현재 선택된 option
  };

  return (
    <div>
      {/* 번호, 작성자, 제목 추가 form */}
      <form>
        {/* input이랑 label이랑 묶어줄 때에는 그냥 for가 아니 html for를 사용해준다. */}
        <label htmlFor="writer">작성자: </label>
        <input
          type="text"
          name="writer"
          id="writer"
          value={inputWriter} // onChange가 일어나게되면 inputWriter에 저장이 됨
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
          ref={inputRef1}
        />{" "}
        <label htmlFor="title">제목: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          ref={inputRef2}
        />{" "}
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>
      {/* 검색폼 */}
      <form>
        {/* onChange가 일어나면 selectSearchType함수가 실행된다. */}
        <select name="type" onChange={selectSearchType}>
          <option value={"writer"}>작성자</option>
          <option value={"title"}>제목</option>
        </select>
        <input
          type="text"
          onChange={(e) => setInputSearch(e.target.value)}
          name="search"
          placeholder="검색어를 입력해주세요"
          value={inputSearch}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>
      <table border={1} style={{ margin: "30px auto", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              // map을 통한 배열의 반복이기 때문에 key값을 설정.
              // 고유한 값이 없기때문에 인덱스, idx로 관리해줌
              // 여기서 comment는 배열이고 value는 comment안에 있는 객체임
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h4>검색결과</h4>
      {/* result는 배열이므로 요소가 있을 수도있고, 빈 배열일 수도있다. */}
      {result.length == 0 ? (
        <h3>검색결과가 없어요!😢</h3> // result.length 가 0이라면 h3 tag 리턴
      ) : (
        // 0이 아니고 결과가 있다면 밑 결과값 리턴
        <table border={1} style={{ width: "500px", margin: "0 auto" }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {result.map((el, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>{el.title}</td>
                  <td>{el.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
