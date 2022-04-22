process.stdout.write('prompt >');
process.stdin.on('data',(data)=>{
    const cmd= data.toString().trim();
    const splitCmd=cmd.split(" ");
    const newCmd=splitCmd[0];
    const argument=splitCmd[1];
    if (newCmd==='ls'){
        ls();
    }else if(newCmd==='pwd'){
        pwd();
    }else if (newCmd==='cat'){
        cat(argument);
    }
});

const pwd = require('./pwd');
const ls = require('./ls');
const cat=require('./cat')