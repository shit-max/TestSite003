const username = document.querySelector("#username");
const password = document.querySelector("#password");
const Submit =  document.querySelector("#Submit");


Submit.addEventListener("click",login)




function login() {
 
    const usernameValue = username.value; 
    const passwordValue = password.value; 
    
    // Check if username exists
    if (!storedUsers || !storedUsers[usernameValue]) {
        alert("username not found");
        return;
    }

    // Check if password matches
    if (storedUsers[usernameValue].password !== passwordValue) {
        alert("Wrong password");
        return;
    }
    // If we get here, login is successful

    
    alert("Login successful!");
}
