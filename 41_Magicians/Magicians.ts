


// Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.


let magicians: string[] =['Omro Ayyar','Shuff Shuff Baba','Bangali Baba','Amil Junaid Bangali'];

function show_magicians(black_magicians:string[]){

    black_magicians.forEach(allmagicians =>{
    
        console.log(allmagicians);
    })
}

show_magicians(magicians);