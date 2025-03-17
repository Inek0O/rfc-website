<div id="main">

    <div id="div_titre">
		<p id="titre_u" class="titre">PÔLES<br></p>
	</div>
    <div class = "sous_titre">
        <p> 
           Ici, vous retrouverez une liste <br> (non-exaustive) de nos avancées au cours de l'année !
        </p>
    </div>

    <?php 
        $progress = [
        [
            "date" => "Card n°1",
            "texte" => "Text n°1",
            "image" => "images/pennywise.png",
        ],
        [
            "date" => "Card n°2",
            "texte" => "Text n°2",
            "image" => "images/CustomBG1.svg",
        ],
        [
            "date" => "Card n°3",
            "texte" => "Text n°3",
            "image" => "images/pennywise.png",
        ],
        [
            "date" => "Card n°4",
            "texte" => "Text n°4",
            "image" => "images/pennywise.png",
        ],
        ];
        foreach ($progress as $progkey => $progres) {
            require ("templates/progres.php");
        }
    ?>
</div>