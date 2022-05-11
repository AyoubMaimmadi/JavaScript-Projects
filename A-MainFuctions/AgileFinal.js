const checkMobileNumber = (mobileNumber) => {
  const regex = /^\+212[0-9]{8}$/
  return regex.test(mobileNumber)
}

// array of numbers to check
const numbers = ['+21265756613', '+132665756613']

// loop through the array and check each number
numbers.forEach((number) => {
  if (checkMobileNumber(number)) {
    console.log(`${number} is a valid number\t\tOk`)
  } else {
    console.log(`${number} is not a valid number\tFAIL`)
  }
})
