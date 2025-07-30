const API_BASE_URL = "http://localhost:8080";

//메뉴
const navSignin = document.querySelector("#nav-signin");
const navSignup = document.querySelector("#nav-signup");
const navBoard = document.querySelector("#nav-board");
const navWrite = document.querySelector("#nav-write");

//페이지
const pageSignin = document.querySelector("#page-signin");
const pageSignup = document.querySelector("#page-signup");
const pageBoard = document.querySelector("#page-board");
const pageWrite = document.querySelector("#page-write");

//로그인 및 회원가입 폼
const signupForm = document.querySelector("#signup-form");
const signinForm = document.querySelector("#signin-form");

//게시판 목록
const boardList = document.querySelector("#board-list");

//게시판 추가
const writeForm = document.querySelector("#write-form")
let boards = [];

//AccessToken 디코딩
function getPayload() {
  const token = localStorage.getItem("AccessToken");
  if (!token) {
    alert("로그인이 필요합니다.");
    changePages(pageSignin);
    return null;
  }
  try{
    //토큰을 . 기준으로 분리해서 payload를 가져온다.
    const payloadBase64 = token.split(".")[1]
    //디코딩
    const decodePayload = atob(payloadBase64)
    //디코딩된 JSON문자열을 자바스크립트 객체로 변환
    const payload = JSON.parse(decodePayload)

    return payload;
  }catch(error){
    console.log(error)
    alert("토큰 오류 발생")
  }
}
// 페이지 전환 함수
function changePages(pageElement) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });
  pageElement.classList.add("active");
}

//게시판 목록 조회 및 표시 함수
//게시판 목록 버튼 눌렀을때, 로그인 되었을때
async function renderBoard() {
  //요청을 보내기전에 AccessToken 빼오기
  const accessToken = localStorage.getItem("AccessToken");

  //만약에 로컬 스토리지에 AccessToken이 없으면 로그인 페이지로 전환
  if (!accessToken) {
    changePages(pageSignin);
    alert("로그인이 필요합니다.");
    return;
  }

  //요청 보내기
  try {
    const response = await fetch(`${API_BASE_URL}/board/list`, {
      method: "GET",
      //fetch에서 headers안에 Authorization: `Bearer ${AccessToken}`
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const responseData = await response.json();

    if (responseData.status !== "success") {
      alert(responseData.message);
      //게시물 작성 페이지로 전환
    } else {
      //요청해서 받아온 게시물들 foreach => ul안에 li로 넣기
      boards = responseData.data;
      boardList.innerHTML += "";
      boards.forEach((board) => {
        boardList.innerHTML += `<li>${board.title}</li>`;
      });

      changePages(pageBoard);
    }
  } catch (error) {
    console.log(error);
    alert("게시물 목록 조회 중 오류가 발생했습니다.");
  }
}

//게시물 추가 요청 함수
async function addBoard(event){
  event.preventDefault();
  const userInfo = await getPayload();
  console.log(userInfo)
}

//로그인 요청 함수
async function signinHandler(event) {
  event.preventDefault();

  const usernameInput = document.querySelector("#signin-id");
  const passwordInput = document.querySelector("#signin-password");

  const signinData = {
    username: usernameInput.value,
    password: passwordInput.value,
  };

  if (!signinData.username || !signinData.password) {
    alert("아이디 또는 비밀번호를 모두 입력해 주세요.");
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signinData),
    });

    const responseData = await response.json();

    if (responseData.status !== "success") {
      alert(responseData.message);
    } else {
      alert(responseData.message);
      localStorage.setItem("AccessToken", responseData.data);
      signinForm.reset();

      //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      //+++++++++++++++++++++++게시판 목록으로 전환+++++++++++++++++++++++++++++
      //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      await renderBoard();
      changePages(pageBoard);
    }
  } catch (error) {
    console.log(error);
    alert("서버와 통신 중 오류가 발생했습니다.");
  }
}

//회원가입 요청 함수
async function signupHandler(event) {
  event.preventDefault(); //폼의 기본 동작을 막기위해

  const usernameInput = document.querySelector("#signup-id");
  const passwordInput = document.querySelector("#signup-password");
  const emailInput = document.querySelector("#signup-email");

  //서버로 보낼 회원가입 데이터를 객체로 만듦
  const signupData = {
    username: usernameInput.value,
    password: passwordInput.value,
    email: emailInput.value,
  };

  //입력값이 비어있는지 확인
  if (!signupData.username || !signupData.password || !signupData.email) {
    alert("모든 항목을 입력해주세요.");
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: "POST", //요청 방식 POST
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData), //자바스크립트 객체를 json 문자열로 변환
    });

    const responseData = await response.json(); //요청 응답 결과

    if (responseData.status !== "success") {
      alert(responseData.message);
    } else {
      alert(responseData.message);
      signupForm.reset(); //폼의 입력내용 초기화
      changePages(pageSignin);
    }
  } catch (error) {
    //요청 자체에 실패한 경우(문제가 생겼을 경우)
    console.log("회원가입 요청 요류 발생:", error);
    alert("회원가입 요청에 오류가 발생했습니다.");
  }
}

navSignin.addEventListener("click", () => {
  changePages(pageSignin);
});
navSignup.addEventListener("click", () => {
  changePages(pageSignup);
});
navBoard.addEventListener("click", renderBoard);
navWrite.addEventListener("click", () => {
  changePages(pageWrite);
});

signupForm.addEventListener("submit", signupHandler);
signinForm.addEventListener("submit", signinHandler);
writeForm.addEventListener("submit", addBoard)