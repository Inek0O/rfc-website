<div class="card" id="card-<?php echo $cardkey ?>">
	<div class="details">
		<div class="cardHeader">
			<?php echo $card["header"] ?>
		</div>
		<div class="button">
			<?php echo $card["button"] ?>
		</div>
		<div class="cardText">
			<?php echo $card["text"] ?>
		</div>
	</div>
</div>
<style> 
	#card-<?php echo $cardkey ?>::after {
	background-image: url(<?php echo $base . '/' . $card["image"] ?>);
	}
</style>
