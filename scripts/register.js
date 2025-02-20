const username = document.querySelector("#username");
const password = document.querySelector("#password");
const Submit = document.querySelector("#Submit");
const email = document.querySelector("#email")
const ageCheck =  document.querySelector("#age")



Submit.addEventListener("click", creation);
let users = {};
function creation() {
    // Get the input values
    const usernameValue = username.value;
    const passwordValue = password.value;
    const emailValue = email.value; 
    
    if (!ageCheck.checked){
        alert("please check your age")
        return;
    }

    // Don't redeclare variables that are already parameters
    if (!usernameValue || !passwordValue || !emailValue) {
        alert("Please fill in all fields");
        return;
    }

    // Use an object instead of array for better clarity
    const userData = {
        password: passwordValue,
        email: emailValue
    };

    // Store the user data
    users[usernameValue] = userData;
    localStorage.setItem('userInfo', JSON.stringify(users));
    // Clear the input fields
    username.value = "";
    password.value = "";
    email.value = "";
    console.log(users);
}

