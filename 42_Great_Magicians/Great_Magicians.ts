


// 42. Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.


let magicians: string[] =['Omro Ayyar','Shuff Shuff Baba','Bangali Baba','Amil Junaid Bangali'];


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
make_great(magicians);
show_magicians(magicians);