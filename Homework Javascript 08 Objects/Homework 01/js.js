let animals = new Object 

    // Properties
    this.animalName= "Bruno";
    this.animalKind = "dog";

    // Method
    this.speak = function(saySomething){
        console.log(`${animalName} the ${animalKind} says ${saySomething}`)
    }


speak("hi!")



// let animals = new Object

//     this.animalKind = prompt("Please enter an animal.")

//     this.animalName = prompt(`Please enter the ${animalKind}'s name`);

//     this.saySomething = prompt(`And what do you want ${animalName} to say?`);

//     this.fullSentence = function (){
//         console.log(`${animalName} the ${animalKind} says ${saySomething}`)
// }


// fullSentence()

