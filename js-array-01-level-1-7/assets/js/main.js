// Die array Methode unshift() ist der kleine Bruder der array Methode push(). Denn unshift() fügt einen Wert zum array hinzu, dieses mal vorne und nicht hinten wie push(). Hierbei wird vorne einfach ein Wert hinzugefügt und die Indizes von allen anderen Werten im array rücken einen nach hinten.
// Füge deinem array friends und favoriteFood mindestens 2 Werte hinzu und lasse dir diesen in der Konsole ausgeben. Auch hier haben wir zum besseren Verständnis uns das array vorher und danach in der Konsole ausgeben lassen. 

// Genauso wie bei push() kannst du mit unshift() einen Wert hinzufügen oder gleich mehrere gleichzeitig. Probiere beides einmal aus.
                    
let person = ["nancy", "kopp", "leipzig"]
console.log(person)
person.push("travelLover", "foodLover")
console.log(person)


let friends = ["mickey", "michelle", "maurice"]
console.log(friends)
friends.push("Drine", "Sebastian")
console.log(friends)

friends.unshift("Naddel", "Claudia")
console.log(friends)


let favoriteFood = ["iceCream", "chickenSoup", "uschisNoodles"]
console.log(favoriteFood)
favoriteFood.push("Suhsi", "Pizza")
console.log(favoriteFood)

favoriteFood.unshift("fried prawn", "watermelon")
console.log(favoriteFood)

// let kopps = [person, friends, favoriteFood]
// console.log(kopps)