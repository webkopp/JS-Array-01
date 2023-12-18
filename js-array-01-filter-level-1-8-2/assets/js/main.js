// Ziel der Aufgabe: 
// In dieser Übung verwenden wir filter(), um ein Array mit Zeichenketten zu filtern, die ein neues Array zurückgibt, das nur die Zeichenketten enthält, die 6 Zeichen oder weniger in der Länge sind.
// Schreibe eine Funktion, die das vorgegebene Array woerter durchläuft. 
// Das Array befindet sich im Kommentarbereich.
// Die Funktion soll zunächst alle Zeichenketten filtern, die die 6  Zeichen oder weniger  in der Länge haben.
// Gib das Ergebnis nun in der Konsole aus.
// Hinweis
// Schreibe die Funktion erst als normale Funktion, also mit einem normalen Funktionskörper und return. 
// Versuche anschließend die Funktion in der ES6 Schreibweise (Arrow-Function) umzuschreiben.
// Hier findest du nochmal etwas zum Syntax der Arrow-Functions. 
              
const words = ["Singapor", "Lasvegas", "Palmbeach", "Bangkok", "Captown", "Berlin", "Oslo", "Cali"];
console.log(words);

let nancyWords = () => {
    let result = words.filter(word => word.length <= 6)
    console.log(result);
}
nancyWords()

let result = words.filter(word => word.length <= 6)
console.log(result);