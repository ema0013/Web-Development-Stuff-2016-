<!DOCTYPE PHP>
<!-- Edwin Ma -->
<html>
	<head>
		<title></title>
		<style>
		h1
		{
			font:72px calibri;
		}
		p
		{
			font:20px calibri;
			text-align:center;
		}
		span
		{
			color:blue;
		}	
		img
		{
			display:block;
			margin: 0 auto;
		}
		</style>
		<script>

		</script>
	</head>
	
	<body>
		<?php
			$namef = $_POST['namef'];
			$namel = $_POST['namel'];
			$gender = $_POST['gender'];
			$evenOrOdd = ($_POST['Q10']/2);
			$answers = $_POST['Q1'].$_POST['Q2'].$_POST['Q3'].$_POST['Q4'].$_POST['Q5'].$_POST['Q6'].$_POST['Q7'].$_POST['Q8'].$_POST['Q9'].$_POST['Q10'];
			function g()
			{
				global $evenOrOdd;
				if (empty($_POST['firstquiz']))
				echo "The worse part is that this isn't even your first quiz. You must really like wasting your time.";
			
				if ($evenOrOdd == 1 || $evenOrOdd == 2)
				echo " If you are still reading this page, you really have to be an oddity of society.";
				else
				echo " At the very least, you are a capable individual of society.";
			}
			function troll()
			{
				global $evenOrOdd;
				if($evenOrOdd == 0.5)
					echo " <p>Here's a picture of a Troll.</p> <br/> <img src = 'images/troll.png' />";
				else if ($evenOrOdd == 1)
					echo " <p>Here's a picture of a Pepe.</p> <br/> <img src = 'images/pepe.jpg' />";
				else if ($evenOrOdd == 1.5)
					echo "<p>Here's a picture of Dat Boi.</p> <br/> <img src = 'images/Dat Boi.png' /> ";
				else
					echo "<p>Here's a picture of Bob Ross.</p> <br/> <img src = 'images/Bob Ross.png' /> ";
			}
			echo "<p>$namef $namel, Your personality is categorized as a $answers. But what is a $answers personality described as? Well, it should be clear by now that you answers have ABSOLUTELY NOTHING to do with your personality. The bigger question is why did you even bother to click the link to this quiz? <span> ";
			
			g();

			echo " </span>You have better, more productive things to do than answer some arbitrary quiz. You could have been the person to cure cancer, to solve world poverty. But unfortunately, you will no longer be defined as $namef $namel, but instead you will be forever known as $answers. You won't even be considered as a $gender, but you are forever christened as $answers.</p> <br/> <br/>";
			echo "<h1> Congragulations, $answers! You have officially wasted your time!</h1>";
			troll();
		?>
	</body>
</html> 