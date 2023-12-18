// Wenn Du Dinge am Anfang und Ende eines JavaScript-Arrays hinzufügst und entfernst, kann es schwierig sein, sich daran zu erinnern, welche Methode was tut. Hier sind einige Tipps:

// Unshift und Shift verschieben das gesamte Array seitwärts (durch Hinzufügen und Entfernen von Elementen am Anfang).
// Push und Pop verschieben das Array NICHT seitlich (weil sie am Ende Elemente hinzufügen und entfernen).
// In jedem dieser Paare (Push/Pop und Unshift/Shift) macht das längere Wort das Array länger.

// Erstelle ein Array und ordne es einer Variablen zu.
// Array mit Werte: 23, 54, 75;
// Verwende die Push-Methode, um 5 Werte in dein Array einzufügen.
// Verwende die Unshift-Methode, um 5 Werte an der Vorderseite deines Arrays hinzuzufügen.
// Verwende die Pop-Methode, um 2 Werte von der Rückseite deines Arrays zu entfernen.
// Verwende die Shift-Methode, um 2 Werte von der Vorderseite deines Arrays zu entfernen.
                    
let person = ["nancy", "kopp", "leipzig"]
console.log(person)
person.push("travelLover", "foodLover")
console.log(person)


let friends = ["mickey", "michelle", "maurice"]
console.log(friends)
friends.push("Drine", "Sebastian")
console.log(friends)

let favoriteFood = ["iceCream", "chickenSoup", "uschisNoodles"]
console.log(favoriteFood)
favoriteFood.push("Suhsi", "Pizza")
console.log(favoriteFood)

// let kopps = [person, friends, favoriteFood]
// console.log(kopps)