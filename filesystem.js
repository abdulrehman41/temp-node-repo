const {readFileSync, writeFileSync} = require('fs')

const inputFile = readFileSync('./content/input.txt','utf-8')
const secondFile = readFileSync('./content/second.txt','utf-8')

console.log(inputFile);
console.log(secondFile);
writeFileSync('./content/third.txt',`hare is the result:  ${inputFile} second, ${secondFile}`)


// async filesystem

const {readFile, writeFile} = require('fs')

readFile('./content/input.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    else {
        const inputFile = result;
        readFile('./content/second.txt','utf-8',(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            else {
                const secondFile = result;
                writeFile('./content/third.txt',`Files Data: ${inputFile}, ${secondFile}`,(err,result)=>{
                    console.log(result);
                });
            }
        })
    }
})  