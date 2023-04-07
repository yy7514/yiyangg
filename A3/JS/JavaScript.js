/* toggle between 3 color modes */
const firstThemeBtn = document.querySelector("#first");
const secondThemeBtn = document.querySelector("#second");
const thirdThemeBtn = document.querySelector("#third");

firstThemeBtn.addEventListener("change", () => {
  document.querySelector("body").classList.remove("light");
  document.querySelector("body").classList.remove("dark");
  localStorage.setItem("theme", "default");
});

secondThemeBtn.addEventListener("change", () => {
  document.querySelector("body").classList.remove("default");
  document.querySelector("body").classList.remove("dark");
  document.querySelector("body").classList.add("light");
  localStorage.setItem("theme", "light");
});

thirdThemeBtn.addEventListener("change", () => {
  document.querySelector("body").classList.remove("default");
  document.querySelector("body").classList.remove("light");
  document.querySelector("body").classList.add("dark");
  localStorage.setItem("theme", "dark");
});


/* contact information input validation */
function validateForm(event) {
    let myForm = document.getElementById("contactForm");
    myForm.fname.style.backgroundColor = "";
    myForm.lname.style.backgroundColor = "";
    myForm.message.style.backgroundColor = "";
      
    if (myForm.fname.value === "") {
      myForm.fname.style.backgroundColor = "yellow";
      console.log("invalid input");
      event.preventDefault();
    }
    if (myForm.lname.value === "") {
      myForm.lname.style.backgroundColor = "yellow";
      console.log("invalid input");
      event.preventDefault();
    }
    if (myForm.message.value === "") {
      myForm.message.style.backgroundColor = "yellow";
      console.log("invalid input");
      event.preventDefault();
    }
  }
  
let myForm = document.getElementById("contactForm");
myForm.addEventListener("submit", validateForm);
  

/* show different article with conditional */
function showArticle(articleId) {
  const articles = document.querySelectorAll(".article");
  articles.forEach(article => article.style.display = "none");

  const selectedArticle = document.querySelector(`#${articleId}`);
  selectedArticle.style.display = "block";

  const buttons = document.querySelectorAll(".button-container button");
  buttons.forEach(button => {
    if (button.id === `button${articleId.slice(-1)}`) {
      button.classList.add("active");
    } 
    else {
      button.classList.remove("active");
    }
  });
}


/* show a notification as soon as a user navigates to the contact page */
const contactForm = document.querySelector("#contactForm");

window.onload = function() {
  alert("Please contact me for any questions or inquiries.");
};

