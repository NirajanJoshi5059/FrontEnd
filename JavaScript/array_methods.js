let data=[5,14,17,10,21]
// add to last
data.push(7)
console.log(data)

// remove from last
console.log(data.pop())
console.log(data)

// remove from first
console.log(data.shift())
console.log(data)

// add to first
console.log(data.unshift(7))
console.log(data)

// remove from anywhere
// splice(index, number, add_val1, add_val2)
console.log(data.splice(2,1,26,25))
console.log(data)