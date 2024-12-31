console.log("안녕하세요");

var a = 1;
let b = 2; 
const c = 4; //상수

a = 2;


function add(a, b){
    return a + b;
}
// 함수는 한번 만들면 잘 안바뀌니까 const에 담을 수 있음
// 아래 함수와 같은 소스코드
// const add2 = (a, b) => {
//     return a + b
// }
const add3 = add;
const add2 = (a,b) => a + b;
// 이렇게 쓰는 방식을 자바에서는 람다라고함 그니까 이거 자바에서도 된다는 소리
// 화살함수
console.log( add2(2,3) );
console.log( add3(2,3) );
// 자바에서 메소드는 자바스크립트에서 펑션~

var 모듈 = {
    기능1 : function(a, b) {return a + b},
    기능2 : (a, b) => {return a + b},
    기능3 : (a, b) => a + b
}
// 기능1, 2, 3 모두 같은말임 다 외워야함.