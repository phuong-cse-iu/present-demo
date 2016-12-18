
var rect = require('./rectangle');


// function solveRect(width, height) {
// 	console.log("Solving for rectangle with width = " + width + " and height = " + height);
	
// 	rect(width, height, function(error, rectangle) {
// 		if (error) {
// 			console.log(error);
// 		} else {
// 			console.log("Area: " + rectangle.area());
// 			console.log("Paremeter: " + rectangle.paremeter());
// 		}
// 	});
// }

// function solveRect(width, height) {
// 	console.log("Solving for rectangle with width = " + width + " and height = " + height);
// 	if (width < 0 || height < 0) {
// 		console.log("Invalid rectangle");
// 	} else {
// 		console.log("Area: " + rect.area(width, height));
// 		console.log("Paremeter: " + rect.paremeter(width, height));
// 	}
// }

solveRect(2, 4);
solveRect(-3, 8);