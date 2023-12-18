// Jetzt wo wir wissen, wie man ein array definiert, schauen wir uns an, wie wir auf die einzelnen Werte zugreifen können. Jedes Element in einem array hat einen eigenen Index. Da arrays 0-indiziert sind, fangen sie bei 0 an zu zählen.
// Wenn wir auf ein einzelnes Element zugreifen wollen, dann müssen wir den Namen des arrays mit eckigen Klammern und dem Index verwenden. Das ganze könnte so aussehen:
// 				        friends[1]
// Hinweise:
// Lasse Dir aus deinen vorhin erstellten arrays person, friends und favoriteFood die einzelnen Werte in der Konsole ausgeben 
                    
let person = ["nancy", "kopp", "leipzig"]
console.log(person)

let friends = ["mickey", "michelle", "maurice"]
console.log(friends)

let favoriteFood = ["iceCream", "chickenSoup", "uschisNoodles"]
console.log(favoriteFood)

let kopps = [person, friends, favoriteFood]
console.log(kopps)

console.log(person[0])
console.log(person[1])
console.log(person[2])

console.log(friends[0])
console.log(friends[1])
console.log(friends[2])

console.log(favoriteFood[0])
console.log(favoriteFood[1])
console.log(favoriteFood[2])