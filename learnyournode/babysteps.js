var result = 0;
for (var i = 0; i < process.argv.length; i++){
    if (i > 1){
        result += Number(process.argv[i]);
    }
}
console.log(result)
