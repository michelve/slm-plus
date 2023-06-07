if(process.argv[2] === undefined){
    console.log("Argument required");
    return;
}
let version = process.argv[2];
const fs = require('fs');
console.log("Updating package version to "+version)
fs.readFile("./package.json",'utf8',(error, data) => {
    if (error) {
        console.error(error);
        return;
    }
    let jsonData = JSON.parse(data);
    jsonData.version = version;
    fs.writeFile("./package.json",JSON.stringify(jsonData, null,2),err=>(console.log(err)));
});