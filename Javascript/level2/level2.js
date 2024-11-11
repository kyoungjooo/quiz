import { RESERVATION_LIST } from "./reservation .js";
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기
1.예약고객 리스트 RESERVATION_LIST
2. 고객 리스트에 없는 고객정보의 경우 일치하는 항목이 없습니다라는
console.log와 함께 텍스트가 나타납니다.
3. 이름과 핸드폰 번호 모두 일치하지 않으면 고객은 검색할 수 없습니다.
4. 고객데이터가 있으면 고객번호가 텍스트로 나타납니다.
 {
    name: '김성용',
    phone: '010-1234-1234',
    number: '1234-1234-1234',
  },

-----

예약 번호 확인 버튼을 누르면 #reservation-number textContent로 고객번호가 나타난다.

고객이 인풋에 핸드폰 번호를 입력하면 세글자 - 네글자 - 하이픈 자동 입력
고객정보는 배열안의 객체로 name, phone, number 키가 있다.

고객이 이름을 입력한다.

고객의 이름과 휴대폰 번호를 고객데이터에 있는지 확인한다. fint()
RESERVATION_LIST 배열을 돌면서 이름과 번호가 일치하는 요소를 반환한다.

일치하는 요소의 number 값을 

undefined 반환
이름, 휴대번호중 하나라도 틀리면 #reservation-number 에 일치하는 고객 내역이 없습니다 
텍스트 출력, alert 출력

*/
const formEl = document.querySelector("form");
const text = document.querySelector("#reservation-number");
const handleUserSubmit = (e) => {
  e.preventDefault();
  const userNameEl = e.target["user-name"].value;
  const userNumberEl = e.target["user-phone"].value;
  const isMatch = RESERVATION_LIST.find((list) => {
    return list.name === userNameEl && list.phone === userNumberEl;
  });
  if (!isMatch) {
    const info = "일치하는 내역이 없습니다.";
    text.textContent = info;
    return alert(info);
  }
  //없으면 return;
  //있으면 고객번호 찾기 handleFindUserNumber
  text.textContent = isMatch.number;
};

formEl.addEventListener("submit", handleUserSubmit);

const numberInput = formEl.querySelector("[name=user-phone]");
const handleUserInput = (e) => {
  //숫자 이외의 문자 모두 제거
  let phoneNum = e.target.value.replace(/\D/g, "");

  //세자리 이상 && 8자리 미만이면  이면 - 추가
  if (phoneNum.length > 3 && phoneNum.length < 8) {
    phoneNum = `${phoneNum.slice(0, 3)}-${phoneNum.slice(3)}`;
  } else if (phoneNum.length > 7) {
    //8자리부터
    phoneNum = `${phoneNum.slice(0, 3)}-${phoneNum.slice(
      3,
      7
    )}-${phoneNum.slice(7)}`;
  } else {
    phoneNum = e.target.value;
  }
  e.target.value = phoneNum;
};

numberInput.addEventListener("input", handleUserInput);
