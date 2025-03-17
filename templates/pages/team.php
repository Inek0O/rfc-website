<script src="<?= $base ?>/index.js"></script>

<div id="main">

	<div id="div_titre">
		<p id="titre_u" class="titre">ÉQUIPE</p>
		<!--p id="title2" class="titre">Bienvenue ! </p-->
	</div>

	<div class="parts_grey">
		<div class="parts_text">
			<h2 class="title2">
				Nos <a class="underline">Pôles</a>
			</h2>
			<br>
			<p>
				[Pôles]
			</p>
			<br>
		</div>
		<div class="div_image_parts">
  			<svg id="teamChart"></svg>
		</div>
	</div>	
	<br>
	<br>
    <div class="parts">
        <h2 class="title2">
            <a class="underline">Composition</a>
        </h2>
        <br>
        <p>
            Découvrez nos recrues !
        </p>
        <br>
        <div id="trombinoscope">
            <?php 
			   $cards = [
				[
					"header" => "Card n°1",
					"button" => "Button n°1",
					"text" => "Text n°1",
					"image" => "images/pennywise.png",
				],
				[
					"header" => "Card n°2",
					"button" => "Button n°2",
					"text" => "Text n°2",
					"image" => "images/CustomBG1.svg",
				],
				[
					"header" => "Card n°3",
					"button" => "Button n°3",
					"text" => "Text n°3",
					"image" => "images/pennywise.png",
				],
				[
					"header" => "Card n°4",
					"button" => "Button n°4",
					"text" => "Text n°4",
					"image" => "images/pennywise.png",
				],
			  	];
				foreach ($cards as $cardkey => $card) {
					require ("templates/cards/card.php");
				}
            ?>
        </div>
    </div>	
    <br>
    <br>
</div>
