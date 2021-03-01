//exercise 1
footer = document.querySelector("footer");
footer.addEventListener("click", function() {
    console.log("clique ")
})

//exercise 1 bis
footer = document.querySelector("footer");
x = 1
footer.addEventListener("click", function() {
    console.log("clique numéro " + x)
    x++
})

//exercise 2

navig = document.getElementById("navbarHeader");
burger = document.querySelector("button", ".navbar-toggler");

burger.addEventListener("click", function() {
    navig.classList.toggle("collapse");
    
})

//exercise 3


card = document.querySelectorAll(".btn-outline-secondary")[0];

cardText = document.querySelectorAll(".card-text")[0];
card.addEventListener("click", function() {
    
    cardText.style.color = "red";
    
})

//exercise 4


cardTwo = document.querySelectorAll(".btn-outline-secondary")[1];

secondCard = document.querySelectorAll(".card-text")[1];
cardTwo.addEventListener("click", function() {
    if (secondCard.style.color === 'green'){
        secondCard.style.color = '' ; 
    }else {secondCard.style.color = "green";}
    
})


//exercise 5

navbar = document.querySelector("header");

lien = document.querySelector("head").querySelector("link");

navbar.addEventListener("dblclick", function() {
    if (lien.href === 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'){
        lien.href = '';
    }else {lien.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';}
    
})