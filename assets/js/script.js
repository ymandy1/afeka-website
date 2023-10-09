"use strict";

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];
for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

// === toggle navbar & overlay when click any navbar-link ===

const navbarLinks = document.querySelectorAll("[data-navbar-link]");
for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

// === email validation ===

const contactForm = document.getElementById('contact-form');
const messageContainer = document.getElementById('message-container');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(contactForm);

  fetch(contactForm.action, {
    method: 'POST',
    headers: {
      Accept: 'application/json'
    },
    body: formData
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Erro ao enviar o formulário. Status: ' + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      messageContainer.innerHTML = '<span class="success">Mensagem enviada com sucesso!</span>';
      contactForm.reset();
    })
    .catch(function (error) {
      console.error(error);
      messageContainer.innerHTML = '<span class="success">Mensagem enviada com sucesso!</span>';
    });
});


// header & go-top-btn active 
// when window scroll down to 400px 

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function(){
  if (this.window.scrollY >= 400){
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
})


// === show video after click on btn ===

const saibaMaisBtn = document.getElementById("saibaMaisBtn");
const modal = document.getElementById("modal");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.getElementById("closeBtn");

saibaMaisBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
