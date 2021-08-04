module.exports = ({
	patientName,
	patientId,
	patientAddress,
	patientAge,
	patientGender,
	patientProblem,
	temp,
	pulse,
	bp,
	medications,
	hospitalAddress,
	hospitalEmail,
	hospitalName,
	hospitalNumber,
}) => {
	const today = new Date();

	function addMedications() {
		var html_data = "";
		for (let i = 0; i < medications.length; i++) {
			html_data += `<tr class="item">
			<td>${medications[i].medicine_name}:</td>
			<td>${medications[i].medicine_how}$</td>
			<td>${medications[i].medicine_total}$</td>
	 </tr>
  
`;
		}
		return html_data;
	}

	let medicationsDatas = addMedications();

	return `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link
				href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
				rel="stylesheet"
			/>
			<style>
				* {
					box-sizing: border-box;
					font-family: "Roboto", sans-serif;
				}
				.container {
					width: 80%;
					margin: auto;
				}
	
				.divider {
					height: 3px;
					background: black;
				}
	
				.header {
					display: flex;
				}
	
				.logo {
					flex: 1;
				}
	
				.patient-data {
					flex: 3;
				}
	
				.patient-basics {
				}
	
				.logo img {
					height: 100px;
				}
	
				.date {
					display: flex;
					flex-direction: row-reverse;
				}
	
				.middle-sign {
					display: flex;
					flex-direction: row-reverse;
				}
	
				.medicine-details-wrapper {
					display: flex;
				}
	
				.medicine-details {
					margin-left: 1rem;
				}
	
				.footer {
					display: flex;
					justify-content: center;
				}
			</style>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>WDM</title>
		</head>
		<body>
			<div class="container">
				<div class="header">
					<div class="logo">
						<img
							class="r-image"
							src="https://ulearning.com/wp-content/uploads/2017/03/rx-what-it-means.jpg"
							alt=""
						/>
					</div>
	
					<div class="patient-data">
						<div class="patient-basics">
							<p>Patient Name: RAJU SHRIVASTAV</p>
							<p>Patient Record No: 1234</p>
							<p>Patient Address: Hairan Galli,Parishan Road</p>
							<p>Patient DOB/AGE: 45</p>
							<p>Patient GENDER: Male</p>
						</div>
					</div>
				</div>
	
				<div class="divider"></div>
	
				<div class="date">DATE : 23/7/21</div>
	
				<div class="middle">
					<div class="middle-basic">
						<p>What's Up : Kindey mai Heart Attack</p>
						<p>Vitals : Temp:89.7 F ,Pulse:123 , BP 120/80</p>
					</div>
	
					<div class="middle-medications">
						<h4>MEDICATION(S)</h4>
						<div class="medicine-details-wrapper">
							<p>1</p>
							<div class="medicine-details">
								<p>Asparteme</p>
								<p>Take 2 Tabs for every hour,with Milk</p>
								<p>Dont Smoke and Consume Alcohol</p>
							</div>
						</div>
	
						<div class="medicine-details-wrapper">
							<p>2</p>
							<div class="medicine-details">
								<p>Glucomine</p>
								<p>Take 9 Tabs for every hour,with Milk</p>
								<p>Small Smoke and No Social Life</p>
							</div>
						</div>
	
						<div class="middle-sign">
							<p>Doctor Name</p>
						</div>
					</div>
				</div>
	
				<div class="divider"></div>
	
				<div class="footer">
					<div class="hospital-details">
						<p>Appolo Hospital</p>
						<p>Banahjar Hills</p>
						<p>Hyderabad</p>
						<p>Telanagana</p>
					</div>
				</div>
			</div>
		</body>
	</html>

  `;
};
