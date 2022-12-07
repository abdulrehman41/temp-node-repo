//os module

const os = require('os')
// info about current user
const users = os.userInfo()
console.log(users)

//system uptime in seconds
console.log(`The system uptime is: ${os.uptime()}`);
const currentOs = {
    name: os.type(),
    relese: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs);


