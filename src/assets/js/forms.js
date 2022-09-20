import '@/assets/css/style.css'

import '@fortawesome/fontawesome-free/js/all.js'
import '@fortawesome/fontawesome-free/css/all.css'

import { showNav, showLogin, showSignup } from '../js/main'

// SIGNUP FORM
const userInfo = () => {
  document.getElementById('btn-reset').addEventListener('click', resetUserForm)
  document.getElementById('btn-send').addEventListener('click', sendUserForm)
}

const resetUserForm = (ev) => {
  ev.preventDefault()
  document.getElementById('user-info').reset()
}

const sendUserForm = function (ev) {
  ev.preventDefault()
  ev.stopPropagation()
  //or the click will travel to the form and the form will submit
  let fails = validate()
  //IF we wanted to do some async things then use a Promise with .then and .catch
  if (fails.length === 0) {
    //good to go
    document.getElementById('user-info').submit()
    window.location.href = '/'
    alert('Form successfully submitted')
  } else {
    //there are some errors to display
    //bad user
    //let err = document.querySelector('.error');
    //let input = err.querySelector('input');
    //err.setAttribute('data-errormsg', ` ... Missing ${input.placeholder}`);
    fails.forEach(function (obj) {
      let field = document.getElementById(obj.input)

      let elErr = field.nextElementSibling

      elErr.classList.remove('hidden')
      field.classList.add('border', 'border-red-600')
      elErr.setAttribute('data-errormsg', obj.msg)
      elErr.innerText = obj.msg

      // let field = document.getElementById(obj.input)
      // field.parentElement.classList.add('error')
      // field.parentElement.setAttribute('data-errormsg', obj.msg)123456789
    })
  }
}

const validate = function () {
  //let valid = true;
  let failures = []
  console.log(failures)

  let chk1 = document.getElementById('checkbox-1')
  let chk2 = document.getElementById('checkbox-2')
  // .checked .value
  if (!chk1.checked) {
    failures.push({ input: 'checkbox-1', msg: 'Must be over 18 to submit.' })
  }

  if (!chk2.checked) {
    failures.push({ input: 'checkbox-2', msg: 'Please except the term and condition to proceed' })
  }

  let select = document.getElementById('country')
  if (select.selectedIndex === 0) {
    failures.push({ input: 'country', msg: 'Select a country of Origin' })
  }

  //inputs for text, email, tel, color, number...
  let firstName = document.getElementById('first-name')
  let lastName = document.getElementById('last-name')
  let email = document.getElementById('email-address')
  let pwOne = document.getElementById('pw-one')
  let pwTwo = document.getElementById('pw-two')

  // trim to remove the whitespaces
  const fNameValue = firstName.value.trim()
  const lNameValue = lastName.value.trim()
  const emailValue = email.value.trim()
  const pOneValue = pwOne.value.trim()
  const pTwoValue = pwTwo.value.trim()

  // Storing and checking the entries in Localstorage
  let formData = JSON.parse(localStorage.getItem('formData')) || []

  // let formData = { fNameValue, lNameValue, emailValue, pOneValue, pTwoValue }
  // localStorage.setItem('data', JSON.stringify(formData))

  let entExist =
    formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(
      (data) =>
        data.fNameValue.toLowerCase() == fNameValue.toLowerCase() &&
        data.lNameValue.toLowerCase() == lNameValue.toLowerCase()
    )

  if (!entExist) {
    formData.push({ fNameValue, lNameValue, email, pOneValue, pTwoValue })
    localStorage.setItem('formData', JSON.stringify(formData))
    alert('Account Created.\n\nPlease Sign In using the link below.')
  } else {
    alert('Ooopppssss... Duplicate found!!!\nYou have already sigjned up')
  }

  if (fNameValue === '') {
    failures.push({ input: 'first-name', msg: 'First Name Required' })
  }
  if (lNameValue === '') {
    failures.push({ input: 'last-name', msg: 'Last Name Required' })
  }
  if (emailValue === '') {
    failures.push({ input: 'email-address', msg: 'A valid Email Required' })
  }
  if (pOneValue === '' || pOneValue.length < 8) {
    failures.push({ input: 'pw-one', msg: 'Must be at least 8 chars' })
  }
  if (pTwoValue === '' || pOneValue !== pTwoValue) {
    failures.push({ input: 'pw-two', msg: 'password mismatch' })
  }

  //return a boolean || an object with details about the failures
  return failures
}

showNav()
showLogin()
showSignup()
userInfo()

console.log('You are viewing the FORMS Page')
