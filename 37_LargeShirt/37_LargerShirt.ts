// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.


function make_shirt(size:string ='Large',text:string ='I Love TypeScript'){
    console.log(`We are making 100 ${size} shirts with a message: ${text}`)
}
make_shirt();
make_shirt('Medium');
make_shirt('Small','TypeScript is Best');
