const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, 'crud')
const filePath = `${dirPath}/mango.txt`;

//CREATE FILE
// fs.writeFileSync(filePath, 'This is a simple text files for CRUD fs')

//READ FILE
// fs.readFile(filePath, 'utf8', (err, item) => {
//     console.log(item);
// })

//UPDATE FILE
// fs.appendFile(filePath, ' and file name is mango.txt', (err) => {
//     if(!err) console.log("file is updated");
// })

//RENAME FILE
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if(!err) console.log("file is renamed");
// })

//DELETE FILE
fs.unlinkSync(`${dirPath}/fruit.txt`)