function initialize()
			{
				totalCost = document.getElementById("cost");
				cake1 = document.getElementById("cakeone");
				cake2 = document.getElementById("caketwo");
				cake3 = document.getElementById("cakethree");
				cake4 = document.getElementById("cakefour");
				cake5 = document.getElementById("cakefive");
				cake6 = document.getElementById("cakesix");
				cake7 = document.getElementById("cakeseven");
				cake8 = document.getElementById("cakeeight");
				cake9 = document.getElementById("cakenine");
				cake10 = document.getElementById("caketen");
				cake11 = document.getElementById("cakeeleven");
				cake12 = document.getElementById("caketwelve");
				cake13 = document.getElementById("cakethirteen");
				cake14 = document.getElementById("cakefourteen");
				cake15 = document.getElementById("cakefifteen");
				cake16 = document.getElementById("cakesixteen");
			}
			function checkforNegativesAndCalculateCost()
			{
				if (cake1.value < 0)
				{
					cake1.value = 0;
				}
				if (cake2.value < 0)
				{
					cake2.value = 0;
				}
				if (cake3.value < 0)
				{
					cake3.value = 0;
				}
				if (cake4.value < 0)
				{
					cake4.value = 0;
				}
				if (cake5.value < 0)
				{
					cake5.value = 0;
				}
				if (cake6.value < 0)
				{
					cake6.value = 0;
				}
				if (cake7.value < 0)
				{
					cake7.value = 0;
				}
				if (cake8.value < 0)
				{
					cake8.value = 0;
				}
				if (cake9.value < 0)
				{
					cake9.value = 0;
				}
				if (cake10.value < 0)
				{
					cake10.value = 0;
				}
				if (cake11.value < 0)
				{
					cake11.value = 0;
				}
				if (cake12.value < 0)
				{
					cake12.value = 0;
				}
				if (cake13.value < 0)
				{
					cake13.value = 0;
				}
				if (cake14.value < 0)
				{
					cake14.value = 0;
				}
				if (cake15.value < 0)
				{
					cake15.value = 0;
				}
				if (cake16.value < 0)
				{
					cake16.value = 0;
				}
				calculateCost();
			}
			function calculateCost()
			{
				var x = ((parseInt(cake1.value) + parseInt(cake5.value) + parseInt(cake9.value) + parseInt(cake13.value))*20);
				var y = ((parseInt(cake2.value) + parseInt(cake6.value) + parseInt(cake10.value) + parseInt(cake14.value))*30);
				var z = ((parseInt(cake3.value) + parseInt(cake7.value) + parseInt(cake11.value) + parseInt(cake15.value))*25);
				var a = ((parseInt(cake4.value) + parseInt(cake8.value) + parseInt(cake12.value) + parseInt(cake16.value))*35);
				totalCost.innerHTML = x+y+z+a;
			}