"use stricr";
(function() {
  const referenceNumber_1 = document.querySelector(".reference_number_1");
  const referenceNumber_2 = document.querySelector(".reference_number_2");
  const answer = document.querySelector(".answer");
  const signQuestion = document.querySelector(".signquestion");

  const kidsInput_1 = document.querySelector(".kids_input_1");
  const kidsInput_2 = document.querySelector(".kids_input_2");

  const arrowRound_1 = document.querySelector(".arrow-round_1");

  function kidsInputHandler_1() {
    if (referenceNumber_1.value !== kidsInput_1.value) {
      kidsInput_1.classList.add("error");
      referenceNumber_1.classList.add("error-background");
    } else {
      kidsInput_1.disabled = true;
      kidsInput_1.classList.add("right-answer");
      kidsInput_2.style.display = "block";
      kidsInput_2.focus();
      referenceNumber_1.style.background = "white";
      arrowRound_1.style.display = "block";
    }
  }

  function kidsInputHandler_2() {
    if (referenceNumber_2.value !== kidsInput_2.value) {
      kidsInput_2.classList.add("error");
      referenceNumber_2.classList.add("error-background");
    } else {
      kidsInput_2.disabled = true;
      kidsInput_2.classList.add("right-answer");
      arrowRound_1.style.display = "block";
      answer.style.display = "block";
      signQuestion.style.display = "none";
      referenceNumber_2.style.background = "white";
      answer.focus();
    }
  }

  function answerInputHandler() {
    if (answer.value < 11 || answer.value > 11) {
      answer.classList.add("error");
    } else {
      answer.classList.add("right-answer");
      answer.disabled = true;
    }
  }

  kidsInput_1.addEventListener("input", kidsInputHandler_1);
  kidsInput_2.addEventListener("input", kidsInputHandler_2);
  answer.addEventListener("input", answerInputHandler);
})();
