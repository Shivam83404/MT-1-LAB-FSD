console.log("1. Program Started");

process.nextTick(() => {
    console.log("2. process.nextTick()");
});

setTimeout(() => {
    console.log("3. setTimeout()");
}, 2000);

setImmediate(() => {
    console.log("4. setImmediate()");
});
console.log("5.programm Ended");