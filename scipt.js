function CalculateMust() {
	var heighT = document.getElementById("heighT").value;
	var weighT = document.getElementById("weighT").value;


	var bmi = (weighT / (heighT * heighT));
	var bmi = bmi.toFixed(2);

	if (bmi <= 18.5) {
		var bmiRes = 2;
	} else if (bmi <= 20) {
		var bmiRes = 1;
	} else if (bmi > 20) {
		var bmiRes = 0;
	} else { }

	var weightloss = document.getElementById("weightloss").value;
	weloss = (5 / 100);
	wloss = (10 / 100);

	if (weightloss < weloss * weighT) {
		var wlossRes = 0;
	} else if (weightloss >= weloss * weighT) {
		var wlossRes = 1;
	} else { }
	if (weightloss >= wloss * weighT) {
		var wlossRes = 2;
	} else { }

	var weightLossM = document.getElementById("weightLossM").value;

	weLoss = (5 / 100);
	wLoss = (10 / 100);

	if (weightLossM < weLoss * weighT) {
		var wLossRes = 0
	} else if (weightLossM >= weLoss * weighT) {
		var wLossRes = 1;
	} else { };
	if (weightLossM >= wLoss * weighT) {
		var wLossRes = 2;
	} else { }

	var malnutritionRisk = bmiRes + wlossRes + wLossRes;
	if (malnutritionRisk < 1) {
		var malnutritionRisk = "Low Risk";
		var message = "The service user is at LOW risk of Malnutrition and does not require further input from other professionals,such as Dietician.";
		document.getElementById("message").style = "color: #33cc33; font-weight: bold;";
		document.getElementById("malnutritionRisk").style = "color: #33cc33; font-weight: bold;";
	} else if (malnutritionRisk <= 2) {
		var malnutritionRisk = "Medium Risk";
		var message = "The service user is at MEDIUM risk of Malnutrition and will require further input and recomendations from other professionals,such as Dietician.";
		document.getElementById("message").style = "color: #ff751a; font-weight: bold;";
		document.getElementById("malnutritionRisk").style = "color: #ff751a; font-weight: bold;";
	} else if (malnutritionRisk <= 3) {
		var malnutritionRisk = "High Risk";
		var message = "The service user is at HIGH risk of Malnutrition and will require further input and recomendations from other professionals, such as Dietician.";
		document.getElementById("message").style = "color: #e60000; font-weight: bold";
		document.getElementById("malnutritionRisk").style = "color: #e60000; font-weight: bold";
	} else if (malnutritionRisk > 3) {
		var malnutritionRisk = "Very High Risk";
		var message = "The service user is at VERY HIGH risk of Malnutrition and must be monitored closely. It requires further input from other professionals,such as Dietician.";
		document.getElementById("message").style = "color: #e60000; font-weight: bold;";
		document.getElementById("malnutritionRisk").style = "color: #e60000; font-weight: bold;";
	} else { }

	document.getElementById("malnutritionRisk").innerHTML = malnutritionRisk;
	document.getElementById("bmi").innerHTML = bmi;
	document.getElementById("message").innerHTML = message;
}