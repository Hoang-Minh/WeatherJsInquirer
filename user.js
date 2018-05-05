var fs = require("fs");
var inquirer = require("inquirer");
var pmpt = inquirer.createPromptModule();
var weatherjs = require("weather-js");
var moment = require("moment");

var qs = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "location",
        message: "Please enter your current location: "
    },
]

module.exports = {
    action: function(){
        pmpt(qs).then(function(r){
            //console.log(r);
            var temp = "Name: " + r.name + ", Location: " + r.location + ", Date: " + moment().format('DD/MM/YYYY hh:mm') + "\n";
            fs.appendFile("log.txt", temp, "utf-8", function(err){
                if(err) throw err;
            })

            weatherjs.find({search: r.location, degreeType: "F"}, function(err, result){
                if(err) throw err;
                console.log(JSON.stringify(result, null, 2));
            })
        })
    }
}