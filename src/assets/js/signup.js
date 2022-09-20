const signup = () => {
  document.getElementById('reset-signup').addEventListener('click', resetSignupForm)
  document.getElementById('send-signup').addEventListener('click', sendSignupForm)
}

const resetSignupForm = (ev) => {
  ev.preventDefault()
  document.getElementById('signup-user').reset()
}

const sendSignupForm = (ev) => {
  ev.preventDefault()
  ev.stopPropagation()
  const signupModal = document.querySelector('.modal-signup')
  const overlay = document.querySelector('.ol-signup')
  const clBut = document.getElementById('send-signup')

  const openSignupModal = function (e) {
    e.preventDefault()
    signupModal.classList.remove('hidden')
    overlay.classList.remove('hidden')
  }

  const closeSignupModal = function () {
    signupModal.classList.add('hidden')
    overlay.classList.add('hidden')
  }
  // clBut.addEventListener('click', closeSignupModal)

  let fails = validate()

  if (fails === 0) {
    document.getElementById('signup-user').submit()
    closeSignupModal()
    console.log('Submitted')
  } else {
    fails.forEach(function (obj) {
      let field = document.getElementById(obj.input)
      let elErr = field.nextElementSibling

      elErr.classList.remove('hidden')
      field.classList.add('border', 'border-red-600')
      elErr.setAttribute('data-errormsg', obj.msg)
      elErr.innerText = obj.msg
      document.getElementById('signup-user')

      // 123456789
    })
  }
}

const validate = () => {
  let fName = document.getElementById('f-name')
  let lName = document.getElementById('l-name')
  let uEmail = document.getElementById('email')
  let pOne = document.getElementById('pw-1')
  let pTwo = document.getElementById('pw-2')

  // trim to remove the whitespaces
  const fNameVal = fName.value.trim()
  const lNameVal = lName.value.trim()
  const emailVal = uEmail.value.trim()
  const pwVal = pOne.value.trim()
  const cPwVal = pTwo.value.trim()
  console.log(pwVal)
  // console.log(cPWVal)

  let failures = []
  console.log(failures)

  // let fData = { fNameVal, lNameVal, emailVal, pwVal, cPwVal }
  // localStorage.setItem('users', JSON.stringify(fData))

  if (fNameVal === '') {
    failures.push({ input: 'f-name', msg: 'First Name Required' })
  }
  if (lNameVal === '') {
    failures.push({ input: 'l-name', msg: 'Last Name Required' })
  }
  if (emailVal === '') {
    failures.push({ input: 'email', msg: 'A valid Email Required' })
  }

  if (pwVal === '' || pwVal.length >= 7) {
    failures.push({ input: 'pw-1', msg: 'Must be at least 8 chars' })
  }
  if (cPwVal === '' || pwVal !== cPwVal) {
    failures.push({ input: 'pw-2', msg: 'password mismatch' })
  }

  return failures
}

signup()

// let inId = document.getElementById('f-name')
// console.log(inId.nextElementSibling)
