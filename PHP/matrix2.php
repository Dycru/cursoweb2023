<!DOCTYPE html>
<html>
<head>
	<title>Matrix Rain</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style>
		body {
			background-color: black;
		}

		.matrix {
			font-size: 16px;
			color: #0F0;
			font-family: monospace;
			text-align: center;
			padding-top: 50px;
			height: 100%;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: -1;
		}

		.matrix span {
			position: relative;
			animation: drop 0.5s linear infinite;
		}

		@keyframes drop {
			0% {
				top: -30px;
			}
			100% {
				top: 100%;
			}
		}
	</style>
</head>
<body>
	<div class="matrix">
		<?php
			//Generar los caracteres aleatorios para la lluvia
			for ($i=0; $i<200; $i++) {
				$code = rand(35, 122);
				echo "<span>" . chr($code) . "</span>";
			}
		?>
	</div>
</body>
</html>
