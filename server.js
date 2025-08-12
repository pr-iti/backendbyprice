const fs = require("fs");

fs.appendFile('/backendprince/greetings.txt','hii welcome to the new chapter of life',() => {
    console.log("file is created");
});

fs.copyFile('/backendprince/greetings.txt','/backendprince/extra/check.txt', () => {
    console.log("copied successfully");

});