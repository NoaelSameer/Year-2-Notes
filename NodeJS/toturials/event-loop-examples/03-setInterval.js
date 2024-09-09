setInterval(() => {
    console.log("Hello World!")
}, 2000);
console.log("I will run first")

// Process stays alive unless you kill the process using ctrl-c
//Unexpected errors or logical errors can and will happen
// Be careful
// To avoid infinite looops, use clearInterval()