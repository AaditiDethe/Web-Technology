function loginValidation() { //responsible for validating login1 form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    //strict equality comparision
    if (username === "" || password === "") { //checks username and password variable is an empty or not
        alert("Username and Password are required.");
        return false;
    }
    alert("Login successful!");
    return true;
}
