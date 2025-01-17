// 여러가지 page에서 title을 바꾸고 싶을 떄 useTitle 사용
import { useEffect } from "react";

export default function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    console.log("index.html에 있는 title:", prevTitle);
    document.title = title; // 실제로 title 변경

    return () => {
      document.title = prevTitle;
    };
  }, [title]); // [title] : title이 변경 될 때 재실행
}
