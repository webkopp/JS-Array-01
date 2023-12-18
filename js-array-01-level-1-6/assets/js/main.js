// Die array methode shift() ist der kleine Bruder zu der array methode pop(). Denn shift() entfernt auch einen Wert aus einem array, dieses Mal allerdings den ersten Wert. Hierbei wird der erste Wert entfernt und die anderen Werte rücken mit ihren Indizes einen nach vorne.
// Entferne aus jedem deinem person array den ersten Wert und lasse dir diesen in der Konsole ausgeben. Auch hier haben wir zum besseren Verständnis uns das array vorher und danach in der Konsole ausgeben lassen. 

// Um mit dem entfernten Wert weiterarbeiten zu können, sollten wir die shift() Methode in einer Variable zwischenspeichern, da der Rückgabewert vom shift() sonst verloren geht.
// Beispiel: 				let firstValue = array.shift()
                    
let person = ["nancy", "kopp", "leipzig"]
console.log(person)
person.push("travelLover", "foodLover")
console.log(person)

person.shift()
let firstValue1 = person.shift()
console.log(person.shift())
console.log(person)


let friends = ["mickey", "michelle", "maurice"]
console.log(friends)
friends.push("Drine", "Sebastian")
console.log(friends)

friends.shift()
let firstValue2 = person.shift()
console.log(friends.shift())
console.log(friends)


let favoriteFood = ["iceCream", "chickenSoup", "uschisNoodles"]
console.log(favoriteFood)
favoriteFood.push("Suhsi", "Pizza")
console.log(favoriteFood)

favoriteFood.shift()
let firstValue3 = person.shift()
console.log(favoriteFood.shift())
console.log(favoriteFood)

// let kopps = [person, friends, favoriteFood]
// console.log(kopps)