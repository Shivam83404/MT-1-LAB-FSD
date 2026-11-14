const fs = require('fs');

// Create / Write

fs.writeFileSync("C:\\Users\\satyam\\Desktop\\mernpro\\SERVER\\student.txt", "name: shivam");
console.log("File created successfully");




const data = fs.readFileSync("student.txt","utf-8");

console.log(" file content");
 console.log(data);
