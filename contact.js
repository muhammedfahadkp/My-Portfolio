const scriptURL = 'https://script.google.com/macros/s/AKfycbyAVlPmxVZ2685Vx6BYdst3vxI-XRqDKFErSYHu3VuZOkWn7FG1k7yKLMUEyAkE6mB8/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(function() {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});
