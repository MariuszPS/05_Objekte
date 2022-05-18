
/***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");


/***** Objekte 1 Daten/Funktionen *******/

let person =    {
                        firstName: "Christof",
                        famillyName: "Psurek",
                        salary: [120000,160000],
                        permission: true,
                        sayHello: 
                        function (){
                           return "Hallo, " + this.firstName;
                        }
                 };

// output(person);
// output(person.firstName);
// output(person.permission);

const txt =     "Ich bin " + person.firstName + " " + 
                person.famillyName + " und verdiene " +  
                person.salary[0] + " p.a" +
                ".";

// output(txt);       
// output(person.sayHello());           


/***** Objekte 2 - Hierarchie *******/
// Tiefer, tiefer - Irgendwo in der Tiefe gibt es ein Licht // K.Bush
// Der Baikalsee ist mit 1642 m der tiefste See der Erde. ...
// deep - deeper - deepest

const baikal = {
        value:"10m",
        deep:{
                deeper:{
                        deepest:"Das Licht - auf 1642m!"
                }
        }
};

output(baikal);
output(baikal.value);
output(baikal.deep.deeper.deepest);

/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}