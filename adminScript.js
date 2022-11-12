showData();
function showData() {
  document.getElementById("showUsers").innerHTML = "";
  let user_data = new Array();
  user_data = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
  if (user_data) {
    for (let i = 0; i < user_data.length; i++) {
      let addDiv = document.createElement('div');
      addDiv.className = "row";
      addDiv.innerHTML = '<div class="col-sm-2 bg-dark">' + user_data[i].name + '</div><div class="col-sm-2 bg-dark">' + user_data[i].email + '</div><div class="col-sm-1 bg-dark">' + user_data[i].age + '</div><div class="col-sm-2 bg-dark">' + user_data[i].phone + '</div><div class="col-sm-2 bg-dark">' + user_data[i].adhar + '</div><div class="col-sm-2 bg-dark">' + user_data[i].address + '</div><div class="col-sm-1 bg-dark">' + user_data[i].date + '</div>';
      document.getElementById("showUsers").appendChild(addDiv);

    }
  }
}





