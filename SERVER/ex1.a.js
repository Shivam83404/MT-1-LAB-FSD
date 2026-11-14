const EventEmitter = require("events");

 const MyEmitter =new EventEmitter() // Create custom EventEmitter

const Emitter = new EventEmitter();

Emitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
});

// emit event
Emitter.on("exit", () => {
    console.log("Program is exiting...");
});
                                                                                                                                                                                                                                                                                                                                                                                                                                        
// trigger greet event
Emitter.emit("greet", "Shivam");
 Emitter.eventNames("exit");
 
 