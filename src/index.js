//DOM
const button = document.getElementById("addBtn");
const table = document.getElementById("table-user");

// 関数（メソッド）
async function callWebApi() {
  const users = await getUsers();

  users.forEach(addList);
}

async function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  //  console.log("url:" + url);
  const res = await fetch(url);
  return await res.json();
}

function addList(user) {
  let newRow;
  let newCell;
  let newText;
  newRow = table.insertRow();

  newCell = newRow.insertCell(0);
  newText = document.createTextNode(user.name);
  newCell.appendChild(newText);

  newCell = newRow.insertCell(1);
  newText = document.createTextNode(user.email);
  newCell.appendChild(newText);
}

button.addEventListener("click", callWebApi);
