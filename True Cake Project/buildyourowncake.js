function initialize()
		{
			cakeInputSponge = document.getElementById("cakesponge");
			cakeInputCream = document.getElementById("cakecream");
			
			cakeInputChoco = document.getElementById("cakechoco");
			cakeInputVall = document.getElementById("cakevall");
			cakeInputStraw = document.getElementById("cakestraw");
			
			cakeInputWork = document.getElementById("works");
			
			cakeCustom = document.getElementById("custom");
			
			cakeDisplay = document.getElementById("cakedisplay");
			cakeCheckout = document.getElementById("checkout");
		}
		function changeCake()
		{
			if (!cakeInputSponge.checked&&!cakeInputCream.checked)
			{
				alert('Your Cake has no base! Check the Inside of your cake!');
			}
			if (cakeInputSponge.checked)
			{
				cakeDisplay.src = "images/sponge only.jpg";
			}
			if (cakeInputCream.checked)
			{
				cakeDisplay.src = "images/ice cream.jpg";
			}
			if (cakeInputSponge.checked&&cakeInputCream.checked)
			{
				cakeDisplay.src = "images/cream and sponge.png";
			}
			
			if (cakeInputSponge.checked&&cakeInputChoco.checked)
			{
				cakeDisplay.src = "images/chocolate sponge.jpg";
			}
			if (cakeInputSponge.checked&&cakeInputVall.checked)
			{
				cakeDisplay.src = "images/vanilla sponge.jpg";
			}
			if (cakeInputSponge.checked&&cakeInputStraw.checked)
			{
				cakeDisplay.src = "images/strawberry sponge.jpg";
			}
			if (cakeInputSponge.checked&&cakeInputChoco.checked&&cakeInputVall.checked)
			{
				cakeDisplay.src = "images/chocolate vanilla sponge.jpg";
			}
			if (cakeInputSponge.checked&&cakeInputChoco.checked&&cakeInputStraw.checked)
			{
				cakeDisplay.src = "images/choco straw sponge.jpg";
			}
			if (cakeInputSponge.checked&&cakeInputChoco.checked&&cakeInputVall.checked&&cakeInputStraw.checked)
			{
				cakeDisplay.src = "images/choco straw vall sponge.jpg";
			}
			if (cakeInputCream.checked&&cakeInputChoco.checked)
			{
				cakeDisplay.src = "images/choco cream.jpg";
			}
			if (cakeInputCream.checked&&cakeInputVall.checked)
			{
				cakeDisplay.src = "images/ice cream.jpg";
			}
			if (cakeInputCream.checked&&cakeInputStraw.checked)
			{
				cakeDisplay.src = "images/straw cream.jpg";
			}
			if (cakeInputCream.checked&&cakeInputChoco.checked&&cakeInputVall.checked)
			{
				cakeDisplay.src = "images/chocolate vanilla cream.jpg";
			}
			if (cakeInputCream.checked&&cakeInputChoco.checked&&cakeInputStraw.checked)
			{
				cakeDisplay.src = "images/choco straw cream.jpg";
			}
			if (cakeInputCream.checked&&cakeInputVall.checked&&cakeInputStraw.checked)
			{
				cakeDisplay.src = "images/vall straw cream.jpg";
			}
			if (cakeInputCream.checked&&cakeInputChoco.checked&&cakeInputVall.checked&&cakeInputStraw.checked)
			{
				cakeDisplay.src = "images/choco straw vall cream.jpg";
			}
		}
		function calculateCost()
		{
			if (cakeInputWork.checked&&cakeInputSponge.checked||cakeInputWork.checked&&cakeInputCream.checked)
			{
				cakeCheckout.innerHTML = " 1 Custom Cake W. Works: $25.00";
			}
			else if (cakeInputSponge.checked||cakeInputCream.checked)
			{
				cakeCheckout.innerHTML = "1 Custom Cake: $20.00";
			}
			else if (!cakeCustom.value == "")
			{
				cakeCheckout.innerHTML = "1 Custom Cake: $20.00";
			}
			else 
			{
				cakeCheckout.innerHTML = "$0.00";
			}
		}
		