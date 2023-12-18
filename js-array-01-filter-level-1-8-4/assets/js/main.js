// In dieser Übung verwenden wir filter(), um einen Array mit Zahlen zu filtern.
// Schreibe eine Funktion, die das vorgegebene Array zahlen durchläuft. 
// Das Array befindet sich im Kommentarbereich. 
// Die Funktion soll zunächst alle Zahlen filtern, die kleiner als 20 sind. 
// Gib das Ergebnis nun in der Konsole aus.
// Bonus
// Multipliziere anschließend die gefilterten Zahlen mit 2.
// Du kannst dafür eine separate Funktion schreiben oder deine vorherige Funktion anpassen. 
// Hinweise
// Verwende die filter()-Methode, um die Zahlen kleiner als 20 zu filtern und in einem neuen Array zu speichern. 
// Verwende die map()-Methode, um die gefilterten Zahlen mit 2 zu multiplizieren.
         
const myNumbers = [12, 25, 7, 18, 30, 5]
const smallThenTwenty = myNumbers.filter(el => el < 20)
console.log(smallThenTwenty)

const multipli2 = smallThenTwenty.map(el => el * 2)
console.log(multipli2)