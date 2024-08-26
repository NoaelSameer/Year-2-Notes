function problem1(){
console.log("This is synchronous")
setTimeout(async()=>{
    console.log("This is asynchronous")
},2000)
console.log("End of Script")
}
// problem1()

function problem2(){
    let interval = setInterval(()=>{
        console.log("Repeating message...")
    },3000)
    setTimeout(()=>{
        clearInterval(interval)

    }, 10000)
}
// problem2()

function problem3(){
    
}