const form = document.querySelector(".login-form");
const emailInput = document.querySelector('input[type-email]')
const passInput = document.querySelector('input[type-password]')

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  console.log(email.value, password.value);


  if (event.currentTarget.email.value === "" || event.currentTarget.password.value === "") {
    alert('Вибачте , але всі поля потрібно заповнити!');
  }
  else {

    console.log({ email: event.currentTarget.email.value, password: event.currentTarget.password.value, });
    event.target.reset();
  }

});