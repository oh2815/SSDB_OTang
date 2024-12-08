// 길어질 것 같아서 프론트의 JavaScript를 따로 만들어줌.
const tbody = document.querySelector("tbody");
// 방명록"등록"
// POST /visitor
function createVisitor() {
  const form = document.forms["visitor-form"];
  // form 태그 선택
  // 선택이 잘 됐는지 tbody와 form을 함수안에서 console로 찍어 볼수있다.
  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert("이름과 방명록을 모두 기입해주세요");
    return; //  밑에 읽지 못하게 return.
  }

  // 테이블 생성시 name컬럼을 varchar(10)으로 설정해두어서
  // 프론트에서 유효성 검사를 하고 데이터 전송
  if (form.name.value.length > 10) {
    alert("이름은 10글자 미만으로 작성해주세요");
    return;
  }

  // 위 두가지 경우가 아닐 때만 axios요청.

  /* ###########팀플시###########
API를 먼저 쭉 작성해 놓고 그 뒤를 설계하는 쪽이 편하다. */
  axios({
    method: "post",
    url: "/visitor", // routes 참고
    data: {
      // input 태그 안에있는 value값
      name: form.name.value,
      comment: form.comment.value,
    },
  })
    .then((res) => {
      console.log(res.data);
      // axios는 무조건 res.data를 확인해야한다. = {id: 5, comment: '~~~', name: '~~~' }
      // 원래 새로고침을 해야지만 get요청으로 인해 table에 추가된 것이 client에 보여졌는데
      // 자동으로 해주기위해 then아래에서 작업을 해줌.

      const { id, comment, name } = res.data;
      const newhtml = `
        <tr id="tr_${id}">
          <td>${id}</td>
          <td>${name}</td>
          <td>${comment}</td>
          <td><button onclick="editVisitor(${id})">수정</button></td>
          <td><button onclick="deleteVisitor(this,${id})">삭제</button></td>
        </tr>`;
      //   tbody.append(newHtml); 문자열(위에 ``으로 작성한)이 그대로 붙음
      tbody.insertAdjacentHTML("beforeend", newhtml);
      // 문자열을 특정 요소의 맨 마지막으로 HTML추가
      form.reset(); // 등록을 하면 input창이 초기화 됨
    })
    .catch((err) => console.error(err));
}

// 방명록 "삭제"
// DELETE /visitor
// 삭제는 따로 유효성 검사 필요 없음
function deleteVisitor(btn, id) {
  // 삭제버튼 눌렀을 때 새로고침 없이 바로 삭제되도록 btn을 인자로 하나 더 받아줌
  // ejs에서 함수안에 this를 적어줌으로 onclick이 걸려있는 button 태그 자체를 넘겨준다. button = btn
  console.log(id);
  // 이것만 했을 때에는 삭제버튼 눌렀을 때 id값만 서버에 전달이된다는 뜻
  // 이거로 진짜 삭제를 하려면 axios에서 적절한 metod와 주소로 보내야함.
  // console.log(btn) // 태그 그자체
  axios({
    method: "delete",
    url: "/visitor",
    data: {
      id: id, // 매개변수로 받아온 data값
    },
  })
    .then((text) => {
      // 따로 보내주는 것 없이 문자열로 보내주므로 text로 받아줌.
      console.log(text.data);
      // btn.parentElement.parentElement.remove();  부모 요소 찾아서 지우기
      btn.closest(`#tr_${id}`).remove();
      // 특정 오브젝트의 (뒤에 적은 선택자를 가진) 가장 가까운 조상 요소를 찾아줌
    })
    .catch((err) => console.error(err));
}

// 수정 버튼을 누르면 ----- 수정 버튼을 누른다고 다 바뀌는게 아니기때문에 몇가지를 해줘야 한다.
// GET /visitor/:id 하나의 데이터 조회
// 1. 수정을 위한 입력창으로 변함
function editVisitor(id) {
  const form = document.forms["visitor-form"];
  // form 태그 안에있는 방명록 input들을 사용해야 하므로 불러옴.
  // 하나의 data조회가 필요함
  axios({
    method: "get",
    url: `/visitor/${id}`, // visitor의 몇번을 조회해 와라.
  })
    .then((res) => {
      console.log(res.data);
      // 수정 되는건 아니지만 버튼 눌렀을 때 가지고와지는 data들
      const { name, comment, id } = res.data;
      // 객체 구조 분해
      console.log(name);
      form.name.value = name;
      form.comment.value = comment;
      // 수정 버튼 눌렀을 때 조회되는 data들

      const btnContainer = document.querySelector("#btn-group");
      const html = `
      <button type="button" onclick="editDo(${id})">수정하기</button> 
      <button type="button" onclick="editCancel()">수정취소</button>
      `; // btn-group에 innerhtml을 바꿔주려고(바꿔줄 내용)
      // editDo라는 함수는 인자로 id를 받아주고 있기 때문에 id를 넣어줌
      btnContainer.innerHTML = html;
      // btnContainer에 html을 innerHTML로 넣어줌
    })
    .catch((err) => console.error(err));
}

// 2. 실제 수정 데이터를 요청
function editDo(id) {
  const form = document.forms["visitor-form"];
  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert("이름과 방명록을 모두 기입해주세요");
    return; //  밑에 읽지 못하게 return.
  }

  // 테이블 생성시 name컬럼을 varchar(10)으로 설정해두어서
  // 프론트에서 유효성 검사를 하고 데이터 전송
  if (form.name.value.length > 10) {
    alert("이름은 10글자 미만으로 작성해주세요");
    return;
  }
  axios({
    method: "patch",
    url: "/visitor",
    data: {
      id: id,
      comment: form.comment.value,
      name: form.name.value,
    },
  }).then((res) => {
    console.log(res.data);
    // 이것만 있으면 새로고침 했을 때 수정이 되는..
    // 여기서의 res.data는 문자열인 "수정 완료" 여서,
    // 문자열에서는구조분해할당 사용 못함.
    const tr = document.querySelector(`#tr_${id}`);
    // 특정한 tr을 선택해주고 그 안에있는 td를 선택해서 수정.
    // 그 특정한 tr을 선택해주기위해 id값을 줬고 그 값으로 불러옴.
    console.log(tr.children);
    // 배열 형태로 들어옴 그 안에는 td가 들어가있음.
    // children = [td,td,td,td,td]
    const children = tr.children;
    // tr의 childern을 children에 담아줌.
    // children[1]은 td이기 때문에 바로 쓰면 안되고 text.Content를 붙여줌
    children[1].textContent = form.name.value; // 작성자
    children[2].textContent = form.comment.value; // 방명록 내용
    // 배열 형태의 tr에서 2,3 번째만 바꿔주려고 children[1], children[2]를 선택해줌

    editCancel();
    // 수정 취소와 똑같이 등록버튼을 가지고 오고싶기때문에 호출.
    // 이미 함수는 수정 취소에서 적어놔주었기에 함수 호출만 해주면 됨.
  });
}

// 수정 취소
// 데이터 주고받는 작업이 아니고 동작을 취소하는 작업.
// (1) form안의 input 초기화
function editCancel() {
  const form = document.forms["visitor-form"];
  // form.reset()써도 상관 없음
  form.name.value = "";
  form.comment.value = "";

  // (2) 등록버튼 보이도록
  const btnContainer = document.getElementById("btn-group");
  btnContainer.innerHTML =
    '<button type="button" onclick="createVisitor()">방명록 등록</button>';
} // 등록 버튼이 보이게 해줌
