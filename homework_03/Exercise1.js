const dns = require("dns");
const util = require("util");

dns.resolve4('www.mum.edu', (err, addresses)=>{
    if (err) throw err;
     console.log(`${addresses}`);
});


const dnsAsync = util.promisify(dns.resolve4);
dnsAsync('www.mum.edu').then(value => console.log(`Using Promise => ${value}`)).catch(reason => console.log('Error', reason));

async function assad() {
    try {
        let promiseDnsAddress = await dnsAsync('www.mum.edu');
        console.log(`Using async/await => ${promiseDnsAddress}`)
    }catch (e) {
        console.log('Error', e);
    }
}
assad();