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

// function sendMail(){
//     (function(){
//         emailjs.init("I0KjoTLZEbzVf2V-4");
//     })();

//     var params = {
//         name: document.querySelector("#name").value,
//         gemail: document.querySelector("#gemail").value, 
//         mobilenumber: document.querySelector("#mobilenumber").value,
//         message: document.querySelector("#message").value,
//     };
//     var serviceID = "service_n65g0jg";
//     var templateID = "template_gtti2fp";

//     emailjs.send(serviceID, templateID, params)
//     .then( res => {
//         alert("Email send successfully !");
//     })
//     .catch();
// }

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})




       