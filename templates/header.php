<div class="cursor"></div>
<div class="cursor2"></div>
<script src="<?= $base ?>/index.js"></script>
<div id="haut">
    <div id="haut_contenu">
        <img id="logo_top" src="<?= $base ?>/images/TrefleFBlanc.png">
        <nav>
            <ul>
                <li><a class="menu" <?= $current_page == 'home' ? 'id="current"' : ''?> href="<?= $base ?>/home">Accueil</a></li>
                <li><a class="menu" <?= $current_page == 'team' ? 'id="current"' : ''?> href="<?= $base ?>/team">Équipe</a></li>
                <li><a class="menu" <?= $current_page == 'divisions' ? 'id="current"' : ''?> href="<?= $base ?>/divisions">Pôles</a></li>
                <li><a class="menu" <?= $current_page == 'progress' ? 'id="current"' : ''?> href="<?= $base ?>/progress">Progrès</a> </li>
                <li><a class="menu" <?= $current_page == 'contact' ? 'id="current"' : ''?> href="<?= $base ?>/contact">Contact</a></li>
            </ul>
        </nav>
    </div>
</div>