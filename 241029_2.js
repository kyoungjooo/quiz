//- 하이픈 위치
//- 하이픈 개수

const banks = {
  성용은행: "00-000-0-0-0-0000",
  사과은행: "00-00000--000-00",
  경주은행: "00-0--00------000----0000",
};

function checkAccount(bankName, number) {
  if (number.length !== 12) return console.log("잘못된 계좌번호입니다.");
  const idx = Object.keys(banks);
  if (!idx.includes(bankName)) return console.log("존재하지 않는 은행입니다.");
  let result = [...number];
  for (let i = 0; i < banks[bankName].length; i++) {
    if (banks[bankName][i] === "-") {
      result.splice(i, 0, "-");
    }
  }
  console.log(result.join(""));
}
checkAccount("경주은행", "000000221111");
