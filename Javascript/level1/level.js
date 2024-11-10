import { BANK_LIST, ACCOUNT_FORM } from "./account.js";

console.log(BANK_LIST);
console.log(ACCOUNT_FORM);

//은행 목록을 옵션 안에 담는다.
const select = document.querySelector("#bank-selector");
function renderBankList() {
  select.name = "bank-selector";
  for (const bank in BANK_LIST) {
    const option = document.createElement("option");
    option.textContent = BANK_LIST[bank];
    option.value = bank;
    select.append(option);
  }
}
renderBankList();

//계좌번호 관련
//인풋 텍스트를 입력할 때 이벤트
const accInputEl = document.querySelector("#account-input");
accInputEl.addEventListener("input", checkAccountInput);
function checkAccountInput(e) {
  //숫자만 입력되도록 한다.
  let current = e.target.value;
  if (isNaN(current)) {
    return alert("계좌번호는 숫자만 입력해 주세요");
  }
}

//옵션이 변경되면
//폼이 전송되면 확인
const sendForm = document.querySelector("#account-send-form");
sendForm.addEventListener("submit", checkBankAccount);
function checkBankAccount(e) {
  e.preventDefault();
  const currentBank = select.options[select.selectedIndex];
  const currentBankVal = currentBank.value;
  const userAccInput = accInputEl.value;
  //가지고 온 value의 ACCOUNT_FORM을 찾는다.
  const bankForm = ACCOUNT_FORM[currentBankVal];
  maskingAccountNumber(userAccInput, bankForm, currentBankVal);
  //
}
//파싱하는 함수 앞 2자리와 맨끝 2자리를 제외하면 모두 ********로 나타내기
//매개 변수로 현재 선택된 은행 value
//마스킹처리된 계좌번호에 하이픈 넣기
const ul = document.querySelector("#account-list");
function maskingAccountNumber(AccNumber, accForm, currentBankVal) {
  const accountForm = accForm;
  let parsing = [...AccNumber];
  for (let i = 2; i < AccNumber.length - 2; i++) parsing.splice(i, 1, "*");
  for (let i = 0; i < accountForm.length; i++) {
    if (accountForm[i] === "-") parsing.splice(i, 0, "-");
  }
  const result = `${BANK_LIST[currentBankVal]}:${parsing.join("")}`;
  const li = document.createElement("li");
  li.textContent = result;
  ul.append(li);
}
