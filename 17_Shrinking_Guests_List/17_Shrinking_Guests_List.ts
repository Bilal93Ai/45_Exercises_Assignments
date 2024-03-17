
let Guest_list :string[] = ['Imran','Nawaz','Zardari'];

// for(let i=0; i<Guest_list.length ; i++){

//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n \nThank you!\n')
// }

let absent_guest :string = 'Imran' ;

let new_guest :string = 'Kamran Tessori' ;

Guest_list[0] = new_guest ;

// for(let i=0; i<Guest_list.length ; i++){

//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n \nThank you!\n')
// }

console.log(`Mr. ${absent_guest} is not coming to the party.`) ;

console.log('\n Good News! We find big table so we are inviting 3 more guests.\n')

// adding 3 guests in array

Guest_list.unshift('Sir Zia Khan');
Guest_list.splice(2 , 0 , 'Maryam Nawaz');
Guest_list.push('Bilawal Bhutto');

// printing 6 guests on the array

for(let i=0; i<Guest_list.length ; i++){

    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n \nThank you!\n')
}
// Sorrying guests for not inviting

console.log('\nsorry we cannot arrange big table, only two persons are invited\n')

// Removing persons in below code...4 getting removed and 2 are just invited
// Pop for removing persons from Last

while(Guest_list.length > 2){
    let remove_Guest = Guest_list.pop();
    console.log(`\nSorry Mr. ${remove_Guest}, \nYou are not invited for Dinner.\n`);
}
// Remaining 2 invited Guests

for(let i=0; i<Guest_list.length ; i++){

    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nYou are still invited.\n\n \nThank you!\n')
}
// Guests Removed from arrays

Guest_list.splice(0 , 2);

console.log(Guest_list)