/* 
레시피 재료 추가하기

1. 레시피는 각각 재료와 무게를 입력하면 아래 테이블에 데이터가 추가됩니다.
2. 같은 이름의 재료는 추가할 수 없습니다.
3. 각각의 재료는 삭제버튼이 존재하며 삭제를 누르면 테이블에서 데이터가 삭제됩니다.
4. 제출 버튼을 누르면 현재 테이블에 나와있는 데이터가 key: value와 같은 형태로 재료:무게로 나타납니다.


제출 버튼을 누르면 submit
<li> 재료 : 무게 </li>태그 안에 생성
ul 태그에 append 한다.

추가 버튼을 누르면 clickEvent
기존의 배열안 obj에 같은 재료 이름이 있는지 오브젝트를 순회하면서 key가 같은게 있는지 확인 
findIndex
이미 있는 재료명이면 return alert 이미 존재하는 재료입니다.
const ingredient = 
{
양파: 500G,
피망: 300G,
바나나: 200G,
}


-1 없으면 기존의 배열에 새로운 재료명과 무게를 추가한다.
기존의 배열을 풀어서 새로운 {...ingredient , 토마토: 300G} 추가
` <tr>
      <td>피망</td>
      <td>500G</td>
      <td><button>삭제</button></td>`
  </tr>


사용자가 입력한 인풋의 내용을 가져온다.
재료명
용량
*/
let ingredient = {};
const formEl = document.querySelector("#ingredient-form");
const table = document.querySelector("table > tbody");
const handleFormSubmit = (e) => {
  e.preventDefault();
  const currInput = e.target;
  const ingName = currInput["ingredient"].value;
  const ingWeight = currInput["weight"].value;

  //이미 있는 재료면 return
  const checkIngredient = Object.keys(ingredient);
  const check = checkIngredient.findIndex((name) => name === ingName);
  if (check !== -1) {
    return alert("이미 존재하는 재료입니다.");
  }
  ingredient[`${ingName}`] = ingWeight;
  addIngredientTable(ingName, ingWeight);
};

formEl.addEventListener("submit", handleFormSubmit);

const addIngredientTable = (ingName, ingWeight) => {
  //테이블 렌더링
  const trEl = document.createElement("tr");
  const newTable = `<td>${ingName}</td>
      <td>${ingWeight}</td>
      <td><button type="button">삭제</button></td>`;
  trEl.innerHTML = newTable;
  table.append(trEl);
  console.log(table);
};
const list = document.querySelector("#ingredient-list");

//삭제 버튼을 누르면 해당 부모 찾아서 삭제;
//기존 키도 삭제
const handleRemoveBtn = (e) => {
  if (e.target.textContent !== "삭제") return;
  const parent = e.target.closest("tr");
  const key = parent.firstChild.textContent;
  delete ingredient[`${key}`];
  parent.remove();
  [...list.children].forEach((li) => {
    if (li.textContent.includes(key)) li.remove();
  });
};
table.addEventListener("click", handleRemoveBtn);

function randerTableList() {
  for (const name in ingredient) {
    const li = document.createElement("li");
    li.innerHTML = `${name} : ${ingredient[name]}`;
    list.append(li);
  }
}

const submitBtn = document.querySelector("#submit_button");
submitBtn.addEventListener("click", randerTableList);
