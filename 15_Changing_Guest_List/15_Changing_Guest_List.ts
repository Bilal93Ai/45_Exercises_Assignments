
let Guest_list :string[] = ['Imran','Nawaz','Zardari'];

for(let i=0; i<Guest_list.length ; i++){

    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n \nThank you!\n')
}

let absent_guest :string = 'Imran' ;

let new_guest :string = 'Kamran Tessori' ;

Guest_list[0] = new_guest ;

for(let i=0; i<Guest_list.length ; i++){

    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n \nThank you!\n')
}

console.log(`Mr. ${absent_guest} is not coming to the party.`) ;