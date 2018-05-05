var inquirer = require("inquirer");
var user = require("./user.js");
var admin = require("./admin.js");
// Options:
// search:     location name or zipcode
// degreeType: F or C
var pmpt = inquirer.createPromptModule();

function Question(name, message) {
    this.type = "input",
    this.name = name;
    this.message = message;
}

pmpt([new Question("credential", "Are you a user or an admin? (U/A)")]).then(function (r) {
    if (r.credential === "U") {
        user.action()
    } else if (r.credential === "A") {
        admin.action();
    } else {
        console.log("Invalid choice. Please try again");
    }

    
})