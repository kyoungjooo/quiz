//- 하이픈 위치
//- 하이픈 개수

const banks = [
  { title: "성용은행", account: "00-000-0-0-0-0000" },
  { title: "사과은행", account: "00-00000--000-00" },
  { title: "경주은행", account: "00-0--00------000----0000" },
];
function checkAccount(bankName, number) {
  if (number.length !== 12) return console.log("잘못된 계좌번호입니다.");
  const idx = banks.findIndex((bank) => bank.title === bankName);
  if (idx === -1) return console.log("존재하지 않는 은행입니다.");
  const acc = banks[idx].account;
  let res = [...number];
  for (let i = 0; i < acc.length - 1; i++) {
    if (acc[i] === "-") res.splice(i, 0, "-");
  }
  console.log(`${bankName}: ${res.join("")}`);
}
checkAccount("경주은행", "000000221111");
