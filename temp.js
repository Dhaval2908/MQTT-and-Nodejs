

function b(callback){
    //get data from db
    callback("Nishant", "Rupareliya")
}

b(function(fname,lname){
    console.log("****"+fname, lname)
})