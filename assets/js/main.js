console.log("test");

/* 

objekt person erstellen
Eigenschaft name -> key  : value ;

*/

const person ={
    name: "Max",
    alter: 28,
    sagNameAlter: function(){
      // alert( `${this.name} ${this.alter}`) // geht
       // alert(this.name + " " + this.alter)  // geht
      // alert(person.name + " " + person.alter)
       console.log((person.name + " " + person.alter))
    },
    kind: {
        augen: "braun",
        beine: 2,
        finger: [1,2,3,4,5],
        fuesse: "links rechts"


    }
}

person.sagNameAlter()

console.log(person.kind.augen) // braun 
console.log(person.kind.beine) // 2
console.log(person.kind.finger[4])  // 5 
console.log(person.kind.fuesse.split(' '))  // aus String wird -> Array erzeugt mit [links, rechts]
console.log(person.kind.fuesse.slice(0,5)) // String bleibt -> String  links   
