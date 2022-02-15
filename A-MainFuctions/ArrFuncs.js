const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
]
// Filter
const filteredItems = items.filter((item) => {
  return item.price <= 100
})
console.log('Filtered items:')
console.log(filteredItems)
// Map
const itemNames = items.map((item) => {
  return item.name
})
console.log('Maped item names:')
console.log(itemNames)
// Find
const foundItems = items.find((item) => {
  return item.name === 'Book'
})
console.log('Found item:')
console.log(foundItems)
// forEach (for loop)
console.log('For Each item:')
items.forEach((item) => {
  console.log(`Name: ${item.name}\t Price: ${item.price}`)
})
// Reduce
const total = items.reduce((curTotal, item) => {
  return item.price + curTotal
}, 0)
console.log(`Current total (reduce): $${total}`)
// Some
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100
})
console.log(`Has Inexpensive Items (some): ${hasInexpensiveItems}`)
// Every
const checkEveryItem = items.every((item) => {
  return item.price <= 1000
})
console.log(`Every Item is less than 1000: ${checkEveryItem}`)
// Include
const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const includesNine = arr.includes(9)
console.log(`The array includes nine: ${includesNine}`)
