const cars = ['Ford', 'BMW', 'Mercedes', 'Chevy']
console.log(cars)

const moreCars = ['Saab', 'Buick', 'Toyota', 'Honda']
console.log(moreCars)

const totalCars = cars.concat(moreCars)
console.log(totalCars)

let hondaIndex = totalCars.indexOf('Honda')
console.log(hondaIndex)

let lastIndexOfFord = totalCars.lastIndexOf('Ford')
console.log(lastIndexOfFord)

let stringOfCars = totalCars.join(', ')
console.log(stringOfCars)

const carsFromString = stringOfCars.split(" ");
console.log(carsFromString)

let carsInReverse = totalCars.reverse()
console.log(carsInReverse)

carsInReverse.sort()
console.log(carsInReverse.indexOf('Toyota'));

//Pets Below//

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']

let reptilesArray = pets.slice(4,-1)
console.log(reptilesArray)
console.log(pets)

let removedReptiles = pets.splice(4,2)
console.log(removedReptiles)
console.log(pets)

let hamster = pets.splice(4,0,'hamster')
console.log(pets)

let removedPet = pets.pop()
console.log(removedPet)
console.log(pets)

pets.push("bird")
console.log(pets)

pets.shift('hamster')
console.log(pets)

pets.unshift('turtle')
console.log(pets)

//Numbers Below//

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
numbers.forEach(num => console.log(num + 2) );

//OR//

console.log([23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34].map(v=> v+2));