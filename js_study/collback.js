//콜백함수
//다른 함수의 인자로 전달되는 함수

//비동기콜백
//비동기 작업이 완료된 후에 호출되는 콜백함수

// function printData(data){
//     console.log(data)
// }

// function getData(callback){
//     setTimeout(()=>{
//         console.log("서버에서 데이터를 받아왔어요")
//         callback({name: "이동윤"})
//     },2000);
// }

// getData(printData);

//쇼핑몰
//로그인
function Login(username, callback) {
  setTimeout(() => {
    callback(username);
  }, 1000);
}
//장바구니
function addToCart(product, callback) {
  setTimeout(() => {
    callback(product);
  }, 1000);
}
//결제
function checkOut(cardNumber, product, callback) {
  setTimeout(() => {
    callback(cardNumber, product);
  }, 1000);
}

Login("이동윤", (username) => {
  console.log(`${username}님이 로그인했습니다.`);
  addToCart("감자", (product) => {
    console.log(`${product}가 장바구니에 추가되었습니다`);
    checkOut("1234-5678-9012-4325", product, (cardNumber,product) => {
      console.log(
        `${product}에 대한 결제가 완료되었습니다. 카드번호: ${cardNumber}`
      );
    });
  });
});
//위처럼 콜백함수가 계속 중첩되면 콜백지옥이 발생된다.