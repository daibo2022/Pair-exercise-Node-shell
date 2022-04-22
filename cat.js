const fs=require('fs');

module.exports=function(fileName){

fs.readFile(fileName,'utf8',function(err,data){
    if (err)
      console.log(err);
    else {
    console.log(data)};
    process.stdout.write('\nprompt >');
}
);
}
