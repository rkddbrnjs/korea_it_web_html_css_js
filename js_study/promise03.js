function Login(username) {
  return new Promise((resolve, reject)=> {
    setTimeout(()=>{
        if(username){
            resolve(username);
        }else{
            reject(new Error("사용자 이름없음"))
        }
    },1000)
  })
}
//장바구니
function addToCart(product) {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{if(product){
        resolve (product);
    }else{
        reject(new Error("상품 없음"))
    }
  },1000)
}}
//결제
function checkOut(cardNumber, product, callback) {
  
}

// Login("이동윤", (username) => {
//   console.log(`${username}님이 로그인했습니다.`);
//   addToCart("감자", (product) => {
//     console.log(`${product}가 장바구니에 추가되었습니다`);
//     checkOut("1234-5678-9012-4325", product, (cardNumber,product) => {
//       console.log(
//         `${product}에 대한 결제가 완료되었습니다. 카드번호: ${cardNumber}`
//       );
//     });
//   });
// });

function getData(){
    const promise = new promise((resolve, reject)=>{
        setTimeout(()=>{
            const data = {username: "강유권"};
            const data1 = {product: "감자"};
            const data2 = {cardNumber: "1234-4321-43241-43141"};
            if(data){
                console.log("서버 요청 성공")
                resolve(data); //resolve의 인자로는 비동기작업의 결과물을 넣어준다.
      } else {
        reject(new Error("네트워크 문제 발생"));
      }
    }, 2000);
  });
  return promise;
}

const promise = getData();

promise.then((username)=>{
    console.log(`${username}님이 로그인했습니다.`)
}).then((product)=>{
    console.log(`${product}가 장바구니에 담겼습니다.`)
}).then((cardNumber)=>{
    console.log(`카드번호는 ${cardNumber}`)
})


            
        
    
