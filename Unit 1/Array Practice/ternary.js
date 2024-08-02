let x = 50
let y = 60

if(x > y){
    console.log("x is greater than y")
}
else{
    console.log("y is greater than x")
}
console.log((x > y) ? `x is greater than y` : `y is greater than x`)

book = {
    title: "Coding",
    pages: 123,
    cover: "hard-cover"
}
bookv2 = {
    ...book,
    pages: 140,
    author: "steve"
}
