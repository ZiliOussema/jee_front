function show() {
    var password = document.getElementById("password");
    var icon = document.getElementById("show");

    // ========== Checking type of password ===========
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }