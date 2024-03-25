

// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.



let magicians: string[] =['Omro Ayyar','Shuff Shuff Baba','Bangali Baba','Amil Junaid Bangali'];

 function copyArr(arr:string[]){
    return[...arr];
 }

// purpose of this exercise is if an array has a value then how we can modify it with a function of that value of array 

function make_great(Great_Magicians:string[]) {

    for (let i=0; i<Great_Magicians.length; i++){

        magicians[i] = 'The Great ' + Great_Magicians[i];
    }
}
function show_magicians(black_magicians:string[]){

    black_magicians.forEach(allmagicians =>{
    
        console.log(allmagicians);
    })
}
const modified = copyArr (magicians);

make_great(modified);

console.log('\nHere are the original Array');
show_magicians(modified);




console.log('\nHere are the modified copy of the array');
show_magicians(magicians);