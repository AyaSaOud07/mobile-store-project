function validateForm() {
    var x = document.forms["Form"]["YourName"].value;
    if (x == "") {
      alert("You must Enter Your Name");
      return false;
    }
  }
  function myFunction() {
    alert("Please Enter Your Information Again");
  }