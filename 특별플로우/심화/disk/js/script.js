const musicListData = [
  {
    src: "./assets/image/iu_0.jpg",
    color: ["#0272a4", "#f6a564"],
  },
  {
    src: "./assets/image/iu_1.jpg",
    color: ["#b6bfc8", "#36595b"],
  },
  {
    src: "./assets/image/iu_2.jpg",
    color: ["#e58e82", "#6f569f"],
  },
];

/*

문제1.
    디스크 문제 구현하기. 필요한 html, css, animation은 모두 구현하였으나
    혹 본인 재량하에 추가하고 싶은 css와 animation이 있으면 추가해두시면 됩니다.

    요구사항

        (2) play 버튼 클릭시에는 해당 이미지에 맞는 이미지가 배경화면으로 보이고 disk가 회전되어야합니다
        (3) stop 버튼을 누르면 배경화면이 사라지고 disk는 멈추어야합니다.
        (4) 앨범은 총 3개가 있으며 만약 진행 중 다른 앨범을 선택하고 play를 누르면 다른 앨범이 play 되어야합니다.
        (5) 앨범 리스트는 (next, prev) 버튼으로도 움직일 수 있으며 클릭으로도 원하는 앨범으로 이동할 수 있습니다.
        (6) 현재 선택된 앨범은 focus되어 크기가 커지는 효과를 추가해야합니다.
        (7) 저작권 상 음악은 넣지 못했지만 만약 넣고 싶다면 본인이 다운로드 하여 audio 태그를 활용하여 실행할 수 있습니다.
        (8) 이 외 다른 구현 사항은 영상을 참고하여 만들어보세요 :)

    주의사항

        단, 아래의 조건만 채운다면 반드시 똑같이 만들 필요는 없습니다.
        즉 애니메이션과 css를 구현 영상과 똑같이 하실 필요는 없으며, 이를 위해 html이나 css를 따로 건드셔도 괜찮습니다.
        해당 html과 css, animation은 제가 빠른 시일 내에 급히 작성한 것이기 때문에 이해가 조금 어려울 수 있습니다

        (1) 각 노래에 맞는 앨범 자켓 이미지로 배경이 바뀌어야함 
        (2) 각 노래에 맞는 색상으로 disk_inner와 stop 상태의 배경이 바뀌어야함
        (3) start 시에는 disk가 돌아가고 stop 시에는 disk가 멈춰야함
        (4) 선택된 앨범에는 하이라이트 호과가 있어야하며 클릭 및 버튼을 통해 선택이 가능함


      -----
      list_btn_group 하위의 ul 태그에 li 태그를 생성하고 리스트에 있는 이미지들 보여주기

      해당 이미지를 누르면 각 이미지의 인덱스에 있는 color색상으로 배경색 filter background 변경된다.
      각 버튼 이미지 사이즈가 확대되고 흰 테두리가 생긴다.

      play 버튼을 누르면 디스크가 돌아간다.
      해당 노래의 앨범 이미지가 나타난다.
      
      stop 버튼을 누르면 디스크 회전이 멈춘다.
      앨범 이미지가 사라지고 그라디언트 배경이 보인다.

      다음 화살표를 클릭하면 다음 이미지 활성화
      다음을 눌렀을 때 마지막 이미지라면 첫번째 이미지 활성화

      이전버튼 이전 앨범 활성화
      첫번째에서 이전 누르면 맨 마지막 활성화
*/
//1. 리스트 앨범 보여주기
const listWrap = document.querySelector(".list_btn_group");
const ul = listWrap.querySelector("ul");
const disk = document.querySelector(".disk");
const diskInner = disk.querySelector(".disk_inner");
const mainEl = document.querySelector("main");
let imgEl;
let bg;
let isPlay = false;
let currentBg;
const settingElbumEls = () => {
  musicListData.forEach((elbum, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<img src=${elbum.src} data-idx=${i}></img>`;
    ul.append(li);
    ul.firstChild.classList.add("play");
  });
  imgEl = ul.querySelector("li.play").firstChild;
  bg = Number(imgEl.dataset.idx);
  const elbumBg = document.createElement("div");
  elbumBg.className = "blur";
  elbumBg.style.opacity = "0";
};
window.addEventListener("load", settingElbumEls);

//해당 앨범이 눌러지면 상위에 play클래스 추가, 배경 바꾸기
const handleCurrentElbum = (e) => {
  const current = e.target;
  [...ul.children].forEach((li) => li.classList.remove("play"));
  if (current.tagName === "IMG") {
    bg = Number(current.dataset.idx);
    current.parentNode.classList.add("play");
  }
  if (current.textContent === ">") {
    bg += 1;
    if (bg > ul.children.length - 1) bg = 0;
  }
  if (current.textContent === "<") {
    bg -= 1;
    if (bg < 0) bg = ul.children.length - 1;
  }
  [...ul.children][bg].classList.add("play");
  if (isPlay) return;
  currentBg = musicListData[bg].color;
  settingBg(currentBg);
};
listWrap.addEventListener("click", handleCurrentElbum);

function settingBg(currentBg) {
  mainEl.style.background = `linear-gradient(120deg, ${currentBg[0]}, ${currentBg[1]})`;
  diskInner.style.backgroundColor = currentBg[0];
}
//play버튼을 누르면 디스크에 .active 클래스를 추가
const BtnGroup = document.querySelector(".play_btn_group");
const handleMusicPlay = (e) => {
  const current = e.target;
  const elbumBg = mainEl.querySelector(".blur");
  if (current.textContent === "P L A Y") {
    isPlay = true;
    mainEl.append(elbumBg);
    elbumBg.style.background = `url(${musicListData[bg].src})`;
    elbumBg.style.backgroundSize = "cover";
    elbumBg.style.backgroundRepeat = "no-repeat";
    elbumBg.style.animation = "upToDown 1s linear";
    disk.classList.add("active");
  }
  if (current.textContent === "S T O P") {
    isPlay = false;
    elbumBg.style.animation = "downToUp 1s forwards";
    disk.classList.remove("active");
    currentBg = musicListData[bg].color;
    settingBg(currentBg);
    return;
  }
};
BtnGroup.addEventListener("click", handleMusicPlay);
