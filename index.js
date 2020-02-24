class Account {
  constructor(userName, balance, amount, id) {
    this.userName = userName;
    this.balance = 0;
    this.amount = amount;
    this.id = id;
  }
}

var form = document.getElementById("createUser");
form.addEventListener("submit", createUser);
var details = document.getElementById("profile");
var profile = document.getElementById("plac");
var identification = document.getElementById("identify");
var bal = document.getElementById("balance");
var depobtn = document.getElementById("depo");
depobtn.addEventListener("click", updateBalance);
var withbtn = document.getElementById("withdrawbtn");
withbtn.addEventListener("click", withDraw);
var users = [];
function createUser(e) {
  e.preventDefault();
  var newUser = new Account(
    document.getElementById("first_name").value,
    0,
    0,
    document.getElementById("id_number").value
  );
  users.push(newUser);
  form.style.display = "none";
  profile.innerHTML = "<h4>" + "Name :" + users[0].userName + "</h4>";
  identification.innerHTML = "<h5>" + "Id Number :" + users[0].id + "</h5>";
  bal.innerHTML = "<h6>" + "Balance :" + users[0].balance + "</h6>";
  details.style.display = "block";
}
function updateBalance() {
  users[0].amount = Number(prompt("How much do you want to deposit?"));
  var newBal = users[0].balance + users[0].amount;
  users[0].balance = Number(newBal);
  bal.innerHTML = "<h6>" + "Balance :" + Number(newBal) + "</h6>";
  alert("your new balance is " + users[0].balance);
}

function withDraw() {
  users[0].amount = Number(prompt("How much do you want to Withdraw?"));

  if (users[0].amount <= users[0].balance) {
    var newbalance = users[0].balance - users[0].amount;
    users[0].balance = Number(newbalance);
    bal.innerHTML = "<h6>" + "Balance :" + Number(newbalance) + "</h6>";
    alert("your new balance is " + users[0].balance);
  } else {
    alert("You do not have suffecient funds to make this transaction");
  }
}
