
function submitFunction() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var age = document.getElementById("age").value;
  var phone = document.getElementById("phone").value;
  var adhar = document.getElementById("adhar").value;
  var address = document.getElementById("address").value;
  var date = document.getElementById("date").value;

  var user_data = new Array();
  user_data  = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
  
    user_data.push({
      "name": name,
      "email": email,
      "age": age,
      "phone": phone,
      "adhar": adhar,
      "address": address,
      "date": date,
  })

  localStorage.setItem("users",JSON.stringify(user_data));
 
}
  




 
