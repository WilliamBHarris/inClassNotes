let callback = (num) => {
    if(num % 2 === 0){
      console.log('the number is even.');
    } else if(num % 2 != 'the number is even.'){
      console.log('the number is odd.');  
  } else {
      console.log('what is this?');
  }
}

let oddEven = callback;

for(i = 0; i <= 10; i++)

callback(i);

console.log(oddEven);

    // Test your callback function with the loop here!
    
    
    
    
 