var fs = require('fs');
var lines = 0;

function countLines(callback){
    fs.readFile(process.argv[2], 'utf8', function doneReading(err, data){
        lines += data.split('\n').length - 1;
	callback()    
    })
}

function printLines(){
    console.log(lines)
}


countLines(printLines)
