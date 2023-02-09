//Objekt m. egenskaber og værdier
let person = {
    firstname: "Mathias",
    lastname: "Agzigüzel Sørensen",
    age: "30",
    gender: "♂",
    proffesion: "Web developer",
    hometown: "Kolding",

}

//Dot notation.  Det er en syntaks, der bruges til at få adgang til objektets egenskaber eller metoder i objektorienteret programmering. 
//Det bruges til at få adgang til et objekts attributter eller til at kalde dets metoder. 
//I punktnotationen følger navnet på objektet en punktum (.) og navnet på egenskaben eller metoden.
console.log(person.firstname)
console.log(person.lastname)

console.log(person.age)
console.log(person.gender)

console.log(person.proffesion)
console.log(person.hometown)

//Bracket notation. Det er en anden syntaks, der bruges til at få adgang til objektets egenskaber eller elementer i programmering. 
//Det ligner punktnotation, men i stedet for at bruge et punktum (.) til at få adgang til objektets egenskaber eller elementer, bruges klammer [].
//Udtrykket indeni klammene kan enten være en tekstliteral eller en variabel, der indeholder en tekst, der repræsenterer egenskaben eller elementet, du vil få adgang til.
console.log(person["firstname"])
console.log(person["lastname"])

console.log(person["age"])
console.log(person["gender"])

console.log(person["proffesion"])
console.log(person["hometown"])


//opgave 2. Nestede objekter er objekter, der er indlejret i andre objekter. Det betyder, at et objekt kan have en eller flere andre objekter som egenskaber. 
//Dette giver mulighed for at organisere data på en struktureret måde og gøre det mere læsbart og brugbart.
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

//Bruger en funktion kaldet: "forEach" til at gennemgå listen af elementerne i variablen aboutme.hobbies.
//Funktionen bliver derfor udført for hvert element der er i listen: ["programming","music","bodybuilding","long walks", "photography",]
//I funktionen ser vi navnet hobby. Det er ligegyldigt hvad navnet er, det skal bare være noget som giver mening for udvikleren.
//At give hobby som argument til forEach() gør det nemmere at arbejde med elementerne i listen, da man ikke behøver at bekymre sig om at vælge det næste element i listen manuelt. I stedet bliver det gjort automatisk af forEach().
aboutme.hobbies.forEach(function(hobby) {
    console.log(hobby)
  })

//
  for (const key in aboutme.wifey) {
    console.log(`${key}: ${aboutme.wifey[key]}`);
  }