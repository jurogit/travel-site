var $ = require("jquery");
import Person from "./modules/Person";

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes $0 in taxes.");
	}
}

var john = new Person("John Doe", "blue");
john.greet(); // output: Hello, my name is John Doe and my favorite color is blue.

var jane = new Adult("Jane Smith", "orange");
jane.greet(); // output: Hello, my name is Jane Smith and my favorite color is green.
jane.payTaxes();