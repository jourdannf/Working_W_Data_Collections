const CSV = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

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
let full2dDataset = [];

//Calculate columns

const cellsColumnsSplit = CSV.split(",");
const numColumns = cellsColumnsSplit.findIndex(elem => elem.includes("\n")) + 1;

const cells = CSV.split(/[,\n]/);

cells.forEach((cell) => {

    row.push(cell);

    if (row.length === numColumns){
        full2dDataset.push([...row]);
        row.splice(0, row.length);
    }    
});

// Transforming Data

const keys = full2dDataset[0];
let dataset = {};

console.log(full2dDataset);
console.log(full2dDataset.length);

for (i=1; i < full2dDataset.length -1; i++){

}