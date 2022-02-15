console.log('Hello world!')
/*
undefined, null, boolean, string, symbol, number, and object
*/
var myName = 69 // Can be used everywhere in the program
myName = 'Ayoub'
let ourName = 'Something' // Only used in the scopec declared in
const pi = 3.14
console.log(ourName)

const person = {
  firstName: 'Ayoub',
  lastName: 'Maimmadi',
  age: 21,
  eyeColor: 'brown',
}

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
person.age = 31
console.log(person.age)

var sum = 10 + 10
sum -= 1
console.log(++sum)

var a = 'Ayoub'
var b = 'Maimmadi'
console.log(a + '\' "" \'' + b)

function add(a, b) {
  return a + b
}
console.log(add(85, 15) + ' noobs')

function nextInline(Arr, item) {
  Arr.push(item)
  return Arr.shift()
}
var testArr = [1, 2, 3, 4, 5]
console.log('Before' + JSON.stringify(testArr))
console.log(nextInline(testArr, 6))
console.log('After' + JSON.stringify(testArr))

if (10 == '10') {
  console.log('true')
} // 10 == '10' ==> true
if (!(10 === '10')) {
  console.log('true')
} // 10 === '10' ==> false

function checkTime(time) {
  if (time < 10) {
    return 'Good morning'
  } else if (time < 20) {
    return 'Good day'
  } else {
    return 'Good evening'
  }
}
console.log('if else ==> ' + checkTime(10))

// let does not let you declare a name twice
// or is || in js for some fkn reason
// we can return undefined
// const is constant (read only)
var MyArr = []
for (var i = 1; i <= 5; i++) {
  MyArr.push(i)
}
console.log('Adding to the array ==>')
console.log(MyArr)
console.log(MyArr.pop())
console.log('Radom number (0-19)=> ' + Math.floor(Math.random() * 20))

var i = 1
var sexy = true ? i == 1 : i != 1
console.log('Is it sexy? ---> '.toUpperCase(), sexy)

let date = new Date().getFullYear()
console.log(`The curent year is ${date}`)
