//promise chaining
function getData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = { name: "이동윤" };
      if (data) {
        console.log("서버 요청 성공");
        resolve(data); //resolve의 인자로는 비동기작업의 결과물을 넣어준다.
      } else {
        reject(new Error("네트워크 문제 발생"));
      }
    }, 2000);
  });
  return promise;
}

const promise = getData();
// promise.then().then().then()....
//promise chaining을 사용하게 되면 여러가지 비동기 작업을 연속적으로 수행 가능
// promise.then((data)=>{
//     console.log(data);
//     return getData();
// })
// .then((data)=>{
//     console.log(data);
// })

// promise.then((data)=>getData())
// .then((data)=>getData())
// .then((data)=>getData())
// .then((data)=>console.log(data))

promise.then((data)=>{
    console.log(data)
    return"hello"; //값을 리턴하면 promise와 resolve에 해당 값이 전달됨
}).then((data)=>{
    console.log(data)
})