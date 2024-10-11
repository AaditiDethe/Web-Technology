function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

   // This function checks the name, email, phone number fields are filled or not
   //If not filled, then prevents the submission and displays alert message.

    if (!name || !email || !phone) {
        alert("Please fill in all required fields.");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}
// Javascript file handles form validation