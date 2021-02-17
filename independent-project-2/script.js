const myForm = document.getElementById("myForm");

const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

myForm.addEventListener("submit",(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    var dateEntered = new Date(formData.get("date"));
    if (formData.get("gender") == "male") {
        alert("Your Akan name is " + maleNames[dateEntered.getDay()]);
    } else {
        alert("Your Akan name is " + femaleNames[dateEntered.getDay()]);
    }

});