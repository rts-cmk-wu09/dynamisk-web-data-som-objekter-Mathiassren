//Objekt m. egenskaber.
let person = {
    firstname: "Mathias",
    lastname: "Agzigüzel Sørensen",
    age: "30",
    gender: "♂",
    proffesion: "Web developer",
    hometown: "Kolding",

}

//dot notation
console.log(person.firstname)
console.log(person.lastname)
console.log(person.age)
console.log(person.gender)
console.log(person.proffesion)
console.log(person.hometown)

//bracket notation
console.log(person["firstname"])
console.log(person["lastname"])
console.log(person["age"])
console.log(person["gender"])
console.log(person["proffesion"])
console.log(person["hometown"])


//opgave 2. Nestede objekter
let aboutme = {
    firstname: "Mathias",
    lastname: "Agzigüzel Sørensen",
    age: 30,
    hobbies: ["programming","music","bodybuilding","long walks", "photography",], //nestede objekter
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