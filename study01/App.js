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
console.log( add2(2,2) );
console.log( add3(2,2) );
// 자바에서 메소드는 자바스크립트에서 펑션~

var 모듈 = {
    기능1 : function(a, b) {return a + b},
    기능2 : (a, b) => {return a + b},
    기능3 : (a, b) => a + b
}
// 기능1, 2, 3 모두 같은말임 다 외워야함.
console.log(모듈.기능1(1,4));
console.log(모듈.기능2(1,4));
console.log(모듈.기능3(1,4));

class 모듈2 {
    constructor (){}
    기능1 (a, b) {
        return a + b
    };
}

const 객체 = new 모듈2();
console.log( 객체.기능1(1,4));

// 자바스크립트는 숫자와 문자를 비교 할 수 있음
// ==는 값을 비교 하는 것
// ===는 자료형과 값을 비교하는 것
a = 1;
b = "1";
console.log(a+b)
if( a == b ){
    console.log("참");
} else {
    console.log("거짓");
}

if( a === b ){
    console.log("참");
} else {
    console.log("거짓");
}

for(i=0; i<5; i++){
    console.log(i);
}
console.log(i);
// 자바스크립트는 변수를 선언하지 않고 사용하면 자동으로 변수를 var로 선언한 상태로 만들어줌 
// 그러니까 전역변수로 사용 할 수 있음
// 전역변수로 쓰고 싶지않다면 변수를 선언해주자
// var로 선언하면 전역변수로 선언됨.
// let으로 선언하면 범위안에서 선언됨.

for(let j = 0; j<5; j++){
    console.log(j);
}

// 자바스크립트에서 말하는 데이터를 다룰 때는 json이라는 오브젝트 담아서 쓴다.
// 자바스크립트에서 다루는 데이터는 제이슨 데이터다 제이슨은 {키:밸류 형식의 데이터} 요거다
// {키:밸류 형식의 그냥 객체랑 구분 잘하자}
// data => json

const test = {
    a1:a,
    b1:2,
    c1:"삼"
}

console.log( test.a )
var {b1} = test;
console.log(b1);
var {b1, c1} = test;
console.log(b1, c1);
var {b1:bb} = test;
console.log(bb);
// alias처럼 사용하기

const test2 = test;
console.log(test, test2);
const test3 = {...test};
console.log(test, test2, test3);
test2.b1 = 5;
console.log(test, test2);
console.log(test, test2, test3);
// test1, test2, test3의 출력 값을 잘 비교해보자
// 깊은 복사, 얕은 복사의 차이를 잘 알자
const test4 = {...test, ...test2, ...test3};
console.log(test4);
////////////////////////////////////////////

var testt = {
    a1:a,
    b1:2,
    c1:"삼"
}
var testt2 = testt;
var testt3 = {...testt};
var testt4 = {...testt, ...testt2, ...testt3};


function fn_1() {
    console.log("출력해줄게");
}

function fn_2(f) {
    f();
}

fn_2(fn_1);


fn_2(function (){console.log("난 출력하는걸~")});
fn_2(()=>console.log("점심시간이다"));
