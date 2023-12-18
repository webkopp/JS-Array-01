// Wer hinzufügt, der muss es auch wieder entfernen können. Dafür können wir die array methode pop() nehmen. Bei pop() wird der letzte Wert von einem array entfernt und der entfernte Wert wird zurückgegeben. Hier nutzt du die arrays aus den vor Übungen.
// Entferne jeweils einen Wert aus deinen arrays und lasse dir den entfernten Wert in der Konsole ausgeben. Zur besseren Darstellung haben wir uns das array nochmal vor dem pop() ausgeben lassen, dann den entfernten Wert und dann das array nochmal. Schau dir die Ergebnisvorschau an.

// Um mit dem entfernten Wert weiterarbeiten zu können, sollten wir die pop() Methode in einer Variable zwischenspeichern, da der Rückgabewert vom pop() sonst verloren geht.
// Beispiel: 				let lastValue = array.pop()
                    
let person = ["nancy", "kopp", "leipzig"]
console.log(person)
person.push("travelLover", "foodLover")
console.log(person)
person.pop()
let lastValue1 = person.pop()
console.log(person.pop())
console.log(person)

let friends = ["mickey", "michelle", "maurice"]
console.log(friends)
friends.push("Drine", "Sebastian")
console.log(friends)
let lastValue2 = friends.pop()
console.log(friends.pop())
console.log(friends)

let favoriteFood = ["iceCream", "chickenSoup", "uschisNoodles"]
console.log(favoriteFood)
favoriteFood.push("Suhsi", "Pizza")
console.log(favoriteFood)
let lastValue3 = favoriteFood.pop()
console.log(favoriteFood.pop())
console.log(favoriteFood)

// let kopps = [person, friends, favoriteFood]
// console.log(kopps)