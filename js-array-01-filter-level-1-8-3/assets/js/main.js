// In dieser Übung verwenden wir filter(), um bestimmt Elemente zu entfernen und um ein neues Array mit den verbleibenden Elementen zu erstellen. 
// Ziel ist es alle “null” und “undefined”-Elemente zu entfernen. 
// Das Array befindet sich im Kommentarbereich. 
// Schreibe die Funktion myHeros.
// Gib das Ergebnis nun in der Konsole aus.

// Zur besseren Darstellung haben wir uns das array vor dem Schreiben der Funktion ausgeben lassen, und dann das array nochmal. Schau dir die Ergebnisvorschau an.
         
const heroArr = ["Superman", "Batman", undefined, , "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", , null]
console.log(heroArr)

const myHeroes = () => {
    let filterHero = heroArr.filter(el => el != undefined && el != null && el != 'empty')

    console.log(filterHero);
}

myHeroes()