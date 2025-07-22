//웹페이지의 리소스가 전부 로드가 다 되었을때를 의미
//브라우저에 웹페이지가 켜질 때 
window.onload = () => {
    const root = document.querySelector("#root")

    //여기서 랜더링을 시켜주는 함수 호출
    render(root);
}

function render(targetElement){
    targetElement.innerHTML = app();
}