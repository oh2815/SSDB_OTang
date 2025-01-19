import { useSearchParams } from "react-router-dom";

export default function MainPage() {
  // 배열반환, searchQuery: query를 가지고오는 것, setSearchQuery: query를 설정해주는 것
  const [searchQuery, setSearchQuery] = useSearchParams();
  // query를 가지고오는 것이면 query를 바로 찍는 것이 아니고 query.get에 원하는 문자열을 넣어준다.
  console.log(searchQuery.get("mode")); // 출력값은 Dark or null
  // --- 여러가지 class를 배열형태로 준것. class가 들어올 수도있고, 안들어올 수도있으므로 searchQuery.get사용
  // 배열로 들어오고있고, 띄어쓰기를 주고싶기에 join을 사용
  // query의 dark라는 값을 class로 추가
  return (
    // <main className={["MainPage", searchQuery.get("mode")].join(" ")}>
    // query값을 가지고와서 그 query의 이름을 그대로 class로 새로 만들어준다.
    <main className={`MainPage ${searchQuery.get("mode")}`}>
      <p>여기는 홈 Home 입니다!</p>
      {/* query설정 :  mode가 Dark인 query를 만들고싶다. */}
      <button onClick={() => setSearchQuery({ mode: "Dark" })}>Darkmode</button>
    </main>
  );
}
