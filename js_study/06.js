//단축 평가 논리 연산
// && ||

const name = "이동윤";

console.log(!!name && !!"삼동윤");
//앞의 값이 true일때 뒤의 값을 리턴, false일 때 false
console.log(false && 10);
console.log(true && 10);
console.log(!!name && 0);

// || OR연산
// 앞의 값이 false일 때 위의 값을 리턴, true일 때 true리턴
console.log(false || 10);
console.log(true || 10);

//nullish 병합 연산자 -> ??
//앞의 값이 null 또는 undefined가 아니면 앞의 값, 그 외에는 뒤의 값
console.log(null ?? 100);
console.log(undefined ?? 100);
console.log(20 ?? 100);
console.log("" ?? 100);
