const form = document.getElementById('form');
const successMessage = document.querySelector('.card');


form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const emailInput = document.getElementById('email');
  const email = emailInput.value;

  
  if (validateEmail(email)) {
   
    successMessage.classList.remove('hide');
    successMessage.querySelector('p').innerHTML = `A confirmed email has been sent to ${email}. Please open it and click the button inside to confirm your subscription.`;
  }
});

n
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}


const dismissButton = successMessage.querySelector('button');
dismissButton.addEventListener('click', function() {
  successMessage.classList.add('hide'); 
});