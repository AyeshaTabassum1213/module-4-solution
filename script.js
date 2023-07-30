// Define the array of names
var names = ["John", "Jane", "Jake", "Jill", "Alex", "Emily", "Bob"];

// Function to check if a name starts with 'J' or 'j'
function startsWithJ(name) {
  return name.charAt(0).toLowerCase() === "j";
}

// Function to generate the greeting message based on the name
function generateGreeting(name) {
  if (startsWithJ(name)) {
    return "Goodbye " + name;
  } else {
    return "Hello " + name;
  }
}

// Function to loop over the names array and print the greetings to the console
function printGreetings() {
  for (var i = 0; i < names.length; i++) {
    var greeting = generateGreeting(names[i]);
    console.log(greeting);
  }
}

// Call the function to print the greetings
printGreetings();
