const fs=require('fs');
module.exports=function(){
fs.readdir('./', 'utf8',(err, files) => {
    if (err)
      console.log(err);
    else {
      console.log("\nCurrent directory filenames:");
      files.forEach(file => {
        console.log(file);
      })
      process.stdout.write('\nprompt >');
    }
  })
 
};