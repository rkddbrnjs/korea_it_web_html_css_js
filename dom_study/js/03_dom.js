const addbtn = document.querySelector(".add-btn");
let count = 1;

addbtn.onclick = () => {
  console.log("클릭됨");
  const inputName = document.querySelector("#input-name");
  const nameValue = inputName.value;
  const inputAge = document.querySelector("#input-age");
  const ageValue = inputAge.value;
  const inputAddress = document.querySelector("#input-address");
  const addressValue = inputAddress.value;

if(nameValue ==="" || ageValue === "" || addressValue === ""){
    alert("빈칸이 있습니다.")
    return;
}
  const table = document.querySelector(".table");

  table.innerHTML += `<tr>
    <td>${count}</td>
    <td>${nameValue}</td>
    <td>${ageValue}</td>
    <td>${addressValue}</td>
    </tr>`;

    count++
  inputName.value = "";
  inputAge.value = "";
  inputAddress.value = "";
};
