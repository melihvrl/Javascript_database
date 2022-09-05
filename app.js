const start = new Date()
var mysql = require("mysql");

var baglanti = mysql.createConnection({//Define connection information
    host:"localhost",
    user:"root",
    pass:"",
    database:"hw2"
});

baglanti.connect(function(err){
    if(err) throw err;

    console.log("Connection Successful")
});

baglanti.query("SELECT * FROM information",function(err,result){//Pulling data from table information
    console.log(result);
    
});

var adddata = "INSERT INTO information (id,kullaniciadi,soyadi) values ('9','Oğuzhan','İçli')";//Adding data to the table
    baglanti.query(adddata,function(err){
    	if(err) throw err;
    	console.log("Data Added!");
    })

//Calculate elapsed time
const stop = new Date()

console.log(`Time Taken to execute = ${(stop - start)/1000} seconds`)

var process = require('process');
  
// Prints the output as an object
console.log(process.memoryUsage());