const CSV = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

//  Refactoring Old Code

// let row = [];


// const cells = CSV.split(/[,\n]/);

// cells.forEach((cell) => {
//     row.push(cell);
//     if (row.length === 4){
//         console.log(row);
//         row.splice(0, row.length);
//     }    
// })


//Expanding Code

let row = [];
let fullDataset = [];

//Calculate columns

const cellsColumnsSplit = CSV.split(",");
const numColumns = cellsColumnsSplit.findIndex(elem => elem.includes("\n")) + 1;

const cells = CSV.split(/[,\n]/);

cells.forEach((cell) => {

    row.push(cell);

    if (row.length === numColumns){
        fullDataset.push([...row]);
        row.splice(0, row.length);
    }    
});

// Transforming Data

fullDataset[0].forEach((cell, i) => {
    fullDataset[0][i] = cell.toLowerCase();
});

const keys = fullDataset[0]
let people = [];



for (i=1; i < fullDataset.length; i++){
    //Set up an ojbect
    //Loop through the fullDataset[i]
    //Loop through array
    //For each elem assign a key based on keys[j]

    let person = {};
    fullDataset[i].forEach((cell, j) => {
        person[keys[j]] = cell;
    });
    people.push(person);
}

console.log(people);

//Sorting and Manipulating Data

//Remove the last element from array
//Insert object at index 1
//Add object to end of array
//Get average of everyone's age

people.pop();
people.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" });
people.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(people);

let sum = 0;
for (let i = 0; i < people.length; i++){
    sum += Number(people[i].age);
}

console.log("The average age is " + sum/people.length);

//Full Circle
//Transform data back into CSV

//Use key method to turn headings into an array
//Use toString method to transform it into a string
//Add newline character to the end of the string
//Loop through array and for every object use values methods to get rest of data into arrays
//For every array add newline character to end of the string
//Concatenate every string formed w newline character to one with headings
//If you're on the last array, then don't add newline character

let newCSV = Object.keys(people[0]).toString() + "\\n";

people.forEach((person,i) => {
    if (i === people.length-1) {
        newCSV += Object.values(person).toString()
    }else {
        newCSV += Object.values(person).toString() + "\\n";
    }
});

console.log(newCSV);