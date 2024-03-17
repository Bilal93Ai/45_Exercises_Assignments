// Store the location in the array. Make sure the array is not in alphabetical order.
let places :string[] = ['Malir', 'Korangi' , 'Lyari' , 'Nazimabad' , 'FBarea' , 'Saddar' , 'Kemari' , 'Saudabad'];


//Print your array in its original order.
console.log('Original ' + places);

//Print your array in alphabetical order without modifying the actual list.
console.log('Copy ' + [...places].sort());

//Show that your array is still in its original order by printing it.
console.log('Original ' + places);

//Print your arry in reverse alphabetical order without changing the order of the original list.
console.log('Copy ' + [...places].sort().reverse());

//Show that your array is still in its original order by printing it again.
console.log('Original ' + places);

//Reverse the order of your list. Print the array to show that its order has changed.
console.log('Original ' + places.reverse());

//Reverse the order of your list again. Print the list to show its bak to its orighinal order.
console.log('Original ' + places.reverse());

//Sort your array so its stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Original ' + places.sort());

//Sort to change your array so its stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('Original ' + places.sort().reverse());