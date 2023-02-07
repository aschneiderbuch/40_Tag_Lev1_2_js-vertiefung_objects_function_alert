console.log("test");

/* 

objekt person erstellen
Eigenschaft name -> key  : value ;

*/

const person ={
    name: "Max",
    alter: 28,
    sagNameAlter: function(){
       alert( `${this.name} ${this.alter}`) // geht
       alert(this.name + " " + this.alter)  // geht
       alert(person.name + " " + person.alter)
       console.log((person.name + " " + person.alter))
    }
}

person.sagNameAlter()