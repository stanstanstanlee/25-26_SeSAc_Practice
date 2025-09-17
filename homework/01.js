// TODO: 변수와 문자열
// myCampus 변수를 선언하고, 이곳의 캠퍼스 이름을 할당한다
// myCampus 변수를 출력한다

/* 출력 결과
성동캠퍼스
*/

let myCampus = "성동캠퍼스";
console.log(myCampus);

// TODO: 불리언 자료형
// isStudent 변수에 true를 할당하고, isWorking 변수에 false를 할당한다
// 두 변수를 각각 출력한다

/* 출력 결과
true
false
*/

let isStudent = true;
let isWorking = false;
console.log(isStudent);
console.log(isWorking);

// TODO: 문자열 연결
// firstName 변수에 "홍"을, lastName 변수에 "길동"을 할당한다
// 두 변수를 연결하여 fullName 변수에 저장하고 출력한다

/* 출력 결과
홍길동
*/

let firstName = "홍";
let lastName = "길동";
let fullName = firstName + lastName;
console.log(fullName);

// TODO: 숫자 변수와 연산
// age 변수에 25를 할당하고, 10년 후의 나이를 계산하여 futureAge 변수에 저장한다
// "10년 후 나이: [futureAge]" 형식으로 출력한다

/* 출력 결과
10년 후 나이: 35
*/

let age = 25;
let futureAge = (age += 10);
console.log(`10년 후 나이: ${futureAge}`);

// TODO: 템플릿 리터럴
// subject 변수에 "JavaScript"를, score 변수에 95를 할당한다
// 템플릿 리터럴을 사용하여 "[subject] 점수: [score]점" 형식으로 출력한다

/* 출력 결과
JavaScript 점수: 95점
*/

let subject = "JavaScript";
let score = 95;
console.log(`${subject} 점수: ${score}점`);

// TODO: 비교 연산자
// num1 변수에 15를, num2 변수에 20을 할당한다
// num1이 num2보다 작은지 비교한 결과를 isSmaller 변수에 저장하고 출력한다

/* 출력 결과
true
*/

let num1 = 15;
let num2 = 20;
let isSmaller = num1 < num2;
console.log(isSmaller);

// TODO: typeof 연산자
// myString 변수에 "Hello"를, myNumber 변수에 42를, myBoolean 변수에 true를 할당한다
// 각 변수의 자료형을 typeof 연산자를 사용하여 출력한다

/* 출력 결과
string
number
boolean
*/

let myString = "Hello";
let myNumber = 42;
let myBoolean = true;
console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);

// TODO: 나머지 연산자와 조건
// totalItems 변수에 17을 할당한다
// totalItems를 5로 나눈 나머지를 remainder 변수에 저장하고 출력한다

/* 출력 결과
2
*/

let totalItems = 17;
let remainder = totalItems % 5;
console.log(remainder);

// TODO: 논리 연산자
// hasLicense 변수에 true를, hasExperience 변수에 false를 할당한다
// 두 변수의 AND 연산과 OR 연산 결과를 각각 출력한다

/* 출력 결과
false
true
*/

let hasLicense = true;
let hasExperience = false;

console.log(hasLicense && hasExperience);
console.log(hasLicense || hasExperience);

// TODO: 변수 재할당과 계산
// price 변수를 100으로 선언하고 출력한다
// price에 20% 할인을 적용한 값을 다시 price에 할당하고 출력한다
// (20% 할인 = 원가 × 0.8)

/* 출력 결과
100
80
*/

let price = 100;
console.log(price);
price = price * 0.8;
console.log(price);
