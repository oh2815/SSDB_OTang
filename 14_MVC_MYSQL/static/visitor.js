const tbody = document.querySelector("tbody");
// 방명록"등록"
// POST /visitor
function createVisitor() {
  const form = document.forms["visitor-form"];

  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert("이름과 방명록을 모두 기입해주세요");
    return;
  }

  // 테이블 생성시 name컬럼을 varchar(10)으로 설정해두어서
  // 프론트에서 유효성 검사를 하고 데이터 전송
  if (form.name.value.length > 10) {
    alert("이름은 10글자 미만으로 작성해주세요");
    return;
  }

  axios({
    method: "post",
    url: "/visitor",
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  })
    .then((res) => {
      console.log(res.data); // axios는 무조건 res.data를 확인해야한다.
      const { id, comment, name } = res.data;
      const newhtml = `
        <tr id="tr_${id}">
          <td>${id}</td>
          <td>${name}</td>
          <td>${comment}</td>
          <td><button onclick="editVisitor(${id})">수정</button></td>
          <td><button onclick="deleteVisitor(this,${id})">삭제</button></td>
        </tr>`;
      //   tbody.append(newHtml); 문자열이 그대로 붙음
      tbody.insertAdjacentHTML("beforeend", newhtml);
      // 문자열을 특정 요소의 맨 마지막으로 HTML추가
      form.reset();
    })
    .catch((err) => console.error(err));
}

// 방명록 "삭제"
// DELETE /visitor
function deleteVisitor(btn, id) {
  console.log(id);
  axios({
    method: "delete",
    url: "/visitor",
    data: {
      id: id,
    },
  })
    .then((text) => {
      console.log(text.data);
      //   btn.parentElement.parentElement.remove();  부모 요소 찾아서 지우기
      btn.closest(`#tr_${id}`).remove();
    })
    .catch((err) => console.error(err));
}

// 수정 버튼을 누르면
// GET /visitor/:id 하나의 데이터 조회
// 1. 수정을 위한 입력창으로 변함
function editVisitor(id) {
  const form = document.forms["visitor-form"];
  // 하나의 data조회가 필요함
  axios({
    method: "get",
    url: `/visitor/${id}`,
  })
    .then((res) => {
      console.log(res.data);
      const { name, comment, id } = res.data;
      console.log(name);
      form.name.value = name;
      form.comment.value = comment;

      const btnContainer = document.querySelector("#btn-group");
      const html = `
      <button type="button" onclick="editDo(${id})">수정하기</button>
      <button type="button" onclick="editCancel()">수정취소</button>
      `;
      btnContainer.innerHTML = html;
    })
    .catch((err) => console.error(err));
}

// 2. 실제 수정 데이터를 요청
function editDo(id) {
  const form = document.forms["visitor-form"];
  if (form.name.value.length === 0 || form.comment.value.length === 0) {
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
    const tr = document.querySelector(`#tr_${id}`);
    console.log(tr.children);
    const children = tr.children;
    children[1].textContent = form.name.value;
    children[2].textContent = form.comment.value;

    editCancel();
  });
}

// 수정 취소
function editCancel() {
  const form = document.forms["visitor-form"];
  form.name.value = "";
  form.comment.value = "";
  // (2) 등록버튼 보이도록
  const btnContainer = document.getElementById("btn-group");
  btnContainer.innerHTML =
    '<button type="button" onclick="createVisitor()">방명록 등록</button>';
}
