const {readFileSync, writeFileSync} = require('fs');

const first  = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.tx', 'utf8');

// console.log(first, second); 

writeFileSync('./content/result-sync.txt',`The created and merged files are ${first}<===>${second}`,{flag: 'a'});
