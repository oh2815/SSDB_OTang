import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function Student() {
  const params = useParams(); // { name: 'anything' } --params의 name
  const [nameParams] = useSearchParams();
  const nameQuery = nameParams.get("name"); // query의 name
  console.log(nameQuery);
  const navigate = useNavigate();
  return (
    <main>
      <div>
        <p>학생이름은 {params.name} 입니다.</p>
        {nameQuery && <p>실제이름은 {nameQuery} 입니다.</p>}
      </div>
      <button onClick={() => navigate(-1)}>이전페이지로</button>
    </main>
  );
}
