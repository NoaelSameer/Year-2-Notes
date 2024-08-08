// const drinks = [
//   "Soda",
//   "Coffee",
//   "Lemonade",
//   "Iced tea",
//   "Juice",
//   "Milkshake",
//   "Water",
//   "Milk",
//   "Beer",
//   "Martini",
//   "Margarita",
//   "Wine",
//   "Daiquari",
// ];

// let mDrinks = drinks.filter((drinks) => drinks.startsWith('M'));
// console.log(mDrinks);
 // Expected Outcome
// mDrinks = ['Milkshake', 'Milk', 'Martini', 'Margarita']

// I made it into a function so that I could use drinks.startsWith('M') method.


/////////////////////////////////////////////////////////////////////
// const colors = [
//   "red",
//   "black",
//   "white",
//   "blue",
//   "purple",
//   "orange",
//   "green",
//   "yellow",
// ];

// let newArray = colors.map((color,indexer) => {
//   // const {color} = colors
//   return {color: color, index: indexer};
// });

// console.log(newArray);


// I added in two paramters, color and index, and then I return the dictionary as a color: = paramter and then a index = paramter, and then return it.


// Expected Outcome
// [
//   { color: "red", index: 0 },
//   { color: "black", index: 1 },
//   { color: "white", index: 2 },
//   { color: "blue", index: 3 },
//   { color: "purple", index: 4 },
//   { color: "orange", index: 5 }
// ];

// ///////////////////////////////////////////////////////////
// const pets = ["snake", "dog", "cat", "fish", "lizard", "bird", "rabbit"];

// let petUp = pets.map((pet) => {
//   return pet.charAt(0).toUpperCase() + pet.slice(1)
// });

// console.log(petUp);

// I make the code look at the character at 0, and then convert it to an uppercase, and then add the rest of the string while erasing the 2nd character (which was the uncapitilized one)
// Expected Outcome
// pets = ["Snake", "Dog", "Cat", "Fish", "Lizard", "Bird", "Rabbit"];
///////////////////////////////////////////////////////////////

