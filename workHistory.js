const workHistory = "<img src='maximus.svg' class='maximus'><br><strong>2018-2021 - Business Analyst/Project Coordinator</strong><br><br> After two different roles as a software developer, I wanted to expand my skillset to include business competency. I found this with MAXIMUS Canada, a company contracted by the BC Ministry of Health to upgrade and maintain critical health information systems. While this was a multi million dollar contract, I worked in a small primary team of 7. So in addition to my job title as Business Analyst, my responsibilities often included those of a Project Coordinator and Contract Analyst.<br><br>Governance and Relationship Management<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>></strong>&nbsp;Provided consultation on the interests, requirements, and compromise of both subcontractors and clients<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>></strong>&nbsp;Presented concise reports to communicate status, goals, and responsibilities of all stakeholders<br><br>Contract Management<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>></strong>&nbsp;Drafted over a dozen 6-7 figure Change Orders and coordinated joint executive approvals<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>></strong>&nbsp;Advised joint legal and technical teams to ensure all needs were sufficiently met both prior to and during CO execution<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>></strong>&nbsp;Analyzed and reported on progress against requirements per the master contract, ensuring accountability from all stakeholders<br><br>Financial Analysis<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>></strong>&nbsp;Created and implemented monitoring tools to track projected/actual costs of the program, projects, and COs<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>></strong>&nbsp;Produced various financial reports and statements catering to different levels of management as appropriate<br><br>Project Analysis<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>></strong>&nbsp;Created and implemented project status tracking tools, i.e., the acceptance criteria to track accountabilities and all outstanding &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; documents requiring signoff before go-live.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>></strong>&nbsp;Drafted project update reports on a weekly, bi-weekly, and monthly basis to monitor status of all working groups, issues, and risks<br><br><br><br><img src='SAP.png' class='SAP'><br><strong>2017 - Agile Developer</strong><br><br>With agile becoming increasingly popular, I wanted to learn it in a practical capacity. With SAP, I became very familiar with agile in a team responsible for developing SAP’s predictive analytics.<br><br><br><br><img src='UBC.png' class='UBC'><br><strong>2016 Junior Programmer Analyst<br><br>Though a brief stint I am proud of my work here which has also developed my skills as a script writer and windows process automation.<br><br><br><br><img src='GDMS1.png' class='GDMS'><br><strong>2016 Software Engineering Co-Op<br><br>As someone who had been (still am) interested in the military, I knew this gig would’ve been a great opportunity for me to learn more about the CAF in a software development capacity. I cannot get into specifics as my role required Secret clearance, but most of my work at GDMS supported mission critical technology used on the CP-140 Aurora aircraft used by the Royal Canadian Air Force. I was positioned during a unique time where the lead software developer had transferred to a different program, and many important responsibilities were given to me."

document.getElementById("mainPara").style.opacity = 0;
document.getElementById("mainPara").innerHTML = workHistory;
fadeIn("mainPara", 70);


function fadeIn(elementId, interval, callBack){
	let fadeTarget = document.getElementById(elementId);
	fadeTarget.style.opacity = 0;
	let fadeEffect = setInterval(function(){
		if (fadeTarget.style.opacity < 1) {
			fadeTarget.style.opacity =  parseFloat(fadeTarget.style.opacity) + 0.1;
		}
		else{
			clearInterval(fadeEffect);
			if (callBack){
				callBack(elementId);
			}
		}
	}, interval);
}

function fadeOut(elementId, interval, callBack){
	let fadeTarget = document.getElementById(elementId);
	fadeTarget.style.opacity = 1;
	let fadeEffect = setInterval(function(){
		if (fadeTarget.style.opacity > 0) {
			fadeTarget.style.opacity -= 0.1;
		}
		else{
			clearInterval(fadeEffect);
			if (callBack){
				callBack(elementId);
			}
		}
	}, interval);
}
