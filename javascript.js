//Objekt m. egenskaber.
let character = {
    firstname: "Codemaster",
    level: "30",
    class: "warrior",
    spec: "protection",
    hometown: "Kolding",
}

//dot notation
console.log(character.firstname)
console.log(character.level)
console.log(character.class)
console.log(character.spec)
console.log(character.hometown)

 //bracket notation
console.log(character["firstname"])
console.log(character["level"])
console.log(character["class"])
console.log(character["spec"])
console.log(character["hometown"])


//opgave 2. Nestede objekter
let aboutme = {
    firstname: "Mathias",
    lastname: "Agzigüzel Sørensen",
    age: 30,
    hobbies: ["programming","music","bodybuilding","long walks", "fotography",], //nestede objekter
    married: true,
    wifey: {
        name: "Zeliha",
        proffession: "Counseling", //Nestede objekter.
        hobbies: "politics",
    }
}

//Løkke som udskriver nestede objekter under hobbies
aboutme.hobbies.forEach(function(hobby) {
    console.log(hobby)
  })