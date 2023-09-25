// var tableskill = document.getElementsByClassName("skillname");
// var educationtable = document.getElementsByClassName("tableeducation");

// function opentab(tabname){
//     for(tableskill of tableskill){
//         tableskill.classList.remove("skillactive");
//     }
//     for(educationtable of educationtable){
//         educationtable.classList.remove("ted");
//     }
//     event.currentTarget.classList.add("skillactive");
//     document.getElementById(tabname).classList.add("ted");
// }

function sendMail(){
    (function(){
        emailjs.init("I0KjoTLZEbzVf2V-4");
    })();

    var params = {
        name: document.querySelector("#name").value,
        gemail: document.querySelector("#gemail").value, 
        mobilenumber: document.querySelector("#mobilenumber").value,
        message: document.querySelector("#message").value,
    };
    var serviceID = "service_n65g0jg";
    var templateID = "template_gtti2fp";

    emailjs.send(serviceID, templateID, params)
    .then( res => {
        alert("Email send successfully !");
    })
    .catch();
}
