let faqQuestion = document.querySelectorAll(".faq_title");
let faqAnswer = document.querySelectorAll(".faq_answer");
let toggleImg = document.querySelectorAll(".faq_title img");

faqQuestion.forEach((question) =>
  question.addEventListener("click", () => {
    question.nextElementSibling.classList.toggle("faq_toggle");
    question.nextElementSibling.classList.contains("faq_toggle")
      ? (question.firstElementChild.src = "assets/images/icon-minus.svg")
      : (question.firstElementChild.src = "assets/images/icon-plus.svg");
  })
);
