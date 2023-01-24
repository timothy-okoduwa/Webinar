// Set the date we're counting down to

var countDownDate = new Date('jan 31, 2023 12:36:00').getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById('demo').innerHTML =
    '<img src="./Assets/images/alarm.png" style="width:10%">' +
    `     ` +
    `   ` +
    `    ` +
    days +
    'd ' +
    hours +
    'h ' +
    minutes +
    'm ' +
    seconds +
    's ';

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);

    document.getElementById('demo').innerHTML = 'Webinar has started! 🎊🎉';
confetti({
  particleCount: 500,
  spread: 120,
  origin: { y: 0.6 },
});
  }
}, 1000);

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();

// var toggleSubmit = function() {
//   var isDisabled = ![].some.call(document.querySelectorAll("input[type=email]"), function(input) {
//     return input.value.length;
//   });

//   var submitBtn = document.querySelector("button[type=submit]");

//   if (isDisabled) {
//     submitBtn.setAttribute("disabled", "disabled");
//   } else {
//     submitBtn.removeAttribute("disabled");

//   }

// };

// document.querySelector("form").addEventListener("input", toggleSubmit, true  );
