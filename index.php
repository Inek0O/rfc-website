<?php
require('lib/router.php');
?><!DOCTYPE html>
<html>

<head>
	<meta charset = Utf8 >
	<link rel="stylesheet" href="./index.css">
	<title>Robotique First Côtière</title>
</head>

<body>

	<?php
		require("templates/header.php");
	?>

	<?php
		require("templates/pages/$current_page.php");
	?>

	<?php
		require("templates/footer.php");
	?>

</body>

</html>