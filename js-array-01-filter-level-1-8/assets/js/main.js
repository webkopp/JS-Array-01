// In dieser Übung werden wir filter() nochmal wiederholen.
// Schreibe eine Funktion geradeZahlen(), wobei die elemente durch eine boolsche Abfrage ausgewählt werden, die uns nur die geraden Zahlen zeigt
// Schreibe eine Funktion ungeradeZahlen(), wobei die elemente durch eine boolsche Abfrage ausgewählt werden, die uns nur die ungeraden Zahlen zeigt
// Gib die Ergebnisse nun in der Konsole aus.
// Ergebnisvorschau
// geradeZahlen = [2, 4, 6, 8, 10];
// ungeradeZahlen = [1, 3, 5, 7, 9];
              
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(number);

const geradezahlen = number.filter(num => num % 2 === 0)
console.log(geradezahlen);

const ungeradezahlen = number.filter(num => num % 2 !== 0)
console.log(ungeradezahlen);