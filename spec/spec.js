var dataObjectComp = require('../js/script2.js');

describe("dataObjectComp", function() {
	it("Checking1", function() {
		var	result = ['3'];
		expect(result[0]).toEqual(dataObjectComp.question[0].answer[3]);
	});

	it("Checking2", function() {
		var	result = ['2'];
		expect(result[0]).toEqual(dataObjectComp.question[1].answer[3]);
	});

	it("Checking3", function() {
		var	result = ['1'];
		expect(result[0]).toEqual(dataObjectComp.question[2].answer[3]);
	});

	it("Checking1not", function() {
		var	result = ['2'];
		expect(result[0]).not.toEqual(dataObjectComp.question[0].answer[3]);
	});

	it("Checking2not", function() {
		var	result = ['1'];
		expect(result[0]).not.toEqual(dataObjectComp.question[1].answer[3]);
	});

	it("Checking3not", function() {
		var	result = ['2'];
		expect(result[0]).not.toEqual(dataObjectComp.question[2].answer[3]);
	});

});


