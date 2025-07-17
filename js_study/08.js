//REST 문법과 Spread 문법
const student = {
  name: "이동윤",
  age: 27,
  address: "부산 사하구",
  phone: "010-1234-1234",
};

const { name, address } = student;
console.log(name, address);

//REST문법
//나머지 속성들을 새로운 객체 또는 배열로 묶을 때 사용
const { age, phone, ...a } = student;
console.log(age, phone, a);

const numbers = [1, 2, 3, 4];
const [n1, n2, ...ns] = numbers;
console.log(n1, n2, ns);

//Spread 문법
//기존 객체의 모든 속성을 새로운 객체에 복사하거나,
//새로운 속성을 추가할 때 사용
const newStudent = {
  ...student, //student 객체에 있던 모든 속성을 여기에 복사함
  gender: "남", //gender 새로운 속성 추가
};
console.log(newStudent);

const newNumbers = [...numbers, 5, 6];
console.log(newNumbers);

let names = [];

function addName(name) {
  names = { ...names, name };
}

addName("이동윤");
addName("삼동윤");
addName("이동윤");
console.log(names);

let obj = {
  data1: "data1",
  data2: "data2",
};
function addProps(props) {
  obj = {
    ...obj,
    ...props,
  };
}

addProps({ data3: "data3", data4: "data4" });
console.log(obj);

//score 변수에 임의의 숫자를 할당
//조건에 따라서 등급을 부여
//90점 이상 A
//80 B
//70 C
//나머지 F

const score = 50;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}

//for문을 이용해서 1부터 10까지 숫자 중 짝수만 출력

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//title, author, publisherYear 속성을 포함하는 book 객체 생성
//해리포터, JK 롤링, 1997
//book 객체의 title과 author 속성 값을 출력 (점 표기법, 대괄호)
// book 객체에 gatAge()라는 메소드 추가
//현재 연도(new Date().getFullYear())에서 publisherYear를 뺀 값을 리턴
//book객체에 새로운 속성 genre를 추가하고 값을 할당 ("판타지")
//book객체의 publisherYear를 2000으로 수정

const book = {
  title: "해리포터",
  author: "JK 롤링",
  publisherYear: 1997,
};

console.log(book.title);
console.log(book["author"]);

book.getAge = () => {
  const currentYear = new Date().getFullYear();
  return currentYear - book.publisherYear;
};

console.log(book.getAge());

book.genre = "판타지";
book.publisherYear = 2000;

const products = [
  { id: 1, name: "노트북", price: 1200000, category: "전자제품" },
  { id: 2, name: "티셔츠", price: 25000, category: "의류" },
  { id: 3, name: "모니터", price: 300000, category: "전자제품" },
  { id: 4, name: "청바지", price: 50000, category: "의류" },
  { id: 5, name: "마우스", price: 15000, category: "전자제품" },
];
//1. 50000원 이상인 제품만 필터링해서 expensiveProducts 배열에 넣고 출력
//2. products배열에서 각 제품의 이름과 가격만 포함하는 productNamesAndPrices배열 만들기
// [{name: "노트북", price: 1200000}, {}...]
//3. products배열에서 category가 전자제품인 제품만 선택해서 각 제품의 이름과 가격을
//10%할인한 discountProducts배열을 만드세요

console.log(products.filter((products) => products.price >= 50000));
console.log(
  products.map((products) => ({
    name:products.name,
    price:products.price
  }))
);
console.log(
    products.map((products)=>{
        if(products.category === "전자제품"){
            products.price = products.price*0.1
        }
        
    }))
