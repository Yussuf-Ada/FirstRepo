const readline = require("readline-sync");

function passwordChecker() {
  let passwordConditions =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|=]).{8,}$/;
  let userPass = readline.question("Please enter a strong password \n");
  while (true) {
    if (passwordConditions.test(userPass)) {
      console.log("Great your password has been accepted ");
      break;
    } else {
      console.log(
        "Your password must be:\n - longer than 8 characters\n - include a uppercase letter\n - include a lowercase letter\n - include a number "
      );
      userPass = readline.question("Please enter a strong password \n");
    }
  }
}

passwordChecker();
