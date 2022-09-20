import '@/assets/css/style.css'

import '@fortawesome/fontawesome-free/js/all.js'
import '@fortawesome/fontawesome-free/css/all.css'

import { showNav } from '../js/main'

console.log('You are viewing the FORMS Page')

// SIGNUP FORM
const userInfo = () => {
  document.getElementById('btn-reset').addEventListener('click', resetUserForm)
  document.getElementById('btn-send').addEventListener('click', send)
}
const resetUserForm = (ev) => {
  ev.preventDefault()
  document.getElementById('user-info').reset()
}

const send = function (ev) {
  ev.preventDefault()
  // ev.stopPropagation()
  //or the click will travel to the form and the form will submit
  let fails = validate()
  //IF we wanted to do some async things then use a Promise with .then and .catch
  if (fails.length === 0) {
    //good to go
    document.getElementById('user-info').submit()
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
      // field.parentElement.setAttribute('data-errormsg', obj.msg)
    })
  }
}

const validate = function () {
  //let valid = true;
  let failures = []
  console.log(failures)
  //checkbox (or radio buttons grouped by name)
  let chk1 = document.getElementById('checkbox-1')
  let chk2 = document.getElementById('checkbox-2')
  // .checked .value
  if (!chk1.checked) {
    failures.push({ input: 'checkbox-1', msg: 'Must be over 18 to submit.' })
  }

  if (!chk2.checked) {
    failures.push({ input: 'checkbox-2', msg: 'Please except the term and condition to proceed' })
  }

  select
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
  const pOneVal = pwOne.value.trim()
  const pTwoVal = pwTwo.value.trim()
  // console.log(pwOne)
  // console.log(pOneVal)
  // console.log(pwTwo)
  // console.log(pTwoVal)

  //.value, .defaultValue, length of value
  if (fNameValue === '') {
    failures.push({ input: 'first-name', msg: 'First Name Required' })
  }
  if (lNameValue === '') {
    failures.push({ input: 'last-name', msg: 'Last Name Required' })
  }
  if (emailValue === '') {
    failures.push({ input: 'email-address', msg: 'A valid Email Required' })
  }
  if (pOneVal === '' || pOneVal.length < 8) {
    failures.push({ input: 'password', msg: 'Must be at least 8 chars' })
  }
  if (pTwoVal === '' || pOneVal !== pTwoVal) {
    failures.push({ input: 'c-password', msg: 'password mismatch' })
  }

  //return a boolean || an object with details about the failures
  return failures
}

showNav()
userInfo()
