// ***** in this js version, form 1 is skipped

// Assignment Code
// starter page w/ button 
const generateBtn = document.querySelector("#generate");

// form2
// form2-buttons 
const form2Btn = document.querySelector("#form2-btn");

// fotm2-range bar and value with function to link both
const rangeBar = document.querySelector('#rangebar')
const rangeAmount = document.querySelector('#rangeamount')

rangeBar.addEventListener('input', syncBartoAmount)
rangeAmount.addEventListener('input', syncBartoAmount)


// form3
// form-3 buttons
const form3Btn = document.querySelector("#form3-btn");

// form-3 check boxes
const upperCase = document.querySelector('#UL')
const lowerCase = document.querySelector('#LL')
const numbers = document.querySelector('#num')
const special = document.querySelector('#special')


// vairiable that covers all forms
const criteria = document.querySelector('#password-criteria')

// vairiable for password
const passwordText = document.querySelector("#password");


// arrays of special symbols

const UPPERCASE_CHAR_CODES = makeCharArray(65, 90)
const LOWERCASE_CHAR_CODES = makeCharArray(97, 122)
const NUMBER_CHAR_CODES = makeCharArray(48, 57)
const SYMBOL_CHAR_CODES = makeCharArray(33, 47).concat(
  makeCharArray(58, 64)
).concat(
  makeCharArray(91, 96)
).concat(
  makeCharArray(123, 126)
)


// generate password function
function generatePassword(upperCaseChecked, lowerCaseChecked, numbersChecked, specialChecked) {
  let availableChars = []
  const passwordChars = []
  if (upperCaseChecked) password.concate(UPPERCASE_CHAR_CODES)

  if (lowerCaseChecked) password.concate(LOWERCASE_CHAR_CODES)

  if (numbersChecked) password.concate(LOWERCASE_CHAR_CODES)

  if (specialChecked) password.concate(LOWERCASE_CHAR_CODES)


  for (let i = 0; i < rangeAmount; i++) {
    const singlePasswordChar = availableChars[Math.floor(Math.random() * availableChars.length)]
    passwordChars.push(String.fromCharCode(singlePasswordChar))
  }
  const finalpassword = passwordChars.join('')

  return finalpassword
}

// functions to generate different symbols based of char codes
function makeCharArray(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// syncs rangebar to value
function syncBartoAmount(x) {
  const value = x.target.value
  rangeBar.value = value
  rangeAmount.value = value
}


generateBtn.addEventListener("click", function () {
  document.querySelector(".wrapper").style.display = "none";
  document.querySelector(".pop-up").style.display = "flex";
  document.querySelector("#form2").style.display = "flex";
})

form2Btn.addEventListener("click", function () {
  document.querySelector("#form2").style.display = "none";
  document.querySelector("#form3").style.display = "flex";
 })

form3Btn.addEventListener("click", function(){
  document.querySelector("#form3").style.display="none";
  document.querySelector(".wrapper").style.display="block"; 
  })





// //  values of length and character depededing on what the user chooses
// form3Btn.addEventListener('submit', x => {
//   x.preventDefault()
//   const Characteramount = rangeAmount.value

//   const upperCaseChecked = upperCase.checked
//   const lowerCaseChecked = lowerCase.checked
//   const numbersChecked = numbers.checked
//   const specialChecked = special.checked
  
//   document.querySelector("#form3").style.display = "none";
//   document.querySelector(".wrapper").style.display = "block";
  
//   const finalpassword = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
//   passwordDisplay.innerText = password
// })






