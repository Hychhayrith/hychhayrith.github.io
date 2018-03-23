console.log("Hello world");
const fs = require('fs');
const os = require('os');

var user = os.userInfo();
// console.log(user);
fs.appendFileSync("greeting.txt", `\nHello ${user.username}`);