var fs = require("fs");

module.exports = {
    action: function(){
        fs.readFile("log.txt", "utf-8", function(err, data){
            if(err) throw err;
            console.log(data);
        })
    }
}