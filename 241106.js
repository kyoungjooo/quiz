//클로저
//중첩된 함수에서 내부에 있는 함수와 외부에 있는 함수의 상태(렉시컬환경)에서 내부 함수에서 외부에 있는 렉시컬 환경에 접근할 수 있는 것

function outer() {
  let x = 0;
  function inner() {
    console.log(`inside inner ${x}`);
  }
  return inner;
}
outer();

//내부 함수를 은닉하고, 공개 함수(public 외부)를 통한 데이터 조작을 위해
//캡슐화와 정보 은닉
//클래스 private 필드 또는 메소드를 사용하는 효과와 동일

function counter() {
  let counter = 0;
  function increase() {
    counter++;
    console.log(counter);
  }
  return increase;
}
const inc = counter();
inc();
inc();
inc();
