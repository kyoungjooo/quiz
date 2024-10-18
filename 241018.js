let engineChecked = false;
function engine() {
  //on off
  engineChecked = !engineChecked;
}

//
function drive(km) {
  //이동거리를 km 단위로 정수로 전달
  //실행 시 1km씩 줄어들어 0이되면 "주행완료"
  console.log(engineChecked);
  if (!engineChecked) return console.log("엔진이 꺼져있음");

  while (km !== 0) {
    km--;
    console.log(`${km}km`);
  }
  console.log("주행완료");
  engine();
}

engine();
drive(10);
