
var files=require('fs');
files.writeFile('Demo.txt','Welcome to NodeJS Hii file this is mathan kumar s',function(err){
    if(err !=undefined){
        console.log(err.message);
        console.log(err.code);
    }else{
        console.log('File written successfully. ');
    }
})

files.readFile('Demo.txt',function(err,data){
    if(err !=undefined){
        console.log(err.message);
        console.log(err.code);
    }else{
        console.log(data.toString());
    }
});
