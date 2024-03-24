
// Write a program that creates objects containing these items.
// Different data type ki key value pairs hote ha typescript object:


// array me [] use hota ha or string or number rakhny walay variable me | use karty ha
// const diffName_Array :(string | number)[] = ['person','comand',5,23,'ali'];

// let personName: string ='Bilal';

// const diffName_Array :(string | number)[] = ['person','car','mouse'];

//(banday ne age string me batadi to or wese bhi interface me object ki properties define karenge)
interface person {
    age : number,
    name : string,
    nationality : string,
    student : boolean
}

// object ki properties 
let person :person = {
    age : 20,
    name : 'Bilal',
    nationality : 'Pakistani',
    student : true,
}

console.log(person);

interface car {
    name: string,
    color: string,
    price: number | string,
    warranty: number | string
}
//Object

let car :car = {
    name: 'Honda',
    color: 'black',
    price: '200k',
    warranty: '10 years'
}
console.log(car);

