const argv = require("./config");

const geocode = require("./geocode/geocode.js");

geocode.geocodeAddress(argv.address,(error,result)=>{
  if(error){
    console.log(error)
  }else{
    console.log(JSON.stringify(result,undefined,2))
  }
});

