

// make a array of five or more usernames...includint the name 'admin'....print greeting to each user when they log in to the website....loop throuth the array, and print a greeting to each user...
//if username is admin', print a special message...and to the rest users print the other message

// Method 1

const userName: string[] = ['Admin','Khan Baba','Muffassa','Erick','Doland Trump'];

// for(let i = 0; i < userName.length; i++){
//     if (userName[i] === 'Admin'){
//         console.log('Hello Admin, would you like to see a status report?');
//     }
//     else{
//         console.log(`Hello ${userName[i]}, thank you for logging in again`);
//     }
// }


// Method 2

userName.forEach(restNames => {
    if(restNames === 'Admin'){
        console.log('Hello Admin, would you like to see the status report?');
    }
    else{
        console.log(`Hello ${restNames}, thank you for logging in again.`);
    }
})