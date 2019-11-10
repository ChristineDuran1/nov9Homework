const m = moment();

console.log(m.format('[You made it to ] MMMM Do YYYY[!], h:mm:ss a'))

const clock = document.getElementById('clock');

setInterval(() => {
    console.log("Time is being updated every second");
    
    const now = moment();
}, 1000);