"use strict";

$(function(){

	let dataObjectComp = {

		question:[
			{
				name: 'question_1',
				title: '1. Вопрос №1',
				id_1: 'question_1_1',
				question1: 'Вариант ответа №1',
				value1: 'value="1"',
				id_2: 'question_1_2',
				question2: 'Вариант ответа №2',
				value2: 'value="2"',
				id_3: 'question_1_3',
				question3: 'Вариант ответа №3 &radic;',
				value3: 'value="3"',
				answer: '1f232df121gf21d32df11g2df13'
			},
			{
				name: 'question_2',
				title: '2. Вопрос №2',
				id_1: 'question_2_1',
				question1: 'Вариант ответа №1',
				value1: 'value="1"',
				id_2: 'question_2_2',
				question2: 'Вариант ответа №2 &radic;',
				value2: 'value="2"',
				id_3: 'question_2_3',
				question3: 'Вариант ответа №3',
				value3: 'value="3"',
				answer: '1fd21gdf231g31f1d21g2f13gdf321ddf1'
			},
			{
				name: 'question_3',
				title: '3. Вопрос №3',
				id_1: 'question_3_1',
				question1: 'Вариант ответа №1 &radic;',
				value1: 'value="1"',
				id_2: 'question_3_2',
				question2: 'Вариант ответа №2',
				value2: 'value="2"',
				id_3: 'question_3_3',
				question3: 'Вариант ответа №3',
				value3: 'value="3"',
				answer: '1fd13f22g1d3f21f32d1g31fd3g1f3'
			}

		]
	};

localStorage.setItem('test', JSON.stringify(dataObjectComp));

let dataObject = localStorage.getItem('test');
dataObject = JSON.parse(dataObject);


let results = document.getElementById("results");
results.innerHTML = tmpl("item_tmpl", dataObject);

	function inspectionClick(e) {
		let rezult_1 = false;
		let rezult_2 = false;
		let rezult_3 = false;
		let inp1 = document.getElementsByName('question_1');
		let inp2 = document.getElementsByName('question_2');
		let inp3 = document.getElementsByName('question_3');



		for (let i = 0; i < inp1.length; i++) {
			if (inp1[i].type == "radio" && inp1[i].checked) {
				let r = dataObject.question[0].answer;
				r = r.split('');
				r = r[3];
				if (inp1[i].value === r) {
					rezult_1 = true;
				}
			}
		}

		for (let k = 0; k < inp2.length; k++) {
			if (inp2[k].type == "radio" && inp2[k].checked) {
				let tor = dataObject.question[1].answer;
				tor = tor.split('');
				tor = tor[3];
				if (inp2[k].value === tor) {
					rezult_2 = true;
				}
			}
		}

		for (let g = 0; g < inp3.length; g++) {
			if (inp3[g].type == "radio" && inp3[g].checked) {
				let das = dataObject.question[2].answer;
				das = das.split('');
				das = das[3];
				if (inp3[g].value === das) {
					rezult_3 = true;
				}
			}
		}

		let con;
		if (rezult_1 && rezult_2 && rezult_3) {
			con = "Тест Пройден!!!";
		} else {
			con = "Вы не прошли тест!";
		}
		return con;
	}


	$(".inspection").on('click', function (e){
		e.preventDefault();
		let rezult = inspectionClick();
		$(".modal-title").html(rezult);	
		$(".modal-content").fadeIn();
	});



	$(".btn-close").on('click', function (e){
		$(".modal-content").hide();
		location.reload();
	});

});

