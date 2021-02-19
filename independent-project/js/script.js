const myForm = document.getElementById("myForm"); //gets element by id of myForm

const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

myForm.addEventListener("submit",(e) => {
    e.preventDefault(); //stop default bahavior of the browser redirecting to a different page
    const formData = new FormData(e.target); // collect inputs from HTML elements
    var dateEntered = new Date(formData.get("date")); // convert Date inputs to Date objects
    if (formData.get("gender") == "male") {
        document.getElementById('message').innerHTML = "Your Akan name is " + maleNames[dateEntered.getDay()];
    } else {
        document.getElementById('message').innerHTML = "Your Akan name is " + femaleNames[dateEntered.getDay()];
    }

});